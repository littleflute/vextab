
//file: s4.js  by littleflute 2018/10/16 18:56 usa
var id_song = 4;


function _myData()
{
/*
_begine_
	
options space=50 font-size=22

tabstave notation=true tablature=false   time=4/4 
key=F   tuning= E/5,B/4,g/4,D/4,A/3,E/3
  notes :8 5-5/3 | :qd 5/1 :8 5/1 :q 5/1 :8 6-5/2| :hd 7/3 :8 7-7/3| :qd 6/1 :8 5/1 :q 6/1 :8 7/3 6/2| :hd 5/2 :8 5-6/1| 
  text :q,.1, ,| ,:w, F, Dm,|,bB,|,C, |
  text ++, .-4, :w, 因着十架爱

options space=15


options width=750 space = 50 





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
