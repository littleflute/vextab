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
	var s = "v0.0.62 ";
	s += blo0.blhMakeLink ("SongsList.js","songs/SongsList.js","color:blue","_blank");
	s += blo0.blhMakeLink ("SongsList.js*","https://github.com/littleflute/vextab/edit/master/tests/songs/SongsList.js","color:red","_blank");
	s += "<div id='id_div_song_src'></div>";
		
	var lv = blo0.blDiv(ld,ld.id+"_lv_",s,blGrey[5]);
	for(i in ls){
		var b = blo0.blBtn(ld,"id_btn_song_"+i,"s"+i,blColor[i]);
		var id = "id_ta_song_"+i;
		b.ta = blo0.blTextarea(document.body,id,id,blColor[0]);b.ta.style.display="none";
		b.onclick = function(n_){
			return function(){
				var f = "songs/s"+n_+".js"; 
				if(!this.load){
					this.load = 1; 
					blo0.blScript("id_"+f,f);
				}
				else{				
					var d = bl$("id_blClassDiv_4_wrap1");
					var ta = bl$("blah");
					var tt = this.ta;
					if(!ta.old){ta.old=null;}
					if(ta.old!=null){ta.old.value = ta.value;}
					ta.value = tt.value;
					ta.old=tt; 
					d.showVextab();
				}
				var s = "";
				s += blo0.blhMakeLink ("s"+n_+".js",f,"color:blue","_blank");
				s += blo0.blhMakeLink ("s"+n_+".js*","https://github.com/littleflute/vextab/edit/master/tests/"+f,"color:red","_blank");
	
				bl$("id_div_song_src").innerHTML = s;

			}
		}(i);
	}
}
