const {src, dest, watch, parallel} = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');

function html () {
   return src("src/*.html")
   .pipe(fileinclude())
   .pipe(dest("dist"));
}

function SASS() {
   return src('src/sass/styles.scss')
   .pipe(concat('styles.scss'))
   .pipe(sass())
   .pipe(dest('src/css'))
   .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
   }))
   .pipe(cssnano())
   .pipe(rename({ suffix: ".min" }))
   .pipe(dest("dist/css"))
   .pipe(browserSync.stream());
}

function scripts() {
   return src("src/js/*.js")
      .pipe(concat("scripts.js"))
      .pipe(uglify())
      .pipe(rename({ suffix: ".min" }))
      .pipe(dest("dist/js"))
      .pipe(browserSync.stream());
};

function imgs() {
   return src("src/img/**/*")
      .pipe(imagemin({
         progressive: true,
         svgoPlugins: [{ removeViewBox: false }],
         interlaced: true
      }))
      .pipe(dest("dist/img"))
      .pipe(browserSync.stream());
};

function browsersync() {
   browserSync.init({
      server: {
         baseDir: 'dist/'
      }
   });
}

function watcher() {
   watch(['src/**/*.html'], html);
   watch(['src/sass/**/*.scss'], SASS);
   watch (['src/js/*.js'], scripts);
   watch (['src/images/*.*'], imgs);
   watch(['src/*.html']).on('change', browserSync.reload);
}

exports.html = html;
exports.SASS = SASS;
exports.scripts = scripts;
exports.imgs = imgs;
exports.watcher = watcher;
exports.browsersync = browsersync;

exports.default = parallel(html, SASS, scripts, imgs, browsersync, watcher);
