module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      vendor: [
        'node_modules/requirejs/require.js'
      ],
      src: 'app.js',
      options: {
        specs: 'spec/**/*Spec.js',
        helpers: 'spec/*Helper.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
};