import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    entries: []
  },
  getters: {
    filteredResults: (state) => (term) => {
      return state.entries.filter(entry => ~entry.title.toLowerCase().indexOf(term.toLowerCase()))
    }
  },
  mutations: {
    setEntries (state, payload) {
      state.entries = payload.entries
    }
  },
  actions: {
    fetchEntries (context) {
      db.ref('entries').on('value', snap => {
        context.commit('setEntries', { entries: snap.val() })
      })
    }
  }
})