"use strict";(self.webpackChunkprimer=self.webpackChunkprimer||[]).push([[865],{8865:function(e,t,n){n.r(t),n.d(t,{TablesModule:function(){return H}});var o=n(38583),a=n(49983),r=n(38550),s=n(12630),l=n(37716);let c=(()=>{class e{constructor(){this.rows=[],this.fetch(e=>{this.rows=e})}fetch(e){const t=new XMLHttpRequest;t.open("GET","assets/data/100k.json"),t.onload=()=>{e(JSON.parse(t.response))},t.send()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.\u0275\u0275defineComponent({type:e,selectors:[["app-data-table"]],decls:7,vars:11,consts:[[1,"material","fullscreen",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows"],["name","Id",3,"width"],["name","Name",3,"width"],["name","Gender"],["name","Age"],["name","City","prop","address.city",3,"width"],["name","State","prop","address.state",3,"width"]],template:function(e,t){1&e&&(l.\u0275\u0275elementStart(0,"ngx-datatable",0),l.\u0275\u0275element(1,"ngx-datatable-column",1),l.\u0275\u0275element(2,"ngx-datatable-column",2),l.\u0275\u0275element(3,"ngx-datatable-column",3),l.\u0275\u0275element(4,"ngx-datatable-column",4),l.\u0275\u0275element(5,"ngx-datatable-column",5),l.\u0275\u0275element(6,"ngx-datatable-column",6),l.\u0275\u0275elementEnd()),2&e&&(l.\u0275\u0275property("columnMode","force")("headerHeight",50)("footerHeight",0)("rowHeight",50)("scrollbarV",!0)("scrollbarH",!0)("rows",t.rows),l.\u0275\u0275advance(1),l.\u0275\u0275property("width",80),l.\u0275\u0275advance(1),l.\u0275\u0275property("width",300),l.\u0275\u0275advance(3),l.\u0275\u0275property("width",300),l.\u0275\u0275advance(1),l.\u0275\u0275property("width",300))},directives:[r.nE,r.UC],styles:[".datatable[_ngcontent-%COMP%], .datatable[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%]{height:100%}"]}),e})();function i(e,t){if(1&e){const e=l.\u0275\u0275getCurrentView();l.\u0275\u0275elementStart(0,"span",8),l.\u0275\u0275listener("dblclick",function(){l.\u0275\u0275restoreView(e);const t=l.\u0275\u0275nextContext().row;return l.\u0275\u0275nextContext().editing[t.$$index+"-name"]=!0}),l.\u0275\u0275text(1),l.\u0275\u0275elementEnd()}if(2&e){const e=l.\u0275\u0275nextContext().value;l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate1(" ",e," ")}}function d(e,t){if(1&e){const e=l.\u0275\u0275getCurrentView();l.\u0275\u0275elementStart(0,"input",9),l.\u0275\u0275listener("blur",function(t){l.\u0275\u0275restoreView(e);const n=l.\u0275\u0275nextContext(),o=n.value,a=n.row;return l.\u0275\u0275nextContext().updateValue(t,"name",o,a)}),l.\u0275\u0275elementEnd()}if(2&e){const e=l.\u0275\u0275nextContext().value;l.\u0275\u0275property("value",e)}}function p(e,t){if(1&e&&(l.\u0275\u0275template(0,i,2,1,"span",6),l.\u0275\u0275template(1,d,1,1,"input",7)),2&e){const e=t.row,n=l.\u0275\u0275nextContext();l.\u0275\u0275property("ngIf",!n.editing[e.$$index+"-name"]),l.\u0275\u0275advance(1),l.\u0275\u0275property("ngIf",n.editing[e.$$index+"-name"])}}function m(e,t){if(1&e){const e=l.\u0275\u0275getCurrentView();l.\u0275\u0275elementStart(0,"span",8),l.\u0275\u0275listener("dblclick",function(){l.\u0275\u0275restoreView(e);const t=l.\u0275\u0275nextContext().row;return l.\u0275\u0275nextContext().editing[t.$$index+"-gender"]=!0}),l.\u0275\u0275text(1),l.\u0275\u0275elementEnd()}if(2&e){const e=l.\u0275\u0275nextContext().value;l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate1(" ",e," ")}}function u(e,t){if(1&e){const e=l.\u0275\u0275getCurrentView();l.\u0275\u0275elementStart(0,"select",11),l.\u0275\u0275listener("change",function(t){l.\u0275\u0275restoreView(e);const n=l.\u0275\u0275nextContext(),o=n.value,a=n.row;return l.\u0275\u0275nextContext().updateValue(t,"gender",o,a)}),l.\u0275\u0275elementStart(1,"option",12),l.\u0275\u0275text(2,"Male"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(3,"option",13),l.\u0275\u0275text(4,"Female"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd()}if(2&e){const e=l.\u0275\u0275nextContext().value;l.\u0275\u0275property("value",e)}}function h(e,t){if(1&e&&(l.\u0275\u0275template(0,m,2,1,"span",6),l.\u0275\u0275template(1,u,5,1,"select",10)),2&e){const e=t.row,n=l.\u0275\u0275nextContext();l.\u0275\u0275property("ngIf",!n.editing[e.$$index+"-gender"]),l.\u0275\u0275advance(1),l.\u0275\u0275property("ngIf",n.editing[e.$$index+"-gender"])}}function g(e,t){1&e&&l.\u0275\u0275text(0),2&e&&l.\u0275\u0275textInterpolate1(" ",t.value," ")}let f=(()=>{class e{constructor(){this.editing={},this.rows=[],this.fetch(e=>{this.rows=e})}fetch(e){const t=new XMLHttpRequest;t.open("GET","assets/data/company.json"),t.onload=()=>{e(JSON.parse(t.response))},t.send()}updateValue(e,t,n,o){this.editing[o.$$index+"-"+t]=!1,this.rows[o.$$index][t]=e.target.value}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.\u0275\u0275defineComponent({type:e,selectors:[["app-table-editing"]],decls:8,vars:6,consts:[[1,"material",3,"headerHeight","limit","columnMode","footerHeight","rowHeight","rows"],["mydatatable",""],["name","Name"],["ngx-datatable-cell-template",""],["name","Gender"],["name","Age"],["title","Double click to edit",3,"dblclick",4,"ngIf"],["autofocus","","type","text",3,"value","blur",4,"ngIf"],["title","Double click to edit",3,"dblclick"],["autofocus","","type","text",3,"value","blur"],[3,"value","change",4,"ngIf"],[3,"value","change"],["value","male"],["value","female"]],template:function(e,t){1&e&&(l.\u0275\u0275elementStart(0,"ngx-datatable",0,1),l.\u0275\u0275elementStart(2,"ngx-datatable-column",2),l.\u0275\u0275template(3,p,2,2,"ng-template",3),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(4,"ngx-datatable-column",4),l.\u0275\u0275template(5,h,2,2,"ng-template",3),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(6,"ngx-datatable-column",5),l.\u0275\u0275template(7,g,1,1,"ng-template",3),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd()),2&e&&l.\u0275\u0275property("headerHeight",50)("limit",5)("columnMode","force")("footerHeight",50)("rowHeight","auto")("rows",t.rows)},directives:[r.nE,r.UC,r.vq,o.O5],styles:[""]}),e})();var w=n(98295);const x=function(){return{name:"Name"}},b=function(){return{name:"Gender"}},y=function(){return{name:"Company"}},C=function(e,t,n){return[e,t,n]},v=[{path:"",children:[{path:"fullscreen",component:c},{path:"editing",component:f},{path:"filter",component:(()=>{class e{constructor(){this.rows=[],this.temp=[],this.columns=[{prop:"name"},{name:"Company"},{name:"Gender"}],this.fetch(e=>{this.temp=[...e],this.rows=e})}fetch(e){const t=new XMLHttpRequest;t.open("GET","assets/data/company.json"),t.onload=()=>{e(JSON.parse(t.response))},t.send()}updateFilter(e){const t=e.target.value.toLowerCase(),n=this.temp.filter(e=>-1!==e.name.toLowerCase().indexOf(t)||!t);this.rows=n}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.\u0275\u0275defineComponent({type:e,selectors:[["app-table-filter"]],decls:3,vars:7,consts:[[1,"mb-1",2,"width","100%"],["matInput","","placeholder","Type to filter the name column...","required","",3,"keyup"],[1,"material",3,"columns","columnMode","headerHeight","footerHeight","rowHeight","limit","rows"]],template:function(e,t){1&e&&(l.\u0275\u0275elementStart(0,"mat-form-field",0),l.\u0275\u0275elementStart(1,"input",1),l.\u0275\u0275listener("keyup",function(e){return t.updateFilter(e)}),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275element(2,"ngx-datatable",2)),2&e&&(l.\u0275\u0275advance(2),l.\u0275\u0275property("columns",t.columns)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("limit",10)("rows",t.rows))},directives:[w.KE,a.Nt,r.nE],styles:[""]}),e})()},{path:"paging",component:(()=>{class e{constructor(){this.rows=[],this.fetch(e=>{this.rows=e})}fetch(e){const t=new XMLHttpRequest;t.open("GET","assets/data/company.json"),t.onload=()=>{e(JSON.parse(t.response))},t.send()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.\u0275\u0275defineComponent({type:e,selectors:[["app-table-paging"]],decls:1,vars:14,consts:[[1,"material",3,"rows","columns","columnMode","headerHeight","footerHeight","rowHeight","limit"]],template:function(e,t){1&e&&l.\u0275\u0275element(0,"ngx-datatable",0),2&e&&l.\u0275\u0275property("rows",t.rows)("columns",l.\u0275\u0275pureFunction3(10,C,l.\u0275\u0275pureFunction0(7,x),l.\u0275\u0275pureFunction0(8,b),l.\u0275\u0275pureFunction0(9,y)))("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("limit",10)},directives:[r.nE],styles:[""]}),e})()},{path:"pinning",component:(()=>{class e{constructor(){this.rows=[],this.fetch(e=>{this.rows=e})}fetch(e){const t=new XMLHttpRequest;t.open("GET","assets/data/100k.json"),t.onload=()=>{e(JSON.parse(t.response))},t.send()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.\u0275\u0275defineComponent({type:e,selectors:[["app-table-pinning"]],decls:6,vars:12,consts:[[1,"material",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows"],["name","Name",3,"width","frozenLeft"],["name","Gender"],["name","Age"],["name","City","prop","address.city",3,"width"],["name","State","prop","address.state",3,"width","frozenRight"]],template:function(e,t){1&e&&(l.\u0275\u0275elementStart(0,"ngx-datatable",0),l.\u0275\u0275element(1,"ngx-datatable-column",1),l.\u0275\u0275element(2,"ngx-datatable-column",2),l.\u0275\u0275element(3,"ngx-datatable-column",3),l.\u0275\u0275element(4,"ngx-datatable-column",4),l.\u0275\u0275element(5,"ngx-datatable-column",5),l.\u0275\u0275elementEnd()),2&e&&(l.\u0275\u0275property("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight",50)("scrollbarV",!0)("scrollbarH",!0)("rows",t.rows),l.\u0275\u0275advance(1),l.\u0275\u0275property("width",300)("frozenLeft",!0),l.\u0275\u0275advance(3),l.\u0275\u0275property("width",150),l.\u0275\u0275advance(1),l.\u0275\u0275property("width",300)("frozenRight",!0))},directives:[r.nE,r.UC],styles:[".datatable[_ngcontent-%COMP%], .datatable[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%]{height:100%}"]}),e})()},{path:"selection",component:(()=>{class e{constructor(){this.rows=[],this.selected=[],this.columns=[{prop:"name"},{name:"Company"},{name:"Gender"}],this.fetch(e=>{this.rows=e})}fetch(e){const t=new XMLHttpRequest;t.open("GET","assets/data/company.json"),t.onload=()=>{e(JSON.parse(t.response))},t.send()}onSelect(e){console.log("Event: select",e,this.selected)}onActivate(e){console.log("Event: activate",e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.\u0275\u0275defineComponent({type:e,selectors:[["app-table-selection"]],decls:1,vars:8,consts:[[1,"material","selection-cell",3,"rows","columnMode","columns","headerHeight","footerHeight","rowHeight","selected","selectionType","select","activate"]],template:function(e,t){1&e&&(l.\u0275\u0275elementStart(0,"ngx-datatable",0),l.\u0275\u0275listener("select",function(e){return t.onSelect(e)})("activate",function(e){return t.onActivate(e)}),l.\u0275\u0275elementEnd()),2&e&&l.\u0275\u0275property("rows",t.rows)("columnMode","force")("columns",t.columns)("headerHeight",50)("footerHeight",50)("rowHeight",50)("selected",t.selected)("selectionType","cell")},directives:[r.nE],styles:[""]}),e})()},{path:"sorting",component:(()=>{class e{constructor(){this.rows=[],this.columns=[{name:"Company"},{name:"Name"},{name:"Gender"}],this.fetch(e=>{this.rows=e})}fetch(e){const t=new XMLHttpRequest;t.open("GET","assets/data/company.json"),t.onload=()=>{const n=JSON.parse(t.response);e(n)},t.send()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.\u0275\u0275defineComponent({type:e,selectors:[["app-table-sorting"]],decls:1,vars:7,consts:[[1,"material",3,"rows","columns","sortType","columnMode","headerHeight","footerHeight","rowHeight"]],template:function(e,t){1&e&&l.\u0275\u0275element(0,"ngx-datatable",0),2&e&&l.\u0275\u0275property("rows",t.rows)("columns",t.columns)("sortType","multi")("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight",50)},directives:[r.nE],styles:[".datatable[_ngcontent-%COMP%], .datatable[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%]{height:100%}"]}),e})()}]}];let H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=l.\u0275\u0275defineInjector({imports:[[o.ez,s.Bz.forChild(v),a.c,r.xD]]}),e})()}}]);