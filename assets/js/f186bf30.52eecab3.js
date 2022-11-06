"use strict";(self.webpackChunkskydev=self.webpackChunkskydev||[]).push([[1542],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=a,b=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return t?i.createElement(b,o(o({ref:n},c),{},{components:t})):i.createElement(b,o({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3273:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=t(7462),a=(t(7294),t(3905));const r={sidebar_position:4},o="Solidity",l={unversionedId:"Web3/Solidity",id:"Web3/Solidity",title:"Solidity",description:"What is Solidity?",source:"@site/docs/Web3/Solidity.md",sourceDirName:"Web3",slug:"/Web3/Solidity",permalink:"/docs/Web3/Solidity",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Smart Contracts",permalink:"/docs/Web3/Smart Contracts"},next:{title:"Data Structures and Algorithms",permalink:"/docs/category/data-structures-and-algorithms"}},s={},u=[{value:"What is Solidity?",id:"what-is-solidity",level:2},{value:"Building in Solidity",id:"building-in-solidity",level:2},{value:"Initializing Smart Contracts",id:"initializing-smart-contracts",level:3},{value:"Variables and types",id:"variables-and-types",level:3},{value:"Functions and Loops",id:"functions-and-loops",level:3},{value:"Arrays and Strings",id:"arrays-and-strings",level:3}],c={toc:u};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"solidity"},"Solidity"),(0,a.kt)("h2",{id:"what-is-solidity"},"What is Solidity?"),(0,a.kt)("p",null,"Solidity is an object-oriented, high-level language for implementing smart contracts. It is designed to target Ethereum Virtual Machine(EVM)\nIt is statically typed, supports inheritance, libraries and complex user-defined types among other features."),(0,a.kt)("h2",{id:"building-in-solidity"},"Building in Solidity"),(0,a.kt)("h3",{id:"initializing-smart-contracts"},"Initializing Smart Contracts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// Define the compiler version you would be using\npragma solidity ^0.8.10;\n\n// Start by creating a contract named HelloWorld\ncontract HelloWorld {\n\n}\n")),(0,a.kt)("h3",{id:"variables-and-types"},"Variables and types"),(0,a.kt)("p",null,"There are 3 types of variables in Solidity"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Local",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Declared inside a function and are not stored on blockchain"))),(0,a.kt)("li",{parentName:"ul"},"State",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Declared outside a function to maintain the state of the smart contract "),(0,a.kt)("li",{parentName:"ul"},"Stored on the blockchain"))),(0,a.kt)("li",{parentName:"ul"},"Global",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Provide information about the blockchain. They are injected by the Ethereum Virtual Machine during runtime."),(0,a.kt)("li",{parentName:"ul"},"Includes things like transaction sender, block timestamp, block hash, etc."),(0,a.kt)("li",{parentName:"ul"},"Examples of global variables")))),(0,a.kt)("p",null,"The scope of variables is defined by where they are declared, not their value. Setting a local variable's value to a global variable does not make it a global variable, as it is still only accessible within it's scope."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// Define the compiler version you would be using\npragma solidity ^0.8.10;\n\n// Start by creating a contract named Variables\ncontract Variables {\n    /*\n        ******** State variables **********\n    */\n    /*\n    uint stands for unsigned integer, meaning non negative integers\n    different sizes are available. Eg\n        - uint8   ranges from 0 to 2 ** 8 - 1\n        - uint256 ranges from 0 to 2 ** 256 - 1\n    `public` means that the variable can be accessed internally\n     by the contract and can also be read by the external world\n    */\n    uint8 public u8 = 10;\n    uint public u256 = 600;\n    uint public u = 1230; // uint is an alias for uint256\n\n    /*\n    Negative numbers are allowed for int types. Eg\n    - int256 ranges from -2 ** 255 to 2 ** 255 - 1\n    */\n    int public i = -123; // int is same as int256\n\n    // address stands for an ethereum address\n    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;\n\n    // bool stands for boolean\n    bool public defaultBoo1 = false;\n\n    // Default values\n    // Unassigned variables have a default value in Solidity\n    bool public defaultBoo2; // false\n    uint public defaultUint; // 0\n    int public defaultInt; // 0\n    address public defaultAddr; // 0x0000000000000000000000000000000000000000\n\n    function doSomething() public {\n        /*\n        ******** Local variable **********\n        */\n        uint ui = 456;\n\n        /*\n        ******** Global variables **********\n        */\n\n        /*\n            block.timestamp tells us whats the timestamp for the current block\n            msg.sender tells us which address called the doSomething function\n        */\n        uint timestamp = block.timestamp; // Current block timestamp\n        address sender = msg.sender; // address of the caller\n    }\n}\n")),(0,a.kt)("h3",{id:"functions-and-loops"},"Functions and Loops"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// Define the compiler version you would be using\npragma solidity ^0.8.10;\n\n// Start by creating a contract named Conditions\ncontract Conditions {\n    // State variable to store a number\n    uint public num;\n\n    /*\n        Name of the function is set.\n        It takes in a uint and sets the state variable num.\n        It is a declared as a public function meaning\n        it can be called from within the contract and also externally.\n    */\n    function set(uint _num) public {\n        num = _num;\n    }\n\n    /*\n        Name of the function is get.\n        It returns the value of num.\n        It is declared as a view function meaning\n        that the function doesnt change the state of any variable.\n        view functions in solidity do not require gas.\n    */\n    function get() public view returns (uint) {\n        return num;\n    }\n\n    /*\n        Name of the function is foo.\n        It takes in  uint and returns an uint.\n        It compares the value of x using if/else\n    */\n    function foo(uint x) public returns (uint) {\n        if (x < 10) {\n            return 0;\n        } else if (x < 20) {\n            return 1;\n        } else {\n            return 2;\n        }\n    }\n\n    /*\n        Name of the function is loop.\n        It runs a loop till 10\n    */\n    function loop() public {\n        // for loop\n        for (uint i = 0; i < 10; i++) {\n            if (i == 3) {\n                // Skip to next iteration with continue\n                continue;\n            }\n            if (i == 5) {\n                // Exit loop with break\n                break;\n            }\n        }\n    }\n\n\n}\n")),(0,a.kt)("h3",{id:"arrays-and-strings"},"Arrays and Strings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'pragma solidity ^0.8.10;\n\ncontract Array {\n\n    // Declare a string variable which is public\n    string public greet = "Hello World!";\n    // Several ways to initialize an array\n    // Arrays initialized here are considered state variables that get stored on the blockchain\n    // These are called storage variables\n    uint[] public arr;\n    uint[] public arr2 = [1, 2, 3];\n    // Fixed sized array, all elements initialize to 0\n    uint[10] public myFixedSizeArr;\n    /*\n        Name of the function is get\n        It gets the value of element stored in an array\'s index\n    */\n    function get(uint i) public view returns (uint) {\n        return arr[i];\n    }\n\n    /*\n     Solidity can return the entire array.\n     This function gets called with and returns a uint[] memory.\n     memory - the value is stored only in memory, and not on the blockchain\n              it only exists during the time the function is being executed\n\n     Memory variables and Storage variables can be thought of as similar to RAM vs Hard Disk.\n     Memory variables exist temporarily, during function execution, whereas Storage variables\n     are persistent across function calls for the lifetime of the contract.\n     Here the array is only needed for the duration while the function executes and thus is declared as a memory variable\n    */\n    function getArr(uint[] memory _arr) public view returns (uint[] memory) {\n        return _arr;\n    }\n\n     /*\n        This function returns string memory.\n        The reason memory keyword is added is because string internally works as an array\n        Here the string is only needed while the function executes.\n    */\n    function foo() public returns (string memory) {\n        return "C";\n    }\n\n    function doStuff(uint i) public {\n        // Append to array\n        // This will increase the array length by 1.\n        arr.push(i);\n        // Remove last element from array\n        // This will decrease the array length by 1\n        arr.pop();\n        // get the length of the array\n        uint length = arr.length;\n        // Delete does not change the array length.\n        // It resets the value at index to it\'s default value,\n        // in this case it resets the value at index 1 in arr2 to 0\n        uint index = 1;\n        delete arr2[index];\n        // create array in memory, only fixed size can be created\n        uint[] memory a = new uint[](5);\n        // create string in memory\n        string memory hi = "hi";\n    }\n\n }\n')))}d.isMDXComponent=!0}}]);