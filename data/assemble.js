module.exports = function(grunt) {
  return function() {
    var eol = require('os').EOL;
    var path = require('path');
    var config = grunt.config('assemble');
    var scr = grunt.file.read(config.script).split(/\r?\n/);
    var gs = grunt.file.read(path.join(config.data, 'gs-sc8850.txt')).split(/\r?\n/);
    var gm2_121 = grunt.file.read(path.join(config.data, 'gm2-121.txt')).split(/\r?\n/);
    var gm2_120 = grunt.file.read(path.join(config.data, 'gm2-120.txt')).split(/\r?\n/);
    var xg = grunt.file.read(path.join(config.data, 'xg.txt')).split(/\r?\n/);
    var xg_64 = grunt.file.read(path.join(config.data, 'xg-64.txt')).split(/\r?\n/);
    var xg_126 = grunt.file.read(path.join(config.data, 'xg-126.txt')).split(/\r?\n/);
    var xg_127 = grunt.file.read(path.join(config.data, 'xg-127.txt')).split(/\r?\n/);

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
      else grunt.fail.fatal('input error: ' + gs[i]); 
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

    dd = [];
    for (i = 0; i < gm2_121.length; i++) {
      a = gm2_121[i].split('\t');
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
      else grunt.fail.fatal('input error: ' + gm2_121[i]); 
    }
    head.push('var _gm2 = [');
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

    dd = [];
    for (i = 0; i < xg.length; i++) {
      a = xg[i].split('\t');
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
      else grunt.fail.fatal('input error: ' + xg[i]); 
    }
    head.push('var _xg = [');
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

    b = [];
    for (i = 0; i < gm2_120.length; i++) {
      a = gm2_120[i].split('\t');
      if (a.length < 2) continue;
      else if (a.length == 2) {
        k = parseInt(a[0]);
        if (k == a[0]) {
          b.push(a[0] + ':' + JSON.stringify(a[1]));
        }
      }
      else grunt.fail.fatal('input error: ' + gm2_120[i]); 
    }
    head.push('var _gm2dr = {');
    head.push(b.join(','));
    head.push('};');

    b = [];
    for (i = 0; i < xg_64.length; i++) {
      a = xg_64[i].split('\t');
      if (a.length < 2) continue;
      else if (a.length == 2) {
        k = parseInt(a[0]);
        if (k == a[0]) {
          b.push(a[0] + ':' + JSON.stringify(a[1]));
        }
      }
      else grunt.fail.fatal('input error: ' + xg_64[i]); 
    }
    head.push('var _xg64 = {');
    head.push(b.join(','));
    head.push('};');

    b = [];
    for (i = 0; i < xg_126.length; i++) {
      a = xg_126[i].split('\t');
      if (a.length < 2) continue;
      else if (a.length == 2) {
        k = parseInt(a[0]);
        if (k == a[0]) {
          b.push(a[0] + ':' + JSON.stringify(a[1]));
        }
      }
      else grunt.fail.fatal('input error: ' + xg_126[i]); 
    }
    head.push('var _xg126 = {');
    head.push(b.join(','));
    head.push('};');

    b = [];
    for (i = 0; i < xg_127.length; i++) {
      a = xg_127[i].split('\t');
      if (a.length < 2) continue;
      else if (a.length == 2) {
        k = parseInt(a[0]);
        if (k == a[0]) {
          b.push(a[0] + ':' + JSON.stringify(a[1]));
        }
      }
      else grunt.fail.fatal('input error: ' + xg_127[i]); 
    }
    head.push('var _xg127 = {');
    head.push(b.join(','));
    head.push('};');

    grunt.file.write(config.script, head.concat(tail).join(eol));
  }
};
