'use strict'

var gulp = require('gulp');

var sass = require('gulp-sass');
var runSequence = require('run-sequence').use(gulp);

gulp.task('default', function () {
	runSequence('sass', 'watch');
});
