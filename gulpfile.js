const gulp = require('gulp');
const sass = require('gulp-sass');
const shell = require('gulp-shell');
const { argv } = require('yargs');

const sassPath = '_dev/sass_files/lib/*.sass';


function compileSass() {
  return gulp.src('./_dev/sass_files/main.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./client'));
}

// =================== SASS ====================================================

function compileSass() {
  return gulp.src('./_dev/sass_files/main.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./client'));
}
// task
gulp.task('sass', () => {
  compileSass();
});
//
// =================== Watch  ==================================================
function watch() {
  gulp.watch(sassPath, compileSass);
}
// task
gulp.task('watch', watch);


// =================== Git  ====================================================

// function gitMessageHeading() {
//   let heading = ""
//   if(argv.s) {
//
//   }
// }



// =================== Shell Scripts  ==========================================


gulp.task('greet', () => {
  shell.task('`which git` add . && `which git` commit -m "test gulp commit"')();
})
// =================== Default =================================================
// just type `gulp` in the terminal to execute all the gulp tasks
gulp.task('default', gulp.series(compileSass, watch));
