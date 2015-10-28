// wf, webfont
var WebFontConfig = {
    google: { 
        families: ['Roboto:400,300,500:latin']
    },
    custom: {
        families: ['Nanum Pen Script'],
        urls: ['http://fonts.googleapis.com/earlyaccess/nanumpenscript.css']
    }
};
(function() {
    var wf = document.createElement('script'),
        docproto = document.location.protocol;
    wf.src = ('file:' == docproto ? 'http' : ('https:' == docproto ? 'https' : 'http')) +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

// ga, google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create','UA-18795398-3','auto');
ga('require', 'displayfeatures');
ga('require','linkid','linkid.js');
ga('send','pageview');

// fb, facebook
window.fbAsyncInit = function() {
    FB.init({
        appId   : '696595327076492',
        xfbml   : true,
        version : 'v2.5'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); 
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// kakao
// (function(d, s, id){
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) {return;}
//     js = d.createElement(s); 
//     js.id = id;
//     js.async = 1;
//     js.src = "//developers.kakao.com/sdk/js/kakao.min.js";
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'kakao-jssdk'));
