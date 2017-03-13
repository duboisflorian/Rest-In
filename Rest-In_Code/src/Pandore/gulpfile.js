/// <binding BeforeBuild='css' />
var gulp = require('gulp');

var plugins = require('gulp-load-plugins')();

gulp.task('build', ['css']);

// Tâche par défaut
gulp.task('default', ['build']);