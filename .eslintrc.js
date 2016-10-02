module.exports = {
	root: true,
	parser: "babel-eslint",
	parserOptions: {
		sourceType: "module"
	},
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	extends: "standard",
	// required to lint *.vue files
	plugins: [
		"html",
		"vuefix",
		"vue"
	],
	// add your custom rules here
	"rules": {
		// allow paren-less arrow functions
		"arrow-parens": [ "error", "as-needed" ],
		// allow async-await
		"generator-star-spacing": 0,
		// allow debugger during development
		"no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
		"indent": [ "error", "tab" ],
		"quotes": [ "error", "double", { "allowTemplateLiterals": true } ],
		"no-tabs": 0,
		"space-before-function-paren": [ "error", "never" ]
	}
}
