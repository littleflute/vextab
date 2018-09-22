//file: s3.js  by littleflute 2018/9/21 17:379  oregon,usa
var id_song = 3;


function _myData()
{
/*
_begine_
	
var md = blo0.blMDiv(document.body,"id_mdiv_music", "md-v0.0.4",   300,100,500,400,blColor[1]);
var v1 = blo0.blDiv(md,md.id+"v1","v1:",blGrey[0]);   
var v2 = blo0.blDiv(md,md.id+"v2","v2:",blGrey[1]);   
v2.bs = [];
var b1 = blo0.blBtn(v1,"v1b1","reflash",blGrey[1]);
b1.onclick = function(){
    var t1 = bl$("blah");
    var d1 = bl$("id_blClassDiv_4_wrap1");
    t1.value = "221a5";
    d1.showVextab ();
}
var b2 = blo0.blBtn(v1,"v1b2","note+",blGrey[2]);
 
b2.onclick = function(){   
    var _btn = blo0.blBtn(v2, v2.id + v2.bs.length,v2.bs.length,blGrey[v2.bs.length]);
    v2.bs.push(_btn);
}

_on_off_div(null,md);


_end_
*/
}
function _getData()
{
	var r = "";
	var t = bl$("id_ta_song_"+ id_song);
	t.value = _myData;
	var a = t.value;
	var b = a.split("_begine_");
	var c = b[1].split("_end_");
	r = c[0];
	return r;
}
function _blSongClass(){
	var v = "s0.js: v0.0.16";
	var tt = bl$("id_ta_song_"+ id_song);
	tt.value = _getData(); 
	
	var d = bl$("id_blClassDiv_4_wrap1");
	var ta = bl$("blah"); 
	if(!ta.old){ta.old=null;}
	if(ta.old!=null){ta.old.value = ta.value;}
	ta.value = tt.value;
	ta.old=tt; 
	d.showVextab();
}
var s0 = new _blSongClass;
