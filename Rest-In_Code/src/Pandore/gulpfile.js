/// <binding BeforeBuild='css' />
var gulp = require('gulp');

var plugins = require('gulp-load-plugins')();

gulp.task('css', function () {
    return gulp.src('./wwwroot/libs/less/style.less')
    .pipe(plugins.less())
   .pipe(gulp.dest('./wwwroot/libs/css'));
});

gulp.task('build', ['css']);

// Tâche par défaut
gulp.task('default', ['build']);