(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("love   letter", "bold 40px 'Rosewood Std Regular'", "#FF00FF");
	this.text.lineHeight = 49;
	this.text.lineWidth = 272;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276,50.8);


(lib.Letter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACRAHQABADABADQAVBsinA9Qh2hiANhPQACgLAGgMQAohZBPBjQBkhUAWBjgAMCmUIpxGbAMCmUIAAMpI4DAAQBhlbhhnOIKZGZAsBmUIYDAA");
	this.shape.setTransform(77,40.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("Ah9g2QACgNAGgMQAohYBPBjQBjhVAXBlIABAFQAWBsimA8Qh4hhAOhOg");
	this.shape_1.setTransform(79.1492,46.5114);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC99FF").s().p("AsBGVQBhlbhhnOIKZGZQgOBPB3BiQCng9gWhsIgBgGIJxmbIAAMpgAAYgIQhQhjgoBZQgFAMgDALIqZmZIYDAAIpxGbQgWhjhjBUgAMCmUg");
	this.shape_2.setTransform(77,40.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,156,83);


// stage content:
(lib.ใบงานที่72 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.instance = new lib.Text("synched",0);
	this.instance.setTransform(694.25,-6.75,1,1,0,0,0,138,25.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({guide:{path:[694.3,-6.7,690.3,8,680.7,22.9,672.9,35.1,660.3,48.8,624.7,87.3,570.4,120,533.2,142.3,499.7,153.9,459.9,167.6,423.4,167,412.8,166.8,401.6,165.3]}},30).to({guide:{path:[401.6,165.4,387.3,163.5,372.2,159.7,368.9,158.8,365.6,157.9,345.7,152.4,323,143,312.9,138.8,306.9,135.4,298.3,130.6,292.8,124.9,286.4,118.1,283.8,109.7,280.9,100.5,283.7,92.5,285.4,87.4,289.5,83,293.2,79,298.5,76.1,313.8,67.6,332.6,73.4,350.9,79,361,94.2,370.6,108.7,371,127.9,371.3,143.3,365.6,157.9,364.7,160.3,363.6,162.8,350.6,191.2,316.3,215.4,293.1,230.5,282.2,238.7,263.2,253,254.7,268.1,250.5,275.5,247.5,285.5,245.4,292.7,243.2,303.9,241.9,310.6,241.6,314.9]}},20).to({guide:{path:[241.6,314.9,241.6,315.5,241.5,316.1,241.1,322.9,242.6,328.1,246,340.7,261.1,351.5,278,363.4,301.5,369.7,303.8,370.3,306.3,370.9]}},5).wait(1));

	// Letter
	this.instance_1 = new lib.Letter("synched",0);
	this.instance_1.setTransform(-83.3,-27.6,1,1,0,0,0,77,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[-83.2,-27.5,-64.1,-20.1,-42.8,-9.3,-25.2,-0.4,-0.4,13.9,59.6,48.9,102.8,80.5,114.6,89,129.8,100.7,134.4,104.3,156.3,121.5,177.2,137.9,187.8,147,204.8,161.6,216.8,175.3,229.6,189.9,239.7,206.7,246.9,218.7,252.6,231.8,266.3,263,270,296.5,270.7,303,270.5,307.2,270.1,313.1,268,317.4,265.6,322.6,260.2,326.6,255.5,330,249.1,332.3,236.1,336.9,220.8,336,206.8,335.2,192.5,329.9,180.2,325.3,166.6,317.1,156.7,311.1,142.5,300.9,123.8,287.4,114.5,275,101.8,258.1,104.5,241.5,106,232.2,112.4,224,118.3,216.4,127.1,211.3,141.2,203.1,164.3,200.4,204,195.4,235.8,205.4,237.7,206,239.7,206.7,250.7,210.5,262.2,216.6]}},12).to({x:513.65,y:373.7},12).wait(71));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(158.7,170.9,673.5999999999999,244.29999999999998);
// library properties:
lib.properties = {
	id: '4A8C286B349B4945973BB4FF7F4F5E10',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4A8C286B349B4945973BB4FF7F4F5E10'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;