module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    traceur:{
      custom:{
        files:{
          'build/': ['js/**/*.js']
        }
      }
    }
  });

// Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-traceur');

// Default task(s).
  grunt.registerTask('default', ['traceur']);
};
