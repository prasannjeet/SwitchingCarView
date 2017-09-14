
		// check for CSS3 3D transformations and WebGL
		if (ggHasHtml5Css3D() || ggHasWebGL()) {
			// use HTML5 panorama
			// create the panorama player with the container
			pano=new pano2vrPlayer("container");
		} else 
		if (swfobject.hasFlashPlayerVersion("10.0.0")) {
			var flashvars = {};
			var params = {};
			// enable javascript interface
			flashvars.externalinterface="1";
			params.quality = "high";
			params.bgcolor = "";
			params.allowscriptaccess = "sameDomain";
			params.allowfullscreen = "true";
			var attributes = {};
			attributes.id = "flashpano";
			attributes.name = "flashpano";
			attributes.align = "middle";
	
			params.base=".";
			params.wmode = "transparent";
			pano=new pano2vrPlayer("container",{ useFlash:true, flashPlayerId: 'flashpano', flashContainerId:'flashcontainer'});
			swfobject.embedSWF("../../srcfiles/pano2vr_player.swf", "flashcontainer", "100%", "100%", "10.0.0", "", flashvars, params, attributes);
		}
		// add the skin object
		skin=new pano2vrSkin(pano);
		// load the configuration
		window.addEventListener("load", function() {
			pano.readConfigUrlAsync("pano.xml");
		});