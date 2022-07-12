module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{html,png,ico,svg,jpg,js,webmanifest}'
	],
	swDest: 'dist/service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};