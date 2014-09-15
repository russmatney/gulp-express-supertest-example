var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  mocha = require('gulp-mocha');

gulp.task('nodemon', function() {
  nodemon({
    script: "./index.js"
  });
});

gulp.task('mocha', function() {
  return gulp.src('test/*.spec.js')
    .pipe(mocha({
      bail: false,
      reporter: "nyan"
    }));
});

gulp.task('default', ['nodemon']);
