module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
		    options: {
		      mangle: false
		    },
		    my_target: {
		      files: {
		        'dist/js/PopupService.min.js': ['src/js/PopupService.js']
		      }
		    }
		  }
	});

  // Load the plugin that provides the "uglify" task.

  // Default task(s).
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);

};