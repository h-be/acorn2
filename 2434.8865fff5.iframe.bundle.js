/*! For license information please see 2434.8865fff5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkacorn_ui=self.webpackChunkacorn_ui||[]).push([[2434,2668,6962,5456,3039],{"../node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})},"../node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(useSourceMap){var list=[];return list.toString=function toString(){return this.map((function(item){var content=function cssWithMappingToString(item,useSourceMap){var content=item[1]||"",cssMapping=item[3];if(!cssMapping)return content;if(useSourceMap&&"function"==typeof btoa){var sourceMapping=function toComment(sourceMap){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);return"/*# ".concat(data," */")}(cssMapping),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}return[content].join("\n")}(item,useSourceMap);return item[2]?"@media ".concat(item[2]," {").concat(content,"}"):content})).join("")},list.i=function(modules,mediaQuery,dedupe){"string"==typeof modules&&(modules=[[null,modules,""]]);var alreadyImportedModules={};if(dedupe)for(var i=0;i<this.length;i++){var id=this[i][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _i=0;_i<modules.length;_i++){var item=[].concat(modules[_i]);dedupe&&alreadyImportedModules[item[0]]||(mediaQuery&&(item[2]?item[2]="".concat(mediaQuery," and ").concat(item[2]):item[2]=mediaQuery),list.push(item))}},list}},"../node_modules/css-loader/dist/runtime/getUrl.js":module=>{module.exports=function(url,options){return options||(options={}),"string"!=typeof(url=url&&url.__esModule?url.default:url)?url:(/^['"].*['"]$/.test(url)&&(url=url.slice(1,-1)),options.hash&&(url+=options.hash),/["'() \t\n]/.test(url)||options.needQuotes?'"'.concat(url.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):url)}},"../node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>index});var esm_extends=__webpack_require__("../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("../node_modules/react/index.js"),use_latest_esm=__webpack_require__("../node_modules/use-latest/dist/use-latest.esm.js"),updateRef=function updateRef(ref,value){"function"!=typeof ref?ref.current=value:ref(value)};const use_composed_ref_esm=function useComposedRef(libRef,userRef){var prevUserRef=(0,react.useRef)();return(0,react.useCallback)((function(instance){libRef.current=instance,prevUserRef.current&&updateRef(prevUserRef.current,null),prevUserRef.current=userRef,userRef&&updateRef(userRef,instance)}),[userRef])};var HIDDEN_TEXTAREA_STYLE={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},forceHiddenStyles$1=function forceHiddenStyles(node){Object.keys(HIDDEN_TEXTAREA_STYLE).forEach((function(key){node.style.setProperty(key,HIDDEN_TEXTAREA_STYLE[key],"important")}))},hiddenTextarea=null,getHeight=function getHeight(node,sizingData){var height=node.scrollHeight;return"border-box"===sizingData.sizingStyle.boxSizing?height+sizingData.borderSize:height-sizingData.paddingSize};var noop=function noop(){},SIZING_STYLE=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],isIE=!!document.documentElement.currentStyle,getSizingData$1=function getSizingData(node){var style=window.getComputedStyle(node);if(null===style)return null;var sizingStyle=function pick(props,obj){return props.reduce((function(acc,prop){return acc[prop]=obj[prop],acc}),{})}(SIZING_STYLE,style),boxSizing=sizingStyle.boxSizing;return""===boxSizing?null:(isIE&&"border-box"===boxSizing&&(sizingStyle.width=parseFloat(sizingStyle.width)+parseFloat(sizingStyle.borderRightWidth)+parseFloat(sizingStyle.borderLeftWidth)+parseFloat(sizingStyle.paddingRight)+parseFloat(sizingStyle.paddingLeft)+"px"),{sizingStyle,paddingSize:parseFloat(sizingStyle.paddingBottom)+parseFloat(sizingStyle.paddingTop),borderSize:parseFloat(sizingStyle.borderBottomWidth)+parseFloat(sizingStyle.borderTopWidth)})};function useListener(target,type,listener){var latestListener=(0,use_latest_esm.Z)(listener);react.useLayoutEffect((function(){var handler=function handler(ev){return latestListener.current(ev)};if(target)return target.addEventListener(type,handler),function(){return target.removeEventListener(type,handler)}}),[])}var _excluded=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],TextareaAutosize=function TextareaAutosize(_ref,userRef){var cacheMeasurements=_ref.cacheMeasurements,maxRows=_ref.maxRows,minRows=_ref.minRows,_ref$onChange=_ref.onChange,onChange=void 0===_ref$onChange?noop:_ref$onChange,_ref$onHeightChange=_ref.onHeightChange,onHeightChange=void 0===_ref$onHeightChange?noop:_ref$onHeightChange,props=(0,objectWithoutPropertiesLoose.Z)(_ref,_excluded),isControlled=void 0!==props.value,libRef=react.useRef(null),ref=use_composed_ref_esm(libRef,userRef),heightRef=react.useRef(0),measurementsCacheRef=react.useRef(),resizeTextarea=function resizeTextarea(){var node=libRef.current,nodeSizingData=cacheMeasurements&&measurementsCacheRef.current?measurementsCacheRef.current:getSizingData$1(node);if(nodeSizingData){measurementsCacheRef.current=nodeSizingData;var _calculateNodeHeight=function calculateNodeHeight(sizingData,value,minRows,maxRows){void 0===minRows&&(minRows=1),void 0===maxRows&&(maxRows=1/0),hiddenTextarea||((hiddenTextarea=document.createElement("textarea")).setAttribute("tabindex","-1"),hiddenTextarea.setAttribute("aria-hidden","true"),forceHiddenStyles$1(hiddenTextarea)),null===hiddenTextarea.parentNode&&document.body.appendChild(hiddenTextarea);var paddingSize=sizingData.paddingSize,borderSize=sizingData.borderSize,sizingStyle=sizingData.sizingStyle,boxSizing=sizingStyle.boxSizing;Object.keys(sizingStyle).forEach((function(_key){var key=_key;hiddenTextarea.style[key]=sizingStyle[key]})),forceHiddenStyles$1(hiddenTextarea),hiddenTextarea.value=value;var height=getHeight(hiddenTextarea,sizingData);hiddenTextarea.value=value,height=getHeight(hiddenTextarea,sizingData),hiddenTextarea.value="x";var rowHeight=hiddenTextarea.scrollHeight-paddingSize,minHeight=rowHeight*minRows;"border-box"===boxSizing&&(minHeight=minHeight+paddingSize+borderSize),height=Math.max(minHeight,height);var maxHeight=rowHeight*maxRows;return"border-box"===boxSizing&&(maxHeight=maxHeight+paddingSize+borderSize),[height=Math.min(maxHeight,height),rowHeight]}(nodeSizingData,node.value||node.placeholder||"x",minRows,maxRows),height=_calculateNodeHeight[0],rowHeight=_calculateNodeHeight[1];heightRef.current!==height&&(heightRef.current=height,node.style.setProperty("height",height+"px","important"),onHeightChange(height,{rowHeight}))}};return react.useLayoutEffect(resizeTextarea),function useWindowResizeListener(listener){useListener(window,"resize",listener)}(resizeTextarea),function useFontsLoadedListener(listener){useListener(document.fonts,"loadingdone",listener)}(resizeTextarea),react.createElement("textarea",(0,esm_extends.Z)({},props,{onChange:function handleChange(event){isControlled||resizeTextarea(),onChange(event)},ref}))},index=react.forwardRef(TextareaAutosize)},"../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isOldIE=function isOldIE(){var memo;return function memorize(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo}}(),getTarget=function getTarget(){var memo={};return function memorize(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var replaceText=function replaceText(){var textStore=[];return function replace(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}();function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function remove(){!function removeStyleElement(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function update(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}},"../node_modules/use-latest/dist/use-latest.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useLatest});var react=__webpack_require__("../node_modules/react/index.js");const use_isomorphic_layout_effect_browser_esm=react.useLayoutEffect;var useLatest=function useLatest(value){var ref=react.useRef(value);return use_isomorphic_layout_effect_browser_esm((function(){ref.current=value})),ref}}}]);