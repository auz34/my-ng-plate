'use strict';

module.exports = function (grunt) {

    /*
     Load npm tasks here.
     */

    var userConfig = require( './grunt.settings.js' );
    userConfig.pkg = grunt.file.readJSON('package.json');


    var taskConfig = require( './grunt.tasks.js' );
    grunt.initConfig( grunt.util._.extend( taskConfig, userConfig ) );

    /*
     Register tasks here
     */
};
