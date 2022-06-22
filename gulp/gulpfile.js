const { series, parallel} = require('gulp')
const gulp = require("gulp")
const concat = require("gulp-concat")
const cssmin = require("gulp-cssmin")
const rename = require("gulp-rename")
const uglify = require("gulp-uglify")
const image = require("gulp-imagemin")
const htmlmin = require("gulp-htmlmin")
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')( require('node-sass'))
const reload = browserSync.reload

function tarefasCSS(cb) {

     gulp.src(["./vendor/**/*.css"])
        .pipe(concat("libs.css"))
        .pipe(cssmin())
        .pipe(rename({ suffix: ".min"}))
        .pipe(gulp.dest("./dist/css"))
    cb()
}

function tarefasSASS(cb) {
    
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass()) 
        .pipe(gulp.dest('./dist/css')) 

    cb()
}




function tarefasJS(callback){
     gulp.src(["./vendor/**/*.js", "./src/**/*.js"])

     .pipe(babel({
        comments: false,
        presets: ['@babel/env']}))  
        .pipe(concat("libs.js"))
        .pipe(uglify())
        .pipe(rename({ suffix: ".min"}))
        .pipe(gulp.dest("./dist/js"))
    return callback()
}

function tarefasImagem(){
    return gulp.src("./src/images/*")
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest("./dist/images"))
}

function tarefasHTML(callback){

    gulp.src("./src/**/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("./dist"))


    return callback()
}

gulp.task('server', function(){

    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/**/*').on('change', process)
    gulp.watch('./src/**/*').on('change', reload)

})


const process = series( tarefasHTML, tarefasJS, tarefasCSS, tarefasSASS)

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
exports.sass = tarefasSASS

exports.default = process
