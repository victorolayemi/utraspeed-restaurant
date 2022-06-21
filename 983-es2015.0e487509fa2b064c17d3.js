"use strict";(self.webpackChunkprimer=self.webpackChunkprimer||[]).push([[983],{49983:function(e,t,i){i.d(t,{Nt:function(){return g},c:function(){return y}});var n=i(80521),s=i(37716),r=i(39490),o=i(59193),a=i(79765);i(22759),i(80013),i(46782),i(38583);const l=(0,n.i$)({passive:!0});let d=(()=>{class e{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return o.E;const t=(0,r.fI)(e),i=this._monitoredElements.get(t);if(i)return i.subject;const n=new a.xQ,s="cdk-text-field-autofilled",d=e=>{"cdk-text-field-autofill-start"!==e.animationName||t.classList.contains(s)?"cdk-text-field-autofill-end"===e.animationName&&t.classList.contains(s)&&(t.classList.remove(s),this._ngZone.run(()=>n.next({target:e.target,isAutofilled:!1}))):(t.classList.add(s),this._ngZone.run(()=>n.next({target:e.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",d,l),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:n,unlisten:()=>{t.removeEventListener("animationstart",d,l)}}),n}stopMonitoring(e){const t=(0,r.fI)(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}}return e.\u0275fac=function(t){return new(t||e)(s.\u0275\u0275inject(n.t4),s.\u0275\u0275inject(s.NgZone))},e.\u0275prov=s.\u0275\u0275defineInjectable({factory:function(){return new e(s.\u0275\u0275inject(n.t4),s.\u0275\u0275inject(s.NgZone))},token:e,providedIn:"root"}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=s.\u0275\u0275defineInjector({imports:[[n.ud]]}),e})();var c=i(72458),h=i(98295),m=i(3679);const f=new s.InjectionToken("MAT_INPUT_VALUE_ACCESSOR"),p=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let _=0;const v=(0,c.FD)(class{constructor(e,t,i,n){this._defaultErrorStateMatcher=e,this._parentForm=t,this._parentFormGroup=i,this.ngControl=n}});let g=(()=>{class e extends v{constructor(e,t,i,s,r,o,l,d,u,c){super(o,s,r,i),this._elementRef=e,this._platform=t,this._autofillMonitor=d,this._formField=c,this._uid="mat-input-"+_++,this.focused=!1,this.stateChanges=new a.xQ,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._required=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>(0,n.qK)().has(e));const h=this._elementRef.nativeElement,m=h.nodeName.toLowerCase();this._inputValueAccessor=l||h,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&u.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",e=>{const t=e.target;!t.value&&0===t.selectionStart&&0===t.selectionEnd&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))})}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===m,this._isTextarea="textarea"===m,this._isInFormField=!!c,this._isNativeSelect&&(this.controlType=h.multiple?"mat-native-select-multiple":"mat-native-select")}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=(0,r.Ig)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required}set required(e){this._required=(0,r.Ig)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&(0,n.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,r.Ig)(e)}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckPlaceholder(){var e,t;const i=(null===(t=null===(e=this._formField)||void 0===e?void 0:e._hideControlPlaceholder)||void 0===t?void 0:t.call(e))?null:this.placeholder;if(i!==this._previousPlaceholder){const e=this._elementRef.nativeElement;this._previousPlaceholder=i,i?e.setAttribute("placeholder",i):e.removeAttribute("placeholder")}}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_validateType(){p.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}}return e.\u0275fac=function(t){return new(t||e)(s.\u0275\u0275directiveInject(s.ElementRef),s.\u0275\u0275directiveInject(n.t4),s.\u0275\u0275directiveInject(m.NgControl,10),s.\u0275\u0275directiveInject(m.NgForm,8),s.\u0275\u0275directiveInject(m.FormGroupDirective,8),s.\u0275\u0275directiveInject(c.rD),s.\u0275\u0275directiveInject(f,10),s.\u0275\u0275directiveInject(d),s.\u0275\u0275directiveInject(s.NgZone),s.\u0275\u0275directiveInject(h.G_,8))},e.\u0275dir=s.\u0275\u0275defineDirective({type:e,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:9,hostBindings:function(e,t){1&e&&s.\u0275\u0275listener("focus",function(){return t._focusChanged(!0)})("blur",function(){return t._focusChanged(!1)})("input",function(){return t._onInput()}),2&e&&(s.\u0275\u0275hostProperty("disabled",t.disabled)("required",t.required),s.\u0275\u0275attribute("id",t.id)("data-placeholder",t.placeholder)("readonly",t.readonly&&!t._isNativeSelect||null)("aria-invalid",t.empty&&t.required?null:t.errorState)("aria-required",t.required),s.\u0275\u0275classProp("mat-input-server",t._isServer))},inputs:{id:"id",disabled:"disabled",required:"required",type:"type",value:"value",readonly:"readonly",placeholder:"placeholder",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"]},exportAs:["matInput"],features:[s.\u0275\u0275ProvidersFeature([{provide:h.Eo,useExisting:e}]),s.\u0275\u0275InheritDefinitionFeature,s.\u0275\u0275NgOnChangesFeature]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=s.\u0275\u0275defineInjector({providers:[c.rD],imports:[[u,h.lN,c.BQ],u,h.lN]}),e})()}}]);