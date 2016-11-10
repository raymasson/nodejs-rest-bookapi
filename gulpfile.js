var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    env = require('gulp-env');

gulp.task('default', function () {
    nodemon
        ({
            script: 'app.js',
            ext: 'js',
            env: {
                PORT: 5000
            },
            ignore: ['./node_modules/**']
        })
        .on('restart', function () {
            console.log('Restarting');
        });
});
