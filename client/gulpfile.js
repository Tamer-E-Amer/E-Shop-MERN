/**
 * @ task runner to create a compiled css files in css folder
 */

const gulp = require('gulp');
const gulpSass = require('gulp-sass')
const sass = gulpSass(require('sass'));

gulp.task("watch", async function(){
    gulp.watch('src/components/**/*.scss', async function(){
    gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/assets/css'));
    })
})