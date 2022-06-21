!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(self.webpackChunkprimer=self.webpackChunkprimer||[]).push([[148],{34148:function(n,a,r){r.r(a),r.d(a,{DashboardModule:function(){return B}});var o=r(19116),l=r(38583),i=r(91841),m=r(92340),d=r(37716),s=r(12630),c=r(35618),p=r(93738),b=r(76627),g=r(51095),h=r(33935);function u(e,t){if(1&e&&(d.\u0275\u0275elementStart(0,"h2",11),d.\u0275\u0275text(1),d.\u0275\u0275elementEnd()),2&e){var n=d.\u0275\u0275nextContext();d.\u0275\u0275advance(1),d.\u0275\u0275textInterpolate(n.count.orders)}}function f(e,t){1&e&&d.\u0275\u0275element(0,"img",27)}function x(e,t){if(1&e&&(d.\u0275\u0275elementStart(0,"h2",11),d.\u0275\u0275text(1),d.\u0275\u0275elementEnd()),2&e){var n=d.\u0275\u0275nextContext();d.\u0275\u0275advance(1),d.\u0275\u0275textInterpolate(n.count.customers)}}function S(e,t){1&e&&d.\u0275\u0275element(0,"img",27)}function E(e,t){if(1&e&&(d.\u0275\u0275elementStart(0,"h2",11),d.\u0275\u0275text(1),d.\u0275\u0275elementEnd()),2&e){var n=d.\u0275\u0275nextContext();d.\u0275\u0275advance(1),d.\u0275\u0275textInterpolate(n.count.completedOrders)}}function v(e,t){1&e&&d.\u0275\u0275element(0,"img",27)}var C,y=[{path:"",component:(C=function(){function n(t,a){var r=this;e(this,n),this.http=t,this.router=a,this.isLoading=!1,this.rows=[],this.globalChartOptions={responsive:!0,legend:{display:!1,position:"bottom"}},this.barChartLabels=["1","2","3","4","5","6","7"],this.barChartType="bar",this.barChartLegend=!0,this.barChartData=[{data:[6,5,8,8,5,5,4],label:"Series A",borderWidth:0},{data:[5,4,4,2,6,2,5],label:"Series B",borderWidth:0}],this.barChartOptions=Object.assign({scaleShowVerticalLines:!1,tooltips:{mode:"index",intersect:!1},responsive:!0,scales:{xAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",defaultFontColor:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},stacked:!0,ticks:{beginAtZero:!0}}],yAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",defaultFontColor:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},stacked:!0}]}},this.globalChartOptions),this.bubbleChartData=[{data:[{x:6,y:5,r:15},{x:5,y:4,r:10},{x:8,y:4,r:6},{x:8,y:4,r:6},{x:5,y:14,r:14},{x:5,y:6,r:8},{x:4,y:2,r:10}],label:"Series A",borderWidth:1}],this.bubbleChartType="bubble",this.comboChartLabels=["1","2","3","4","5","6","7"],this.chartColors=[{backgroundColor:"#7986cb",borderColor:"#3f51b5",pointBackgroundColor:"#3f51b5",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"#eeeeee",borderColor:"#e0e0e0",pointBackgroundColor:"#e0e0e0",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(77,83,96,1)"},{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],this.comboChartLegend=!0,this.ComboChartData=[{data:[6,5,8,8,5,5,4],label:"Series A",borderWidth:1,type:"line",fill:!1},{data:[5,4,4,2,6,2,5],label:"Series B",borderWidth:1,type:"bar"}],this.ComboChartOptions=Object.assign({animation:!1,scales:{xAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"}}],yAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},ticks:{beginAtZero:!0,suggestedMax:9}}]}},this.globalChartOptions),this.messages=[{from:"Ali Connors",message:"I will be in your neighborhood",photo:"assets/images/face3.jpg",subject:"Brunch this weekend?"},{from:"Trevor Hansen",message:"Wish I could but we have plans",photo:"assets/images/face6.jpg",subject:"Brunch this weekend?"},{from:"Sandra Adams",message:"Do you have Paris recommendations instead?",photo:"assets/images/face4.jpg",subject:"Brunch this weekend?"},{from:"Sandra Adams",message:"Do you have Paris recommendations instead?",photo:"assets/images/face4.jpg",subject:"Brunch this weekend?"}],this.fetch(function(e){r.rows=e}),this.getCounts()}var a,r,o;return a=n,(r=[{key:"fetch",value:function(e){var t=new XMLHttpRequest;t.open("GET","assets/data/projects.json"),t.onload=function(){e(JSON.parse(t.response))},t.send()}},{key:"getCounts",value:function(){var e=this;this.isLoading=!0;var t=localStorage.getItem("token"),n=JSON.parse(localStorage.getItem("currentUser")),a=new i.WM({Authorization:"Bearer "+t,Accept:"application/json","Content-Type":"application/json"});this.http.get("".concat(m.N.apiUrl,"stores/count-orders?store=").concat(n.id),{headers:a}).subscribe(function(t){e.count=t,console.log(t),e.isLoading=!1},function(t){console.log(t),alert(t),e.isLoading=!1})}}])&&t(a.prototype,r),o&&t(a,o),n}(),C.\u0275fac=function(e){return new(e||C)(d.\u0275\u0275directiveInject(i.eN),d.\u0275\u0275directiveInject(s.F0))},C.\u0275cmp=d.\u0275\u0275defineComponent({type:C,selectors:[["app-dashboard"]],decls:136,vars:26,consts:[["fxLayout","row wrap"],["fxFlex.gt-sm","25","fxFlex.gt-xs","50","fxFlex","100"],[1,"card-widget","mat-teal"],["mat-card-widget",""],["mat-card-float-icon",""],[1,"pl-0"],["mat-card-widget-title","",4,"ngIf"],["src","assets/images/loader.jpg","width","20","height","20",4,"ngIf"],[1,"card-widget","mat-purple"],[1,"card-widget","mat-red"],[1,"card-widget","mat-indigo"],["mat-card-widget-title",""],["fxFlex.gt-sm","33.33%","fxFlex","100"],["fxLayout","row","fxLayoutAlign","start center"],[1,"font-weight-bold","mat-text-primary"],["fxFlex",""],["mat-icon-button","","mat-button-sm","","aria-label","Open card menu",3,"matMenuTriggerFor"],["x-position","before"],["card1","matMenu"],["mat-menu-item",""],["height","200","baseChart","",1,"chart",3,"datasets","labels","options","colors","legend","chartType"],["fxFlex.gt-sm","33.33%","fxFlex.gt-xs","50","fxFlex","100"],[1,"font-weight-bold","mat-text-warn"],["card2","matMenu"],[1,"font-weight-bold","mat-text-accent"],["card3","matMenu"],["height","200","baseChart","",1,"chart",3,"datasets","labels","options","legend","chartType"],["src","assets/images/loader.jpg","width","20","height","20"]],template:function(e,t){if(1&e&&(d.\u0275\u0275elementStart(0,"div",0),d.\u0275\u0275elementStart(1,"div",1),d.\u0275\u0275elementStart(2,"mat-card",2),d.\u0275\u0275elementStart(3,"div",3),d.\u0275\u0275elementStart(4,"div",4),d.\u0275\u0275elementStart(5,"mat-icon"),d.\u0275\u0275text(6,"delivery_dining"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(7,"div",5),d.\u0275\u0275template(8,u,2,1,"h2",6),d.\u0275\u0275template(9,f,1,0,"img",7),d.\u0275\u0275elementStart(10,"p"),d.\u0275\u0275text(11,"Orders"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(12,"div",1),d.\u0275\u0275elementStart(13,"mat-card",8),d.\u0275\u0275elementStart(14,"div",3),d.\u0275\u0275elementStart(15,"div",4),d.\u0275\u0275elementStart(16,"mat-icon"),d.\u0275\u0275text(17,"group"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(18,"div",5),d.\u0275\u0275template(19,x,2,1,"h2",6),d.\u0275\u0275template(20,S,1,0,"img",7),d.\u0275\u0275elementStart(21,"p"),d.\u0275\u0275text(22,"Customers"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(23,"div",1),d.\u0275\u0275elementStart(24,"mat-card",9),d.\u0275\u0275elementStart(25,"div",3),d.\u0275\u0275elementStart(26,"div",4),d.\u0275\u0275elementStart(27,"mat-icon"),d.\u0275\u0275text(28,"local_atm"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(29,"div",5),d.\u0275\u0275template(30,E,2,1,"h2",6),d.\u0275\u0275template(31,v,1,0,"img",7),d.\u0275\u0275elementStart(32,"p"),d.\u0275\u0275text(33,"Successful Sales"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(34,"div",1),d.\u0275\u0275elementStart(35,"mat-card",10),d.\u0275\u0275elementStart(36,"div",3),d.\u0275\u0275elementStart(37,"div",4),d.\u0275\u0275elementStart(38,"mat-icon"),d.\u0275\u0275text(39,"email"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(40,"div",5),d.\u0275\u0275elementStart(41,"h2",11),d.\u0275\u0275text(42,"0"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(43,"p"),d.\u0275\u0275text(44,"Feedbacks"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(45,"div",0),d.\u0275\u0275elementStart(46,"div",12),d.\u0275\u0275elementStart(47,"mat-card"),d.\u0275\u0275elementStart(48,"mat-card-subtitle",13),d.\u0275\u0275text(49," Revenue \xa0 "),d.\u0275\u0275elementStart(50,"span",14),d.\u0275\u0275text(51,"+458,90"),d.\u0275\u0275elementEnd(),d.\u0275\u0275element(52,"span",15),d.\u0275\u0275elementStart(53,"button",16),d.\u0275\u0275elementStart(54,"mat-icon"),d.\u0275\u0275text(55,"more_vert"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(56,"mat-menu",17,18),d.\u0275\u0275elementStart(58,"button",19),d.\u0275\u0275elementStart(59,"mat-icon"),d.\u0275\u0275text(60,"settings"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(61," Settings "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(62,"button",19),d.\u0275\u0275elementStart(63,"mat-icon"),d.\u0275\u0275text(64,"more"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(65," View More "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(66,"button",19),d.\u0275\u0275elementStart(67,"mat-icon"),d.\u0275\u0275text(68,"notifications_off"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(69," Disable notifications "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(70,"button",19),d.\u0275\u0275elementStart(71,"mat-icon"),d.\u0275\u0275text(72,"exit_to_app"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(73," Remove Panel "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(74,"mat-card-content"),d.\u0275\u0275element(75,"canvas",20),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(76,"div",21),d.\u0275\u0275elementStart(77,"mat-card"),d.\u0275\u0275elementStart(78,"mat-card-subtitle",13),d.\u0275\u0275text(79," Yearly Sales \xa0 "),d.\u0275\u0275elementStart(80,"span",22),d.\u0275\u0275text(81,"-46,68"),d.\u0275\u0275elementEnd(),d.\u0275\u0275element(82,"span",15),d.\u0275\u0275elementStart(83,"button",16),d.\u0275\u0275elementStart(84,"mat-icon"),d.\u0275\u0275text(85,"more_vert"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(86,"mat-menu",17,23),d.\u0275\u0275elementStart(88,"button",19),d.\u0275\u0275elementStart(89,"mat-icon"),d.\u0275\u0275text(90,"settings"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(91," Settings "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(92,"button",19),d.\u0275\u0275elementStart(93,"mat-icon"),d.\u0275\u0275text(94,"more"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(95," View More "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(96,"button",19),d.\u0275\u0275elementStart(97,"mat-icon"),d.\u0275\u0275text(98,"notifications_off"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(99," Disable notifications "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(100,"button",19),d.\u0275\u0275elementStart(101,"mat-icon"),d.\u0275\u0275text(102,"exit_to_app"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(103," Remove Panel "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(104,"mat-card-content"),d.\u0275\u0275element(105,"canvas",20),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(106,"div",21),d.\u0275\u0275elementStart(107,"mat-card"),d.\u0275\u0275elementStart(108,"mat-card-subtitle",13),d.\u0275\u0275text(109," Sales Report \xa0 "),d.\u0275\u0275elementStart(110,"span",24),d.\u0275\u0275text(111,"+2,50%"),d.\u0275\u0275elementEnd(),d.\u0275\u0275element(112,"span",15),d.\u0275\u0275elementStart(113,"button",16),d.\u0275\u0275elementStart(114,"mat-icon"),d.\u0275\u0275text(115,"more_vert"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(116,"mat-menu",17,25),d.\u0275\u0275elementStart(118,"button",19),d.\u0275\u0275elementStart(119,"mat-icon"),d.\u0275\u0275text(120,"settings"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(121," Settings "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(122,"button",19),d.\u0275\u0275elementStart(123,"mat-icon"),d.\u0275\u0275text(124,"more"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(125," View More "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(126,"button",19),d.\u0275\u0275elementStart(127,"mat-icon"),d.\u0275\u0275text(128,"notifications_off"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(129," Disable notifications "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(130,"button",19),d.\u0275\u0275elementStart(131,"mat-icon"),d.\u0275\u0275text(132,"exit_to_app"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(133," Remove Panel "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(134,"mat-card-content"),d.\u0275\u0275element(135,"canvas",26),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd()),2&e){var n=d.\u0275\u0275reference(57),a=d.\u0275\u0275reference(87),r=d.\u0275\u0275reference(117);d.\u0275\u0275advance(8),d.\u0275\u0275property("ngIf",!t.isLoading),d.\u0275\u0275advance(1),d.\u0275\u0275property("ngIf",t.isLoading),d.\u0275\u0275advance(10),d.\u0275\u0275property("ngIf",!t.isLoading),d.\u0275\u0275advance(1),d.\u0275\u0275property("ngIf",t.isLoading),d.\u0275\u0275advance(10),d.\u0275\u0275property("ngIf",!t.isLoading),d.\u0275\u0275advance(1),d.\u0275\u0275property("ngIf",t.isLoading),d.\u0275\u0275advance(22),d.\u0275\u0275property("matMenuTriggerFor",n),d.\u0275\u0275advance(22),d.\u0275\u0275property("datasets",t.barChartData)("labels",t.barChartLabels)("options",t.barChartOptions)("colors",t.chartColors)("legend",t.barChartLegend)("chartType",t.barChartType),d.\u0275\u0275advance(8),d.\u0275\u0275property("matMenuTriggerFor",a),d.\u0275\u0275advance(22),d.\u0275\u0275property("datasets",t.ComboChartData)("labels",t.comboChartLabels)("options",t.ComboChartOptions)("colors",t.chartColors)("legend",t.comboChartLegend)("chartType",t.barChartType),d.\u0275\u0275advance(8),d.\u0275\u0275property("matMenuTriggerFor",r),d.\u0275\u0275advance(22),d.\u0275\u0275property("datasets",t.bubbleChartData)("labels",t.comboChartLabels)("options",t.ComboChartOptions)("legend",t.comboChartLegend)("chartType",t.bubbleChartType)}},directives:[c.xw,c.yH,p.a8,b.Hw,l.O5,p.$j,c.Wh,g.lW,h.p6,h.VK,h.OP,p.dn,o.jh],styles:[""]}),C)}],w=r(15566),L=r(77746),k=r(12178),j=r(38550),B=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=d.\u0275\u0275defineInjector({imports:[[l.ez,s.Bz.forChild(y),b.Ps,p.QW,g.ot,L.ie,k.Cv,h.Tx,o.m9,j.xD,w.o9]]}),t}()}}])}();