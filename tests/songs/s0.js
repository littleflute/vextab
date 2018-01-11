//file: s0.js  by littleflute 2018/1/12 4:15 bjt
var id_song = 0;


function _myData()
{
/*
_begine_
	
options space=20
tabstave notation=true tablature=false  
key=A time=4/4
notes :8 B/4 :q C/5 :8 B/4 :q C/5 B/4 |  :8 B/4 :q C/5 :8 B/4 :qd C/5 :8 E/4 |  F-A-A-A/4 B-G-E/4-C/5 | :h bC/5 :qd bC/5 :8 E/5|
text :w, .1, A, A,|
text :h, .1, D, E,| 
text :w, .1, F#m

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
	var v = "s0.js: v0.0.15";
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
