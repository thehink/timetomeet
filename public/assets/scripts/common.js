var options = {
    searchPageUrl: "/search",
    venuePageUrl: "/venue",
    venuesPageUrl: "/venues",
    bookingPageUrl: "/booking",
    currency: "kr",
    restURL: "https://dev-be.timetomeet.se/service/rest/"
  },
  getParams = getUrlVars(),
  getCookie = function(e) {
    var t = null ;
    if (document.cookie && "" != document.cookie)
        for (var n = document.cookie.split(";"), o = 0; o < n.length; o++) {
            var r = jQuery.trim(n[o]);
            if (r.substring(0, e.length + 1) == e + "=") {
                t = decodeURIComponent(r.substring(e.length + 1));
                break
            }
        }
    return t
}
  , getCountNoun = function(e, t, n) {
    return e = Math.abs(e),
    1 == e ? t : n
}
  , getCountNoun = function(e, t, n) {
    return e = Math.abs(e),
    1 == e ? t : n
}
  , makePeopleArray = function(e, t) {
    e || (e = 2),
    t || (t = 50);
    var n = [];
    for (e; t + 1 > e; e++)
        n[n.length] = e;
    return n
}
  , detectMobile = function() {
    return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
}
  , cutWords = function(e, t) {
    return t || (t = 255),
    e.length > t ? e.slice(0, t) + " ..." : e
}
  , mobileAgent = detectMobile()
  , isElementInViewport = function(e) {
    "function" == typeof jQuery && e instanceof jQuery && (e = e[0]);
    var t = e.getBoundingClientRect();
    return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
};

function escape (str) {
    return str
        .replace(/[\\]/g, '\\\\')
        .replace(/[\/]/g, '\\/')
        .replace(/[\b]/g, '\\b')
        .replace(/[\f]/g, '\\f')
        .replace(/[\n]/g, '\\n')
        .replace(/[\r]/g, '\\r')
        .replace(/[\t]/g, '\\t')
        .replace(/[\"]/g, '\\"')
        .replace(/\\'/g, "\\'");
}
