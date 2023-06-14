(self.webpackChunkacorn_ui=self.webpackChunkacorn_ui||[]).push([[2986],{"./src/api/clientSideIdHash.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function(str){var i,hash=0;if(!str||0===str.length)return hash.toString();for(i=0;i<str.length;i++)hash=(hash<<5)-hash+str.charCodeAt(i),hash|=0;return Math.abs(hash).toString().slice(0,6)}},"./src/components/AvatarsList/AvatarsList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Avatar_Avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Avatar/Avatar.tsx"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/components/AvatarsList/AvatarsList.scss"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const AvatarsList=({size="medium",profiles,profilesPresent=[],showPresence,showInviteButton,showAddButton,onClickButton,withStatus=!0})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"avatars-list-wrapper "+("small"===size?"small":"small-medium"===size?"small-medium":"medium"===size?"medium":"medium-large"===size?"medium-large":"large"===size?"large":""),children:[profiles.map((profile=>{if(!profile)return null;const isProfilePresent=!!profilesPresent.find((presentprofile=>profile.agentPubKey===presentprofile));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_1__.Z,{firstName:profile.firstName,lastName:profile.lastName,avatarUrl:profile.avatarUrl,imported:profile.isImported,selfAssignedStatus:profile.status,size,withWhiteBorder:!0,disconnected:showPresence&&!isProfilePresent,withStatus:withStatus&&isProfilePresent,clickable:!0,withTooltip:!0},profile.agentPubKey)})),(showInviteButton||showAddButton)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"avatars-list-button-wrapper",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"avatars-list-button "+("small"===size?"small":"small-medium"===size?"small-medium":"medium"===size?"medium":"medium-large"===size?"medium-large":"large"===size?"large":""),onClick:onClickButton,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.Z,{name:showInviteButton?"user-plus.svg":showAddButton?"plus.svg":"",size:"medium",className:"grey "+(showInviteButton?"invite-members":showAddButton?"add-assignees":""),withTooltip:!0,tooltipText:showInviteButton?"Invite Members":showAddButton?"Add Assignees":""})})})]});AvatarsList.displayName="AvatarsList";const __WEBPACK_DEFAULT_EXPORT__=AvatarsList;try{AvatarsList.displayName="AvatarsList",AvatarsList.__docgenInfo={description:"",displayName:"AvatarsList",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"small-medium"'},{value:'"medium-large"'}]}},profiles:{defaultValue:null,description:"",name:"profiles",required:!0,type:{name:"Profile[]"}},profilesPresent:{defaultValue:{value:"[]"},description:"",name:"profilesPresent",required:!1,type:{name:"string[]"}},showPresence:{defaultValue:null,description:"",name:"showPresence",required:!1,type:{name:"boolean"}},showInviteButton:{defaultValue:null,description:"",name:"showInviteButton",required:!1,type:{name:"boolean"}},showAddButton:{defaultValue:null,description:"",name:"showAddButton",required:!1,type:{name:"boolean"}},onClickButton:{defaultValue:null,description:"",name:"onClickButton",required:!1,type:{name:"() => void"}},withStatus:{defaultValue:{value:"true"},description:"",name:"withStatus",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AvatarsList/AvatarsList.tsx#AvatarsList"]={docgenInfo:AvatarsList.__docgenInfo,name:"AvatarsList",path:"src/components/AvatarsList/AvatarsList.tsx#AvatarsList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ExpandChevron/ExpandChevron.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/components/ExpandChevron/ExpandChevron.scss"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const ExpandChevron=({expanded,onClick,size="medium"})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:`expand-chevron-wrapper ${expanded?"expanded":""} ${"small"===size?"small":""}`,onClick,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,{name:"chevron-right.svg",size:"small",className:"light-grey"})});ExpandChevron.displayName="ExpandChevron";const __WEBPACK_DEFAULT_EXPORT__=ExpandChevron;try{ExpandChevron.displayName="ExpandChevron",ExpandChevron.__docgenInfo={description:"",displayName:"ExpandChevron",props:{expanded:{defaultValue:null,description:"",name:"expanded",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ExpandChevron/ExpandChevron.tsx#ExpandChevron"]={docgenInfo:ExpandChevron.__docgenInfo,name:"ExpandChevron",path:"src/components/ExpandChevron/ExpandChevron.tsx#ExpandChevron"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/OnClickOutside/OnClickOutside.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),use_onclickoutside__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/use-onclickoutside/dist/use-onclickoutside.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/components/OnClickOutside/OnClickOutside.scss"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const OnClickOutside=({children,onClickOutside})=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,use_onclickoutside__WEBPACK_IMPORTED_MODULE_1__.Z)(ref,onClickOutside),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{ref,children})};OnClickOutside.displayName="OnClickOutside";const __WEBPACK_DEFAULT_EXPORT__=OnClickOutside;try{OnClickOutside.displayName="OnClickOutside",OnClickOutside.__docgenInfo={description:"",displayName:"OnClickOutside",props:{onClickOutside:{defaultValue:null,description:"",name:"onClickOutside",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OnClickOutside/OnClickOutside.tsx#OnClickOutside"]={docgenInfo:OnClickOutside.__docgenInfo,name:"OnClickOutside",path:"src/components/OnClickOutside/OnClickOutside.tsx#OnClickOutside"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/OutcomeTableRow/OutcomeTableRow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>components_OutcomeTableRow_OutcomeTableRow});var react=__webpack_require__("./node_modules/react/index.js"),clientSideIdHash=__webpack_require__("./src/api/clientSideIdHash.ts"),types=__webpack_require__("./src/types/index.ts"),AvatarsList=__webpack_require__("./src/components/AvatarsList/AvatarsList.tsx"),ExpandChevron=__webpack_require__("./src/components/ExpandChevron/ExpandChevron.tsx"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),ProgressIndicatorCalculated=__webpack_require__("./src/components/ProgressIndicatorCalculated/ProgressIndicatorCalculated.tsx"),TagsList=__webpack_require__("./src/components/TagsList/TagsList.tsx");__webpack_require__("./src/components/OutcomeTableRow/OutcomeTableRow.scss");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OutcomeTableRow_OutcomeTableRow=({columnWidthPercentages,projectTags,outcome,presentMembers,filter,topPriorityOutcomes,parentExpanded,indentationLevel,expandByDefault=!1,openExpandedView,goToOutcome})=>{let[expanded,setExpanded]=(0,react.useState)(expandByDefault),match=function filterMatch(outcome,topPriorityOutcomes,filter){let keywordOrIdMatch=!0,highPriorityMatch=!0,achievementStatusMatch=!0,scopeMatch=!0,assigneesMatch=!0,tagsMatch=!0;if("keywordOrId"in filter&&(keywordOrIdMatch=!filter.keywordOrId.length||outcome.content&&outcome.content.toLowerCase().includes(filter.keywordOrId.toLowerCase())||(0,clientSideIdHash.Z)(outcome.actionHash).includes(filter.keywordOrId)),"assignees"in filter){assigneesMatch=!1;for(const assignee of filter.assignees)if((outcome.members||[]).map((m=>m.agentPubKey)).includes(assignee)){assigneesMatch=!0;break}}if("highPriority"in filter&&(highPriorityMatch=!1,topPriorityOutcomes.includes(outcome.actionHash)&&(highPriorityMatch=!0)),"achievementStatus"in filter){achievementStatusMatch=!1;for(const status of filter.achievementStatus)if(outcome.computedAchievementStatus.simple===status){achievementStatusMatch=!0;break}}if("scope"in filter){scopeMatch=!1;for(const scope of filter.scope)if(outcome.computedScope===scope){scopeMatch=!0;break}}if("tags"in filter){tagsMatch=!1;for(const tag of filter.tags)if(outcome.tags.includes(tag)){tagsMatch=!0;break}}return keywordOrIdMatch&&highPriorityMatch&&achievementStatusMatch&&scopeMatch&&assigneesMatch&&tagsMatch}(outcome,topPriorityOutcomes,filter);const specialFilterApplied="keywordOrId"in filter||"highPriority"in filter||"achievementStatus"in filter||"scope"in filter||"assignees"in filter||"tags"in filter,shouldRenderThisOutcome=!specialFilterApplied&&parentExpanded||specialFilterApplied&&match;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[shouldRenderThisOutcome&&(0,jsx_runtime.jsxs)("div",{className:"outcome-table-row-wrapper",children:[(0,jsx_runtime.jsx)("div",{className:"outcome-table-row-metadata-wrapper id-number",style:{width:columnWidthPercentages[0],minWidth:columnWidthPercentages[0]},children:(0,clientSideIdHash.Z)(outcome.actionHash)}),(0,jsx_runtime.jsxs)("div",{className:"outcome-table-row-metadata-wrapper outcome-statement-wrapper",style:{width:columnWidthPercentages[1],minWidth:columnWidthPercentages[1]},children:[(0,jsx_runtime.jsx)("div",{style:{marginLeft:2.125*indentationLevel+"rem"}}),(0,jsx_runtime.jsxs)("div",{className:"outcome-table-row-metadata-left-slot",children:[outcome.children.length>0&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(ExpandChevron.Z,{expanded,onClick:()=>{setExpanded(!expanded)},size:"medium"})}),0===outcome.children.length&&outcome.computedScope===types.ComputedScope.Small&&(0,jsx_runtime.jsx)("div",{className:"outcome-statement-icon",children:(0,jsx_runtime.jsx)(Icon.Z,{name:"leaf.svg",className:"not-hoverable"})})]}),(0,jsx_runtime.jsxs)("div",{className:"outcome-table-row-metadata-right-slot",children:[outcome.computedScope!==types.ComputedScope.Uncertain&&(0,jsx_runtime.jsx)(ProgressIndicatorCalculated.Z,{outcome}),outcome.computedScope===types.ComputedScope.Uncertain&&(0,jsx_runtime.jsx)("div",{className:"outcome-statement-icon",children:(0,jsx_runtime.jsx)(Icon.Z,{name:"uncertain.svg",className:"not-hoverable uncertain"})})]}),(0,jsx_runtime.jsx)("div",{className:"outcome-statement-text",onClick:()=>openExpandedView(outcome.actionHash),title:outcome.content,children:outcome.content})]}),(0,jsx_runtime.jsxs)("div",{className:"outcome-table-row-assignees-tags-time",children:[(0,jsx_runtime.jsx)("div",{className:"outcome-table-row-metadata-wrapper assignees",style:{width:columnWidthPercentages[2],minWidth:columnWidthPercentages[2]},children:(0,jsx_runtime.jsx)(AvatarsList.Z,{withStatus:!1,showPresence:!0,profilesPresent:presentMembers,size:"small",profiles:outcome.members||[]})}),(0,jsx_runtime.jsx)("div",{className:"outcome-table-row-metadata-wrapper tags",style:{width:columnWidthPercentages[3],minWidth:columnWidthPercentages[3]},children:(0,jsx_runtime.jsx)(TagsList.Z,{tags:projectTags,selectedTags:outcome.tags,showAddTagButton:!1})})]}),(0,jsx_runtime.jsx)("div",{className:"outcome-table-row-hover-button",onClick:()=>goToOutcome(outcome.actionHash),children:(0,jsx_runtime.jsx)(Icon.Z,{name:"map.svg",size:"small",className:"grey"})})]}),outcome.children.length>0&&outcome.children.map((outcomeChild=>(0,jsx_runtime.jsx)(OutcomeTableRow_OutcomeTableRow,{columnWidthPercentages,projectTags,outcome:outcomeChild,presentMembers,filter,topPriorityOutcomes,parentExpanded:expanded&&parentExpanded,indentationLevel:indentationLevel+1,openExpandedView,goToOutcome},outcomeChild.actionHash)))]})},components_OutcomeTableRow_OutcomeTableRow=OutcomeTableRow_OutcomeTableRow;try{OutcomeTableRow_OutcomeTableRow.displayName="OutcomeTableRow",OutcomeTableRow_OutcomeTableRow.__docgenInfo={description:"",displayName:"OutcomeTableRow",props:{columnWidthPercentages:{defaultValue:null,description:"",name:"columnWidthPercentages",required:!0,type:{name:"[string, string, string, string, string]"}},projectTags:{defaultValue:null,description:"",name:"projectTags",required:!0,type:{name:"WithActionHash<Tag>[]"}},outcome:{defaultValue:null,description:"",name:"outcome",required:!0,type:{name:"ComputedOutcome"}},filter:{defaultValue:null,description:"",name:"filter",required:!0,type:{name:"OutcomeTableFilter"}},topPriorityOutcomes:{defaultValue:null,description:"",name:"topPriorityOutcomes",required:!0,type:{name:"string[]"}},presentMembers:{defaultValue:null,description:"",name:"presentMembers",required:!0,type:{name:"string[]"}},parentExpanded:{defaultValue:null,description:"",name:"parentExpanded",required:!0,type:{name:"boolean"}},indentationLevel:{defaultValue:null,description:"",name:"indentationLevel",required:!0,type:{name:"number"}},expandByDefault:{defaultValue:{value:"false"},description:"",name:"expandByDefault",required:!1,type:{name:"boolean"}},openExpandedView:{defaultValue:null,description:"",name:"openExpandedView",required:!0,type:{name:"(actionHash: string) => void"}},goToOutcome:{defaultValue:null,description:"",name:"goToOutcome",required:!0,type:{name:"(actionHash: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OutcomeTableRow/OutcomeTableRow.tsx#OutcomeTableRow"]={docgenInfo:OutcomeTableRow_OutcomeTableRow.__docgenInfo,name:"OutcomeTableRow",path:"src/components/OutcomeTableRow/OutcomeTableRow.tsx#OutcomeTableRow"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TagsList/TagsList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Tag_Tag__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Tag/Tag.tsx"),_TagPicker_TagPicker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/TagPicker/TagPicker.tsx"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/Icon.tsx"),_OnClickOutside_OnClickOutside__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./src/components/TagsList/TagsList.scss"),__webpack_require__("./src/components/OnClickOutside/OnClickOutside.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TagsList=({tags,selectedTags,onChange,onCreateTag,onUpdateExistingTag,showAddTagButton})=>{const[isOpenTagPicker,setIsOpenTagPicker]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[filterText,setFilterText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),onClose=()=>{setIsOpenTagPicker(!1),setFilterText("")};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"tags-list-wrapper",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_OnClickOutside_OnClickOutside__WEBPACK_IMPORTED_MODULE_5__.Z,{onClickOutside:onClose,children:showAddTagButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"add-tag-button-with-tag-picker",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"add-tag-button "+(isOpenTagPicker?"active":""),onClick:()=>{setIsOpenTagPicker(!isOpenTagPicker),setFilterText("")},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"add-tag-button-icons",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.Z,{name:"plus.svg",className:"grey not-hoverable"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.Z,{name:"tag.svg",className:"grey not-hoverable"})]}),0===selectedTags.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{children:"Add a tag"}),selectedTags.length>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{})]}),isOpenTagPicker&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_TagPicker_TagPicker__WEBPACK_IMPORTED_MODULE_2__.Z,{tags,selectedTags,onChange,onCreateTag,onUpdateExistingTag,filterText,setFilterText,onClose})]})}),selectedTags.map((tagActionHash=>{const tag=tags.find((tag=>tag.actionHash===tagActionHash));if(tag)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"tags-list-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Tag_Tag__WEBPACK_IMPORTED_MODULE_1__.Z,{text:tag.text,backgroundColor:tag.backgroundColor})},tagActionHash)}))]})};TagsList.displayName="TagsList";const __WEBPACK_DEFAULT_EXPORT__=TagsList;try{TagsList.displayName="TagsList",TagsList.__docgenInfo={description:"",displayName:"TagsList",props:{tags:{defaultValue:null,description:"",name:"tags",required:!0,type:{name:"WithActionHash<Tag>[]"}},selectedTags:{defaultValue:null,description:"",name:"selectedTags",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(newSelectedTags: string[]) => void"}},onCreateTag:{defaultValue:null,description:"",name:"onCreateTag",required:!1,type:{name:"(text: string, backgroundColor: string) => Promise<void>"}},onUpdateExistingTag:{defaultValue:null,description:"",name:"onUpdateExistingTag",required:!1,type:{name:"(actionHash: string, text: string, backgroundColor: string) => Promise<void>"}},showAddTagButton:{defaultValue:null,description:"",name:"showAddTagButton",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TagsList/TagsList.tsx#TagsList"]={docgenInfo:TagsList.__docgenInfo,name:"TagsList",path:"src/components/TagsList/TagsList.tsx#TagsList"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AvatarsList/AvatarsList.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".avatars-list-wrapper{display:flex;flex-direction:row;align-items:center;display:flex}.avatars-list-wrapper.small .avatar,.avatars-list-wrapper.small .initials-avatar,.avatars-list-wrapper.small .avatars-list-button,.avatars-list-wrapper.small .icon{height:1.5rem;width:1.5rem}.avatars-list-wrapper.small .icon{padding:.35rem}.avatars-list-wrapper.small-medium .avatar,.avatars-list-wrapper.small-medium .initials-avatar,.avatars-list-wrapper.small-medium .avatars-list-button,.avatars-list-wrapper.small-medium .icon{height:2rem;width:2rem}.avatars-list-wrapper.small-medium .icon{padding:.375rem}.avatars-list-wrapper.medium .avatar,.avatars-list-wrapper.medium .initials-avatar,.avatars-list-wrapper.medium .avatars-list-button,.avatars-list-wrapper.medium .icon{height:2.5rem;width:2.5rem}.avatars-list-wrapper.medium .icon{padding:.5rem}.avatars-list-wrapper.medium-large .avatar,.avatars-list-wrapper.medium-large .initials-avatar,.avatars-list-wrapper.medium-large .avatars-list-button,.avatars-list-wrapper.medium-large .icon{height:2.75rem;width:2.75rem}.avatars-list-wrapper.medium-large .icon{padding:.625rem}.avatars-list-wrapper.large .avatar,.avatars-list-wrapper.large .initials-avatar,.avatars-list-wrapper.large .avatars-list-button,.avatars-list-wrapper.large .icon{height:3.25rem;width:3.25rem}.avatars-list-wrapper.large .icon.invite-members{padding:.725rem}.avatars-list-wrapper .avatar-wrapper:not(:first-child){margin-left:-0.5rem}.avatars-list-wrapper .avatar-wrapper.small:not(:first-child){margin-left:-0.425rem}.avatars-list-wrapper .avatar-wrapper.large:not(:first-child){margin-left:-0.625rem}.avatars-list-wrapper .avatars-list-button-wrapper{border:.25rem solid #fff;border-radius:50%;z-index:1;margin-left:-0.5rem}.avatars-list-wrapper .avatars-list-button-wrapper .avatars-list-button{border-radius:50%;text-align:center;cursor:pointer;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:var(--bg-color-primary);transition:.2s all ease}.avatars-list-wrapper .avatars-list-button-wrapper .avatars-list-button:hover{opacity:.8}.avatars-list-wrapper .avatars-list-button-wrapper .avatars-list-button:hover .inner-icon{background-color:var(--text-color-link)}.avatars-list-wrapper .avatars-list-button-wrapper .avatars-list-button .icon:hover .inner-icon{background-color:var(--text-color-primary)}",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ExpandChevron/ExpandChevron.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".expand-chevron-wrapper{padding:.25rem;cursor:pointer;transition:.2s background-color ease-in;border-radius:.5rem;aspect-ratio:1/1;display:flex;align-items:center;justify-content:center}.expand-chevron-wrapper.small{transform:scale(0.9);padding:.125;border-radius:.375rem}.expand-chevron-wrapper:hover{background-color:var(--bg-color-secondary)}.expand-chevron-wrapper:hover .icon .inner-icon{background-color:var(--text-color-primary)}.expand-chevron-wrapper .icon{transition:transform .2s ease-in;padding:0;width:1.25rem;height:1.25rem}.expand-chevron-wrapper.expanded .icon{transform:rotateX(90deg);-webkit-transform:rotate(90deg)}",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/OnClickOutside/OnClickOutside.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,"",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/OutcomeTableRow/OutcomeTableRow.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".outcome-table-row-wrapper{position:relative;display:flex;flex-direction:row;border-bottom:.125rem solid var(--border-color-bright-gray)}.outcome-table-row-wrapper:hover{background-color:var(--bg-color-hover-semi-transparent)}.outcome-table-row-wrapper .outcome-table-row-assignees-tags-time{display:flex;flex-direction:row;flex:1}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper{box-sizing:border-box;border-right:.125rem solid var(--border-color-bright-gray);display:flex;flex-direction:row;align-items:center;font:1rem var(--font-family-primary-medium);padding:.5rem 1rem}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper:last-child{border-right:none}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper.id-number{padding:.75rem .5rem;font-size:.875rem;color:var(--text-color-caption)}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper.outcome-statement-wrapper{display:flex;flex-direction:row;align-items:center;font:1rem var(--font-family-primary-medium);color:var(--text-color-secondary);padding:.375rem .25rem .375rem .5rem}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper.outcome-statement-wrapper:hover{color:var(--text-color-primary)}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper.outcome-statement-wrapper .outcome-table-row-metadata-left-slot{width:2rem;display:flex;align-items:center;justify-content:center}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper.outcome-statement-wrapper .outcome-table-row-metadata-right-slot{width:2rem;display:flex;align-items:center;justify-content:center}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper.outcome-statement-wrapper .expand-chevron-wrapper{margin-right:.25rem;max-height:1.25rem}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper.outcome-statement-wrapper .progress-indicator-wrapper{margin-right:.425rem;width:1.125rem;height:1.125rem;aspect-ratio:1/1;display:flex;flex-direction:row;align-items:center;justify-content:center}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper.outcome-statement-wrapper .outcome-statement-icon{margin-right:.425rem}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper.outcome-statement-wrapper .outcome-statement-icon .icon{padding:0;width:1.125rem;height:1.125rem}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper.outcome-statement-wrapper .outcome-statement-text{cursor:pointer;transition:.2s all ease;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;line-height:1.45;flex:1}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper.outcome-statement-wrapper .outcome-statement-text:hover{color:var(--color-ultramarine-blue);text-decoration:underline}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper.time{font-size:.875rem;color:var(--text-color-tertiary)}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper.assignees{padding:.25rem 1rem}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper.tags{padding:.25rem 1rem}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper.tags .tags-list-item{margin-bottom:.125rem}.outcome-table-row-wrapper .outcome-table-row-metadata-wrapper.tags .tags-list-item .tag-wrapper{padding:.125rem .625rem .15rem .625rem;font-size:.7rem}.outcome-table-row-wrapper .outcome-table-row-hover-button{position:absolute;right:.5rem;top:.25rem;padding:.325rem;border-radius:.5rem;background-color:transparent;transition:.2s all ease-in-out}.outcome-table-row-wrapper .outcome-table-row-hover-button .icon{display:none}.outcome-table-row-wrapper:hover .outcome-table-row-hover-button{background-color:var(--bg-color-secondary)}.outcome-table-row-wrapper:hover .outcome-table-row-hover-button:hover .icon .inner-icon{background-color:var(--border-color-primary)}.outcome-table-row-wrapper:hover .outcome-table-row-hover-button .icon{display:flex}",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TagsList/TagsList.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".tags-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap}.tags-list-wrapper .tags-list-item{margin:0 .3rem .375rem 0}.tags-list-wrapper .add-tag-button-with-tag-picker{position:relative}.tags-list-wrapper .add-tag-button-with-tag-picker .add-tag-button{display:flex;flex-direction:row;align-items:center;margin:0 .275rem .375rem 0;font:.875rem var(--font-family-primary-bold);color:var(--text-color-quaternary);background-color:var(--bg-color-hover);letter-spacing:.02rem;padding:.25rem .5rem;border-radius:.5rem;width:fit-content;cursor:pointer;transition:all .2s ease}.tags-list-wrapper .add-tag-button-with-tag-picker .add-tag-button .icon .inner-icon{transition:.2s ease}.tags-list-wrapper .add-tag-button-with-tag-picker .add-tag-button:hover,.tags-list-wrapper .add-tag-button-with-tag-picker .add-tag-button.active{color:var(--text-color-secondary);background-color:var(--border-color-timberwolf)}.tags-list-wrapper .add-tag-button-with-tag-picker .add-tag-button:hover .icon .inner-icon,.tags-list-wrapper .add-tag-button-with-tag-picker .add-tag-button.active .icon .inner-icon{background-color:var(--text-color-secondary)}.tags-list-wrapper .add-tag-button-with-tag-picker .add-tag-button span{user-select:none}.tags-list-wrapper .add-tag-button-with-tag-picker .add-tag-button .add-tag-button-icons{display:flex;flex-direction:row;align-items:center;margin-right:.375rem;cursor:pointer}.tags-list-wrapper .add-tag-button-with-tag-picker .add-tag-button .add-tag-button-icons .icon{width:1rem;height:1rem;padding:0;cursor:pointer}.tags-list-wrapper .add-tag-button-with-tag-picker .tag-picker-wrapper{position:absolute;left:0;z-index:2}",""]),module.exports=exports},"./src/components/AvatarsList/AvatarsList.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AvatarsList/AvatarsList.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/ExpandChevron/ExpandChevron.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ExpandChevron/ExpandChevron.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/OnClickOutside/OnClickOutside.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/OnClickOutside/OnClickOutside.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/OutcomeTableRow/OutcomeTableRow.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/OutcomeTableRow/OutcomeTableRow.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/TagsList/TagsList.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TagsList/TagsList.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./node_modules/use-latest/dist/use-latest.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>use_latest_esm});var react=__webpack_require__("./node_modules/react/index.js");const use_isomorphic_layout_effect_browser_esm=react.useLayoutEffect;const use_latest_esm=function useLatest(value){var ref=(0,react.useRef)(value);return use_isomorphic_layout_effect_browser_esm((function(){ref.current=value})),ref}},"./node_modules/use-onclickoutside/dist/use-onclickoutside.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>use_onclickoutside_browser_esm});var supportsPassiveEvents,react=__webpack_require__("./node_modules/react/index.js");const are_passive_events_supported_esm_browser=function arePassiveEventsSupported(){if(void 0!==supportsPassiveEvents)return supportsPassiveEvents;var passive=!1,options={get passive(){passive=!0}},noop=function noop(){};return window.addEventListener("t",noop,options),window.removeEventListener("t",noop,options),supportsPassiveEvents=passive,passive};var use_latest_esm=__webpack_require__("./node_modules/use-latest/dist/use-latest.esm.js"),events=["mousedown","touchstart"],getOptions=function getOptions(event){if("touchstart"===event)return are_passive_events_supported_esm_browser()?{passive:!0}:void 0};const use_onclickoutside_browser_esm=function useOnClickOutside(ref,handler){var handlerRef=(0,use_latest_esm.Z)(handler);(0,react.useEffect)((function(){if(handler){var listener=function listener(event){ref.current&&handlerRef.current&&!ref.current.contains(event.target)&&handlerRef.current(event)};return events.forEach((function(event){document.addEventListener(event,listener,getOptions(event))})),function(){events.forEach((function(event){document.removeEventListener(event,listener,getOptions(event))}))}}}),[!handler])}}}]);