const { watch, src, dest, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const config = {
    app: {
        js: [
            './src/js/**/*.js',
        ],
        scss: './src/sass/**/*.scss',
        fonts: './src/fonts/*',
        images: './src/images/*.*',
        html: './src/*.html'
    },
    dist: {
        base: './dist/',
        js: './dist/js',
        css: './dist/css',
        fonts: './dist/fonts',
        images: './dist/images'
    },
    extraBundles: [
        './dist/main.js',
        './dist/main.css'
    ]
}

function jsTask(done) {
    src(config.app.js)
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat('main.bundle.js'))
        .pipe(uglify())
        .pipe(dest(config.dist.js))
    done();
}

function cssTask(done) {
    src(config.app.scss)
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(rename({ suffix: '.bundle' }))
        .pipe(dest(config.dist.css))
    done();
}

function fontTask(done) {
    src(config.app.fonts)
        .pipe(dest(config.dist.fonts))
    done();
}

function imagesTask(done) {
    src(config.app.images)
        .pipe(dest(config.dist.images))
    done();
}

function templateTask(done) {
    src(config.app.html)
        .pipe(dest(config.dist.base))
    done();
}

function watchFiles() {
    watch(config.app.js, series(jsTask, reload));
    watch(config.app.scss, series(cssTask, reload));
    watch(config.app.fonts, series(fontTask, reload));
    watch(config.app.images, series(imagesTask, reload));
    watch(config.app.html, series(templateTask, reload));
}

function liveReload(done) {
    browserSync.init({
        server: {
            index: "index.html"
        },
    });
    done();
}

function reload (done) {
    browserSync.reload();
    done();
}

function cleanUp() {
    return del([config.dist.base]);
}

exports.dev = parallel(jsTask, cssTask, fontTask, imagesTask, templateTask, watchFiles, liveReload);
exports.build = series(cleanUp, parallel(jsTask, cssTask, fontTask, imagesTask, templateTask));