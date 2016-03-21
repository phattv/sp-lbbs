var gulp = require('gulp'),
  $ = require('gulp-load-plugins')();

gulp.task('css', function() {
  return gulp
    .src('./app/assets/less/app.less')
    .pipe($.less())
    .pipe(gulp.dest('./app/assets/css'))
});

gulp.task('default', ['css']);