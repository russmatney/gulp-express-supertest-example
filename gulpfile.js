var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  mocha = require('gulp-mocha'),
  env = require('gulp-env');

gulp.task('nodemon', function() {
  nodemon({
    script: "./index.js",
    env: {
      NODE_ENV: 'development',
      PORT: '3000'
    }
  });
});

gulp.task('watch', function(){
  gulp.watch(
    ['index.js', 'test/*.js'],
    ['mocha']
  );
});

gulp.task('mocha', function() {
  env({
    vars: {
      NODE_ENV: 'testing',
      PORT: 3001
    }
  });
  return gulp.src('test/*.spec.js')
    .pipe(mocha({
      bail: false,
      reporter: "nyan"
    }).on('error', function(){})
      //do nothing
    );
});

gulp.task('default', ['nodemon', 'mocha', 'watch']);
