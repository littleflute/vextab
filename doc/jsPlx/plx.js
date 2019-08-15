//plx.js
var vp 	= btnJsPlx.parentElement;
vp.d1 	= blo0.blDiv(vp, vp.id + "d1","d1-v0.0.14 ::",blGrey[0]);
vp.md1 	= blo0.blMDiv(vp, vp.id + "md1","md1-",50,50,500,400,blGrey[0]);
 



btnJsPlx.onclick = function(){
	_on_off_div(this,vp.md1);
} 
_on_off_div(btnJsPlx,vp.md1);
