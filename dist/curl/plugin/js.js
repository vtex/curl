(function(){(function(k,l,u){window.vtex.define("curl/plugin/js",["curl/_privileged"],function(k){function q(a,d,b){function f(){g||(h<new Date?b():setTimeout(f,10))}var h,g,e;h=(new Date).valueOf()+(a.f||3E5);b&&a.a&&setTimeout(f,10);e=k.core.loadScript(a,function(){g=!0;a.a&&(a.b=u(a.a));!a.a||a.b?d(e):b()},function(a){g=!0;b(a)})}function r(a,d){q(a,function(){var b=n.shift();m=0<n.length;b&&r.apply(null,b);d.resolve(a.b||!0)},function(a){d.reject(a)})}var h={},n=[],v=l&&1==l.createElement("script").async,
p,m,w=/\?|\.js\b/;p=k.Promise;return{dynamic:!0,normalize:function(a,d){var b=a.indexOf("!");return 0<=b?d(a.substr(0,b))+a.substr(b):d(a)},load:function(a,d,b,f){function k(a){(b.error||function(a){throw a;})(a)}var g,e,l,t,c;g=0<a.indexOf("!order");e=a.indexOf("!exports=");l=0<e?a.substr(e+9):f.a;t="prefetch"in f?f.prefetch:!0;a=g||0<e?a.substr(0,a.indexOf("!")):a;e=(e=f.dontAddFileExt||f.g)?new RegExp(e):w;c=d.toUrl(a);e.test(c)||(c=c.lastIndexOf(".")<=c.lastIndexOf("/")?c+".js":c);c in h?h[c]instanceof
p?h[c].then(b,k):b(h[c]):(a={name:a,url:c,h:g,a:l,f:f.timeout},h[c]=d=new p,d.then(function(a){h[c]=a;b(a)},k),g&&!v&&m?(n.push([a,d]),t&&(a.c="text/cache",q(a,function(a){a&&a.parentNode.removeChild(a)},function(){}),a.c="")):(m=m||g,r(a,d)))},cramPlugin:"../cram/js"}})})(this,this.document,function(k){try{return eval(k)}catch(l){}});
}).call(this);
