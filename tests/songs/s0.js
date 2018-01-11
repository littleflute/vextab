//file: s0.js  by littleflute 2018/1/12 4:15 bjt
var id_song = 0;
function _myData(){
	var r = "\ntabstave";
	return r;
}
function _blSongClass(){
	var v = "s0.js: v0.0.14";
	var tt = bl$("id_ta_song_"+ id_song);
	tt.value = _myData(); 
	
	var d = bl$("id_blClassDiv_4_wrap1");
	var ta = bl$("blah"); 
	if(!ta.old){ta.old=null;}
	if(ta.old!=null){ta.old.value = ta.value;}
	ta.value = tt.value;
	ta.old=tt; 
	d.showVextab();
}
var s0 = new _blSongClass;
