// Garden Gnome Software - Skin
// Pano2VR 5.0beta4/11987
// Filename: sanyam.ggsk
// Generated Thu Jun 16 18:30:10 2016

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._button_fullscreen0=document.createElement('div');
		this._button_fullscreen0.ggId="button_fullscreen";
		this._button_fullscreen0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_fullscreen0.ggVisible=true;
		this._button_fullscreen0.className='ggskin ggskin_container ';
		this._button_fullscreen0.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 135px;';
		hs+='position : absolute;';
		hs+='top : 335px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._button_fullscreen0.setAttribute('style',hs);
		this._button_fullscreen0.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen0.ggIsActive=function() {
			return false;
		}
		me._button_fullscreen0.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_fullscreen0.ggUpdatePosition=function () {
		}
		this._button_image_fullscreen=document.createElement('div');
		this._button_image_fullscreen__img=document.createElement('img');
		this._button_image_fullscreen__img.className='ggskin ggskin_svg';
		this._button_image_fullscreen__img.setAttribute('src',basePath + 'images/button_image_fullscreen.svg');
		this._button_image_fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_fullscreen__img['ondragstart']=function() { return false; };
		this._button_image_fullscreen.appendChild(this._button_image_fullscreen__img);
		this._button_image_fullscreen__imgo=document.createElement('img');
		this._button_image_fullscreen__imgo.className='ggskin ggskin_svg';
		this._button_image_fullscreen__imgo.setAttribute('src',basePath + 'images/button_image_fullscreen__o.svg');
		this._button_image_fullscreen__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_fullscreen__imgo['ondragstart']=function() { return false; };
		this._button_image_fullscreen.appendChild(this._button_image_fullscreen__imgo);
		this._button_image_fullscreen.ggId="button_image_fullscreen";
		this._button_image_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_fullscreen.ggVisible=true;
		this._button_image_fullscreen.className='ggskin ggskin_svg ';
		this._button_image_fullscreen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 150%;';
		hs+='left : 2165.57%;';
		hs+='position : absolute;';
		hs+='top : 438.88%;';
		hs+='visibility : inherit;';
		hs+='width : 150%;';
		this._button_image_fullscreen.setAttribute('style',hs);
		this._button_image_fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_fullscreen.onclick=function () {
			me.player.enterFullscreen();
		}
		this._button_image_fullscreen.onmouseover=function () {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_fullscreen']=true;
		}
		this._button_image_fullscreen.onmouseout=function () {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_fullscreen']=false;
		}
		this._button_image_fullscreen.ontouchend=function () {
			me.elementMouseOver['button_image_fullscreen']=false;
		}
		me._button_image_fullscreen.ggCurrentLogicStateVisible = -1;
		this._button_image_fullscreen.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility="inherit";
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		this._button_image_fullscreen.ggUpdatePosition=function () {
			me._button_image_fullscreen.ggUpdateConditionResize();
		}
		this._tt_enter_fullscreen=document.createElement('div');
		this._tt_enter_fullscreen__text=document.createElement('div');
		this._tt_enter_fullscreen.className='ggskin ggskin_textdiv';
		this._tt_enter_fullscreen.ggTextDiv=this._tt_enter_fullscreen__text;
		this._tt_enter_fullscreen.ggId="tt_enter_fullscreen";
		this._tt_enter_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_enter_fullscreen.ggVisible=false;
		this._tt_enter_fullscreen.className='ggskin ggskin_text ';
		this._tt_enter_fullscreen.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		this._tt_enter_fullscreen.setAttribute('style',hs);
		this._tt_enter_fullscreen.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_enter_fullscreen__text.setAttribute('style',hs);
		this._tt_enter_fullscreen__text.innerHTML="Enter Fullscreen";
		this._tt_enter_fullscreen.appendChild(this._tt_enter_fullscreen__text);
		me._tt_enter_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_enter_fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_enter_fullscreen.ggCurrentLogicStateVisible = -1;
		this._tt_enter_fullscreen.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_image_fullscreen'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_enter_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_enter_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._tt_enter_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_enter_fullscreen.style.visibility="inherit";
					me._tt_enter_fullscreen.ggVisible=true;
				}
				else {
					me._tt_enter_fullscreen.style.visibility="hidden";
					me._tt_enter_fullscreen.ggVisible=false;
				}
			}
		}
		this._tt_enter_fullscreen.ggUpdatePosition=function () {
		}
		this._tt_enter_fullscreen_white=document.createElement('div');
		this._tt_enter_fullscreen_white__text=document.createElement('div');
		this._tt_enter_fullscreen_white.className='ggskin ggskin_textdiv';
		this._tt_enter_fullscreen_white.ggTextDiv=this._tt_enter_fullscreen_white__text;
		this._tt_enter_fullscreen_white.ggId="tt_enter_fullscreen_white";
		this._tt_enter_fullscreen_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_enter_fullscreen_white.ggVisible=true;
		this._tt_enter_fullscreen_white.className='ggskin ggskin_text ';
		this._tt_enter_fullscreen_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		this._tt_enter_fullscreen_white.setAttribute('style',hs);
		this._tt_enter_fullscreen_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_enter_fullscreen_white__text.setAttribute('style',hs);
		this._tt_enter_fullscreen_white__text.innerHTML="Enter Fullscreen";
		this._tt_enter_fullscreen_white.appendChild(this._tt_enter_fullscreen_white__text);
		me._tt_enter_fullscreen_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_enter_fullscreen_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_enter_fullscreen_white.ggUpdatePosition=function () {
		}
		this._tt_enter_fullscreen.appendChild(this._tt_enter_fullscreen_white);
		this._button_image_fullscreen.appendChild(this._tt_enter_fullscreen);
		this._button_fullscreen0.appendChild(this._button_image_fullscreen);
		this.divSkin.appendChild(this._button_fullscreen0);
		this._button_fullscreen=document.createElement('div');
		this._button_fullscreen.ggId="button_fullscreen";
		this._button_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_fullscreen.ggVisible=true;
		this._button_fullscreen.className='ggskin ggskin_container ';
		this._button_fullscreen.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 595px;';
		hs+='position : absolute;';
		hs+='top : 442px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._button_fullscreen.setAttribute('style',hs);
		this._button_fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		me._button_fullscreen.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_fullscreen.ggUpdatePosition=function () {
		}
		this._button_image_normalscreen0=document.createElement('div');
		this._button_image_normalscreen0__img=document.createElement('img');
		this._button_image_normalscreen0__img.className='ggskin ggskin_svg';
		this._button_image_normalscreen0__img.setAttribute('src',basePath + 'images/button_image_normalscreen0.svg');
		this._button_image_normalscreen0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_normalscreen0__img['ondragstart']=function() { return false; };
		this._button_image_normalscreen0.appendChild(this._button_image_normalscreen0__img);
		this._button_image_normalscreen0__imgo=document.createElement('img');
		this._button_image_normalscreen0__imgo.className='ggskin ggskin_svg';
		this._button_image_normalscreen0__imgo.setAttribute('src',basePath + 'images/button_image_normalscreen0__o.svg');
		this._button_image_normalscreen0__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_normalscreen0__imgo['ondragstart']=function() { return false; };
		this._button_image_normalscreen0.appendChild(this._button_image_normalscreen0__imgo);
		this._button_image_normalscreen0.ggId="button_image_normalscreen";
		this._button_image_normalscreen0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_normalscreen0.ggVisible=false;
		this._button_image_normalscreen0.className='ggskin ggskin_svg ';
		this._button_image_normalscreen0.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 150%;';
		hs+='left : 2175.21%;';
		hs+='position : absolute;';
		hs+='top : 818.77%;';
		hs+='visibility : hidden;';
		hs+='width : 150%;';
		this._button_image_normalscreen0.setAttribute('style',hs);
		this._button_image_normalscreen0.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_normalscreen0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_normalscreen0.onclick=function () {
			me.player.exitFullscreen();
		}
		this._button_image_normalscreen0.onmouseover=function () {
			me._button_image_normalscreen0__img.style.visibility='hidden';
			me._button_image_normalscreen0__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_normalscreen0']=true;
		}
		this._button_image_normalscreen0.onmouseout=function () {
			me._button_image_normalscreen0__img.style.visibility='inherit';
			me._button_image_normalscreen0__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_normalscreen0']=false;
		}
		this._button_image_normalscreen0.ontouchend=function () {
			me.elementMouseOver['button_image_normalscreen0']=false;
		}
		me._button_image_normalscreen0.ggCurrentLogicStateVisible = -1;
		this._button_image_normalscreen0.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen0.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._button_image_normalscreen0.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen0.style.visibility="inherit";
					me._button_image_normalscreen0.ggVisible=true;
				}
				else {
					me._button_image_normalscreen0.style.visibility="hidden";
					me._button_image_normalscreen0.ggVisible=false;
				}
			}
		}
		this._button_image_normalscreen0.ggUpdatePosition=function () {
			me._button_image_normalscreen0.ggUpdateConditionResize();
		}
		this._tt_exit_fullscreen0=document.createElement('div');
		this._tt_exit_fullscreen0__text=document.createElement('div');
		this._tt_exit_fullscreen0.className='ggskin ggskin_textdiv';
		this._tt_exit_fullscreen0.ggTextDiv=this._tt_exit_fullscreen0__text;
		this._tt_exit_fullscreen0.ggId="tt_exit_fullscreen";
		this._tt_exit_fullscreen0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_exit_fullscreen0.ggVisible=false;
		this._tt_exit_fullscreen0.className='ggskin ggskin_text ';
		this._tt_exit_fullscreen0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		this._tt_exit_fullscreen0.setAttribute('style',hs);
		this._tt_exit_fullscreen0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_exit_fullscreen0__text.setAttribute('style',hs);
		this._tt_exit_fullscreen0__text.innerHTML="Exit Fullscreen";
		this._tt_exit_fullscreen0.appendChild(this._tt_exit_fullscreen0__text);
		me._tt_exit_fullscreen0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_exit_fullscreen0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_exit_fullscreen0.ggCurrentLogicStateVisible = -1;
		this._tt_exit_fullscreen0.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_image_normalscreen0'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_exit_fullscreen0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_exit_fullscreen0.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._tt_exit_fullscreen0.ggCurrentLogicStateVisible == 0) {
					me._tt_exit_fullscreen0.style.visibility="inherit";
					me._tt_exit_fullscreen0.ggVisible=true;
				}
				else {
					me._tt_exit_fullscreen0.style.visibility="hidden";
					me._tt_exit_fullscreen0.ggVisible=false;
				}
			}
		}
		this._tt_exit_fullscreen0.ggUpdatePosition=function () {
		}
		this._tt_exit_fullscreen_white0=document.createElement('div');
		this._tt_exit_fullscreen_white0__text=document.createElement('div');
		this._tt_exit_fullscreen_white0.className='ggskin ggskin_textdiv';
		this._tt_exit_fullscreen_white0.ggTextDiv=this._tt_exit_fullscreen_white0__text;
		this._tt_exit_fullscreen_white0.ggId="tt_exit_fullscreen_white";
		this._tt_exit_fullscreen_white0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_exit_fullscreen_white0.ggVisible=true;
		this._tt_exit_fullscreen_white0.className='ggskin ggskin_text ';
		this._tt_exit_fullscreen_white0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		this._tt_exit_fullscreen_white0.setAttribute('style',hs);
		this._tt_exit_fullscreen_white0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_exit_fullscreen_white0__text.setAttribute('style',hs);
		this._tt_exit_fullscreen_white0__text.innerHTML="Exit Fullscreen";
		this._tt_exit_fullscreen_white0.appendChild(this._tt_exit_fullscreen_white0__text);
		me._tt_exit_fullscreen_white0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_exit_fullscreen_white0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_exit_fullscreen_white0.ggUpdatePosition=function () {
		}
		this._tt_exit_fullscreen0.appendChild(this._tt_exit_fullscreen_white0);
		this._button_image_normalscreen0.appendChild(this._tt_exit_fullscreen0);
		this._button_fullscreen.appendChild(this._button_image_normalscreen0);
		this.divSkin.appendChild(this._button_fullscreen);
		this._screentint0=document.createElement('div');
		this._screentint0.ggId="screentint";
		this._screentint0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screentint0.ggVisible=false;
		this._screentint0.className='ggskin ggskin_rectangle ';
		this._screentint0.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		this._screentint0.setAttribute('style',hs);
		this._screentint0.style[domTransform + 'Origin']='50% 50%';
		me._screentint0.ggIsActive=function() {
			return false;
		}
		me._screentint0.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._screentint0.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._screentint0);
		this._image_popup0=document.createElement('div');
		this._image_popup0.ggId="image_popup";
		this._image_popup0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_popup0.ggVisible=false;
		this._image_popup0.className='ggskin ggskin_container ';
		this._image_popup0.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		this._image_popup0.setAttribute('style',hs);
		this._image_popup0.style[domTransform + 'Origin']='50% 50%';
		me._image_popup0.ggIsActive=function() {
			return false;
		}
		me._image_popup0.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_popup0.onclick=function () {
			me._image_popup0.style[domTransition]='none';
			me._image_popup0.style.visibility='hidden';
			me._image_popup0.ggVisible=false;
			me._popup_image0.ggText="";
			me._popup_image0__img.src=me._popup_image0.ggText;
			me._screentint0.style[domTransition]='none';
			me._screentint0.style.visibility='hidden';
			me._screentint0.ggVisible=false;
		}
		this._image_popup0.ggUpdatePosition=function () {
		}
		this._popup_image0=document.createElement('div');
		this._popup_image0__img=document.createElement('img');
		this._popup_image0__img.className='ggskin ggskin_external';
		this._popup_image0__img.onload=function() {me._popup_image0.ggUpdatePosition();}
		this._popup_image0__img.setAttribute('src',basePath + '');
		this._popup_image0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._popup_image0__img);
		hs ='';
		this._popup_image0.appendChild(this._popup_image0__img);
		this._popup_image0.ggId="popup_image";
		this._popup_image0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_image0.ggVisible=true;
		this._popup_image0.className='ggskin ggskin_external ';
		this._popup_image0.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		this._popup_image0.setAttribute('style',hs);
		this._popup_image0.style[domTransform + 'Origin']='50% 50%';
		me._popup_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._popup_image0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._popup_image0.ggUpdatePosition=function () {
			var parentWidth = me._popup_image0.offsetWidth;
			var parentHeight = me._popup_image0.offsetHeight;
			var aspectRatioDiv = me._popup_image0.offsetWidth / me._popup_image0.offsetHeight;
			var aspectRatioImg = me._popup_image0__img.naturalWidth / me._popup_image0__img.naturalHeight;
			if (me._popup_image0__img.naturalWidth < parentWidth) parentWidth = me._popup_image0__img.naturalWidth;
			if (me._popup_image0__img.naturalHeight < parentHeight) parentHeight = me._popup_image0__img.naturalHeight;
			var currentWidth = me._popup_image0__img.naturalWidth;
			var currentHeight = me._popup_image0__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._popup_image0__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._popup_image0__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;');
			};
		}
		this._image_popup0.appendChild(this._popup_image0);
		this.divSkin.appendChild(this._image_popup0);
		this._screentint=document.createElement('div');
		this._screentint.ggId="screentint";
		this._screentint.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screentint.ggVisible=false;
		this._screentint.className='ggskin ggskin_rectangle ';
		this._screentint.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0.15%;';
		hs+='position : absolute;';
		hs+='top : -0.06%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		this._screentint.setAttribute('style',hs);
		this._screentint.style[domTransform + 'Origin']='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		me._screentint.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._screentint.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._screentint);
		this._image_popup=document.createElement('div');
		this._image_popup.ggId="image_popup";
		this._image_popup.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_popup.ggVisible=false;
		this._image_popup.className='ggskin ggskin_container ';
		this._image_popup.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		this._image_popup.setAttribute('style',hs);
		this._image_popup.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		me._image_popup.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_popup.onclick=function () {
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.ggText="";
			me._popup_image__img.src=me._popup_image.ggText;
			me._screentint0.style[domTransition]='none';
			me._screentint0.style.visibility='hidden';
			me._screentint0.ggVisible=false;
		}
		this._image_popup.ggUpdatePosition=function () {
		}
		this._popup_image=document.createElement('div');
		this._popup_image__img=document.createElement('img');
		this._popup_image__img.className='ggskin ggskin_external';
		this._popup_image__img.onload=function() {me._popup_image.ggUpdatePosition();}
		this._popup_image__img.setAttribute('src',basePath + '');
		this._popup_image__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._popup_image__img);
		hs ='';
		this._popup_image.appendChild(this._popup_image__img);
		this._popup_image.ggId="popup_image";
		this._popup_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_image.ggVisible=true;
		this._popup_image.className='ggskin ggskin_external ';
		this._popup_image.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0.19%;';
		hs+='position : absolute;';
		hs+='top : 0.26%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		this._popup_image.setAttribute('style',hs);
		this._popup_image.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._popup_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._popup_image.ggUpdatePosition=function () {
			var parentWidth = me._popup_image.offsetWidth;
			var parentHeight = me._popup_image.offsetHeight;
			var aspectRatioDiv = me._popup_image.offsetWidth / me._popup_image.offsetHeight;
			var aspectRatioImg = me._popup_image__img.naturalWidth / me._popup_image__img.naturalHeight;
			if (me._popup_image__img.naturalWidth < parentWidth) parentWidth = me._popup_image__img.naturalWidth;
			if (me._popup_image__img.naturalHeight < parentHeight) parentHeight = me._popup_image__img.naturalHeight;
			var currentWidth = me._popup_image__img.naturalWidth;
			var currentHeight = me._popup_image__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;');
			};
		}
		this._image_popup.appendChild(this._popup_image);
		this.divSkin.appendChild(this._image_popup);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseOver['button_image_fullscreen']) {
		}
		me._tt_enter_fullscreen.ggUpdateConditionTimer();
		if (me.elementMouseOver['button_image_normalscreen0']) {
		}
		me._tt_exit_fullscreen0.ggUpdateConditionTimer();
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='ht_image') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_image";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 100px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin._image_popup0.style[domTransition]='none';
				me.skin._image_popup0.style.visibility='inherit';
				me.skin._image_popup0.ggVisible=true;
				me.skin._popup_image0.ggText=me.hotspot.url;
				me.skin._popup_image0__img.src=me.skin._popup_image0.ggText;
				me.skin._screentint0.style[domTransition]='none';
				me.skin._screentint0.style.visibility='inherit';
				me.skin._screentint0.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_image_image=document.createElement('div');
			this._ht_image_image__img=document.createElement('img');
			this._ht_image_image__img.className='ggskin ggskin_svg';
			this._ht_image_image__img.setAttribute('src',basePath + 'images/ht_image_image.svg');
			this._ht_image_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_image_image__img['ondragstart']=function() { return false; };
			this._ht_image_image.appendChild(this._ht_image_image__img);
			this._ht_image_image__imgo=document.createElement('img');
			this._ht_image_image__imgo.className='ggskin ggskin_svg';
			this._ht_image_image__imgo.setAttribute('src',basePath + 'images/ht_image_image__o.svg');
			this._ht_image_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_image_image__imgo['ondragstart']=function() { return false; };
			this._ht_image_image.appendChild(this._ht_image_image__imgo);
			this._ht_image_image.ggId="ht_image_image";
			this._ht_image_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_image_image.ggVisible=true;
			this._ht_image_image.className='ggskin ggskin_svg ';
			this._ht_image_image.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			this._ht_image_image.setAttribute('style',hs);
			this._ht_image_image.style[domTransform + 'Origin']='50% 50%';
			me._ht_image_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_image_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_image_image.onmouseover=function () {
				me._ht_image_image__img.style.visibility='hidden';
				me._ht_image_image__imgo.style.visibility='inherit';
			}
			this._ht_image_image.onmouseout=function () {
				me._ht_image_image__img.style.visibility='inherit';
				me._ht_image_image__imgo.style.visibility='hidden';
			}
			this._ht_image_image.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._ht_image_image);
			this._tt_ht_image=document.createElement('div');
			this._tt_ht_image__text=document.createElement('div');
			this._tt_ht_image.className='ggskin ggskin_textdiv';
			this._tt_ht_image.ggTextDiv=this._tt_ht_image__text;
			this._tt_ht_image.ggId="tt_ht_image";
			this._tt_ht_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_image.ggVisible=false;
			this._tt_ht_image.className='ggskin ggskin_text ';
			this._tt_ht_image.ggType='text';
			hs ='';
			hs+='height : 43px;';
			hs+='left : -62px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 152px;';
			this._tt_ht_image.setAttribute('style',hs);
			this._tt_ht_image.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 152px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tt_ht_image__text.setAttribute('style',hs);
			this._tt_ht_image__text.innerHTML=me.hotspot.title;
			this._tt_ht_image.appendChild(this._tt_ht_image__text);
			me._tt_ht_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_ht_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_ht_image.ggCurrentLogicStateVisible = -1;
			this._tt_ht_image.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
					if (me._tt_ht_image.ggCurrentLogicStateVisible == 0) {
						me._tt_ht_image.style.visibility="inherit";
						me._tt_ht_image.ggVisible=true;
					}
					else {
						me._tt_ht_image.style.visibility="hidden";
						me._tt_ht_image.ggVisible=false;
					}
				}
			}
			this._tt_ht_image.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._tt_ht_image);
			this._button_image_normalscreen=document.createElement('div');
			this._button_image_normalscreen__img=document.createElement('img');
			this._button_image_normalscreen__img.className='ggskin ggskin_svg';
			this._button_image_normalscreen__img.setAttribute('src',basePath + 'images/button_image_normalscreen.svg');
			this._button_image_normalscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._button_image_normalscreen__img['ondragstart']=function() { return false; };
			this._button_image_normalscreen.appendChild(this._button_image_normalscreen__img);
			this._button_image_normalscreen__imgo=document.createElement('img');
			this._button_image_normalscreen__imgo.className='ggskin ggskin_svg';
			this._button_image_normalscreen__imgo.setAttribute('src',basePath + 'images/button_image_normalscreen__o.svg');
			this._button_image_normalscreen__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._button_image_normalscreen__imgo['ondragstart']=function() { return false; };
			this._button_image_normalscreen.appendChild(this._button_image_normalscreen__imgo);
			this._button_image_normalscreen.ggId="button_image_normalscreen";
			this._button_image_normalscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_image_normalscreen.ggVisible=false;
			this._button_image_normalscreen.className='ggskin ggskin_svg ';
			this._button_image_normalscreen.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 150%;';
			hs+='left : 17921.3%;';
			hs+='position : absolute;';
			hs+='top : 7640.12%;';
			hs+='visibility : hidden;';
			hs+='width : 150%;';
			this._button_image_normalscreen.setAttribute('style',hs);
			this._button_image_normalscreen.style[domTransform + 'Origin']='50% 50%';
			me._button_image_normalscreen.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._button_image_normalscreen.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._button_image_normalscreen.onclick=function () {
				me.player.exitFullscreen();
			}
			this._button_image_normalscreen.onmouseover=function () {
				me._button_image_normalscreen__img.style.visibility='hidden';
				me._button_image_normalscreen__imgo.style.visibility='inherit';
				me.elementMouseOver['button_image_normalscreen']=true;
			}
			this._button_image_normalscreen.onmouseout=function () {
				me._button_image_normalscreen__img.style.visibility='inherit';
				me._button_image_normalscreen__imgo.style.visibility='hidden';
				me.elementMouseOver['button_image_normalscreen']=false;
			}
			this._button_image_normalscreen.ontouchend=function () {
				me.elementMouseOver['button_image_normalscreen']=false;
			}
			me._button_image_normalscreen.ggCurrentLogicStateVisible = -1;
			this._button_image_normalscreen.ggUpdateConditionResize=function () {
				var newLogicStateVisible;
				if (
					(me.player.getIsFullscreen() == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
					if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
						me._button_image_normalscreen.style.visibility="inherit";
						me._button_image_normalscreen.ggVisible=true;
					}
					else {
						me._button_image_normalscreen.style.visibility="hidden";
						me._button_image_normalscreen.ggVisible=false;
					}
				}
			}
			this._button_image_normalscreen.ggUpdatePosition=function () {
				me._button_image_normalscreen.ggUpdateConditionResize();
			}
			this._tt_exit_fullscreen=document.createElement('div');
			this._tt_exit_fullscreen__text=document.createElement('div');
			this._tt_exit_fullscreen.className='ggskin ggskin_textdiv';
			this._tt_exit_fullscreen.ggTextDiv=this._tt_exit_fullscreen__text;
			this._tt_exit_fullscreen.ggId="tt_exit_fullscreen";
			this._tt_exit_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_exit_fullscreen.ggVisible=false;
			this._tt_exit_fullscreen.className='ggskin ggskin_text ';
			this._tt_exit_fullscreen.ggType='text';
			hs ='';
			hs+='height : 18px;';
			hs+='left : -59px;';
			hs+='position : absolute;';
			hs+='top : 36px;';
			hs+='visibility : hidden;';
			hs+='width : 148px;';
			this._tt_exit_fullscreen.setAttribute('style',hs);
			this._tt_exit_fullscreen.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 18px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_exit_fullscreen__text.setAttribute('style',hs);
			this._tt_exit_fullscreen__text.innerHTML="Exit Fullscreen";
			this._tt_exit_fullscreen.appendChild(this._tt_exit_fullscreen__text);
			me._tt_exit_fullscreen.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_exit_fullscreen.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_exit_fullscreen.ggCurrentLogicStateVisible = -1;
			this._tt_exit_fullscreen.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['button_image_normalscreen'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_exit_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_exit_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
					if (me._tt_exit_fullscreen.ggCurrentLogicStateVisible == 0) {
						me._tt_exit_fullscreen.style.visibility="inherit";
						me._tt_exit_fullscreen.ggVisible=true;
					}
					else {
						me._tt_exit_fullscreen.style.visibility="hidden";
						me._tt_exit_fullscreen.ggVisible=false;
					}
				}
			}
			this._tt_exit_fullscreen.ggUpdatePosition=function () {
			}
			this._tt_exit_fullscreen_white=document.createElement('div');
			this._tt_exit_fullscreen_white__text=document.createElement('div');
			this._tt_exit_fullscreen_white.className='ggskin ggskin_textdiv';
			this._tt_exit_fullscreen_white.ggTextDiv=this._tt_exit_fullscreen_white__text;
			this._tt_exit_fullscreen_white.ggId="tt_exit_fullscreen_white";
			this._tt_exit_fullscreen_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_exit_fullscreen_white.ggVisible=true;
			this._tt_exit_fullscreen_white.className='ggskin ggskin_text ';
			this._tt_exit_fullscreen_white.ggType='text';
			hs ='';
			hs+='height : 18px;';
			hs+='left : -1px;';
			hs+='position : absolute;';
			hs+='top : -1px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			this._tt_exit_fullscreen_white.setAttribute('style',hs);
			this._tt_exit_fullscreen_white.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 18px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_exit_fullscreen_white__text.setAttribute('style',hs);
			this._tt_exit_fullscreen_white__text.innerHTML="Exit Fullscreen";
			this._tt_exit_fullscreen_white.appendChild(this._tt_exit_fullscreen_white__text);
			me._tt_exit_fullscreen_white.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_exit_fullscreen_white.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tt_exit_fullscreen_white.ggUpdatePosition=function () {
			}
			this._tt_exit_fullscreen.appendChild(this._tt_exit_fullscreen_white);
			this._button_image_normalscreen.appendChild(this._tt_exit_fullscreen);
			this.__div.appendChild(this._button_image_normalscreen);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_ht_image.ggUpdateConditionTimer();
				if (me.elementMouseOver['button_image_normalscreen']) {
				}
				me._tt_exit_fullscreen.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_image_2";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 100px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin._image_popup0.style[domTransition]='none';
				me.skin._image_popup0.style.visibility='inherit';
				me.skin._image_popup0.ggVisible=true;
				me.skin._popup_image0.ggText=me.hotspot.url;
				me.skin._popup_image0__img.src=me.skin._popup_image0.ggText;
				me.skin._screentint0.style[domTransition]='none';
				me.skin._screentint0.style.visibility='inherit';
				me.skin._screentint0.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_image_image_2=document.createElement('div');
			this._ht_image_image_2__img=document.createElement('img');
			this._ht_image_image_2__img.className='ggskin ggskin_svg';
			this._ht_image_image_2__img.setAttribute('src',basePath + 'images/ht_image_image_2.svg');
			this._ht_image_image_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_image_image_2__img['ondragstart']=function() { return false; };
			this._ht_image_image_2.appendChild(this._ht_image_image_2__img);
			this._ht_image_image_2__imgo=document.createElement('img');
			this._ht_image_image_2__imgo.className='ggskin ggskin_svg';
			this._ht_image_image_2__imgo.setAttribute('src',basePath + 'images/ht_image_image_2__o.svg');
			this._ht_image_image_2__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_image_image_2__imgo['ondragstart']=function() { return false; };
			this._ht_image_image_2.appendChild(this._ht_image_image_2__imgo);
			this._ht_image_image_2.ggId="ht_image_image_2";
			this._ht_image_image_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_image_image_2.ggVisible=true;
			this._ht_image_image_2.className='ggskin ggskin_svg ';
			this._ht_image_image_2.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			this._ht_image_image_2.setAttribute('style',hs);
			this._ht_image_image_2.style[domTransform + 'Origin']='50% 50%';
			me._ht_image_image_2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_image_image_2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_image_image_2.onmouseover=function () {
				me._ht_image_image_2__img.style.visibility='hidden';
				me._ht_image_image_2__imgo.style.visibility='inherit';
			}
			this._ht_image_image_2.onmouseout=function () {
				me._ht_image_image_2__img.style.visibility='inherit';
				me._ht_image_image_2__imgo.style.visibility='hidden';
			}
			this._ht_image_image_2.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._ht_image_image_2);
			this._tt_ht_image_image=document.createElement('div');
			this._tt_ht_image_image__text=document.createElement('div');
			this._tt_ht_image_image.className='ggskin ggskin_textdiv';
			this._tt_ht_image_image.ggTextDiv=this._tt_ht_image_image__text;
			this._tt_ht_image_image.ggId="tt_ht_image_image";
			this._tt_ht_image_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_image_image.ggVisible=false;
			this._tt_ht_image_image.className='ggskin ggskin_text ';
			this._tt_ht_image_image.ggType='text';
			hs ='';
			hs+='height : 17px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 95px;';
			this._tt_ht_image_image.setAttribute('style',hs);
			this._tt_ht_image_image.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 95px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tt_ht_image_image__text.setAttribute('style',hs);
			this._tt_ht_image_image__text.innerHTML=me.hotspot.title;
			this._tt_ht_image_image.appendChild(this._tt_ht_image_image__text);
			me._tt_ht_image_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_ht_image_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_ht_image_image.ggCurrentLogicStateVisible = -1;
			this._tt_ht_image_image.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_ht_image_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_ht_image_image.ggCurrentLogicStateVisible = newLogicStateVisible;
					if (me._tt_ht_image_image.ggCurrentLogicStateVisible == 0) {
						me._tt_ht_image_image.style.visibility="inherit";
						me._tt_ht_image_image.ggVisible=true;
					}
					else {
						me._tt_ht_image_image.style.visibility="hidden";
						me._tt_ht_image_image.ggVisible=false;
					}
				}
			}
			this._tt_ht_image_image.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._tt_ht_image_image);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_ht_image_image.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};