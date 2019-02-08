const gulp = require('gulp');
const sass = require('gulp-sass');
const shell = require('shelljs');
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

function gitMessageHeading() {
  // find current branch
  const currentBranch = shell.exec('`which git` branch | `which grep` "*"').stdout.split(' ')[1];
  console.log('\nWorking branch: ', currentBranch);
  //
  let heading = '';
  if(argv.s) {
    heading = 'STABLE'
  } else if(argv.b) {
    heading = 'BROKEN'
  } else if(argv.f) {
    heading = 'FEATURE'
  } else if(argv.h) {
    heading = 'HOTFIX'
  }

  return `${heading} | ${currentBranch} :: ${argv.m}`;
}



// =================== Shell Scripts  ==========================================


gulp.task('push', () => {
  // console.log(argv);

  shell.exec(`\`which git\` add . && \`which git\` commit --message`);
})
// =================== Default =================================================
// just type `gulp` in the terminal to execute all the gulp tasks
gulp.task('default', gulp.series(compileSass, watch));
