"use strict";(self.webpackChunkprimer=self.webpackChunkprimer||[]).push([[580],{36580:function(e,t,o){o.r(t),o.d(t,{FoodCategoryModule:function(){return W}});var n=o(38583),i=o(49983),r=o(38550),a=o(12630),s=o(91841),l=o(92340),c=o(22238),d=o(3679),g=o(37716),m=o(35618),p=o(51095),h=o(76627),u=o(7539);function f(e,t){1&e&&(g.\u0275\u0275elementStart(0,"strong"),g.\u0275\u0275text(1,"Cuisine Name"),g.\u0275\u0275elementEnd())}function C(e,t){1&e&&g.\u0275\u0275text(0),2&e&&g.\u0275\u0275textInterpolate1(" ",t.value," ")}function y(e,t){1&e&&g.\u0275\u0275element(0,"img",3)}function x(e,t){if(1&e){const e=g.\u0275\u0275getCurrentView();g.\u0275\u0275elementStart(0,"p",8),g.\u0275\u0275elementStart(1,"mat-checkbox",9),g.\u0275\u0275listener("change",function(){const t=g.\u0275\u0275restoreView(e).index;return g.\u0275\u0275nextContext(2).checkChange(t)}),g.\u0275\u0275text(2),g.\u0275\u0275elementEnd(),g.\u0275\u0275elementEnd()}if(2&e){const e=t.index,o=g.\u0275\u0275nextContext(2);g.\u0275\u0275advance(1),g.\u0275\u0275property("formControlName",e)("value",o.categories[e].id),g.\u0275\u0275advance(1),g.\u0275\u0275textInterpolate(o.categories[e].name)}}function v(e,t){1&e&&(g.\u0275\u0275elementStart(0,"div"),g.\u0275\u0275text(1,"At least one order must be selected"),g.\u0275\u0275elementEnd())}function b(e,t){if(1&e){const e=g.\u0275\u0275getCurrentView();g.\u0275\u0275elementStart(0,"form",4),g.\u0275\u0275listener("ngSubmit",function(){return g.\u0275\u0275restoreView(e),g.\u0275\u0275nextContext().onSubmit()}),g.\u0275\u0275template(1,x,3,3,"p",5),g.\u0275\u0275template(2,v,2,0,"div",6),g.\u0275\u0275elementStart(3,"button",7),g.\u0275\u0275text(4,"Submit"),g.\u0275\u0275elementEnd(),g.\u0275\u0275elementEnd()}if(2&e){const e=g.\u0275\u0275nextContext();g.\u0275\u0275property("formGroup",e.form),g.\u0275\u0275advance(1),g.\u0275\u0275property("ngForOf",e.ordersFormArray.controls),g.\u0275\u0275advance(1),g.\u0275\u0275property("ngIf",!e.form.valid)}}const w=new c.vA;let S=(()=>{class e{constructor(e,t,o,n){this.http=e,this.router=t,this.dialog=o,this.rows=[],this.temp=[],this.ColumnMode=r.hq,this.isLoading=!1,this.total=0,this.per_page=20,this.p=1,this.config={disableClose:!1,panelClass:"custom-overlay-pane-class",hasBackdrop:!0,backdropClass:"",width:"",height:"",minWidth:"",minHeight:"",maxWidth:w.maxWidth,maxHeight:"",position:{top:"",bottom:"",left:"",right:""},data:{message:"Jazzy jazz jazz"}},this.numTemplateOpens=0}ngOnInit(){this.getCategory({offset:0})}updateFilter(e){const t=e.target.value.toLowerCase(),o=this.temp.filter(e=>-1!==e.name.toLowerCase().indexOf(t)||!t);this.rows=o}getCategory(e){this.isLoading=!0,this.p=e.offset;let t=localStorage.getItem("token");console.log(t);let o=JSON.parse(localStorage.getItem("currentUser")),n=new s.WM({Authorization:"Bearer "+t,Accept:"application/json","Content-Type":"application/json"});this.http.get(`${l.N.apiUrl}stores/settings?store_id=${o.id}`,{headers:n}).subscribe(e=>{let t=JSON.parse(e.data[0].cuisine),o="";0==t.length&&(this.rows=[],this.total=0,this.isLoading=!1),t.length>0&&(t.forEach((e,t,n)=>{o+=t==n.length-1?`id[]=${e}`:`id[]=${e}&`}),this.getCuisineName(o))})}getCuisineName(e){console.log(e);let t=localStorage.getItem("token"),o=new s.WM({Authorization:"Bearer "+t,Accept:"application/json","Content-Type":"application/json"});this.http.get(`${l.N.apiUrl}stores/bulk-cuisine?${e}`,{headers:o}).subscribe(e=>{console.log(e.data),this.rows=e.data,this.total=e.total,this.isLoading=!1})}openAddCat(){this.dialog.open(I,{width:"300px"}).afterClosed().subscribe(e=>{this.getCategory({offset:0})})}}return e.\u0275fac=function(t){return new(t||e)(g.\u0275\u0275directiveInject(s.eN),g.\u0275\u0275directiveInject(a.F0),g.\u0275\u0275directiveInject(c.uw),g.\u0275\u0275directiveInject(n.K0))},e.\u0275cmp=g.\u0275\u0275defineComponent({type:e,selectors:[["app-food-fategory"]],decls:9,vars:9,consts:[["fxLayout","row",2,"padding","20px 10px 20px 8px","right","0"],["fxLayoutAlign","end center","mat-raised-button","","color","primary",3,"click"],["aria-label","add category"],["rowHeight","auto",1,"material",3,"rows","columnMode","headerHeight","footerHeight","loadingIndicator","externalPaging","count","offset","limit","page"],["name","Name"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""]],template:function(e,t){1&e&&(g.\u0275\u0275elementStart(0,"div",0),g.\u0275\u0275elementStart(1,"button",1),g.\u0275\u0275listener("click",function(){return t.openAddCat()}),g.\u0275\u0275elementStart(2,"mat-icon",2),g.\u0275\u0275text(3,"add"),g.\u0275\u0275elementEnd(),g.\u0275\u0275text(4," Add/Edit Cuisine"),g.\u0275\u0275elementEnd(),g.\u0275\u0275elementEnd(),g.\u0275\u0275elementStart(5,"ngx-datatable",3),g.\u0275\u0275listener("page",function(e){return t.getCategory(e)}),g.\u0275\u0275elementStart(6,"ngx-datatable-column",4),g.\u0275\u0275template(7,f,2,0,"ng-template",5),g.\u0275\u0275template(8,C,1,1,"ng-template",6),g.\u0275\u0275elementEnd(),g.\u0275\u0275elementEnd()),2&e&&(g.\u0275\u0275advance(5),g.\u0275\u0275property("rows",t.rows)("columnMode",t.ColumnMode.force)("headerHeight",50)("footerHeight",50)("loadingIndicator",t.isLoading)("externalPaging",!0)("count",t.total)("offset",t.p)("limit",t.per_page))},directives:[m.xw,p.lW,m.Wh,h.Hw,r.nE,r.UC,r.tk,r.vq],styles:[""]}),e})(),I=(()=>{class e{constructor(e,t,o,n,i){this.http=e,this.formBuilder=t,this.router=o,this.dialogRef=n,this.data=i,this._dimesionToggle=!1,this.required="This field is required",this.isLoading=!1,this.loading=!1,this.form=this.formBuilder.group({category:new d.FormArray([],N(1))}),this.getCategory()}get ordersFormArray(){return this.form.controls.category}getCategory(){this.isLoading=!0;let e=localStorage.getItem("token"),t=new s.WM({Authorization:"Bearer "+e,Accept:"application/json","Content-Type":"application/json"});this.http.get(`${l.N.apiUrl}stores/cuisine`,{headers:t}).subscribe(e=>{this.categories=e.data,this.addCheckboxes(),console.log(e),this.isLoading=!1})}onNoClick(){this.dialogRef.close()}addCheckboxes(){this.categories.forEach(()=>this.ordersFormArray.push(new d.FormControl(!1)))}onSubmit(){this.loading=!0;let e={cuisine:this.form.value.category.map((e,t)=>e?this.categories[t].id:null).filter(e=>null!==e)},t=JSON.stringify(e);console.log(t);let o=localStorage.getItem("token"),n=JSON.parse(localStorage.getItem("currentUser")),i=new s.WM({Authorization:"Bearer "+o,Accept:"application/json","Content-Type":"application/json"});this.http.put(`${l.N.apiUrl}stores/settings/${n.id}`,t,{headers:i}).subscribe(e=>{console.log(e),this.loading=!1}),this.dialogRef.close()}checkChange(e){console.log(this.form.value)}}return e.\u0275fac=function(t){return new(t||e)(g.\u0275\u0275directiveInject(s.eN),g.\u0275\u0275directiveInject(d.FormBuilder),g.\u0275\u0275directiveInject(a.F0),g.\u0275\u0275directiveInject(c.so),g.\u0275\u0275directiveInject(c.WI))},e.\u0275cmp=g.\u0275\u0275defineComponent({type:e,selectors:[["add-cat"]],decls:5,vars:2,consts:[["mat-dialog-content",""],["src","assets/images/loading.png","width","30","height","30",4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],["src","assets/images/loading.png","width","30","height","30"],[3,"formGroup","ngSubmit"],["formArrayName","category",4,"ngFor","ngForOf"],[4,"ngIf"],["mat-raised-button","","color","primary"],["formArrayName","category"],["color","primary",3,"formControlName","value","change"]],template:function(e,t){1&e&&(g.\u0275\u0275elementStart(0,"h3"),g.\u0275\u0275text(1," Add/Edit Cuisine"),g.\u0275\u0275elementEnd(),g.\u0275\u0275elementStart(2,"div",0),g.\u0275\u0275template(3,y,1,0,"img",1),g.\u0275\u0275template(4,b,5,3,"form",2),g.\u0275\u0275elementEnd()),2&e&&(g.\u0275\u0275advance(3),g.\u0275\u0275property("ngIf",t.isLoading),g.\u0275\u0275advance(1),g.\u0275\u0275property("ngIf",!t.isLoading))},directives:[c.xY,n.O5,d.\u0275NgNoValidate,d.NgControlStatusGroup,d.FormGroupDirective,n.sg,p.lW,d.FormArrayName,u.oG,d.NgControlStatus,d.FormControlName],styles:[""]}),e})();function N(e=1){return t=>t.controls.map(e=>e.value).reduce((e,t)=>t?e+t:e,0)>=e?null:{required:!0}}const A=[{path:"",component:S},{path:"add",component:o(78661).D}];var j=o(15566),k=o(93738),F=o(77746),E=o(33935),L=o(67441),z=o(82613),M=o(12522);let W=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=g.\u0275\u0275defineInjector({imports:[[n.ez,a.Bz.forChild(A),i.c,r.xD,h.Ps,k.QW,p.ot,L.LD,u.p9,F.ie,c.Is,E.Tx,z.Fk,M.g0,j.o9,d.FormsModule,d.ReactiveFormsModule]]}),e})()}}]);