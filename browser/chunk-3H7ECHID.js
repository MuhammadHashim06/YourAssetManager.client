import{_a as c,i as o,lb as l,p as n,q as r,r as s,u as a,x as d}from"./chunk-425NM7EX.js";var y=(()=>{let i=class i{constructor(t){this.http=t,this.cache=new Map,this.apiendpoint=l.vendor}addvendor(t){let e="vendors";return this.http.post(this.apiendpoint.CreateVender,t).pipe(r(()=>this.http.get(this.apiendpoint.GetAllVenders)),s(p=>this.cache.set(e,p)),n(1))}getvendors(){let t="vendors";return this.cache.has(t)?o(this.cache.get(t)):this.http.get(this.apiendpoint.GetAllVenders).pipe(s(e=>this.cache.set(t,e)),n(1))}deletevender(t){let e="vendors";return this.http.delete(`${this.apiendpoint.DeleteVender}?vendorId=${t}`).pipe(r(()=>this.http.get(this.apiendpoint.GetAllVenders)),s(p=>this.cache.set(e,p)),n(1))}getvendorbyId(t){return this.http.get(`${this.apiendpoint.GetVenderById}?vendorId=${t}`)}updatevendor(t){let e="vendors";return this.http.post(`${this.apiendpoint.UpdateVender}`,t).pipe(r(()=>this.http.get(this.apiendpoint.GetAllVenders)),s(p=>this.cache.set(e,p)),n(1))}updatevendordata(){let t="vendors";return this.http.get(this.apiendpoint.GetAllVenders).pipe(s(e=>this.cache.set(t,e)),n(1))}};i.\u0275fac=function(e){return new(e||i)(d(c))},i.\u0275prov=a({token:i,factory:i.\u0275fac,providedIn:"root"});let h=i;return h})();export{y as a};
