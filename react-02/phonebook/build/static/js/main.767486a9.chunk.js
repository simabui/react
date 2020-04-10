(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(t,e,n){t.exports=n(365)},364:function(t,e,n){},365:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),c=n(115),u=n.n(c),o=n(119),i=n(25),l=n(26),b=n(29),s=n(27),f=n(30),d=n(28),m=n(116),p=n(7),h=n(367),j=n(3),O=n(118),v=function(t){var e=t.label;return r.a.createElement("span",{style:{color:"#ff0000",display:"inline-block"}},e)};v.defaultProps={label:""};var g=v;function y(){var t=Object(p.a)(["\n  &::-webkit-inner-spin-button,\n  ::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  ","\n"]);return y=function(){return t},t}function x(){var t=Object(p.a)(["\n  margin-left: 5px;\n"]);return x=function(){return t},t}function C(){var t=Object(p.a)(["\n  margin-bottom: 10px;\n"]);return C=function(){return t},t}function w(){var t=Object(p.a)(["\n  width: 150px;\n  font-size: 16px;\n  cursor: pointer;\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 3px;\n"]);return w=function(){return t},t}function k(){var t=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return k=function(){return t},t}var E=Object(j.a)(k()),F=Object(j.a)(w()),q=Object(j.a)(C()),S=Object(j.a)(x()),I=Object(j.a)(y(),S),P={name:"required|string",number:"required|string"},A={"name.required":"Please enter a unique name for your account","number.required":"Enter a phone number."},N=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(r)))).state={name:"",number:"",errors:null},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,r=e.number,c=n.props,u=c.handleContacts;if((0,c.onUnique)(a))alert("".concat(a," is already in contacts"));else{var o=Object(h.a)(),i={name:a,number:r};Object(O.validateAll)(i,P,A).then(function(t){u(Object(m.a)({},t,{id:o})),n.reset()}).catch(function(t){var e={};t.forEach(function(t){e[t.field]=t.message}),n.setState({errors:e})})}},n.handleInput=function(t){var e=t.target,a=e.value,r=e.name;n.setState(Object(d.a)({},r,a))},n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"reset",value:function(){this.setState({name:"",number:"",errors:null})}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.errors,r=Object(h.a)(),c=Object(h.a)();return Object(j.b)("form",{onSubmit:this.handleSubmit,css:E},Object(j.b)("label",{htmlFor:r,css:q},"Name",Object(j.b)("input",{type:"text",value:e,name:"name",onChange:this.handleInput,id:r,css:S})),a&&Object(j.b)(g,{label:a.name}),Object(j.b)("label",{htmlFor:c,css:q},"Number",Object(j.b)("input",{type:"number",value:n,name:"number",onChange:this.handleInput,id:c,css:I,min:"0"})),a&&Object(j.b)(g,{label:a.number}),Object(j.b)("button",{type:"submit",css:F},"Add contact"))}}]),e}(a.Component);function U(){var t=Object(p.a)(["\n  margin-left: 15px;\n  padding: 4px 10px;\n  font-size: 16px;\n  cursor: pointer;\n  background-color: #fff;\n  border-radius: 5px;\n"]);return U=function(){return t},t}function V(){var t=Object(p.a)(["\n  display: flex;\n  align-items: center;\n"]);return V=function(){return t},t}var D=Object(j.a)(V()),z=Object(j.a)(U()),J=function(t){var e=t.data,n=t.onDeleteContact;return Object(j.b)("ul",null,e.map(function(t){return Object(j.b)("li",{key:t.id},Object(j.b)("div",{css:D},t.name,": ",t.number,Object(j.b)("button",{type:"button",onClick:function(){return n(t.id)},css:z},"delete contact")))}))};J.defaultProps={data:null};var L=J;function B(){var t=Object(p.a)(["\n  width: 200px;\n  padding: 3px;\n"]);return B=function(){return t},t}var G=Object(j.a)(B()),H=function(t){var e=t.getFIlterValue;return Object(j.b)("div",null,Object(j.b)("p",null,"Find contacts by name"),Object(j.b)("input",{type:"text",onChange:e,css:G}))},K=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(r)))).state={contacts:[],filter:""},n.getFIlterValue=function(t){var e=t.target.value;n.setState({filter:e})},n.handleFilter=function(t,e){return t.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())})},n.handleContacts=function(t){n.setState(function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[t])}})},n.deleteContact=function(t){n.setState(function(e){return{contacts:e.contacts.filter(function(e){return e.id!==t})}})},n.handleUniqueName=function(t){return n.state.contacts.some(function(e){return e.name===t})},n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.handleFilter(e,n);return r.a.createElement(a.Fragment,null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(N,{handleContacts:this.handleContacts,onUnique:this.handleUniqueName}),r.a.createElement("h2",null,"Contacts"),e.length>0&&r.a.createElement(H,{getFIlterValue:this.getFIlterValue}),r.a.createElement(L,{data:c,onDeleteContact:this.deleteContact}))}}]),e}(a.Component);K.defaultProps={};var M=K;n(364);u.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.767486a9.chunk.js.map