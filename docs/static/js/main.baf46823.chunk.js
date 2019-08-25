(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){t.exports=n(24)},15:function(t,e,n){},22:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);n(15);var r=n(3),i=n(8),a=n(4),o=n.n(a),s=n(5),l=n(1),u=n(2),c=n(0),h=n.n(c),d=n(12),v=n.n(d);var f=function(t){var e={width:t.width,height:"15px",borderStyle:"solid",borderWidth:"1px",borderColor:"black",marginBottom:"5px"},n={float:"left",textAlign:"center",color:"white",width:"".concat(t.blackPercent,"%"),height:"100%",backgroundColor:"black"},r={float:"left",textAlign:"center",width:"".concat(100-t.blackPercent,"%"),height:"100%"};return h.a.createElement("div",{style:e},h.a.createElement("div",{style:n},t.blackInfo),h.a.createElement("div",{style:r},t.whiteInfo))},p=n(9),y=n(6),m=n(10),b=(n(22),function t(){Object(l.a)(this,t),this.stone=null,this.number=null,this.winrate=null,this.playouts=null,this.fillColor=null,this.borderWidth=null,this.borderColor=null,this.backgroundColor=null});function k(t,e){var n=[];if(t<=e)for(var r=t;r<=e;r++)n.push(r);else for(var i=t;i>=e;i--)n.push(i);return n}var g=function(t){function e(){return Object(l.a)(this,e),Object(p.a)(this,Object(y.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"index",value:function(t,e){return this.props.w*(e-1)+t-1}},{key:"renderIntersection",value:function(t,e){var n=this,r=this.props.intersections[this.index(t,e)];return h.a.createElement(w,{key:"".concat(t,"-").concat(e),onClick:function(){return n.props.onClickIntersection(t,e)},onMouseEnter:function(){return n.props.onMouseEnterIntersection(t,e)},onMouseLeave:function(){return n.props.onMouseLeaveIntersection(t,e)},stone:r.stone,number:r.number,winrate:r.winrate,playouts:r.playouts,fillColor:r.fillColor,borderColor:r.borderColor,backgroundColor:r.backgroundColor})}},{key:"render",value:function(){var t=this,e={width:this.props.width,height:this.props.height};return h.a.createElement("div",{className:"go-board",style:e},h.a.createElement("div",{className:"go-board-content"},k(parseInt(this.props.h),1).map(function(e){return h.a.createElement("div",{className:"go-row",key:e},k(1,parseInt(t.props.w)).map(function(n){return t.renderIntersection(n,e)}))})))}}]),e}(h.a.Component),w=function(t){function e(){return Object(l.a)(this,e),Object(p.a)(this,Object(y.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t;switch(this.props.stone){case"B":t="url(https://storage.googleapis.com/mimiaka-storage/mimiaka/public/images/nachiguro2.png)";break;case"W":t="url(https://storage.googleapis.com/mimiaka-storage/mimiaka/public/images/hamaguri2.png)";break;default:t=null}var e={color:"B"===this.props.stone?"white":"black",backgroundImage:t,backgroundColor:this.props.backgroundColor},n={backgroundColor:this.props.fillColor,borderWidth:this.props.borderWidth,borderColor:this.props.borderColor};return h.a.createElement("div",{className:"go-intersection",style:e,onClick:this.props.onClick,onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave},h.a.createElement("div",{className:"go-intersection-number"},this.props.number),h.a.createElement("div",{className:"go-intersection-info",style:n},h.a.createElement("div",null,this.props.winrate),h.a.createElement("div",null,this.props.playouts)))}}]),e}(h.a.PureComponent),A=g,S=n(7),I=n(13),E=n.n(I),O=0,x=1,C=2;function j(t){switch(t){case x:return C;case C:return x;default:return O}}var B=function(){function t(e){Object(l.a)(this,t),this.BOARD_SIZE=e,this.BOARD_SIZE2=e*e,this.value=0,this.marks=new Int32Array(this.BOARD_SIZE2)}return Object(u.a)(t,[{key:"clear",value:function(){this.value+=1}},{key:"isMarked",value:function(t){return this.marks[t]===this.value}},{key:"mark",value:function(t){this.marks[t]=this.value}}]),t}(),D=[[],[],[[16,4],[4,16]],[[16,4],[4,16],[16,16]],[[16,4],[4,16],[16,16],[4,4]],[[16,4],[4,16],[16,16],[4,4],[10,10]],[[16,4],[4,16],[16,16],[4,4],[16,10],[4,10]],[[16,4],[4,16],[16,16],[4,4],[16,10],[4,10],[10,10]],[[16,4],[4,16],[16,16],[4,4],[16,10],[4,10],[10,4],[10,16]],[[16,4],[4,16],[16,16],[4,4],[16,10],[4,10],[10,4],[10,16],[10,10]]],M=function(){function t(e,n){var r;if(Object(l.a)(this,t),this.BOARD_SIZE=e,this.BOARD_SIZE2=e*e,this.state=(r={},Object(S.a)(r,x,new Float32Array(this.BOARD_SIZE2)),Object(S.a)(r,C,new Float32Array(this.BOARD_SIZE2)),r),this.recent8=[],this.marker1=new B(e),this.marker2=new B(e),n>1){var i=!0,a=!1,o=void 0;try{for(var s,u=D[n][Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;this.setState(this.xyToPoint(c[0],c[1]),x)}}catch(h){a=!0,o=h}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}this.turn=C}else this.turn=x;this.ko=null}return Object(u.a)(t,null,[{key:"copy",value:function(e){var n=new t(e.BOARD_SIZE,0);return n.state[x].set(e.state[x]),n.state[C].set(e.state[C]),n.turn=e.turn,n.ko=e.ko,n}},{key:"fromSgf",value:function(t){for(var e=E.a.fastParse(t),n=Object(r.a)(e,1)[0],i=new this(parseInt(n.SZ||"19")),a=n;a._children.length>0;){var o=void 0;if(null!=(a=a._children[0]).B)o=a.B;else{if(null==a.W)continue;o=a.W}i.play(i.xyToPoint.apply(i,i.moveToXy(o)))}return i}}]),Object(u.a)(t,[{key:"moveToXy",value:function(t){if(""===t)return-1;var e="a".charCodeAt(0)-1;return[t.charCodeAt(0)-e,this.BOARD_SIZE-(t.charCodeAt(1)-e)+1]}},{key:"opponent",value:function(){return j(this.turn)}},{key:"switchTurn",value:function(){this.turn=j(this.turn)}},{key:"getState",value:function(t){return 1===this.state[x][t]?x:1===this.state[C][t]?C:O}},{key:"setState",value:function(t,e){e===O?(this.state[x][t]=0,this.state[C][t]=0):this.state[e][t]=1}},{key:"removeString",value:function(t){var e=!0,n=!1,r=void 0;try{for(var i,a=t.points[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var o=i.value;this.setState(o,O)}}catch(s){n=!0,r=s}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"captureBy",value:function(t){var e=this.opponent(),n=[],r=!0,i=!1,a=void 0;try{for(var o,s=this.adjacenciesAt(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var l=o.value;if(this.getState(l)===e){var u=this.stringAt(l);0===u.liberties.length&&(this.removeString(u),n.push.apply(n,u.points))}}}catch(c){i=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}},{key:"stringAt",value:function(t){var e=this.getState(t);if(e===O)return null;var n=j(e),r=new z;this.marker1.clear(),this.marker2.clear(),r.points.push(t),this.marker2.mark(t);for(var i=0;i<r.points.length;i++){var a=r.points[i];if(!this.marker1.isMarked(a)){this.marker1.mark(a);var o=!0,s=!1,l=void 0;try{for(var u,c=this.adjacenciesAt(a)[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var h=u.value;if(!this.marker1.isMarked(h)){var d=this.getState(h);d===e?this.marker2.isMarked(h)||(r.points.push(h),this.marker2.mark(h)):(this.marker1.mark(h),d===n?r.opponents.push(h):r.liberties.push(h))}}}catch(v){s=!0,l=v}finally{try{o||null==c.return||c.return()}finally{if(s)throw l}}}}return r}},{key:"putRecent8",value:function(t){this.recent8.unshift(t),this.recent8.length>8&&this.recent8.pop()}},{key:"play",value:function(t){if(-1===t)return this.putRecent8(t),this.switchTurn(),{turn:this.turn,point:t,ko:this.ko,captives:[]};if(t===this.ko||this.getState(t)!==O)return null;this.setState(t,this.turn);var e=this.captureBy(t),n=this.stringAt(t),r=n.liberties.length;if(0===r)return this.setState(t,O),null;var i=this.ko;1===e.length&&1===r&&1===n.points.length?this.ko=n.liberties[0]:this.ko=null,this.putRecent8(t);var a=this.turn;return this.switchTurn(),{turn:a,point:t,ko:i,captives:e,string:n}}},{key:"undoPlay",value:function(t){if(this.ko=t.ko,this.switchTurn(),-1!==t.point){this.setState(t.point,O);var e=j(t.turn),n=!0,r=!1,i=void 0;try{for(var a,o=t.captives[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;this.setState(s,e)}}catch(l){r=!0,i=l}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"isLegal",value:function(t){var e=this.play(t);return!!e&&(this.undoPlay(e),!0)}},{key:"xyToPoint",value:function(t,e){return t-1+(e-1)*this.BOARD_SIZE}},{key:"pointToXy",value:function(t){var e=Math.floor(t/this.BOARD_SIZE);return[t-e*this.BOARD_SIZE+1,e+1]}},{key:"adjacenciesAt",value:function(t){for(var e=this.pointToXy(t),n=[],r=0,i=[[0,-1],[-1,0],[1,0],[0,1]];r<i.length;r++){var a=i[r],o=e[0]+a[0],s=e[1]+a[1];o>=1&&o<=this.BOARD_SIZE&&s>=1&&s<=this.BOARD_SIZE&&n.push(this.xyToPoint(o,s))}return n}},{key:"diagonalsAt",value:function(t){for(var e=this.pointToXy(t),n=[],r=0,i=[[-1,-1],[-1,1],[1,-1],[1,-1]];r<i.length;r++){var a=i[r],o=e[0]+a[0],s=e[1]+a[1];o>=1&&o<=this.BOARD_SIZE&&s>=1&&s<=this.BOARD_SIZE&&n.push(this.xyToPoint(o,s))}return n}},{key:"canEscape",value:function(t){if(t.liberties.length>1)return!0;var e=!0,n=!1,r=void 0;try{for(var i,a=t.opponents[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var o=i.value,s=this.stringAt(o);if(1===s.liberties.length){var l=this.play(s.liberties[0]);if(!l)continue;var u=this.stringAt(t.points[0]);if(2===u.liberties.length){var c=!0,h=!1,d=void 0;try{for(var v,f=u.liberties[Symbol.iterator]();!(c=(v=f.next()).done);c=!0){var p=v.value,y=this.play(p);if(y){var m=this.canEscape(this.stringAt(u.points[0]));if(this.undoPlay(y),!m)return this.undoPlay(l),!1}}}catch(C){h=!0,d=C}finally{try{c||null==f.return||f.return()}finally{if(h)throw d}}return this.undoPlay(l),!0}return this.undoPlay(l),u.liberties.length>2}}}catch(C){n=!0,r=C}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}var b=this.play(t.liberties[0]);if(!b)return!1;if(2===b.string.liberties.length){var k=!0,g=!1,w=void 0;try{for(var A,S=b.string.liberties[Symbol.iterator]();!(k=(A=S.next()).done);k=!0){var I=A.value,E=this.play(I);if(E){var O=this.stringAt(t.points[0]),x=this.canEscape(O);if(this.undoPlay(E),!x)return this.undoPlay(b),!1}}}catch(C){g=!0,w=C}finally{try{k||null==S.return||S.return()}finally{if(g)throw w}}return this.undoPlay(b),!0}return this.undoPlay(b),1!==b.string.liberties.length}},{key:"likeEye",value:function(t){var e=this;if(this.getState(t)!==O)return!1;var n=this.adjacenciesAt(t);return!!n.every(function(t){return e.getState(t)===e.turn})&&n.every(function(t){return e.stringAt(t).liberties.length>1})}},{key:"isEyeOfTurn",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!this.likeEye(t))return!1;var n=0,r=4===this.adjacenciesAt(t).length?1:0,i=j(this.turn),a=!0,o=!1,s=void 0;try{for(var l,u=this.diagonalsAt(t)[Symbol.iterator]();!(a=(l=u.next()).done);a=!0){var c=l.value;if(this.getState(c)===i?n+=1:this.getState(c)===O&&e.indexOf(c)<0&&(e.push(t),this.isEyeOfTurn(c,e)||(n+=1),e.pop()),n>r)return!1}}catch(h){o=!0,s=h}finally{try{a||null==u.return||u.return()}finally{if(o)throw s}}return!0}},{key:"isFalseEye",value:function(t){return this.likeEye(t)&&!this.isEyeOfTurn(t)}},{key:"toString",value:function(){for(var t="",e=1;e<=this.BOARD_SIZE;e++){for(var n=1;n<=this.BOARD_SIZE;n++)switch(this.getState(this.xyToPoint(n,e))){case O:t+=".";break;case x:t+="X";break;case C:t+="O"}t+="\n"}return t}}]),t}(),z=function t(){Object(l.a)(this,t),this.points=[],this.liberties=[],this.opponents=[]},_=M,Z=function(){function t(){var e=this;Object(l.a)(this,t),this.inputDom=document.getElementById("input"),this.outputDom=document.getElementById("output"),this.outputDom.addEventListener("message",function(t){e.process(t.currentTarget.value),t.currentTarget.value=""},!1)}return Object(u.a)(t,[{key:"_command",value:function(t){this.inputDom.command.value=t,this.inputDom.dispatchEvent(new CustomEvent("submit"))}},{key:"command",value:function(t){var e=this;return new Promise(function(n,r){null==e.inputDom.command.getAttribute("disabled")&&(e.LzAnalyzeHandler=null,e.resolve=n,e.reject=r,e._command(t))})}},{key:"lzAnalyze",value:function(t,e){null==this.inputDom.command.getAttribute("disabled")&&(this.LzAnalyzeHandler=e,this._command("lz-analyze ".concat(t)))}},{key:"kataAnalyze",value:function(t,e){null==this.inputDom.command.getAttribute("disabled")&&(this.kataAnalyzeHandler=e,this._command("kata-analyze ".concat(t," ownership true")))}},{key:"process",value:function(t){t.startsWith("=")?this.resolve&&(this.resolve(t),this.resolve=null):t.startsWith("?")&&this.reject&&(this.reject(t),this.reject=null),this.LzAnalyzeHandler&&this.parseLzAnalyze(t),this.kataAnalyzeHandler&&this.parseKataAnalyze(t)}},{key:"parseLzAnalyze",value:function(t){for(var e,n=/info move ([A-Z]\d{1,2}) visits (\d+) winrate (\d+) prior (-?\d+) lcb (-?\d+) order (\d+) pv ((:? ?[A-Z]\d{1,2})+)/g,r=[];null!=(e=n.exec(t));)r.push({move:e[1],visits:parseInt(e[2]),winrate:parseInt(e[3])/1e4,prior:parseInt(e[4]),lcb:parseInt(e[5]),orer:parseInt(e[6]),pv:e[7].split(" ")});this.LzAnalyzeHandler(r)}},{key:"parseKataAnalyze",value:function(t){for(var e,n=/info move ([A-Z]\d{1,2}) visits (\d+) utility (-?\d+\.\d+(?:e-?\d+)?) radius (-?\d+\.\d+(?:e-?\d+)?) winrate (-?\d+\.\d+(?:e-?\d+)?) scoreMean (-?\d+\.\d+(?:e-?\d+)?) scoreStdev (-?\d+\.\d+(?:e-?\d+)?) prior (-?\d+\.\d+(?:e-?\d+)?) lcb (-?\d+\.\d+(?:e-?\d+)?) utilityLcb (-?\d+\.\d+(?:e-?\d+)?) order (-?\d+) pv ((?: ?[A-Z]\d{1,2})+)/g,r={info:[],ownership:[]};null!=(e=n.exec(t));)r.info.push({move:e[1],visits:parseInt(e[2]),utility:parseFloat(e[3]),radius:parseFloat(e[4]),winrate:parseFloat(e[5]),scoreMean:parseFloat(e[6]),scoreStdev:parseFloat(e[7]),prior:parseFloat(e[8]),lcb:parseFloat(e[9]),utilibyLcb:parseFloat(e[10]),order:parseInt(e[11]),pv:e[12].split(" ")});null!=(e=t.match(/ownership((?: -?\d+\.\d+(?:e-?\d+)?)+)/))&&(r.ownership=e[1].trim().split(" ")),this.kataAnalyzeHandler(r)}}]),t}();n(23);function R(t){var e=t.charCodeAt(0);return[(e<"I".charCodeAt(0)?e+1:e)-"A".charCodeAt(0),parseInt(t.slice(1))]}function P(t,e){return["@","A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T"][t]+e}function T(t,e,n){var r,i,a,o,s,l,u,c;switch(1===arguments.length&&(e=t.s,n=t.v,t=t.h),l=n*(1-e),u=n*(1-(s=6*t-(o=Math.floor(6*t)))*e),c=n*(1-(1-s)*e),o%6){case 0:r=n,i=c,a=l;break;case 1:r=u,i=n,a=l;break;case 2:r=l,i=n,a=c;break;case 3:r=l,i=u,a=n;break;case 4:r=c,i=l,a=n;break;case 5:r=n,i=l,a=u}return{r:Math.round(255*r),g:Math.round(255*i),b:Math.round(255*a)}}function F(t,e,n){1===arguments.length&&(e=t.g,n=t.b,t=t.r);var r,i=Math.max(t,e,n),a=Math.min(t,e,n),o=i-a,s=0===i?0:o/i,l=i/255;switch(i){case a:r=0;break;case t:r=e-n+o*(e<n?6:0),r/=6*o;break;case e:r=n-t+2*o,r/=6*o;break;case n:r=t-e+4*o,r/=6*o}return{h:r,s:s,v:l}}function L(t,e,n){return 1===arguments.length&&(e=(t=t.r).g,n=t.b),{r:.7*t,g:.7*e,b:.7*n}}function W(t){for(var e=new Array(t.BOARD_SIZE2),n=0;n<e.length;n++){var r=new b;switch(t.getState(n)){case x:r.stone="B";break;case C:r.stone="W"}e[n]=r}return e}var H=function(){function t(){var e=this;Object(l.a)(this,t),this.size=19,this.byoyomi=3,this.gtp=new Z,this.model=new _(this.size,0),this.candidates=[],this.candidate=null,this.info={percent:50},document.getElementById("sgf").addEventListener("paste",function(){var t=Object(s.a)(o.a.mark(function t(n){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=(n.clipboardData||window.clipboardData).getData("text"),"tmp.sgf",FS.writeFile("tmp.sgf",r),t.next=5,e.gtp.command("loadsgf ".concat("tmp.sgf"));case 5:e.model=_.fromSgf(r),e.kataAnalyze();case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),!1);var n=W(this.model);this.render(n)}return Object(u.a)(t,[{key:"lzAnalyze",value:function(){var t=this;this.gtp.lzAnalyze(100,function(e){var n;t.candidates=e,t.candidate?n=t.variationIntersections():(n=W(t.model),t.addCandidatesInfo(n,e));var r=100*(t.model.turn===x?e.winrate:1-e.winrate);t.info.percent=r,t.info.black="".concat(r.toFixed(1),"%"),t.info.white="".concat((100-r).toFixed(1),"%"),n&&t.render(n)})}},{key:"kataAnalyze",value:function(){var t=this;this.gtp.kataAnalyze(100,function(e){if(0!==e.info.length){var n;t.candidates=e.info,t.candidate?n=t.variationIntersections():(n=W(t.model),t.addCandidatesInfo(n,e.info),t.addOwnership(n,e.ownership));var r=e.info[0],i=100*(t.model.turn===x?r.winrate:1-r.winrate),a=(t.model.turn===x?r.scoreMean:1-r.scoreMean).toFixed(1);t.info.percent=i,i>=50?(t.info.black="".concat(i.toFixed(1),"%(").concat(a,")"),t.info.white="".concat((100-i).toFixed(1),"%")):(t.info.black="".concat(i.toFixed(1),"%"),t.info.white="".concat((100-i).toFixed(1),"%(").concat(-a,")")),n&&t.render(n)}})}},{key:"play",value:function(){var t=Object(s.a)(o.a.mark(function t(e,n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.model.play(this.model.xyToPoint(e,n)),this.render(W(this.model)),t.next=5,this.gtp.command("play ".concat(this.model.turn===x?"black":"white"," ").concat(P(e,n)));case 5:this.kataAnalyze(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e,n){return t.apply(this,arguments)}}()},{key:"onMouseEnterIntersection",value:function(t,e){var n=P(t,e);if(this.candidates.map(function(t){return t.move}).includes(n)){this.candidate=n;var r=this.variationIntersections();this.render(r)}}},{key:"onMouseLeaveIntersection",value:function(t,e){if(this.candidate){this.candidate=null;var n=W(this.model);this.addCandidatesInfo(n,this.candidates),this.render(n)}}},{key:"render",value:function(t){var e=this;v.a.render(h.a.createElement("div",null,h.a.createElement(f,{width:"500px",blackPercent:this.info.percent,blackInfo:this.info.black,whiteInfo:this.info.white}),h.a.createElement(A,{width:"500px",height:"500px",w:this.size,h:this.size,intersections:t,onClickIntersection:function(t,n){return e.play(t,n)},onMouseEnterIntersection:function(t,n){return e.onMouseEnterIntersection(t,n)},onMouseLeaveIntersection:function(t,n){return e.onMouseLeaveIntersection(t,n)}})),document.getElementById("root"))}},{key:"addCandidatesInfo",value:function(t,e){var n=Math.max.apply(Math,Object(i.a)(e.map(function(t){return t.visits}))),a=Math.max.apply(Math,Object(i.a)(e.map(function(t){return t.winrate}))),o=F(0,255,0).h,s=F(0,255,255).h,l=!0,u=!1,c=void 0;try{for(var h,d=e.entries()[Symbol.iterator]();!(l=(h=d.next()).done);l=!0){var v=h.value,f=Object(r.a)(v,2),p=f[0],y=f[1],m=t[this.model.xyToPoint.apply(this.model,R(y.move))];m.winrate=(100*y.winrate).toFixed(1),m.playouts=y.visits;var b=m.playouts/n,k=Math.log(b),g=0===p?s:o*Math.max(0,k/3+1),w=(32+208*Math.max(0,k/5+1))/255,A=T(g,.75,.85);if(0===p)if(y.winrate<a)m.borderWidth="2px",m.borderCoor="red";else{m.borderWidth="1px";var S=L(A);m.borderCoor="rgba(".concat(S.r,",").concat(S.g,",").concat(S.b,",").concat(w,")")}else m.winrate===a&&(m.borderWidth="2px",m.borderCoor="blue");m.fillColor="rgba(".concat(A.r,",").concat(A.g,",").concat(A.b,",").concat(w,")")}}catch(I){u=!0,c=I}finally{try{l||null==d.return||d.return()}finally{if(u)throw c}}}},{key:"variationIntersections",value:function(){var t=this,e=this.candidates.find(function(e){return e.move===t.candidate});if(!e)return null;var n=_.copy(this.model),r=!0,i=!1,a=void 0;try{for(var o,s=e.pv[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var l=o.value;n.play(n.xyToPoint.apply(n,R(l)))}}catch(g){i=!0,a=g}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var u=W(n),c=this.model.turn,h=u[n.xyToPoint.apply(n,R(e.pv[0]))];h.winrate=e.winrate.toFixed(1),h.playouts=e.visits,h.textColor=c===x?"white":"black";var d=2;c=j(c);var v=!0,f=!1,p=void 0;try{for(var y,m=e.pv.slice(1)[Symbol.iterator]();!(v=(y=m.next()).done);v=!0){var b=y.value,k=u[n.xyToPoint.apply(n,R(b))];k.number=d,k.textColor=c===x?"white":"black",c=j(c),d++}}catch(g){f=!0,p=g}finally{try{v||null==m.return||m.return()}finally{if(f)throw p}}return u}},{key:"addOwnership",value:function(t,e){if(this.model.turn===x){var n=!0,i=!1,a=void 0;try{for(var o,s=e.entries()[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var l=o.value,u=Object(r.a)(l,2),c=u[0],h=u[1];if(c>=this.model.BOARD_SIZE2)break;var d=.5*h,v=this.model.pointToXy(c),f=Object(r.a)(v,2),p=f[0],y=f[1];t[this.model.BOARD_SIZE*(this.model.BOARD_SIZE-y)+(p-1)].backgroundColor=d>0?"rgba(0,0,0,".concat(d,")"):"rgba(255,255,255,".concat(-d,")")}}catch(j){i=!0,a=j}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}else{var m=!0,b=!1,k=void 0;try{for(var g,w=e.entries()[Symbol.iterator]();!(m=(g=w.next()).done);m=!0){var A=g.value,S=Object(r.a)(A,2),I=S[0],E=S[1];if(I>=this.model.BOARD_SIZE2)break;var O=this.model.pointToXy(I),C=Object(r.a)(O,2);p=C[0],y=C[1];t[this.model.BOARD_SIZE*(this.model.BOARD_SIZE-y)+(p-1)].backgroundColor=E<0?"rgba(0,0,0,".concat(-E,")"):"rgba(255,255,255,".concat(E,")")}}catch(j){b=!0,k=j}finally{try{m||null==w.return||w.return()}finally{if(b)throw k}}}}}]),t}();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"undefined"!==typeof SharedArrayBuffer&&(window.goBoardController=new H),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.baf46823.chunk.js.map