import Vue from "vue"
import Vuex from "vuex"

import { HEROES } from "./mock-heroes"

Vue.use(Vuex)

/* eslint-disable no-new */
export const store = new Vuex.Store({
	strict: true,
	state: {
		heroes: HEROES
	},
	mutations: {
		add(state, name) {
			const nextId = state.heroes[ state.heroes.length - 1 ].id + 1
			state.heroes.push({ id: nextId, name })
		},
		remove(state, hero) {
			state.heroes.splice(state.heroes.findIndex(h => h === hero), 1)
		},
		update(state, params) {
			state.heroes.find(h => h.id === params.id).name = params.name
		}
	}
})
