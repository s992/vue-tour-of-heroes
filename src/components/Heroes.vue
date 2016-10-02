<template>
<div id="heroes">
	<h2>My Heroes</h2>
	<div>
		<label>Hero name:</label> <input v-model="heroName" />
		<button v-on:click="add(heroName)">Add</button>
	</div>
	<ul class="heroes">
		<li v-for="hero in heroes" v-on:click="onSelect(hero)" v-bind:class="{ selected: hero === selectedHero }">
			<span class="badge">{{ hero.id }}</span>
			<span>{{ hero.name }}</span>
			<button class="delete" v-on:click="remove(hero, $event)">x</button>
		</li>
	</ul>
	<div v-if="selectedHero">
		<h2>{{ selectedHero.name }} is my hero</h2>
		<button v-on:click="goToDetail()">View Details</button>
	</div>
</div>
</template>

<script>
import { mapState } from "vuex"

import { router } from "../router"

export default {
	computed: mapState({
		heroes: state => state.heroes
	}),
	data() {
		return {
			selectedHero: null,
			heroName: null
		}
	},
	methods: {
		onSelect(hero) {
			this.selectedHero = hero
		},
		goToDetail() {
			router.push(`detail/${this.selectedHero.id}`)
		},
		add(name) {
			this.$store.commit("add", name)
			this.heroName = null
		},
		remove(hero, event) {
			event.stopPropagation()

			if (hero === this.selectedHero) {
				this.selectedHero = null
			}

			this.$store.commit("remove", hero)
		}
	}
}
</script>

<style scoped>
.selected {
	background-color: #cfd8dc !important;
	color: white;
}

.heroes {
	margin: 0 0 2em 0;
	list-style-type: none;
	padding: 0;
	width: 15em;
}

.heroes li {
	cursor: pointer;
	position: relative;
	left: 0;
	background-color: #eee;
	margin: 0.5em;
	padding: 0.3em 0;
	height: 1.6em;
	border-radius: 4px;
}

.heroes li.selected:hover {
	background-color: #bbd8dc !important;
	color: white;
}

.heroes li:hover {
	color: #607d8b;
	background-color: #ddd;
	left: 0.1em;
}

.heroes .text {
	position: relative;
	top: -3px;
}

.heroes .badge {
	display: inline-block;
	font-size: small;
	color: white;
	padding: 0.8em 0.7em 0 0.7em;
	background-color: #607d8b;
	line-height: 1em;
	position: relative;
	left: -1px;
	top: -4px;
	height: 1.8em;
	margin-right: 0.8em;
	border-radius: 4px 0 0 4px;
}

button.delete {
	float:right;
	margin-top: 2px;
	margin-right: .8em;
	background-color: gray !important;
	color:white;
}
</style>
