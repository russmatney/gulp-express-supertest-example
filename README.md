gulp-express-supertest-example
==============================

Tutorial:

1. npm i --save express supertest gulp gulp-nodemon gulp-mocha
4. build index.js - see get work in browser, ~ 10 lines
5. write gulpfile w/ nodemon - ~ 7 lines. see live-reload work in terminal + browser
7. add 'default' task to gulpfile
8. write test/endpoint.spec - include first test (expect a 200) ~ 9 lines
10. add 'mocha' gulp task - `return gulp.src(), bail: false, reporter: nyan` ~ 6 lines
13. add 'mocha' to 'default' task - and it fails. What's going on here? E ADDR IN USE
15. need some ports and some envs.
16. set NODE_ENV, PORT via env({vars:{}}), pull PORT from process.env.PORT
18. set NODE_ENV, PORT via nodemon({env({})})
19. write 'watch' gulp task - gulp.watch([files], [tasks]) - now live-reload works, for tests and server

