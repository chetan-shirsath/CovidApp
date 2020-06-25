/*! For license information please see main.c497bb76.chunk.js.LICENSE.txt */
(this.webpackJsonpcovidapp=this.webpackJsonpcovidapp||[]).push([[0],{120:function(e,a){function t(e,a){var t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return a?"rgba("+t+", "+n+", "+o+", "+a+")":"rgb("+t+", "+n+", "+o+")"}var n={data:function(e){var a=e.getContext("2d"),t=a.createLinearGradient(500,0,100,0);t.addColorStop(0,"#80b6f4"),t.addColorStop(1,"#FFFFFF");var n=a.createLinearGradient(0,170,0,50);return n.addColorStop(0,"rgba(128, 182, 244, 0)"),n.addColorStop(1,"rgba(249, 99, 59, 0.40)"),{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Active Users",borderColor:"#f96332",pointBorderColor:"#FFF",pointBackgroundColor:"#f96332",pointBorderWidth:2,pointHoverRadius:4,pointHoverBorderWidth:1,pointRadius:4,fill:!0,backgroundColor:n,borderWidth:2,data:[542,480,430,550,530,453,380,434,568,610,700,630]}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{bodySpacing:4,mode:"nearest",intersect:0,position:"nearest",xPadding:10,yPadding:10,caretPadding:10},responsive:1,scales:{yAxes:[{display:0,ticks:{display:!1,maxTicksLimit:7},gridLines:{zeroLineColor:"transparent",drawTicks:!1,display:!1,drawBorder:!1}}],xAxes:[{display:0,ticks:{display:!1},gridLines:{zeroLineColor:"transparent",drawTicks:!1,display:!1,drawBorder:!1}}]},layout:{padding:{left:0,right:0,top:15,bottom:15}}}},o={data:function(e){var a=e.getContext("2d"),n=a.createLinearGradient(500,0,100,0);n.addColorStop(0,"#18ce0f"),n.addColorStop(1,"#FFFFFF");var o=a.createLinearGradient(0,170,0,50);return o.addColorStop(0,"rgba(128, 182, 244, 0)"),o.addColorStop(1,t("#18ce0f",.4)),{labels:["12pm,","3pm","6pm","9pm","12am","3am","6am","9am"],datasets:[{label:"Email Stats",borderColor:"#18ce0f",pointBorderColor:"#FFF",pointBackgroundColor:"#18ce0f",pointBorderWidth:2,pointHoverRadius:4,pointHoverBorderWidth:1,pointRadius:4,fill:!0,backgroundColor:o,borderWidth:2,data:[40,500,650,700,1200,1250,1300,1900]}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{bodySpacing:4,mode:"nearest",intersect:0,position:"nearest",xPadding:10,yPadding:10,caretPadding:10},responsive:1,scales:{yAxes:[{gridLines:{zeroLineColor:"transparent",drawBorder:!1},ticks:{maxTicksLimit:7}}],xAxes:[{display:0,ticks:{display:!1},gridLines:{zeroLineColor:"transparent",drawTicks:!1,display:!1,drawBorder:!1}}]},layout:{padding:{left:0,right:0,top:15,bottom:15}}}},r={data:function(e){var a=e.getContext("2d").createLinearGradient(0,170,0,50);return a.addColorStop(0,"rgba(128, 182, 244, 0)"),a.addColorStop(1,t("#2CA8FF",.6)),{labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"Active Countries",backgroundColor:a,borderColor:"#2CA8FF",pointBorderColor:"#FFF",pointBackgroundColor:"#2CA8FF",pointBorderWidth:2,pointHoverRadius:4,pointHoverBorderWidth:1,pointRadius:4,fill:!0,borderWidth:1,data:[80,99,86,96,123,85,100,75,88,90,123,155]}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{bodySpacing:4,mode:"nearest",intersect:0,position:"nearest",xPadding:10,yPadding:10,caretPadding:10},responsive:1,scales:{yAxes:[{ticks:{maxTicksLimit:7},gridLines:{zeroLineColor:"transparent",drawBorder:!1}}],xAxes:[{display:0,ticks:{display:!1},gridLines:{zeroLineColor:"transparent",drawTicks:!1,display:!1,drawBorder:!1}}]},layout:{padding:{left:0,right:0,top:15,bottom:15}}}};e.exports={dashboardPanelChart:{data:function(e){var a=e.getContext("2d"),t=a.createLinearGradient(500,0,100,0);t.addColorStop(0,"#80b6f4"),t.addColorStop(1,"#92a8d1");var n=a.createLinearGradient(0,200,0,50);return n.addColorStop(0,"rgba(128, 182, 244, 0)"),n.addColorStop(1,"rgba(255, 255, 255, 0.14)"),{labels:["JANuary","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"Data",borderColor:"#92a8d1",pointBorderColor:"#92a8d1",pointBackgroundColor:"#2c2c2c",pointHoverBackgroundColor:"#2c2c2c",pointHoverBorderColor:"#92a8d1",pointBorderWidth:1,pointHoverRadius:7,pointHoverBorderWidth:2,pointRadius:5,fill:!0,backgroundColor:n,borderWidth:2,data:[50,150,100,190,130,90,150,160,120,140,190,95]}]}},options:{layout:{padding:{left:20,right:20,top:0,bottom:0}},maintainAspectRatio:!1,tooltips:{backgroundColor:"#fff",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},legend:{position:"bottom",fillStyle:"#FFF",display:!1},scales:{yAxes:[{ticks:{fontColor:"rgba(255,255,255,0.4)",fontStyle:"bold",beginAtZero:!0,maxTicksLimit:5,padding:10},gridLines:{drawTicks:!0,drawBorder:!1,display:!0,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent"}}],xAxes:[{gridLines:{display:!1,color:"rgba(255,255,255,0.1)"},ticks:{padding:10,fontColor:"rgba(255,255,255,0.4)",fontStyle:"bold"}}]}}},dashboardShippedProductsChart:n,dashboardAllProductsChart:o,dashboard24HoursPerformanceChart:r}},218:function(e,a,t){e.exports=t.p+"static/media/logo-white.a80cd7a7.svg"},220:function(e,a,t){e.exports=t(454)},226:function(e,a,t){},227:function(e,a,t){},450:function(e,a,t){e.exports=t.p+"static/media/bg5.056eb058.jpg"},451:function(e,a,t){e.exports=t.p+"static/media/mike.aab414f7.jpg"},454:function(e,a,t){"use strict";t.r(a);var n,o,r=t(0),l=t.n(r),i=t(33),s=t.n(i),c=t(219),d=t(16),p=(t(225),t(226),t(227),t(9)),m=t(10),u=t(12),g=t(11),b=t(88),f=t(41),h=t(152),y=t(150),v=t(153),_=t(154),C=t(87),E=t(172),k=t(171),w=t(173),N=t(85),O=t(155),x=t(156),T=t(209),S=t(144),j=t(145),F=t(146),L=t(147),A=t(148),B=t(149),P=function(e){Object(u.a)(t,e);var a=Object(g.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"panel-header "+(void 0!==this.props.size?"panel-header-"+this.props.size:"")})}}]),t}(l.a.Component),R=t(120),W=function(e){Object(u.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(p.a)(this,t),(n=a.call(this,e)).state={summaryRoute:{},items:[]},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(a){console.log(a),e.setState({items:a.Countries})}),(function(a){e.setState({error:a})}))}},{key:"render",value:function(){var e=this.state.items;return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,{size:"lg",content:l.a.createElement(T.a,{data:R.dashboardPanelChart.data,options:R.dashboardPanelChart.options})}),l.a.createElement("div",{className:"content"},l.a.createElement(S.a,null,l.a.createElement(j.a,null,l.a.createElement(F.a,null,l.a.createElement("h5",{className:"card-category"},"All Countries Covid Details"),l.a.createElement(L.a,{tag:"h4"},"Covid Stats")),l.a.createElement(A.a,null,l.a.createElement(B.a,{responsive:!0},l.a.createElement("thead",{className:"text-primary"},l.a.createElement("tr",null,l.a.createElement("th",null,"Country"),l.a.createElement("th",null,"Total Confirmed"),l.a.createElement("th",null,"Total Recovered"),l.a.createElement("th",null,"Total Deaths"))),l.a.createElement("tbody",null,e.map((function(e){return l.a.createElement("tr",{key:e.CountryCode},l.a.createElement("td",null,e.Country),l.a.createElement("td",null,e.TotalConfirmed),l.a.createElement("td",null,e.TotalRecovered),l.a.createElement("td",null,e.TotalDeaths))})))))))))}}]),t}(l.a.Component),D=t(42),M=t(211),z=t.n(M),G=t(151),H=t(86),J=t(52),U=(l.a.Component,["arrows-1_cloud-download-93","arrows-1_cloud-upload-94","arrows-1_minimal-down","arrows-1_minimal-left","arrows-1_minimal-right","arrows-1_minimal-up","arrows-1_refresh-69","arrows-1_share-66 ","business_badge","business_bank","business_briefcase-24","business_bulb-63","business_chart-bar-32","business_chart-pie-36","business_globe","business_money-coins","clothes_tie-bow","design_app","design_bullet-list-67","design_image","design_palette","design_scissors","design_vector","design-2_html5","design-2_ruler-pencil","emoticons_satisfied","files_box","files_paper","files_single-copy-04","health_ambulance","loader_gear","loader_refresh","location_bookmark","location_compass-05","location_map-big","location_pin","location_world","media-1_album","media-1_button-pause","media-1_button-play","media-1_button-power","media-1_camera-compact","media-2_note-03","media-2_sound-wave","objects_diamond","objects_globe","objects_key-25","objects_planet","objects_spaceship","objects_support-17","objects_umbrella-13","education_agenda-bookmark","education_atom","education_glasses","education_hat","education_paper","shopping_bag-16","shopping_basket","shopping_box","shopping_cart-simple","shopping_credit-card","shopping_delivery-fast","shopping_shop","shopping_tag-content","sport_trophy","sport_user-run","tech_controller-modern","tech_headphones","tech_laptop","tech_mobile","tech_tablet","tech_tv","tech_watch-time","text_align-center","text_align-left","text_bold","text_caps-small","gestures_tap-01","transportation_air-baloon","transportation_bus-front-12","travel_info","travel_istanbul","ui-1_bell-53","ui-1_check","ui-1_calendar-60","ui-1_lock-circle-open","ui-1_send","ui-1_settings-gear-63","ui-1_simple-add","ui-1_simple-delete","ui-1_simple-remove","ui-1_zoom-bold","ui-2_chat-round","ui-2_favourite-28","ui-2_like","ui-2_settings-90","ui-2_time-alarm","ui-1_email-85","users_circle-08","users_single-02"]),$=(l.a.Component,l.a.Component,["Name","Country","City","Salary"]),I=[{className:"table-success",data:["Dakota Rice","Niger","Oud-Turnhout","$36,738"]},{className:"",data:["Minerva Hooper","Cura\xe7ao","Sinaai-Waas","$23,789"]},{className:"table-info",data:["Sage Rodriguez","Netherlands","Baileux","$56,142"]},{className:"",data:["Philip Chaney","Korea, South","Overland Park","$38,735"]},{className:"table-danger",data:["Doris Greene","Malawi","Feldkirchen in K\xe4rnten","$63,542"]},{className:"",data:["Mason Porter","Chile","Gloucester","$78,615"]},{className:"table-warning",data:["Jon Porter","Portugal","Gloucester","$98,615"]}],Y=(l.a.Component,t(63)),K=Object(Y.withScriptjs)(Object(Y.withGoogleMap)((function(e){return l.a.createElement(Y.GoogleMap,{defaultZoom:13,defaultCenter:{lat:40.748817,lng:-73.985428},defaultOptions:{scrollwheel:!1,styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}]}},l.a.createElement(Y.Marker,{position:{lat:40.748817,lng:-73.985428}}))}))),Z=(l.a.Component,t(169)),V=t(170),X=(l.a.Component,[{path:"/dashboard",name:"Dashboard",icon:"design_app",component:W,layout:"/admin"}]),q=function(e){Object(u.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={isOpen:!1,dropdownOpen:!1,color:"transparent"},e.sidebarToggle=l.a.createRef(),e.toggle=function(){e.state.isOpen?e.setState({color:"transparent"}):e.setState({color:"white"}),e.setState({isOpen:!e.state.isOpen})},e.dropdownToggle=function(a){e.setState({dropdownOpen:!e.state.dropdownOpen})},e.getBrand=function(){var a;return X.map((function(t,n){return t.collapse?t.views.map((function(t,n){return t.path===e.props.location.pathname&&(a=t.name),null})):(t.redirect,t.path===e.props.location.pathname&&(a=t.name)),null})),a},e.openSidebar=function(){document.documentElement.classList.toggle("nav-open"),e.sidebarToggle.current.classList.toggle("toggled")},e.updateColor=function(){window.innerWidth<993&&e.state.isOpen?e.setState({color:"white"}):e.setState({color:"transparent"})},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateColor.bind(this))}},{key:"componentDidUpdate",value:function(e){window.innerWidth<993&&e.history.location.pathname!==e.location.pathname&&-1!==document.documentElement.className.indexOf("nav-open")&&(document.documentElement.classList.toggle("nav-open"),this.sidebarToggle.current.classList.toggle("toggled"))}},{key:"render",value:function(){var e=this;return l.a.createElement(h.a,{color:-1!==this.props.location.pathname.indexOf("full-screen-maps")?"white":this.state.color,expand:"lg",className:-1!==this.props.location.pathname.indexOf("full-screen-maps")?"navbar-absolute fixed-top":"navbar-absolute fixed-top "+("transparent"===this.state.color?"navbar-transparent ":"")},l.a.createElement(y.a,{fluid:!0},l.a.createElement("div",{className:"navbar-wrapper"},l.a.createElement("div",{className:"navbar-toggle"},l.a.createElement("button",{type:"button",ref:this.sidebarToggle,className:"navbar-toggler",onClick:function(){return e.openSidebar()}},l.a.createElement("span",{className:"navbar-toggler-bar bar1"}),l.a.createElement("span",{className:"navbar-toggler-bar bar2"}),l.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),l.a.createElement(v.a,{href:"/"},this.getBrand())),l.a.createElement(_.a,{onClick:this.toggle},l.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),l.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),l.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"})),l.a.createElement(C.a,{isOpen:this.state.isOpen,navbar:!0,className:"justify-content-end"},l.a.createElement("form",null,l.a.createElement(E.a,{className:"no-border"},l.a.createElement(k.a,{placeholder:"Search..."}),l.a.createElement(w.a,{addonType:"append"},l.a.createElement(N.a,null,l.a.createElement("i",{className:"now-ui-icons ui-1_zoom-bold"}))))),l.a.createElement(O.a,{navbar:!0},l.a.createElement(x.a,null,l.a.createElement(f.a,{to:"",className:"nav-link"},l.a.createElement("i",{className:"now-ui-icons media-2_sound-wave"}),l.a.createElement("p",null,l.a.createElement("span",{className:"d-lg-none d-md-block"},"Stats")))),l.a.createElement(x.a,null,l.a.createElement(f.a,{to:"",className:"nav-link"},l.a.createElement("i",{className:"now-ui-icons users_single-02"}),l.a.createElement("p",null,l.a.createElement("span",{className:"d-lg-none d-md-block"},"Account"))))))))}}]),t}(l.a.Component),Q=function(e){Object(u.a)(t,e);var a=Object(g.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"footer"+(this.props.default?" footer-default":"")},l.a.createElement(y.a,{fluid:!!this.props.fluid},l.a.createElement("div",{className:"copyright"},"\xa9 ",1900+(new Date).getYear(),", Designed by Chetan",". Coded by Chetan.")))}}]),t}(l.a.Component),ee=t(218),ae=t.n(ee),te=function(e){Object(u.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(p.a)(this,t),(n=a.call(this,e)).activeRoute.bind(Object(D.a)(n)),n}return Object(m.a)(t,[{key:"activeRoute",value:function(e){return this.props.location.pathname.indexOf(e),""}},{key:"componentDidMount",value:function(){navigator.platform.indexOf("Win")>-1&&(n=new b.a(this.refs.sidebar,{suppressScrollX:!0,suppressScrollY:!1}))}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&n.destroy()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"logo"},l.a.createElement("a",{href:"",className:"simple-text logo-mini"},l.a.createElement("div",{className:"logo-img"},l.a.createElement("img",{className:"simple-text logo-mini",src:ae.a,alt:"react-logo"}))),l.a.createElement("a",{href:"",className:"simple-text logo-normal"},"Covid Update")),l.a.createElement("div",{className:"sidebar-wrapper",ref:"sidebar"},l.a.createElement(O.a,null,this.props.routes.map((function(a,t){return a.redirect?null:l.a.createElement("li",{className:e.activeRoute(a.layout+a.path)+(a.pro?" active active-pro":""),key:t},l.a.createElement(f.b,{to:a.layout+a.path,className:"nav-link",activeClassName:"active"},l.a.createElement("i",{className:"now-ui-icons "+a.icon}),l.a.createElement("p",null,a.name)))})))))}}]),t}(l.a.Component),ne=function(e){Object(u.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={backgroundColor:"blue"},e.mainPanel=l.a.createRef(),e.handleColorClick=function(a){e.setState({backgroundColor:a})},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){navigator.platform.indexOf("Win")>-1&&(o=new b.a(this.mainPanel.current),document.body.classList.toggle("perfect-scrollbar-on"))}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&(o.destroy(),document.body.classList.toggle("perfect-scrollbar-on"))}},{key:"componentDidUpdate",value:function(e){"PUSH"===e.history.action&&(document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,this.mainPanel.current.scrollTop=0)}},{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement(te,Object.assign({},this.props,{routes:X})),l.a.createElement("div",{className:"main-panel",ref:this.mainPanel},l.a.createElement(q,this.props),l.a.createElement(d.d,null,X.map((function(e,a){return l.a.createElement(d.b,{path:e.layout+e.path,component:e.component,key:a})})),l.a.createElement(d.a,{from:"/admin",to:"/admin/dashboard"})),l.a.createElement(Q,{fluid:!0})))}}]),t}(l.a.Component),oe=Object(c.a)();s.a.render(l.a.createElement(d.c,{history:oe},l.a.createElement(d.d,null,l.a.createElement(d.b,{path:"/admin",render:function(e){return l.a.createElement(ne,e)}}),l.a.createElement(d.a,{to:"/admin/dashboard"}))),document.getElementById("root"))}},[[220,1,2]]]);
//# sourceMappingURL=main.c497bb76.chunk.js.map