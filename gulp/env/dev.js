var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task("browser-sync", function(done) {
  browserSync({
    port: 8040,//Or whatever port you want for your application
    ui: {
      port: 8041 //Or whatever port you want for browsersync ui
    },
    server: {
      baseDir: "./site"
    },
    open: false
  });

  done();
});

gulp.task("watch", function() {
  gulp.watch("templates/**/*.pug", gulp.parallel("pug-reload"));
  gulp.watch(
    ["src/**/*.sass", "src/**/*.scss"],
    gulp.parallel("sass-stream")
  );

  // If changes happen in site then reload the browser.
  gulp
    .watch(["site/fonts/**/*", "site/images/**/*"])
    .on("change", browserSync.reload);

  // JS are compiled using webpack-stream with option watch set to true for performances reason.
  // So the script task never ends and we need to watch manually for changes on generated JS.
  gulp.watch("site/js/*.js").on("change", browserSync.reload);
});

gulp.task(
  "default",
  gulp.parallel("browser-sync", "watch", "sass", "pug", "script", "filesystem")
);
