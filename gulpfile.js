const gulp = require('gulp');
const sass = require('gulp-sass');

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

// =================== Default =================================================
// just type `gulp` in the terminal to execute all the gulp tasks
gulp.task('default', gulp.series(compileSass, watch));
