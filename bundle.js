!function(a){function i(t){if(n[t])return n[t].exports;var e=n[t]={exports:{},id:t,loaded:!1};return a[t].call(e.exports,e,e.exports,i),e.loaded=!0,e.exports}var n={};return i.m=a,i.c=n,i.p="",i(0)}([function(a,i,n){a.exports=n(1)},function(a,i,n){"use strict";function t(){var a=localStorage["simpread-version"];a||(localStorage["simpread-version"]=g)}function e(){$(".download .online, .install .now").on("click",function(){return $(".downloads")[0].scrollIntoView({behavior:"smooth",block:"start",inline:"start"})})}function s(){$(".main .feature.puread .mode .label").on("click",function(a){$(".main .feature.puread .mode .label").removeClass("active").find(".sub").removeClass("active"),$(a.currentTarget).addClass("active").find(".sub").addClass("active"),$(".main .feature.puread video").removeClass("active"),$(".main .feature.puread video[data-type="+$(a.currentTarget).attr("data-type")+"]").addClass("active")})}function r(){var a='<li class="nav-home"><a href="http://ksria.com/simpread/"><i class="fas fa-home"></i> 官网</a></li>\n                  <li class="nav-plugin"><a target="_blank" href="https://simp.red"><i class="fas fa-globe"></i> 在线版</a></li>\n                  <li class="nav-ios"><a href="http://ksria.com/simpread/#jsbox"><i class="fab fa-apple"></i> iOS</a></li>\n                  <li class="nav-lite"><a href="http://ksria.com/simpread/#lite"><i class="fas fa-lightbulb"></i> 轻阅版</a></li>\n                  <li class="nav-plugin"><a href="https://simpread.ksria.cn/plugins"><i class="fas fa-plug"></i> 插件中心</a></li>\n                  <li class="nav-docs"><a href="http://ksria.com/simpread/docs" target="_blank"><i class="fas fa-question-circle"></i> 文档中心</a></li>\n                  <li class="nav-changelog"><a href="http://ksria.com/simpread/changelog.html" target="_blank"><i class="fas fa-bullhorn"></i> 更新日志</a></li>\n                  <div class="hamburger hamburger--elastic"><div class="hamburger-box"><div class="hamburger-inner"></div></div></div>';["/","/simpread/"].includes(location.pathname)?($(".top .nav-ios     a").on("click",function(){return $(".jsbox")[0].scrollIntoView({behavior:"smooth",block:"start",inline:"start"})}),$(".top .nav-lite    a").on("click",function(){return $(".lite")[0].scrollIntoView({behavior:"smooth",block:"start",inline:"start"})}),$(".top .nav-feature a").on("click",function(){return $("#feature")[0].scrollIntoView({behavior:"smooth",block:"start",inline:"start"})})):$("ul.navigator").html(a),$(document).scroll(function(){$("body").scrollTop()>0?!$(".top").hasClass("scroll")&&$(".top").addClass("scroll"):$(".top").hasClass("scroll")&&$(".top").removeClass("scroll")})}function l(){var a='<div class="menu-bg">\n                    <div class="menu">\n                        <div class="menuitem">\n                            <div class="title"><a href="https://simpread.ksria.cn/plugins">插件中心 <i class="fas fa-external-link-square-alt"></i></a></div>\n                            <div class="links">\n                                <div class="link">\n                                    <a href="https://github.com/Kenshin/simpread/issues/500" target="_blank">代码块增强 <i class="fas fa-long-arrow-alt-right"></i></a>\n                                    <span>包括：高亮，去重；支持 CSDN 等特殊情况的代码段</span>\n                                </div>\n                                <div class="link">\n                                    <a href="https://simpread.ksria.cn/plugins/details/3PHAZerSkb" target="_blank">页面信息统计 <i class="fas fa-long-arrow-alt-right"></i></a>\n                                    <span>包括：英文单词，段落，汉字个数，阅读时间，阅读进度的统计</span>\n                                </div>\n                                <div class="link">\n                                    <a href="https://simpread.ksria.cn/plugins/details/NupOHRQHZ2" target="_blank">划词搜索 <i class="fas fa-long-arrow-alt-right"></i></a>\n                                    <span>内置多种搜索引擎</span>\n                                </div>\n                                <div class="link">\n                                    <a href="https://simpread.ksria.cn/plugins/details/Y7JxbP7B4H" target="_blank">全文翻译 <i class="fas fa-long-arrow-alt-right"></i></a>\n                                    <span>可将页面内的正文逐段翻译为英文</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="menuitem">\n                            <div class="title"><a href="http://ksria.com/simpread/docs" target="_blank">帮助中心 <i class="fas fa-external-link-square-alt"></i></a></div>\n                            <div class="links">\n                                <div class="link">\n                                    <a href="http://ksria.com/simpread/guide/" target="_blank">新手入门 <i class="fas fa-long-arrow-alt-right"></i></a>\n                                    <span>互动式新手入门</span>\n                                </div>\n                                <div class="link">\n                                    <a href="http://ksria.com/simpread/docs/#/" target="_blank">文档中心 <i class="fas fa-long-arrow-alt-right"></i></a>\n                                    <span>关于简悦的全部功能介绍</span>\n                                </div>\n                                <div class="link">\n                                    <a href="https://github.com/Kenshin/simpread/issues/618" target="_blank">常见问题汇总 <i class="fas fa-long-arrow-alt-right"></i></a>\n                                    <span>简悦已服务 60K+ 的用户，新手可以看看这里，或许能找到你的问题</span>\n                                </div>\n                                <div class="link">\n                                    <a href="https://github.com/Kenshin/simpread/issues/618" target="_blank">新闻汇总页 <i class="fas fa-long-arrow-alt-right"></i></a>\n                                    <span>简悦的新闻页，里面有关于简悦各种信息咨询的汇总</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="menuitem">\n                            <div class="title">媒体报道 <i class="fas fa-external-link-square-alt"></i></div>\n                            <div class="links">\n                                <div class="link">\n                                    <a href="https://sspai.com/post/52492" target="_blank">少数派 <i class="fas fa-long-arrow-alt-right"></i></a>\n                                    <span>不只是「完美」阅读模式，他想用这款阅读工具帮你更好获取知识：专访简悦</span>\n                                </div>\n                                <div class="link">\n                                    <a href="https://www.ifanr.com/app/1240289" target="_blank">爱范儿 <i class="fas fa-long-arrow-alt-right"></i></a>\n                                    <span>专访《简悦》：改善 318 类网站，只为做最好的「阅读模式」</span>\n                                </div>\n                                <div class="link">\n                                    <a href="https://www.waerfa.com/simpread-review" target="_blank">玩儿法 <i class="fas fa-long-arrow-alt-right"></i></a>\n                                    <span>简悦：无干扰的沉浸式阅读体验</span>\n                                </div>\n                                <div class="link">\n                                    <a href="https://zhuanlan.zhihu.com/p/60222691" target="_blank">GitHub Daily <i class="fas fa-long-arrow-alt-right"></i></a>\n                                    <span>如何在开源的同时斩获 Chrome 商城 40000+ 用户</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                  </div>';$(".top").append('<nav class="menubar"></nav>'),$(".navigator .hamburger").on("click",function(i){$(i.currentTarget).hasClass("is-active")?($(".main, .header .download").css("opacity",1),$(".top .menubar").empty()):($(".top .menubar").html(a),$(".header .title, .header .desc, .header .download, .header .introduce img").css({"animation-fill-mode":"none"}),$(".header .download").css("opacity",0),setTimeout(function(){$(".menu-bg .menu").addClass("open"),$(".main").css("opacity",0)},200)),$(".top .hamburger").toggleClass("active"),$(".top .menubar").toggleClass("active"),$(i.currentTarget).toggleClass("is-active")})}function o(){if(["/","/simpread/"].includes(location.pathname)&&!v.verify()){var a=$(".top").height(),i=$(".header").height(),n=$(".introduce img").height(),t=$(".header .title")[0].offsetHeight,e=$(".header .desc")[0].offsetHeight,s=$(".header .download")[0].offsetHeight,r=document.body.clientHeight,l=document.body.clientWidth;if(r>a+i){var o=r-a-i;$(".header").height(r-a),$(".introduce img").height(n+o<=650?n+o:650)}setTimeout(function(){$(".introduce img").width()>l&&($(".introduce img").css({height:"auto","max-width":"80%"}),setTimeout(function(){$(".header").height(t+e+s+$(".introduce").height())},200))},200)}}function c(){if(location.pathname.endsWith("changelog.html")){var a="";$(".version .num a").map(function(i,n){var t=$(n),e=t.attr("name"),s=t.text();a+='<div class="outline" data-id="'+e+'">'+s+"</div>"}),$(".toc").append(a),$(".toc-header .collapse").on("click",function(a){$(".toc").slideToggle()}),$(".toc .outline").on("click",function(a){$(".num").find('a[name="'+a.currentTarget.dataset.id+'"]')[0].scrollIntoView({block:"end"})}),$(".version .num").map(function(a,i){0==a&&$(i).append('<span class="collapse"><i class="fas fa-angle-up"></i></span>'),a>0&&$(i).append('<span class="collapse active"><i class="fas fa-angle-up"></i></span>')}),$(".versions .collapse").on("click",function(a){$(a.currentTarget).toggleClass("active").parent().next().slideToggle()})}}function d(){["/","/simpread/"].includes(location.pathname)&&new Swiper(".swiper-container",{pagination:{el:".swiper-pagination",loop:!0,clickable:!0,dynamicBullets:!0}})}function p(){location.pathname.endsWith("privacy.html")&&$(".languages ul.nav a").on("click",function(a){var i=$(a.currentTarget),n=i.attr("aria-controls");$(".languages ul.nav a").attr("aria-expanded",!1),i.attr("aria-expanded",!0),i.parent().parent().find("li").removeClass("active"),i.parent().addClass("active"),$(".tab-pane").removeClass("active"),$(".tab-content").find("#"+n).addClass("active")})}function h(){var a='<div class="groups">\n                    <div class="links">\n                        <a href="http://ksria.com/simpread" class="logo"><span></span></a>\n                        <ul>\n                            <li><a class="social" target="_blank" href="http://service.weibo.com/share/share.php?url=http://ksria.com/simpread&title=%E7%AE%80%E6%82%A6%EF%BC%88SimpRead%EF%BC%89-%20%E8%AE%A9%E4%BD%A0%E7%9E%AC%E9%97%B4%E8%BF%9B%E5%85%A5%E6%B2%89%E6%B5%B8%E5%BC%8F%E9%98%85%E8%AF%BB%E7%9A%84%20Chrome%20%E6%89%A9%E5%B1%95&pic=http://ksria.com/simpread/assets/image/introduce.png"><i class="fab fa-weibo"></i></a></li>\n                            <li><a class="social" target="_blank" href="https://twitter.com/intent/tweet?via=wanglei001&amp;text=%E7%AE%80%E6%82%A6%EF%BC%88SimpRead%EF%BC%89-%20%E8%AE%A9%E4%BD%A0%E7%9E%AC%E9%97%B4%E8%BF%9B%E5%85%A5%E6%B2%89%E6%B5%B8%E5%BC%8F%E9%98%85%E8%AF%BB%E7%9A%84%20Chrome%20%E6%89%A9%E5%B1%95&amp;url=http://ksria.com/simpread"><i class="fab fa-twitter"></i></a></li>\n                            <li><a class="social" target="_blank" href="https://www.facebook.com/dialog/feed?app_id=1528743474024441&link=http://ksria.com/simpread&picture=http://simpread.qiniudn.com/introduce.png&name=simpread&description=%E7%AE%80%E6%82%A6%EF%BC%88SimpRead%EF%BC%89-%20%E8%AE%A9%E4%BD%A0%E7%9E%AC%E9%97%B4%E8%BF%9B%E5%85%A5%E6%B2%89%E6%B5%B8%E5%BC%8F%E9%98%85%E8%AF%BB%E7%9A%84%20Chrome%20%E6%89%A9%E5%B1%95&redirect_uri=http://ksria.com/simpread"><i class="fab fa-facebook-f"></i></a></li>\n                            <li><a class="social" target="_blank" href="https://t.me/simpread"><i class="fab fa-telegram-plane"></i></a></li>\n                        </ul>\n                    </div>\n                    <div class="links">\n                        <h1>支持</h1>\n                        <a href="http://ksria.com/simpread/changelog.html">更新日志</a>\n                        <a href="http://ksria.com/simpread/docs/#/" target="_blank">帮助</a>\n                        <a href="http://ksria.com/simpread/docs/#/入门指南（-操作指引-）" target="_blank">新手入门</a>\n                        <a href="https://github.com/kenshin/simpread/issues" target="_blank">反馈</a>\n                    </div>\n                    <div class="links">\n                        <h1>关于</h1>\n                        <a href="http://kenshin.wang" target="_blank">关于作者</a>\n                        <a href="http://weibo.com/23784148" target="_blank">微博</a>\n                    </div>\n                    <div class="links">\n                        <h1>产品</h1>\n                        <a href="http://ksria.com/simptab" target="_blank">简 Tab - 极简的 Chrome 新标签页扩展</a>\n                        <a href="http://ksria.com/gnvm" target="_blank">GNVM - 使用 Go 语言编写的 Node.js 多版本管理器</a>\n                        <a href="http://ksria.com/emoji" target="_blank">+Emoji - 简单、可靠、纯粹的中文语义化 Emoji 扩展</a>\n                        <a href="http://ksria.com/sov2ex" target="_blank">sov2ex - 一个便捷的 v2ex 站内搜索引擎</a>\n                    </div>\n                </div>\n                <div class="copywrite">\n                    <span>简悦 SimpRead - 如杂志般沉浸式阅读体验的扩展</span> <span>&nbsp;©&nbsp;2017 ~ 2020 <a href="http://ksria.com/simpread">ksria.com</a> by <a href="http://kenshin.wang" target="_blank">Kenshin Wang</a></span>\n                </div>';$(".footer").html(a),!["/","/simpread/"].includes(location.pathname)&&0==$(".undefined.auth").length&&$(".undefined").length>0&&document.body.clientHeight>$(".top").height()+$(".undefined").height()+$(".footer").height()&$(".footer").addClass("fixed")}function u(){["/","/simpread/"].includes(location.pathname)&&(Waves.init(),$(".feature .snapshot img.image").map(function(a,i){return Waves.attach($(i)[0],["waves-image"])}),$(".group.productive .icons .icon, .group.plugins .icons .icon").map(function(a,i){return Waves.attach($(i)[0],["waves-circle","waves-float","waves-light"])}),Waves.attach($(".download .online")[0],["waves-button"]),Waves.attach($("a.userscript")[0],["waves-button"]),Waves.attach($(".install .now")[0],[]),$(".jsbox-platform a").map(function(a,i){return Waves.attach($(i)[0],["waves-button"])}),$(".group.browser .platform a").map(function(a,i){return Waves.attach($(i)[0],["waves-block"])}),$(".group.feature.all .only").map(function(a,i){return Waves.attach($(i)[0],["waves-block"])}),$(".media .company a").map(function(a,i){return Waves.attach($(i)[0],["waves-block"])}))}function m(){["/","/simpread/"].includes(location.pathname)&&AOS.init()}function f(){function a(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],a("js",new Date),a("config","UA-405976-9")}n(2);var g="1.0.6.1130",v={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},verify:function(){return null!=(v.Android()||v.BlackBerry()||v.iOS()||v.Opera()||v.Windows())}};v.verify()&&$("link#aos").remove(),$(document).ready(function(){m(),e(),s(),r(),l(),o(),d(),c(),p(),h(),u(),t(),f()}),$(window).resize(function(){return o()})},function(a,i){}]);