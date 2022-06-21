(self.webpackChunkprimer=self.webpackChunkprimer||[]).push([[592],{44836:function(e,t,n){!function(e,t,n){"use strict";var a=function(e){!e||Object.assign(this,e)},o=function(){function t(e,t){this.el=e,this.ngZone=t,this.onAddressChange=new n.EventEmitter}return t.prototype.ngAfterViewInit=function(){this.options||(this.options=new a),this.initialize()},t.prototype.isGoogleLibExists=function(){return!(!google||!google.maps||!google.maps.places)},t.prototype.initialize=function(){var e=this;if(!this.isGoogleLibExists())throw new Error("Google maps library can not be found");if(this.autocomplete=new google.maps.places.Autocomplete(this.el.nativeElement,this.options),!this.autocomplete)throw new Error("Autocomplete is not initialized");null!=!this.autocomplete.addListener&&(this.eventListener=this.autocomplete.addListener("place_changed",function(){e.handleChangeEvent()})),this.el.nativeElement.addEventListener("keydown",function(t){t.key&&"enter"==t.key.toLowerCase()&&t.target===e.el.nativeElement&&(t.preventDefault(),t.stopPropagation())}),window&&window.navigator&&window.navigator.userAgent&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&setTimeout(function(){var e=document.getElementsByClassName("pac-container");if(e){var t=Array.from(e);if(t)for(var n=0,a=t;n<a.length;n++){var o=a[n];!o||o.addEventListener("touchend",function(e){e.stopImmediatePropagation()})}}},500)},t.prototype.reset=function(){this.autocomplete.setComponentRestrictions(this.options.componentRestrictions),this.autocomplete.setTypes(this.options.types)},t.prototype.handleChangeEvent=function(){var e=this;this.ngZone.run(function(){e.place=e.autocomplete.getPlace(),e.place&&e.onAddressChange.emit(e.place)})},t.ctorParameters=function(){return[{type:n.ElementRef},{type:n.NgZone}]},t.propDecorators={options:[{type:n.Input,args:["options"]}],onAddressChange:[{type:n.Output}]},t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.NgZone))},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["","ngx-google-places-autocomplete",""]],inputs:{options:"options"},outputs:{onAddressChange:"onAddressChange"},exportAs:["ngx-places"]}),t}(),r=function(){function t(){}return t.ctorParameters=function(){return[]},t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({}),t}();t.GooglePlaceModule=r,t.GooglePlaceDirective=o,Object.defineProperty(t,"__esModule",{value:!0})}(n(37716),t,n(37716))},66219:function(e,t,n){"use strict";n.d(t,{D:function(){return b}});var a=n(3679),o=n(92340),r=n(91841),i=n(38550),l=n(37716),s=n(12630),p=n(93738),m=n(35618),d=n(98295),c=n(49983),u=n(38583),g=n(67441),f=n(51095),h=n(72458);function v(e,t){if(1&e&&(l.\u0275\u0275elementStart(0,"mat-error"),l.\u0275\u0275text(1),l.\u0275\u0275elementEnd()),2&e){const e=l.\u0275\u0275nextContext();l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate1(" ",e.getNameError()," ")}}function x(e,t){if(1&e&&(l.\u0275\u0275elementStart(0,"mat-option",12),l.\u0275\u0275text(1),l.\u0275\u0275elementEnd()),2&e){const e=t.$implicit;l.\u0275\u0275property("value",e.value),l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate(e.value)}}function y(e,t){if(1&e&&(l.\u0275\u0275elementStart(0,"mat-error"),l.\u0275\u0275text(1),l.\u0275\u0275elementEnd()),2&e){const e=l.\u0275\u0275nextContext();l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate1(" ",e.getDisplayError()," ")}}function C(e,t){1&e&&(l.\u0275\u0275elementStart(0,"span"),l.\u0275\u0275text(1,"Add Category"),l.\u0275\u0275elementEnd())}function E(e,t){1&e&&l.\u0275\u0275element(0,"img",13)}let b=(()=>{class e{constructor(e,t,n){this.fb=e,this.http=t,this.router=n,this.loading=!1,this.ColumnMode=i.hq,this.display_order=[{value:1},{value:2},{value:3},{value:4},{value:5},{value:6},{value:7},{value:8},{value:9},{value:10},{value:11},{value:12},{value:13},{value:14},{value:15},{value:16},{value:17},{value:18},{value:19},{value:20},{value:21},{value:22},{value:23},{value:24},{value:25},{value:26},{value:27},{value:28},{value:29},{value:30},{value:31},{value:32},{value:33},{value:34},{value:35},{value:36},{value:37},{value:38},{value:39},{value:40}]}ngOnInit(){this.form=this.fb.group({name:[null,a.Validators.compose([a.Validators.required,a.Validators.minLength(2)])],display_order:[null,a.Validators.required]})}getNameError(){return this.form.get("name").hasError("required")?"Name of the category is required)":this.form.get("name").hasError("minLength")?"Category name must be at least 2 characters long":""}getDisplayError(){return this.form.get("name").hasError("required")?"Display order is required":""}onSubmit(e){let t=localStorage.getItem("token"),n=new r.WM({Authorization:"Bearer "+t,Accept:"application/json","Content-Type":"application/json"});if(this.form.valid){this.loading=!0;let e=JSON.stringify(this.form.value);this.http.post(`${o.N.apiUrl}stores/menu-category`,e,{headers:n}).subscribe(e=>{console.log(e),this.loading=!1,this.router.navigate(["/store-categories"])},e=>{console.log(e),this.error=e,this.loading=!1})}}}return e.\u0275fac=function(t){return new(t||e)(l.\u0275\u0275directiveInject(a.FormBuilder),l.\u0275\u0275directiveInject(r.eN),l.\u0275\u0275directiveInject(s.F0))},e.\u0275cmp=l.\u0275\u0275defineComponent({type:e,selectors:[["app-add-food-category"]],decls:26,vars:7,consts:[[1,"form",3,"formGroup","ngSubmit"],["fxLayoutAlign","left"],["fxLayout","row wrap",1,"col-gap"],["fxFlex.xs","100","fxFlex.sm","100","fxFlex.md","50","fxFlex.lg","50","fxFlex.xl","50",1,"column"],["appearance","outline"],["matInput","","placeholder","Name","formControlName","name","required",""],[4,"ngIf"],["placeholder","Display Order","formControlName","display_order","required",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-sm-12","col-sm-offset-5"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["src","assets/images/loading.png","width","30","height","30",4,"ngIf"],[3,"value"],["src","assets/images/loading.png","width","30","height","30"]],template:function(e,t){1&e&&(l.\u0275\u0275elementStart(0,"form",0),l.\u0275\u0275listener("ngSubmit",function(){return t.onSubmit(t.form.value)}),l.\u0275\u0275elementStart(1,"mat-card"),l.\u0275\u0275elementStart(2,"mat-card-header",1),l.\u0275\u0275elementStart(3,"mat-card-subtitle"),l.\u0275\u0275elementStart(4,"h2"),l.\u0275\u0275text(5,"Store Categories"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(6,"mat-card-content"),l.\u0275\u0275elementStart(7,"div",2),l.\u0275\u0275elementStart(8,"div",3),l.\u0275\u0275elementStart(9,"mat-form-field",4),l.\u0275\u0275elementStart(10,"mat-label"),l.\u0275\u0275text(11,"Category Name"),l.\u0275\u0275elementEnd(),l.\u0275\u0275element(12,"input",5),l.\u0275\u0275template(13,v,2,1,"mat-error",6),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(14,"div",3),l.\u0275\u0275elementStart(15,"mat-form-field",4),l.\u0275\u0275elementStart(16,"mat-label"),l.\u0275\u0275text(17,"Display Order"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(18,"mat-select",7),l.\u0275\u0275template(19,x,2,2,"mat-option",8),l.\u0275\u0275elementEnd(),l.\u0275\u0275template(20,y,2,1,"mat-error",6),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275element(21,"br"),l.\u0275\u0275elementStart(22,"div",9),l.\u0275\u0275elementStart(23,"button",10),l.\u0275\u0275template(24,C,2,0,"span",6),l.\u0275\u0275template(25,E,1,0,"img",11),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd()),2&e&&(l.\u0275\u0275property("formGroup",t.form),l.\u0275\u0275advance(13),l.\u0275\u0275property("ngIf",!t.form.controls.name.valid&&t.form.controls.name.touched),l.\u0275\u0275advance(6),l.\u0275\u0275property("ngForOf",t.display_order),l.\u0275\u0275advance(1),l.\u0275\u0275property("ngIf",!t.form.controls.display_order.valid&&t.form.controls.display_order.touched),l.\u0275\u0275advance(3),l.\u0275\u0275property("disabled",t.loading),l.\u0275\u0275advance(1),l.\u0275\u0275property("ngIf",!t.loading),l.\u0275\u0275advance(1),l.\u0275\u0275property("ngIf",t.loading))},directives:[a.\u0275NgNoValidate,a.NgControlStatusGroup,a.FormGroupDirective,p.a8,p.dk,m.Wh,p.$j,p.dn,m.xw,m.yH,d.KE,d.hX,c.Nt,a.DefaultValueAccessor,a.NgControlStatus,a.FormControlName,a.RequiredValidator,u.O5,g.gD,u.sg,f.lW,d.TO,h.ey],styles:["mat-form-field[_ngcontent-%COMP%]{width:98%}.upload-container[_ngcontent-%COMP%]{height:120px;padding:20px;text-align:center;border:dashed 1px #979797;position:relative;margin:0 auto}.upload-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0}.upload-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff;width:183px;height:20px;border-radius:21.5px;background-color:#db202f;padding:8px 10px}.upload-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;color:#38424c}.fileover[_ngcontent-%COMP%]{-webkit-animation:shake 1s;animation:shake 1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.files-list[_ngcontent-%COMP%]{margin-top:1.5rem}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]{padding:.5rem;justify-content:space-between;align-items:center;border:dashed 1px #979797;margin-bottom:1rem;display:flex;flex-grow:1}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]{display:flex;margin-left:.5rem;cursor:pointer;align-self:flex-end}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:#353f4a;margin:0}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]{font-size:12px;font-weight:500;color:#a4a4a4;margin:0 0 .25rem}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{width:100%}@-webkit-keyframes shake{0%{transform:translate(1px,1px) rotate(0)}10%{transform:translate(-1px,-2px) rotate(-1deg)}20%{transform:translate(-3px) rotate(1deg)}30%{transform:translate(3px,2px) rotate(0)}40%{transform:translate(1px,-1px) rotate(1deg)}50%{transform:translate(-1px,2px) rotate(-1deg)}60%{transform:translate(-3px,1px) rotate(0)}70%{transform:translate(3px,1px) rotate(-1deg)}80%{transform:translate(-1px,-1px) rotate(1deg)}90%{transform:translate(1px,2px) rotate(0)}to{transform:translate(1px,-2px) rotate(-1deg)}}@keyframes shake{0%{transform:translate(1px,1px) rotate(0)}10%{transform:translate(-1px,-2px) rotate(-1deg)}20%{transform:translate(-3px) rotate(1deg)}30%{transform:translate(3px,2px) rotate(0)}40%{transform:translate(1px,-1px) rotate(1deg)}50%{transform:translate(-1px,2px) rotate(-1deg)}60%{transform:translate(-3px,1px) rotate(0)}70%{transform:translate(3px,1px) rotate(-1deg)}80%{transform:translate(-1px,-1px) rotate(1deg)}90%{transform:translate(1px,2px) rotate(0)}to{transform:translate(1px,-2px) rotate(-1deg)}}"]}),e})()}}]);