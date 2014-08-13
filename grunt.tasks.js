'use strict';

module.exports = {
// Watches files for changes and runs tasks based on the changed files
    watch: {
        /**
         * When our JavaScript source files change, we want to run lint them and
         * run our unit tests.
         */
        jssrc: {
            files: ['<%= app_files.js %>'],
            tasks: [ 'jshint:src']
        },

        jsTest: {
            files: ['<%= app_files.jsunit %>'],
            tasks: ['jshint:src', 'karma']
        }
    },
    jshint: {
        src: {
            src: ['<%= app_files.js %>'],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },
        test: {
            src: ['<%= app_files.jsunit %>'],
            options: {
                jshintrc: 'test/.jshintrc',
                reporter: require('jshint-stylish')
            }
        },
        grunt: {
            src: ['Gruntfile.js', 'grunt.settings.js', 'grunt.tasks.js'],
            options: {
                node: true,
                esnext: true,
                bitwise: true,
                camelcase: false,
                curly: true,
                eqeqeq: true,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                quotmark: 'single',
                regexp: true,
                undef: true,
                strict: true,
                trailing: true,
                smarttabs: true,
                globals: {}
            }
        }
    },

    // Test settings
    karma: {
        unit: {
            configFile: 'karma.conf.js',
            singleRun: true
        }
    },

    /**
     * `grunt-contrib-less` handles our LESS compilation and uglification automatically.
     * We include each file separately without any wildcards because less files can import each others
     * and there is no sense to build less file designed to be imported.
     */
    less: {
        development: {
            files: {
                'src/css/main.css': 'src/less/main.less'
            }
        }
    }
};
