
//file: s2.js  by littleflute 2018/3/9 1:04 usa
var id_song = 2;


function _myData()
{
/*
_begine_
	
	
options scale=1.23 space=20  
tabstave notation=true tablature=false

key=C time=4/4
 notes C/4 C-E-G/5 |  :8 C/4 C-E-G/5 C/4 C-E-G/5 |

options scale=1.23 space=20  
tabstave notation=true tablature=false
key=C time=4/4
 notes :4 G/3 G-B/4-D/5 |  :8 G/3 G-B/4-D/5 G/3 G-B/4-D/5 |

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
