
//file: s6.js  by littleflute 2018/12/28 12:08 oregon,usa
var id_song = 6;


function _myData()
{
/*
_begine_
	options stave-distance=30 space=10
tabstave notation=true  tablature=false key=A time=4/4
  voice
    notes :q (5/2.5/3.7/4) :8 7p5h6/3 ^3^ 5h6h7/5 ^3^ :q 7V/4
  voice
    notes :h 5/6 :q  5/6 :8 3-5/6




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
