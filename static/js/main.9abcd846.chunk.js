(this.webpackJsonpmagicount=this.webpackJsonpmagicount||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},3:function(e,t,a){e.exports={optModal:"magiCount_optModal__3BTXK",optModalBody:"magiCount_optModalBody__36uJI",modalList:"magiCount_modalList__2RUOo",label:"magiCount_label__252_L",optModalFooter:"magiCount_optModalFooter__nDAW7",fm:"magiCount_fm__1xEK1",fedoram:"magiCount_fedoram__2ojjC",fmark:"magiCount_fmark__1eBuV",kofi:"magiCount_kofi__3zoDH",swing:"magiCount_swing__20aCz",darkModal:"magiCount_darkModal__3ouTS",optModalHeader:"magiCount_optModalHeader__IhLvG",mc_wrapper:"magiCount_mc_wrapper__3_Xdj",blurred:"magiCount_blurred__Nkz9N",portrait:"magiCount_portrait__2dwHL",score:"magiCount_score__t_Ww7",icon:"magiCount_icon__qVCfU",landscape:"magiCount_landscape__3G8M3",button:"magiCount_button__44Hr4",area:"magiCount_area__VZeCB",buttonActive:"magiCount_buttonActive__1IeeU",scoreArea:"magiCount_scoreArea__20yf9",digit:"magiCount_digit__2Cw7B",default:"magiCount_default__1dXkB",normal:"magiCount_normal__3qMrN",warning:"magiCount_warning__26DgI",danger:"magiCount_danger__2Jsk7",dark:"magiCount_dark__3paZx",spin:"magiCount_spin__oqi0v"}},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(5),s=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(12),l=a(13),c=a(7),u=a(19),d=a(18),m=a(8),h=a.n(m),g=a(4),p=a.n(g),f=a(14),_=a.n(f),w=a(6),b=a(10),E=a(15),k=a(9),v=a(16),S=a(17),M=(a(30),a(3)),T=a.n(M),y=[0,10,20,30,40,50],C=new _.a,N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={default:e.props.default,score:e.props.default,atDefault:!0,defaultIndex:y.indexOf(e.props.default),swipeDirection:"",isResetting:!0,willTransition:!1,orientation:0,plusActive:!1,minusActive:!1,maxTouches:0,showOptions:!1,useDarkMode:e.props.dark,preventSleep:!0,useMultitouch:!0},e.handleWindowSize=function(){e.getWindowSize(),window.addEventListener("resize",(function(){e.getWindowSize(),e.setState({orientation:window.innerHeight>=window.innerWidth?0:90})}))},e.getWindowSize=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))},e.handleOrientationChange=function(){"onorientationchange"in window&&window.addEventListener("orientationchange",(function(t){e.setState({orientation:t.currentTarget.orientation}),e.getWindowSize()}))},e.handleNoSleep=function(){C.enable(),document.removeEventListener("touchstart",e.handleNoSleep,!1)},e.handleShowModal=function(t){e.setState({showOptions:t})},e.changeBy=function(t){e.setState({atDefault:!1,score:e.state.score+t})},e.scoreSwipe=function(t){if(!e.state.isResetting&&!e.state.willTransition)if(e.state.atDefault){var a=0;"left"===t?a=e.state.defaultIndex+1:"right"===t&&(a=e.state.defaultIndex-1),a<0?a=y.length-1:a>=y.length&&(a=0),e.setState({swipeDirection:t,willTransition:!0},(function(){setTimeout((function(){e.setState({willTransition:!1,defaultIndex:a,score:y[a],default:y[a]})}),200)}))}else e.setState({isResetting:!0,willTransition:!0,atDefault:!0},(function(){setTimeout((function(){e.setState({willTransition:!1,score:e.state.default},(function(){setTimeout((function(){e.setState({isResetting:!1})}),200)}))}),200)}))},e.onTouchStart=function(t,a){a.preventDefault(),a.targetTouches.length>e.state.maxTouches&&e.setState({maxTouches:a.targetTouches.length}),e.state.plusTouch||e.state.minusTouch||("plus"===t?e.setState({plusTouch:!0}):"minus"===t&&e.setState({minusTouch:!0}))},e.onTouchEnd=function(t,a){e.state.useMultitouch&&(a.preventDefault(),a.targetTouches.length>0||("plus"===t?(e.changeBy(e.state.maxTouches),e.setState({plusTouch:!1,maxTouches:0})):"minus"===t&&(e.changeBy(-1*e.state.maxTouches),e.setState({minusTouch:!1,maxTouches:0}))))},e.render_optionsModal=function(){return o.a.createElement(w.a,{show:e.state.showOptions,onHide:e.handleShowModal.bind(Object(c.a)(e),!1),className:p()(T.a.optModal,e.state.useDarkMode?T.a.darkModal:"")},o.a.createElement(w.a.Header,{closeButton:!0,className:T.a.optModalHeader},o.a.createElement(w.a.Title,null,"Options")),o.a.createElement(w.a.Body,{className:T.a.optModalBody},o.a.createElement("ul",{className:T.a.modalList},o.a.createElement("li",{onClick:function(){e.setState({useDarkMode:!e.state.useDarkMode})}},o.a.createElement(h.a,{checked:e.state.useDarkMode,onstyle:"dark",offstyle:"light"}),o.a.createElement("label",{className:T.a.label},"Dark Mode")),o.a.createElement("li",{onClick:function(){e.setState({useMultitouch:!e.state.useMultitouch})}},o.a.createElement(h.a,{checked:e.state.useMultitouch,onstyle:"dark",offstyle:"light"}),o.a.createElement("label",{className:T.a.label},"Use Multitouch")),o.a.createElement("li",{style:{opacity:".5"}},o.a.createElement(h.a,{checked:e.state.preventSleep,disabled:!0,onstyle:"dark",offstyle:"light"}),o.a.createElement("label",{className:T.a.label},"Prevent Sleep")))),o.a.createElement(w.a.Footer,{as:"ul",className:T.a.optModalFooter},o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/FedoraMark/magicount","aria-label":"GitHub",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(v.a,null),"\xa0GitHub")),o.a.createElement("li",{className:T.a.fm},o.a.createElement("a",{href:"https://github.com/FedoraMark",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("div",null,o.a.createElement(k.a,null)),o.a.createElement("span",{className:T.a.fedoram},"Fedora"),o.a.createElement("span",{className:T.a.fmark},"Mark"))),o.a.createElement("li",null,o.a.createElement("a",{className:T.a.kofi,href:"https://ko-fi.com/J3J224IVG",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(S.a,null),"Ko-fi"))))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({isResetting:!1,orientation:window.innerHeight>=window.innerWidth?0:90}),this.handleOrientationChange(),this.handleWindowSize(),document.addEventListener("touchstart",this.handleNoSleep,!1)}},{key:"componentWillUnmount",value:function(){C.disable()}},{key:"render",value:function(){var e,t="left"===this.state.swipeDirection?"fadeOutLeftBig":"fadeOutRightBig",a="left"===this.state.swipeDirection?"bounceInRight":"bounceInLeft";switch(this.state.isResetting&&(t="flipOutY",a="flipInY"),this.state.orientation){case 90:case-90:e=T.a.landscape;break;case 0:e=T.a.portrait;break;default:e=window.innerHeight>=window.innerWidth?T.a.portrait:T.a.landscape}return this.state.useDarkMode?document.getElementById("body").className="dark":this.state.atDefault?document.getElementById("body").className="default":this.state.default>0?this.state.score<=this.props.dangerAt?document.getElementById("body").className="danger":this.state.score<=this.props.warnAt?document.getElementById("body").className="warning":document.getElementById("body").className="normal":this.state.score>=0?document.getElementById("body").className="normal":document.getElementById("body").className="danger",o.a.createElement("div",{className:p()(T.a.mc_wrapper,e,this.state.atDefault?T.a.default:T.a.normal,this.state.score<=this.props.warnAt&&this.state.default>0?T.a.warning:"",this.state.score<=this.props.dangerAt&&this.state.default>0?T.a.danger:"",this.state.score<0?T.a.danger:"",this.state.showOptions?T.a.blurred:"",this.state.useDarkMode?T.a.dark:"")},o.a.createElement("div",{className:p()(T.a.button,this.state.plusActive?T.a.buttonActive:""),onClick:this.changeBy.bind(this,1),onTouchStart:this.onTouchStart.bind(this,"plus"),onTouchEnd:this.onTouchEnd.bind(this,"plus")},o.a.createElement("div",{className:T.a.icon},o.a.createElement(k.c,null))),o.a.createElement(E.a,{className:p()(T.a.area,T.a.scoreArea),onSwipedLeft:this.scoreSwipe.bind(this,"left"),onSwipedRight:this.scoreSwipe.bind(this,"right"),onSwipedDown:this.handleShowModal.bind(this,!0),trackMouse:!0,trackTouch:!0,preventDefaultTouchmoveEvent:!0},o.a.createElement(b.a,{className:p()(T.a.score),animationIn:a,animationOut:t,isVisible:!this.state.willTransition,duration:this.state.isResetting?200:400,easing:this.state.willTransition?"ease-in":"ease"},o.a.createElement(b.a,{className:T.a.digit,animateOnMount:!0,animationIn:"fadeIn"},this.state.score))),o.a.createElement("div",{className:p()(T.a.button,this.state.minusActive?T.a.buttonActive:""),onClick:this.changeBy.bind(this,-1),onTouchStart:this.onTouchStart.bind(this,"minus"),onTouchEnd:this.onTouchEnd.bind(this,"minus")},o.a.createElement("div",{className:T.a.icon},o.a.createElement(k.b,null))),this.render_optionsModal())}}]),a}(n.Component);N.defaultProps={warnAt:5,dangerAt:0,dark:!1};var B=N;a(32),a(33);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,{default:20})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.9abcd846.chunk.js.map