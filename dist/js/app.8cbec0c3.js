(function(t){function s(s){for(var i,o,n=s[0],c=s[1],r=s[2],u=0,v=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(e,o)&&e[o]&&v.push(e[o][0]),e[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(s);while(v.length)v.shift()();return l.push.apply(l,r||[]),a()}function a(){for(var t,s=0;s<l.length;s++){for(var a=l[s],i=!0,n=1;n<a.length;n++){var c=a[n];0!==e[c]&&(i=!1)}i&&(l.splice(s--,1),t=o(o.s=a[0]))}return t}var i={},e={app:0},l=[];function o(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,s,a){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)o.d(a,i,function(s){return t[s]}.bind(null,i));return a},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/store/dist/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=s,n=n.slice();for(var r=0;r<n.length;r++)s(n[r]);var d=c;l.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"navBar"},[t._m(0),a("div",{staticClass:"responsiveLists",class:{show:this.listShow}},[a("router-link",{staticClass:"responsiveList",attrs:{to:"/home"},nativeOn:{click:function(s){t.listShow=!1}}},[a("i",{staticClass:"fas fa-home"}),a("span",[t._v("HOME")])]),a("router-link",{staticClass:"responsiveList",attrs:{to:"/about"},nativeOn:{click:function(s){t.listShow=!1}}},[a("i",{staticClass:"fas fa-address-card"}),a("span",[t._v("ABOUT")])]),a("router-link",{staticClass:"responsiveList",attrs:{to:"/store"},nativeOn:{click:function(s){t.listShow=!1}}},[a("i",{staticClass:"fas fa-shopping-cart"}),a("span",[t._v("STORE")])]),a("router-link",{staticClass:"responsiveList",attrs:{to:"/contact"},nativeOn:{click:function(s){t.listShow=!1}}},[a("i",{staticClass:"far fa-envelope"}),a("span",[t._v("CONTACT")])])],1),a("ul",{staticClass:"navLists"},[a("div",{staticClass:"burger"},[a("i",{staticClass:"fas fa-bars",on:{click:function(s){t.listShow=!t.listShow}}})]),a("router-link",{staticClass:"navList",attrs:{to:"/home"}},[a("i",{staticClass:"fas fa-home"}),a("span",[t._v("HOME")])]),a("router-link",{staticClass:"navList",attrs:{to:"/about"}},[a("i",{staticClass:"fas fa-address-card"}),a("span",[t._v("ABOUT")])]),a("router-link",{staticClass:"navList",attrs:{to:"/store"}},[a("i",{staticClass:"fas fa-shopping-cart"}),a("span",[t._v("STORE")])]),a("router-link",{staticClass:"navList",attrs:{to:"/contact"}},[a("i",{staticClass:"far fa-envelope"}),a("span",[t._v("CONTACT")])])],1),a("div",{staticClass:"loginBox"},[a("div",[this.$cookies.isKey("uid")?a("button",{staticClass:"memberBtn",on:{click:t.logOutHandler}},[a("i",{staticClass:"fas fa-user isLogin"}),a("span",{staticClass:"isLoginSpan"},[t._v("會員登出")])]):a("button",{staticClass:"memberBtn isNotLoginBtn",on:{click:t.signInHandler}},[a("i",{staticClass:"fas fa-user isNotLogin"}),a("span",{staticClass:"isNotLoginSpan"},[t._v("登入/註冊")])])])])]),a("router-view")],1)},l=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"logo"},[a("h3",[t._v("P&S")])])}],o={name:"App",data:function(){return{listShow:!1}},methods:{logOutHandler:function(){this.$cookies.remove("uid"),this.$router.push("/login")},signInHandler:function(){this.$router.push("/login")}}},n=o,c=(a("5c0b"),a("2877")),r=Object(c["a"])(n,e,l,!1,null,null,null),d=r.exports,u=a("8c4f"),v=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"login"},[a("div",{staticClass:"loginBox"},[a("h2",[t._v("LOGIN")]),a("div",{staticClass:"inputBox"},[a("label",{attrs:{for:"userName"}},[t._v("Username:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{id:"userName",type:"text",placeholder:"example@gmail.com"},domProps:{value:t.userName},on:{input:function(s){s.target.composing||(t.userName=s.target.value)}}})]),a("div",{staticClass:"inputBox"},[a("label",{attrs:{for:"password"}},[t._v("Password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",type:"text",placeholder:"●●●●●●●●●"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),a("button",{staticClass:"loginHandler",on:{click:t.loginHandler}},[t._v("Sign in")]),a("p",{staticClass:"signUpTxt"},[t._v(" You don't have account? "),a("br"),t._v("Please "),a("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.signUpHandler(s)}}},[t._v("Sign up")]),t._v("! ")])])])},p=[],m={name:"login",data:function(){return{userName:"",password:""}},computed:{uid:function(){return this.$cookies.isKey("uid")}},methods:{loginHandler:function(){var t=this,s=t.userName,a=t.password,i={userName:s,password:a},e={withCredentials:!0};this.$http.post("https://aqueous-earth-60961.herokuapp.com/users/login",i,e).then((function(s){"success"===s.data.message?(t.$cookies.set("uid",s.data.uid),t.$router.push("/home")):(s.data.code,alert("該帳號尚未註冊"))}))},signUpHandler:function(){this.$router.push("/signup")}}},f=m,C=Object(c["a"])(f,v,p,!1,null,null,null),g=C.exports,h=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"about"},[a("div",{staticClass:"banner"},[a("div",{staticClass:"bannerBorder"},[a("div",{staticClass:"bannerImg"},[a("div",{staticClass:"bannerImgCover"},[a("p",{staticClass:"bannerTxt"},[a("small",[t._v("W")]),t._v("elcome To Our Store. ")])])])])]),a("div",{staticClass:"timer"},[a("div",{staticClass:"timerImgPadding"},[a("div",{staticClass:"timerImgBox"})]),a("div",{staticClass:"timerTxt"},[a("h2",{staticClass:"timerTitle"},[t._v("- Since 1952 -")]),a("div",{staticClass:"container-fluid timerContent"},[a("div",{staticClass:"row w-100 m-0 timerDotted"},[a("div",{staticClass:"col-6 timerYears"},[t._v("1952")]),a("div",{staticClass:"col-6 timerHappen"},[t._v("P&S創始店成立於澳洲墨爾本")])]),a("div",{staticClass:"row w-100 m-0 timerDotted"},[a("div",{staticClass:"col-6 timerYears"},[t._v("1964")]),a("div",{staticClass:"col-6 timerHappen"},[t._v("開放加盟夥伴")])]),a("div",{staticClass:"row w-100 m-0 timerDotted"},[a("div",{staticClass:"col-6 timerYears"},[t._v("1969")]),a("div",{staticClass:"col-6 timerHappen"},[t._v("澳洲本地達30間分店")])]),a("div",{staticClass:"row w-100 m-0 timerDotted"},[a("div",{staticClass:"col-6 timerYears"},[t._v("1982")]),a("div",{staticClass:"col-6 timerHappen"},[t._v("開始海外擴張")])]),a("div",{staticClass:"row w-100 m-0 timerDotted"},[a("div",{staticClass:"col-6 timerYears"},[t._v("1999")]),a("div",{staticClass:"col-6 timerHappen"},[t._v("金融海嘯，面臨資金周轉困難")])]),a("div",{staticClass:"row w-100 m-0 timerDotted"},[a("div",{staticClass:"col-6 timerYears"},[t._v("2008")]),a("div",{staticClass:"col-6 timerHappen"},[t._v("歐美國家達6間直營店及百家分店")])]),a("div",{staticClass:"row w-100 m-0 timerDotted"},[a("div",{staticClass:"col-6 timerYears"},[t._v("2014")]),a("div",{staticClass:"col-6 timerHappen"},[t._v("創立首間台灣直營店")])]),a("div",{staticClass:"row w-100 m-0 timerDotted"},[a("div",{staticClass:"col-6 timerYears"},[t._v("2019")]),a("div",{staticClass:"col-6 timerHappen"},[t._v("台灣地區加盟店持續擴張")])])])])]),a("div",{staticClass:"team"},[a("div",{staticClass:"teamTxt"},[a("h2",{staticClass:"teamTitle"},[t._v("- Our Team -")]),a("p",[t._v(" 雖然台灣的秋冬氣溫比起其他地方相對比較不寒冷，有時厚重的大衣、外套等可能也派不上用場，但如果想穿搭出理想的季節溫度，同時平衡舒適自在的衣著感受的話，推薦大家以騎士皮衣外套加乘，透過萬年經典的款式為日常演繹多變帥氣個性，想知道有哪些搭配方式嗎？一起來看看吧。 "),a("span",[t._v("店長-星辰")]),t._v("充滿個性的騎士皮衣外套，向來是時尚圈永不退流行的必備單品，當想將帥氣與休閒完美混合時，選搭一件灰、黑色素 TEE 與九分長褲，便能輕鬆連結一股簡約低調的品味特色。 "),a("span",[t._v("副店長-阿嘉")]),t._v(">帶點無拘束風格的連帽上衣，不僅街頭時尚人士經常穿搭，更是懶人最愛的百搭實穿款，選擇連帽上衣外搭騎士皮衣外套，再將帽子拉出於外套上，立即為整體層次營造豐富又加分印象。 "),a("span",[t._v("採購長-國棟")]),t._v(" 冬季氣溫不穩定有時面對低溫來襲，推薦將上衣換成針織毛衣可以提升造型溫度之外，儘管穿搭騎士皮衣外套，也不會覺得整體太過於保暖，下半身搭配深色或刷破牛仔褲就很好看加分。 "),a("span",[t._v("採購長-Shan")]),t._v(" 充滿個性的騎士皮衣外套，向但如果想穿搭出理想的季節溫度，同時平衡舒適自在的衣著感受的話，推薦大家以騎士皮衣外套加乘，透過萬年經典的款式為日常演繹多變來是時尚圈永不退流行的必備單品，當想將帥氣與休閒完美混合時，選搭一件灰、黑色素 TEE 與九分長褲，便能輕鬆連結一股簡約低調的品味特色。 "),a("span",[t._v("優質店員-小慧")]),t._v(" 充滿個性的騎士皮衣外套，向來是時尚圈永不退流行的必備單品，當想將帥氣與休閒完美混合時，選搭一件灰、黑色素 TEE 與九分長褲，便能輕鬆連結一股簡約低調的，選搭一件灰、黑色素 TEE 與九分長褲，便能輕鬆連結一股簡約低調的品味特色。 "),a("span",[t._v("優質店員-Jocilen")]),t._v(" 充滿個性的騎士皮衣外套，向來是時尚圈永不退流行的必備單品，當想將帥氣與休閒完美混合時，選搭一件灰、黑色素 TEE 與九分長褲，便能輕鬆連結一股簡約低調的，選搭一件灰、黑色素 TEE 與九分長褲，便能輕鬆連結一股簡約低調的品味特色。 ")])]),a("div",{staticClass:"teamImgPadding"},[a("div",{staticClass:"teamImgBox"})])]),a("div",{staticClass:"slogan"},[a("div",{staticClass:"sloganLine"}),a("h5",{staticClass:"sloganTxt"},[t._v("「風格，才是個人穿搭最重要的事情。」")])]),a("div",{staticClass:"aboutStore"},[a("div",{staticClass:"container aboutStoreContainer"},[a("div",{staticClass:"row h-100"},[a("div",{staticClass:"col-12 col-lg-5 responsiveH100vh"},[a("div",{staticClass:"row h-100 aboutBg aboutBgR"},[a("div",{staticClass:"col-8 aboutStoreImg aboutStoreImg1"}),a("div",{staticClass:"col-4"},[a("div",{staticClass:"row detailMt"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"detailImg1 detailImg"})]),a("div",{staticClass:"col-12"},[a("div",{staticClass:"detailImg2 detailImg"})]),a("div",{staticClass:"col-12"},[a("div",{staticClass:"detailImg3 detailImg"})])])])])]),a("div",{staticClass:"col-12 col-lg-2 aboutSlogan my-4"},[a("span",[t._v("Personal")]),a("span",[t._v("&")]),a("span",[t._v("Style")])]),a("div",{staticClass:"col-12 col-lg-5 responsiveH100vh"},[a("div",{staticClass:"row h-100 aboutBg aboutBgB"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"row detailMt"},[a("div",{staticClass:"col-12 aboutFlexRow"},[a("div",{staticClass:"detailImg4 detailImg"})]),a("div",{staticClass:"col-12 aboutFlexRow"},[a("div",{staticClass:"detailImg5 detailImg"})]),a("div",{staticClass:"col-12 aboutFlexRow"},[a("div",{staticClass:"detailImg6 detailImg"})])])]),a("div",{staticClass:"col-8 aboutStoreImg aboutStoreImg2"})])])])])]),a("div",{staticClass:"aboutStore"},[a("div",{staticClass:"container aboutStoreContainer"},[a("div",{staticClass:"row h-100"},[a("div",{staticClass:"col-12 col-lg-5 responsiveH100vh"},[a("div",{staticClass:"row h-100 aboutBg aboutBgY"},[a("div",{staticClass:"col-8 aboutStoreImg aboutStoreImg3"}),a("div",{staticClass:"col-4"},[a("div",{staticClass:"row detailMt"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"detailImg7 detailImg"})]),a("div",{staticClass:"col-12"},[a("div",{staticClass:"detailImg8 detailImg"})]),a("div",{staticClass:"col-12"},[a("div",{staticClass:"detailImg9 detailImg"})])])])])]),a("div",{staticClass:"col-12 col-lg-2 aboutSlogan my-4"},[a("span",[t._v("Personal")]),a("span",[t._v("&")]),a("span",[t._v("Style")])]),a("div",{staticClass:"col-12 col-lg-5 responsiveH100vh"},[a("div",{staticClass:"row h-100 aboutBg aboutBgG"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"row detailMt"},[a("div",{staticClass:"col-12 aboutFlexRow"},[a("div",{staticClass:"detailImg10 detailImg"})]),a("div",{staticClass:"col-12 aboutFlexRow"},[a("div",{staticClass:"detailImg11 detailImg"})]),a("div",{staticClass:"col-12 aboutFlexRow"},[a("div",{staticClass:"detailImg12 detailImg"})])])]),a("div",{staticClass:"col-8 aboutStoreImg aboutStoreImg4"})])])])])]),a("div",{staticClass:"aboutFooterImg mt-5"},[a("div",{staticClass:"footerImg"},[a("div",{staticClass:"footerContainerBg"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row h-100"},[a("div",{staticClass:"col-12 col-lg-4 footerIcon"},[a("i",{staticClass:"fab fa-facebook-square leftIcon"}),a("i",{staticClass:"fab fa-instagram leftIcon"}),a("i",{staticClass:"fab fa-line leftIcon"}),a("i",{staticClass:"fab fa-twitter-square leftIcon"})]),a("div",{staticClass:"col-12 col-lg-4 footerInfo"},[a("p",[a("i",{staticClass:"fas fa-map-marker-alt"}),t._v("地址:桃園市蘆竹區福祿一街189號 ")]),a("p",[a("i",{staticClass:"fas fa-phone"}),t._v("電話:03-3491223 ")]),a("p",[a("i",{staticClass:"far fa-envelope"}),t._v("E-mail:logo@gmail.com ")])]),a("div",{staticClass:"col-12 col-lg-4 footerCopy"},[a("p",[t._v("個人練習作品，非商業用途。")]),a("i",{staticClass:"fab fa-github"})])])])])])])])}],b=a("1157"),w=a.n(b),S={mounted:function(){var t={opacityZero:function(t){w()(t).css("opacity",0),w()(t).css("transform","translateY(-100px)")},appear:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;w()(window).scroll((function(){var a=w()(this).scrollTop(),i=w()(this).height(),e=a+i;w()(t).each((function(t,a){var i=w()(a).offset().top,l=w()(a).height(),o=i+l/2;e>=o?(w()(a).css("opacity",1),w()(a).css("transform","translateY(0px)"),w()(a).css("transition",s/1e3+"s")):(w()(a).css("opacity",0),w()(a).css("transform","translateY(-100px)"),w()(a).css("transition",s/1e3+"s"))}))}))}};t.appear(".sloganTxt",1500),t.appear(".timerTitle",1500),t.appear(".teamTitle",1500),t.opacityZero(".sloganTxt"),t.opacityZero(".teamTitle"),t.opacityZero(".timerTitle")}},I=S,k=Object(c["a"])(I,h,_,!1,null,null,null),x=k.exports,y=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"index"},[t._m(0),a("div",{staticClass:"slider"},[a("div",{staticClass:"slide slide1",class:{activeSlide:"slide1"===this.activeSlide},on:{click:function(s){return t.activeSlideHandler("slide1")}}},[t._m(1)]),a("div",{staticClass:"slide slide2",class:{activeSlide:"slide2"===this.activeSlide},on:{click:function(s){return t.activeSlideHandler("slide2")}}},[t._m(2)]),a("div",{staticClass:"slide slide3",class:{activeSlide:"slide3"===this.activeSlide},on:{click:function(s){return t.activeSlideHandler("slide3")}}},[t._m(3)]),a("div",{staticClass:"slide slide4",class:{activeSlide:"slide4"===this.activeSlide},on:{click:function(s){return t.activeSlideHandler("slide4")}}},[t._m(4)]),a("div",{staticClass:"slide slide5",class:{activeSlide:"slide5"===this.activeSlide},on:{click:function(s){return t.activeSlideHandler("slide5")}}},[t._m(5)])])])},O=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"preloader"},[a("div",{staticClass:"counter"},[t._v("0")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content contentTxtBlack"},[a("h2",[t._v("MAN")]),a("p",[t._v(" GO SHOP "),a("i",{staticClass:"fa fa-angle-double-right"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content contentTxtWhite"},[a("h2",[t._v("WOMEN")]),a("p",[t._v(" GO SHOP "),a("i",{staticClass:"fa fa-angle-double-right"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content contentTxtWhite"},[a("h2",[t._v("ALL")]),a("p",[t._v(" GO SHOP "),a("i",{staticClass:"fa fa-angle-double-right"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content contentTxtBlack"},[a("h2",[t._v("KID")]),a("p",[t._v(" GO SHOP "),a("i",{staticClass:"fa fa-angle-double-right"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content contentTxtBlack"},[a("h2",[t._v("COUPLE")]),a("p",[t._v(" GO SHOP "),a("i",{staticClass:"fa fa-angle-double-right"})])])}],H=(a("d3b7"),a("25f0"),{data:function(){return{activeSlide:"slide3"}},methods:{logOutHandler:function(){this.$cookies.remove("uid"),this.$router.push("/login")},signInHandler:function(){this.$router.push("/login")},counter:function(){var t=setInterval((function(){var s=parseInt(w()(".counter").text());w()(".counter").text((++s).toString()),100==s&&(clearInterval(t),w()(".counter").addClass("counterHide"),w()(".preloader").addClass("preloaderHide"))}),20)},activeSlideHandler:function(t){this.activeSlide===t?this.activeSlide="":this.activeSlide=t}},created:function(){this.counter()}}),B=H,T=Object(c["a"])(B,y,O,!1,null,null,null),E=T.exports,P=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"signup"},[a("div",{staticClass:"signupBox"},[a("h2",[t._v("SIGNUP")]),a("div",{staticClass:"inputBox"},[a("label",{attrs:{for:"userName"}},[t._v("Username:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{id:"userName",type:"text",placeholder:"Please enter your e-mail account",autocomplete:"off"},domProps:{value:t.userName},on:{input:function(s){s.target.composing||(t.userName=s.target.value)}}})]),a("div",{staticClass:"inputBox"},[a("label",{attrs:{for:"password"}},[t._v("Password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",type:"text",placeholder:"●●●●●●●●●",autocomplete:"off"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),a("button",{staticClass:"signupHandler",on:{click:t.signupHandler}},[t._v("Sign up")]),a("p",{staticClass:"logInTxt"},[t._v(" You already have an account? "),a("br"),t._v("Please "),a("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.logInHandler(s)}}},[t._v("Login")]),t._v("! ")])])])},$=[],N={name:"signup",data:function(){return{userName:"",password:""}},methods:{signupHandler:function(){var t=this,s=t.password,a=t.userName,i={password:s,userName:a};t.$http.post("https://aqueous-earth-60961.herokuapp.com/users/signup",i).then((function(s){"success"===s.data.message?(alert(s.data.message2),t.$router.push("/login")):"auth/weak-password"===s.data.code?alert("密碼最少由6個字母或數字組成"):"auth/invalid-email"===s.data.code&&alert("請檢查郵件帳號是否輸入正確")}))},logInHandler:function(){this.$router.push("/login")}}},L=N,j=Object(c["a"])(L,P,$,!1,null,null,null),D=j.exports,M=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"store"},[t._m(0),a("div",{staticClass:"storeSideBar px-5 py-3"},[a("div",{staticClass:"sideBar"},[a("div",{staticClass:"sideBarBg"},[a("a",{staticClass:"sideBarLink",attrs:{href:"#"},on:{click:function(s){t.category="all"}}},[t._v("All")]),a("a",{staticClass:"sideBarLink",attrs:{href:"#"},on:{click:function(s){t.category="man"}}},[t._v("Man")]),a("a",{staticClass:"sideBarLink",attrs:{href:"#"},on:{click:function(s){t.category="women"}}},[t._v("Women")]),a("a",{staticClass:"sideBarLink",attrs:{href:"#"},on:{click:function(s){t.category="kid"}}},[t._v("Child")]),a("a",{staticClass:"sideBarLink",attrs:{href:"#"},on:{click:function(s){t.category="couple"}}},[t._v("Couple")]),t._m(1)])])]),a("div",{staticClass:"storeMain"},[a("div",{staticClass:"storeProduct"},[a("div",{staticClass:"container-fluid"},[t.productsData?a("div",{staticClass:"row mt-3"},t._l(t.productsFilter,(function(s){return a("div",{key:s.name,staticClass:"col-4 mb-5"},[a("div",{staticClass:"row productBg",style:{color:s.color}},[a("div",{staticClass:"col-8 productImg",style:{backgroundImage:"url("+s.mainPic+")"}}),a("div",{staticClass:"col-4"},[a("div",{staticClass:"row detailMt"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"detailImg1 detailImg",style:{backgroundImage:"url("+s.detailPic1+")"}})]),a("div",{staticClass:"col-12"},[a("div",{staticClass:"detailImg2 detailImg",style:{backgroundImage:"url("+s.detailPic2+")"}})]),a("div",{staticClass:"col-12"},[a("div",{staticClass:"detailImg3 detailImg",style:{backgroundImage:"url("+s.detailPic3+")"}})])])])]),a("div",{staticClass:"productInfo mt-2"},[a("div",[a("h5",[t._v(t._s(s.name))]),a("h5",[t._v("售價:"+t._s(s.price))])]),a("button",{staticClass:"btn btn-danger"},[t._v("add")])])])})),0):t._e()])])]),a("br")])},Y=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 p-3"},[a("div",{staticClass:"coupon"},[a("h6",[t._v(" 單筆消費滿3000，輸入優惠碼 "),a("span",[t._v("OP12")]),t._v(" ，即刻享有9折優惠!! ")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sideBarIcon"},[a("i",{staticClass:"fas fa-search"}),a("i",{staticClass:"fas fa-shopping-cart"})])}],A=(a("4de4"),a("07ac"),{name:"store",data:function(){return{productsData:"",category:"all"}},computed:{productsFilter:function(){var t,s=this,a=Object.values(s.productsData),i=s.category;return t="all"===i?a:a.filter((function(t){return t.category===i})),t}},methods:{getProducts:function(){var t=this;this.$http.get("https://aqueous-earth-60961.herokuapp.com/products/products").then((function(s){t.productsData=s.data}))}},created:function(){this.getProducts()}}),F=A,R=Object(c["a"])(F,M,Y,!1,null,null,null),U=R.exports,G=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an contact page")])])}],W={},Z=Object(c["a"])(W,G,q,!1,null,null,null),J=Z.exports;i["a"].use(u["a"]);var K=[{path:"/home",name:"Home",component:E},{path:"/login",name:"Login",component:g},{path:"/signup",name:"Signup",component:D},{path:"/about",name:"About",component:x},{path:"/store",name:"Store",component:U},{path:"/contact",name:"Contact",component:J}],z=new u["a"]({routes:K}),Q=z,V=a("2f62");i["a"].use(V["a"]);var X=new V["a"].Store({state:{},mutations:{},actions:{},modules:{}}),tt=a("bc3a"),st=a.n(tt),at=a("a7fe"),it=a.n(at),et=a("2b27"),lt=a.n(et);i["a"].use(it.a,st.a),i["a"].use(lt.a),i["a"].config.productionTip=!1,i["a"].$cookies.config("1d"),new i["a"]({router:Q,store:X,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,s,a){"use strict";var i=a("9c0c"),e=a.n(i);e.a},"9c0c":function(t,s,a){}});
//# sourceMappingURL=app.8cbec0c3.js.map