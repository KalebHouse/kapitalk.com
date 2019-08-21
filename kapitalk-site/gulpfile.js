// gulpfile.js

var gulp = require('gulp');
var sass = require('gulp-sass');

var sassFiles = 'stylesheets/sass/**/*.scss',
    sassMaster = 'stylesheets/sass/all.scss'
    cssDest = 'stylesheets/css/';

gulp.task('compile-css', function() {
    return gulp.src(sassMaster)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function() {
    gulp.watch(sassFiles, gulp.series('compile-css'));
});
