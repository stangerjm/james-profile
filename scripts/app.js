!function(e){"use strict";var o=e.querySelector("#app");o.baseUrl="/",""===window.location.port&&(o.baseUrl="/james-profile/"),o.displayInstalledToast=function(){Polymer.dom(e).querySelector("platinum-sw-cache").disabled||Polymer.dom(e).querySelector("#caching-complete").show()},o.addEventListener("dom-change",function(){console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){}),window.addEventListener("paper-header-transform",function(o){var a=Polymer.dom(e).querySelector("#mainToolbar .app-name"),r=Polymer.dom(e).querySelector("#mainToolbar .middle-container"),t=Polymer.dom(e).querySelector("#mainToolbar .bottom-container"),n=o.detail,l=n.height-n.condensedHeight,m=Math.min(1,n.y/l),s=.5,d=l-n.y,i=l/(1-s),c=Math.max(s,d/i+s),y=1-m;Polymer.Base.transform("translate3d(0,"+100*m+"%,0)",r),Polymer.Base.transform("scale("+y+") translateZ(0)",t),Polymer.Base.transform("scale("+c+") translateZ(0)",a)})}(document);