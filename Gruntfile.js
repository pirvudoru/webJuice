module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      src: [
        'node_modules/requirejs/require.js',
        'app.js'
      ],
      options: {
        specs: 'spec/**/*Spec.js',
        helpers: 'spec/*Helper.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
};