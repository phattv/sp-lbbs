var gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  bowerFiles = require('main-bower-files'),
  browserSync = require('browser-sync'),
  historyApiFallback = require('connect-history-api-fallback');

var paths = {
  app: './app',
  assets: './app/assets',
  css: './app/assets/css',
  less: './app/assets/less',
  js: './app/assets/js'
};

var devScripts = [
  paths.app + '/*.js',
  paths.app + '/modules/**/*.js'
];

gulp.task('css', function () {
  return gulp
    .src(paths.less + '/app.less')
    .pipe($.less())
    .pipe(gulp.dest(paths.css))
});

gulp.task('js', function () {
  return gulp
    .src(bowerFiles())
    .pipe($.concat('vendor.js'))
    .pipe(gulp.dest(paths.js));
});

gulp.task('inject', ['js'], function () {
  return gulp
    .src(paths.app + '/index.html')
    .pipe($.inject(gulp.src(devScripts).pipe($.angularFilesort())))
    .pipe(gulp.dest(paths.app));
});

gulp.task('watch', function () {
  return gulp
    .watch(paths.less + '/*.less', ['css']);
});

// gulp.task('sync', function () {
//
//   // Configurations
//   browserSync.init({
//     server: {
//       baseDir: paths.app,
//       middleware: [historyApiFallback()]
//     }
//   });
//
//   // Watch html/css/js changes and reload the app
//   gulp.watch([
//     paths.app + '/**/*.html',
//     paths.css + '/app.css',
//     devScripts
//   ]).on('change', browserSync.reload)
// });

gulp.task('default', ['css', 'js', 'inject']);