const fileinclude = require('gulp-file-include');
const markdown = require('markdown');
var runSequence = require('gulp4-run-sequence');
const gulp = require('gulp');

gulp.task('fileinclude', function (callback) {
    runSequence('build-pages','build-blog', callback);
});

gulp.task('build-pages', function() {
    return gulp.src([
        '_pages/index.html',
        '_pages/work.html'
    ])
        .pipe(fileinclude({
            filters: {
                markdown: markdown.parse
            }
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('build-blog', function() {
    return gulp.src([
        '_work/work_biodigital_human.html',
        '_work/work_smiletrain.html',
        '_work/work_solidcomponents.html',
        '_work/work_bimdata.html',
        '_work/work_dstudio.html',
        '_work/work_openproject.html',
        '_work/work_solidcomponents.html',
        '_work/work_zspace.html'
    ])
        .pipe(fileinclude({
            filters: {
                markdown: markdown.parse
            }
        }))
        .pipe(gulp.dest('./'));
});
