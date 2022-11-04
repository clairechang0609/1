module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/standard'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': import.meta.env.MODE === 'production' ? 'warn' : 'off',
		'no-debugger': import.meta.env.MODE === 'production' ? 'warn' : 'off',
		indent: [ 'error', 'tab' ],
		'no-tabs': 'off',
		semi: [ 'error', 'always' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'space-before-function-paren': [ 'error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		} ],
		'no-extend-native': 'off',
		eqeqeq: [ 'error', 'smart' ]
	}
};
