//? ================changes bg header menu===============
let scrolled;
window.onscroll = function () {
	scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if (scrolled > 1) {
		$(".header").addClass("scrolled");
	}
	if (1 > scrolled) {
		$(".header").removeClass("scrolled");
	}
};

$(function () {
	//?==========opened and close menu with adaptive===========
	$(".header-burger").on("click", function () {
		$(".header-menu").addClass("active");
	});
	$(".close").on("click", function () {
		$(".header-menu").removeClass("active");
	});
	//?========== show and hide header logo==============
	$(".header-burger").click(function () {
		$(".header-main-menu__logo").hide();
	});
	$(".close").click(function () {
		$(".header-main-menu__logo").show("slow", function () {
			$(".header-main-menu__logo");
		});
	});
	//?=========== show and hide header-main-menu__app===============
	$(".header-burger").click(function () {
		$(".header-main-menu__app").hide();
	});
	$(".close").click(function () {
		$(".header-main-menu__app").show("slow", function () {
			$(".header-main-menu__app");
		});
	});
});

//?=======progressBar========
$(function () {
	const progress = document.querySelector(".progressbar");
	window.addEventListener("scroll", progressBar);
	function progressBar() {
		let windowWidth = document.documentElement.scrollWidth;
		if (windowWidth > 767) {
			let windowScroll =
				document.body.scrollTop || document.documentElement.scrollTop;
			let windowHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			let per = (windowScroll / windowHeight) * 100;
			progress.style.height = per + "%";
		}
	}
});
