"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[212],{6212:(G,f,n)=>{n.r(f),n.d(f,{MusclesFormComponent:()=>U});var e=n(4438),F=n(9192),u=n(177),b=n(7591),m=n(5779),T=n(8359),r=n(1584),l=n(9417),h=n(9998),a=n(491),c=n(1830),v=n(1141),C=n(2242),k=n(5473),S=n(1455);const O=[[["p-header"]]],R=["p-header"];function Q(o,g){1&o&&e.eu8(0)}function q(o,g){if(1&o&&(e.j41(0,"div",3),e.SdG(1),e.DNE(2,Q,1,0,"ng-container",4),e.k0s()),2&o){const t=e.XpG();e.R7$(2),e.Y8G("ngTemplateOutlet",t.headerTemplate)}}function A(o,g){1&o&&(e.j41(0,"div",3)(1,"span",5)(2,"select",6)(3,"option",7),e.EFF(4,"Heading"),e.k0s(),e.j41(5,"option",8),e.EFF(6,"Subheading"),e.k0s(),e.j41(7,"option",9),e.EFF(8,"Normal"),e.k0s()(),e.j41(9,"select",10)(10,"option",9),e.EFF(11,"Sans Serif"),e.k0s(),e.j41(12,"option",11),e.EFF(13,"Serif"),e.k0s(),e.j41(14,"option",12),e.EFF(15,"Monospace"),e.k0s()()(),e.j41(16,"span",5),e.nrm(17,"button",13)(18,"button",14)(19,"button",15),e.k0s(),e.j41(20,"span",5),e.nrm(21,"select",16)(22,"select",17),e.k0s(),e.j41(23,"span",5),e.nrm(24,"button",18)(25,"button",19),e.j41(26,"select",20),e.nrm(27,"option",9),e.j41(28,"option",21),e.EFF(29,"center"),e.k0s(),e.j41(30,"option",22),e.EFF(31,"right"),e.k0s(),e.j41(32,"option",23),e.EFF(33,"justify"),e.k0s()()(),e.j41(34,"span",5),e.nrm(35,"button",24)(36,"button",25)(37,"button",26),e.k0s(),e.j41(38,"span",5),e.nrm(39,"button",27),e.k0s()())}const $={provide:l.kq,useExisting:(0,e.Rfq)(()=>j),multi:!0};let j=(()=>{class o{el;platformId;style;styleClass;placeholder;formats;modules;bounds;scrollingContainer;debug;get readonly(){return this._readonly}set readonly(t){this._readonly=t,this.quill&&(this._readonly?this.quill.disable():this.quill.enable())}onInit=new e.bkB;onTextChange=new e.bkB;onSelectionChange=new e.bkB;templates;toolbar;value;delayedCommand=null;_readonly=!1;onModelChange=()=>{};onModelTouched=()=>{};quill;dynamicQuill;headerTemplate;get isAttachedQuillEditorToDOM(){return this.quillElements?.editorElement?.isConnected}quillElements;constructor(t,i){this.el=t,this.platformId=i,(0,e.mal)(()=>{this.initQuillElements(),this.initQuillEditor()})}ngAfterContentInit(){this.templates.forEach(t=>{"header"===t.getType()&&(this.headerTemplate=t.template)})}writeValue(t){if(this.value=t,this.quill)if(t){const i=()=>{this.quill.setContents(this.quill.clipboard.convert(this.dynamicQuill.version.startsWith("2")?{html:this.value}:this.value))};this.isAttachedQuillEditorToDOM?i():this.delayedCommand=i}else{const i=()=>{this.quill.setText("")};this.isAttachedQuillEditorToDOM?i():this.delayedCommand=i}}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}getQuill(){return this.quill}initQuillEditor(){(0,u.Vy)(this.platformId)||(this.dynamicQuill?this.createQuillEditor():n.e(206).then(n.bind(n,1206)).then(t=>{this.dynamicQuill=t.default,this.createQuillEditor()}).catch(t=>console.error(t.message)))}createQuillEditor(){this.initQuillElements();const{toolbarElement:t,editorElement:i}=this.quillElements;let s={toolbar:t},d=this.modules?{...s,...this.modules}:s;this.quill=new this.dynamicQuill(i,{modules:d,placeholder:this.placeholder,readOnly:this.readonly,theme:"snow",formats:this.formats,bounds:this.bounds,debug:this.debug,scrollingContainer:this.scrollingContainer});const p=this.dynamicQuill.version.startsWith("2");this.value&&this.quill.setContents(this.quill.clipboard.convert(p?{html:this.value}:this.value)),this.quill.on("text-change",(I,D,y)=>{if("user"===y){let E=p?this.quill.getSemanticHTML():S.D.findSingle(i,".ql-editor").innerHTML,x=this.quill.getText().trim();"<p><br></p>"===E&&(E=null),this.onTextChange.emit({htmlValue:E,textValue:x,delta:I,source:y}),this.onModelChange(E),this.onModelTouched()}}),this.quill.on("selection-change",(I,D,y)=>{this.onSelectionChange.emit({range:I,oldRange:D,source:y})}),this.onInit.emit({editor:this.quill})}initQuillElements(){this.quillElements||(this.quillElements={editorElement:S.D.findSingle(this.el.nativeElement,"div.p-editor-content"),toolbarElement:S.D.findSingle(this.el.nativeElement,"div.p-editor-toolbar")})}static \u0275fac=function(i){return new(i||o)(e.rXU(e.aKT),e.rXU(e.Agw))};static \u0275cmp=e.VBU({type:o,selectors:[["p-editor"]],contentQueries:function(i,s,d){if(1&i&&(e.wni(d,m.Y9,5),e.wni(d,m.Ei,4)),2&i){let p;e.mGM(p=e.lsd())&&(s.toolbar=p.first),e.mGM(p=e.lsd())&&(s.templates=p)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",placeholder:"placeholder",formats:"formats",modules:"modules",bounds:"bounds",scrollingContainer:"scrollingContainer",debug:"debug",readonly:"readonly"},outputs:{onInit:"onInit",onTextChange:"onTextChange",onSelectionChange:"onSelectionChange"},features:[e.Jv_([$])],ngContentSelectors:R,decls:4,vars:6,consts:[[3,"ngClass"],["class","p-editor-toolbar",4,"ngIf"],[1,"p-editor-content",3,"ngStyle"],[1,"p-editor-toolbar"],[4,"ngTemplateOutlet"],[1,"ql-formats"],[1,"ql-header"],["value","1"],["value","2"],["selected",""],[1,"ql-font"],["value","serif"],["value","monospace"],["aria-label","Bold","type","button",1,"ql-bold"],["aria-label","Italic","type","button",1,"ql-italic"],["aria-label","Underline","type","button",1,"ql-underline"],[1,"ql-color"],[1,"ql-background"],["value","ordered","aria-label","Ordered List","type","button",1,"ql-list"],["value","bullet","aria-label","Unordered List","type","button",1,"ql-list"],[1,"ql-align"],["value","center"],["value","right"],["value","justify"],["aria-label","Insert Link","type","button",1,"ql-link"],["aria-label","Insert Image","type","button",1,"ql-image"],["aria-label","Insert Code Block","type","button",1,"ql-code-block"],["aria-label","Remove Styles","type","button",1,"ql-clean"]],template:function(i,s){1&i&&(e.NAR(O),e.j41(0,"div",0),e.DNE(1,q,3,1,"div",1)(2,A,40,0,"div",1),e.nrm(3,"div",2),e.k0s()),2&i&&(e.HbH(s.styleClass),e.Y8G("ngClass","p-editor-container"),e.R7$(),e.Y8G("ngIf",s.toolbar||s.headerTemplate),e.R7$(),e.Y8G("ngIf",!s.modules&&!s.toolbar&&!s.headerTemplate),e.R7$(),e.Y8G("ngStyle",s.style))},dependencies:[u.YU,u.bT,u.T3,u.B3],styles:[".p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item{width:auto;height:auto}\n"],encapsulation:2,changeDetection:0})}return o})(),Y=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=e.$C({type:o});static \u0275inj=e.G2t({imports:[u.MD,m.Gg]})}return o})();const M=()=>({height:"320px"});function B(o,g){1&o&&(e.j41(0,"small",12),e.EFF(1,"Muscle name is required"),e.k0s())}function N(o,g){if(1&o&&(e.j41(0,"div")(1,"p-panel",15),e.nI1(2,"languageName"),e.j41(3,"div",16)(4,"p-panel",17),e.nrm(5,"p-editor",18),e.k0s()(),e.j41(6,"div",19)(7,"p-panel",17),e.nrm(8,"p-editor",18),e.k0s()(),e.j41(9,"div",20)(10,"p-panel",17),e.nrm(11,"p-editor",18),e.k0s()(),e.j41(12,"div",21)(13,"p-panel",17),e.nrm(14,"p-editor",18),e.k0s()()()()),2&o){const t=g.$implicit;e.R7$(),e.Y8G("header",e.bMT(2,32,t))("toggleable",!0)("collapsed",!0)("toggler","header"),e.R7$(3),e.Y8G("header","de"===t?"Ursprung":"Origin")("toggleable",!0)("collapsed",!0)("toggler","header"),e.R7$(),e.Aen(e.lJ4(34,M)),e.Y8G("formControlName",t),e.R7$(2),e.Y8G("header","de"===t?"Ansatz":"Insertion")("toggleable",!0)("collapsed",!0)("toggler","header"),e.R7$(),e.Aen(e.lJ4(35,M)),e.Y8G("formControlName",t),e.R7$(2),e.Y8G("header","de"===t?"Funktion":"Function")("toggleable",!0)("collapsed",!0)("toggler","header"),e.R7$(),e.Aen(e.lJ4(36,M)),e.Y8G("formControlName",t),e.R7$(2),e.Y8G("header","Innervation")("toggleable",!0)("collapsed",!0)("toggler","header"),e.R7$(),e.Aen(e.lJ4(37,M)),e.Y8G("formControlName",t)}}let U=(()=>{class o{constructor(){this.messageService=(0,e.WQX)(m.bg),this.musclesService=(0,e.WQX)(b.WZ),this.location=(0,e.WQX)(u.aZ),this.route=(0,e.WQX)(F.nX),this.formBuilder=(0,e.WQX)(l.ok),this.subscriptions=new T.yU,this.editMode=!1,this.isSubmitted=!1,this.muscle={name:""},this.languages=["en","de","sr"],this.muscleAttributes=["insertion","origin","function","innervation"]}ngOnInit(){this._initForm(),this._checkEditMode()}_initForm(){const t={};this.muscleAttributes.forEach(i=>{t[i]=new l.gE({}),this.languages.forEach(s=>{t[i].addControl(s,new l.MJ(""))})}),this.form=this.formBuilder.group({name:["",l.k0.required],attributes:this.formBuilder.group(t)})}_checkEditMode(){const t=this.route.params.subscribe(i=>{if(i.id){this.editMode=!0,this.currentMuscleId=i.id;const s=this.musclesService.getMuscle(i.id).subscribe(d=>{console.log(d),this.muscleForm.name.setValue(d.name),this.muscleForm.attributes.patchValue(d.attributes)});this.subscriptions.add(s)}});this.subscriptions.add(t)}get muscleForm(){return this.form.controls}_addMuscle(t){const i=this.musclesService.createMuscle(t).subscribe(()=>{this.messageService.add({severity:"success",summary:"Success",detail:`Muscle ${t.name} is created!`}),(0,r.O)(2e3).toPromise().then(()=>{this.location.back()})},()=>{this.messageService.add({severity:"error",summary:"error",detail:"Muscle is not created!"})});this.subscriptions.add(i)}_updateMuscle(t){const i=this.musclesService.updateMuscle(t).subscribe(()=>{this.messageService.add({severity:"success",summary:"Success",detail:`Muscle ${t.name} is updated!`}),(0,r.O)(2e3).toPromise().then(()=>{this.location.back()})},()=>{this.messageService.add({severity:"error",summary:"error",detail:"Muscle is not updated!"})});this.subscriptions.add(i)}onSubmit(){if(this.isSubmitted=!0,this.form.invalid)return;console.log(this.muscleForm.attributes.value);const t={id:this.currentMuscleId,name:this.muscleForm.name.value,attributes:this.muscleForm.attributes.value};this.editMode?this._updateMuscle(t):this._addMuscle(t)}onCancel(){this.location.back()}ngOnDestroy(){this.subscriptions.unsubscribe()}static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=e.VBU({type:o,selectors:[["admin-muscles-form"]],standalone:!0,features:[e.Jv_([m.bg]),e.aNF],decls:22,vars:4,consts:[[1,"admin-page"],["subheader","You can add or edit muscles here",3,"header"],[1,"grid","mb-5"],[1,"col-12"],[1,"p-toolbar-group-start"],[1,"p-toolbar-group-end"],["icon","pi pi-plus","styleClass","p-button-primary",1,"mr-2",3,"onClick","label"],["label","Cancel","icon","pi pi-arrow-circle-left","styleClass","p-button-secondary",1,"mr-2",3,"onClick"],[3,"formGroup"],[1,"field"],["for","name",2,"font-weight","600"],["id","name","type","text","pInputText","","formControlName","name",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],[1,"p-error"],[1,"attributes-wrapper"],["formGroupName","attributes"],[3,"header","toggleable","collapsed","toggler"],["formGroupName","origin"],[1,"attribute-wrapper",3,"header","toggleable","collapsed","toggler"],[3,"formControlName"],["formGroupName","insertion"],["formGroupName","function"],["formGroupName","innervation"]],template:function(i,s){1&i&&(e.nrm(0,"p-toast"),e.j41(1,"div",0)(2,"p-card",1)(3,"div",2)(4,"div",3)(5,"p-toolbar"),e.nrm(6,"div",4),e.j41(7,"div",5)(8,"p-button",6),e.bIt("onClick",function(){return s.onSubmit()}),e.k0s(),e.j41(9,"p-button",7),e.bIt("onClick",function(){return s.onCancel()}),e.k0s()()()()(),e.j41(10,"form",8)(11,"div",9)(12,"label",10),e.EFF(13,"Muscle"),e.k0s(),e.nrm(14,"input",11),e.DNE(15,B,2,0,"small",12),e.k0s(),e.j41(16,"div",13)(17,"h4"),e.EFF(18,"Attributes"),e.k0s(),e.j41(19,"div",14),e.Z7z(20,N,15,38,"div",null,e.fX1),e.k0s()()()()()),2&i&&(e.R7$(2),e.Y8G("header",s.editMode?"Edit Muscle":"Add Muscle"),e.R7$(6),e.Y8G("label",s.editMode?"Update":"Create"),e.R7$(2),e.Y8G("formGroup",s.form),e.R7$(5),e.vxM(s.muscleForm.name.invalid&&s.isSubmitted?15:-1),e.R7$(5),e.Dyx(s.languages))},dependencies:[h.MB,h.y8,a.D,a.Z,c.m,c.M,v.$n,l.YN,l.qT,l.me,l.BC,l.cb,l.X1,l.j4,l.JD,l.$R,C.u,C.S,k.b,k.Z,Y,j,b.C8],styles:["[_nghost-%COMP%]     .p-toast{margin-top:3rem}[_nghost-%COMP%]     .attribute-wrapper .p-panel .p-panel-content{padding:0;border:none}@media screen and (max-width: 445px){[_nghost-%COMP%]     .p-toast{margin-left:auto;margin-right:auto;max-width:90%}}.attributes-wrapper[_ngcontent-%COMP%]{margin-top:32px}.attributes-wrapper[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:16px}"]})}}return o})()},2242:(G,f,n)=>{n.d(f,{S:()=>m,u:()=>T});var e=n(4438),F=n(177),u=n(9417),b=n(5779);let m=(()=>{class r{el;ngModel;cd;config;variant="outlined";filled;constructor(h,a,c,v){this.el=h,this.ngModel=a,this.cd=c,this.config=v}ngAfterViewInit(){this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(a){return new(a||r)(e.rXU(e.aKT),e.rXU(u.vS,8),e.rXU(e.gRc),e.rXU(b.r1))};static \u0275dir=e.FsC({type:r,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(a,c){1&a&&e.bIt("input",function(C){return c.onInput(C)}),2&a&&e.AVh("p-filled",c.filled)("p-variant-filled","filled"===c.variant||"filled"===c.config.inputStyle())},inputs:{variant:"variant"}})}return r})(),T=(()=>{class r{static \u0275fac=function(a){return new(a||r)};static \u0275mod=e.$C({type:r});static \u0275inj=e.G2t({imports:[F.MD]})}return r})()}}]);