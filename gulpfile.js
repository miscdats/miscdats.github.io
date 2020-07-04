// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
// }

// exports.default = defaultTask

const gulp = require('gulp');
const styles = require('./build/styles');
const scripts = require('./build/scripts');
const images = require('./build/images');
const sync = require('./build/browsersync');

[styles, scripts, images, sync].forEach(task => {
  task(gulp);
});

gulp.task('build', gulp.series(['styles', 'scripts', 'images', 'jekyll-build']));