// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
// }

// exports.default = defaultTask

const gulp = require('gulp');
const scripts = require('./build/scripts');
const images = require('./build/images');
const sync = require('./build/browsersync');
const sass = require('./build/styles');

[sass, scripts, images, sync].forEach(task => {
  task(gulp);
});

gulp.task('build', gulp.series(['sass', 'scripts', 'images', 'jekyll-build']));