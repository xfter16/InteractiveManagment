var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
 
gulp.task('build', () => {
    return browserify({
            entries: './src/app.jsx',
            extensions: ['.jsx'],
            debug: true
        })
        .transform('babelify', {
            presets: ['es2015', 'react'],
            plugins: ['transform-class-properties']
        })
        .bundle()
        .on('error', function(err){
            gutil.log(gutil.colors.red.bold('[browserify error]'));
            gutil.log(err.message);
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});
 
gulp.task('watch', ['build'], () => {
    gulp.watch('./src/**/*.jsx', ['build']);
});
 
gulp.task('default', ['watch']); 