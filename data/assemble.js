module.exports = function(grunt) {
  return function() {
    var eol = require('os').EOL;
    var path = require('path');
    var config = grunt.config('assemble');
    var scr = grunt.file.read(config.script).split(/\r?\n/);
    var gs = grunt.file.read(path.join(config.data, 'gs-sc8850.txt')).split(/\r?\n/);

    var dd = [];
    var a, b, i, k, n;

    var head = [];
    var tail = [];
    var curr = head;
    for (var i = 0; i < scr.length; i++) {
      if (curr) curr.push(scr[i]);
      if (scr[i] == '//#begin') curr = undefined;
      else if (scr[i] == '//#end') {
        curr = tail;
        curr.push(scr[i]);
      }
    }

    for (i = 0; i < gs.length; i++) {
      a = gs[i].split('\t');
      if (a.length == 1) {
        n = parseInt(a[0]);
        if (n != a[0]) continue;
        dd[n] = {};
        continue;
      }
      else if (a.length == 3) {
        k = parseInt(a[1]);
        if (k == a[1]) {
          dd[n][k] = a[2];
          continue;
        }
      }
      else grunt.fail.fatal('input error: ' + gst[i]); 
    }
    head.push('var _gs = [');
    b = [];
    for (i = 0; i < dd.length; i++) {
      a = [];
      for (k in dd[i]) {
        a.push(k + ':' + JSON.stringify(dd[i][k]));
      }
      b.push('{' + a.join(',') + '}');
    }
    head.push(b.join(',' + eol));
    head.push('];');
    grunt.file.write(config.script, head.concat(tail).join(eol));
  }
};