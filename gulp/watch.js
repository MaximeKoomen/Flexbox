'use strict';

var gulp = require('gulp');

var watch = require('gulp-watch')
var browserSync = require('browser-sync')
gulp.task('watch', function() {
			gulp.watch('sass/style.scss', ['sass']);
			gulp.task('sass-watch', ['sass'], browserSync.reload);
});
