
//file: s2.js  by littleflute 2018/3/9 1:05 usa
var id_song = 2;


function _myData()
{
/*
_begine_
	
 options width=750 space = 20 

tabstave notation=true tablature=false key=C time = 4/4
notes #7# #7# 5/2 :8 5-3/2| :h 1/2 :q 1/2 :8 5-4/3|:h 2/3 :q 5-4/3| 2/3 :hd 0/3
text .10, :q, , ,你, :8, 的,脚, |,:h, 步, :q,我, :8,的,脚,|,:h,步,:q,都,有,|,祝,:hd ,福,|


options width=750 space = 20 
tabstave notation=true tablature=false key=C time = 4/4
notes :q #7# #7# 5/2 :8 5-3/2| :h 1/2 :q 1/2 :8 5-4/3|:h 2/3  :8 7-5-4-2/3 |:w 4/3
text .10, :q, , ,每, :8, 个,脚, |,:h, 步, :q,我, :8,要,跟,|,:h,随,:8,蒙,福,的,道,|,:w,路,|


options width=750 space = 20 
tabstave notation=true tablature=false key=C time = 4/4
notes :q  5-5-5-4/3 |:h 2/3 :q## :8 9-7/3 | 7-5-5-4-4-2-0-2/3 | :q 5/3 :hd 4/3|
text .10, :q, 哈,利,:h,路,|,:h,亚,:q, ,:8,让,我, |,勇,敢,踏,出,跟,随,你,的,|,:q,脚,:hd,步,|


options width=750 space = 20 
tabstave notation=true tablature=false key=C time = 4/4
notes :q  4-4/3 :h 4/3 |:h 2/3 :q## :8 3-5/4 | 7-5-7-5/4 :q 2-5/3 | :w 4/3 |
text .10, :q, 哈,利,:h,路,|,:h,亚,:q, ,:8, 曲,曲, |,折,折,我,也,:q,不,在,|,:w,乎, |

options width=750 space = 20 
tabstave notation=true tablature=false key=C time = 4/4
notes :q  5-5-5-4/3 |:h 2/3 :q## :8 9-7/3 | 7-5-5-4-4-2-0-2/3 | :q 5/3 :hd 4/3|
text .10, :q, 哈,利,:h,路,|,:h,亚,:q, ,:8,凡,是, |,出,于,你,的,我,就,默,然,|,:q,不,:hd,语,|

options width=750 space = 20 
tabstave notation=true tablature=false key=C time = 4/4
notes :q  4-4/3 :h 4/3 |:h 2/3 :q## :8 3-5/4 | 7-5-7-5/4 :q 9-5/4 | :q 4/3 :hd 5/3 |
text .10, :q, 哈,利,:h,路,|,:h,亚,:q, ,:8, 在,你, |,手,中,都,将,:q,变,成,|,:q,回,:hd,忆, |


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
