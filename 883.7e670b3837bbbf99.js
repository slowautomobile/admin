"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[883],{1883:(ee,u,c)=>{c.d(u,{uC:()=>C,mR:()=>v,bq:()=>_,C8:()=>b,MF:()=>x,WZ:()=>h,e$:()=>f});var l=c(3953),p=c(1562),s=c(4699);let _=(()=>{class t{constructor(){this.http=(0,l.WQX)(p.Qq),this.apiURLExercises=s.c.apiURL+"exercises",this.apiURLMuscles=s.c.apiURL+"muscles",this.apiURLBodyAreas=s.c.apiURL+"bodyareas",this.apiURLMovements=s.c.apiURL+"movements",this.apiURLStartingPositions=s.c.apiURL+"startingpositions",this.apiURLEquipments=s.c.apiURL+"equipments"}getExercises(){return this.http.get(this.apiURLExercises)}getExercise(e){return this.http.get(`${this.apiURLExercises}/${e}`)}createExercise(e){return this.http.post(this.apiURLExercises,e)}updateExercise(e,i){return this.http.put(`${this.apiURLExercises}/${i}`,e)}deleteExercise(e){return this.http.delete(`${this.apiURLExercises}/${e}`)}getMuscles(){return this.http.get(this.apiURLMuscles)}createMuscle(e){return this.http.post(this.apiURLMuscles,e)}getBodyAreas(){return this.http.get(this.apiURLBodyAreas)}createBodyArea(e){return this.http.post(this.apiURLBodyAreas,e)}getMovements(){return this.http.get(this.apiURLMovements)}createMovement(e){return this.http.post(this.apiURLMovements,e)}getStartingPositions(){return this.http.get(this.apiURLStartingPositions)}createStartingPosition(e){return this.http.post(this.apiURLStartingPositions,e)}getEquipments(){return this.http.get(this.apiURLEquipments)}createEquipment(e){return this.http.post(this.apiURLEquipments,e)}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275prov=l.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),h=(()=>{class t{constructor(){this.http=(0,l.WQX)(p.Qq),this.apiURLMuscles=s.c.apiURL+"muscles"}getMuscles(){return this.http.get(this.apiURLMuscles)}getMuscle(e){return this.http.get(`${this.apiURLMuscles}/${e}`)}createMuscle(e){return this.http.post(this.apiURLMuscles,e)}updateMuscle(e){return this.http.put(`${this.apiURLMuscles}/${e.id}`,e)}deleteMuscle(e){return this.http.delete(`${this.apiURLMuscles}/${e}`)}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275prov=l.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),C=(()=>{class t{constructor(){this.http=(0,l.WQX)(p.Qq),this.apiURLBodyAreas=s.c.apiURL+"bodyareas"}getBodyAreas(){return this.http.get(this.apiURLBodyAreas)}getBodyArea(e){return this.http.get(`${this.apiURLBodyAreas}/${e}`)}createBodyArea(e){return this.http.post(this.apiURLBodyAreas,e)}updateBodyArea(e){return this.http.put(`${this.apiURLBodyAreas}/${e.id}`,e)}deleteBodyArea(e){return this.http.delete(`${this.apiURLBodyAreas}/${e}`)}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275prov=l.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),x=(()=>{class t{constructor(){this.http=(0,l.WQX)(p.Qq),this.apiURLMovements=s.c.apiURL+"movements"}getMovements(){return this.http.get(this.apiURLMovements)}getMovement(e){return this.http.get(`${this.apiURLMovements}/${e}`)}createMovement(e){return this.http.post(this.apiURLMovements,e)}updateMovement(e){return this.http.put(`${this.apiURLMovements}/${e.id}`,e)}deleteMovement(e){return this.http.delete(`${this.apiURLMovements}/${e}`)}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275prov=l.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),f=(()=>{class t{constructor(){this.http=(0,l.WQX)(p.Qq),this.apiURLStartingPositions=s.c.apiURL+"startingpositions"}getStartingPositions(){return this.http.get(this.apiURLStartingPositions)}getStartingPosition(e){return this.http.get(`${this.apiURLStartingPositions}/${e}`)}createStartingPosition(e){return this.http.post(this.apiURLStartingPositions,e)}updateStartingPosition(e){return this.http.put(`${this.apiURLStartingPositions}/${e.id}`,e)}deleteStartingPosition(e){return this.http.delete(`${this.apiURLStartingPositions}/${e}`)}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275prov=l.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),v=(()=>{class t{constructor(){this.http=(0,l.WQX)(p.Qq),this.apiURLEquipments=s.c.apiURL+"equipments"}getEquipments(){return this.http.get(this.apiURLEquipments)}getEquipment(e){return this.http.get(`${this.apiURLEquipments}/${e}`)}createEquipment(e){return this.http.post(this.apiURLEquipments,e)}updateEquipment(e){return this.http.put(`${this.apiURLEquipments}/${e.id}`,e)}deleteEquipment(e){return this.http.delete(`${this.apiURLEquipments}/${e}`)}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275prov=l.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),b=(()=>{class t{transform(e){return{en:"English",de:"Deutsch",sr:"Srpski"}[e]||e}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275pipe=l.EJ8({name:"languageName",type:t,pure:!0,standalone:!0})}return t})();new l.nKC("Browser Storage",{providedIn:"root",factory:()=>localStorage}),c(6467)}}]);