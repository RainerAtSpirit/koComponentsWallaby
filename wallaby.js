var wallabyWebpack = require('wallaby-webpack');
var webpackPostprocessor = wallabyWebpack({});

module.exports = function() {

    return {
        testFramework: 'mocha',
        files: [
            {pattern: 'node_modules/chai/chai.js', instrument: false},
            {pattern: 'bower_components/jquery/dist/jquery.min.js', "instrument": false },
            {pattern: 'bower_components/knockout/dist/knockout.js', "instrument": false },
            {pattern: 'src/**/*.js', load: false},
            // load all .js\html files
            {pattern: 'src/**/*.html', load: false},
            {pattern: '!src/**/*Spec.js', load: false}
        ],

        tests: [
            {pattern: 'src/**/*Spec.js', load: false}
        ],

        preprocessors: {},

        postprocessor: webpackPostprocessor,

        bootstrap: function() {
            var mocha = wallaby.testFramework;
            mocha.ui('bdd');

            window.assert = chai.assert;
            window.expect = chai.expect;


            window.__moduleBundler.loadTests();
        },

        debug: false
    };
};