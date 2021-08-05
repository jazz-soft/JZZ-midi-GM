module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
        all: ['javascript/*.js']
    },
    assemble: {
      data: 'data',
      script: 'javascript/JZZ.midi.GM.js'
    },
    uglify: {
      javascript: {
        expand: true,
        cwd: 'javascript',
        src: '*.js',
        dest: 'minified'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('assemble', require('./data/assemble.js')(grunt));
  grunt.registerTask('default', ['assemble', 'jshint', 'uglify']);
};
