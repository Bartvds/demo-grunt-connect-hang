'use strict';

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
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

	grunt.registerTask('test', ['connect', 'task_fail']);
	grunt.registerTask('build', ['connect', 'task_pass']);

	// ui shortcuts
	grunt.registerTask('edit_01', ['test']);
	grunt.registerTask('edit_02', ['build']);
};
