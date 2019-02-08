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
  // add all watch tasks here
  gulp.watch(sassPath, compileSass);
}

// task
gulp.task('watch', watch);


// =================== Git  ====================================================

function gitMessageHeading() {
  // find current branch
  const currentBranch = shell.exec('`which git` branch | `which grep` "*"').stdout.split(' ')[1];
  //
  let heading = '';
  if(argv.s) {
    heading = 'STABLE'
  } else if(argv.b) {
    heading = 'BROKEN'
  } else if(argv.f) {
    heading = 'FEATURE'
  } else if(argv.x) {
    heading = 'HOTFIX'
  }
  return `${heading} | ${currentBranch} :: ${argv.m}`;
}


function commitAndPush() {
  let gitJob = `\`which git\` add .`;
  gitJob += `&& \`which git\` commit --message "${gitMessageHeading()}"`;
  gitJob += `&& \`which git\` push -u github master`;
  gitJob += `&& \`which git\` push -u heroku master`;
  return shell.exec(gitJob);
}

gulp.task('push', gulp.series(compileSass, commitAndPush));
// =================== Default =================================================
// just type `gulp` in the terminal to execute all the gulp tasks
gulp.task('default', gulp.series(compileSass, watch));
