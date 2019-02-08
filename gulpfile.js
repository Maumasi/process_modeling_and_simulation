const gulp = require('gulp');
const sass = require('gulp-sass');
const shell = require('shelljs');
const { argv } = require('yargs');

const sassPath = '_dev/sass_files/lib/*.sass';


function compileSass(done) {
  return gulp.src('./_dev/sass_files/main.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./client'));
    done();
}

// =================== SASS ====================================================

function compileSass(done) {
  return gulp.src('./_dev/sass_files/main.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./client'));
    done();
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

function gitMessageBuilder() {
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
  } else {
    heading = 'AUTO-COMMIT';
  }

  let message = argv.m;

  if(!argv.m) {
    message = 'no developer message';
  }
  return `${heading} | ${currentBranch} :: ${message}`;
}


function commitAndPush(done) {
  // gulp.series(compileSass)
  let gitJob = `\`which git\` add .`;
  gitJob += `&& \`which git\` commit --message "${gitMessageBuilder()}"`;
  gitJob += `&& \`which git\` push -u github master`;
  gitJob += `&& \`which git\` push -u heroku master`;
  shell.exec(gitJob);
  done();
}

gulp.task('push', gulp.series(compileSass, commitAndPush));
// =================== Default =================================================
// just type `gulp` in the terminal to execute all the gulp tasks
gulp.task('default', gulp.series(compileSass, watch));
