!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(self.webpackChunkprimer=self.webpackChunkprimer||[]).push([[978],{96978:function(n,o,a){a.r(o),a.d(o,{StoreCategoriesModule:function(){return O}});var r=a(38583),i=a(49983),l=a(38550),c=a(12630),u=a(91841),m=a(92340),d=a(37716),p=a(98295),s=a(35618),f=a(51095),g=a(76627);function h(e,t){1&e&&(d.\u0275\u0275elementStart(0,"strong"),d.\u0275\u0275text(1,"Category Name"),d.\u0275\u0275elementEnd())}function y(e,t){1&e&&d.\u0275\u0275text(0),2&e&&d.\u0275\u0275textInterpolate1(" ",t.value," ")}function x(e,t){1&e&&(d.\u0275\u0275elementStart(0,"strong"),d.\u0275\u0275text(1,"Display Order"),d.\u0275\u0275elementEnd())}function v(e,t){1&e&&d.\u0275\u0275text(0),2&e&&d.\u0275\u0275textInterpolate1(" ",t.value," ")}var b=function(){return["/add-food-category"]};function w(e,t){1&e&&(d.\u0275\u0275elementStart(0,"button",11),d.\u0275\u0275elementStart(1,"mat-icon",4),d.\u0275\u0275text(2,"edit"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd()),2&e&&d.\u0275\u0275property("routerLink",d.\u0275\u0275pureFunction0(1,b))}function S(e,t){1&e&&(d.\u0275\u0275elementStart(0,"button",12),d.\u0275\u0275elementStart(1,"mat-icon",4),d.\u0275\u0275text(2,"delete"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd())}var C,E=function(){return["/add-store-category"]},k=[{path:"",component:(C=function(){function n(t,o){e(this,n),this.http=t,this.router=o,this.rows=[],this.temp=[],this.ColumnMode=l.hq,this.isLoading=!1,this.total=0,this.p=1,this.base="http://localhost/Laravel/ABC/"}var o,a,r;return o=n,(a=[{key:"ngOnInit",value:function(){this.getCategory({offset:0})}},{key:"updateFilter",value:function(e){var t=e.target.value.toLowerCase(),n=this.temp.filter(function(e){return-1!==e.name.toLowerCase().indexOf(t)||!t});this.rows=n}},{key:"getCategory",value:function(e){var t=this;this.isLoading=!0,console.log(e.offset+1),this.p=e.offset;var n=e.offset+1,o=localStorage.getItem("token"),a=JSON.parse(localStorage.getItem("currentUser")),r=new u.WM({Authorization:"Bearer "+o,Accept:"application/json","Content-Type":"application/json"});this.http.get("".concat(m.N.apiUrl,"stores/menu-category?store=").concat(a.id,"&page=").concat(n),{headers:r}).subscribe(function(e){t.rows=e.data,t.total=e.total,console.log(e),t.isLoading=!1},function(e){console.log(e),alert(e),t.isLoading=!1})}}])&&t(o.prototype,a),r&&t(o,r),n}(),C.\u0275fac=function(e){return new(e||C)(d.\u0275\u0275directiveInject(u.eN),d.\u0275\u0275directiveInject(c.F0))},C.\u0275cmp=d.\u0275\u0275defineComponent({type:C,selectors:[["app-food-fategory"]],decls:18,vars:11,consts:[[1,"mb-1",2,"width","100%"],["matInput","","placeholder","Type to filter the name column...","required","",3,"keyup"],["fxLayout","row",2,"padding","20px 10px 20px 8px","right","0"],["fxLayoutAlign","end center","mat-raised-button","","color","primary",3,"routerLink"],["aria-label","add category"],["rowHeight","auto",1,"material",3,"rows","columnMode","headerHeight","footerHeight","loadingIndicator","externalPaging","count","offset","limit","page"],["name","Name"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["prop","display_order"],["name",""],["mat-icon-button","","color","primary",3,"routerLink"],["mat-icon-button","",2,"color","red"]],template:function(e,t){1&e&&(d.\u0275\u0275elementStart(0,"mat-form-field",0),d.\u0275\u0275elementStart(1,"input",1),d.\u0275\u0275listener("keyup",function(e){return t.updateFilter(e)}),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(2,"div",2),d.\u0275\u0275elementStart(3,"button",3),d.\u0275\u0275elementStart(4,"mat-icon",4),d.\u0275\u0275text(5,"add"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(6," Add New Category"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(7,"ngx-datatable",5),d.\u0275\u0275listener("page",function(e){return t.getCategory(e)}),d.\u0275\u0275elementStart(8,"ngx-datatable-column",6),d.\u0275\u0275template(9,h,2,0,"ng-template",7),d.\u0275\u0275template(10,y,1,1,"ng-template",8),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(11,"ngx-datatable-column",9),d.\u0275\u0275template(12,x,2,0,"ng-template",7),d.\u0275\u0275template(13,v,1,1,"ng-template",8),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(14,"ngx-datatable-column",10),d.\u0275\u0275template(15,w,3,2,"ng-template",8),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(16,"ngx-datatable-column",10),d.\u0275\u0275template(17,S,3,0,"ng-template",8),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd()),2&e&&(d.\u0275\u0275advance(3),d.\u0275\u0275property("routerLink",d.\u0275\u0275pureFunction0(10,E)),d.\u0275\u0275advance(4),d.\u0275\u0275property("rows",t.rows)("columnMode",t.ColumnMode.force)("headerHeight",50)("footerHeight",50)("loadingIndicator",t.isLoading)("externalPaging",!0)("count",t.total)("offset",t.p)("limit",100))},directives:[p.KE,i.Nt,s.xw,f.lW,s.Wh,c.rH,g.Hw,l.nE,l.UC,l.tk,l.vq],styles:[""]}),C)},{path:"add",component:a(66219).D}],L=a(15566),I=a(93738),M=a(77746),F=a(33935),N=a(12178),j=a(3679),H=a(82613),A=a(12522),O=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=d.\u0275\u0275defineInjector({imports:[[r.ez,c.Bz.forChild(k),i.c,l.xD,g.Ps,I.QW,f.ot,M.ie,N.Cv,F.Tx,H.Fk,A.g0,L.o9,j.FormsModule,j.ReactiveFormsModule]]}),t}()}}])}();