(this["webpackJsonpemployee-direct-reaction"]=this["webpackJsonpemployee-direct-reaction"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=(a(23),a(12)),m=a(13),s=a(14),u=a(17),i=a(16),p=a(15),d=a.n(p),h=function(){return d.a.get("https://randomuser.me/api?results=20").then((function(e){return e.data.results.map((function(e){return{image:e.picture.thumbnail,name:e.name.first+" "+e.name.last,country:e.location.country,email:e.email}}))}))};a(41);var y=function(e){return r.a.createElement("div",{className:"container",style:e.style},e.children)},E=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={search:"",employees:[]},e.handleInputChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(c.a)({},n,a))},e.sort=function(t){var a=t.target.value;if("name"===a){var n=e.state.employees;e.setState({employees:n.sort((function(e,t){var a=e.name,n=t.name;return a<n?-1:a>n?1:0}))})}if("country"===a){var r=e.state.employees;e.setState({employees:r.sort((function(e,t){var a=e.country,n=t.country;return a<n?-1:a>n?1:0}))})}if("email"===a){var l=e.state.employees;e.setState({employees:l.sort((function(e,t){var a=e.email,n=t.email;return a<n?-1:a>n?1:0}))})}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h().then((function(t){e.setState({employees:t})}))}},{key:"render",value:function(){var e=this,t=this.state.employees;return r.a.createElement("div",{className:"content"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y,null,r.a.createElement("h1",{className:"text-center"},"Employee-Direct-Reaction"),r.a.createElement("h6",{className:"text-center"},"Sort through employees by using the drop down menu or filter employees by typing in a name into the input field."),r.a.createElement("br",null),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort By"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},r.a.createElement("button",{value:"name",onClick:this.sort,className:"dropdown-item"},"Name"),r.a.createElement("button",{value:"country",onClick:this.sort,className:"dropdown-item"},"Country"),r.a.createElement("button",{value:"email",onClick:this.sort,className:"dropdown-item"},"Email")))),r.a.createElement("div",{className:"col"},r.a.createElement("input",{value:this.state.search,name:"search",onChange:this.handleInputChange,type:"text",placeholder:"Filter by Name"}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("table",{className:"table "},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Country"),r.a.createElement("th",{scope:"col"},"Email"))),t.filter((function(t){return t.name.includes(e.state.search)})).map((function(e,t){return r.a.createElement("tbody",{key:t},r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("img",{alt:"employeeImg",src:e.image})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.country),r.a.createElement("td",null,e.email)))})))))}}]),a}(n.Component);var v=function(){return r.a.createElement(E,null)};o.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.413667e8.chunk.js.map