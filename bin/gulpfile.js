const gulp = require('gulp');
const connect = require('gulp-connect');
const ip = require('ip');
const open = require('open');

const argv = process.argv;
const cwd = argv[argv.indexOf('--cwd') + 1];
const host = ip.address();
const port = argv[argv.indexOf('--port') + 1];

gulp.task('connect', function() {
  connect.server({
    root: cwd,
    host,
    port,
    livereload: {
      port: 3000 + parseInt(Math.random() * 1000),
    },
  }, function() {
    open(`http:${host}:${port}`);
  });
});

const suffixList = ['.html', '.css', '.js', '.png', '.jpg', '.gif'];
const globs = suffixList.map((suffix) => `${cwd.replace(/\\/g, '/')}/**/*${suffix}`);

gulp.task('watch', function () {
  gulp.watch(globs, function() {
    gulp.src(globs)
        .pipe(connect.reload())
  });
});

gulp.task('default', ['connect', 'watch']);