import{a as w}from"./chunk-JBNS553Q.js";import{A as y,D as f,E as _,O,Q as c,R as x,Sa as E,Wa as U,X as p,Z as u,ca as g,eb as A,ga as r,gb as M,ha as a,ia as m,kb as S,ma as h,na as v,oa as d,ob as D,v as C,wa as l,xa as P,z as b}from"./chunk-425NM7EX.js";function F(e,t){e&1&&m(0,"span",2)(1,"span",2)(2,"span",2)(3,"span",2)(4,"span",2)(5,"span",2)}function N(e,t){if(e&1){let s=h();r(0,"div",4),v("click",function(){let i=f(s).$implicit,o=d(2);return _(o.showdetail(i.id))}),r(1,"div",5),m(2,"img",6),a(),r(3,"div",7)(4,"h2"),l(5),a(),r(6,"span",8),l(7),a()()()}if(e&2){let s=t.$implicit,n=d(2);c(2),u("src",s.imagePath||n.imagepath,O),c(3),P(s.userName),c(2),P(s.roles.$values[0])}}function $(e,t){if(e&1&&p(0,N,8,3,"div",3),e&2){let s=d();u("ngForOf",s.allusers)}}var T=(()=>{let t=class t{showdetail(n){this.router.navigateByUrl(`dashboard/user/${n}`)}constructor(n,i){this.userservice=n,this.router=i,this.imagepath=D,this.allusers=[]}ngOnInit(){this.userservice.getalluserS().pipe().subscribe(n=>{this.allusers=n.responseData.$values})}};t.\u0275fac=function(i){return new(i||t)(x(w),x(M))},t.\u0275cmp=b({type:t,selectors:[["app-userlist"]],decls:5,vars:1,consts:[[1,"employeelist"],[1,"emaployeecard"],[1,"loader"],["class","emaployeecard",3,"click",4,"ngFor","ngForOf"],[1,"emaployeecard",3,"click"],[1,"ptofilepic"],["alt","addphoto.svg",3,"src"],[1,"details"],[1,"roles"]],template:function(i,o){i&1&&(r(0,"h1"),l(1,` Employee list
`),a(),r(2,"div",0),p(3,F,6,0)(4,$,1,1,"div",1),a()),i&2&&(c(3),g(o.allusers.length<=0?3:4))},dependencies:[E],styles:['.employeelist[_ngcontent-%COMP%]{margin-top:5px;display:flex;flex-wrap:wrap;gap:1%;justify-content:center}.profilepic[_ngcontent-%COMP%]{display:grid;place-items:center}.emaployeecard[_ngcontent-%COMP%]{width:125px;background:#fff;background-image:url("./media/Pattern-Q7P6TPMQ.svg");background-size:cover;padding:40px 60px;display:flex;justify-content:center;align-items:center;flex-direction:column;border-radius:15px;box-shadow:6px 6px 54px 34px #00000008;cursor:pointer}.ptofilepic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;border-radius:50%;width:140px;aspect-ratio:1/1}.details[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:10px 0;padding:0;text-align:center}.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .roles[_ngcontent-%COMP%]{text-align:center;font-size:.5rem;line-height:1rem;color:#20222480;font-weight:100}.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]{text-align:center;font-size:.5rem;line-height:1.75rem;color:#20222480;font-weight:300}.loader[_ngcontent-%COMP%]{width:215px;height:215px;padding:40px 60px;display:block;margin:auto;border-radius:15px;position:relative;background:#fff;box-sizing:border-box}.loader[_ngcontent-%COMP%]:after{content:"";width:calc(100% - 30px);height:calc(100% - 30px);top:15px;left:15px;position:absolute;background-image:linear-gradient(90deg,transparent,rgba(255,255,255,.5) 50%,transparent 100%),radial-gradient(circle 50px,#DDD 100%,transparent 0),linear-gradient(#DDD 16px,transparent 0),linear-gradient(#DDD 24px,transparent 0);background-repeat:no-repeat;background-size:75px 175px,100% 100px,80% 16px,80% 16px;background-position:-185px 0,center 10px,center 125px,center 155px;box-sizing:border-box;animation:_ngcontent-%COMP%_animloader 1s linear infinite}@keyframes _ngcontent-%COMP%_animloader{to{background-position:185px 0,center 10px,center 125px,center 155px}}']});let e=t;return e})();function B(e,t){e&1&&(r(0,"button",5),l(1," Activated "),a())}function R(e,t){e&1&&(r(0,"button",6),l(1," Deactivated "),a())}function Q(e,t){if(e&1){let s=h();r(0,"button",12),v("click",function(i){f(s);let o=d(2);return _(o.Setrole(i))}),l(1," Assign As Asset Manger"),a()}}function J(e,t){if(e&1){let s=h();r(0,"button",12),v("click",function(i){f(s);let o=d(2);return _(o.Setrole(i))}),l(1,"Dismiss from Asset Manger"),a()}}function q(e,t){if(e&1&&p(0,Q,2,0,"button",11)(1,J,2,0,"button",11),e&2){let s=d();g(s.assignedrole=="Employee"&&s.Activestatus?0:s.Activestatus?1:-1)}}function G(e,t){if(e&1){let s=h();r(0,"button",13),v("click",function(){f(s);let i=d(2);return _(i.ChangeActiveStatus())}),l(1," Deactivate Account "),a()}}function H(e,t){if(e&1){let s=h();r(0,"button",14),v("click",function(){f(s);let i=d(2);return _(i.ChangeActiveStatus())}),l(1," Activate Account "),a()}}function K(e,t){if(e&1&&(r(0,"div",10),p(1,G,2,0,"button",6)(2,H,2,0,"button",5),a()),e&2){let s=d();c(),g(s.Activestatus?1:2)}}var z=(()=>{let t=class t{ChangeActiveStatus(){let n={id:this.id};this.Activestatus?this.userservice.deactiveuser(n).subscribe(i=>{this.usercurrentrole==this.assignedrole?this.route.navigateByUrl("auth"):this.route.navigateByUrl("dashboard/user")}):this.userservice.activeuser(n).pipe().subscribe(i=>{this.route.navigateByUrl("dashboard/user")})}Setrole(n){n.preventDefault();let i={id:this.id};this.assignedrole=="AssetManager"?this.userservice.dismissasassetmanager(i).pipe().subscribe(o=>{this.route.navigateByUrl("dashboard/user")}):this.userservice.assignasassetmanager(i).pipe().subscribe(o=>{this.route.navigateByUrl("dashboard/user")})}constructor(n,i,o){this.activedrouter=n,this.userservice=i,this.route=o,this.Activestatus=!0,this.roles=[],this.profilephoto="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",this.id="",this.id=this.activedrouter.snapshot.params.id,console.log(typeof this.id)}ngOnInit(){let n=sessionStorage.getItem("currentuser");if(n!=null){let o=JSON.parse(n).roles.$values;o.includes("OrganizationOwner")?this.usercurrentrole="OrganizationOwner":this.usercurrentrole=o.includes("AssetManager")?"AssetManager":"Employee"}this.id!=""&&this.id!=null&&this.userservice.getuserbyID(this.id).pipe().subscribe(i=>{this.userdetail=i.responseData,console.log(this.userdetail),this.roles=this.userdetail.roles.$values,this.roles.includes("OrganizationOwner")?this.assignedrole="OrganizationOwner":this.assignedrole=this.userdetail.roles.$values.includes("AssetManager")?"AssetManager":"Employee",this.Activestatus=this.userdetail.activeUser,this.userdetail.imagePath!=null&&(this.profilephoto=this.userdetail.imagePath)})}};t.\u0275fac=function(i){return new(i||t)(x(A),x(w),x(M))},t.\u0275cmp=b({type:t,selectors:[["app-userdetail"]],decls:37,vars:7,consts:[[1,"container"],[1,"profilepic"],["alt","",3,"src"],["action",""],["for","name"],[1,"activate"],[1,"deactivate"],["type","text","disabled","",3,"value"],["for","email"],["for","role"],[1,"links"],[1,"roleaction"],[1,"roleaction",3,"click"],[1,"deactivate",3,"click"],[1,"activate",3,"click"]],template:function(i,o){i&1&&(r(0,"h1"),l(1,"User Detail"),a(),r(2,"div",0)(3,"div",1),m(4,"img",2),a(),r(5,"form",3)(6,"table")(7,"tr")(8,"td")(9,"label",4),l(10,"Status:"),a()(),r(11,"td"),p(12,B,2,0,"button",5)(13,R,2,0,"button",6),a()(),r(14,"tr")(15,"td")(16,"label",4),l(17,"User Name:"),a()(),r(18,"td"),m(19,"input",7),a()(),r(20,"tr")(21,"td")(22,"label",8),l(23,"Email Address:"),a()(),r(24,"td"),m(25,"input",7),a()(),r(26,"tr")(27,"td")(28,"label",9),l(29,"User Role"),a()(),r(30,"td"),m(31,"input",7),a()(),r(32,"tr"),m(33,"td"),r(34,"td"),p(35,q,2,1),a()()()(),p(36,K,3,1,"div",10),a()),i&2&&(c(4),u("src",o.profilephoto,O),c(8),g(o.Activestatus?12:13),c(7),u("value",o.userdetail.userName),c(6),u("value",o.userdetail.email),c(6),u("value",o.assignedrole),c(4),g(o.assignedrole!="OrganizationOwner"&&o.usercurrentrole=="OrganizationOwner"?35:-1),c(),g(!o.userdetail.roles.$values.includes("OrganizationOwner")&&o.usercurrentrole!="Employee"&&o.usercurrentrole!=o.assignedrole?36:-1))},styles:[".profilepic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:180px;border-radius:90px;aspect-ratio:1/1}form[_ngcontent-%COMP%]{display:flex;justify-content:center}form[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:60%}.profilepic[_ngcontent-%COMP%]{display:grid;place-items:center}.links[_ngcontent-%COMP%]   .deactivate[_ngcontent-%COMP%]{background-color:red;color:#fff;border:none;cursor:pointer;padding:5px 10px;font-size:1em;border-radius:5px}.links[_ngcontent-%COMP%]{display:flex;justify-content:right}.links[_ngcontent-%COMP%]   .activate[_ngcontent-%COMP%]{background-color:green;color:#fff;border:none;cursor:pointer;padding:5px 10px;font-size:1em;border-radius:5px}.roleaction[_ngcontent-%COMP%]{padding:5px 10px;font-size:1em;border:none;border-radius:5px;background-color:#4880ff;color:#fff}.deactivate[_ngcontent-%COMP%]{color:red;background-color:transparent;border:none;cursor:pointer}.activate[_ngcontent-%COMP%]{color:green;background-color:transparent;border:none;cursor:pointer}"]});let e=t;return e})();var L=[{path:"",component:T},{path:":id",component:z}],j=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=y({type:t}),t.\u0275inj=C({imports:[S.forChild(L),S]});let e=t;return e})();var ue=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=y({type:t}),t.\u0275inj=C({imports:[U,j]});let e=t;return e})();export{ue as UserModule};
