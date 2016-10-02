import VueRouter from "vue-router"

import Dashboard from "./components/Dashboard"
import Heroes from "./components/Heroes"
import HeroDetail from "./components/HeroDetail"

/* eslint-disable no-new */
export const router = new VueRouter({
	routes: [
		{ path: "/dashboard", component: Dashboard },
		{ path: "/heroes", component: Heroes },
		{ path: "/detail/:id", component: HeroDetail },
		{ path: "*", redirect: "/dashboard" }
	]
})
