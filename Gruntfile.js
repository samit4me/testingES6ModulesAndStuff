module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 1) Need compiling React's JSX templates into JavaScript
        //      before webpack, as it will throw errors
        //      before babel, as we are using es6 imports (which is done via webpack)
        // react: {
        //     dynamic_mappings: {
        //         files: [
        //             {
        //                 expand: true,
        //                 cwd: 'es6/',
        //                 src: ['**/*.jsx'],
        //                 dest: 'es6/',
        //                 ext: '.js'
        //             }
        //         ]
        //     }
        // },

        webpack: {
            dist: {
                entry: './es6/app.es6',
                output: {
                    path: 'es6',
                    filename: 'bundle.es6'
                },
                module: {
                    loaders: [
                        { test: /\.es6|\.js|\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' }
                    ]
                }
            }
        },

        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'es5/script.js': 'es6/bundle.es6'
                }
                // Howto: transpile and copy multiple files to a new dest
                // expand: true,
                // cwd: 'es6/',
                // src: ['**/*'],
                // dest: 'es5/',
                // ext: '.js'
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['webpack']);

};