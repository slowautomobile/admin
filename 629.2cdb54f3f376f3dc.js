"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[629],{4629:(D,m,a)=>{a.r(m),a.d(m,{UsersListComponent:()=>R});var d=a(3023),v=a(6100),o=a(5779),g=a(9998),u=a(491),y=a(1141),p=a(6057),c=a(177),t=a(3953);const C=["*"];function _(e,r){if(1&e&&t.nrm(0,"span",5),2&e){const n=t.XpG(2);t.Y8G("ngClass",n.icon)}}function T(e,r){if(1&e&&(t.qex(0),t.DNE(1,_,1,1,"span",4),t.bVm()),2&e){const n=t.XpG();t.R7$(),t.Y8G("ngIf",n.icon)}}function b(e,r){}function U(e,r){1&e&&t.DNE(0,b,0,0,"ng-template")}function G(e,r){if(1&e&&(t.j41(0,"span",6),t.DNE(1,U,1,0,null,7),t.k0s()),2&e){const n=t.XpG();t.R7$(),t.Y8G("ngTemplateOutlet",n.iconTemplate)}}let j=(()=>{class e{cd;get style(){return this._style}set style(n){this._style=n,this.cd.markForCheck()}styleClass;severity;value;icon;rounded;templates;iconTemplate;_style;ngAfterContentInit(){this.templates?.forEach(n=>{"icon"===n.getType()&&(this.iconTemplate=n.template)})}constructor(n){this.cd=n}containerClass(){return{"p-tag p-component":!0,[`p-tag-${this.severity}`]:this.severity,"p-tag-rounded":this.rounded}}static \u0275fac=function(s){return new(s||e)(t.rXU(t.gRc))};static \u0275cmp=t.VBU({type:e,selectors:[["p-tag"]],contentQueries:function(s,i,l){if(1&s&&t.wni(l,o.Ei,4),2&s){let h;t.mGM(h=t.lsd())&&(i.templates=h)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",t.L39]},features:[t.GFd],ngContentSelectors:C,decls:6,vars:7,consts:[[3,"ngClass","ngStyle"],[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-value"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(s,i){1&s&&(t.NAR(),t.j41(0,"span",0),t.SdG(1),t.DNE(2,T,2,1,"ng-container",1)(3,G,2,1,"span",2),t.j41(4,"span",3),t.EFF(5),t.k0s()()),2&s&&(t.HbH(i.styleClass),t.Y8G("ngClass",i.containerClass())("ngStyle",i.style),t.R7$(2),t.Y8G("ngIf",!i.iconTemplate),t.R7$(),t.Y8G("ngIf",i.iconTemplate),t.R7$(2),t.JRh(i.value))},dependencies:[c.YU,c.bT,c.T3,c.B3],styles:["@layer primeng{.p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}}\n"],encapsulation:2,changeDetection:0})}return e})(),I=(()=>{class e{static \u0275fac=function(s){return new(s||e)};static \u0275mod=t.$C({type:e});static \u0275inj=t.G2t({imports:[c.MD,o.Gg,o.Gg]})}return e})();var f=a(4799);const S=()=>({"min-width":"50rem"}),k=()=>({width:"50vw"});function x(e,r){1&e&&(t.j41(0,"tr")(1,"th",10),t.EFF(2,"Name "),t.nrm(3,"p-sortIcon",11),t.k0s(),t.j41(4,"th",12),t.EFF(5,"Email "),t.nrm(6,"p-sortIcon",13),t.k0s(),t.j41(7,"th",14),t.EFF(8,"IsAdmin "),t.nrm(9,"p-sortIcon",15),t.k0s(),t.nrm(10,"th"),t.k0s())}function F(e,r){1&e&&t.nrm(0,"p-tag",20),2&e&&t.Y8G("rounded",!0)}function $(e,r){1&e&&t.nrm(0,"p-tag",21),2&e&&t.Y8G("rounded",!0)}function E(e,r){if(1&e){const n=t.RV6();t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.DNE(6,F,1,1,"p-tag",16)(7,$,1,1,"p-tag",17),t.k0s(),t.j41(8,"td")(9,"p-button",18),t.bIt("onClick",function(){const i=t.eBV(n).$implicit,l=t.XpG();return t.Njj(l.deleteUser(i.id))}),t.k0s(),t.j41(10,"p-button",19),t.bIt("onClick",function(){const i=t.eBV(n).$implicit,l=t.XpG();return t.Njj(l.editUser(i.id))}),t.k0s()()()}if(2&e){const n=r.$implicit;t.R7$(2),t.JRh(n.firstName+" "+n.lastName),t.R7$(2),t.JRh(n.email),t.R7$(2),t.Y8G("ngIf",n.isAdmin),t.R7$(),t.Y8G("ngIf",!n.isAdmin)}}let R=(()=>{class e{constructor(n,s,i,l){this.usersService=n,this.messageService=s,this.confirmationService=i,this.router=l,this.users=[]}ngOnInit(){this._getUsers()}_getUsers(){this.usersService.getUsers().subscribe(n=>this.users=n)}deleteUser(n){this.confirmationService.confirm({message:"Do you want to delete this user?",header:"Delete User",icon:"pi pi-exclamation-triangle",acceptButtonStyleClass:"p-button-danger p-button-text",rejectButtonStyleClass:"p-button-text p-button-text mr-2",acceptIcon:"none",rejectIcon:"none",accept:()=>{this.usersService.deleteUser(n).subscribe(()=>{this._getUsers(),this.messageService.add({severity:"success",summary:"Success",detail:"User is deleted!"})},()=>{this.messageService.add({severity:"error",summary:"Error",detail:"User is not deleted!"})})},reject:()=>{}})}editUser(n){this.router.navigateByUrl(`users/form/${n}`)}static#t=this.\u0275fac=function(s){return new(s||e)(t.rXU(v.gs),t.rXU(o.bg),t.rXU(o.td),t.rXU(d.Ix))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["admin-users-list"]],standalone:!0,features:[t.Jv_([o.td,o.bg]),t.aNF],decls:14,vars:6,consts:[[1,"admin-page"],["header","Users","subheader","List of All Users"],[1,"grid"],[1,"col-12"],[1,"p-toolbar"],[1,"p-toolbar-group-start"],["label","New","icon","pi pi-plus","styleClass","p-button-success","routerLink","form",1,"mr-2"],["styleClass","p-datatable-gridlines",3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","lastName"],["field","name"],["pSortableColumn","email"],["field","email"],["pSortableColumn","isAdmin"],["field","isAdmin"],["icon","pi pi-check","severity","success",3,"rounded",4,"ngIf"],["icon","pi pi-times","severity","danger",3,"rounded",4,"ngIf"],["styleClass","p-button-danger mr-2","icon","pi pi-trash",3,"onClick"],["styleClass","p-button-success mr-2","icon","pi pi-pencil",3,"onClick"],["icon","pi pi-check","severity","success",3,"rounded"],["icon","pi pi-times","severity","danger",3,"rounded"]],template:function(s,i){1&s&&(t.nrm(0,"p-toast"),t.j41(1,"div",0)(2,"p-card",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5),t.nrm(7,"p-button",6),t.k0s()()()(),t.j41(8,"div",2)(9,"div",3)(10,"p-table",7),t.DNE(11,x,11,0,"ng-template",8)(12,E,11,4,"ng-template",9),t.k0s()()()()(),t.nrm(13,"p-confirmDialog")),2&s&&(t.R7$(10),t.Y8G("value",i.users)("tableStyle",t.lJ4(4,S)),t.R7$(3),t.Aen(t.lJ4(5,k)))},dependencies:[g.MB,g.y8,o.Ei,u.D,u.Z,y.$n,d.Wk,p.bG,p.XI,p.Tg,p.yc,c.bT,I,j,f.F,f.T],styles:["[_nghost-%COMP%]     .p-tag .p-tag-icon{margin-right:0}[_nghost-%COMP%]     .p-toast{margin-top:3rem}@media screen and (max-width: 579px){[_nghost-%COMP%]     .p-dialog{width:80vw!important}}@media screen and (max-width: 445px){[_nghost-%COMP%]     .p-toast{margin-left:auto;margin-right:auto;max-width:90%}}"]})}return e})()}}]);