'use strict';

module.exports = {
    /**
     * This is a collection of file patterns that refer to our app code (the
     * `js` is all project javascript except of 3rd party .
     */
    app_files: {
        js: [ 'src/scripts/**/*.js', '!src/bower_components/**/*.js'],
        jsunit: [ 'test/spec/**/*.js' ],
        less: [ 'src/**/*.less' ],
        jsx: ['src/jsx/*.jsx'],
        compiledJsx: ['src/scripts/reactViews/*.jsx.js']
    },

    /**
     * The banner is the comment that is placed at the top of our compiled
     * source files. It is first processed as a Grunt template, where the `<%=`
     * pairs are evaluated based on this very configuration object.
     */
    meta: {
        bannerstrict:
            '/**\n' +
            ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' *\n' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed <%= pkg.licenses.type %> <<%= pkg.licenses.url %>>\n' +
            ' */\n' +
            '"use strict";',

        banner:
            '/**\n' +
            ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' *\n' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed <%= pkg.licenses.type %> <<%= pkg.licenses.url %>>\n' +
            ' */\n'
    },

    output: {
        concatenated: 'output/myNgPlate.js'
    }
};
