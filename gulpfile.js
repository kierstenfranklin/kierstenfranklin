var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./www/scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./www'));
});
gulp.task('default', function() {
  console.log('word');
});
