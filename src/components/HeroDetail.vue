<template>
<div v-if="hero.id">
	<h2>{{ hero.name }} details!</h2>
	<div>
		<label>id: </label>{{ hero.id }}
	</div>
	<div>
		<label>name: </label>
		<input v-model="hero.name" placeholder="name">
	</div>
	<button v-on:click="save">Save</button>
	<button v-on:click="goBack">Back</button>
</div>
</template>

<script>
import { router } from "../router"

export default {
	computed: {
		// doesn't look like i can use mapState here because we need this.$route
		hero() {
			// binding our hero to a new object because i don't want to commit state changes until the user hits save
			return Object.assign({}, this.$store.state.heroes.find(h => h.id === +this.$route.params.id))
		}
	},
	methods: {
		save() {
			this.$store.commit("update", { id: this.hero.id, name: this.hero.name })
		},
		goBack() {
			router.go(-1)
		}
	}
}
</script>

<style scoped>
label {
	display: inline-block;
	width: 3em;
	margin: .5em 0;
	color: #607D8B;
	font-weight: bold;
}
input {
	height: 2em;
	font-size: 1em;
	padding-left: .4em;
}
button {
	margin-top: 20px;
	font-family: Arial;
	background-color: #eee;
	border: none;
	padding: 5px 10px;
	border-radius: 4px;
	cursor: pointer; cursor: hand;
}
button:hover {
	background-color: #cfd8dc;
}
button:disabled {
	background-color: #eee;
	color: #ccc;
	cursor: auto;
}
</style>
