
//file: SongEditClass.js  by littleflute 2018/1/12 2:49 bjt
function _blEditClass (_o,_d,_t){
	this.v = "v0.0.34";
	var o = _o;
	var d = _d;
	var ta = _t;
	var r = blo0.blDiv(o,o.id+"_blMajorChordClass","_blMajorChordClass",blColor[4]);	 
  	r.C = blo0.blBtn(r,r.id + "C","C",blGrey[3]);  	
	r.C.onclick = function(){		ta.value += bl$("s1").value + _strMajorChord(1,2); d.showVextab(); 		}
  	r.D = blo0.blBtn(r,r.id + "D","D",blGrey[3]);  	
	r.D.onclick = function(){		ta.value += bl$("s1").value + _strMajorChord(3,2); d.showVextab(); 		}
  	r.E = blo0.blBtn(r,r.id + "E","E",blGrey[3]);
  	r.E.onclick = function(){		ta.value += bl$("s1").value + _strMajorChord(5,2); d.showVextab(); 		}
	function _strMajorChord(i,j){
		var r = "notes :8  " + i + "/" + j + " " + (i+4)+ "/" + j +" " + (i+7) + "/" + j + " " + (i+12) + "/" + j + " " + (i+7) +"/" + j + " |";
		return r;
	}
	var r = blo0.blDiv(o,o.id+"_add_line","[+line]",blColor[4]);	 
  	r.a0 = blo0.blBtn(r,r.id + "a0","a0",blGrey[0]);r.a0.onclick = function(){	ta.value += "\ntabstave"; d.showVextab(); }
  	r.a1 = blo0.blBtn(r,r.id + "a1","a1",blGrey[0]);r.a1.onclick = function(){ta.value += "\ntabstave notation=true clef=bass key=Ab time=C| \n notes 4-5/6"; d.showVextab(); }
  	r.a2 = blo0.blBtn(r,r.id + "a2","a2",blGrey[0]);r.a2.onclick = function(){ta.value += "\ntabstave notation=true tablature=false \n notes Cn-D-E/4 F#/5"; d.showVextab(); }
	r.a3 = blo0.blBtn(r,r.id + "a3","a3",blGrey[0]);r.a3.onclick = function(){ta.value += "\ntabstave notation=true \n notes 4-5-6/3 10/4"; d.showVextab(); }
} 
function _blSongEditClass (_d,_t){
	this.v = "v0.0.45";
	var _v = null;
	var d = _d;
	var ta = _t;
	this.blr_Edit = function(btn,div){
		if(!_v){_v=blo0.blDiv(div,div.id+"_v","v::",blGrey[0]);_v.majorChord = new _blEditClass(_v,d,ta);}
		_on_off_div(btn,div);	
	};	this.bll1= "--1--";
	this.blr_Songs = function(btn,div){
		if(!div.v){
			div.v=blo0.blDiv(div,div.id+"_v","samples",blColor[0]); 			
			div.v.msg=blo0.blDiv(div.v,div.v.id+"msg","msg:",blColor[3]); 	
			div.v.tb=blo0.blDiv(div.v,div.v.id+"tb","tb:",blGrey[2]); 
			var b1 = blo0.blBtn(div.v.tb,div.v.tb.id + "b1","[+song]",blColor[1]);
			b1.onclick = function(this_){
				var ns = [];
				return function(){
					var id = this_.id + (ns.length + 1);
					var html = "ns" + (ns.length + 1);
					var b = blo0.blBtn(div.v.tb,id,html,blColor[1]);
					b.ta = blo0.blTextarea(document.body,b.id+"_ta","xd",0,0,100,100,blColor[0]);
					b.onclick = function(tt){
						var n = 0;
						return function(){
							n++;
							tt.value = n;
						}
					}(b.ta);
					ns.push(b);
				}
			}(b1);

			var t = document.getElementsByTagName("textarea");
			for (var i = 0; i < t.length; i++){
				if(t[i].id!="blah")
				{	
					var b = blo0.blBtn(div.v.tb,div.v.tb.id + t[i].id,t[i].id,blGrey[0]);
					b.onclick = function(tt){return function(){
						if(!ta.old){ta.old=null;}
						if(ta.old!=null){ta.old.value = ta.value;}
						ta.value = tt.value;
						ta.old=tt; 
						d.showVextab();}
					}(t[i]);
				}
			}
		}_on_off_div(btn,div);		
	}; this.bll2= "--2--"; 
	this.blr_AboutMe = function(btn,div){
		var s = blo0.blhMakeLink ("SongEditClass.js","SongEditClass.js","color:blue","_blank");
		s += blo0.blhMakeLink ("SongEditClass.js*","https://github.com/littleflute/vextab/edit/master/tests/SongEditClass.js","color:red","_blank");
		div.innerHTML = s;
		_on_off_div(btn,div);	
	}; 
}
