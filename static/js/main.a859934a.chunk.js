(this["webpackJsonpstoners-house"]=this["webpackJsonpstoners-house"]||[]).push([[0],{118:function(e,t){},151:function(e,t,c){},152:function(e,t,c){},153:function(e,t,c){},158:function(e,t,c){},159:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(68),r=c.n(a),i=(c(88),c(6)),l=(c(89),c(49).createClient({space:"7jvfyva49xa6",accessToken:"BilBBU-vI6Bgu6EaO68SYSAWnsgYqyBuTsMAfYKRzbo"})),o=c(5),j=c(1),d=Object(s.createContext)(),u=function(e){var t=Object(s.useState)([]),c=Object(i.a)(t,2),n=c[0],a=c[1];return Object(j.jsx)(d.Provider,{value:[n,a],children:e.children})},b=(c(151),c(19)),p=function(e){var t=e.product,c=e.onRemove,s=[],n=Array(5).fill(0),a="#F7C700",r="#a9a9a9";t.fields.productImage&&t.fields.productImage.forEach((function(e){s.push(e.fields.file.url)}));var i=t.fields,l=i.name,o=i.productRatings,d=i.price,u=t.sys.id;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"cartItemWrapper",children:[Object(j.jsx)("div",{className:"cartFlexItem cartImageWrapper",children:Object(j.jsx)("img",{src:s[0],alt:l})}),Object(j.jsxs)("div",{className:"cartFlexItem cartDescription",children:[Object(j.jsx)("h3",{className:"cartItemName",children:"Product category"}),Object(j.jsxs)("div",{className:"rating remove",children:[n.map((function(e,t){return Object(j.jsx)(b.b,{color:o>t?a:r},t)})),Object(j.jsx)("div",{className:"cartNumbers remove",children:"2123 sold . All Levels"})]}),Object(j.jsxs)("div",{className:"cartMobilePrice",children:["$",d]})]}),Object(j.jsxs)("div",{className:"cartFlexItem cartControl",children:[Object(j.jsxs)("div",{className:"cartPrice",children:["$",d]}),Object(j.jsxs)("div",{className:"cartBtnControl",children:[Object(j.jsx)("span",{onClick:function(e){c(u)},className:"cartBtn",children:"remove"}),Object(j.jsx)("span",{className:"cartBtn cartSaveToLater remove",children:"save to later"})]})]})]})})},m=function(){var e=Object(s.useContext)(d),t=Object(i.a)(e,2),c=t[0],n=t[1],a=function(e){n(c.filter((function(t){return t.product.sys.id!==e?t:null})))},r=0;return c.forEach((function(e){r+=e.product.fields.price})),Object(j.jsxs)("div",{className:"cartPageWrapper",children:[Object(j.jsx)("div",{className:"carts",children:c.length<1?Object(j.jsx)("h2",{className:"emptyCart",children:"cart is empty"}):c.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(p,{onRemove:a,product:e.product})},e.product.sys.id)}))}),Object(j.jsxs)("div",{className:"cartCheckOutSection",children:[Object(j.jsx)("h3",{className:"cartItemName",children:"Total"}),Object(j.jsxs)("h1",{className:"totalPrice",children:["$",r.toFixed(2)]}),Object(j.jsx)("button",{className:"buyBtn productPlaceOrder checkout ".concat(c.length<1?"payDisable":""),children:"Checkout"})]})]})},h=(c(152),c(18)),O=c.n(h),x=c(33);c(153);var g,v,f=function(e,t){var c=Object(s.useState)((function(){try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(s){return console.log(s),t}})),n=Object(i.a)(c,2),a=n[0],r=n[1];return[a,function(t){try{var c=t instanceof Function?t(a):t;r(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(s){console.log(s)}}]},N=c(39),y=c(34),w=c(11),S=w.a.div(g||(g=Object(y.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 320px;\n    width: 100%;\n    margin: 0px;\n"]))),I=[{width:1,itemsToShow:1},{width:320,itemsToShow:1,itemsToScroll:1},{width:500,itemsToShow:1},{width:650,itemsToShow:1},{width:768,itemsToShow:1},{width:1200,itemsToShow:1}],C=function(e){var t=e.isLoading,c=e.product;if(t)return Object(j.jsx)("div",{className:"preloader"});var s=c.name,n=c.description,a=c.price,r=c.productRatings,i=[];c.productImage&&c.productImage.forEach((function(e){i.push(e.fields.file.url)}));var l=Array(5).fill(0),o="blue",d="#a9a9a9";return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"productFlexWrapper",children:[Object(j.jsxs)("div",{className:"flexItem",children:[Object(j.jsx)("div",{className:"imgWrapper",children:Object(j.jsx)(N.a,{enableAutoPlay:!0,autoPlaySpeed:2500,breakPoints:I,alternate:!0,renderPagination:function(e){e.pages,e.activePage,e.onClick;return Object(j.jsx)(j.Fragment,{})},className:"carouselWrapper",children:i.map((function(e){return Object(j.jsx)(S,{children:Object(j.jsx)("div",{className:"productPageImgWrapper",children:Object(j.jsx)("img",{src:e,alt:s})})})}))})}),Object(j.jsx)("div",{className:"productDesc",children:Object(j.jsxs)("div",{className:"price-rate",children:[Object(j.jsx)("div",{className:"name",children:s}),Object(j.jsxs)("p",{className:"price",children:["$",a]}),Object(j.jsx)("div",{className:"rating",children:l.map((function(e,t){return Object(j.jsx)(b.b,{color:r>t?o:d},t)}))})]})}),Object(j.jsxs)("div",{className:"itemDescription",children:[Object(j.jsx)("h4",{className:"title",children:"Description"}),Object(j.jsxs)("p",{children:[n," "]})]})]}),Object(j.jsxs)("div",{className:"flexItem",children:[Object(j.jsx)("h2",{className:"desktopTitle",children:s}),Object(j.jsx)("button",{className:"buyBtn addToCart",children:"Add to cart"}),Object(j.jsx)("button",{className:"buyBtn productPlaceOrder",children:"Place order"})]})]})})},k=function(e){var t=e.match,c=Object(s.useState)(!1),n=Object(i.a)(c,2),a=n[0],r=n[1],o=f("product",{}),d=Object(i.a)(o,2),u=d[0],b=d[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(x.a)(O.a.mark((function e(){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,l.getEntry(t.params.id);case 3:c=e.sent,console.log(c),b(c.fields),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(j.jsx)("div",{children:Object(j.jsx)(C,{isLoading:a,product:u})})},L=c(81),T=c(7),P=c(75),E=c(35),F=function(e){var t=e.product,c=e.onAdd,s=t.fields,n=s.name,a=s.price,r=s.productRatings,i=Array(5).fill(0),l="blue",o="#a9a9a9";return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"product",children:Object(j.jsxs)("div",{className:"productDesc",children:[Object(j.jsxs)("div",{className:"price-rate",children:[Object(j.jsx)("div",{className:"name",children:n}),Object(j.jsxs)("p",{className:"price",children:["$",a]}),Object(j.jsx)("div",{className:"rating",children:i.map((function(e,t){return Object(j.jsx)(b.b,{color:r>t?l:o},t)}))})]}),Object(j.jsx)("div",{className:"dropDownWrapper",children:Object(j.jsxs)("div",{className:"placeOrder",children:[Object(j.jsxs)("div",{className:"dropDown",children:[Object(j.jsx)("p",{children:"place order"}),Object(j.jsx)("span",{className:"dropDownIndicator",children:Object(j.jsx)(P.a,{onClick:function(e){var t=e.target.parentElement.parentElement.nextElementSibling;null!==t&&t.classList.toggle("toggleDropDown")}})})]}),Object(j.jsxs)("div",{className:"dropDownList",children:[Object(j.jsxs)("p",{className:"dropDownItem",children:[Object(j.jsx)("span",{onClick:function(e){return function(e,t){c(e,t)}(t,e)},children:"Add to cart"}),Object(j.jsx)("span",{children:Object(j.jsx)(b.a,{})})]}),Object(j.jsxs)("p",{className:"dropDownItem",children:[Object(j.jsx)("span",{children:"Reserve"}),Object(j.jsx)("span",{children:Object(j.jsx)(E.b,{})})]})]})]})})]})})})},W=c(36),B=function(e){var t=e.products,c=Object(s.useContext)(d),n=Object(i.a)(c,2),a=n[0],r=n[1],l=Object(s.useRef)(),o=function(e,t){r([].concat(Object(L.a)(a),[{product:e}])),l.current.style.display="block"};return Object(j.jsxs)("div",{className:"productGridWrapper",children:[t.map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsx)(T.b,{to:"/product/".concat(e.sys.id),children:Object(j.jsx)("div",{className:"productImgWrapper",children:e.fields.productImage&&Object(j.jsx)("img",{className:"productImg skeleton",src:e.fields.productImage[0].fields.file.url,alt:"sdfwe"})})}),Object(j.jsx)(F,{onAdd:o,product:e})]},e.sys.id)})),Object(j.jsxs)("div",{ref:l,className:"popup",children:["Product added...",Object(j.jsx)(T.b,{to:"/cart",children:Object(j.jsx)("div",{children:"go to cart"})}),Object(j.jsx)("span",{className:"closePopup",onClick:function(e){e.target.parentElement.style.display="none"},children:Object(j.jsx)(W.b,{})})]})]})},A=function(e){var t=e.products;return Object(j.jsx)("div",{children:Object(j.jsx)(u,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/product/:id",component:k}),Object(j.jsx)(o.a,{path:"/products",children:Object(j.jsx)(B,{products:t})}),Object(j.jsx)(o.a,{path:"/cart",component:m})]})})})})},D=c(77),R=(c(158),function(e){var t=e.products,c=Object(s.useState)([]),n=Object(i.a)(c,2),a=n[0],r=n[1],l=Object(s.useRef)(""),o=Object(s.useRef)(""),d=Object(s.useRef)(""),u=function(e){l.current.style.display="none",o.current.style.display="none",d.current.value=""};return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{onClick:u,ref:l,className:"searchBackground"}),Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"mobile navHeader",children:[Object(j.jsx)(T.b,{to:"/",exact:!0,children:Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("h2",{children:"Logo"})})}),Object(j.jsx)("div",{className:"search",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{ref:d,onChange:function(e){return function(e){var c=e.target.value.toLowerCase();l.current.style.display="block",o.current.style.display="block",r(t.filter((function(e){var t=e.fields.description;return(t=t.toLowerCase()).includes(c)?e.fields:""})))}(e)},type:"text",className:"searchInput",placeholder:"search"}),Object(j.jsx)("button",{type:"submit",className:"icon searchIcon",children:Object(j.jsx)(W.a,{})})]})}),Object(j.jsx)("div",{className:"burgerMenu",onClick:function(e){e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.toggle("showNav")},children:Object(j.jsx)("div",{className:"menu",children:Object(j.jsx)(D.a,{})})})]})}),Object(j.jsx)("div",{ref:o,className:"searchFilter",children:Object(j.jsx)("ul",{children:a.map((function(e,t){return Object(j.jsx)(T.b,{to:"/product/".concat(e.sys.id),children:Object(j.jsx)("li",{onClick:u,className:"searchLinks",children:e.fields.description})},t)}))})}),Object(j.jsxs)("nav",{onClick:function(e){"navLink"===e.target.className&&e.target.parentElement.parentElement.parentElement.classList.remove("showNav")},children:[Object(j.jsxs)("div",{className:"logoCaption",children:[Object(j.jsx)(T.b,{to:"/",exact:!0,children:Object(j.jsx)("div",{className:"logo",children:"logo"})}),Object(j.jsx)("div",{className:"caption",children:"Fill with Caption"})]}),Object(j.jsxs)("ul",{className:"navList",children:[Object(j.jsx)(T.b,{to:"/products",exact:!0,children:Object(j.jsx)("li",{className:"navLink",children:"Products"})}),Object(j.jsx)(T.b,{to:"/contact-us",children:Object(j.jsx)("li",{className:"navLink",children:"Contact us"})}),Object(j.jsx)(T.b,{to:"/about",children:Object(j.jsx)("li",{className:"navLink",children:"About"})}),Object(j.jsx)(T.b,{to:"/register/signup",children:Object(j.jsx)("li",{className:"navLink",children:"Account"})}),Object(j.jsx)(T.b,{to:"/cart",children:Object(j.jsx)("li",{className:"navLink",children:"Cart"})})]}),Object(j.jsx)("div",{className:"logout",children:"Log out"})]})]})]})}),G=(c(48),c(4)),M=c(21),$=c(37),z=c.p+"static/media/googleLogo.221f782d.png",H=c(78),J=function(e){var t=e.text,c=function(e){console.log(e)};return Object(j.jsx)("div",{children:Object(j.jsx)(H.GoogleLogin,{clientId:"610576136639-3ctumks51d24u1b89fgc30cs0tdmn4fn.apps.googleusercontent.com",render:function(e){return Object(j.jsxs)("button",{className:"google submit",onClick:e.onClick,disabled:e.disabled,children:[Object(j.jsx)("img",{className:"googleImg",src:z,alt:"google logo"})," ",t]})},buttonText:"Login",onSuccess:c,onFailure:c,cookiePolicy:"single_host_origin"})})},Y=function(){var e,t=Object(s.useState)(""),c=Object(i.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(""),l=Object(i.a)(r,2),o=(l[0],l[1]),d=Object(s.useState)(!1),u=Object(i.a)(d,2),b=u[0],p=u[1],m=Object(s.useState)(""),h=Object(i.a)(m,2),O=h[0],x=h[1],g=Object(s.useRef)(""),v=Object(s.useRef)(""),f=Object(s.useRef)(""),N=Object(s.useRef)("");return Object(j.jsx)("div",{className:"",children:Object(j.jsxs)("div",{className:"formContainer",children:[Object(j.jsx)("h1",{className:"registerTitleDesktop",children:"Sign Up "}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t,c=e.target.firstElementChild,s=c,a=c.nextElementSibling.nextElementSibling;if(n.trim().length<5)(t=s).classList.add("alert"),setTimeout((function(){t.classList.remove("alert")}),2500);else{if(O.trim().length<6)return a.classList.add("alert"),void setTimeout((function(){a.classList.remove("alert")}),2500);!1===b&&alert("You must agree to our policy")}},children:[Object(j.jsxs)("div",{className:"formInputWrapper",children:[Object(j.jsx)("input",{id:"userName",ref:g,onChange:function(e){return a(e.target.value)},type:"text",className:"formInputItem",placeholder:"full name"}),Object(j.jsxs)("div",{className:"inputStatus",children:[Object(j.jsx)("span",{className:"error",children:"Name too short"}),Object(j.jsx)(M.a,{})]})]}),Object(j.jsxs)("div",{className:"formInputWrapper",children:[Object(j.jsx)("input",{id:"userMail",ref:v,onChange:function(e){return o(e.target.value)},type:"email",className:"formInputItem",placeholder:"email"}),Object(j.jsx)("div",{className:"inputStatus",children:Object(j.jsx)(M.a,{})})]}),Object(j.jsxs)("div",{className:"formInputWrapper",children:[Object(j.jsx)("input",{id:"userPassword",ref:f,onChange:function(e){return x(e.target.value)},type:"password",className:"formInputItem",placeholder:"password"}),Object(j.jsxs)("div",{onClick:function(e){var t=e.target.previousElementSibling;"password"===t.type?t.type="text":"text"===t.type&&(t.type="password")},className:"inputStatus eye",children:[Object(j.jsx)("span",{className:"error",children:"invalid password"}),Object(j.jsx)($.a,{})]})]}),Object(j.jsxs)("div",{className:"formInputWrapper privacyPolicyWrapper",children:[Object(j.jsx)("input",(e={id:"privacyPolicy",ref:N,onChange:function(){p(!b)},type:"checkBox"},Object(G.a)(e,"id","privacy-policy"),Object(G.a)(e,"className","privacyPolicy"),e)),Object(j.jsxs)("label",{htmlFor:"privacy-policy",className:"privacyText",children:["I agree to the",Object(j.jsx)("a",{href:"#terms$condition",children:"terms and conditions"}),"and",Object(j.jsx)("a",{href:"#privacyPolicy",children:"privacy policy"})]})]}),Object(j.jsxs)("p",{className:"changeToLogin",children:["Already have an account?",Object(j.jsx)(T.b,{to:"/register/login",className:"log",children:"log in"})]}),Object(j.jsx)("button",{className:"submit",type:"submit",children:"Sign up"}),Object(j.jsx)(J,{text:"Sign up with Google"})]}),Object(j.jsx)("div",{className:"stepPagination"})]})})},U=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(i.a)(a,2),l=r[0],o=r[1];return Object(j.jsxs)("div",{className:"",children:[Object(j.jsxs)("div",{className:"formContainer",children:[Object(j.jsx)("h1",{className:"registerTitleDesktop",children:"Log In "}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.firstElementChild,c=t.nextElementSibling;if(console.log(l),l.trim().length<6)return c.classList.add("alert"),void setTimeout((function(){c.classList.remove("alert")}),2500)},children:[Object(j.jsxs)("div",{className:"formInputWrapper",children:[Object(j.jsx)("input",{onChange:function(e){return n(e.target.value)},type:"email",className:"formInputItem",placeholder:"email",value:c}),Object(j.jsx)("div",{className:"inputStatus",children:Object(j.jsx)(M.a,{})})]}),Object(j.jsxs)("div",{className:"formInputWrapper",children:[Object(j.jsx)("input",{onChange:function(e){return o(e.target.value)},type:"password",className:"formInputItem",placeholder:"password"}),Object(j.jsxs)("div",{onClick:function(e){var t=e.target.previousElementSibling;"password"===t.type?t.type="text":"text"===t.type&&(t.type="password")},className:"inputStatus eye",children:[Object(j.jsx)("span",{className:"error",children:"invalid password"}),Object(j.jsx)($.a,{})]})]}),Object(j.jsx)("button",{className:"submit",type:"submit",children:"Log in"}),Object(j.jsx)(J,{text:"Login with google"}),Object(j.jsx)("p",{className:"changeToLogin .logLogin",children:Object(j.jsx)(T.b,{to:"/register/resetpassword",className:"log",children:"forgot password"})})]}),Object(j.jsx)("div",{className:"stepPagination"})]}),Object(j.jsxs)("p",{className:"changeToLogin .logLogin",children:["Need an account",Object(j.jsx)(T.b,{to:"/register/signup",className:"log",children:"click to sign up"})]})]})},K=function(){return Object(j.jsxs)("div",{className:"register",children:[Object(j.jsx)("div",{id:"preloader"}),Object(j.jsxs)("div",{className:"registerHeaderWrapper",children:[Object(j.jsx)(T.b,{to:"/products",children:Object(j.jsx)("div",{onClick:function(e){e.target.parentElement.parentElement.style.display="none"},className:"backBtn",children:Object(j.jsx)("span",{children:Object(j.jsx)(E.a,{})})})}),Object(j.jsxs)("div",{className:"signupHeader",children:[Object(j.jsx)("h2",{className:"title",children:"Let's get you signed in"}),Object(j.jsx)("p",{className:"caption",children:"The information you provide will help us deliver your product safely"})]}),Object(j.jsxs)("div",{className:"changeRegisterBtn",children:[Object(j.jsx)(T.b,{to:"/register/signup",children:Object(j.jsx)("div",{className:"registerBtn active",children:"SIGN UP"})}),Object(j.jsx)(T.b,{to:"/register/login",children:Object(j.jsx)("div",{className:"registerBtn",children:"LOGIN"})})]})]}),Object(j.jsx)("div",{className:"formControl",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/register/resetpassword",component:Y}),Object(j.jsx)(o.a,{path:"/register/signup",component:Y}),Object(j.jsx)(o.a,{path:"/register/login",component:U})]})})]})},_=w.a.div(v||(v=Object(y.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 120px;\n    width: 100%;\n    margin: 0 5px;\n"]))),q=function(e){var t=e.name,c=e.img,s=e.onFilter;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{onClick:function(e){return s(e)},"data-cat":t,className:"carosel",draggable:!0,children:[Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsx)("img",{className:"categoryImage",src:c,alt:t})}),Object(j.jsx)("p",{children:t})]})})},V=[{width:1,itemsToShow:2},{width:200,itemsToShow:2.5},{width:240,itemsToShow:2.9},{width:270,itemsToShow:3.3},{width:320,itemsToShow:3.7,itemsToScroll:2},{width:380,itemsToShow:4},{width:430,itemsToShow:4.3},{width:450,itemsToShow:4.7},{width:550,itemsToShow:5.4},{width:600,itemsToShow:6}],X=function(e){e.products;var t=e.onFilter;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(N.a,{enableAutoPlay:!0,autoPlaySpeed:2300,breakPoints:V,renderPagination:function(e){e.pages,e.activePage,e.onClick;return Object(j.jsx)(j.Fragment,{})},className:"carouselWrapper",children:[[{name:"pills",img:"https://source.unsplash.com/kfJkpeI6Lgc"},{name:"glocks",img:"https://source.unsplash.com/41SKIzYcFh0"},{name:"weed",img:"https://source.unsplash.com/qcCPIhhdgTw"},{name:"category",img:"https://source.unsplash.com//yWvzlSnSs3g"},{name:"sandals",img:"https://source.unsplash.com/random"}].map((function(e,c){return Object(j.jsx)(_,{children:Object(j.jsx)(q,{onFilter:t,name:e.name,img:e.img})},c)})),Object(j.jsx)(_,{children:Object(j.jsx)("div",{className:"carosel viewAll",draggable:"false",children:Object(j.jsx)("p",{className:"viewAllText",children:"View all"})})})]})})},Q=function(e){e.products;return Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"Welcome to stoners House"})})},Z=c(80),ee=Object(Z.a)({apiKey:"AIzaSyA7yX2m_G3EdGBS2V26afSH4rhRRMhgzCU",authDomain:"first-bfba9.firebaseapp.com",projectId:"first-bfba9",storageBucket:"first-bfba9.appspot.com",messagingSenderId:"770374925436",appId:"1:770374925436:web:35ea3b067733d070d95df9"});var te=function(){console.log(ee);var e=f("products",[]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){l.getEntries().then((function(e){n(e.items)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(R,{products:c}),Object(j.jsx)(o.a,{path:"/products",exact:!0,children:Object(j.jsx)(X,{onFilter:function(e){console.log(e.target)},products:c})}),Object(j.jsx)(A,{products:c}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/register/signup",component:K}),Object(j.jsx)(o.a,{path:"/register/login",component:K}),Object(j.jsx)(o.a,{to:"/",exact:!0,children:Object(j.jsx)(Q,{products:c})})]})]})},ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,160)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(T.a,{children:Object(j.jsx)(te,{})})}),document.getElementById("root")),ce()},48:function(e,t,c){},50:function(e,t){},88:function(e,t,c){},89:function(e,t,c){}},[[159,1,2]]]);
//# sourceMappingURL=main.a859934a.chunk.js.map