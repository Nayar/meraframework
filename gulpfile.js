var gulp = require('gulp');
var app = require('./index.js')
var livereload = require('gulp-livereload');
var server

gulp.task('watch', function() {
  // place code for your default task here
    livereload.listen();
    if(server != null){
        server.close();
        
    }
    server = app.listen(3000, function () {
      console.log('Example app listening on port 3000!')
    })
});

gulp.task('serve', function() {
  // place code for your default task here
    server = app.listen(3000, 'localhost', function () {
      console.log('Example app listening on port 3000!')
    })
});

var watcher = gulp.watch(['assets/*','views/*','index.js'], ['watch']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    livereload.reload()
});