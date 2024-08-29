import{a as k}from"./chunk-HYG3M4T2.js";import{a as se}from"./chunk-BJ7OGFNR.js";import{a as K,b as F,c as Q,d as W,e as M,f as X,g as C,i as Z,k as ee,l as te,m as ie,n as ne,o as re,q as oe,t as ae,u as le,v as A}from"./chunk-2USBGTC3.js";import{A as E,D as g,E as f,Ia as J,Q as c,R as _,Sa as T,Ta as I,Wa as Y,X as p,Z as m,ca as x,da as q,ea as $,eb as L,fa as R,ga as n,gb as N,ha as i,hb as z,ia as u,j,kb as V,ma as h,n as B,na as y,nb as H,oa as d,v as S,va as G,wa as s,xa as v,y as U,ya as w,z as b}from"./chunk-425NM7EX.js";function fe(e,t){if(e&1&&(n(0,"div",5),u(1,"app-alert",6),i()),e&2){let r=d();c(),m("alert",r.alert)}}function ye(e,t){e&1&&u(0,"app-dataloading")}function he(e,t){e&1&&(n(0,"div",4)(1,"span"),s(2,"No Category found"),i()())}function _e(e,t){if(e&1&&(n(0,"button",12),s(1),i()),e&2){let r=t.$implicit;c(),w(" ",r.name," ")}}function ve(e,t){if(e&1&&$(0,_e,2,1,"button",12,q),e&2){let r=d().$implicit;R(r.relaventInputFields)}}function Ce(e,t){e&1&&s(0,"--")}function xe(e,t){if(e&1){let r=h();n(0,"tr")(1,"td"),s(2),i(),n(3,"td"),s(4),i(),n(5,"td"),p(6,ve,2,0)(7,Ce,1,0),i(),n(8,"td")(9,"div",9)(10,"i",10),y("click",function(){let a=g(r).$implicit,l=d(2);return f(l.edit(a.id))}),i(),n(11,"img",11),y("click",function(){let a=g(r).$implicit,l=d(2);return f(l.delete(a.id))}),i()()()()}if(e&2){let r=t.$implicit;c(2),w(" ",r.categoryName," "),c(2),w(" ",r.description||"--"," "),c(2),x(r.relaventInputFields.length>0?6:7)}}function Se(e,t){if(e&1&&(n(0,"table")(1,"thead")(2,"th"),s(3," Name "),i(),n(4,"th"),s(5," Description "),i(),n(6,"th"),s(7," Relevant Input Fields "),i(),n(8,"th",7),s(9," Action "),i()(),n(10,"tbody"),p(11,xe,12,3,"tr",8),i()()),e&2){let r=d();c(11),m("ngForOf",r.categories)}}var ce=(()=>{let t=class t{getcategories(){this.dataload=!1,this.service.getcategory().subscribe(o=>{if(this.dataload=!0,o.status==404)this.categories=[];else{this.categories=o.responseData.$values;for(let a=0;a<this.categories.length;a++)this.categories[a].relaventInputFields=JSON.parse(this.categories[a].relaventInputFields)}},o=>{this.dataload=!0})}edit(o){this.router.navigateByUrl(`dashboard/categories/add?id=${o}`)}delete(o){this.dataload=!1,this.service.deletecategory(o).subscribe(a=>{this.isalert=!0,this.alert.type="success",this.alert.upermessage="Deleted Success",this.alert.lowermessage="Catrgory Deleted Successfully",setTimeout(()=>{this.isalert=!1},3e3),this.getcategories()},a=>{this.dataload=!0,this.isalert=!0,this.alert.type="error",a.status==405?(this.alert.type="warning",this.alert.upermessage="Delete Failed",this.alert.lowermessage="Category is already in use"):(this.alert.type="error",this.alert.upermessage="Something went wrong",this.alert.lowermessage="Please try again Later"),setTimeout(()=>{this.isalert=!1},3e3)})}constructor(o){this.service=o,this.router=U(N),this.dataload=!1,this.isalert=!1,this.alert={type:"",upermessage:"",lowermessage:""},this.categories=[]}ngOnInit(){this.getcategories()}};t.\u0275fac=function(a){return new(a||t)(_(k))},t.\u0275cmp=b({type:t,selectors:[["app-categorylist"]],decls:10,vars:2,consts:[["class","alert",4,"ngIf"],[1,"head"],["routerLink","add"],[1,"container"],[1,"notfound",2,"display","grid","place-items","center","padding","50px"],[1,"alert"],[3,"alert"],[2,"text-align","center"],[4,"ngFor","ngForOf"],[1,"action"],[1,"fa-regular","fa-pen-to-square",2,"color","green","cursor","pointer",3,"click"],["src","delete.svg","alt","",2,"cursor","pointer",3,"click"],[2,"border","none","padding","5px 10px","margin","2px","border-radius","3px"]],template:function(a,l){a&1&&(p(0,fe,2,1,"div",0),n(1,"div",1)(2,"h1"),s(3,"Category List"),i(),n(4,"button",2),s(5,"Add Category"),i()(),n(6,"div",3),p(7,ye,1,0,"app-dataloading")(8,he,3,0,"div",4)(9,Se,12,1,"table"),i()),a&2&&(m("ngIf",l.isalert),c(7),x(l.dataload?l.categories.length<=0?8:9:7))},dependencies:[T,I,z,se,A],styles:[".head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#4379ee;border-radius:5px;border:none;color:#fff;padding:15px;font-size:1em;cursor:pointer}thead[_ngcontent-%COMP%]{background-color:#f1f4f9;font-weight:700}.action[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-around;background-color:#fafbfd;border:.1px solid rgb(213,213,213);border-radius:7.5px;gap:0px}"]});let e=t;return e})();function be(e,t){if(e&1&&(n(0,"div",21),u(1,"app-alert",22),i()),e&2){let r=d();c(),m("alert",r.alert)}}function Ee(e,t){if(e&1&&(n(0,"span",23),s(1),i()),e&2){let r=d();c(),v(r.inputerrormessages.required)}}function we(e,t){if(e&1&&(n(0,"span",23),s(1),i()),e&2){let r=d();c(),v(r.inputerrormessages.required)}}function Te(e,t){if(e&1&&(n(0,"option",24),s(1),i()),e&2){let r=t.$implicit;m("value",r),c(),v(r)}}function Ie(e,t){if(e&1&&(n(0,"span",23),s(1),i()),e&2){let r=d();c(),v(r.inputerrormessages.required)}}function Ne(e,t){if(e&1){let r=h();n(0,"Button",25),y("click",function(a){g(r);let l=d();return f(l.Save(a))}),s(1,"Save Category"),i()}}function Fe(e,t){if(e&1){let r=h();n(0,"Button",25),y("click",function(){g(r);let a=d();return f(a.Update(a.id))}),s(1,"Update Category"),i()}}function Ae(e,t){e&1&&(n(0,"div",26)(1,"h1"),s(2,"No Column Found"),i()())}function ke(e,t){if(e&1){let r=h();n(0,"tr")(1,"td")(2,"label",28),s(3),i()(),n(4,"td"),u(5,"input",29),i(),n(6,"td")(7,"label",12),s(8,"Selected Type:"),i()(),n(9,"td"),u(10,"input",30),i(),n(11,"td")(12,"img",31),y("click",function(){let a=g(r).index,l=d(2);return f(l.removecolumn(a))}),i()()()}if(e&2){let r=t.$implicit;c(2),m("for",r.name),c(),v(r.label),c(2),m("type",r.type)("name",r.name)("id",r.name),c(5),m("value",r.type)}}function Oe(e,t){if(e&1&&(n(0,"table")(1,"tr"),u(2,"td")(3,"td")(4,"td")(5,"td"),i(),p(6,ke,13,6,"tr",27),i()),e&2){let r=d();c(6),m("ngForOf",r.features)}}var P=(()=>{let t=class t{Update(o){let a={id:this.id,categoryName:this.categoryvalue.controls.categoryName.value,description:this.categoryvalue.controls.description.value,relaventInputFields:JSON.stringify(this.features)};this.service.updatecategory(a).subscribe(l=>{this.isalert=!0,this.alert.type="success",this.alert.upermessage="Added Successfully",this.alert.lowermessage="Vendor has been Added Successfully",setTimeout(()=>{this.isalert=!1,this.router.navigateByUrl("/dashboard/categories")},3e3)},l=>{this.isalert=!0,l.status==400?(this.alert.type="warning",this.alert.upermessage="Update failed",this.alert.lowermessage="You have no updates"):l.status==401?(this.alert.type="error",this.alert.upermessage="Unauthorized",this.alert.lowermessage="You donot have Permission"):(this.alert.type="error",this.alert.upermessage="Something went wrong",this.alert.lowermessage="Pleasr try again later"),setTimeout(()=>{this.isalert=!1,this.router.navigateByUrl("/dashboard/categories")},3e3)})}constructor(o,a,l){this.service=o,this.router=a,this.activeroute=l,this.isalert=!1,this.alert={type:"",upermessage:"",lowermessage:""},this.id=0,this.inputerrormessages=H.inputerrormessage,this.features=[],this.inputTypes=["text","date","time","datetime-local","number","email","url","tel","color","image"],this.categoryvalue=new M({categoryName:new C("",[F.required]),description:new C(""),relaventInputFields:new C("")}),this.columnvalue=new M({inputType:new C("",F.required),column:new C("",F.required)}),this.column="",this.id=this.activeroute.snapshot.queryParams.id,console.log(this.id)}ngOnInit(){this.id!=null&&this.service.getcategorybyid(this.id).subscribe(o=>{this.category=o.responseData,console.log(this.category),this.categoryvalue.setValue({categoryName:this.category.categoryName,description:this.category.description,relaventInputFields:this.category.relaventInputFields}),this.features=JSON.parse(this.category.relaventInputFields)})}addcolumn(){if(this.columnvalue.valid){let o=this.columnvalue.controls.column.value,a=this.columnvalue.controls.inputType.value;o&&(o=o.replace(/\s+/g,"")),this.features.push({label:this.columnvalue.controls.column.value,type:a,name:o,value:""}),this.columnvalue.setValue({inputType:"",column:""}),this.columnvalue.markAsUntouched()}else this.columnvalue.markAllAsTouched()}removecolumn(o){this.features.splice(o,1)}saveCategory(){console.log(this.categoryvalue.valid),this.categoryvalue.valid?(console.log(this.features),this.categoryvalue.controls.relaventInputFields.setValue(JSON.stringify(this.features)),console.log(this.categoryvalue.value),this.service.createcategory(this.categoryvalue.value).pipe(B(o=>(console.error("Error occurred:",o),j(()=>o)))).subscribe({next:o=>{this.isalert=!0,this.alert.type="success",this.alert.upermessage="Added Successfully",this.alert.lowermessage="Vendor has been Added Successfully",setTimeout(()=>{this.isalert=!1,this.router.navigateByUrl("/dashboard/categories")},3e3),console.log("Category created successfully:",o)},error:o=>{this.isalert=!0,o.status==401?(this.alert.type="error",this.alert.upermessage="Unauthorized",this.alert.lowermessage="You donot have Permission"):(this.alert.type="error",this.alert.upermessage="Something went wrong",this.alert.lowermessage="Pleasr try again later"),setTimeout(()=>{this.isalert=!1},3e3)}}),localStorage.setItem("features",JSON.stringify(this.features))):this.categoryvalue.markAllAsTouched()}Save(o){this.saveCategory()}};t.\u0275fac=function(a){return new(a||t)(_(k),_(N),_(L))},t.\u0275cmp=b({type:t,selectors:[["app-addcategory"]],decls:43,vars:10,consts:[["columnTable",""],["class","alert",4,"ngIf"],[1,"form"],[1,"category-form",3,"formGroup"],["for","categoryname"],["type","text","name","categoryname","id","categoryname","formControlName","categoryName","placeholder","Enter Your Category","required",""],["class","error",4,"ngIf"],["for","description"],["type","text","name","description","id","description","placeholder","Enter Your Description","formControlName","description"],[3,"formGroup"],["for","column"],["type","text","name","column","id","column","placeholder","Enter Column name","formControlName","column"],["for","type"],["name","inputType","id","inputType","formControlName","inputType"],[3,"value",4,"ngFor","ngForOf"],["src","add.svg",2,"cursor","pointer",3,"click"],[1,"link"],[2,"cursor","pointer"],[2,"margin-top","10px"],[1,"category-form"],["class","empty",4,"ngIf","ngIfElse"],[1,"alert"],[3,"alert"],[1,"error"],[3,"value"],[2,"cursor","pointer",3,"click"],[1,"empty"],[4,"ngFor","ngForOf"],[3,"for"],[3,"type","name","id"],["type","text","disabled","",3,"value"],["src","remove.svg",2,"cursor","pointer",3,"click"]],template:function(a,l){if(a&1){let O=h();p(0,be,2,1,"div",1),n(1,"h1"),s(2,"Add Category"),i(),n(3,"div",2)(4,"form",3)(5,"table")(6,"tr")(7,"td")(8,"label",4),s(9,"Category Name:"),i()(),n(10,"td"),u(11,"input",5),p(12,Ee,2,1,"span",6),i(),n(13,"td")(14,"label",7),s(15,"Description"),i()(),n(16,"td"),u(17,"input",8),i()(),n(18,"tr",9)(19,"td")(20,"label",10),s(21,"Catagory Relevent Fields:"),i()(),n(22,"td"),u(23,"input",11),p(24,we,2,1,"span",6),i(),n(25,"td")(26,"label",12),s(27,"Select Type:"),i()(),n(28,"td")(29,"select",13),p(30,Te,2,2,"option",14),i(),p(31,Ie,2,1,"span",6),i(),n(32,"td")(33,"img",15),y("click",function(){return g(O),f(l.addcolumn())}),i()()()(),n(34,"div",16),p(35,Ne,2,0,"Button",17)(36,Fe,2,0,"Button",17),i()(),n(37,"h1",18),s(38,"New Columns"),i(),n(39,"form",19),p(40,Ae,3,0,"div",20)(41,Oe,7,1,"ng-template",null,0,J),i()()}if(a&2){let O=G(42);m("ngIf",l.isalert),c(4),m("formGroup",l.categoryvalue),c(8),m("ngIf",l.categoryvalue.controls.categoryName.touched&&l.categoryvalue.controls.categoryName.invalid),c(6),m("formGroup",l.columnvalue),c(6),m("ngIf",l.columnvalue.controls.column.touched&&l.columnvalue.controls.column.invalid),c(6),m("ngForOf",l.inputTypes),c(),m("ngIf",l.columnvalue.controls.inputType.touched&&l.columnvalue.controls.inputType.invalid),c(4),x(l.id==null?35:36),c(5),m("ngIf",l.features.length<=0)("ngIfElse",O)}},dependencies:[T,I,Z,ne,re,K,ie,Q,W,oe,X,ee,te,A],styles:[".category-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;margin-top:3.25%;background-color:#fff;padding:10px 20px;border-radius:10px;border:1px solid rgba(185,185,185,.5)}.link[_ngcontent-%COMP%]{display:flex;justify-content:right}.link[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#4880ff;border:none;color:#fff;border-radius:5px;padding:10px}.empty[_ngcontent-%COMP%]{display:grid;place-items:center;padding:100px}"]});let e=t;return e})();var Ve=[{path:"",component:ce},{path:"add",component:P},{path:"add/:id",component:P}],me=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=E({type:t}),t.\u0275inj=S({imports:[V.forChild(Ve),V]});let e=t;return e})();var at=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=E({type:t}),t.\u0275inj=S({imports:[Y,me,ae,le]});let e=t;return e})();export{at as CategoryModule};
