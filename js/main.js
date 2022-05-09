$(document).ready(function() {
    $(".fdBkSldBtn").click(function() {
        $(".fdBkSldBtn").is(".closed") ? ($(".fdBckWrp").fadeOut("fast"), $(".fdBkSldBtn").removeClass("closed"), $(".fdBkSldBtn").addClass("open"), $(".mblIconPnl").removeClass("off"), $(".mblIconPnl").addClass("on")) : ($(".fdBckWrp").fadeIn("slow"), $(".fdBkSldBtn").removeClass("open"), $(".fdBkSldBtn").addClass("closed"), $(".mblIconPnl").removeClass("on"), $(".mblIconPnl").addClass("off")), $(".popUp").is(".closed") ? $(".popUp").removeClass("closed") : $(".popUp").addClass("closed")
    }), $(".fdBkSldBtn").click(function(s) {
        s.stopPropagation()
    }), $(".fdBkSldBtn").click(function(s) {
        s.preventDefault(), s.stopPropagation(), $(".popUp").show(), $(".slideTop").show()
    }), $(document).click(function() {
        $(".popUp").hide(), $(".slideTop").hide(), $(".popUp").removeClass("closed"), $(".fdBkSldBtn").removeClass("closed"), $(".fdBkSldBtn").removeClass("off")
    }), $(".closeTab").click(function() {
        $(".topHeading").slideUp(250), $(".closeTab").hide("fast")
    }), $(window).scroll(function() {
        $(window).scrollTop() > 150 ? ($(".fxHdr").addClass("change"), $(".closeTab").hide("fast")) : ($(".fxHdr").removeClass("change"), $(".closeTab").show("fast")), $(window).width() < 989 && $(".fxHdr").removeClass("change")
    }), $(window).click(function(s) {
        s.stopPropagation()
    }), $(document).click(function() {
        $("#item_list_id").hide()
    }), $("#faqsAccordion a").click(function() {
        var s = $("#faqsAccordion .panel .panel-collapse").not("#faqsAccordion").eq($(this).index("#faqsAccordion .panel-title a")),
            e = $('#faqsAccordion .panel-collapse[data-visible="true"]');
        $("#faqsAccordion .panel-title a.active");
        e.each(function() {
            $(this).slideUp(200, function() {
                $(this).removeAttr("style data-visible"), $(this).parent().removeClass("active")
            })
        }), s.attr("data-visible") ? s.slideUp(200, function() {
            $(this).removeAttr("style data-visible"), $(this).parent().removeClass("active")
        }) : (s.slideDown(500).attr({
            "data-visible": !0
        }), s.parent().addClass("active"))
    }), $(".panel-button").on("click", function() {
        var s = $(this).attr("data-panelid");
        $(".panel").fadeOut(100), $("#" + s).fadeIn()
    }), $(".item a").click(function() {
        $(".item a").removeClass("active_year"), $(this).addClass("active_year")
    }), $(".responsive-tabs").each(function() {
        $(".responsive-tabs-panel").not(":first").hide(), $("li", this).removeClass("active"), $("li:first-child", this).addClass("active"), $(".responsive-tabs-panel:first-child").show(), $("li", this).click(function(s) {
            s.preventDefault();
            var e = $("a", this).attr("href");
            $(this).siblings().removeClass("active"), $(this).addClass("active"), $(e).siblings().hide(), $(e).fadeIn(400)
        })
    })
	 $(".owl-carousel.manufctrImg").owlCarousel({
        loop: !1,
        margin: 10,
        responsiveClass: !0,
        items: 1,
        autoplay: !0
    })
	 $(".owl-carousel.prdct").owlCarousel({
        loop: !1,
        autoHeight: !1,
        margin: 30,
        responsiveClass: !0,
        nav: !0,
        dots: !1,
        responsive: {
            0: {
                items: 1,
                nav: !0
            },
            640: {
                items: 2,
                nav: !1
            },
            1e3: {
                items: 3,
                margin: 30
            }
        }
		
	
    })
	  $('.owl-carousel.relatedProduct').owlCarousel({
             loop: true,
			  autoHeight:false,
                margin: 30,
                responsiveClass: true,
				nav: true,
				dots:false,
                responsive: {
                  0: {
                    items: 1
                  
                  },
                  640: {
                    items: 2,
                
                  },
                  1000: {
                    items: 3,
                    margin: 30
                  }
                }
              }) 
	
	 $(".owl-carousel.testimonial").owlCarousel({
        loop: !0,
        autoHeight: !0,
        margin: 10,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0
            },
            640: {
                items: 1,
                nav: !1
            },
            1e3: {
                items: 1,
                nav: !0,
                loop: !1,
                margin: 0
            }
        }
    })
	 $(".owl-carousel.two").owlCarousel({
        loop: !1,
        margin: 0,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 2,
                nav: !0
            },
            600: {
                items: 3,
                nav: !1
            },
            1e3: {
                items: 5
            }
        }
    }) 
	$(".owl-carousel.banner").owlCarousel({
        loop: !0,
        margin: 10,
        responsiveClass: !0,
        items: 1,
        autoplayTimeout: 4e3,
        autoplay: !0
    }), $(".owl-carousel").owlCarousel({
        loop: !1,
        margin: 10,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0
            },
            600: {
                items: 2,
                nav: !1
            },
            1e3: {
                items: 2,
                nav: !0,
                loop: !1,
                margin: 20
            }
        }
    })
});