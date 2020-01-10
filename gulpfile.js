var gulp = require("gulp");
var ts = require("gulp-typescript");
var notify = require("gulp-notify");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("tsc", function() {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"))
    .pipe(notify("Scripts Compiled"));
});

gulp.task("watch", function() {
  gulp.watch("src/*.ts", gulp.series("tsc"));
});

gulp.task("default", gulp.series("tsc", "watch"));
