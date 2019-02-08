const gulp = require('gulp');
const sass = require('gulp-sass');
const shell = require('shelljs');
const { argv } = require('yargs');

// git info
const gitInfo = {
  user: shell.exec('`which git` config --list | grep "user.name"').split('=')[1].split('\n')[0],
  branch: shell.exec('`which git` branch | `which grep` "*"').stdout.split(' ')[1].split('\n')[0],
}
// paths
const watchPaths = {
  sass: '_dev/sass_files/lib/*.sass',
};


// =================== SASS ====================================================

function compileSass(done) {
  return gulp.src('./_dev/sass_files/main.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./client'));
    done();
}
// task
gulp.task('sass', compileSass);

// =================== Watch  ==================================================
function watch(done) {
  const { sass } = watchPaths;
  // add all watch tasks here
  gulp.watch(sass, compileSass);
  done();
}

// task
gulp.task('watch', watch);

// =================== Git  ====================================================

function gitMessageBuilder() {
  const { user, branch } = gitInfo;
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
  return `[BRANCH] ${branch} | [USER] ${user} :: ${heading} :: ${message}`;
}


function commitAndPush(done) {
  const { branch } = gitInfo;
  let gitJob = `\`which git\` add .`;
  gitJob += ` && \`which git\` commit --message "${gitMessageBuilder()}"`;
  gitJob += ` && \`which git\` push -u github ${branch}`;
  gitJob += ` && \`which git\` push -u heroku ${branch}`;
  shell.exec(gitJob);
  done();
}


gulp.task('push', gulp.series(compileSass, commitAndPush));

// =================== Default =================================================
// just type `gulp` in the terminal to execute all the gulp tasks
gulp.task('default', gulp.series(compileSass, watch));

//
