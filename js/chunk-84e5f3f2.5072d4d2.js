(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84e5f3f2"],{1340:function(e,t,a){"use strict";a("d736")},"15a7":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form_part_1"},[a("div",{staticClass:"form_part_title"},[e._v("寄送地址")]),a("div",{staticClass:"form_part-1"},[a("div",{staticClass:"form_part-1_item form_part-1_gender"},[a("label",{staticClass:"form_part-1_title",attrs:{for:""}},[e._v("稱謂")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.user.gender,expression:"user.gender"}],staticClass:"w-25",attrs:{name:"a-type",id:"a-type"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.user,"gender",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("請選擇性別")]),a("option",{attrs:{value:"先生"}},[e._v("先生")]),a("option",{attrs:{value:"小姐"}},[e._v("小姐")])])]),a("div",{staticClass:"form_part-1_item form_part-1_name"},[a("label",{staticClass:"form_part-1_title"},[e._v("姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{type:"text",id:"name",placeholder:"請輸入姓名"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),a("div",{staticClass:"form_part-1_item form_part-1_phone"},[a("label",{staticClass:"form_part-1_title"},[e._v("電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phone,expression:"user.phone"}],attrs:{type:"text",id:"phone",placeholder:"請輸入行動電話"},domProps:{value:e.user.phone},on:{input:function(t){t.target.composing||e.$set(e.user,"phone",t.target.value)}}})]),a("div",{staticClass:"form_part-1_item form_part-1_email"},[a("label",{staticClass:"form_part-1_title"},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{type:"text",id:"email",placeholder:"請輸入電子郵件"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),a("div",{staticClass:"form_part-1_item form_part-1_city"},[a("label",{staticClass:"form_part-1_name"},[e._v("縣市")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.user.city,expression:"user.city"}],staticClass:"w-25",attrs:{name:"a-type",id:"select-city"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.user,"city",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("請選擇縣市")]),e._l(e.cities,(function(t){return a("option",{key:t.id,attrs:{value:"city.name"}},[e._v(" "+e._s(t.name)+" ")])}))],2)]),a("div",{staticClass:"form_part-1_item form_part-1_address"},[a("label",{staticClass:"form_part-1_name"},[e._v("地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.address,expression:"user.address"}],attrs:{type:"text",id:"addrass",placeholder:"請輸入地址"},domProps:{value:e.user.address},on:{input:function(t){t.target.composing||e.$set(e.user,"address",t.target.value)}}})])]),a("div",{staticClass:"form_part-1_btn"},[a("div",{staticClass:"form_part-1_btn-next btn-next",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.NextStep.apply(null,arguments)}}},[e._v(" 下一步 → ")])])])},s=[],i={name:"addressInfo",props:{initialUser:{type:Object,default:function(){return{gender:"",name:"",phone:"",email:"",city:"",address:"",id:""}}}},data:function(){return{cities:[{name:"基隆市",id:"1"},{name:"台北市",id:"2"},{name:"新北市",id:"3"},{name:"桃園市",id:"4"},{name:"新竹市",id:"5"},{name:"新竹縣",id:"6"},{name:"苗栗市",id:"7"},{name:"台中縣",id:"8"},{name:"彰化縣",id:"9"},{name:"南投縣",id:"10"},{name:"雲林縣",id:"11"},{name:"嘉義市",id:"12"},{name:"嘉義縣",id:"13"},{name:"台南市",id:"14"},{name:"高雄市",id:"15"},{name:"屏東縣",id:"16"},{name:"台東縣",id:"18"},{name:"花蓮縣",id:"19"},{name:"宜蘭縣",id:"20"},{name:"澎湖縣",id:"21"},{name:"金門縣",id:"22"},{name:"連江縣",id:"23"}],user:this.initialUser}},methods:{NextStep:function(){this.$emit("after-submit"),this.$router.push({name:"delivery"})}}},n=i,l=(a("1340"),a("2877")),o=Object(l["a"])(n,r,s,!1,null,"184df496",null);t["default"]=o.exports},d736:function(e,t,a){}}]);
//# sourceMappingURL=chunk-84e5f3f2.5072d4d2.js.map