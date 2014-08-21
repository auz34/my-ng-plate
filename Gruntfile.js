'use strict';

module.exports = function (grunt) {

    /*
     Load npm tasks here.
     */
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-karma');

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-react');

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    var userConfig = require( './grunt.settings.js' );
    userConfig.pkg = grunt.file.readJSON('package.json');


    var taskConfig = require( './grunt.tasks.js' );
    grunt.initConfig( grunt.util._.extend( taskConfig, userConfig ) );

    /*
     Register tasks here
     */

    grunt.registerTask('checkAll',
        ['jshint','karma']);

    grunt.registerTask('buildAll', [
        'clean',
        'checkAll',
        'less',
        'react',
        'concat',
        'ngAnnotate',
        'uglify',
        'clean:tmp'
    ]);
};
