"use strict";(self.webpackChunkskydev=self.webpackChunkskydev||[]).push([[6047],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:5},a="Sliding Window",l={unversionedId:"DSA/Sliding_Window",id:"DSA/Sliding_Window",title:"Sliding Window",description:"Introduction",source:"@site/docs/DSA/Sliding_Window.md",sourceDirName:"DSA",slug:"/DSA/Sliding_Window",permalink:"/Skydev/docs/DSA/Sliding_Window",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"LinkedList",permalink:"/Skydev/docs/DSA/LinkedList"},next:{title:"Binary Search",permalink:"/Skydev/docs/DSA/Binary_Search"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Resources",id:"resources",level:2},{value:"Videos",id:"videos",level:2},{value:"Questions",id:"questions",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sliding-window"},"Sliding Window"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This is super useful when you have questions regarding sub-strings and sub-sequences for arrays\nand strings. Think of it as a window which slides to the right or left as we iterate through the\nstring/array.",(0,i.kt)("br",{parentName:"p"}),"\n","Sliding window is a 2 pointer problem where the front pointer explores the array and the back pointer closes in on the window. Here\u2019s an awesome visualization to understand it more: ",(0,i.kt)("a",{parentName:"p",href:"https://algorithm-visualizer.org/dynamic-programming/sliding-window"},"Dynamic Programming - Sliding Window")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/leetcode-patterns/leetcode-pattern-2-sliding-windows-for-strings-e19af105316b"}," Leetcode Pattern 2 | Sliding Windows for Strings | by csgator | Leetcode Patterns")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/92007/sliding-window-algorithm-template-to-solve-all-the-leetcode-substring-search-problem"},"Sliding Window algorithm template to solve all the Leetcode substring search problems"))),(0,i.kt)("h2",{id:"videos"},"Videos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/jM2dhDPYMQM"},"Sliding Window Technique + 4 Questions - Algorithms")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/4i6-9IzQHwo"},"Sliding Window Algorithm - Longest Substring Without Repeating Characters (LeetCode)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/eS6PZLjoaq8"},"Minimum Window Substring: Utilizing Two Pointers & Tracking Character Mappings With A\nHashtable"))),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/maximum-average-subarray-i/"},"Maximum Average Subarray I")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/contains-duplicate-ii/"},"Contains Duplicate II")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/fruit-into-baskets/"},"Fruit Into Baskets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/max-consecutive-ones-iii/"},"Max Consecutive Ones III")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/minimum-window-substring/"},"Minimum Window Substring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/sliding-window-maximum/"},"Sliding Window Maximum"))))}c.isMDXComponent=!0}}]);