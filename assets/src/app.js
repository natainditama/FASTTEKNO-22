import"/assets/library/jquery/jquery-3.6.0.min.js";import"/assets/library/smooth-scroll/smooth-scroll.min.js";import"/assets/library/flickity/flickity.pkgd.min.js";import"/assets/library/fancybox/fancybox.esm.js";import{formatDate,fetchAPI,getMouseDirection,sortTime,sliceString,splitNumber}from"/assets/src/utils.js";async function main(){function t(t="artikel",e="desc"){$.getJSON(`/data/${t}.json`,(function(t){const{posts:a,category:s}=t.pageProps;"/informasi.html"==location.pathname&&($("title").text(`PanduCovid - ${s.description}`),$(".inform-title").html(`<strong class="text-2xl font-semibold">${s.name}</strong> <span class="hidden md:flex">-</span> ${s.description}`)),$(".inform-col").empty(),[...sortTime(a,"date_gmt",e)].forEach((function(t){$(".inform-col").append(`<div class="hover:shadow transition rounded-lg overflow-hidden h-full mb-6">\n        <img src="/assets/images/news.jpg" class="w-full" alt="${t.slug}" />\n        <a href="#" class="bg-white flex flex-1 flex-col p-4 gap-4 h-full">\n          <span class="text-sm opacity-75">${formatDate(t.date_gmt)}</span>\n          <span class="text-lg font-medium hover:text-primary hover:underline -mt-3">\n            ${t.title.rendered}\n          </span>\n          <div class="flex">${t.excerpt.rendered}</div>\n        </a>\n      </div>`)}))})).fail((function(t){console.error("error",t)}))}function e(t){$(t).each((function(){const t=parseInt($(this).attr("data-count"));$(this).text();$(this).animate({countNum:t},{duration:3e3,easing:"linear",step:function(){$(this).text(Math.floor(this.countNum)),splitNumber(this)},complete:function(){$(this).text(this.countNum),splitNumber(this)}})}))}$("html, body").animate({scrollTop:0},1e3),$.getJSON("/data/artikel.json",(function(t){const{posts:e}=t.pageProps;[...e.filter((t=>t.excerpt.rendered.length>150))].slice(0,5).forEach((function(t){t.excerpt.rendered.length>150&&$(".news-carousel").append(`<div class="carousel-cell p-4 w-full md:w-1/2">\n          <div class="hover:shadow transition rounded-lg overflow-hidden h-full">\n            <img src="/assets/images/news.jpg" class="w-full" alt="${t.slug}" />\n            <a href="#" class="flex flex-1 flex-col p-4 gap-4 h-full">\n              <span class="text-lg font-medium hover:text-primary hover:underline">\n                ${sliceString(t.title.rendered,27)}\n              </span>\n              <div class="flex">${sliceString(t.excerpt.rendered,150)}</div>\n            </a>\n          </div>\n        </div>`)}))})).fail((function(t){console.error("error",t)})),$.getJSON("/data/panduan.json",(function(t){const{posts:e}=t.pageProps;[...sortTime(e,"date_gmt","desc")].slice(0,5).forEach((function(t){$(".news-suggest").append(`<li class="text-primary opacity-75 hover:opacity-100 transition-colors py-4 px-6 border-t">\n        <a href="#" class="flex justify-between items-center gap-4 news-link capilatize">\n          ${t.title.rendered}\n          <i class="fa-solid fa-arrow-right"></i>\n        </a>\n      </li>`)}))})).fail((function(t){console.error("error",t)})),t($('input[name="category"]').val(),$('input[name="order"]').val()),$(".hamburger").click((function(){$(".hamburger").toggleClass("is-active"),setTimeout((()=>$("body").toggleClass("sidebar-open")),25),setTimeout((()=>$("body").removeClass("search-open")),25)})),$(".btn-search").click((function(){$(".hamburger").removeClass("is-active"),$("input#search").focus().select(),setTimeout((()=>$("body").addClass("search-open")),25),setTimeout((()=>$("body").removeClass("sidebar-open")),25)})),$(".close-search").click((function(){$(".hamburger").removeClass("is-active"),setTimeout((()=>$("body").toggleClass("search-open")),25),setTimeout((()=>$("body").removeClass("sidebar-open")),25)})),$(document).click((function(t){$(t.target).closest(".hamburger").length||$(t.target).closest("nav").length||$(t.target).closest(".sidebar").length||($("body").removeClass("sidebar-open"),$(".hamburger").removeClass("is-active")),$(t.target).closest(".btn-search").length||$(t.target).closest(".search-box").length||$("body, html").removeClass("search-open")}));let a={x:0,y:0,dir:"left"};a.dir=$(window).width()>768?"left":"down",$(".symptoms-grid").mousemove((function(t){a.dir=getMouseDirection(t,a.x,a.y,a.dir),a.x=t.pageX,a.y=t.pageY})),$(".card").hover((function(t){a.dir=getMouseDirection(t,a.x,a.y,a.dir),a.x=t.pageX,a.y=t.pageY,$(this).attr("class","card"),$(this).addClass(`card-slide-${a.dir}`).addClass("card")}),(function(t){a.dir=getMouseDirection(t,a.x,a.y,a.dir),a.x=t.pageX,a.y=t.pageY,$(this).attr("class","card"),$(this).addClass(`card-slide-${a.dir}`).addClass("card")})),$(".side-link").each((function(){$(this).css("transition-delay",.1*$(this).index()+.2+"s"),$(this).attr("href")==location.pathname&&$(this).addClass("active"),"/"==location.pathname&&$('[href="/index.html"]').addClass("active")})),$(".nav-link").each((function(){$(this).attr("href")==location.pathname&&$(this).addClass("active"),"/"==location.pathname&&$('[href="/index.html"]').addClass("active")})),$(".scroll-top").fadeOut(0),$(window).scroll((function(){$(this).scrollTop()>=$(".navbar").offset().top?($(".navbar").addClass("animate"),$(".bg-line").addClass("md:pt-20")):($(".navbar").removeClass("animate"),$(".bg-line").removeClass("md:pt-20")),$(this).scrollTop()>=$("body").height()-$("body").height()/4?$(".scroll-top").fadeIn(100):$(".scroll-top").fadeOut(300)}));(new SmoothScroll).animateScroll($("#top"),$(".scroll-top"),{speed:3e3,easing:"easeInOutCubic"}),$(window).width()>768&&$(".accordion li").first().addClass("open"),$(".accordion-header").click((function(){$(this).next().slideToggle(50),$(this).parent().toggleClass("open"),$(".accordion-body").not($(this).next()).slideUp(0).parent().removeClass("open"),$(this).find("i").toggleClass("fa-plus").toggleClass("fa-minus"),$(this).parent().siblings().find("i").removeClass("fa-minus").addClass("fa-plus")})),$(".accordion li").each((function(){$(this).hasClass("open")&&($(this).find(".accordion-body").slideDown(0),$(this).find(".accordion-header i").addClass("fa-minus").removeClass("fa-plus"))}));let s="artikel",n="desc";$('input[name="category"]').change((function(){s=$(this).val(),t($(this).val(),n)})),$('input[name="order"]').change((function(){n=$(this).val(),t(s,$(this).val())}));try{const t=await fetchAPI("https://apicovid19indonesia-v2.vercel.app/api/indonesia");for(let a in t)$(".counter").each((function(){$(this).attr("data-target")==a&&$(this).attr("data-count",t[a])})),e(`.counter[data-target="${a}"]`),$(".last-update").text(`* Terakhir diperbarui: ${formatDate(t.lastUpdate)} Indonesia Time`)}catch(t){console.error("error",t),$(".last-update").text("* Mohon maaf, terjadi kesalahan.Mohon coba lagi.")}try{const t=await fetchAPI("https://vaksincovid19-api.vercel.app/api/vaksin");for(let a in t)$(".counter").each((function(){$(this).attr("data-target")==a&&$(this).attr("data-count",t[a])})),e(`.counter[data-target="${a}"]`),$(".last-update-vaksin").text(`* Terakhir diperbarui: ${formatDate(t.lastUpdate)} Indonesia Time`)}catch(t){console.error("error",t),$(".last-update-vaksin").text("* Mohon maaf, terjadi kesalahan.Mohon coba lagi.")}$(".search-form").submit((function(t){t.preventDefault();const e=$(this).serializeArray()[0].value;$("#search").attr("value",e),e.length>0?$.getJSON("/data/full.json",(function(t){const{posts:a}=t.pageProps;$(".search-form").next().empty(),$(".search-form").next().append('<span class="inset-0 m-auto h-max w-max absolute">Tidak ada ditemukan</span>'),a.forEach((function(t){const{title:a,excerpt:s}=t;let n=$.trim($(s.rendered).text()).toLowerCase();const o=n.indexOf(e);o>=0&&(n=(n.length,n.substring(0,o)+"<span class='highlight'>"+n.substring(o,o+e.length)+"</span>"+n.substring(o+e.length)),$(".search-form").next().append(`<li class="opacity-75 transition-colors py-4 px-6 border-b">\n                <a href="#" class="hover:text-primary flex justify-start capitalize items-center">\n                  ${a.rendered}\n                </a>\n                <p>${n}</p>\n              </li>`),$(".search-form").next().find("span.absolute").remove())}))})).fail((function(t){console.error("error",t)})):($(".search-form").next().empty(),$(".search-form").next().append('<span class="inset-0 m-auto h-max w-max absolute">Tidak ada ditemukan</span>'))}));try{$.getJSON("/data/artikel.json",(function(t){const{posts:e}=t.pageProps;$('[data-category="artikel"]').text(e.length)})),$.getJSON("/data/bacaan.json",(function(t){const{posts:e}=t.pageProps;$('[data-category="bacaan"]').text(e.length)})),$.getJSON("/data/panduan.json",(function(t){const{posts:e}=t.pageProps;$('[data-category="panduan"]').text(e.length)})),$.getJSON("/data/checklist.json",(function(t){const{posts:e}=t.pageProps;$('[data-category="checklist"]').text(e.length)}))}catch(t){console.error("error",t)}$(".news-carousel").flickity({cellAlign:"left",fullscreen:!0,prevNextButtons:!1,autoPlay:!0})}$(main);