const 	gulp = require('gulp'),
		sass = require('gulp-sass'),
		rigger = require('gulp-rigger'),
		autoprefixer = require('gulp-autoprefixer'),
		imagemin = require('gulp-imagemin'),
		concat = require('gulp-concat'),
		newer = require("gulp-newer"),
		browserSync = require('browser-sync').create(),
		reload = browserSync.reload;




gulp.task('browserSync', function(done) {
	browserSync.init({
		server: {
			baseDir: 'build'
		},
		notify: false
	});
	browserSync.watch('src/').on('change', browserSync.reload);
	done();
});


gulp.task('sass', function(){
	return gulp.src('src/scss/main.scss')
		.pipe(sass({
			includePaths: require('node-normalize-scss').includePaths
		}))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions'],
			cascade: false
		}))
		.pipe(rigger())
		.pipe(gulp.dest('build/css'))
		.pipe(reload({stream: true}));
});


gulp.task('fonts', function() {
	return gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('build/fonts'));
});


gulp.task('images', function() {
	return gulp.src("src/images/**/*")
		.pipe(newer("build/images"))
		.pipe(
			imagemin([
				imagemin.gifsicle({ interlaced: true }),
				imagemin.mozjpeg({ progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 }),
				imagemin.svgo({
					plugins: [
						{
							removeViewBox: false,
							collapseGroups: true
						}
					]
				})
			])
		)
		.pipe(gulp.dest("build/images"));
});


gulp.task('scripts', function() {
	return gulp.src('src/js/**/*.js')
	    .pipe(gulp.dest('build/js'))
		.pipe(reload({stream: true}));
});

gulp.task('styles', function() {
	return gulp.src('src/css/**/*.css')
	    .pipe(gulp.dest('build/css'))
		.pipe(reload({stream: true}));
});

gulp.task('rigger', function (done) {
    return gulp.src('src/template/*.html')
	    .pipe(rigger())
	    .pipe(gulp.dest('build/'))
	    .pipe(reload({stream: true}));
});

gulp.task('watch', gulp.series('fonts', 'rigger', 'sass', 'scripts', 'styles', 'images', 'browserSync', (done) => {
	gulp.watch('src/fonts/*', gulp.series('fonts'));
	gulp.watch('src/images/**/*', gulp.series('images'));
	gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
	gulp.watch('src/template/**/*.html', gulp.series('rigger'));
	gulp.watch('src/js/**/*.js', gulp.series('scripts'));
	gulp.watch('src/css/**/*.css', gulp.series('styles'));
	done();
}));