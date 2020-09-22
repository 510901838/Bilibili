//隐藏和显示
$(window).scroll(function() {
	if ($(this).scrollTop() > 300) {
		$('.back-top-btn').fadeIn();
	} else {
		$('.back-top-btn').fadeOut();
	}
});
//点击跳转到顶部
$('.back-top-btn').click(function() {
	$('html ,body').animate({
		scrollTop: 0
	}, 300);
	return false;
});
