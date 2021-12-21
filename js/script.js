// ページ内スクロール
$('.global_nav a[href*="#"]').click(function() {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top - 150;
    $('body,html').animate({ scrollTop: pos }, 500);
    return false;
});

// ハンバーガーメニュー
$(".humberger_icon").click(function() {
    $(this).toggleClass('active');
    $(".humberger_wrapper").toggleClass('panelactive');
    $(".humberger-bg").toggleClass('overlay');

});
$('.humberger_wrapper a').click(function() {
    $('.humberger_icon').removeClass('active');
    $('.humberger_wrapper').removeClass('panelactive');
    $(".humberger-bg").removeClass('overlay');

});

// 右端、料金プラン

function PageTopAnime() {

    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $('.scroll_contact').removeClass('DownMove');
        $('.scroll_contact').addClass('UpMove');
    } else {
        if ($('.scroll_contact').hasClass('UpMove')) {
            $('.scroll_contact').removeClass('UpMove');
            $('.scroll_contact').addClass('DownMove');
        }
    }

    var wH = window.innerHeight;
    var footerPos = $('#footer').offset().top;
    if (scroll + wH >= (footerPos + 30)) {
        var pos = (scroll + wH) - footerPos
        $('.scroll_contact').css('bottom', pos);
    } else {
        if ($('.scroll_contact').hasClass('UpMove')) {
            $('.scroll_contact').css('bottom', '30px');
        }
    }
}

$(window).scroll(function() {
    PageTopAnime();
});

// レスポンシブフッターナビ
jQuery(window).on("scroll", function() {
    documentHeight = jQuery(document).height();
    scrollPosition = jQuery(this).height() + jQuery(this).scrollTop();
    footerHeight = jQuery("#footer").innerHeight();

    if (documentHeight - scrollPosition <= footerHeight) {
        jQuery(".footer_nav").css({
            position: "absolute",
            bottom: footerHeight + 0
        });
    } else {
        jQuery(".footer_nav").css({
            position: "fixed",
            bottom: 10
        });
    }
});