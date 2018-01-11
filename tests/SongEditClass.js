
//file: SongEditClass.js  by littleflute 2018/1/12 2:49 bjt

function _blSongEditClass (_d,_t){
	this.v = "v0.0.44";
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
