const imagemin = require('gulp-imagemin');

const imgPath = 'images/**/*.+(png|jpg|gif|svg)';
const destPath = '_site/images';

module.exports = gulp => {
  gulp.task('images', () => {
    return gulp
      .src(imgPath)
      .pipe(imagemin())
      .pipe(gulp.dest(destPath));
  });
};
