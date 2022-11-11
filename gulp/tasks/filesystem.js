var gulp = require("gulp");
var webpack = require("webpack-stream");

gulp.task("filesystem", function() {
  return gulp
    .src("./src/assets/**")
    .pipe(gulp.dest("./site/assets/"));
});