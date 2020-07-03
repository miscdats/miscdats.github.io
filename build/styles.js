const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const scssPath = '_styles/*.scss';
const destPath = '_site/css';

module.exports = gulp => {
  gulp.task('styles', () => {
    return gulp
      .src(scssPath)
      .pipe(
        sass({
          includePaths: ['styles'],
          outputStyle: 'expanded',
        })
      )
      .pipe(
        prefix({
          overrideBrowserslist: ['last 2 versions'],
          cascade: false,
        })
      )
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest(destPath))
      .pipe(gulp.dest('styles'));
  });
};
