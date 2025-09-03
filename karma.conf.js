module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        concurrency: 1,

        files: [
            {
                pattern: 'tests/data/**/*',
                included: false,
                served: true,
            },

            'dist/index.min.js',
            'tests/bench.js',
            'tests/index.spec.js',
        ],

        exclude: [],
        preprocessors: {},
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        client: {
            captureConsole: true,
        },
        autoWatch: true,
        browsers: ['chrome'],
        customLaunchers: {
            chrome: {
                base: 'Chrome',
                flags: [
                    '--no-sandbox --remote-debugging-port=9876 --window-size=1024,768',
                ],
                debug: true,
            },
        },

        singleRun: true,
        browserNoActivityTimeout: 60000,
    });
};
