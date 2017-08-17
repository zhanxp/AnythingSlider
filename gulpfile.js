var gulp = require('gulp');
var browserSync = require('browser-sync');
var less = require('gulp-less');

gulp.task('less', function() {
    gulp.src('css/LESS/*.less')
        .pipe(less())
        .pipe(gulp.dest('css/'));
});


gulp.task('watch', ['less'], function() {
    gulp.watch([
        './**/*.html',
        './**/*.js',
        './**/*.css'
    ], function(event) {
        browserSync.reload();
    });


    gulp.watch("./**/*.less", ['less'], function(event) {

    });
});

gulp.task('serve', ['watch'], function() {
    var baseDir = "./";
    var server = {
        baseDir: baseDir
    };
    browserSync.instance = browserSync.init({
        startPath: '/index.html',
        server: server,
        port: 3010,
        ui: {
            port: 3011
        },
        browser: 'default',
        ghostMode: false
    });
});

gulp.task('default', ['serve'], function() {
    console.log("it works!");
});