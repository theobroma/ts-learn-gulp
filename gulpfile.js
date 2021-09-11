var del = require('del');
var gulp = require('gulp');
var notify = require('gulp-notify');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('tsc', function() {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('dist'));
    // .pipe(notify("Scripts Compiled"));
});

gulp.task('clean', function() {
    return del('dist/**', { force: true });
});

gulp.task('watch', function() {
    gulp.watch('src/*.ts', gulp.series('tsc'));
});

// gulp.task("default", gulp.series("clean"));
gulp.task('default', gulp.series('clean', 'tsc', 'watch'));