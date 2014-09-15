var gulp = require('gulp'),
  nodemon = require('gulp-nodemon');

gulp.task('nodemon', function() {
  nodemon({
    script: "./index.js"
  });
});

gulp.task('default', ['nodemon']);
