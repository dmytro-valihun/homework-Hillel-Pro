import gulp from 'gulp';
import sass from 'sass';
import gulpSass from 'gulp-sass';
import webpack from 'gulp-webpack';
import babel from 'gulp-babel-minify';
import cleanCss from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';

const cssCompiler = gulpSass(sass);
const SRC_FOLDER = './src';
const BUILD_FOLDER = './build';
const ALL_SCSS_FILES_PATH = SRC_FOLDER + '/scss/**/*.scss';
const ALL_JS_FILES_PATH = SRC_FOLDER + '/js/**/*.js';
const All_IMG_PATH = SRC_FOLDER + '/images/**/*.*';

async function convertSassToCss() {
    gulp.src(ALL_SCSS_FILES_PATH)
    .pipe(cssCompiler())
    .pipe(cleanCss())
    .pipe(gulp.dest(BUILD_FOLDER))
}
async function convertJS() {
    gulp.src(ALL_JS_FILES_PATH)
    .pipe(webpack())
    .pipe(babel())
    .pipe(gulp.dest(BUILD_FOLDER));
}
async function convertIMG() {
    gulp.src(All_IMG_PATH)
    .pipe(imagemin())
    .pipe(gulp.dest(BUILD_FOLDER + '/img'))
}

gulp.task('watch-scss', function() {
    gulp.watch(ALL_SCSS_FILES_PATH, convertSassToCss)
})
gulp.task('watch-js', function() {
    gulp.watch(ALL_JS_FILES_PATH, convertJS)
})
gulp.task('wath-img', function() {
    gulp.watch(All_IMG_PATH, convertIMG)
})


gulp.task('default', gulp.parallel(convertSassToCss, convertJS, convertIMG, 'watch-scss','watch-js', 'wath-img'));
gulp.task('build', gulp.parallel(convertSassToCss, convertJS, convertIMG));