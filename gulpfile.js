var gulp = require('gulp'),
  $ = require('gulp-load-plugins')();

gulp.task('css', function() {
  return gulp
    .src('./app/assets/less/app.less')
    .pipe($.less())
    .pipe(gulp.dest('./app/assets/css'))
});

gulp.task('js', function() {
  return gulp
    .src('./index.html')
    .pipe($.inject(gulp.src('./app/**/*.js').pipe($.angularFilesort())))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['css', 'js']);