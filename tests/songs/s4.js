
//file: s4.js  by littleflute 2018/10/16 18:56 usa
var id_song = 4;


function _myData()
{
/*
_begine_
	
	
	
	
options space=50 font-size=14 width = 666

tabstave notation=true tablature=false   time=4/4 
key=F   tuning= E/5,B/4,g/4,D/4,A/3,E/3
  notes :8 5-5/3 | :qd 5/1  :8 5/1 :q 5/1 :8 6-5/2  | :hd 7/3 :8 7-7/3| :qd 6/1 :8 5/1 :q 6/1 :8 7/3 6/2| :hd 5/2 :8 5-6/1|
  text :q,.1, ,| ,:w, F, Dm,|,bB,|,C, |
  text ++, .-4, :w, 因着十架爱
 
  text ++, .10, :8, 主,你,| ,:qd ,的,:8,身,:q,体, :8,为,我,|,:hd ,舍 ,:8,你 , 的,|,:qd,宝,:8,血,:q,为,:8,我,流,|,:hd,出,:8,诚,然
  text ++, .12, :w, -1- --------------------------------

options space=55

tabstave notation=true tablature=false   time=4/4 
key=F   tuning= E/5,B/4,g/4,D/4,A/3,E/3 
  notes  :qd 8/1 :8 8/1 :q 8/1 :8 5/1-8/2| :hd 6/2 :8 8/2-5/1| :qd 6/1 :8 5/1 :q 6/1 :8 7/3 6/2| :hd 5/2 :8 5-5/3| 
  text :w, F, Dm,|,bB,|,C, |
  text ++, .11, :w, -2- --------------------------------


	options space=50 font-size=22

tabstave notation=true tablature=false   time=4/4 
key=F   tuning= E/5,B/4,g/4,D/4,A/3,E/3
  notes  :q 5/1  :8 b 5/1 :8 5/1 :8 5/1 6/2 :8 6-5/2| :hd 7/3 :8  7-7/3|
  notes  :q 6/1 :8 b 6/1 5/1 6/1 7/3 7/3 6/2| :hd 5/2 :8 5-6/1| 
  text :w, F, Dm,|,bB,|,C, |
  text ++, .11, :w, -3- --------------------------------------

options space=15


	options space=50 font-size=22
tabstave notation=true tablature=false   time=4/4 
key=F   tuning= E/5,B/4,g/4,D/4,A/3,E/3 
  notes  :q 8/1 :8 b 8/1 8/1  8/1 5/1 5/1-8/2| :hd 6/2 :8 8/2-5/1|
  notes :q 6/1 :8 b 6/1 7/3 5/2 5/2 6/2 8/2| :hd 6/2 :8 6/2-8/2| 
  text :w, F, Dm,|,:h,bB,C, |, :w,F
  text ++, .11, :w, -4- --------------------------------
	options space=50 font-size=22

tabstave notation=true tablature=false   time=4/4 
key=F   tuning= E/5,B/4,g/4,D/4,A/3,E/3
  notes  :hd 5/1  :q  8/1| :hd 8/1 :8  5/1-8/2|
  notes  :hd 6/2  :8 3b5/1| :hd 5/1 :8  5/1 8/2|
  text :w, F, C,|,Dm,|,bB, |
  text ++, .11, :w, -5- --------------------------------------

	options space=50 font-size=22

tabstave notation=true tablature=false   time=4/4 
key=F   tuning= E/5,B/4,g/4,D/4,A/3,E/3
  notes  :hd 6/2  :8  10b8/1| :hd 8/1 :8  5/1-8/2|
  notes  :hd 6/2  :8 5b3/1| :hd 8/2 :8  6/2 8/2|
  text :w, bB, Am,|,bB,|,C, |
  text ++, .11, :w, -6- --------------------------------------

	options space=50 font-size=22

tabstave notation=true tablature=false   time=4/4 
key=F   tuning= E/5,B/4,g/4,D/4,A/3,E/3
  notes  :hd 5/1  :q  8/1| :hd 8/1 :8  5/1-8/2|
  notes  :hd 6/2  :8 3b5/1| :hd 5/1 :8  5/1 8/2|
  text :w, F, C,|,Dm,|,bB, |
  text ++, .11, :w, -7- --------------------------------------

	options space=50 font-size=22

tabstave notation=true tablature=false   time=4/4 
key=F   tuning= E/5,B/4,g/4,D/4,A/3,E/3
  notes  :hd 6/2  :8  10b8/1| :hd 8/1 :8  5/1-8/2|
  notes  :hd 6/2  :8 5b3/1| :hd 8/2 :8  6/2 8/2|
  text :w, bB, Am,|,:h,bB,C, |,:w ,F,|
  text ++, .11, :w, -8- --------------------------------------

options space=15
 



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
