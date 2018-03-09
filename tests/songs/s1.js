//file: s1.js  by littleflute 2018/3/9 0:54 usa
var id_song = 1;


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

options space=20
tabstave notation=true tablature=false

key=A time=4/4
notes :8 F-E/5 :q F/5 :8 D-C/5-B-A/4 |:h bA/4 E/4 |:q A/4 :8 C/5 B/4 bB/4 E-F-E/4 |:q A/4
text :h, .1, D, E,| 
text :w, .1, A
text :w, .1, A  

options space=25



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
