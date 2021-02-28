const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify  = require('gulp-notify');
const webp = require('gulp-webp');

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss'
}


//Funcion que compila SASS

function css () {
    return src(paths.scss)
        .pipe(sass() )
        .pipe(dest('./build/css') )
}

function minificarcss () {
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'compressed'
        }) )
        .pipe(dest('./build/css') )
}

function imagen(){
    return src(paths.imagenes)
    .pipe(imagemin())
    .pipe(dest('./build/img/'))
    .pipe(notify( {message: 'Imagen minificada'}))
}

function versionwebp(){
    return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest('./build/img/'))
    .pipe(notify( {message: 'Version Webp lista'}))
}

function watchArchivos(){
    watch(paths.scss, css) //* = Todas los archivos de esta carpeta - ** = Todos los archivos de todas las carpetas
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.watchArchivos = watchArchivos;

exports.default = series( css, imagen,versionwebp, watchArchivos);