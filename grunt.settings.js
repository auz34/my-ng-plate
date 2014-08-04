'use strict';

module.exports = {
    /**
     * This is a collection of file patterns that refer to our app code (the
     * `js` is all project javascript except of 3rd party .
     */
    app_files: {
        js: [ 'src/scripts/**/*.js', '!src/bower_components/**/*.js']
    }
};
