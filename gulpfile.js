var del = require('del');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('tsc', function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  //   return del('dist/**', { force: true }); old version6
  return del.deleteAsync(['dist/**', '!dist']);
});

gulp.task('watch', function () {
  gulp.watch('src/*.ts', gulp.series('tsc'));
});

// gulp.task('default', gulp.series('clean'));
gulp.task('default', gulp.series('clean', 'tsc', 'watch'));
