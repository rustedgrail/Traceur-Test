module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig
    traceur:
      custom:
        files:
          'build/': ['js/**/*.js']
    pkg: grunt.file.readJSON 'package.json'

# Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks 'grunt-traceur'

# Default task(s).
  grunt.registerTask 'default', ['traceur']
