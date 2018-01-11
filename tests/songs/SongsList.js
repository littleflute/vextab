
//file: SongsList.js  by littleflute 2018/1/12 3:53 bjt

var ls = [
	"s0.js",
	"s1.js",
	"s2.js",
	"s3.js",
	"s4.js",
	"s5.js",
	"s6.js",
	"s7.js",
];
var ld = bl$("id_div_songs_list");
if(ld){
	var s = "v0.0.33 ";
	s += blo0.blhMakeLink ("SongsList.js","songs/SongsList.js","color:blue","_blank");
	s += blo0.blhMakeLink ("SongsList.js*","https://github.com/littleflute/vextab/edit/master/tests/songs/SongsList.js","color:red","_blank");
		
	var lv = blo0.blDiv(ld,ld.id+"_lv_",s,blGrey[5]);
	for(i in ls){
		var b = blo0.blBtn(ld,"id_div_song_"+i,"f"+i,blColor[i]);
		b.onclick = function(n_){
			return function(){
				alert(this.id);
			}
		}(i);
	}
}
