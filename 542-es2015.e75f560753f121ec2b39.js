"use strict";(self.webpackChunkprimer=self.webpackChunkprimer||[]).push([[542],{42542:function(t,e,o){o.d(e,{Yi:function(){return v},A9:function(){return m},vV:function(){return f}});var n=o(39490),a=o(38345),i=o(37716),l=o(3679),s=o(72458),r=o(19238);const c=["button"],u=["*"],g=new i.InjectionToken("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"),d=new i.InjectionToken("MatButtonToggleGroup"),h={provide:l.NG_VALUE_ACCESSOR,useExisting:(0,i.forwardRef)(()=>m),multi:!0};let b=0;class p{constructor(t,e){this.source=t,this.value=e}}let m=(()=>{class t{constructor(t,e){this._changeDetector=t,this._vertical=!1,this._multiple=!1,this._disabled=!1,this._controlValueAccessorChangeFn=()=>{},this._onTouched=()=>{},this._name="mat-button-toggle-group-"+b++,this.valueChange=new i.EventEmitter,this.change=new i.EventEmitter,this.appearance=e&&e.appearance?e.appearance:"standard"}get name(){return this._name}set name(t){this._name=t,this._buttonToggles&&this._buttonToggles.forEach(t=>{t.name=this._name,t._markForCheck()})}get vertical(){return this._vertical}set vertical(t){this._vertical=(0,n.Ig)(t)}get value(){const t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(t=>t.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}get selected(){const t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=(0,n.Ig)(t)}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,n.Ig)(t),this._buttonToggles&&this._buttonToggles.forEach(t=>t._markForCheck())}ngOnInit(){this._selectionModel=new a.Ov(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked))}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_emitChangeEvent(){const t=this.selected,e=Array.isArray(t)?t[t.length-1]:t,o=new p(e,this.value);this._controlValueAccessorChangeFn(o.value),this.change.emit(o)}_syncButtonToggle(t,e,o=!1,n=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?e?this._selectionModel.select(t):this._selectionModel.deselect(t):n=!0,n?Promise.resolve().then(()=>this._updateModelValue(o)):this._updateModelValue(o)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return void 0!==this._rawValue&&(this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(e=>null!=t.value&&e===t.value):t.value===this._rawValue)}_setSelectionByValue(t){this._rawValue=t,this._buttonToggles&&(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(t=>this._selectValue(t))):(this._clearSelection(),this._selectValue(t)))}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>t.checked=!1)}_selectValue(t){const e=this._buttonToggles.find(e=>null!=e.value&&e.value===t);e&&(e.checked=!0,this._selectionModel.select(e))}_updateModelValue(t){t&&this._emitChangeEvent(),this.valueChange.emit(this.value)}}return t.\u0275fac=function(e){return new(e||t)(i.\u0275\u0275directiveInject(i.ChangeDetectorRef),i.\u0275\u0275directiveInject(g,8))},t.\u0275dir=i.\u0275\u0275defineDirective({type:t,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,e,o){if(1&t&&i.\u0275\u0275contentQuery(o,v,5),2&t){let t;i.\u0275\u0275queryRefresh(t=i.\u0275\u0275loadQuery())&&(e._buttonToggles=t)}},hostAttrs:["role","group",1,"mat-button-toggle-group"],hostVars:5,hostBindings:function(t,e){2&t&&(i.\u0275\u0275attribute("aria-disabled",e.disabled),i.\u0275\u0275classProp("mat-button-toggle-vertical",e.vertical)("mat-button-toggle-group-appearance-standard","standard"===e.appearance))},inputs:{appearance:"appearance",name:"name",vertical:"vertical",value:"value",multiple:"multiple",disabled:"disabled"},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[i.\u0275\u0275ProvidersFeature([h,{provide:d,useExisting:t}])]}),t})();const _=(0,s.Kr)(class{});let v=(()=>{class t extends _{constructor(t,e,o,n,a,l){super(),this._changeDetectorRef=e,this._elementRef=o,this._focusMonitor=n,this._isSingleSelector=!1,this._checked=!1,this.ariaLabelledby=null,this._disabled=!1,this.change=new i.EventEmitter;const s=Number(a);this.tabIndex=s||0===s?s:null,this.buttonToggleGroup=t,this.appearance=l&&l.appearance?l.appearance:"standard"}get buttonId(){return`${this.id}-button`}get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){const e=(0,n.Ig)(t);e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=(0,n.Ig)(t)}ngOnInit(){const t=this.buttonToggleGroup;this._isSingleSelector=t&&!t.multiple,this.id=this.id||"mat-button-toggle-"+b++,this._isSingleSelector&&(this.name=t.name),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){const t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){const t=!!this._isSingleSelector||!this._checked;t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.change.emit(new p(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(i.\u0275\u0275directiveInject(d,8),i.\u0275\u0275directiveInject(i.ChangeDetectorRef),i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(r.tE),i.\u0275\u0275injectAttribute("tabindex"),i.\u0275\u0275directiveInject(g,8))},t.\u0275cmp=i.\u0275\u0275defineComponent({type:t,selectors:[["mat-button-toggle"]],viewQuery:function(t,e){if(1&t&&i.\u0275\u0275viewQuery(c,5),2&t){let t;i.\u0275\u0275queryRefresh(t=i.\u0275\u0275loadQuery())&&(e._buttonElement=t.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:12,hostBindings:function(t,e){1&t&&i.\u0275\u0275listener("focus",function(){return e.focus()}),2&t&&(i.\u0275\u0275attribute("aria-label",null)("aria-labelledby",null)("id",e.id)("name",null),i.\u0275\u0275classProp("mat-button-toggle-standalone",!e.buttonToggleGroup)("mat-button-toggle-checked",e.checked)("mat-button-toggle-disabled",e.disabled)("mat-button-toggle-appearance-standard","standard"===e.appearance))},inputs:{disableRipple:"disableRipple",ariaLabelledby:["aria-labelledby","ariaLabelledby"],tabIndex:"tabIndex",appearance:"appearance",checked:"checked",disabled:"disabled",id:"id",name:"name",ariaLabel:["aria-label","ariaLabel"],value:"value"},outputs:{change:"change"},exportAs:["matButtonToggle"],features:[i.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:u,decls:6,vars:9,consts:[["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"id","disabled","click"],["button",""],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,e){if(1&t&&(i.\u0275\u0275projectionDef(),i.\u0275\u0275elementStart(0,"button",0,1),i.\u0275\u0275listener("click",function(){return e._onButtonClick()}),i.\u0275\u0275elementStart(2,"span",2),i.\u0275\u0275projection(3),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275element(4,"span",3),i.\u0275\u0275element(5,"span",4)),2&t){const t=i.\u0275\u0275reference(1);i.\u0275\u0275property("id",e.buttonId)("disabled",e.disabled||null),i.\u0275\u0275attribute("tabindex",e.disabled?-1:e.tabIndex)("aria-pressed",e.checked)("name",e.name||null)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledby),i.\u0275\u0275advance(5),i.\u0275\u0275property("matRippleTrigger",t)("matRippleDisabled",e.disableRipple||e.disabled)}},directives:[s.wG],styles:[".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"],encapsulation:2,changeDetection:0}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=i.\u0275\u0275defineInjector({imports:[[s.BQ,s.si],s.BQ]}),t})()}}]);