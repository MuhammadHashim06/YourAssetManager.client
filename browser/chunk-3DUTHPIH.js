import{_a as a,lb as s,u as n,x as o}from"./chunk-425NM7EX.js";var m=(()=>{let i=class i{constructor(t){this.http=t,this.registerapi=s.authentication}signup(t){return this.http.post(`${this.registerapi.signUp}`,t)}emailconfirm(t,e){return this.http.get(`${this.registerapi.confirmEmail}?token=${t}&email=${e}`)}login(t){return this.http.post(`${this.registerapi.signIn}`,t)}verifyemail(t){return this.http.post(`${this.registerapi.emailverifyforgetpassword}`,t)}resetemail(t){return this.http.post(`${this.registerapi.setresetpassword}`,t)}};i.\u0275fac=function(e){return new(e||i)(o(a))},i.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"});let r=i;return r})();var u=(()=>{let i=class i{constructor(t){this.http=t,this.apiendpoint=s.organizationManagement}getOrganization(){return this.http.get(this.apiendpoint.getOrganizationsInfo)}setOrganization(t){return this.http.post(this.apiendpoint.createOrganization,t)}updateorganziation(t){return this.http.put(this.apiendpoint.updateOrganization,t)}};i.\u0275fac=function(e){return new(e||i)(o(a))},i.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"});let r=i;return r})();export{m as a,u as b};
