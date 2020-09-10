// Load plugins
const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync').create();
const cssnano = require('cssnano');
const del = require('del');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const htmlmin = require("gulp-htmlmin");

const paths = {
  source: './src',
  build: './'
};

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: `${paths.build}/`
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
// function browserSyncReload(done) {
//   browsersync.reload();
//   done();
// }

// Clean assets
function clean() {
  return del(['dist']);
}

// CSS task
function css() {
  return gulp
    .src(`${paths.source}/scss/main.scss`)
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest(paths.build))
    .pipe(browsersync.stream());
}

function html() {
  return (
    gulp
      .src([`${paths.source}/index.html`])
      .pipe(htmlmin())
      .pipe(gulp.dest(paths.build))
      .pipe(browsersync.stream())
  );
}

// Watch files
function watchFiles() {
  build();
  gulp.watch(`${paths.source}/scss/**/*`, css);
  gulp.watch(`${paths.source}/index.html`, html);
}

// define complex tasks
const build = gulp.parallel(css, html);
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.css = css;
exports.html = html;
exports.clean = clean;
exports.build = gulp.series(clean, build);
exports.watch = watch;
exports.default = build;
