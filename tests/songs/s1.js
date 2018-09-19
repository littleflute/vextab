//file: s1.js  by littleflute 2018/3/9 0:59 usa
var id_song = 1;


function _myData()
{
/*
_begine_
	
options scale=1.23 space=20  
tabstave notation=true tablature=false  
key=C time=4/4
text :w, .-2, Footsteps       _v:0.0.2
notes :8 C-D-E-G/4 :q bG/4 :8 E-D/4|  C-D-E/4 A/3 :q bA/3 ## | :8 A/3-C/4 A/3-C/4 :q A/3 G/3 | E-D/4 :w #5#|
 
options scale=1.23 space=20  
tabstave notation=true tablature=false  
key=C time=4/4
text :w, .12, Footsteps 
notes :8 C-D-E-G/4 :q bG/4 :8 E-D/4|  C-D-E/4 A/3 :q bA/3 ## | :8 A/3-C/4 A/3-C/4 :q A/3 G/3 | E-D/4 :w #5#|
 


options scale=1.23 space=20   


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
