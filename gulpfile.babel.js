import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import cleanCss from 'gulp-clean-css';
import concat from 'gulp-concat';
import watch from 'gulp-watch';

gulp.task('sass', () => {
    return gulp
        .src('src/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('./'))
});

gulp.task('watch', () => {
    gulp.start('default');
    gulp.watch('src/*.scss', ['sass']);
});

gulp.task('default', ['sass']);