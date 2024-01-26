/* =============================================================
 * bootstrap-collapse.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */!function(e){"use strict";var t=function(t,n){this.$element=e(t);this.options=e.extend({},e.fn.collapse.defaults,n);this.options.parent&&(this.$parent=e(this.options.parent));this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension();n=e.camelCase(["scroll",t].join("-"));r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide");i||r.data("collapse",null)}this.$element[t](0);this.transition("addClass",e.Event("show"),"shown");e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension();this.reset(this.$element[t]());this.transition("removeClass",e.Event("hide"),"hidden");this.$element[t](0)},reset:function(e){var t=this.dimension();this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth;this.$element[e!==null?"addClass":"removeClass"]("collapse");return this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset();i.transitioning=0;i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1;this.$element[t]("in");e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s));typeof n=="string"&&i[n]()})};e.fn.collapse.defaults={toggle:!0};e.fn.collapse.Constructor=t;e.fn.collapse.noConflict=function(){e.fn.collapse=n;return this};e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed");e(i).collapse(s)})}(window.jQuery);!function(e){"use strict";function t(){e(r).each(function(){n(e(this)).removeClass("open")})}function n(t){var n=t.attr("data-target"),r;if(!n){n=t.attr("href");n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")}r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var r="[data-toggle=dropdown]",i=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};i.prototype={constructor:i,toggle:function(r){var i=e(this),s,o;if(i.is(".disabled, :disabled"))return;s=n(i);o=s.hasClass("open");t();o||s.toggleClass("open");i.focus();return!1},keydown:function(t){var i,s,o,u,a,f;if(!/(38|40|27)/.test(t.keyCode))return;i=e(this);t.preventDefault();t.stopPropagation();if(i.is(".disabled, :disabled"))return;u=n(i);a=u.hasClass("open");if(!a||a&&t.keyCode==27){t.which==27&&u.find(r).focus();return i.click()}s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus"));t.keyCode==38&&f>0&&f--;t.keyCode==40&&f<s.length-1&&f++;~f||(f=0);s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var n=e(this),r=n.data("dropdown");r||n.data("dropdown",r=new i(this));typeof t=="string"&&r[t].call(n)})};e.fn.dropdown.Constructor=i;e.fn.dropdown.noConflict=function(){e.fn.dropdown=s;return this};e(document).on("click.dropdown.data-api",t).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown-menu",function(e){e.stopPropagation()}).on("click.dropdown.data-api",r,i.prototype.toggle).on("keydown.dropdown.data-api",r+", [role=menu]",i.prototype.keydown)}(window.jQuery)(function(e){function o(e,t,n){!isNaN(t)&&t!=1&&(e+="s");return n.locale[e]||e}function h(e,t){var n=l(),r=(n.getTime()-e.getTime())/1e3,i=Math.abs(r);if(isNaN(r))return;var s=0;for(var o in t.units){var u=t.units[o];if(u.past_only&&r<0||u.future_only&&r>0)continue;if(i<u.limit)return isNaN(u.in_seconds)?r<0?(s-i)*1e3+100:(u.limit-i)*1e3+100:r<0?i%u.in_seconds*1e3+100:(u.in_seconds-i%u.in_seconds)*1e3+100;s=u.limit}if(r<0)for(var o=t.units.length-1;o>=0;o--){var u=t.units[o];if(u.past_only)continue;return(u.limit-i)*1e3+100}}function p(e,t){var n=e.data("easydate.date");if(isNaN(n)){var r,i=Date.parse(r=e.attr("title"))||Date.parse(r=e.html());if(!isNaN(i)){n=new Date;n.setTime(i);e.data("easydate.date",n);t.set_title&&!e.attr("title")&&e.attr("title",r)}}return n}function d(t){var n=t.data("easydate.settings"),i=e.data(t[0]);s[i]=t;delete r[i];var o=p(t,n);if(isNaN(o))return;t.html(c(o,n));if(n.live){var u=h(o,n);if(!isNaN(u)){u>2147483647&&(u=2147483647);var a=setTimeout(function(){d(t)},Math.round(u));r[i]=a}}}e.easydate={};e.easydate.locales={};e.easydate.locales.enUS={future_format:"%s %t",past_format:"%t %s",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",week:"week",weeks:"weeks",month:"month",months:"months",year:"year",years:"years",yesterday:"yesterday",tomorrow:"tomorrow",now:"just now",ago:"ago","in":"in"};var t={live:!0,set_title:!0,format_future:!0,format_past:!0,units:[{name:"now",limit:5},{name:"second",limit:60,in_seconds:1},{name:"minute",limit:3600,in_seconds:60},{name:"hour",limit:86400,in_seconds:3600},{name:"yesterday",limit:172800,past_only:!0},{name:"tomorrow",limit:172800,future_only:!0},{name:"day",limit:604800,in_seconds:86400},{name:"week",limit:2629743,in_seconds:604800},{name:"month",limit:31556926,in_seconds:2629743},{name:"year",limit:Infinity,in_seconds:31556926}],uneasy_format:function(e){return e.toLocaleDateString()},locale:e.easydate.locales.enUS},n=0,r={},i={},s={},u=e.easydate.pause=function(t){var n=function(e){clearTimeout(r[e]);delete r[e];i[e]=!0};if(!t)for(var s in r)n(s);else e(t).each(function(){var e=jQuery.data(this);isNaN(r[e])||n(e)})},a=e.easydate.resume=function(t){var n=function(e){delete i[e];d(s[e])};if(!t)for(var r in i)n(r);else e(t).each(function(){var e=jQuery.data(this);isNaN(i[e])||n(e)})},f=e.easydate.set_now=function(e){var t;e instanceof Date?t=e.getTime():t=Date.parse(e);if(isNaN(t))return;n=t-(new Date).getTime();for(var i in s){isNaN[r[i]]||clearTimeout(r[i]);d(s[i])}},l=e.easydate.get_now=function(){var e=new Date;e.setTime(e.getTime()+n);return e},c=e.easydate.format_date=function(n,r){var i=e.extend({},t,r),s=(l().getTime()-n.getTime())/1e3,u=Math.abs(s);if(isNaN(s))return;if(!i.format_future&&s<0||!i.format_past&&s>0)return;for(var a in i.units){var f=i.units[a];if(f.past_only&&s<0||f.future_only&&s>0)continue;if(u<f.limit){if(isNaN(f.in_seconds))return o(f.name,NaN,i);var c=u/f.in_seconds;c=Math.round(c);var h;s<0?h=o("future_format",NaN,i).replace("%s",o("in",NaN,i)):h=o("past_format",NaN,i).replace("%s",o("ago",NaN,i));return h.replace("%t",c+" "+o(f.name,c,i))}}return i.uneasy_format(n)};e.fn.easydate=function(n){var i=e.extend({},t,n);this.data("easydate.settings",i);this.removeData("easydate.date");this.each(function(){var t=e.data(this);if(!isNaN(r[t])){clearTimeout(r[t]);delete r[t]}d(e(this))})}})(jQuery);var g=[].slice;String.prototype.autoLink=function(){var e,t,n,r,i,s;i=1<=arguments.length?g.call(arguments,0):[];n="";r=i[0];s=/(^|\s)(\b(https?|ftp):\/\/[\-A-Z0-9+\u0026@#\/%?=~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~_|])/gi;if(0<i.length){null!=r.callback&&"function"==typeof r.callback&&(e=r.callback,delete r.callback);for(t in r)i=r[t],n+=" "+t+"='"+i+"'";return this.replace(s,function(t,r,i){t=e&&e(i);return""+r+(t||"<a href='"+i+"'"+n+">"+i+"</a>")})}return this.replace(s,"$1<a href='$2'>$2</a>")};var crmx={config:{sitename:"",username:"",sort:"name",lang:""},form:{},people:{},timer:!1,load:{form:function(e){"use strict";$("#form").html("");for(var t in e){e[t].hidden||$("#people-table>thead>tr").append('<th data-name="'+e[t].name+'">'+e[t].title+"</th>");if(e[t].type==="select"){e[t].html='<select id="'+e[t].name+'">';$(".nav").append('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">'+e[t].title+' <span class="caret"></span></a>'+'<ul id="nav-drop-'+e[t].name+'" class="dropdown-menu">'+"</ul>"+"</li>");for(var n in e[t].list){e[t].html+="<option>"+e[t].list[n]+"</option>";$("#nav-drop-"+e[t].name).append("<li data-search='\""+e[t].name+'":"'+e[t].list[n]+'"\'><a href="#">'+e[t].list[n]+"</a></li>")}e[t].html+="</select>"}else{e[t].html="";e[t].type==null&&(e[t].type="text");if(e[t].type==="email"||e[t].type==="search"||e[t].type==="tel"||e[t].type==="url")e[t].html+='<div class="input-append">';e[t].html+='<input type="'+e[t].type+'" id="'+e[t].name+'" placeholder="'+e[t].title+'">';e[t].type==="email"?e[t].html+='<a class="btn smart-link" data-smart="email" href="#" title="'+crmx.config.lang.emailcontact+'"><i class="icon-envelope"></i></a></div>':e[t].type==="search"?e[t].html+='<a class="btn smart-link" data-smart="search" href="#" title="'+crmx.config.lang.searchgoogle+'"><i class="icon-search"></i></a></div>':e[t].type==="tel"?e[t].html+='<a class="btn smart-link" data-smart="call" href="#" title="'+crmx.config.lang.callcontact+'"><i class="icon-bullhorn"></i></a></div>':e[t].type==="url"&&(e[t].html+='<a class="btn smart-link" data-smart="url" href="#" title="'+crmx.config.lang.visitwebsite+'"><i class="icon-globe"></i></a></div>')}$("#form").append('<div class="control-group span6"><label class="control-label" for="'+e[t].name+'">'+e[t].title+"</label>"+'<div class="controls">'+e[t].html+"</div>"+"</div>")}$(".smart-link").on("click",function(){switch($(this).data("smart")){case"email":window.open("mailto:"+$(this).siblings("input").val(),"_blank");break;case"search":window.open("https://www.google.com/search?q="+$(this).siblings("input").val(),"_blank");break;case"call":window.open("skype:"+$(this).siblings("input").val()+"?call","_blank");break;case"url":window.open($(this).siblings("input").val(),"_blank")}return!1})},people:function(e){"use strict";$("#people-table>tbody").html("");crmx.sort(crmx.config.sort,e);for(var t in e){$("#people-table>tbody").append('<tr id="person-'+t+'"><td><a href="#" data-id="'+e[t].id+'"><button class="btn btn-mini hidden-phone"><i class="icon-search"></i></button> <strong>'+e[t].name+"</strong></a></td><td>"+e[t].form.title+"</td></tr>");var n=$("#people-table>tbody>tr#person-"+t);for(var r in crmx.form)crmx.form[r].hidden||n.append("<td>"+(e[t].form[crmx.form[r].name]?e[t].form[crmx.form[r].name]:"")+"</td>")}},comments:function(e){"use strict";$("#comments").html("");for(var t in e)$("#comments").append("<blockquote>"+e[t].text.autoLink()+'<small><em class="easydate">'+e[t].date+"</em> "+crmx.config.lang.by+" <strong>"+e[t].user+'</strong> <a href="#" class="comment-delete" data-id="'+e[t].id+'" title="'+crmx.config.lang.deletecomment+'">&times;</a></small></blockquote>');$(".easydate").easydate()}},refresh:function(){"use strict";$("#s").val("");crmx.search("")},save:function(){"use strict";crmx.notification(crmx.config.lang.loading);var e={id:$("#id").val(),name:$("#name").val(),title:$("#title").val()};for(var t in crmx.form)e[crmx.form[t].name]=$("#"+crmx.form[t].name).val();$.ajax({type:"POST",url:"save",data:e}).done(function(e){crmx.notification(e.message,e.status);if(e.status==="success"){crmx.notification(crmx.config.lang.saved,"success");$(".save").fadeOut();$("#delete").fadeIn();$("#commentbox").fadeIn();crmx.refresh();if(e.id){$("#id").val(e.id);$("#people li a[data-id="+e.id+"]").parent().addClass("active")}}})},remove:function(e){"use strict";if(!e)return!1;if(confirm(crmx.config.lang.contactdeleteconfirm)===!0){crmx.notification("Deleting&hellip;");$.ajax({type:"DELETE",url:"delete/"+e}).done(function(e){crmx.notification(e.message,e.status);if(e.status==="success"){$("#name").val("");$("#title").val("");for(var t in crmx.form)$("#"+crmx.form[t].name).val("");$(".save").fadeOut();$("#delete").fadeOut();$("#commentbox").fadeOut();crmx.search("")}else crmx.notification(e.message,e.status)})}},comment:function(e,t){"use strict";crmx.notification(""+crmx.config.lang.commenting+"&hellip;");$.ajax({type:"POST",url:"comment",data:{id:e,comment:t}}).done(function(e){if(e.status!=="error"){crmx.notification();$("#c").val("");crmx.load.comments(e)}else crmx.notification(e.message,e.status)})},get:function(e){"use strict";crmx.notification(crmx.config.lang.loading+"&hellip;");$.ajax({type:"GET",url:"get/"+e}).done(function(t){if(t.status!=="error"){crmx.notification();$("#name").val(t.name);$("#id").val(t.id);$("#title").val(t.form.title);for(var n in crmx.form)$("#"+crmx.form[n].name).val(t.form[crmx.form[n].name]);$(".save").fadeOut();$("#delete").fadeIn();$("#commentbox").fadeIn();$("#people li").removeClass("active");$("#people li a[data-id="+e+"]").parent().addClass("active");crmx.load.comments(t.comments);document.location="#main"}else crmx.notification(t.message,t.status)})},search:function(e){"use strict";$("#people").prepend('<li class="nav-header">'+crmx.config.lang.searching+"&hellip;</li>");$.ajax({type:"GET",url:"search/"+e}).done(function(e){if(!e.status)crmx.load.people(e);else{crmx.notification(e.message,e.status);crmx.load.people({})}})},notification:function(e,t){"use strict";e==null?$("#notification").stop().fadeOut("fast"):$("#notification").html((t?"<strong>"+t+"</strong> ":"")+e).attr("class","alert alert-"+t).fadeIn(500,function(){$(this).stop().fadeOut(1e4)})},updateui:function(){"use strict";if($("#id").val().length>0){$(".save").fadeIn().html(crmx.config.lang.contactsave);$("#delete").fadeIn()}else{$(".save").fadeIn().html(crmx.config.lang.contactnew);$("#delete").fadeOut()}},clearform:function(){"use strict";$("#main input,#main select").val("");$("#delete").addClass("hide");crmx.updateui();$("#name").focus()},sort:function(e,t){"use strict";function n(e){return function(t,n){if(e==="name")var r=t[e],i=n[e];else var r=t.form[e],i=n.form[e];typeof r=="string"&&(r=r.toLowerCase());typeof i=="string"&&(i=i.toLowerCase());return r>i?1:r<i?-1:0}}return t.sort(n(e))},run:function(){"use strict";crmx.load.people(crmx.people);crmx.load.form(crmx.form);for(var e=0;e<crmx.config.plugins.length;e++){var t=crmx.config.plugins[e];$.ajax({url:"plugins/"+t+"/"+t+".css",type:"HEAD",success:function(){$("head").append('<link href="plugins/'+t+"/"+t+'.css" rel="stylesheet">')}});$.ajax({url:"plugins/"+t+"/"+t+".js",type:"HEAD",success:function(){$("body").append('<script src="plugins/'+t+"/"+t+'.js"></script>')}})}$(".save").on("click",function(){crmx.save();return!1});$("#delete").on("click",function(){crmx.remove($("#id").val());return!1});$("#form").on("change","select",function(){crmx.updateui()});$("#main").on("input paste","input",function(){crmx.updateui()});$("#name").on("input paste",function(){crmx.updateui()});$("#title").on("input paste",function(){crmx.updateui()});$("#s").on("input paste",function(){if(crmx.timer===!1){crmx.timer=!0;var e=setTimeout(function(){crmx.search($("#s").val());crmx.timer=!1},500)}}).on("keypress",function(e){if(e.keyCode==13)return!1});$("#c_button").on("click",function(){$("#id").val().length<1&&crmx.notification(crmx.config.lang.selectnamefirst,"error");$("#c").val().length<1&&crmx.notification(crmx.config.lang.entercommentfirst,"error");crmx.comment($("#id").val(),$("#c").val().replace(/\n/g,"<br>"));return!1});$("#comments").on("click",".comment-delete",function(){confirm(crmx.config.lang.confirmdeletecomment)&&$.ajax({type:"DELETE",url:"comment/"+$(this).data("id")}).done(function(e){crmx.notification(e.message,e.status);e.status==="success"&&crmx.load.comments(e.comments)});return!1});$(".dropdown-menu").click(function(e){var t=$(e.target).closest("li");crmx.search(t.data("search"));$("#s").val(t.data("search"))});$("#people-table").on("click","a",function(){crmx.get($(this).data("id"));return!1});$("#people-table thead").on("click","th",function(){$("#people-table th").removeClass("active");$(this).addClass("active");crmx.config.sort=$(this).data("name");crmx.load.people(crmx.people)});$(".clearform").click(function(){crmx.clearform()});$(".refresh").click(function(){crmx.refresh()});$("#notification").on("click",function(){$(this).stop().fadeOut(200)});$("#s").focus()}};