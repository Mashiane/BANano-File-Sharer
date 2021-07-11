var _banano_bananofilesharer=new banano_bananofilesharer();
/* App */
function banano_bananofilesharer() {var _B;this.__1="bananofilesharer";this.__2="BANano File Sharer";this.__3="c:\laragon\www";this.__4="1.00";this.__5="";this.banano_ready=function() {if (_B==null) _B=this;var __6,__7,__8,__9,__a;__6=null;__6=u("#body");__7={};__7={};__7.mode="no-cors";__8={};__9="";__a={};__a=fetch("./assets/index.html",__7);__a.then(async function(__8) {return __8.text();}).then(async function(__9) {__6.html(__9);});};} 
    $(document).ready(function () { 
  $("a#pageLink").click(function () { 
    $("a#pageLink").removeClass("active"); 
    $(this).addClass("active"); 
  }); 
   
  $(".btn-show-left-area").click(function () { 
    $(".left-area").removeClass("show"); 
    $(".left-area").addClass("show"); 
  }); 
   
  $(".btn-show-right-area").click(function () { 
    $(".right-area").removeClass("show"); 
    $(".right-area").addClass("show"); 
  }); 
   
  $(".btn-close-right").click(function () { 
    $(".right-area").removeClass("show"); 
  }); 
   
  $(".btn-close-left").click(function () { 
    $(".left-area").removeClass("show"); 
  }); 
}); 
 
$('.main-area').scroll( function() { 
    if ($('.main-area').scrollTop() >= 88) { 
       $('div.main-area-header').addClass('fixed'); 
    } 
    else { 
       $('div.main-area-header').removeClass('fixed'); 
    } 
}); 
window.addEventListener('online', function() {if (typeof _banano_bananofilesharer['banano_online']==="function") {_banano_bananofilesharer.banano_online();}});window.addEventListener('offline', function() {if (typeof _banano_bananofilesharer['banano_offline']==="function") {_banano_bananofilesharer.banano_offline();}});var BANversion=1626039914039;window.document.addEventListener("readystatechange", BANLoadChecker, true);function BANLoadChecker() {if (window.document.readyState=="complete") {_banano_bananofilesharer.banano_ready();}}