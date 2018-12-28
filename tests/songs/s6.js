
//file: s6.js  by littleflute 2018/12/28 12:08 oregon,usa
var id_song = 6;


function _myData()
{
/*
_begine_

options space=158 font-size=12 width = 800 scale = 1.012
tabstave notation=true tablature=false time=4/4
key=C tuning=E/5,B/4,G/4,D/4,A/3,E/3 
voice
notes :8  15/5 12/4 14/4 15/4   12/3 14/3 12/2 13/2 |
notes :8  12/2 14/3 12/3 15/4 14/4 12/4 15/5 14/5 
voice
notes :w 3/5| 3/6 

text .-5 :q,C Major scale
text ++, .7 ,:8,1,2,.6,3,1,.5,2,3,.4,4,1,|,4,3,.5,2,1,.6,3,2,.7,1,4

options space=33 font-size=12 width = 800 scale = 1.012
tabstave notation=true tablature=false time=4/4
key=C tuning=E/5,B/4,G/4,D/4,A/3,E/3 
voice
notes :8   12/5 14/5 15/5 12/4 14/4 15/4   12/3 14/3|
notes :8   12/3 15/4 14/4 12/4 15/5 14/5 12/5 15/6
voice
notes :w 0/5| 2/4

text  :8 
text ++, .8 ,:8,3,4,.7,1,2,.6,3,1,.5,2,3,|,2,1,.6,3,2,.7,1,4,.8,3,2

options space=33 font-size=12 width = 800 scale = 1.012
tabstave notation=true tablature=false time=4/4
key=C tuning=E/5,B/4,G/4,D/4,A/3,E/3 
voice
notes :8   12/5 14/5 15/5 12/4 14/4 15/4   12/3 14/3|
notes :8   12/3 15/4 14/4 12/4 15/5 14/5 12/5 15/6
voice
notes :w 3/4| 3/5

text  :q
text ++, .4 ,:8, 3,4,.7,1,2,.6,3,1,.5,2,3,|,2,1,.6,3,2,.7,1,4,.8,3,2

options space=33 font-size=12 width = 800 scale = 1.012
tabstave notation=true tablature=false time=4/4
key=C tuning=E/5,B/4,G/4,D/4,A/3,E/3 
voice
notes :8   12/5 14/5 15/5 12/4 14/4 15/4   12/3 14/3|
notes :8   12/2 13/2 12/2 14/3 12/3 15/4 14/4 12/4 
voice
notes :w 0/4| 3/6

text  :q
text ++, .4 ,:8, 3,4,.7,1,2,.6,3,1,.5,2,3,|,4,5,.6,4,3,.7,2,1,.8,3,2

options space=33 



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
