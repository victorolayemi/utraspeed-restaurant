!function(){"use strict";function e(e,n){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){a&&(e=a);var r=0,l=function(){};return{s:l,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(s)throw o}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(self.webpackChunkprimer=self.webpackChunkprimer||[]).push([[661],{78661:function(t,a,r){r.d(a,{D:function(){return I}});var l=r(3679),o=r(92340),i=r(91841),s=r(38550),m=r(37716),p=r(12630),d=r(93738),u=r(35618),f=r(98295),c=r(49983),g=r(38583),h=r(67441),v=r(72458),x=r(51095),y=r(76627),E=r(12178);function S(e,t){if(1&e&&(m.\u0275\u0275elementStart(0,"mat-error"),m.\u0275\u0275text(1),m.\u0275\u0275elementEnd()),2&e){var n=m.\u0275\u0275nextContext();m.\u0275\u0275advance(1),m.\u0275\u0275textInterpolate1(" ",n.getNameError()," ")}}function C(e,t){if(1&e&&(m.\u0275\u0275elementStart(0,"mat-error"),m.\u0275\u0275text(1),m.\u0275\u0275elementEnd()),2&e){var n=m.\u0275\u0275nextContext();m.\u0275\u0275advance(1),m.\u0275\u0275textInterpolate1(" ",n.getDisplayError()," ")}}function b(e,t){1&e&&m.\u0275\u0275element(0,"mat-progress-bar",49)}function w(e,t){if(1&e&&(m.\u0275\u0275elementStart(0,"h4",47),m.\u0275\u0275text(1),m.\u0275\u0275template(2,b,1,0,"mat-progress-bar",48),m.\u0275\u0275elementEnd()),2&e){var n=m.\u0275\u0275nextContext().$implicit,a=m.\u0275\u0275nextContext();m.\u0275\u0275advance(1),m.\u0275\u0275textInterpolate1(" ",null==n?null:n.name," "),m.\u0275\u0275advance(1),m.\u0275\u0275property("ngIf",a.uploading)}}function M(e,t){if(1&e&&(m.\u0275\u0275elementStart(0,"h4",50),m.\u0275\u0275text(1),m.\u0275\u0275elementStart(2,"mat-icon"),m.\u0275\u0275text(3,"task_alt"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd()),2&e){var n=m.\u0275\u0275nextContext().$implicit;m.\u0275\u0275advance(1),m.\u0275\u0275textInterpolate1(" ",null==n?null:n.name," ")}}function k(e,t){if(1&e){var n=m.\u0275\u0275getCurrentView();m.\u0275\u0275elementStart(0,"div",29),m.\u0275\u0275elementStart(1,"div",30),m.\u0275\u0275namespaceSVG(),m.\u0275\u0275elementStart(2,"svg",31),m.\u0275\u0275element(3,"polygon",32),m.\u0275\u0275elementStart(4,"g"),m.\u0275\u0275element(5,"path",33),m.\u0275\u0275element(6,"path",34),m.\u0275\u0275element(7,"path",35),m.\u0275\u0275element(8,"path",36),m.\u0275\u0275element(9,"path",37),m.\u0275\u0275elementEnd(),m.\u0275\u0275element(10,"polygon",38),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275namespaceHTML(),m.\u0275\u0275elementStart(11,"div",39),m.\u0275\u0275template(12,w,3,2,"h4",40),m.\u0275\u0275template(13,M,4,1,"h4",41),m.\u0275\u0275elementStart(14,"p",42),m.\u0275\u0275text(15),m.\u0275\u0275elementEnd(),m.\u0275\u0275element(16,"app-progress",43),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(17,"div",44),m.\u0275\u0275elementStart(18,"a",45),m.\u0275\u0275listener("click",function(){return m.\u0275\u0275restoreView(n),m.\u0275\u0275nextContext().upload()}),m.\u0275\u0275elementStart(19,"mat-icon",46),m.\u0275\u0275text(20,"cloud_upload"),m.\u0275\u0275elementEnd(),m.\u0275\u0275text(21," Upload"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd()}if(2&e){var a=t.$implicit,r=m.\u0275\u0275nextContext();m.\u0275\u0275advance(12),m.\u0275\u0275property("ngIf",!r.uploaded),m.\u0275\u0275advance(1),m.\u0275\u0275property("ngIf",r.uploaded),m.\u0275\u0275advance(2),m.\u0275\u0275textInterpolate1(" ",r.formatBytes(null==a?null:a.size)," "),m.\u0275\u0275advance(1),m.\u0275\u0275property("progress",null==a?null:a.progress)}}function O(e,t){1&e&&(m.\u0275\u0275elementStart(0,"span"),m.\u0275\u0275text(1,"Add Cuisine"),m.\u0275\u0275elementEnd())}function _(e,t){1&e&&m.\u0275\u0275element(0,"img",51)}var F,I=((F=function(){function t(e,n,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.fb=e,this.http=n,this.router=a,this.loading=!1,this.ColumnMode=s.hq,this.uploading=!1,this.uploaded=!1,this.display_order=[{value:1},{value:2},{value:3},{value:4},{value:5},{value:6},{value:7},{value:8},{value:9},{value:10},{value:11},{value:12},{value:13},{value:14},{value:15},{value:16},{value:17},{value:18},{value:19},{value:20},{value:21},{value:22},{value:23},{value:24},{value:25},{value:26},{value:27},{value:28},{value:29},{value:30},{value:31},{value:32},{value:33},{value:34},{value:35},{value:36},{value:37},{value:38},{value:39},{value:40}]}var a,r,m;return a=t,(r=[{key:"ngOnInit",value:function(){this.form=this.fb.group({name:[null,l.Validators.compose([l.Validators.required,l.Validators.minLength(2)])],display_order:[null,l.Validators.required],display_images:[null]}),this.uploadForm=this.fb.group({profile:[""]})}},{key:"getNameError",value:function(){return this.form.get("name").hasError("required")?"Name of the category is required)":this.form.get("name").hasError("minLength")?"Category name must be at least 2 characters long":""}},{key:"getDisplayError",value:function(){return this.form.get("name").hasError("required")?"Display order is required":""}},{key:"onSubmit",value:function(e){var t=this,n=localStorage.getItem("token"),a=new i.WM({Authorization:"Bearer "+n,Accept:"application/json","Content-Type":"application/json"});if(this.form.valid){this.loading=!0;var r=JSON.stringify(this.form.value);this.http.post("".concat(o.N.apiUrl,"stores/menu-category"),r,{headers:a}).subscribe(function(e){console.log(e),t.loading=!1,t.router.navigate(["/food-category"])},function(e){console.log(e),t.error=e,t.loading=!1})}}},{key:"onFileDropped",value:function(e){this.prepareFilesList(e)}},{key:"fileBrowseHandler",value:function(e){this.prepareFilesList(e)}},{key:"deleteFile",value:function(e){this.files.splice(e,1),this.uploaded=!1}},{key:"uploadFilesSimulator",value:function(e){var t=this;setTimeout(function(){if(e!==t.files.length)var n=setInterval(function(){100===t.files[e].progress?(clearInterval(n),t.uploadFilesSimulator(e+1)):t.files[e].progress+=1},200)},1e3)}},{key:"prepareFilesList",value:function(t){var n,a=e(t);try{for(a.s();!(n=a.n()).done;){var r=n.value;r.progress=0,this.files=new Array,this.files.push(r)}}catch(l){a.e(l)}finally{a.f()}this.uploadForm.get("profile").setValue(this.files[0]),this.uploadFilesSimulator(0),console.log(this.files[0])}},{key:"upload",value:function(){var e=this;this.uploading=!0;var t=new FormData;t.append("photo",this.uploadForm.get("profile").value),this.http.post("".concat(o.N.apiUrl,"upload-image"),t,{}).subscribe(function(t){e.form.get("display_images").setValue(t.photo),console.log(t),e.uploaded=!0,e.uploading=!1},function(t){console.log(t),e.uploading=!1})}},{key:"formatBytes",value:function(e,t){if(0===e)return"0 Bytes";var n=t<=0?0:t||2,a=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,a)).toFixed(n))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][a]}}])&&n(a.prototype,r),m&&n(a,m),t}()).\u0275fac=function(e){return new(e||F)(m.\u0275\u0275directiveInject(l.FormBuilder),m.\u0275\u0275directiveInject(i.eN),m.\u0275\u0275directiveInject(p.F0))},F.\u0275cmp=m.\u0275\u0275defineComponent({type:F,selectors:[["app-add-food-category"]],decls:56,vars:7,consts:[[1,"form",3,"formGroup","ngSubmit"],["fxLayoutAlign","left"],["fxLayout","row wrap",1,"col-gap"],["fxFlex.xs","100","fxFlex.sm","100","fxFlex.md","50","fxFlex.lg","50","fxFlex.xl","50",1,"column"],["appearance","outline"],["matInput","","placeholder","Name","formControlName","name"],[4,"ngIf"],["placeholder","Display Order","formControlName","display_order","required",""],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["fxFlex.xs","100","fxFlex.sm","100","fxFlex.md","100","fxFlex.lg","100","fxFlex.xl","100",1,"column"],["appDnd","",1,"upload-container",3,"fileDropped"],["type","file","id","fileDropRef","accept","image/*",3,"change"],["fileDropRef",""],["xmlns","http://www.w3.org/2000/svg","width","30","height","30","viewBox","0 0 63 64"],["fill","#3B454F","fill-rule","nonzero"],["d","M42.656 15.135a1.953 1.953 0 0 1-1.391-.578L31.5 4.795l-9.765 9.762a1.97 1.97 0 1 1-2.785-2.785L30.106.616a1.97 1.97 0 0 1 2.785 0l11.157 11.156a1.97 1.97 0 0 1-1.392 3.363z"],["d","M31.5 36.791a1.97 1.97 0 0 1-1.969-1.969V2.01a1.97 1.97 0 0 1 3.938 0v32.812a1.97 1.97 0 0 1-1.969 1.969z"],["d","M55.781 63.041H7.22A7.225 7.225 0 0 1 0 55.822V41.385a4.599 4.599 0 0 1 4.594-4.594h7.234a4.567 4.567 0 0 1 4.402 3.276l2.814 9.382a.658.658 0 0 0 .628.467h23.656a.658.658 0 0 0 .628-.467l2.814-9.385a4.572 4.572 0 0 1 4.402-3.273h7.234A4.599 4.599 0 0 1 63 41.385v14.437a7.225 7.225 0 0 1-7.219 7.219zM4.594 40.729a.656.656 0 0 0-.657.656v14.437a3.286 3.286 0 0 0 3.282 3.282H55.78a3.286 3.286 0 0 0 3.282-3.282V41.385a.656.656 0 0 0-.657-.656h-7.234a.65.65 0 0 0-.628.467L47.73 50.58a4.628 4.628 0 0 1-4.402 3.274H19.672a4.567 4.567 0 0 1-4.402-3.276l-2.814-9.382a.65.65 0 0 0-.628-.467H4.594z"],["for","fileDropRef"],[1,"files-list"],["class","single-file",4,"ngFor","ngForOf"],[1,"col-sm-12","col-sm-offset-5"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["src","assets/images/loading.png","width","30","height","30",4,"ngIf"],[1,"single-file"],[1,"file-icon",2,"width","50px"],["version","1.1","id","Capa_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 58 58",0,"xml","space","preserve",2,"enable-background","new 0 0 58 58"],["points","51.5,14 37.5,0 6.5,0 6.5,58 51.5,58 ",2,"fill","#EDEADA"],["d","M16.5,23h25c0.552,0,1-0.447,1-1s-0.448-1-1-1h-25c-0.552,0-1,0.447-1,1S15.948,23,16.5,23z",2,"fill","#CEC9AE"],["d","M16.5,15h10c0.552,0,1-0.447,1-1s-0.448-1-1-1h-10c-0.552,0-1,0.447-1,1S15.948,15,16.5,15z",2,"fill","#CEC9AE"],["d","M41.5,29h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S42.052,29,41.5,29z",2,"fill","#CEC9AE"],["d","M41.5,37h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S42.052,37,41.5,37z",2,"fill","#CEC9AE"],["d","M41.5,45h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S42.052,45,41.5,45z",2,"fill","#CEC9AE"],["points","37.5,0 37.5,14 51.5,14 ",2,"fill","#CEC9AE"],[1,"info"],["class","name",4,"ngIf"],["class","name","style","color: green",4,"ngIf"],[1,"size"],[3,"progress"],[1,"delete"],["mat-raised-button","",2,"background-color","green","color","#fff",3,"click"],["aria-label","upload"],[1,"name"],["style","width: 120px;","mode","indeterminate",4,"ngIf"],["mode","indeterminate",2,"width","120px"],[1,"name",2,"color","green"],["src","assets/images/loading.png","width","30","height","30"]],template:function(e,t){1&e&&(m.\u0275\u0275elementStart(0,"form",0),m.\u0275\u0275listener("ngSubmit",function(){return t.onSubmit(t.form.value)}),m.\u0275\u0275elementStart(1,"mat-card"),m.\u0275\u0275elementStart(2,"mat-card-header",1),m.\u0275\u0275elementStart(3,"mat-card-subtitle"),m.\u0275\u0275elementStart(4,"h2"),m.\u0275\u0275text(5,"Cuisine"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(6,"mat-card-content"),m.\u0275\u0275elementStart(7,"div",2),m.\u0275\u0275elementStart(8,"div",3),m.\u0275\u0275elementStart(9,"mat-form-field",4),m.\u0275\u0275elementStart(10,"mat-label"),m.\u0275\u0275text(11,"Cuisine Name"),m.\u0275\u0275elementEnd(),m.\u0275\u0275element(12,"input",5),m.\u0275\u0275template(13,S,2,1,"mat-error",6),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(14,"div",3),m.\u0275\u0275elementStart(15,"mat-form-field",4),m.\u0275\u0275elementStart(16,"mat-label"),m.\u0275\u0275text(17,"Display Order"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(18,"mat-select",7),m.\u0275\u0275elementStart(19,"mat-option",8),m.\u0275\u0275text(20,"1"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(21,"mat-option",9),m.\u0275\u0275text(22,"2"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(23,"mat-option",10),m.\u0275\u0275text(24,"3"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(25,"mat-option",11),m.\u0275\u0275text(26,"4"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(27,"mat-option",12),m.\u0275\u0275text(28,"5"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(29,"mat-option",13),m.\u0275\u0275text(30,"6"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275template(31,C,2,1,"mat-error",6),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275element(32,"br"),m.\u0275\u0275element(33,"br"),m.\u0275\u0275elementStart(34,"mat-label"),m.\u0275\u0275text(35,"Cuisine Image"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(36,"div",14),m.\u0275\u0275elementStart(37,"div",15),m.\u0275\u0275listener("fileDropped",function(e){return t.onFileDropped(e)}),m.\u0275\u0275elementStart(38,"input",16,17),m.\u0275\u0275listener("change",function(e){return t.fileBrowseHandler(e.target.files)}),m.\u0275\u0275elementEnd(),m.\u0275\u0275namespaceSVG(),m.\u0275\u0275elementStart(40,"svg",18),m.\u0275\u0275elementStart(41,"g",19),m.\u0275\u0275element(42,"path",20),m.\u0275\u0275element(43,"path",21),m.\u0275\u0275element(44,"path",22),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275namespaceHTML(),m.\u0275\u0275elementStart(45,"h4"),m.\u0275\u0275text(46,"Drag and drop file here"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(47,"label",23),m.\u0275\u0275text(48,"Browse for file"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(49,"div",24),m.\u0275\u0275template(50,k,22,4,"div",25),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275element(51,"br"),m.\u0275\u0275elementStart(52,"div",26),m.\u0275\u0275elementStart(53,"button",27),m.\u0275\u0275template(54,O,2,0,"span",6),m.\u0275\u0275template(55,_,1,0,"img",28),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd()),2&e&&(m.\u0275\u0275property("formGroup",t.form),m.\u0275\u0275advance(13),m.\u0275\u0275property("ngIf",!t.form.controls.name.valid&&t.form.controls.name.touched),m.\u0275\u0275advance(18),m.\u0275\u0275property("ngIf",!t.form.controls.display_order.valid&&t.form.controls.display_order.touched),m.\u0275\u0275advance(19),m.\u0275\u0275property("ngForOf",t.files),m.\u0275\u0275advance(3),m.\u0275\u0275property("disabled",t.loading),m.\u0275\u0275advance(1),m.\u0275\u0275property("ngIf",!t.loading),m.\u0275\u0275advance(1),m.\u0275\u0275property("ngIf",t.loading))},directives:[l.\u0275NgNoValidate,l.NgControlStatusGroup,l.FormGroupDirective,d.a8,d.dk,u.Wh,d.$j,d.dn,u.xw,u.yH,f.KE,f.hX,c.Nt,l.DefaultValueAccessor,l.NgControlStatus,l.FormControlName,g.O5,h.gD,l.RequiredValidator,v.ey,g.sg,x.lW,f.TO,x.zs,y.Hw,E.pW],styles:["mat-form-field[_ngcontent-%COMP%]{width:98%}.upload-container[_ngcontent-%COMP%]{height:120px;padding:20px;text-align:center;border:dashed 1px #979797;position:relative;margin:0 auto}.upload-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0}.upload-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff;width:183px;height:20px;border-radius:21.5px;background-color:#db202f;padding:8px 10px}.upload-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;color:#38424c}.fileover[_ngcontent-%COMP%]{-webkit-animation:shake 1s;animation:shake 1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.files-list[_ngcontent-%COMP%]{margin-top:1.5rem}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]{padding:.5rem;justify-content:space-between;align-items:center;border:dashed 1px #979797;margin-bottom:1rem;display:flex;flex-grow:1}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]{display:flex;margin-left:.5rem;cursor:pointer;align-self:flex-end}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:#353f4a;margin:0}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]{font-size:12px;font-weight:500;color:#a4a4a4;margin:0 0 .25rem}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{width:100%}@-webkit-keyframes shake{0%{transform:translate(1px,1px) rotate(0)}10%{transform:translate(-1px,-2px) rotate(-1deg)}20%{transform:translate(-3px) rotate(1deg)}30%{transform:translate(3px,2px) rotate(0)}40%{transform:translate(1px,-1px) rotate(1deg)}50%{transform:translate(-1px,2px) rotate(-1deg)}60%{transform:translate(-3px,1px) rotate(0)}70%{transform:translate(3px,1px) rotate(-1deg)}80%{transform:translate(-1px,-1px) rotate(1deg)}90%{transform:translate(1px,2px) rotate(0)}to{transform:translate(1px,-2px) rotate(-1deg)}}@keyframes shake{0%{transform:translate(1px,1px) rotate(0)}10%{transform:translate(-1px,-2px) rotate(-1deg)}20%{transform:translate(-3px) rotate(1deg)}30%{transform:translate(3px,2px) rotate(0)}40%{transform:translate(1px,-1px) rotate(1deg)}50%{transform:translate(-1px,2px) rotate(-1deg)}60%{transform:translate(-3px,1px) rotate(0)}70%{transform:translate(3px,1px) rotate(-1deg)}80%{transform:translate(-1px,-1px) rotate(1deg)}90%{transform:translate(1px,2px) rotate(0)}to{transform:translate(1px,-2px) rotate(-1deg)}}"]}),F)}}])}();