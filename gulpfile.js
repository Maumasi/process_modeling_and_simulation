const gulp = require('gulp');
const sass = require('gulp-sass');
const shell = require('shelljs');
const { argv } = require('yargs');

// paths
const sassPath = '_dev/sass_files/lib/*.sass';


// git info
function gitInfo() {
  const branch = shell.exec('`which git` branch | `which grep` "*"').stdout.split(' ')[1];
  const user = shell.exec('`which git` config --list | grep "user.name"').split('=')[1];
  return {
    branch,
    user
  };
}






// =================== SASS ====================================================

function compileSass(done) {
  return gulp.src('./_dev/sass_files/main.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./client'));
    done();
}
// task
gulp.task('sass', compileSass);
//
// =================== Watch  ==================================================
function watch(done) {
  // add all watch tasks here
  gulp.watch(sassPath, compileSass);
  done();
}

// task
gulp.task('watch', watch);


// =================== Git  ====================================================

function gitMessageBuilder() {
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
  const { branch, user } = gitInfo();
  return `[BRANCH] ${branch} | [USER] ${user} :: ${heading} :: ${message}`;
}


function commitAndPush(done) {
  const { branch } = gitInfo();
  let gitJob = `\`which git\` add .`;
  gitJob += `&& \`which git\` commit --message "${gitMessageBuilder()}"`;
  gitJob += `&& \`which git\` push -u github ${branch}`;
  gitJob += `&& \`which git\` push -u heroku ${branch}`;
  shell.exec(gitJob);
  done();
}


gulp.task('push', gulp.series(compileSass, commitAndPush));
// =================== Default =================================================
// just type `gulp` in the terminal to execute all the gulp tasks
gulp.task('default', gulp.series(compileSass, watch));
