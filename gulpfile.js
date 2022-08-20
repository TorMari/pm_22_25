import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import gulpSass from 'gulp-sass';
import cssnano from 'gulp-cssnano';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import dartSass from 'sass';
const sass = gulpSass(dartSass);
import browsersSync from 'browser-sync';

gulp.task("browsersync", async function() {
   browsersSync.init({
      server: {
         baseDir: 'src/'
      }
   });
});

gulp.task("html", async function () {
   return gulp.src("src/html/*.html")
      .pipe(gulp.dest("dist"));
});

gulp.task("sass", async function () {
   return gulp.src("src/sass/*.sass")
      .pipe(concat('styles.sass'))
      .pipe(sass())
      .pipe(autoprefixer({
         overrideBrowserslist: ['last 2 versions'],
         cascade: false
      }))
      .pipe(cssnano())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest("dist/css"))
      .pipe(browsersSync.stream());
});

gulp.task("scripts", async function () {
   return gulp.src("src / js / *. js") //вихідна директорія файлів
      .pipe(concat('scripts.js')) // конкатенація js-файлів в один
      .pipe(uglify()) //стиснення коду
      .pipe(rename({ suffix: '.min' })) //перейменування файлу з
      //приставкою .min
      .pipe(gulp.dest("dist / js")) // директорія продакшена
      .pipe(browsersSync.stream());
});

gulp.task("imgs", async function () {
   return gulp.src("src/img/**/*")
      .pipe(imagemin({
         progressive: true,
         svgoPlugins: [{ removeViewBox: false }],
         interlaced: true
      }))
      .pipe(gulp.dest("dist/img"))
});


gulp.task("watch", async function () {
   gulp.watch("src/html/**/*.html", gulp.parallel("html"));
   gulp.watch("src/js/**/*.js", gulp.parallel("scripts"));
   gulp.watch("src/sass/**/*.sass", gulp.parallel("sass"));
   gulp.watch("src/img/**/*", gulp.parallel("imgs"));
   gulp.watch(['src/html/*.html']).on('change', browsersSync.reload);
});

const dev = gulp.series("html", "sass", "scripts", "imgs", "browsersync", "watch");
gulp.task("default", dev);