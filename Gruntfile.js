module.exports = function (grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        bookmarklet_wrapper: {
            umbracoBoorkmarklet: {
                // Target-specific file lists and/or options go here. 
                files: {
                    'dist/bookmarklet-dist.js': ['src/bookmarklet-src.js']
                }
            },
        },
    });
    grunt.registerTask('default', ['bookmarklet_wrapper']);
};