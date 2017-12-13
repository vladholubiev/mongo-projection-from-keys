module.exports = () => {
	return {
		testFramework: 'jest',
		files: [
			'packages/package.json',
			'packages/index.js',
			'!packages/index.test.js'
		],
		tests: [
			'packages/index.test.js'
		],
		env: {
			type: 'node',
			runner: 'node'
		},
		setup(wallaby) {
			wallaby.testFramework.configure(require('./package.json').jest);
		}
	};
};
