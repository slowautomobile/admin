"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[672],{7672:(E,c,a)=>{a.r(c),a.d(c,{BodyareasFormComponent:()=>o});var e=a(3953),t=a(177),m=a(3023),i=a(9417),p=a(1883),u=a(5779),b=a(1584),_=a(9998),g=a(491),f=a(1830),h=a(1141);function v(l,n){1&l&&(e.j41(0,"small",13),e.EFF(1,"Body area name is required"),e.k0s())}let o=(()=>{class l{constructor(){this.messageService=(0,e.WQX)(u.bg),this.formBuilder=(0,e.WQX)(i.ok),this.bodyAreasService=(0,e.WQX)(p.uC),this.location=(0,e.WQX)(t.aZ),this.route=(0,e.WQX)(m.nX),this.isSubmitted=!1,this.editMode=!1,this.language={key:"en",value:"English"}}ngOnInit(){this._initForm(),this._checkEditMode()}_initForm(){this.form=this.formBuilder.group({name:["",i.k0.required],translations:this.formBuilder.group({en:"",de:"",sr:""})})}_checkEditMode(){this.route.params.subscribe(r=>{r.id&&(this.editMode=!0,this.currentBodyAreaId=r.id,this.bodyAreasService.getBodyArea(r.id).subscribe(s=>{console.log(s),this.bodyAreaForm.name.setValue(s.name),this.bodyAreaForm.translations.setValue(s.translations)}))})}onSubmit(){if(this.isSubmitted=!0,this.form.invalid)return;const r={id:this.currentBodyAreaId,name:this.bodyAreaForm.name.value,translations:this.bodyAreaForm.translations.value};this.editMode?this._updateBodyArea(r):this._addBodyArea(r)}_addBodyArea(r){this.bodyAreasService.createBodyArea(r).subscribe(()=>{this.messageService.add({severity:"success",summary:"Success",detail:`Body area "${r.name}" is created!`}),(0,b.O)(2e3).toPromise().then(()=>{this.location.back()})},()=>{this.messageService.add({severity:"error",summary:"error",detail:"Body area is not created!"})})}_updateBodyArea(r){this.bodyAreasService.updateBodyArea(r).subscribe(()=>{this.messageService.add({severity:"success",summary:"Success",detail:`Body area "${r.name}" is updated!`}),(0,b.O)(2e3).toPromise().then(()=>{this.location.back()})},()=>{this.messageService.add({severity:"error",summary:"error",detail:"Body area is not updated!"})})}onCancel(){this.location.back()}get bodyAreaForm(){return this.form.controls}static#e=this.\u0275fac=function(s){return new(s||l)};static#t=this.\u0275cmp=e.VBU({type:l,selectors:[["admin-bodyareas-form"]],standalone:!0,features:[e.Jv_([u.bg]),e.aNF],decls:37,vars:13,consts:[[1,"admin-page"],["subheader","You can add or edit body areas here",3,"header"],[1,"grid","mb-5"],[1,"col-12"],[1,"p-toolbar-group-start"],[1,"p-toolbar-group-end"],["icon","pi pi-plus","styleClass","p-button-primary",1,"mr-2",3,"onClick","label"],["label","Cancel","icon","pi pi-arrow-circle-left","styleClass","p-button-secondary",1,"mr-2",3,"onClick"],[3,"formGroup"],[1,"formgrid","grid"],[1,"field","col"],["for","name",2,"font-weight","600"],["formControlName","name","id","name","type","text",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],[1,"p-error"],[1,"mb-3","mt-5",2,"font-weight","600"],["formGroupName","translations"],[1,"field","grid",2,"gap","0.5rem"],["for","en",1,"col-12","md:col-2","mb-0",2,"width","100px"],[1,"col-12","md:col-10","mb-2","md:mb-0",2,"flex","1 0 90%"],["type","text","formControlName","en","id","en",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["for","de",1,"col-12","md:col-2","mb-0",2,"width","100px"],["type","text","formControlName","de","id","de",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["for","sr",1,"col-12","md:col-2","mb-0",2,"width","100px"],["type","text","formControlName","sr","id","sr",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"]],template:function(s,d){1&s&&(e.nrm(0,"p-toast"),e.j41(1,"div",0)(2,"p-card",1)(3,"div",2)(4,"div",3)(5,"p-toolbar"),e.nrm(6,"div",4),e.j41(7,"div",5)(8,"p-button",6),e.bIt("onClick",function(){return d.onSubmit()}),e.k0s(),e.j41(9,"p-button",7),e.bIt("onClick",function(){return d.onCancel()}),e.k0s()()()()(),e.j41(10,"div")(11,"form",8)(12,"div",9)(13,"div",10)(14,"label",11),e.EFF(15,"Body Area"),e.k0s(),e.nrm(16,"input",12),e.DNE(17,v,2,0,"small",13),e.k0s()(),e.j41(18,"p",14),e.EFF(19,"Translations"),e.k0s(),e.j41(20,"div",15)(21,"div",16)(22,"label",17),e.EFF(23),e.nI1(24,"languageName"),e.k0s(),e.j41(25,"div",18),e.nrm(26,"input",19),e.k0s(),e.j41(27,"label",20),e.EFF(28),e.nI1(29,"languageName"),e.k0s(),e.j41(30,"div",18),e.nrm(31,"input",21),e.k0s(),e.j41(32,"label",22),e.EFF(33),e.nI1(34,"languageName"),e.k0s(),e.j41(35,"div",18),e.nrm(36,"input",23),e.k0s()()()()()()()),2&s&&(e.R7$(2),e.Y8G("header",d.editMode?"Edit Body Area":"Add Body Area"),e.R7$(6),e.Y8G("label",d.editMode?"Update":"Create"),e.R7$(3),e.Y8G("formGroup",d.form),e.R7$(6),e.vxM(d.bodyAreaForm.name.invalid&&d.isSubmitted?17:-1),e.R7$(6),e.JRh(e.bMT(24,7,"en")),e.R7$(5),e.JRh(e.bMT(29,9,"de")),e.R7$(5),e.JRh(e.bMT(34,11,"sr")))},dependencies:[_.MB,_.y8,g.D,g.Z,f.m,f.M,h.$n,i.YN,i.qT,i.me,i.BC,i.cb,i.X1,i.j4,i.JD,i.$R,p.C8],styles:["[_nghost-%COMP%]     .p-toast{margin-top:3rem}@media screen and (max-width: 445px){[_nghost-%COMP%]     .p-toast{margin-left:auto;margin-right:auto;max-width:90%}}"]})}return l})()},1830:(E,c,a)=>{a.d(c,{M:()=>h,m:()=>v});var e=a(177),t=a(3953),m=a(5779);const i=["*"];function p(o,l){1&o&&t.eu8(0)}function u(o,l){if(1&o&&(t.j41(0,"div",4),t.DNE(1,p,1,0,"ng-container",5),t.k0s()),2&o){const n=t.XpG();t.BMQ("data-pc-section","start"),t.R7$(),t.Y8G("ngTemplateOutlet",n.startTemplate)}}function b(o,l){1&o&&t.eu8(0)}function _(o,l){if(1&o&&(t.j41(0,"div",6),t.DNE(1,b,1,0,"ng-container",5),t.k0s()),2&o){const n=t.XpG();t.BMQ("data-pc-section","center"),t.R7$(),t.Y8G("ngTemplateOutlet",n.centerTemplate)}}function g(o,l){1&o&&t.eu8(0)}function f(o,l){if(1&o&&(t.j41(0,"div",7),t.DNE(1,g,1,0,"ng-container",5),t.k0s()),2&o){const n=t.XpG();t.BMQ("data-pc-section","end"),t.R7$(),t.Y8G("ngTemplateOutlet",n.endTemplate)}}let h=(()=>{class o{el;style;styleClass;ariaLabelledBy;templates;startTemplate;endTemplate;centerTemplate;constructor(n){this.el=n}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"start":case"left":this.startTemplate=n.template;break;case"end":case"right":this.endTemplate=n.template;break;case"center":this.centerTemplate=n.template}})}static \u0275fac=function(r){return new(r||o)(t.rXU(t.aKT))};static \u0275cmp=t.VBU({type:o,selectors:[["p-toolbar"]],contentQueries:function(r,s,d){if(1&r&&t.wni(d,m.Ei,4),2&r){let y;t.mGM(y=t.lsd())&&(s.templates=y)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},ngContentSelectors:i,decls:5,vars:9,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-group-left p-toolbar-group-start",4,"ngIf"],["class","p-toolbar-group-center",4,"ngIf"],["class","p-toolbar-group-right p-toolbar-group-end",4,"ngIf"],[1,"p-toolbar-group-left","p-toolbar-group-start"],[4,"ngTemplateOutlet"],[1,"p-toolbar-group-center"],[1,"p-toolbar-group-right","p-toolbar-group-end"]],template:function(r,s){1&r&&(t.NAR(),t.j41(0,"div",0),t.SdG(1),t.DNE(2,u,2,2,"div",1)(3,_,2,2,"div",2)(4,f,2,2,"div",3),t.k0s()),2&r&&(t.HbH(s.styleClass),t.Y8G("ngClass","p-toolbar p-component")("ngStyle",s.style),t.BMQ("aria-labelledby",s.ariaLabelledBy)("data-pc-name","toolbar"),t.R7$(2),t.Y8G("ngIf",s.startTemplate),t.R7$(),t.Y8G("ngIf",s.centerTemplate),t.R7$(),t.Y8G("ngIf",s.endTemplate))},dependencies:[e.YU,e.bT,e.T3,e.B3],styles:["@layer primeng{.p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-start,.p-toolbar-group-center,.p-toolbar-group-end,.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}}\n"],encapsulation:2,changeDetection:0})}return o})(),v=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=t.$C({type:o});static \u0275inj=t.G2t({imports:[e.MD,m.Gg,m.Gg]})}return o})()}}]);