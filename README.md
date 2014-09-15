gulp-express-supertest-example
==============================

Tutorial:

1. npm init - build npm file
2. git init - start version control
3. npm i --save express supertest gulp gulp-nodemon gulp-mocha
4. build index.js - see get work in browser, ~ 10 lines
5. npm i --save gulp gulp-nodemon
6. write gulpfile w/ nodemon - ~ 7 lines. see live-reload work in terminal + browser
7. add 'default' task to gulpfile
8. npm i --save supertest
9. write test/endpoint.spec - include first test (expect a 200) ~ 9 lines
10. should run fine w/ mocha test/endpoint.spec.js (see it fail, see it pass)
11. npm i --save gulp-mocha
12. add 'mocha' gulp task - `return gulp.src(), bail: false, reporter: nyan` ~ 6 lines
13. see it pass, see it fail
14. add 'mocha' to 'default' task - and it fails. What's going on here? E ADDR IN USE
15. need some ports and some envs.
16. npm i --save gulp-env
17. set NODE_ENV, PORT via env({vars:{}}), pull PORT from process.env.PORT
18. set NODE_ENV, PORT via nodemon({env({})})
19. write 'watch' gulp task - gulp.watch([files], [tasks]) - now live-reload works, for tests and server
20. more specific supertest testing

