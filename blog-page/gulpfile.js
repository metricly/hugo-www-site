const gulp =  require('gulp');
const plumber = require('gulp-plumber');
const connect = require('gulp-connect');
const concat = require('gulp-concat');

// template
const htmlImport = require('gulp-html-import');
const htmlmin = require('gulp-htmlmin');

gulp.task('template' , () => {
	gulp.src('./dev/templates/**/*.html')
		.pipe(htmlImport('./dev/components/'))
    // .pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist'))
		.pipe(plumber())
		.pipe(connect.reload());
});




// style

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('style' , () => {
	gulp.src(['./dev/scss/**/*.scss', '.dev/css/**/*.css'])
  		.pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
              browsers: ['last 2 versions'],
              cascade: false
        }))
      // .pipe(cleanCSS({compatibility: 'ie8'}))
      // .pipe(concat('style.css'))
    	.pipe(gulp.dest('dist'))
    	.pipe(plumber())
    	.pipe(connect.reload());
});


//js

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('js' , () => {
	gulp.src('./dev/js/**/*.js')
      // .pipe(babel({
      //       presets: ['@babel/env']
      // }))
      // .pipe(uglify())
		  // .pipe(concat('script.js'))
    	.pipe(gulp.dest('dist'))
    	.pipe(plumber())
    	.pipe(connect.reload());
});


//img
const  svgo = require('gulp-svgo');

gulp.task('img', function() {
  gulp.src('./dev/assets/**/*')
  // .pipe(svgo())
  .pipe(gulp.dest('dist/assets/'));
    
});

//fonts

gulp.task('fonts' , () => {
  gulp.src('./dev/fonts/*.ttf')
  .pipe(gulp.dest('dist/fonts/'));
});



//server

gulp.task('connect', function() {
  connect.server({
  	root: 'dist',
  	livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(['./dev/templates/**/*.html'], ['template']);
  gulp.watch(['./dev/scss/**/*.scss'], ['style']);
  gulp.watch(['./dev/js/**/*.js'], ['js']);
  gulp.watch(['./dev/assets/**/*'], ['img']);
  gulp.watch(['./dev/fonts/**/*'], ['fonts']);
});





gulp.task('default', ['template', 'style' , 'js' , 'img' , 'fonts']);

gulp.task('dev' , ['default', 'connect', 'watch'])
