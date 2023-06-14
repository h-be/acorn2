(self.webpackChunkacorn_ui=self.webpackChunkacorn_ui||[]).push([[2822],{"./src/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>components_Avatar_Avatar});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Avatar/Avatar.scss");var styles=__webpack_require__("./src/styles.ts"),Status=function(Status){return Status.Online="Online",Status.Away="Away",Status.Offline="Offline",Status}(Status||{});const StatusCssColorClass={[Status.Online]:"status-online",[Status.Away]:"status-away",[Status.Offline]:"status-offline"};var Tooltip=__webpack_require__("./src/components/Tooltip/Tooltip.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Avatar_Avatar({firstName,lastName,avatarUrl,highlighted,disconnected,size="medium",clickable,onClick,imported,withStatus,withWhiteBorder,withStatusBorder,selfAssignedStatus,withTooltip}){imported&&(withStatus=!1);let classes=[];if(highlighted&&classes.push("highlighted"),clickable&&classes.push("clickable"),imported&&classes.push("imported"),withStatus&&classes.push("with-status"),withTooltip&&classes.push("with-tooltip"),disconnected&&classes.push("disconnected"),!avatarUrl){const style={backgroundColor:(0,styles.OU)(firstName)};return classes.push("initials-avatar"),(0,jsx_runtime.jsxs)("div",{className:`avatar-wrapper \n        ${imported?"imported":""} \n        ${withWhiteBorder?"with-border white":""} \n        ${withStatusBorder?`with-border status-color ${StatusCssColorClass[selfAssignedStatus]}`:""} \n        ${"small"===size?"small":"small-medium"===size?"small-medium":"medium"===size?"medium":"medium-large"===size?"medium-large":"large"===size?"large":""}`,children:[(0,jsx_runtime.jsxs)("div",{className:classes.join(" "),onClick,style,children:[firstName[0].toUpperCase(),lastName[0].toUpperCase()]}),withStatus&&(0,jsx_runtime.jsx)("div",{className:"status-circle-wrapper",children:(0,jsx_runtime.jsx)("div",{className:`status-circle ${StatusCssColorClass[selfAssignedStatus]}`})}),withTooltip&&(0,jsx_runtime.jsx)(Tooltip.Z,{text:`${firstName} ${lastName} ${imported?"[ghost member]":""}`})]})}return classes.push("avatar"),(0,jsx_runtime.jsxs)("div",{className:`avatar-wrapper \n      ${imported?"imported":""} \n      ${withWhiteBorder?"with-border white":""} \n      ${withStatusBorder?`with-border status-color ${StatusCssColorClass[selfAssignedStatus]}`:""}\n      ${"small"===size?"small":"small-medium"===size?"small-medium":"medium"===size?"medium":"medium-large"===size?"medium-large":"large"===size?"large":""}`,children:[(0,jsx_runtime.jsx)("img",{src:avatarUrl,className:classes.join(" "),onClick}),withStatus&&(0,jsx_runtime.jsx)("div",{className:"status-circle-wrapper",children:(0,jsx_runtime.jsx)("div",{className:`status-circle ${StatusCssColorClass[selfAssignedStatus]}`})}),withTooltip&&(0,jsx_runtime.jsx)(Tooltip.Z,{text:`${firstName} ${lastName} ${imported?"[ghost member]":""}`})]})}Avatar_Avatar.displayName="Avatar";const components_Avatar_Avatar=Avatar_Avatar;try{Avatar_Avatar.displayName="Avatar",Avatar_Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"small-medium"'},{value:'"medium-large"'}]}},firstName:{defaultValue:null,description:"",name:"firstName",required:!0,type:{name:"string"}},lastName:{defaultValue:null,description:"",name:"lastName",required:!0,type:{name:"string"}},avatarUrl:{defaultValue:null,description:"",name:"avatarUrl",required:!0,type:{name:"string"}},highlighted:{defaultValue:null,description:"",name:"highlighted",required:!1,type:{name:"boolean"}},disconnected:{defaultValue:null,description:"",name:"disconnected",required:!1,type:{name:"boolean"}},clickable:{defaultValue:null,description:"",name:"clickable",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},imported:{defaultValue:null,description:"",name:"imported",required:!1,type:{name:"boolean"}},withStatus:{defaultValue:null,description:"",name:"withStatus",required:!1,type:{name:"boolean"}},withWhiteBorder:{defaultValue:null,description:"",name:"withWhiteBorder",required:!1,type:{name:"boolean"}},withStatusBorder:{defaultValue:null,description:"",name:"withStatusBorder",required:!1,type:{name:"boolean"}},selfAssignedStatus:{defaultValue:null,description:"",name:"selfAssignedStatus",required:!1,type:{name:"string"}},withTooltip:{defaultValue:null,description:"",name:"withTooltip",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar_Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _images_tooltip_triangle_top_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/images/tooltip-triangle-top.svg"),_images_tooltip_triangle_bottom_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/images/tooltip-triangle-bottom.svg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/components/Tooltip/Tooltip.scss"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Tooltip=({text,top,noTriangle,allowWrapping,noTransition})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:`tooltip-wrapper ${top?"top":""} ${allowWrapping?"allow-wrapping":""} ${noTransition?"":"with-transition"}`,children:[!top&&!noTriangle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{className:"tooltip-triangle-on-top",src:_images_tooltip_triangle_top_svg__WEBPACK_IMPORTED_MODULE_1__}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"tooltip-text-wrapper",children:`${text}`}),top&&!noTriangle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{className:"tooltip-triangle-on-bottom",src:_images_tooltip_triangle_bottom_svg__WEBPACK_IMPORTED_MODULE_2__})]});Tooltip.displayName="Tooltip";const __WEBPACK_DEFAULT_EXPORT__=Tooltip;try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"boolean"}},noTriangle:{defaultValue:null,description:"",name:"noTriangle",required:!1,type:{name:"boolean"}},allowWrapping:{defaultValue:null,description:"",name:"allowWrapping",required:!1,type:{name:"boolean"}},noTransition:{defaultValue:null,description:"",name:"noTransition",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{AY:()=>STATEMENT_PLACEHOLDER_COLOR,BN:()=>TOP_PRIORITY_GLOW_COLOR,E1:()=>DESCENDANTS_ACHIEVEMENT_STATUS_DEFAULT_FONT_COLOR,Fc:()=>AVATAR_STROKE_COLOR,Fe:()=>PROGRESS_BAR_BACKGROUND_COLOR,KE:()=>STATEMENT_FONT_COLOR,OU:()=>pickColorForString,Or:()=>ACHIEVED_BACKGROUND_COLOR,S4:()=>PROGRESS_BAR_FOREGROUND_COLOR,Sf:()=>NOT_ACHIEVED_BORDER_COLOR,Uw:()=>IN_BREAKDOWN_BORDER_COLOR,aQ:()=>NOT_ACHIEVED_BACKGROUND_COLOR,ar:()=>DESCENDANTS_ACHIEVEMENT_STATUS_ACHIEVED_FONT_COLOR,dw:()=>DEFAULT_OUTCOME_BACKGROUND_COLOR,e5:()=>ACHIEVED_BORDER_COLOR,i5:()=>DEFAULT_OUTCOME_BORDER_COLOR,lb:()=>SELECTED_COLOR,oM:()=>TAGS_TAG_FONT_COLOR,s$:()=>TIME_ASSIGNEES_PLACEHOLDER_COLOR,uz:()=>AVATAR_INITIALS_TEXT_COLOR,wt:()=>TIME_TEXT_COLOR});const colorPalette=["#ED4C67","#F79F1F","#FDA7DF","#12CBC4","#A3CB38","#1289A7","#D980FA","#B53471","#EE5A24","#009432","#0652DD","#9980FA","#833471","#006266","#1B1464","#5758BB","#6F1E51"];const pickColorForString=string=>{let index=function sumChars(str){let sum=0;for(let i=0;i<str.length;i++)sum+=str.charCodeAt(i);return sum}(string)%colorPalette.length;return colorPalette[index]},SELECTED_COLOR="#344cff",TOP_PRIORITY_GLOW_COLOR="#334CF8",STATEMENT_FONT_COLOR="#222222",STATEMENT_PLACEHOLDER_COLOR="#CECECE",DEFAULT_OUTCOME_BACKGROUND_COLOR="#FFFFFF",NOT_ACHIEVED_BACKGROUND_COLOR="#F7F5EF",ACHIEVED_BACKGROUND_COLOR="#E9EFE7",DEFAULT_OUTCOME_BORDER_COLOR="#FFFFFF",NOT_ACHIEVED_BORDER_COLOR="#A89958",ACHIEVED_BORDER_COLOR="#15841D",IN_BREAKDOWN_BORDER_COLOR="#C4631E",DESCENDANTS_ACHIEVEMENT_STATUS_DEFAULT_FONT_COLOR="#797979",DESCENDANTS_ACHIEVEMENT_STATUS_ACHIEVED_FONT_COLOR="#15841D",TAGS_TAG_FONT_COLOR="#FFFFFF",TIME_ASSIGNEES_PLACEHOLDER_COLOR="#B1B1B1",AVATAR_INITIALS_TEXT_COLOR="#FFFFFF",AVATAR_STROKE_COLOR="#FFFFFF",TIME_TEXT_COLOR="#797979",PROGRESS_BAR_BACKGROUND_COLOR="#D0D0D0",PROGRESS_BAR_FOREGROUND_COLOR="#334CF8"},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Avatar/Avatar.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".avatar-wrapper{transition:.2s all ease;cursor:pointer;position:relative;width:fit-content}.avatar-wrapper.imported{width:100%;height:100%;background-color:#cacaca;border-radius:50%;background-image:linear-gradient(305deg, transparent 0%, transparent 10%, white 10%, white 20%, transparent 20%, transparent 30%, white 30%, white 40%, transparent 40%, transparent 50%, white 50%, white 60%, transparent 60%, transparent 70%, white 70%, white 80%, transparent 80%, transparent 90%, white 90%, white 100%)}.avatar-wrapper:hover .tooltip-wrapper{visibility:visible;transition-delay:.9s;transition-property:visibility}.avatar-wrapper.with-border{border-radius:50%;position:relative;border-style:solid;border-width:.25rem}.avatar-wrapper.with-border.white{border-color:var(--bg-color-secondary)}.avatar-wrapper.with-border.status-color.undefined{border-color:#00d0c0}.avatar-wrapper.with-border.status-color.status-online{border-color:#00d0c0}.avatar-wrapper.with-border.status-color.status-away{border-color:#ffc400}.avatar-wrapper.with-border.status-color.status-offline{border-color:#d1d1d1}.avatar-wrapper .status-circle-wrapper{right:0;bottom:0rem;position:absolute}.avatar-wrapper .status-circle-wrapper .status-circle{border:.1825rem solid var(--bg-color-secondary);box-shadow:none;border-radius:50%}.avatar-wrapper.small{height:1.5rem;width:1.5rem}.avatar-wrapper.small .avatar,.avatar-wrapper.small .initials-avatar{height:1.5rem;width:1.5rem}.avatar-wrapper.small.with-border{border-width:.2rem}.avatar-wrapper.small .status-circle{border-width:.15rem;height:.3rem;width:.3rem;aspect-ratio:1/1}.avatar-wrapper.small-medium{height:2rem;width:2rem}.avatar-wrapper.small-medium .avatar,.avatar-wrapper.small-medium .initials-avatar{height:2rem;width:2rem;font-size:.75rem}.avatar-wrapper.small-medium.with-border{border-width:.25rem}.avatar-wrapper.small-medium .status-circle{border-width:.2rem;height:.5rem;width:.5rem}.avatar-wrapper.medium{height:2.5rem;width:2.5rem}.avatar-wrapper.medium .avatar,.avatar-wrapper.medium .initials-avatar{height:2.5rem;width:2.5rem;font-size:.875rem}.avatar-wrapper.medium.with-border{border-width:.275rem}.avatar-wrapper.medium .status-circle{border-width:.225rem;height:.525rem;width:.525rem}.avatar-wrapper.medium-large{height:2.75rem;width:2.75rem}.avatar-wrapper.medium-large .avatar,.avatar-wrapper.medium-large .initials-avatar{height:2.75rem;width:2.75rem;font-size:1rem}.avatar-wrapper.medium-large.with-border{border-width:.325rem}.avatar-wrapper.medium-large .status-circle{border-width:.25rem;height:.6rem;width:.6rem}.avatar-wrapper.large{height:3.25rem;width:3.25rem}.avatar-wrapper.large .avatar,.avatar-wrapper.large .initials-avatar{height:3.25rem;width:3.25rem;font-size:1.25rem}.avatar-wrapper.large.with-border{border-width:.375rem}.avatar-wrapper.large .status-circle{border-width:.25rem;height:.65rem;width:.65rem}.avatar-wrapper .avatar.with-status,.avatar-wrapper .initials-avatar.with-status{position:relative}.avatar-wrapper .avatar.imported,.avatar-wrapper .initials-avatar.imported{opacity:.5}.avatar-wrapper .avatar.clickable,.avatar-wrapper .initials-avatar.clickable{cursor:pointer}.avatar-wrapper .avatar.clickable:hover,.avatar-wrapper .initials-avatar.clickable:hover{opacity:.8;box-shadow:0rem 0rem 1.25rem var(--shadow-color)}.avatar-wrapper .avatar.highlighted,.avatar-wrapper .initials-avatar.highlighted{box-shadow:0 0 0 .25rem var(--text-color-link)}.avatar-wrapper .avatar.tooltip-wrapper,.avatar-wrapper .initials-avatar.tooltip-wrapper{bottom:-32px}.avatar-wrapper .avatar.disconnected,.avatar-wrapper .initials-avatar.disconnected{opacity:.6}.avatar-wrapper .avatar.disconnected:hover,.avatar-wrapper .initials-avatar.disconnected:hover{opacity:.7}.avatar-wrapper .avatar{object-fit:cover;border-radius:50%}.avatar-wrapper .initials-avatar{border-radius:50%;color:#fff;text-align:center;height:inherit;display:flex;justify-content:center;align-items:center;font:.75rem var(--font-family-primary-extrabold)}.avatar.highlighted~.avatar-wrapper.with-border.white,.initials-avatar.highlighted~.avatar-wrapper.with-border.white{border:.125rem solid var(--text-color-link)}.status-circle.status-online{background-color:#00d0c0}.status-circle.status-away{background-color:#ffc400}.status-circle.status-offline{background-color:#d1d1d1}",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Tooltip/Tooltip.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".tooltip-wrapper{position:absolute;visibility:hidden;font-size:.6875rem;line-height:1.15;white-space:nowrap;font-family:var(--font-family-primary-bold);display:flex;flex-direction:column;z-index:9999}.tooltip-wrapper.with-transition{transition:.3s all ease}.tooltip-wrapper.allow-wrapping{white-space:normal;width:100%;align-items:flex-start;font-size:.875rem}.tooltip-wrapper.allow-wrapping .tooltip-text-wrapper{padding:.5rem .75rem;border-radius:.5rem}.tooltip-wrapper:not(.allow-wrapping){bottom:-30px;left:50%;transform:translateX(-50%);align-items:center}.tooltip-wrapper.top{bottom:30px}.tooltip-wrapper .tooltip-text-wrapper{background-color:var(--text-color-link);padding:.5rem;border-radius:.25rem;color:var(--text-color-dark-bg)}.tooltip-wrapper .tooltip-triangle-on-top{width:12px;height:12px;margin-bottom:-4px}.tooltip-wrapper .tooltip-triangle-on-bottom{width:12px;height:12px;margin-top:-4px}",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/variables.scss":(module,exports,__webpack_require__)=>{var ___CSS_LOADER_API_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_GET_URL_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),___CSS_LOADER_URL_IMPORT_0___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.woff2"),___CSS_LOADER_URL_IMPORT_1___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.woff"),___CSS_LOADER_URL_IMPORT_2___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.woff2"),___CSS_LOADER_URL_IMPORT_3___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.woff"),___CSS_LOADER_URL_IMPORT_4___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.woff2"),___CSS_LOADER_URL_IMPORT_5___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.woff"),___CSS_LOADER_URL_IMPORT_6___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff2"),___CSS_LOADER_URL_IMPORT_7___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff"),___CSS_LOADER_URL_IMPORT_8___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-ExtraBold.woff2"),___CSS_LOADER_URL_IMPORT_9___=__webpack_require__("./src/fonts/plus-jakarta-sans/PlusJakartaSans-ExtraBold.woff"),___CSS_LOADER_URL_IMPORT_10___=__webpack_require__("./src/fonts/gilroy/gilroy-extrabold-webfont.woff2"),___CSS_LOADER_URL_IMPORT_11___=__webpack_require__("./src/fonts/gilroy/gilroy-extrabold-webfont.woff"),___CSS_LOADER_URL_IMPORT_12___=__webpack_require__("./src/fonts/gilroy/gilroy-light-webfont.woff2"),___CSS_LOADER_URL_IMPORT_13___=__webpack_require__("./src/fonts/gilroy/gilroy-light-webfont.woff");exports=___CSS_LOADER_API_IMPORT___(!1);var ___CSS_LOADER_URL_REPLACEMENT_0___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___),___CSS_LOADER_URL_REPLACEMENT_2___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___),___CSS_LOADER_URL_REPLACEMENT_3___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___),___CSS_LOADER_URL_REPLACEMENT_4___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___),___CSS_LOADER_URL_REPLACEMENT_5___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___),___CSS_LOADER_URL_REPLACEMENT_6___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___),___CSS_LOADER_URL_REPLACEMENT_7___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___),___CSS_LOADER_URL_REPLACEMENT_8___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___),___CSS_LOADER_URL_REPLACEMENT_9___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___),___CSS_LOADER_URL_REPLACEMENT_10___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___),___CSS_LOADER_URL_REPLACEMENT_11___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___),___CSS_LOADER_URL_REPLACEMENT_12___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___),___CSS_LOADER_URL_REPLACEMENT_13___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);exports.push([module.id,'@font-face{font-family:"PlusJakartaSans-regular";src:url('+___CSS_LOADER_URL_REPLACEMENT_0___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_1___+') format("woff");font-weight:normal;font-style:normal;word-spacing:.05em}@font-face{font-family:"PlusJakartaSans-medium";src:url('+___CSS_LOADER_URL_REPLACEMENT_2___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_3___+') format("woff");font-weight:normal;font-style:normal;word-spacing:.05em}@font-face{font-family:"PlusJakartaSans-semibold";src:url('+___CSS_LOADER_URL_REPLACEMENT_4___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_5___+') format("woff");font-weight:normal;font-style:normal;word-spacing:.05em}@font-face{font-family:"PlusJakartaSans-bold";src:url('+___CSS_LOADER_URL_REPLACEMENT_6___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_7___+') format("woff");font-weight:normal;font-style:normal;word-spacing:.05em}@font-face{font-family:"PlusJakartaSans-extrabold";src:url('+___CSS_LOADER_URL_REPLACEMENT_8___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_9___+') format("woff");font-weight:normal;font-style:normal;word-spacing:.05em}@font-face{font-family:"gilroyextrabold";src:url('+___CSS_LOADER_URL_REPLACEMENT_10___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_11___+') format("woff");font-weight:normal;font-style:normal}@font-face{font-family:"gilroylight";src:url('+___CSS_LOADER_URL_REPLACEMENT_12___+') format("woff2"),url('+___CSS_LOADER_URL_REPLACEMENT_13___+') format("woff");font-weight:normal;font-style:normal}:root{--color-virtually-transaprent: #ffffff00;--color-green-shadow: #4a604392;--shadow-brown-shadow: #8377699b;--color-silver: #bebebe;--color-green: #008414;--color-forest-green: #15841d;--color-bronze: #a89958;--color-pumpkin: #c46310;--color-topaz: #f7cf75;--color-ultramarine-blue: #344cff;--color-gray: #808080;--color-alto: #d0d0d0;--color-turquoise: #12d6c7;--color-persian-green: #00a599;--color-myrtle-green: #277670;--icon-color-light-grey: #d0d0d0;--bg-color-primary: #f7f5f3;--bg-color-secondary: #ffffff;--bg-color-secondary-read-only: #ffffff80;--bg-color-tertiary: #fbfbf9;--bg-color-hover: #f4f1ed;--bg-color-hover-semi-transparent: #f4f1eda1;--bg-color-canvas: #f4f2f0;--bg-color-popup: #ebeae7eb;--bg-color-achieved: #e9efe7;--bg-color-primary-dark: #555555;--bg-color-hover-dark: #c7beb430;--border-color-primary: #222222;--border-color-secondary: #4d4d4d;--border-color-timberwolf: #dbd7d0;--border-color-platinum: #ede7e7;--border-color-bright-gray: #efefef;--border-color-pale-silver: #c3bfba;--shadow-color: #c7beb472;--shadow-color-read-only: #c7beb437;--shadow-color-dark: #c7beb4bd;--shadow-color-hover: #c7beb4bd;--shadow-color-high-priority: #334cf8;--font-family-primary-extrabold: "PlusJakartaSans-extrabold", sans-serif;--font-family-primary-bold: "PlusJakartaSans-bold", sans-serif;--font-family-primary-semibold: "PlusJakartaSans-semibold", sans-serif;--font-family-primary-medium: "PlusJakartaSans-medium", sans-serif;--font-family-primary-regular: "PlusJakartaSans-regular", sans-serif;--font-family-secondary-extrabold: "gilroyextrabold", sans-serif;--text-color-primary: #222222;--text-color-secondary: #4d4d4d;--text-color-tertiary: #8d8c8c;--text-color-quaternary: #9d9d9d;--text-color-caption: #bcbcbc;--text-color-placeholder: #bdbdbd;--text-color-strikethrough: #aea49972;--text-color-invalid: #ff5d36;--text-color-link: #344cff;--text-color-dark-bg: #ffffff}',""]),module.exports=exports},"./src/components/Avatar/Avatar.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Avatar/Avatar.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/Tooltip/Tooltip.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Tooltip/Tooltip.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/variables.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/variables.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/fonts/gilroy/gilroy-extrabold-webfont.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/gilroy-extrabold-webfont.9d536b59.woff"},"./src/fonts/gilroy/gilroy-extrabold-webfont.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/gilroy-extrabold-webfont.eba219e4.woff2"},"./src/fonts/gilroy/gilroy-light-webfont.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/gilroy-light-webfont.ba334d23.woff"},"./src/fonts/gilroy/gilroy-light-webfont.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/gilroy-light-webfont.77d9316b.woff2"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Bold.3d6b4fa0.woff"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Bold.50cf6471.woff2"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-ExtraBold.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-ExtraBold.d59e544c.woff"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-ExtraBold.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-ExtraBold.259d19d6.woff2"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Medium.724099a1.woff"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Medium.ff53fe0e.woff2"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Regular.f344d0fa.woff"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-Regular.c4e0d187.woff2"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.woff":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-SemiBold.0c667bc0.woff"},"./src/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/PlusJakartaSans-SemiBold.dc64b89d.woff2"},"./src/images/tooltip-triangle-bottom.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/tooltip-triangle-bottom.b069de39.svg"},"./src/images/tooltip-triangle-top.svg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/tooltip-triangle-top.3cc8a920.svg"}}]);