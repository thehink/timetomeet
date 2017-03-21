!function(n) {
    var t="https://dev-be.timetomeet.se/service/rest/";
    n.fn.getResults=function(e, o, s, r) {
        return"/service/login/"==e?(e="https://dev-be.timetomeet.se/service/rest/api-auth/login/", o.token=1):e=t+e+"/?format=json",
        o.url=e,
        res=null,
        s||(s="GET"),
        n.ajax( {
            type:s, async:!1, url:"/proxy.php", dataType:"json", data:o, success:function(n) {
                res=n
            }
        }
        ),
        res
    }
}(jQuery);

var getResults=function(n, t, e) {
    return $.fn.getResults(n, t, e)
},
bookingRouter=function(n, t, e, o) {
    var s=n? {
        "Authorization":"Token "+n
    }:{};
    e="https://dev-be.timetomeet.se/service/rest/"+e;
    var r;
    return o=o?o:"POST",
    $.ajax( {
        dataType:"json", contentType:"application/json", headers:s, type:o, async:!1, data:t, url:e, success:function(n) {
            console.log(n), r=n
        }
        , error:function(n) {
            console.log(n), r=n
        }
    }
    ),
    r
},
getUrlVars=function() {
    for(var n, t=[], e=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"), o=0;
    o<e.length;
    o++)n=e[o].split("="),
    t.push(n[0]),
    t[n[0]]=decodeURIComponent(n[1]);
    return t
};
