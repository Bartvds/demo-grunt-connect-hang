'use strict';

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
		jshint: {
			options: grunt.file.readJSON('.jshintrc'),
			all: [
				'Gruntfile.js',
				'lib/**/*.js',
				'tasks/**/*.js'
			]
		},
		connect: {
			run: {
				options: {
					port: 9090,
					base: 'public/'
				}
			}
		}
	});

	grunt.registerTask('task_pass', function () {
		var done = this.async();
		setTimeout(function () {
			done(true);
		}, 500);
	});

	grunt.registerTask('task_fail', function () {
		var done = this.async();
		setTimeout(function () {
			done(false);
		}, 500);
	});

	grunt.registerTask('end', function () {
		grunt.log.writeln('this is the end');
	});

	grunt.registerTask('setup', ['jshint', 'connect']);

	grunt.registerTask('hang', ['setup', 'task_fail']);
	grunt.registerTask('pass', ['setup', 'task_pass']);
};
