"use strict";
! function () {
	var e = jQuery("body"),
		t = jQuery(window);

	function a() {
		jQuery(".sf-more-li, .sf-logo-li").remove();
		var e = jQuery("body").innerWidth();
		jQuery(".sf-menu").each(function () {
			var t = jQuery(this),
				a = t.closest(".mainmenu_wrapper");
			if (a.attr("style", ""), e > 1199) {
				var r = a.find(".sf-menu > li");
				r.removeClass("sf-md-hidden");
				var i = t.closest(".header_logo_center"),
					s = 0,
					o = 0;
				if (i.length) {
					var n = i.find(".logo");
					s = n.outerWidth(!0) + 70
				}
				var l = a.outerWidth(!0);
				if (r.each(function (e) {
						var t = jQuery(this).outerWidth();
						if ((o += t) >= l - s) {
							var a = jQuery('<li class="sf-more-li"><a>...</a><ul></ul></li>');
							jQuery(r[e - 1]).before(a);
							jQuery(a).outerWidth(!0);
							var i = r.filter(":gt(" + (e - 2) + ")");
							return i.clone().appendTo(a.find("ul")), i.addClass("sf-md-hidden"), !1
						}
					}), i.length) {
					var d = i.find(".sf-menu > li:not(.sf-md-hidden)"),
						f = d.length;
					d.each(function () {
						jQuery(this).outerWidth()
					});
					var u = Math.floor(f / 2);
					f % 2 == 0 && u--;
					var c = d.eq(u);
					c.after('<li class="sf-logo-li"></li>'), i.find(".sf-logo-li").width(s);
					var h = c.offset().left + c.outerWidth() - (e / 2 - s / 2);
					a.css({
						left: -h
					})
				}
			}
		})
	}

	function r() {
		var e = jQuery(".mainmenu_wrapper .mega-menu");
		if (e.length) {
			var t = jQuery("body").innerWidth();
			t > 1199 && e.each(function () {
				var e = jQuery(this);
				e.css({
					display: "block",
					left: "auto"
				});
				var a = e.outerWidth(),
					r = e.offset().left + a / 2 - t / 2;
				e.css({
					left: -r,
					display: "none"
				}), e.closest("ul").hasClass("nav") || e.css("left", "")
			})
		}
	}

	function i(e, t) {
		var a = e.data("animation") ? e.data("animation") : "fadeInUp",
			r = e.data("delay") ? e.data("delay") : 150 * t;
		setTimeout(function () {
			e.addClass("animated " + a)
		}, r)
	}

	function s(e) {
		e.hasClass("counted") || e.countTo().addClass("counted")
	}

	function o(e) {
		e.progressbar({
			transition_delay: 300
		})
	}

	function n(e) {
		var t = e.data(),
			a = t.size ? t.size : 270,
			r = t.line ? t.line : 20,
			i = t.bgcolor ? t.bgcolor : "#ffffff",
			s = t.trackcolor ? t.trackcolor : "#c14240",
			o = t.speed ? t.speed : 3e3;
		e.easyPieChart({
			barColor: s,
			trackColor: i,
			scaleColor: !1,
			scaleLength: !1,
			lineCap: "butt",
			lineWidth: r,
			size: a,
			rotate: 0,
			animate: o,
			onStep: function (e, t, a) {
				jQuery(this.el).find(".percent").text(Math.round(a))
			}
		})
	}

	function l() {
		var e = jQuery(".page_header").first(),
			t = e.find(".header_left_logo"),
			a = e.find(".header_right_buttons");
		t.css("min-width", "0"), a.css("min-width", "0"), parseInt(t.css("width")) > parseInt(a.css("width")) ? a.css("min-width", t.css("width")) : t.css("min-width", a.css("width"))
	}

	function d() {
		jQuery(".intro_section").find("svg").each(function () {
			var e = jQuery(this),
				t = e.find(".mask-text"),
				a = e.height(),
				r = t.size(),
				i = Math.round(parseInt(e.find(".mask-text").css("font-size")) / 1.13),
				s = .018 * i;
			t.each(function (e) {
				var t = jQuery(this),
					o = (a - i * r) / 2 + i * (e + 1) - s;
				t.attr("y", o)
			})
		})
	}

	function f() {
		jQuery().scrollbar && jQuery('[class*="scrollbar-"]').scrollbar(), jQuery().superfish && (jQuery("ul.sf-menu").superfish({
			popUpSelector: "ul:not(.mega-menu ul), .mega-menu ",
			delay: 700,
			animation: {
				opacity: "show",
				marginTop: 0
			},
			animationOut: {
				opacity: "hide",
				marginTop: 10
			},
			speed: 200,
			speedOut: 200,
			disableHI: !1,
			cssArrows: !0,
			autoArrows: !0,
			onInit: function () {
				var e = jQuery(this);
				e.find(".sf-with-ul").after('<span class="sf-menu-item-mobile-toggler"/>'), e.find(".sf-menu-item-mobile-toggler").on("click", function (e) {
					var t = jQuery(this).parent();
					t.hasClass("sfHover") ? t.superfish("hide") : t.superfish("show")
				})
			}
		}), jQuery("ul.sf-menu-side").superfish({
			popUpSelector: "ul:not(.mega-menu ul), .mega-menu ",
			delay: 500,
			animation: {
				opacity: "show",
				height: "100%"
			},
			animationOut: {
				opacity: "hide",
				height: 0
			},
			speed: 400,
			speedOut: 300,
			disableHI: !1,
			cssArrows: !0,
			autoArrows: !0
		})), jQuery(".toggle_menu").on("click", function () {
			jQuery(this).toggleClass("mobile-active"), jQuery(".page_header").first().toggleClass("mobile-active")
		}), jQuery(".mainmenu a").on("click", function () {
			var e = jQuery(this);
			e.hasClass("sf-with-ul") || "#" !== e.attr("href").charAt(0) || e.closest(".page_header").toggleClass("mobile-active").find(".toggle_menu").toggleClass("mobile-active")
		});
		var f = jQuery(".page_header_side");
		jQuery("ul.menu-side-click").find("li").each(function () {
			var e = jQuery(this);
			e.find("ul").length && e.append('<span class="activate_submenu"></span>').find(".activate_submenu, > a").on("click", function (t) {
				var a = jQuery(this);
				if ("#" !== a.attr("href") && a.parent().hasClass("active-submenu") || t.preventDefault(), a.parent().hasClass("active-submenu")) return t.preventDefault(), void a.parent().removeClass("active-submenu");
				e.addClass("active-submenu").siblings().removeClass("active-submenu")
			})
		}), jQuery(".vertical_menu_header").find("ul.menu-side-click").find("a").each(function () {
			var e = jQuery(this),
				t = e.attr("href");
			"#" === t[0] && t.length > 1 && e.on("click", function () {
				f.removeClass("active-slide-side-header")
			})
		}), f.length && (jQuery(".toggle_menu_side").on("click", function () {
			var t = jQuery(this);
			t.hasClass("header-slide") ? f.toggleClass("active-slide-side-header") : t.parent().hasClass("header_side_right") ? e.toggleClass("active-side-header slide-right") : e.toggleClass("active-side-header")
		}), e.on("click", function (t) {
			jQuery(t.target).closest(".page_header_side").length || f.hasClass("page_header_side_sticked") || f.hasClass("vertical_menu_header") || (f.removeClass("active-slide-side-header"), e.removeClass("active-side-header slide-right"))
		}));
		var u = jQuery(window).width(),
			c = jQuery("#box_wrapper").width();
		jQuery(window).on("resize", function () {
			u = jQuery(window).width(), c = jQuery("#box_wrapper").width()
		}), jQuery(".mainmenu_wrapper .sf-menu").on("mouseover", "ul li", function () {
			if (u > 1199) {
				var e = jQuery(this);
				if (e.find("ul").length > 0) {
					var t = e.find("ul, div").first().width();
					if (e.find("ul, div").first().parent().offset().left + t + t > c) {
						var a = t + 0;
						e.find("ul, div").first().css({
							left: -a
						})
					} else e.find("ul, div").first().css({
						left: "100%"
					})
				}
			}
		}).on("mouseover", "> li", function () {
			if (u > 1199) {
				var e = jQuery(this);
				if (e.find("ul").length > 0) {
					var t = e.find("ul").width(),
						a = e.find("ul").parent().offset().left - (jQuery(window).width() / 2 - c / 2);
					if (a + t > c) {
						var r = c - (a + t);
						e.find("ul").first().css({
							left: r
						})
					}
				}
			}
		});
		var h = jQuery(".page_header").outerHeight(!0);
		if (jQuery(".mainmenu_side_wrapper").length ? e.scrollspy({
				target: ".mainmenu_side_wrapper",
				offset: h + 10
			}) : jQuery(".mainmenu_wrapper").length && e.scrollspy({
				target: ".mainmenu_wrapper",
				offset: h + 10
			}), jQuery().localScroll && jQuery(".mainmenu_wrapper > ul, .mainmenu_side_wrapper > ul, #land, .scroll_button_wrap, .intro-layer").localScroll({
				duration: 900,
				easing: "easeInOutQuart",
				offset: -100
			}), jQuery(".bg_teaser, .image_cover, .slide-image-wrap").each(function () {
				var e = jQuery(this),
					t = e.find("img").first();
				if (t.length) {
					var a = t.attr("src");
					e.css("background-image", "url(" + a + ")")
				}
			}), jQuery().UItoTop && jQuery().UItoTop({
				easingType: "easeInOutQuart"
			}), jQuery().parallax && jQuery(".parallax").parallax("50%", .01), jQuery().prettyPhoto && jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
				hook: "data-gal",
				theme: "facebook",
				social_tools: !1,
				default_width: 1170,
				default_height: 780
			}), jQuery().carousel && jQuery(".carousel").carousel(), jQuery(".nav-tabs").each(function () {
				jQuery(this).find("a").first().tab("show")
			}), jQuery(".tab-content").each(function () {
				jQuery(this).find(".tab-pane").first().addClass("fade in")
			}), jQuery(".panel-group").each(function () {
				jQuery(this).find("a").first().filter(".collapsed").trigger("click")
			}), jQuery().tooltip && jQuery('[data-toggle="tooltip"]').tooltip(), jQuery().countdown) {
			var p = new Date;
			p.setMonth(p.getMonth() + 1), jQuery("#comingsoon-countdown").countdown({
				until: p
			})
		}
		jQuery("form.contact-form").on("submit", function (e) {
			e.preventDefault();
			var t = jQuery(this);
			var a = t.serialize();
			console.log(a);
			if (jQuery(t).find("span.contact-form-respond").remove(), jQuery(t).find('[aria-required="true"], [required]').each(function (e) {
					var t = jQuery(this);
					t.val().length || t.addClass("invalid").on("focus", function () {
						t.removeClass("invalid")
					})
				}), !t.find('[aria-required="true"], [required]').hasClass("invalid")) {
				var a = t.serialize();
				// jQuery.post("contact-form", a).done(function (e) {
				// 	jQuery(t).find('[type="submit"]').attr("disabled", !1).parent().append('<br><span style="width:100%;" class="highlight"><br>' + e + "</span>"), t.find(".form-errors").length || t[0].reset()
				// }).fail(function (e) {
				// 	jQuery(t).find('[type="submit"]').attr("disabled", !1).parent().append('<br><span style="width:100%;"  class="highlight"><br> Mail cannot be sent. You need PHP server to send mail.</span>')
				// })
			}
		}), jQuery(".search_modal_button").on("click", function (e) {
			e.preventDefault(), jQuery("#search_modal").modal("show").find("input").first().focus()
		}), jQuery("form.searchform").on("submit", function (e) {
			e.preventDefault();
			var t = jQuery(this),
				a = jQuery("#search_modal");
			if (a.find("div.searchform-respond").remove(), jQuery(t).find('[type="text"]').each(function (e) {
					var t = jQuery(this);
					t.val().length || t.addClass("invalid").on("focus", function () {
						t.removeClass("invalid")
					})
				}), !t.find('[type="text"]').hasClass("invalid")) {
				a.modal("show");
				var r = t.serialize();
				jQuery.post("search.php", r).done(function (e) {
					a.append('<div class="searchform-respond">' + e + "</div>")
				}).fail(function (e) {
					a.append('<div class="searchform-respond">Search cannot be done. You need PHP server to search.</div>')
				})
			}
		}), jQuery(".signup").on("submit", function (e) {
			e.preventDefault();
			var t = jQuery(this);
			t.find(".response").html("Adding email address..."), jQuery.ajax({
				url: "mailchimp/store-address.php",
				data: "ajax=true&email=" + escape(t.find(".mailchimp_email").val()) + "&fullname=" + escape(t.find(".mailchimp_fullname").val()),
				success: function (e) {
					t.find(".response").html(e)
				}
			})
		}), jQuery().tweet && jQuery(".twitter").tweet({
			modpath: "./twitter/",
			count: 3,
			avatar_size: 48,
			loading_text: "loading twitter feed...",
			join_text: "auto",
			username: "michaeljackson",
			template: '<span class="tweet_text highlightlinks">{tweet_text}</span><span class="darklinks">{time}</span>'
		}), jQuery("#mainteasers .col-lg-4").addWidthClass({
			breakpoints: [500, 600]
		});
		var y = jQuery("#timetable");
		if (y.length && jQuery("#timetable_filter").on("click", "a", function (e) {
				e.preventDefault(), e.stopPropagation();
				var t = jQuery(this);
				if (!t.hasClass("selected")) {
					var a = t.attr("data-filter");
					y.find("tbody td").removeClass("current").end().find(a).closest("td").addClass("current"), t.closest("ul").find("a").removeClass("selected"), t.addClass("selected")
				}
			}), jQuery("#toggle_shop_view").on("click", function (e) {
				e.preventDefault(), jQuery(this).toggleClass("grid-view"), jQuery("#products").toggleClass("grid-view list-view")
			}), jQuery().elevateZoom && jQuery("#product-image").elevateZoom({
				gallery: "product-image-gallery",
				cursor: "pointer",
				galleryActiveClass: "active",
				responsive: !0,
				loadingIcon: "img/AjaxLoader.gif"
			}), jQuery(".review-link").on("click", function (e) {
				var a = jQuery(this),
					r = jQuery('a[href="#reviews_tab"]');
				r.parent().hasClass("active") || r.tab("show").on("shown.bs.tab", function (e) {
					t.scrollTo(a.attr("href"), 400)
				}), t.scrollTo(a.attr("href"), 400)
			}), jQuery(".plus, .minus").on("click", function (e) {
				var t = jQuery(this).parent().find('[type="number"]'),
					a = t.val();
				"-" === jQuery(this).val() ? a > 1 && t.val(parseFloat(a) - 1) : t.val(parseFloat(a) + 1)
			}), jQuery("a.remove").on("click", function (e) {
				e.preventDefault(), jQuery(this).closest("tr, .media").remove()
			}), jQuery().slider) {
			var m = jQuery(".slider-range-price");
			if (m.length) {
				var g = jQuery(".price_from"),
					v = jQuery(".price_to");
				m.slider({
					range: !0,
					min: 0,
					max: 200,
					values: [30, 100],
					slide: function (e, t) {
						g.html("$" + t.values[0]), v.html("$" + t.values[1])
					}
				}), g.html("$" + m.slider("values", 0)), v.html("$" + m.slider("values", 1))
			}
		}(jQuery(".color-filters").find("a[data-background-color]").each(function () {
			jQuery(this).css({
				"background-color": jQuery(this).data("background-color")
			})
		}), jQuery().flexslider) && (jQuery(".intro_section .flexslider").each(function (e) {
			var t = jQuery(this),
				a = t.data(),
				r = "undefined" === a.nav || a.nav,
				i = "undefined" === a.dots || a.dots,
				s = t.find(".slides").children().length < 2 ? "dots-disabled" : "";
			t.addClass(s), t.flexslider({
				animation: "fade",
				pauseOnHover: !0,
				useCSS: !0,
				controlNav: i,
				directionNav: r,
				prevText: "",
				nextText: "",
				smoothHeight: !1,
				slideshowSpeed: 1e4,
				animationSpeed: 600,
				start: function (e) {
					e.find(".slide_description").children().css({
						visibility: "hidden"
					}), e.find(".flex-active-slide .slide_description").children().each(function (e) {
						var t = jQuery(this),
							a = t.data("animation") ? t.data("animation") : "fadeInRight";
						setTimeout(function () {
							t.addClass("animated " + a)
						}, 200 * e)
					}), e.find(".flex-control-nav").find("a").each(function () {
						jQuery(this).html("0" + jQuery(this).html())
					})
				},
				after: function (e) {
					e.find(".flex-active-slide .slide_description").children().each(function (e) {
						var t = jQuery(this),
							a = t.data("animation") ? t.data("animation") : "fadeInRight";
						setTimeout(function () {
							t.addClass("animated " + a)
						}, 200 * e)
					})
				},
				end: function (e) {
					e.find(".slide_description").children().each(function () {
						var e = jQuery(this),
							t = e.data("animation") ? e.data("animation") : "fadeInRight";
						e.removeClass("animated " + t).css({
							visibility: "hidden"
						})
					})
				}
			}).find(".flex-control-nav").wrap('<div class="container-fluid nav-container"/>')
		}), jQuery(".page_testimonials .flexslider").each(function (e) {
			var t = jQuery(this);
			if (!t.find(".flex-active-slide").length) {
				var a = t.data(),
					r = "undefined" === a.nav || a.nav,
					i = "undefined" === a.dots || a.dots,
					s = "undefined" === a.autoplay || a.autoplay;
				t.flexslider({
					animation: "slide",
					useCSS: !0,
					controlNav: i,
					directionNav: r,
					prevText: "",
					nextText: "",
					smoothHeight: !1,
					slideshow: s,
					slideshowSpeed: 1e4,
					animationSpeed: 400,
					start: function (e) {
						e.find(".flex-control-nav").find("a").each(function () {
							jQuery(this).html("0" + jQuery(this).html())
						})
					}
				}).find(".flex-control-nav").wrap('<div class="container-fluid nav-container"/>')
			}
		}), jQuery(".flexslider").each(function (e) {
			var t = jQuery(this);
			if (!t.find(".flex-active-slide").length) {
				var a = t.data(),
					r = "undefined" === a.nav || a.nav,
					i = "undefined" === a.dots || a.dots,
					s = "undefined" === a.autoplay || a.autoplay;
				t.flexslider({
					animation: "fade",
					useCSS: !0,
					controlNav: i,
					directionNav: r,
					prevText: "",
					nextText: "",
					smoothHeight: !1,
					slideshow: s,
					slideshowSpeed: 5e3,
					animationSpeed: 400,
					start: function (e) {
						e.find(".flex-control-nav").find("a").each(function () {
							jQuery(this).html("0" + jQuery(this).html())
						})
					}
				}).find(".flex-control-nav").wrap('<div class="container-fluid nav-container"/>')
			}
		}));
		d();
		var j = jQuery(".page_header").first(),
			Q = j.closest(".boxed").length;
		if (j.length) {
			a(), r();
			var w = j.outerHeight();
			j.wrap('<div class="page_header_wrapper"></div>');
			var _ = j.parent();
			Q || _.css({
				height: j.outerHeight()
			}), j.hasClass("header_white") ? _.addClass("header_white") : j.hasClass("header_darkgrey") ? (_.addClass("header_darkgrey"), j.hasClass("bs") && _.addClass("bs")) : j.hasClass("header_gradient") && _.addClass("header_gradient"), j.hasClass("header_transparent") && _.addClass("header_transparent_wrap");
			var b = 0;
			Q || "fixed" === _.css("position") || j.hasClass("vertical_menu_header") || (b = j.offset().top), jQuery(j).on("affixed-top.bs.affix affixed.bs.affix affixed-bottom.bs.affix", function (e) {
				j.hasClass("affix-top") ? _.removeClass("affix-wrapper affix-bottom-wrapper").addClass("affix-top-wrapper") : j.hasClass("affix") ? _.removeClass("affix-top-wrapper affix-bottom-wrapper").addClass("affix-wrapper") : j.hasClass("affix-bottom") ? _.removeClass("affix-wrapper affix-top-wrapper").addClass("affix-bottom-wrapper") : _.removeClass("affix-wrapper affix-top-wrapper affix-bottom-wrapper"), a(), r()
			}), jQuery(j).on("affixed-top.bs.affix", function () {}), jQuery(j).on("affix.bs.affix", function () {
				j.animate({
					opacity: 0,
					top: -w
				}, 0), setTimeout(function () {
					j.animate({
						opacity: 1,
						top: 0
					}, 300)
				}, 100)
			}), window.matchMedia("(min-width: 992px)").matches ? jQuery(j).affix({
				offset: {
					top: b,
					bottom: 0
				}
			}) : j.addClass("affix-top")
		}
		if (jQuery(".search_form_trigger").on("click", function (e) {
				e.preventDefault(), jQuery(".search_form_trigger, .search_form_wrapper").toggleClass("active")
			}), jQuery().owlCarousel && jQuery(".owl-carousel").each(function () {
				var e = jQuery(this),
					a = e.data(),
					r = !!a.loop && a.loop,
					i = a.margin || 0 === a.margin ? a.margin : 30,
					s = (!!a.nav && a.nav, !!a.dots && a.dots, !!a.dotsContainer && a.dotsContainer),
					o = a.themeclass ? a.themeclass : "owl-theme",
					n = !!a.center && a.center,
					l = a.items ? a.items : 4,
					d = !!a.autoplay && a.autoplay,
					f = (a.responsiveXs && a.responsiveXs, a.responsiveXxs && a.responsiveXxs, a.responsiveSm && a.responsiveSm, a.responsiveMd && a.responsiveMd, a.responsiveLg ? a.responsiveLg : 4),
					u = (a.responsiveXlg && a.responsiveXlg, !!a.filters && a.filters),
					c = !1 !== e.data("mouse-drag"),
					h = !1 !== e.data("touch-drag");
				window.matchMedia("(max-width: 1199px)").matches && (i = i > 30 ? 30 : i), u && (e.after(e.clone().addClass("owl-carousel-filter-cloned")), jQuery(u).on("click", "a", function (t) {
					t.preventDefault();
					var a = jQuery(this);
					if (!a.hasClass("selected")) {
						var r = a.attr("data-filter");
						a.siblings().removeClass("selected active"), a.addClass("selected active"), e.find(".owl-item").length;
						for (var i = e.find(".owl-item").length - 1; i >= 0; i--) e.trigger("remove.owl.carousel", [1]);
						jQuery(e.next().find(" > " + r).clone()).each(function () {
							e.trigger("add.owl.carousel", jQuery(this)), jQuery(this).addClass("scaleAppear")
						}), e.trigger("refresh.owl.carousel"), jQuery().prettyPhoto && e.find("a[data-gal^='prettyPhoto']").prettyPhoto({
							hook: "data-gal",
							theme: "facebook",
							social_tools: !1
						})
					}
				})), e.owlCarousel({
					loop: r,
					margin: i,
					nav: !0,
					navText: ["<span>prev</span>", "<span>next</span>"],
					autoplay: d,
					dots: !1,
					dotsContainer: s,
					themeClass: o,
					center: n,
					items: l,
					smartSpeed: 400,
					mouseDrag: c,
					touchDrag: h,
					responsive: {
						0: {
							items: 1
						},
						500: {
							items: 2
						},
						768: {
							items: 3
						},
						992: {
							items: 3
						},
						1200: {
							items: 3
						},
						1600: {
							items: 3
						}
					}
				}).addClass(o), n && e.addClass("owl-center"), t.on("resize", function () {
					e.trigger("refresh.owl.carousel")
				}), e.on("changed.owl.carousel", function () {
					jQuery().prettyPhoto && jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
						hook: "data-gal",
						theme: "facebook",
						social_tools: !1
					})
				})
			}), function () {
				var e = jQuery(".affix-aside");
				if (e.length) {
					e.on("affix.bs.affix", function (t) {
						var a = e.width() - 1,
							r = e.offset().left;
						e.width(a).css("left", r)
					}).on("affix-top.bs.affix affix-bottom.bs.affix", function (t) {
						e.css({
							width: "",
							left: ""
						})
					});
					var t = e.offset().top - jQuery(".page_header").height(),
						a = jQuery(".page_footer").outerHeight(!0) + jQuery(".page_copyright").outerHeight(!0);
					e.affix({
						offset: {
							top: t,
							bottom: a
						}
					}), jQuery(window).on("resize", function () {
						e.css({
							width: "",
							left: ""
						}), e.hasClass("affix") && e.removeClass("affix").css("left", "").addClass("affix-top");
						var t = jQuery(".page_topline").outerHeight(!0) + jQuery(".page_toplogo").outerHeight(!0) + jQuery(".page_header").outerHeight(!0) + jQuery(".page_breadcrumbs").outerHeight(!0) + jQuery(".blog_slider").outerHeight(!0),
							a = jQuery(".page_footer").outerHeight(!0) + jQuery(".page_copyright").outerHeight(!0);
						e.data("bs.affix").options.offset.top = t, e.data("bs.affix").options.offset.bottom = a, e.affix("checkPosition")
					})
				}
			}(), e.scrollspy("refresh"), jQuery().appear && (jQuery(".no_appear_delay").each(function (e) {
				i(jQuery(this), e)
			}), jQuery(".to_animate").appear(), jQuery(".to_animate").filter(":appeared").each(function (e) {
				i(jQuery(this), e)
			}), e.on("appear", ".to_animate", function (e, t) {
				jQuery(t).each(function (e) {
					i(jQuery(this), e)
				})
			}), jQuery().countTo && (jQuery(".counter").appear(), jQuery(".counter").filter(":appeared").each(function () {
				s(jQuery(this))
			}), e.on("appear", ".counter", function (e, t) {
				jQuery(t).each(function () {
					s(jQuery(this))
				})
			})), jQuery().progressbar && (jQuery(".progress .progress-bar").appear(), jQuery(".progress .progress-bar").filter(":appeared").each(function () {
				o(jQuery(this))
			}), e.on("appear", ".progress .progress-bar", function (e, t) {
				jQuery(t).each(function () {
					o(jQuery(this))
				})
			}), jQuery('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
				o(jQuery(jQuery(e.target).attr("href")).find(".progress .progress-bar"))
			}), jQuery(".dropdown").on("shown.bs.dropdown", function (e) {
				o(jQuery(this).find(".progress .progress-bar"))
			})), jQuery().easyPieChart && (jQuery(".chart").appear(), jQuery(".chart").filter(":appeared").each(function () {
				n(jQuery(this))
			}), e.on("appear", ".chart", function (e, t) {
				jQuery(t).each(function () {
					n(jQuery(this))
				})
			}))), jQuery().jflickrfeed) {
			var C = jQuery("#flickr, .flickr_ul");
			C.length && (C.hasClass("flickr_loaded") || C.jflickrfeed({
				flickrbase: "http://api.flickr.com/services/feeds/",
				limit: 6,
				qstrings: {
					id: "131791558@N04"
				},
				itemTemplate: '<a href="{{image_b}}" data-gal="prettyPhoto[pp_gal]"><li><img alt="{{title}}" src="{{image_m}}" /></li></a>'
			}, function (e) {
				C.find("a").prettyPhoto({
					hook: "data-gal",
					theme: "facebook"
				})
			}).addClass("flickr_loaded"))
		}
		jQuery().spectragram && {
			instaToken: "3905738328.60c782d.b65ed3f058d64e6ab32c110c6ac12d9b",
			instaID: "60c782dfecaf4050b59ff4c159246641",
			init: function () {
				jQuery.fn.spectragram.accessData = {
					accessToken: this.instaToken,
					clientID: this.instaID
				}, jQuery(".instafeed").each(function () {
					var e = jQuery(this);
					e.find("img").length || e.spectragram("getRecentTagged", {
						max: 4,
						query: "grey",
						wrapEachWith: '<div class="photo" />'
					})
				})
			}
		}.init();
		jQuery(".embed-placeholder").each(function () {
			jQuery(this).on("click", function (e) {
				var t = jQuery(this);
				t.attr("data-gal") || (e.preventDefault(), "" === t.attr("href") || "#" === t.attr("href") ? t.replaceWith(t.data("iframe").replace(/&amp/g, "&").replace(/$lt;/g, "<").replace(/&gt;/g, ">").replace(/$quot;/g, '"')).trigger("click") : t.replaceWith('<iframe class="embed-responsive-item" src="' + t.attr("href") + '?rel=0&autoplay=1"></iframe>'))
			})
		}), jQuery(".isotope_container").each(function (e) {
			var t = jQuery(this),
				a = t.hasClass("masonry-layout") ? "masonry" : "fitRows",
				r = t.find(".col-lg-20").length ? ".col-lg-20" : "";
			t.isotope({
				percentPosition: !0,
				layoutMode: a,
				masonry: {
					columnWidth: r
				}
			});
			var i = jQuery(this).attr("data-filters") ? jQuery(jQuery(this).attr("data-filters")) : t.prev().find(".filters");
			if (i.length) {
				var s = i.find(".selected"),
					o = s.attr("data-filter");
				t.isotope({
					filter: o
				}), s.addClass("active"), i.on("click", "a", function (e) {
					e.preventDefault();
					var a = jQuery(this),
						r = a.attr("data-filter");
					t.isotope({
						filter: r
					}), a.siblings().removeClass("selected active"), a.addClass("selected active")
				}), i.on("change", "select", function (e) {
					e.preventDefault();
					var a = jQuery(this).val();
					t.isotope({
						filter: a
					})
				})
			}
		});
		var x = jQuery("#messages_modal");
		x.find("ul").length && x.modal("show"), jQuery(".preloaderimg").fadeOut(150), jQuery(".preloader").fadeOut(350).delay(200, function () {
			jQuery(this).remove()
		}), jQuery(".search_form_trigger").on("click", function (e) {
			e.preventDefault()
		}), jQuery("[href='#0']").on("click", function (e) {
			e.preventDefault()
		}), l(), jQuery(".post-related .item-media-wrap, .post-related .item-media .owl-item").each(function (e, t) {
			var a = jQuery(t),
				r = a.children(".item-media, .item"),
				i = r.children("img"),
				s = a.height() * i.width() / i.height();
			s > r.width() ? i.css("width", s) : i.css("max-width", "100%")
		})
	}
	t.on("load", function () {
		f()
	}), t.ready(function () {
		if (jQuery(".section_header").filter(function (e, t) {
				return jQuery(t).parent().hasClass("row")
			}).each(function () {
				jQuery(this).closest("section").addClass("with_pos_heading").prev().addClass("before_pos_heading")
			}), jQuery(".section_bg_header").filter(function (e, t) {
				return jQuery(t).parent().hasClass("row")
			}).each(function () {
				var e = jQuery(this);
				e.hasClass("before_section") ? e.closest("section").prev().addClass("before_bg_heading") : e.closest("section").addClass("with_bg_heading")
			}), jQuery().selectize) {
			var e = jQuery("select");
			e.length > 0 && e.selectize({
				create: !0,
				sortField: "text"
			})
		}
		var t = jQuery("#map, .page_map");
		t.length && t.each(function () {
			var e, t, a, r = jQuery(this),
				i = [{
					featureType: "water",
					elementType: "geometry",
					stylers: [{
						color: "#e9e9e9"
					}, {
						lightness: 17
					}]
				}, {
					featureType: "landscape",
					elementType: "geometry",
					stylers: [{
						color: "#f5f5f5"
					}, {
						lightness: 20
					}]
				}, {
					featureType: "road.highway",
					elementType: "geometry.fill",
					stylers: [{
						color: "#ffffff"
					}, {
						lightness: 17
					}]
				}, {
					featureType: "road.highway",
					elementType: "geometry.stroke",
					stylers: [{
						color: "#ffffff"
					}, {
						lightness: 29
					}, {
						weight: .2
					}]
				}, {
					featureType: "road.arterial",
					elementType: "geometry",
					stylers: [{
						color: "#ffffff"
					}, {
						lightness: 18
					}]
				}, {
					featureType: "road.local",
					elementType: "geometry",
					stylers: [{
						color: "#ffffff"
					}, {
						lightness: 16
					}]
				}, {
					featureType: "poi",
					elementType: "geometry",
					stylers: [{
						color: "#f5f5f5"
					}, {
						lightness: 21
					}]
				}, {
					featureType: "poi.park",
					elementType: "geometry",
					stylers: [{
						color: "#dedede"
					}, {
						lightness: 21
					}]
				}, {
					elementType: "labels.text.stroke",
					stylers: [{
						visibility: "on"
					}, {
						color: "#ffffff"
					}, {
						lightness: 16
					}]
				}, {
					elementType: "labels.text.fill",
					stylers: [{
						saturation: 36
					}, {
						color: "#333333"
					}, {
						lightness: 40
					}]
				}, {
					elementType: "labels.icon",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "transit",
					elementType: "geometry",
					stylers: [{
						color: "#f2f2f2"
					}, {
						lightness: 19
					}]
				}, {
					featureType: "administrative",
					elementType: "geometry.fill",
					stylers: [{
						color: "#fefefe"
					}, {
						lightness: 20
					}]
				}, {
					featureType: "administrative",
					elementType: "geometry.stroke",
					stylers: [{
						color: "#fefefe"
					}, {
						lightness: 17
					}, {
						weight: 1.2
					}]
				}],
				s = r.data("address") ? r.data("address") : "london, baker street, 221b",
				o = r.find(".map_marker_description").prop("outerHTML"),
				n = r.find("h3").first().text() ? r.find("h3").first().text() : "Map Title",
				l = r.find(".map_marker_icon").first().attr("src"),
				d = new google.maps.Geocoder;
			d.geocode({
				address: s
			}, function (s) {
				e = s[0].geometry.location.lat(), t = s[0].geometry.location.lng();
				var f = new google.maps.LatLng(e, t),
					u = {
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						zoom: 16,
						draggable: !1,
						scrollwheel: !1,
						center: f,
						styles: i
					};
				a = new google.maps.Map(r[0], u);
				var c = new google.maps.Marker({
						position: f,
						title: n,
						map: a,
						icon: l
					}),
					h = [],
					p = new google.maps.InfoWindow({
						content: o
					});
				h.push(p), google.maps.event.addListener(c, "click", function () {
					for (var e = 0; e < h.length; e++) h[e].close();
					p.open(a, c)
				}), r.data("markers") && jQuery(r.data("markers")).each(function (e) {
					var t = this,
						r = "";
					r += t.markerTitle ? "<h3>" + t.markerTitle + "</h3>" : "", (r += t.markerDescription ? "<p>" + t.markerDescription + "</p>" : "") && (r = '<div class="map_marker_description">' + r + "</div>"), d.geocode({
						address: this.markerAddress
					}, function (e) {
						var i = e[0].geometry.location.lat(),
							s = e[0].geometry.location.lng(),
							o = new google.maps.LatLng(i, s),
							n = new google.maps.Marker({
								position: o,
								title: t.markerTitle,
								map: a,
								icon: t.markerIconSrc ? t.markerIconSrc : ""
							}),
							l = new google.maps.InfoWindow({
								content: r
							});
						h.push(l), google.maps.event.addListener(n, "click", function () {
							for (var e = 0; e < h.length; e++) h[e].close();
							l.open(a, n)
						})
					})
				})
			})
		}), jQuery(".choice").on("change", function () {
			"" === jQuery(this).val() ? jQuery(this).addClass("empty") : jQuery(this).removeClass("empty")
		})
	}), t.on("resize", function () {
		e.scrollspy("refresh"), a(), l(), r();
		var t = jQuery(".page_header").first();
		t.length && !jQuery(document).scrollTop() && t.first().data("bs.affix") && (t.first().data("bs.affix").options.offset.top = t.offset().top), t.closest(".boxed").length || jQuery(".page_header_wrapper").css({
			height: t.first().outerHeight()
		}), d()
	})
}();