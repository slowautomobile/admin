"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[212],{6212:(D,f,l)=>{l.r(f),l.d(f,{MusclesFormComponent:()=>N});var e=l(3953),F=l(3023),a=l(177),b=l(1883),u=l(5779),v=l(1584),o=l(9417),I=l(9998),c=l(491),r=l(1830),d=l(1141),p=l(2242),C=l(5473),T=l(1455);const G=[[["p-header"]]],R=["p-header"];function O(i,g){1&i&&e.eu8(0)}function q(i,g){if(1&i&&(e.j41(0,"div",3),e.SdG(1),e.DNE(2,O,1,0,"ng-container",4),e.k0s()),2&i){const t=e.XpG();e.R7$(2),e.Y8G("ngTemplateOutlet",t.headerTemplate)}}function Q(i,g){1&i&&(e.j41(0,"div",3)(1,"span",5)(2,"select",6)(3,"option",7),e.EFF(4,"Heading"),e.k0s(),e.j41(5,"option",8),e.EFF(6,"Subheading"),e.k0s(),e.j41(7,"option",9),e.EFF(8,"Normal"),e.k0s()(),e.j41(9,"select",10)(10,"option",9),e.EFF(11,"Sans Serif"),e.k0s(),e.j41(12,"option",11),e.EFF(13,"Serif"),e.k0s(),e.j41(14,"option",12),e.EFF(15,"Monospace"),e.k0s()()(),e.j41(16,"span",5),e.nrm(17,"button",13)(18,"button",14)(19,"button",15),e.k0s(),e.j41(20,"span",5),e.nrm(21,"select",16)(22,"select",17),e.k0s(),e.j41(23,"span",5),e.nrm(24,"button",18)(25,"button",19),e.j41(26,"select",20),e.nrm(27,"option",9),e.j41(28,"option",21),e.EFF(29,"center"),e.k0s(),e.j41(30,"option",22),e.EFF(31,"right"),e.k0s(),e.j41(32,"option",23),e.EFF(33,"justify"),e.k0s()()(),e.j41(34,"span",5),e.nrm(35,"button",24)(36,"button",25)(37,"button",26),e.k0s(),e.j41(38,"span",5),e.nrm(39,"button",27),e.k0s()())}const A={provide:o.kq,useExisting:(0,e.Rfq)(()=>k),multi:!0};let k=(()=>{class i{el;platformId;style;styleClass;placeholder;formats;modules;bounds;scrollingContainer;debug;get readonly(){return this._readonly}set readonly(t){this._readonly=t,this.quill&&(this._readonly?this.quill.disable():this.quill.enable())}onInit=new e.bkB;onTextChange=new e.bkB;onSelectionChange=new e.bkB;templates;toolbar;value;delayedCommand=null;_readonly=!1;onModelChange=()=>{};onModelTouched=()=>{};quill;dynamicQuill;headerTemplate;get isAttachedQuillEditorToDOM(){return this.quillElements?.editorElement?.isConnected}quillElements;constructor(t,n){this.el=t,this.platformId=n,(0,e.mal)(()=>{this.initQuillElements(),this.initQuillEditor()})}ngAfterContentInit(){this.templates.forEach(t=>{"header"===t.getType()&&(this.headerTemplate=t.template)})}writeValue(t){if(this.value=t,this.quill)if(t){const n=()=>{this.quill.setContents(this.quill.clipboard.convert(this.dynamicQuill.version.startsWith("2")?{html:this.value}:this.value))};this.isAttachedQuillEditorToDOM?n():this.delayedCommand=n}else{const n=()=>{this.quill.setText("")};this.isAttachedQuillEditorToDOM?n():this.delayedCommand=n}}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}getQuill(){return this.quill}initQuillEditor(){(0,a.Vy)(this.platformId)||(this.dynamicQuill?this.createQuillEditor():l.e(55).then(l.t.bind(l,7436,19)).then(t=>{this.dynamicQuill=t.default,this.createQuillEditor()}).catch(t=>console.error(t.message)))}createQuillEditor(){this.initQuillElements();const{toolbarElement:t,editorElement:n}=this.quillElements;let s={toolbar:t},h=this.modules?{...s,...this.modules}:s;this.quill=new this.dynamicQuill(n,{modules:h,placeholder:this.placeholder,readOnly:this.readonly,theme:"snow",formats:this.formats,bounds:this.bounds,debug:this.debug,scrollingContainer:this.scrollingContainer});const m=this.dynamicQuill.version.startsWith("2");this.value&&this.quill.setContents(this.quill.clipboard.convert(m?{html:this.value}:this.value)),this.quill.on("text-change",(S,j,y)=>{if("user"===y){let E=m?this.quill.getSemanticHTML():T.D.findSingle(n,".ql-editor").innerHTML,U=this.quill.getText().trim();"<p><br></p>"===E&&(E=null),this.onTextChange.emit({htmlValue:E,textValue:U,delta:S,source:y}),this.onModelChange(E),this.onModelTouched()}}),this.quill.on("selection-change",(S,j,y)=>{this.onSelectionChange.emit({range:S,oldRange:j,source:y})}),this.onInit.emit({editor:this.quill})}initQuillElements(){this.quillElements||(this.quillElements={editorElement:T.D.findSingle(this.el.nativeElement,"div.p-editor-content"),toolbarElement:T.D.findSingle(this.el.nativeElement,"div.p-editor-toolbar")})}static \u0275fac=function(n){return new(n||i)(e.rXU(e.aKT),e.rXU(e.Agw))};static \u0275cmp=e.VBU({type:i,selectors:[["p-editor"]],contentQueries:function(n,s,h){if(1&n&&(e.wni(h,u.Y9,5),e.wni(h,u.Ei,4)),2&n){let m;e.mGM(m=e.lsd())&&(s.toolbar=m.first),e.mGM(m=e.lsd())&&(s.templates=m)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",placeholder:"placeholder",formats:"formats",modules:"modules",bounds:"bounds",scrollingContainer:"scrollingContainer",debug:"debug",readonly:"readonly"},outputs:{onInit:"onInit",onTextChange:"onTextChange",onSelectionChange:"onSelectionChange"},features:[e.Jv_([A])],ngContentSelectors:R,decls:4,vars:6,consts:[[3,"ngClass"],["class","p-editor-toolbar",4,"ngIf"],[1,"p-editor-content",3,"ngStyle"],[1,"p-editor-toolbar"],[4,"ngTemplateOutlet"],[1,"ql-formats"],[1,"ql-header"],["value","1"],["value","2"],["selected",""],[1,"ql-font"],["value","serif"],["value","monospace"],["aria-label","Bold","type","button",1,"ql-bold"],["aria-label","Italic","type","button",1,"ql-italic"],["aria-label","Underline","type","button",1,"ql-underline"],[1,"ql-color"],[1,"ql-background"],["value","ordered","aria-label","Ordered List","type","button",1,"ql-list"],["value","bullet","aria-label","Unordered List","type","button",1,"ql-list"],[1,"ql-align"],["value","center"],["value","right"],["value","justify"],["aria-label","Insert Link","type","button",1,"ql-link"],["aria-label","Insert Image","type","button",1,"ql-image"],["aria-label","Insert Code Block","type","button",1,"ql-code-block"],["aria-label","Remove Styles","type","button",1,"ql-clean"]],template:function(n,s){1&n&&(e.NAR(G),e.j41(0,"div",0),e.DNE(1,q,3,1,"div",1)(2,Q,40,0,"div",1),e.nrm(3,"div",2),e.k0s()),2&n&&(e.HbH(s.styleClass),e.Y8G("ngClass","p-editor-container"),e.R7$(),e.Y8G("ngIf",s.toolbar||s.headerTemplate),e.R7$(),e.Y8G("ngIf",!s.toolbar&&!s.headerTemplate),e.R7$(),e.Y8G("ngStyle",s.style))},dependencies:[a.YU,a.bT,a.T3,a.B3],styles:[".p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item{width:auto;height:auto}\n"],encapsulation:2,changeDetection:0})}return i})(),$=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=e.$C({type:i});static \u0275inj=e.G2t({imports:[a.MD,u.Gg]})}return i})();const M=()=>({height:"320px"});function Y(i,g){1&i&&(e.j41(0,"small",12),e.EFF(1,"Muscle name is required"),e.k0s())}function B(i,g){if(1&i&&(e.j41(0,"div")(1,"p-panel",15),e.nI1(2,"languageName"),e.j41(3,"div",16)(4,"p-panel",17),e.nrm(5,"p-editor",18),e.k0s()(),e.j41(6,"div",19)(7,"p-panel",17),e.nrm(8,"p-editor",18),e.k0s()(),e.j41(9,"div",20)(10,"p-panel",17),e.nrm(11,"p-editor",18),e.k0s()(),e.j41(12,"div",21)(13,"p-panel",17),e.nrm(14,"p-editor",18),e.k0s()()()()),2&i){const t=g.$implicit;e.R7$(),e.Y8G("header",e.bMT(2,32,t))("toggleable",!0)("collapsed",!0)("toggler","header"),e.R7$(3),e.Y8G("header","de"===t?"Ursprung":"Origin")("toggleable",!0)("collapsed",!0)("toggler","header"),e.R7$(),e.Aen(e.lJ4(34,M)),e.Y8G("formControlName",t),e.R7$(2),e.Y8G("header","de"===t?"Ansatz":"Insertion")("toggleable",!0)("collapsed",!0)("toggler","header"),e.R7$(),e.Aen(e.lJ4(35,M)),e.Y8G("formControlName",t),e.R7$(2),e.Y8G("header","de"===t?"Funktion":"Function")("toggleable",!0)("collapsed",!0)("toggler","header"),e.R7$(),e.Aen(e.lJ4(36,M)),e.Y8G("formControlName",t),e.R7$(2),e.Y8G("header","Innervation")("toggleable",!0)("collapsed",!0)("toggler","header"),e.R7$(),e.Aen(e.lJ4(37,M)),e.Y8G("formControlName",t)}}let N=(()=>{class i{constructor(){this.messageService=(0,e.WQX)(u.bg),this.musclesService=(0,e.WQX)(b.WZ),this.location=(0,e.WQX)(a.aZ),this.route=(0,e.WQX)(F.nX),this.formBuilder=(0,e.WQX)(o.ok),this.editMode=!1,this.isSubmitted=!1,this.muscle={name:""},this.languages=["en","de","sr"],this.muscleAttributes=["insertion","origin","function","innervation"]}ngOnInit(){this._initForm(),this._checkEditMode()}_initForm(){const t={};this.muscleAttributes.forEach(n=>{t[n]=new o.gE({}),this.languages.forEach(s=>{t[n].addControl(s,new o.MJ(""))})}),this.form=this.formBuilder.group({name:["",o.k0.required],attributes:this.formBuilder.group(t)})}_checkEditMode(){this.route.params.subscribe(t=>{t.id&&(this.editMode=!0,this.currentMuscleId=t.id,this.musclesService.getMuscle(t.id).subscribe(n=>{console.log(n),this.muscleForm.name.setValue(n.name),this.muscleForm.attributes.patchValue(n.attributes)}))})}get muscleForm(){return this.form.controls}_addMuscle(t){this.musclesService.createMuscle(t).subscribe(()=>{this.messageService.add({severity:"success",summary:"Success",detail:`Muscle ${t.name} is created!`}),(0,v.O)(2e3).toPromise().then(()=>{this.location.back()})},()=>{this.messageService.add({severity:"error",summary:"error",detail:"Muscle is not created!"})})}_updateMuscle(t){this.musclesService.updateMuscle(t).subscribe(()=>{this.messageService.add({severity:"success",summary:"Success",detail:`Muscle ${t.name} is updated!`}),(0,v.O)(2e3).toPromise().then(()=>{this.location.back()})},()=>{this.messageService.add({severity:"error",summary:"error",detail:"Muscle is not updated!"})})}onSubmit(){if(this.isSubmitted=!0,this.form.invalid)return;console.log(this.muscleForm.attributes.value);const t={id:this.currentMuscleId,name:this.muscleForm.name.value,attributes:this.muscleForm.attributes.value};this.editMode?this._updateMuscle(t):this._addMuscle(t)}onCancel(){this.location.back()}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["admin-muscles-form"]],standalone:!0,features:[e.Jv_([u.bg]),e.aNF],decls:22,vars:4,consts:[[1,"admin-page"],["subheader","You can add or edit muscles here",3,"header"],[1,"grid","mb-5"],[1,"col-12"],[1,"p-toolbar-group-start"],[1,"p-toolbar-group-end"],["icon","pi pi-plus","styleClass","p-button-primary",1,"mr-2",3,"onClick","label"],["label","Cancel","icon","pi pi-arrow-circle-left","styleClass","p-button-secondary",1,"mr-2",3,"onClick"],[3,"formGroup"],[1,"field"],["for","name",2,"font-weight","600"],["id","name","type","text","pInputText","","formControlName","name",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],[1,"p-error"],[1,"attributes-wrapper"],["formGroupName","attributes"],[3,"header","toggleable","collapsed","toggler"],["formGroupName","origin"],[1,"attribute-wrapper",3,"header","toggleable","collapsed","toggler"],[3,"formControlName"],["formGroupName","insertion"],["formGroupName","function"],["formGroupName","innervation"]],template:function(n,s){1&n&&(e.nrm(0,"p-toast"),e.j41(1,"div",0)(2,"p-card",1)(3,"div",2)(4,"div",3)(5,"p-toolbar"),e.nrm(6,"div",4),e.j41(7,"div",5)(8,"p-button",6),e.bIt("onClick",function(){return s.onSubmit()}),e.k0s(),e.j41(9,"p-button",7),e.bIt("onClick",function(){return s.onCancel()}),e.k0s()()()()(),e.j41(10,"form",8)(11,"div",9)(12,"label",10),e.EFF(13,"Muscle"),e.k0s(),e.nrm(14,"input",11),e.DNE(15,Y,2,0,"small",12),e.k0s(),e.j41(16,"div",13)(17,"h4"),e.EFF(18,"Attributes"),e.k0s(),e.j41(19,"div",14),e.Z7z(20,B,15,38,"div",null,e.fX1),e.k0s()()()()()),2&n&&(e.R7$(2),e.Y8G("header",s.editMode?"Edit Muscle":"Add Muscle"),e.R7$(6),e.Y8G("label",s.editMode?"Update":"Create"),e.R7$(2),e.Y8G("formGroup",s.form),e.R7$(5),e.vxM(s.muscleForm.name.invalid&&s.isSubmitted?15:-1),e.R7$(5),e.Dyx(s.languages))},dependencies:[I.MB,I.y8,c.D,c.Z,r.m,r.M,d.$n,o.YN,o.qT,o.me,o.BC,o.cb,o.X1,o.j4,o.JD,o.$R,p.u,p.S,C.b,C.Z,$,k,b.C8],styles:["[_nghost-%COMP%]     .p-toast{margin-top:3rem}[_nghost-%COMP%]     .attribute-wrapper .p-panel .p-panel-content{padding:0;border:none}@media screen and (max-width: 445px){[_nghost-%COMP%]     .p-toast{margin-left:auto;margin-right:auto;max-width:90%}}.attributes-wrapper[_ngcontent-%COMP%]{margin-top:32px}.attributes-wrapper[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:16px}"]})}return i})()},2242:(D,f,l)=>{l.d(f,{S:()=>u,u:()=>v});var e=l(3953),F=l(177),a=l(9417),b=l(5779);let u=(()=>{class o{el;ngModel;cd;config;variant="outlined";filled;constructor(c,r,d,p){this.el=c,this.ngModel=r,this.cd=d,this.config=p}ngAfterViewInit(){this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(r){return new(r||o)(e.rXU(e.aKT),e.rXU(a.vS,8),e.rXU(e.gRc),e.rXU(b.r1))};static \u0275dir=e.FsC({type:o,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(r,d){1&r&&e.bIt("input",function(C){return d.onInput(C)}),2&r&&e.AVh("p-filled",d.filled)("p-variant-filled","filled"===d.variant||"filled"===d.config.inputStyle())},inputs:{variant:"variant"}})}return o})(),v=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=e.$C({type:o});static \u0275inj=e.G2t({imports:[F.MD]})}return o})()}}]);