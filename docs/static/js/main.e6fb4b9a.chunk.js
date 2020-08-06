/*! For license information please see main.e6fb4b9a.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-lizzie"]=this["webpackJsonpreact-lizzie"]||[]).push([[0],{18:function(t,e,n){t.exports=n(26)},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),i=n(16),s=n(10),o=n.n(s),c=n(12),l=n(2),u=n(3),h=n(11),p=n(9),d=n(8);var f=function(t){var e={width:t.width,height:"15px",borderStyle:"solid",borderWidth:"1px",borderColor:"black",marginBottom:"5px"},n={float:"left",textAlign:"center",color:"white",width:"".concat(t.blackPercent,"%"),height:"100%",backgroundColor:"black"},a={float:"left",textAlign:"center",width:"".concat(100-t.blackPercent,"%"),height:"100%"};return r.a.createElement("div",{style:e},r.a.createElement("div",{style:n},t.blackInfo),r.a.createElement("div",{style:a},t.whiteInfo))},v=n(4),y=n(1),m=n(14),b=(n(24),n(5)),k=n(13),g=n(17),w=n.n(g);function A(t){switch(t){case 1:return 2;case 2:return 1;default:return 0}}function O(t){var e=t.charCodeAt(0);return[(e<"I".charCodeAt(0)?e+1:e)-"A".charCodeAt(0),parseInt(t.slice(1))]}function E(t,e){return["@","A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T"][t]+e}var j=function(){function t(e){Object(l.a)(this,t),this.BOARD_SIZE=e,this.BOARD_SIZE2=e*e,this.value=0,this.marks=new Int32Array(this.BOARD_SIZE2)}return Object(u.a)(t,[{key:"clear",value:function(){this.value+=1}},{key:"isMarked",value:function(t){return this.marks[t]===this.value}},{key:"mark",value:function(t){this.marks[t]=this.value}}]),t}(),S=[[],[],[[16,4],[4,16]],[[16,4],[4,16],[16,16]],[[16,4],[4,16],[16,16],[4,4]],[[16,4],[4,16],[16,16],[4,4],[10,10]],[[16,4],[4,16],[16,16],[4,4],[16,10],[4,10]],[[16,4],[4,16],[16,16],[4,4],[16,10],[4,10],[10,10]],[[16,4],[4,16],[16,16],[4,4],[16,10],[4,10],[10,4],[10,16]],[[16,4],[4,16],[16,16],[4,4],[16,10],[4,10],[10,4],[10,16],[10,10]]],x=function(){function t(e,n){var a;if(Object(l.a)(this,t),this.BOARD_SIZE=e,this.BOARD_SIZE2=e*e,this.state=(a={},Object(k.a)(a,1,new Float32Array(this.BOARD_SIZE2)),Object(k.a)(a,2,new Float32Array(this.BOARD_SIZE2)),a),this.recent8=[],this.marker1=new j(e),this.marker2=new j(e),n>1){var r,i=Object(y.a)(S[n]);try{for(i.s();!(r=i.n()).done;){var s=r.value;this.setState(this.xyToPoint(s[0],s[1]),1)}}catch(o){i.e(o)}finally{i.f()}this.turn=2}else this.turn=1;this.ko=null}return Object(u.a)(t,null,[{key:"copy",value:function(e){var n=new t(e.BOARD_SIZE,0);return n.state[1].set(e.state[1]),n.state[2].set(e.state[2]),n.turn=e.turn,n.ko=e.ko,n}},{key:"fromSgf",value:function(t){for(var e=w.a.fastParse(t),n=Object(v.a)(e,1)[0],a=new this(parseInt(n.SZ||"19")),r=n;r._children.length>0;){var i=void 0;if(null!=(r=r._children[0]).B)i=r.B;else{if(null==r.W)continue;i=r.W}a.play(a.xyToPoint.apply(a,a.moveToXy(i)))}return a}}]),Object(u.a)(t,[{key:"moveToXy",value:function(t){if(""===t)return-1;var e="a".charCodeAt(0)-1;return[t.charCodeAt(0)-e,this.BOARD_SIZE-(t.charCodeAt(1)-e)+1]}},{key:"opponent",value:function(){return A(this.turn)}},{key:"switchTurn",value:function(){this.turn=A(this.turn)}},{key:"getState",value:function(t){return 1===this.state[1][t]?1:1===this.state[2][t]?2:0}},{key:"setState",value:function(t,e){0===e?(this.state[1][t]=0,this.state[2][t]=0):this.state[e][t]=1}},{key:"removeString",value:function(t){var e,n=Object(y.a)(t.points);try{for(n.s();!(e=n.n()).done;){var a=e.value;this.setState(a,0)}}catch(r){n.e(r)}finally{n.f()}}},{key:"captureBy",value:function(t){var e,n=this.opponent(),a=[],r=Object(y.a)(this.adjacenciesAt(t));try{for(r.s();!(e=r.n()).done;){var i=e.value;if(this.getState(i)===n){var s=this.stringAt(i);0===s.liberties.length&&(this.removeString(s),a.push.apply(a,s.points))}}}catch(o){r.e(o)}finally{r.f()}return a}},{key:"stringAt",value:function(t){var e=this.getState(t);if(0===e)return null;var n=A(e),a=new I;this.marker1.clear(),this.marker2.clear(),a.points.push(t),this.marker2.mark(t);for(var r=0;r<a.points.length;r++){var i=a.points[r];if(!this.marker1.isMarked(i)){this.marker1.mark(i);var s,o=Object(y.a)(this.adjacenciesAt(i));try{for(o.s();!(s=o.n()).done;){var c=s.value;if(!this.marker1.isMarked(c)){var l=this.getState(c);l===e?this.marker2.isMarked(c)||(a.points.push(c),this.marker2.mark(c)):(this.marker1.mark(c),l===n?a.opponents.push(c):a.liberties.push(c))}}}catch(u){o.e(u)}finally{o.f()}}}return a}},{key:"putRecent8",value:function(t){this.recent8.unshift(t),this.recent8.length>8&&this.recent8.pop()}},{key:"play",value:function(t){if(-1===t)return this.putRecent8(t),this.switchTurn(),{turn:this.turn,point:t,ko:this.ko,captives:[]};if(t===this.ko||0!==this.getState(t))return null;this.setState(t,this.turn);var e=this.captureBy(t),n=this.stringAt(t),a=n.liberties.length;if(0===a)return this.setState(t,0),null;var r=this.ko;1===e.length&&1===a&&1===n.points.length?this.ko=n.liberties[0]:this.ko=null,this.putRecent8(t);var i=this.turn;return this.switchTurn(),{turn:i,point:t,ko:r,captives:e,string:n}}},{key:"undoPlay",value:function(t){if(this.ko=t.ko,this.switchTurn(),-1!==t.point){this.setState(t.point,0);var e,n=A(t.turn),a=Object(y.a)(t.captives);try{for(a.s();!(e=a.n()).done;){var r=e.value;this.setState(r,n)}}catch(i){a.e(i)}finally{a.f()}}}},{key:"isLegal",value:function(t){var e=this.play(t);return!!e&&(this.undoPlay(e),!0)}},{key:"xyToPoint",value:function(t,e){return t-1+(e-1)*this.BOARD_SIZE}},{key:"pointToXy",value:function(t){var e=Math.floor(t/this.BOARD_SIZE);return[t-e*this.BOARD_SIZE+1,e+1]}},{key:"adjacenciesAt",value:function(t){for(var e=this.pointToXy(t),n=[],a=0,r=[[0,-1],[-1,0],[1,0],[0,1]];a<r.length;a++){var i=r[a],s=e[0]+i[0],o=e[1]+i[1];s>=1&&s<=this.BOARD_SIZE&&o>=1&&o<=this.BOARD_SIZE&&n.push(this.xyToPoint(s,o))}return n}},{key:"diagonalsAt",value:function(t){for(var e=this.pointToXy(t),n=[],a=0,r=[[-1,-1],[-1,1],[1,-1],[1,-1]];a<r.length;a++){var i=r[a],s=e[0]+i[0],o=e[1]+i[1];s>=1&&s<=this.BOARD_SIZE&&o>=1&&o<=this.BOARD_SIZE&&n.push(this.xyToPoint(s,o))}return n}},{key:"canEscape",value:function(t){if(t.liberties.length>1)return!0;var e,n=Object(y.a)(t.opponents);try{for(n.s();!(e=n.n()).done;){var a=e.value,r=this.stringAt(a);if(1===r.liberties.length){var i=this.play(r.liberties[0]);if(!i)continue;var s=this.stringAt(t.points[0]);if(2===s.liberties.length){var o,c=Object(y.a)(s.liberties);try{for(c.s();!(o=c.n()).done;){var l=o.value,u=this.play(l);if(u){var h=this.canEscape(this.stringAt(s.points[0]));if(this.undoPlay(u),!h)return this.undoPlay(i),!1}}}catch(g){c.e(g)}finally{c.f()}return this.undoPlay(i),!0}return this.undoPlay(i),s.liberties.length>2}}}catch(g){n.e(g)}finally{n.f()}var p=this.play(t.liberties[0]);if(!p)return!1;if(2===p.string.liberties.length){var d,f=Object(y.a)(p.string.liberties);try{for(f.s();!(d=f.n()).done;){var v=d.value,m=this.play(v);if(m){var b=this.stringAt(t.points[0]),k=this.canEscape(b);if(this.undoPlay(m),!k)return this.undoPlay(p),!1}}}catch(g){f.e(g)}finally{f.f()}return this.undoPlay(p),!0}return this.undoPlay(p),1!==p.string.liberties.length}},{key:"likeEye",value:function(t){var e=this;if(0!==this.getState(t))return!1;var n=this.adjacenciesAt(t);return!!n.every((function(t){return e.getState(t)===e.turn}))&&n.every((function(t){return e.stringAt(t).liberties.length>1}))}},{key:"isEyeOfTurn",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!this.likeEye(t))return!1;var n,a=0,r=4===this.adjacenciesAt(t).length?1:0,i=A(this.turn),s=Object(y.a)(this.diagonalsAt(t));try{for(s.s();!(n=s.n()).done;){var o=n.value;if(this.getState(o)===i?a+=1:0===this.getState(o)&&e.indexOf(o)<0&&(e.push(t),this.isEyeOfTurn(o,e)||(a+=1),e.pop()),a>r)return!1}}catch(c){s.e(c)}finally{s.f()}return!0}},{key:"isFalseEye",value:function(t){return this.likeEye(t)&&!this.isEyeOfTurn(t)}},{key:"toString",value:function(){for(var t="",e=1;e<=this.BOARD_SIZE;e++){for(var n=1;n<=this.BOARD_SIZE;n++)switch(this.getState(this.xyToPoint(n,e))){case 0:t+=".";break;case 1:t+="X";break;case 2:t+="O"}t+="\n"}return t}}]),t}(),I=function t(){Object(l.a)(this,t),this.points=[],this.liberties=[],this.opponents=[]},z=x;function C(t,e,n){var a,r,i,s,o,c,l,u;switch(1===arguments.length&&(e=t.s,n=t.v,t=t.h),c=n*(1-e),l=n*(1-(o=6*t-(s=Math.floor(6*t)))*e),u=n*(1-(1-o)*e),s%6){case 0:a=n,r=u,i=c;break;case 1:a=l,r=n,i=c;break;case 2:a=c,r=n,i=u;break;case 3:a=c,r=l,i=n;break;case 4:a=u,r=c,i=n;break;case 5:a=n,r=c,i=l}return{r:Math.round(255*a),g:Math.round(255*r),b:Math.round(255*i)}}function M(t,e,n){1===arguments.length&&(e=t.g,n=t.b,t=t.r);var a,r=Math.max(t,e,n),i=Math.min(t,e,n),s=r-i,o=0===r?0:s/r,c=r/255;switch(r){case i:a=0;break;case t:a=e-n+s*(e<n?6:0),a/=6*s;break;case e:a=n-t+2*s,a/=6*s;break;case n:a=t-e+4*s,a/=6*s}return{h:a,s:o,v:c}}function B(t,e,n){var a=.7;return 1===arguments.length&&(e=(t=t.r).g,n=t.b),{r:t*a,g:e*a,b:n*a}}function D(t){for(var e=new Array(t.BOARD_SIZE2),n=0;n<e.length;n++){var a=new P;switch(t.getState(n)){case 1:a.stone="B";break;case 2:a.stone="W"}e[n]=a}return e}var P=function t(){Object(l.a)(this,t),this.stone=null,this.number=null,this.winrate=null,this.playouts=null,this.fillColor=null,this.borderWidth=null,this.borderColor=null,this.backgroundColor=null};function T(t,e){var n=[];if(t<=e)for(var a=t;a<=e;a++)n.push(a);else for(var r=t;r>=e;r--)n.push(r);return n}var _=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={candidate:null},a}return Object(u.a)(n,[{key:"index",value:function(t,e){return this.props.w*(e-1)+t-1}},{key:"renderIntersection",value:function(t,e,n){var a=this,i=t[this.index(e,n)];return r.a.createElement(F,{key:"".concat(e,"-").concat(n),onClick:function(){return a.props.onClickIntersection(e,n)},onMouseEnter:function(){return a.onMouseEnterIntersection(e,n)},onMouseLeave:function(){return a.onMouseLeaveIntersection(e,n)},stone:i.stone,number:i.number,winrate:i.winrate,playouts:i.playouts,fillColor:i.fillColor,borderColor:i.borderColor,backgroundColor:i.backgroundColor})}},{key:"render",value:function(){var t,e=this;this.state.candidate?t=function(t,e,n){var a=e.find((function(t){return t.move===n}));if(!a)return null;var r,i=z.copy(t),s=Object(y.a)(a.pv);try{for(s.s();!(r=s.n()).done;){var o=r.value;i.play(i.xyToPoint.apply(i,O(o)))}}catch(m){s.e(m)}finally{s.f()}var c=D(i),l=t.turn,u=c[i.xyToPoint.apply(i,O(a.pv[0]))];u.winrate=a.winrate.toFixed(1),u.playouts=a.visits,u.textColor=1===l?"white":"black";var h=2;l=A(l);var p,d=Object(y.a)(a.pv.slice(1));try{for(d.s();!(p=d.n()).done;){var f=p.value,v=c[i.xyToPoint.apply(i,O(f))];v.number=h,v.textColor=1===l?"white":"black",l=A(l),h++}}catch(m){d.e(m)}finally{d.f()}return c}(this.props.model,this.props.candidates,this.state.candidate):(t=D(this.props.model),this.props.candidates&&function(t,e,n){var a,r=Math.max.apply(Math,Object(m.a)(n.map((function(t){return t.visits})))),i=Math.max.apply(Math,Object(m.a)(n.map((function(t){return t.winrate})))),s=M(0,255,0).h,o=M(0,255,255).h,c=Object(y.a)(n.entries());try{for(c.s();!(a=c.n()).done;){var l=Object(v.a)(a.value,2),u=l[0],h=l[1],p=t[e.xyToPoint.apply(e,O(h.move))];p.winrate=(100*h.winrate).toFixed(1),p.playouts=h.visits;var d=p.playouts/r,f=Math.log(d),b=0===u?o:s*Math.max(0,f/3+1),k=(32+208*Math.max(0,f/5+1))/255,g=C(b,.75,.85);if(0===u)if(h.winrate<i)p.borderWidth="2px",p.borderCoor="red";else{p.borderWidth="1px";var w=B(g);p.borderCoor="rgba(".concat(w.r,",").concat(w.g,",").concat(w.b,",").concat(k,")")}else p.winrate===i&&(p.borderWidth="2px",p.borderCoor="blue");p.fillColor="rgba(".concat(g.r,",").concat(g.g,",").concat(g.b,",").concat(k,")")}}catch(A){c.e(A)}finally{c.f()}}(t,this.props.model,this.props.candidates));var n={width:this.props.width,height:this.props.height};return r.a.createElement("div",{className:"go-board",style:n},r.a.createElement("div",{className:"go-board-content"},T(parseInt(this.props.h),1).map((function(n){return r.a.createElement("div",{className:"go-row",key:n},T(1,parseInt(e.props.w)).map((function(a){return e.renderIntersection(t,a,n)})))}))))}},{key:"onMouseEnterIntersection",value:function(t,e){var n=E(t,e);this.props.candidates.map((function(t){return t.move})).includes(n)&&(this.candidate=n,this.setState({candidate:n}))}},{key:"onMouseLeaveIntersection",value:function(t,e){this.state.candidate&&this.setState({candidate:null})}}]),n}(r.a.Component),F=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t;switch(this.props.stone){case"B":t="url(https://storage.googleapis.com/mimiaka-storage/mimiaka/public/images/nachiguro2.png)";break;case"W":t="url(https://storage.googleapis.com/mimiaka-storage/mimiaka/public/images/hamaguri2.png)";break;default:t=null}var e,n={color:"B"===this.props.stone?"white":"black",backgroundImage:t,backgroundColor:this.props.backgroundColor},a={backgroundColor:this.props.fillColor,borderWidth:this.props.borderWidth,borderColor:this.props.borderColor};return r.a.createElement("div",{className:"go-intersection",style:n,onClick:this.props.onClick,onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave},r.a.createElement("div",{className:"go-intersection-number"},this.props.number),r.a.createElement("div",{className:"go-intersection-info",style:a},r.a.createElement("div",null,this.props.winrate),r.a.createElement("div",null,"number"===typeof this.props.playouts?(e=this.props.playouts)<1e3?Object(b.sprintf)("%d",e):e<1e4?Object(b.sprintf)("%.1fk",e/1e3):e<1e6?Object(b.sprintf)("%.0fk",e/1e3):e<1e7?Object(b.sprintf)("%.1fM",e/1e6):e<1e9?Object(b.sprintf)("%.0fM",e/1e6):Object(b.sprintf)("%.0G",e/1e9):this.props.playouts)))}}]),n}(r.a.PureComponent),Z=_,R=function(){function t(){var e=this;Object(l.a)(this,t),this.inputDom=document.getElementById("input"),this.outputDom=document.getElementById("output"),this.outputDom.addEventListener("message",(function(t){e.process(t.currentTarget.value),t.currentTarget.value=""}),!1)}return Object(u.a)(t,[{key:"_command",value:function(t){this.inputDom.command.value=t,this.inputDom.dispatchEvent(new CustomEvent("submit"))}},{key:"command",value:function(t){var e=this;return new Promise((function(n,a){null==e.inputDom.command.getAttribute("disabled")&&(e.LzAnalyzeHandler=null,e.resolve=n,e.reject=a,e._command(t))}))}},{key:"lzAnalyze",value:function(t,e){null==this.inputDom.command.getAttribute("disabled")&&(this.LzAnalyzeHandler=e,this._command("lz-analyze ".concat(t)))}},{key:"kataAnalyze",value:function(t,e){null==this.inputDom.command.getAttribute("disabled")&&(this.kataAnalyzeHandler=e,this._command("kata-analyze ".concat(t," ownership true")))}},{key:"process",value:function(t){t.startsWith("=")?this.resolve&&(this.resolve(t),this.resolve=null):t.startsWith("?")&&this.reject&&(this.reject(t),this.reject=null),this.LzAnalyzeHandler&&this.parseLzAnalyze(t),this.kataAnalyzeHandler&&this.parseKataAnalyze(t)}},{key:"parseLzAnalyze",value:function(t){for(var e,n=/info move ([A-Z]\d{1,2}) visits (\d+) winrate (\d+) prior (-?\d+) lcb (-?\d+) order (\d+) pv ((:? ?[A-Z]\d{1,2})+)/g,a=[];null!=(e=n.exec(t));)a.push({move:e[1],visits:parseInt(e[2]),winrate:parseInt(e[3])/1e4,prior:parseInt(e[4]),lcb:parseInt(e[5]),orer:parseInt(e[6]),pv:e[7].split(" ")});this.LzAnalyzeHandler(a)}},{key:"parseKataAnalyze",value:function(t){for(var e,n=/info move ([A-Z]\d{1,2}) visits (\d+) utility (-?\d+\.\d+(?:e-?\d+)?) radius (-?\d+\.\d+(?:e-?\d+)?) winrate (-?\d+\.\d+(?:e-?\d+)?) scoreMean (-?\d+\.\d+(?:e-?\d+)?) scoreStdev (-?\d+\.\d+(?:e-?\d+)?) prior (-?\d+\.\d+(?:e-?\d+)?) lcb (-?\d+\.\d+(?:e-?\d+)?) utilityLcb (-?\d+\.\d+(?:e-?\d+)?) order (-?\d+) pv ((?: ?[A-Z]\d{1,2})+)/g,a={info:[],ownership:[]};null!=(e=n.exec(t));)a.info.push({move:e[1],visits:parseInt(e[2]),utility:parseFloat(e[3]),radius:parseFloat(e[4]),winrate:parseFloat(e[5]),scoreMean:parseFloat(e[6]),scoreStdev:parseFloat(e[7]),prior:parseFloat(e[8]),lcb:parseFloat(e[9]),utilibyLcb:parseFloat(e[10]),order:parseInt(e[11]),pv:e[12].split(" ")});null!=(e=t.match(/ownership((?: -?\d+\.\d+(?:e-?\d+)?)+)/))&&(a.ownership=e[1].trim().split(" ")),this.kataAnalyzeHandler(a)}}]),t}(),L=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).size=19,a.byoyomi=3,a.state={percent:50,black:"",white:"",model:new z(a.size,0),candidates:[],ownership:[]},a.gtp=new R,document.getElementById("sgf").addEventListener("paste",function(){var t=Object(c.a)(o.a.mark((function t(e){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(e.clipboardData||window.clipboardData).getData("text"),"tmp.sgf",FS.writeFile("tmp.sgf",n),t.next=5,a.gtp.command("loadsgf ".concat("tmp.sgf"));case 5:r=z.fromSgf(n),a.setState({model:r}),a.kataAnalyze();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),!1),window.goAI=Object(h.a)(a),a}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement(f,{width:"500px",blackPercent:this.state.percent,blackInfo:this.state.black,whiteInfo:this.state.white}),r.a.createElement(Z,{width:"500px",height:"500px",w:this.size,h:this.size,candidates:this.state.candidates,model:this.state.model,onClickIntersection:function(e,n){return t.play(e,n)}}))}},{key:"lzAnalyze",value:function(){var t=this;this.gtp.lzAnalyze(100,(function(e){var n=100*(1===t.state.model.turn?e.winrate:1-e.winrate);t.setState({candidates:e,percent:n,black:"".concat(n.toFixed(1),"%"),white:"".concat((100-n).toFixed(1),"%")})}))}},{key:"kataAnalyze",value:function(){var t=this;this.gtp.kataAnalyze(100,(function(e){if(0!==e.info.length){var n,a,r=e.info[0],i=100*(1===t.state.model.turn?r.winrate:1-r.winrate),s=(1===t.state.model.turn?r.scoreMean:1-r.scoreMean).toFixed(1),o=r.scoreStdev.toFixed(1);i>=50?(n="".concat(i.toFixed(1),"%(").concat(s,"\xb1").concat(o,")"),a="".concat((100-i).toFixed(1),"%")):(n="".concat(i.toFixed(1),"%"),a="".concat((100-i).toFixed(1),"%(").concat(-s,"\xb1").concat(o,")")),t.setState({candidates:e.info,ownership:e.ownership,percent:i,black:n,white:a})}}))}},{key:"play",value:function(){var t=Object(c.a)(o.a.mark((function t(e,n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=this.state.model.turn,this.setState((function(t,a){return t.model.play(t.model.xyToPoint(e,n)),{model:t.model}})),t.next=5,this.gtp.command("play ".concat(1===a?"black":"white"," ").concat(E(e,n)));case 5:this.kataAnalyze(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}()}]),n}(r.a.Component),W=function(){return r.a.createElement("div",null,r.a.createElement(L,null))};n(25);"undefined"!==typeof SharedArrayBuffer&&Object(i.render)(r.a.createElement(W,null),document.getElementById("app-container")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.e6fb4b9a.chunk.js.map