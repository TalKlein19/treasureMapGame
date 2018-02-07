(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"treasureMapV14_atlas_", frames: [[1466,811,479,277],[1970,0,32,32],[941,1176,300,201],[714,1065,225,300],[0,892,471,167],[1648,1219,197,300],[1466,0,502,502],[962,0,502,502],[504,594,300,300],[604,1367,300,134],[0,1367,300,156],[906,1379,294,118],[1419,1090,502,127],[0,594,502,296],[1466,504,502,305],[962,504,502,501],[1243,1219,201,300],[473,896,471,167],[1446,1219,200,300],[249,1065,232,300],[0,1061,247,300],[483,1065,229,300],[946,1007,471,167],[302,1367,300,143],[0,0,960,592]]}
];


// symbols:



(lib.card = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ComboBox = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dali = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.davidBenGurion = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.down = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ezerVaitzman = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.fullMap = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.fullMapSmall = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hommeDeVitruve_deVinchi = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.human_michal = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.lastMeal_deVinchi = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.map1 = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.map2 = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.map3 = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.map4 = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.map5 = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.mona_deVinchi = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.over = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.rabin = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.reuvanRivlin = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.shaulMofazF = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.theLady_deVinchi = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.up = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.vanGoch = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.wrongAnswer = function() {
	this.spriteSheet = ss["treasureMapV14_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.soundsLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("rightSound");
	}
	this.frame_50 = function() {
		this.stop();
	}
	this.frame_51 = function() {
		playSound("wrongSoundwav");
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(49).call(this.frame_50).wait(1).call(this.frame_51).wait(18).call(this.frame_69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.reuvanRivlinLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.reuvanRivlin();
	this.instance.parent = this;
	this.instance.setTransform(-116,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.reuvanRivlinLIB, new cjs.Rectangle(-116,-150,232,300), null);


(lib.ezerVaitzmanLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ezerVaitzman();
	this.instance.parent = this;
	this.instance.setTransform(-98.5,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ezerVaitzmanLIB, new cjs.Rectangle(-98.5,-150,197,300), null);


(lib.shaulMofazLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shaulMofazF();
	this.instance.parent = this;
	this.instance.setTransform(-131,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shaulMofazLIB, new cjs.Rectangle(-131,-149,247,300), null);


(lib.rabinLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.rabin();
	this.instance.parent = this;
	this.instance.setTransform(-100,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rabinLIB, new cjs.Rectangle(-100,-150,200,300), null);


(lib.davidBenGurionLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.davidBenGurion();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.davidBenGurionLIB, new cjs.Rectangle(-112.5,-150,225,300), null);


(lib.playerLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(62).call(this.frame_71).wait(1));

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222638").s().p("AAAAEIAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBIgCAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAgBIgDAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAGgFAKAGQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgCABIAAAAIgBAAIgDAAIgBABIAAAAIgBAAIgBAAgAAHAAIAAAAIgBAAIABAAg");
	this.shape.setTransform(33.9,-99.2,0.938,0.938);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#222638").s().p("AgGACQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAMABQAAAAABABQAAAAAAAAQAAAAAAABQAAAAgBAAIgHAAIgGAAg");
	this.shape_1.setTransform(33.6,-99.1,0.938,0.938);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#443023").s().p("AgaAqQgGgSgIg0IAlgLQAXgHAVgEQgKAugSARQggAhgIAFQACgFgBgEg");
	this.shape_2.setTransform(21.4,-96.5,0.938,0.938);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#AFAFAF").ss(1.5).p("AA9AGQAKgPgsg8QgPgUggAbQgiAagHAkQgFAUALAQQAIAMAVALQAFADAUANQASAJAEgL");
	this.shape_3.setTransform(43.9,51.6,0.938,0.938);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D1F15").s().p("ABJFHQgdgMgPgDQgagFg/gpQhCgsAFgPQARgtAWhNQAhhzAAg0QAAhCAIgfQAGgVAfhDQAag6AggCQAbgBAgAoQAUAagZBcQgTBDgdA/QgZA2gRA5QgVBLAEAnQADAcAxAgQAuAegCAhQAAAUgQAAIgIgBg");
	this.shape_4.setTransform(47.1,30.8,0.938,0.938);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DDB294").s().p("AgKA3QgJgCgOgRQgPgTgMgEQgQgHgBgNQgBgNALgNIANgCQAPgDANAAQAIAAAMgKQALgJAUADQAWADAKAPQAHAJAMAXQALAPgpAZQgiAUgQAAIgGgBg");
	this.shape_5.setTransform(55,-37.4,0.938,0.938);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DDB294").s().p("AgdBBQgNgMAAgZQAAgigEgMQgJgfABgIQAAgOAQgGQAPgGACADIANASQAHAIAMADQAKADAHANQAYAoADAyQACAagjABIgEAAQgeAAgRgRg");
	this.shape_6.setTransform(50.3,-25.7,0.938,0.938);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DDB294").s().p("ABdCFQgBgFgQgSIgegeQgugZgngXQhNgrgRgkQgUgqANgcQAMgaAbAFQAbAFALAFIAdATQASAMAiAwIAyBHQAJANAfAdQAZAYAKAWQAMAZgdAEIgQABQgQAAgBgHg");
	this.shape_7.setTransform(37.2,-40,0.938,0.938);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9B4242").s().p("ABODSQgUgEhLh2QhRiBgSgaQgYgjARgxQAOgoAWgPIAJgEQAPgCAfAGQAgAHASAlQAPAfgBAiQgCA6BOB7QAjA2gTAqQgOAfgXAAIgJgBg");
	this.shape_8.setTransform(20.3,-61.5,0.938,0.938);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9B4242").s().p("AAwE+Qg+gZg2gbQg4gcgOgOQgMgNgIiAIgHidQgCg3AFgdQAJg1AfgSQAdgSARgEIAJgCIgagDIANgUQAQgZAQgWQCFBYAGAQQABADgBAcQgBAXAMASQAQAYAZBgQAZBggCAgQgDAkgHA0QgIA3gEACQgHAbgNAWQgSAdgcAAQgOAAgQgGg");
	this.shape_9.setTransform(20.8,-59.5,0.938,0.938);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#827B77").s().p("AjNBJQgNgLAcgRQAngXApgHQgCgPAAgQQAAghAJgKQAKgLA0gFQAngFAjAAQARAAATgCQALAAACARIAHA5IAgAJQAjANATARQAcAbAHAQQg3gRg6gIQg4gHgiAFIgYAFQgUAEgZAHIgkALQgeAIgZABIgHAAQgiAAgLgKg");
	this.shape_10.setTransform(26.9,-106.2,0.938,0.938);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DDB294").s().p("Ah+BsQAUgkAOgeQAIgSACgLQAIgFAhghQASgSAJguQgUAEgYAIIglAKIgDgRIAggwQAngtAmASQAdANAlAOQAWAMABAdIAAAHIAEARQAFAUAKANQAHAIABAOQABANgHgBIgMgDQANATgEAFIgKARIAEALIgDAKIgBAJQgCAJgJACQggAGgbgKQgHgCgGAMQgIATgGANQgLAYgJAYg");
	this.shape_11.setTransform(26.6,-92.9,0.938,0.938);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DDB294").s().p("AAVAzIghgEIgQgDIgtheIATAQQAXARASAGQANAFAqAFQAiAFgCAUQgBAPgRAHQgLAFgQAAIgIAAg");
	this.shape_12.setTransform(44.6,-41.5,0.938,0.938);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D1F15").s().p("ACbFLQgfgEiviaQitiXgmg0QgegqAIhfIAPhWIAcgcQAqgfBEgQQBEgQA1BKQAaAlANAoIgFAlQgEAsABAgQACAgBZBkQAxA4BlBrQA1A9g7AiQgoAWgpAAIgUgBg");
	this.shape_13.setTransform(31.9,-18,0.938,0.938);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5B4431").ss(2.1).p("AgfEJQAiAiAQg/QANg2gDhwQgDhlgPhmQgPhogUgn");
	this.shape_14.setTransform(49.4,20.4,0.938,0.938);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5B4431").ss(1.5).p("AAiFDIAKAAQAZgDAVgLQAXgMAKgUQADgHABgFQAFgZgLgaIjrl3QgLgRgCg+QgCgxADgh");
	this.shape_15.setTransform(144.9,-35.2,0.938,0.938);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5B4431").ss(1.5).p("AA/AcQgUgRgagOQgzgegcAL");
	this.shape_16.setTransform(66.9,-37.5,0.938,0.938);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#5B4431").ss(1.5).p("ACxBZICjAkQCnAmAOAMQAJAHgjACQgkACg6gFQiZgNh2gvQiNg4iZhSQikhagwg1Qgpgvg5AvQgSAPgSAXIgNAT");
	this.shape_17.setTransform(100.1,-21.5,0.938,0.938);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#493939").s().p("AiPCcQAHgbAHgQIgNAFQgnANhLASQhJARgWACQAOgKBEgtQBGguARgIIAdgQQBKgqAUggQAMgVAmgPIA8gUQAQgFAygeQAxgeAbgIQAdgIAqgGIAsgFQgLAEgGAQIgTAtIBQgLIiiCYQACgQAIgSQAOglAYgQQgvAdgzAkQhqBLgYAmQADgLAGgQQAOggATgbQgoAVgsAdQhbA6gZAoIAFgYg");
	this.shape_18.setTransform(97.9,-46,0.938,0.938);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#5B4431").ss(2.6).p("ABuiqIAMgBQAJABgMAOQgIAJhYAkQhVAkgNASQgTAZgQA3QgPA4AAApQABAiAJAMQAEAHAFgB");
	this.shape_19.setTransform(142.7,-42.9,0.938,0.938);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#493939").s().p("ADICGQABAcgGAIQgDAFgEgGIgDgHQgHgWgNgaQgag1gfgVIgYgQQghgWgbgEQgYgFgjAHIgRAAQgPgBgFABIgLAAIgkALQgMAEgqAIQgnAHgVAIQATgmAegeQAZgZASgIQAPgHAJABIAFgGQAKgGAUgBIAQgBQAcgBAigJIAegkQAkgmAegHQAPgEADAMQgSAOgRAQQgYAYgJARQgLAVABALQAAAGADABIARgEQATgGAKgIIgCAEIADgFQAGgFADgHQAegkAigDQAEAAABABQghAUgJAQQgHAMgFAaIgEAYIAPgHQAAAFACgEIAUANIALAIQAiAcAIAlIgYgUQALAKASAWQAdAlAFAYQAGAagEAOQgCAIgDACQgKgggSgKg");
	this.shape_20.setTransform(140.1,-56.9,0.938,0.938);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#222638").ss(0.5).p("ABgBqQgegpgmgwQhNhdgtgd");
	this.shape_21.setTransform(153.8,-20.3,0.938,0.938);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2D2724").s().p("AgSAGQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQABgKARAAQAPAAAHAHQACABgBADQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgNgCgGAAIgIACIgCABQgEAAgCgCg");
	this.shape_22.setTransform(148.6,-42.7,0.938,0.938);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#443326").s().p("AiYCMQgogXgegkIgIgKIAAAAQgVgcgMgfQgMgcgCgaQgCgiADgTQAHguAbAKQALAFAEAKIAIApQAFAaARASQAGAGAdAWQASAMBkgDQBcgDAxgLQAjgIAPg5QALg+AHgMQAJgPAYgCQAWgCAXAKQAJAEAGAFQASAMACBFQACAmgDBCQAAAghRAvIhRAnQgwAHg5ACIgUAAQhiAAgsgZg");
	this.shape_23.setTransform(24.4,-16.9,0.938,0.938);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B7A598").s().p("AABCPQhEgHgYgSQgVgPABgiQAAgNAJgpIALg0QAHgegCgTQgCgpA8gPQARgEAWAGQAQAFAOAHQgDAYACAcQACAbAMAdQAMAeAVAcIAJAKIAQA0IgjgRQAKAZgKAYQgFAMgmAAQgPAAgSgBg");
	this.shape_24.setTransform(-2.8,-13.3,0.938,0.938);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6D5341").s().p("AhSC+QjSgThCgXQhGgZgFh7QgCglAFg3QAEg0gBgIQgCgbAKgPQAGgHAFgCIB1AaQB4AdARAKQAxAcCEAOQBDAHA4ABIBXgfQBWgnAAggIA+COQA8CYgMA3QgHAiiMAJQgrACgyAAQh3AAicgOg");
	this.shape_25.setTransform(19.6,1,0.938,0.938);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#5B4431").ss(2.6).p("ABIhNIANAGQAMAIgMAJQgwAtgmAgQhLBBgHgOQgHgNAAgDIADAA");
	this.shape_26.setTransform(156.5,-20.9,0.938,0.938);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#93745F").s().p("AiNDuQgbgBACgaIARhFQAKgqAIgPQAHgNAZgfQAYgdA7hjQA5hiAQgmQAMgcASAUQAcAhAOAEQBAAPgrBAQgYAig2A2QgSAVguBNIhGB6QgaArgNAEQgTgCgVAAg");
	this.shape_27.setTransform(-112.6,96.7,0.938,0.938);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#93745F").s().p("AljGhQgrgIADgsQACgYAVgzQAMgeAIgFQAIgFAtgRQAwgVAzgzQA2g2AQguQAchUAQjXQARjZBnAoQAjANA4AvIBTBGIAiATQAnAXAfAbQBlBUgVBQQgVBUhkBAQhMAxhXAUQg1AMh+BbIikB1Qg5AjgEABQgFABgJAAQgQAAgdgFg");
	this.shape_28.setTransform(-70.7,45.7,0.938,0.938);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#93745F").s().p("AimB+QgPgRgFgaQgGgdARgJQAFgDAzgTQAtgRAagQQAsgdBohPIAcgQQAcgMAAAcQAAAcARAMQAIAHAIAAQgSARgZAUQgyAmghAPQgnAQgeATQgdATgMAPIgXAaQgNANgKAFQgQAGgUABIgCAAQgYAAgLgNg");
	this.shape_29.setTransform(36.4,109,0.938,0.938);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#93745F").s().p("Aj1FuQgKgiAQgaQAQgcATgaQAXhIAXhTQAuimgBg4QgBhNArhGQAzhTBagaQBUgYA2AmQAcATAKAYQAYBTh9B8QgPAQg+A1QgYAVgOAeQgMAbg7B5Qg3BxgHAcQgIAhgWAWQgVAVgrATQgLAFgJAAQgVAAgHgag");
	this.shape_30.setTransform(66.9,69.5,0.938,0.938);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#93745F").s().p("AglFkQi0gjhCgtQg0gjhIAEQhwAHgcgEQl7g2gfiNQgRhNAWhNQAZhTBHhKQBHhKBDgaQA4gVBygHQBZgGB6AMQA9AGArAHQB4AYEDgVQCDgLBqgPIAXABQAkACA9gDQBQgEC1BjQC6BmAKBBQALBRgLBdQgPB0gxBfQghBBjMAmQioAfi/AAQigAAixgjg");
	this.shape_31.setTransform(12.9,18.2,0.938,0.938);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#93745F").s().p("AA4HdQg8gChVgRQjOgpg1g7Qg0g6gdiPQgciIAYgSQAHgDAPgTQAMgPAqgYQA5ggAegUQAigXAggeQAjghARgMQASgOAfgQQBjgzAXgoQANgVAlgPIA+gUQAPgFAygeQAygdAagIQAygOBCgGIASAdQAUAjANAbQAMAcgMCKQgGBFgJBAQgfAZgiAfQhDA7gNAaQhLCWgVA3QgFAOgUBTQgSBRgLAZQgGAQg2AAIgNgBg");
	this.shape_32.setTransform(90.4,-18.1,0.938,0.938);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#93745F").s().p("ACsFaQgNgBgoghQguglgUgIQgigNgggYQgjgagZghQgWgcgcAMQgYATgEACQgEADgYgXQgcgagXghQhBhkAjhfQAjhdAvghQAXgRAPACIAGgGQAKgGAUgBIAkgCQAPgCAbgHIAdgkQAlgmAegHQAegIgSA3QgJAcgQAdIAVgaQAbgbAcgDQALAAgNATQgVAegFASIgIAbIAfAUQAiAdAIAlIgZgWIAdAgQAeAmAFAZQAFAagDAOQgCAHgDACQgKgfgSgKQABAcgGAHQgEAFgDgFIgDgHIACAdQAIAlAYAfQAbAiAWAuQAUAmAFAVQAEASgCAIQgCAIgOAXQgQAZgYARQgYASgTAAIgCAAg");
	this.shape_33.setTransform(142.1,-41,0.938,0.938);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#493939").s().p("AmlIPIAhgaIgtAAQBbgiAsgeIAbgXQhbAghVAGQgqADgZgDQAigYAXgZQAugxgygBQgzgBghAdQgKAIgHAJIAdgxQAWgmgOgKIgUgCIg9BAQAKglAcgmQA3hNBVgHQBZgHA4gWICFg+QBLgjBRifQBTi5Adg+QArhbB5g/QB3g/BSAWQBDASAgAlQAQATADAPQAbCKhpgWQghgHgqgXIgjgVQgsAPgbAwQghA5g2CtQg2Cqh5CmQhtCXhkA9QhNAvhzAJQgbACgYAAQgbAAgWgDg");
	this.shape_34.setTransform(-111.6,31.2,0.938,0.938);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#93745F").s().p("ACtDNQgPgIghgcIg9g4QgUgRhyhRQhxhOgYgXQgggeABgnQAAgkAZgKQAbgKAYAFQAdAHAdAgQAoAsBJBOQBWBYAgAcQAYAWAVAIQAZAKAYASQAjAbgfAeQgWAXgRAAQgHAAgGgEg");
	this.shape_35.setTransform(-34.4,97.4,0.938,0.938);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#93745F").s().p("AifFKQgVgIgNgQQgOgRACgRQAFgoADgIQAFgPAXgjQAog7AOgYQAegyAIgeQAHgagCgwQgEheABgqQAAhYBCggQA0gaBLASQB/Afg3CCQgSAqgmA3IgvA/QgMARgmBOQghBDgTAUQgXAXgMAYQgIARgZA6QgRAlghAAQgMAAgOgFg");
	this.shape_36.setTransform(-37.7,59,0.938,0.938);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#93745F").s().p("AB/CoQgrgGgKgHIgpgoIhhhoQhIhNgVgSQgcgaAAgNQAAgPAjgVQAVgNAbAHQAfAHAPAhQAWAwAFAIQAOAXAgAhQA1AxAWASQAoAgAdAEQAQACAGANQAGANgFAQQgLAjgiAAIgMgBg");
	this.shape_37.setTransform(140.1,94.1,0.938,0.938);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#93745F").s().p("AECD9QgpgEgfgbQgnghhchKQhohUgbgRQgYgOgWAAQgnAEgtgBQg/gBgbg4QgZg0ATg4QAjhmBdANQA0AHAtAhQAIAFAgAtQAlA0AQASQAQASBkBaQBpBdAcAeQAoAqAFALQAEAKgHAcQgFAXgfAAIgNgBg");
	this.shape_38.setTransform(101.9,61.6,0.938,0.938);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#493939").s().p("Ag4BhQgPgPACgYQABgKALgkQAGgTgEgHQgJgJgIgMQgTgdAngjQAWgVAKAMQAIAKAdAzQA2BNAIA6QADAXg9ACIgMAAQgxAAgQgQg");
	this.shape_39.setTransform(-11.7,119.6,0.938,0.938);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#493939").s().p("Ah/BDQgHgUASgqQARgpAUgPQAogdBFAZQAfALAJgFQALgLANgLQAPgMACAPQAGAfAHAMQAUAcgwAUIhTAXQg1ATgdAHQgWAFgOAAQgTAAgDgKg");
	this.shape_40.setTransform(-134.2,119.4,0.938,0.938);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#493939").s().p("AgGBiQgTgCgLgSQgFgKgMghQgHgYgIgLQgGgJgTgUQgQgQAQgTQAIgKARgQQAGgLANAGQAOAGAbAcQAUAXAfAXQAlAaAKAJQAVATgPAPQgKAMgaAHQgHADgaANQgRAJgNAAIgDAAg");
	this.shape_41.setTransform(161.9,112.7,0.938,0.938);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#493939").s().p("ABEA1QgZgIgZABQgQAAgeAIQgXAFgMgFQgigGgQgGQgbgKAcgYQAHgGAcgnQASgaAQADQARADASAAIAhgCIAUAAIAiAIQAlAHAKAvQAJAygvAIQgIgEgMgEg");
	this.shape_42.setTransform(10.2,116.3,0.938,0.938);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#222638").s().p("AAAAEIAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIgDAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIABgBIgDAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBABAAQAAAAAAAAQAFgFALAGIABAAIABACIgBABIgHABIgBAAIgBAAgAAHAAIAAAAIgCAAIACAAg");
	this.shape_43.setTransform(36.6,-97,0.937,0.937,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#222638").s().p("AgGACQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAIAMABQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgGAAIgHAAg");
	this.shape_44.setTransform(36.4,-96.8,0.937,0.937,1.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#443023").s().p("AgaAqQgEgMgKg6IAlgLQAXgHAVgEQgKAugSARQggAhgIAFQACgFgBgEg");
	this.shape_45.setTransform(24.1,-94.5,0.937,0.937,1.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#AFAFAF").ss(1.5).p("AA9AGQAKgPgsg8QgPgUggAbQgiAagHAkQgFAUALAQQAIAMAVALQAFADAVANQARAJAFgL");
	this.shape_46.setTransform(43.4,53.9,0.937,0.937,1.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2D1F15").s().p("ABKFHQgegMgPgDQgagFg/gqQhCgrAFgPQARguAWhNQAhhzAAgzQAAhCAIgfQAGgVAfhDQAyhsBDBXQAUAZgZBcQgTBEgdA/QgZA0gRA7QgVBKAEAoQAEAcAwAgQAuAegCAgQAAAVgQAAIgHgBg");
	this.shape_47.setTransform(47,33.2,0.937,0.937,1.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DDB294").s().p("AgKA3QgJgCgOgRQgPgTgMgEQgQgHgBgNQgBgNALgNIANgCQAPgDANAAQAIAAAMgKQALgJAUADQAWADALAPQAGAJAMAXQAMAPgqAZQgiAUgQAAIgGgBg");
	this.shape_48.setTransform(56.7,-35.6,0.937,0.937,-2.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DDB294").s().p("AgdBBQgNgMAAgZQAAghgEgNQgJgfABgIQAAgOAQgGQAPgGACADQADACAKAQQAIAIALADQALADAHANQAWApAEAxQACAagjABIgEAAQgeAAgRgRg");
	this.shape_49.setTransform(52.6,-23.7,0.937,0.937,-2.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DDB294").s().p("ABdCFQgBgFgRgSIgdgeQgugZgngXQhNgrgSgkQgUgqAOgcQAMgaAaAFQAbAFAMAFIAdATQARAMAjAwIAyBHQAJANAfAdQAZAZAKAVQAMAZgeAEIgPABQgQAAgBgHg");
	this.shape_50.setTransform(38.9,-37.4,0.937,0.937,-2.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#9B4242").s().p("ABODSQgUgEhLh2QhQiBgTgaQgYgjARgxQAPgoAWgPIAJgEQAPgCAeAGQAgAHASAlQAPAfgBAiQgCA6BOB7QAjA2gSAqQgPAfgXAAIgJgBg");
	this.shape_51.setTransform(22.2,-59.6,0.937,0.937,1.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9B4242").s().p("AAwE+Qg+gZg2gbQg4gcgOgOQgMgNgIiAIgHidQgCg3AFgdQAJg1AfgSQAegSARgEIAIgCIgZgDIAMgUQAQgZAQgWQCFBYAGAQQABAEgBAbQgBAXAMASQAQAYAZBgQAZBggCAgQgDAlgHAzQgIA3gEACQgHAbgNAWQgSAdgcAAQgOAAgQgGg");
	this.shape_52.setTransform(22.7,-57.6,0.937,0.937,1.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#827B77").s().p("AjNBJQgMgLAcgRQAmgXApgHQgCgPAAgQQAAghAKgKQAJgLA1gFQAmgFAkAAQAQAAATgCQALAAACARIAIA5IAfAJQAkANASARQAcAbAHAQQg3gRg6gIQg4gHgiAFIgYAFQgUAEgZAHIgkALQgeAIgZABIgHAAQgjAAgKgKg");
	this.shape_53.setTransform(29.8,-104.1,0.937,0.937,1.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DDB294").s().p("Ah+BsQAUgkANgeQAJgSACgLQAHgFAighQASgSAJguQgUAEgZAIIgkAKIgDgRIAggwQAngtAlASQAeANAlAOQAWAMABAdIAAAHIADARQAGAUAKANQAHAIABAOQAAANgGgBIgMgDQANATgFAFIgKARIAFALIgDAKIgBAJQgCAJgKACQgfAGgcgKQgGgCgGAMIgPAgQgKAYgKAYg");
	this.shape_54.setTransform(29.2,-90.8,0.937,0.937,1.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2D1F15").s().p("ACbFLQgfgEiviaQisiXgng0QgegqAIhfIAPhWIAcgcQAqgfBEgQQBEgQA1BKQAaAlANAoIgFAlQgEAsABAgQACAgBZBkQAxA4BlBrQA1A9g7AiQgoAWgpAAIgUgBg");
	this.shape_55.setTransform(32.9,-15.9,0.937,0.937,1.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#5B4431").ss(2.1).p("AgfEJQAiAiAPg/QAOg2gEhwQgDhlgPhmQgPhogTgn");
	this.shape_56.setTransform(49.6,22.9,0.937,0.937,1.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#5B4431").ss(1.5).p("AAiFDIAKAAQAZgDAVgLQAXgMAKgUQACgEACgIQAFgZgLgaIjrl3QgLgRgCg+QgCgxADgh");
	this.shape_57.setTransform(146.3,-31.2,0.937,0.937,1.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#5B4431").ss(1.5).p("AA/AcQgUgRgagOQgygegdAL");
	this.shape_58.setTransform(68.4,-35.9,0.937,0.937,1.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#5B4431").ss(1.5).p("ACwBZICkAkQCmAmAPAMQAJAHgjACQglACg5gFQiZgNh2gvQiNg4iZhSQilhagvg1Qgqgvg5AvQgRAPgSAXIgNAT");
	this.shape_59.setTransform(101.1,-18.8,0.937,0.937,1.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#493939").s().p("AiPCcQAGgbAJgQIgPAFQgmANhLASQhJARgWACQAOgKBDgtQBHguARgIIAdgQIAAAAQBKgrATgfQANgVAlgPIA9gUQAQgFAxgeQAygeAbgIQAdgIAqgGIArgFQgKAEgHAQIgSAtIBPgLIihCYQACgQAIgSQAOglAYgQQgvAdgzAkQhqBLgZAmQADgLAHgQQAOggATgbQgoAVgtAdQhaA6gZAoIAFgYg");
	this.shape_60.setTransform(99.6,-43.4,0.937,0.937,1.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#493939").s().p("ADHCGQABAcgFAIQgEAFgDgGIgDgHQgHgWgNgaQgag1gggVIgYgQQghgWgbgEQgYgFgjAHIgRAAQgPgBgEABIgMAAIgkALQgMAEgpAIQgnAHgVAIQATgmAegeQAZgZASgIQAOgHAJABIAGgGQAKgGATgBIARgBQAcgBAhgJIAegkQAlgmAegHQAPgEADAMQgSAOgRAQQgYAYgJARQgLAVAAALQABAGACABIARgEQATgGALgIIgCAEIADgFQAHgGACgGQAegkAhgDIAGABQghATgJARQgHAMgGAaIgEAYIAQgHQAAAFACgEIAUANIALAIQAiAdAIAkIgZgWIAeAiQAdAlAFAYQAGAagEAOQgCAIgDACQgKgggTgKg");
	this.shape_61.setTransform(142.1,-53,0.937,0.937,1.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#222638").ss(0.5).p("ABgBqQgegpgngwQhMhdgugd");
	this.shape_62.setTransform(154.7,-16,0.937,0.937,1.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2D2724").s().p("AgSAGQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQABgKARAAQAPAAAHAHQACABgBADQgBABAAAAQAAABgBAAQAAAAgBABQgBAAAAAAQgNgCgGAAIgIACIgCABQgEAAgCgCg");
	this.shape_63.setTransform(150.2,-38.5,0.937,0.937,1.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#443326").s().p("AiYCMQgngXgegkIgJgKIAAAAQgVgcgMgfQgMgcgCgaQgCgfADgWQAHguAbAKQAMAFADAKIAIApQAFAaARASQAGAGAdAWQATAMBjgDQBcgDAxgLQAjgIAPg5QALg+AHgMQAJgPAYgCQAXgCAWAKQAJAEAHAFQARAMACBFQACAmgDBCQAAAghRAvIhRAnQgvAHg6ACIgUAAQhiAAgsgZg");
	this.shape_64.setTransform(24.5,-15.2,0.937,0.937);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B7A598").s().p("AABCPQhEgHgZgSQgUgPABgiQAAgKAIgsIAMg0QAGgegBgTQgCgpA8gPQAcgHApAVQgDAYACAcQABAbAMAdQANAeAVAcIAIAKIARA0IgjgRQAJAZgJAYQgFANgmAAQgOAAgTgCg");
	this.shape_65.setTransform(-2.6,-11.7,0.937,0.937);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6D5341").s().p("AhSC+QjSgThCgXQhGgZgFh7QgCglAFg3QAEg1AAgHQgDgbALgPQAFgHAFgCIB1AaQB5AdARAKQAxAcCDAOQBDAHA4ABIBXgfQBWgnAAggIA+COQA8CYgMA3QgHAiiMAJQgrACgxAAQh4AAicgOg");
	this.shape_66.setTransform(19.7,2.6,0.937,0.937);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#5B4431").ss(2.6).p("ABIhNIANAGQALAIgLAJQgxAtglAgQhLBBgHgOQgIgNABgD");
	this.shape_67.setTransform(157.4,-16.5,0.937,0.937,1.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#93745F").s().p("AiGDbQgbgCACgYIAPhAQAIgmAIgPQAGgLAZgdQAXgbA3haQA2haAPgkQAMgaARAUQAdAgAOADQBAAQgqA7QgWAgg0AwQgRATgrBHIhDBxQgZAngMAEIgogEg");
	this.shape_68.setTransform(-111.7,96.6,0.937,0.937);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#93745F").s().p("AljGpQgrgIADgsQACgYAVgzQAMgeAIgFQAIgFAtgRQAwgVA0gzQA1g2AQguQAOgsANhaQALhMAHhZQASjwBnAxQAhAPA5A2QBDBAAPALIAiATQAnAXAgAbQBkBUgUBQQgWBUhkBAQhMAxhXAUQg0AMh+BbIilB1Qg4AigFACQgFABgIAAQgRAAgdgFg");
	this.shape_69.setTransform(-70.5,46.5,0.937,0.937);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#93745F").s().p("AgoFoQizgjhDgtQgzgjhJAEQhwAHgbgEQl8g2gfiNQgRhOAWhQQAahZBGhJQBIhLBCgaQA7gYBvgDQBZgJB6ASQA9AIArALQB4AYEDgVQCDgLBqgPIAXABQAkACA+gDQBPgEC1BjQC6BmAKBBQAOBigDAmQgIBbg+CmQgZBDjSAiQigAZjOAAQigAAixgjg");
	this.shape_70.setTransform(13.4,19.4,0.937,0.937);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#93745F").s().p("AA4HdQg8gChVgRQjOgpg1g7Qg0g6gdiPQgciIAYgSQAGgDAQgTQAMgPAqgYQA6ghAdgTQAigYAggdQAjggARgNQASgOAfgQQBjgyAXgpQANgVAlgPIA+gUQAPgFAzgeQAxgdAbgIQAxgOBCgGIASAdQAVAjAMAbQAMAcgMCKQgGBFgIBAQgfAZgiAfQhEA7gNAaQhLCWgVA3QgFANgTBUQgTBRgLAZQgHAQg1AAIgNgBg");
	this.shape_71.setTransform(91.3,-15.8,0.937,0.937,1.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#93745F").s().p("ACsFaQgNgBgoghQgtglgVgIQgigNgggYQgjgagZghQgWgcgbAMIgdAVQgEADgYgXQgcgagXghQhBhkAjhfQAjhdAvghQAXgRAPACIAGgGQAKgGAUgBIAkgCQAPgCAbgHIAdgkQAlgmAegHQAfgIgTA3QgJAcgQAdIAVgaQAbgbAcgDQALAAgNATQgVAegFASIgIAaIAfAVQAiAdAIAlIgZgWIAdAgQAeAmAGAZQAFAagEAOQgCAHgDACQgKgfgSgKQABAcgGAHQgEAFgDgFIgCgHIABAdQAIAlAZAfQAbAiAWAuQATAmAFAVQAEASgCAIQgCAIgOAXQgQAZgYARQgYASgTAAIgCAAg");
	this.shape_72.setTransform(143.7,-37,0.937,0.937,1.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#493939").s().p("AmlIPIAhgaIgtAAQBbgiAsgeIAbgXQhbAghVAGQgqADgZgDQAigYAXgZQAugxgygBQgzgBghAdQgKAIgHAJIAdgxQAXgmgPgKIgTgCIg+BAQALglAbgmQA3hNBVgHQBZgHA4gWICFg+QBLgjBRifQBTi5Adg+QArhbB5g/QB3g/BSAWQBDASAgAlQARATADAPQAaCKhpgWQgggHgqgXIgkgVQgsAPgbAwQghA5g2CtQg2Crh4ClQhuCXhkA9QhNAvhzAJQgbACgYAAQgbAAgWgDg");
	this.shape_73.setTransform(-64.2,-7,0.937,0.961,-1,0,0,50.2,-42.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#93745F").s().p("AC6DBQgPgHgjgaIhBgzQgUgQh4hJQh2hGgagWQgigbgCgnQgBgkAYgMQA4gbA3A2QApAoBQBJQBcBTAhAaQAaAUAVAGQAaAJAZAQQAlAYgdAhQgVAZgSAAQgGAAgGgDg");
	this.shape_74.setTransform(-22.7,103.9,0.937,0.937);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#93745F").s().p("AguFkQgXgBgSgMQgSgMgDgRQgHgoAAgIQAAgQAMgoQAUhGAGgZQANg5gBggQgCgagQgtQgfhXgNgqQgahUA1gyQArgpBMgGQCCgJgNCNQgEAugUA/QgLAhgPAqQgGAVgNBUQgLBJgNAaQgPAdgEAbQgDATgGA+QgGA2gzAAIgEAAg");
	this.shape_75.setTransform(-34.2,60.6,0.937,0.937);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#493939").s().p("AgoBmQgSgMgCgYQgBgKAEgmQACgTgFgGQgLgHgKgKQgNgOAEgUQAEgQANgRQARgYAMAJQAKAIAmAsQBEBCATA4QAHAWg8ANQgcAHgSAAQgVAAgLgIg");
	this.shape_76.setTransform(0.5,123.5,0.937,0.937);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#493939").s().p("AiGAtQgBgVAbgjQAbgkAYgKQAXgJAaAFQAZAGAgAWQAbASAKgCQAHgCAWgOQARgHgBAPQgDAeAFAOQALAhgzAGIhWACIhWAEQg2gBgBgSg");
	this.shape_77.setTransform(-134.4,113.1,0.937,0.937);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#93745F").s().p("AjABPQgYgKgFgQQgGgWAGgaQAGgbATgCQAIAAA0ACQAxADAegFQA1gIB+gdIA5gUQA3gPgLAZIgmBYQgYAIgeAIQg+AQgkgBQgqAAgkAFQgiAEgRAJQgqAWgSAAQgSgBgSgIg");
	this.shape_78.setTransform(46.9,107.4,0.937,0.937);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#93745F").s().p("Ai+GJQgPggAMgcIAbg6QAMhLAKhWQATirgJg3QgNhNAfhLQAmhaBWgoQBPgkA7AdQAeAPAOAWQAkBOhoCPQgOASgzA9QgVAZgJAhIgwCbQglB5gDAcQgCAigSAZQgSAZgnAZQgOAIgLAAQgRAAgKgWg");
	this.shape_79.setTransform(74.1,69.9,0.937,0.937);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#93745F").s().p("ACNCdQgsgDgLgFQgEgCgogiIhphgQhOhGgWgRQgfgXgBgNQgBgPAggYQAVgOAbAEQAgAFASAgQAZAsAGAJQAQAWAjAdQA4AtAYAQQArAdAdABQAQAAAHANQAHAMgEARQgJAmgnAAIgFAAg");
	this.shape_80.setTransform(142.2,104.8,0.937,0.937);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#93745F").s().p("ADSEmQgngNgZghQghgrhJhZQhVhpgWgUQgUgTgWgEQgngEgsgKQg9gOgPg+QgOg4AegyQA4hdBYAfQAyASAlApQAGAIAWAyQAaA7ALAVQAMAVBQBsQBTBxAVAjQAeAyADAMQACAKgMAaQgIARgUAAQgKAAgPgFg");
	this.shape_81.setTransform(106.4,67.8,0.937,0.937);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#493939").s().p("AgUBkQgSgDgIgVQgEgJgHgkQgFgYgFgLQgFgLgRgWQgNgRASgSQAKgJASgNQAJgKAMAHQANAJAWAfQAQAZAcAbQAhAfAJAKQASAWgQANQgMAKgbAEQgIABgbALQgNAEgKAAIgLgBg");
	this.shape_82.setTransform(162.8,122.1,0.937,0.937);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#493939").s().p("ABCBRQgFgHgKgIQgUgQgYgIQgOgFgggFQgXgDgKgJQgegSgMgJQgWgTAjgNQAJgDAngbQAbgSAOAIQANAJARAGIAgAKIATAIIAdATQAhAUgJAvQgIAqgiAAIgOgBg");
	this.shape_83.setTransform(21.6,107.2,0.937,0.937);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#222638").s().p("AAAAEIAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAgBIgCAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAgBIgCAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAGgFAKAGIABACIgBABIAAAAIgBAAIgFAAIAAABIgBAAIAAAAIgBAAg");
	this.shape_84.setTransform(38.3,-96.3,0.935,0.936,2.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#222638").s().p("AgGABQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAMABIABAAIgBACIgGAAIgHgBg");
	this.shape_85.setTransform(38,-96.1,0.935,0.936,2.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#2D1F15").s().p("ABKFHQgegMgPgDQgbgFg+gqQhCgrAFgPQARguAWhNQAhhzAAgzQAAhCAIgfQAGgVAfhDQAyhsBDBXQAUAZgZBcQgTBDgdBAQgZA0gRA7QgVBKAEAoQADAcAxAgQAuAegCAgQAAAVgQAAIgHgBg");
	this.shape_86.setTransform(45.9,33.9,0.935,0.936,2.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#DDB294").s().p("AgKA3QgJgCgOgRQgPgTgMgEQgQgHgBgNQgBgNALgNIANgCQAPgDANAAQAIAAAMgKQALgJAUADQAWADALAPQAGAJAMAXQALAPgpAZQgiAUgQAAIgGgBg");
	this.shape_87.setTransform(57.3,-35.4,0.935,0.936,-5.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#DDB294").s().p("AgdBBQgNgMAAgZQAAgigEgMQgJgfABgIQAAgOAQgGQAPgGACADIANASQAHAIAMADQALADAHANQAWApAEAxQACAagjABIgEAAQgeAAgRgRg");
	this.shape_88.setTransform(53.9,-23.4,0.935,0.936,-5.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#9B4242").s().p("ABODSQgUgEhLh2QhRiBgSgaQgYgjARgxQAOgoAWgPIAJgDQAPgDAfAGQAgAHASAlQAPAfgBAiQgCA6BOB7QAjA2gTAqQgOAfgXAAIgJgBg");
	this.shape_89.setTransform(23.1,-59.2,0.935,0.936,2.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#9B4242").s().p("AAwE+Qg9gZg3gbQg4gcgOgOQgMgNgIiAIgHidQgCg3AFgdQAJg1AfgSQAdgSARgEIAJgCIgagDIANgUIAggvQCFBYAGAQQABADgBAcQgBAXAMASQAQAYAZBgQAZBggCAgQgDAlgHAzQgIA3gEACQgHAbgNAWQgSAdgcAAQgOAAgQgGg");
	this.shape_90.setTransform(23.6,-57.3,0.935,0.936,2.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#827B77").s().p("AjNBJQgMgLAcgRQAmgXApgHQgCgOAAgQQAAgiAJgKQAKgLA0gFQAngFAjAAQARAAATgCQALAAACARIAHA5IAgAJQAjANATARQAcAbAHAQQg3gRg6gIQg4gHgiAFIgYAFQgUAEgZAHIgkALQgeAIgZABIgHAAQgjAAgKgKg");
	this.shape_91.setTransform(31.6,-103.5,0.935,0.936,2.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#DDB294").s().p("Ah+BsQAUgkAOgeQAIgSACgLQAIgFAhghQASgSAJguQgUAEgYAIIglAKIgDgRIAggwQAngtAmASQAdANAlAOQAXANAAAcIAAAHIAEARQAFAUAKANQAHAIABAOQABANgHgBIgMgDQANATgEAFIgKARIAEALIgDAKIAAAJQgDAJgJACQghAGgagKQgHgCgGAMIgOAgIgUAwg");
	this.shape_92.setTransform(30.7,-90.3,0.935,0.936,2.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#2D1F15").s().p("ACbFLQgfgEiviaQitiXgmg0QgegqAIhfIAPhWIAcgcQAqgfBEgQQBEgQA1BKQAaAlANAoIgFAlQgEAsABAgQACAgBZBkQAxA4BlBsQA1A8g7AiQgoAWgpAAIgUgBg");
	this.shape_93.setTransform(32.9,-15.4,0.935,0.936,2.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#5B4431").ss(2.1).p("AgfEJQAiAiAPg/QAOg2gEhvQgDhmgPhlQgPhpgTgn");
	this.shape_94.setTransform(48.6,23.6,0.935,0.936,2.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#5B4431").ss(1.5).p("AAiFDIAKAAQAZgDAVgLQAXgMAKgUQACgEACgIQAFgZgLgZIjrl4QgLgRgCg+QgCgxADgh");
	this.shape_95.setTransform(146.9,-29.5,0.936,0.936,3.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#5B4431").ss(1.5).p("AA/AcQgUgRgagOQgzgegcAM");
	this.shape_96.setTransform(69.4,-36.1,0.936,0.936,3.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#5B4431").ss(1.5).p("ACxBZICjAkQCnAmAOAMQAJAHgjACQgkACg6gFQiZgNh1gvQiNg3iahTQikhagwg1Qgpgvg5AvQgSAPgSAXIgNAT");
	this.shape_97.setTransform(101.5,-18.3,0.936,0.936,3.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#493939").s().p("AiPCcQAGgbAJgQIgPAFQgmANhLASQhJARgWACQANgKBEgtQBHguARgIIAdgQQBKgqATggQANgVAlgPIA9gUQAPgFAygeQAygeAbgIQAdgIAqgGIArgFQgKAEgHAQIgSAtIBPgLIihCYQACgQAIgSQAOglAYgQQgvAdgzAkQhqBLgZAmQADgLAHgQQAOggATgbQgoAVgtAdQhbA6gYAoIAFgYg");
	this.shape_98.setTransform(100.7,-42.9,0.936,0.936,3.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#5B4431").ss(2.6).p("ABuiqIAMgBQAJABgMAOQgIAIhYAlQhVAkgNATQgTAZgQA2QgPA4AAApQABAiAJAMQAEAHAFgB");
	this.shape_99.setTransform(145.1,-37.3,0.936,0.936,3.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#493939").s().p("ADHCGQABAdgFAHQgEAFgDgGIgDgGQgHgWgNgbQgag1gggVIgYgQQghgWgbgEQgYgFgjAHIgRAAQgPgBgEABIgMAAIgkALQgMAEgqAIQgmAHgWAIQATgmAfgeQAZgZASgIQAOgHAJABIAGgGQAKgGATgBIARgBQAdgBAggJIAegkQAlgmAegHQAPgEADAMQg1AqgPAdQgLAVAAALQABAGACABIARgEQATgGALgIIgCAEIADgFQAHgGACgGQAegkAhgDQAEAAABABQghAUgIAQQgHAMgGAaIgEAYIAQgHQAAAFACgEIAUANIALAIQAiAdAIAkIgZgVQALAKATAXQAdAlAFAYQAGAagEAOQgCAIgDACQgKgggTgKg");
	this.shape_100.setTransform(143.3,-51.4,0.936,0.936,3.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#222638").ss(0.5).p("ABgBqQgegpgmgvQhNhegtgd");
	this.shape_101.setTransform(154.9,-14.2,0.936,0.936,3.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#2D2724").s().p("AgSAGQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQABgJARgBQAPAAAHAHQACABgBADQgBABAAAAQAAABgBAAQAAAAgBABQgBAAAAAAQgNgCgGAAIgIACIgCABQgEAAgCgCg");
	this.shape_102.setTransform(151,-36.7,0.936,0.936,3.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#443326").s().p("AiYCMQgmgWggglIgIgKIAAAAQgVgcgMgfQgMgcgCgaQgCgfADgWQAHguAbAKQAMAFADAKIAIApQAFAaARASQAGAGAdAWQATAMBjgDQBcgDAxgLQAjgIAPg5QALg+AHgMQAJgPAYgCQAWgCAXAKQAJAEAGAFQASAMACBFQACAmgDBCQAAAghRAvIhRAnQgvAHg6ACIgUAAQhiAAgsgZg");
	this.shape_103.setTransform(24.3,-15.2,0.935,0.936);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#B7A598").s().p("AABCPQhEgHgYgSQgVgPABgiQABgKAIgsIALgzQAHgfgCgTQgCgpA8gPQAdgHAoAVQgDAYACAcQACAbAMAdQAMAeAVAcIAJAKIAQA0IgjgRQAKAZgKAYQgFANgmAAQgPAAgSgCg");
	this.shape_104.setTransform(-2.8,-11.6,0.935,0.936);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6D5341").s().p("AhSC+QjSgThCgXQhGgZgFh7QgCglAFg3QAEg0gBgIQgCgbAKgPQAGgHAFgCIB1AaQB5AdARAKQAxAcCDAOQBDAHA4ABIBXgfQBWgnAAggIA+COQA8CYgMA3QgHAiiMAJQgrACgyAAQh3AAicgOg");
	this.shape_105.setTransform(19.5,2.7,0.935,0.936);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#5B4431").ss(2.6).p("ABIhNIANAGQAMAIgMAJQgwAtgmAgQhLBBgHgOQgHgNAAgDIADAB");
	this.shape_106.setTransform(157.7,-14.6,0.936,0.936,3.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#93745F").s().p("AiGDbQgbgBACgYIAPhBQAIgmAIgPQAGgLAYgdQAXgaA4hbQA2haAPgjQAMgbARAUQAdAgAOADQBAARgqA6QgWAgg0AwQgRAUgrBHIhDBwQgZAngMAEIgogEg");
	this.shape_107.setTransform(-111.6,92.9,0.935,0.936);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#93745F").s().p("AlzGyQgqgLAGgrQADgXAYgyQAOgdAIgFQAIgEAugPQAxgSA3gwQA5gyASguQAPgkAJhdIARirQAokpBsBPQAhAYA5BMQA8BOAUAQIAgAVQAmAaAeAcQBfBagZBNQgbBUhoA6QhPAthXAOQg2AJiDBTIirBrQg6AfgFABIgJABQgQAAgigJg");
	this.shape_108.setTransform(-70.9,43.3,0.935,0.936);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#93745F").s().p("AgnFtQizgjhDgtQg0gjhIAEQhwAHgbgEQl7g0ggiPQgShPAXhUQAahdBGhJQBJhNBBgaQA+gaBsABQBZgLB6AXQA9ALArAOQB4AYEDgVQCDgLBqgPIAXABQAkACA+gDQBPgEC3BjQC+BmAJBBQAKBCgMBaQgKBUgkCZQgQBFjeAhQiiAYjZAAQigAAixgjg");
	this.shape_109.setTransform(13.1,19,0.935,0.936);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#93745F").s().p("AA4HdQg8gChVgRQjOgpg1g7Qg0g6gdiPQgciIAYgSQAHgDAPgTQAMgPAqgYQA5ggAegUQAigXAggeQAjghARgMQASgOAfgQQBjgyAXgpQANgVAlgPIA+gUQAPgFAygeQAygdAagIQAygOBCgGIASAdQAUAjANAbQAMAcgMCKQgGBFgJBAQgfAZgiAfQhDA7gNAaQhLCWgVA3QgFANgTBUQgTBRgLAZQgGAQg2AAIgNgBg");
	this.shape_110.setTransform(91.7,-15.5,0.936,0.936,3.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#93745F").s().p("ACsFaQgNgBgoghQgtglgVgIQgigNgggYQgjgagZghQgWgcgbAMQgaAUgDACQgEACgYgXQgcgagXghQhBhkAjheQAjheAvghQAXgRAPACIAGgGQAKgGAUgBIAkgCQAPgCAbgHIAdgkQAlgmAegHQAfgIgTA3QgJAcgQAdIAVgaQAbgbAcgDQALAAgNATQgVAegFASIgIAaIAfAVQAiAdAIAlIgZgWIAdAgQAeAmAGAZQAFAagEAOQgCAHgDACQgKgfgSgKQABAdgGAGQgEAFgDgFIgDgGIACAdQAIAkAYAfQAbAjAWAtQAUAmAFAVQAEASgCAIQgCAIgOAXQgQAZgYARQgYASgTAAIgCAAg");
	this.shape_111.setTransform(144.5,-35.4,0.936,0.936,3.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#493939").s().p("AmJHtIAfgZIgqAAQBUgfAqgcIAZgWQhVAehQAGQgnADgXgEQAfgWAWgXQArgugvgBQgvgBggAbQgJAIgGAJIAbgvQAVgkgOgIIgSgCIg6A8QALgjAZgkQA0hIBPgGQBTgHA0gUIB9g6QBGghBMiVIBojnQAphVBxg7QBwg7BMAVQA/ARAeAiQAPARADAPQAZCBhigVQgfgHgngVIghgTQgpANgaAuQgeA1gzCiQgyCfhxCbQhnCNhdA5QhIAshsAIQgaACgWAAQgZAAgUgCg");
	this.shape_112.setTransform(-64.7,-7.6,1,1.03,-2,0,0,46.7,-40.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#93745F").s().p("ACuDNQgQgIgggdIg+g3QgTgRhzhQQhyhOgYgXQgggeABgnQAAgkAZgKQA6gXAzA5QApAsBJBNQBXBYAfAcQAYAWAVAIQAZAJAYATQAjAageAfQgWAWgRAAQgHAAgGgDg");
	this.shape_113.setTransform(-21.1,108.9,0.935,0.936);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#93745F").s().p("Ag6FbQgTgLgEgRQgJgnAAgIQgBgQAKgpQAQhFAFgbQALg6gEgfQgDgcgSgrQgkhYgOgmQgehTAyg0QApgsBMgJQCBgPgGCNQgCAugRBAIgVBMQgGAVgIBVQgHBKgMAaQgOAegDAaIgEBSQgEA4g3ABQgXAAgSgLg");
	this.shape_114.setTransform(-37.9,64.6,0.935,0.936);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#493939").s().p("AgoBmQgSgMgCgYQgBgLAEglQACgTgFgGQgLgHgKgKQgNgOAEgUQAEgQANgRQASgYAMAJQAJAIAmAsQBEBCATA4QAHAWg8ANQgcAHgSAAQgVAAgLgIg");
	this.shape_115.setTransform(2.6,129.6,0.935,0.936);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#493939").s().p("AiGAtQgBgVAbgjQAbgkAYgKQAXgJAaAFQAZAGAgAVQAbATAKgCQAHgCAVgOQASgIgCAQQgCAeAFANQALAigzAGIhWACIhWAEQg2gBgBgSg");
	this.shape_116.setTransform(-134.3,106.9,0.935,0.936);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#93745F").s().p("AicBYQgRAAgTgIQgYgKgFgRQgGgWAGgZQAGgcATgCQAGAAA2ADQAwACAfgFQA1gIB+gdIA5gUQA3gPgLAZIgmBYQgYAIgeAIQg+AQgkgBQgqAAgkAFQgiAFgRAIIggAPQgPAHgLAAIgCAAg");
	this.shape_117.setTransform(57.6,101.3,0.935,0.936);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#93745F").s().p("AivGPQgQggAKgdIARgoIAIgSQAJhMAGhWQANisgLg2QgRhMAdhNQAihbBVgrQBMgoA9AbQAfAOAPAVQAmBNhiCSQgMATgyBAQgUAZgIAhQgGAbgjCCQghB7gBAcQgBAigRAZQgRAagmAaQgOAKgLAAQgRAAgKgVg");
	this.shape_118.setTransform(83.5,64.6,0.935,0.936);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#93745F").s().p("AB9CpQgqgHgLgHQgEgCgkgmIhghqQhIhNgTgTQgcgaAAgNQAAgPAjgUQAVgNAbAHQAfAIAPAhQAVAwAFAJQAOAXAgAhQA0AzAVARQApAhAcADQAQACAGAOQAFANgFAQQgLAigiAAIgMgBg");
	this.shape_119.setTransform(130.7,108.7,0.935,0.936);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#93745F").s().p("ACtE7QgkgSgUgkQgbgvg8hjQhEhzgTgYQgRgWgVgHQgmgKgqgQQg7gXgGg/QgGg5AmguQBEhUBTAsQAwAZAcAuQAFAIAPA1QARA9AJAXQAJAXA/B2QBCB9AQAlQAXA1AAAMQABALgQAZQgJAMgPAAQgMAAgSgJg");
	this.shape_120.setTransform(99.1,68.9,0.935,0.936);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#493939").s().p("AgdBkQgSgGgGgVQgEgKgDgjQgCgagEgLQgEgLgPgXQgLgTATgQQALgIAUgLQAJgJALAIQANAKASAhQAPAbAZAcQAdAiAIANQAQAWgRAMQgNAJgbACQgIAAgcAIQgJACgIAAQgJAAgIgCg");
	this.shape_121.setTransform(149.5,127.6,0.935,0.936);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#493939").s().p("ABCBRQgFgHgKgIQgUgQgYgIQgOgFghgFQgWgDgKgJQgegSgMgJQgWgTAjgNQAJgDAngbQAbgSAOAIQANAJARAGIAgAKIATAHIAdATQAhAVgJAvQgIAqgjAAIgNgBg");
	this.shape_122.setTransform(34.6,101.8,0.935,0.936);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#222638").s().p("AAAAEIAAAAIgBgCIgCAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIAAAAIgCAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAGgFAKAGIABAAIAAABIgBACIgBAAIgFAAIAAABIgBABIgBgBg");
	this.shape_123.setTransform(38,-96.6,0.937,0.937,2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#222638").s().p("AgGABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAMABIABAAIgBACIgFAAIgIgBg");
	this.shape_124.setTransform(37.8,-96.5,0.937,0.937,2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#443023").s().p("AgaApQgEgMgKg5IBRgWQgKAtgSARIgoAnQACgGgBgEg");
	this.shape_125.setTransform(25.5,-94.3,0.937,0.937,2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#AFAFAF").ss(1.5).p("AA9AGQALgQgtg7QgPgUggAbQgiAagHAkQgFAUALAPQAIAMAVAMQAXAOADABQARAJAFgK");
	this.shape_126.setTransform(42.8,54.3,0.937,0.937,2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#2D1F15").s().p("ABKFHQgegMgPgDQgagFg/gpQhCgsAFgPQASgxAVhKQAhhzAAgzQAAhCAIgfQAGgVAfhDQAag6AggCQAbgBAgAoQAUAZgZBcQgTBEgdA/QgZA1gRA6QgVBLAEAnQAEAcAwAgQAuAegCAgQAAAVgQAAIgHgBg");
	this.shape_127.setTransform(46.7,33.7,0.937,0.937,2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#DDB294").s().p("AgKA3QgJgCgOgSQgPgSgMgFQgQgGgBgNQgBgNALgOIANgCQAPgCANAAQAIAAAMgKQALgJAUADQAWADALAPQAGAJAMAXQAMAPgqAYQgiAVgRAAIgFgBg");
	this.shape_128.setTransform(60.3,-36.3,0.937,0.937,-6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#DDB294").s().p("AgdBBQgNgMAAgZQAAghgEgNQgJggABgIQAAgNAQgGQAPgGACADQADACAKAPQAIAJALADQALACAHANQAWAqAEAwQACAbgjABIgCAAQgfAAgSgRg");
	this.shape_129.setTransform(56.9,-24.2,0.937,0.937,-6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#DDB294").s().p("ABdCFQgBgFgRgSQgOgQgPgOIhVgwQhNgsgSgkQgUgpAOgdQAMgZAaAFQAbAFAMAFIAdATQARAMAjAwIAyBGQAJAOAfAdQAZAYAKAWQAMAYgeAFIgPABQgQAAgBgHg");
	this.shape_130.setTransform(42.4,-37,0.937,0.937,-6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#9B4242").s().p("ABCDHQgSgFhChwQhHh7gRgaQgVgiARgtQAPgmAVgMIAJgDQAOgCAcAHQAeAIAPAjQAOAdgDAgQgEA2BGB1QAfA0gTAnQgOAcgVAAIgKgBg");
	this.shape_131.setTransform(23.1,-59.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#9B4242").s().p("AAwE+Qg9gZg3gbQg4gcgOgOQgMgMgIiAIgHieQgCg2AFgdQAJg1AfgTQAegRARgFIAIgCIgZgCIAMgVQAQgZAQgWQCFBYAGAQQABAEgBAbQgBAYAMASQAQAXAZBgQAZBggCAhQgDAkgHAzQgIA3gEACQgHAbgNAWQgSAdgdAAQgNAAgQgGg");
	this.shape_132.setTransform(23.6,-57.5,0.937,0.937,2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#827B77").s().p("AjNBJQgMgLAcgRQAmgXApgHQgCgOAAgQQAAgiAKgKQAJgLA1gFQAmgFAkAAQAQAAATgCQALAAACARIAIA6IAfAIQAkANASARQAfAeAEANQg3gRg6gHQg1gIglAGQgMABgMADIhRAWQgfAIgYABIgHAAQgjAAgKgKg");
	this.shape_133.setTransform(31.3,-103.8,0.937,0.937,2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#DDB294").s().p("Ah+BsQAUgjANgeQAJgUACgKIApgmQASgSAJgtIhRAWIgDgSIAggwQAngtAlASQAeANAlAOQAWANABAcIAAAHIADASQAGAUAKAMQAHAIABAOQAAANgGgBIgMgDQANAUgFAEIgGAKIgEAIIAFAKIgDAKIgBAJQgCAJgKACQgeAHgdgKQgGgDgGAMQgIAUgHAMIgUAwg");
	this.shape_134.setTransform(30.6,-90.6,0.937,0.937,2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#DDB294").s().p("AAVAzIghgEIgQgDIgtheIATAQQAXARASAGQANAFAqAFQAiAGgCATQgBAQgRAHQgMAEgOAAIgJAAg");
	this.shape_135.setTransform(49.6,-39.3,0.937,0.937,-6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#2D1F15").s().p("ACbFLQgfgEiviaQisiXgng1QgegqAIheIAPhXIAcgbQAqgfBEgQQBEgRA1BLQAaAlANAoIgFAlQgEArABAgQACAgBZBkQAxA4BlBsQA1A9g7AiQgoAWgpAAIgUgBg");
	this.shape_136.setTransform(33.3,-15.6,0.937,0.937,2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#5B4431").ss(2.1).p("AgfEJQAiAiAPg/QAOg2gEhwQgDhmgPhlQgPhogTgn");
	this.shape_137.setTransform(49.4,23.4,0.937,0.937,2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#5B4431").ss(1.5).p("AAiFDQAGAAAEAAQAZgCAVgLQAXgNAKgUQACgEACgIQAFgZgLgZIjrl4QgLgRgCg+QgCgxADgh");
	this.shape_138.setTransform(148.6,-26.8,0.937,0.937,5.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#5B4431").ss(1.5).p("AA/AcQgUgRgagOQgygegdAM");
	this.shape_139.setTransform(71.3,-36.8,0.937,0.937,5.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#5B4431").ss(1.5).p("ACwBaICkAjQCmAmAPAMQAJAHgjACQglACg5gFQiZgNh2guQiOg4iYhTQilhagvg1Qgqgvg5AwQgRAPgSAWIgNAU");
	this.shape_140.setTransform(102.7,-17.5,0.937,0.937,5.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#493939").s().p("AiPCcQAGgbAJgQIgPAFQgmAOhLARQhIARgXACQAOgKBDgtQBHguARgIIAdgQIAAAAQBLgrASgfQANgVAlgPIA9gUQAPgFAygeQAygeAbgHQAngMBLgIQgKAEgHAQIgSAtIBPgLIihCYQACgQAIgSQAOglAYgPQgvAdgzAjQhqBLgZAmQADgLAHgQQAOggATgbQgoAVgtAdQhaA6gZAoIAFgYg");
	this.shape_141.setTransform(102.9,-42.2,0.937,0.937,5.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#5B4431").ss(2.6).p("ABuipIAMgCQAJABgMAOQgIAJhYAkQhVAlgNASQgTAYgQA3QgPA4AAApQABAiAJAMQAEAHAFgB");
	this.shape_142.setTransform(147.1,-34.6,0.937,0.937,5.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#493939").s().p("ADHCGQABAdgFAHQgEAFgDgFIgDgHQgHgWgNgbQgag1gggVIgYgQQghgWgbgEQgYgFgjAHIgRAAQgPAAgEAAIgMAAIgkALQgMAEgpAIQgnAHgVAIQATgmAegeQAZgZASgIQAOgHAJABIAGgFQAKgGATgCIARgBQAdgBAggJIAegkQAlglAegIQAPgEADAMQg1AqgPAdQgLAVAAALQABAGACABIARgEQATgGALgIIgCAEIADgFQAHgGACgFQAegkAhgEIAGABQgiAVgIAPQgHANgGAaIgEAXIAQgHQAAAFACgEQALAGAJAHIALAJQAiAcAIAkIgZgWIAeAiQAdAlAFAYQAGAagEAOQgCAIgDACQgKgggTgKg");
	this.shape_143.setTransform(146,-48.8,0.937,0.937,5.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#222638").ss(0.5).p("ABgBqQgegpgngvQhMhdguge");
	this.shape_144.setTransform(156,-11.1,0.937,0.937,5.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#2D2724").s().p("AgSAGQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQABgJARgBQAPAAAHAHQAAAAAAAAQABABAAABQAAAAAAABQAAAAAAABQgBABAAAAQAAABgBAAQAAAAgBABQgBAAAAAAIgKgBIgJAAIgIABIgCABQgEAAgCgCg");
	this.shape_145.setTransform(153,-33.8,0.937,0.937,5.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#443326").s().p("AiYCMQgogXgdgjIgJgLQgrg5gEg4QgCgeADgWQAHgwAbAMQAMAEADALIAIAoQAFAaARASQAGAGAdAWQATAMBjgDQBbgDAygKQAjgIAPg6QALg+AHgMQAJgPAYgCQAWgBAXAJIAQAJQARAMADBFQABAmgDBCQAAAghRAvIhRAnQgvAHg6ACIgUAAQhiAAgsgZg");
	this.shape_146.setTransform(24.6,-15.1,0.937,0.937);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#B7A598").s().p("AABCPQhEgHgZgSQgUgPABgiQAAgJAIgtIAMgzQAGgfgBgTQgCgpA8gPQAbgGAqAUQgDAYACAdQADA5AsA4IAAAAIAIAKIARA0IgjgRQAJAZgJAYQgFAMgmAAQgOAAgTgBg");
	this.shape_147.setTransform(-2.5,-11.6,0.937,0.937);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#6D5341").s().p("AhSC+QjSgThCgXQhGgZgFh7QgCglAFg3QAEg1AAgHQgDgbALgPQAFgHAFgCIB1AaQB5AdARAKQAxAcCDAOQBDAHA4ABIBXgfQBWgmAAggIA+COQA8CXgMA3QgHAiiMAJQgtACg0AAQh2AAiZgOg");
	this.shape_148.setTransform(19.8,2.7,0.937,0.937);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#5B4431").ss(2.6).p("ABIhNIANAGQALAIgLAKQgxAtglAgQhLBAgHgOQgIgNABgD");
	this.shape_149.setTransform(158.7,-11.4,0.937,0.937,5.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#93745F").s().p("Ah1DaIAAhCQAAgnAEgQQADgMARgiQAQgfAhhlQAhhlAHglQAEgcAVAPQAkAYAOAAQBCACgbBCQgOAkgoA7QgMAWgaBQIgmB8QgQAtgLAGIgnAGIgJABQgTAAgDgVg");
	this.shape_150.setTransform(-106.8,90.9,0.937,0.937);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#93745F").s().p("AmOFaQgogQAKgqQAGgXAegvQARgbAJgDQAJgEAvgJQAzgMA8gpQA+gsAYgrQAXgqAIhNQAIhLgKhPQgJhNArgdQAlgYBGAMQA9ALBDAjQBAAgAgAiIAeAYQAjAeAaAgQBTBkgiBKQgkBQhuAuQhUAjhYAEQg3ACiLBDQiSBJglAOQg+AXgEABIgDAAQgQAAgngPg");
	this.shape_151.setTransform(-68.6,47.2,0.937,0.937);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#93745F").s().p("Ag3FuQi0gjhCgtQg0gjhIAEQhxAGgbgDQl7g2gfiOQgShPAXhVQAahgBGhJQBGhKBDgZQA4gWBygHQBZgGB6AYQA+ALArANQB3AYEEgWQCCgKBrgQIAXACQAjABA+gDQBVgDDEBSQDPBXAJA/QAJA+gvCkQgqCTgpBVQgfA/jFAVQhuALjxAAQigAAixgjg");
	this.shape_152.setTransform(14.9,19,0.937,0.937);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#93745F").s().p("AA4HdQg8gChVgRQjOgpg1g7Qg0g6gdiOQgciJAYgRQAGgEAQgTQAMgPAqgYQA6ggAdgUQAjgXAfgeQAjghARgMQASgOAfgQQBjgyAXgpQANgVAlgPIA+gUQAPgFAzgeQAxgdAbgIQAxgOBCgGIASAeQAVAiAMAcQAMAbgMCKQgGBFgIBAQgfAZgiAfQhEA8gNAZQhLCYgVA1QgFANgTBUQgTBRgLAaQgHAPg0AAIgOgBg");
	this.shape_153.setTransform(92.8,-15.2,0.937,0.937,5.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#93745F").s().p("ACsFaQgNgBgoghQgtglgVgIQgigNgggYQgjgagZghQgWgcgbAMQgaAUgDACQgEACgYgWQgcgbgXghQhBhkAjheQAjhdAvgiQAXgRAPACIAGgFQAKgGAUgCIAkgCQAQgCAagHIAdgkQAlglAegIQAfgIgTA4QgJAbgQAdIAVgaQAbgbAcgDQALAAgNATQgVAegFASIgIAaIAfAVQAiAdAIAlIgZgWIAdAhQAeAlAGAaQAFAZgEAOQgCAHgDACQgKgfgSgKQABAdgGAGQgEAFgDgFIgCgGIABAdQAIAkAZAfQAbAjAWAtQATAmAFAVQAEATgCAHQgCAIgOAXQgQAZgYARQgYASgTAAIgCAAg");
	this.shape_154.setTransform(146.4,-32.7,0.937,0.937,5.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#493939").s().p("AmlIPIAhgbIgtAAQBbghAsgeIAbgXQhbAghVAGQgqADgZgDQAigZAXgYQAugxgygCQgzgBghAdQgKAKgHAJIAdgzQAXgmgPgJIgTgCIg+BAQALglAbgmQA3hNBVgHQBZgHA4gWICFg+QBLgjBRifQBTi5Adg+QArhcB5g/QB3g+BSAWQBDASAgAlQARATADAPQAaCKhpgXQgggHgqgWIgkgVQgsAPgbAwQghA5g2CtQg2Cqh4CmQhuCXhkA9QhNAvhzAIQgbACgYAAQgbAAgWgCg");
	this.shape_155.setTransform(-66.3,-6.8,0.937,0.961,-2.7,0,0,47.9,-42.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#93745F").s().p("ACGDpQgOgKgbgiIgyhCQgQgVhhhkQhhhhgUgbQgagkAIgmQAHgiAagGQA9gMApBBQAfAzA6BZQBEBnAaAhQAUAaATAMQAWAOAVAWQAdAhgjAYQgWAPgQAAQgKAAgHgGg");
	this.shape_156.setTransform(-24.9,113.2,0.937,0.937);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#93745F").s().p("Ag6FcQgTgLgEgRQgJgoAAgIQAAgQAJgpQARhKAEgWQALg5gDggQgDgcgTgrQgkhWgOgoQgehTAyg0QApgsBMgJQCBgPgGCNQgCAugRBAIgVBMQgFAVgJBWQgHBJgMAaQgOAegDAbIgEBRQgEA4g3ABIgCAAQgWAAgRgKg");
	this.shape_157.setTransform(-37.7,64.7,0.937,0.937);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#493939").s().p("AgoBmQgSgMgCgYQgBgKAEglQACgUgFgGQgLgHgKgKQgNgOAEgUQAEgQANgRQARgYAMAJQAKAIAmAtQBEBBATA4QAHAWg8AOQgbAGgTAAQgVAAgLgIg");
	this.shape_158.setTransform(-2.5,137.9,0.937,0.937);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#493939").s().p("AiGAtQgBgVAbgjQAbgkAYgKQAXgJAaAFQAZAGAgAWQAbASAKgCQAHgCAWgOQARgIgBAQQgDAeAFAOQALAhgzAGIhWACIhWAEQg2gBgBgSg");
	this.shape_159.setTransform(-127.2,107.5,0.937,0.937);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#93745F").s().p("AibBYQgSgBgSgIQgYgKgFgQQgHgWAGgZQAHgcATgCQAGAAA2ADQAwACAfgFQA0gIB+gdIA5gUQA3gPgLAZIgmBYQgYAIgeAIQg+AQgkgBQgqAAgjAFQgjAEgRAJIgfAPQgQAHgLAAIgBAAg");
	this.shape_160.setTransform(81.8,94.5,0.937,0.937);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#93745F").s().p("ACYFZQgjgPgJgZQgFgQgFgTIgEgQQgng5gwg/Qhfh+gtggQg/gugVhCQgahOA1hDQAwg8BJgIQAlgEAcAJQBUAlgBCQQAAATgGBBQgCAbANAaQALAXAwBpQAvBjAQAUQAUAZABAZQAAAZgTAiQgMAVgUAAQgLAAgNgGg");
	this.shape_161.setTransform(81.8,60.9,0.937,0.937);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#93745F").s().p("ABhC4QgpgNgJgIQgDgDgfgrIhPh2Qg6hYgRgWQgYgeACgMQADgPAlgPQAXgJAaALQAdAMAKAjIARA8QAKAZAbAlQAsA7ASAUQAjAmAcAIQAPAFAEAOQADAOgHAOQgOAcgbAAQgJAAgMgEg");
	this.shape_162.setTransform(119.8,113.2,0.937,0.937);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#93745F").s().p("ACtE7QglgSgUgkQgagvg8hjQhFhzgTgYQgRgWgVgHQgmgKgqgQQg7gXgGg/QgFg5AlguQBFhUBTAsQAvAZAdAuQAFAIAPA1QARA+AJAXQAJAWA/B3QBBB8AQAlQAXA2ABAMQABALgQAYQgJAMgPAAQgMAAgSgJg");
	this.shape_163.setTransform(90.7,72.1,0.937,0.937);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#493939").s().p("AgdBkQgSgFgGgVQgEgLgDgjQgCgZgEgMQgEgLgPgXQgLgTATgPQALgIAUgMQAJgJALAJQANAJASAiQAPAaAZAcQAdAjAIAMQAQAXgRAMQgNAIgbACQgIAAgcAIQgJADgJAAQgJAAgHgDg");
	this.shape_164.setTransform(137.6,134.8,0.937,0.937);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#493939").s().p("ABCBRQgFgHgKgIQgUgQgYgIQgOgFghgFQgWgDgKgJQgegSgMgJQgWgTAjgNQAJgDAngbQAbgSAOAIQANAJARAGIAgAKIATAIIAdATQAhAUgJAvQgIAqgjAAIgNgBg");
	this.shape_165.setTransform(52.4,94.5,0.937,0.937);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#222638").s().p("AAAAEIAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgCAAIgBgBIAAgBIgCAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAGgFALAGIAAAAIAAABIgBACIAAAAIgDAAIgDgBIAAACIgBAAIgBAAg");
	this.shape_166.setTransform(41.8,-93.9,0.936,0.936,5.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#222638").s().p("AgFABQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIALABQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAIgHAAIgGgBg");
	this.shape_167.setTransform(41.6,-93.8,0.936,0.936,5.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#443023").s().p("AgaApQgFgMgJg5IAlgLIAsgLQgKAugSARQgeAggJAGQABgGgBgEg");
	this.shape_168.setTransform(29.2,-92.4,0.936,0.936,5.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#AFAFAF").ss(1.5).p("AA+AGQAKgQgtg7QgPgUggAbQgiAagHAkQgEAUAKAPQAJANAUALQAFADAVANQARAIAFgK");
	this.shape_169.setTransform(37.5,56.8,0.936,0.936,5.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#2D1F15").s().p("ABKFHQgegMgPgDQgagFg+gpQhDgsAGgPQARgtAWhNQAghzAAg0QAAhCAIgfQAGgVAfhDQAag6AggCQAbgBAgAoQAUAZgZBdQgTBEgdA+QgZA1gRA6QgVBLAEAnQAEAcAwAgQAuAegBAhQgBAUgQAAIgHgBg");
	this.shape_170.setTransform(42.6,36.5,0.936,0.936,5.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#DDB294").s().p("AgKA3QgJgCgOgRQgPgTgMgEQgRgHgBgNQAAgNALgOIANgCQAPgCANAAQAIAAAMgKQALgJAUADQAWADAKAPQAHAJAMAXQALAPgpAZQgiAUgQAAIgGgBg");
	this.shape_171.setTransform(62,-35.8,0.936,0.936,-7.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#DDB294").s().p("AgdBBQgNgMAAgZQABghgEgNQgJgfAAgJQAAgNAQgGQAPgGADADIAMARQAIAJAMADQAKADAHANQAWAnAEAyQACAbgjABIgCAAQgeAAgTgRg");
	this.shape_172.setTransform(58.9,-23.7,0.936,0.936,-7.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#DDB294").s().p("ABdCFQgCgKgtgrQgugZgngXQhNgrgRgkQgVgqAOgcQAMgaAaAFQAbAFAMAFIAdATQASAMAiAwIAyBGQAJANAfAeQAZAYAKAWQAMAZgeAEIgPABQgPAAgCgHg");
	this.shape_173.setTransform(44.1,-36.1,0.936,0.936,-7.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#9B4242").s().p("ABODSQgUgEhLh2QhQiBgTgaQgYgjARgxQAPgpAWgOIAJgEQAPgCAeAGQAgAHATAlQAPAfgCAiQgCA5BPB7QAjA3gTAqQgOAfgZAAIgIgBg");
	this.shape_174.setTransform(24.7,-57.7,0.936,0.936,5.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#9B4242").s().p("AAwE+Qg/gZg1gbQg4gcgOgOQgNgMgHiAIgHieQgCg2AFgdQAJg1AfgTQAdgRARgFIAJgCIgagCIANgVQAPgZAQgWQCGBYAFARQACADgBAbQgBAYAMASQAQAXAZBgQAZBggCAhQgDAkgHAzQgJA3gEACQgGAcgNAWQgRAcgdAAQgOAAgQgGg");
	this.shape_175.setTransform(25.1,-55.8,0.936,0.936,5.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#827B77").s().p("AjNBJQgNgLAcgRQAngXApgHQgCgPAAgQQAAghAJgKQAKgLA0gGQAmgEAkAAQARAAATgCQALAAACARIAHA5IAgAJQAjANATARQASARAKAOQAHAKAAACQg4gRg5gIQg4gHgiAFIgYAFIgtALIglALQgcAIgaABIgGAAQgjAAgLgKg");
	this.shape_176.setTransform(35.6,-101.5,0.936,0.936,5.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#DDB294").s().p("Ah+BsQAUgkANgeQAIgQADgNQAJgGAgggQASgSAJguIgsALIglALIgDgRIAggwQAngtAlARQAeAOAlAOQAWAMABAdIAAAHIADARQAGAUAKANQAHAIABAOQABANgHgBIgMgDQANATgEAFQgDADgEAHIgEAHIAFALIgDAKIgBAJQgCAJgJACQghAGgbgKQgGgCgGAMIgOAgIgUAwg");
	this.shape_177.setTransform(34,-88.4,0.936,0.936,5.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#DDB294").s().p("AAVAzIghgEIgQgDIguheIAUAQQAXARASAGQANAFAqAFQAiAFgCAUQgBAPgRAHQgMAFgPAAIgIAAg");
	this.shape_178.setTransform(51.3,-38.6,0.936,0.936,-7.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#2D1F15").s().p("ACbFLQgfgEiviaQitiXgmg0QgegqAIhfIAOhXIAdgbQAqgfBEgQQBEgQA1BKQAaAlANAoIgFAlQgFAsACAgQACAgBYBkQAyA4BkBrQA2A9g8AiQgmAWgpAAIgVgBg");
	this.shape_179.setTransform(32.2,-13.5,0.936,0.936,5.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#5B4431").ss(2.1).p("AgfEJQAiAiAPg/QAOg2gDhwQgDhmgQhlQgOhogUgn");
	this.shape_180.setTransform(45.9,26.4,0.936,0.936,5.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#5B4431").ss(1.5).p("AAiFDIAKAAQAZgCAVgLQAXgNAKgUQADgIABgEQAFgZgLgZIgMgVIgDgEQgMgVgxhNIifj9QgLgRgCg9QgCgxADgi");
	this.shape_181.setTransform(149.1,-22.1,0.936,0.936,8.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#5B4431").ss(1.5).p("AA/AbQgUgRgagNQgzgegcAL");
	this.shape_182.setTransform(72.4,-35.5,0.936,0.936,8.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#5B4431").ss(1.5).p("ACxBZICjAkQCnAmAOALQAJAHgjADQglACg5gFQiZgNh2gvQiNg4iZhSQikhagwg2Qgpgug5AvQgSAPgSAXIgNAT");
	this.shape_183.setTransform(102.9,-14.9,0.936,0.936,8.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#493939").s().p("AiPCdQAHgbAHgRIgNAFQgnAOhLARQhJARgWACQANgKBFgtQBGgtARgKIAdgPIAAgBQBJgoAUghQANgWAmgOIA8gUQAPgFAzgeQAxgeAbgHQAngLBLgKQgKAGgHAPIgSAtIBQgLIiiCYQACgQAIgSQAOglAYgPQgvAdgzAjQhrBLgXAmIAJgbQANggAUgcQgoAVgtAeQhaA6gZApIAFgYg");
	this.shape_184.setTransform(104.2,-39.4,0.936,0.936,8.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#5B4431").ss(2.6).p("ABuiqIAMgBQAJABgNAOQgIAJhXAkQhVAkgOASQgSAZgQA3QgPA4AAApQAAAiAJAMQAFAHAEgB");
	this.shape_185.setTransform(148,-29.9,0.936,0.936,8.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#493939").s().p("ADICGQABAcgGAIQgDAFgEgGIgDgHQgHgWgNgaQgag1gfgVIgZgQQghgXgagEQgZgFgjAIIgQAAQgPgBgFABIgLAAIglALQgMAEgpAIQgnAHgVAIQATgmAegeQAZgZASgJIAAAAQAOgGAKABIAFgGQAKgGAUgBIAQgBIAagCQAOgCAWgGIAdgkQAlgmAegHQAPgEADAMQg2ArgOAcQgLAVABALQAAAFACABIARgDQAUgGAKgIIgCADIADgEQAHgGACgGQAegkAigDIAFABQghAUgJAQQgHAMgGAaIgEAYIAQgHQAAAFACgEQAGACAOAKIALAJQAhAcAJAlIgZgWQAQAQAOASQAdAkAFAZQAGAagEAOQgCAIgDACQgKgggSgKg");
	this.shape_186.setTransform(147.4,-44.2,0.936,0.936,8.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#2D2724").s().p("AgSAGQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQABgJARgBQAPAAAHAHQACACgCACQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAIgJgBIgJAAIgIABIgDABQgDAAgCgCg");
	this.shape_187.setTransform(153.8,-28.9,0.936,0.936,8.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#443326").s().p("AiYCMQgngWgegkIgJgLQgVgcgMgeQgMgdgCgaQgCgeAEgWQAGgvAcALQALAEADALIAIAoQAFAaARASQAFAFAfAXQASANBjgEQBcgDAxgKQAjgIAPg6QALg9AIgNQAIgPAYgCQAWgBAXAJQAJAEAHAFQARANADBEQABAmgDBCQAAAghRAvIhRAnQgvAHg5ACIgVAAQhiAAgsgZg");
	this.shape_188.setTransform(24.4,-13.3,0.936,0.936);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#B7A598").s().p("AABCOQhEgGgYgSQgVgPABgiQAAgKAIgsIAMg0QAHgegCgTQgCgpA8gPQAcgHApAVQgDAWACAeQAEA5ArA5IAIAKIARA0IgjgRIAEAPQACATgGAPQgFAMgmAAQgOAAgTgCg");
	this.shape_189.setTransform(-2.7,-9.8,0.936,0.936);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#6D5341").s().p("AhSC+QjSgThCgXQhGgZgFh7QgCglAFg3QAEg1gBgHQgCgbAKgPQAFgHAGgCIB1AaQB4AdARAKQAxAcCEAOQBDAHA4ABIBXgfQBWgnAAggIA+COQA8CYgMA2QgHAjiMAJQgrACgyAAQh3AAicgOg");
	this.shape_190.setTransform(19.7,4.6,0.936,0.936);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#5B4431").ss(2.6).p("ABIhNIANAGQAMAIgMAKQgwAtgmAgQhLBAgHgOQgHgNAAgDIADAB");
	this.shape_191.setTransform(158.6,-6.3,0.936,0.936,8.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#93745F").s().p("AgEDmQgJgcgLgZQgRgkgCgQQgDgNADglQACgjgMhpQgLhqgJglQgGgbAZAEQAqAIANgGQA8gZADBIQABAmgMBGQgBAZAJBUIAOCCQADArgNAHIgRAEQgOADgKAHQgMAIgHAAQgGAAgDgHg");
	this.shape_192.setTransform(-99.7,90.5,0.936,0.936);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#93745F").s().p("AlkFpQgPgBgngYQgkgXASgnQAKgWAmgoQAXgYAJgBQAJgCAwAAQAxgCAfgSQAcgQAigpQAaggADh1QgCiIAEg1QAFhNA7ghQAzgbBQAJQBJAIBFAiQBEAhAYAlIAbAfQAgAlAWAlQBHB3gwBCQg8BVh9BUQiDBZhAgKQg1gIhvAcQh3AggmAGQg+ALgHAAIgBAAg");
	this.shape_193.setTransform(-66.1,42,0.936,0.936);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#93745F").s().p("AHUGYQh7gTgzAAQigAAixgjQi0gjhCgtQg0gjhIAEQhxAHgbgEQl8g2gfiOQgRhPAXhcQAahnBFhIQBHhKBDgaQA4gVBygHQBZgGB6AeQA+APArAQQB3AYEEgVQCCgLBrgPIAXABQAjABA+gCQBTgEC5BVQDDBaAJA/QAKBAgTCAQgQB0gaBWQg4C9jTABQg9AAh6gSg");
	this.shape_194.setTransform(13.7,21.9,0.936,0.936);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#93745F").s().p("AA4HdQg8gChVgRQjOgpg1g7Qg0g5gdiPQgciIAYgSQAGgEAQgTQALgPArgYQA5ggAegUQAigXAggeQAkghAQgMQASgOAfgQQBigxAYgqQANgVAlgPIA+gTQAPgFAygeQAxgeAbgIQAygOBCgGIASAeQAUAiANAcQAMAbgMCKQgGBFgJBAQgfAZgiAfQhDA8gNAZQhLCWgVA3QgGAPgTBTQgTBRgKAZQgGAPg1AAIgOgBg");
	this.shape_195.setTransform(92.9,-13,0.936,0.936,8.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#93745F").s().p("ACsFaQgNgBgoghQguglgUgIQgjgNgfgYQgkgagZggQgWgcgbAMQgYATgEACQgEACgYgWQgdgbgWghQhBhkAjheQAjhdAugiQAXgRAQACIAGgFQAKgGAUgCIAjgCQAQgCAbgHIAdgkQAlglAegIQAegHgSA3QgKAbgPAdIAVgaQAbgbAcgDQALAAgNATQgVAegFASIgIAbIAfAUQAiAdAIAlIgZgWIAdAhQAeAlAFAaQAFAZgDAPQgCAGgDACQgKgfgSgKQABAdgGAHQgEAEgDgFIgDgGIACAdQAIAkAYAfQAbAjAWAtQAUAmAFAWQAEASgCAHQgCAIgPAYQgPAYgYARQgZASgSAAIgCAAg");
	this.shape_196.setTransform(147.2,-28.1,0.936,0.936,8.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#493939").s().p("AmlIPIAigbIguAAQBbghAsgeIAbgXQhbAghVAGQgqADgYgEQAhgYAXgYQAugygygBQgzgBghAdQgKAJgHAJIAegxQAVgmgOgKIgUgCIg9BAQALglAbgnQA4hMBUgHQBZgHA4gWICFg+QBLgjBRifQBTi6Adg+QArhbB5g/QBYguBEAAQAYAAAVAGQBDASAgAlQARATADAPQAFAcAAAVQAABUhUgSQgggHgqgXIgkgUQgsAPgbAwQggA5g3CtQg1Cqh5CmQhuCXhkA8QhNAwh0AJQgbACgYAAQgaAAgWgDg");
	this.shape_197.setTransform(-66.4,-7.1,0.936,0.979,-3.5,0,0,47.8,-44.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#93745F").s().p("ABaD/QgMgNgTgmIglhKQgMgXhNh0QhNhzgPgeQgTgoAPgkQAOghAbAAQAcgBAVAOQAZARAPApQAVA2AoBkQAwByATAmQAPAdAQAPQAUASAQAaQAXAlgnARQgTAIgOAAQgPAAgIgJg");
	this.shape_198.setTransform(-44.6,115.9,0.936,0.936);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#93745F").s().p("AiBFmQgWgFgPgPQgPgQAAgSQACgrACgIQADgQAUgnQAihDAMgaQAYg3AFghQAFgcgHgxQgMhggEgsQgIhbA+gqQAzgiBMAJQCCAQgrCNQgNAvghA9QgRAggYAoQgKAUgfBVQgaBJgRAXQgVAbgJAbQgHASgTA/QgPAugmAAQgJAAgLgDg");
	this.shape_199.setTransform(-42.3,70.8,0.936,0.936);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#493939").s().p("AheBwQgOgPgCguQgBgtAMgVQAYgrBKgGQAggDAGgIQAFgPAIgPQAIgRAJANQARAaANAHQAeATgkAlQgTAUgvAjIhBA5QgeAYgOAAQgGAAgEgEg");
	this.shape_200.setTransform(-106.8,113.8,0.936,0.936);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#93745F").s().p("AiWCMQgagDgJgOQgNgUgCgZQgCgeASgHQAHgDAzgNQAvgMAbgNQAwgXBwhBIAxgkQAwgegEAbIgKBgQgUAPgbAQQg2AhgjAKQgoAMggAPQggAPgNANIgaAYQgOALgLAEQgMAEgOAAIgLgBg");
	this.shape_201.setTransform(93.1,90,0.936,0.936);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#93745F").s().p("ADyE3QgmgDgPgUQgLgOgKgRIgJgOQg3gphCgsQiDhYg1gRQhLgXgpg3QgxhBAchRQAahJBEgeQAigQAcgBQAiADBWgVQBIgKARAyQANAmAAA5QAAAqATATQARAQA1CFQAzCBATALQAbARAJAYQAIAXgHAoQgGAggjAAIgIgBg");
	this.shape_202.setTransform(86.5,57.6,0.936,0.936);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#93745F").s().p("ABHDDQgngSgJgKQgCgDgYgvIg/iAQguhfgOgXQgTghAEgNQAEgOAngKQAYgGAYAOQAbARAFAkIAJA9QAHAbAWAoQAjBAAQAWQAdArAaAMQAPAGACAPQABAOgJAOQgPAWgXAAQgMAAgOgHg");
	this.shape_203.setTransform(101.8,121.2,0.936,0.936);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#93745F").s().p("ABdFUQgegcgJgoQgLg0gehxQgiiBgLgdQgLgagSgMQghgUgkgcQgygmAMg/QALg4AxgiQBZg9BCBCQAlAkARA2QADAJgBA3QgBBBACAXQACAYAcCEQAcCJAEApQAHA5gCAMQgDALgWATQgIAGgKAAQgPAAgUgSg");
	this.shape_204.setTransform(82.8,77.2,0.936,0.936);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#493939").s().p("AgeBWQgUgDgPgSQgPgRgFgZIgFgiQgCgOgOgRQgPgSAEgKQACgGAMgKQAFgGAuAYQA4AeAbAEQAeAEASAcIAgAxQASATgbAGQglADgNADIgpAIQgMACgLAAIgSgCg");
	this.shape_205.setTransform(115.1,137.9,0.936,0.936);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#493939").s().p("ABCBRQgFgHgKgIQgUgQgYgIQgOgFghgEQgWgEgKgJQgegSgMgJQgWgTAjgNQAJgDAngbQAbgSAOAIQANAJARAGIAgAKIATAIIAdATQAhAUgJAwQgIApgiAAIgOgBg");
	this.shape_206.setTransform(72,95.5,0.936,0.936);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#493939").s().p("AgeBXQgUgEgPgSQgOgQgGgaIgFgiQgCgOgOgSQgOgRAEgKIANgQQAFgGAvAYQA4AdAbAFQAdAEASAcIAgAxQASATgbAGQglADgNADIgpAIQgMACgLAAIgSgBg");
	this.shape_207.setTransform(-25.9,139.1,0.936,0.936);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#222638").s().p("AAAAEIAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgCAAIAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgBIgCAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAGgFAKAGIABAAIAAABIgBACIAAAAIgDAAIgDgBIgBACIAAAAIgBAAg");
	this.shape_208.setTransform(40.4,-96,0.937,0.937,5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#222638").s().p("AgGACQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAIAMABQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgHAAIgGAAg");
	this.shape_209.setTransform(40.2,-95.9,0.937,0.937,5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#443023").s().p("AgbAzQACgHgBgDQgEgMgKg5IAlgLIAsgLQgKAugSARIgnAmg");
	this.shape_210.setTransform(27.7,-94.4,0.937,0.937,5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#AFAFAF").ss(1.5).p("AA+AGQAFgIgNgaQgKgTgRgWQgPgUggAbQgiAagHAkQgFAUALAPQAJAMAUAMQAFADAVANQARAJAFgL");
	this.shape_211.setTransform(37.3,54.9,0.937,0.937,5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#2D1F15").s().p("ABKFHQgegMgPgDQgagFg/gpQhCgsAFgPQARgtAWhNQAhhzAAg0QAAhCAIgfQAGgVAfhDQAag6AggCQAbgBAgAoQAUAagZBcQgTBEgdA+QgZA1gRA6QgVBLAEAnQAEAcAwAgQAuAegBAhQgBAUgPAAIgIgBg");
	this.shape_212.setTransform(42.3,34.5,0.937,0.937,5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#DDB294").s().p("AgJA3QgKgCgOgRQgPgTgMgEQgQgHgBgNQgBgNALgOIANgCQAPgCANAAQAIAAANgKQAKgJAUADQAWADALAPQAGAJAMAXQAMAPgqAZQgiAUgQAAIgFgBg");
	this.shape_213.setTransform(60.9,-36.3,0.937,0.937,-1.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#DDB294").s().p("AgdBBQgNgMAAgZQAAgigDgMQgJgfAAgIQAAgOAQgGQAPgGADADIAMARQAIAJALADQALADAHANQAWApAEAxQACAagjABIgCAAQgfAAgSgRg");
	this.shape_214.setTransform(56.6,-24.5,0.937,0.937,-1.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#DDB294").s().p("ABdCFQgBgFgQgSIgegeQgugZgngXQhNgrgRgkQgVgqAOgcQAMgaAaAFQAbAFAMAFIAdATQARAMAjAwQATAaAfAsQAJANAfAeQAZAYAKAWQAMAZgeAEIgPABQgPAAgCgHg");
	this.shape_215.setTransform(43.1,-38.3,0.937,0.937,-1.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#9B4242").s().p("ABODSQgUgEhLh2QhQiBgTgaQgYgjARgxQAPgpAWgOIAJgEQAPgCAeAGQAgAHASAlQAPAfgBAiQgCA6BPB6QAjA3gTAqQgOAfgZAAIgIgBg");
	this.shape_216.setTransform(23.6,-59.6,0.937,0.937,5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#9B4242").s().p("AAwE+Qg9gZg3gbQg4gcgOgOQgRgRgKkZQgBg3AFgcQAJg2AegSQAegRARgFIAIgCIgZgCIAMgVQAQgZAQgWQCFBYAGARQABADgBAbQgBAYANASQAPAYAZBfQAZBggCAhQgDAkgHAzQgIA3gEACQgHAcgNAWQgRAcgdAAQgOAAgQgGg");
	this.shape_217.setTransform(24,-57.7,0.937,0.937,5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#827B77").s().p("AjNBJQgMgLAcgRQAmgXApgHQgCgPAAgQQAAghAKgKQAJgLA1gGQAlgEAlAAQAQAAATgCQALAAACARIAIA5IAfAJQAkANASARQAcAbAHAQQg3gRg6gIQg3gHgjAFIgYAFIgsALIglALQgeAIgYABIgHAAQgjAAgLgKg");
	this.shape_218.setTransform(34.1,-103.5,0.937,0.937,5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#DDB294").s().p("Ah+BsQAUgkANgeQAJgSACgLIAAAAIApgmQASgSAJguIgsALIglALIgDgRIAggwQAngtAlARQAeAOAlAOQAWAMABAdIAAAHIADARQAGAUAKANQAHAIABAOQABANgHgBIgMgDQANATgEAFQgDADgEAHIgEAHIAFALIgDAKIgBAJQgCAJgKACQgfAGgcgKQgGgCgGAMIgOAgQgLAYgJAYg");
	this.shape_219.setTransform(32.6,-90.3,0.937,0.937,5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#DDB294").s().p("AAVAzIgggEIgRgDIgtheIAUAQQAXARARAGQANAFAqAFQAiAFgCAUQgBAPgRAHQgMAFgPAAIgIAAg");
	this.shape_220.setTransform(50.5,-40.1,0.937,0.937,-1.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#2D1F15").s().p("ACbFLQgggEiuiaQitiXgmg0QgegqAIhfIAOhXIAdgbQAqgfBEgQQBEgQA1BKQAaAlANAoIgFAlQgFAsACAgQACAgBYBkQAyA4BkBrQA2A9g8AiQgmAWgpAAIgVgBg");
	this.shape_221.setTransform(31.5,-15.4,0.937,0.937,5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#5B4431").ss(2.1).p("AgfEJQAiAiAPg/QAOg2gDhwQgEhmgPhlQgOhogUgn");
	this.shape_222.setTransform(45.5,24.4,0.937,0.937,5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#5B4431").ss(1.5).p("AAhFDIALAAQAZgCAVgLQAXgNAJgUQAEgGABgGQAFgZgLgZIgMgWIgDgDIjclgQgLgQgCg+QgCgvADgj");
	this.shape_223.setTransform(148.5,-26.7,0.937,0.937,5.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#5B4431").ss(1.5).p("AA/AbQgVgRgZgNQgzgegcAL");
	this.shape_224.setTransform(71.2,-36.8,0.937,0.937,5.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#5B4431").ss(1.5).p("ACwBZICkAkQCnAmAOALQAJAHgjADQglACg5gFQiZgNh2gvQiOg4iYhSQilhagvg2Qgqgug5AvQgRAPgSAXIgNAT");
	this.shape_225.setTransform(102.6,-17.5,0.937,0.937,5.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#93745F").s().p("AAkDjQgMgagPgYQgTghgFgPQgEgNgFglQgEgigbhmQgchmgOgkQgLgaAYACQAnAEALgHQAwgfAPBGQAIAmAABGQADAZAWBQIAjB+QAKAqgLAHIgPAGQgLAEgIAIQgKAKgHAAQgFAAgEgGg");
	this.shape_226.setTransform(-85.3,79.8,0.937,0.937);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#493939").s().p("AgUCJQgUgHgWgoQgXgnABgZQAAgwA/gpQAbgSACgJQgDgQAAgRQgBgTAOAHQAcAPAOABQAjACgOAyQgIAbgYA0IgfBSQgSAsgQAAIgEgBg");
	this.shape_227.setTransform(-85.3,106.4,0.937,0.937);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#93745F").s().p("AhqC2QgSgLgLgWQgOgYAMgNIArgjQAigcASgWQAfglBEhjIAbgxQAcgsAIAZQANAnALApQgKAVgPAaQgdAygaAWQgeAbgUAZQgUAZgGAQIgNAeQgHAPgIAHQgMAKgSAGQgKAEgJAAQgKAAgHgFg");
	this.shape_228.setTransform(109.9,80.9,0.937,0.937);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#493939").s().p("AiPCcQAHgbAIgQIgOAFQgnANhLASQhJARgWACQAOgLBDgsQBHguARgIIAdgQIAAgBQBKgpATghQANgVAmgPIA9gTQAOgFAzgeQAxgeAbgIQAdgIAqgGIArgFQgKAEgHAQIgSAtIBPgLIihCYQACgQAIgTQAOgkAYgQQgvAdgzAkQhrBLgXAmQACgLAHgQQAOghATgbQgoAVgtAdQhaA7gZAoIAFgYg");
	this.shape_229.setTransform(102.8,-42.1,0.937,0.937,5.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#5B4431").ss(2.6).p("ABuiqIAMgBQAJABgMAOQgIAJhYAkQhUAkgOASQgTAZgPA3QgQA4AAApQABAiAJAMQAEAHAFgB");
	this.shape_230.setTransform(147,-34.5,0.937,0.937,5.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#493939").s().p("ADHCGQACAcgGAIQgDAFgEgGIgDgHQgHgWgNgaQgag1gggVIgYgQQghgWgbgFQgYgFgjAIIgRAAQgOgBgFABIgLAAIglALQgMAEgpAIQgnAHgVAIQATgmAegeQAZgZASgIQAOgHAKABIAFgGQAKgGAUgBIAQgBIAZgCQAOgCAWgGIAegkQAlgmAegHQAPgEADAMQg2AqgOAdQgLAVABALQAAAFACABIARgDQATgGALgIIgCADIADgEQAHgGACgGQAdgkAjgDIAFABQghAUgJAQQgHAMgGAaIgEAYIAQgHQAAAFACgEQAGACAOAKIALAJQAhAcAJAlIgZgWIAeAiQAdAlAFAYQAGAagEAOQgCAIgDACQgKgggTgKg");
	this.shape_231.setTransform(145.9,-48.7,0.937,0.937,5.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#2D2724").s().p("AgTAGIgBgDQABgJARgBQAPAAAHAHQACACgCACQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAIgJgBIgJAAIgIABIgDABQgEAAgCgCg");
	this.shape_232.setTransform(152.9,-33.8,0.937,0.937,5.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#443326").s().p("AiYCMQgngWgeglIgJgKQgVgcgMgfQgMgcgCgbQgCgcADgYQAIguAbAKQALAFADAKIAIApQAFAaARARQAFAGAfAXQASAMBjgDQBcgDAxgLQAjgHAPg5QALg/AIgMQAIgPAYgCQAWgCAXAKQAIADAIAGQARAMADBFQABAmgDBCQAAAghRAuIhRAoQgvAIg6ABIgRAAQhlAAgsgZg");
	this.shape_233.setTransform(24.3,-15.2,0.937,0.937);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#B7A598").s().p("AABCOQhEgGgYgSQgVgPABgiQAAgKAIgsIAMg0QAGghgBgQQgCgpA8gPQAcgHApAVQgDATACAhQAEA6ArA4IAIAKIARA0IgjgRIAEAPQACATgGAPQgFAMgmAAQgOAAgTgCg");
	this.shape_234.setTransform(-2.9,-11.7,0.937,0.937);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#6D5341").s().p("AhSC+QjSgThCgXQhHgZgFh7QgBgmAEg2QAFg1gBgHQgCgbAKgPQAFgHAGgCIB1AaQB4AdARAKQAxAcCEAOQBCAHA5ABIBWgfQBXgnAAggIA+COQA8CYgMA2QgHAjiMAJQgrACgxAAQh4AAicgOg");
	this.shape_235.setTransform(19.4,2.6,0.937,0.937);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#5B4431").ss(2.6).p("ABIhMIANAGQALAHgLAKQgxAtglAgQhLBAgHgOQgHgNAAgDIADAB");
	this.shape_236.setTransform(158.6,-11.3,0.937,0.937,5.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#93745F").s().p("AlJFKQgogZgGgqQgGgnAagbQAFgFANgfQAFgLAogBQAxgCAggSQAcgQAhgpQAXgcgehbQgmhyADguQAGhOA9ggQA2gcBTAJQBMAJBHAhQBHAhAYAmIAbAeQAgAmAWAlQBHB2gwBCQg3BOiCA+Qh9A7hFgLQg0gHgsANQhQAXgJACQgiAGgjAjQgNANgPAAQgMAAgOgJg");
	this.shape_237.setTransform(-59.5,38,0.937,0.937);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#93745F").s().p("AgxFaQipghg+gqQgwghhEAEQhpAGgagEQljgygdiFQgRhKAWhTQAYhcBBhFQBChFA/gYQA1gUBrgHQBTgFBzAZQA5AMAoANQBwAXDzgUQB7gKBjgOIAWABQAhABA6gCQBPgEC1BKQC/BQAIA7QAKBAgZCHQgYCKghBDQgdA9jKAgQieAai8AAQiWAAimghg");
	this.shape_238.setTransform(14.3,18.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#93745F").s().p("AA5HdQg9gChVgRQjOgpg1g7Qg0g5gdiPQgciJAZgRQAFgEAQgTQAMgPAqgYQA5ggAegUQAigXAhgeQAjghAQgMQATgOAegPQBjgzAXgoQANgVAmgPIA9gUQAPgFAzgeQAxgeAbgIQAxgOBCgGIASAeQAVAiAMAcQAMAbgMCKQgGBFgIBAQgfAZgiAfQhEA8gNAZQhKCXgWA2QgFAOgTBUQgTBQgLAaQgGAPg1AAIgNgBg");
	this.shape_239.setTransform(92.7,-15.2,0.937,0.937,5.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#93745F").s().p("ACsFaQgNgBgpghQgtglgVgIQghgNgggYQgjgagaggQgWgcgbAMQgYATgEACQgEACgYgWQgdgbgWghQhBhkAjheQAjhdAugiQAYgRAQACIAFgFQAKgGAUgCIAjgCQAQgCAagHIAegkQAlglAegIQAegHgSA3QgKAbgPAdIAVgaQAagbAcgDQAMAAgNATQgVAegFASIgIAbIAfAUQAiAdAIAlIgZgWIAdAhQAeAlAFAaQAGAZgEAPQgCAGgDACQgKgfgTgKQACAdgGAHQgDAEgEgFIgDgGIACAdQAIAkAYAfQAbAjAXAtQATAmAFAWQAEASgCAHQgCAIgPAYQgPAYgYASQgZARgSAAIgCAAg");
	this.shape_240.setTransform(146.3,-32.7,0.937,0.937,5.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#493939").s().p("AmlIPIAhgbIgtAAQBbghAsgeIAbgXQhbAghVAGQgqADgYgDQAhgZAXgYQAugxgygBQgzgBghAdQgKAIgGAJIAdgxQAWgmgPgKIgTgCIg+BAQALglAbgmQA4hNBUgHQBZgHA4gWICFg+QBLgjBRifQBTi5Adg+QArhbB5g/QB3g/BSAWQBDASAgAlQARATADAPQAaCKhpgXQgggHgqgWIgkgVQgsAPgbAwQghA5g2CtQg2Crh4ClQhuCXhkA9QhNAvhzAJQgbACgYAAQgbAAgWgDg");
	this.shape_241.setTransform(-66.2,-7.6,0.937,0.962,-2.5,0,0,48.3,-43.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#93745F").s().p("AA6DpQgJgMgPgkIgbhEQgIgVg+htQg+hsgKgcQgOglATgeQASgcAbABQA9AFASBCQANAzAcBaQAhBpAOAiQALAbAOAPQARASANAYQASAjgqAMQgQAFgMAAQgTAAgIgLg");
	this.shape_242.setTransform(-66.7,109.7,0.937,0.937);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#93745F").s().p("AjWFCQgTgKgLgTQgLgTAFgSQANgoAEgIQAIgOAdghQAyg4ASgVQAngwANgeQAMgaAGgxQANhiAIgqQAQhaBGgXQA6gUBIAdQB4AwhNB+QgZApgwAzQgZAaghAgQgPAQg0BLQgrBAgYASQgbAUgQAYQgLAQgjA4QgVAfgcAAQgPAAgSgJg");
	this.shape_243.setTransform(-54.7,65.5,0.937,0.937);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#93745F").s().p("AGbDuQgPgIgRgLIgOgJQhDgWhOgVQidgrg3AHQhKAKingzQi1g3hLhEQg4g0DQgpQBpgVBzgKQAggLBGg3QA9goAkAnQAbAdAYA1QASAlAZAKQAWAIBiBaQBiBbAeAKQAgALAQARQATAUAJAlQAJAigoAPQgSAGgPAAQgOAAgLgGg");
	this.shape_244.setTransform(76.7,51.2,0.937,0.937);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#93745F").s().p("AAACuQgegXgEgJQgCgDgHgrIgQh1QgLhXgFgWQgIgfAIgKQAJgLAngCQAYgBAQAQQAUASgHAfQgLAsgBAJQgCAXAHAmQALA5AHAXQANApAVAOQALAHgDANQgDAMgNAKQgRAOgRAAQgPAAgOgLg");
	this.shape_245.setTransform(76.2,113.7,0.937,0.937);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#93745F").s().p("AAfFXQgZghgCgoQgEg8gIhuQgMiFgGgeQgGgcgPgPQgegageghQgrgvAWg7QAUg2A2gYQBigtA3BMQAfAsAGA2QACAJgLA2QgMA/gCAYQgCAYAFCHQAECMgCApQgEA6gEALQgFAKgZAOQgHAEgHAAQgRAAgSgYg");
	this.shape_246.setTransform(67.4,75.2,0.937,0.937);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#493939").s().p("AgeBWQgUgDgPgSQgOgQgGgaIgFgiQgCgOgOgRQgOgSAEgKIANgQQAFgGAvAYQA4AeAbAEQAdAFATAbIAfAxQASATgbAGQglADgNADIgpAIQgMACgLAAIgSgCg");
	this.shape_247.setTransform(83.7,129,0.937,0.937);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#493939").s().p("AghBWQgUgDgPgSQgOgQgGgaIgGghQgCgNgJgTQgJgWAAgHQAAgEAIgLQAFgGAvAYQA4AeAbAEQAdAFASAbIAgAxQASATgbAGQglADgNADIgpAIQgMACgLAAIgSgCg");
	this.shape_248.setTransform(-54.4,129,0.937,0.937);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#222638").s().p("AAAAEIAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgDAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIABgBIgDAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBABAAQAAAAAAAAQAFgFAKAGIABAAIABAAIABACIgBABIgHABIgBAAIgBAAg");
	this.shape_249.setTransform(39.4,-97.9,0.937,0.937,3.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#222638").s().p("AgGABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAIAMABIABAAIgBACIgGAAIgHgBg");
	this.shape_250.setTransform(39.1,-97.7,0.937,0.937,3.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#443023").s().p("AgaApQgEgMgKg5IAlgLQAXgHAVgEQgKAugSAQQggAigIAFQACgHgBgDg");
	this.shape_251.setTransform(26.7,-96,0.937,0.937,3.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#AFAFAF").ss(1.5).p("AA+AGQAFgJgNgaQgLgTgQgVQgPgUggAbQgiAagHAkQgFAUALAPQAIAMAVAMQAFADAVAMQARAJAFgK");
	this.shape_252.setTransform(39.6,53.1,0.937,0.937,3.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#2D1F15").s().p("ABKFHQgegMgPgDQgagFg/gqQhCgrAFgPQARguAWhNQAhhzAAgzQAAhCAIgfQAGgVAfhDQAag6AggCQAbgBAgAoQAUAZgZBcQgTBEgdA/QgZA0gRA7QgVBKAEAoQAEAcAwAgQAuAegCAgQgBAVgPAAIgHgBg");
	this.shape_253.setTransform(44.1,32.6,0.937,0.937,3.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#DDB294").s().p("AgKA3QgJgCgOgRQgPgTgMgEQgQgHgBgNQgBgNALgNIANgCQAPgDANAAQAIAAAMgJQALgJAUACQAWADALAPQAGAJAMAXQAMAPgqAZQgiAUgQAAIgGgBg");
	this.shape_254.setTransform(59.2,-36.3,0.937,0.937,5.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#DDB294").s().p("AgdBBQgNgMAAgZQAAgigDgMQgJgfAAgJQAAgNAQgGQAPgGACADQADACAKAPQAIAJALADQALACAHANQAWApAEAxQACAbgjABIgCAAQgfAAgSgRg");
	this.shape_255.setTransform(53.4,-25.1,0.937,0.937,5.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#DDB294").s().p("ABdCFQgBgFgQgSQgPgRgPgNIhVgwQhNgsgSgkQgUgpAOgdQAMgZAaAFQAbAFAMAFIAdATQARAMAjAwIAyBGQAJANAfAeQAZAYAKAVQAMAZgeAEIgQACQgPAAgBgHg");
	this.shape_256.setTransform(41.7,-40.6,0.937,0.937,5.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#9B4242").s().p("ABODSQgUgEhLh2QhQiBgTgaQgYgjARgxQAPgoAWgPIAJgDQAPgDAeAGQAgAHASAlQAPAfgBAiQgCA6BPB7QAjA3gTApQgOAfgYAAIgJgBg");
	this.shape_257.setTransform(23.4,-61.1,0.937,0.937,3.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#9B4242").s().p("AAwE+Qg8gYg4gcQg4gcgOgOQgMgMgIiAIgHieQgCg3AFgdQAJg1AfgSQAegSARgEIAIgCIgZgDIAMgUQAQgZAQgWQCFBYAGAQQABAEgBAbQgBAXANASQAPAYAZBgQAZBggCAgQgDAlgHAzQgIA3gEACQgHAbgNAWQgRAdgdAAQgOAAgQgGg");
	this.shape_258.setTransform(23.8,-59.2,0.937,0.937,3.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#827B77").s().p("AjNBJQgMgLAcgRQAmgXApgHQgCgOAAgQQAAgiAKgKQAJgLA1gFQAmgFAkAAQAQAAATgCQALAAACARIAIA5IAfAJQAkANASARQAcAbAHAQQg3gRg6gHQg2gIgkAFIgYAFQgVAEgYAHIgkALQgfAIgXABIgHAAQgkAAgKgKg");
	this.shape_259.setTransform(32.9,-105.3,0.937,0.937,3.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#DDB294").s().p("Ah+BsQAUgjANgfQAJgSACgLIAAAAQAHgFAighQASgSAJgtQgVAEgYAHIgkALIgDgSIAggwQAngtAlASQAeANAlAOQAWANABAcIAAAHIADARQAGAUAKANQAHAIABAOQAAANgGgBIgMgDQANATgEAFQgDADgEAHIgEAIIAFAKIgDAKIgBAJQgCAJgKACQgeAHgdgKQgGgDgGAMIgOAgQgLAYgKAYg");
	this.shape_260.setTransform(31.7,-92,0.937,0.937,3.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#DDB294").s().p("AAVAzIghgEIgQgDIgtheIAUAQQAXARARAGQANAFAqAFQAiAFgCAUQgBAPgRAHQgLAFgQAAIgIAAg");
	this.shape_261.setTransform(49.3,-41.4,0.937,0.937,5.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#2D1F15").s().p("ACbFLQgfgEiviaQisiXgng1QgegqAIhfIAPhWIAcgbQArgfBEgQQBEgRA0BKQAaAlANApIgFAlQgEArABAgQACAgBZBkQAxA4BlBsQA1A9g7AiQgoAWgpAAIgUgBg");
	this.shape_262.setTransform(32.2,-17.1,0.937,0.937,3.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#5B4431").ss(1.5).p("AAiFDIAKAAQAZgCAVgLQAYgNAJgUQACgEACgIQAGgZgLgZIjsl4QgKgRgDg+QgCgvADgj");
	this.shape_263.setTransform(147.7,-29.6,0.937,0.937,4.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#5B4431").ss(1.5).p("AA+AcQgUgRgZgOQgygegcAM");
	this.shape_264.setTransform(70.2,-38.2,0.937,0.937,4.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#5B4431").ss(1.5).p("ACwBaICkAjQCnAmAOAMQAJAHgjACQglACg5gFQiZgNh2gvQiNg3iZhTQilhagvg1Qgqgvg5AvQgRAPgSAXIgNAT");
	this.shape_265.setTransform(101.9,-19.5,0.937,0.937,4.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#93745F").s().p("ACIDqQgZgWgZgRQglgZgMgOQgJgLgUglQgRgihJhfQhIhegegeQgXgWAbgKQAtgRAJgNQArg7AsBDQAYAkAcBKQANAaA6BJIBZB0QAdAngJAOIgOAOQgLAKgGANQgJAUgKAAQgDAAgEgCg");
	this.shape_266.setTransform(-76,77.1,0.937,0.937);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#493939").s().p("AAhCIQgVgBghgeQgigfgHgYQgOguAug5QAVgagBgKQgHgOgGgQQgGgSAPADQAdAFAOgDQAigJADAzQABAdgHA5IgDBXQgGA1gRAAIgBAAg");
	this.shape_267.setTransform(-62.8,104,0.937,0.937);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#93745F").s().p("AkmFYQhuhFAqgrQASgTAigXQAngaALgKQARgOAogdQAagSAYgeQAYgcgfhkQgmh7AEguQAFhOA+gdQA1gaBTAOQBMALBHAlQBHAjAYAmIAbAfQAgAlAWAlQBHB3gwBCQg8BVh9BVQiDBYg/gJQg0gIgsANQhSAYgHABQghAGgRAPIgDABQgIAAgYgPg");
	this.shape_268.setTransform(-58.9,38,0.937,0.937);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#93745F").s().p("AgjDNQgZgMACgRIAOg2QAMgrACgcQABgfAAhHIAAhCQgFgdgCgbQgCg0AUAPQAgAZApAcIADA0QADA7gIAgQgJAmgDAhQgCAfAEARIAIAgQADARgDAKQgDAPgLAPQgOAUgQAAIgGAAQgRAAgTgJg");
	this.shape_269.setTransform(128.2,70.6,0.937,0.937);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#493939").s().p("AhpBBQADgJACgwQABggAPgGQAPgGAPgKIAbgUIARgLIAggNQAjgOAiAjQAjAkgjAhQgIAAgNADQgZAHgUAOQgNAKgVAXQgQARgNADQghANgPAEIgIABQgTAAAIgeg");
	this.shape_270.setTransform(118.3,90.6,0.937,0.937);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#493939").s().p("AiPCcQAGgbAJgQIgPAFQgmANhLASQhJARgWACQAOgKBDgtQBHguARgIIAdgQIAAAAQBKgrATgfQANgVAlgPIA+gUQAOgFAzgeQAxgeAbgIQAdgIAqgGIArgFQgJAEgIAQIgSAtIBPgLIihCYQACgQAIgSQAOglAYgQQgvAdgzAkQhrBLgXAmQACgLAHgQQAOggATgbQgoAVgtAdQhaA6gZAoIAFgYg");
	this.shape_271.setTransform(101.7,-44.1,0.937,0.937,4.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#5B4431").ss(2.6).p("ABuiqIAMgBQAJABgMAOQgIAIhYAlQhVAkgNATQgTAZgPA2QgQA4AAApQABAiAJAMQAEAHAFgB");
	this.shape_272.setTransform(146.1,-37.4,0.937,0.937,4.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#493939").s().p("ADdCfQgKgTgMgGQABAdgFAHQgEAFgDgGIgDgGQgHgWgNgbQgag1gggVIgYgQQghgWgbgEQgYgFgjAHIgRAAQgOgBgFABIgLAAIglALQgMAEgpAIQgnAHgVAIQATgmAegeQAZgZASgIQAOgHAJABIAGgFQAKgGAUgCIAQgBQAdgBAggJIAegkQAlgmAegHQAPgEADAMQg1AqgPAdQgLAVAAALQABAGACABIARgEQATgGALgIIgCAEIADgFQAGgFADgHQAegkAhgDQAFAAABABQghAUgJAQQgHAMgGAbIgEAXIAQgHQAAAFACgEQALAGAJAHIALAIQAiAdAIAkIgZgWIAeAiQAdAlAFAYQAGAagEAOQgCAIgDACIgHgRg");
	this.shape_273.setTransform(144.6,-51.6,0.937,0.937,4.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#222638").ss(0.5).p("ABgBqQgegpgngvQhMhegugd");
	this.shape_274.setTransform(155.3,-14,0.937,0.937,4.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#2D2724").s().p("AgSAGIgCgDQABgJARgBQAPAAAHAHQAAAAAAAAQABABAAABQAAAAAAABQAAAAAAABQgBABAAAAQAAABgBAAQAAAAgBABQgBAAAAAAIgKgBIgJAAIgIABIgCABQgEAAgCgCg");
	this.shape_275.setTransform(151.9,-36.7,0.937,0.937,4.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#443326").s().p("AiYCMQgogYgdgjIgJgKQgrg6gEg3QgCgdADgYQAHguAbAKQAMAFADAKIAIApQAFAaARASQAGAHAeAVQASAMBjgDQBcgDAxgKQAjgIAPg6QALg+AHgMQAJgPAYgCQAWgBAXAJQAJAEAHAFQARAMADBFQABAmgDBCQAAAghRAvIhRAnQgvAHg6ACIgVAAQhhAAgsgZg");
	this.shape_276.setTransform(24.7,-16,0.937,0.937);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#B7A598").s().p("AABCPQhEgHgYgSQgVgPABgiQAAgKAIgsIAMgzQAGgfgBgTQgCgpA8gPQAcgHApAVQgDATACAhQAEA7ArA3IAAAAIAIAKIARA0IgjgRIAEAQQACASgGAPQgFANgmAAQgOAAgTgCg");
	this.shape_277.setTransform(-2.5,-12.5,0.937,0.937);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#6D5341").s().p("AhTC+QjRgThCgXQhHgZgFh7QgBglAEg3QAFg1gBgHQgCgbAKgPQAFgHAGgCIB1AaQB4AdARAKQAxAcCEAOQBCAHA5ABIBWgfQBXgmAAghIA+COQA8CYgMA3QgHAiiMAJQgsACgyAAQh3AAicgOg");
	this.shape_278.setTransform(19.8,1.8,0.937,0.937);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#93745F").s().p("Ag7FsQi0gjhCgtQg0gkhIAFQhwAGgcgEQl7g0gfiPQgShOAXhUQAaheBGhJQBGhJBDgaQA4gWBzgHQBZgFB6AVQA9AKArAMQB3AYEEgWQCCgKBrgQIAXACQAjABA+gDQAlgBBYAYQBXAZBYAlQDgBegSA8QgPAvgMCmQgMCXgaA0QgfBBjlAjQiyAbjOAAQigAAixgjg");
	this.shape_279.setTransform(15.3,18.3,0.937,0.937);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#93745F").s().p("AA4HdQg8gChVgRQjOgpg1g7Qg0g6gdiPQgciIAYgSQAGgDAQgTQAMgPAqgYQA6ghAdgTQAjgYAggdQAjghAQgMQATgOAegQQBjgyAXgpQANgVAlgPIA+gUQAPgFAzgeQAxgdAbgIQAxgOBCgGIASAdQAVAjAMAbQAMAcgMCKQgGBFgIBAQgfAZgiAfQhEA8gNAZQhGCMgaBBQgFANgTBUQgTBRgLAaQgHAPg0AAIgOgBg");
	this.shape_280.setTransform(92,-17,0.937,0.937,4.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#93745F").s().p("ACsFaQgNgBgpghQgtglgVgIQghgNgggYQgkgagZghQgWgcgbAMQgZAUgEACQgEACgYgXQgcgagWghQhChkAkheQAjheAughQAXgRAQACIAGgGQAKgGAUgBIAjgCQAQgCAagHIAegkQAlgmAegHQAegIgTA4QgJAbgPAdIAVgaQAagbAcgDQAMAAgNATQgVAegFASIgIAbIAfAUQAiAdAIAlIgagWIAdAhQAfAlAFAZQAGAagEAOQgCAHgDACIgHgQQgKgTgMgGQABAdgFAGQgFAIgFgOIACAdQAIAkAYAfQAbAjAXAtQATAmAFAVQAEASgCAIQgCAIgPAXQgPAZgYARQgYASgTAAIgCAAg");
	this.shape_281.setTransform(145.4,-35.5,0.937,0.937,4.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#493939").s().p("AmlIPIAhgaIgtAAQBbghAsgeIAbgYQhbAghVAGQgqAEgYgEQAhgYAXgZQAugxgygBQgzgBghAdQgKAIgGAJIAdgxQAWgmgPgKIgTgCIg+BBQALglAbgnQA4hNBUgHQBZgHA4gVICFg+QBLgjBRigQBTi5Adg+QArhbB5g/QB3g/BSAWQBDASAgAlQARATADAPQAaCKhpgWQgggHgqgXIgkgVQgsAPgbAxQghA5g2CsQg2Crh4ClQhuCXhkA9QhNAvhzAJQgbACgYAAQgbAAgWgDg");
	this.shape_282.setTransform(-64.5,-8.5,0.937,0.96,-1.5,0,0,49.7,-43.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#93745F").s().p("AAAEHQgqgGgFgWQgEgPACgnIAEhKQABgWgLh9QgLh8ADgeQADgnAegUQAbgSAXANQAZAOALAUQANAZgGAmQgJA2gMBcQgPBtgCAlQgBAdAHATQAIAYABAbQACAiggAAIgKgBg");
	this.shape_283.setTransform(-83.3,102,0.937,0.937);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#93745F").s().p("AkZEQQgQgPgGgUQgGgWAJgPQAWgkAGgHQALgMAkgZQA8goAZgSQAxglAUgZQASgYASgtQAlheAQglQAmhTBKgGQA+gFA+AtQBpBNhpBnQgjAig6AkQgfAUgoAXQgTANhEA7Qg5AzgbAMQggAOgVASQgPANgvAuQgWAVgWAAQgUAAgVgTg");
	this.shape_284.setTransform(-59.2,59.8,0.937,0.937);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#93745F").s().p("AGqDOIgjgNIgPgHQhEgHhPgEQifgIg2AQQghAKhPADQhWADhTgIQjdgXgVhPQgThKC0g+QBbgfBegQQAegRA7hCQA3gxApAfQAgAZAgAvQAYAjAaAFQAXAEB3BPQBzBOAXgBQAfgBAUAPQAVAOAQAlQAOAgglAVQgXANgTAAQgIAAgHgCg");
	this.shape_285.setTransform(86,42.8,0.937,0.937);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#93745F").s().p("AgmCpQgYgcgCgLQgBgDAEgrIANh2QAKhXAAgXQABgfAKgIQALgIAlAHQAYAFAMATQAPAXgOAcQgVAogDAIQgIAWgCAnQgDA8ABAWQADAqAQATQAJAKgGAMQgGALgPAGQgNAGgLAAQgWAAgPgTg");
	this.shape_286.setTransform(58.6,112.9,0.937,0.937);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#93745F").s().p("AiHFGQgNgmAKgoQAQg/AYhmQAfiDADgeQADgdgKgTQgUghgTgpQgbg6AogxQAkgtA7gHQBqgMAdBZQAQAzgKA2QgCAJgaAwQgfA5gJAWQgKAWgmCBQgmCHgPAmQgUA2gIAKQgHAIgdAGIgGAAQgWAAgNgjg");
	this.shape_287.setTransform(67.2,73.8,0.937,0.937);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#493939").s().p("AgiBWQgVgDgOgSQgPgRgFgZIgHggQgCgOgGgUIgIgZQgCgKAHgIQAFgGAuAYQA4AeAbAEQAeAEASAcIAgAxQARATgbAGQgkADgOADIgpAIQgMACgLAAIgRgCg");
	this.shape_288.setTransform(63.4,130.5,0.937,0.937);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#493939").s().p("AgeBWQgUgDgPgSQgOgRgGgZIgFgiQgCgOgOgRQgOgSAEgKIANgQQAFgGAvAYQA4AeAbAEQAdAEATAcIAfAxQASATgbAGQgkADgOADIgpAIQgMACgLAAIgSgCg");
	this.shape_289.setTransform(-75.5,126.7,0.937,0.937);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#DDB294").s().p("ABdCFQgBgFgQgSQgPgRgPgNIhVgwQhNgsgSgkQgUgpAOgdQAMgZAaAFQAbAFAMAFIAdATQARAMAjAwIAyBGQAJANAfAeQAZAYAKAVQAMAZgeAEIgQACQgOAAgCgHg");
	this.shape_290.setTransform(41,-40.7,0.937,0.937,3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#9B4242").s().p("AAwE+Qg8gZg4gbQg4gcgOgOQgMgMgIiAIgHieQgCg2AGgeQAJg1AegSQAegSARgEIAIgCIgZgDIAMgUQAQgZAQgWQCFBYAGAQQABAEgBAbQgBAXANASQAPAYAZBgQAZBggCAgQgDAlgHAzQgIA3gEACQgHAbgNAWQgRAdgdAAQgOAAgQgGg");
	this.shape_291.setTransform(23.4,-59.7,0.937,0.937,3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#DDB294").s().p("Ah+BsQAUgjANgfQAJgSACgLIAAAAQAHgFAighQASgSAJgtQgVAEgYAHIgkALIgDgSIAggwQAngtAlASQAeANAlAOQAWANABAcIAAAHIADARQAGAUAKANQAHAIABAOQAAANgGgBIgMgDQANATgEAFQgDADgEAHIgEAIIAFAKIgDAKIgBAJQgCAJgKACQgeAHgdgKQgGgDgGAMIgOAgIgUAwg");
	this.shape_292.setTransform(30.9,-92.6,0.937,0.937,3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#DDB294").s().p("AAVAzIgxgHIgtheIAUAQQAXARARAGQANAFAqAFQAiAFgCAUQgBAPgRAHQgLAFgQAAIgIAAg");
	this.shape_293.setTransform(48.4,-41.8,0.937,0.937,3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#2D1F15").s().p("ACbFLQgfgEiviaQisiXgng1QgegqAIhfIAPhWIAcgbQArgfBEgQQBEgRA0BKQAaAlANApIgFAlQgEArACAgQABAgBZBkQAxA4BlBsQA1A9g7AiQgoAWgpAAIgUgBg");
	this.shape_294.setTransform(32.3,-17.7,0.937,0.937,3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#5B4431").ss(1.5).p("AAiFDIAKAAQAZgCAVgLQAYgNAJgUQADgGABgGQAGgZgLgZIjsl4QgKgRgDg+QgCgvADgj");
	this.shape_295.setTransform(146.4,-31.8,0.936,0.937,3.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#93745F").s().p("ADYDIQgsgQgdgIQglgKgagXQgdgegUgSQgdgbhihCQhjhBgmgSQgdgOAXgSQAlgfAEgPQAVhGBAAxQAiAbA0A8QAUAUBOA0IB6BPQAsAfAKAcQAFAQgEArQgCAZgVAAIgJgBg");
	this.shape_296.setTransform(-63.3,78.7,0.937,0.937);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#493939").s().p("AAhCIQgVgBghgeQgigfgHgYQgOgvAvg4QAUgagBgKQgHgOgGgQQgGgSAPADQAeAFAOgDQAigJACAzQABAdgHA5IgDBXQgGA1gSAAIAAAAg");
	this.shape_297.setTransform(-46.3,106.7,0.937,0.937);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#93745F").s().p("AkmFTQhuhEAqgrQASgUAigWQAngbALgJQARgPAogcQAagTAYgdQAXgcgfheQgnhzAEgvQAFhNA+ggQA2gbBTAKQBMAJBIAiQBHAiAYAmIAbAeQAgAmAWAlQBHB3gwBCQg8BUh9BVQiDBZg/gKQg0gIgsANQhSAYgHABQghAGgRAQIgDABQgIAAgYgQg");
	this.shape_298.setTransform(-58.8,38.4,0.937,0.937);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#93745F").s().p("AAsDaQgcgBgEgTIgHg9QgFgxgJgfQgKgggbhJIgahEQgQgcgLgaQgWg1AZAGQAoALA0AmIAUAnQAWAtAFAlQAHAsAKAiQAKAiAKAPIATAdQAJAQABALQADASgFAVQgFAZgPAJQgRAJgWAAIgEAAg");
	this.shape_299.setTransform(135.8,71.7,0.937,0.937);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#493939").s().p("AhHBaQgBgJgQguQgKgeALgKQAMgMAKgPIASgcIAMgQIAagYQAbgbAtAVQAtAVgVAsQgHADgLAIQgUAPgOAUQgJANgMAfQgJAVgKAHQgZAZgNAJQgIAFgFAAQgNAAgCgag");
	this.shape_300.setTransform(135.1,95.1,0.937,0.937);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#493939").s().p("AiPCcQAGgbAJgQIgOAFQgnANhLASQhJARgWACQAOgKBDgtQBHguARgIIAdgQIAAAAQBKgrATgfQANgVAlgPIA+gUQAOgFAzgeQAxgeAbgIQAdgIAqgGIArgFQgJAEgIAQIgSAtIBPgLIihCYQACgQAIgSQAOglAYgQQgvAdgzAkQhrBLgXAmQACgLAHgQQAOggATgbQgoAVgtAdQhaA6gZAoIAFgYg");
	this.shape_301.setTransform(100.1,-45.1,0.936,0.937,3.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#493939").s().p("ADdCfQgKgTgMgGQABAdgFAHQgFAIgFgPQgHgWgNgbQgag1gggVIgYgQQghgWgbgEQgYgFgjAHIgRAAQgOgBgFABIgLAAIglALQgMAEgpAIQgnAHgVAIQATgmAegeQAZgZASgIQAOgHAJABIAGgFQAKgGAUgCIAQgBQAdgBAggJIAegkQAlgmAegHQAPgEADAMQg1AqgPAdQgLAVAAALQABAGACABIARgEQATgGALgIIgCAEIADgFQAGgFADgHQAegkAhgDQAFAAABABQghAUgJAQQgHAMgGAbIgEAXIAQgHQAAAFACgEQALAGAJAHIALAIQAiAdAIAkIgZgWIAeAiQAdAlAFAYQAGAagEAOQgCAIgDACIgHgRg");
	this.shape_302.setTransform(142.8,-53.7,0.936,0.937,3.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#B7A598").s().p("AABCPQhEgHgYgSQgVgPABgiQAAgKAIgsIAMgzQAGghgBgRQgCgpA8gPQAcgHApAVQgDATACAhQACAbAMAdQAMAeAVAcIAAAAIAIAKIARA0IgjgRIAEAQQACASgGAPQgFANgmAAQgOAAgTgCg");
	this.shape_303.setTransform(-2.4,-12.5,0.937,0.937);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#93745F").s().p("Ag7FnQizgjhDgtQgzgjhJAEQhwAHgbgEQl7g0ggiPQgRhOAXhQQAZhZBGhJQBGhKBEgZQA4gWBygHQBZgGB6ARQA9AIArAJQB4AYEEgVQCCgLBrgPIAXABQAjACA+gDQBigFDBA1QDaA6gEA+QgHBqgaCLQgeCighBCQggBCjUAoQiyAii+AAQigAAiygjg");
	this.shape_304.setTransform(15.3,18.6,0.937,0.937);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#93745F").s().p("ACsFaQgNgBgpghQgtglgVgIQghgNgggYQgkgagZghQgWgcgbAMQgZAUgEACQgEACgYgXQgcgagWghQhChkAkheQAjheAughQAXgRAQACIAGgGQAKgGAUgBIAjgCQAQgCAagHIAegkQAlgmAegHQAegIgTA4QgJAbgPAdIAVgaQAagbAcgDQAMAAgNATQgVAegFASIgIAbIAfAUQAiAdAIAlIgZgWIAdAhQAeAlAFAZQAGAagEAOQgCAHgDACIgHgQQgKgTgMgGQABAdgFAGQgDAFgEgFIgDgGIACAdQAIAkAYAfQAbAjAXAtQATAmAFAVQAEASgCAIQgCAIgPAXQgPAZgYARQgYASgTAAIgCAAg");
	this.shape_305.setTransform(143.9,-37.6,0.936,0.937,3.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#93745F").s().p("AhED/QgngQAAgXQABgQAKglIAWhGQAHgWASiAQASh/AJgcQANglAjgIQAhgHAUATQAVATAGAXQAHAbgQAkQgUAugkBaQgpBlgKAkQgJAcACAVQACAYgFAbQgFAbgWAAQgJAAgMgFg");
	this.shape_306.setTransform(-95.1,99.4,0.937,0.937);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#93745F").s().p("AmgEIQgNgTACgWQABgYARgQQAngkAJgGQARgMAzgVIB3g1QBGghAhgZQAegXAmguQBPhiAggjQBLhVBXADQBIADA2A4QBbBfihBhQg0AghRAgIhhAmQgbALhkA3QhWAvgkAKQgpAKgfARQgWAMhIAsQgdARgWAAQgcAAgSgZg");
	this.shape_307.setTransform(-57.3,58,0.937,0.937);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#93745F").s().p("AHfDiQgQgIgSgXIgQgVImBgLQh2gCixggQkFgvgahLQgbhLDHggQBkgQBpgBQAfgRA+hEQA5g0ArAiQAhAZAiAyQAZAkAcAGQAfAGBzBKICIBXQA2AdAVAUQAgAeABAmQACAqgXAJQgHACgHAAQgNAAgPgIg");
	this.shape_308.setTransform(87.5,44.4,0.937,0.937);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#93745F").s().p("AhUCaQgPgiAAgKQABgEAPgpIAthtQAhhRAGgWQAJgeAMgFQANgFAiASQAWALAHAWQAIAagWAXIgkAoQgOATgMAjQgUA6gEAWQgJApALAXQAFAMgIAJQgIAJgRACIgLABQggAAgNgeg");
	this.shape_309.setTransform(40.4,111.5,0.937,0.937);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#93745F").s().p("Ai6FMQgcgCgCgrQgBgpAVgjQAcgrA7hnQBDh0AMgcQALgagEgWQgKgmgGgsQgJg/AzgkQAwggA6AKQBqAUACBdQABA0gaAyQgEAJgnAmQguAtgQATQgPAShJBxQhNB2gYAfQgkAugKAHQgHAEgQAAIgPgBg");
	this.shape_310.setTransform(60.6,73.5,0.937,0.937);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#493939").s().p("AgeBXQgUgEgPgSQgOgQgGgaIgFgiQgCgPgOgRQgOgRAEgKIANgQQAFgGAvAYQA4AdAbAFQAdAEASAcIAgAxQASATgbAGQglADgNADIgpAIQgMACgLAAIgSgBg");
	this.shape_311.setTransform(44.2,131.9,0.937,0.937);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#493939").s().p("ABGBvQgkgKgNgDIgogHQgYgFgPgJQgSgLgIgVQgHgVADgZIAIgjQADgOgHgUQgHgWAHgIIATgKQAGgEAjAoQAqAvAYANQAaAOAHAhIAMA5QAIAVgSAAIgHAAg");
	this.shape_312.setTransform(-96.8,126.4,0.937,0.937);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#222638").s().p("AAAAEIAAAAIgBgCIgBAAIgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgBIgCAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAGgFALAGIAAAAIAAABIgBACIAAAAIgDAAIgCgBIgBACIAAAAIgBABIgBgBg");
	this.shape_313.setTransform(37.1,-98.6,0.937,0.937,2.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#222638").s().p("AgFABQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIALABQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAABIgHAAIgGgBg");
	this.shape_314.setTransform(36.9,-98.5,0.937,0.937,2.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#443023").s().p("AgaApQgFgMgJg5IAlgLIAsgLQgJAugSARIgoAmQABgGgBgEg");
	this.shape_315.setTransform(24.6,-96.4,0.937,0.937,2.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#AFAFAF").ss(1.5).p("AA+AGQAKgPgtg8QgPgUggAbQgiAagHAkQgEAUAKAPQAJAMAUAMQAFADAVAMQARAJAFgK");
	this.shape_316.setTransform(41.3,52.3,0.937,0.937,2.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#2D1F15").s().p("ABJFHQgdgMgPgDQgagFg/gpQhCgsAFgPQARgtAWhOQAhhzAAgzQAAhCAIgfQAGgVAfhDQAag6AggCQAbgBAgAoQAUAZgZBdQgTBEgdA+QgZA1gRA6QgVBLAEAnQADAcAxAgQAuAegCAhQAAAUgQAAIgIgBg");
	this.shape_317.setTransform(45.2,31.6,0.937,0.937,2.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#DDB294").s().p("AgKA3QgJgCgOgSQgPgSgMgFQgQgGgBgNQgBgNALgOIANgCQAPgCANAAQAIAAAMgKQALgJAUADQAWADAKAPQAHAJAMAXQALAPgpAZQgiAUgQAAIgGgBg");
	this.shape_318.setTransform(55.8,-37.9,0.937,0.937,2.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#DDB294").s().p("ABdCFQgBgFgQgSQgPgQgPgOQgugZgngXQhNgrgRglQgVgpAOgdQAMgZAaAFQAbAFAMAFIAdATQASAMAiAwIAyBGQAJANAfAeQAZAYAKAWQAMAZgdAEIgQABQgPAAgCgHg");
	this.shape_319.setTransform(38.1,-41.3,0.937,0.937,2.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#9B4242").s().p("ABNDSQgTgEhLh2QhRiBgSgaQgYgjARgxQAPgpAVgOIAJgEQAPgCAfAGQAgAHASAlQAPAfgBAiQgCA5BOB7QAjA3gTAqQgOAfgYAAIgJgBg");
	this.shape_320.setTransform(22.1,-61.5,0.937,0.937,2.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#9B4242").s().p("AAwE+Qg/gZg1gbQg4gcgOgOQgNgMgHiAIgHieQgCg2AFgdQAJg1AfgTQAdgRARgFIAJgCIgagCIANgVQAPgZAQgWQCGBYAFAQQACAEgBAbQgBAYAMASQAQAYAZBfQAZBggCAhQgDAkgHAzQgJA3gEACQgGAcgNAVQgSAdgdAAQgNAAgQgGg");
	this.shape_321.setTransform(22.6,-59.6,0.937,0.937,2.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#827B77").s().p("AjNBJQgNgLAcgRQAngWApgIQgCgOAAgQQAAgiAJgKQAKgLA0gFQAngFAjAAQARAAATgCQALAAACARIAHA6IAgAIQAjANATARQAcAbAHAQQg4gQg5gIQg1gIglAGIgYAEIgtALIglALQgaAIgcABIgGAAQgkAAgKgKg");
	this.shape_322.setTransform(30.5,-105.9,0.937,0.937,2.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#DDB294").s().p("Ah+BsQAUgjANgeQAIgTADgLIApglQASgSAJguIgsALIglALIgDgSIAggwQAngtAlASQAeANAlAOQAWANABAcIAAAHIADASQAGAUAKAMQAHAIABAOQABANgHgBIgMgDQANAUgEAEQgDADgEAIIgDAHIAEAKIgDAKQACARgOADQghAHgagKQgHgDgGAMQgIAUgGAMIgUAwg");
	this.shape_323.setTransform(29.6,-92.7,0.937,0.937,2.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#DDB294").s().p("AAVAzIgxgHIguheIAUAQQAXARASAGQANAFAqAFQAiAFgCAUQgBAPgRAHQgMAFgPAAIgIAAg");
	this.shape_324.setTransform(45.6,-42.5,0.937,0.937,2.2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#2D1F15").s().p("ACbFLQgfgEiviaQisiXgng0QgegqAIhfIAOhXIAdgbQAqgfBEgQQBEgRA1BLQAaAlANAoIgFAlQgFAsACAgQACAgBYBkQAyA4BkBrQA2A9g8AiQgnAWgpAAIgUgBg");
	this.shape_325.setTransform(32,-17.7,0.937,0.937,2.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#5B4431").ss(1.5).p("AAiFDQAGAAAEAAQAZgCAVgLQAXgNAKgUIAEgMQAFgZgLgZIjrl4QgLgRgCg+QgCgxADgh");
	this.shape_326.setTransform(145.5,-34.1,0.937,0.937,1.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#93745F").s().p("ADYDIQgrgQgegIQglgKgagXQgdgegTgSQgdgbhjhCQhihAgngTQgdgOAXgSQAlgfAEgPQAVhGBAAxQAiAbA0A8QAVAUBNA0IB7BPQAsAfAJAcQAFAQgEArQgCAZgVAAIgJgBg");
	this.shape_327.setTransform(-57.3,80.8,0.937,0.937);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#493939").s().p("AgDBzQgogVgNgVQgagqAfhCQAOgfgEgJQgLgLgJgPQgLgPAQgCQAfgCAMgHQAegRAPAxQAIAbAIA6IASBUQAIA2gRAEIgIABQgTAAghgSg");
	this.shape_328.setTransform(-36.8,104,0.937,0.937);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#93745F").s().p("AkHFmQgsgTgSgYQgQgUgGgmQgFgiAJgUQAGgMAXgcIAug2QAOgTAYgnQAVgigLhPQgThigEg0QgGhOA5goQAwgjBUgDQBLgCBLAXQBKAXAeAiIAfAaQAkAhAcAhQBXBsgmBJQgkBGh5BAQgXANhMAkQg6AcgaARQgaARg/A4QguApgqAOQghAKgOASQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAQgJAAgYgLg");
	this.shape_329.setTransform(-54,39.2,0.937,0.937);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#93745F").s().p("ABIDdIgYhGQgSg4gSghQgRgkgvhPIgrhJQgXgcgSgcQgkg4AaACQAqACAxATIAlAuQAmA2AQApQARAxAUAmQATAmAOAPIAaAdQANAQAFANQAHAUABAZQACAggMANQgQARgYAFIgKABQgTAAgHgQg");
	this.shape_330.setTransform(136.3,75.5,0.937,0.937);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#493939").s().p("AAHBxQgGgHgmgcQgagTADgQQADgQgBgSIgBghIAAgUIAIgiQAIgmAvgJQAygIAHAvIgIATQgIAZABAZQAAAQAHAfQAFAWgFAMQgEAMgIAmQgEANgJAAQgJAAgMgOg");
	this.shape_331.setTransform(144.6,101.8,0.937,0.937);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#493939").s().p("AiPCdQAHgbAHgRIgNAFQgmANhMASQhIARgXACQANgKBFgtQBGgtARgKIAdgPIAAgBQBKgqATgfQANgWAmgOIA8gUQAQgFAygeQAxgeAbgHQApgMBKgJQgLAGgHAPIgSAtIBQgLIiiCYQACgQAIgSQAOglAYgPQgvAdgzAjQhrBLgXAmIAJgbQAOggATgcQgoAVgsAeQhbA6gZApIAFgYg");
	this.shape_332.setTransform(98.8,-46.2,0.937,0.937,1.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#5B4431").ss(2.6).p("ABuipIAMgCQAJABgNAOQgIAJhXAlQhVAkgOASQgSAZgQA2QgPA4AAApQABAiAIANQAFAGAEgB");
	this.shape_333.setTransform(143.4,-41.7,0.937,0.937,1.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#493939").s().p("ADICGQABAdgGAHQgDAFgEgFIgDgHQgHgWgNgbQgag1gfgUIgZgRQghgWgagEQgZgFgjAHIgQAAQgPAAgFAAIgLAAIglAMQgMAEgpAIQgnAHgVAIQATgnAegeQAZgZASgIQAOgHAKABIAFgFQAKgGAUgCIAQgBIAagCQAOgCAWgGIAdgkQAlglAegIQAPgEADAMQg2AsgOAbQgLAVABALQAAAGACABIARgEQAUgFAKgJIgCAEIADgFQAHgFACgGQAegkAigEIAFABQgiAWgIAOQgHANgGAaIgEAXIAQgHQAAAGACgFQAGADAOAKIALAJQAhAbAJAlIgZgWQAQAQAOATQAdAkAFAZQAGAZgEAOQgCAIgDACQgKgggSgKg");
	this.shape_334.setTransform(141.3,-55.8,0.937,0.937,1.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#2D2724").s().p("AgSAGQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQABgJARgBQAPAAAHAHQACABgBADQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAIgKgBIgJAAIgIABIgDABQgDAAgCgCg");
	this.shape_335.setTransform(149.4,-41.4,0.937,0.937,1.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#443326").s().p("AiYCMQgpgYgdgiIgIgLIAAAAQgrg4gEg5QgCgiADgSQAHgvAbALQALAEAEALIAIAoQAEAaARASQAGAGAeAWQASAMBkgDQBbgDAxgKQAjgIAQg6QALg9AHgNQAJgPAYgCQAWgBAWAJQAKAEAGAFQASANACBEQABAmgCBCQAAAghRAvIhRAnQgwAHg5ACIgUAAQhiAAgsgZg");
	this.shape_336.setTransform(24.7,-16.8,0.937,0.937);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#B7A598").s().p("AABCPQhEgHgYgSQgVgPABgiQAAgMAJgqIALgzQAHgegCgUQgCgpA8gPQAcgHApAWQgDAWACAeQAEA5ArA4IAJALIAQAzIgjgRIAEAQQACASgGAPQgFANgmAAQgOAAgTgCg");
	this.shape_337.setTransform(-2.4,-13.3,0.937,0.937);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#6D5341").s().p("AhSC+QjSgThCgXQhGgZgFh7QgCglAFg3QAEg1gBgHQgCgbAKgPQAFgHAGgCIB1AbQB4AcARAKQAxAcCEAOQBDAHA4ABIBXgfQBWgmAAggIA+COQA8CXgMA3QgHAjiMAIQgrACgyAAQh3AAicgOg");
	this.shape_338.setTransform(19.9,1,0.937,0.937);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#93745F").s().p("Ag6FkQi0gjhCgtQg0gjhIAEQhxAHgbgEQl8g2gfiOQgRhMAXhNQAZhTBGhKQBHhKBDgaQA4gWBygHQBZgFB6AMQA+AGArAHQB3AYEEgVQCCgLBrgPIAXABQAjABA+gCQAlgCBVAZQBVAYBXAmQDbBdgIA/QgNBoghB5QghB8gkBIQgfBAjMAgQiZAXjNAAQigAAixgjg");
	this.shape_339.setTransform(15.3,18.2,0.937,0.937);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#93745F").s().p("AA4HdQg8gChVgRQjOgpg1g7Qg0g5gdiPQgciIAYgSQAGgEAQgTQALgPArgYQA5ggAegUQAigXAggeQAkghAQgMQASgOAfgQQBigxAYgqQANgVAlgPQAKgEA0gPQAPgFAygeQAxgeAbgIQAygOBCgGIASAeQAUAiANAcQAMAbgMCKQgGBFgJBAQgfAZgiAfQhDA8gNAZQhLCWgVA3QgGAPgTBTQgTBRgKAZQgGAPg1AAIgOgBg");
	this.shape_340.setTransform(90.6,-18.6,0.937,0.937,1.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#93745F").s().p("ACsFaQgNgBgoghQguglgUgIQgigNgggYQgjgagaggQgWgcgbAMQgYATgEACQgEACgYgWQgcgbgXghQhBhkAjheQAjhdAugiQAXgRAQACIAGgFQAKgGAUgCIAkgCQAPgCAbgHIAdgkQAlglAegIQAegHgSA3QgKAbgPAdIAVgaQAbgbAcgDQALAAgNATQgVAegFASIgIAaIAfAVQAiAdAIAlIgZgWIAdAhQAeAlAFAaQAFAZgDAOQgCAHgDACQgKgfgSgKQABAdgGAGQgEAFgDgFIgDgGIACAdQAIAkAYAfQAbAjAWAtQAUAmAFAWQAEASgCAHQgCAIgOAYQgQAYgYARQgZASgSAAIgCAAg");
	this.shape_341.setTransform(142.9,-39.9,0.937,0.937,1.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#493939").s().p("AmKHtIAfgYIgrAAQBVgfAqgcIAZgWQhVAehPAGQgoACgXgDQAfgXAWgXQArgugvgBQgwAAgfAbQgJAIgGAJIAbgvQAVgkgOgJIgSgCIg6A8QAKgiAagkQA0hJBPgGQBTgHA1gUIB8g6QBHghBLiVIBpjnQAphWBxg7QBwg6BMAUQA+ARAfAjQAPARADAOQAZCChigVQgfgHgngVIghgUQgqAOgZAuQgeA1gzCiQgyCfhyCbQhmCOheA5QhIAshsAIQgaACgWAAQgZAAgUgDg");
	this.shape_342.setTransform(-63.9,-8.3,1,1.02,0,0,0,47.1,-39.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#93745F").s().p("AiIDfQgggbAGgWQAGgPAUggIAqg9QANgTA3hwQA3hwAQgYQAXggAkgBQAhgBAOAXQAfA1gsA0QgjAog8BJQhEBWgVAfQgQAYgEAVQgEAYgOAYQgKATgPAAQgMAAgPgMg");
	this.shape_343.setTransform(-111.6,94.3,0.937,0.937);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#93745F").s().p("AnFEUQgMgSACgXQACgYASgPIA2g4QAegeAtgSQAvgSA1gjIBTg8IBWguQBAgiBEhJQBUhYBvgdQBugdAsAyQBYBjjCCFQhyBNiWA5QgbALhmAzQhYAtgkAIQgpAJggAQIhgA0QgcAPgWAAQgdAAgSgbg");
	this.shape_344.setTransform(-64.8,56.6,0.937,0.937);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#93745F").s().p("AHfDiQgQgIgSgXIgQgVQhJgRhUgRQiqgig6gBQihAFiGgKQkFgSgahLQgbhLDHggQBkgQBpgBQAfgRA+hEQA5g0ArAiQAhAZAiAyQAZAkAcAGQAfAGBzBKICIBXQA2AdAVAUQAgAeABAlQACArgXAJQgHACgHAAQgNAAgPgIg");
	this.shape_345.setTransform(84.3,44.4,0.937,0.937);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#93745F").s().p("AhUC7QgpgFgGgmQgGgkADgKQABgDAYgkIBGhgQAzhHALgTQAUgiAZgPQAggVAbAYQAQAOgMAtQgNAvgcASIgtAeQgSAPgUAfQggA0gKAUQgTAmAGAZQACANgLAHQgIAFgLAAIgIAAg");
	this.shape_346.setTransform(22.3,108.9,0.937,0.937);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#93745F").s().p("AjMFEQgbgEABgrQAAgpAYghQAfgsBAhhQBKhwANgcQANgZgDgWQgHgmgEgtQgFg/A1ghQAygeA5AOQBpAagEBdQgCA1gcAwQgFAIgqAkQgwAqgRARQgQAShPBtQhUBxgbAeQgmAsgLAGQgFACgLAAIgWgBg");
	this.shape_347.setTransform(48.1,71.2,0.937,0.937);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#493939").s().p("ABKBrIgxgKQgbgCgOgDQgYgDgQgJQgSgKgJgVQgIgUACgaIAHgiQACgOgIgVQgIgVAGgIIASgLQAHgEAlAlQAsAtAYANQAbANAJAfIAPA5QAJAWgUAAIgGgBg");
	this.shape_348.setTransform(18.8,129.6,0.937,0.937);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#493939").s().p("AAUB/QgXgcgKgJIgegdQgRgSgHgQQgJgTAGgVQAFgVASgUIAagYQAKgKAGgVQAFgWAKgCQAGgCAPAEQAIAAAHA0QAJBAAMAXQANAbgMAfIgWA2QgEAPgIAAQgFAAgJgIg");
	this.shape_349.setTransform(-124,120.4,0.937,0.937);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#222638").s().p("AAAAEIAAAAIgBgCIgCAAIAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgBIgDAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAGgFAKAGIABAAIAAABIgBACIAAAAIgDAAIgDgBIAAACIAAAAIgBABIgBgBg");
	this.shape_350.setTransform(34.1,-99.1,0.936,0.936);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#222638").s().p("AgGABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAMABQAAAAABABQAAAAAAAAQAAAAAAABQAAAAgBAAIgGAAIgHgBg");
	this.shape_351.setTransform(33.9,-99,0.936,0.936);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#443023").s().p("AgaApQgGgSgIgzIAlgLIAsgLQgKAugSARIgoAmQACgGgBgEg");
	this.shape_352.setTransform(21.6,-96.4,0.936,0.936);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#AFAFAF").ss(1.5).p("AA9AGQAKgPgsg8QgPgUggAbQgiAagHAkQgFAUALAPQAIANAVALQAFADAUAMQASAJAEgK");
	this.shape_353.setTransform(44.1,51.4,0.936,0.936);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#2D1F15").s().p("ABJFHQgdgMgPgDQgagFg/gpQhCgsAFgPQARgtAWhOQAhhzAAgzQAAhCAIgfQAGgVAfhDQAag6AggCQAbgBAgAoQAUAZgZBdQgTBEgdA+QgZA2gRA5QgVBLAEAnQADAcAxAgQAuAegCAhQAAAUgQAAIgIgBg");
	this.shape_354.setTransform(47.3,30.7,0.936,0.936);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#DDB294").s().p("AgdBBQgNgMAAgZQAAgigEgMQgJggABgIQAAgNAQgGQAPgGACADIANARQAHAJAMADQAKADAHANQAYAoADAxQACAbgjABIgCAAQgfAAgSgRg");
	this.shape_355.setTransform(50.5,-25.8,0.936,0.936);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#DDB294").s().p("ABdCFQgBgFgQgSQgPgQgPgOQgugZgngXQhNgrgRglQgUgpANgdQAMgZAbAFQAbAFALAFIAdATQASAMAiAwIAyBGQAJANAfAeQAZAYAKAWQAMAZgdAEIgQABQgQAAgBgHg");
	this.shape_356.setTransform(37.4,-40.1,0.936,0.936);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#9B4242").s().p("ABODSQgUgEhLh2QhRiBgSgaQgYgjARgxQAPgpAVgOIAJgEQAPgCAfAGQAgAHASAlQAPAfgBAiQgCA5BOB7QAjA3gTAqQgOAfgXAAIgJgBg");
	this.shape_357.setTransform(20.5,-61.5,0.936,0.936);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#9B4242").s().p("AAwE+Qg/gZg1gbQg4gcgOgOQgRgRgKkZQgCg2AFgdQAJg1AfgTQAdgRARgFIAJgCIgagCIANgVIAggvQCFBYAGAQQABADgBAcQgBAXAMATQAQAYAZBfQAZBggCAhQgDAjgHA0QgIA3gEACQgHAcgNAVQgSAdgdAAQgNAAgQgGg");
	this.shape_358.setTransform(21.1,-59.6,0.936,0.936);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#827B77").s().p("AjNBJQgNgLAcgRQAngWApgIQgCgOAAgQQAAgiAJgKQAKgLA0gFQAngFAjAAQARAAATgCQALAAACARIAHA6IAgAIQAjANATARQAcAbAHAQQg3gQg6gIQg1gIglAGIgYAEIgtALIgkALQgbAIgcABIgGAAQgkAAgKgKg");
	this.shape_359.setTransform(27.2,-106.1,0.936,0.936);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#DDB294").s().p("Ah+BsQAUgjAOgeQAIgUACgKIApglQASgSAJguIgsALIglALIgDgSIAggwQAngtAmASQAdANAlAOQAWANABAcIAAAHIAEASQAFAUAKAMQAHAIABAOQABANgHgBIgMgDQANAUgEAEIgKASIAEAKIgDAKQACARgOADQggAHgbgKQgHgDgGAMQgIAUgGAMIgUAwg");
	this.shape_360.setTransform(26.8,-92.9,0.936,0.936);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#DDB294").s().p("AAVAzIgxgHIgtheIATAQQAXARASAGQANAFAqAFQAiAFgCAUQgBAPgRAHQgMAFgPAAIgIAAg");
	this.shape_361.setTransform(44.8,-41.6,0.936,0.936);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#2D1F15").s().p("ACbFLQgfgEiviaQisiXgng0QgegqAIhfIAPhXIAcgbQAqgfBEgQQBEgRA1BLQAaAlANAoIgFAlQgEAsABAgQACAgBZBkQAxA4BlBrQA1A9g7AiQgoAWgpAAIgUgBg");
	this.shape_362.setTransform(32.2,-18.1,0.936,0.936);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#5B4431").ss(1.5).p("ACxBZICjAkQCnAmAOALQAJAHgjADQgkACg6gFQiZgNh2gvQiNg4iZhSQikhagwg2Qgpgug5AvQgSAPgSAXIgNAT");
	this.shape_363.setTransform(100.2,-21.5,0.936,0.936);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#93745F").s().p("ACBDHQgGgHgjg2QgggzgYgbQgbgehAhBIg7g8QgegWgYgWQgxguAagFQApgIAwgLIAxAsQA2AzAYAlQAeAsAbAgQAcAeASALQAZAQAHAGQARANAHALQAMASAIAYQAJAegIAQQgLAVgWAKQgKAFgIAAQgNAAgIgLg");
	this.shape_364.setTransform(140.1,80.6,0.936,0.936);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#493939").s().p("AA+BrQgIgCgwgDQgggDgFgPQgGgQgKgOIgTgcIgKgRIgMghQgOgjAlgiQAmgiAeAlIADAVQAGAZAOAVQAJANAXAWQAQARACANQACALAOAlQAEAUgRAAQgHAAgKgDg");
	this.shape_365.setTransform(159.3,101.5,0.936,0.936);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#493939").s().p("AiPCdQAGgbAJgRIgPAFQgmANhLASQhIARgXACQANgKBEgtQBHgtARgKIAdgPIAAgBQBKgqATgfQANgWAlgOIA9gUQAPgFAygeQAygeAbgHQAqgMBIgJQgKAGgHAPIgTAtIBQgLIihCYQACgQAHgSQAPglAYgPQgvAdgzAjQhqBLgZAmIAKgbQAOggATgcQgoAVgtAeQhbA6gYApIAFgYg");
	this.shape_366.setTransform(98,-46.1,0.936,0.936);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#5B4431").ss(2.6).p("ABuipIAMgCQAJABgMAOQgJAJhXAlQhVAkgNASQgTAYgQA3QgPA4AAApQABAiAJANQAEAGAFgB");
	this.shape_367.setTransform(142.7,-42.9,0.936,0.936);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#493939").s().p("ADICGQABAdgGAHQgDAFgEgFIgDgHQgHgWgNgbQgag1gfgUIgYgRQgigWgagEQgZgFgiAHIgRAAQgPAAgFAAIgLAAIgkAMQgMAEgqAIQgnAHgVAIQATgnAegeQAZgZASgIQAPgHAJABIAFgFQAKgGAUgCIAQgBIAagCQAOgCAWgGIAegkQAkglAegIQAPgEADAMQg1AqgPAdQgLAVABALQAAAGADABIARgEQATgFAKgJIgCAEIADgFQAHgFACgGQAegkAigEIAFABQgiAWgIAOQgHANgFAaIgEAXIAPgHQAAAGACgFIAUANIALAJQAiAcAIAkIgZgWQAQAQAOATQAdAkAFAZQAGAZgEAOQgCAIgDACQgKgggSgKg");
	this.shape_368.setTransform(140.1,-57,0.936,0.936);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#222638").ss(0.5).p("ABgBqQgegpgmgvQhNhdgtge");
	this.shape_369.setTransform(153.8,-20.4,0.936,0.936);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#2D2724").s().p("AgSAGIgCgDQABgJARgBQAPAAAHAHQACABgBADQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAIgKgBIgJAAIgIABIgEABQgCAAgCgCg");
	this.shape_370.setTransform(148.6,-42.7,0.936,0.936);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#443326").s().p("AiYCMQgpgYgdgiIgIgLQgrg4gEg5QgCgiADgSQAHgvAbALQAMAEADALIAIAoQAFAaARASQAGAGAdAWQASAMBkgDQBcgDAxgKQAjgIAPg6QALg9AHgNQAJgPAYgCQAWgBAXAJQAJAFAGAEQASANACBEQACAmgDBCQAAAghRAvIhRAnQgwAHg5ACIgUAAQhiAAgsgZg");
	this.shape_371.setTransform(24.6,-17,0.936,0.936);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#B7A598").s().p("AABCPQhEgHgYgSQgVgPABgiQAAgMAJgqIALgzQAHgggCgSQgCgpA8gPQAcgHApAWQgDAXACAdQAEA4ArA5IAJALIAQAzIgjgRIAEAQQACASgGAPQgFANgmAAQgOAAgTgCg");
	this.shape_372.setTransform(-2.5,-13.5,0.936,0.936);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#6D5341").s().p("AhSC+QjSgThCgXQhGgZgFh7QgCglAFg3QAEg1gBgHQgCgbAKgPQAGgHAFgCIB1AbQB4AcARAKQAxAcCEAOQBDAHA4ABIBXgfQBWgmAAggIA+COQA8CXgMA3QgHAjiMAIQgrACgyAAQh3AAicgOg");
	this.shape_373.setTransform(19.8,0.9,0.936,0.936);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#93745F").s().p("AgpFkQi0gjhCgtQg0gjhIAEQhwAHgcgEQl8g2gfiOQgRhNAXhMQAZhTBHhKQBGhKBDgaQA4gWBygHQBZgFB6AMQA+AGArAHQB3AYEEgVQCCgLBrgPIAXABQAjABA+gCQBPgEC1BjQC7BmAJBBQAPBkAABeQABCHgfBAQggBAjkAjQizAbjNAAQigAAixgjg");
	this.shape_374.setTransform(13.6,18,0.936,0.936);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#93745F").s().p("AA4HdQg8gChVgRQjOgpg1g7Qg0g5gdiPQgciIAYgSQAGgEAQgTQALgPArgYQA5ggAegUQAigXAggeQAkghAQgMQASgOAfgQQBigxAYgqQANgVAlgPQAKgEA0gPQAPgFAygeQAygeAagIQAygOBCgGIASAeQAUAiANAcQAMAbgMCKQgGBFgJBAQgfAZgiAfQhDA8gNAZQhLCWgVA3QgFAOgTBUQgTBQgLAaQgGAPg1AAIgOgBg");
	this.shape_375.setTransform(90.6,-18.3,0.936,0.936);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#93745F").s().p("ACsFaQgNgBgoghQguglgUgIQgigNgggYQgjgagZggQgXgcgbAMQgYATgEACQgEACgYgWQgcgbgXghQhBhkAjheQAjhdAvgiQAXgRAPACIAGgFQAKgGAUgCIAkgCQAPgCAbgHIAdgkQAlglAegIQAegHgSA3QgJAbgQAdIAVgaQAbgbAcgDQALAAgNATQgVAegFASIgIAaIAfAVQAiAdAIAlIgZgWIAdAhQAeAlAFAaQAFAZgDAOQgCAHgDACQgKgfgSgKQABAdgGAGQgEAFgDgFIgDgGIACAdQAIAkAYAfQAbAjAWAtQAUAmAFAWQAEASgCAHQgCAIgOAYQgQAYgYARQgZASgTAAIgBAAg");
	this.shape_376.setTransform(142.2,-41,0.936,0.936);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#493939").s().p("AmlIPIAhgbIgtAAQBbghAsgeIAbgXQhbAghVAGQgqADgZgDQAigZAXgYQAugxgygBQgzgBghAdQgKAJgHAJIAdgyQAWgmgOgKIgUgCIg9BAQAKglAcgmQA3hNBVgHQBZgHA4gWICFg+QBLgjBRifIBwj3QArhcB5g/QB3g+BSAWQBDASAgAlQAQATADAPQAbCKhpgXQgggHgqgWIgkgVQgsAPgbAwQghA5g2CtQg2Cqh4CmQhuCXhkA9QhNAvhzAIQgbACgYAAQgbAAgWgCg");
	this.shape_377.setTransform(-111.1,31,0.936,0.936);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#93745F").s().p("AiIDfQgggbAGgWQAGgPAUggIAqg9QANgTA3hwQA3hwAQgYQAYggAjgBQAhgBAOAXQAfA1gsA0QgjAog8BJQhEBWgUAfQgRAYgEAVQgEAYgOAYQgKATgPAAQgMAAgPgMg");
	this.shape_378.setTransform(-112.9,91.5,0.936,0.936,4.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#93745F").s().p("AnEGNQgMgTACgXQACgXARgPIA3g5QAegeAtgRQAvgSAkhFIAvhuQAIgSgDg3QgFhGgBgoQgDibBEhIQBJhNDhCCQBRAuBRA/QBGA1AaAeQBXBhjHBaQg+AdhiAeQhbAagSAHQgjAOhYBMQhXBKggAKQghALgoAeQg1AogrAXQgcAQgWAAQgdAAgSgbg");
	this.shape_379.setTransform(-64.4,44.7,0.936,0.936,2.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#93745F").s().p("AHMD7QgPgLgQgYIgMgXIl+g2Qh6gSingyQj+hMgShNQgShPDKgJQBlgEBoALQAhgOBFg8QA9gtAoAmQAfAdAcA2QAVAnAaAIQAfAJBpBXIB+BmQAyAkATAWQAbAhgCAmQgDAqgYAGIgJABQgPAAgRgLg");
	this.shape_380.setTransform(84.1,46.9,0.936,0.936);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#93745F").s().p("Ah1CQQgngQAFgmQAEglAGgIQACgDAhgcIBehIQBFg2AQgPQAXgWANACQAOACAVAhQANAUgFAXQgGAagfAJIgzARQgVAJgdAZQgsAngQARQgdAggCAZQgBANgMAEIgJABQgJAAgJgEg");
	this.shape_381.setTransform(27.2,103.8,0.936,0.936);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#93745F").s().p("AjiE2QgagGAEgqQADgpAaggQAggmBKhfQBShqAQgaQAOgZgBgVQgEgngBgtQAAhAA4gcQAzgaA4ASQBoAigLBdQgHAzggAuQgFAIgsAhQg0AngSAPQgRAQhYBnQhbBqgeAcQgpApgLAFQgEACgIAAQgKAAgRgEg");
	this.shape_382.setTransform(55.3,70.7,0.936,0.936);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#493939").s().p("AhMBkQgCglgCgOIgHgpQgDgXAEgRQAEgVASgOQARgOAagEQARgDASgBQAOgCARgNQASgOAKAEQAFADAKALQAGAFgZAuQggA3gFAbQgFAdgcASIgyAeQgIAGgGAAQgIAAgDgQg");
	this.shape_383.setTransform(12.8,120.2,0.936,0.936);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#493939").s().p("AAUB/QgXgcgKgJIgegdQgRgSgIgQQgIgTAFgVQAGgVARgUIAagYQAKgKAGgVQAGgWAKgCQAGgCAPAEQAIAAAHA0QAJA/AMAYQANAbgMAfIgWA2QgEAPgIAAQgGAAgIgIg");
	this.shape_384.setTransform(-126.7,114.3,0.936,0.936);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#222638").s().p("AAAAEIgBAAIgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAAAIgCgBIAAAAIgBgBIABgBIgCAAIgBgBIABgCQAGgCAIAKIAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABIgCABIgGgCg");
	this.shape_385.setTransform(66.2,-82.8,0.963,0.963,-1.7);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#222638").s().p("AgGABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAIAMABIABAAIgBACIgFAAIgIgBg");
	this.shape_386.setTransform(34.8,-84.1,0.963,0.963,-1.7);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#443023").s().p("AguAfQAAgPAOg3IAmAEQAYADAVAEQgaAmgYAJIgzAVQAEgHAAgCg");
	this.shape_387.setTransform(53.7,-85,0.963,0.963,-1.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#AFAFAF").ss(1.5).p("AA9AFQALgQgug6QgPgUghAbQggAbgHAjQgEAVAKAQQAJALAUAMQAGADAUAMQASAIAEgK");
	this.shape_388.setTransform(52.2,69.9,0.963,0.963,-1.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#2D1F15").s().p("ABOFHQgegLgPgDQgagFg/gpQhDgqAFgPQAQgrAVhRQAfhzAAg0QgBhBAIgfQAFgVAfhEQAZg6AfgDQAbgBAhAnQAVAagYBcQgSBEgcA/QgYA1gRA7QgUBLAFAnQAEAcAxAfQAuAdgBAhQAAAVgRAAIgHgBg");
	this.shape_389.setTransform(54.4,48.4,0.963,0.963,-1.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#DDB294").s().p("AgBA5QgKgBgQgPQgRgQgNgDQgRgEgDgOQgDgMAJgPIANgEQAOgEANgCQAIgBALgMQAKgKATAAQAXgBAMAOQAIAIAPAVQAOAOgmAdQghAcgSAAIgBAAg");
	this.shape_390.setTransform(64.7,-36.3,0.963,0.963,-1.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#DDB294").s().p("AgUBDQgOgJgDgZQgGgigFgLQgNgegBgIQgCgNAPgJQAOgHADACQADACAMANQAJAIAMABQAKABAJAMQAcAlALAwQAGAagjAGIgQABQgVAAgQgLg");
	this.shape_391.setTransform(62.1,-23.5,0.963,0.963,-1.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#DDB294").s().p("ABuB3QgCgFgTgQQgQgNgRgMIhbgkQhTghgWggQgagnAJgeQAIgbAbABQAcABAMAEQAEABAcAOQATAJAoArIA8A+QALAMAjAZQAcAUANAUQAPAXgdAIQgOAFgIAAQgJAAgBgFg");
	this.shape_392.setTransform(46.5,-35.7,0.963,0.963,-1.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#9B4242").s().p("AgFDdQgQgMgaiJQgZiWgHggQgJgpAjgnQAcggAZgFIAKAAQAPAEAZARQAdATACApQACAigOAgQgXA0AZCPQALBAghAgQgSARgQAAQgLAAgJgHg");
	this.shape_393.setTransform(39.2,-51.2,0.963,0.963,-1.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#9B4242").s().p("Ag0ExQgwgvgoguQgqgvgHgSQgKgXBjkHQATgzAQgZQAcguAjgFQAhgFASACIAIACIgWgMIATgOQAYgSAXgOQBbCFgBARQAAADgLAZQgKAWAFAVQAFAcgOBhQgNBjgPAdQgQAhgaAtQgcAvgFABQgQAXgVAPQgRANgRAAQgWAAgWgVg");
	this.shape_394.setTransform(37,-48.7,0.963,0.963,-1.7);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#827B77").s().p("ABiA5QgvgcgkgIIgYgFQgUgEgZgDIgmgEQgggEgWgHQgmgPgHgOQgHgPAhgFQAsgHApAJQAEgOAGgQQANgfAMgGQANgGAxAPQAlALAiANQAQAHASAEQALAFgFARIgPA3IAaAUQAbAaALAXQAQAjAAASQgtglgygdg");
	this.shape_395.setTransform(59.5,-89.5,0.963,0.963,-1.7);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#DDB294").s().p("AiQA6IATgQQAWgSAPgOQAOgNAHgJIA0gVQAXgJAagnQgVgEgYgDIgmgEIAFgRIAughQA1gaAdAfQAWAXAdAbQAQAUgKAbIgDAGIgDASQgDATAFAQQAEAKgFANQgFANgFgEIgKgHQAEAYgGACQgDACgHAFIgGAGIABALIgHAIQgBAEgDAEQgGAIgJgCQgegFgYgVQgFgEgKAIQgNAPgLAJIgmAlg");
	this.shape_396.setTransform(55.6,-80,0.963,0.963,-1.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#DDB294").s().p("AgTArIg7hWIAWANQAZANASAEQAOADAqgCQAjACABAUQAAAOgPAKQgOAHgUACIghABg");
	this.shape_397.setTransform(53.4,-38.2,0.963,0.963,-1.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#2D1F15").s().p("ACfFtQgggEiwiXQiviVgng1QgfgoAHhfIANhXIAmg/QAzhEBEgRQBEgRAsBtQAWA3AIA6IgEAlQgEArACAgQACAhBbBiQAyA4BmBqQA2A7g7AjQgoAYgqAAIgSgBg");
	this.shape_398.setTransform(37.6,-2.6,0.963,0.963,-1.7);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#5B4431").ss(2.1).p("AgdEJQAiAiAPhAQANg2gFhwQgFhmgQhlQgQhngUgn");
	this.shape_399.setTransform(56.5,37.8,0.963,0.963,-1.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#5B4431").ss(1.5).p("AgMFLIAKABQAZABAWgIQAZgJAMgSQADgEADgHQAJgYgHgbIiymWQgIgSAHg+QAFgxAIgg");
	this.shape_400.setTransform(154.3,-13.5,0.963,0.963,0.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#5B4431").ss(1.5).p("AEFCiIBuAxQBwAzAPAMQAJAHgkABQgkACg5gGQiZgQh1gwQhtgui3jHQiyjQgjglQgUgVgrA3IgoA7");
	this.shape_401.setTransform(106.9,-8.9,0.963,0.963,0.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#493939").s().p("AiMChQAGgcAHgQIgNAFQgnAPhLATQhIASgWACQAOgLBDgtQBFgwAQgIIAegRQBHgqAUgiQANgVAlgQIA8gVQAQgFAxgfQAxgeAagJQAvgOBEgIQgLAFgGAQIgSAuIBQgNIifCbQACgQAHgSQAOglAYgRQgvAegzAlQhoBNgXAmQACgKAHgRQAMggATgcQgoAWgrAeQhaA8gYApIAFgYg");
	this.shape_402.setTransform(111.7,-28.6,0.963,0.963,6.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#5B4431").ss(2.6).p("ACDi1IAMABQAJACgPAMQgJAHhcAYQhZAXgQAQQgWAWgYA1QgYA0gFAoQgFAiASApQAJAVAJAO");
	this.shape_403.setTransform(153.6,-18.2,0.963,0.963,0.4);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#493939").s().p("AC/CKQgDAdgHAGQgEAFgCgHIgCgHQgEgXgJgcQgSg3gcgaIgWgTQgdgagagJQgYgJgjADIgRgDQgOgDgFABIgLgCIgmAGQgMACgrACQgnACgWAEQAYgjAjgaQAcgWATgFQAPgEAJACIAHgFQAKgEAUABIAQACIAaACQAOAAAWgDIAjgfQAqggAfgDQAPgCABANQg4AfgVAdQgOATgBALQAAAFACACIARgCQAUgCALgHIgCAEIAEgFQAGgDAEgHQAjgfAiACIAFABQgkAQgLANQgJAMgJAZIgHAXIAQgFIAAACQAAAAAAABQABAAAAAAQAAgBAAAAQAAAAABgBQAHAFALALIAKAKQAdAgACAmIgVgZIAZAmQAXAoACAZQABAagGAOQgCAHgEACQgFghgRgNg");
	this.shape_404.setTransform(151.6,-33.3,0.963,0.963,0.4);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#222638").ss(0.5).p("ABPB3QgXgtgfg1Qg+hogpgj");
	this.shape_405.setTransform(161.1,3.6,0.963,0.963,0.4);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#2D2724").s().p("AAEAGIgMgBQgOAAADgGQADgJAQADQAOABAGAIQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgMgDg");
	this.shape_406.setTransform(159.3,-19.8,0.963,0.963,0.4);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#443326").s().p("AhNDUQgtgGgpgWIgLgGQgfgSgXgYQgWgXgLgXQgOgagFgXQgLgtAdAAQAMAAAHAHIAWAjQAPAWAWAKQAHADAlAJQAWAGBbgpQBTgmApgcQAegVgIg7QgNg9ACgOQACgRAWgLQAUgKAYAAQAKAAAIACQAVAFAcA/QAQAiAXA/QAMAeg5BJIg8BDQgpAZg1AXQhZAog2AAIgRgBg");
	this.shape_407.setTransform(30.2,-6.1,0.963,0.963,15);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#B7A598").s().p("Ag0CLQgYgGgMggQgFgLgIgqIgJg0QgHghgHgPQgTglAzgkQAXgRAvADQAFAUAOAdQAYAzA+AlIAMAFIAjApIgngCIAJANQAJAQAAAQQABAThDAUQgvAPgdAAQgKAAgJgCg");
	this.shape_408.setTransform(4.4,4.3,0.963,0.963,15);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#6D5341").s().p("AmQCxQgQgigQg1QgQgygEgHQgMgYAEgQIAGgNIB2gUQB7gTATADQA4AHCAglQA/gTA1gUIBEg+QBChFgNgdIBwBrQBxB3AKA3QAHAih/A9QiEA/jVBCQjJA+hGAEIgFAAQhHAAgyhtg");
	this.shape_409.setTransform(28.2,14,0.963,0.963,15);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#5B4431").ss(2.6).p("ABShBIAMAIQAKAJgMAIQg3AlgqAaQhTA1gGgPQgFgOACgC");
	this.shape_410.setTransform(164,3.5,0.963,0.963,0.4);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#93745F").s().p("ACRDNIg6giQgigUgMgMQgJgJgVggQgSgfhIhQQhIhQgegZQgWgTAYgLQAogSAHgNQAig4AtA6QAYAfAfBBQANAWA6A/IBZBjQAfAkAAAMQAAAKgPAcQgHASgOAAQgGAAgGgCg");
	this.shape_411.setTransform(-94.3,109,0.963,0.963,75.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#93745F").s().p("ACOHzQgUgNgjgrQgVgZAAgJIAFg5QAFg0gVhGQgWhJghgkQgSgUhLg7QhJg5gmgrQhkhvA/icQAYg+AtgzQAqgxAqgUIBTAYQBdAjA9A3QBFBAAfBsQAdBlgUBFQgQA5gGCbQgEB9AEBSQADBCgBAFQgDAOgdAkQgQATgTAAQgOAAgPgJg");
	this.shape_412.setTransform(-59.9,56.9,0.963,0.963,50.2);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#93745F").s().p("AiSCVQgRgPgJgYQgKgcAPgMIA0geQAqgXAYgUQAogjBbhdIAZgUQAagPAEAbQAEAbASAKQAJAFAJAAQgQATgVAXQgsAvgfASQgkAWgcAXQgZAXgKAQIgTAeQgKAOgKAGQgPAJgUAEIgMABQgRAAgJgJg");
	this.shape_413.setTransform(40.1,120.9,0.963,0.963,-8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#93745F").s().p("AgQGoQgYgaACgfQACgUADgYIADgTQgLhLgRhVQghipgZgyQgkhFAIhRQAJhhBGhAQBAg7BBAKQAhAFAUAQQA6BBg5CnQgHAWgfBJQgMAeABAiQABAcAACHQABB/AGAbQAIAhgKAeQgJAcgeAkQgOARgOAAQgMAAgMgOg");
	this.shape_414.setTransform(62.3,75.9,0.963,0.963,21.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#93745F").s().p("AtGHLQguhBgIhPQgJhXAmhgQAlheA0gxQAsgpBngyQBQgnB1gjQA7gSArgKQB3gXDoh3QB1g7Bdg3IAWgHQAhgMA4gaQBIgiDNAXQDTAYAhA4QAjA7gGCSQgHCRgpBGQhKB8hjBZQhrBfiOA7QiPA6iwAeQioAchRgRQhCgOg1ANQhEAVg2AOQikAqhsAAQiHAAguhDg");
	this.shape_415.setTransform(22.2,28.6,0.963,0.963,15);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#93745F").s().p("Ah/HPQicgig3g6Qg1g4ggiOQgeiIAYgSQAGgFAOgSQAMgQAqgYQA5giAdgUQAigYAfgeQAigiARgMQASgOAfgRQBhg0AWgqQAMgVAmgQQAHgDA2gSQAPgFAygfQAxgfAagIQAxgPBDgHIASAdQAVAiANAbQANAbgKCLQgEBFgHBAQgfAaghAfQhCA9gNAaQgWAvgvBMQgrBEgFAQQgGAQg2BOQg4BQgJAYQgIATgtAAQgqAAhJgQg");
	this.shape_416.setTransform(105.2,-1.3,0.963,0.963,6.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#93745F").s().p("ACIFdQgNgDgjgmQgngsgUgLQgegRgdgdQgfgfgUgkQgSgfgdAJQgbAPgEABQgEACgVgaQgYgegRgkQgyhsAxhZQAwhXAzgaQAZgNAQAEIAGgFQALgEATABIAkADQAPABAbgDIAkgfQApggAfgDQAfgDgaAzQgNAagUAbIAZgXQAegXAcACQAMABgQARQgZAagIASIgMAZIAcAYQAdAiADAmIgWgZIAYAkQAYAqACAZQACAagGANQgDAHgDACQgGgggRgNQgDAcgGAGQgEAFgDgHIgCgGIgCAdQACAlATAjQAWAmAQAwQANAoACAWQABATgDAHQgDAHgSAWQgSAWgbANQgWALgRAAIgIAAg");
	this.shape_417.setTransform(150.9,-17.4,0.963,0.963,0.4);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#493939").s().p("Am8GmQg5gKgogPIAngSIgsgKQBggLAzgSQAZgJAGgHQhgAJhUgPQgqgHgXgJQAmgPAdgTQA5glgxgNQgxgNgnAUQgNAHgIAHIApgqQAegfgMgNIgSgHIhLAwQATgiAkgeQBIg+BUAOQBYAOA8gHQAogFBngYQBSgQB1iHICojVQA/hOCFggQCCggBKApQA9AhAXAsQALAWgBAPQgHCMhggvQgegOgkggIgdgdQgvAEgmAoQgtAwheCbQhdCYidCEQiOB4hwAjQgzAQg9AAQgpAAgvgHg");
	this.shape_418.setTransform(-59.6,20.3,0.963,0.963,3.8,0,0,60.7,-30.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#93745F").s().p("ACkDHIgtgPQgigMgWgXQgRgSh3hTQh3hSgVgXQgcgfAJg0QAJgwAagJQA6gTAsA5IBYB1QBCBWAaAaQAUAVAtAKQAwAKAWATQAfAbghAbQgXATgRAAQgIAAgGgEg");
	this.shape_419.setTransform(-29.4,115,0.963,0.963,15.5);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#93745F").s().p("ABlFkQgbgBgLgOQgaghgDgIQgGgOgDgrQgGhHgDgcQgJg6gOgcQgOgYgnghQhOhBgfgdQhDg/AqhIQAkg7BagrQCZhIAtCGQAOArADBEQACAjAAAtQABAWAVBTQASBIgFAeQgGAiAHAaQAEASAUA8QAPA2hFAaQgYAIgXAAIgHAAg");
	this.shape_420.setTransform(-34.3,70.7,0.963,0.963,35.3);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#93745F").s().p("AhnCxQgQgCgcgiQgRgWADgZQADgeAhgNQAwgRAIgFQAXgMAegdIBHhJQAmgsgBgbQgBgPALgEQAKgCAOAIQAkAWAAAqQAAApgGAKQgBADgjAhIhhBXQhHBAgRATQgWAZgOAAIgCAAg");
	this.shape_421.setTransform(138.4,91.2,0.963,0.963,-71.5);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#93745F").s().p("AFgDiQgrgJgygYQg/gfh3g3QiWhFgdgIQgfgJgmAJQgUAEhRAcQg+AVgpg1QgmguAFhDQAKh7BegTQA3gLAyAVQAJADBqAUQBrAWAZARQARAMA8BTQA8BQAlAYQBRA0AmAeQBEA2AAAcQAAAUgbAAQgNAAgRgEg");
	this.shape_422.setTransform(97.1,61.1,0.963,0.963,-6.6);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#493939").s().p("AgEBiQgTgKgEgYQgCgJgBgnQAAgTgGgGQgLgGgLgJIgsgYQgbgPAIgMQARgeAqAEQAqAEArAjQBLA7AYA1QAKAVg6ATQgjAMgWAAQgNAAgIgEg");
	this.shape_423.setTransform(-15.5,139.1,0.963,0.963,15.5);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#493939").s().p("AAOBcQgwgIgfhDQgOgdgJgEQgQABgRgCQgSgCAJgNQASgZADgOQAHgiAvAUQAaAMAwAfIBNAqQAtAcgIAQQgKASgqARQgiAOgXAAIgKgBg");
	this.shape_424.setTransform(-107.5,135.3,0.963,0.963,75.4);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#493939").s().p("AhYBKQgIgNAAgbQABgIgGgbQgDgVAGgPQAHgRAVgFQAKgCAkAAQAZgBAMgDQAMgDAYgMQAUgKANAVQAIALAKAUQAIAKgKALQgKALgjAPQgbANgfAXQgkAagNAIQgLAGgHAAQgKAAgGgLg");
	this.shape_425.setTransform(145.8,107.3,0.963,0.963,-96,0,0,2.9,-3.3);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#493939").s().p("AhoBCQACgJABgwQABgfAOgHQAQgGAOgLIAbgUQAOgKADgBIAggOQAjgPAjAjQAjAkgjAhQgIABgMACQgZAIgUAOQgNAKgVAYQgQARgNADQggAOgPAEIgJABQgSAAAIgeg");
	this.shape_426.setTransform(23.9,138.4,0.963,0.963,-8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#5B4431").ss(2.1).p("ACcA2Qg5gfhDgbQiFg5g1AM");
	this.shape_427.setTransform(79.5,-28,0.963,0.963,15);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#5B4431").ss(1.5).p("ADwCiIBrA1QBuA3APALQAJAHgkACQgkACg5gGQiZgQh1gxQhuguioi8QiijIghgmQgpgvgZAKQgHADgGAJIgDAI");
	this.shape_428.setTransform(107.1,-14.8,0.95,0.95,-0.4);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#93745F").s().p("AtGHLQguhBgIhPQgJhXAmhgQAlheA0gxQAsgpBngyQBQgnB1gjQA7gSArgKQB3gXDoh3QB1g7Bdg3IAWgHQAhgMA4gaQBIgiDNAXQDTAYAhA4QAjA7gGCSQgHCRgpBGQhABrh5BLQhMAui5BMQifBBiNAjQibAmhLgQQg9gNhBAgIg6AdQglARgiAJQikAqhsAAQiHAAguhDg");
	this.shape_429.setTransform(21.5,24.1,0.95,0.95,14.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#93745F").s().p("AhnCsQgQgCgcgiQgRgWADgZQADgeAhgNQAwgRAIgFQAXgMAegdQAugwAPgTQAdglgBgcQgBgPAOgFQANgFASAGQAtAQAAAqQAAApgGAKQgBADgjAhIhhBXQhHBAgRATQgWAZgOAAIgCAAg");
	this.shape_430.setTransform(118.3,84,0.95,0.95,-67.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#93745F").s().p("ADjC+QgdgOh+ghIiYgnQghgRgQgGQgbgKg2ASQg+AVgpg0QgmgwAFhCQAKh7BegSQA3gLAyAUQAJAEBqATQBrAWAZASQARAMA8BSQA8BQAlAYQAxAgAIALQAHAJAAAhQAAAfgrAKQgOADgNAAQgaAAgZgMg");
	this.shape_431.setTransform(84.7,53.5,0.95,0.95,2);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#5B4431").ss(2.1).p("ACXBDQg2glhBgjQiBhGg1AM");
	this.shape_432.setTransform(78,-33.7,0.95,0.95,14.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#5B4431").ss(2.1).p("AB+A2Qgpgfg1gbQhng5g2AM");
	this.shape_433.setTransform(75.2,-33.5,0.937,0.937,16);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#5B4431").ss(1.5).p("AEpCAIBoAkQBqAlAPAMQAJAHgkABQgkACg5gGQiZgQh1gwQiCg2i+h5Qi8h3gyg6QgpgwggA6QgKASgIAbQgEANgCAK");
	this.shape_434.setTransform(102,-10.5,0.937,0.937,13);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#93745F").s().p("AhrHQQiwgig3g6Qg1g4ggiOQgeiIAYgSQAGgFAOgSQAMgQAqgYQA5giAdgUQAigYAfgeQAigiARgMQASgOAfgRQBhg0AWgqQAMgVAmgQQAHgDA2gSQAPgFAygfQAxgfAagIQAxgPBDgHIASAdQAVAiANAbQANAbgKCLQgEBFgHBAQgfAaghAfQhCA9gNAaQhHCXgUA4QgGAQgwBOQgxBQgJAYQgHARg4AAQg0AAhIgOg");
	this.shape_435.setTransform(102.9,-5.1,0.937,0.937,13);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#5B4431").ss(2.1).p("ACLA8Qgwgig7geQh0hAg2AN");
	this.shape_436.setTransform(75.9,-53.4,0.959,0.959,6.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#5B4431").ss(1.5).p("AEYB5IBoAkQBqAlAPAMQAJAHgkABQgkACg5gGQiZgQh1gwQh9g0iwh2Qimhwg0g9QgpgvguBUQgKASgDAoQgEAwANAT");
	this.shape_437.setTransform(104.8,-32.8,0.959,0.959,6.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#5B4431").ss(1.5).p("AEaBlIBnAjQBrAmAOALQAJAHgjACQglACg5gGQiYgQh1gxQiNg6iXhVQijhdgvg2QgpgwgtAhQgPAKgNARIgKAP");
	this.shape_438.setTransform(98.6,-35.7,0.962,0.962);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#93745F").s().p("ACVHzQgUgNgjgrQgVgZAAgJIAFg5QAFg0gVhGQgWhJghgkIjej4QhihuBGh7QA2heBsg1IBSAYQBeAjA9A3QBFBAAfBsQAdBlgUBFQgQA5gGCbQgEB9AEBSQADBCgBAFQgDAOgdAkQgQATgTAAQgOAAgPgJg");
	this.shape_439.setTransform(-32.8,72.9,0.962,0.962);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#5B4431").ss(2.1).p("AB3AZQgmgQgxgNQhhgcg1AN");
	this.shape_440.setTransform(69.6,-51.7,0.962,0.962);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#222638").s().p("AAAAEIgCgCIABgBIgBgBIgCAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIABAAIgCgBIgCgBQAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAHgBAGAKIABABIAAACIgCABIgGgDgAAGADIABAAIgCgBIABABg");
	this.shape_441.setTransform(69.6,-105.7);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#443023").s().p("Ag2AmQAFgEAAgEQADgQAVgzIAkAJQAYAGAUAGQgeAigZAHIg1ANg");
	this.shape_442.setTransform(57.1,-110.6);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#AFAFAF").ss(1.5).p("AA9ADQAKgRgwg4QgQgTgfAcQggAcgFAjQgEAWAMAOQAJAMAVALQAFADAUALQATAIAEgL");
	this.shape_443.setTransform(40.8,51.9);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#2D1F15").s().p("ABZFGQgegKgPgDQgagDhBgmQhFgoAFgPQAOgtAShQQAbh1gDgzQgEhCAHgfQAEgVAchFQAshuBHBSQAWAZgUBdQgPBEgaBBQgWA2gOA7QgSBMAHAnQAFAcAzAdQAvAbAAAhQAAAWgRAAIgGgBg");
	this.shape_444.setTransform(43.1,29.3);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#DDB294").s().p("AgXAsQgTgPgMgCQgSgCgEgOQgEgMAIgPIAMgFQAOgFANgDQAHgCALgNQAJgLATgCQAWgCAOAMIAZAbQAPAOgjAgQgiAggRAAQgJAAgRgOg");
	this.shape_445.setTransform(61.2,-63.5);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#DDB294").s().p("AgOBEQgOgIgGgYQgIgigHgLQgPgcgCgIQgDgNAOgKQAOgJADACQADACANANQAJAGANABQAKAAAKALQAfAjAPAuQAIAagiAIQgNADgLAAQgQAAgOgIg");
	this.shape_446.setTransform(59.2,-50);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#DDB294").s().p("AB2BtQgEgKg1gfIhegcQhVgagZgeQgdgkAGgfQAGgbAbgCQAcgBAMADIAhAMQAUAHAsAnIBBA5QAMALAkAWQAfASAOATQARAVgcALQgQAGgIAAQgHAAgCgEg");
	this.shape_447.setTransform(42.4,-61.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#9B4242").s().p("AgzDZQgPgOgHiLQgFiYgDggQgEgrAogiQAggcAZgBIAKABQAPAGAXAUQAZAXgDApQgCAigSAdQgeAwAGCSQADBBglAbQgRANgOAAQgNAAgLgKg");
	this.shape_448.setTransform(38.4,-77.7);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#9B4242").s().p("AheEhQgpg0gigzQgjg0gFgTQgEgRA5hyIBJiNQAZgwATgXQAigpAjgBQAiAAARAEIAIADIgVgPIAVgMQAagOAagLQBICPgDARQgBAEgOAXQgMAUABAWQACAcgaBfQgbBggSAbQgUAfggAoQgiAsgFgBQgTAVgVAMQgQAJgPAAQgZAAgWgbg");
	this.shape_449.setTransform(34.3,-75);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#827B77").s().p("ABfA7QgugjgfgMIgYgIQgUgGgYgGIglgJQgfgIgUgLQgkgTgFgQQgFgPAggBQAtgBAnAPIAOgdQARgdANgEQAOgEAvAVQAjAPAgASQAOAIASAIQAKAGgHAPIgWA1IAXAYQAYAcAHAZQAMAlgCARQgogqgugjg");
	this.shape_450.setTransform(63.3,-112.7);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#DDB294").s().p("AiXAnIAVgMIApgbQARgNAGgHIABAAIA2gNQAYgHAegjQgUgHgXgGIglgJIAHgQIAygaQA4gUAZAjQATAaAZAfQANAWgNAZIgEAGIgGAQQgFAUADAQQACAKgHANQgGAMgFgFIgIgJQABAZgGABIgSALIgBALIgIAHQgBAEgEAEQgHAGgJgDQgegJgTgXQgFgGgKAIIgcAVIgqAfg");
	this.shape_451.setTransform(58.3,-104.7);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#DDB294").s().p("AhQgoIAXALQAaAMASACQAOABAqgFQAjgBADAUQACAOgPAKQgNAJgUADQgPADgTABIgPABg");
	this.shape_452.setTransform(49.3,-64.4);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#2D1F15").s().p("ACEF3QgfgHigioQifimgig3QgbgtARhdIAVhVIAsg8QA6g+BFgKQBFgLAhByQAQA4ADA7IgIAkQgIArgBAgQgBAhBQBrQAsA8BbB0QAwBAg+AdQgiAQgjAAQgQAAgRgDg");
	this.shape_453.setTransform(27.1,-28.1);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#5B4431").ss(2.1).p("AgQEKQAkAgAMhAQALg3gKhvQgIhmgVhkQgUhngWgm");
	this.shape_454.setTransform(44.7,18.5);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#5B4431").ss(1.5).p("Ag9FJIAKADQAZAGAXgEQAZgFAPgQQAFgFADgFQANgWgCgbIhomwQgFgTARg7QAOguAOgg");
	this.shape_455.setTransform(153.7,-44);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#5B4431").ss(1.5).p("AEACGIBgA1QBiA3AMAOQAIAIgjgEQgkgFg4gQQiTgqhrhEQiGhViBhmQiRh0gjg8Qggg2gqA5IgjBF");
	this.shape_456.setTransform(103.2,-37);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#493939").s().p("AiiB5QALgaAKgPIgPADQgnAHhOAGQhJAGgXgCQAOgIBKghQBNgjASgGIAggLQBQgeAXgdQAQgTAngJIBAgKQAQgCA2gWQA1gWAcgDQArgGBJAEQgLADgJAPQgNAXgMASIBQACIi3B9IAPgiQAUghAbgMQg0AWg5AbQh0A6gcAiIAMgZQASgeAYgYQgrAOgxAWQhiAsgfAkIAJgXg");
	this.shape_457.setTransform(111.1,-62.2);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#5B4431").ss(2.6).p("ACZiXIAMADQAIAEgQAJQgLAFheAIQhcAHgTANQgZARghAxQggAugNAnQgKAhANAmQAHATAJAM");
	this.shape_458.setTransform(155.4,-48.8);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#493939").s().p("ACoCMQgIAbgHAGQgFADgCgGIAAgIQAAgXgEgdQgIg7gXgdIgSgWQgZgggXgNQgXgNgigDIgQgGQgOgGgFAAIgLgEIgmAAQgNAAgpgGQgngFgXAAQAfgeAmgTQAfgQAUgDQAQgBAIAEIAHgEQALgDAUAFIAPAEIAYAHIAlADIAogYQAvgYAfACQAQACgCAMQg/AWgXAXQgRARgDAKQgCAGACACIASABQATABANgEIgDADIAFgEQAIgDAEgFQAmgZAiAIIAFACQgoALgLAKQgLAKgNAXIgLAVIARgCIgBACQAAAAAAABQAAAAAAAAQABAAAAgBQAAAAABAAQAJAJAGAJIAIAMQAWAmgDAkIgRgcIASAqQAQArgDAZQgDAagIANIgIAHQABghgPgPg");
	this.shape_459.setTransform(154.8,-61.3);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#222638").ss(0.5).p("AA5CDQgPgxgWg5Qgqhxgigq");
	this.shape_460.setTransform(158.4,-24.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#2D2724").s().p("AAPALIgMgFQgDgCgIgBQgOgCAEgGQAEgHAPAEQAPAEAEAIQABADgCACQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgBAAg");
	this.shape_461.setTransform(160.6,-49);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#443326").s().p("AhIDWQgvgGgogUIgMgGQg+gjgbgzQgNgagGgXQgGgVAEgMQAEgNAPAAQAMgBAHAJIAXAiQAPAWAXAJQAIAEAkAIQAWAFBagrQBTgoAogcQAdgVgJg7QgOg9ACgPQACgRAVgLQAUgKAYAAIASABQAVAFAeA+QAQAiAYA/QANAdg4BKIg7BFQgoAZg0AYQhbArg2AAIgOgBg");
	this.shape_462.setTransform(22.6,-25.4);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#B7A598").s().p("AgwCLQgZgGgNgfQgEgMgJgpIgLg0QgGgfgJgQQgSglAxglQAYgSAuADQAHAWANAaQAZAzA/AjIALAFIAkApIgmgBIAJAMQAJAQABAQQAAAThCAWQgxAQgdAAQgJAAgHgCg");
	this.shape_463.setTransform(-0.2,-7.4);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#6D5341").s().p("AmNC4QgQghgSg1QgQgxgEgHQgNgYAEgSIAGgMIB2gWQB6gVATACQA4AGCAgoQA+gTA1gWIBCg/QBBhFgNgeIBxBqQB0B0ALA3QAHAih9A/QiDBCjVBGQjHBChFAFIgHAAQhGAAg0hrg");
	this.shape_464.setTransform(26.5,-4.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#5B4431").ss(2.6).p("ABcgyIALAKQAIALgOAFQg8AbguATQhcAlgCgPQgDgPACgC");
	this.shape_465.setTransform(161.5,-24.4);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#93745F").s().p("AAZDsIgfg7QgUgjgFgQQgDgMgBgnQgCgkgVhpQgVhpgNglQgKgcAaADQArAEANgHQA5gfAKBIQAFAngGBIQABAbARBSIAbCDQAJAvgHAKQgFAJgbAQQgKAIgIAAQgKAAgIgKg");
	this.shape_466.setTransform(-61.1,128.8);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#93745F").s().p("AkPHAQgrAAgFgrQgDgYAMg2QAGggAHgGIAwgfQAsgdApg8QArg/AHgwQADgWgWgsQgHgQgqhLQhJiCAKg4QAYiQDogRQBXgGBeAOQBVANAsAVQgaAZgaAqQg2BTgFBSQgIBtgeBNQgjBag6AZQgwAUhPBrQhfB/gPANQgyAsgEACQgMAHgpAAIgGgBg");
	this.shape_467.setTransform(-39.6,71.3);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#93745F").s().p("AiOB+QgZgCgKgOQgNgTgDgaQgDgdARgIIA6gRQAugMAcgPQAvgYBuhFIAdgOQAdgJgDAcQgCAbAPAOQAIAHAIACQgTAPgbARQg1AigiALQgpAOgfAQQgfAQgNANIgZAZQgOAMgLADQgNAEgOAAIgKAAg");
	this.shape_468.setTransform(108.1,49.9);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#93745F").s().p("AEYFdQgjgDgTgXQgNgQgOgTIgLgRQg8guhHgyQiNhjg1gSQhJgZgzg/Qg9hMAGhfQAGhXA2gmQAbgUAagCQBWAGBLCgQALAWAcBJQALAfAYAXIBzB1QBYBaAYAQQAcATAOAbQANAbADAvQACAngiAAIgFAAg");
	this.shape_469.setTransform(94.9,11.8);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#93745F").s().p("As+HaQguhBgKhPQgLhXAkhgQAjhfA0gyQAqgqBng0QBPgoB1gmQA7gSAqgLQB3gaDmh7QB0g9Bbg5IAWgHQAhgNA3gbQBIgjDNATQDUATAhA4QAlA7gECRQgECSgnBGQg/Bsh3BNQhLAwi4BQQidBEiMAlQicAphKgOQg+gMhBAhIg5AeQgkATgiAJQirAvhuAAQh/AAgug/g");
	this.shape_470.setTransform(24.6,11.7);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#93745F").s().p("AhZG2Qg0gJhFgaQinhAgshDQgrhBgGiRQgHiKAbgOQAHgEASgQQAOgNAtgRQA+gXAggPQAmgSAkgZQAogaASgKQAUgLAhgLQBpgiAeglQAPgTAogJIBAgKQAQgCA2gWQA1gWAcgDQAzgHBCAFIANAfQAPAmAIAdQAIAdghCGQgRBEgSA9IhJAtQhMAxgQAYQhfCEggA3QgIAQg9BEQg9BGgOAWQgGAKgXAAQgOAAgVgEg");
	this.shape_471.setTransform(105.4,-32.2);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#93745F").s().p("ABHFWQgMgFgcgsQgfgxgQgOQgcgYgXghQgagjgNgnQgMgigeADQgdALgFAAQgEABgQgdQgTghgKgmQgeh0A/hPQA/hNA2gRQAcgJAOAHIAHgDQALgDAUAFIAhAJQAQADAbACIAogZQAvgYAfADQAfACgjAvIgpAtIAcgSQAigRAbAGQALAEgSAOQgdAWgLAPQgMATgEADIAXAeQAXAmgEAmIgRgdIARAoQARAtgDAaQgDAZgIAMIgIAIQABghgPgPQgIAagHAGQgFAEgCgHIAAgHIgIAdQgEAkANAmQAPApAHAyQAGAqgCAWQgCATgEAGQgEAHgWASQgWASgdAJQgRAFgNAAQgKAAgIgDg");
	this.shape_472.setTransform(151.9,-45.5);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#493939").s().p("AmzGvQg5gIgogOIAmgTIgsgKQBfgMAzgTQAZgKAGgHQhgALhUgNQgqgGgXgJQAmgQAcgTQA4gmgxgMQgxgMgnAVQgLAGgIAHIAmgqQAegggMgNIgSgGIhLAxQATghAjggQBHg/BUAMQBYANA8gJQAogFBngaQBRgRBziKICjjYQA+hPCFgjQCBgjBLAoQA+AgAXAsQAMAVgBAPQgECNhhgtQgfgOgkgfIgegdQguAFglApQgsAxhcCcQhaCaiaCHQiMB7hvAlQg2AShBAAQgnAAgqgGg");
	this.shape_473.setTransform(-119.6,58.7);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#93745F").s().p("ABoDtIgngbQgegVgPgcQgLgWhchxQhchvgOgcQgSglAWgvQAWgtAbgBQA+gCAaBCQAPAmAoBTQAlBLAXArQAPAbAtAcQAwAeAQAYQAXAigvAaQgcAPgRAAQgMAAgGgHg");
	this.shape_474.setTransform(-32.4,124.5);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#93745F").s().p("Ah3FaQgdgGgVgQQgXgQgBgSQgEgqABgHQADgQAUglQAjhAALgZQAZg1ABggQACgcgPgwQgfhkgJgmQgXhaBLglQA9gfBjANQCoAWgjCJQgLAtgiA6QgSAfgYAlQgLATgcBSQgXBGgUAWQgXAZgIAaQgGASgQA9QgMAqgvAAQgNAAgQgEg");
	this.shape_475.setTransform(-30.6,80.8);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#93745F").s().p("AhYC1QgYgOgHgYQgIgdAbgYQAmgiAGgHQARgUAQgmQAag/AGgWQANgtgLgaQgGgOALgJQAKgJATgBQAwgDAPAnQAPAngBALQgBAEgTArQgJAUgxBhQgsBXgIAXQgMAggNAFIgGAAQgRAAgggSg");
	this.shape_476.setTransform(119.9,22.2);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#93745F").s().p("AktCGQgwglgMhCQgVh5BXgpQAygYA2AIQAJABBsgHQBtgGAdALQAUAIBOBBQBOBAApANQA4ATAKAIQAJAHAIAgQAIAegnAUQgmAUgogJQgfgHiDAAIidAAQgkgJgRgCQgcgDgxAfQgZARgZAAQgdAAgcgWg");
	this.shape_477.setTransform(95.6,1);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#493939").s().p("AAWBPQgXgFgPgMQgPgNgHgXQgGgUgIgDQgMgDgNgFIgxgLQgegGAEgOQAIgiAqgHQApgIA0AVQAyAUAwAcQAvAaAPASQAPARg8AUQgsAQgaAAQgIAAgGgCg");
	this.shape_478.setTransform(-12.3,147.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#493939").s().p("Ag9AYQgUgagKgBQgPADgRABQgTACAGgNQANgdAAgOQABgjAyALQAbAFA2AVIBTAaQAzATgFAQQgGAUgmAZQgmAagZAAIgDAAQgvAAgqg5g");
	this.shape_479.setTransform(-43.6,153.3);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#493939").s().p("AhXBMQgIgNAAgbQAAgIgFgcQgFgUAGgPQAHgRAVgFQAKgDAkgBQAZAAAMgEQALgDAZgNQATgKAOAUQAIALAKAUQAJAKgKALQgKALgiAQQgcAOgdAXQglAbgMAIQgLAGgHAAQgLAAgGgKg");
	this.shape_480.setTransform(105.6,41.5);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#493939").s().p("Ag9A7QgjgDgQgFQgbgIAagbQAGgGAagoQARgcAQADQAQACASgCIAhgEIAUgBIAjAFQAmAFAMAwQAMAwgvALQgHgEgNgDQgZgHgZADQgPABgfAKQgNAEgKAAQgGAAgFgCg");
	this.shape_481.setTransform(83.1,58.2);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#5B4431").ss(2.1).p("ABqA8QgfgagrgbQhTg2g2gM");
	this.shape_482.setTransform(76.2,-58.4);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#222638").s().p("AAAADIgBAAIAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgCgBIAAgBIAAgBIgCgBIgBgBIABgBQAGgCAIAKIAAABIAAABIgCABIgGgDg");
	this.shape_483.setTransform(61,-107.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#443023").s().p("AgvAeQABgLASg5IAkAGIAtAKQgcAkgZAJIg0AQQAEgGABgDg");
	this.shape_484.setTransform(48.3,-111.1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#AFAFAF").ss(1.5).p("AA9gCQAIgSg3gzQgRgQgcAfQgdAggBAjQAAAWANANQAKAKAWAJQAGACAVAJQAUAFACgL");
	this.shape_485.setTransform(38,56.6);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#2D1F15").s().p("ABgFBQgfgGgPAAQgbgBhEgeQhJgfACgQQAJgzAIhNQANh2gJgzQgLhBADggQACgWAThHQARg+AfgHQAagGAmAiQAYAVgJBgQgHBGgSBCQgPA5gGA8QgJBNAKAmQAJAbA1AXQAyAWAEAgQADAXgUAAIgDAAg");
	this.shape_486.setTransform(40.7,33.2);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#DDB294").s().p("AgUAuQgUgNgMgBQgSgBgFgOQgFgMAHgPIAMgGIAagKQAIgCAJgNQAIgMATgEQAWgDAPALQAJAHASATQAPAMggAiQggAigRABIgCAAQgIAAgRgMg");
	this.shape_487.setTransform(55.3,-64.8);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#DDB294").s().p("AgJBEQgQgHgHgYQgKgigHgKQgSgagCgJQgDgNANgKQANgKADACIARANQAKAGANAAQAJgBALAKQAiAiARAtQAKAZgiALQgOAEgNAAQgPAAgLgGg");
	this.shape_488.setTransform(54.2,-50.9);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#DDB294").s().p("AB8BlQgCgEgVgNQgSgLgTgJIhfgVQhXgVgbgcQgfgjAFgeQAEgcAbgDQAbgDAMACQAGAAAcAJQAUAHAvAjIBEA1QANAKAmAUQAfAQAQASQASAUgbAMQgRAIgIAAQgGAAgCgEg");
	this.shape_489.setTransform(36.8,-61.8);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#9B4242").s().p("AgcDbQgQgNgQiLQgPiWgFggQgGgqAlglQAegeAZgDIAKABQAPAEAYATQAbAVAAApQAAAigRAfQgbAyAQCRQAHBBgjAdQgSAPgOAAQgMAAgKgJg");
	this.shape_490.setTransform(30.8,-77.3);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#9B4242").s().p("AhJEqQgtgyglgwQgmgzgHgSQgFgQAxh2QASgqAuhnQAWgxASgZQAggsAigCQAigDASADIAIACIgWgNIAVgNQAZgQAXgNQBSCLgCARQAAAEgNAYQgLAVADAVQAEAcgUBgQgVBigQAcQgRAfgeAsQggAtgEAAQgSAWgWAOQgPALgRAAQgXAAgWgYg");
	this.shape_491.setTransform(27.5,-74.7);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#827B77").s().p("ABgA6QgugfghgLIgYgHIgtgJIgmgGQgfgGgVgKQglgRgGgPQgGgPAggDQAtgDAoALIAMgdQAPgeANgFQANgFAxASQAiAMAjARQAOAHATAGQAKAGgGAQIgTA1IAZAXQAaAbAIAYQAOAkgBASQgqgogxggg");
	this.shape_492.setTransform(54.4,-114.4);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#DDB294").s().p("AiTAxIAUgOIAmgeQAOgLAJgKIA1gRQAYgIAcglIgsgKIgmgGIAGgRIAwgdQA3gXAbAgQAUAZAbAdQAPAVgMAaIgDAGIgEARQgEAUADAQQADAKgGANQgFANgFgFIgJgIQACAYgGACIgKAHIgHAFIAAALIgHAIIgFAIQgGAHgJgDQgggJgUgUQgFgFgKAIQgPAOgLAIIgoAig");
	this.shape_493.setTransform(49.7,-105.5);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#DDB294").s().p("AhRgmIAXAKQAbAKATABQAOAAApgIQAjgDAEAUQADANgOAMQgNAKgTAEIgxAIg");
	this.shape_494.setTransform(43.2,-64.4);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#2D1F15").s().p("AByF7QgegJiVizQiUiwgdg5QgYguAXhcIAbhUIAwg4QA+g6BFgGQBFgGAaB0QANA5gBA7IgLAkQgLAqgDAgQgDAgBIBwQAoA/BTB6QAsBEhBAZQgdALgeAAQgVAAgWgGg");
	this.shape_495.setTransform(19,-28);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#5B4431").ss(2.1).p("AAUEIQAoAbAFhBQAEg4gWhtQgVhkgfhhQgihkgagj");
	this.shape_496.setTransform(37.4,23.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#5B4431").ss(1.5).p("Ag8FJIAKADQAZAFAXgEQAZgEAPgRIAIgKQANgWgDgcIhumuQgFgTARg7QANgvANgf");
	this.shape_497.setTransform(145.1,-50.1);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#5B4431").ss(1.5).p("AEBBzIBZAwQBdAzAMANQAHAJgjgEQgkgEg3gQQiUgohshDQhMgviqiPQiSh8gxgSQg6gVgUA7QgJAdACAh");
	this.shape_498.setTransform(95.9,-40.3);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#493939").s().p("AjXCeQAHgbAIgRIgOAFQgmANhMAQQhJAPgWABQAOgKBFgrQBHgsARgIIAegPIABAAQBKgpAUgfQANgVAngOIA+gSQAOgEAzgdQAygcAbgHQAsgMA8gDQgKgfBkAcQBlAcAAANQhAAehFAkQiMBGgdAbQACgQAIgTQAPgjAZgQQgvAcg2AjQhrBIgZAlQAEgKAHgRQAOggAUgaQgpAUgtAcQhdA4gaAnIAGgXg");
	this.shape_499.setTransform(107.7,-69);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#5B4431").ss(2.6).p("ACYiXIALACQAJAEgQAJQgLAGheAIQhcAJgSANQgZASggAwQggAwgMAnQgLAgANAlQAHASAIAM");
	this.shape_500.setTransform(146.4,-55.2);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#493939").s().p("ACsCLQgIAcgIAFQgEAEgDgGIAAgIQABgXgFgdQgJg6gYgeIgSgWQgZgfgXgNQgXgNgjgCIgPgGQgOgFgFAAIgLgEIgmAAQgNAAgqgFQgngFgXABQAegfAngUQAfgQATgDQARgCAHAEIAIgEQAKgCAUAEIAQAEIAYAGQAOADAXABIAogZQAugZAgACQAPABgBAMQhAAZgXAWQgQARgDAKQgBAGACACIARABQAUABAMgFIgDADIAFgEQAIgDAEgFQAngZAhAHQAEABAAACQgkAIgOANQgKAKgOAXIgKAVIARgCIgBACQAAABAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIAQASIAHAMQAXAjgDAnIgRgdIASAqQARAsgDAZQgCAZgJANIgHAIQAAgigOgPg");
	this.shape_501.setTransform(145.6,-67.7);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#222638").ss(0.5).p("AA7CCQgQgwgWg5Qgshwgjgq");
	this.shape_502.setTransform(149.8,-31);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#2D2724").s().p("AAPAKIgMgFQgFgCgHgBQgMgBACgGQAEgHAQAEQAPAEAEAIQABACgCADQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgBAAg");
	this.shape_503.setTransform(151.7,-55.2);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#443326").s().p("AiFDXIgMgFQhCgbghgvQgSgagIgUQgSgrAdgFQAMgCAIAHIAcAfQARAUAYAHQAIACAlADQAWACBUg1QBNgyAkgiQAagZgQg5QgWg7AAgOQAAgRATgOQASgNAZgDQAKgCAIABQAWACAlA6QAUAfAgA7QARAcguBQIgxBMQglAegxAfQhhA9g3ABQgtAAgtgOg");
	this.shape_504.setTransform(17.6,-20.2);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#B7A598").s().p("AgcCMQgZgCgRgeQgGgKgPgpIgRgzQgJgbgMgRQgXgiAtgrQAVgVAugDQAIASASAbQAgAwBCAaIAMAFIApAiIgnAEIALAMQAMAOACAQQAEAShAAeQg4AbgdAAIgGAAg");
	this.shape_505.setTransform(-2.7,1.8);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#6D5341").s().p("AlyDmQgUgfgYgyQgXgugFgHQgQgWACgSIAEgNIByglQB2gkAUgBQA5gBB5g4QA7gcAygcIA6hHQA3hNgRgcIB+BbQCBBkASA1QAMAhh0BOQh5BTjKBgQi9BchEANQgJACgKAAQg/AAg8hbg");
	this.shape_506.setTransform(24.2,1);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#5B4431").ss(2.6).p("ABbg0IALAKQAJALgOAGQg8AbguATQhbAngDgPQgDgQACgC");
	this.shape_507.setTransform(152.9,-30.6);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#93745F").s().p("Ag3DqIgQhCQgJgmAAgRQAAgNAJglQAIgjAIhsQAHhqgCgoQgCgdAYAKQAoAPAOgDQBAgPgKBJQgGAngYBEQgGAZgGBUIgJCFQgEAvgJAJQgHAHgdAIQgJAEgGAAQgNAAgHgPg");
	this.shape_508.setTransform(-71.5,124.8);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#93745F").s().p("AlBG/QgrgHgCgvQgCghARgvQAHghAEgJQAGgMAngSQAygYArgoQAwgtANguQAIgagPiuQgPitASg3QAtiJDHAoQCTAdB5BSQgdAVghAlQhBBLgSBQQgeCGgXA6QgoBjg5APQg1ANhoBQIiOBrQgXAQgYAgQgHAKgTAAQgJAAgMgCg");
	this.shape_509.setTransform(-43.2,70.6);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#93745F").s().p("AihCFQgQgRgGgZQgHgdARgKQAGgDAxgVQAsgTAZgRQAsgfBkhSIAbgSQAcgNABAcQABAcARAMQAJAFAIABQgRARgYAVQgwApghAPQgnATgdAUQgdAUgLAPIgWAbQgMAOgKAEQgPAIgVABIgFAAQgWAAgKgLg");
	this.shape_510.setTransform(103.2,34.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#93745F").s().p("AECEoIgfgfIgNgPQhCgmhMgoQiZhRg2gLQhMgPg7g5QhHhCgGhgQgFhWAxgtQAYgXAagFQBWgGBfCVQAMATAnBGQAPAdAbAUICABlQBjBPAaAMQAfAPAQAZQARAaAJAtQAIApgnACIgHAAQgfAAgUgSg");
	this.shape_511.setTransform(88.8,2.7);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#93745F").s().p("Ar9I5Qg3g6gUhNQgVhUAXhkQAXhkAsg4QAlgvBehAQBKgyBvg0QA4gbAogQQBzgoDViYQBqhMBThEIAVgKQAfgSAzgiQBDgrDNgIQDVgIApAzQAsA1APCRQAPCRgfBLQgvB0htBbQhEA5isBnQiTBYiGA3QiWA9hLgFQg+gEg8ApQgiAZgTAMQgiAXggAOQjOBWh3AAQhWAAgpgsg");
	this.shape_512.setTransform(24.9,17.9);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#93745F").s().p("AgKHVQg1gChHgRQivgqg0g8Qgyg7gaiQQgYiJAZgQQAGgEAQgTQAMgOArgXQA5geAfgUQAjgWAhgeQAlggAPgLQATgOAggPQBjgvAZgoQANgVAmgOIA+gSQAPgFAzgdQAygcAbgHQAygNBDgEIARAeQATAjAMAbQALAcgPCKQgIBFgKA/QggAZgiAeQhFA6gOAZQhNCTgYA3QgGAQg0BMQg0BOgLAXQgGAOgrAAIgNAAg");
	this.shape_513.setTransform(96.8,-39.2);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#93745F").s().p("ABOFXQgMgFgcgrQgggygQgOQgcgWgYghQgagjgPgnQgMgigeAEIghALQgFABgQgcQgTgigKgmQggh0A+hPQA+hOA2gSQAbgIAPAGIAHgEQALgCATAEIAiAJQAQADAbACIAogZQAvgZAfACQAfACgjAvIgpAuIAcgSQAigSAbAGQALAEgSANQgdAXgKAPIgQAXIAXAdQAYAmgEAmIgRgdIASAoQARAtgDAaQgCAYgIANIgIAIQAAghgOgPQgIAbgHAFQgFAEgCgGIgBgIIgHAdQgEAlAOAlQAPApAIAyQAHAqgCAWQgCATgEAHQgEAGgVASQgWATgdAJQgRAGgOAAQgJAAgIgDg");
	this.shape_514.setTransform(142.7,-51.9);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#493939").s().p("AlyHrQg6gBgpgJIAjgXIgtgEQBdgZAwgaIAcgUQhdAXhVgCQgrgBgYgFQAkgVAZgXQAzgsgygGQgzgGgjAaQgLAIgIAIIAigvQAagkgOgLIgTgDIhEA6QAOgkAggjQA+hIBVABQBZABA6gQQAngLBjgmQBOgcBgiXICGjsQAzhXB/gzQB8gzBPAeQBBAYAdAoQAPAUABAPQAOCMhmggQgggLgogaIghgYQguALgfAtQgmA2hGCnQhGCliHCZQh7CMhpAzQhOAmhuAAIgJAAg");
	this.shape_515.setTransform(-113,81.6);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#93745F").s().p("AA+DlIghgeQgZgXgJgbQgHgWhGhzQhGhygIgbQgLgkAfgnQAdglAbAEQA9AGAOBAQAIAkAXBSQAWBIAPAqQAKAaAnAhQApAhAMAZQAQAig0AQQgXAHgQAAQgRAAgHgKg");
	this.shape_516.setTransform(-35.6,130.2);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#93745F").s().p("AjDFBQgbgNgRgUQgRgWACgRQAHgqADgHQAGgPAdgfQAyg3AQgTQAkguAKgfQAIgagDgzQgFhlAAgqQgBhdBSgSQBCgPBdAlQCfA+hDB8QgWAogvAxQgZAZghAeQgOAQgvBJQgoA/gYAQQgdATgOAXQgLAQgeA3QgQAdgfAAQgUAAgbgNg");
	this.shape_517.setTransform(-23.5,91.5);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#93745F").s().p("AhRDEQgZgOgIgZQgJgeAagbQAkglAGgIQAQgWAPgpQAYhFAFgXQALgwgMgaQgGgOAKgLQAKgKATgCQAvgGARApQARAngBANIgTAyQgIAWgtBpQgoBdgHAZQgLAjgOAFQgDABgEAAQgQAAgfgQg");
	this.shape_518.setTransform(121.6,20);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#93745F").s().p("AkUCnQg2gcgXg/QgrhzBOg4QAsggA3gDQAJgBBpgaQBrgaAeAGQAUADBZAyQBYAxAsAHQA6AIALAGQAKAGAOAeQANAbgjAbQghAZgpgBQggAAiAAXIibAcQglgCgRABQgcACgqAoQgdAbghAAQgWAAgXgMg");
	this.shape_519.setTransform(95.1,5.6);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#493939").s().p("AAaBNQgZgEgOgLQgQgNgIgWQgIgUgHgDQgMgCgNgEIgygJQgegFADgOQAGgiAqgKQApgJA1ASQAzATAxAZQAwAYAQASQAQAQg7AXQguASgbAAIgKgBg");
	this.shape_520.setTransform(-16.5,153.6);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#493939").s().p("AgJBkQgsgVgMhJQgGgggIgFQgPgEgQgGQgRgIAMgJQAYgUAHgNQAQgfAoAhQAWASAlArIA/A8QAkAogMANQgOAPguAFIgbACQgZAAgPgHg");
	this.shape_521.setTransform(-65.5,149.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#493939").s().p("AgYBqQgOgHgNgYQgDgGgUgXQgNgPgCgRQgDgRAQgPQAIgHAegSQAWgOAJgJQAIgIAOgXQAMgTAXALQAMAGATANQAMAFgDANQgDAQgWAfQgRAYgQAkQgSAqgHAMQgJARgLAAQgFAAgGgEg");
	this.shape_522.setTransform(112.3,40.5);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#493939").s().p("Ag4BCQgjABgQgDQgdgFAXgdQAGgIATgqQANgeARAAQAQAAASgEIAggIIATgDIAkAAQAmAAASAuQATAugtARQgIgDgNgBQgagEgYAGQgQAEgdANQgRAHgMAAIgEAAg");
	this.shape_523.setTransform(79.7,47.1);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#5B4431").ss(2.1).p("ABsAyQgggYgrgXQhWgwg2gE");
	this.shape_524.setTransform(67.2,-59.4);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#222638").s().p("AAAAEIgCgBIAAgCIgCgBIAAgBIAAgBIgCAAIgBgCIABgBQAHgBAGAJIABABQACADgEAAIgGgDgAAHADIAAAAIgCgBIACABg");
	this.shape_525.setTransform(57,-111.3);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#443023").s().p("AgwAeQACgOATg2IAkAIQAZAEAUAGQgdAjgZAIQgjAMgSAEQAEgFABgEg");
	this.shape_526.setTransform(44.4,-115.4);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("#AFAFAF").ss(1.5).p("AA9gDQAGgSg3gyQgRgQgcAhQgbAggBAkQAAAVAOANQAKAKAWAIQAGACAWAIQAUAFACgL");
	this.shape_527.setTransform(27.5,46.3);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#2D1F15").s().p("ABnFTQghgGgQAAQgcAAhKgeQhOgfADgRQAIgvAGhZQAKh+gLg2QgOhEADgiQABgXAShMQARhCAggJQAcgHAoAjQAbAWgIBlQgFBKgRBIQgNA9gGBAQgHBSANAoQAJAcA5AXQA2AVAFAjQAEAZgYAAIgBAAg");
	this.shape_528.setTransform(29.6,20.9);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#DDB294").s().p("AgNAzQgVgLgNABQgSABgHgNQgGgMAFgQIALgHQANgIAMgFQAHgDAHgOQAHgNASgGQAVgHAQAJQAKAGAVAQQAQAKgbAnQgbAmgRADIgDAAQgJAAgQgIg");
	this.shape_529.setTransform(46.3,-76.3);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#DDB294").s().p("AAABDQgQgFgKgXQgPgggIgJQgVgYgEgIQgFgNAMgLQAMgMADABIATALQAKAFANgCQAKgCALAJQAmAcAYArQANAXggAPQgTAJgRAAQgKAAgIgDg");
	this.shape_530.setTransform(47.1,-62);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#DDB294").s().p("ACIBWQgDgEgXgKQgTgJgUgGIhhgJQhZgIgegaQgkgdABgfQAAgcAagHQAbgHANABQAFAAAdAFQAVAEA0AdIBKAsQAOAHAoAPQAhALASAQQAVASgaAPQgRALgIAAQgEAAgCgCg");
	this.shape_531.setTransform(28.5,-70.9);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#9B4242").s().p("AhYDRQgNgQANiLQAPiXACggQACgrAsgcQAjgXAaACIAKADQANAHAUAYQAWAZgIApQgHAhgWAaQglAtgOCRQgGBAgnAWQgQAIgNAAQgQAAgLgNg");
	this.shape_532.setTransform(23.1,-84.1);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#9B4242").s().p("AiHELQgig6gbg3Qgbg5gDgTQgCgZCljjQAfgrAWgVQAngkAjAEQAiAEAQAGIAHAEIgRgRIAWgJQAcgKAagIQA0CYgFARQgBADgSAVQgPASgBAWQgCAcgnBaQgoBcgWAZQgYAbglAkQgnAmgEgBQgWASgYAJQgNAGgMAAQgeAAgTgig");
	this.shape_533.setTransform(18.1,-81.2);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#827B77").s().p("ABgA6QgvgggggLIgYgHQgUgGgYgEIgmgHQgegGgWgLQglgSgFgPQgGgPAggCQAtgDAoAMIANgcQAPgeANgFQANgFAwATQAjANAiARQAPAIASAGQAKAGgGAQQgKAZgKAcIAYAXQAZAcAIAYQANAlgBARQgqgogvgig");
	this.shape_534.setTransform(50.5,-118.3);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#DDB294").s().p("AiVAtIAUgOQAYgQAQgNQAQgLAHgJQASgEAkgMQAXgHAdglQgUgGgXgEIgmgIIAGgRIAxgcQA3gVAaAhQAUAZAbAeQAOAVgMAaIgEAGIgFARQgEATADAQQADALgGAMQgGANgFgFIgJgIQACAYgGACIgRALIgBALIgHAIQgBAEgEAEQgGAHgJgDQgegIgVgWQgFgGgKAIIgbAWIgpAig");
	this.shape_535.setTransform(45.7,-109.7);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#DDB294").s().p("AhTgeIAZAGQAcAHATgCQANgBAogNQAigIAHASQAFAPgNAMQgLALgTAHIggALIgPAEg");
	this.shape_536.setTransform(34.2,-73.8);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#2D1F15").s().p("AB3GfQgdgLiYjcQiWjXgag9QgUgwAehbIAihQIA0g1QBCg1BGAAQBFgBARB1QAIA7gGA6IgNAjQgOApgGAgQgGAfBIB+QAnBGBNCEQAnBIg5ApQgWAPgdAFQgMACgKAAQgMAAgJgDg");
	this.shape_537.setTransform(8.9,-37.5);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#5B4431").ss(2.1).p("AAcEHQApAaADhBQACg4gZhsQgXhjgihhQgkhjgbgi");
	this.shape_538.setTransform(25.9,13.1);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("#5B4431").ss(1.5).p("AgsFLIAKACQAZAEAWgFQAZgGAPgSIAGgKQAMgXgEgbIiFmoQgGgSANg9QALgvALgg");
	this.shape_539.setTransform(137.4,-59.6);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#5B4431").ss(1.5).p("AEpCNIBHAkQBJAnANANQAIAIgjgCQglgDg4gMQiWgghvg9Qh9hFiIhnQiIhpgrg+QgjgzgeBAIgXBL");
	this.shape_540.setTransform(89.4,-49.9);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#493939").s().p("AjPCqQAGgbAHgRIgNAGQgnAOhLAUQhIATgVACQANgKBCgvQBFgwAQgJIAdgQIAAgBQBJgrASghQANgVAlgRIA9gVQAPgFAxggQAwgfAagIQApgNA/gIQgMgeBlAWQBnAXAAANQg9AihEAnQiIBOgcAcQACgQAGgSQAOglAYgRQguAfgzAlQhnBOgXAmQACgLAHgQQAMghATgbQgnAWgtAeQhZA9gYApIAFgYg");
	this.shape_541.setTransform(98.9,-76.7);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#5B4431").ss(2.6).p("ACLjDIAMACQAIADgPAKQgKAHheANQhbANgSAPQgWASgaA7QgWAxgMAvQgIAhAbBAQANAgAPAa");
	this.shape_542.setTransform(138.6,-61.3);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#493939").s().p("AC1CLQgGAcgHAGQgEAEgDgGIgBgIQgBgXgGgdQgMg5gZgcIgTgWQgbgdgYgMQgXgLgjgBIgRgFQgNgEgFAAIgLgDIgmACQgNAAgqgCQgngDgXACQAcggAlgWQAegSAUgEIAAAAQAQgCAIADIAHgEQALgDATADIAQADIAZAFQANABAYAAIAmgbQAtgbAfAAQAQAAAAANQg/AcgVAXQgQASgCALQgBAFACACIARAAQAUAAANgGIgDADIAEgDQAIgFADgEQAmgcAiAGIAFACQgnAMgLAMQgKAKgMAYIgKAWIARgDIAAACQAAAAAAABQAAAAAAAAQAAAAABgBQAAAAABAAQAHAFAJAMIAJALQAZAlgCAkIgSgbQAKAPALAZQASArgBAZQgBAagHANIgHAIQgCghgQgPg");
	this.shape_543.setTransform(136.4,-78.3);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#222638").ss(0.5).p("ABCB+QgSgvgag3Qgyhuglgo");
	this.shape_544.setTransform(142.9,-40.9);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#2D2724").s().p("AAPAKIgMgFQgFgCgHAAQgMgBACgGQAEgHAQADQAPAEAEAHQABADgBACQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgBAAg");
	this.shape_545.setTransform(143.5,-65.2);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#443326").s().p("AiFDXIgMgFQhDgbgggvQgSgbgIgSQgSgsAdgFQAMgCAIAIIAbAeQASAUAYAHQAGACAnAEQAWACBUg2QBNgyAkgiQAagZgQg5QgWg6AAgPQAAgRATgOQASgNAZgDQAIgCAKABQAWACAlA6QAUAgAgA7QARAbguBRIgxBLQglAfgxAeQhhA9g3ABIgDAAQgsAAgrgOg");
	this.shape_546.setTransform(12,-30.1);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#B7A598").s().p("AgcCMQgZgCgRgeQgGgKgPgpIgRgyQgLgfgKgOQgXgiAtgrQAUgUAvgEQAJAWARAXQAOAWAZATQAaAVAhAMIAAABIAMAEIApAjIgnADIALAMQAMAPACAPQAEAShAAfQg4AagdAAIgGAAg");
	this.shape_547.setTransform(-8.4,-8.1);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#6D5341").s().p("AlyDmQgUgfgYgyQgXgvgFgGQgQgWACgSIAEgOIByglQB2gkAUAAQA5gBB5g4QA7gcAygcIA6hHQA2hNgQgcIB+BaQCBBlASA1QAMAhh0BOQh5BTjKBgQi9BchEANQgJACgKAAQg/AAg8hbg");
	this.shape_548.setTransform(18.6,-8.9);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("#5B4431").ss(2.6).p("ABYg4IAMAJQAJAKgOAGQg6AfgtAWQhYArgEgPQgEgPACgC");
	this.shape_549.setTransform(146,-40.7);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#93745F").s().p("AiKDVIAHhCQAEgoAGgQQAFgNAUgfQAUgeArhjQArhiAKgmQAIgbAUARQAhAcAOACQBCAHgiBBQgSAjguA4QgPAVgiBOIg0B6QgUArgLAFIgpACIgEAAQgXAAgBgXg");
	this.shape_550.setTransform(-79,118.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#93745F").s().p("AkSHQQgrgCgIgvQgFggAMgxQAEghADgKQAEgMAkgWQAwgdAmgtQArgyAJgvQAFgbgiirQghiqAMg5QAdiNDLASQCVAOCBBDQgaAZgdAoQg5BRgJBSQgPCJgRA8QgdBmg4AVQgzATheBaIiCB7QgWASgUAiQgHAOgeAAIgJgBg");
	this.shape_551.setTransform(-46.3,67.5);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#93745F").s().p("Ah8BpQgQgIgCgSQgCgXAFgeQAHggANgFIAqgGQAhgEAWgKQAkgRBcgzIAWgJQAVgEgKAeQgJAeAFAcQAEAOAFAIQhFAfgoAIQgdAFgYALQgZALgMAMIgYAVQgMAKgIACIgGAAQgJAAgKgEg");
	this.shape_552.setTransform(102.1,24.6);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#93745F").s().p("AECEnIgfgfIgNgOQhCgmhMgpQiZhQg2gLQhMgPg7g5QhHhDgGhfQgFhWAxguQAYgWAagGQBWgFBfCVQAMATAnBGQAPAdAbAUICABlQBkBOAZAMQAeAPARAaQARAZAJAuQAIApgnACIgHABQgfAAgUgUg");
	this.shape_553.setTransform(83.2,-7.2);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#93745F").s().p("Ar3I5Qg2g6gUhNQgVhVAXhjQAXhkAsg4QAlgvBehAQBKgyBvg0QA4gbAogQQBzgoDViYQBqhMBThEIAVgLQAfgRAzgiQBDgrDNgIQDVgIApAzQAqA0AHCSQAGCOgfBOQgwB3hjBYQhIBCieBeQiUBYiGA2QiVA9hLgEQg+gEg8ApIg1AlQgiAXggAOQjOBWh3AAQhWAAgqgsg");
	this.shape_554.setTransform(18.6,11);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#93745F").s().p("AhCG2Qg0gJhFgaQinhAgshDQgvhIgfhjQgghlAXgMQAOgIAlgbQAxgjAyggIChhqQAngbASgKQAUgKAigLQBpglAdgiQAQgTAngJIBAgKQAQgDA2gWQA2gVAbgEQAzgGBDAEIANAgQAPAmAIAcQAIAdgiCHQgQBDgTA+IhJAtQhMAxgQAXQheCEghA4QgIAPg9BEQg+BGgNAWQgGAKgXAAQgPAAgUgEg");
	this.shape_555.setTransform(92.2,-42.7);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#93745F").s().p("ABoFaQgNgEgegqQgjgwgSgNQgcgUgaggQgbgigRgmQgOghgdAFIghANQgFACgRgcQgVghgNgmQgmhxA6hSQA5hRA2gVQAagLAPAGIAHgEQALgDATAEIAjAHQAQACAbAAIAmgbQAtgcAfABQAgAAggAxIgnAwIAbgUQAhgTAcAEQALADgRAPQgcAYgKAQIgPAXIAZAcQAaAlgCAmIgSgcIAUAnQATAsgBAaQgBAZgHANIgHAIQgCghgQgOQgGAbgHAGQgEAEgDgHIgBgHIgFAdQgCAlAQAlQARAoALAxQAIAqAAAWQgBATgDAHQgEAHgUATQgVAUgcALQgTAHgPAAQgIAAgGgCg");
	this.shape_556.setTransform(134,-62.1);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#493939").s().p("AmmIOIAigaIgugBQBbghAtgdIAagYQhaAghVAGQgrADgYgDQAhgYAXgZQAvgxgzgBQgygBgiAdQgKAJgGAJIAdgzQAWgmgOgJIgUgCIg+BAQALglAcgnQA3hMBVgHQBYgHA5gVICFg+QBLgjBRifIBxj3QArhbB5g/QB3g+BSAWQBDASAgAlQAQASADAPQAbCLhpgXQghgHgqgXIgjgVQgsAPgcAxQggA5g3CsQg2Crh5ClQhuCXhkA8QhNAvhzAJQgbACgYAAQgbAAgWgDg");
	this.shape_557.setTransform(-108.9,71.3);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#93745F").s().p("AgVEBQgzgOgBgWIgLgsQgJghAHgcQAGgWAEiGQAEiGAIgbQAKgkAvgQQAsgPAVARQAvAngXA+QgNAigYBSQgVBJgLArQgGAaAPAxQAQAzgDAbQgEAagcAAQgKAAgOgEg");
	this.shape_558.setTransform(-52.3,121.5);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#93745F").s().p("Aj4FSQgXgSgMgYQgMgYAGgRQAPgnAFgGQAJgNAjgYQA/gsASgPQAugkAQgcQAOgZAJgwQAQhiAKgsQAKgvAxgxQAtgsA8gdQA8geArACQAvABAFAoQAYCqhOCHQgxBVhFAvQgSAMg+A9Qg0A0gcALQggAMgTATQgNANgqAwQgSATgWAAQgZAAgfgZg");
	this.shape_559.setTransform(-33.2,73.4);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#93745F").s().p("AhRDEQgZgNgIgaQgJgeAagbQAkglAGgIQAQgWAPgpQAYhBAFgaQALgxgMgaQgGgOAKgLQAKgKATgCQAwgFAQAoQARAogBAMQAAAEgSAvIg2B+QgoBdgHAZQgLAjgNAFQgEABgEAAQgRAAgegQg");
	this.shape_560.setTransform(109.2,14.3);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#93745F").s().p("AklCSQgzghgPhCQgeh3BUguQAtgaA6ACQAJAABrgOQBtgNAdAJQATAGBUAqQBSApArAMQAyANARAbQACADARAzQAKAegmAWQgkAWgogGQgggEiCAIIidALQglgHgRAAQgcgBguAiQgcAUgcAAQgaAAgagSg");
	this.shape_561.setTransform(85.1,-2.1);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#493939").s().p("AAEBXQgWgLgLgPQgNgQgBgYQgBgUgHgEQgLgFgMgJIgtgWQgcgNAHgNQAPgeArABQAqACAtAgQAuAgAnAkQAoAmALAVQAKATg+AHQgVACgRAAQgfAAgQgIg");
	this.shape_562.setTransform(-46.4,149.4);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#493939").s().p("AgFByQgngWgNgWQgYgqAihCQAPgegEgJQgKgMgJgPQgKgQAPgBQAggBAMgGQAfgQANAxQAHAcAGA6IAPBVQAGA2gSADIgFAAQgUAAgigTg");
	this.shape_563.setTransform(-84.2,151.2);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#493939").s().p("AgZBpQgNgJgMgYQgDgHgRgXQgNgRgBgQQgCgSARgNQAIgHAggRQAWgLAJgJQAJgIARgWQAMgQACAGQAFAOAFACQATAIAJAPQAOAXgWAcQgTAXgRAiQgVApgIALQgKAQgLAAQgFAAgGgEg");
	this.shape_564.setTransform(99.9,35.6);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#493939").s().p("Ag5BCQgjABgQgDQgcgFAXgdQAFgHAUgrQANgeAQAAQARAAASgEIAggIIATgDIAjAAQAnAAASAuQASAugtARQgIgDgNgCQgZgDgYAGQgPADgeAOQgQAHgMAAIgGAAg");
	this.shape_565.setTransform(87.8,29.9);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#5B4431").ss(2.1).p("AB3AtQglgVgxgVQhhgrg2gE");
	this.shape_566.setTransform(60.4,-68.9);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("#AFAFAF").ss(1.5).p("AA+AGQAKgQgtg7QgPgUggAaQgiAagHAkQgFAUALAQQAIAMAVAMQAFADAUAMQASAJAEgK");
	this.shape_567.setTransform(18,52.9);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#2D1F15").s().p("ABMFbQgfgNgQgDQgbgFhCgtQhHguAGgQQATgyAXhQQAjh6AAg2QAAhGAJghQAGgWAihHQAcg+AhgCQAdgBAhAqQAWAcgbBhQgUBIgfBCQgbA4gSA+QgXBPAEAqQAEAeAzAiQAxAggCAiQgBAWgRAAIgIgBg");
	this.shape_568.setTransform(20.9,28.7);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("#5B4431").ss(2.1).p("AglDgQAjAiATgyQAQgsACheQABhXgLhZQgMhbgTgo");
	this.shape_569.setTransform(24.4,23.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#222638").s().p("AADAFIgCgCIgBACQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgBgBIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgBIgCAAIgCgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAHgBAGAKIABAAIgBACQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAABIgCgCg");
	this.shape_570.setTransform(61.5,-104.5);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#443023").s().p("Ag2AmQAEgEACgEQACgMAUg3IAlAJQAYAFAUAHQgeAigZAHIgjAJIgTAEg");
	this.shape_571.setTransform(49,-109.3);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#DDB294").s().p("AgPAyQgVgMgNAAQgRABgHgOQgFgLAFgQIALgGQANgIAMgFQAHgDAIgOQAHgMATgGQAVgFAQAKQAKAGAUAQQAQALgdAlQgcAlgRADIgDAAQgKAAgPgJg");
	this.shape_572.setTransform(49.5,-69.8);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#DDB294").s().p("AgDBDQgQgGgJgXQgNgggIgJQgUgagDgIQgFgMAMgMQAMgLADACQAEABAPAKQAKAFANgBQAJgCAMAJQAkAeAWArQAMAYggAOQgSAIgQAAQgLAAgJgEg");
	this.shape_573.setTransform(49.8,-55.6);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#DDB294").s().p("ACFBaQgDgEgWgLIgngQIhhgMQhYgNgegaQgigeACggQABgcAagGQAcgFAMABQAFAAAdAGQAVAFAzAfIBIAvQAOAIAnAPQAhANARAQQAUATgaAPQgRAKgIAAQgEAAgCgDg");
	this.shape_574.setTransform(31.5,-65.1);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#9B4242").s().p("AhfDOQgMgQARiLQAWiWACggQAEgrAtgaQAkgWAaADIAJADQANAIAUAYQAVAbgKAoQgJAhgXAaQgmArgTCQQgIBAgoAUQgQAHgMAAQgRAAgLgOg");
	this.shape_575.setTransform(26.5,-78.6);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#9B4242").s().p("AiTEEQggg7gYg4QgZg6gCgUQgCgbCujaQAggqAYgUQAogjAjAGQAiAFAQAIIAHADIgSgSIAXgHQAcgJAbgHQAuCagGAQQgBADgSAUQgQASgCAWQgDAcgrBYQgrBbgXAXQgZAagmAjQgpAlgEgBQgXARgYAIQgMAEgKAAQggAAgTgjg");
	this.shape_576.setTransform(21.7,-75.7);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#827B77").s().p("ABeA7QgqghgjgNIgXgJQgUgFgYgGIglgJQgdgGgXgNQgkgTgFgPQgFgPAhgBQAsgBAoANIAOgcQAQgdANgEQAOgFAvAVQAkAPAfASQAPAIASAHQAJAGgGAQIgWA1IAXAXQAYAdAHAYQAMAmgCARQgogqgvgjg");
	this.shape_577.setTransform(55.2,-111.4);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#DDB294").s().p("AiWAoIAUgMQAYgQARgMQAPgKAIgKIABAAIATgEIAjgJQAYgHAegjQgUgHgXgFIglgJIAGgRIAygaQA4gUAZAjQATAaAZAeQAOAWgOAZIgDAGIgGAQQgFAUADAQQACALgGAMQgGAMgFgFIgJgIQABAYgGACIgLAGIgGAEIgBAMIgIAHQgCAEgDAEQgHAGgJgDQgegJgUgXQgEgFgKAIIgcAUIgqAgg");
	this.shape_578.setTransform(50.2,-103.4);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#DDB294").s().p("AhTgiIAYAHQAcAIATgCQAOAAAogMQAigHAGATQAFAPgOAMQgLALgTAGIghAJIgPADg");
	this.shape_579.setTransform(37.4,-67.8);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#2D1F15").s().p("ABsGhQgdgMiQjiQiOjcgXg/QgSgwAhhZIAlhQIA2gzQBEgyBFACQBGADAMB1QAGA7gIA6IgOAjQgQAogHAgQgHAeBDCBQAkBHBICHQAkBKg6AmQgXAOgcAFIgTABQgOAAgKgEg");
	this.shape_580.setTransform(10.2,-32.3);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#5B4431").ss(1.5).p("AgfFLIAKACQAYADAXgGQAZgIAOgRIAGgLQALgXgFgcIgIgXIgCgEIiNmFQgHgTALg9QAIguAKgi");
	this.shape_581.setTransform(133.5,-51.7);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#5B4431").ss(2.1).p("ABcA6QgYgbgjgcQhFg3g3gG");
	this.shape_582.setTransform(60.4,-61.1);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#5B4431").ss(1.5).p("AECCYIBIAhQBLAjAOANQAIAIgjgBQgkgBg5gJQiYgbhxg3Qhug2h5iBQg/hEhVhyQgmgygWA+QgLAfgDAp");
	this.shape_583.setTransform(90.3,-42.4);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#493939").s().p("AlKCQQBEgzAPgJIAdgSQBGgvARgiQALgWAlgRIA8gYQAPgGAugiQAwghAagJQAkgOBCgLQgNgdBnARQBnASABANQg8AlhDAqQiDBUgbAdQAAgQAHgTQALglAWgSQgsAhgxAmQhjBTgVAnQACgLAFgQQALgiASgcQgnAYgrAgQhWBBgWAqQAEgqAKgbIgNAGQglAQhLAXQhFAWgXAEQAMgMBBgxg");
	this.shape_584.setTransform(94.3,-67.2);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("#5B4431").ss(2.6).p("ACDjDIALABQAJADgPALQgKAHhdARQhbARgRAPQgUASgVA9QgQAtgLA0QgHAhAdA7QAOAdAQAX");
	this.shape_585.setTransform(134.5,-54.1);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#493939").s().p("ADJCoQgFgUgLgJQgFAcgHAHQgEAEgCgHIgCgHQgCgXgHgdQgOg5gbgbIgUgVQgbgcgZgKQgYgLgjABIgQgEQgOgEgFAAIgMgCIgmAEQgMABgqgBQgngBgXADQAaghAlgYQAdgTATgFQAQgDAJADIAGgFQALgEAUADIAQADIAaADQANABAWgBIAmgdQAsgdAfgBQAPAAAAAMQg8AegVAZQgPASgCALQgBAGACABIASAAQAUgBAMgGIgDADIAEgEQAIgEADgFQAmgdAhAEIAEACQgkAMgMAOQgKAKgLAZIgIAWIARgDIgBACQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAIARAQIAJALQAbAiAAAmIgUgaIAXAoQAUApAAAZQAAAagHAOQgDAGgEACQAAgIgDgKg");
	this.shape_586.setTransform(131.7,-71.1);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("#222638").ss(0.5).p("ABHB8QgUgvgcg2Qg3hrgmgm");
	this.shape_587.setTransform(139.7,-33.3);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#2D2724").s().p("AAQAJIgMgEIgMgBQgOAAADgGQACgHARABQAQAEAEAHQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAABQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgBAAg");
	this.shape_588.setTransform(139.2,-57.7);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#443326").s().p("AhEDZQgsgEgrgUIgMgGIAAAAQgfgRgYgXQgXgWgMgXQgPgagGgWQgNgtAdgCQAMAAAIAIIAXAhQAQAWAXAJQAIADAkAIQAWAEBZgsQBSgpAogeQAdgVgKg7QgQg8ACgPQACgRAVgMQATgKAYgBQAKgBAIADQAWAEAeA9QARAiAaA+QANAdg3BLIg5BGQgoAag0AZQhcAtg3AAIgLAAg");
	this.shape_589.setTransform(12.3,-30.6);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#B7A598").s().p("AgtCLQgZgFgNgfQgEgJgLgsIgLgzQgHgfgJgRQgUgkAxgmQAXgSAvABQAGAWAPAaQALAXAXAWQAYAXAfARIAAAAIAMAGIAkAnIgmgBIAJANQAKAPABAQQABAThCAXQgzASgdAAIgOgCg");
	this.shape_590.setTransform(-10.2,-11.9);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#6D5341").s().p("AmJC/QgQghgTg0QgSgxgEgHQgNgYADgRIAGgMIB1gZQB6gYATACQA5AGB+grQA/gVA0gWIBBhBQA/hGgNgdIBzBnQB2ByAMA2QAHAih7BCQiCBEjTBKQjGBGhFAGIgJAAQhFAAg1hog");
	this.shape_591.setTransform(16.6,-9.7);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#5B4431").ss(2.6).p("ABWg8IAMAJQAJAKgNAHQg5AigrAXQhXAugEgOQgFgPACgC");
	this.shape_592.setTransform(142.7,-33.3);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#93745F").s().p("Ah8DbIAChDQABgoAFgQQADgNATghQARgfAlhlQAkhlAIgnQAGgcAVAQQAiAaAPAAQBBAEgdBDQgQAjgqA7QgMAXgdBQIgsB9QgRAsgLAGIgoAFIgHABQgUAAgCgWg");
	this.shape_593.setTransform(-82.5,110.9);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#93745F").s().p("AksGUQgHggAKgxQABgiACgJQAEgNAjgZQAuggAjguQAog1AGgvQADgcgvhlQgvhkAJg5QAWiUDOg5QBQgWBUAAQBPAAAqATQgZAagaAqQg0BVgEBSQgHCJgNA9QgXBog2AYQgyAXhZBfIh6CCQgVATgSAkQgHAPgmABIAAAAQgrAAgLgug");
	this.shape_594.setTransform(-52.1,56.7);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#93745F").s().p("AgpCLQgPgRgMgcQgOgfAFgKQACgDATgWQARgUAIgSQAHgUAQgzIANgwIAIgTQALgMAKAdQALAeASAUQAJALAHAEQgWA7gTAZQgPAUgIAUQgJAVgBAQIgCAdQgBAOgDAFQgGAIgKABIgCAAQgMAAgKgNg");
	this.shape_595.setTransform(114.4,23.5);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#93745F").s().p("AFCDWIg4gfQhKgQhVgPQiqggg3AGQhNAJhKglQhXgqgihZQgfhRAhg5QAQgdAXgNQBQgfCIBxQARAOA6A4QAYAWAgAMICYA5QB2AtAcAFQAiAEAYAUQAXATAWApQAUAkgkAPQgQAGgPAAQgQAAgOgHg");
	this.shape_596.setTransform(80.7,-2.3);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#93745F").s().p("AtdHqQgwhAgLhOQgMhXAihgQAhhgAyg0QArgqBkg1QBPgqB0goQA6gUAqgMQB3gbDkh/QByhABag6IAWgIQAhgOA3gcQAggRBZgIQBXgIBjADQDzAHAjA2QAnA9ANCiQAMCogkBEQg5BpiXBUQg2AehWAmIiSBBQiNBAirAkQikAihSgOQg+gKhAAhIg4AgQgkATgiAKQixA0hwAAQh4AAgtg8g");
	this.shape_597.setTransform(18.8,9.6);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#93745F").s().p("AhAHAQg0gGhHgYQipg5gvhBQgtg+gNiRQgMiKAagPQAGgDASgSQANgNAtgTQA8gZAhgRQAkgTAkgbQAmgcASgKQAUgMAggMQBngnAcgmQAPgTAngLIBAgNQAQgDA1gYQA0gYAcgFQAygIBDACIAPAfQAQAlAJAcQAJAdgbCIQgOBEgQA+QgiAVglAbQhKA0gPAXQhZCIgeA5QgIAQg5BHQg7BIgMAXQgGALgcAAQgNAAgRgDg");
	this.shape_598.setTransform(90.6,-33.8);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#93745F").s().p("AB4FbQgNgDghgpQgkgugTgMQgdgUgbgeQgdghgSglQgPgggdAHQgcANgFABQgEACgTgbQgWgggOgmQgshvA3hVQA2hTA0gXQAagLAQAFIAGgFQALgEAUADIAiAGQAQABAbgBIAmgdQAsgdAfgBQAfgBgeAyIgkAyIAagVQAggVAcAEQALACgRAQQgaAYgJARIgOAYIAaAbQAbAjAAAmIgUgbIAWAmQAVArAAAaQAAAZgHAOQgDAGgEACQAAgIgDgKQgFgTgLgJQgFAbgHAHQgEAEgCgHIgCgHIgEAeQAAAlARAkQATAnANAwQAKApABAXQAAASgDAHQgEAHgTAUQgUAVgcAMQgUAJgQAAQgGAAgFgCg");
	this.shape_599.setTransform(129.7,-54.8);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#493939").s().p("AmMIjIAggcIgtACQBZglArggIAagYQhZAkhVAKQgqAFgZgDQAggZAWgaQAtgzgzABQgyABggAfQgKAJgGAKIAbg0QAUgngPgJIgTgBIg7BDQAJglAagoQAzhPBUgLQBZgLA3gYICChEQBJgnBKijIBkj8QAnhdB2hFQB0hEBTATQBDAPAjAjQARASADAPQAhCJhpgSQghgGgrgUIglgTQgrAQgZAyQgeA7guCvQguCshxCrQhmCchhBCQhLAyhzAOQgoAFghAAIgbgBg");
	this.shape_600.setTransform(-107.1,56.6);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#93745F").s().p("Ag0D8QgwgUABgWIgHgtQgEgiAKgbQAHgVATiFQATiEALgbQAOgjAwgKQAugKATATQAqAtgdA6QgRAgghBPQgdBFgPArQgJAaAJAyQALA0gHAaQgGAYgWAAQgMAAgSgHg");
	this.shape_601.setTransform(-65.5,117.5);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#93745F").s().p("AkbEzQgVgVgJgYQgKgaAIgQQAUglAFgGQALgMAlgUQBAgjAXgOQAxgfATgaQARgXAOgwQAchiANgnQAPguA3grQAygnA+gXQA/gWAqAGQAvAHABAoQAFCrhdB9Qg6BPhKAoQgTAKhEA2Qg5AugdAIQghAJgVAQQgPAMgvAqQgRAPgTAAQgcAAgegfg");
	this.shape_602.setTransform(-43.9,66.9);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#93745F").s().p("AhEDKQgZgMgKgZQgLgdAYgcQAigpAFgIQAPgWALgqQAUhGAEgYQAGgxgNgZQgHgOAKgLQAHgLAUgDQAvgJAUAnQATAmAAAMQAAAEgPAxQgGAUgnBtQghBggGAZQgIAkgNAGQgEACgGAAQgQAAgegNg");
	this.shape_603.setTransform(123.1,18.3);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#93745F").s().p("AkKCYQg2gOgZgtQguhSBLg1QAqgfA2gKQAJgCBmgjQBpgiAdAAQAUAABXAMQBWAMArgBQAzgCAUAQQADACAYAjQAOAUghAZQggAYgpAFQgfAEh+AjIiXAsQgkADgRAEQgcAFgoAkQghAegpAAQgPAAgPgDg");
	this.shape_604.setTransform(98.8,8.5);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#493939").s().p("AAuCGQg7gLgUgSQgTgQgHgSQgHgTAFgYQAEgUgEgHQgKgHgIgLQgOgSgHgnQgHgqAMgMQAUgWAbAiQAQAUAoA8QAjAqAcAvQAbAwAFAXQADAOgaAAQgNAAgVgEg");
	this.shape_605.setTransform(-64,146.3);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#493939").s().p("AhwBfQgLgSAHgtQAGgsAQgTQAggmBJAHQAhAEAHgHQAIgOAKgNQAMgPAGAOQAMAcALAKQAZAYgpAeQgXAPg0AbIhKAsQgeAQgOAAQgJAAgEgGg");
	this.shape_606.setTransform(-98.7,135);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#493939").s().p("AhUBHQgHgOADgbQAAgIgDgcQgDgUAHgPQAIgRAVgDQALgCAkACQAYABANgDQAMgCAYgLQATgJgBAHQgCAOADAEQAMARAAASQABAaggANQgdALggAVQgmAZgMAGQgKAFgIAAQgLAAgGgLg");
	this.shape_607.setTransform(112.1,39.8);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#493939").s().p("AhcBOQABgKgHgvQgFgfAOgJQAOgJAMgMIAYgZIAPgNIAdgTQAggUAoAdQApAegdAmQgIACgMAFQgYALgRARQgLAMgRAbQgNATgMAFQgdATgPAGQgHADgEAAQgPAAADgcg");
	this.shape_608.setTransform(106.5,36.3);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("#AFAFAF").ss(1.5).p("AA8ASQAOgOgehEQgJgWgmASQgnARgQAhQgJATAHARQAFAOARAQQAVAVAAAAQAQANAGgJ");
	this.shape_609.setTransform(17.5,53.3);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#2D1F15").s().p("AgOFSQgbgTgPgHQgZgMg3g6Qg5g+AKgOQAhgyAmhDQA/huANg1QARhEAQgdQAKgUAxg+QArg1AhAGQAcAGAXAxQAOAfgyBYQgkBDguA4QgnAvgfA5QgqBHgFAqQgDAeApAsQAnArgKAhQgGASgLAAQgFAAgHgEg");
	this.shape_610.setTransform(26.8,31.9);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("#5B4431").ss(2.1).p("AhHDTQAaApAfgsQAZgnAYhbQAWhUAKhZQAKhcgKgr");
	this.shape_611.setTransform(28.9,26);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#222638").s().p("AAGAGIgBAAIAAgBIgEgCIgBABIgBAAIAAgBIgBgCIgBAAIAAAAIAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIgBAAIgCgBIABgCQAGgBAIAJIAAABIgBACIgBAAIAAAAg");
	this.shape_612.setTransform(70.7,-104.1);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#443023").s().p("AgvAfQABgRARg0IAlAGQAYAEAVAFQgcAlgYAIIg1ARQAEgFABgDg");
	this.shape_613.setTransform(58.1,-107.7);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#DDB294").s().p("AgUA0QgJgEgKgTQgMgVgLgHQgPgIABgOQACgNANgLIANAAQAPAAANACQAIACANgIQANgHATAGQAVAHAIAQQAFAKAIAYQAJASgtARQgfAMgQAAQgHAAgFgCg");
	this.shape_614.setTransform(60.2,-49.3);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#DDB294").s().p("AAIBUQgfgFgQgUQgKgOAEgYQAGgigCgNQgEggACgIQADgOAQgDQAQgDACADIAJAUQAGAJAMAGQAJAEAFAOQAQAsgFAxQgCAWgZAAIgLgBg");
	this.shape_615.setTransform(53,-37.9);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#DDB294").s().p("ABnCdQgegBAAgJQgBgFgNgVIgYgjIhMg+QhEg3gLgnQgNgsASgaQAQgXAZAJQAaAJALAIIAZAXQAPAPAaA1IAmBOQAHAOAZAiQAVAdAGAXQAGAZgbAAIgCAAg");
	this.shape_616.setTransform(41.6,-55.2);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#9B4242").s().p("AhSDTQgNgPAIiMQAMiXAAghQABgqArgeQAjgYAaACIAJACQAOAHAVAXQAXAagIAoQgGAhgVAbQgjAtgKCSQgEBBgnAWQgQAKgOAAQgPAAgLgNg");
	this.shape_617.setTransform(37.6,-75.9);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#9B4242").s().p("Ah/EQQgkg5gcg2Qgdg4gDgTQgEgZCfjoQAegsAWgVQAlgmAkAEQAiADAQAGIAIAEIgTgRIAWgJIA2gUQA4CWgFARQgBADgRAWQgOATgBAVQgBAcglBcQglBdgUAZQgXAbglAmQgmAngEgBQgWATgXAKQgOAFgMAAQgdAAgUggg");
	this.shape_618.setTransform(32.7,-73);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#827B77").s().p("ABgA6QgtgegjgLIgYgHQgVgFgYgEIglgFQgfgGgWgKQgmgRgFgOQgGgQAggDQAsgEApALIAMgdQAOgeANgFQANgFAxARQAkANAhAQQAPAHASAGQAKAFgFAQQgJAZgJAdIAYAXQAaAbAJAXQAOAlAAARQgrgngxggg");
	this.shape_619.setTransform(64.2,-111.1);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#DDB294").s().p("AiTAyIAUgOQAXgRAPgOQASgOAFgHIA1gRQAXgIAcglQgVgGgXgEIglgGIAFgRIAwgeQA3gXAbAhQAVAZAbAcQAPAVgMAaIgDAGIgEASQgEATAEAQQACAKgFANQgGANgFgFIgJgIQADAYgGACIgRAMIAAALIgIAIQgBAEgDAEQgGAHgJgCQgfgIgVgVQgFgFgKAIQgPAOgLAJIgoAig");
	this.shape_620.setTransform(59.5,-102.2);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#DDB294").s().p("AAKA5IgggKIgPgFIgdhkIARATQAUAVAQAIQANAHAnALQAhANgFATQgEAPgSADQgHABgHAAQgKAAgLgCg");
	this.shape_621.setTransform(50.2,-55.9);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#2D1F15").s().p("ABXGiQgcgNiBjrQiAjlgTg/QgPgyAnhXIAphNIA5gvQBHguBFAHQBFAGAFB2QADA8gMA5IgQAiQgSAngJAfQgJAfA6CEQAgBKBACKQAfBMg9AjQgXANgdACIgMAAQgTAAgMgGg");
	this.shape_622.setTransform(22.2,-29.2);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("#5B4431").ss(1.5).p("AAAFJIAKABQAaAAAVgIQAZgKALgTQADgEADgIQAIgXgIgbIjCmPQgJgSAEg9QADgwAHgi");
	this.shape_623.setTransform(144.1,-35.1);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#5B4431").ss(2.1).p("ABtAYQgjgSgtgNQhYgbgxAY");
	this.shape_624.setTransform(74.7,-47.8);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("#5B4431").ss(1.5).p("AEpCHIBMAqQBPAtANANQAIAIgjgCQglgCg4gLQiWgdhxg7Qh0g9iJh1Qh5hpgyhFQgkgzgwApQgPANgOAVIgMAS");
	this.shape_625.setTransform(97.6,-25.7);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#493939").s().p("AlKCPQBDgyAQgKIAcgSIAAAAQBHguARgiQALgWAlgSIA8gYQAPgFAvgiQAvghAagJQAdgLAkgHQAXgFAPgCQgOgdBnASQBnASABANQg8AkhCAqQiFBUgbAdQABgQAHgTQALgkAWgSQgsAggwAmQhkBTgVAnQACgLAFgQQALgiASgcQgnAYgrAgQhXBAgWAqQAFgqAKgbIgNAHQglAQhLAXQhGAVgWAEQAMgLBBgyg");
	this.shape_626.setTransform(101.5,-48.3);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("#5B4431").ss(2.6).p("AB0jNIAMgBQAJADgOAMQgJAIhbAbQhYAbgQAQQgSAVgPA+QgLAugFA1QgEAiAjA4QASAbASAV");
	this.shape_627.setTransform(143.8,-38.1);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#493939").s().p("ADCCJQgCAcgGAIQgEAEgDgGIgCgHQgFgXgKgcQgVg3gdgYIgWgTQgegYgagIQgZgIgiAEQgDABgOgDQgPgCgEABIgMgCIglAIQgNACgqAEQgnADgWAGQAXgkAigcQAbgWATgHQAPgFAJACIAGgFQAKgFAUABIAQABQAQABAKAAQANgBAWgEIAjggQAoghAfgFQAPgCACAMQg5AkgSAbQgNAUgBALQAAAGACABIASgCQATgEAMgHIgDAEIAEgEQAHgFADgGQAhggAiAAIAFABQgkASgJANQgJAMgIAZIgGAXIAQgFIAAACQAAABAAAAQAAAAABAAQAAAAAAgBQAAAAABgBQAKAHAJAIIAKAKQAeAfAEAmIgXgZQAMAOAPAXQAZAoACAZQADAagFAOQgDAHgDACQgGghgSgMg");
	this.shape_628.setTransform(140.5,-56.4);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("#222638").ss(0.5).p("ABUBzQgZgsgigzQhChkgqgi");
	this.shape_629.setTransform(151.8,-17.8);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#2D2724").s().p("AADAGIgLgBQgOACACgHQADgIARABQAOABAGAHQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAIgNgCg");
	this.shape_630.setTransform(148.9,-42);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#443326").s().p("AhsC9QgtgNgkgaIgLgIQgbgWgTgbQgTgagIgZQgJgdgCgVQgEgvAcAEQAMABAGAKIARAlQALAYAVANQAGAEAkAOQAVAJBfgbQBYgZAtgWQAggQACg8QgEg+AEgOQAFgQAWgIQAVgHAYAEQAMACAGADQAUAIATBCQAKAkAOBCQAIAfhEBAIhFA6QgtASg3APQhIATgwAAQgZAAgTgFg");
	this.shape_631.setTransform(19.8,-26.7);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#B7A598").s().p("AhJCHQgXgKgIghQgCgLgCgrIgCg1QgBgegGgTQgMgoA3gcQAagOAuALQACAWAIAcQAIAZASAaQAUAbAbAVIALAIIAcAuIgmgIIAHAOQAHASgCAPQgCAThFAKQgfAFgXAAQgbAAgPgGg");
	this.shape_632.setTransform(-5.5,-14.2);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#6D5341").s().p("Ak5D1QhKgHgjh3QgKgkgJg3QgIgygDgIQgIgZAGgRIAIgLIB4gCQB8gBATAFQA2AQCDgSQBDgJA3gNIBMgzQBLg6gIgfIBeB7QBfCFACA3QABAjiGAqQiMAsjcAhQirAahOAAIgdgBg");
	this.shape_633.setTransform(20.1,-6.9);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#5B4431").ss(2.6).p("ABPhFIANAIQAKAJgMAIQg1AngpAcQhRA4gGgOQgGgOABgD");
	this.shape_634.setTransform(154.9,-18.1);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#93745F").s().p("AhbDlIgHhDQgEgoACgQQACgNAOgkQAMgiAXhpQAWhpACgnQACgdAXANQAlAVAPgCQBBgFgUBGQgKAmgiBAQgJAYgRBTIgbCCQgJAugKAIQgTAEgUAGQgHACgFAAQgQAAgFgSg");
	this.shape_635.setTransform(-93.6,101.4);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#93745F").s().p("AlIGXQgrgIgCgvQgBghATgvQAHghAEgIQAFgMAogSQAzgXArgnQAxgtAOgtQAJgagbhsQgchsATg2QAxiNDUgSQBUgHBSAQQBOAOAmAbQgeAVghAkQhDBKgTBQQggCGgZA5QgpBig6AOQg1AMhpBOIiQBpQgZAPgXAfQgHAKgUAAQgJAAgLgCg");
	this.shape_636.setTransform(-59.3,45);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#93745F").s().p("AgXClQgUgPgUgZQgWgeAFgMQABgFATgeQARgbAFgWQAFgYAKg9IAIg4IAGgXQAJgSASAdQARAdAaAQQAMAIAJACQgPBIgSAhQgOAagGAaQgHAZACASIADAgQABAQgEAHQgFAKgMAFQgGACgEAAQgKAAgKgIg");
	this.shape_637.setTransform(133.3,34.8);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#93745F").s().p("AjnCSQhhgMg+hJQg4hBAMhBQAEgVAKgRQAFgJAFgFQBCg4ClA+QAYAJBGAgQAeAOAiAAQAcAACGAFQB/ADAbgFQAigGAdAKQAdALAiAfQAfAbgeAZQgbAXgfgEQgUgCgXgEIgUgEQhLAJhWAOQipAbgzAXQg2Aag8AAQgSAAgTgDg");
	this.shape_638.setTransform(97.9,25.7);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#93745F").s().p("ArYG4QikgQgohRQgjhIADhPQAEhXAzhZQAzhXA7gqQAxgiBtgiQBWgaB5gSQA9gJArgEQB6gFD3hTQB8gpBkgpIAXgEQAigHA7gSQAjgKBZAIQBXAIBhAVQDtA1AZA8QAbBDgSChQgSCngxA8QhLBdikA3Qg6AThcAWIicAkQiWAlivAEQinADhOgdQg7gVhFAVIg9AVQgnAMgjADQhaAJhHAAQgsAAgkgDg");
	this.shape_639.setTransform(18.3,10.8);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#93745F").s().p("AhBHAQg0gHhGgYQiqg5gvhBQgtg/gMiRQgMiJAagPQAGgEASgSQAOgNAtgTQA9gZAfgRQAlgTAjgaQAogcAQgKQAVgMAggMQBmgnAdglQAPgUAngLIBAgMQAPgDA2gYQA0gYAcgFQAygIBDACIAPAfQAQAlAJAcQAJAdgcCIQgOBEgQA+QgiAWglAaQhKA0gPAXQhdCOgaAzQgIAPg6BHQg7BJgMAWQgHALgbAAQgNAAgRgCg");
	this.shape_640.setTransform(97.8,-14.9);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#93745F").s().p("ACSFcQgOgCgkglQgpgpgTgKQghgRgdgbQgggegWgjQgTgegcAJIgfASQgEACgVgZQgagdgSgjQg3hqAuhbQAshZAygcQAZgOAQADIAGgFQAKgFAUABIAjACQARAAAZgFIAjggQAoghAfgFQAfgEgZA1QgMAagSAbIAXgYQAegYAcABQAMABgPARQgYAcgHARIgLAaIAcAXQAfAhAEAmIgXgZIAaAkQAaAoACAaQADAagFANQgDAHgDABQgGgfgSgMQgCAcgGAHQgEAEgDgGIgCgGIgBAdQADAlAVAhQAYAmARAvQAPAoACAWQADASgDAHQgDAIgRAVQgRAXgbAPQgWANgSAAIgGgBg");
	this.shape_641.setTransform(140.7,-39.7);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#493939").s().p("AnJHuIAjgYIgtgDQBdgbAugaIAcgWQhcAahVAAQgrAAgYgFQAjgWAZgXQAxgugygEQgygFgjAbQgMAIgHAJIAhgwQAZglgOgKIgTgDIhCA8QANgkAeglQA8hJBVgBQBZgCA6gRICJg1QBNgdBciaICAjvQAxhYB+g3QB7g2BQAcQBBAWAeAoQAPATACAPQARCMhngeQgggJgogZIgigXQgtAMgfAuQgkA3hCCoQhCCmiDCdQh4CPhnA2QhRAqhzABIgHAAQg1AAgogIg");
	this.shape_642.setTransform(-113.2,43.9);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#93745F").s().p("AhLEhQgTgHgOgNQgPgNABgKIgDgyQgDgmANgfQAKgYAeiXQAeiYANgeQARgoA0gRQAxgPASAUQAqAugkBEQgUAngoBbQglBTgRAvQgMAeAHA3QAHA6gJAeQgJAdgbAAQgMAAgQgFg");
	this.shape_643.setTransform(-81.5,110.4);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#93745F").s().p("AkHFFQgWgUgLgYQgMgZAIgQQARgmAFgGQAKgNAkgWQBBgpASgOQAwgiARgbQAPgYALgwQAWhjAMgpQANgvAzguQAvgqA9gaQA+gbAqAEQAvAEADAoQAPCrhUCDQg1BThHArQgTALhBA6Qg2AxgdAKQggAKgUASQgOANgsAtQgSARgVAAQgaAAgegbg");
	this.shape_644.setTransform(-53.5,57.8);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#93745F").s().p("AAIDjQgbgDgSgWQgUgaAMgkQATgzACgKQAGgbgDgvQgFhJgFgbQgJg0gWgUQgMgMAGgOQAFgOARgKQApgYAfAhQAfAgAEAMQACAEACA1IACCQQAABrADAbQAEAngKAKQgIAIgYAAIgYgBg");
	this.shape_645.setTransform(135.9,31.9);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#93745F").s().p("AkKCYQg2gNgZgtQguhTBKg1QAogdA5gMQAJgCBmgjQBogjAdAAQATAABZAMQBVAMArgCQAzgCAVAQQADADAYAiQAOAUghAZQggAZgpAFQgfAEh+AjIiWAsQglAEgQADQgcAGgoAkQgiAfgpAAQgOAAgQgEg");
	this.shape_646.setTransform(104.8,23.4);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#493939").s().p("AhOBpQgVg5AGgbQAJgwArgOQAUgHADgHQACgMAFgNQAJgVAdgaQAhgbAQAEQAdAGgPAoQgKAZgfBCQgTAygbAwQgZAwgSAQQgDADgEAAQgOAAgRgvg");
	this.shape_647.setTransform(-93.6,142.6);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#493939").s().p("AiEA1QgDgVAXgmQAYgnAWgMQArgXBBAkQAdAPAJgDQAHgCAUgQQARgKAAAQQABAfAGANQAOAfgxAMIhWAKIhWANIgUABQgiAAgCgOg");
	this.shape_648.setTransform(-109.9,126.8);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#493939").s().p("AhMBNQgIgNAAgbQAAgIgGgcQgEgTAGgPQAGgSAVgFQALgDAjgBQAZgBAMgDQAMgEAYgNQASgKgBAHQgBAPADADQAOAQACASQACAagfAPQgbANgfAYQgjAcgMAHQgLAHgIAAQgKAAgGgLg");
	this.shape_649.setTransform(132.4,57.2);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#493939").s().p("AhpBAQACgJACgwQACgfAPgGQAQgHAOgKIAcgUIARgKIAggNQAjgOAiAkQAjAlgkAfQgIABgNADQgZAGgUAPQgNAJgWAXQgQARgNACQggAOgQADIgIABQgTAAAJgeg");
	this.shape_650.setTransform(128.7,49.2);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f().s("#AFAFAF").ss(1.5).p("AAvAlQATgHgChKQAAgYgqABQgqABgbAYQgQAPgBATQAAANAJAWQACAFAJAWQAKASAKgF");
	this.shape_651.setTransform(1.6,56.8);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#2D1F15").s().p("AijEbQgSgdgLgMQgTgUgbhLQgdhPAOgKQAugeBBgxQBlhOAggsQApg3AbgVQASgPBFglQBvg7ACBzQABAihQA/Qg6AthBAkQg3AegyAlQhCAygVAlQgPAaAWA6QATA2gWAbQgJAKgIAAQgIAAgHgJg");
	this.shape_652.setTransform(20.3,42.8);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f().s("#5B4431").ss(2.1).p("AiVCiQAIAwAtgdQAogZA4hMQA2hFArhOQAthQAIgr");
	this.shape_653.setTransform(22.8,36.4);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#222638").s().p("AAEAHIgEgDIgCgCIAAgCIgCAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIABAAIgCgBIgBgCIABgBQAGAAAFAKIgCgBIACACIAAABIABAAIgBACIgBABIgBgBgAADAHIABAAIgCgCIABACg");
	this.shape_654.setTransform(81.5,-75.3);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#443023").s().p("Ag0AcQAFgMAfgyIAhAPQAYAKASAKQgkAdgZABIgkADIgUABQAFgEABgDg");
	this.shape_655.setTransform(69.9,-83.1);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#DDB294").s().p("AgHA4QgKgCgPgRQgPgSgMgEQgRgFgBgOQgCgNALgOIANgCQAPgDANgBQAIAAAMgKQAKgJAUABQAWACALAPQAHAJANAWQAMAPgoAaQgjAWgQAAIgEAAg");
	this.shape_656.setTransform(62.9,-39.1);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#DDB294").s().p("AgbBCQgMgLgBgZQgCgigEgMQgKgfAAgJQgBgNAQgHQAPgGADADQADACAKAPQAIAIALADQALACAIANQAYAoAFAwQADAbgjACIgHAAQgbAAgSgPg");
	this.shape_657.setTransform(58.4,-26.5);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#DDB294").s().p("ABiCCQgCgFgRgSQgPgPgPgOQgwgXgngWQhPgogTgkQgVgpAMgcQALgaAbADQAbAEAMAFIAeASQASAMAkAuIA0BFQAKAMAgAdQAaAXALAVQAMAZgdAFQgLACgIAAQgMAAgBgGg");
	this.shape_658.setTransform(43.9,-41.2);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#9B4242").s().p("AiAC8QgJgTAriFIA6iuQAMgqAwgRQAogPAZAIIAIAFQAMAKAOAcQAQAegRAlQgOAfgcAVQguAjgsCKQgUA+gtAMQgLADgJAAQgXAAgKgUg");
	this.shape_659.setTransform(41.9,-56.7);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#9B4242").s().p("AjHDbQgUhAgOg7QgOg9ACgUQACgQBehYIB3hqQAngjAagPQAvgbAhAMQAgAMAPAKIAGAFIgOgVIAYgDIA5gGQARCggJAPQgCADgWARQgSAOgHAVQgIAbg6BPQg7BRgbATQgdAVgsAbQgvAcgEgCQgaANgZADIgMABQgoAAgOgtg");
	this.shape_660.setTransform(37.6,-53.6);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#827B77").s().p("ABXA9QgkgogfgUIgWgMQgSgKgXgKIgjgPQgagMgVgRQgggZgCgQQgCgQAgAFQAsAHAkAVIATgZQAWgaAMgBQAPgCArAdQAhAWAbAXQANALAQAKQAIAIgJAOIgfAwIASAbQASAhADAZQAEAngEAQQgggwgngrg");
	this.shape_661.setTransform(76.1,-81.9);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#DDB294").s().p("AAgCGQgbgOgPgbQgDgGgNAFQgSAKgNAFIgvAYIg0h3IAWgJQAbgKASgJQARgIALgHIATgBIAlgDQAYgCAlgdQgTgKgXgKIghgPIAJgQIA2gQQA7gJASAmQAOAeATAiQAJAYgSAWIgEAFIgJAPQgJATAAAQQAAALgIALQgJALgEgGIgHgKQgDAZgGAAIgMAEIgHADIgEALIgJAGQgCADgEADQgEADgEAAQgEAAgEgCg");
	this.shape_662.setTransform(70.2,-76.4);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#DDB294").s().p("AAXAxQgOgBgTgCIgQgCIgxhcIAUAPQAYAQASAGQANAEAqADQAiAEgBAUQAAAPgRAIQgNAGgTAAIgDAAg");
	this.shape_663.setTransform(51.7,-43);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#2D1F15").s().p("AB8GeQgegKibjaQiZjVgag9QgVgwAdhbIAhhRIAzg1QBCg2BGgBQBEgBATB0QAJA7gFA6IgNAjQgNAqgGAgQgFAfBJB9QAoBGBPCCQAnBIg4ApQgWAPgcAGQgNACgKAAQgMAAgIgDg");
	this.shape_664.setTransform(22.3,-12.6);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f().s("#5B4431").ss(1.5).p("Ag9FJIAKADQAZAGAXgEQAZgFAQgQIAHgKQANgWgCgcIhqmvQgEgTARg7QANgwAOge");
	this.shape_665.setTransform(153.6,-14);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#5B4431").ss(1.5).p("AEVCLIBKA/QBMBDAKAPQAHAKgigJQgkgJg0gXQiNg9hihRQgYgUjkijQiWhrgYg3QgYg5gnADQgMABgNAHIgJAH");
	this.shape_666.setTransform(103.7,-9.7);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#493939").s().p("AjbCYQAIgbAJgQIgOAFQgmALhNAPQhJANgWABQANgKBGgpQBIgqASgIIAegPQBLgmAWgfQAOgVAmgNIA/gQQAOgEA0gcQAzgbAbgHQAkgIBEgEQgJgfBjAeQBlAegBAOQhBAchGAiQiNBDgfAbQAEgQAIgTQAQgjAYgOQgwAbg1AgQhtBGgZAlIAKgbQAPggAVgaQgpATgvAbQhdA2gbAnIAGgYg");
	this.shape_667.setTransform(109.4,-34.5);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("#5B4431").ss(2.6).p("ACQi2IAMACQAIAEgQAJQgLAGheAHQhcAIgTANQgWAPgbA6QgVArgRAzQgKAgAXA+QALAfAOAY");
	this.shape_668.setTransform(156,-15.8);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#493939").s().p("AC1CpQgDgUgJgKQgIAcgIAFQgEAEgCgHIgBgHQABgXgEgeQgJg6gXgeIgSgVQgZgggXgNQgXgNgigDIgQgGQgOgFgFgBIgLgDIgmgBQgNAAgpgFQgngFgXAAQAegeAngUQAfgQAUgCQAQgCAIAEIAHgEQALgCATAEIAQAFIAYAGQAOACAXABIAogYQAvgYAfACQAPABgBAMQhBAZgWAVQgRARgCAKQgCAGACACIASABQATABANgEIgDACIADgCIAAAAIABgBQAHgCAFgGQApgZAgAHIAFADQgmAIgNANQgLAJgNAYIgLAVIARgCIgBACQAAABAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQAIAIAHALIAIAMQAXAkgEAmIgRgdIASAqQAQAsgDAZQgCAagIAMIgIAIQAAgIgCgLg");
	this.shape_669.setTransform(154.5,-31.4);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("#222638").ss(0.5).p("AA6CDQgPgxgXg5Qgrhwgigq");
	this.shape_670.setTransform(158.3,5.2);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#2D2724").s().p("AAOALIgLgFIgMgDQgNgCADgGQAFgIAPAGQAPADAEAIQABADgCACQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgCAAg");
	this.shape_671.setTransform(160.5,-19.1);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#443326").s().p("AiDCoQgrgTghgeIgJgKQgZgZgQgdQgPgcgFgZQgGgfABgUQABgvAcAHQAMADAEAKIANAnQAIAZATAPQAHAFAgASQAUALBigPQBbgPAvgQQAigNAIg6QADg/AGgNQAHgQAXgFQAWgEAXAGQAMAEAFADQATAKALBEQAGAlAGBDQAEAghLA3IhLAyQgvANg4AIQgxAIgnAAQgwAAgdgMg");
	this.shape_672.setTransform(19.3,-15.3);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#B7A598").s().p("AhWCBQgWgMgEgiQgBgMADgrIAFg0QACgegDgUQgIgpA6gWQAcgKArAPQgBAVAGAfQALA5AyAyIAJAJIAXAxIgkgMIAFAPQAFASgEAQQgFAShGACIgOAAQg5AAgXgNg");
	this.shape_673.setTransform(-7.7,-7);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#6D5341").s().p("AlTDNQhJgQgVh6QgGglgCg2QgCg1gCgHQgFgbAIgPIAJgLIB4AMQB7ANASAIQA0AWCFgDQBCgBA5gGIBSgqQBRgwgEggIBPCFQBOCPgEA4QgEAkiKAZQiQAajfAIQhDACg0AAQhwAAgvgKg");
	this.shape_674.setTransform(17.1,3.8);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f().s("#5B4431").ss(2.6).p("ABcgzIALAKQAIALgOAFQg8AbguATQhbAmgDgPQgDgQACgB");
	this.shape_675.setTransform(161.4,5.6);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#93745F").s().p("AijDiIABhDQAAgoAFgQQADgNASghQAQggAjhmQAihmAHgmQAGggBIADQAmACA/AJQA/AChNBSQgNAPg0AyQgkAjgGALQgMAXgaBQIgqB/QgQAtgLAGIgnAFIgJABQgTAAgDgVg");
	this.shape_676.setTransform(-106.6,86.8);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#93745F").s().p("Al2F4QgpgMADgvQADghAYgsQALggAFgIQAHgMApgMQA2gRAvgiQA2gnATgrQAMgZgOhuQgPhuAZg0QBBiFDWAHQBTADBQAYQBMAYAiAfQgfARgmAgQhLBBgcBNQgwCAgfA3Qg1Bdg7AHQg1AGhzBAIibBYQgZAMgcAdQgHAGgNAAQgLAAgRgFg");
	this.shape_677.setTransform(-67.8,44.7);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#93745F").s().p("AhPCYQgQgDgIgRQgKgXgEggQgFgkAKgJQAEgDAfgRQAcgPAQgRQAbgeA+hSIARgRQARgKABAiQABAiAOAaQAHANAHAGQgxA3ghAVQgYAPgSAUQgSASgHARIgNAdQgHAOgHAEQgIAFgJAAIgGAAg");
	this.shape_678.setTransform(115.4,61);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#93745F").s().p("Aj4CUQhfgXg0hQQgwhHAThAQAHgTAMgRQAGgIAFgFQBIgvCcBRQARAIBIAsQAcARAiAEIChAYQB9ARAcgCQAigCAbAOQAbANAfAjQAbAgggAVQgeAUgegHIgqgMIgTgGQhMAAhWAEQisAGg1ASQgpAOgrAAQgiAAgjgJg");
	this.shape_679.setTransform(90.7,42.1);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#93745F").s().p("AgbGUQiogQhKgmQg3gdhIAOIg/ANQgoAHgjgBQl/gFgwiKQgbhKANhPQAOhVA9hSQA9hSA/giQA1gcBxgVQBYgRB6gDQA+gCArACQB6AJD/g2QCAgaBogdIAXgBQAjgDA9gLQBQgNDeBNQDmBQARA+QATBGgkCdQgmCkg4A2QhWBUipAjQg9AMhdALIieASQhSAKhYAAQhNAAhQgIg");
	this.shape_680.setTransform(13.1,22.9);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#93745F").s().p("AiGGhQgzgNhDgfQiihNgmhGQglhDAEiSQAFiKAbgMQAHgCATgQQAPgMAvgNQA/gSAigNQAmgOAngWQAqgYASgIQAVgJAigIQBqgbAigiQARgRAogGIBAgFQAQgBA4gSQA3gRAcgCQAzgCBCAKIALAgQALAnAGAdQAGAegsCDQgWBCgXA8QgkARgoAVQhPAsgTAWQhtCDgfAtQgKAPhCBAQhCBBgQAVQgFAHgRAAQgQAAgagHg");
	this.shape_681.setTransform(103.7,0.1);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#93745F").s().p("ABJFWQgNgEgbgsQgggygQgOQgcgXgXghQgagkgNgmQgMgigeADIgiALQgEABgQgdQgTgigKglQgfh0A/hPQA+hOA3gRQAbgJAPAHIAHgDQALgDATAFIAiAJQAQADAbACIAogZQAvgYAfADQAfACgjAuIgpAuIAcgSQAhgRAcAGQALADgSAOQgdAWgLAQIgQAWIAXAeQAXAmgEAlIgRgcIARAoQARAtgCAZQgDAZgIANIgIAHQAAgIgCgKQgDgUgJgJQgIAagIAGQgEADgCgGIgBgIIgHAdQgEAlANAmQAPApAHAyQAGAqgCAWQgCATgEAGQgEAHgVASQgWASgdAJQgRAFgNAAQgKAAgIgDg");
	this.shape_682.setTransform(151.6,-15.6);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#493939").s().p("AmhHBQg6gGgogNIAlgUIgsgIQBfgQAygVQAYgKAGgIQhfAPhVgKQgqgFgXgIQAlgRAbgUQA3gogygLQgxgKgmAWQgMAHgHAHIAlgrQAdghgNgMIgSgGIhJA0QASgiAighQBEhBBVAJQBYAJA8gLQAngHBmgdQBRgVBtiNQB0imAog4QA7hSCDgnQCAgnBMAkQA+AeAaArQANAVAAAPQAACNhjgqQgfgNglgdIgfgbQguAGgkAqQgqAyhVCgQhVCdiVCMQiICBhtApQg9AXhMAAQgeAAgggEg");
	this.shape_683.setTransform(-120.9,39.1);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#93745F").s().p("AiIEHQgSgLgLgQQgLgPADgKIAHgxQAGgmATgbQAPgWA/iNQA+iNATgbQAZgkA3gEQA0gEANAYQAOAZgCAYQgDAegcAhQgcAhg7BRQg2BHgcAsQgSAagGA4QgFA6gQAbQgMAWgUAAQgPAAgTgNg");
	this.shape_684.setTransform(-101.5,92.6);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#93745F").s().p("Al2DLQgNgbgBgaQgBgcANgMQAdgdAIgEQANgIAqgIQBKgNAYgGQA5gOAagTQAXgQAcgpQA5hVAZghQAdgnBCgXQA7gWBDgCQBDgBAmATQAqAVgMAmQgxCkh/BaQhQA6hSAOQgWADhQAeQhGAagegCQgigCgaAJQgmARglAPQgMAGgMAAQgjAAgagyg");
	this.shape_685.setTransform(-65.4,59.7);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#93745F").s().p("Ag/DXQgZgLgLgaQgMgfAXgfIAmg0QAOgYALgtQAShKADgZQAFg0gNgaQgIgPAKgMQAJgMARgEQAvgKAVAoQAUAoAAANQAAAEgNAzIgqCKQgfBmgFAcQgIAlgMAHQgEADgHAAQgQAAgdgNg");
	this.shape_686.setTransform(125.1,56.5);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#93745F").s().p("AkbCEQg0gUgUgvQgkhXBQgtQAtgZA4gEQAJgBBpgXQBrgWAeADQATACBWAXQBTAVAsAEQAyAEATASIAXAoQALAVgkAVQgjAUgoABQggAAiBAVIibAaQgkgBgRACQgdACgrAgQgfAWgiAAQgVAAgVgIg");
	this.shape_687.setTransform(97.8,42.4);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#493939").s().p("AhxA0QASg5AVgSQASgRATgFQAUgFAVAJQAUAHAHgEQAJgJAMgHQAKgFAVghQAQgYAIAKQAXAcgMAqQgNAsgtAcQgvAdgxAVQgyAWgYACIgBAAQgUAAASg6g");
	this.shape_688.setTransform(-119.8,119.8);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#493939").s().p("Ah2BWQgJgSAKgtQAKgrASgSQARgSAagFQAagFAlAGQAhAGAIgGQAIgNAMgNQAMgOAFAPQALAdAJALQAYAZgsAaQgYAPg2AWQgyAbgbALQgdAMgOAAQgLAAgEgHg");
	this.shape_689.setTransform(-123.3,113);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#493939").s().p("Ag0BeQgKgMgGgaQgCgHgMgbQgJgTADgPQACgSAUgKQAKgFAigJQAXgGAMgGQAKgGAVgSQAPgNABAGQACAOAEADQARANAFAQQAJAagbAWQgYASgZAeQgcAigKALQgLAKgKAAQgHAAgHgGg");
	this.shape_690.setTransform(115.4,80);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#493939").s().p("Ag9A7QgjgEgQgFQgcgIAbgaQAHgHAZgnQASgcAQACQAQADASgCIAhgEIAUAAIAiAFQAmAFAMAwQAMAwgvALQgHgEgNgDQgZgHgZACQgPACgfAJQgNAEgKAAQgGAAgFgCg");
	this.shape_691.setTransform(103.2,70);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f().s("#5B4431").ss(2.1).p("AB2BDQgmgngxgiQhghGg0AR");
	this.shape_692.setTransform(74.8,-33.6);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f().s("#AFAFAF").ss(1.5).p("AAgAwQAUgDAPhHQAFgYgpgJQgpgIggASQgTAKgEASQgEAOAEAWQABAGAEAYQAFAUALgE");
	this.shape_693.setTransform(5.4,59.4);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#2D1F15").s().p("AjxDpQgKgggIgOQgOgZgKhPQgKhTAQgFQAygTBMgiQB0g1AogjQA2gtAegPQAVgKBMgVQBBgRAYAYQATAVgKA1QgHAihcAqQhDAfhHAUQg8ARg7AZQhLAhgdAfQgUAWAIA9QAHA6gcAVQgIAGgHAAQgKAAgHgMg");
	this.shape_694.setTransform(28.1,50.7);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f().s("#5B4431").ss(2.1).p("Ai5B4QgDAxAzgSQAsgQBJg8QBDg4A8hBQA9hEASgp");
	this.shape_695.setTransform(30.5,44.7);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#222638").s().p("AAAAEIgBgBQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgBgBIgBgBIABgBIgCAAIgCgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAGgCAIAKIAAABQAAABAAAAQAAABAAAAQAAAAgBAAQgBABAAAAIgGgDgAAFAGIAAAAIAAAAIgBgBIAAAAIABABg");
	this.shape_696.setTransform(83,-73.8);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#443023").s().p("AgwAeQACgKASg6IAlAIQAZAEAUAGQgeAkgXAHIg2AQQAEgFABgEg");
	this.shape_697.setTransform(70.5,-78);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#DDB294").s().p("AABA6QgJAAgRgPQgSgQgNgCQgRgDgEgOQgDgMAIgPIANgEQAOgFANgDQAIgBAKgMQAKgLATgBQAWgCANANQAIAIARAUQANAOgjAfQgiAegRAAIgBAAg");
	this.shape_698.setTransform(70.1,-32.4);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#DDB294").s().p("AgRBEQgOgJgFgYQgGgigGgLQgPgdgBgIQgCgNAOgJQAOgJADACIAQAPQAJAHAMABQAKABAKALQAdAjAOAwQAHAagjAHQgLACgKAAQgSAAgPgJg");
	this.shape_699.setTransform(67.6,-19);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#DDB294").s().p("AByBxQgCgEgTgPQgSgNgRgLQgzgQgqgPQhUgegYgfQgbglAIgeQAHgcAbAAQAbAAANADIAgAOQATAIArApIA+A7QAMAMAjAXQAeATAOATQAQAWgcAKQgPAFgIAAQgIAAgCgFg");
	this.shape_700.setTransform(51.3,-31.5);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#9B4242").s().p("AhmDLQgLgRAWiKQAbiWAEggQAFgqAugZQAlgUAZAEIAKADQANAIASAaQAUAbgLAoQgKAhgYAYQgoApgYCQQgKBAgqATQgOAGgMAAQgSAAgLgPg");
	this.shape_701.setTransform(47.2,-46.3);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#9B4242").s().p("AidD8Qgeg8gWg4QgXg7gBgUQgCgaC2jVQAjgpAWgTQAqghAjAHQAiAHAQAHIAHAEIgRgSIAXgHQAcgIAbgGQApCbgHAQQgBAEgTATQgQARgDAWQgEAcguBXQguBZgYAWQgZAagpAhQgpAjgFgBQgXAQgYAHQgLAEgKAAQghAAgSgmg");
	this.shape_702.setTransform(42.4,-43.4);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#827B77").s().p("ABfA7QgsgggigLIgYgIQgUgGgZgEIglgHQgggHgUgLQglgRgFgPQgGgQAhgCQAsgCAoAMIANgcQAPgeANgFQAOgFAwATQAkAOAgARQAPAIASAGQAKAGgGAQQgKAZgKAcIAXAXQAaAcAIAYQAIAXADARQABAMgBACQgpgogwgig");
	this.shape_703.setTransform(76.6,-80.9);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#DDB294").s().p("AiVAtIAUgOQAYgQAQgNQAQgLAHgJIA2gPQAXgIAegkQgVgGgXgFIgmgHIAGgRIAxgcQA4gWAaAiQAUAZAaAeQAOAVgMAaIgDAGIgGARQgEATADAQQADALgGAMQgGANgFgFIgJgIQACAYgGACQgDABgIAFIgGAFIgBALIgHAIQgCAEgDADQgHAIgJgDQgegJgUgWQgFgFgKAIIgbAWIgpAhg");
	this.shape_704.setTransform(71.8,-72.3);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#DDB294").s().p("AhPgqIAWANQAaAMASADQAOACAqgDQAjAAACATQABAPgPAKQgNAJgUACIghACIgRABg");
	this.shape_705.setTransform(58.3,-33.9);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#2D1F15").s().p("ACYGYQgfgIiujMQisjGgfg7QgYgtAUhdIAZhUIAvg6QA8g7BGgIQBEgHAcBzQAPA5AAA7IgJAkQgLAqgCAgQgCAgBUB2QAuBCBaB7QAuBEg0AuQgUARgcAIQgRAFgNAAQgHAAgGgBg");
	this.shape_706.setTransform(33.6,-1.5);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f().s("#5B4431").ss(1.5).p("Ag2FKIAJACQAZAGAWgFQAagFAPgRQAFgGACgEQANgWgDgcIh2msQgGgTAQg8QAMgvAMgf");
	this.shape_707.setTransform(158.8,-1.3);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f().s("#5B4431").ss(2.1).p("ABtBKQghgpgsglQhXhMg1AN");
	this.shape_708.setTransform(85.3,-25.7);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f().s("#5B4431").ss(1.5).p("AEJCuIBOA8QBPA+ALAPQAGAKgigIQgkgJg1gVQiOg4hkhPQhuhXh9iKQh7iIgghFQgag5gxAnQgPANgPAUIgNAS");
	this.shape_709.setTransform(110,0.5);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#493939").s().p("AjWCfQAHgbAIgQIgOAEQgmANhNAQQhHAQgXABIBSg1QBIgtAQgIQASgIAMgHIAAAAQBKgpAVgfQANgVAmgOIA+gTQAOgEAzgdQAygdAbgHQAugMA6gEQgLgeBlAbQBlAbAAANQg/AfhGAkQiLBHgeAbQADgQAIgTQAOgjAZgPQgwAcg0AiQhqBJgZAmQADgLAHgQQAOggAUgbQgoAUguAcQhcA5gaAoIAGgYg");
	this.shape_710.setTransform(113.8,-20.6);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f().s("#5B4431").ss(2.6).p("ACNi6IALACQAJAEgQAJQgLAGheALQhbAKgTANQgWARgZA6QgUAtgPAyQgJAhAYA9QANAeAOAY");
	this.shape_711.setTransform(160.7,-3.2);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#493939").s().p("ACwCMQgHAcgHAFQgFAEgCgGIgBgIQAAgXgFgdQgKg6gYgdIgTgXQgZgegYgMQgXgMgjgCQgCAAgOgFQgOgFgEgBIgLgDIgmABQgNAAgqgEQgngEgXABQAdgfAmgVQAfgRAUgDQAPgCAJAEIAHgEQALgDATAEIAQAEQAcAHAhABIAogaQAugZAfABQAPAAgBANQg/AagWAWQgQARgDALQgBAFACACIARACQAUAAAMgFIgCADIAEgEQAIgEAEgEQAlgaAjAGIAEACQgmAMgMALQgKAKgNAXIgKAWIARgCIgBACIACgBQAHAGAJAMIAIALQAYAlgDAlIgSgcIATApQASAsgCAZQgCAagIAMIgHAIQgBghgPgPg");
	this.shape_712.setTransform(158.6,-19.3);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f().s("#222638").ss(0.5).p("AA9CBQgQgwgYg4Qguhwgjgp");
	this.shape_713.setTransform(163.8,17.7);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#2D2724").s().p("AAPAKIgNgFIgLgCQgNgCADgFQAEgIAQAEQAPAFAEAHQABACgCADQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_714.setTransform(165.2,-6.6);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#443326").s().p("AiOCZQgogUghgiIgIgKIgBAAQgtg2gIg4QgEgeACgXQAEgvAcAKQAMADAEALIAKAnQAGAaASARIAlAZQATAMBjgIQBcgJAwgNQAjgKAMg6QAHg+AHgNQAIgQAXgDQAWgDAXAJQAKADAHAFQASALAGBEQADAmACBCQACAghPAzIhOAtQgvAKg5AEQgeADgbAAQhHAAgkgTg");
	this.shape_715.setTransform(26.1,-3.1);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#B7A598").s().p("AAECPQhEgDgZgQQgVgOgCgiQAAgMAGgrIAIg0QAFgfgCgTQgDgVAQgQQAPgOAagHQAbgIArASQgCAWAEAeQAGA4AvA2IAJAKIAUAzIgkgPIAFAPQADASgFAQQgFAPg2AAIgRAAg");
	this.shape_716.setTransform(-1.9,2.7);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#6D5341").s().p("AhKDIQjTgHhDgTQhIgVgMh8QgEgkACg3QABg1gBgHQgDgbAJgPQAFgIAFgCIB2AUQB6AWASAIQAyAaCEAGQBDAEA5gCIBUglQBVgrgCggIBGCLQBECUgJA3QgFAjiLAQQhlAMiKAAQg9AAhEgDg");
	this.shape_717.setTransform(22.6,16.1);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f().s("#5B4431").ss(2.6).p("ABag1IAMAJQAIALgOAGQg7AdgtAUQhbAogDgPQgDgPACgC");
	this.shape_718.setTransform(166.8,18);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#93745F").s().p("AhYD/IgQhBQgKgnAAgRQAAgNAJglQAIgjAHhrQAHhsgDgnQgCgfBHgQQAlgIA+gIQA+gOg2BkQgJASglA9QgaArgDAMQgGAagFBUIgHCFQgEAvgJAJQgIAHgeAIQgIAEgGAAQgNAAgHgPg");
	this.shape_719.setTransform(-96.5,86.9);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#93745F").s().p("AmzFEQgngUANguQAJgfAfgnQASgdAGgHQAJgKArgFQA3gGA2gYQA8gcAbgmQAQgXAHhvQAHhuAjguQBYh3DRAwQBRASBKAoQBGAmAcAlQgjALgrAYQhVAygrBGQhHB0gqAwQhFBRg7gFQg1gEh9AqQiDAvgmAJQgcAHggAXQgGADgHAAQgOAAgUgLg");
	this.shape_720.setTransform(-59.8,42.3);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#93745F").s().p("AgfCkQgUgQgSgaQgUgeAFgNQACgEATgdQASgbAHgVQAGgZAMg8IALg4IAIgWQAKgRAQAdQAQAeAYARQAMAIAJADQgSBHgUAhQgPAZgHAaQgIAYABASIACAhQAAAQgEAGQgGAKgMAEIgJACQgLAAgKgJg");
	this.shape_721.setTransform(121.5,86.5);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#93745F").s().p("AFZCmIg8gWQhMgFhWgCQisgFg2AOQhLAUhOgZQhdgegvhTQgrhLAYg9QAHgUANgPIAMgMQBNgrCVBcQASALBDAvQAbASAhAHICfAiQB8AaAcAAQAiAAAaAQQAbAPAcAlQAZAhgiAUQgUAMgUAAQgKAAgKgEg");
	this.shape_722.setTransform(91.7,59.4);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#93745F").s().p("AgwF4QingbhHgrQg1gghIAIIhBAJQgoAFgjgDQl9gfgoiNQgbhhAChHQAChrA+hIQBChOBCgdQA3gaBxgNQBZgKCRAVQBIAKA3ANQB4ARECgkQCCgSBpgWIAlALQAwAHA8gMQCJgcC5BeQBLAmA1AuQA1AuAGAhQAPBHgvCbQgxChg7AyQhcBOirAXQg9AJheAEIifAHQglACgmAAQh5AAiCgWg");
	this.shape_723.setTransform(16.8,36.6);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#93745F").s().p("Ah2GpQgzgLhDgeQikhIgphEQgnhDAAiSQABiKAbgMQAHgDATgQQAOgNAvgOQA+gUAhgOQAmgPAmgXQApgZATgIQAVgKAhgKQBqgeAggiQAQgSAogHIBBgHQAQgCA3gTQA2gTAcgCQAzgEBCAIIAMAgQANAmAGAdQAHAegoCEQgUBDgVA8QgjATgoAWQhOAugSAWQhpCGgeAwQgKAOhABCQhABCgPAWQgGAIgTAAQgPAAgZgGg");
	this.shape_724.setTransform(108.6,13.8);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#93745F").s().p("ABYFYQgMgEgdgrQghgxgQgNQgdgWgZghQgagjgPgmQgNghgeAEIghAMQgFABgQgdQgUghgLglQgjhzA9hRQA9hPA1gTQAbgJAPAGIAHgEQALgDAUAFIAhAIQAQADAbAAIAogZQAugaAfABQAfACghAvIgoAvIAbgTQAhgSAcAFQALAEgRAOQgdAXgKAQQgMASgEAEIAYAdQAYAlgCAmIgSgcIASAoQASAsgCAaQgCAZgHANIgIAHQAAgggPgPQgHAbgIAGQgEAEgCgHIgBgHIgHAdQgDAlAPAlQAQAoAIAyQAIAqgCAWQgBATgEAGQgEAHgVATQgVATgdAKQgSAGgNAAQgJAAgIgDg");
	this.shape_725.setTransform(155.9,-3.3);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#493939").s().p("AorEOIhWgxIAqgHIgogWQBgAPA1gEQAbgCAHgGQhegQhNgkIg6ghQApgFAggKQBAgUgrgaQgsgZgrAJQgNADgLAFIAzgeQAmgVgIgQIgQgLIhWAaQAcgbArgUQBWgpBNAkQBRAlA7AJQAoAGBqAFQBTAGCVhjQBTg3CIhqQBSg6CJAEQCGAEA8A7QAyAxAKAwQAFAYgFAPQgsCEhQhGQgZgWgagoIgVgkQgugIgvAcQg4AiiEB7QiDB7i5BVQirBNh1AEIgKAAQhWAAhjgtg");
	this.shape_726.setTransform(-118.7,29.1);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#93745F").s().p("AhNEgQgUgHgOgNQgOgNABgKIgDgyQgCgmANgfQAJgXAgiYQAfiXAOgeQARgpA0gQQAxgPASAVQAqAvglBDQgUAlgpBcQgkBPgUAzQgMAeAHA3QAGA6gJAeQgJAdgbAAQgMAAgPgGg");
	this.shape_727.setTransform(-93.5,86.9);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#93745F").s().p("AmSCZQgJgcADgbQADgbAOgLQAigYAHgDQAPgGAqgBQBJgDAbgCQA6gGAdgPQAZgMAigmQBFhLAdgdQAigiBEgOQA/gMBCAHQBCAIAjAYQAmAbgRAkQhICbiKBHQhXAthUADQgWABhUARQhJAPgdgGQgigHgaAGQgoALgnAKQgJACgIAAQgpAAgUg6g");
	this.shape_728.setTransform(-62,60.4);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#93745F").s().p("Ag+EMQgagOgKggQgMgmAXgmQAgg2AFgLQAOgfALg3QAQhZAEgjQAFhAgOggQgIgSAKgPQAJgPARgFQAvgOAVAyQAUAxABAQQAAAFgNA/IgpCsQgeB/gFAiQgIAvgLAJQgFACgHAAQgQAAgdgOg");
	this.shape_729.setTransform(128.7,83.1);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#93745F").s().p("AkkB4QgygXgQgxQgfhZBTgnQAwgXA2AAQAKAABqgQQBtgPAdAGQATADBUAcQBSAbArAHQAyAIASATQACADASAlQAKAWgmATQgkASgogCQgggCiCAMQiFAOgXACQglgDgRAAQgcAAguAdQgeASgeAAQgYAAgYgLg");
	this.shape_730.setTransform(100.5,58.5);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#493939").s().p("AhzAsQAWg3AWgRQAUgPASgDQAVgEAUAKQATAIAIgDQAFgDARgLQAKgFAXgfQARgYAIALQAWAegPApQgQAqgvAZQgxAagzASQgzASgYAAIAAAAQgWAAAXg6g");
	this.shape_731.setTransform(-109.2,117.3);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#493939").s().p("Ah6BPQgIgTANgsQANgqATgRQAlghBGASQAhAIAIgFQAJgMAMgMQAOgOAEAPQAIAfAJALQAWAbgtAWIhRAgQgzAXgcAKQgbAJgOAAQgOAAgDgIg");
	this.shape_732.setTransform(-109.2,114.2);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#493939").s().p("AgzBfQgLgMgGgaQgCgHgMgbQgJgSACgQQADgSATgKQAKgFAigJQAXgHAMgGQAKgGAUgSQAQgOABAGQACAPAEADQARAMAGARQAIAZgaAWQgYATgYAeQgcAjgKAKQgLALgKAAQgHAAgHgGg");
	this.shape_733.setTransform(116.4,113.5);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#493939").s().p("AhnBEQACgJAAgwQgBgfAPgHQAPgHAOgLIAbgVIAQgMIAfgOQAjgQAkAiQAkAjghAiQgJABgMAEQgZAGgTAQQgMAJgVAZQgPARgNAEQggAPgPAFIgJABQgSAAAHgeg");
	this.shape_734.setTransform(107.4,104.3);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f().s("#AFAFAF").ss(1.5).p("AAtAnQAKgEAGgdQAEgUAAgbQABgZgrAAQgpgBgcAYQgRAOgBASQgBAOAIAWQADAGAIAWQAJATAKgG");
	this.shape_735.setTransform(14.8,52.3);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#2D1F15").s().p("AixEUQgQgdgLgNQgSgVgZhMQgahQAPgJQArgaBGgxQBohKAjgrQAqg2AcgUQASgNBHgjQA9geAcATQAXARgBA2QAAAjhSA7Qg9AshBAgQg4Acg0AkQhEAvgWAkQgQAZATA7QASA3gXAaQgJAKgIAAQgIAAgIgKg");
	this.shape_736.setTransform(34.3,39.1);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f().s("#5B4431").ss(2.1).p("AibCcQAGAwAugbQApgYA8hJQA3hEAuhLQAwhPAJgr");
	this.shape_737.setTransform(36.8,32.7);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#222638").s().p("AAAAEIAAAAQAAABAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgCgBIAAgBIAAAAIgCgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIABgCQAHgCAIAJIAAABQAAAAAAAAQABABAAAAQAAAAgBAAQAAABAAAAIgBABIgHgCg");
	this.shape_738.setTransform(75.5,-87.8);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#443023").s().p("AgtAfQAAgMANg6IAlADQAaADATAEQgYAmgYAKIg0AVQAFgGAAgDg");
	this.shape_739.setTransform(62.6,-90.3);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#DDB294").s().p("AgRA1QgJgEgLgTQgNgUgLgGQgQgHABgPQABgNAMgMIANAAQAQAAANABQAHABAOgIQALgHAUAFQAVAFAJAQQAGAKAJAYQAJARgsATQggAOgQAAQgGAAgEgBg");
	this.shape_740.setTransform(61.6,-30.8);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#DDB294").s().p("AALBUQgggEgQgTQgLgOADgYQAEgigCgNQgFggABgIQACgNARgEQAPgEADADIAKATQAFAJAMAFQAKAEAGAOQARArgCAxQgCAXgaAAIgJAAg");
	this.shape_741.setTransform(55.1,-19.2);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#DDB294").s().p("ABOCQQgBgLgogwIhOg6QhHg1gNgmQgOgsAQgaQAQgYAZAIQAbAIAKAHIAbAXQAQAOAcA0IApBMQAHAOAbAhQAWAbAHAXQAJAageAAQgfAAAAgJg");
	this.shape_742.setTransform(42.9,-36);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#9B4242").s().p("AhdDOQgNgQARiLQAUiWADggQADgrAtgbQAkgVAZADIAKACQANAIATAYQAVAbgJAoQgIAhgXAaQgmAqgSCRQgIBBgoAUQgQAIgMAAQgRAAgKgPg");
	this.shape_743.setTransform(40.9,-58.3);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#9B4242").s().p("AiREFQggg7gZg3QgZg6gCgUQgCgYCsjeQAhgrAWgUQAogjAjAGQAiAFAQAHIAHADIgRgRIAWgIQAcgJAbgHQAvCZgGAQQgBAEgSAUQgPASgDAWQgCAcgqBZQgrBagWAYQgYAagnAjQgoAlgFgBQgWARgYAJQgNAEgLAAQgeAAgUgjg");
	this.shape_744.setTransform(36,-55.4);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#827B77").s().p("ABiA4QgzgbgggIIgYgFQgUgDgagDIgmgDQgggEgVgHQgngOgHgOQgHgPAggFQAsgHApAIQAEgPAGgPQANgfAMgGQANgGAyANQAlALAiANQAPAGATAFQAKAEgEARIgPA3IAaAUQAdAZAKAXQAQAkABARQgtgkgzgdg");
	this.shape_745.setTransform(68.6,-95);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#DDB294").s().p("AiPA8IASgQQAWgSAPgPQARgRADgFIA1gVQAWgKAZgoQgUgDgYgDIgmgDIAEgSIAughQA1gbAdAfQAXAXAdAbQAQAUgKAaIgCAHIgEARQgCAUAFAPQAEALgFANQgEANgGgFIgKgHQAFAYgGADQgDABgHAGIgGAFIAAAMIgGAIQgBAEgDAEQgGAIgJgCQgegFgYgUQgFgEgKAJIgYAYIglAlg");
	this.shape_746.setTransform(64.4,-85.1);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#DDB294").s().p("AANA4IgggIIgQgGIghhjIARATQAVAUAQAIQAOAGAoAJQAhAMgEATQgEAPgRAFQgIACgJAAQgIAAgKgCg");
	this.shape_747.setTransform(51.4,-36.9);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#2D1F15").s().p("AC5GLQgfgFjDi3QjBi0gmg2QgdgqAKhfIAQhWIAog+QA2hCBEgPQBEgPApBvQAUA3AGA7IgFAlQgGArABAgQABAgBhBsICcCtQA1A+gvA0QgSAUgbALQgUAIgPAAIgHAAg");
	this.shape_748.setTransform(33.6,-15);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f().s("#5B4431").ss(1.5).p("Ag+FIIAKADQAYAGAYgDQAZgEAQgPQADgDAFgHQAOgWgCgcIgEgXIgCgFIhYmVQgEgUATg6QAPgwANge");
	this.shape_749.setTransform(153.3,-5.8);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f().s("#5B4431").ss(2.1).p("ABkAuQgdgagngXQhNgwg2AK");
	this.shape_750.setTransform(74.4,-26.9);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f().s("#5B4431").ss(1.5).p("AEnCFIBLBBQBNBEAJAQQAGAJgigKQgjgKg0gYQiLhBhfhTQg1gvjZiNQirhvgVg1QgXg6gqAtIglA5");
	this.shape_751.setTransform(101.5,-1.3);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#493939").s().p("AjeCRQAJgaAJgQIgPAEQgnALhNALQhJAMgWAAIBVgwQBKgpARgHIAfgOQBNgjAWgfQAOgUAmgNIA/gOQAPgEA0gaQA0gaAbgFQAsgKA9AAQgJgfBjAhQBkAhgBANQhBAbhIAgQiOA/ggAZIAMgiQASgjAagOQgxAag4AfQhuBDgbAkIAMgaQAPgfAWgaQgqASgvAZQhfAzgcAnIAHgYg");
	this.shape_752.setTransform(110.5,-27.4);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f().s("#5B4431").ss(2.6).p("ACUizIALADQAJAEgRAJQgLAFheAFQhcAFgTAMQgXAPgdA5QgWAsgSAxQgLAgAVA/QAKAfANAY");
	this.shape_753.setTransform(156.8,-7.3);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#493939").s().p("ACuCqQgDgVgJgJQgJAbgHAFQgFADgBgGIgBgIQABgXgDgdQgHg6gXgfIgQgWQgYghgYgNQgWgOgigEIgQgGQgNgGgGAAIgKgEIgmgCQgNAAgpgHQgngGgXAAQAfgdAngTQAfgPAUgCQAQgBAIAEIAIgEQALgCATAFIAQAFIAYAHQANADAXABIApgXQAvgXAfADQAQACgCAMQhBAWgXAWQgRAQgEAKQgBAFACACIARACQAUACANgEIgDACIAEgDQAJgDAEgFQApgXAgAIQAEABAAACQglAHgPAMQgKAJgOAXIgMAVIARgBIgBACQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAIAIAHALIAIAMQAVAmgEAlIgRgdQAJAQAJAaQAOAsgEAZQgDAagIAMIgIAHQAAgIgBgKg");
	this.shape_754.setTransform(155.9,-22.6);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f().s("#222638").ss(0.5).p("AA2CEQgOgxgUg5Qgohyghgr");
	this.shape_755.setTransform(158.3,13.6);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#2D2724").s().p("AAOALIgMgGQgEgCgIgBQgMgCAEgGQAEgHAQAGQAOAEAEAIQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABIgDABIgCAAg");
	this.shape_756.setTransform(161.2,-10.5);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#443326").s().p("AiYCMQgmgWggglIgIgKIAAAAQgVgcgMgfQgMgcgCgaQgCgfADgWQAHguAbAKQAMAFADAKIAIApQAFAaARASQAGAGAdAWQATAMBjgDQBcgDAxgKQAjgIAPg6QALg+AHgMQAJgPAYgCQAWgBAXAJQAJAEAHAFQARANACBEQACAmgDBCQAAAghRAvIhRAnQgwAHg5ACIgUAAQhiAAgsgZg");
	this.shape_757.setTransform(22.3,-14.5);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#B7A598").s().p("AABCPQhEgHgYgSQgVgPABgiQABgKAIgsIALg0QAHgegCgTQgCgpA8gPQAdgHAoAVQgDAYACAcQACAbAMAdQAMAeAVAcIAJAKIAQA0IgjgRQAKAZgKAYQgFANgmAAQgPAAgSgCg");
	this.shape_758.setTransform(-6.7,-10.8);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#6D5341").s().p("AhSC+QjSgThCgXQhGgZgFh7QgCglAFg3QAEg0gBgIQgCgbAKgPQAGgHAFgCIB1AaQB4AdARAKQAxAcCEAOQBDAHA4ABIBXgfQBWgmAAggIA+COQA8CXgMA3QgIAjiLAIQgtACg0AAQh2AAiZgOg");
	this.shape_759.setTransform(17.1,4.5);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f().s("#5B4431").ss(2.6).p("ABdgwIALAKQAIALgOAFQg9AZgvASQhcAjgCgPQgCgQABgC");
	this.shape_760.setTransform(161.4,14.1);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#93745F").s().p("ABGESIgrg0QgagegGgPQgGgMgJglQgHgjgphkQgphjgTgiQgQgcA5gsQBEguAQgMQAwgogFBxIgHBbQgFAzADAMQAFAZAhBOIAzB7QARAtgFAMQgDAJgXAVQgKAMgKAAQgIAAgIgIg");
	this.shape_761.setTransform(-87,48.4);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#93745F").s().p("AmIEDQglgXAQgsQAKggAigkQATgcAHgHQAJgJArgDQAhgBASAaQAGAJAFgBQAGgCAPgSQARgWAOhuQANhuAlgsQBghyDNA8QBQAXBHAsQBEApAaAnQgjAJgtAWQhYAtgvBDQhOBxgsAtQhJBNg6gIIh6gWQhBgLgvAJQgcAFgiAVQgFADgGAAQgOAAgWgNg");
	this.shape_762.setTransform(-60.6,19.6);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#93745F").s().p("ABECUQgZgCgegKQghgMgEgNQgBgEgBgkQgBgggJgWQgIgWgbg4IgYgzQgHgNgBgKQgBgUAfAOQAeAOAegBQAOAAAIgDIAPAnQAOAsADAYQADAcAJAZQAIAZAMANQAdAhACANQABAMgIAKQgJANgSAAIgCAAg");
	this.shape_763.setTransform(114.3,102.5);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#93745F").s().p("AEDFtQgjgFgRgZIgYglIgKgRQg5gzhDg2QiFhugzgWQhIgeguhCQg3hQANhfQAMhWA4giQAdgSAaAAQBWANA/CkQAJAYAWBKQAKAfAWAZQATAWBWBnQBSBhAWAQQAcAVALAdQALAcAAAvQgBAlgeAAIgJgBg");
	this.shape_764.setTransform(84.4,56.8);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#93745F").s().p("AGZGcIifgCQibAAipgnQilglhFguQgzgkhJAEQhxAHgagEQl8g1gfiOQgVhiAGhJQAIhqBChEQBHhKBDgaQA5gWBxgHQBZgFCPAdQBIAPA2APQB3AYEEgVQCCgKBrgQIBLAHQBYAHA+gDQBOgDChBiQCmBlAJBBQALBIg4CYQg6Ceg+AvQhgBIisAOQgzAEhKAAIgfAAg");
	this.shape_765.setTransform(11,24.3);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#93745F").s().p("AjfFrQjJh6gmhIQgjhFAJiQQAIiLAcgLQAGgCAVgPQAPgMAvgMQBAgQAigMQAmgNAogVQArgWASgIQAWgJAhgHQBrgXAighQASgRAogFIBBgDQAQgBA4gQQA3gQAcgBQA0gBBBAMIAKAhQALAnAFAdQAEAegvCCQgYBCgYA7QglAQgoAVQhRApgTAVQhuB8gkAxQgJANgaBoQgZBngRAWQgEAGgMAAQgvAAighgg");
	this.shape_766.setTransform(104.2,11.5);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#93745F").s().p("AA7FUQgNgFgagsQgdgzgRgOQgbgYgXgiQgYgkgNgnQgLgigeACQgeAKgEAAQgFABgPgdQgRgjgJgmQgch1BBhMQBBhMA3gQQAbgIAPAIIAHgEQALgCASAFIAiAKQAQAEAbACIApgXQAvgXAfADQAfADgkAuIgqAtIAcgSQAjgQAbAHQALAEgTANQgeAVgLAPQgMATgFADIAXAeQAWAngFAmIgRgeIARApQAPAugDAZQgEAZgIAMIgIAHQABgIgCgKQgDgUgJgJQgIAagIAFQgFADgBgGIgBgHIgIAcQgFAlAMAmQAOApAGAyQAEArgCAWQgCASgFAHQgEAGgWARQgWASgeAIQgQAFgMAAQgLAAgIgEg");
	this.shape_767.setTransform(152.7,-7);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#493939").s().p("AmVHMQg6gEgpgMIAlgVIgsgHQBegSAxgXQAYgLAGgIQhfARhUgIQgrgDgXgIQAlgSAagVQA2gpgygJQgxgJgmAXQgLAHgIAIIAlgsQAcgigNgMIgTgFIhHA1QAQgjAighQBDhDBUAHQBZAHA7gMQAogIBlggQBQgWBqiQQBwipAmg5QA5hTCCgrQCAgqBNAjQA/AdAaApQANAVABAPQAECNhkgnQgfgMgmgdIgggbQguAIgiArQgpAzhSCiQhRCfiSCQQiECDhtAsQhAAbhTAAQgZAAgagDg");
	this.shape_768.setTransform(-120.9,31.1);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#93745F").s().p("ABHC4IgjgWQgagRgKgWQgIgQhLhaQhKhYgJgWQgNgdAdgjQAcghAaABQA+AAAQA0QAKAdAbBBQAZA7ARAhQAKAUAoAYQArAYAMATQASAbgyASQgcAJgQAAQgNAAgGgGg");
	this.shape_769.setTransform(-89,54.1);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#93745F").s().p("AB0ClQhjgChJglQgUgKhTgZQhHgVgXgTQgagWgagIIhPgTQg3gNANhIQAFgdAPgWQAQgXARgCQApgGAJABQAPACAmATQBCAgAYAKQA2AXAhAAQAcABAwgRQBeghApgMQAvgOBCAUQA9ATA3AmQA2AmATAmQAWApghAYQiFBkiYAAIgIAAg");
	this.shape_770.setTransform(-62.2,47.7);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#93745F").s().p("AAcEUQgcgFgTgbQgYggAKgsQAOg/ABgKQAEgigIg5QgLhYgIgiQgOg/gYgaQgNgOAEgSQAEgRAQgLQAogbAjApQAjAoAFAPQABAEAIBBQADAaAMCWQALCCAFAiQAIAugKANQgHAJgVAAQgMAAgRgDg");
	this.shape_771.setTransform(125.4,100.7);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#93745F").s().p("ADZEXQgmgOgagfQgVgYhjhVIh3hoQgXgbgLgMQgVgVg0gNQg7gQgUg5QgSg0AYguQAshUBVAhQAvASApAoQAGAHBUBCQBWBFARAZQALAQAlBPQAlBOAZAkQAdApgCAaIgQArQgGAOgRAAQgKAAgPgFg");
	this.shape_772.setTransform(100.8,56.8);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#493939").s().p("Ag/A+Qg3gBgWgIQgVgHAqguQAogtAagJQAYgHASADQATAEASAQQAPAOAIAAQAGgBAUgFQALgBAggVQAYgQAEANQAKAjgcAgQgeAkg1AHQgyAHg0AAIgGAAg");
	this.shape_773.setTransform(-87.1,74.3);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#493939").s().p("AADA8Qg5gDgdgFQg2gHACgSQABgVAgggQAfggAZgHQAugMA4AxQAZAVAKAAQAHgBAXgLQASgGgDAPQgGAeADAOQAHAigzAAIhWgIg");
	this.shape_774.setTransform(-92.9,71);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#493939").s().p("AAfBuQgPgCgUgRQgGgEgagOQgTgJgIgOQgJgRAJgTQAFgLAVgaQAPgUAFgMQAFgLAFgbQAEgUADAEQALAKAFAAQAVgBAPAKQAWAPgHAiQgHAegBAlQgBAvgCANQgEAZgRAAIgEgBg");
	this.shape_775.setTransform(125.7,129.9);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#493939").s().p("AAoBxQgIgFgsgPQgfgKgCgQQgCgQgFgRIgMggIgFgSIgDgjQgEgmArgXQAsgYAWArIgDAVQAAAaAIAYQAFAPARAbQALAUgBANQgBAMAEAnQAAARgMAAQgIAAgNgIg");
	this.shape_776.setTransform(119.7,124.9);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f().s("#AFAFAF").ss(1.5).p("AA3AcQARgKgOhIQgFgYgqAJQgoAJgXAdQgNARADARQACAOANAUQAPAXABACQANAQAJgH");
	this.shape_777.setTransform(19.4,51.7);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#2D1F15").s().p("AhgE7QgXgZgNgKQgWgRgphFQgrhJANgLQApgoA1g7QBVheAYgxQAeg/AWgZQAQgSA9gxQA1gqAfAMQAaAMAMA1QAHAhhDBMQgyA4g5AuQgxAogqAuQg4A9gOAoQgJAcAfA1QAdAygQAeQgIAOgKAAQgHAAgHgGg");
	this.shape_778.setTransform(34.3,34);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f().s("#5B4431").ss(2.1).p("AhyC8QAQAuAnglQAjggAqhUQAnhOAdhUQAdhYAAgs");
	this.shape_779.setTransform(36.5,27.6);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#222638").s().p("AAAAEIgBgBQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIgCgBIAAgBIAAgBIgCAAIgBgBIABgCQAGgCAIAKIAAAAIAAACIgCABIgGgCg");
	this.shape_780.setTransform(77.7,-97.4);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#443023").s().p("AgvAfQACgQAPg1IAlAFQAYADAVAFQgbAlgYAJQgkAOgQAEQADgFABgDg");
	this.shape_781.setTransform(65,-100.6);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#DDB294").s().p("AgTA0QgJgEgLgTQgMgVgLgHQgPgIACgOQABgNANgLIANAAQAQAAAMACQAIACANgIQANgHATAGQAWAGAIARQAEAKAIAYQAIASgsARQgfAMgQAAQgHAAgEgCg");
	this.shape_782.setTransform(61.4,-41.1);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#DDB294").s().p("AAJBUQgggFgQgUQgKgOAEgYQAGgigCgNQgDggABgIQADgNARgDQAPgDADACIAIAUQAGAKAMAFQAJAEAFAOQAQAsgFAxQgCAWgYAAIgLgBg");
	this.shape_783.setTransform(54.2,-29.7);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#DDB294").s().p("ABnCdQgegBgBgKQAAgFgNgUQgMgTgMgQIhMg9QhEg5gLgmQgNgtASgZQAQgXAZAJQAaAJAKAIQAFADAVAUQAOAPAbA2IAmBNQAHAOAZAiQAVAdAGAXQAGAagbAAIgCgBg");
	this.shape_784.setTransform(42.8,-47);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#9B4242").s().p("AhmDLQgLgRAWiKQAbiVAEghQAGgqAugZQAkgUAaAEIAJAEQANAIASAZQAUAbgLAoQgKAhgYAYQgoAqgYCPQgKBAgqATQgOAGgMAAQgSAAgLgPg");
	this.shape_785.setTransform(41.8,-69.5);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#9B4242").s().p("AidD8Qgeg9gWg4QgXg6gBgUQgBgaC2jVQAigpAXgTQAqghAjAHQAiAHAPAHIAHAEIgQgSIAXgHQAcgIAbgGQAoCcgGAQQgCADgTAUQgQARgDAVQgEAcguBXQguBZgYAWQgaAagoAhQgqAjgEgBQgXAQgYAHQgLAEgKAAQghAAgSgmg");
	this.shape_786.setTransform(37,-66.5);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#827B77").s().p("ABhA5QgvgdgigJIgYgGQgVgFgYgDIgmgFQgggFgVgJQgmgQgGgOQgHgPAggEQAtgFAoAKQAFgOAHgPQANgfANgGQANgFAxAQQAmAMAgAPQAPAGATAGQAKAFgFAQQgJAZgIAeIAZAVQAbAaAKAYQAOAkAAARQgsgmgxgfg");
	this.shape_787.setTransform(71.1,-104.5);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#DDB294").s().p("AiSA1IAUgOQAWgSAPgOQAQgMAGgJQAQgEAlgPQAXgJAbgmQgVgEgXgEIgmgFIAFgRIAvgfQA2gZAcAgQAVAYAcAcQAQAUgLAbIgDAGIgEASQgDATAEAQQADAKgFANQgFANgGgFIgJgHQADAYgFACIgLAHIgGAFIAAALIgHAIQgBAEgDAEQgGAIgJgCQgggIgVgUQgFgFgKAJIgZAXIgnAjg");
	this.shape_788.setTransform(66.6,-95.2);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#DDB294").s().p("AAKA5IgggKIgPgFIgdhlIAQAUQAUAVAQAIQANAHAoALQAhANgFATQgEAPgSADQgHACgHAAQgKAAgLgDg");
	this.shape_789.setTransform(51.5,-47.7);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#2D1F15").s().p("ACXGYQgegIiujMQirjIgfg6QgZguAVhdIAahTIAug6QA9g7BGgHQBEgIAcBzQAOA5AAA7IgJAkQgKArgDAgQgDAgBUB2ICIC9QAtBEg0AuQgUARgcAJQgRAFgMAAQgIAAgGgCg");
	this.shape_790.setTransform(31.5,-24.5);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f().s("#5B4431").ss(1.5).p("AiJEjIAJAGQAVAOAXAEQAaAFAUgKQAHgEAEgDQATgQAIgbIAtm6QACgTAkgyQAbgmAZgb");
	this.shape_791.setTransform(148.6,17.6);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f().s("#5B4431").ss(1.5).p("AEkDyIA0BWQA1BaAEASQADALgdgUQgegUgqgoQhwhphAhtQhEh0iSjHQiJi5hBhHQgqgugnA3QgMASgKAZQgFANgDAJ");
	this.shape_792.setTransform(94.8,3);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#493939").s().p("AhLBJQAZgZAcgSQgtAEg1AKQhqASgnAcIAOgUQARgXANgMIgOAAQgpgDhNgMQhJgMgVgHQAQgEBQgPQBTgPATgBIAhgEIAAAAQBVgLAegWQAUgPAoABQAXAAApAFQAQACA6gJQA5gIAbADQA0AGAzASQABggBUA+QBUA9gFANQhGAFhOAIQicAQgmAOIAXgdQAbgcAdgFQg3AJg+ANQh+AdgkAag");
	this.shape_793.setTransform(114.1,-16.4);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f().s("#5B4431").ss(2.6).p("AC2hxIAKAGQAHAHgSADQgMAChcgaQhYgYgWAGQgbAHgtAtQgiAigiArQgUAaAABBQAAAhAFAb");
	this.shape_794.setTransform(156.3,16.1);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#493939").s().p("ABMCfQgQAYgJACQgGACABgHIACgHQAIgVAGgdQAMg6gMgkIgJgcQgMglgSgUQgRgUgfgPIgOgLQgLgJgEgCIgJgHIgjgOQgOgEgkgTQgjgTgVgHQAmgSArgFQAjgFATAFQAQADAGAHIAIgBQAMABAQALIANAJIAVAPQAMAGAVAJIAugJQA0gHAdANQAOAGgGALQhCAAgfAOQgVAKgGAJIgCAHIAQAHQASAIANAAIgDACIAFgCQAJAAAFgEQAugKAcASIAEAEQgmgEgSAGQgNAGgUARIgRAQIAQAFIgBABQAAAAAAABQAAAAAAAAQAAAAABAAQAAgBABAAIAIAWIADAOQAJArgRAiIgFghIgBAAIABAAIADAuQgBAugKAXQgMAXgMAJIgJAFQALgfgJgUg");
	this.shape_795.setTransform(162.1,4.7);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f().s("#222638").ss(0.5).p("AAJCPQADgzgCg9QgDh5gRgz");
	this.shape_796.setTransform(149.8,37.5);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#2D2724").s().p("AALAOQgLgLgGgDQgPgGAGgGQAGgGAOALQAMAIAAAJQABABAAAAQgBABAAAAQAAABAAAAQgBABgBAAIgCABIgCgBg");
	this.shape_797.setTransform(160,15.5);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#443326").s().p("AgcClQhygRgrgkQgjgdgXgpIgHgLQghg/AGg5QAEgfAHgUQAPgtAZAPQAKAHABAKIABApQAAAbAOAUQAEAGAaAcQAQARBjAOQBbAMAxgDQAkgCAZg1QAOgcARgqQAMgNAXACQAWADAVANIAOALQAPAQgJBEQgGAkgOBCQgFAghYAfIhXAZQgwgBg3gIg");
	this.shape_798.setTransform(20.8,-25.4);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#B7A598").s().p("AgHCKQhDgSgVgWQgRgTAGghQACgJAQgqIAUgxQAMgdACgTQAEgqA+gDQAcgCAmAcQgGAUgEAfQgDAaAHAfQAHAgAQAfIAGAMIAIA1IgggWQAFAagNAWQgFAHgRAAQgTAAgjgKg");
	this.shape_799.setTransform(-11.1,-26.4);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#6D5341").s().p("AEDEBQiSgQjXg7QjMg3g8giQhCgkARh7QAFgkAOg2QAOgzAAgHQACgbANgNQAGgGAGgBIBvAuQBxAxAQANQArAkB/AkQBBATA3ALIBbgQQBbgXAGggIAkCWQAhChgVAzQgJAWhBAAQghAAgtgFg");
	this.shape_800.setTransform(10.1,-8.4);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f().s("#5B4431").ss(2.6).p("ABogUIAHANQAEAMgPABQhCAFgxACQhjAFADgPQACgOADgC");
	this.shape_801.setTransform(152.5,39.2);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#93745F").s().p("Ag/DsIgThBQgMgmgBgRQAAgNAGglQAHgjAChsQAChsgFgmQgDgeA5AEQBPAHAHgCQA9gSgkBOIgiBAQgUAlgCAMQgFAZgBBVIgCCFQgCAwgJAJQgHAHgcAKQgJAEgHAAQgMAAgHgOg");
	this.shape_802.setTransform(-111.2,45.3);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#93745F").s().p("AlqEgQgogSAJguQAHggAdgpQAPgeAGgIQAJgKApgIQAhgGAVAYQAHAIAFgCQAGgCAMgUQAPgYgBhvQgBhvAggwQBQh9DTAiQBTANBMAiQBIAhAeAjQghANgpAcQhSA3gmBJQg/B5gmAzQg/BVg7AAIh7gHQhDgDguAPQgbAJgeAZQgGAFgJAAQgNAAgTgJg");
	this.shape_803.setTransform(-72.8,7.9);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#93745F").s().p("AAmCCQgDgEgTgkQgQgggSgSQgTgTgygrIgugnQgMgKgGgKQgLgUAhgBQAhgCAZgRQAMgIAGgIIAgAhQAhAlAPAYQAQAbAVAVQATAUARAIIAeAPQAOAIAFAIQAHALgBAPQgCATgRAJQgWAMgfAFQgMADgJAAQgRAAgHgIg");
	this.shape_804.setTransform(104.3,110);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#93745F").s().p("ADMGMQghgLgNgbIgSgpIgHgSQgvg8g5hBQhwiDgvgfQhBgpgihKQgphYAehbQAahTA+gYQAggMAZAEQBSAbAhCtQAEAVALBRQAEAgASAdQAPAZBDB0QBABtATAVQAXAZAGAeQAHAdgJAuQgGAggXAAQgHAAgJgDg");
	this.shape_805.setTransform(72.3,63.8);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#93745F").s().p("AHbH7Qg9gGhdgRQhpgVg0gJQiYgaihhEQibhBg8g6QgtgrhIgIIhAgHQgpgEghgLQlsh2gGiQQgEhmAShFQAbhnBMg5QBSg8BHgOQA7gMByANQBZAKCIA1QBEAbAyAZQBxAsEEAYQCCAMBsADIAWAGQAjAHA9AIQBRALC9CKQDFCPgCBAQgCBJhSCNQhUCRhFAkQhTAqh6AAQgjAAgngDg");
	this.shape_806.setTransform(3,10.2);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#93745F").s().p("Aj6FqQgzgsg/hKQiaiygNhQQgOhbAFiPQAFiXAZgCQATgBA2AGQBIAJAlACIBuANQA6AHAkgGQAvgIAUgCQAXgBAiAEQBuALArgUQAWgLAnAIIA/ARQAPAEA7ACQA5ADAbAIQAxAPA7AgIgBAiQgDAogEAeQgFAdhWBtIhUBmQgoAFgtAHQhaAOgZAOQiPBUgwAjQgNAKg5BaQg4BbgXAPQgCACgEAAQgSAAgugog");
	this.shape_807.setTransform(100.5,21.8);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#93745F").s().p("Ag3FUQgfgCgPgMQgKgJgLgzQgNg5gLgTQgTgfgLgnQgMgrABgpQAAgjgdgGIgkgBQgEgBgGghQgFgmADgnQAKh4BWg1QBVg0A5ADQAcABALALIAIgBQAMACAQALIAeAUQAOAJAYAKIAvgJQA0gHAcAMQAcANgwAgIg3AdIAhgHQAmgFAXAPQAKAHgWAHQgjALgPALQgSANgFACIALAjQAJAsgQAiIgGggIADArQAAAvgLAYQgLAXgMAJIgKAEQALgfgIgTQgRAXgJADQgFABAAgGIACgHIgQAZQgRAgAAAoQAAAsgKAxQgJAqgJAUQgJARgFAFQgHAFgaAJQgWAJgaAAIgIAAg");
	this.shape_808.setTransform(156,17.8);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#493939").s().p("AnKHtIAjgYIgtgDQBdgbAugaIAcgWQhcAahVAAQgrAAgYgFQAjgWAYgXQAygugygFQgygEgjAaQgLAJgHAIIAggwQAZgkgOgKIgTgEIhCA8QANgkAeglQA9hIBVgBQBYgBA6gSICJg0QBNgeBdiZICBjvQAxhYB9g2QB8g2BPAcQBCAWAeAoQAPATACAPQARCMhogeQgggJgogZIgigYQgtAMgfAuQgkA3hCCoQhCCmiECdQh4CPhoA2QhQAph0ABIgGAAQg2AAgngIg");
	this.shape_809.setTransform(-131.3,8);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#93745F").s().p("AgGDbQgxgRgCgTIgOgnQgKgdAGgYQAEgSgDh0QgCh0AGgXQAHgeAtgJQAqgJAUARQAWASAIATQAJAXgKAdQgLAcgTBFQgQA8gJAmQgFAWASAsQASAtgCAXQgDAUgVAAQgMAAgRgGg");
	this.shape_810.setTransform(-111.2,45.3);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#93745F").s().p("AgJCkQgWgDhXABQhKABgbgLQgggOgbABIhSAFQg3ADgKhJQgEgdAIgZQAIgaAQgHQAmgSAIgBQAQgDApAHQBJALAaADQA7AFAegJQAcgIAogeQBSg+AigXQAogaBGgBQA/gBBAAUQA/AVAeAeQAhAigYAhQhkCJiWAsQhAATg5AAQgdAAgagFg");
	this.shape_811.setTransform(-78,19.5);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#93745F").s().p("ABGDpQgigUgHgsQgLg/gDgLQgJgggcgyQgthOgUgcQglg1gggPQgSgIgCgSQgDgRALgQQAagpAxAYQAvAYALAMQADAEAfA5IBRCdQA7B0ASAdQAZAogEAPQgFASguAKQgIACgHAAQgVAAgVgOg");
	this.shape_812.setTransform(109.6,112.1);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#93745F").s().p("ACrEzQgjgTgVgkQgQgbhThlIhjh6QgSgfgKgOQgQgYgxgWQg4gagJg8QgJg2AfgpQA6hLBPAvQAtAbAeAtQAGAIBHBQQBJBSAMAcQAIARAXBVQAXBTATAoQAVAugGAZQgBADgWAkQgHAKgMAAQgMAAgSgKg");
	this.shape_813.setTransform(87.4,74);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#493939").s().p("AAjA/Qg2gCg1gKQg2gKgVgLQgTgLAxgmQAvgmAbgEQAZgDASAGQASAHAOATQANARAIABIAagBQALABAkgQQAagMABAOQAEAjghAcQgiAcgwAAIgHAAg");
	this.shape_814.setTransform(-121.7,64.6);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#493939").s().p("ABMBNIhSgXQg4gNgcgJQgzgRAEgQQAFgUAlgbQAkgbAZgCQAwgEAvA5QAVAZAKABQAHABAZgGQATgDgGAOQgMAcABAPQABAcghAAIgSgCg");
	this.shape_815.setTransform(-127,61.1);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#493939").s().p("AAKBeQgHgDgcgHQgUgEgLgLQgNgNADgWQACgKANggQAKgYACgNQABgLgCgcQgBgUAFADQANAHAFgCQATgGARAGQAZAIACAjQABAfAJAkQALAtABAOQAEAbgVADIgFAAQgOAAgVgJg");
	this.shape_816.setTransform(121.6,141.8);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#493939").s().p("AAXByQgHgGgpgWQgdgQABgQQABgQgCgSIgGghQgDgRABgCIACgjQADgnAvgPQAvgPAOAuIgGAUQgFAaAEAYQADAQALAeQAIAVgDANQgDAMgDAnQgDAPgKAAQgIAAgNgMg");
	this.shape_817.setTransform(114.1,134.5);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("#5B4431").ss(2.1).p("ABwBuQgig3gtg3QhYhug3AB");
	this.shape_818.setTransform(76.3,-28.8);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f().s("#AFAFAF").ss(1.5).p("AA9AKQAMgPgpg/QgNgVgiAYQgkAYgKAjQgGAUAKAQQAHANAUANQAFADATAOQARAKAFgK");
	this.shape_819.setTransform(36.6,55.6);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#2D1F15").s().p("AAsFYQgegOgPgFQgagHhAgxQhDg0AHgPQAWguAehRQAsh2AEg3QAFhGALgfQAIgWAmhFQAhg6AmADQAhADAfAuQAeAth0DOQgeA3gXA7QgdBNACArQACAeAwAlQAtAjgEAjQgCAUgPAAIgKgCg");
	this.shape_820.setTransform(42,32.3);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f().s("#5B4431").ss(2.1).p("AgsDdQAgAlAWgxQAUgqAIhfQAIhWgFhZQgFhdgRgo");
	this.shape_821.setTransform(44.3,26.8);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#222638").s().p("AABAEIgBAAIAAAAIgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIgBAAIAAgBIgCgBIABAAIgCAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAHgDAJAHIABABIAAABIgBABIgDABIgEgBgAAHAEIAAAAIgCAAIACAAgAAHABIAAgBIgCAAIACABg");
	this.shape_822.setTransform(58.7,-106.3);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#443023").s().p("AgnAkQgDgTABg0IAmgFQAYgDAVgBQgQAsgVAOQgkAagKAFQADgGgBgDg");
	this.shape_823.setTransform(45.7,-105.5);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#DDB294").s().p("AgEA5QgJgCgQgQQgQgRgNgDQgRgFgCgOQgCgMAKgPIAMgDQAPgDANgCQAIAAALgLQAKgKAUAAQAWABANAOQAHAIAOAWQAMAOgmAdQgjAZgQAAIgDAAg");
	this.shape_824.setTransform(57.4,-47.8);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#DDB294").s().p("AgdBBQgNgMAAgZQAAgigDgMQgJgfAAgJQAAgNAQgGQAPgGACADQADACAKAPQAIAJALADQALADAHANQAWApAEAwQACAbgjABIgCAAQgeAAgTgRg");
	this.shape_825.setTransform(53.3,-38);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#DDB294").s().p("ABoB8QgBgFgSgQIghgbIhZgoQhRgkgUgjQgYgnAKgeQAKgbAbADQAbACAMAFIAfAQQATAKAmAsIA5BCQAKAMAhAaQAcAWAMAVQAOAXgdAHQgNADgIAAQgKAAgCgFg");
	this.shape_826.setTransform(38.5,-48.7);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#9B4242").s().p("AghDbQgQgNgOiLQgNiYgEggQgGgqAmgkQAfgdAZgCIAKAAQAOAFAYATQAbAWgBApQgBAigQAeQgdAyAPCRQAGBBgkAcQgSAOgOAAQgMAAgKgIg");
	this.shape_827.setTransform(30.1,-69.7);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#9B4242").s().p("AhOEoQgtgzgkgxQglgygGgTQgIgZB4j9QAXgwASgYQAggsAigCQAjgCARADIAIADIgVgOIAUgNIAygcQBPCMgCARQAAADgOAZQgLAUADAWQADAcgVBgQgWBhgRAcQgTAggeAqQggAtgEAAQgTAWgUANQgRALgPAAQgYAAgWgZg");
	this.shape_828.setTransform(26.6,-67);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#827B77").s().p("ABjA1QgygQgmgBIgZABQgVABgZADIgmAFQgdADgagDQgogGgKgMQgLgNAfgMQApgQAqAAQABgPACgRQAGghAKgIQALgJA1ACQAlACAlAGQAQADATAAQALADAAAQIgCA6IAeAOQAgASAQAUQAXAfAFARQg0gag4gQg");
	this.shape_829.setTransform(51.4,-113.7);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#DDB294").s().p("AiGBYIAPgTIAcgoQANgUACgHQAKgEAlgbQAVgPAPgsQgUABgZADIgmAFIAAgSIAngqQAtgmAjAXQAbASAiAUQAVAQgEAcIgBAHIAAASQACAUAJAOQAFAKgBAMQgCAOgGgDIgLgFQAJAXgFADQgDACgFAIIgFAGIADALIgEAKQAAAEgCAEQgEAJgKAAQgfACgbgOQgGgEgIALQgKASgIALIgcAtg");
	this.shape_830.setTransform(49.2,-101.1);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#DDB294").s().p("AgGAtIgQgBIg2hZIAUAOQAZAPASAEQANAEArAAQAjAEAAATQAAAPgRAIQgOAHgUABIgKAAIgXgBg");
	this.shape_831.setTransform(46,-50.8);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#2D1F15").s().p("AClGTQgfgHi2jDQi0jBgig4QgbgsARheIAWhVIAsg7QA6g+BFgKQBFgLAgByQARA4ACA7IgHAkQgIArgCAgQgBAgBZBzICQC3QAxBCgzAwQgTASgbAJQgSAGgOAAIgLgBg");
	this.shape_832.setTransform(29.5,-26.9);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f().s("#5B4431").ss(1.5).p("AhCFBQAJAEAnAEQAvAEAPgNIAIgKQAPgVAAgcIhIm1QgDgUAVg6QARgtAQge");
	this.shape_833.setTransform(151.9,7.3);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("#5B4431").ss(1.5).p("AD4D/QCUDHAIAcQADALgegTQgfgTgrgmQh1hjhFhqQgng8imk3QiOkKgrgqQgtgrgvA7QgPATgNAbIgLAX");
	this.shape_834.setTransform(99,-2.9,1,1,-8);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#493939").s().p("Aj5BOQAQgXANgMIgPAAQgogBhOgKQhJgKgVgGQAPgFBQgRQBSgSATgCIAhgEIAAAAQBUgOAegXQATgQApAAIA/ADQAQABA6gKQA5gLAbADQAeACAkAIIAlAKQABggBVA7QBXA7gFAMQhGAIhOAKQibAVglAQIAWgeQAagdAdgGQg3ALg9APQh9AhgkAbIATgWQAXgZAcgTQgtAGg0ALQhqAWglAdg");
	this.shape_835.setTransform(111.7,-19.8);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("#5B4431").ss(2.6).p("ACairIALADQAIAEgRAIQgLAFhfAAQhcAAgTAMQgYAOggA3QgYArgUAwQgNAgASA/QAJAfALAZ");
	this.shape_836.setTransform(158,6.3);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#493939").s().p("ACWCLQgLAbgHAFQgFADgCgHIAAgHQADgXgCgeQgEg6gVggIgQgXQgWgigWgPQgWgOgjgGQgBAAgNgHQgOgHgEAAIgLgFIgmgDQgNgBgpgJQgngIgWgBQAggcAogRQAggNAUgBIAAAAQAQgBAIAFIAIgDQALgCASAGIAQAGQARAGAHACQAOAEAWACIAqgVQAwgUAfAEQAPADgBAMQhCASgYAVQgTAPgEAKQgCAGACACIARADQAUACANgEIgDADIAFgDQAIgDAEgEQApgWAhAKQACABACACQgmAGgOALQgMAJgPAWIgMAUIARAAIgBACQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBABAAIAOATIAHANQATAngGAkIgPgeQAIARAHAbQAMAsgEAZQgFAagJAMIgIAGQADghgNgQg");
	this.shape_837.setTransform(158.1,-8.1);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("#222638").ss(0.5).p("AAvCHQgLgygSg6Qgih0gegt");
	this.shape_838.setTransform(158.2,27.3);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#2D2724").s().p("AAOAMIgLgGIgKgEQgPgCAEgHQAFgHAQAHQAOAFADAIQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABIgEABIgBAAg");
	this.shape_839.setTransform(162.2,3.3);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#443326").s().p("AgQChQhygKgtgiQglgcgZgmIgHgLQgSgfgIgfQgJgfACgaQABgeAGgVQAGgVAJgJQAKgJANAHQALAGACALIADApQABAbAPATQAFAGAcAaQAQAPBjAJQBbAHAzgFQAkgDAWg3IAahIQALgNAYABQAWAAAVANQAJAFAGAFQAQAPgGBEQgDAlgLBCQgDAghWAlIhWAdIgVABQgnAAgsgFg");
	this.shape_840.setTransform(20.6,-27.6);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#B7A598").s().p("AgFCMQhDgPgWgUQgTgSAFghQABgKAOgrIARgyQAKgcACgUQACgqA+gHQAagDApAZQgGAWgCAeQgDA4AkA+IAHAMIALA1IghgVQAGAagMAWQgEAJgVAAQgTAAgggHg");
	this.shape_841.setTransform(-10.4,-27.5);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#6D5341").s().p("AEMDyQiSgJjaguQjOgsg/gfQhDghAKh7QADglALg2QAKgzAAgIQABgcAMgNQAGgHAGgBIBxApQB0AqAQAMQAtAiCBAdQBCAPA4AIIBZgVQBbgbADggIAtCTQApCfgSA1QgJAbhbAAQgXAAgcgCg");
	this.shape_842.setTransform(11.7,-10.4);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f().s("#5B4431").ss(2.6).p("ABfgsIAKALQAIAMgPAEQg+AWgvAPQheAegBgPQgCgPACgC");
	this.shape_843.setTransform(161.2,28);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#93745F").s().p("AAtDOIgkgmQgVgXgFgMQgFgJgEgfQgFgcgdhPQgehQgPgaQgMgVA1gVQBJgeAFgFQAygmgKBIIgMA9QgIAkACAKQADAUAYA+IAlBiQAMAkgFAKQgEAIgYAVQgLAMgLAAQgGAAgGgFg");
	this.shape_844.setTransform(-85.8,32);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#93745F").s().p("Al2EGQgngagEhDQgEg/AcgbQAZgZAYgIQAZgIAyAAQAlAAAAgcQgBgrATgWQATgVARgtQARgrAogqQBmhtDJBHQBOAbBFAwQBCAtAYAnQgjAHguAUQhaAogzBBQhTBtgvArQhMBJg7gLIh4gcQhBgPgvAGQgpAGgFAfQgBAMgDAAIgCAAQgFAAgRgLg");
	this.shape_845.setTransform(-63.3,-4.3);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#93745F").s().p("AAVC8QgXAAgbgMQgdgNAAgRQAAgGAJguQAIgqgCgcQgBgdgJhHIgJhCQgDgQACgNQAFgaAZAQQAaARAbgDQAPgBAJgFIADAzQABA4gEAgQgFAkABAhQABAfAHARIANAgQAFAQgBAKQgDAQgKAOQgNARgRAAIgBAAg");
	this.shape_846.setTransform(60.6,128.6);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#93745F").s().p("AiUGYQgSgeAIgeIAUg8QAEhMAAhWQABisgQg2QgVhLAXhOQAchdBRgyQBJgtA/AXQAfALARAUQAtBKhZCZQgLAVgsBCQgSAagGAiIgeCgQgYB8ABAcQABAjgPAaQgPAbgkAdQgOALgMAAQgPAAgMgTg");
	this.shape_847.setTransform(69.2,75.7);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#93745F").s().p("AHKILQg9gIhcgUIicgiQiWggighIQiZhGg6g8QgrgthIgKQhvgRgagJQlpiCgBiQQgBhlAUhGQAfhmBOg2QBUg6BHgMQA8gKBxARQBYANCGA5QBDAdAyAbQBwAwECAgQCCAQBsAHIAWAGQAiAJA9AJQBRANC5CRQC/CVgEBAQgEBJhWCKQhZCPhGAhQhNAlhrAAQgtAAgzgHg");
	this.shape_848.setTransform(7.2,12.3);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#93745F").s().p("AjVFyQg1gqhDhHQihirgRhQQgXhvgKhZQgMh4AXgDIBagJQBJgGA1ABQAzABA4gOIBZgYQAugLAVgCQAXgCAiACQBvAGApgWQAVgMAoAGIBAAOQAPAEA7AAQA5gBAbAHQAyANA8AdIABAiQgBAogDAeQgDAehRBxIhQBpQgnAGgtAKQhZASgYAPQiKBZgwAnQgMAKg1BdQg0BdgWAQQgDACgEAAQgSAAgvgkg");
	this.shape_849.setTransform(101,15);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#93745F").s().p("AAgFRQgMgGgXguQgbg0gQgPQgagZgVgjQgXglgLgoQgJgjgeABIgjAIQgEABgOgeQgPgigIgoQgWh2BGhJQBEhJA3gMQAcgHAOAIIAIgDQALgCASAGIAiAMQAPAFAbADIAqgVQAxgUAeAEQAfAFgnAsIgsAqIAdgQQAjgOAbAIQALAFgTAMQgfATgMAPQgOARgEAEIAVAfQAUAogHAlIgPgeIAPApQANAvgFAZQgFAZgJAMIgIAGQADghgNgPQgKAagIAFQgFADgBgHIAAgHIgKAcQgHAkAKAnQAMAqADAyQADAqgEAXQgDASgFAGQgEAHgXAQQgYAQgdAHQgOADgLAAQgNAAgKgEg");
	this.shape_850.setTransform(154.5,7.1);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#493939").s().p("AmtIHIAhgaIgtAAQBbggAtgdIAbgXQhbAfhVAEQgqADgZgEQAigYAXgYQAvgxgygCQgzgCghAdQgLAJgGAJIAegyQAXgmgPgJIgTgCIg/A/QALglAcgmQA5hMBVgGQBZgFA4gVICGg8QBLgiBUieQBWi3Aeg+QAshaB6g+QB4g8BSAXQBCATAgAmQARATACAPQAZCKhpgYQgggIgqgXIgjgVQgsAOgcAwQgiA5g5CrQg5Cqh7CjQhwCWhlA7QhOAuhzAHIgoABQghAAgagEg");
	this.shape_851.setTransform(-129.2,13.4);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#93745F").s().p("AgmDXQgvgYAAgTIgHgpQgGgeAIgXQAHgRANhzQAMhzAJgWQAMgdAtgEQArgCASATQArAsgaAwQgPAagcBCQgYA4gOAmQgGAVAKAuQAMAwgFAWQgEARgQAAQgNAAgVgKg");
	this.shape_852.setTransform(-98.4,33.1);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#93745F").s().p("AjSCoQghgLgaABQgqAGgoAEQg4AHgNhJQgFgdAGgaQAGgbAQgIQAlgSAIgCQAPgEAqAEQBHAIAdAAQA6ACAfgKQAagJAnghQBMg/AjgbQAngdBGgEQA/gEBAARQBBAQAfAdQAjAggWAiQhdCPiTA0QhcAghTgIQgWgDhWAGIgsACQgnAAgTgHg");
	this.shape_853.setTransform(-56.3,17);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#93745F").s().p("ABSDlQgjgTgJgrQgPg+gDgLQgLgggfgwQgyhNgVgZQgogzgggNQgSgHgEgSQgDgRAKgRQAXgqAzAWQAwAVALALQAEAEAiA3IBZCYQBCBxATAcQAbAngDAPQgEASgtAMQgJADgKAAQgTAAgUgLg");
	this.shape_854.setTransform(115.7,110.1);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#93745F").s().p("AB5FMQgvhCgPgsQgJgahwhXQh0hZgKgTQgGgMANgYQAIgOAVggQAng+gogdQgyglAEg9QACg3AoghQBIg9BDA+QAlAjAVAzQADAJA3BdQA2BgAGAeQADASAGBYQAEBWAKArQAPBBADAzQAEA9gQARQgCADgFAAQgSAAgpg5g");
	this.shape_855.setTransform(87.2,62.9);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#493939").s().p("AhkBmQgWAAAYg6QAXg3AWgQQAggYAgAIQABAEAMAEQA2AVgzgYQgIgEgIgBQgBgEAIgEQAKgEAYgfQARgXAIALQAcApAGAgQAIAvgrAWQgxAYg0ASQgyAQgYAAIgBAAg");
	this.shape_856.setTransform(-87.3,50.6);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#493939").s().p("Ah+BFQgHgTARgrQAQgpAUgPQAngeBGAYQAfAKAJgEQAKgMANgLQAPgMADAPQAGAfAIAMQATAcgvAUIhSAYQg2ATgdAIQgXAGgOAAQgRAAgDgKg");
	this.shape_857.setTransform(-111.6,53.2);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#493939").s().p("AgQBaQgSgEgJgTQgFgLgHgiQgGgXgFgMQgGgLgRgVQgNgQAHgBQAOgCADgDQANgQASgFQAagIAUAcQASAZAcAaQAiAeAJAKQASAVgPAOQgMAKgaAFQgIABgbALQgOAGgLAAIgJgBg");
	this.shape_858.setTransform(134.1,135.5);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#493939").s().p("ABFBnQgJgCgwABQgfABgHgPQgIgPgLgOIgVgaIgMgQIgPgfQgQgjAhgkQAjglAiAiIAFAUQAIAZAPATQAKAMAZAVQASAOADANQADAMARAjQAHAWgVAAIgOgCg");
	this.shape_859.setTransform(66.8,147.4);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("#5B4431").ss(2.1).p("ACHCYQguhMg4hMQhxiWg2AF");
	this.shape_860.setTransform(75.9,-35);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f().s("#AFAFAF").ss(1.5).p("AA9AJQALgPgpg+QgNgVgiAZQgjAYgKAjQgGAUAKAQQAIANATAMQAGAEATANQARAKAFgK");
	this.shape_861.setTransform(34.4,64.1);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#2D1F15").s().p("AAuFpQgfgOgPgEQgagIhAgvQhEgzAHgPQATgrAehVQAqh3ADg3QAEhGALggQAHgVAlhGQAjhAAogSQApgTAcAoQAUAcgqB3QggBbgkBEQgeA2gWA9QgbBNADAqQACAeAwAlQAuAigEAjQgCAUgPAAIgJgBg");
	this.shape_862.setTransform(31,55,1,1,3.2,0,0,-8.7,16.8);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f().s("#5B4431").ss(2.1).p("AgrDeQAhAkAVgxQATgrAIheQAGhXgGhZQgHhcgRgo");
	this.shape_863.setTransform(41.8,35.2);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#222638").s().p("AAAAEIAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAAAIgCAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAAAIgCAAQgBAAAAAAQAAABAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAGgFAJAGIAAAAIAAAAIABAAIABAAIAAABIgBACIgGABIgBAAIgBAAg");
	this.shape_864.setTransform(60.1,-112.3);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#443023").s().p("AgaApQgDgHgKg+IAlgLQAWgIAVgEQgJAvgSAQIgoAoQACgHgCgEg");
	this.shape_865.setTransform(46.7,-109.3);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#DDB294").s().p("AgMA3QgKgDgNgSQgOgTgMgFQgQgHAAgOQAAgNALgNIANgBQAQgCANABQAIAAAMgJQALgJAUAEQAWAEAKAPQAGAKALAXQALAQgrAXQghARgQAAIgHAAg");
	this.shape_866.setTransform(65.8,-45);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#DDB294").s().p("AAKBUQgggEgQgUQgLgNADgZQAFghgCgNQgFggACgJQACgNARgEQAPgDACADQADACAHARQAGAJAMAFQAKAEAFAOQARArgDAyQgBAXgbAAIgJgBg");
	this.shape_867.setTransform(60.3,-35.9);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#DDB294").s().p("ABYCJQgBgFgPgTQgOgQgPgPIhTg0QhKgvgQglQgSgqAOgcQAOgZAaAGQAbAGALAGIAcAVQARANAgAxIAvBIQAJAOAdAfQAYAaAJAVQAKAagdACIgMABQgTAAgBgIg");
	this.shape_868.setTransform(46.9,-48.6);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#9B4242").s().p("AAQDeQgQgLgliHQgmiSgKgfQgMgpAfgqQAagiAZgHIAKgBQAOACAbAQQAeAQAGApQAFAigMAgQgTA3AmCMQAQA/geAiQgSAUgSAAQgJAAgJgFg");
	this.shape_869.setTransform(36.5,-71.4);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#9B4242").s().p("AgYE4Qg1grgrgqQgtgrgJgSQgMgWBMkOQAOgzAOgcQAYgwAkgIQAggIASABIAJABIgYgKIASgQQAWgTAWgRQBmB9AAARQAAAEgJAaQgHAWAGAVQAIAbgGBiQgFBkgMAeQgNAigXAvQgYAygFAAQgOAZgTAQQgSARgUAAQgTAAgVgSg");
	this.shape_870.setTransform(34.5,-69);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#827B77").s().p("AjNBLQgNgLAcgRQAmgYApgHQgCgPAAgQQAAghAJgKQAKgLA0gGQAngFAjAAQARAAATgDQALABACARIAIA5IAfAIQAkANASARQATARAKAOQAHAJAAADQg4gRg6gHQg1gHgkAFIgZAFQgUAEgYAIIglALQgcAIgaABIgJAAQghAAgKgJg");
	this.shape_871.setTransform(52.6,-119.7);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#DDB294").s().p("Ah+BtQAUgkANgeQAHgPAEgOIAogmQASgSAJguQgUAEgYAHIglALIgDgRIAfgxQAngsAmARQAdANAlAOQAXAMABAcIAAAHIADASQAGAUALAMQAHAJAAANQABANgHgBIgMgDQAOAUgFAEIgKASIAFAKIgDAKIgBAJQgCAKgJACQghAGgbgKQgGgCgGAMIgOAgQgLAYgJAYg");
	this.shape_872.setTransform(52.4,-105.5);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#DDB294").s().p("AASA1IgggGIgQgEIgqhgIATARQAXATARAGQANAGApAFQAiAJgDAUQgCAPgRAGQgKAEgOAAIgLgBg");
	this.shape_873.setTransform(55,-50);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#2D1F15").s().p("ABtGhQgdgMiRjiQiPjcgXg+QgTgwAhhaIAlhPIA2gzQBDgzBFACQBGACANB2QAGA6gIA7IgOAiQgPApgHAfQgHAfBDCBIBuDNQAkBKg6AmQgWAPgdAEIgTACQgOAAgKgEg");
	this.shape_874.setTransform(34.4,-26.3);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f().s("#5B4431").ss(1.5).p("AhSE+QACABA/AJQBAAGAOgOQAGgGACgDQAPgVgBgcIhPm1QgEgTAVg6QAQgtAQgg");
	this.shape_875.setTransform(150.7,11.6);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("#5B4431").ss(1.5).p("AENDxQCIClAIAdQAEALglgTQgmgUgzglQiLhkhHhoQgshBiHkHQh0jfgqgjQgwgpg7A4QgTARgSAYIgOAW");
	this.shape_876.setTransform(101.9,-0.7);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#493939").s().p("Aj4BRQAQgXAMgNIgOABQgogBhOgJQhKgIgVgGQAQgFBPgSQBRgTATgDIAhgFIABAAQBTgOAegZQATgPAogCIBAADQAQAAA5gLQA5gLAcACQAdACAlAHIAlAJQAAggBWA6QBYA5gFANQhGAIhNAMQibAYglAQIAWgeQAZgdAbgHQg1AMg9AQQh8AjgjAcIASgWQAXgaAcgTQgtAGg1AMQhpAYglAdg");
	this.shape_877.setTransform(111.3,-14.7);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("#5B4431").ss(2.6).p("ACYiuIALADQAIAFgQAIQgLAFhfABQhcACgTAMQgYAOgfA4QgXAqgUAyQgMAfATA/QAJAgAMAZ");
	this.shape_878.setTransform(157.9,10.6);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#493939").s().p("ACZCLQgJAbgIAFQgFADgBgGIAAgIQACgXgCgdQgGg7gVgfIgRgXQgWghgXgPQgWgOghgFIgQgHQgOgGgEgBIgLgEIgmgDQgNgBgpgIQgngHgWgBQAggdAogRQAggOATgBQAQgBAIAFIAIgEQALgCASAGIAQAGQAcAJAgAEIAqgWQAwgVAfAEQAPACgCAMQhCAVgXAUQgSAPgEALQgCAFACACIARADQAVACANgEIgDADIAEgEQAHgCAFgFQAqgWAgAJQACABACACQgnAHgNAKQgLAJgPAXIgMAUIARAAIAAACQgBAAAAAAQAAABABAAQAAgBAAAAQABAAAAgBQAGAGAJANIAGANQAUAmgGAlIgPgeQAJASAHAZQANAtgEAZQgFAZgIAMIgIAHQACghgOgQg");
	this.shape_879.setTransform(157.7,-4.1);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("#222638").ss(0.5).p("AAxCGQgLgygTg5Qgkh0gfgs");
	this.shape_880.setTransform(158.6,31.6);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#2D2724").s().p("AAOALIgLgGQgGgDgFAAQgPgCAFgHQAFgHAPAGQAPAFADAJQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIgDACIgCgBg");
	this.shape_881.setTransform(162.2,7.6);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#443326").s().p("AgiCmQhxgUgqglQgjgfgWgoQgDgFgDgGIAAAAQgfhBAHg4QAEgdAIgWQAQgtAYARQALAGABALIgBApQAAAbANAVQAEAGAaAcQAPARBiAQQBaAPAzgCQAkgBAag0QAOgcATgpQALgNAYADQAWADAUAOQAJAGAFAFQAPAQgMBEQgGAkgQBCQgGAfhYAdIhYAXQgwgCg3gKg");
	this.shape_882.setTransform(29.4,-31.4);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#B7A598").s().p("AgJCJQhCgUgUgWQgRgTAHgiQADgMAQgmIAWgxQAMgfACgQQAGgpA9gDQAdgBAlAdQgHAVgEAeQgIA5AfA/IAAABIAGALIAHA2IgfgXQAEAagOAWQgEAHgQAAQgTAAglgMg");
	this.shape_883.setTransform(-2.7,-32.9);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#6D5341").s().p("AD+EIQiRgUjVhAQjKg9g8gjQhBgnAUh5QAGglAPg1QAPgyABgIQADgbANgMQAGgGAGgBIBuAxQBwA0APANQAqAlB/AoQBAAUA3AMIBbgOQBcgUAGgfIAhCWQAcCigWAzQgJAUg5AAQgjAAg0gHg");
	this.shape_884.setTransform(18,-14.4);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f().s("#5B4431").ss(2.6).p("ABfgtIAKAKQAHAMgOAEQg9AXgwAQQhdAggCgPQgBgQABgB");
	this.shape_885.setTransform(161.6,32.2);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#93745F").s().p("ABkCcQgfgEgMgGQgJgFgXgVQgVgThIgtQhHgtgdgLQgWgIAdgxQAnhFACgHQAPg9AkA+IAdA4QAQAhAHAHQAPAOA5AiIBaA2QAfAVACALQACAJgGAfQgCAagUABIg0gJg");
	this.shape_886.setTransform(-55.7,25.6);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#93745F").s().p("AjdFmQgrguAEgmQAEgjANgWQAOgWAnggQAfgagLg4IgMgxQgGgeABgUQACg3AMgzQAPg9AfhDQA+iEB9gQQBTgLB3AqIgtBIQgtBZADBSQAECJgIA+QgNBpg0AdIhuA3Qg8AeggAjQgcAeAQAbQAGAKgBACQgDAFgXACIgIAAQgrAAgpgtg");
	this.shape_887.setTransform(-66.2,-10.9);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#93745F").s().p("AgfC+QgXgHgVgTQgZgVAGgQIAYgvQATgmAHgcQAHgcAMhHIALhBQACgRAGgMQALgXATAXQAUAXAcAGQAOADALgCIgNAxQgPA3gNAdQgQAigIAeQgIAfACASIACAiQABARgFAKQgGAOgOAKQgMAKgNAAQgFAAgFgCg");
	this.shape_888.setTransform(21.9,125.7);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#93745F").s().p("AkGFjQgIgiARgaIAmgzQAbhHAbhSQA2ikACg3QAChOAvhDQA3hRBcgVQBUgUA1ApQAaAUAJAYQAUBViDB2QgRAPg/AyQgZAUgQAdQgNAahBB1Qg9BwgIAaQgKAhgWAVQgXAVgrAQQgLAEgJAAQgWAAgGgcg");
	this.shape_889.setTransform(46.4,78.6);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#93745F").s().p("AH/KDQgxgNhFgrQhQg2grgaQhMguhAgTQiNgqiphrQiZhgg5hFQgogwhGgRIhAgNQgngJgggPQldicAKiRQAHhlAahEQAmhjBSgwQBZgzBIgGQA8gFBvAZQBXAUCCBFQBAAiAvAeQBsA4D/A1QCBAbBqAPIAWAIQAhALA8APQBPAUCtCeQCzCkgJBAQgLBNh9DLQiFDWhGAbQgiANgkAAQgaAAgcgHg");
	this.shape_890.setTransform(12.5,14.9);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#93745F").s().p("AjcF1Qg2gohEhGQilipgRhPQgRhKAtiLQAsiEAdgDQAHgBAYgKQARgHAxABQBBAAAkgDQApgDArgKQAvgLAUgDQAXgDAjACQBuAEAogXQAWgMAoAGIA/ANQAQADA7gBQA5gBAbAGQAyAMA9AcIABAiQAAAogDAeQgDAehOByIhOBrIhUARQhZAUgYAQQiIBbgwAnQgMAKgzBfQgzBdgVARQgDACgFAAQgSAAgugkg");
	this.shape_891.setTransform(102.6,20.2);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#93745F").s().p("AApFSQgNgGgZguQgbgzgQgPQgagZgWgiQgXglgMgoQgKgigeABIgiAJQgEABgOgeQgRgigIgnQgXh2BEhKQBDhKA3gOQAcgHAOAIIAIgDQALgCARAGIAiALQAQAFAbADIAqgWQAwgWAfAFQAeAEglAsIgsArIAdgQQAjgPAbAIQAKAEgTAMQgeAUgMAPQgNASgEAEIAVAeQAVAogHAlIgPgdIAPApQAOAugEAZQgFAZgJAMIgIAHQADghgOgPQgJAZgIAFQgFAEgBgHIAAgHIgJAcQgHAkALAnQAMAqAEAyQAEArgEAVQgDATgEAGQgFAHgWAQQgXARgdAHQgPAEgMAAQgMAAgJgEg");
	this.shape_892.setTransform(154.3,11.3);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#493939").s().p("AncGAQg5gNgmgSIAogPIgrgOQBggDA0gPQAZgIAHgGQhgAChTgUQgpgKgWgLQAngNAdgQQA8ghgwgQQgwgRgoASQgNAFgJAHIArgnQAhgegLgNIgSgIIhOAqQAVggAngcQBMg4BSATQBXAVA8gDQApgCBpgQQBSgLB/h+QBGhGBwiDQBEhJCHgXQCFgXBHAuQA6AmAUAtQAKAXgCAPQgRCMhdg2QgdgRghgiIgcgfQguABgpAlQgxAthoCTQhoCSilB4QiYBuhxAbQgnAKgrAAQg3AAg/gQg");
	this.shape_893.setTransform(-121.1,-18.1);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#93745F").s().p("ABdCtIglgRQgcgOgOgUQgKgQhVhOQhWhNgNgUQgQgbAYgmQAXglAagDQA9gJAXAyQANAbAkA9QAhA0AWAhQANATArARQAuATAOARQAVAYgvAZQggAQgRAAQgIAAgFgEg");
	this.shape_894.setTransform(-72.9,26.6);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#93745F").s().p("AkGFGQgWgTgLgYQgMgZAIgRQARgmAFgGQAKgNAjgWQA/goAVgPQAvgiARgbQAQgYAKgxQAWhlALgnQAMguAzgvQAwgqA9gbQA9gaArADQAvAEADAoQAQCrhUCEQg1BShHAsQgSALhBA6Qg2AygcAJQghALgUASQgOANgsAtQgSARgUAAQgbAAgegbg");
	this.shape_895.setTransform(-48.7,-0.9);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#93745F").s().p("AAACyQgVgTAFghQAHgvAAgIQABgYgKgnQgRhAgHgUQgQgqgWgOQgLgIACgOQACgMAMgKQAfgbAgAXQAfAXAFAJQACAEAKAsQAFAUATBmQASBbAHAXQAKAggHAKQgIAMgnACIgFAAQgVAAgPgOg");
	this.shape_896.setTransform(77.5,126);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#93745F").s().p("Ag1FiQgghHAAgpQAAgegfiCQghiNgCgOQgBgPAIgSIASghQAVgsgZgrQgfgzATg4QASgyApgSQBNghBVAlQAeANAXATQAUAQAAAIQABAKgdCXQgfCggDAXQgCASgUBWQgTBRgDAsQgGBDgLAwQgOA7gQAKIgFABQgSAAgdg/g");
	this.shape_897.setTransform(76,81.7);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#493939").s().p("AhhA5QAOg6AUgTQARgSASgGQANgEANABQgCgDAGgFQAJgGATgjQAOgZAJAKQAjAkALAfQAPAsgnAdQgtAggvAZQgxAZgXAEIgCAAQgTAAANg6g");
	this.shape_898.setTransform(-52.2,43.8);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#493939").s().p("AgMCKQgUgHgYgmQgZgmAAgZQgBgwA8grQAagUACgJQgEgQgBgRQgBgTAOAHQAcANAOABQAjABgLAyQgHAbgWA1IgbBTQgSAtgPAAIgDAAg");
	this.shape_899.setTransform(-66,46.6);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#493939").s().p("AgYBaQgSgFgHgUQgEgLgEgjQgEgYgEgMQgFgLgPgXQgMgRAHAAQAOAAAEgDQAOgQARgDQAbgFARAdQARAaAaAcQAgAhAIALQAQAWgQANQgNAJgbADQgIABgbAIQgLAEgLAAQgHAAgGgCg");
	this.shape_900.setTransform(86.6,146.8);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#493939").s().p("AAbByQgHgGgqgVQgdgOAAgQQABgQgEgSIgHggIgDgUIABgjQABgmAvgRQAugRAQAtIgFAVQgEAZAFAZQADAPANAeQAJAVgDANQgDAMgBAnQgDAPgKAAQgIAAgNgLg");
	this.shape_901.setTransform(19.7,148.6);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f().s("#5B4431").ss(2.1).p("ACaCXQg3hMhChLQiEiXg2AF");
	this.shape_902.setTransform(82.4,-31.5);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#2D1F15").s().p("AAqFqQgfgOgOgEQgbgIhAgvQhEgzAHgPQATgrAehVQAqh3ADg3QAEhGALggQAHgVAmhGQAihAAsgUQAugUAcAoQATAcguB5QghBWgnBKQgeA2gWA9QgbBNADAqQACAeAwAlQAuAigEAjQgCAUgPAAIgJgBg");
	this.shape_903.setTransform(28.9,54.7,1,1,2,0,0,-8.9,15.7);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#93745F").s().p("AjWEhQgWgUgLgYQgLgZAHgQQARgmAFgGQAKgNAkgXQA/gnAUgPQAwgjARgbQAPgXALgxQAVhmAKgmQANgvAkgeQAhgbApgGQApgFAcASQAfAUAEAoQAQCugiBLQgSApg3AiQgTAMhAA6Qg4AxgbAKQggALgVASQgOAMgrAuQgSARgVAAQgaAAgfgbg");
	this.shape_904.setTransform(-52.2,15.2,1,1,-7.5);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f().s("#5B4431").ss(1.5).p("AhgE5QAiAKA2AFQBEAGAPgOQAGgGACgDQAOgVAAgcIhQm1QgDgTAUg6QAQgtAQgg");
	this.shape_905.setTransform(150.9,-6.3,1,1,-7.5);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f().s("#5B4431").ss(1.5).p("ADUDBIA6BTQA7BWAGASQADALgegSQgfgTgsglQh3hihHhpQg2hShVi8QhMirgdgfQgqgugyAlQgQAMgPATIgLAQ");
	this.shape_906.setTransform(106.7,-7.6,1,1,-7.5);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#93745F").s().p("AjzFmQgWgeAFgoQAEgkANgVQAOgWAnghQAfgZgLg5IgMgxQgGgeABgTQACg3AMg0QAPg8AfhDQA+iEB9gRQBTgLB3AqIgtBIQgtBZADBSQAECJgIA/QgNBpg0AdIhuA2Qg8AeggAjQgbAdgHAPQgBABgpAEIgJABQgnAAgXggg");
	this.shape_907.setTransform(-65.9,-1.8,1,1,-7.5);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f().s("#5B4431").ss(2.1).p("AB+BQQgqgpgzgnQhnhRg3AF");
	this.shape_908.setTransform(89.4,-38.2,1,1,-7.5);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f().s("#AFAFAF").ss(1.5).p("AA+AJQAGgJgMgcQgJgXgOgWQgOgUgiAYQgjAYgJAkQgNAtAgAVQAcATABAAQAVAMAFgK");
	this.shape_909.setTransform(33.8,67.6,1,1,-6.7);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#2D1F15").s().p("AAvFxQgegOgQgEQgagHhAgwQhDgyAGgQQAUgqAdhVQAqh4AEg2QAEhGALggQAHgWAkhFQAmhFAkgZQApgcAbAmQAUAdgpCCQgiBsghA9QgeA3gWA8QgbBOADAqQACAdAwAlQAvAjgEAiQgDAVgPAAIgJgCg");
	this.shape_910.setTransform(30.2,63.9,1,1,-3.2,0,0,-8.5,22.2);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f().s("#5B4431").ss(2.1).p("Ag/DjQAhAkAegzQAagsAShgQAQhZAChaQABhegRgo");
	this.shape_911.setTransform(39.8,36.9,1,1,-6.7);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#93745F").s().p("Aj/EiQgKg9ATgpQARgmAFgGQAKgNAjgXQA/gnAVgPQAvgjARgaQAQgYAKgxQAVhmALgmQAMgvAlgeQAhgbApgGQAogFAdASQAfAUAEAoQAQCugiBMQgSAog4AiQgSAMhBA6Qg3AxgbAKQgsAOg3AgQg/AlgoAnQgOAOgKAAQgTAAgHgqg");
	this.shape_912.setTransform(-52.1,30.3,1,1,-14.2);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f().s("#5B4431").ss(1.5).p("AhnE1QBXATADABQAYAHAXgCQAagDAQgPQAGgGACgEQAPgVgBgcIhPm0QgEgUAVg6QAQgtAQgf");
	this.shape_913.setTransform(147.1,-15.9,1,1,-14.2);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f().s("#5B4431").ss(1.5).p("ADYDDIA9BRQA9BUAGASQADALgegTQgfgTgsgkQh3hihHhpQg1hQhbi3QhRilgggmQgpgwg2AnQgQAMgQATIgNAR");
	this.shape_914.setTransform(102.3,-12,1,1,-14.2);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#93745F").s().p("AkcF+QgWgfAFgoQADgeAdgcIBEg3QAigcAMhMQAFgeAEhbQACg3ANg0QAOg8AfhDQA+iEB+gRQBTgLB2AqIgtBIQgsBZACBSQAFCJgIA/QgOBpg0AdIhvA2Qg6AeghAjQgrAvgfAUQgmAZguAEIgJAAQgnAAgXgfg");
	this.shape_915.setTransform(-71.1,16.7,1,1,-14.2);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#93745F").s().p("AKnHuQgygBhOgYQhbghgwgPQhVgahDgCQiUgGi9g+Qirg4hJg1QgyglhJACIhAACQgpABgigGQl5hDgaiPQgShiAIhJQANhqBEhCQBJhHBFgYQA5gTBygDQBZgCCOAjQBHARA1ARQB3AcEEgLQCDgGBrgLIAXACQAjADA+AAQBRgBDPBvQDWB0AHBAQAIBOhIDiQhMDwg9AsQg0AkhBAAIgCAAg");
	this.shape_916.setTransform(12.7,20.8);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f().s("#5B4431").ss(2.1).p("ABkBKQgcgmgngkQhOhJg2AF");
	this.shape_917.setTransform(80.2,-39.5,1,1,-14.2);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#2D1F15").s().p("AAvFxQgfgOgPgEQgagIhAgvQhEgzAHgPQATgrAehVQAqh3ADg3QAEhGALggQAHgVAlhGQAlhEAlgZQAqgbAbAmQAUAdgqCBQgiBrghA+QgeA2gWA9QgbBNADAqQACAeAwAlQAuAigEAjQgCAUgPAAIgJgBg");
	this.shape_918.setTransform(31.4,68.8,0.973,0.973,-8.9,0,0,-9,21.3);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#93745F").s().p("AjpFCQgQgSgHgXQgHgZAJgQQAMgxAKgZQASgsAkgVQA/gnAVgPQAvgjARgaQAQgYAKgxQAVhmALgmQAMgvAlgeQAhgbApgGQAogFAdASQAfAUAEAoQAQCugiBMQgSAog4AiQgjAUhCAaIhcAiQgqANgrAxQgqAygSA5QgJAcgSACIgBAAQgPAAgPgRg");
	this.shape_919.setTransform(-44.6,38.4,0.973,0.973,-33.6,0,0,10.4,-9.9);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#93745F").s().p("ABsCTQgfgFgMgGQgJgEgXgVIhdhXQhMhEgYgKQgZgJgBgPQAAgFAJglQAQhABEA2QAkAcAwA4QAOAPA6AhIBaA3QAfAUACAMQACAJgGAeQgCAbgUAAIg0gIg");
	this.shape_920.setTransform(-45,90.6,0.973,0.973,-0.7,0,0,-10.1,-5.9);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#493939").s().p("AgQBfQgmgvgEgcQgDgXAHgSQADgMAKgKQgEgBABgJQAAgKgQgkQgLgbANgBQAygFAeAKQAtAPgBAxQgCA3gKA1QgJA1gMAVQgDAGgFAAQgOAAgbgjg");
	this.shape_921.setTransform(-22.5,108.2,0.973,0.973,-35,0,0,-0.2,-6.7);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f().s("#5B4431").ss(1.5).p("AhmE7QARAFBEAGQBUAIAOgNQAGgGACgEQAPgVgBgcIhPm0QgEgUAVg6QAQgtAQgf");
	this.shape_922.setTransform(138.1,-18.1,0.973,0.973,-19.4);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f().s("#5B4431").ss(2.1).p("AB9B0Qgpg7gzg5Qhnh0g2AF");
	this.shape_923.setTransform(62.3,-34.3,0.973,0.973,-19.4);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f().s("#5B4431").ss(1.5).p("AEPDcIA9BSQA+BVAFASQAEALgegTQgggTgsgkQh2hihHhpQgHgLizkeQh3i+gvgqQgvgqg7A3QgTASgRAZIgOAV");
	this.shape_924.setTransform(89.5,-10.9,0.973,0.973,-19.4);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#93745F").s().p("AloF1QgJgTAJgrQAAgfAdgbIBIg3IBohgQBGhIACgpQACg3AMg0QAPg8AfhDQA9iEB+gRQBTgLB3AqIgtBIQgtBZADBSQAECJgIA/QgNBpg0AdQgjATiWALQiJAKgcAfQgyA2gbAVQgqAggoAEIgMABQgmAAgLgYg");
	this.shape_925.setTransform(-76.2,33.5,0.973,0.973,-19.4);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#93745F").s().p("AIxHOQjEgohpgEQiggHjLgwQjNgwhBgwQg1gnhSgNQgvgHhpgMQksg2gaiVQgShiAIhJQAMhqBFhCQBJhHBEgYQA5gTBygDQBagCCOAjQBHARA1ARQB2AcEEgLQCEgGBrgLIAWACQAjADA/AAQBRgBDOBvQDWB0AHBAQAJBOg+DEQhCDRg9ArQhEAvhsAAQgmAAgrgGg");
	this.shape_926.setTransform(11.4,27.1,0.973,0.973,-5.2);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#93745F").s().p("ABmDAIglgRQgcgOgOgUQgKgQhfhdQhfhbgNgUQgQgbAegrQAdgpAbgEQAYgDARAMQAQALAOAeQANAbAuBMQApBCAXAiQANATArARQAuATAOARQAVAYgvAZQggAQgRAAQgIAAgFgEg");
	this.shape_927.setTransform(-88.5,90.9,0.973,0.973,34);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#93745F").s().p("Ag2FiQgghHAAgpQAAgkgLiFQgLh7gFgoIAFg6QADgigagsQgfgzATg4QASgyApgSQBNghBVAlQAeANAXATQAUAQAAAIQABAKgdCXQgfCggDAXQgCASgUBWQgTBRgDAsQgGBDgLAwQgOA7gQAKIgFABQgSAAgdg/g");
	this.shape_928.setTransform(102.8,61.7,0.973,0.973,-52.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{rotation:0,x:-11.7,y:119.6}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{rotation:0,x:-37.7,y:59}},{t:this.shape_35,p:{rotation:0,x:-34.4,y:97.4}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{scaleX:0.938,scaleY:0.938,rotation:0,x:142.7,y:-42.9}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{scaleX:0.938,scaleY:0.938,rotation:0,x:44.6,y:-41.5}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{scaleX:0.938,scaleY:0.938,rotation:0,x:37.2,y:-40}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{scaleX:0.938,scaleY:0.938,rotation:0,x:43.9,y:51.6}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67,p:{rotation:1.7,x:157.4,y:-16.5,scaleX:0.937}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_19,p:{scaleX:0.937,scaleY:0.937,rotation:1.7,x:144.3,y:-38.9}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_12,p:{scaleX:0.937,scaleY:0.937,rotation:-2.7,x:46.2,y:-39.3}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{scaleX:0.937,scaleY:0.937,rotation:1.2,x:24.1,y:-94.5}},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94,p:{scaleX:0.935,scaleY:0.936,rotation:2.5,x:48.6,y:23.6}},{t:this.shape_93},{t:this.shape_12,p:{scaleX:0.935,scaleY:0.936,rotation:-5.7,x:46.7,y:-38.5}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_7,p:{scaleX:0.935,scaleY:0.936,rotation:-5.7,x:39.4,y:-36.3}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_3,p:{scaleX:0.935,scaleY:0.936,rotation:2.5,x:41.8,y:54.5}},{t:this.shape_45,p:{scaleX:0.935,scaleY:0.936,rotation:2.5,x:25.7,y:-94.1}},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_165,p:{x:52.4,y:94.5}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144,p:{scaleX:0.937,scaleY:0.937,rotation:5.7,x:156,y:-11.1}},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137,p:{scaleX:0.937,scaleY:0.937,rotation:2,x:49.4,y:23.4}},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191,p:{scaleX:0.936,scaleY:0.936,rotation:8.2,x:158.6,y:-6.3}},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_144,p:{scaleX:0.936,scaleY:0.936,rotation:8.2,x:155.7,y:-6.1}},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183,p:{scaleX:0.936,scaleY:0.936,rotation:8.2,x:102.9,y:-14.9}},{t:this.shape_182,p:{scaleX:0.936,scaleY:0.936,rotation:8.2,x:72.4,y:-35.5}},{t:this.shape_181},{t:this.shape_180,p:{scaleX:0.936,scaleY:0.936,rotation:5.4,x:45.9,y:26.4}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172,p:{scaleX:0.936,scaleY:0.936,rotation:-7.5,x:58.9,y:-23.7}},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_144,p:{scaleX:0.937,scaleY:0.937,rotation:5.7,x:155.8,y:-11}},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_165,p:{x:94.3,y:90.7}},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282,p:{regX:49.7,regY:-43.3,scaleY:0.96,rotation:-1.5,x:-64.5,y:-8.5}},{t:this.shape_281},{t:this.shape_280,p:{scaleX:0.937,rotation:4.6,x:92,y:-17}},{t:this.shape_279},{t:this.shape_67,p:{rotation:4.6,x:158.1,y:-14.4,scaleX:0.937}},{t:this.shape_278,p:{x:19.8}},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275,p:{scaleX:0.937,rotation:4.6,x:151.9,y:-36.7}},{t:this.shape_274,p:{scaleX:0.937,rotation:4.6,x:155.3,y:-14}},{t:this.shape_273},{t:this.shape_272,p:{scaleX:0.937,rotation:4.6,x:146.1,y:-37.4}},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{scaleX:0.937,rotation:4.6,x:101.9,y:-19.5}},{t:this.shape_264,p:{scaleX:0.937,rotation:4.6,x:70.2,y:-38.2}},{t:this.shape_263},{t:this.shape_94,p:{scaleX:0.937,scaleY:0.937,rotation:3.7,x:47.1,y:22.4}},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259,p:{rotation:3.7,x:32.9,y:-105.3}},{t:this.shape_258},{t:this.shape_257,p:{rotation:3.7,x:23.4,y:-61.1}},{t:this.shape_256},{t:this.shape_255,p:{rotation:5.5,x:53.4,y:-25.1}},{t:this.shape_254,p:{rotation:5.5,x:59.2,y:-36.3}},{t:this.shape_253,p:{rotation:3.7,x:44.1,y:32.6}},{t:this.shape_252,p:{rotation:3.7,x:39.6,y:53.1}},{t:this.shape_251,p:{rotation:3.7,x:26.7,y:-96}},{t:this.shape_250,p:{rotation:3.7,x:39.1,y:-97.7}},{t:this.shape_249,p:{rotation:3.7,x:39.4,y:-97.9}}]},1).to({state:[{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_282,p:{regX:48.8,regY:-42.3,scaleY:0.957,rotation:-0.9,x:-65.3,y:-7.6}},{t:this.shape_305},{t:this.shape_280,p:{scaleX:0.936,rotation:3.2,x:91.1,y:-17.7}},{t:this.shape_304},{t:this.shape_67,p:{rotation:3.2,x:157.2,y:-16.8,scaleX:0.936}},{t:this.shape_278,p:{x:19.9}},{t:this.shape_303},{t:this.shape_276},{t:this.shape_275,p:{scaleX:0.936,rotation:3.2,x:150.5,y:-39}},{t:this.shape_274,p:{scaleX:0.936,rotation:3.2,x:154.4,y:-16.4}},{t:this.shape_302},{t:this.shape_272,p:{scaleX:0.936,rotation:3.2,x:144.6,y:-39.5}},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_265,p:{scaleX:0.936,rotation:3.2,x:100.9,y:-20.5}},{t:this.shape_264,p:{scaleX:0.936,rotation:3.2,x:68.8,y:-38.3}},{t:this.shape_295},{t:this.shape_94,p:{scaleX:0.937,scaleY:0.937,rotation:3,x:47.8,y:21.5}},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_259,p:{rotation:3,x:31.9,y:-105.9}},{t:this.shape_291},{t:this.shape_257,p:{rotation:3,x:23,y:-61.6}},{t:this.shape_290},{t:this.shape_255,p:{rotation:3,x:53.3,y:-25.8}},{t:this.shape_254,p:{rotation:3,x:58.5,y:-37.2}},{t:this.shape_253,p:{rotation:3,x:44.9,y:31.8}},{t:this.shape_252,p:{rotation:3,x:40.7,y:52.4}},{t:this.shape_251,p:{rotation:3,x:25.8,y:-96.5}},{t:this.shape_250,p:{rotation:3,x:38.2,y:-98.4}},{t:this.shape_249,p:{rotation:3,x:38.5,y:-98.6}}]},1).to({state:[{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_191,p:{scaleX:0.937,scaleY:0.937,rotation:1.7,x:156.6,y:-19.4}},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_144,p:{scaleX:0.937,scaleY:0.937,rotation:1.7,x:153.8,y:-18.9}},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_183,p:{scaleX:0.937,scaleY:0.937,rotation:1.7,x:100.3,y:-21.6}},{t:this.shape_182,p:{scaleX:0.937,scaleY:0.937,rotation:1.7,x:67.7,y:-38.6}},{t:this.shape_326,p:{scaleX:0.937,scaleY:0.937,rotation:1.7,x:145.5,y:-34.1}},{t:this.shape_180,p:{scaleX:0.937,scaleY:0.937,rotation:2.2,x:48,y:21.3}},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_172,p:{scaleX:0.937,scaleY:0.937,rotation:2.2,x:50.6,y:-26.5}},{t:this.shape_318,p:{scaleX:0.937,scaleY:0.937,rotation:2.2,x:55.8,y:-37.9}},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313}]},1).to({state:[{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_191,p:{scaleX:0.936,scaleY:0.936,rotation:0,x:156.5,y:-21}},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_39,p:{rotation:-16,x:-15.3,y:113}},{t:this.shape_36,p:{rotation:12.7,x:-43.1,y:59.1}},{t:this.shape_35,p:{rotation:-7.4,x:-41.1,y:94.4}},{t:this.shape_363},{t:this.shape_182,p:{scaleX:0.936,scaleY:0.936,rotation:0,x:67.1,y:-37.6}},{t:this.shape_326,p:{scaleX:0.936,scaleY:0.936,rotation:0,x:145,y:-35.3}},{t:this.shape_137,p:{scaleX:0.936,scaleY:0.936,rotation:0,x:49.6,y:20.3}},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_318,p:{scaleX:0.936,scaleY:0.936,rotation:0,x:55.1,y:-37.4}},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350}]},1).to({state:[{t:this.shape_427},{t:this.shape_426,p:{scaleX:0.963,scaleY:0.963,rotation:-8,x:23.9,y:138.4}},{t:this.shape_425,p:{regX:2.9,regY:-3.3,scaleX:0.963,scaleY:0.963,rotation:-96,x:145.8,y:107.3}},{t:this.shape_424,p:{scaleX:0.963,scaleY:0.963,rotation:75.4,x:-107.5,y:135.3}},{t:this.shape_423,p:{scaleX:0.963,scaleY:0.963,rotation:15.5,x:-15.5,y:139.1}},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420,p:{scaleX:0.963,scaleY:0.963,rotation:35.3,x:-34.3,y:70.7}},{t:this.shape_419,p:{scaleX:0.963,scaleY:0.963,rotation:15.5,x:-29.4,y:115}},{t:this.shape_418,p:{regY:-30.8,scaleX:0.963,scaleY:0.963,rotation:3.8,x:-59.6,y:20.3,regX:60.7}},{t:this.shape_417,p:{scaleX:0.963,scaleY:0.963,rotation:0.4,x:150.9,y:-17.4}},{t:this.shape_416,p:{scaleX:0.963,scaleY:0.963,rotation:6.6,x:105.2,y:-1.3}},{t:this.shape_415},{t:this.shape_414,p:{scaleX:0.963,scaleY:0.963,rotation:21.7,x:62.3,y:75.9}},{t:this.shape_413,p:{scaleX:0.963,scaleY:0.963,rotation:-8,x:40.1,y:120.9}},{t:this.shape_412,p:{scaleX:0.963,scaleY:0.963,rotation:50.2,x:-59.9,y:56.9}},{t:this.shape_411,p:{scaleX:0.963,scaleY:0.963,rotation:75.4,x:-94.3,y:109}},{t:this.shape_410,p:{scaleX:0.963,scaleY:0.963,rotation:0.4,x:164,y:3.5}},{t:this.shape_409,p:{scaleX:0.963,scaleY:0.963,rotation:15,x:28.2,y:14}},{t:this.shape_408,p:{scaleX:0.963,scaleY:0.963,rotation:15,x:4.4,y:4.3}},{t:this.shape_407,p:{scaleX:0.963,scaleY:0.963,rotation:15,x:30.2,y:-6.1}},{t:this.shape_406,p:{scaleX:0.963,scaleY:0.963,rotation:0.4,x:159.3,y:-19.8}},{t:this.shape_405,p:{scaleX:0.963,scaleY:0.963,rotation:0.4,x:161.1,y:3.6}},{t:this.shape_404,p:{scaleX:0.963,scaleY:0.963,rotation:0.4,x:151.6,y:-33.3}},{t:this.shape_403,p:{scaleX:0.963,scaleY:0.963,rotation:0.4,x:153.6,y:-18.2}},{t:this.shape_402,p:{scaleX:0.963,scaleY:0.963,rotation:6.6,x:111.7,y:-28.6}},{t:this.shape_401},{t:this.shape_400,p:{scaleX:0.963,scaleY:0.963,rotation:0.4,x:154.3,y:-13.5}},{t:this.shape_399,p:{scaleX:0.963,scaleY:0.963,x:56.5,y:37.8,rotation:-1.7}},{t:this.shape_398,p:{scaleX:0.963,scaleY:0.963,x:37.6,y:-2.6,rotation:-1.7}},{t:this.shape_397,p:{scaleX:0.963,scaleY:0.963,x:53.4,y:-38.2,rotation:-1.7}},{t:this.shape_396,p:{scaleX:0.963,scaleY:0.963,x:55.6,y:-80,rotation:-1.7}},{t:this.shape_395,p:{scaleX:0.963,scaleY:0.963,x:59.5,y:-89.5,rotation:-1.7}},{t:this.shape_394,p:{scaleX:0.963,scaleY:0.963,x:37,y:-48.7,rotation:-1.7}},{t:this.shape_393,p:{scaleX:0.963,scaleY:0.963,x:39.2,y:-51.2,rotation:-1.7}},{t:this.shape_392,p:{scaleX:0.963,scaleY:0.963,x:46.5,y:-35.7,rotation:-1.7}},{t:this.shape_391,p:{scaleX:0.963,scaleY:0.963,x:62.1,y:-23.5,rotation:-1.7}},{t:this.shape_390,p:{scaleX:0.963,scaleY:0.963,x:64.7,y:-36.3,rotation:-1.7}},{t:this.shape_389,p:{scaleX:0.963,scaleY:0.963,x:54.4,y:48.4,rotation:-1.7}},{t:this.shape_388,p:{scaleX:0.963,scaleY:0.963,x:52.2,y:69.9,rotation:-1.7}},{t:this.shape_387,p:{scaleX:0.963,scaleY:0.963,x:53.7,y:-85,rotation:-1.7}},{t:this.shape_386,p:{scaleX:0.963,scaleY:0.963,x:34.8,y:-84.1,rotation:-1.7}},{t:this.shape_385,p:{scaleX:0.963,scaleY:0.963,x:66.2,y:-82.8,rotation:-1.7}}]},1).to({state:[{t:this.shape_432},{t:this.shape_426,p:{scaleX:0.95,scaleY:0.95,rotation:-2.5,x:24.5,y:126}},{t:this.shape_425,p:{regX:3,regY:-3.2,scaleX:0.95,scaleY:0.95,rotation:-92.1,x:124.1,y:100}},{t:this.shape_424,p:{scaleX:0.95,scaleY:0.95,rotation:70.8,x:-96.6,y:136.5}},{t:this.shape_423,p:{scaleX:0.95,scaleY:0.95,rotation:15.7,x:-8.3,y:136}},{t:this.shape_431,p:{scaleX:0.95,scaleY:0.95,rotation:2,x:84.7,y:53.5}},{t:this.shape_430,p:{scaleX:0.95,scaleY:0.95,rotation:-67.6,x:118.3,y:84}},{t:this.shape_420,p:{scaleX:0.95,scaleY:0.95,rotation:25.2,x:-31.7,y:67.9}},{t:this.shape_419,p:{scaleX:0.95,scaleY:0.95,rotation:15.7,x:-22,y:112.2}},{t:this.shape_418,p:{regY:-30.7,scaleX:0.95,scaleY:0.95,rotation:3,x:-59.3,y:17.2,regX:60.7}},{t:this.shape_417,p:{scaleX:0.95,scaleY:0.95,rotation:-0.4,x:147.9,y:-23}},{t:this.shape_416,p:{scaleX:0.95,scaleY:0.95,rotation:5.8,x:103.1,y:-6.5}},{t:this.shape_429,p:{scaleX:0.95,scaleY:0.95,rotation:14.3,x:21.5,y:24.1}},{t:this.shape_414,p:{scaleX:0.95,scaleY:0.95,rotation:15.7,x:61.7,y:66}},{t:this.shape_413,p:{scaleX:0.95,scaleY:0.95,rotation:-2.5,x:42,y:110.3}},{t:this.shape_412,p:{scaleX:0.95,scaleY:0.95,rotation:42.4,x:-57.4,y:54.5}},{t:this.shape_411,p:{scaleX:0.95,scaleY:0.95,rotation:70.8,x:-85.7,y:109.6}},{t:this.shape_410,p:{scaleX:0.95,scaleY:0.95,rotation:-0.4,x:161.1,y:-2.6}},{t:this.shape_409,p:{scaleX:0.95,scaleY:0.95,rotation:14.3,x:27.3,y:9.7}},{t:this.shape_408,p:{scaleX:0.95,scaleY:0.95,rotation:14.3,x:3.6,y:0.4}},{t:this.shape_407,p:{scaleX:0.95,scaleY:0.95,rotation:14.3,x:28.9,y:-10.2}},{t:this.shape_406,p:{scaleX:0.95,scaleY:0.95,rotation:-0.4,x:156.1,y:-25.5}},{t:this.shape_405,p:{scaleX:0.95,scaleY:0.95,rotation:-0.4,x:158.2,y:-2.4}},{t:this.shape_404,p:{scaleX:0.95,scaleY:0.95,rotation:-0.4,x:148.4,y:-38.8}},{t:this.shape_403,p:{scaleX:0.95,scaleY:0.95,rotation:-0.4,x:150.6,y:-23.9}},{t:this.shape_402,p:{scaleX:0.95,scaleY:0.95,rotation:5.8,x:109.1,y:-33.5}},{t:this.shape_428},{t:this.shape_400,p:{scaleX:0.95,scaleY:0.95,rotation:-0.4,x:151.3,y:-19.2}},{t:this.shape_399,p:{scaleX:0.95,scaleY:0.95,x:53.9,y:30.7,rotation:-1.7}},{t:this.shape_398,p:{scaleX:0.95,scaleY:0.95,x:35.3,y:-9.2,rotation:-1.7}},{t:this.shape_397,p:{scaleX:0.95,scaleY:0.95,x:50.9,y:-44.2,rotation:-1.7}},{t:this.shape_396,p:{scaleX:0.95,scaleY:0.95,x:53,y:-85.5,rotation:-1.7}},{t:this.shape_395,p:{scaleX:0.95,scaleY:0.95,x:56.8,y:-94.9,rotation:-1.7}},{t:this.shape_394,p:{scaleX:0.95,scaleY:0.95,x:34.7,y:-54.6,rotation:-1.7}},{t:this.shape_393,p:{scaleX:0.95,scaleY:0.95,x:36.8,y:-57.1,rotation:-1.7}},{t:this.shape_392,p:{scaleX:0.95,scaleY:0.95,x:44,y:-41.8,rotation:-1.7}},{t:this.shape_391,p:{scaleX:0.95,scaleY:0.95,x:59.4,y:-29.8,rotation:-1.7}},{t:this.shape_390,p:{scaleX:0.95,scaleY:0.95,x:62,y:-42.4,rotation:-1.7}},{t:this.shape_389,p:{scaleX:0.95,scaleY:0.95,x:51.9,y:41.2,rotation:-1.7}},{t:this.shape_388,p:{scaleX:0.95,scaleY:0.95,x:49.7,y:62.4,rotation:-1.7}},{t:this.shape_387,p:{scaleX:0.95,scaleY:0.95,x:51.2,y:-90.5,rotation:-1.7}},{t:this.shape_386,p:{scaleX:0.95,scaleY:0.95,x:32.5,y:-89.6,rotation:-1.7}},{t:this.shape_385,p:{scaleX:0.95,scaleY:0.95,x:63.4,y:-88.3,rotation:-1.7}}]},3).to({state:[{t:this.shape_426,p:{scaleX:0.937,scaleY:0.937,rotation:-5.2,x:21.2,y:123.8}},{t:this.shape_425,p:{regX:3,regY:-3.2,scaleX:0.937,scaleY:0.937,rotation:-78.1,x:99.3,y:105.9}},{t:this.shape_424,p:{scaleX:0.937,scaleY:0.937,rotation:63.6,x:-85,y:136.4}},{t:this.shape_423,p:{scaleX:0.937,scaleY:0.937,rotation:20.7,x:-5.4,y:133.2}},{t:this.shape_431,p:{scaleX:0.937,scaleY:0.937,rotation:16,x:74.6,y:52}},{t:this.shape_430,p:{scaleX:0.937,scaleY:0.937,rotation:-53.7,x:97.4,y:89.1}},{t:this.shape_420,p:{scaleX:0.937,scaleY:0.937,rotation:16,x:-30.1,y:64.8}},{t:this.shape_419,p:{scaleX:0.937,scaleY:0.937,rotation:20.7,x:-16.8,y:108.6}},{t:this.shape_418,p:{regY:-30.6,scaleX:0.937,scaleY:0.937,rotation:4.8,x:-59.3,y:12.8,regX:60.7}},{t:this.shape_417,p:{scaleX:0.937,scaleY:0.937,rotation:13,x:149,y:-14.2}},{t:this.shape_435,p:{scaleX:0.937,scaleY:0.937,rotation:13,x:102.9,y:-5.1}},{t:this.shape_429,p:{scaleX:0.937,scaleY:0.937,rotation:16,x:20,y:22}},{t:this.shape_414,p:{scaleX:0.937,scaleY:0.937,rotation:13,x:55.1,y:63.2}},{t:this.shape_413,p:{scaleX:0.937,scaleY:0.937,rotation:-5.2,x:37.7,y:107.5}},{t:this.shape_412,p:{scaleX:0.937,scaleY:0.937,rotation:35.2,x:-56.9,y:51.3}},{t:this.shape_411,p:{scaleX:0.937,scaleY:0.937,rotation:63.6,x:-77.6,y:108.6}},{t:this.shape_410,p:{scaleX:0.937,scaleY:0.937,rotation:13,x:157,y:8.4}},{t:this.shape_409,p:{scaleX:0.937,scaleY:0.937,rotation:16,x:26.1,y:7.9}},{t:this.shape_408,p:{scaleX:0.937,scaleY:0.937,rotation:16,x:3.1,y:-1.9}},{t:this.shape_407,p:{scaleX:0.937,scaleY:0.937,rotation:16,x:28.3,y:-11.7}},{t:this.shape_406,p:{scaleX:0.937,scaleY:0.937,rotation:13,x:157.5,y:-14.7}},{t:this.shape_405,p:{scaleX:0.937,scaleY:0.937,rotation:13,x:154.2,y:7.9}},{t:this.shape_404,p:{scaleX:0.937,scaleY:0.937,rotation:13,x:153.1,y:-29.2}},{t:this.shape_403,p:{scaleX:0.937,scaleY:0.937,rotation:13,x:151.8,y:-14.4}},{t:this.shape_402,p:{scaleX:0.937,scaleY:0.937,rotation:13,x:112.1,y:-30.7}},{t:this.shape_434},{t:this.shape_433},{t:this.shape_400,p:{scaleX:0.937,scaleY:0.937,rotation:13,x:151.4,y:-9.8}},{t:this.shape_399,p:{scaleX:0.937,scaleY:0.937,x:52.3,y:28.8,rotation:0}},{t:this.shape_398,p:{scaleX:0.937,scaleY:0.937,x:35.1,y:-11,rotation:0}},{t:this.shape_397,p:{scaleX:0.937,scaleY:0.937,x:51.5,y:-45.1,rotation:0}},{t:this.shape_396,p:{scaleX:0.937,scaleY:0.937,x:54.8,y:-85.7,rotation:0}},{t:this.shape_395,p:{scaleX:0.937,scaleY:0.937,x:58.9,y:-94.8,rotation:0}},{t:this.shape_394,p:{scaleX:0.937,scaleY:0.937,x:35.9,y:-55.8,rotation:0}},{t:this.shape_393,p:{scaleX:0.937,scaleY:0.937,x:38,y:-58.2,rotation:0}},{t:this.shape_392,p:{scaleX:0.937,scaleY:0.937,x:44.7,y:-42.9,rotation:0}},{t:this.shape_391,p:{scaleX:0.937,scaleY:0.937,x:59.5,y:-30.6,rotation:0}},{t:this.shape_390,p:{scaleX:0.937,scaleY:0.937,x:62.4,y:-42.9,rotation:0}},{t:this.shape_389,p:{scaleX:0.937,scaleY:0.937,x:49.9,y:39.1,rotation:0}},{t:this.shape_388,p:{scaleX:0.937,scaleY:0.937,x:47.1,y:60,rotation:0}},{t:this.shape_387,p:{scaleX:0.937,scaleY:0.937,x:53.2,y:-90.6,rotation:0}},{t:this.shape_386,p:{scaleX:0.937,scaleY:0.937,x:34.7,y:-90.3,rotation:0}},{t:this.shape_385,p:{scaleX:0.937,scaleY:0.937,x:65.2,y:-88.2,rotation:0}}]},3).to({state:[{t:this.shape_426,p:{scaleX:0.959,scaleY:0.959,rotation:-5.3,x:30,y:107.9}},{t:this.shape_425,p:{regX:3.1,regY:-3.1,scaleX:0.959,scaleY:0.959,rotation:-64.2,x:95,y:85.2}},{t:this.shape_424,p:{scaleX:0.959,scaleY:0.959,rotation:51.3,x:-54,y:145.9}},{t:this.shape_423,p:{scaleX:0.959,scaleY:0.959,rotation:22.7,x:12,y:133.1}},{t:this.shape_431,p:{scaleX:0.959,scaleY:0.959,rotation:6.2,x:73.6,y:34.4}},{t:this.shape_430,p:{scaleX:0.959,scaleY:0.959,rotation:-39.7,x:97.2,y:68.1}},{t:this.shape_420,p:{scaleX:0.959,scaleY:0.959,rotation:6.2,x:-16.7,y:63.4}},{t:this.shape_419,p:{scaleX:0.959,scaleY:0.959,rotation:22.7,x:1.3,y:107.5}},{t:this.shape_418,p:{regY:0,scaleX:0.959,scaleY:0.959,rotation:6.2,x:-116.4,y:38.8,regX:0}},{t:this.shape_417,p:{scaleX:0.959,scaleY:0.959,rotation:6.2,x:150.6,y:-43.1}},{t:this.shape_435,p:{scaleX:0.959,scaleY:0.959,rotation:6.2,x:104.8,y:-28.3}},{t:this.shape_429,p:{scaleX:0.959,scaleY:0.959,rotation:6.2,x:26.5,y:11.5}},{t:this.shape_414,p:{scaleX:0.959,scaleY:0.959,rotation:13,x:64.7,y:45.7}},{t:this.shape_413,p:{scaleX:0.959,scaleY:0.959,rotation:-5.3,x:46.9,y:91.2}},{t:this.shape_412,p:{scaleX:0.959,scaleY:0.959,rotation:22.9,x:-44.4,y:54.6}},{t:this.shape_411,p:{scaleX:0.959,scaleY:0.959,rotation:51.3,x:-52.7,y:116.5}},{t:this.shape_410,p:{scaleX:0.959,scaleY:0.959,rotation:6.2,x:161.4,y:-21.1}},{t:this.shape_409,p:{scaleX:0.959,scaleY:0.959,rotation:6.2,x:30.2,y:-3.7}},{t:this.shape_408,p:{scaleX:0.959,scaleY:0.959,rotation:6.2,x:5.2,y:-9.6}},{t:this.shape_407,p:{scaleX:0.959,scaleY:0.959,rotation:6.2,x:29,y:-23.9}},{t:this.shape_406,p:{scaleX:0.959,scaleY:0.959,rotation:6.2,x:159.1,y:-44.6}},{t:this.shape_405,p:{scaleX:0.959,scaleY:0.959,rotation:6.2,x:158.5,y:-21.2}},{t:this.shape_404,p:{scaleX:0.959,scaleY:0.959,rotation:6.2,x:152.9,y:-58.9}},{t:this.shape_403,p:{scaleX:0.959,scaleY:0.959,rotation:6.2,x:153.4,y:-43.7}},{t:this.shape_402,p:{scaleX:0.959,scaleY:0.959,rotation:6.2,x:111.1,y:-55.4}},{t:this.shape_437},{t:this.shape_436},{t:this.shape_400,p:{scaleX:0.959,scaleY:0.959,rotation:6.2,x:153.5,y:-38.9}},{t:this.shape_399,p:{scaleX:0.959,scaleY:0.959,x:51.4,y:14.3,rotation:0}},{t:this.shape_398,p:{scaleX:0.959,scaleY:0.959,x:33.8,y:-26.5,rotation:0}},{t:this.shape_397,p:{scaleX:0.959,scaleY:0.959,x:50.6,y:-61.4,rotation:0}},{t:this.shape_396,p:{scaleX:0.959,scaleY:0.959,x:54,y:-102.9,rotation:0}},{t:this.shape_395,p:{scaleX:0.959,scaleY:0.959,x:58.2,y:-112.3,rotation:0}},{t:this.shape_394,p:{scaleX:0.959,scaleY:0.959,x:34.6,y:-72.3,rotation:0}},{t:this.shape_393,p:{scaleX:0.959,scaleY:0.959,x:36.8,y:-74.8,rotation:0}},{t:this.shape_392,p:{scaleX:0.959,scaleY:0.959,x:43.6,y:-59.2,rotation:0}},{t:this.shape_391,p:{scaleX:0.959,scaleY:0.959,x:58.8,y:-46.5,rotation:0}},{t:this.shape_390,p:{scaleX:0.959,scaleY:0.959,x:61.8,y:-59.2,rotation:0}},{t:this.shape_389,p:{scaleX:0.959,scaleY:0.959,x:49,y:24.9,rotation:0}},{t:this.shape_388,p:{scaleX:0.959,scaleY:0.959,x:46.1,y:46.2,rotation:0}},{t:this.shape_387,p:{scaleX:0.959,scaleY:0.959,x:52.3,y:-108,rotation:0}},{t:this.shape_386,p:{scaleX:0.959,scaleY:0.959,x:33.5,y:-107.7,rotation:0}},{t:this.shape_385,p:{scaleX:0.959,scaleY:0.959,x:64.6,y:-105.5,rotation:0}}]},3).to({state:[{t:this.shape_440},{t:this.shape_426,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:44,y:105.7}},{t:this.shape_425,p:{regX:0,regY:0,scaleX:0.962,scaleY:0.962,rotation:0,x:75.7,y:74}},{t:this.shape_424,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:14.9,y:146.7}},{t:this.shape_423,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:36,y:132.4}},{t:this.shape_431,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:75.1,y:32.7}},{t:this.shape_430,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:91.3,y:59.2}},{t:this.shape_420,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:-11.8,y:71.4}},{t:this.shape_419,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:16.1,y:112.9}},{t:this.shape_418,p:{regY:0,scaleX:0.962,scaleY:0.962,rotation:0,x:-113.9,y:57.8,regX:0}},{t:this.shape_417,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:143.3,y:-52.9}},{t:this.shape_435,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:99.3,y:-33.2}},{t:this.shape_429,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:25.6,y:15}},{t:this.shape_414,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:69.7,y:45.3}},{t:this.shape_413,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:62.4,y:90.6}},{t:this.shape_439},{t:this.shape_411,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:-7.3,y:127.2}},{t:this.shape_410,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:156.5,y:-32.2}},{t:this.shape_409,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:27.6,y:-0.6}},{t:this.shape_408,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:2.1,y:-3.7}},{t:this.shape_407,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:24.3,y:-20.5}},{t:this.shape_406,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:151.7,y:-55.4}},{t:this.shape_405,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:153.6,y:-32}},{t:this.shape_404,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:143.9,y:-68.9}},{t:this.shape_403,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:146,y:-53.8}},{t:this.shape_402,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:102.6,y:-60.9}},{t:this.shape_438},{t:this.shape_400,p:{scaleX:0.962,scaleY:0.962,rotation:0,x:146.7,y:-49.1}},{t:this.shape_399,p:{scaleX:0.962,scaleY:0.962,x:48.1,y:17.2,rotation:0}},{t:this.shape_398,p:{scaleX:0.962,scaleY:0.962,x:30.4,y:-23.7,rotation:0}},{t:this.shape_397,p:{scaleX:0.962,scaleY:0.962,x:47.2,y:-58.7,rotation:0}},{t:this.shape_396,p:{scaleX:0.962,scaleY:0.962,x:50.6,y:-100.4,rotation:0}},{t:this.shape_395,p:{scaleX:0.962,scaleY:0.962,x:54.8,y:-109.8,rotation:0}},{t:this.shape_394,p:{scaleX:0.962,scaleY:0.962,x:31.2,y:-69.7,rotation:0}},{t:this.shape_393,p:{scaleX:0.962,scaleY:0.962,x:33.4,y:-72.2,rotation:0}},{t:this.shape_392,p:{scaleX:0.962,scaleY:0.962,x:40.2,y:-56.5,rotation:0}},{t:this.shape_391,p:{scaleX:0.962,scaleY:0.962,x:55.4,y:-43.8,rotation:0}},{t:this.shape_390,p:{scaleX:0.962,scaleY:0.962,x:58.4,y:-56.5,rotation:0}},{t:this.shape_389,p:{scaleX:0.962,scaleY:0.962,x:45.6,y:27.7,rotation:0}},{t:this.shape_388,p:{scaleX:0.962,scaleY:0.962,x:42.8,y:49.2,rotation:0}},{t:this.shape_387,p:{scaleX:0.962,scaleY:0.962,x:48.9,y:-105.5,rotation:0}},{t:this.shape_386,p:{scaleX:0.962,scaleY:0.962,x:30,y:-105.2,rotation:0}},{t:this.shape_385,p:{scaleX:0.962,scaleY:0.962,x:61.3,y:-103,rotation:0}}]},3).to({state:[{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441}]},3).to({state:[{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483}]},3).to({state:[{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525}]},3).to({state:[{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567}]},3).to({state:[{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609}]},4).to({state:[{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651}]},4).to({state:[{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693}]},4).to({state:[{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735}]},4).to({state:[{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777}]},3).to({state:[{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819}]},3).to({state:[{t:this.shape_902},{t:this.shape_901,p:{rotation:0,x:19.7,y:148.6,scaleX:1,scaleY:1}},{t:this.shape_900,p:{rotation:0,x:86.6,y:146.8,scaleX:1,scaleY:1}},{t:this.shape_899,p:{rotation:0,x:-66,y:46.6,regX:0,regY:0,scaleX:1,scaleY:1}},{t:this.shape_898,p:{rotation:0,x:-52.2,y:43.8,regX:0,regY:0}},{t:this.shape_897,p:{rotation:0,x:76,y:81.7}},{t:this.shape_896,p:{rotation:0,x:77.5,y:126,scaleX:1,scaleY:1}},{t:this.shape_895},{t:this.shape_894,p:{rotation:0,x:-72.9,y:26.6}},{t:this.shape_893,p:{rotation:0,x:-121.1,y:-18.1,scaleX:1,scaleY:1}},{t:this.shape_892,p:{rotation:0,x:154.3,y:11.3,scaleX:1,scaleY:1}},{t:this.shape_891,p:{rotation:0,x:102.6,y:20.2,scaleX:1,scaleY:1}},{t:this.shape_890,p:{rotation:0,x:12.5}},{t:this.shape_889,p:{rotation:0,x:46.4,y:78.6,scaleX:1,scaleY:1}},{t:this.shape_888,p:{rotation:0,x:21.9,y:125.7,scaleX:1,scaleY:1}},{t:this.shape_887},{t:this.shape_886,p:{regX:0,regY:0,rotation:0,x:-55.7,y:25.6}},{t:this.shape_885,p:{rotation:0,x:161.6,y:32.2,scaleX:1,scaleY:1}},{t:this.shape_884,p:{rotation:0,x:18,y:-14.4,scaleX:1,scaleY:1}},{t:this.shape_883,p:{rotation:0,x:-2.7,y:-32.9,scaleX:1,scaleY:1}},{t:this.shape_882,p:{rotation:0,x:29.4,y:-31.4,scaleX:1,scaleY:1}},{t:this.shape_881,p:{rotation:0,x:162.2,y:7.6,scaleX:1,scaleY:1}},{t:this.shape_880,p:{rotation:0,x:158.6,y:31.6,scaleX:1,scaleY:1}},{t:this.shape_879,p:{rotation:0,x:157.7,y:-4.1,scaleX:1,scaleY:1}},{t:this.shape_878,p:{rotation:0,x:157.9,y:10.6,scaleX:1,scaleY:1}},{t:this.shape_877,p:{rotation:0,x:111.3,y:-14.7,scaleX:1,scaleY:1}},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874,p:{x:34.4,y:-26.3,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_873,p:{x:55,y:-50,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_872,p:{x:52.4,y:-105.5,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_871,p:{x:52.6,y:-119.7,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_870,p:{x:34.5,y:-69,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_869,p:{x:36.5,y:-71.4,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_868,p:{x:46.9,y:-48.6,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_867,p:{x:60.3,y:-35.9,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_866,p:{x:65.8,y:-45,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_865,p:{x:46.7,y:-109.3,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_864,p:{x:60.1,y:-112.3,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_863,p:{x:41.8,y:35.2,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_862},{t:this.shape_861,p:{x:34.4,y:64.1,scaleX:1,scaleY:1,rotation:0}}]},3).to({state:[{t:this.shape_908},{t:this.shape_901,p:{rotation:-2.7,x:43.1,y:147.7,scaleX:1,scaleY:1}},{t:this.shape_900,p:{rotation:5,x:109.8,y:138,scaleX:1,scaleY:1}},{t:this.shape_899,p:{rotation:3.3,x:-60.6,y:68.6,regX:0,regY:0,scaleX:1,scaleY:1}},{t:this.shape_897,p:{rotation:-21.2,x:91.8,y:71.4}},{t:this.shape_896,p:{rotation:5,x:103.4,y:114.8,scaleX:1,scaleY:1}},{t:this.shape_894,p:{rotation:3.3,x:-69.8,y:43.2}},{t:this.shape_893,p:{rotation:-7.5,x:-121.2,y:-0.5,scaleX:1,scaleY:1}},{t:this.shape_892,p:{rotation:-7.5,x:155.8,y:-7.2,scaleX:1,scaleY:1}},{t:this.shape_891,p:{rotation:-7.5,x:105.7,y:8.3,scaleX:1,scaleY:1}},{t:this.shape_890,p:{rotation:-7.5,x:15.6}},{t:this.shape_889,p:{rotation:-14.2,x:60.2,y:74,scaleX:1,scaleY:1}},{t:this.shape_888,p:{rotation:-2.7,x:44.3,y:124.8,scaleX:1,scaleY:1}},{t:this.shape_907},{t:this.shape_885,p:{rotation:-7.5,x:165.7,y:12.6,scaleX:1,scaleY:1}},{t:this.shape_884,p:{rotation:-7.5,x:17.3,y:-14.9,scaleX:1,scaleY:1}},{t:this.shape_883,p:{rotation:-7.5,x:-5.7,y:-30.5,scaleX:1,scaleY:1}},{t:this.shape_882,p:{rotation:-7.5,x:26.4,y:-33.2,scaleX:1,scaleY:1}},{t:this.shape_881,p:{rotation:-7.5,x:163.1,y:-11.9,scaleX:1,scaleY:1}},{t:this.shape_880,p:{rotation:-7.5,x:162.7,y:12.4,scaleX:1,scaleY:1}},{t:this.shape_879,p:{rotation:-7.5,x:157.1,y:-22.9,scaleX:1,scaleY:1}},{t:this.shape_878,p:{rotation:-7.5,x:159.3,y:-8.3,scaleX:1,scaleY:1}},{t:this.shape_877,p:{rotation:-7.5,x:109.8,y:-27.4,scaleX:1,scaleY:1}},{t:this.shape_906},{t:this.shape_905},{t:this.shape_898,p:{rotation:-7.5,x:-41.4,y:66.5,regX:0,regY:0}},{t:this.shape_904},{t:this.shape_886,p:{regX:-10.7,regY:-4.8,rotation:11.2,x:-56.5,y:40.8}},{t:this.shape_874,p:{x:32,y:-25.9,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_873,p:{x:52.6,y:-49.6,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_872,p:{x:50,y:-105.1,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_871,p:{x:50.2,y:-119.3,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_870,p:{x:32.1,y:-68.6,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_869,p:{x:34.1,y:-71,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_868,p:{x:44.5,y:-48.2,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_867,p:{x:57.9,y:-35.5,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_866,p:{x:63.4,y:-44.6,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_865,p:{x:44.3,y:-108.9,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_864,p:{x:57.7,y:-111.9,rotation:0,scaleX:1,scaleY:1}},{t:this.shape_863,p:{x:39.4,y:35.6,scaleX:1,scaleY:1,rotation:0}},{t:this.shape_903},{t:this.shape_861,p:{x:32,y:64.5,scaleX:1,scaleY:1,rotation:0}}]},3).to({state:[{t:this.shape_917},{t:this.shape_901,p:{rotation:4.1,x:60.9,y:148.6,scaleX:1,scaleY:1}},{t:this.shape_900,p:{rotation:2.5,x:129.4,y:130.7,scaleX:1,scaleY:1}},{t:this.shape_899,p:{rotation:8.5,x:-80.3,y:91.5,regX:2.7,regY:-8,scaleX:1,scaleY:1}},{t:this.shape_897,p:{rotation:-37.9,x:100.5,y:65.6}},{t:this.shape_896,p:{rotation:2.5,x:122,y:107.9,scaleX:1,scaleY:1}},{t:this.shape_894,p:{rotation:39.2,x:-81.2,y:72.5}},{t:this.shape_893,p:{rotation:-14.2,x:-122.3,y:21.2,scaleX:1,scaleY:1}},{t:this.shape_892,p:{rotation:-14.2,x:151.9,y:-17.9,scaleX:1,scaleY:1}},{t:this.shape_891,p:{rotation:-14.2,x:104,y:3.4,scaleX:1,scaleY:1}},{t:this.shape_916},{t:this.shape_889,p:{rotation:-31.1,x:71.3,y:73.6,scaleX:1,scaleY:1}},{t:this.shape_888,p:{rotation:4.1,x:64.8,y:125.9,scaleX:1,scaleY:1}},{t:this.shape_915},{t:this.shape_885,p:{rotation:-14.2,x:164.1,y:0.6,scaleX:1,scaleY:1}},{t:this.shape_884,p:{rotation:-14.2,x:13.4,y:-9.3,scaleX:1,scaleY:1}},{t:this.shape_883,p:{rotation:-14.2,x:-11.2,y:-22.1,scaleX:1,scaleY:1}},{t:this.shape_882,p:{rotation:-14.2,x:20.4,y:-28.6,scaleX:1,scaleY:1}},{t:this.shape_881,p:{rotation:-14.2,x:158.6,y:-23.4,scaleX:1,scaleY:1}},{t:this.shape_880,p:{rotation:-14.2,x:161,y:0.8,scaleX:1,scaleY:1}},{t:this.shape_879,p:{rotation:-14.2,x:151.4,y:-33.6,scaleX:1,scaleY:1}},{t:this.shape_878,p:{rotation:-14.2,x:155.2,y:-19.4,scaleX:1,scaleY:1}},{t:this.shape_877,p:{rotation:-14.2,x:103.9,y:-32.5,scaleX:1,scaleY:1}},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_898,p:{rotation:-47.2,x:-39.5,y:84.7,regX:4,regY:-2.9}},{t:this.shape_886,p:{regX:-10.8,regY:-4.9,rotation:4.5,x:-60.8,y:64.5}},{t:this.shape_874,p:{x:23.3,y:-22.6,rotation:-6.7,scaleX:1,scaleY:1}},{t:this.shape_873,p:{x:41,y:-48.6,rotation:-6.7,scaleX:1,scaleY:1}},{t:this.shape_872,p:{x:31.9,y:-103.4,rotation:-6.7,scaleX:1,scaleY:1}},{t:this.shape_871,p:{x:30.5,y:-117.5,rotation:-6.7,scaleX:1,scaleY:1}},{t:this.shape_870,p:{x:18.4,y:-65,rotation:-6.7,scaleX:1,scaleY:1}},{t:this.shape_869,p:{x:20.1,y:-67.7,rotation:-6.7,scaleX:1,scaleY:1}},{t:this.shape_868,p:{x:33.1,y:-46.2,rotation:-6.7,scaleX:1,scaleY:1}},{t:this.shape_867,p:{x:47.9,y:-35.2,rotation:-6.7,scaleX:1,scaleY:1}},{t:this.shape_866,p:{x:52.3,y:-44.8,rotation:-6.7,scaleX:1,scaleY:1}},{t:this.shape_865,p:{x:25.8,y:-106.5,rotation:-6.7,scaleX:1,scaleY:1}},{t:this.shape_864,p:{x:38.7,y:-111,rotation:-6.7,scaleX:1,scaleY:1}},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909}]},3).to({state:[{t:this.shape_901,p:{rotation:39.6,x:31.6,y:136.5,scaleX:0.973,scaleY:0.973}},{t:this.shape_900,p:{rotation:-12.1,x:146,y:116.2,scaleX:0.973,scaleY:0.973}},{t:this.shape_899,p:{rotation:-17.9,x:-86.3,y:111.1,regX:2.6,regY:-8.1,scaleX:0.973,scaleY:0.973}},{t:this.shape_928},{t:this.shape_896,p:{rotation:-12.1,x:133.5,y:96.4,scaleX:0.973,scaleY:0.973}},{t:this.shape_927},{t:this.shape_893,p:{rotation:-19.4,x:-119.2,y:41.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_892,p:{rotation:-19.4,x:143.1,y:-20.2,scaleX:0.973,scaleY:0.973}},{t:this.shape_891,p:{rotation:-19.4,x:98.5,y:4.7,scaleX:0.973,scaleY:0.973}},{t:this.shape_926},{t:this.shape_889,p:{rotation:-20.3,x:68.7,y:77,scaleX:0.973,scaleY:0.973}},{t:this.shape_888,p:{rotation:39.6,x:47.5,y:120.7,scaleX:0.973,scaleY:0.973}},{t:this.shape_925},{t:this.shape_885,p:{rotation:-19.4,x:156.6,y:-3.3,scaleX:0.973,scaleY:0.973}},{t:this.shape_884,p:{rotation:-19.4,x:9.7,y:0.3,scaleX:0.973,scaleY:0.973}},{t:this.shape_883,p:{rotation:-19.4,x:-15.3,y:-9.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_882,p:{rotation:-19.4,x:14.7,y:-18.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_881,p:{rotation:-19.4,x:149.2,y:-26.1,scaleX:0.973,scaleY:0.973}},{t:this.shape_880,p:{rotation:-19.4,x:153.6,y:-2.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_879,p:{rotation:-19.4,x:141.2,y:-35.4,scaleX:0.973,scaleY:0.973}},{t:this.shape_878,p:{rotation:-19.4,x:146.2,y:-21.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_877,p:{rotation:-19.4,x:95.3,y:-30.1,scaleX:0.973,scaleY:0.973}},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_874,p:{x:17.7,y:-13.7,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_873,p:{x:32.6,y:-40.4,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_872,p:{x:18.9,y:-92.7,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_871,p:{x:16.3,y:-106.3,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_870,p:{x:9.3,y:-54.4,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_869,p:{x:10.7,y:-57.1,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_868,p:{x:25.1,y:-37.5,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_867,p:{x:40.5,y:-28.1,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_866,p:{x:43.9,y:-37.8,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_865,p:{x:12.8,y:-95.2,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_864,p:{x:24.9,y:-100.7,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_863,p:{x:37.1,y:43.3,scaleX:0.973,scaleY:0.973,rotation:-11.9}},{t:this.shape_918},{t:this.shape_861,p:{x:35.9,y:72.3,scaleX:0.973,scaleY:0.973,rotation:-11.9}}]},3).to({state:[{t:this.shape_901,p:{rotation:39.6,x:31.6,y:136.5,scaleX:0.973,scaleY:0.973}},{t:this.shape_900,p:{rotation:-12.1,x:146,y:116.2,scaleX:0.973,scaleY:0.973}},{t:this.shape_899,p:{rotation:-17.9,x:-86.3,y:111.1,regX:2.6,regY:-8.1,scaleX:0.973,scaleY:0.973}},{t:this.shape_928},{t:this.shape_896,p:{rotation:-12.1,x:133.5,y:96.4,scaleX:0.973,scaleY:0.973}},{t:this.shape_927},{t:this.shape_893,p:{rotation:-19.4,x:-119.2,y:41.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_892,p:{rotation:-19.4,x:143.1,y:-20.2,scaleX:0.973,scaleY:0.973}},{t:this.shape_891,p:{rotation:-19.4,x:98.5,y:4.7,scaleX:0.973,scaleY:0.973}},{t:this.shape_926},{t:this.shape_889,p:{rotation:-20.3,x:68.7,y:77,scaleX:0.973,scaleY:0.973}},{t:this.shape_888,p:{rotation:39.6,x:47.5,y:120.7,scaleX:0.973,scaleY:0.973}},{t:this.shape_925},{t:this.shape_885,p:{rotation:-19.4,x:156.6,y:-3.3,scaleX:0.973,scaleY:0.973}},{t:this.shape_884,p:{rotation:-19.4,x:9.7,y:0.3,scaleX:0.973,scaleY:0.973}},{t:this.shape_883,p:{rotation:-19.4,x:-15.3,y:-9.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_882,p:{rotation:-19.4,x:14.7,y:-18.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_881,p:{rotation:-19.4,x:149.2,y:-26.1,scaleX:0.973,scaleY:0.973}},{t:this.shape_880,p:{rotation:-19.4,x:153.6,y:-2.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_879,p:{rotation:-19.4,x:141.2,y:-35.4,scaleX:0.973,scaleY:0.973}},{t:this.shape_878,p:{rotation:-19.4,x:146.2,y:-21.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_877,p:{rotation:-19.4,x:95.3,y:-30.1,scaleX:0.973,scaleY:0.973}},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_874,p:{x:17.7,y:-13.7,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_873,p:{x:32.6,y:-40.4,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_872,p:{x:18.9,y:-92.7,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_871,p:{x:16.3,y:-106.3,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_870,p:{x:9.3,y:-54.4,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_869,p:{x:10.7,y:-57.1,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_868,p:{x:25.1,y:-37.5,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_867,p:{x:40.5,y:-28.1,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_866,p:{x:43.9,y:-37.8,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_865,p:{x:12.8,y:-95.2,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_864,p:{x:24.9,y:-100.7,rotation:-11.9,scaleX:0.973,scaleY:0.973}},{t:this.shape_863,p:{x:37.1,y:43.3,scaleX:0.973,scaleY:0.973,rotation:-11.9}},{t:this.shape_918},{t:this.shape_861,p:{x:35.9,y:72.3,scaleX:0.973,scaleY:0.973,rotation:-11.9}}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.5,-113.9,340,244.2);


(lib.pauseLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B4431").ss(5).p("AChAAQAAArgTAjQgLATgRARQgOAOgRAKQgkAXgvAAQgtAAglgXQgQgKgOgOQgSgSgLgUQgTgiAAgqQAAgoATgiQALgVASgSQAJgJAKgIQApgdA0AAQA2AAAoAdQAKAIAKAJQARARALAUQATAiAAAqgAAmhQIAACrAgmhQIAACr");
	this.shape.setTransform(-0.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2F4FF").s().p("AhSCKQgQgKgOgOQgSgSgLgVQgTghAAgqQAAgoATgjQALgUASgSQAJgJAKgIQApgdA0AAQA2AAAoAdIAUARQARARALAUQATAiAAAqQAAArgTAiQgLAUgRARQgOAOgRAKQgkAWgvABQgtgBglgWgAAmBbIAAirgAgmBbIAAirg");
	this.shape_1.setTransform(-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pauseLIB, new cjs.Rectangle(-31,-18.3,61.8,37.1), null);


(lib.mapLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// Layer_1
	this.instance = new lib.fullMapSmall();
	this.instance.parent = this;
	this.instance.setTransform(-251,-251);

	this.instance_1 = new lib.map1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-251,133);

	this.instance_2 = new lib.map2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-251,124);

	this.instance_3 = new lib.map3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-251,-45);

	this.instance_4 = new lib.map4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-251,-54);

	this.instance_5 = new lib.map5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-251,-250);

	this.instance_6 = new lib.fullMap();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-251,-251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_2}]},1).to({state:[{t:this.instance},{t:this.instance_3}]},1).to({state:[{t:this.instance},{t:this.instance_4}]},1).to({state:[{t:this.instance},{t:this.instance_5}]},1).to({state:[{t:this.instance},{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251,-251,502,502);


(lib.innerWrongAnswer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wrongAnswer();
	this.instance.parent = this;
	this.instance.setTransform(-480,-296);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.innerWrongAnswer, new cjs.Rectangle(-480,-296,960,592), null);


(lib.innerCard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.card();
	this.instance.parent = this;
	this.instance.setTransform(-110,-76.6,0.459,0.553);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.innerCard, new cjs.Rectangle(-110,-76.6,220,153.2), null);


(lib.gameBtnLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.btnText = new cjs.Text("", "12px 'Arial'");
	this.btnText.name = "btnText";
	this.btnText.textAlign = "center";
	this.btnText.lineHeight = 15;
	this.btnText.lineWidth = 107;
	this.btnText.parent = this;
	this.btnText.setTransform(-2.7,-8);

	this.instance = new lib.up();
	this.instance.parent = this;
	this.instance.setTransform(-62,-22,0.259,0.259);

	this.btnText_1 = new cjs.Text("", "12px 'Arial'");
	this.btnText_1.name = "btnText_1";
	this.btnText_1.textAlign = "center";
	this.btnText_1.lineHeight = 15;
	this.btnText_1.lineWidth = 107;
	this.btnText_1.parent = this;
	this.btnText_1.setTransform(-2.7,-8);

	this.instance_1 = new lib.over();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62,-22,0.258,0.258);

	this.instance_2 = new lib.down();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-62,-22,0.257,0.257);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnText_1},{t:this.instance},{t:this.btnText}]}).to({state:[{t:this.instance_1},{t:this.btnText}]},1).to({state:[{t:this.instance_2},{t:this.btnText}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-22,121.8,43.2);


(lib.endSmallAnswer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("At4IWIAAwrIbxAAIAAQrg");
	this.shape.setTransform(-1.7,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990000").ss(3,0,0,3).p("AtmoKIbNAAIAAQVI7NAAg");
	this.shape_1.setTransform(-1.7,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtlIKIAAwUIbLAAIAAQUg");
	this.shape_2.setTransform(-1.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.6,-54,177.9,106.8);


(lib.endTresureLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C6657").s().p("A6CghIBRgQIA/AKIgEAAIUgDQIbqlbIgEAAIBBgRIAyAII9cF/g");
	this.shape.setTransform(-4.2,5.7,0.366,0.366,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#967962").s().p("ApDGJIgIu+IABgPISRC8IAFgBIAAPOg");
	this.shape_1.setTransform(30.6,30.4,0.366,0.366,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ADAAA3").s().p("ArLHlIgJydIABgTIWiDnIAHgBIAASxg");
	this.shape_2.setTransform(30.3,30.7,0.366,0.366,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C6657").s().p("Asik0IZFlTIAAPII5FFHg");
	this.shape_3.setTransform(-30,28.2,0.366,0.366,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8C887E").s().p("AuxmXIdjmBIAASxI9cGAg");
	this.shape_4.setTransform(-30.6,27.9,0.366,0.366,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDB23E").s().p("ABaBhQg2gKg/gjQhBgjglgnQglgoAMgWQALgVA2AJQA2AKA/AjQBBAjAlAnQAlAogMAWQgIAPgcAAQgNAAgQgDg");
	this.shape_5.setTransform(27.9,6.7,0.366,0.366,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFDA9F").s().p("ABBBsQgxgQgygcQhQgrgugxQgugyAOgaQAKgSAlAAQAiAAAvAPQAxAPAyAcQBQAsAuAxQAuAxgOAbQgLASgkAAQgiAAgvgPgAi3hjQgFAJAIARQAIASATAUQAtAwBOArQAwAaAwAQQAvAPAhAAQAfAAAHgNQALgUgpgtQgugvhOgrQgwgagvgQQgwgPggAAQgfAAgHANg");
	this.shape_6.setTransform(27.9,6.8,0.366,0.366,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC050").s().p("ABvB4QhCgMhPgsQhQgrgugxQgugyAOgaQAPgbBCAMQBDAMBPArQBQAsAuAxQAuAxgOAbQgKATgjAAQgQAAgVgEg");
	this.shape_7.setTransform(27.9,6.8,0.366,0.366,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D06F09").s().p("AADBMQgngCg4gUIBHiBIByA+IgnBGQgKATgmAAIgDAAg");
	this.shape_8.setTransform(24.2,11.1,0.366,0.366,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC050").s().p("AgvAtIA+hzIAhARIhEB8IgbgagAgjArIANANIA4hpIgOgIg");
	this.shape_9.setTransform(33.5,6.6,0.366,0.366,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFDA9F").s().p("AgvAtIA+hzIAhARIhEB8Igbgag");
	this.shape_10.setTransform(33.5,6.6,0.366,0.366,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CE9229").s().p("ABdCTQhCgMhPgsQhQgrgugxQgugyAOgaIAnhIIGBDSIgnBHQgKASgkAAQgPAAgVgDg");
	this.shape_11.setTransform(28.7,8.4,0.366,0.366,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FBC22C").s().p("AhuAhQgwgNgOgUQAOgTAwgNQAxgNA9AAQA/AAAxANQAvANAOATQgOAUgvANQgxANg/AAQg9AAgxgNg");
	this.shape_12.setTransform(40.3,8.5,0.366,0.366,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BF8425").s().p("ABwADQgxgMg/AAQg9AAgxAMQgwANgOAUQgEgGAAgHQAAgXA0gRQA0gSBIAAQBJAAA0ASQA0ARAAAXQAAAHgEAGQgOgTgvgOg");
	this.shape_13.setTransform(40.3,7.2,0.366,0.366,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FBC22C").s().p("Ah8AqQg0gRAAgZQAAgXA0gSQA0gRBIAAQBJAAA0ARQA0ASAAAXQAAAZg0ARQg0ARhJAAQhIAAg0gRg");
	this.shape_14.setTransform(40.3,8,0.366,0.366,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9C66B").s().p("AiaA0QhBgWAAgeQAAgdBBgWQBAgVBagBQBbABBAAVQBBAWAAAdQAAAehBAWQhAAVhbABQhagBhAgVg");
	this.shape_15.setTransform(40.3,8.1,0.366,0.366,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D06F09").s().p("AhAhJICBAAIAABQQAAAWglASQghASg7AJg");
	this.shape_16.setTransform(34.6,10.8,0.366,0.366,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CE9229").s().p("AiaA4QhBgWAAgeIAAhQIG3AAIAABQQAAAehBAWQhAAVhbAAQhaAAhAgVg");
	this.shape_17.setTransform(40.3,11,0.366,0.366,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EDB23E").s().p("Ah8ArQg0gSAAgYQAAgYA0gRQA0gSBIAAQBJgBA0ASQA0ARAAAYQAAAYg0ARQgzAShKAAIgDAAQhHAAgygQg");
	this.shape_18.setTransform(27.6,-1.3,0.366,0.366,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFDA9F").s().p("AgCBJQhaABg/gWQhAgVAAgeQAAgdBAgWQBBgWBagBIADAAQBaAAA/AWQA/AVABAeQAAAdhAAXQhBAVhaAAgAiWgpQg7ATAAAXQABAYA5ATQA+ATBXAAIACAAQBZAAA+gUQA6gUABgXQgBgXg5gUQg+gThXgBIgDAAQhZABg9AVg");
	this.shape_19.setTransform(27.4,-1.4,0.366,0.366,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFC050").s().p("AiaA1QhBgWAAgeQAAgdBAgWQBBgWBagBQBbAABAAVQBBAVAAAfQAAAdhAAXQhBAVhaAAIgEABQhYAAg/gVg");
	this.shape_20.setTransform(27.4,-1.4,0.366,0.366,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BF8425").s().p("AhAhIICAgBIABBQQAAAWgkASQgiASg6AJg");
	this.shape_21.setTransform(21.7,1.3,0.366,0.366,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFC050").s().p("AgRA+IgBiEIAkgBIABCOIgkgJgAAJA7IgBh3IgQAAIABByIAQAFg");
	this.shape_22.setTransform(32.4,1.2,0.366,0.366,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFDA9F").s().p("AgRA+IgBiEIAkgBIABCOIgkgJg");
	this.shape_23.setTransform(32.4,1.2,0.366,0.366,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CE9229").s().p("AiaA5QhAgVAAgfIgBhQIG2gCIABBQQAAAfhAAWQhBAVhbABIgDAAQhYAAg/gVg");
	this.shape_24.setTransform(27.3,1.4,0.366,0.366,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EDB23E").s().p("Ah8ArQg0gSAAgYQAAgYA0gRQA0gSBIAAQBJgBA0ASQA0ARAAAYQAAAYg0ARQgzAShKAAIgDAAQhHAAgygQg");
	this.shape_25.setTransform(36,1.2,0.366,0.366,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFDA9F").s().p("AgCBJQhaABg/gWQg/gVgBgeQAAgdBAgWQBBgWBagBIADAAQBaABA/AUQA/AVABAfQAAAehAAVQhAAWhcAAgAiXgpQgbAKgPALQgQALAAAKQABAYA5ASQA+AVBXgBIACAAQBbgBA9gUQAbgKAQgLQAPgLAAgKQgBgXg5gUQg+gThXgBIgDAAQhXABhAAVg");
	this.shape_26.setTransform(36,1.3,0.366,0.366,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFC050").s().p("AiaA0QhAgUgBgfQAAgdBAgWQBBgWBagBQBbAABAAVQBAAVABAfQAAAehAAVQhAAWhcAAIgDABQhYAAg/gWg");
	this.shape_27.setTransform(36,1.3,0.366,0.366,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D06F09").s().p("AhAhJICBAAIAABQQAAAWgkASQgiASg6AJg");
	this.shape_28.setTransform(30.3,3.9,0.366,0.366,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C99F4B").s().p("AgRA9IgBiDIAkAAIABCNQgYgFgMgFg");
	this.shape_29.setTransform(41.1,3.9,0.366,0.366,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CE9229").s().p("AiaA5QhAgVAAgfIgBhQIG3gCIAABQQAAAfhAAWQhAAVhbABIgDAAQhZAAg/gVg");
	this.shape_30.setTransform(36,4.1,0.366,0.366,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EDB23E").s().p("ABaBhQg2gKg/gjQhBgjglgnQglgoAMgWQALgVA2AJQA2AKA/AjQBBAjAlAnQAlAogMAWQgIAPgcAAQgNAAgQgDg");
	this.shape_31.setTransform(-2.7,6.7,0.366,0.366,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFDA9F").s().p("ABBBsQgxgQgygcQhQgrgugxQgugyAOgaQAKgSAlAAQAiAAAvAPQAxAPAyAcQBQAsAuAxQAuAxgOAbQgLASgkAAQgiAAgvgPgAi3hjQgMAUAqAtQAtAvBOArQAwAaAwAQQAvAPAhAAQAfAAAHgNQALgUgpgtQgugvhOgrQgwgagvgQQgwgPggAAQgfAAgHANg");
	this.shape_32.setTransform(-2.7,6.8,0.366,0.366,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFC050").s().p("ABvB4QhCgMhPgsQhQgrgugxQgugyAOgaQAPgbBCAMQBDAMBPArQBQAsAuAxQAuAxgOAbQgKATgjAAQgQAAgVgEg");
	this.shape_33.setTransform(-2.7,6.8,0.366,0.366,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D06F09").s().p("AACBMQgmgCg3gUIBHiBIBwA+IgmBGQgKATgmAAIgEAAg");
	this.shape_34.setTransform(-6.3,11.1,0.366,0.366,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFC050").s().p("AgvAtIA+hzIAhARIhEB8IgbgagAgjArIANANIA5hpIgPgIg");
	this.shape_35.setTransform(3,6.6,0.366,0.366,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFDA9F").s().p("AgvAtIA+hzIAhARIhEB8Igbgag");
	this.shape_36.setTransform(3,6.6,0.366,0.366,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CE9229").s().p("ABdCTQhCgMhPgsQhQgrgugxQgugyAOgaIAnhIIGBDSIgnBHQgKASgkAAQgPAAgVgDg");
	this.shape_37.setTransform(-1.9,8.4,0.366,0.366,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDB23E").s().p("Ah8AqQg0gRAAgZQAAgXA0gSQAzgRBJAAQBJAAA0ARQA0ASAAAXQAAAZg0ARQg0ARhJAAQhJAAgzgRg");
	this.shape_38.setTransform(10.1,8,0.366,0.366,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFDA9F").s().p("AiaA0QhBgWABgeQgBgdBBgWQBAgVBagBQBbABBAAVQBBAWAAAdQAAAehBAWQhAAVhbABQhagBhAgVgAiWgqQg6ATAAAXQAAAYA6ATQA/AUBXABQBYgBA/gUQA7gTgBgYQABgXg7gTQg/gUhYAAQhXAAg/AUg");
	this.shape_39.setTransform(10.1,8.1,0.366,0.366,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFC050").s().p("AiaA0QhBgWABgeQgBgdBBgWQBAgVBagBQBbABBAAVQBBAWAAAdQAAAehBAWQhAAVhbABQhagBhAgVg");
	this.shape_40.setTransform(10.1,8.1,0.366,0.366,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BF8425").s().p("AhAhJICBAAIAABQQAAAWgkASQgjASg6AJg");
	this.shape_41.setTransform(4.4,10.8,0.366,0.366,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CE9229").s().p("AiaA4QhBgWABgeIAAhQIG2AAIAABQQAAAehBAWQhAAVhbAAQhaAAhAgVg");
	this.shape_42.setTransform(10.1,11,0.366,0.366,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EDB23E").s().p("Ah8AqQg0gQAAgZQAAgYA0gSQA0gRBIAAQBJAAA0ARQA0AQAAAZQAAAXg0ASQgzAShKAAIgDAAQhGAAgzgRg");
	this.shape_43.setTransform(6,1.4,0.366,0.366,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFDA9F").s().p("AgCBJQhZABhAgWQg/gVAAgeQgBgdBBgWQBAgWBagBIACAAQBbABA/AUQBAAVAAAfQAAAehBAVQg/AWhcAAgAiYgpQgaAKgPALQgQALABAKQAAAYA5ASQA+AVBXgBIACAAQBZAAA+gVQA7gTgBgXQABgXg6gUQg+gThYgBIgCAAQhXABhBAVg");
	this.shape_44.setTransform(5.8,1.3,0.366,0.366,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFC050").s().p("AiaA0QhAgUAAgfQgBgdBBgWQBAgWBagBQBbAABAAVQBBAVAAAfQAAAehBAVQg/AWhcAAIgDABQhYAAg/gWg");
	this.shape_45.setTransform(5.8,1.3,0.366,0.366,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BF8425").s().p("AhAhJICBAAIAABQQAAAWgkASQgiATg7AIg");
	this.shape_46.setTransform(0.1,3.9,0.366,0.366,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFC050").s().p("AgRA9IgBiDIAkAAIABCNQgYgFgMgFgAAJA7IgBh3IgQAAIABByIAQAFg");
	this.shape_47.setTransform(10.9,3.9,0.366,0.366,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFDA9F").s().p("AgRA9IgBiDIAkAAIABCNQgYgFgMgFg");
	this.shape_48.setTransform(10.9,3.9,0.366,0.366,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CE9229").s().p("AiaA5QhAgVgBgfIAAhQIG2gCIABBQQAAAfhAAWQhBAVhbABIgDAAQhYAAg/gVg");
	this.shape_49.setTransform(5.8,4.1,0.366,0.366,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDB23E").s().p("Ah8ArQg0gSAAgYQAAgYA0gRQAzgSBJAAQBJgBA0ARQA0ASAAAYQAAAYgzARQg0AShKAAIgDAAQhHAAgygQg");
	this.shape_50.setTransform(19.9,2,0.366,0.366,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFDA9F").s().p("AgBBJQhaAAhAgVQg/gVAAgeQgBgdBBgWQA/gWBbAAIADAAQBaAAA/AVQA/AVAAAeQABAehBAVQg/AWhbAAgAiWgpQg6ATAAAXQAAAXA6ATQA9AUBYAAIACAAQBYAAA/gVQA5gTAAgXQABgXg6gTQg+gUhXAAIgDAAQhYAAg+AVg");
	this.shape_51.setTransform(19.9,2.1,0.366,0.366,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFC050").s().p("AiaA1QhAgVAAgfQgBgdBBgWQA/gWBbAAQBbgBBAAVQBAAWAAAeQABAehBAVQg/AWhbAAIgIAAQhVAAg+gUg");
	this.shape_52.setTransform(19.9,2.1,0.366,0.366,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BF8425").s().p("AhAhJICAAAIABBQQAAAWgkASQgiASg7AJg");
	this.shape_53.setTransform(14.2,4.8,0.366,0.366,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C99F4B").s().p("AgRA9IgBiDIAkAAIABCNIgkgKg");
	this.shape_54.setTransform(25,4.8,0.366,0.366,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CE9229").s().p("AiaA5QhAgVAAgfIgBhQIG2gCIABBQQAAAfhAAWQhBAVhbABIgDAAQhYAAg/gVg");
	this.shape_55.setTransform(19.9,4.9,0.366,0.366,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDB23E").s().p("AgRA3QhEgWgsggQgrgfAHgXQAIgXA2AAQA2gBBDAXQBEAWAsAgQArAfgHAXQgIAXg2AAIgCAAQg1AAhCgWg");
	this.shape_56.setTransform(-20.7,3,0.366,0.366,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFDA9F").s().p("AgWBFQhVgcg1goQg2gnAJgdQAKgcBEAAQBDAABTAbQBVAcA2AoQA1AngJAcQgKAdhEAAQhDAAhTgbgAjDg/QgEAKALAPQALAPAXARQAzAlBVAcQBRAbBBAAQA9AAAHgWQAEgKgLgPQgLgPgXgRQg0gmhUgbQhRgbhBAAQg9AAgHAWg");
	this.shape_57.setTransform(-20.7,3.1,0.366,0.366,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFC050").s().p("AgWBFQhVgcg1goQg2gnAJgdQAKgcBDgBQBDAABUAcQBVAcA2AoQA1AngJAcQgKAdhDAAIgCABQhCAAhTgcg");
	this.shape_58.setTransform(-20.7,3.1,0.366,0.366,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B27436").s().p("AhTBCIAuiJIB5AnIgaBLQgHAVgnAGQgNACgRAAQgdAAgkgGg");
	this.shape_59.setTransform(-25.2,6.8,0.366,0.366,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFC050").s().p("AglA0IAoh7IAjALIgrCEQgQgJgQgLgAgZAwIAOAJIAkhvIgQgFg");
	this.shape_60.setTransform(-15.2,4,0.366,0.366,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFDA9F").s().p("AglA0IAoh7IAjALIgrCEQgQgJgQgLg");
	this.shape_61.setTransform(-15.2,4,0.366,0.366,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CE9229").s().p("AgiBcQhVgbg1goQg2gnAJgdIAZhMIGbCGIgZBMQgKAchDABIgCAAQhCAAhTgcg");
	this.shape_62.setTransform(-20.2,5.1,0.366,0.366,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDB23E").s().p("AhxA/Qg1gIgFgXQgEgYAvgZQAvgaBHgNQBGgNA1AHQA2AIAEAXQAFAYgvAZQgvAahIANQgsAIglAAQgWAAgUgCg");
	this.shape_63.setTransform(-8.9,6.6,0.366,0.366,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFDA9F").s().p("AivBGQghgLgEgUQgFgdA6ggQA7ggBYgQQA0gKAzAAQA0AAAgALQAiALAEAUQAFAdg7AgQg6AghYAQQg4AKgvAAQg0AAghgLgAgLg8QhVAPg6AgQgZANgMANQgNAOACAKQACAOAcAKQAeAKA0AAQAwAAA1gKQBWgQA5geQA1gcgEgXQgDgOgbgKQgfgKgzAAQgwAAg2AKg");
	this.shape_64.setTransform(-8.9,6.7,0.366,0.366,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFC050").s().p("AiMBOQhCgJgGgeQgFgdA6ggQA7ggBYgQQBXgQBCAJQBCAJAGAeQAFAdg7AgQg6AghYAQQg2AKgvAAQgcAAgYgDg");
	this.shape_65.setTransform(-8.9,6.7,0.366,0.366,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#BF8425").s().p("AhFg7IB9gYIAOBPQAEAUggAZQgfAXg2AUg");
	this.shape_66.setTransform(-14.7,8.3,0.366,0.366,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CE9229").s().p("AiFBgQhCgJgGgeIgOhNIGohPIAPBPQAFAcg7AhQg6AghYAQQg3ALgvAAQgbAAgYgEg");
	this.shape_67.setTransform(-9.2,8.9,0.366,0.366,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDB23E").s().p("AhwBAQg2gIgEgXQgFgYAvgZQAvgbBHgNQBGgOA1AIQA2AHAEAYQAFAXgvAaQgvAahHAOQgtAIgnAAQgVAAgSgCg");
	this.shape_68.setTransform(-19.7,-5,0.366,0.366,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFDA9F").s().p("AivBHQghgLgEgUQgFgdA6ggQA7ggBYgRQA2gLAzAAQAzAAAgALQAhALAEAUQAFAdg6AgQg6AhhYAQQg4ALgyAAQgzAAgggLgAgLg8QhVAQg5AfQg1AdAEAXQADANAbAJQAeALAyAAQAzAAA1gLQBWgQA5ggQAZgNAMgNQANgOgCgKQgDgOgagJQgfgLgyAAQguAAg6ALg");
	this.shape_69.setTransform(-19.7,-4.9,0.366,0.366,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFC050").s().p("AiMBPQhCgJgGgeQgFgdA6ggQA7ggBYgRQBXgRBCAJQBCAJAGAeQAFAdg6AgQg6AhhYAQQg5ALgwAAQgaAAgXgDg");
	this.shape_70.setTransform(-19.7,-4.9,0.366,0.366,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#BF8425").s().p("AhFg7IB8gYIAPBPQAEAVgfAYQgfAYg2ATg");
	this.shape_71.setTransform(-25.5,-3.3,0.366,0.366,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFC050").s().p("AgGBCIgYiAIAjgGIAaCJIglgDgAATA7IgVhzIgRACIAVBvIARACg");
	this.shape_72.setTransform(-15.3,-1.5,0.366,0.366,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFDA9F").s().p("AgGBCIgYiAIAjgGIAaCJIglgDg");
	this.shape_73.setTransform(-15.3,-1.5,0.366,0.366,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CE9229").s().p("AiEBhQhDgJgFgdIgPhOIGohRIAPBPQAGAdg7AgQg6AhhYAQQg5AMgwAAQgZAAgXgEg");
	this.shape_74.setTransform(-20,-2.7,0.366,0.366,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDB23E").s().p("AhxA/Qg1gHgFgYQgEgXAvgaQAwgaBGgNQBGgOA2AHQA1AIAEAXQAFAYgvAaQgvAahHANQgtAJgmAAQgVAAgUgDg");
	this.shape_75.setTransform(-11.8,-0.8,0.366,0.366,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFDA9F").s().p("AivBHQghgLgEgUQgFgdA6ggQA7ghBXgQQA0gLA2AAQAzAAAgALQAhALADAUQAGAdg6AgQg6AghZARQg2ALgzAAQgzAAgggLgAgLg9QhWARg4AfQg2AcAFAXQADAOAaAJQAfALAyAAQAvAAA5gLQBUgQA7ggQAZgNAMgNQANgOgDgLQgCgNgagJQgfgLgyAAQgxAAg3AKg");
	this.shape_76.setTransform(-11.8,-0.7,0.366,0.366,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFC050").s().p("AiLBPQhDgJgGgeQgFgdA6ggQA7ghBXgQQBYgRBCAJQBCAJAFAeQAGAdg6AgQg6AghZARQg4ALgwAAQgaAAgWgDg");
	this.shape_77.setTransform(-11.8,-0.7,0.366,0.366,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D06F09").s().p("AhFg7IB8gYIAPBPQAEAVgfAYQgfAXg2AUg");
	this.shape_78.setTransform(-17.6,0.8,0.366,0.366,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFC050").s().p("AgFBCIgZh/IAjgHIAaCJQgUAAgQgDgAATA7IgVhzIgRADIAVBuIARACg");
	this.shape_79.setTransform(-7.4,2.6,0.366,0.366,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFDA9F").s().p("AgFBCIgZh/IAjgHIAaCJQgUAAgQgDg");
	this.shape_80.setTransform(-7.4,2.6,0.366,0.366,0,0,180);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CE9229").s().p("AiFBhQhCgJgFgdIgPhOIGohQIAPBOQAFAdg6AgQg6AhhYARQg4AKgwAAQgaAAgYgDg");
	this.shape_81.setTransform(-12.1,1.5,0.366,0.366,0,0,180);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EDB23E").s().p("AgRA4QhFgXgrggQgrgfAHgXQAIgXA2gBQA2AABDAWQBFAXArAgQArAfgHAYQgIAWg2AAIgCABQg1AAhCgWg");
	this.shape_82.setTransform(-50.3,-2.4,0.366,0.366,0,0,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFDA9F").s().p("AgWBFQhVgcg1goQg2gnAJgcQAFgOAVgIQAUgIAgABQBBAABUAbQBVAcA2AoQA2AngKAdQgEANgVAIQgUAHggAAQhBABhVgcgAiuhQQgSAGgDAKQgIAXAxAkQA0AlBTAbQBTAbBAAAQAcABASgHQASgGAEgJQAHgWgxglQgzglhUgbQhUgbg+AAQgdAAgSAFg");
	this.shape_83.setTransform(-50.3,-2.3,0.366,0.366,0,0,180);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFC050").s().p("AgWBFQhVgcg1goQg2gnAJgcQAKgdBCAAQBDgBBUAcQBVAcA2AoQA2AngKAdQgJAchDAAIgCABQhCAAhTgcg");
	this.shape_84.setTransform(-50.3,-2.3,0.366,0.366,0,0,180);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B27436").s().p("AhSBDIAtiKIB4AoIgZBLQgGAUgoAGQgNACgSAAQgcAAgjgFg");
	this.shape_85.setTransform(-54.8,1.3,0.366,0.366,0,0,180);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFC050").s().p("AgkA0IAnh8IAiAMIgqCEQgVgMgKgIgAgZAwIAPAJIAjhvIgQgFg");
	this.shape_86.setTransform(-44.8,-1.4,0.366,0.366,0,0,180);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFDA9F").s().p("AgkA0IAnh8IAiAMIgqCEQgVgMgKgIg");
	this.shape_87.setTransform(-44.8,-1.4,0.366,0.366,0,0,180);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CE9229").s().p("AghBcQhVgcg2goQg2gnAKgcIAZhMIGaCGIgZBMQgKAchCABIgDAAQhCAAhSgcg");
	this.shape_88.setTransform(-49.8,-0.4,0.366,0.366,0,0,180);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EDB23E").s().p("AhxA/Qg1gIgEgXQgFgYAvgZQAvgaBHgNQBGgNA2AHQA1AIAEAXQAFAYgvAZQgvAahHANQgsAIgmAAQgWAAgUgCg");
	this.shape_89.setTransform(-38.2,1.2,0.366,0.366,0,0,180);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFDA9F").s().p("AivBGQghgLgEgUQgFgdA6ggQA7ggBYgQQA0gKAzAAQA0AAAgALQAiALAEAUQAFAdg6AgQg6AghZAQQg0AKgzAAQg0AAghgLgAgKg8QhWAQg5AeQg1AcAEAXQADAOAbAKQAeAKA0AAQAwAAA1gKQBXgPA5ggQAZgOAMgMQANgOgCgKQgDgOgbgKQgegKg0AAQgwAAg1AKg");
	this.shape_90.setTransform(-38.2,1.3,0.366,0.366,0,0,180);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFC050").s().p("AiMBOQhCgJgGgeQgFgdA6ggQA7ggBYgQQBXgQBCAJQBDAJAFAeQAFAdg6AgQg6AghZAQQg3AKgwAAQgaAAgYgDg");
	this.shape_91.setTransform(-38.2,1.3,0.366,0.366,0,0,180);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#BF8425").s().p("AhFg8IB8gXIAPBPQAEAUggAZQgfAYg2ATg");
	this.shape_92.setTransform(-44,2.9,0.366,0.366,0,0,180);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFC050").s().p("AgGBCIgYiAIAjgGIAaCJQgWgBgPgCgAATA7IgVh0IgQADIAUBvIARACg");
	this.shape_93.setTransform(-33.7,4.6,0.366,0.366,0,0,180);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFDA9F").s().p("AgGBCIgYiAIAjgGIAaCJQgWgBgPgCg");
	this.shape_94.setTransform(-33.7,4.6,0.366,0.366,0,0,180);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CE9229").s().p("AiFBgQhCgJgGgeIgOhNIGohPIAPBPQAFAcg6AhQg7AghYAQQg3ALgvAAQgbAAgYgEg");
	this.shape_95.setTransform(-38.5,3.5,0.366,0.366,0,0,180);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EDB23E").s().p("AhwA/Qg2gHgEgYQgFgXAvgaQAvgaBHgNQBGgOA1AHQA2AIAEAXQAFAYgvAaQgvAahHANQgtAJgmAAQgVAAgTgDg");
	this.shape_96.setTransform(-41.1,-6.2,0.366,0.366,0,0,180);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFDA9F").s().p("AivBHQghgLgEgUQgFgdA6ggQA7ghBXgQQA5gLAxAAQAzAAAgALQAhALAEAUQAFAdg6AgQg6AghZARQg2ALgyAAQgzAAghgLgAgKg8QhWAQg5AfQg1AcAEAXQADAOAbAJQAeALAzAAQAtAAA5gLQBWgQA6ggQAYgNANgNQANgOgCgLQgDgNgbgJQgdgLgzAAQgzAAg0ALg");
	this.shape_97.setTransform(-41.1,-6.1,0.366,0.366,0,0,180);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFC050").s().p("AiMBPQhCgJgGgeQgFgdA6ggQA7ghBXgQQBXgRBDAJQBCAJAGAeQAFAdg6AgQg6AghZARQg4ALgwAAQgaAAgXgDg");
	this.shape_98.setTransform(-41.1,-6.2,0.366,0.366,0,0,180);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#BF8425").s().p("AhFg7IB8gYIAPBPQAEAUgfAZQgfAXg2AUg");
	this.shape_99.setTransform(-46.9,-4.6,0.366,0.366,0,0,180);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFC050").s().p("AgGBCIgYh/IAjgHIAaCJQgUAAgRgDgAATA7IgVhzIgQADIAUBuIARACg");
	this.shape_100.setTransform(-36.7,-2.8,0.366,0.366,0,0,180);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFDA9F").s().p("AgGBCIgYh/IAjgHIAaCJQgUAAgRgDg");
	this.shape_101.setTransform(-36.7,-2.8,0.366,0.366,0,0,180);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CE9229").s().p("AiEBhQhDgJgFgdIgPhOIGohQIAPBOQAFAdg6AgQg6AhhYARQg5AKgvAAQgaAAgXgDg");
	this.shape_102.setTransform(-41.4,-3.9,0.366,0.366,0,0,180);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EDB23E").s().p("AhwA/Qg2gHgEgXQgFgYAvgaQAvgaBHgNQBGgNA1AGQA2AIAEAYQAFAXgvAaQgvAahHAOQgtAIgnAAQgVAAgSgDg");
	this.shape_103.setTransform(-27.6,-2.9,0.366,0.366,0,0,180);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFDA9F").s().p("AivBHQghgLgEgUQgFgeA6gfQA7ggBYgRQA0gKA1AAQAzAAAgAKQAhALAEAUQAFAdg6AgQg7AghYARQg0AKg1ABQgzgBgggKgAgLg9QhWARg4AfQg1AdAEAWQADAOAbAJQAeALAyAAQAxAAA3gKQBVgQA6ghQAYgNANgNQANgOgCgKQgDgOgbgJQgegLgyAAQgxAAg3AKg");
	this.shape_104.setTransform(-27.6,-2.8,0.366,0.366,0,0,180);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFC050").s().p("AiMBPQhCgKgGgdQgFgeA6gfQA7ghBYgQQBWgRBDAJQBCAJAGAeQAFAdg6AgQg7AghYARQg4ALgwAAQgaAAgXgDg");
	this.shape_105.setTransform(-27.6,-2.8,0.366,0.366,0,0,180);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#BF8425").s().p("AhFg7IB8gYIAPBPQAEAVggAYQgeAXg2AUg");
	this.shape_106.setTransform(-33.4,-1.2,0.366,0.366,0,0,180);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFC050").s().p("AgGBCIgYh/IAjgHIAaCJgAASA7IgUhzIgQADIATBuIARACg");
	this.shape_107.setTransform(-23.2,0.5,0.366,0.366,0,0,180);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFDA9F").s().p("AgGBCIgYh/IAjgHIAaCJg");
	this.shape_108.setTransform(-23.2,0.5,0.366,0.366,0,0,180);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#CE9229").s().p("AiEBhQhDgJgFgdIgPhOIGohQIAPBOQAFAdg6AgQg6AhhYARQg4AKgwAAQgaAAgXgDg");
	this.shape_109.setTransform(-27.9,-0.6,0.366,0.366,0,0,180);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EDB23E").s().p("ABZBfQg1gJg/gjQg/giglgnQgkgnALgWQALgVA1AKQA1AJA/AjQA/AiAlAnQAlAngMAVQgIAPgcAAQgMAAgQgDg");
	this.shape_110.setTransform(3.3,-3.9,0.366,0.366,0,0,180);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFDA9F").s().p("ABABrQgwgQgygbQhPgsgtgvQgtgyAOgaQAJgSAlAAQAhAAAvAPQAwAQAxAcQBPAqAuAwQAtAxgOAaQgKATgkgBQghAAgvgOgAi0hiQgFAKAHARQAIAQATAVQAtAuBNAqQAvAbAvAPQAvAPAgAAQAeAAAHgMQALgUgpgtQgtguhMgqQgwgagugQQgvgOggAAQgeAAgHAMg");
	this.shape_111.setTransform(3.3,-3.8,0.366,0.366,0,0,180);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFC050").s().p("ABuB2QhCgLhOgrQhPgrgtgwQgtgxAOgaQAOgbBCAMQBCAMBNArQBPAqAuAxQAtAwgOAbQgKASgiAAQgQAAgUgEg");
	this.shape_112.setTransform(3.3,-3.8,0.366,0.366,0,0,180);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#BF8425").s().p("AADBKQgngBg2gUIBGh/IBvA9IgnBGQgJASgjAAIgFgBg");
	this.shape_113.setTransform(-0.3,0.5,0.366,0.366,0,0,180);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFC050").s().p("AguAsIA9hxIAgARIhCB6QgUgRgHgJgAgiAqIAMANIA4hnIgPgIg");
	this.shape_114.setTransform(8.9,-3.9,0.366,0.366,0,0,180);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFDA9F").s().p("AguAsIA9hxIAgARIhCB6QgUgRgHgJg");
	this.shape_115.setTransform(8.9,-3.9,0.366,0.366,0,0,180);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#CE9229").s().p("ABcCQQhCgMhNgrQhPgqgtgwQgugxAPgbIAmhGIF7DOIgnBHQgKASgiAAQgPAAgVgEg");
	this.shape_116.setTransform(4.1,-2.2,0.366,0.366,0,0,180);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EDB23E").s().p("Ah6ApQgzgRAAgYQAAgXAzgRQAzgRBHAAQBIAAAzARQAzARAAAXQAAAYgzARQgzARhIAAQhHAAgzgRg");
	this.shape_117.setTransform(15.5,-2.5,0.366,0.366,0,0,180);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFDA9F").s().p("AiYAzQg/gVAAgeQAAgdA/gVQA/gVBZgBQBZABBAAVQA/AVAAAdQAAAeg/AVQhAAWhZAAQhZAAg/gWgAiUgpQg5ASAAAXQAAAYA5ASQA+AVBWgBQBXABA+gVQA5gSAAgYQAAgXg5gSQg+gVhXABQhWgBg+AVg");
	this.shape_118.setTransform(15.5,-2.5,0.366,0.366,0,0,180);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFC050").s().p("AiYAzQg/gVAAgeQAAgdA/gVQA/gVBZgBQBZABBAAVQA/AVAAAdQAAAeg/AVQhAAWhZAAQhZAAg/gWg");
	this.shape_119.setTransform(15.5,-2.5,0.366,0.366,0,0,180);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D06F09").s().p("Ag/hIIB/AAIAABPQAAAWgkASQgiASg5AIg");
	this.shape_120.setTransform(9.9,0.2,0.366,0.366,0,0,180);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B27436").s().p("AiYA3Qg/gVAAgeIAAhPIGvAAIAABPQAAAeg/AVQhAAVhZAAQhZAAg/gVg");
	this.shape_121.setTransform(15.5,0.3,0.366,0.366,0,0,180);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#EDB23E").s().p("Ah6AqQgzgRAAgYQAAgXAzgSQAzgRBHAAQBIgBAzARQAzARAAAYQABAXgzASQgzARhJAAIgDAAQhFAAgygQg");
	this.shape_122.setTransform(2.8,-11.9,0.366,0.366,0,0,180);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFDA9F").s().p("AgCBIQhYAAg/gUQg+gVAAgeQgBgdBAgWQA/gVBZAAIADAAQBYAAA/AUQA+AVAAAeQABAdhAAVQg/AWhaAAgAiUgpQg5ATAAAXQAAAXA5ASQA8AUBWAAIACAAQBXAAA+gVQA6gTgBgWQAAgXg4gTQg9gThWAAIgDAAQhWAAg+AUg");
	this.shape_123.setTransform(2.8,-11.8,0.366,0.366,0,0,180);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFC050").s().p("AiYA0Qg/gVAAgeQgBgdBAgWQA/gVBZAAQBZgBBAAVQA/AVAAAeQABAdhAAVQg/AWhaAAIgDAAQhXAAg+gUg");
	this.shape_124.setTransform(2.8,-11.8,0.366,0.366,0,0,180);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#BF8425").s().p("Ag/hIIB/AAIAABPQAAAWgjARQgiATg5AIg");
	this.shape_125.setTransform(-2.8,-9.2,0.366,0.366,0,0,180);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFC050").s().p("AgRA9IgBiCIAkAAIABCLQgQgDgUgGgAAIA6IAAh1IgQAAIABBwIAPAFg");
	this.shape_126.setTransform(7.8,-9.3,0.366,0.366,0,0,180);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFDA9F").s().p("AgRA9IgBiCIAkAAIABCLQgQgDgUgGg");
	this.shape_127.setTransform(7.8,-9.3,0.366,0.366,0,0,180);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#CE9229").s().p("AiYA4Qg/gUAAgeIgBhQIGwgCIAABQQAAAdg/AWQg/AVhaABIgDAAQhXAAg+gVg");
	this.shape_128.setTransform(2.8,-9.1,0.366,0.366,0,0,180);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#EDB23E").s().p("Ah6AqQgzgRgBgYQABgXAzgSQAygRBIAAQBIgBAzARQAzARABAYQAAAXg0ASQgyARhJAAIgDAAQhFAAgygQg");
	this.shape_129.setTransform(11.3,-9.3,0.366,0.366,0,0,180);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFDA9F").s().p("AgCBIQhYAAg/gUQg+gVgBgeQABgdA+gVQBAgWBZAAIADAAQBYAAA/AVQA+AUAAAeQAAAdg/AWQg/AVhaAAgAiUgpQg6ATAAAXQABAXA5ATQA8ATBWAAIACAAQBYAAA9gUQA6gTgBgXQAAgXg5gSQg9gUhVAAIgDAAQhWAAg+AUg");
	this.shape_130.setTransform(11.3,-9.2,0.366,0.366,0,0,180);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFC050").s().p("AiYA0Qg/gVgBgeQABgdA+gVQBAgWBZAAQBZgBA/AVQBAAVAAAeQAAAdg/AWQg/AVhaAAIgDAAQhWAAg/gUg");
	this.shape_131.setTransform(11.3,-9.2,0.366,0.366,0,0,180);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#D06F09").s().p("Ag/hIIB/AAIAABPQAAAWgjASQgiARg5AJg");
	this.shape_132.setTransform(5.7,-6.6,0.366,0.366,0,0,180);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFC050").s().p("AgRA8IAAiBIAjAAIABCLQgTgEgRgGgAAJA5IgBh0IgPAAIAABwQAHADAJABg");
	this.shape_133.setTransform(16.3,-6.6,0.366,0.366,0,0,180);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFDA9F").s().p("AgRA8IAAiBIAjAAIABCLQgTgEgRgGg");
	this.shape_134.setTransform(16.3,-6.6,0.366,0.366,0,0,180);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#CE9229").s().p("AiYA4Qg/gVAAgeIgBhPIGwgCIABBPQAAAeg/AWQg/AVhaABIgDAAQhYAAg+gVg");
	this.shape_135.setTransform(11.3,-6.4,0.366,0.366,0,0,180);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FBC22C").s().p("ABRBRQgwgLg2geQg2gegkghQgjgigDgXQAWgLAvALQAxAMA1AdQA2AeAkAhQAjAiADAYQgLAFgQAAQgSAAgYgGg");
	this.shape_136.setTransform(-26.6,-3.5,0.366,0.366,0,0,180);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F88A00").s().p("ABqAmQgkgjg2gcQg1gegxgLQgvgMgWALQAAgIADgFQALgVA1AJQA1AKA/AiQA/AjAlAmQAkAogLAVQgDAFgHAEQgCgYgjghg");
	this.shape_137.setTransform(-26.8,-4,0.366,0.366,0,0,180);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FBC22C").s().p("ABZBfQg1gJg/gjQg/giglgnQglgnAMgWQAMgVA1AKQA1AJA+AjQBAAiAkAnQAlAngMAVQgIAPgbAAQgNAAgQgDg");
	this.shape_138.setTransform(-26.8,-3.9,0.366,0.366,0,0,180);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F9C66B").s().p("ABuB2QhCgLhOgrQhPgrgtgwQgtgxAOgaQAOgbBCAMQBBAMBOArQBPAqAuAxQAtAwgOAbQgKASgiAAQgQAAgUgEg");
	this.shape_139.setTransform(-26.8,-3.8,0.366,0.366,0,0,180);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#BF8425").s().p("AADBKQgmgBg3gUIBFh/IBwA9IgnBGQgJASgjAAIgFgBg");
	this.shape_140.setTransform(-30.4,0.5,0.366,0.366,0,0,180);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F88A00").s().p("ABcCQQhCgMhNgrQhPgqgtgwQgugxAOgbIAnhGIF7DOIgnBHQgJASgjAAQgPAAgVgEg");
	this.shape_141.setTransform(-26,-2.2,0.366,0.366,0,0,180);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FBC22C").s().p("AhtAhQgvgNgNgUQANgTAvgNQAwgNA9AAQA+AAAvANQAwANANATQgNAUgwANQgvANg+AAQg9AAgwgNg");
	this.shape_142.setTransform(-14.3,-2.1,0.366,0.366,0,0,180);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EDB23E").s().p("Ah6ApQgzgRAAgYQAAgXAzgRQAzgRBHAAQBIAAAzARQAzARAAAXQAAAYgzARQgzARhIAAQhHAAgzgRg");
	this.shape_143.setTransform(-14.2,-2.5,0.366,0.366,0,0,180);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFDA9F").s().p("AiYAzQg/gVAAgeQAAgdA/gVQBAgVBYgBQBaABA/AVQA/AVAAAdQAAAeg/AVQg/AWhaAAQhYAAhAgWgAiUgpQg5ASAAAXQAAAYA5ASQA+AVBWgBQBXABA+gVQA5gSAAgYQAAgXg5gSQg+gVhXABQhWgBg+AVg");
	this.shape_144.setTransform(-14.2,-2.5,0.366,0.366,0,0,180);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFC050").s().p("AiYAzQg/gVAAgeQAAgdA/gVQBAgVBYgBQBaABA/AVQA/AVAAAdQAAAeg/AVQg/AWhaAAQhYAAhAgWg");
	this.shape_145.setTransform(-14.2,-2.5,0.366,0.366,0,0,180);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#D06F09").s().p("Ag/hIIB/AAIAABPQAAAWgkASQgiASg5AIg");
	this.shape_146.setTransform(-19.8,0.2,0.366,0.366,0,0,180);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F88A00").s().p("AiYA3Qg/gVAAgeIAAhPIGvAAIAABPQAAAeg/AVQg/AVhaAAQhYAAhAgVg");
	this.shape_147.setTransform(-14.2,0.3,0.366,0.366,0,0,180);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EDB23E").s().p("Ah6AqQgzgRAAgYQgBgXAzgSQAzgRBIAAQBIgBAzARQAzARAAAYQAAAXgzASQgzARhIAAIgDAAQhGAAgxgQg");
	this.shape_148.setTransform(-18.5,-9.3,0.366,0.366,0,0,180);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFDA9F").s().p("AgCBIQhYAAg/gUQg+gVAAgeQgBgdBAgVQA/gWBZAAIADAAQBZAAA+AVQA+AUAAAeQAAAdg/AWQg/AVhaAAgAiUgpQg6ATABAXQAAAXA5ATQA8ATBWAAIACAAQBXAAA+gUQA5gTAAgXQAAgXg5gSQg8gUhWAAIgDAAQhXAAg9AUg");
	this.shape_149.setTransform(-18.5,-9.2,0.366,0.366,0,0,180);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFC050").s().p("AiYA0Qg/gVAAgeQgBgdBAgVQA/gWBZAAQBZgBBAAVQA/AVAAAeQAAAdg/AWQg/AVhaAAIgDAAQhXAAg+gUg");
	this.shape_150.setTransform(-18.5,-9.2,0.366,0.366,0,0,180);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#BF8425").s().p("Ag/hIIB/AAIAABPQAAAWgjASQgjARg4AJg");
	this.shape_151.setTransform(-24.1,-6.6,0.366,0.366,0,0,180);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFC050").s().p("AgRA8IgBiBIAkAAIAACLQgSgEgRgGgAAIA5IAAh0IgQAAIABBwIAPAEg");
	this.shape_152.setTransform(-13.5,-6.6,0.366,0.366,0,0,180);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFDA9F").s().p("AgRA8IgBiBIAkAAIAACLQgSgEgRgGg");
	this.shape_153.setTransform(-13.5,-6.6,0.366,0.366,0,0,180);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#CE9229").s().p("AiYA4Qg/gVgBgeIAAhPIGwgCIAABPQAAAeg/AWQg+AVhbABIgDAAQhWAAg/gVg");
	this.shape_154.setTransform(-18.5,-6.4,0.366,0.366,0,0,180);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EDB23E").s().p("Ah6AqQgzgRAAgYQAAgXAzgSQAzgRBHAAQBIgBAzARQAzARAAAYQABAYgzARQgzARhJAAIgDAAQhFAAgygQg");
	this.shape_155.setTransform(-4.6,-8.5,0.366,0.366,0,0,180);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFDA9F").s().p("AgCBIQhYAAg/gUQg+gWAAgdQAAgdA/gWQA/gVBZgBIADAAQBYABA/AUQA+AWAAAdQABAdhAAWQg/AVhaAAgAiVgoQgaAJgPALQgPALAAAKQAAAXA5ATQA8ATBWAAIACAAQBYAAA9gUQA6gUgBgWQAAgXg4gTQg9gThWgBIgDAAQhYABg9AVg");
	this.shape_156.setTransform(-4.6,-8.4,0.366,0.366,0,0,180);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFC050").s().p("AiYA0Qg/gVAAgeQAAgdA/gWQA/gVBZgBQBZAABAAVQA/AVAAAeQABAdhAAWQg/AVhaAAIgDABQhXAAg+gVg");
	this.shape_157.setTransform(-4.6,-8.4,0.366,0.366,0,0,180);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#BF8425").s().p("Ag/hIIB/AAIAABPQAAAWgjASQgiASg5AIg");
	this.shape_158.setTransform(-10.2,-5.7,0.366,0.366,0,0,180);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#C99F4B").s().p("AgRA8IgBiBIAkAAIABCLQgWgFgOgFg");
	this.shape_159.setTransform(0.4,-5.8,0.366,0.366,0,0,180);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#CE9229").s().p("AiYA4Qg/gVAAgeIgBhPIGwgCIAABPQABAehAAWQg/AVhaABIgDAAQhWAAg/gVg");
	this.shape_160.setTransform(-4.6,-5.6,0.366,0.366,0,0,180);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#5B4C42").s().p("ACAAIQiuhgjXgVQg2gUgvgLQE5gKDuCMQB3BFA3BIIg5ALQhFhKhtg8g");
	this.shape_161.setTransform(-32.6,-49.1,0.366,0.366,0,0,180);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#7C6657").s().p("At1AnQhUgUhUgEIhDgBIXekwQFAgNDxCNQB5BHA5BJI4rE2Qigi/kLg+g");
	this.shape_162.setTransform(-4.8,-43.6,0.366,0.366,0,0,180);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#68574B").s().p("AojAQQggiFAlh/QgaB6AlB+QAuCfCNCdIN7qiIAQAOIgDAFIuRKzQiZiqgpiqg");
	this.shape_163.setTransform(41.7,-14.4,0.366,0.366,0,0,180);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#967962").s().p("AolhPQAUhYAyhNIAvg7QEKkjF8CdQB4AxB0BYQA6AtAiAiIAVATIgDAEIuRKzQkFkiBBkag");
	this.shape_164.setTransform(41.7,-19.5,0.366,0.366,0,0,180);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#ADAAA3").s().p("Aq8hkQAahxBAhiIA7hMQFTlzHlDJQCYA+CUBxQBKA4AsArIAaAZIyQN2QlMlxBTlng");
	this.shape_165.setTransform(40.2,-18.5,0.366,0.366,0,0,180);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#8C887E").s().p("A1qBeIAThPIcml0QEchKFQC/QCnBgBvBuIAaAZI9hGDg");
	this.shape_166.setTransform(-4.5,-41.9,0.366,0.366,0,0,180);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#231D1A").s().p("Aq8hlQAahwBAhjQAggxAbgaQFTlzHlDJQCYA+CVBxQBKA4AsArIAZAZIyQN2QlMlxBTlog");
	this.shape_167.setTransform(-29,-32.7,0.366,0.366,0,0,180);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#4F3E35").s().p("AsCm0Ic1l4IkFTVI9gGEg");
	this.shape_168.setTransform(17.4,-25.3,0.366,0.366,0,0,180);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#966738").s().p("AttBFIAEAAIbXlbIAAHWIm8BXg");
	this.shape_169.setTransform(19.6,1.7,0.366,0.366,0,0,180);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#966738").s().p("AqUjqIUqDRIgPAEIgBAAIgFABI0VD/g");
	this.shape_170.setTransform(-36.8,0.1,0.366,0.366,0,0,180);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#7C6657").s().p("A5ACzIcSlvIVvDeIhBARI0rjQI7WFag");
	this.shape_171.setTransform(-4.8,-2.7,0.366,0.366,0,0,180);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#7C6657").s().p("A6CghIBRgQIA/AKIgEAAIUgDQIbqlbIgEAAIBBgRIAyAII9cF/g");
	this.shape_172.setTransform(-4.2,5.7,0.366,0.366,0,0,180);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#68574B").s().p("ApDGJIgIu+IABgPIAbAFIAHO2IR0C3IAAAXg");
	this.shape_173.setTransform(30.6,30.4,0.366,0.366,0,0,180);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#967962").s().p("ApDGJIgIu+IABgPISRC8IAFgBIAAPOg");
	this.shape_174.setTransform(30.6,30.4,0.366,0.366,0,0,180);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#ADAAA3").s().p("ArLHlIgJydIABgTIWiDnIAHgBIAASxg");
	this.shape_175.setTransform(30.3,30.7,0.366,0.366,0,0,180);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#59301D").s().p("AsiJtIYylDIAAutIATgEIAAPII5FFHg");
	this.shape_176.setTransform(-30,28.2,0.366,0.366,0,0,180);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#7C6657").s().p("Asik0IZFlTIAAPII5FFHg");
	this.shape_177.setTransform(-30,28.2,0.366,0.366,0,0,180);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#8C887E").s().p("AuxmXIdjmBIAASxI9cGAg");
	this.shape_178.setTransform(-30.6,27.9,0.366,0.366,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.endTresureLIB, new cjs.Rectangle(-65.3,-55.7,131.8,112.7), null);


(lib.endTitleLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("A7tCvIAAldMA3bAAAIAAFdg");
	this.shape.setTransform(-177.2,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.endTitleLIB, new cjs.Rectangle(-354.5,0,354.8,35.1), null);


(lib.endSeperateLineLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#595554").ss(5,0,0,3).p("AAA51MAAAAzr");
	this.shape.setTransform(0,165.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.endSeperateLineLIB, new cjs.Rectangle(-2.5,-2.5,5,335.8), null);


(lib.endPicOverLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("As8HyIAAvjIZ5AAIAAPjg");
	this.shape.setTransform(0,0,1.031,1.031);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.endPicOverLIB, new cjs.Rectangle(-85.5,-51.3,171.1,102.7), null);


(lib.endXbtnLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#595554").ss(5,0,0,3).p("AhOhOIBOBOIhOBPABPhOIhPBOIBPBP");
	this.shape.setTransform(-0.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCD2CF").s().p("AhoBpIAAjRIDRAAIAADRgAABAAIBPBOIhPhOIBPhPIhPBPgAhOBOIBPhOIhPhPIBPBPg");
	this.shape_1.setTransform(-0.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.endXbtnLIB, new cjs.Rectangle(-10.9,-10.4,21,21), null);


(lib.endBigAnswerSpaceLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgihAUuMAAAgpbMBFCAAAMAAAApbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.endBigAnswerSpaceLIB, new cjs.Rectangle(-220.9,-132.6,441.9,265.2), null);


(lib.endAnswerLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#595554").ss(2,0,0,3).p("AAAgBIAAAD");
	this.shape.setTransform(-25.6,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A7uZ5MAAAgzxMAziAAAID7AAMAAAAzxg");
	this.shape_1.setTransform(-178,165.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.endAnswerLIB, new cjs.Rectangle(-355.5,-1.8,355.1,332.9), null);


(lib.witerbiManLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hommeDeVitruve_deVinchi();
	this.instance.parent = this;
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.witerbiManLIB, new cjs.Rectangle(-150,-150,300,300), null);


(lib.monaLisaLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mona_deVinchi();
	this.instance.parent = this;
	this.instance.setTransform(-100.5,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.monaLisaLIB, new cjs.Rectangle(-100.5,-150,201,300), null);


(lib.missWithArminLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.theLady_deVinchi();
	this.instance.parent = this;
	this.instance.setTransform(-114.5,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.missWithArminLIB, new cjs.Rectangle(-114.5,-150,229,300), null);


(lib.lastSupperLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lastMeal_deVinchi();
	this.instance.parent = this;
	this.instance.setTransform(-150,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lastSupperLIB, new cjs.Rectangle(-150,-78,300,156), null);


(lib.vanGochLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.vanGoch();
	this.instance.parent = this;
	this.instance.setTransform(-150,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.vanGochLIB, new cjs.Rectangle(-150,-71.5,300,143), null);


(lib.michaelangeloLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.human_michal();
	this.instance.parent = this;
	this.instance.setTransform(-150,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.michaelangeloLIB, new cjs.Rectangle(-150,-67,300,134), null);


(lib.daliLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dali();
	this.instance.parent = this;
	this.instance.setTransform(-150,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.daliLIB, new cjs.Rectangle(-150,-100.5,300,201), null);


(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 1
	this.text = new cjs.Text("בחר", "bold 12px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 90;
	this.text.parent = this;
	this.text.setTransform(56.5,8.4);

	this.instance = new lib.up();
	this.instance.parent = this;
	this.instance.setTransform(9,-1,0.206,0.206);

	this.instance_1 = new lib.over();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9,-1,0.205,0.205);

	this.instance_2 = new lib.down();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9,-1,0.206,0.206);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance_1},{t:this.text}]},1).to({state:[{t:this.instance_2},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-1,97,34.4);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.sky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4F2F2").s().p("EicMAh0MAAAhDnME4ZAAAMAAABDng");
	this.shape.setTransform(999.7,216.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sky, new cjs.Rectangle(0,0,1999.4,432.9), null);


(lib.sand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C6A4").s().p("AHxDeQkDgipwhiQoyhZk0gkQnYg6logIQqfgPrjAjQlxASjsAUIAAkIQEfAjHTAhQOnBBOIgUQFpgIJZgOQHpgME2gBQMVgBMbBIQF0AhFgAuQC/AZErApQDxAeDSAIQD+ALFegMQseAsu4BvQodA/mgA/IgbADQl6gTnvhDg");
	this.shape.setTransform(6405.8,87.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8B897").s().p("EAvEAGCQr6gKxZi9Qx0jB0pgBQnHgBqrAWQvsAiiAADQj1AFk1ARIgDAAQldAMj/gLQjRgIjxgfQkrgoi/gZQlggtl1giIGgg9QHPhNDthNIAjgMQB6grC3gGQCPgEDFATQBIAGD0AfQC7AWBCgEQEfgWDrAHQHIANIwBkQEzA2LPAXQJ0ATNHgHQL1gHKygaQKkgZEhgfQEHgdDwALQC/AJD0AoQCQAXE6A4QErAyEQAaQIlAyMtAhQGWAQEpAGQkAAKkPADQqAAIuTCEQkdApkYAxIjeApQiJAdkxAAIhhgBg");
	this.shape_1.setTransform(7231.4,82.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD1AB").s().p("AKSCRQi8gZlTgdQkpgZikApQhZAXgTADQg/AIhZgOQhrgPhRgKQAHAADvg4QEYg9DLgVIgEgBQBVgJBegBQDCgCBeg8QA4gkAHgDQAmgRA6AEQBuAGA7AuQAdAXAIAWIAADjQgagGhfgMg");
	this.shape_2.setTransform(7917.5,40);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4C6A4").s().p("EA/TAFAQstggolg0QkQgZkrgyQk5g4iQgYQj0gni/gJQjxgLkHAcQkhAgqjAZQqyAar1AGQtIAIp0gUQrPgWkyg3QowhjnJgNQjrgGkfAVQhBAFi8gXIBAgSQBQgXBTgTQEXhBErgVQB2ABBVgOQBkgRBagqQBqgyBUAVQAzANBvA4QBTAiBXAKQBAAICBAWQB6AVBEAIQDiAZDjgtQBogWBfgRQEig1DbgQQEhgVDjAlQF6A+DoAQQGmAeIggnIAKgBQC5gNDJgWQE2ghD6gDQEpgDE3A1QCCAWA7AEQBfAGBggSQBggSBcgdQAwgPBegjQBvgoA8gJQBZgOBmAZQBkAZDDA6QCKAnB4AYQCfAgC1ASQESAaCBAfQBBAPAKAKQC7gsEXAAQEDAAEvAkQBRAJBrAQQBZANA/gIQATgCBZgXQCkgqEqAaQFTAdC8AYQBfAMAaAGIAAEAQh5AOjVARQmqAjnMARQkpgGmXgRg");
	this.shape_3.setTransform(7397.9,56);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC89F").s().p("Al0B7Qg+glhWgiQiuhDh9ALQgwAEgygDIDkhMQEBhMCPgCQBxgCE9BRQE5BPBwgEQB/gFBvAKQBCAHArAJIAFABQjLAWkZA9QjvA5gGAAQkugkkDAAg");
	this.shape_4.setTransform(7820.8,34.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD1AB").s().p("ADmBvQiBgekRgbQi1gSifgfQh4gYiKgnIDBgwQDWgsBjAWQBDAOCkApQCYAjBsAFQAxACAwgEQB+gLCtBEQBXAiA9AkQkXAAi7AsQgKgKhBgPg");
	this.shape_5.setTransform(7706.3,37.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD1AB").s().p("AObC9Qg7gEiCgWQk3g0kpADQhLgThtgPQjbgfixATQiwATkshQQhegYheggIhMgbQhPgdirgPICBgrQCTgmB1AQQAwAHD6A+QC+AwBvgIQBggHERAUQEOATBXgHQA7gFBeAaQAyAOB7AqQBvAnA2ANQBTATAsgPQBtglBUgJQBngMBqAYICWAhQheAigvAPQhdAdhgASQhIAOhHAAQgYAAgYgCg");
	this.shape_6.setTransform(7419.1,19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD1AB").s().p("ACDCoQg/gQhcgpQhtgyg/gZQhsgshmgbQjIg0lUgYIktgOIAcgOQAigPAigLQBxgkBLAcQAzATDSALQE+ASA+AFQCrAPBPAdIBLAbQBeAgBeAYQEsBQCwgTQCxgTDbAfQBuAPBLATQj6ACk3AhQjJAWi5ANIgKABIgdABQhBAAhCgSg");
	this.shape_7.setTransform(7306.9,19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFD5B6").s().p("AK8CyQjogQl7g+QjhglkiAVQjbAQkhA1Qg4gMhmgQQjLghjjgTQhFgGg/gCIA7glQBLgrBLgmQDvh6CYgLQCXgLISAbQEKANDpAQIEtANQFUAYDIA1QBmAaBtAsQA+AaBtAxQBeApA+ARQBMAUBKgDQkwAWkLAAQjLAAi1gNg");
	this.shape_8.setTransform(7169.5,20.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD1AB").s().p("AgxBFQhDgHh7gVQiBgWhAgIQhWgLhTghICEgYQCqgYC3AFQA+ABBEAGQDkAUDLAgQBlAQA5AMQhgARhoAVQiRAdiRAAQhRAAhRgJg");
	this.shape_9.setTransform(7015.7,34.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFD1AB").s().p("AFSAOQr+gPkWgSIWFAnQiygCi/gEg");
	this.shape_10.setTransform(6616.2,120.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFD1AB").s().p("ApQBwIShjfQgkAIgcAJQjyBJnEBJQltA8g3AAIgHAAg");
	this.shape_11.setTransform(7677.5,62.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFD1AB").s().p("AjcB1QjEgTiQAFQgogfg/gfQh+g+hugFIAzgZQA7gaA7gUQC7hBCFAKQBGAFB6AZQBJAPCiAkQFGBHC/AAQBIAAB9AEQB1AEA0AAQkrAVkXBBQhTAThQAXIhAASQjzgehIgHg");
	this.shape_12.setTransform(6790.9,34);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4C6A4").s().p("Aqlg0QhJgVg1gJIgmgFQiIgKiigHQBSgaBOgSQB+gcBQADQA7ABEKAwQD7AtB9gDQCIgDEcAOIF7ATQBcAECUAqQBaAZBTAfQkEA+gvAKQjSApiLgIQiDgInRAbQlOihjnhBg");
	this.shape_13.setTransform(6423.6,18.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E8B897").s().p("AicCNQi3ghhVgLQiZgUiNAAQihAAjSAYQiRASjiAlIM/kJIgIgBICQgqQCqgvBGgBQAkAAAbAKQAQAGAeAQQBEAgCJgDQCMgDDpALQCiAICIAKIAnAEQA1AJBIAVQDnBDFOCgIonAhQk8ASinACIgSAAQjlAAlQg8g");
	this.shape_14.setTransform(6266.2,21.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F4C6A4").s().p("AkRB+QjXg3h+gHQhQgEhaAAQBYg4B/g4QD9hwDQgNQCygLE+AqQCoAWDdAhIAIABIs+EIIAAAAIgmAHQhSgbhsgcg");
	this.shape_15.setTransform(6124.7,19.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E8B897").s().p("AlcAtQiTghhsgjQASgMAjgTQAZgOCagNQCYgOB7ABQBaAABPAEQB+AHDXA3QBsAcBSAaQi7Afg6AIQiAAUhVAHQgrADgvAAQitAAjngyg");
	this.shape_16.setTransform(6055.8,35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFD1AB").s().p("AM7C0Qk2ABnpALQpYAPlpAIQuIATunhAQnTghkfgkIAAjyQBsAkCTAhQEmBADJgRQBUgHCBgUQA5gIC8gfIAmgHIAAAAQDiglCRgRQDSgZChAAQCNAACZAUQBVALC3AhQFeA/DrgDQCmgCE7gRIIogiQHRgbCEAIQCLAIDSgpQAvgKEEg+IABAAQBBgQAbgDQAsgGBhAfIDbBHQDZBADfAVQEYAZD+AqQB/AUBOARQjtBNnPBMImgA+QsahIsWABg");
	this.shape_17.setTransform(6348.2,46.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F4C6A4").s().p("ADWBfQj8gpkYgaQjggUjYhAIDngrQD0gpA5AJQAvAIDTArQDVAkB7gMQAbgCAZABQBuAFB+A+QA/AgApAeQi3AGh6ArIgjAMQhOgRiAgVg");
	this.shape_18.setTransform(6658.9,37);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFC89F").s().p("EicPAVQMAAAgpgQDsgVFxgRQLjgjKfAPQFoAIHYA5QE0AmIyBYQJxBiEDAjQHvBCF6AUIAbgEQGgg+Idg/QO4hvMegsIACgBQE1gQD2gGQB/gDPtghQKqgXHGAAQUpACR1DCQRZC9L6AJQF9AFCfghIDegoQEXgxEdgpQOTiFKAgHQEQgEEAgJQHMgRGqgjQDVgRB5gOMAAAApug");
	this.shape_19.setTransform(6995.4,213.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4C6A4").s().p("AHxDeQkDgipwhiQoyhZk0gkQnYg6logIQqfgPrjAjQlxASjsAUIAAkIQEfAjHTAhQOnBBOIgUQFpgIJZgOQHpgME2gBQMVgBMbBIQF0AhFgAuQC/AZErApQDxAeDSAIQD+ALFegMQseAsu4BvQodA/mgA/IgbADQl6gTnvhDg");
	this.shape_20.setTransform(4408.3,87.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E8B897").s().p("EAvEAGCQr6gKxZi9Qx0jB0pgBQnHgBqrAWQvsAiiAADQj1AFk1ARIgDAAQldAMj/gLQjRgIjxgfQkrgoi/gZQlggtl1giIGgg9QHPhNDthNIAjgMQB6grC3gGQCPgEDFATQBIAGD0AfQC7AWBCgEQEfgWDrAHQHIANIwBkQEzA2LPAXQJ0ATNHgHQL1gHKygaQKkgZEhgfQEHgdDwALQC/AJD0AoQCQAXE6A4QErAyEQAaQIlAyMtAhQGWAQEpAGQkAAKkPADQqAAIuTCEQkdApkYAxIjeApQiJAdkxAAIhhgBg");
	this.shape_21.setTransform(5233.9,82.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFD1AB").s().p("AKSCRQi8gZlTgdQkpgZikApQhZAXgTADQg/AIhZgOQhrgPhRgKQAHAADvg4QEYg9DLgVIgEgBQBVgJBegBQDCgCBeg8QA4gkAHgDQAmgRA6AEQBuAGA7AuQAdAXAIAWIAADjQgagGhfgMg");
	this.shape_22.setTransform(5920,40);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F4C6A4").s().p("EA/TAFAQstggolg0QkQgZkrgyQk5g4iQgYQj0gni/gJQjxgLkHAcQkhAgqjAZQqyAar1AGQtIAIp0gUQrPgWkyg3QowhjnJgNQjrgGkfAVQhBAFi8gXIBAgSQBQgXBTgTQEXhBErgVQB2ABBVgOQBkgRBagqQBqgyBUAVQAzANBvA4QBTAiBXAKQBAAICBAWQB6AVBEAIQDiAZDjgtQBogWBfgRQEig1DbgQQEhgVDjAlQF6A+DoAQQGmAeIggnIAKgBQC5gNDJgWQE2ghD6gDQEpgDE3A1QCCAWA7AEQBfAGBggSQBggSBcgdQAwgPBegjQBvgoA8gJQBZgOBmAZQBkAZDDA6QCKAnB4AYQCfAgC1ASQESAaCBAfQBBAPAKAKQC7gsEXAAQEDAAEvAkQBRAJBrAQQBZANA/gIQATgCBZgXQCkgqEqAaQFTAdC8AYQBfAMAaAGIAAEAQh5AOjVARQmqAjnMARQkpgGmXgRg");
	this.shape_23.setTransform(5400.4,56);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFC89F").s().p("Al0B7Qg+glhWgiQiuhDh9ALQgwAEgygDIDkhMQEBhMCPgCQBxgCE9BRQE5BPBwgEQB/gFBvAKQBCAHArAJIAFABQjLAWkZA9QjvA5gGAAQkugkkDAAg");
	this.shape_24.setTransform(5823.3,34.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFD1AB").s().p("ADmBvQiBgekRgbQi1gSifgfQh4gYiKgnIDBgwQDWgsBjAWQBDAOCkApQCYAjBsAFQAxACAwgEQB+gLCtBEQBXAiA9AkQkXAAi7AsQgKgKhBgPg");
	this.shape_25.setTransform(5708.8,37.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFD1AB").s().p("AObC9Qg7gEiCgWQk3g0kpADQhLgThtgPQjbgfixATQiwATkshQQhegYheggIhMgbQhPgdirgPICBgrQCTgmB1AQQAwAHD6A+QC+AwBvgIQBggHERAUQEOATBXgHQA7gFBeAaQAyAOB7AqQBvAnA2ANQBTATAsgPQBtglBUgJQBngMBqAYICWAhQheAigvAPQhdAdhgASQhIAOhHAAQgYAAgYgCg");
	this.shape_26.setTransform(5421.6,19);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFD1AB").s().p("ACDCoQg/gQhcgpQhtgyg/gZQhsgshmgbQjIg0lUgYIktgOIAcgOQAigPAigLQBxgkBLAcQAzATDSALQE+ASA+AFQCrAPBPAdIBLAbQBeAgBeAYQEsBQCwgTQCxgTDbAfQBuAPBLATQj6ACk3AhQjJAWi5ANIgKABIgdABQhBAAhCgSg");
	this.shape_27.setTransform(5309.4,19);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFD5B6").s().p("AK8CyQjogQl7g+QjhglkiAVQjbAQkhA1Qg4gMhmgQQjLghjjgTQhFgGg/gCIA7glQBLgrBLgmQDvh6CYgLQCXgLISAbQEKANDpAQIEtANQFUAYDIA1QBmAaBtAsQA+AaBtAxQBeApA+ARQBMAUBKgDQkwAWkLAAQjLAAi1gNg");
	this.shape_28.setTransform(5172,20.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFD1AB").s().p("AgxBFQhDgHh7gVQiBgWhAgIQhWgLhTghICEgYQCqgYC3AFQA+ABBEAGQDkAUDLAgQBlAQA5AMQhgARhoAVQiRAdiRAAQhRAAhRgJg");
	this.shape_29.setTransform(5018.2,34.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFD1AB").s().p("AFSAOQr+gPkWgSIWFAnQiygCi/gEg");
	this.shape_30.setTransform(4618.7,120.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFD1AB").s().p("ApQBwIShjfQgkAIgcAJQjyBJnEBJQltA8g3AAIgHAAg");
	this.shape_31.setTransform(5680,62.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFD1AB").s().p("AjcB1QjEgTiQAFQgogfg/gfQh+g+hugFIAzgZQA7gaA7gUQC7hBCFAKQBGAFB6AZQBJAPCiAkQFGBHC/AAQBIAAB9AEQB1AEA0AAQkrAVkXBBQhTAThQAXIhAASQjzgehIgHg");
	this.shape_32.setTransform(4793.4,34);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F4C6A4").s().p("Aqlg0QhJgVg1gJIgmgFQiIgKiigHQBSgaBOgSQB+gcBQADQA7ABEKAwQD7AtB9gDQCIgDEcAOIF7ATQBcAECUAqQBaAZBTAfQkEA+gvAKQjSApiLgIQiDgInRAbQlOihjnhBg");
	this.shape_33.setTransform(4426.1,18.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E8B897").s().p("AicCNQi3ghhVgLQiZgUiNAAQihAAjSAYQiRASjiAlIM/kJIgIgBICQgqQCqgvBGgBQAkAAAbAKQAQAGAeAQQBEAgCJgDQCMgDDpALQCiAICIAKIAnAEQA1AJBIAVQDnBDFOCgIonAhQk8ASinACIgSAAQjlAAlQg8g");
	this.shape_34.setTransform(4268.7,21.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F4C6A4").s().p("AkRB+QjXg3h+gHQhQgEhaAAQBYg4B/g4QD9hwDQgNQCygLE+AqQCoAWDdAhIAIABIs+EIIAAAAIgmAHQhSgbhsgcg");
	this.shape_35.setTransform(4127.2,19.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E8B897").s().p("AlcAtQiTghhsgjQASgMAjgTQAZgOCagNQCYgOB7ABQBaAABPAEQB+AHDXA3QBsAcBSAaQi7Afg6AIQiAAUhVAHQgrADgvAAQitAAjngyg");
	this.shape_36.setTransform(4058.3,35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFD1AB").s().p("AM7C0Qk2ABnpALQpYAPlpAIQuIATunhAQnTghkfgkIAAjyQBsAkCTAhQEmBADJgRQBUgHCBgUQA5gIC8gfIAmgHIAAAAQDiglCRgRQDSgZChAAQCNAACZAUQBVALC3AhQFeA/DrgDQCmgCE7gRIIogiQHRgbCEAIQCLAIDSgpQAvgKEEg+IABAAQBBgQAbgDQAsgGBhAfIDbBHQDZBADfAVQEYAZD+AqQB/AUBOARQjtBNnPBMImgA+QsahIsWABg");
	this.shape_37.setTransform(4350.7,46.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F4C6A4").s().p("ADWBfQj8gpkYgaQjggUjYhAIDngrQD0gpA5AJQAvAIDTArQDVAkB7gMQAbgCAZABQBuAFB+A+QA/AgApAeQi3AGh6ArIgjAMQhOgRiAgVg");
	this.shape_38.setTransform(4661.4,37);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFC89F").s().p("EicPAVQMAAAgpgQDsgVFxgRQLjgjKfAPQFoAIHYA5QE0AmIyBYQJxBiEDAjQHvBCF6AUIAbgEQGgg+Idg/QO4hvMegsIACgBQE1gQD2gGQB/gDPtghQKqgXHGAAQUpACR1DCQRZC9L6AJQF9AFCfghIDegoQEXgxEdgpQOTiFKAgHQEQgEEAgJQHMgRGqgjQDVgRB5gOMAAAApug");
	this.shape_39.setTransform(4997.9,213.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F4C6A4").s().p("AHxDeQkDgipwhiQoyhZk0gkQnYg6logIQqfgPrjAjQlxASjsAUIAAkIQEfAjHTAhQOnBBOIgUQFpgIJZgOQHpgME2gBQMVgBMbBIQF0AhFgAuQC/AZErApQDxAeDSAIQD+ALFegMQseAsu4BvQodA/mgA/IgbADQl6gTnvhDg");
	this.shape_40.setTransform(2410.1,87.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E8B897").s().p("EAvEAGCQr6gKxZi9Qx0jB0pgBQnHgBqrAWQvsAiiAADQj1AFk1ARIgDAAQldAMj/gLQjRgIjxgfQkrgoi/gZQlggtl1giIGgg9QHPhNDthNIAjgMQB6grC3gGQCPgEDFATQBIAGD0AfQC7AWBCgEQEfgWDrAHQHIANIwBkQEzA2LPAXQJ0ATNHgHQL1gHKygaQKkgZEhgfQEHgdDwALQC/AJD0AoQCQAXE6A4QErAyEQAaQIlAyMtAhQGWAQEpAGQkAAKkPADQqAAIuTCEQkdApkYAxIjeApQiJAdkxAAIhhgBg");
	this.shape_41.setTransform(3235.7,82.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFD1AB").s().p("AKSCRQi8gZlTgdQkpgZikApQhZAXgTADQg/AIhZgOQhrgPhRgKQAHAADvg4QEYg9DLgVIgEgBQBVgJBegBQDCgCBeg8QA4gkAHgDQAmgRA6AEQBuAGA7AuQAdAXAIAWIAADjQgagGhfgMg");
	this.shape_42.setTransform(3921.8,40);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F4C6A4").s().p("EA/TAFAQstggolg0QkQgZkrgyQk5g4iQgYQj0gni/gJQjxgLkHAcQkhAgqjAZQqyAar1AGQtIAIp0gUQrPgWkyg3QowhjnJgNQjrgGkfAVQhBAFi8gXIBAgSQBQgXBTgTQEXhBErgVQB2ABBVgOQBkgRBagqQBqgyBUAVQAzANBvA4QBTAiBXAKQBAAICBAWQB6AVBEAIQDiAZDjgtQBogWBfgRQEig1DbgQQEhgVDjAlQF6A+DoAQQGmAeIggnIAKgBQC5gNDJgWQE2ghD6gDQEpgDE3A1QCCAWA7AEQBfAGBggSQBggSBcgdQAwgPBegjQBvgoA8gJQBZgOBmAZQBkAZDDA6QCKAnB4AYQCfAgC1ASQESAaCBAfQBBAPAKAKQC7gsEXAAQEDAAEvAkQBRAJBrAQQBZANA/gIQATgCBZgXQCkgqEqAaQFTAdC8AYQBfAMAaAGIAAEAQh5AOjVARQmqAjnMARQkpgGmXgRg");
	this.shape_43.setTransform(3402.2,56);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFC89F").s().p("Al0B7Qg+glhWgiQiuhDh9ALQgwAEgygDIDkhMQEBhMCPgCQBxgCE9BRQE5BPBwgEQB/gFBvAKQBCAHArAJIAFABQjLAWkZA9QjvA5gGAAQkugkkDAAg");
	this.shape_44.setTransform(3825.1,34.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFD1AB").s().p("ADmBvQiBgekRgbQi1gSifgfQh4gYiKgnIDBgwQDWgsBjAWQBDAOCkApQCYAjBsAFQAxACAwgEQB+gLCtBEQBXAiA9AkQkXAAi7AsQgKgKhBgPg");
	this.shape_45.setTransform(3710.6,37.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFD1AB").s().p("AObC9Qg7gEiCgWQk3g0kpADQhLgThtgPQjbgfixATQiwATkshQQhegYheggIhMgbQhPgdirgPICBgrQCTgmB1AQQAwAHD6A+QC+AwBvgIQBggHERAUQEOATBXgHQA7gFBeAaQAyAOB7AqQBvAnA2ANQBTATAsgPQBtglBUgJQBngMBqAYICWAhQheAigvAPQhdAdhgASQhIAOhHAAQgYAAgYgCg");
	this.shape_46.setTransform(3423.4,19);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFD1AB").s().p("ACDCoQg/gQhcgpQhtgyg/gZQhsgshmgbQjIg0lUgYIktgOIAcgOQAigPAigLQBxgkBLAcQAzATDSALQE+ASA+AFQCrAPBPAdIBLAbQBeAgBeAYQEsBQCwgTQCxgTDbAfQBuAPBLATQj6ACk3AhQjJAWi5ANIgKABIgdABQhBAAhCgSg");
	this.shape_47.setTransform(3311.2,19);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFD5B6").s().p("AK8CyQjogQl7g+QjhglkiAVQjbAQkhA1Qg4gMhmgQQjLghjjgTQhFgGg/gCIA7glQBLgrBLgmQDvh6CYgLQCXgLISAbQEKANDpAQIEtANQFUAYDIA1QBmAaBtAsQA+AaBtAxQBeApA+ARQBMAUBKgDQkwAWkLAAQjLAAi1gNg");
	this.shape_48.setTransform(3173.8,20.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFD1AB").s().p("AgxBFQhDgHh7gVQiBgWhAgIQhWgLhTghICEgYQCqgYC3AFQA+ABBEAGQDkAUDLAgQBlAQA5AMQhgARhoAVQiRAdiRAAQhRAAhRgJg");
	this.shape_49.setTransform(3020,34.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFD1AB").s().p("AFSAOQr+gPkWgSIWFAnQiygCi/gEg");
	this.shape_50.setTransform(2620.5,120.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFD1AB").s().p("ApQBwIShjfQgkAIgcAJQjyBJnEBJQltA8g3AAIgHAAg");
	this.shape_51.setTransform(3681.8,62.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFD1AB").s().p("AjcB1QjEgTiQAFQgogfg/gfQh+g+hugFIAzgZQA7gaA7gUQC7hBCFAKQBGAFB6AZQBJAPCiAkQFGBHC/AAQBIAAB9AEQB1AEA0AAQkrAVkXBBQhTAThQAXIhAASQjzgehIgHg");
	this.shape_52.setTransform(2795.2,34);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F4C6A4").s().p("Aqlg0QhJgVg1gJIgmgFQiIgKiigHQBSgaBOgSQB+gcBQADQA7ABEKAwQD7AtB9gDQCIgDEcAOIF7ATQBcAECUAqQBaAZBTAfQkEA+gvAKQjSApiLgIQiDgInRAbQlOihjnhBg");
	this.shape_53.setTransform(2427.9,18.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E8B897").s().p("AicCNQi3ghhVgLQiZgUiNAAQihAAjSAYQiRASjiAlIM/kJIgIgBICQgqQCqgvBGgBQAkAAAbAKQAQAGAeAQQBEAgCJgDQCMgDDpALQCiAICIAKIAnAEQA1AJBIAVQDnBDFOCgIonAhQk8ASinACIgSAAQjlAAlQg8g");
	this.shape_54.setTransform(2270.5,21.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F4C6A4").s().p("AkRB+QjXg3h+gHQhQgEhaAAQBYg4B/g4QD9hwDQgNQCygLE+AqQCoAWDdAhIAIABIs+EIIAAAAIgmAHQhSgbhsgcg");
	this.shape_55.setTransform(2129,19.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E8B897").s().p("AlcAtQiTghhsgjQASgMAjgTQAZgOCagNQCYgOB7ABQBaAABPAEQB+AHDXA3QBsAcBSAaQi7Afg6AIQiAAUhVAHQgrADgvAAQitAAjngyg");
	this.shape_56.setTransform(2060.1,35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFD1AB").s().p("AM7C0Qk2ABnpALQpYAPlpAIQuIATunhAQnTghkfgkIAAjyQBsAkCTAhQEmBADJgRQBUgHCBgUQA5gIC8gfIAmgHIAAAAQDiglCRgRQDSgZChAAQCNAACZAUQBVALC3AhQFeA/DrgDQCmgCE7gRIIogiQHRgbCEAIQCLAIDSgpQAvgKEEg+IABAAQBBgQAbgDQAsgGBhAfIDbBHQDZBADfAVQEYAZD+AqQB/AUBOARQjtBNnPBMImgA+QsahIsWABg");
	this.shape_57.setTransform(2352.5,46.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F4C6A4").s().p("ADWBfQj8gpkYgaQjggUjYhAIDngrQD0gpA5AJQAvAIDTArQDVAkB7gMQAbgCAZABQBuAFB+A+QA/AgApAeQi3AGh6ArIgjAMQhOgRiAgVg");
	this.shape_58.setTransform(2663.2,37);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFC89F").s().p("EicPAVQMAAAgpgQDsgVFxgRQLjgjKfAPQFoAIHYA5QE0AmIyBYQJxBiEDAjQHvBCF6AUIAbgEQGgg+Idg/QO4hvMegsIACgBQE1gQD2gGQB/gDPtghQKqgXHGAAQUpACR1DCQRZC9L6AJQF9AFCfghIDegoQEXgxEdgpQOTiFKAgHQEQgEEAgJQHMgRGqgjQDVgRB5gOMAAAApug");
	this.shape_59.setTransform(2999.7,213.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F4C6A4").s().p("AHxDeQkDgipwhiQoyhZk0gkQnYg6logIQqfgPrjAjQlxASjsAUIAAkIQEfAjHTAhQOnBBOIgUQFpgIJZgOQHpgME2gBQMVgBMbBIQF0AhFgAuQC/AZErApQDxAeDSAIQD+ALFegMQseAsu4BvQodA/mgA/IgbADQl6gTnvhDg");
	this.shape_60.setTransform(410.4,87.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E8B897").s().p("EAvEAGCQr6gKxZi9Qx0jB0pgBQnHgBqrAWQvsAiiAADQj1AFk1ARIgDAAQldAMj/gLQjRgIjxgfQkrgoi/gZQlggtl1giIGgg9QHPhNDthNIAjgMQB6grC3gGQCPgEDFATQBIAGD0AfQC7AWBCgEQEfgWDrAHQHIANIwBkQEzA2LPAXQJ0ATNHgHQL1gHKygaQKkgZEhgfQEHgdDwALQC/AJD0AoQCQAXE6A4QErAyEQAaQIlAyMtAhQGWAQEpAGQkAAKkPADQqAAIuTCEQkdApkYAxIjeApQiJAdkxAAIhhgBg");
	this.shape_61.setTransform(1235.9,82.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFD1AB").s().p("AKSCRQi8gZlTgdQkpgZikApQhZAXgTADQg/AIhZgOQhrgPhRgKQAHAADvg4QEYg9DLgVIgEgBQBVgJBegBQDCgCBeg8QA4gkAHgDQAmgRA6AEQBuAGA7AuQAdAXAIAWIAADjQgagGhfgMg");
	this.shape_62.setTransform(1922.1,40);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F4C6A4").s().p("EA/TAFAQstggolg0QkQgZkrgyQk5g4iQgYQj0gni/gJQjxgLkHAcQkhAgqjAZQqyAar1AGQtIAIp0gUQrPgWkyg3QowhjnJgNQjrgGkfAVQhBAFi8gXIBAgSQBQgXBTgTQEXhBErgVQB2ABBVgOQBkgRBagqQBqgyBUAVQAzANBvA4QBTAiBXAKQBAAICBAWQB6AVBEAIQDiAZDjgtQBogWBfgRQEig1DbgQQEhgVDjAlQF6A+DoAQQGmAeIggnIAKgBQC5gNDJgWQE2ghD6gDQEpgDE3A1QCCAWA7AEQBfAGBggSQBggSBcgdQAwgPBegjQBvgoA8gJQBZgOBmAZQBkAZDDA6QCKAnB4AYQCfAgC1ASQESAaCBAfQBBAPAKAKQC7gsEXAAQEDAAEvAkQBRAJBrAQQBZANA/gIQATgCBZgXQCkgqEqAaQFTAdC8AYQBfAMAaAGIAAEAQh5AOjVARQmqAjnMARQkpgGmXgRg");
	this.shape_63.setTransform(1402.5,56);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFC89F").s().p("Al0B7Qg+glhWgiQiuhDh9ALQgwAEgygDIDkhMQEBhMCPgCQBxgCE9BRQE5BPBwgEQB/gFBvAKQBCAHArAJIAFABQjLAWkZA9QjvA5gGAAQkugkkDAAg");
	this.shape_64.setTransform(1825.3,34.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFD1AB").s().p("ADmBvQiBgekRgbQi1gSifgfQh4gYiKgnIDBgwQDWgsBjAWQBDAOCkApQCYAjBsAFQAxACAwgEQB+gLCtBEQBXAiA9AkQkXAAi7AsQgKgKhBgPg");
	this.shape_65.setTransform(1710.9,37.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFD1AB").s().p("AObC9Qg7gEiCgWQk3g0kpADQhLgThtgPQjbgfixATQiwATkshQQhegYheggIhMgbQhPgdirgPICBgrQCTgmB1AQQAwAHD6A+QC+AwBvgIQBggHERAUQEOATBXgHQA7gFBeAaQAyAOB7AqQBvAnA2ANQBTATAsgPQBtglBUgJQBngMBqAYICWAhQheAigvAPQhdAdhgASQhIAOhHAAQgYAAgYgCg");
	this.shape_66.setTransform(1423.7,19);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFD1AB").s().p("ACDCoQg/gQhcgpQhtgyg/gZQhsgshmgbQjIg0lUgYIktgOIAcgOQAigPAigLQBxgkBLAcQAzATDSALQE+ASA+AFQCrAPBPAdIBLAbQBeAgBeAYQEsBQCwgTQCxgTDbAfQBuAPBLATQj6ACk3AhQjJAWi5ANIgKABIgdABQhBAAhCgSg");
	this.shape_67.setTransform(1311.5,19);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFD5B6").s().p("AK8CyQjogQl7g+QjhglkiAVQjbAQkhA1Qg4gMhmgQQjLghjjgTQhFgGg/gCIA7glQBLgrBLgmQDvh6CYgLQCXgLISAbQEKANDpAQIEtANQFUAYDIA1QBmAaBtAsQA+AaBtAxQBeApA+ARQBMAUBKgDQkwAWkLAAQjLAAi1gNg");
	this.shape_68.setTransform(1174,20.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFD1AB").s().p("AgxBFQhDgHh7gVQiBgWhAgIQhWgLhTghICEgYQCqgYC3AFQA+ABBEAGQDkAUDLAgQBlAQA5AMQhgARhoAVQiRAdiRAAQhRAAhRgJg");
	this.shape_69.setTransform(1020.3,34.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFD1AB").s().p("AFSAOQr+gPkWgSIWFAnQiygCi/gEg");
	this.shape_70.setTransform(620.8,120.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFD1AB").s().p("ApQBwIShjfQgkAIgcAJQjyBJnEBJQltA8g3AAIgHAAg");
	this.shape_71.setTransform(1682,62.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFD1AB").s().p("AjcB1QjEgTiQAFQgogfg/gfQh+g+hugFIAzgZQA7gaA7gUQC7hBCFAKQBGAFB6AZQBJAPCiAkQFGBHC/AAQBIAAB9AEQB1AEA0AAQkrAVkXBBQhTAThQAXIhAASQjzgehIgHg");
	this.shape_72.setTransform(795.5,34);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F4C6A4").s().p("Aqlg0QhJgVg1gJIgmgFQiIgKiigHQBSgaBOgSQB+gcBQADQA7ABEKAwQD7AtB9gDQCIgDEcAOIF7ATQBcAECUAqQBaAZBTAfQkEA+gvAKQjSApiLgIQiDgInRAbQlOihjnhBg");
	this.shape_73.setTransform(428.2,18.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E8B897").s().p("AicCNQi3ghhVgLQiZgUiNAAQihAAjSAYQiRASjiAlIM/kJIgIgBICQgqQCqgvBGgBQAkAAAbAKQAQAGAeAQQBEAgCJgDQCMgDDpALQCiAICIAKIAnAEQA1AJBIAVQDnBDFOCgIonAhQk8ASinACIgSAAQjlAAlQg8g");
	this.shape_74.setTransform(270.7,21.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F4C6A4").s().p("AkRB+QjXg3h+gHQhQgEhaAAQBYg4B/g4QD9hwDQgNQCygLE+AqQCoAWDdAhIAIABIs+EIIAAAAIgmAHQhSgbhsgcg");
	this.shape_75.setTransform(129.2,19.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E8B897").s().p("AlcAtQiTghhsgjQASgMAjgTQAZgOCagNQCYgOB7ABQBaAABPAEQB+AHDXA3QBsAcBSAaQi7Afg6AIQiAAUhVAHQgrADgvAAQitAAjngyg");
	this.shape_76.setTransform(60.4,35);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFD1AB").s().p("AM7C0Qk2ABnpALQpYAPlpAIQuIATunhAQnTghkfgkIAAjyQBsAkCTAhQEmBADJgRQBUgHCBgUQA5gIC8gfIAmgHIAAAAQDiglCRgRQDSgZChAAQCNAACZAUQBVALC3AhQFeA/DrgDQCmgCE7gRIIogiQHRgbCEAIQCLAIDSgpQAvgKEEg+IABAAQBBgQAbgDQAsgGBhAfIDbBHQDZBADfAVQEYAZD+AqQB/AUBOARQjtBNnPBMImgA+QsahIsWABg");
	this.shape_77.setTransform(352.7,46.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F4C6A4").s().p("ADWBfQj8gpkYgaQjggUjYhAIDngrQD0gpA5AJQAvAIDTArQDVAkB7gMQAbgCAZABQBuAFB+A+QA/AgApAeQi3AGh6ArIgjAMQhOgRiAgVg");
	this.shape_78.setTransform(663.5,37);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFC89F").s().p("EicPAVQMAAAgpgQDsgVFxgRQLjgjKfAPQFoAIHYA5QE0AmIyBYQJxBiEDAjQHvBCF6AUIAbgEQGgg+Idg/QO4hvMegsIACgBQE1gQD2gGQB/gDPtghQKqgXHGAAQUpACR1DCQRZC9L6AJQF9AFCfghIDegoQEXgxEdgpQOTiFKAgHQEQgEEAgJQHMgRGqgjQDVgRB5gOMAAAApug");
	this.shape_79.setTransform(1000,213.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sand, new cjs.Rectangle(0,0,7995.4,349.1), null);


(lib.lowMountain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BCB3A7").s().p("AgBAEIgFgPIANAXg");
	this.shape.setTransform(5949.3,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DBC4B4").s().p("Ah7HAQoZgBgogGID0hyQD7h4A8goIAFgEQAYgQANgMQAogkgIgXIgLgXQgHgQAAgSQAAgUAPgMIABAAQAIgFA/gWQA6gVAtgdIAHgEQBFguAVh4QAHglABgpIgBghQAOgKAcgZQAbgYANgIQAOgJAMAAQAOAAAQAMQAJAIASATIAJAIQAnA9AzA+QBOBfBVBGQBVBFgVByQgNBLg2BSQgHAAg3BpQg3BrgFAAQhBAImnAAIiOAAg");
	this.shape_1.setTransform(5912.1,64.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C9ADA1").s().p("AAjHyQwDgNg6AJQBVhlBVhsQCsjZAEglQAEgihKh5IhritQghhEhSiGIAagKQAegGAVAQQASANAQgMQAOgMALALQATARARACQATADAZgPQAMgHAJAJQAFAFANAWQAgA6AoAcQAmAaA2AyQAhgJAcgBQApgCAOAQIAkAyQAYAkAfAaIANAKQA6AsAZAOIhghEIAegdIA3AmQBAApAxAMIABABIABAAIABAAIABAAIACABIABAAIAAAAIADABQB2AdE1A1QDpAnB9AqQBFAXBlA2QA/AhBoC2QA0BcAnBVQn2gIoCgGg");
	this.shape_2.setTransform(4107.9,57.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C9ADA1").s().p("AkoDSQgggdgMgJQgSgOgHAIQgSAXg3AFQg8AFgagfQgGgIgMgGQARgNAkg5QAqhCAlgoQA5hABcAYQAYAHAvARQAoAMAZgDQAygGhmhFIi1hwIgzggQgXgNgPgFQBVAXA4AAQAUAAATgHIAigNQAogOA1AWQB4AvBRAbQCUAwBkAHIDqARIggAgQhgBngqApQhGBEgpgCQgkgChhAiQhlAjgaABQgXAAgkAgQgkAghAAEIgHAAQg+AAhGg7g");
	this.shape_3.setTransform(5557.1,46.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BAA59E").s().p("AodHWQgQhbgYhRQgvifhEACQgvABgFgRQgEgRAngsQANgOAgggQAegeARgbQAxhOgYhtQgUhfgugnQgegXgRgQQgfgcgcgsQANgFARALQAeASCgBoQCeBhBIAAQCDAABUAKQCLAQBEAsQBAAqAlAfQAQADASAJQAOAIAgAVQAWAPANAEQAjAKBKgkQBSgoBghKQBdhHALgbQACgIgBgaQgBgKAegIQAOgEANgJIgFAEIAAAhQgBAngFAlQgVB3hCAuQgvAeg+AVQg8ATgLAJIAAAAQgVANAAAYQAAASAGAQIAMAXQAHAXgoAkQgOANgQALIgGAEQg9Aoh1A7IhqA1QAsgWlECYg");
	this.shape_4.setTransform(5855.7,61.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D8BAA7").s().p("AhrIGQgEAAA1hcIBHh4QAshJAPhIQAbiAhShDQhVhGhNhfQgzg+gng9QAYATAbADQAnAEADgXIgEgXIA7gzQA8gxACAHQAFAPA5AQQBDASAogdQAngcAfgqQAPgVAHgQIAAQRQgqAChAABIhGABQhXAAhQgFg");
	this.shape_5.setTransform(5973.7,56.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C9BFB1").s().p("AAlgZQAGglABgoIgBggIAGgEIABAAIAAAhQgBAogGAmQgVB3hFAuIgCABQBCgvAUh1g");
	this.shape_6.setTransform(5927.6,41.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C9BFB1").s().p("AgFBCQAmgkgHgXIgLgWQgHgRAAgSQAAgYAVgMQgPALAAAVQAAASAHARIALAWQAIAWgoAlQgLALgVAOQAOgKANgLg");
	this.shape_7.setTransform(5901.7,71.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BCB3A7").s().p("AAlgZQAGglABgoIgBggIAGgEIABAAIAAAhQgBAogGAmQgVB3hFAuIgCABQBCgvAUh1g");
	this.shape_8.setTransform(5927.6,41.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BCB3A7").s().p("AgFBCQAmgkgHgXIgLgWQgHgRAAgSQAAgYAVgMQgPALAAAVQAAASAHARIALAWQAIAWgoAlQgLALgVAOQAOgKANgLg");
	this.shape_9.setTransform(5901.7,71.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D3B6A7").s().p("AhiGuQgegqgUgoQgLgXhYh+QhUh5gLgcQgXg2gxgyQhAhBhPgYQghgJgngZQAIAFBNgXQBTgaAqgaQAwgdAegDQAhgDBeARQBBANBpAeQBRATAjgZQAmgZA7gZIA0gVIA4gpIAEAZQALAQAlgpQAYgbAUg1QASgtAMgGQAbAsAfAcQASAQAdAXQAvAmAUBgQAYBsgxBPQgRAbgeAeQggAfgNAPQgmAsAEAOQADANAwAFQAeAEAbAXQAQAOAWAeQAOARAXB7QANA9AKA6IqyACQgJAAgdgqg");
	this.shape_10.setTransform(5738.5,61.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BAA59E").s().p("AgdEFQgphAgbg6QgTgogBgGQgGgWAFgzQAMhaAAgdQgBgpggguQgfgtAFgpQADgYAag0QAaAkAiATQCIBMAjAcQBSBDgMBLIgPBiQgFAmAAAUQAAATgXDbQg3gBgNACIgCABQgaAAg3hYg");
	this.shape_11.setTransform(5658.9,75.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C9ADA1").s().p("AibEPIAkjgQAMhJhShDQgjgciJhNQgigSgZgkQgfgrgShAQgLgogEgsQAmADAoARQBJAgBWBFQBvBZATAMQAnAZAgAIQBPAYA/BBQAxAzAXA2QAOAjCJCyQB8CiAqAwQhmgIkZAKIkdANIAcitg");
	this.shape_12.setTransform(5687.4,66.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DBC4B4").s().p("AAgG1QzygJhPAHQgpADCDifQCAicAggRQAagOANgTQARgWgJgYQgNgfAhgNQBHgeAJgHQBDgvAjgpIBLAPQBcAUBVAWQA6APB2AJQBkAHAcAOQAMAGAGAIQAaAeA8gEQA3gFASgXQAHgIATAOQALAJAgAcQBJA+BBgDQBAgEAlggQAkggAXAAQAagBBlgiQBhgiAkACQApACBHhEQApgpBghoIAgggIABAAQBFhDA4gfQBMgrBJAHQAEAsAMApQARBAAfAqQgaA0gDAYQgGApAgAtQAgAuAAAoQABAdgMBbQgFAyBCCCQA7B2AUAOQgiAHnKAAQkxAAnvgDg");
	this.shape_13.setTransform(5528.6,65.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C6BDB0").s().p("AgXAFIAvgLQgRANgSAAIgMgCg");
	this.shape_14.setTransform(5500.4,62.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D3B6A7").s().p("AhCC/Qh2gIg6gPQhUgWhcgUIhMgQQBThfgghkQBZADBZgPQBigQAvgeQApgaALAKQAFAFgCALIAfADQAogEAxgiQAhgWAUgHQAWgHAUAFIAGABQAQAFAXAOIAzAgIC1BvQBmBEgzAHQgYADgogNQgvgRgZgFQhbgYg5A/QglAogqBDQgkA4gRAOQgdgPhjgHg");
	this.shape_15.setTransform(5496.6,40.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C9ADA1").s().p("AqoDiQE3kiAfhwQAWhRgKhFQgMhWg9gqIhXg9QARgGAQABQAoAECTBtQCSBrAwACQA7ACCAAWQBAALA1ALICpBPQCsBXANAiQANAjAogoQAUgUARgbIA0AEIAwgmIA4AbIAMgaQAQghATgaQA8hVBGADQAgBlhTBgQgjAphDAuQg3AfgQAMQgYATANAiQAIAWiaCvIinC3QhtgGqlAUQp1AUg+AFQCWh6C6itg");
	this.shape_16.setTransform(5351.3,59.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DBC4B4").s().p("ABRHYQgTgQixjMQi5jTgcgoQgQgVgTgpIgghAQgqhIhDgSQgqgLhDg0IBVgUQBegYAtgTQAtgUBIAIQAjAEAbAIIB2ApQB7AmAggQQA0gZAcgLIAigpIA0AOIA4gOIAiAAIAggyQAog1ApgOIBXA+QA9AqAWBUQASBFgJBSQgFAvhDBPQhEBJgHANQgoBJhvCIQiXC5hOAAIgDgBg");
	this.shape_17.setTransform(5259.4,55.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D3B6A7").s().p("AgYIZQl9gEgiAKQALgPAqhWQAyhnAqhiQB8kighg7Qgig9hqhhQhnhegUgoQgZg1gNgwQgJgfAAgKIAXAIQA1AYBjBUICiCHQBDA1AqAKQBDATApBHIAgBAQATApAQAWQApA6FtGQIilBgQi3gEi+gCg");
	this.shape_18.setTransform(5215.7,56.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C9ADA1").s().p("A0lIWIEVi6QEnjDBbgwQBhgygKgqQgDgPgWgZQgdgggPgTQgngxgshmQgthwgSgnQgjhRgiguIAPABQASAEAPANQAOALATgIQATgJAHAGIAhAZQAWAOASgLQAOgJAVgZQARgOARAbQA0BSBCBRIAOARICSARIATAmQAbArAlAeIAfgdIA0AkQA8AlApAIQA6ANAwACQA8ACAXgRQAQgKASgGQAagIAsgYQAqgXBJAMQBFALAfgYQBghLB3iAQBDhIBFgnQBfg1BPAWQAAAKAJAfQANAxAZA0QAUApBnBdQBqBhAiA+QAkA/gEAuQgDAjggAwQgXAjhjDXIhgDQg");
	this.shape_19.setTransform(5066.7,56.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C6BDB0").s().p("Ag1g1IBrBrQg2gvg1g8g");
	this.shape_20.setTransform(5025,31.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BAA59E").s().p("ABaDxQkrhnhBhEIi+jFIAxAiQAwAdARgPQARgQAHgSIAEgPQAWAAA5gkQAdgTAYgSIB1AAIBTgmIAyg2QA2gyAYASQAUAOAWAeQAhAuAkBRQARAnAtBvQAsBmAnAwQAQAUAcAgQAWAZAEAQQAJAphgAzQiJgmiWg0g");
	this.shape_21.setTransform(4963.6,33.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D8BAA7").s().p("AuiGtQIwkRAzgmQAegUgMgbQgTgrABgTQACgTAHgIQAGgHATgIQBIgcA9gqQBUg6ALhkQAEgfgEggIgFgZQAegcA/gnQAggTAagPIC/DHQBBBEEsBnQCVA0CJAlQhbAwjfDKIjNC/g");
	this.shape_22.setTransform(4908.1,65.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BAA59E").s().p("AoYG/QgShIgahJQg0iSgpgFQgzgHgKgRQgLgTAmgmIA5gvQAsgiAYgeQBNhfg1hxQg0huhUg1QgbgRgbgJQgPgFgIgBQAagQAUAAQAdgBCQBZQCSBbA/ACQDDAGAQACQCGALA4AoQBPA5BbAqQAdgMAXARIA5AxQAZAOA4gNQA4gMCEhnQBWhEBJhEIAFAaQAEAfgEAfQgLBkhUA6Qg9AqhIAdQgTAHgGAGQgHAJgCAUQgBASATAsQAMAageAVQgzAlovERg");
	this.shape_23.setTransform(4825.3,62.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DBC4B4").s().p("AEqHBQkiACgYACQhIhahQhnQiejMgjg8QglhCgjgXIiMhCQgbgOgigWIBYgSQBegXAggVQAggUA9ABIBwADQAvgCB5ATQA8AKAzAKIAmgoIAmAAIAWgfIA+gDIAVgnIAhAAIAhgoQAogrAigUQAJABAOAFQAbAJAbARQBUA1A0BuQA1BxhMBfQgZAdgsAjIg5AvQglAlAMATQAJAQAyAIQA+ALAxCSQAYBIARBSQgegFkzABg");
	this.shape_24.setTransform(4709.6,63.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C9ADA1").s().p("AjvD8Qg6gEgoACQAqgmAmgnQA1g3APgdQARgeALgjQAOgVA/ACQAwACBGAGQAsAAgSgYQgRgYihhlIihhjQAggUAYAFQAHACA8AfQAuAYArgIQA7gMAaAAQAjAAAxAPQBEAVCoASQhrAvh4CDQhqCCgRAQQgYAWgQACQgYgBgWADQgdADgMAJQgRAQgSAPQgWASgpAAIgCAAg");
	this.shape_25.setTransform(4562.7,41.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D3B6A7").s().p("AguEDQg7gIg2grIgrgrIgpA9IgggSQgngUgMgtQgKgngVgDQgRgCgYAIQgSAGgdAOQgggkgpgcQgLgHgRgPIBhgtQBjg0ANgbQALgYAlAFQA+AJAggGQApgHBIg3QBCgxAVACQAOACALAHIARALQATAKAogTQAYgMAdgVIArgeIAAAAIChBiQCiBmARAYQASAYgsAAQhHgFgxgCQg+gCgOAUQgMAjgQAdQgQAeg1A3QglAmgrAnIgDAAQggADg6AVQggAMgiAAQgPAAgPgCg");
	this.shape_26.setTransform(4514.5,44.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BAA59E").s().p("Ah3AeQADhHgSg2IghhTQgKgeAWg7QAOgnAXgnQAcAjAeASQBfA8A1AxQBRBLACBAQABAzgQA/QgLApgPAiQgGgBgKAeIgWBDQgjBkgpAFQiJjzAChJg");
	this.shape_27.setTransform(4630.3,73.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C9ADA1").s().p("AkOGjQAuhdAnhYQBNirgCgyQgDg/hRhLQg2gxhfg6QgfgTgcgjQgfgkgeg6Igeg5QBTAIBvBIQA+AoByBTQAiAWAbAOICLBDQAjAWAlBCQAjA8CeDNQBQBmBIBaQiSAOj+ACIhDAAQjeAAhLgPg");
	this.shape_28.setTransform(4658.5,67);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D3B6A7").s().p("AGiGuQjAgGgLADImsjkIgBABQg1gUhBgVQhjgfhRgQQh8hFhOgpIApg8IArArQA2AqA7AIQA0AHAtgRQA6gVAggDIADAAQApgCA5ADQArABAWgSQATgPARgQQAMgJAdgDQAWgCAYABQAQgCAYgWQARgRBpiCQB4iDBsgwQAQgHASgFQAsgOAwAEIAeA5QAeA6AfAlQgXAngOAnQgWA8ALAeQALAcAhA2QAbA3gCBHQgBAvA8CLQA2B/APAPQg8AIhpAAQg7AAhJgDg");
	this.shape_29.setTransform(4561.6,66.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DBC4B4").s().p("AUqF/I0RgCQzfgChlgMQBniMBniDQDOkDApgIQAngHASAlIANAfQAIAQALAGIA9hNIAJAGQALAIANAGIAjglQAngkAVAEQAXAFAXgJQANgEAZgNQAJgDANAHQAMAIAcgMQANgFAWgWIAqguQAngtASgPQAdgXAOAOQALAOAdAqIAVgDQAdgDAiAGQA4AKAfAHIBBgVIAZAiQAfAoAbAZQARAPALAIQApAbAgAlQAdgPARgGQAYgIARADQAWADAKAmQAMAtAmAVIAhARQAxAbB9AjQBDAUBmAbQA1APEYCXQEWCVgZAAIAAAAg");
	this.shape_30.setTransform(4450.9,71.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C6BDB0").s().p("AgfgIIA/ARQgfgCgggPg");
	this.shape_31.setTransform(4385.3,57.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C6BDB0").s().p("AgTgDIAnAHIgHAAQgPAAgRgHg");
	this.shape_32.setTransform(4374.7,62.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C9ADA1").s().p("AmQD8QAUihAngwQBKhaANgkQASgxgWhaQgThRg4g+IgzguQAjgGAdAOQAVALCVBsQByBSAwAAQBNAAA6AHQBMAJAVATQAQAOARgNQATgNARAMIBlBIIgpAuQgWAWgOAFQgbAMgNgIQgNgHgJADQgYANgOAEQgXAIgWgEQgWgEgnAjIgjAlQgMgGgLgIIgJgGIg9BNQgPgIgfgaQgZgVgNgBQgcgDg/BVQgJgBhiB/QhkCDghAHQgFgfARiDg");
	this.shape_33.setTransform(4372.4,49.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D3B6A7").s().p("ADHH1IjHgGQgVgbiakFQickHgXg1QgfhGgLgLQgTgShYgoQgtgUg9g1IBjgDQBkgGAcgWQAcgWAfgBQASgBAiAEQAeAAA8AHQBDAHAhAKQAZAHAzAVQAuAOAlgPQA7gYA7geIBCAAIA+gdIAtgrQA3guAvgJIA0AuQA3A+AUBRQAWBagSAxQgNAkhKBbQgnAvgND3QgJDFAGAzQglAIh4AAIhogCg");
	this.shape_34.setTransform(4286.8,58.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C9ADA1").s().p("AilhSQgQgnhzh3Qh8h/gUgfQgagogMguQgIgdgBgVIAVAEQBGATBfBRQA1AuBnBgQA9A2AsATQBYAoASASQALALAfBHQAWAxCpEEQCiD5AbAgQh9gHkxAGQk9AHg4APQC1okgfhGg");
	this.shape_35.setTransform(4240.4,55.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DBC4B4").s().p("AGuFeQhmi+gxgHIAAAAQhAgkhRgiQichCjagkQk2g1h2gdIgDgBIAAAAIgBAAQAPADAMABQAqACBJgeQBCgcAbAHQAcAHA4gfQA5gfAZAHQAvAMA7gYQBKggBJhVQBihzA+grQBfhEBfARQABAWAHAdQAMAuAaAoQAUAeB0B3QBvBzAdAzQAZAugIBDQgGAugTAwQgGACg4DMQg3DMgGABQgphdg0heg");
	this.shape_36.setTransform(4158.5,55.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C6BDB0").s().p("AgigWIgNgLIBfBDQgYgOg6gqg");
	this.shape_37.setTransform(4075.6,42.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D8BAA7").s().p("AjEnhQAIgXANgRQAaghAWAjIAhA3QBSCGAgBEIBrCtQBKB4gEAjQgEAlhhCcQgxBOgvBGQg7BShLAgQglARgZAAg");
	this.shape_38.setTransform(4017.7,53.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C6BDB0").s().p("AgigWIgNgLIBfBDQgYgOg6gqg");
	this.shape_39.setTransform(4075.6,42.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BCB3A7").s().p("AgBAEIgFgPIANAXg");
	this.shape_40.setTransform(3951.1,23.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DBC4B4").s().p("Ah7HAQoZgBgogGID0hyQD7h4A8goIAFgEQAYgQANgMQAogkgIgXIgLgXQgHgQAAgSQAAgUAPgMIABAAQAIgFA/gWQA6gVAtgdIAHgEQBFguAVh4QAHglABgpIgBghQAOgKAcgZQAbgYANgIQAOgJAMAAQAOAAAQAMQAJAIASATIAJAIQAnA9AzA+QBOBfBVBGQBVBFgVByQgNBLg2BSQgHAAg3BpQg3BrgFAAQhBAImnAAIiOAAg");
	this.shape_41.setTransform(3913.9,64.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C9ADA1").s().p("AAjHyQwDgNg6AJQBVhlBVhsQCsjZAEglQAEgihKh5IhritQghhEhSiGIAagKQAegGAVAQQASANAQgMQAOgMALALQATARARACQATADAZgPQAMgHAJAJQAFAFANAWQAgA6AoAcQAmAaA2AyQAhgJAcgBQApgCAOAQIAkAyQAYAkAfAaIANAKQA6AsAZAOIhghEIAegdIA3AmQBAApAxAMIABABIABAAIABAAIABAAIACABIABAAIAAAAIADABQB2AdE1A1QDpAnB9AqQBFAXBlA2QA/AhBoC2QA0BcAnBVQn2gIoCgGg");
	this.shape_42.setTransform(2109.7,57.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C9ADA1").s().p("AkoDSQgggdgMgJQgSgOgHAIQgSAXg3AFQg8AFgagfQgGgIgMgGQARgNAkg5QAqhCAlgoQA5hABcAYQAYAHAvARQAoAMAZgDQAygGhmhFIi1hwIgzggQgXgNgPgFQBVAXA4AAQAUAAATgHIAigNQAogOA1AWQB4AvBRAbQCUAwBkAHIDqARIggAgQhgBngqApQhGBEgpgCQgkgChhAiQhlAjgaABQgXAAgkAgQgkAghAAEIgHAAQg+AAhGg7g");
	this.shape_43.setTransform(3558.9,46.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BAA59E").s().p("AodHWQgQhbgYhRQgvifhEACQgvABgFgRQgEgRAngsQANgOAgggQAegeARgbQAxhOgYhtQgUhfgugnQgegXgRgQQgfgcgcgsQANgFARALQAeASCgBoQCeBhBIAAQCDAABUAKQCLAQBEAsQBAAqAlAfQAQADASAJQAOAIAgAVQAWAPANAEQAjAKBKgkQBSgoBghKQBdhHALgbQACgIgBgaQgBgKAegIQAOgEANgJIgFAEIAAAhQgBAngFAlQgVB3hCAuQgvAeg+AVQg8ATgLAJIAAAAQgVANAAAYQAAASAGAQIAMAXQAHAXgoAkQgOANgQALIgGAEQg9Aoh1A7IhqA1QAsgWlECYg");
	this.shape_44.setTransform(3857.5,61.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D8BAA7").s().p("AhrIGQgEAAA1hcIBHh4QAshJAPhIQAbiAhShDQhVhGhNhfQgzg+gng9QAYATAbADQAnAEADgXIgEgXIA7gzQA8gxACAHQAFAPA5AQQBDASAogdQAngcAfgqQAPgVAHgQIAAQRQgqAChAABIhGABQhXAAhQgFg");
	this.shape_45.setTransform(3975.5,56.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C9BFB1").s().p("AAlgZQAGglABgoIgBggIAGgEIABAAIAAAhQgBAogGAmQgVB3hFAuIgCABQBCgvAUh1g");
	this.shape_46.setTransform(3929.4,41.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C9BFB1").s().p("AgFBCQAmgkgHgXIgLgWQgHgRAAgSQAAgYAVgMQgPALAAAVQAAASAHARIALAWQAIAWgoAlQgLALgVAOQAOgKANgLg");
	this.shape_47.setTransform(3903.5,71.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BCB3A7").s().p("AAlgZQAGglABgoIgBggIAGgEIABAAIAAAhQgBAogGAmQgVB3hFAuIgCABQBCgvAUh1g");
	this.shape_48.setTransform(3929.4,41.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BCB3A7").s().p("AgFBCQAmgkgHgXIgLgWQgHgRAAgSQAAgYAVgMQgPALAAAVQAAASAHARIALAWQAIAWgoAlQgLALgVAOQAOgKANgLg");
	this.shape_49.setTransform(3903.5,71.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D3B6A7").s().p("AhiGuQgegqgUgoQgLgXhYh+QhUh5gLgcQgXg2gxgyQhAhBhPgYQghgJgngZQAIAFBNgXQBTgaAqgaQAwgdAegDQAhgDBeARQBBANBpAeQBRATAjgZQAmgZA7gZIA0gVIA4gpIAEAZQALAQAlgpQAYgbAUg1QASgtAMgGQAbAsAfAcQASAQAdAXQAvAmAUBgQAYBsgxBPQgRAbgeAeQggAfgNAPQgmAsAEAOQADANAwAFQAeAEAbAXQAQAOAWAeQAOARAXB7QANA9AKA6IqyACQgJAAgdgqg");
	this.shape_50.setTransform(3740.3,61.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#BAA59E").s().p("AgdEFQgphAgbg6QgTgogBgGQgGgWAFgzQAMhaAAgdQgBgpggguQgfgtAFgpQADgYAag0QAaAkAiATQCIBMAjAcQBSBDgMBLIgPBiQgFAmAAAUQAAATgXDbQg3gBgNACIgCABQgaAAg3hYg");
	this.shape_51.setTransform(3660.7,75.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C9ADA1").s().p("AibEPIAkjgQAMhJhShDQgjgciJhNQgigSgZgkQgfgrgShAQgLgogEgsQAmADAoARQBJAgBWBFQBvBZATAMQAnAZAgAIQBPAYA/BBQAxAzAXA2QAOAjCJCyQB8CiAqAwQhmgIkZAKIkdANIAcitg");
	this.shape_52.setTransform(3689.2,66.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DBC4B4").s().p("AAgG1QzygJhPAHQgpADCDifQCAicAggRQAagOANgTQARgWgJgYQgNgfAhgNQBHgeAJgHQBDgvAjgpIBLAPQBcAUBVAWQA6APB2AJQBkAHAcAOQAMAGAGAIQAaAeA8gEQA3gFASgXQAHgIATAOQALAJAgAcQBJA+BBgDQBAgEAlggQAkggAXAAQAagBBlgiQBhgiAkACQApACBHhEQApgpBghoIAgggIABAAQBFhDA4gfQBMgrBJAHQAEAsAMApQARBAAfAqQgaA0gDAYQgGApAgAtQAgAuAAAoQABAdgMBbQgFAyBCCCQA7B2AUAOQgiAHnKAAQkxAAnvgDg");
	this.shape_53.setTransform(3530.4,65.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C6BDB0").s().p("AgXAFIAvgLQgRANgSAAIgMgCg");
	this.shape_54.setTransform(3502.2,62.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D3B6A7").s().p("AhCC/Qh2gIg6gPQhUgWhcgUIhMgQQBThfgghkQBZADBZgPQBigQAvgeQApgaALAKQAFAFgCALIAfADQAogEAxgiQAhgWAUgHQAWgHAUAFIAGABQAQAFAXAOIAzAgIC1BvQBmBEgzAHQgYADgogNQgvgRgZgFQhbgYg5A/QglAogqBDQgkA4gRAOQgdgPhjgHg");
	this.shape_55.setTransform(3498.4,40.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C9ADA1").s().p("AqoDiQE3kiAfhwQAWhRgKhFQgMhWg9gqIhXg9QARgGAQABQAoAECTBtQCSBrAwACQA7ACCAAWQBAALA1ALICpBPQCsBXANAiQANAjAogoQAUgUARgbIA0AEIAwgmIA4AbIAMgaQAQghATgaQA8hVBGADQAgBlhTBgQgjAphDAuQg3AfgQAMQgYATANAiQAIAWiaCvIinC3QhtgGqlAUQp1AUg+AFQCWh6C6itg");
	this.shape_56.setTransform(3353.1,59.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DBC4B4").s().p("ABRHYQgTgQixjMQi5jTgcgoQgQgVgTgpIgghAQgqhIhDgSQgqgLhDg0IBVgUQBegYAtgTQAtgUBIAIQAjAEAbAIIB2ApQB7AmAggQQA0gZAcgLIAigpIA0AOIA4gOIAiAAIAggyQAog1ApgOIBXA+QA9AqAWBUQASBFgJBSQgFAvhDBPQhEBJgHANQgoBJhvCIQiXC5hOAAIgDgBg");
	this.shape_57.setTransform(3261.2,55.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D3B6A7").s().p("AgYIZQl9gEgiAKQALgPAqhWQAyhnAqhiQB8kighg7Qgig9hqhhQhnhegUgoQgZg1gNgwQgJgfAAgKIAXAIQA1AYBjBUICiCHQBDA1AqAKQBDATApBHIAgBAQATApAQAWQApA6FtGQIilBgQi3gEi+gCg");
	this.shape_58.setTransform(3217.5,56.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C9ADA1").s().p("A0lIWIEVi6QEnjDBbgwQBhgygKgqQgDgPgWgZQgdgggPgTQgngxgshmQgthwgSgnQgjhRgiguIAPABQASAEAPANQAOALATgIQATgJAHAGIAhAZQAWAOASgLQAOgJAVgZQARgOARAbQA0BSBCBRIAOARICSARIATAmQAbArAlAeIAfgdIA0AkQA8AlApAIQA6ANAwACQA8ACAXgRQAQgKASgGQAagIAsgYQAqgXBJAMQBFALAfgYQBghLB3iAQBDhIBFgnQBfg1BPAWQAAAKAJAfQANAxAZA0QAUApBnBdQBqBhAiA+QAkA/gEAuQgDAjggAwQgXAjhjDXIhgDQg");
	this.shape_59.setTransform(3068.5,56.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C6BDB0").s().p("Ag1g1IBrBrQg2gvg1g8g");
	this.shape_60.setTransform(3026.8,31.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BAA59E").s().p("ABaDxQkrhnhBhEIi+jFIAxAiQAwAdARgPQARgQAHgSIAEgPQAWAAA5gkQAdgTAYgSIB1AAIBTgmIAyg2QA2gyAYASQAUAOAWAeQAhAuAkBRQARAnAtBvQAsBmAnAwQAQAUAcAgQAWAZAEAQQAJAphgAzQiJgmiWg0g");
	this.shape_61.setTransform(2965.4,33.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D8BAA7").s().p("AuiGtQIwkRAzgmQAegUgMgbQgTgrABgTQACgTAHgIQAGgHATgIQBIgcA9gqQBUg6ALhkQAEgfgEggIgFgZQAegcA/gnQAggTAagPIC/DHQBBBEEsBnQCVA0CJAlQhbAwjfDKIjNC/g");
	this.shape_62.setTransform(2909.9,65.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BAA59E").s().p("AoYG/QgShIgahJQg0iSgpgFQgzgHgKgRQgLgTAmgmIA5gvQAsgiAYgeQBNhfg1hxQg0huhUg1QgbgRgbgJQgPgFgIgBQAagQAUAAQAdgBCQBZQCSBbA/ACQDDAGAQACQCGALA4AoQBPA5BbAqQAdgMAXARIA5AxQAZAOA4gNQA4gMCEhnQBWhEBJhEIAFAaQAEAfgEAfQgLBkhUA6Qg9AqhIAdQgTAHgGAGQgHAJgCAUQgBASATAsQAMAageAVQgzAlovERg");
	this.shape_63.setTransform(2827.1,62.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DBC4B4").s().p("AEqHBQkiACgYACQhIhahQhnQiejMgjg8QglhCgjgXIiMhCQgbgOgigWIBYgSQBegXAggVQAggUA9ABIBwADQAvgCB5ATQA8AKAzAKIAmgoIAmAAIAWgfIA+gDIAVgnIAhAAIAhgoQAogrAigUQAJABAOAFQAbAJAbARQBUA1A0BuQA1BxhMBfQgZAdgsAjIg5AvQglAlAMATQAJAQAyAIQA+ALAxCSQAYBIARBSQgegFkzABg");
	this.shape_64.setTransform(2711.4,63.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C9ADA1").s().p("AjvD8Qg6gEgoACQAqgmAmgnQA1g3APgdQARgeALgjQAOgVA/ACQAwACBGAGQAsAAgSgYQgRgYihhlIihhjQAggUAYAFQAHACA8AfQAuAYArgIQA7gMAaAAQAjAAAxAPQBEAVCoASQhrAvh4CDQhqCCgRAQQgYAWgQACQgYgBgWADQgdADgMAJQgRAQgSAPQgWASgpAAIgCAAg");
	this.shape_65.setTransform(2564.5,41.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D3B6A7").s().p("AguEDQg7gIg2grIgrgrIgpA9IgggSQgngUgMgtQgKgngVgDQgRgCgYAIQgSAGgdAOQgggkgpgcQgLgHgRgPIBhgtQBjg0ANgbQALgYAlAFQA+AJAggGQApgHBIg3QBCgxAVACQAOACALAHIARALQATAKAogTQAYgMAdgVIArgeIAAAAIChBiQCiBmARAYQASAYgsAAQhHgFgxgCQg+gCgOAUQgMAjgQAdQgQAeg1A3QglAmgrAnIgDAAQggADg6AVQggAMgiAAQgPAAgPgCg");
	this.shape_66.setTransform(2516.3,44.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#BAA59E").s().p("Ah3AeQADhHgSg2IghhTQgKgeAWg7QAOgnAXgnQAcAjAeASQBfA8A1AxQBRBLACBAQABAzgQA/QgLApgPAiQgGgBgKAeIgWBDQgjBkgpAFQiJjzAChJg");
	this.shape_67.setTransform(2632.1,73.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C9ADA1").s().p("AkOGjQAuhdAnhYQBNirgCgyQgDg/hRhLQg2gxhfg6QgfgTgcgjQgfgkgeg6Igeg5QBTAIBvBIQA+AoByBTQAiAWAbAOICLBDQAjAWAlBCQAjA8CeDNQBQBmBIBaQiSAOj+ACIhDAAQjeAAhLgPg");
	this.shape_68.setTransform(2660.3,67);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D3B6A7").s().p("AGiGuQjAgGgLADImsjkIgBABQg1gUhBgVQhjgfhRgQQh8hFhOgpIApg8IArArQA2AqA7AIQA0AHAtgRQA6gVAggDIADAAQApgCA5ADQArABAWgSQATgPARgQQAMgJAdgDQAWgCAYABQAQgCAYgWQARgRBpiCQB4iDBsgwQAQgHASgFQAsgOAwAEIAeA5QAeA6AfAlQgXAngOAnQgWA8ALAeQALAcAhA2QAbA3gCBHQgBAvA8CLQA2B/APAPQg8AIhpAAQg7AAhJgDg");
	this.shape_69.setTransform(2563.4,66.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#DBC4B4").s().p("AUqF/I0RgCQzfgChlgMQBniMBniDQDOkDApgIQAngHASAlIANAfQAIAQALAGIA9hNIAJAGQALAIANAGIAjglQAngkAVAEQAXAFAXgJQANgEAZgNQAJgDANAHQAMAIAcgMQANgFAWgWIAqguQAngtASgPQAdgXAOAOQALAOAdAqIAVgDQAdgDAiAGQA4AKAfAHIBBgVIAZAiQAfAoAbAZQARAPALAIQApAbAgAlQAdgPARgGQAYgIARADQAWADAKAmQAMAtAmAVIAhARQAxAbB9AjQBDAUBmAbQA1APEYCXQEWCVgZAAIAAAAg");
	this.shape_70.setTransform(2452.7,71.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C6BDB0").s().p("AgfgIIA/ARQgfgCgggPg");
	this.shape_71.setTransform(2387.1,57.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C6BDB0").s().p("AgTgDIAnAHIgHAAQgPAAgRgHg");
	this.shape_72.setTransform(2376.5,62.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C9ADA1").s().p("AmQD8QAUihAngwQBKhaANgkQASgxgWhaQgThRg4g+IgzguQAjgGAdAOQAVALCVBsQByBSAwAAQBNAAA6AHQBMAJAVATQAQAOARgNQATgNARAMIBlBIIgpAuQgWAWgOAFQgbAMgNgIQgNgHgJADQgYANgOAEQgXAIgWgEQgWgEgnAjIgjAlQgMgGgLgIIgJgGIg9BNQgPgIgfgaQgZgVgNgBQgcgDg/BVQgJgBhiB/QhkCDghAHQgFgfARiDg");
	this.shape_73.setTransform(2374.2,49.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D3B6A7").s().p("ADHH1IjHgGQgVgbiakFQickHgXg1QgfhGgLgLQgTgShYgoQgtgUg9g1IBjgDQBkgGAcgWQAcgWAfgBQASgBAiAEQAeAAA8AHQBDAHAhAKQAZAHAzAVQAuAOAlgPQA7gYA7geIBCAAIA+gdIAtgrQA3guAvgJIA0AuQA3A+AUBRQAWBagSAxQgNAkhKBbQgnAvgND3QgJDFAGAzQglAIh4AAIhogCg");
	this.shape_74.setTransform(2288.6,58.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C9ADA1").s().p("AilhSQgQgnhzh3Qh8h/gUgfQgagogMguQgIgdgBgVIAVAEQBGATBfBRQA1AuBnBgQA9A2AsATQBYAoASASQALALAfBHQAWAxCpEEQCiD5AbAgQh9gHkxAGQk9AHg4APQC1okgfhGg");
	this.shape_75.setTransform(2242.2,55.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#DBC4B4").s().p("AGuFeQhmi+gxgHIAAAAQhAgkhRgiQichCjagkQk2g1h2gdIgDgBIAAAAIgBAAQAPADAMABQAqACBJgeQBCgcAbAHQAcAHA4gfQA5gfAZAHQAvAMA7gYQBKggBJhVQBihzA+grQBfhEBfARQABAWAHAdQAMAuAaAoQAUAeB0B3QBvBzAdAzQAZAugIBDQgGAugTAwQgGACg4DMQg3DMgGABQgphdg0heg");
	this.shape_76.setTransform(2160.3,55.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C6BDB0").s().p("AgigWIgNgLIBfBDQgYgOg6gqg");
	this.shape_77.setTransform(2077.4,42.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D8BAA7").s().p("AjEnhQAIgXANgRQAaghAWAjIAhA3QBSCGAgBEIBrCtQBKB4gEAjQgEAlhhCcQgxBOgvBGQg7BShLAgQglARgZAAg");
	this.shape_78.setTransform(2019.5,53.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C6BDB0").s().p("AgigWIgNgLIBfBDQgYgOg6gqg");
	this.shape_79.setTransform(2077.4,42.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BCB3A7").s().p("AgBAEIgFgPIANAXg");
	this.shape_80.setTransform(1951.4,23.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#DBC4B4").s().p("Ah7HAQoZgBgogGID0hyQD7h4A8goIAFgEQAYgQANgMQAogkgIgXIgLgXQgHgQAAgSQAAgUAPgMIABAAQAIgFA/gWQA6gVAtgdIAHgEQBFguAVh4QAHglABgpIgBghQAOgKAcgZQAbgYANgIQAOgJAMAAQAOAAAQAMQAJAIASATIAJAIQAnA9AzA+QBOBfBVBGQBVBFgVByQgNBLg2BSQgHAAg3BpQg3BrgFAAQhBAImnAAIiOAAg");
	this.shape_81.setTransform(1914.2,64.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C9ADA1").s().p("AAjHyQwDgNg6AJQBVhlBVhsQCsjZAEglQAEgihKh5IhritQghhEhSiGIAagKQAegGAVAQQASANAQgMQAOgMALALQATARARACQATADAZgPQAMgHAJAJQAFAFANAWQAgA6AoAcQAmAaA2AyQAhgJAcgBQApgCAOAQIAkAyQAYAkAfAaIANAKQA6AsAZAOIhghEIAegdIA3AmQBAApAxAMIABABIABAAIABAAIABAAIACABIABAAIAAAAIADABQB2AdE1A1QDpAnB9AqQBFAXBlA2QA/AhBoC2QA0BcAnBVQn2gIoCgGg");
	this.shape_82.setTransform(109.9,57.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C9ADA1").s().p("AkoDSQgggdgMgJQgSgOgHAIQgSAXg3AFQg8AFgagfQgGgIgMgGQARgNAkg5QAqhCAlgoQA5hABcAYQAYAHAvARQAoAMAZgDQAygGhmhFIi1hwIgzggQgXgNgPgFQBVAXA4AAQAUAAATgHIAigNQAogOA1AWQB4AvBRAbQCUAwBkAHIDqARIggAgQhgBngqApQhGBEgpgCQgkgChhAiQhlAjgaABQgXAAgkAgQgkAghAAEIgHAAQg+AAhGg7g");
	this.shape_83.setTransform(1559.1,46.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#BAA59E").s().p("AodHWQgQhbgYhRQgvifhEACQgvABgFgRQgEgRAngsQANgOAgggQAegeARgbQAxhOgYhtQgUhfgugnQgegXgRgQQgfgcgcgsQANgFARALQAeASCgBoQCeBhBIAAQCDAABUAKQCLAQBEAsQBAAqAlAfQAQADASAJQAOAIAgAVQAWAPANAEQAjAKBKgkQBSgoBghKQBdhHALgbQACgIgBgaQgBgKAegIQAOgEANgJIgFAEIAAAhQgBAngFAlQgVB3hCAuQgvAeg+AVQg8ATgLAJIAAAAQgVANAAAYQAAASAGAQIAMAXQAHAXgoAkQgOANgQALIgGAEQg9Aoh1A7IhqA1QAsgWlECYg");
	this.shape_84.setTransform(1857.7,61.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D8BAA7").s().p("AhrIGQgEAAA1hcIBHh4QAshJAPhIQAbiAhShDQhVhGhNhfQgzg+gng9QAYATAbADQAnAEADgXIgEgXIA7gzQA8gxACAHQAFAPA5AQQBDASAogdQAngcAfgqQAPgVAHgQIAAQRQgqAChAABIhGABQhXAAhQgFg");
	this.shape_85.setTransform(1975.7,56.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C9BFB1").s().p("AAlgZQAGglABgoIgBggIAGgEIABAAIAAAhQgBAogGAmQgVB3hFAuIgCABQBCgvAUh1g");
	this.shape_86.setTransform(1929.7,41.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C9BFB1").s().p("AgFBCQAmgkgHgXIgLgWQgHgRAAgSQAAgYAVgMQgPALAAAVQAAASAHARIALAWQAIAWgoAlQgLALgVAOQAOgKANgLg");
	this.shape_87.setTransform(1903.8,71.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#BCB3A7").s().p("AAlgZQAGglABgoIgBggIAGgEIABAAIAAAhQgBAogGAmQgVB3hFAuIgCABQBCgvAUh1g");
	this.shape_88.setTransform(1929.7,41.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BCB3A7").s().p("AgFBCQAmgkgHgXIgLgWQgHgRAAgSQAAgYAVgMQgPALAAAVQAAASAHARIALAWQAIAWgoAlQgLALgVAOQAOgKANgLg");
	this.shape_89.setTransform(1903.8,71.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D3B6A7").s().p("AhiGuQgegqgUgoQgLgXhYh+QhUh5gLgcQgXg2gxgyQhAhBhPgYQghgJgngZQAIAFBNgXQBTgaAqgaQAwgdAegDQAhgDBeARQBBANBpAeQBRATAjgZQAmgZA7gZIA0gVIA4gpIAEAZQALAQAlgpQAYgbAUg1QASgtAMgGQAbAsAfAcQASAQAdAXQAvAmAUBgQAYBsgxBPQgRAbgeAeQggAfgNAPQgmAsAEAOQADANAwAFQAeAEAbAXQAQAOAWAeQAOARAXB7QANA9AKA6IqyACQgJAAgdgqg");
	this.shape_90.setTransform(1740.6,61.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BAA59E").s().p("AgdEFQgphAgbg6QgTgogBgGQgGgWAFgzQAMhaAAgdQgBgpggguQgfgtAFgpQADgYAag0QAaAkAiATQCIBMAjAcQBSBDgMBLIgPBiQgFAmAAAUQAAATgXDbQg3gBgNACIgCABQgaAAg3hYg");
	this.shape_91.setTransform(1660.9,75.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C9ADA1").s().p("AibEPIAkjgQAMhJhShDQgjgciJhNQgigSgZgkQgfgrgShAQgLgogEgsQAmADAoARQBJAgBWBFQBvBZATAMQAnAZAgAIQBPAYA/BBQAxAzAXA2QAOAjCJCyQB8CiAqAwQhmgIkZAKIkdANIAcitg");
	this.shape_92.setTransform(1689.4,66.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#DBC4B4").s().p("AAgG1QzygJhPAHQgpADCDifQCAicAggRQAagOANgTQARgWgJgYQgNgfAhgNQBHgeAJgHQBDgvAjgpIBLAPQBcAUBVAWQA6APB2AJQBkAHAcAOQAMAGAGAIQAaAeA8gEQA3gFASgXQAHgIATAOQALAJAgAcQBJA+BBgDQBAgEAlggQAkggAXAAQAagBBlgiQBhgiAkACQApACBHhEQApgpBghoIAgggIABAAQBFhDA4gfQBMgrBJAHQAEAsAMApQARBAAfAqQgaA0gDAYQgGApAgAtQAgAuAAAoQABAdgMBbQgFAyBCCCQA7B2AUAOQgiAHnKAAQkxAAnvgDg");
	this.shape_93.setTransform(1530.7,65.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C6BDB0").s().p("AgXAFIAvgLQgRANgSAAIgMgCg");
	this.shape_94.setTransform(1502.4,62.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D3B6A7").s().p("AhCC/Qh2gIg6gPQhUgWhcgUIhMgQQBThfgghkQBZADBZgPQBigQAvgeQApgaALAKQAFAFgCALIAfADQAogEAxgiQAhgWAUgHQAWgHAUAFIAGABQAQAFAXAOIAzAgIC1BvQBmBEgzAHQgYADgogNQgvgRgZgFQhbgYg5A/QglAogqBDQgkA4gRAOQgdgPhjgHg");
	this.shape_95.setTransform(1498.6,40.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#C9ADA1").s().p("AqoDiQE3kiAfhwQAWhRgKhFQgMhWg9gqIhXg9QARgGAQABQAoAECTBtQCSBrAwACQA7ACCAAWQBAALA1ALICpBPQCsBXANAiQANAjAogoQAUgUARgbIA0AEIAwgmIA4AbIAMgaQAQghATgaQA8hVBGADQAgBlhTBgQgjAphDAuQg3AfgQAMQgYATANAiQAIAWiaCvIinC3QhtgGqlAUQp1AUg+AFQCWh6C6itg");
	this.shape_96.setTransform(1353.4,59.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#DBC4B4").s().p("ABRHYQgTgQixjMQi5jTgcgoQgQgVgTgpIgghAQgqhIhDgSQgqgLhDg0IBVgUQBegYAtgTQAtgUBIAIQAjAEAbAIIB2ApQB7AmAggQQA0gZAcgLIAigpIA0AOIA4gOIAiAAIAggyQAog1ApgOIBXA+QA9AqAWBUQASBFgJBSQgFAvhDBPQhEBJgHANQgoBJhvCIQiXC5hOAAIgDgBg");
	this.shape_97.setTransform(1261.5,55.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D3B6A7").s().p("AgYIZQl9gEgiAKQALgPAqhWQAyhnAqhiQB8kighg7Qgig9hqhhQhnhegUgoQgZg1gNgwQgJgfAAgKIAXAIQA1AYBjBUICiCHQBDA1AqAKQBDATApBHIAgBAQATApAQAWQApA6FtGQIilBgQi3gEi+gCg");
	this.shape_98.setTransform(1217.8,56.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C9ADA1").s().p("A0lIWIEVi6QEnjDBbgwQBhgygKgqQgDgPgWgZQgdgggPgTQgngxgshmQgthwgSgnQgjhRgiguIAPABQASAEAPANQAOALATgIQATgJAHAGIAhAZQAWAOASgLQAOgJAVgZQARgOARAbQA0BSBCBRIAOARICSARIATAmQAbArAlAeIAfgdIA0AkQA8AlApAIQA6ANAwACQA8ACAXgRQAQgKASgGQAagIAsgYQAqgXBJAMQBFALAfgYQBghLB3iAQBDhIBFgnQBfg1BPAWQAAAKAJAfQANAxAZA0QAUApBnBdQBqBhAiA+QAkA/gEAuQgDAjggAwQgXAjhjDXIhgDQg");
	this.shape_99.setTransform(1068.8,56.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#C6BDB0").s().p("Ag1g1IBrBrQg2gvg1g8g");
	this.shape_100.setTransform(1027.1,31.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#BAA59E").s().p("ABaDxQkrhnhBhEIi+jFIAxAiQAwAdARgPQARgQAHgSIAEgPQAWAAA5gkQAdgTAYgSIB1AAIBTgmIAyg2QA2gyAYASQAUAOAWAeQAhAuAkBRQARAnAtBvQAsBmAnAwQAQAUAcAgQAWAZAEAQQAJAphgAzQiJgmiWg0g");
	this.shape_101.setTransform(965.6,33.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D8BAA7").s().p("AuiGtQIwkRAzgmQAegUgMgbQgTgrABgTQACgTAHgIQAGgHATgIQBIgcA9gqQBUg6ALhkQAEgfgEggIgFgZQAegcA/gnQAggTAagPIC/DHQBBBEEsBnQCVA0CJAlQhbAwjfDKIjNC/g");
	this.shape_102.setTransform(910.2,65.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#BAA59E").s().p("AoYG/QgShIgahJQg0iSgpgFQgzgHgKgRQgLgTAmgmIA5gvQAsgiAYgeQBNhfg1hxQg0huhUg1QgbgRgbgJQgPgFgIgBQAagQAUAAQAdgBCQBZQCSBbA/ACQDDAGAQACQCGALA4AoQBPA5BbAqQAdgMAXARIA5AxQAZAOA4gNQA4gMCEhnQBWhEBJhEIAFAaQAEAfgEAfQgLBkhUA6Qg9AqhIAdQgTAHgGAGQgHAJgCAUQgBASATAsQAMAageAVQgzAlovERg");
	this.shape_103.setTransform(827.4,62.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#DBC4B4").s().p("AEqHBQkiACgYACQhIhahQhnQiejMgjg8QglhCgjgXIiMhCQgbgOgigWIBYgSQBegXAggVQAggUA9ABIBwADQAvgCB5ATQA8AKAzAKIAmgoIAmAAIAWgfIA+gDIAVgnIAhAAIAhgoQAogrAigUQAJABAOAFQAbAJAbARQBUA1A0BuQA1BxhMBfQgZAdgsAjIg5AvQglAlAMATQAJAQAyAIQA+ALAxCSQAYBIARBSQgegFkzABg");
	this.shape_104.setTransform(711.7,63.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C9ADA1").s().p("AjvD8Qg6gEgoACQAqgmAmgnQA1g3APgdQARgeALgjQAOgVA/ACQAwACBGAGQAsAAgSgYQgRgYihhlIihhjQAggUAYAFQAHACA8AfQAuAYArgIQA7gMAaAAQAjAAAxAPQBEAVCoASQhrAvh4CDQhqCCgRAQQgYAWgQACQgYgBgWADQgdADgMAJQgRAQgSAPQgWASgpAAIgCAAg");
	this.shape_105.setTransform(564.8,41.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D3B6A7").s().p("AguEDQg7gIg2grIgrgrIgpA9IgggSQgngUgMgtQgKgngVgDQgRgCgYAIQgSAGgdAOQgggkgpgcQgLgHgRgPIBhgtQBjg0ANgbQALgYAlAFQA+AJAggGQApgHBIg3QBCgxAVACQAOACALAHIARALQATAKAogTQAYgMAdgVIArgeIAAAAIChBiQCiBmARAYQASAYgsAAQhHgFgxgCQg+gCgOAUQgMAjgQAdQgQAeg1A3QglAmgrAnIgDAAQggADg6AVQggAMgiAAQgPAAgPgCg");
	this.shape_106.setTransform(516.6,44.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#BAA59E").s().p("Ah3AeQADhHgSg2IghhTQgKgeAWg7QAOgnAXgnQAcAjAeASQBfA8A1AxQBRBLACBAQABAzgQA/QgLApgPAiQgGgBgKAeIgWBDQgjBkgpAFQiJjzAChJg");
	this.shape_107.setTransform(632.3,73.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C9ADA1").s().p("AkOGjQAuhdAnhYQBNirgCgyQgDg/hRhLQg2gxhfg6QgfgTgcgjQgfgkgeg6Igeg5QBTAIBvBIQA+AoByBTQAiAWAbAOICLBDQAjAWAlBCQAjA8CeDNQBQBmBIBaQiSAOj+ACIhDAAQjeAAhLgPg");
	this.shape_108.setTransform(660.6,67);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D3B6A7").s().p("AGiGuQjAgGgLADImsjkIgBABQg1gUhBgVQhjgfhRgQQh8hFhOgpIApg8IArArQA2AqA7AIQA0AHAtgRQA6gVAggDIADAAQApgCA5ADQArABAWgSQATgPARgQQAMgJAdgDQAWgCAYABQAQgCAYgWQARgRBpiCQB4iDBsgwQAQgHASgFQAsgOAwAEIAeA5QAeA6AfAlQgXAngOAnQgWA8ALAeQALAcAhA2QAbA3gCBHQgBAvA8CLQA2B/APAPQg8AIhpAAQg7AAhJgDg");
	this.shape_109.setTransform(563.7,66.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#DBC4B4").s().p("AUqF/I0RgCQzfgChlgMQBniMBniDQDOkDApgIQAngHASAlIANAfQAIAQALAGIA9hNIAJAGQALAIANAGIAjglQAngkAVAEQAXAFAXgJQANgEAZgNQAJgDANAHQAMAIAcgMQANgFAWgWIAqguQAngtASgPQAdgXAOAOQALAOAdAqIAVgDQAdgDAiAGQA4AKAfAHIBBgVIAZAiQAfAoAbAZQARAPALAIQApAbAgAlQAdgPARgGQAYgIARADQAWADAKAmQAMAtAmAVIAhARQAxAbB9AjQBDAUBmAbQA1APEYCXQEWCVgZAAIAAAAg");
	this.shape_110.setTransform(452.9,71.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#C6BDB0").s().p("AgfgIIA/ARQgfgCgggPg");
	this.shape_111.setTransform(387.3,57.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#C6BDB0").s().p("AgTgDIAnAHIgHAAQgPAAgRgHg");
	this.shape_112.setTransform(376.8,62.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C9ADA1").s().p("AmQD8QAUihAngwQBKhaANgkQASgxgWhaQgThRg4g+IgzguQAjgGAdAOQAVALCVBsQByBSAwAAQBNAAA6AHQBMAJAVATQAQAOARgNQATgNARAMIBlBIIgpAuQgWAWgOAFQgbAMgNgIQgNgHgJADQgYANgOAEQgXAIgWgEQgWgEgnAjIgjAlQgMgGgLgIIgJgGIg9BNQgPgIgfgaQgZgVgNgBQgcgDg/BVQgJgBhiB/QhkCDghAHQgFgfARiDg");
	this.shape_113.setTransform(374.5,49.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D3B6A7").s().p("ADHH1IjHgGQgVgbiakFQickHgXg1QgfhGgLgLQgTgShYgoQgtgUg9g1IBjgDQBkgGAcgWQAcgWAfgBQASgBAiAEQAeAAA8AHQBDAHAhAKQAZAHAzAVQAuAOAlgPQA7gYA7geIBCAAIA+gdIAtgrQA3guAvgJIA0AuQA3A+AUBRQAWBagSAxQgNAkhKBbQgnAvgND3QgJDFAGAzQglAIh4AAIhogCg");
	this.shape_114.setTransform(288.8,58.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#C9ADA1").s().p("AilhSQgQgnhzh3Qh8h/gUgfQgagogMguQgIgdgBgVIAVAEQBGATBfBRQA1AuBnBgQA9A2AsATQBYAoASASQALALAfBHQAWAxCpEEQCiD5AbAgQh9gHkxAGQk9AHg4APQC1okgfhGg");
	this.shape_115.setTransform(242.5,55.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#DBC4B4").s().p("AGuFeQhmi+gxgHIAAAAQhAgkhRgiQichCjagkQk2g1h2gdIgDgBIAAAAIgBAAQAPADAMABQAqACBJgeQBCgcAbAHQAcAHA4gfQA5gfAZAHQAvAMA7gYQBKggBJhVQBihzA+grQBfhEBfARQABAWAHAdQAMAuAaAoQAUAeB0B3QBvBzAdAzQAZAugIBDQgGAugTAwQgGACg4DMQg3DMgGABQgphdg0heg");
	this.shape_116.setTransform(160.5,55.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#C6BDB0").s().p("AgigWIgNgLIBfBDQgYgOg6gqg");
	this.shape_117.setTransform(77.6,42.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D8BAA7").s().p("AjEnhQAIgXANgRQAaghAWAjIAhA3QBSCGAgBEIBrCtQBKB4gEAjQgEAlhhCcQgxBOgvBGQg7BShLAgQglARgZAAg");
	this.shape_118.setTransform(19.7,53.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#C6BDB0").s().p("AgigWIgNgLIBfBDQgYgOg6gqg");
	this.shape_119.setTransform(77.6,42.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lowMountain, new cjs.Rectangle(0,0,5997.3,111.8), null);


(lib.highMountain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE5DE").s().p("AgjIkIjBgCQCpnTAZg6IBykCQAIgLAahHIAAAAQAVg5AUhCQAVhDAGgfQAGgeAGBTQADAuAEB3IAcG0IgNADIgPGtQgbADhoAAIhpgBg");
	this.shape.setTransform(2116.2,155.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE5DE").s().p("AhSE4QCch7AujNQAOhAABhCIgCg0QAIiwgIhLQgHhEADgGQAHgRA3AJQgKgQgZgZQA5ARAwBbQgCAAAEAQQAEAagGAjQgLBDACCOQACCFAHAKIAKArQARA9AmBXICpGRQgLgGvSAWQGQj7AMgKg");
	this.shape_1.setTransform(2984.2,152.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFD9D3").s().p("AgLGWQgYhSgbhiQg3jGgPhXIgdivQAaiWAAgfQgBgbAPAFQAKACAOAOIAGAGIAfkHIARB4QAEgnAGgoQAMhRAKgIQAKgHAaBHQAOAjALAlIAXgVQAWgMAAAlIAABUIBDAEQgRBIgGBMIgaDjQgZEEAGCrQACAsAdClQAZCSAMAwIhFAQg");
	this.shape_2.setTransform(2945.3,136.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFEFEB").s().p("AgmCeIgBjrQADgZgFgXIAuhbIAlGyIhQg8g");
	this.shape_3.setTransform(2414.2,133);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8CFCA").s().p("Ag/EsQABoSgMglQASkyAHhQQAFgqgNhAQAehSAbgIQAZgHAcAeQAOAPAIARIgZApQgNAcgHAkQgNBCgGBKQgHBVgECjQgBBOgXHsQgaIVgHAxQgGgUAAoTg");
	this.shape_4.setTransform(3550.3,130.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFEFEB").s().p("AggAnQgPgrgQhTIgZiMIAjhBQAog9ATASQARAOAWA3QAXA3AMA9QAMBAgEAqQgIBPgREyQhGjpgZhFg");
	this.shape_5.setTransform(3536.5,70);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8CFCA").s().p("Am/LpQBdjygJADQAmiNA0jUQA7jzAvkDIAljTQAAg9gfgeQgegTAAgGIB0hEIAABEIA0AAIAUAgQAHAEAVAHQAUAIAKALQAgAhgSBVQgeCGgEA7QgFBiAnAgQASAPAUAIIAaAJQASAIgHA1QgVCSgCA0QgFCUAwBTQAlBBAPAgQAGALAQAVIDSELg");
	this.shape_6.setTransform(3620.4,132.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFD9D3").s().p("AmeNkIBNjZQBMjagEAAQBEj8AXiiQASh+AChWQAEijAHhVQAGhKANhCQAHgkAOgcIAYgpQAOgXAEgUQAEgOAChLQACgxAQACQASADAHgFQADgDAAgDIAAgzIAPAFQAQAHAAAHQAAAMAQAtIAsAAIA8A3IAAhIIA0goIAMANQARAPATAMQAUANAQArQAIAVAEATQBADMAAAMQAAAGAeATQAfAeAAA9IglDTQgwECg6D0IgwDJQgUBZgWA/IhmEog");
	this.shape_7.setTransform(3565.8,120.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFD9D3").s().p("AlTNmQgEAAAmlNIAmj9QAnkAAIhPQAGg6gMg6QAviHBUi0IBLiZIASgnQAWgwAdgtQAcgsgLgoQACgPAFgGQALgLATAgQAPAYAQBZIAZCMQAQBTAQAsQAYBFBHDpIA3CyQgXCihED8QgEgBgVDgIgTDgQjGAGiIAAQiIAAhLgGg");
	this.shape_8.setTransform(3514.2,121.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFEFEB").s().p("AitDgIAKgEQAMgIAKgRQAfg2gDh3QgEhvA3gQQAPgEAfgFQAYgHAMgYQAWgwAXg8IATg0IBFg0IAHAIQAHALADANQALAngcAtQgcAtgYAwIgRAnIhLCYQhUCzguCIQgPhMglg6g");
	this.shape_9.setTransform(3503.7,68.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE5DE").s().p("AkuIjIApkKQArkNAJgSQAUgxAGgMQAVgqAXgPQA6gmANgPQAYgegIg2QgDgZgIgcIAsgpQAvgyAWgtIAthgQAAAFBiDlQBiD/AMCDIgBA8IgyGdg");
	this.shape_10.setTransform(3455,161.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8CFCA").s().p("AgpAeQhhjlAAgEIA1AoQALg9ARg+QAjh8AfgFQAPgCATAOQATAPASAcQAlA5AOBMQAMA6gGA6QgFA1geDPQgbC+gGBOQgMiEhij/g");
	this.shape_11.setTransform(3478.4,127.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFEFEB").s().p("Am5GxIERmqQAXgiA+hAQBHhKAKgMQAlgvAthWQAWgsAPgiIAQgXQARgXAHACIAiAxQAeAsAYgFQAbgFAXAEQARADAVAKQAUAKBXAHQAIA2gZAeQgMAQg6AmQgYAQgHAPQgGAPgUBIQgSA7gqDfQgVBvgRBjg");
	this.shape_12.setTransform(3405.7,166.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE5DE").s().p("AisHKQgalsgFgxQgFgygagRQgfgMgKgMQgHgIgNhMQgOhSgTglIBRhLQBUhUAUglQAUgmAVAtQAKAXAGAeIAzAOQA3AVAUAhQAQAaAaA2QAbApArgFQAqgFAlACQATABAKACIBFBXIgoBlQgjgbgggEQgigEgUAaQgYAfAEByQAEBygYAgQgYAggSBQIhCgEIAAhUQAAglgVAMIgXAVQgLglgOgjQgchHgJAHQgKAIgMBRQgGAogEAnIgRh4IggEHg");
	this.shape_13.setTransform(2952.8,48.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFD9D3").s().p("AEQG0QglgBgeAEIgZAEQgLAAgXgFQgtgKg9gYQg6gZgqgyIgegtQgGAPgPAMQgeAZgtgMQgRgFgNgGIgKgEQgwhbg5gRIAAAAQglgigKAGQgYj6gghaQgWhCg4gtIBXjcIBQAxQBWA5AYAlQAlA8AEARIAoggIAmBkQAuBtArAqQAnAnBqC4QBtC8AJALQAZAbAZAAQAZAAAdgbQANgMAQAMQAKAHAVAdQA3BJAtATQAIAEAFAEQh9g6h0gFg");
	this.shape_14.setTransform(3033,75.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E8CFCA").s().p("AjJIGQgFgBgGg4QgGg4gGgCQgPg/gDhrIDvj7QAPgTAPgZQAvhRAPhzQAfjoApgaQAKgHAlAjIAAAAQAZAYAKARQg3gJgGAQQgEAHAIBDQAIBMgICwIABA0QgBBAgOBBQgtDOidB6QgnAmglAeQhCA3gZAAIgEAAg");
	this.shape_15.setTransform(2979,144.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFEFEB").s().p("Ai2C4IAajiQAHhLAQhJQAShQAXggQAYgfgEhyQgEhyAYggQAUgaAiADQAgAEAjAcQA3AsAXBDQAfBZAZD8QgqAageDnQgPBzgwBRQgPAZgQATIjuD8QgFirAYkGg");
	this.shape_16.setTransform(2974.8,105.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E8CFCA").s().p("AlJIDIipmQQglhYgRg8IgKgsQgHgJgCiFQgCiOALhDQAFgkgDgZQgEgQABAAIAKAEQAOAGARAEQAtAMAegYQAPgMAGgPIAeAtQAqAyA7AYQA8AZAuAKQAXAFALAAIAYgFQAfgEAlACQBzAFB9A6QA4ArA3CaQAeBTAqCOQAWBCBhC6QAxBdAsBPg");
	this.shape_17.setTransform(3066.6,156.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFEFEB").s().p("ADLIzIAAAAQg7ljgfgmQgagdgVg5IgRgyIghBcQABgLgBgUQgEgogOgtQgPgsg/gGIhKADQgNAAgIgwIgHgwIgUAcIgkgwIgZAGIgDABQA0iNAXheQAXhcAHgRQABgCAAAAQABgBAAgBQAAAAABAAQAAABAAAAIAAAEIAEAlQAMAhAogSQAjgPAdgnQAYgiAMAAQAQAAAagUQALgKAJgKIgCBUQADBbAgAiQAJAKAKASQASAkAOBTQANBLAIAJQAJAMAfALQAaASAGAzQAEAwAaFsQgOgOgKgDQgPgEABAaQAAAggaCWg");
	this.shape_18.setTransform(2908.8,56.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E8CFCA").s().p("AoqLVQAnkHABgZQADhLACgdQAIhgAXh9QAYiCgYhgQgMgxg8iAQgYg0gRgfQgDhIAEhOQAGibAegvQAwhMAIgYIAABwIAhhwIAXhsIA/gwIARA0IAsg0IAOBHQASBHAUACQAQACAOgfQAKgYAIANQAQAcAYCsIA3gNIADgBIAZgGIAlAwIAUgcIAGAwQAJAwANAAIBJgDQA/AGAPAtQAPAtAEAoQABAUgBALIAghcIARAyQAWA5AZAdQAgAmA7FiIAAAAIAAADIAdCvQAPBXA3DGQAbBjAYBRIBhEvIyiATIAmkCg");
	this.shape_19.setTransform(2894.4,111.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE5DE").s().p("AkDK5IBMjNQBPjTAKgZIAbg+QAQgoANgwQAHgZAAiXQAAiPAZg7QAahCAfhmIAahaIAPi0IAKAMQAOATATAiQARAeAYA0QA8CBAMAwQAYBhgYCCQgWB7gJBwQgFA5AAAhIgaEQQgfERgVAAg");
	this.shape_20.setTransform(2821.7,138.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFEFEB").s().p("AkMBhQgKgnANglQAPgrgCgsQgDgwgXgbQB1BUA+gDQAegBAxASQAaALAMgcQAMgpAGgLQAHgQAhgEQA0gGBLAGIALgQQAOgRAMgGQAkgUgCBdQAGAMgBAPIgBAHIgCAPIgBABQgRBIhdBIIhZA6QggAJgRgWQgPgSgIgsQgFgggrgnIgqggIAAA0QAAAhgtAyIgsArIgsAWQglglgMgqg");
	this.shape_21.setTransform(2324.5,72.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFD9D3").s().p("AhPiOIA2gTIBQBLIAaAqIiHDOg");
	this.shape_22.setTransform(2424,138.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E8CFCA").s().p("AmGGPQCcm6AGgnQADgSApgnQAkgjgDgUQgCgMgOgCIgfgCQgrgDgIgyIgNhZIAYgdQAegZAfAMIBMAfQAvAPAogEQATgCADAEQABACgEAQQgIApArAqQAnAkAvALQARADAGAHQAHAJAFAaQAJA6AGAVQAHAXAOAYQANAUBcDPIBaDLg");
	this.shape_23.setTransform(2467.8,169.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EFD9D3").s().p("ABBEnQhBh1hiinIhWiOQgdhRgUgvQgHgTACgVIAGgmIABgBIABgKIAbAjQAbAkAHASQAFAMAcgjQAfgnAQARQAMANgHAnQgFAdAfgCQATgBA+APQApAKAFgVQAGgWAEgkIADggIBIAQIANg0IACAyQAIA2AgAWQAPALAQAFIglAbQgPAKgNAUQgaApAIA1QAFAhAbBCQATAzgFAmIgXCYIAAABIgZA/g");
	this.shape_24.setTransform(2375.3,101.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFEFEB").s().p("AhhA+IAZg/IAAAAIBqi6IAaAWQAaAdAIAoQAFAXgDAaIABDrQhag+hohAg");
	this.shape_25.setTransform(2400.6,130);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE5DE").s().p("ABuCsIg2AUIgMiDIguBbQgIgogbgdIgZgWIhsC6IAXiZQAGgmgUgyQgahCgFgiQgIg1AagpQANgUAOgKIAlgbQAWAIASgEQAJgBAFgEIgBAyQAGA2AjAVQAYAQAUAgQATAfAkAUQA3AcAgBIQAjBPgOBag");
	this.shape_26.setTransform(2410.3,105.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFEFEB").s().p("AoLGhQgChGAdgkQAegmBdgoQA8gaASgdQB9hSEIiSQCEhKBrg6QAFgGAcgWQAagigFhDIgBgOQgJhOATgnQAFgJAsguQAYgZAJgcIAFgWIAHBLQAOBJAigLIh4DhQgbBMAPATQARAWgTBLIgBAEQgaBxiQB2QgtAmg1AiQgeATgRAKIAAAAIpxD/QAQhpgCgzg");
	this.shape_27.setTransform(2201.7,94.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE5DE").s().p("AjcGJQA0giAugmQCPh3AZhyIABgDQAThLgRgVQgPgTAbhNIB5jhQAegKAQgtQAOglALAEQAMAFgMAXQgLATAMgBQgOBLANBcQAGAuAJAfQgDAvgfBbQgPAtgPAlQgyA/hUBJQioCSipAxQARgJAegTg");
	this.shape_28.setTransform(2237.4,83.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EFD9D3").s().p("AgCNXQgNgHlLgKQkkgJhAAAQgTAAA2jhIA6jjQAPhMAIg2IJyj+IAAAAQCpgyCpiSQBUhJAyg/QAPglAPgtQAfhcADgvQgJgfgGgtQgNhdAOhLIAOgDQAYgHAfgfQATgSAMARQAIAKALAhQAJAcAIAHIABAAQAHALABAOQACAegYAjQgZAmgGAoQgEAZgFBCQgJBQAJCkIABA0QgBA/gGA+QgWDChLBnQgpA4gxA+QhoCJhtCGQjRECgeAAIgCgBg");
	this.shape_29.setTransform(2206.6,126.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E8CFCA").s().p("AvXJUQD5j9AUgbQA5hIAhguQBLhmAWjDQAGg+ABg/IgBgzQgJikAJhQQAFhDAEgZQAGgnAZgmQAYgkgCgdQgBgPgHgKQAJAIAQgMQARgNAOglQAEgMAEAAQAEABAJAQQAdAyALAOQAZAhAkARIAXARQAXAaADAwQACAsgPAsQgNAlAKAnQAMAqAlAmQAeAeAwAZIDbBhQEKB7DlCDIBaA2QBpBABaA+IBSA8IAzAkQAdAWAVAWQAiAhCOBbIiWFgMgkDAAUID1j4g");
	this.shape_30.setTransform(2323.3,128);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFE5DE").s().p("AhhA9IjchfQgwgZgfgfIAsgWIAtgsQAtgxgBghIAAg1IArAhQArAnAGAgQAIAsAPASQARAWAfgJIBag6QBchIARhKIgGAmQgCAVAHATQATAvAeBRIBVCOQBjCoBBB1QjkiEkJh8g");
	this.shape_31.setTransform(2342.1,99.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFE5DE").s().p("AlLC+QgGg3AAgIQABgYgDgyIgBgNIgBgBIAKgEQBRgnBPgKQBJgIC7hVQC6hUBCg1QAFBDgZAiQgdAWgFAGQhrA6iEBJQkHCTh9BSQAMgUgDgjg");
	this.shape_32.setTransform(2206.3,87.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EFD9D3").s().p("Ai0h/IgDhVQAyhUAggRIAwgaQAQg4AOg+QAah8gHgcQgEgPAGAFIARAUQAlAkAZgeQAaggAegSQAQgJAJgDIAKAoQALAvAEAmIgJAEIAAABIABANQAEAygBAYQgBAIAGA3QAEAjgNAUQgSAdg8AaQhdAngdAmQgdAlACBFQACAzgQBpQgIA0hsISg");
	this.shape_33.setTransform(2154.7,144.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFE5DE").s().p("AgFAAIALgDIAAAFIgLACg");
	this.shape_34.setTransform(2138.5,167);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFE5DE").s().p("AgFAAIALgDIAAAFIgLACg");
	this.shape_35.setTransform(2138.5,167);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFEFEB").s().p("AisJJQg6ACgRgLIEfsFQAHgwADg5QAGhxgQgrIgEgJQAsgXAigYQA7gpABgeQACgnAgBNQAgBNAFA6QAGBLgGAtIAAAAQgaBHgIALIk0MpQgTgRg4ADg");
	this.shape_36.setTransform(2103.1,152.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFE5DE").s().p("Aj9IRIBmk1QBmk5AFggQACg/ADghQAFg8AjggQAagXAWgsIAhhHQASglATgOQArgfAXgGQAkgJASAlIAEAJQAQArgHBxQgDA5gGAwIgRBBQgUBGgNAZQgNAYhiEtIhfEpg");
	this.shape_37.setTransform(2082.8,156.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E8CFCA").s().p("Ah3HGQhFgkglArQgOAQAdiBQAch+ARgrQANgggHg8QgMhBgEgbQgDgfAag2QAlhPAJgbQARg2gcg/QgHgOgshIQgMgUgGg2IB3AgQAhAHAggfIAZggIADAtQAKAuAhAEQApAEB4gnQgFAKAAAaQAAAVgLAKQgqAlgSAxQgQArgBA6QgBAuhiFBQgvCigxCYQgbgagigSg");
	this.shape_38.setTransform(2064.7,162.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EFD9D3").s().p("AgIEUQgBisgQgmQgbg6gLgaQgSgtAEghQADgVAUgwQAQgpgCgbQgDgegegHIgegCQAGgaAvg8QA0hDAFgJQAGgMACAKIADAkQAGA2AMATQAsBIAHAOQAcA/gRA2QgJAcglBOQgaA1ADAfQAHA3AyExQgKAJgnABQgnABgIAFQADhQgBhWg");
	this.shape_39.setTransform(2044.2,155.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFE5DE").s().p("AgVD2QgDijgKgDQgGgRgTgbQgRgbgVgZQAEgngEg4QgJgzABgYQABgoAkgiQAkgjASgpQAKgXAJgwIAeABQAfAHACAfQADAbgRAoQgUAwgCAWQgEAhASAtQAKAaAcA7QAPAmAFDKQADBlgBBgQgdAShhAVQAAhRgBhRg");
	this.shape_40.setTransform(2033.2,169);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFEFEB").s().p("AipDsQgEgBAyh8QA3iHAFgUQAUhWALgiQAbhWATALQATALAhAoIAhAnQAaAnAMAwQARBKAKB0QAFA6ABAsQhHAFhOADQhDADgsAAQg7AAgUgFg");
	this.shape_41.setTransform(2016.8,186.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFEFEB").s().p("AgXCuQglhhgIAGQgtgmg5gqICIjOIAmgaIA3AaIANBZQAIAyAsADIAeACQAOACACAMQAEAYgoAtIgoAqQgLgGAEBGQAFBMgJAGQgWASgUAAQgjAAgdg4g");
	this.shape_42.setTransform(2435.5,154.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFE5DE").s().p("AgjIkIjBgCQCpnTAZg6IBykCQAIgLAahHIAAAAQAVg5AUhCQAVhDAGgfQAGgeAGBTQADAuAEB3IAcG0IgNADIgPGtQgbADhoAAIhpgBg");
	this.shape_43.setTransform(116.4,155.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFE5DE").s().p("AhSE4QCch7AujNQAOhAABhCIgCg0QAIiwgIhLQgHhEADgGQAHgRA3AJQgKgQgZgZQA5ARAwBbQgCAAAEAQQAEAagGAjQgLBDACCOQACCFAHAKIAKArQARA9AmBXICpGRQgLgGvSAWQGQj7AMgKg");
	this.shape_44.setTransform(984.4,152.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EFD9D3").s().p("AgLGWQgYhSgbhiQg3jGgPhXIgdivQAaiWAAgfQgBgbAPAFQAKACAOAOIAGAGIAfkHIARB4QAEgnAGgoQAMhRAKgIQAKgHAaBHQAOAjALAlIAXgVQAWgMAAAlIAABUIBDAEQgRBIgGBMIgaDjQgZEEAGCrQACAsAdClQAZCSAMAwIhFAQg");
	this.shape_45.setTransform(945.5,136.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFEFEB").s().p("AgmCeIgBjrQADgZgFgXIAuhbIAlGyIhQg8g");
	this.shape_46.setTransform(414.5,133);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E8CFCA").s().p("Ag/EsQABoSgMglQASkyAHhQQAFgqgNhAQAehSAbgIQAZgHAcAeQAOAPAIARIgZApQgNAcgHAkQgNBCgGBKQgHBVgECjQgBBOgXHsQgaIVgHAxQgGgUAAoTg");
	this.shape_47.setTransform(1550.6,130.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFEFEB").s().p("AggAnQgPgrgQhTIgZiMIAjhBQAog9ATASQARAOAWA3QAXA3AMA9QAMBAgEAqQgIBPgREyQhGjpgZhFg");
	this.shape_48.setTransform(1536.8,70);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E8CFCA").s().p("Am/LpQBdjygJADQAmiNA0jUQA7jzAvkDIAljTQAAg9gfgeQgegTAAgGIB0hEIAABEIA0AAIAUAgQAHAEAVAHQAUAIAKALQAgAhgSBVQgeCGgEA7QgFBiAnAgQASAPAUAIIAaAJQASAIgHA1QgVCSgCA0QgFCUAwBTQAlBBAPAgQAGALAQAVIDSELg");
	this.shape_49.setTransform(1620.6,132.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EFD9D3").s().p("AmeNkIBNjZQBMjagEAAQBEj8AXiiQASh+AChWQAEijAHhVQAGhKANhCQAHgkAOgcIAYgpQAOgXAEgUQAEgOAChLQACgxAQACQASADAHgFQADgDAAgDIAAgzIAPAFQAQAHAAAHQAAAMAQAtIAsAAIA8A3IAAhIIA0goIAMANQARAPATAMQAUANAQArQAIAVAEATQBADMAAAMQAAAGAeATQAfAeAAA9IglDTQgwECg6D0IgwDJQgUBZgWA/IhmEog");
	this.shape_50.setTransform(1566,120.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EFD9D3").s().p("AlTNmQgEAAAmlNIAmj9QAnkAAIhPQAGg6gMg6QAviHBUi0IBLiZIASgnQAWgwAdgtQAcgsgLgoQACgPAFgGQALgLATAgQAPAYAQBZIAZCMQAQBTAQAsQAYBFBHDpIA3CyQgXCihED8QgEgBgVDgIgTDgQjGAGiIAAQiIAAhLgGg");
	this.shape_51.setTransform(1514.4,121.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFEFEB").s().p("AitDgIAKgEQAMgIAKgRQAfg2gDh3QgEhvA3gQQAPgEAfgFQAYgHAMgYQAWgwAXg8IATg0IBFg0IAHAIQAHALADANQALAngcAtQgcAtgYAwIgRAnIhLCYQhUCzguCIQgPhMglg6g");
	this.shape_52.setTransform(1504,68.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFE5DE").s().p("AkuIjIApkKQArkNAJgSQAUgxAGgMQAVgqAXgPQA6gmANgPQAYgegIg2QgDgZgIgcIAsgpQAvgyAWgtIAthgQAAAFBiDlQBiD/AMCDIgBA8IgyGdg");
	this.shape_53.setTransform(1455.2,161.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E8CFCA").s().p("AgpAeQhhjlAAgEIA1AoQALg9ARg+QAjh8AfgFQAPgCATAOQATAPASAcQAlA5AOBMQAMA6gGA6QgFA1geDPQgbC+gGBOQgMiEhij/g");
	this.shape_54.setTransform(1478.6,127.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFEFEB").s().p("Am5GxIERmqQAXgiA+hAQBHhKAKgMQAlgvAthWQAWgsAPgiIAQgXQARgXAHACIAiAxQAeAsAYgFQAbgFAXAEQARADAVAKQAUAKBXAHQAIA2gZAeQgMAQg6AmQgYAQgHAPQgGAPgUBIQgSA7gqDfQgVBvgRBjg");
	this.shape_55.setTransform(1405.9,166.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFE5DE").s().p("AisHKQgalsgFgxQgFgygagRQgfgMgKgMQgHgIgNhMQgOhSgTglIBRhLQBUhUAUglQAUgmAVAtQAKAXAGAeIAzAOQA3AVAUAhQAQAaAaA2QAbApArgFQAqgFAlACQATABAKACIBFBXIgoBlQgjgbgggEQgigEgUAaQgYAfAEByQAEBygYAgQgYAggSBQIhCgEIAAhUQAAglgVAMIgXAVQgLglgOgjQgchHgJAHQgKAIgMBRQgGAogEAnIgRh4IggEHg");
	this.shape_56.setTransform(953,48.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EFD9D3").s().p("AEQG0QglgBgeAEIgZAEQgLAAgXgFQgtgKg9gYQg6gZgqgyIgegtQgGAPgPAMQgeAZgtgMQgRgFgNgGIgKgEQgwhbg5gRIAAAAQglgigKAGQgYj6gghaQgWhCg4gtIBXjcIBQAxQBWA5AYAlQAlA8AEARIAoggIAmBkQAuBtArAqQAnAnBqC4QBtC8AJALQAZAbAZAAQAZAAAdgbQANgMAQAMQAKAHAVAdQA3BJAtATQAIAEAFAEQh9g6h0gFg");
	this.shape_57.setTransform(1033.3,75.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E8CFCA").s().p("AjJIGQgFgBgGg4QgGg4gGgCQgPg/gDhrIDvj7QAPgTAPgZQAvhRAPhzQAfjoApgaQAKgHAlAjIAAAAQAZAYAKARQg3gJgGAQQgEAHAIBDQAIBMgICwIABA0QgBBAgOBBQgtDOidB6QgnAmglAeQhCA3gZAAIgEAAg");
	this.shape_58.setTransform(979.2,144.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFEFEB").s().p("Ai2C4IAajiQAHhLAQhJQAShQAXggQAYgfgEhyQgEhyAYggQAUgaAiADQAgAEAjAcQA3AsAXBDQAfBZAZD8QgqAageDnQgPBzgwBRQgPAZgQATIjuD8QgFirAYkGg");
	this.shape_59.setTransform(975.1,105.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E8CFCA").s().p("AlJIDIipmQQglhYgRg8IgKgsQgHgJgCiFQgCiOALhDQAFgkgDgZQgEgQABAAIAKAEQAOAGARAEQAtAMAegYQAPgMAGgPIAeAtQAqAyA7AYQA8AZAuAKQAXAFALAAIAYgFQAfgEAlACQBzAFB9A6QA4ArA3CaQAeBTAqCOQAWBCBhC6QAxBdAsBPg");
	this.shape_60.setTransform(1066.9,156.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFEFEB").s().p("ADLIzIAAAAQg7ljgfgmQgagdgVg5IgRgyIghBcQABgLgBgUQgEgogOgtQgPgsg/gGIhKADQgNAAgIgwIgHgwIgUAcIgkgwIgZAGIgDABQA0iNAXheQAXhcAHgRQABgCAAAAQABgBAAgBQAAAAABAAQAAABAAAAIAAAEIAEAlQAMAhAogSQAjgPAdgnQAYgiAMAAQAQAAAagUQALgKAJgKIgCBUQADBbAgAiQAJAKAKASQASAkAOBTQANBLAIAJQAJAMAfALQAaASAGAzQAEAwAaFsQgOgOgKgDQgPgEABAaQAAAggaCWg");
	this.shape_61.setTransform(909,56.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E8CFCA").s().p("AoqLVQAnkHABgZQADhLACgdQAIhgAXh9QAYiCgYhgQgMgxg8iAQgYg0gRgfQgDhIAEhOQAGibAegvQAwhMAIgYIAABwIAhhwIAXhsIA/gwIARA0IAsg0IAOBHQASBHAUACQAQACAOgfQAKgYAIANQAQAcAYCsIA3gNIADgBIAZgGIAlAwIAUgcIAGAwQAJAwANAAIBJgDQA/AGAPAtQAPAtAEAoQABAUgBALIAghcIARAyQAWA5AZAdQAgAmA7FiIAAAAIAAADIAdCvQAPBXA3DGQAbBjAYBRIBhEvIyiATIAmkCg");
	this.shape_62.setTransform(894.6,111.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFE5DE").s().p("AkDK5IBMjNQBPjTAKgZIAbg+QAQgoANgwQAHgZAAiXQAAiPAZg7QAahCAfhmIAahaIAPi0IAKAMQAOATATAiQARAeAYA0QA8CBAMAwQAYBhgYCCQgWB7gJBwQgFA5AAAhIgaEQQgfERgVAAg");
	this.shape_63.setTransform(821.9,138.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFEFEB").s().p("AkMBhQgKgnANglQAPgrgCgsQgDgwgXgbQB1BUA+gDQAegBAxASQAaALAMgcQAMgpAGgLQAHgQAhgEQA0gGBLAGIALgQQAOgRAMgGQAkgUgCBdQAGAMgBAPIgBAHIgCAPIgBABQgRBIhdBIIhZA6QggAJgRgWQgPgSgIgsQgFgggrgnIgqggIAAA0QAAAhgtAyIgsArIgsAWQglglgMgqg");
	this.shape_64.setTransform(324.7,72.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EFD9D3").s().p("AhPiOIA2gTIBQBLIAaAqIiHDOg");
	this.shape_65.setTransform(424.2,138.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E8CFCA").s().p("AmGGPQCcm6AGgnQADgSApgnQAkgjgDgUQgCgMgOgCIgfgCQgrgDgIgyIgNhZIAYgdQAegZAfAMIBMAfQAvAPAogEQATgCADAEQABACgEAQQgIApArAqQAnAkAvALQARADAGAHQAHAJAFAaQAJA6AGAVQAHAXAOAYQANAUBcDPIBaDLg");
	this.shape_66.setTransform(468,169.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EFD9D3").s().p("ABBEnQhBh1hiinIhWiOQgdhRgUgvQgHgTACgVIAGgmIABgBIABgKIAbAjQAbAkAHASQAFAMAcgjQAfgnAQARQAMANgHAnQgFAdAfgCQATgBA+APQApAKAFgVQAGgWAEgkIADggIBIAQIANg0IACAyQAIA2AgAWQAPALAQAFIglAbQgPAKgNAUQgaApAIA1QAFAhAbBCQATAzgFAmIgXCYIAAABIgZA/g");
	this.shape_67.setTransform(375.5,101.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFEFEB").s().p("AhhA+IAZg/IAAAAIBqi6IAaAWQAaAdAIAoQAFAXgDAaIABDrQhag+hohAg");
	this.shape_68.setTransform(400.8,130);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFE5DE").s().p("ABuCsIg2AUIgMiDIguBbQgIgogbgdIgZgWIhsC6IAXiZQAGgmgUgyQgahCgFgiQgIg1AagpQANgUAOgKIAlgbQAWAIASgEQAJgBAFgEIgBAyQAGA2AjAVQAYAQAUAgQATAfAkAUQA3AcAgBIQAjBPgOBag");
	this.shape_69.setTransform(410.6,105.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFEFEB").s().p("AoLGhQgChGAdgkQAegmBdgoQA8gaASgdQB9hSEIiSQCEhKBrg6QAFgGAcgWQAagigFhDIgBgOQgJhOATgnQAFgJAsguQAYgZAJgcIAFgWIAHBLQAOBJAigLIh4DhQgbBMAPATQARAWgTBLIgBAEQgaBxiQB2QgtAmg1AiQgeATgRAKIAAAAIpxD/QAQhpgCgzg");
	this.shape_70.setTransform(202,94.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFE5DE").s().p("AjcGJQA0giAugmQCPh3AZhyIABgDQAThLgRgVQgPgTAbhNIB5jhQAegKAQgtQAOglALAEQAMAFgMAXQgLATAMgBQgOBLANBcQAGAuAJAfQgDAvgfBbQgPAtgPAlQgyA/hUBJQioCSipAxQARgJAegTg");
	this.shape_71.setTransform(237.6,83.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EFD9D3").s().p("AgCNXQgNgHlLgKQkkgJhAAAQgTAAA2jhIA6jjQAPhMAIg2IJyj+IAAAAQCpgyCpiSQBUhJAyg/QAPglAPgtQAfhcADgvQgJgfgGgtQgNhdAOhLIAOgDQAYgHAfgfQATgSAMARQAIAKALAhQAJAcAIAHIABAAQAHALABAOQACAegYAjQgZAmgGAoQgEAZgFBCQgJBQAJCkIABA0QgBA/gGA+QgWDChLBnQgpA4gxA+QhoCJhtCGQjRECgeAAIgCgBg");
	this.shape_72.setTransform(206.8,126.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E8CFCA").s().p("AvXJUQD5j9AUgbQA5hIAhguQBLhmAWjDQAGg+ABg/IgBgzQgJikAJhQQAFhDAEgZQAGgnAZgmQAYgkgCgdQgBgPgHgKQAJAIAQgMQARgNAOglQAEgMAEAAQAEABAJAQQAdAyALAOQAZAhAkARIAXARQAXAaADAwQACAsgPAsQgNAlAKAnQAMAqAlAmQAeAeAwAZIDbBhQEKB7DlCDIBaA2QBpBABaA+IBSA8IAzAkQAdAWAVAWQAiAhCOBbIiWFgMgkDAAUID1j4g");
	this.shape_73.setTransform(323.5,128);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFE5DE").s().p("AhhA9IjchfQgwgZgfgfIAsgWIAtgsQAtgxgBghIAAg1IArAhQArAnAGAgQAIAsAPASQARAWAfgJIBag6QBchIARhKIgGAmQgCAVAHATQATAvAeBRIBVCOQBjCoBBB1QjkiEkJh8g");
	this.shape_74.setTransform(342.4,99.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFE5DE").s().p("AlLC+QgGg3AAgIQABgYgDgyIgBgNIgBgBIAKgEQBRgnBPgKQBJgIC7hVQC6hUBCg1QAFBDgZAiQgdAWgFAGQhrA6iEBJQkHCTh9BSQAMgUgDgjg");
	this.shape_75.setTransform(206.5,87.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EFD9D3").s().p("Ai0h/IgDhVQAyhUAggRIAwgaQAQg4AOg+QAah8gHgcQgEgPAGAFIARAUQAlAkAZgeQAaggAegSQAQgJAJgDIAKAoQALAvAEAmIgJAEIAAABIABANQAEAygBAYQgBAIAGA3QAEAjgNAUQgSAdg8AaQhdAngdAmQgdAlACBFQACAzgQBpQgIA0hsISg");
	this.shape_76.setTransform(155,144.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFE5DE").s().p("AgFAAIALgDIAAAFIgLACg");
	this.shape_77.setTransform(138.7,167);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFE5DE").s().p("AgFAAIALgDIAAAFIgLACg");
	this.shape_78.setTransform(138.7,167);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFEFEB").s().p("AisJJQg6ACgRgLIEfsFQAHgwADg5QAGhxgQgrIgEgJQAsgXAigYQA7gpABgeQACgnAgBNQAgBNAFA6QAGBLgGAtIAAAAQgaBHgIALIk0MpQgTgRg4ADg");
	this.shape_79.setTransform(103.3,152.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFE5DE").s().p("Aj9IRIBmk1QBmk5AFggQACg/ADghQAFg8AjggQAagXAWgsIAhhHQASglATgOQArgfAXgGQAkgJASAlIAEAJQAQArgHBxQgDA5gGAwIgRBBQgUBGgNAZQgNAYhiEtIhfEpg");
	this.shape_80.setTransform(83.1,156.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E8CFCA").s().p("Ah3HGQhFgkglArQgOAQAdiBQAch+ARgrQANgggHg8QgMhBgEgbQgDgfAag2QAlhPAJgbQARg2gcg/QgHgOgshIQgMgUgGg2IB3AgQAhAHAggfIAZggIADAtQAKAuAhAEQApAEB4gnQgFAKAAAaQAAAVgLAKQgqAlgSAxQgQArgBA6QgBAuhiFBQgvCigxCYQgbgagigSg");
	this.shape_81.setTransform(64.9,162.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EFD9D3").s().p("AgIEUQgBisgQgmQgbg6gLgaQgSgtAEghQADgVAUgwQAQgpgCgbQgDgegegHIgegCQAGgaAvg8QA0hDAFgJQAGgMACAKIADAkQAGA2AMATQAsBIAHAOQAcA/gRA2QgJAcglBOQgaA1ADAfQAHA3AyExQgKAJgnABQgnABgIAFQADhQgBhWg");
	this.shape_82.setTransform(44.4,155.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFE5DE").s().p("AgVD2QgDijgKgDQgGgRgTgbQgRgbgVgZQAEgngEg4QgJgzABgYQABgoAkgiQAkgjASgpQAKgXAJgwIAeABQAfAHACAfQADAbgRAoQgUAwgCAWQgEAhASAtQAKAaAcA7QAPAmAFDKQADBlgBBgQgdAShhAVQAAhRgBhRg");
	this.shape_83.setTransform(33.5,169);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFEFEB").s().p("AipDsQgEgBAyh8QA3iHAFgUQAUhWALgiQAbhWATALQATALAhAoIAhAnQAaAnAMAwQARBKAKB0QAFA6ABAsQhHAFhOADQhDADgsAAQg7AAgUgFg");
	this.shape_84.setTransform(17,186.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFEFEB").s().p("AgXCuQglhhgIAGQgtgmg5gqICIjOIAmgaIA3AaIANBZQAIAyAsADIAeACQAOACACAMQAEAYgoAtIgoAqQgLgGAEBGQAFBMgJAGQgWASgUAAQgjAAgdg4g");
	this.shape_85.setTransform(435.8,154.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.highMountain, new cjs.Rectangle(0,0,3665.1,216.1), null);


(lib.atmosphere = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E2F4FF","rgba(255,255,255,0)"],[0.188,1],0,-275.3,0,279.9).s().p("EicMArQMAAAhWfME4ZAAAMAAABWfg");
	this.shape.setTransform(999.7,276.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.atmosphere, new cjs.Rectangle(0,0,1999.4,553.5), null);


(lib.wrongAnswerLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

	// Layer_1
	this.instance = new lib.innerWrongAnswer();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},18).wait(10).to({alpha:0},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-296,960,592);


(lib.startImageLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.endTresureLIB();
	this.instance.parent = this;
	this.instance.setTransform(125.3,133.2,1.175,1.175,0,0,0,0.6,0.6);
	this.instance.filters = [new cjs.ColorFilter(0.49, 0.49, 0.49, 1, 123.42, 102, 79.56, 0)];
	this.instance.cache(-67,-58,136,117);

	this.text = new cjs.Text("שלום לכם חברים!\nקוראים לי פיט ואני זקוק לעזרתכם.\n\nמפת האוצר שלי נקרעה לחלקים והתפזרה בכל רחבי המדבר.\nעזרו לי למצוא את כל החלקים המתאימים ולהגיע אל האוצר!", "bold 20px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 24;
	this.text.lineWidth = 377;
	this.text.parent = this;
	this.text.setTransform(200.8,-193.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#87522D").ss(1,0,1).p("EgBNgmFQARACAdgGQAhgHANAAQAyABAwANQAMADAFABQAKABAHgCQAIgDAHgKQAGgKAAgMQARAcArgMQAYgGAJAAQASgBAMAMQAEADAPAWQALAQAJADIAEgrQAFAKAMAAQAGgBAPgEQAKgCANAEQAIACAQAGQAfAIAOgTQACgDAFgHQAEgHADgDQAIgHARABICEAEQgBAIADAIQADAIAFAEQAGAEAQACQAjAFAgATQgDgPAKgOQAIgLAMgGQATgIAHAAQAFAAAhAGQgUgLgSgSQACACALAAQAGgBAIAAIBeABQAGAAALABQAKAAAGgCQANgDAagOQACAPAFANIAQgMQAAAMABADQACADACAAQADAAABgEIAGATICpAGIAIgfQAEAIAHAEQAHADAHgDQAGgDAEgJQAEgJAAgKIAIAUIBMgCQAHAAAFAEQAGAEAAAIQADgGAFgCIAMAYQAEgFAAgHIAIAPIAGgPIAIASIACgVIBAgHQA3gGAaAHQALADAUAFQASADALgJQACgBAFgFQAEgDADgBQAHgDAPAFQAUAHAZABQARABAdgBQAFAAAKgFQAIgEAGAAQASACAcgFQAFAKABAMQAEABACgFIAJASQADgPARAAQAqgBAoAUQAHADAEgBQABAAAJgJQAHgFANADQAQADAFgCQgBgHADgGQAVgJAXAEQAWAEATAQQARASAUgJQAFgYAQgJQAZAKAZgCQgCgHACgJQACgJAFgFQAGgHAQgEQAcgGAOAHQAGADALAKQAKAKAGAEQAPAJAZgFQAhgFAJABQAHABAEAEQADADAEAJQAHANANADQAKADAPgCQAOgYANgQIAxgFIAAA1IgTAAIABAiQADgBAJABQAEAQgEAeQgEAlAAAKQgLAEgSADQgUAEgKACQAIABAHAFQAEADABAEQAAADgBADQgBACgDABQgDABgFgCIAAASQgOgDgMALQAOAJASACQAMACAWgBQgHADgDALQgDAMADAKQgDgDgDAEQgEADAAAGQAAAJAGAKQAHAMAAAFQgEAFgBAAQACAHAJAGQAIAHADAHQACAHAAALQgBAHgBAMQAAARAACGQgVADgWAHQAGAFABAMQABALgFAHIAaATIggAOQARARASABQAMAMgBAqIgEECQgOABgLANQANACAEAJQACAGgDAHQgDAHgEgEQgBAhAQAXQgZAPgHAnQAFgBAFAHQAEAGABAKQABAGACALQABAKAEAGQABADACgBIAAAAQABgBAAgCQAAgCgBABQAAACAAACQADATgGARIgHAQQgFAUAJAeQAFAOALAfQAIAbgBAUQgGBKAAAYIgcAFQAFADACAHQADAHgBAHQgBAIgEAFQgEAFgFABIAFAUQgHAAgDAMQgEALAFAIQgLAHgKANQAagIAYANIACAVQABgCABgDQAAgBAAgBQAAgEgCgDQABAFABAEQALBCgGBIQgBAIgBACQgCADgIADQgHADgGALQgLAUABAaQABAHgBADQgBAGgJAKQgHAJABAHQABAEADAFQAEAIgDAMQgDALgHACQAPAMARgDQABAaAJAUQAIgSgDgUQAFgDACAOIAHBFQABAIgBAEQgBAFgHAIQgKANgEAUQgEAVAEASQAGAcAIABQgDAeABAxQADBJAAAHIAAC/IgRACQgEAAgCADQgCACAAAHIAAA8QAAAMgBAGQgBAIgFAJQgFALgLAVQgIATgBAQQAAAKAEAXQAEAUgBAMQACAGAEADQAFADAEgBQAKgEABgQQATAjgDAtQAAAIgCARQAAAOAEAJQABAEAEAHQADAGAAAFQAAACgCAOQgDANAEAOQACAIAFARQACALgCAQQgBAIgCASQAAANABAYQABAaAAAMQgCA9gaAVQAAAhgGAnQgFAaAAAJQAAALACALIAEApQABAHABABIAGAEQAIAEAFAQQAIAZgFA1IgIBRQgCAcAKACQAAA5ADBxQAABkgGBFQgIAEgFAHQgGAJABAKQAAAFADAIQADAIAAAEQAAAIgFAPQgGAOABAIQABADACAHQACAHAAADQABAGgEAJQgEALAAAEQgBAGACAMIAJAwQACAMAEAEQACACAEACQAHAFgBAVQgGBqAMCdQgHgOgDgDQgFAHAAAUQAAAMABATQgBgCgBgBQgCgBgCACQgDADAAAHIgJBGQgBARACAFQABAFAHAKQALARADAbQAEAdgIATQgEALgIAEQgEACgDAAQgFAAgEgDEAg2Al1QgBACgBACQgDAEgDAAIiYAAQgJAAgbACQgWABgNgBQgFAAgQgJQgQgJgBAAIgMADIAEgSQgQAUgFAdIj4gGIAggUQgNgIgTAAQgVACgLAAQgqACgRggQAAAegDAdQgBAKgCADQgDAEgHAAQhggEhdgTIAKgSQghAChCADQgHABgDgEQgEgDgDgKIgOgvQgDAcgKAdIgMglQgIAGABANIgMgTQgEAFgDAIQgFgQgKgMIgEASQgJgYgEgZQgIAyAIAzQhgADgwAAQhWAAg6gTQgQgHgLgFQgVgJgGADQgSAMgVgFQgUgFgQgTQgGgIgDgCQgDgDgIgCIglgHQgGgCgDADQgBABgEAQQgDAMgIAIQgHAHgJACQgMABgXgKIgmgRQgNAQgGAZQgGAYACAZIhOADIgFgPIghAAIACgXQgKACgJgKQgJgKgCgPIgHAUIgQguIgHAyIkcAAQhIAGhJgQQgPgDgIgCQgNgDgGgKQgFgIgLggQgLghABgIIgVBqQh2AHh2gUQgKgCgBgHQABAKgFAFIgIgfIgFA6IjxgOQgGgBgOgYQgOgaAEgIQgOAcgYALQgYAMgXgKQgEgCgKgHQgKgGgFgCQgPgGgfACQgeABgPgGQgTgJAAAAQgLgEgHAGQgDACgEAHQgFAHgDACQgHAFgOgGQghgNgjgSQgGAHgJgBQAHARgGAUQgGATgMAJQgKAIgPABQgIAAgSgCIiDgRQgOgCgHgFQgIgFgGgLQgFgLgBgNIgNBFQiPghiOAWIgMgjIgJAkIgIgfIgQA7QhoABg0gEQgVgCgLgCQgRgFgMgJQgIgGgFgJQgFgJABgKQgFAjAPAdQgXgDghAAQgmABgTAAQgEgVANgSQAFgHAAgEQAAgHgKgDIhUgRQABATgIARQgIARgNAFIACAVQgRAIgqgKQgmgKgSAPQgDADgGAFQgFAEgEgBQgLgCgMgkQgKgigQAFIgaAJQgNAEgFAGQgEAFgBAIQgCAHADAGQgbALgXASQgHgTgOgHQABgOAIgbQAIgZAAgQQABgIgEgYIgHgwIgMAIQAFgvgQgpQgGgPgDgIQgFgNAAgLQAAgQAMgUQAOgYADgKQADgLAAgjQABgdAHgMQAFgGABgEQACgIgCgJQgGgWgMgNQACgKAKgOQAKgPACgKQADgOgGgWQgIgbAAgKIgZgHQAPhEAEhJQABgMgBgzQAAgnAEgXQAGgXAHgFQAIgCADgCQAGgCAAgHQAAgCgCgHQgOgbgEgjQgFgjAGghQAIgBAGgHQAHgHADgLIgjg6QAFgZAJgVQgFgggMgfQgGgOgEgIQgFgNgCgLQgFgUADgcQABgRAShjQANhGgIgtQgNgwgGgXQgLgqAGgcQAKgcABgQQABgJgCgNQgCgOgBgIQgDgbAEgVQACgMAGgSQAHgXABgGQACgJAChBQADhAgCAAQgCAAgGgDQgGgCgCAAQgBgcgEgRQAYAGAXgQIgXgHQAhgTAkgBQgqgQgmgYIAQgSIgTgDIABj5IAngVQgSgCgOgPQAPgIAKgUQgKAAgIgJQgIgJgEgOQgGgRgCgnQABgrABgkQABhHgBAAQAFABAFgEIAIguQARgLAQgDIgfgQQgQgJgGgEQgMgJgGgMQAGgbANg+QACgMgCgGQgBgEgDgBQgEgBgBAEQAUjngGjuQAZAAAXgSQgVgEgRgUIAHixIgXgLQgBgWAAgLQAAgUACgNQABgGAFgRQADgOABgJQgBgQAAgHQABgQAHgNQAIgMAKgCQgPACgLgVQgKgWAGgWQAGgOACgIQACgGABgLQABgQAAgCQADgYALgEQACgVgIghQgJgqgBgMQAAgIAAgmQAAgngJglQAFADADgKQACgJgCgJQgFgNAAgEQgCgJADgGQAEgHAKAEQAOAHACAAQAEAAAMgHQAKgGAFAEIACgnQgNgBgGgBQgKgDgIgGQgIgHgFgNQgFgNACgNQAHgSABgJQACgKgDgNQgJhEAJg+QADgVgCgKQgCgLgHgRQgIgTgCgJQgCgPgCgHQgCgNgDgJQATAMAOgRQADgOgKgOQgSgagFgIQgQgeAJgLQAEgEAOAKQAHAFAKAIQAQALABAAQALAFAGgJQADgEAAgZQAAgZgDgFQgFgLgSgDQgZgFgBgBQgOgGgFgTQgFgagEgQIA2AnQABgRAHgMQAHAMANAAIADgWQApAmAwADQAHAAAOAAQAMABAIACQAYAFAKAZQADgXgDgcQA7AIA3gTQAEgCADACQADABADAIQAEAMAJAGQAIAGAJgBQAEgNADgTQADgNAMAAQAJAAAVAHQASAGAMgDQAGgBAcgJQAUgGANgBQAGAgAJAdQgBgIAFgFIAFAXIAGgVQAHAPAFATQgDgnAGgmQBzABBtgHQAqgDALgBQAeAAAXAEQAEAiAKAhQADAGACAAQACgBAAgGIAEgvQABgLACgDIAMAnIAAgsQCBADAAgGIgFBPQABgGAEgDIANAgQALgXAFgdQAFABADAMQADAMADAEQACADADAAQAEAAABgDQABgCAAgJQAAgHACgCIASAhIAEgxQAVAQAYgFIgIgVIAmgKQACgIgFgEQAOAAAdgBQAZgBARACQAKACAPAGQASAHAHACQAhAIA0gFQAdgCA5gHQBFgDCAgHQAOAAAegDQAbgCASAEQAQAEAeAHQAZAFAVgBIg2AHQgmAFgSAJQASAAAqAFQAmACAUgKQADgBAKgKQAJgJAFABQAHACAJATQAFALAHATIAGgqIAYAvIAHgiQBDADBDgIQAHAPAFAQQAAgQAIgNQAHgNAKgFQAJgFAMAAQAHAAAPACICaAZIABAAIABABIA8AJEAmYAh+QAOAGAOAIIAAAvIgZAAQAOAQAHAbQAHAagDAbQgGgMgJgHQgDAbABAcIgKgVQgGABgEAFQgFAGgBAIQAKgEAKAIQAKAIADAOIghAEQAeARAdAYIj5AFQgJAAgFgCQgMgHgHgjQABAcgHAaIg0ACQgGAAgCgDQgDgCgBgIIgQhLIgIA8QgEgLgBgPQgEAagBAgIgMglIgBgD");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2C89C").s().p("EgmlAmqQABgOAIgbQAIgZAAgQQABgIgEgYIgHgwIgMAIQAFgvgQgpIgJgXQgFgNAAgLQAAgQAMgUQAOgYADgKQADgLAAgjQABgdAHgMQAFgGABgEQACgIgCgJQgGgWgMgNQACgKAKgOQAKgPACgKQADgOgGgWQgIgbAAgKIgZgHQAPhEAEhJIAAg/QAAgnAEgXQAGgXAHgFIALgEQAGgCAAgHIgCgJQgOgbgEgjQgFgjAGghQAIgBAGgHQAHgHADgLIgjg6QAFgZAJgVQgFgggMgfIgKgWQgFgNgCgLQgFgUADgcQABgRAShjQANhGgIgtIgThHQgLgqAGgcQAKgcABgQQABgJgCgNIgDgWQgDgbAEgVQACgMAGgSIAIgdQACgJAChBQADhAgCAAQgCAAgGgDIgIgCQgBgcgEgRQAYAGAXgQIgXgHQAhgTAkgBQgqgQgmgYIAQgSIgTgDIABj5IAngVQgSgCgOgPQAPgIAKgUQgKAAgIgJQgIgJgEgOQgGgRgCgnIAChPQABhHgBAAQAFABAFgEIAIguQARgLAQgDIgfgQIgWgNQgMgJgGgMQAGgbANg+QACgMgCgGQgBgEgDgBQgEgBgBAEQAUjngGjuQAZAAAXgSQgVgEgRgUIAHixIgXgLIgBghQAAgUACgNIAGgXQADgOABgJIgBgXQABgQAHgNQAIgMAKgCQgPACgLgVQgKgWAGgWQAGgOACgIQACgGABgLIABgSQADgYALgEQACgVgIghQgJgqgBgMIAAguQAAgngJglQAFADADgKQACgJgCgJIgFgRQgCgJADgGQAEgHAKAEQAOAHACAAQAEAAAMgHQAKgGAFAEIACgnIgTgCQgKgDgIgGQgIgHgFgNQgFgNACgNQAHgSABgJQACgKgDgNQgJhEAJg+QADgVgCgKQgCgLgHgRQgIgTgCgJIgEgWQgCgNgDgJQATAMAOgRQADgOgKgOIgXgiQgQgeAJgLQAEgEAOAKIARANIARALQALAFAGgJQADgEAAgZQAAgZgDgFQgFgLgSgDIgagGQgOgGgFgTIgJgqIA2AnQABgRAHgMQAHAMANAAIADgWQApAmAwADIAVAAQAMABAIACQAYAFAKAZQADgXgDgcQA7AIA3gTQAEgCADACQADABADAIQAEAMAJAGQAIAGAJgBQAEgNADgTQADgNAMAAQAJAAAVAHQASAGAMgDIAigKQAUgGANgBQAGAgAJAdQgBgIAFgFIAFAXIAGgVQAHAPAFATQgDgnAGgmQBzABBtgHIA1gEQAeAAAXAEQAEAiAKAhQADAGACAAQACgBAAgGIAEgvQABgLACgDIAMAnIAAgsQCBADAAgGIgFBPQABgGAEgDIANAgQALgXAFgdQAFABADAMQADAMADAEQACADADAAQAEAAABgDQABgCAAgJQAAgHACgCIASAhIAEgxQAVAQAYgFIgIgVIAmgKQACgIgFgEIArgBQAZgBARACQAKACAPAGIAZAJQAhAIA0gFIBWgJIDFgKIAsgDQAbgCASAEIAuALQAZAFAVgBIg2AHQgmAFgSAJQASAAAqAFQAmACAUgKQADgBAKgKQAJgJAFABQAHACAJATIAMAeIAGgqIAYAvIAHgiQBDADBDgIQAHAPAFAQQAAgQAIgNQAHgNAKgFQAJgFAMAAIAWACICaAZIABAAIABABQARACAdgGQAhgHANAAQAyABAwANIARAEQAKABAHgCQAIgDAHgKQAGgKAAgMQARAcArgMQAYgGAJAAQASgBAMAMQAEADAPAWQALAQAJADIAEgrQAFAKAMAAQAGgBAPgEQAKgCANAEIAYAIQAfAIAOgTIAHgKIAHgKQAIgHARABICEAEQgBAIADAIQADAIAFAEQAGAEAQACQAjAFAgATQgDgPAKgOQAIgLAMgGQATgIAHAAIAmAGQgUgKgSgTQACACALAAIAOgBIBeABIARABQAKAAAGgCQANgDAagOQACAPAFANIAQgMQAAAMABADQACADACAAQABAAAAAAQABgBAAAAQABAAAAgBQAAgBABgBIAGATICpAGIAIgfQAEAIAHAEQAHADAHgDQAGgDAEgJQAEgJAAgKIAIAUIBMgCQAHAAAFAEQAGAEAAAIQADgGAFgCIAMAYQAEgFAAgHIAIAPIAGgPIAIASIACgVIBAgHQA3gGAaAHIAfAIQASADALgJIAHgGQAEgDADgBQAHgDAPAFQAUAHAZABQARABAdgBQAFAAAKgFQAIgEAGAAQASACAcgFQAFAKABAMQAEABACgFIAJASQADgPARAAQAqgBAoAUQAHADAEgBIAKgJQAHgFANADQAQADAFgCQgBgHADgGQAVgJAXAEQAWAEATAQQARASAUgJQAFgYAQgJQAZAKAZgCQgCgHACgJQACgJAFgFQAGgHAQgEQAcgGAOAHQAGADALAKQAKAKAGAEQAPAJAZgFQAhgFAJABQAHABAEAEQADADAEAJQAHANANADQAKADAPgCQAOgYANgQIAxgFIAAA1IgTAAIABAiQADgBAJABQAEAQgEAeQgEAlAAAKQgLAEgSADIgeAGQAIABAHAFQAEADABAEIgBAGQgBACgDABQgDABgFgCIAAASQgOgDgMALQAOAJASACQAMACAWgBQgHADgDALQgDAMADAKQgDgDgDAEQgEADAAAGQAAAJAGAKQAHAMAAAFIgFAFQACAHAJAGQAIAHADAHQACAHAAALIgCATIAACXQgVADgWAHQAGAFABAMQABALgFAHIAaATIggAOQARARASABQAMAMgBAqIgEECQgOABgLANQANACAEAJQACAGgDAHQgDAHgEgEQgBAhAQAXQgZAPgHAnQAFgBAFAHQAEAGABAKIADARQABAKAEAGQAAABAAAAQAAABABAAQAAAAABAAQAAAAABAAIAAAAQADATgGARIgHAQQgFAUAJAeIAQAtQAIAbgBAUQgGBKAAAYIgcAFQAFADACAHQADAHgBAHQgBAIgEAFQgEAFgFABIAFAUQgHAAgDAMQgEALAFAIQgLAHgKANQAagIAYANIACAVIACgFQALBCgGBIQgBAIgBACQgCADgIADQgHADgGALQgLAUABAaIAAAKQgBAGgJAKQgHAJABAHQABAEADAFQAEAIgDAMQgDALgHACQAPAMARgDQABAaAJAUQAIgSgDgUQAFgDACAOIAHBFQABAIgBAEQgBAFgHAIQgKANgEAUQgEAVAEASQAGAcAIABQgDAeABAxIADBQIAAC/IgRACQgEAAgCADQgCACAAAHIAAA8IgBASQgBAIgFAJIgQAgQgIATgBAQQAAAKAEAXQAEAUgBAMQACAGAEADQAFADAEgBQAKgEABgQQATAjgDAtIgCAZQAAAOAEAJIAFALQADAGAAAFIgCAQQgDANAEAOIAHAZQACALgCAQIgDAaIABAlIABAmQgCA9gaAVQAAAhgGAnQgFAaAAAJQAAALACALIAEApIACAIIAGAEQAIAEAFAQQAIAZgFA1IgIBRQgCAcAKACQAAA5ADBxQAABkgGBFQgIAEgFAHQgGAJABAKIADANQADAIAAAEQAAAIgFAPQgGAOABAIIADAKIACAKQABAGgEAJIgEAPQgBAGACAMIAJAwQACAMAEAEIAGAEQAHAFgBAVQgGBqAMCdQgHgOgDgDQgFAHAAAUIABAfQgBgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgDADAAAHIgJBGQgBARACAFQABAFAHAKQALARADAbQAEAdgIATQgEALgIAEIgHACQAOAGAOAIIAAAvIgZAAQAOAQAHAbQAHAagDAbQgGgMgJgHQgDAbABAcIgKgVQgGABgEAFQgFAGgBAIQAKgEAKAIQAKAIADAOIghAEQAeARAdAYIj5AFQgJAAgFgCQgMgHgHgjQABAcgHAaIg0ACQgGAAgCgDQgDgCgBgIIgQhLIgIA8QgEgLgBgPQgEAagBAgIgMglIgCAEQgDAEgDAAIiYAAIgkACQgWABgNgBQgFAAgQgJIgRgJIgMADIAEgSQgQAUgFAdIj4gGIAggUQgNgIgTAAIggACQgqACgRggQAAAegDAdQgBAKgCADQgDAEgHAAQhggEhdgTIAKgSIhjAFQgHABgDgEQgEgDgDgKIgOgvQgDAcgKAdIgMglQgIAGABANIgMgTQgEAFgDAIQgFgQgKgMIgEASQgJgYgEgZQgIAyAIAzQhgADgwAAQhWAAg6gTIgbgMQgVgJgGADQgSAMgVgFQgUgFgQgTQgGgIgDgCQgDgDgIgCIglgHQgGgCgDADQgBABgEAQQgDAMgIAIQgHAHgJACQgMABgXgKIgmgRQgNAQgGAZQgGAYACAZIhOADIgFgPIghAAIACgXQgKACgJgKQgJgKgCgPIgHAUIgQguIgHAyIkcAAQhIAGhJgQIgXgFQgNgDgGgKQgFgIgLggQgLghABgIIgVBqQh2AHh2gUQgKgCgBgHQABAKgFAFIgIgfIgFA6IjxgOQgGgBgOgYQgOgaAEgIQgOAcgYALQgYAMgXgKIgOgJQgKgGgFgCQgPgGgfACQgeABgPgGIgTgJQgLgEgHAGIgHAJIgIAJQgHAFgOgGQghgNgjgSQgGAHgJgBQAHARgGAUQgGATgMAJQgKAIgPABQgIAAgSgCIiDgRQgOgCgHgFQgIgFgGgLQgFgLgBgNIgNBFQiPghiOAWIgMgjIgJAkIgIgfIgQA7QhoABg0gEQgVgCgLgCQgRgFgMgJQgIgGgFgJQgFgJABgKQgFAjAPAdQgXgDghAAIg5ABQgEgVANgSQAFgHAAgEQAAgHgKgDIhUgRQABATgIARQgIARgNAFIACAVQgRAIgqgKQgmgKgSAPIgJAIQgFAEgEgBQgLgCgMgkQgKgigQAFIgaAJQgNAEgFAGQgEAFgBAIQgCAHADAGQgbALgXASQgHgTgOgHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.startImageLIB, new cjs.Rectangle(-251,-251,502,502), null);


(lib.pauseImageLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.pauseBeckToGame = new lib.gameBtnLIB();
	this.pauseBeckToGame.name = "pauseBeckToGame";
	this.pauseBeckToGame.parent = this;
	this.pauseBeckToGame.setTransform(10.5,170.2,1.563,1.563,0,0,0,-1.1,-0.4);

	this.text = new cjs.Text("חזור למשחק לאחר המנוחה", "30px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 703;
	this.text.parent = this;
	this.text.setTransform(17.2,-33.7);

	this.text_1 = new cjs.Text("עצרת לתת מנוחה לך ולסוסך", "bold 30px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 36;
	this.text_1.lineWidth = 703;
	this.text_1.parent = this;
	this.text_1.setTransform(17.2,-158.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#87522D").ss(1,0,1).p("EgBNgmFQARACAdgGQAhgHANAAQAyABAwANQAMADAFABQAKABAHgCQAIgDAHgKQAGgKAAgMQARAcArgMQAYgGAJAAQASgBAMAMQAEADAPAWQALAQAJADIAEgrQAFAKAMAAQAGgBAPgEQAKgCANAEQAIACAQAGQAfAIAOgTQACgDAFgHQAEgHADgDQAIgHARABICEAEQgBAIADAIQADAIAFAEQAGAEAQACQAjAFAgATQgDgPAKgOQAIgLAMgGQATgIAHAAQAFAAAhAGQgUgLgSgSQACACALAAQAGgBAIAAIBeABQAGAAALABQAKAAAGgCQANgDAagOQACAPAFANIAQgMQAAAMABADQACADACAAQADAAABgEIAGATICpAGIAIgfQAEAIAHAEQAHADAHgDQAGgDAEgJQAEgJAAgKIAIAUIBMgCQAHAAAFAEQAGAEAAAIQADgGAFgCIAMAYQAEgFAAgHIAIAPIAGgPIAIASIACgVIBAgHQA3gGAaAHQALADAUAFQASADALgJQACgBAFgFQAEgDADgBQAHgDAPAFQAUAHAZABQARABAdgBQAFAAAKgFQAIgEAGAAQASACAcgFQAFAKABAMQAEABACgFIAJASQADgPARAAQAqgBAoAUQAHADAEgBQABAAAJgJQAHgFANADQAQADAFgCQgBgHADgGQAVgJAXAEQAWAEATAQQARASAUgJQAFgYAQgJQAZAKAZgCQgCgHACgJQACgJAFgFQAGgHAQgEQAcgGAOAHQAGADALAKQAKAKAGAEQAPAJAZgFQAhgFAJABQAHABAEAEQADADAEAJQAHANANADQAKADAPgCQAOgYANgQIAxgFIAAA1IgTAAIABAiQADgBAJABQAEAQgEAeQgEAlAAAKQgLAEgSADQgUAEgKACQAIABAHAFQAEADABAEQAAADgBADQgBACgDABQgDABgFgCIAAASQgOgDgMALQAOAJASACQAMACAWgBQgHADgDALQgDAMADAKQgDgDgDAEQgEADAAAGQAAAJAGAKQAHAMAAAFQgEAFgBAAQACAHAJAGQAIAHADAHQACAHAAALQgBAHgBAMQAAARAACGQgVADgWAHQAGAFABAMQABALgFAHIAaATIggAOQARARASABQAMAMgBAqIgEECQgOABgLANQANACAEAJQACAGgDAHQgDAHgEgEQgBAhAQAXQgZAPgHAnQAFgBAFAHQAEAGABAKQABAGACALQABAKAEAGQABADACgBIAAAAQADATgGARIgHAQQgFAUAJAeQAFAOALAfQAIAbgBAUQgGBKAAAYIgcAFQAFADACAHQADAHgBAHQgBAIgEAFQgEAFgFABIAFAUQgHAAgDAMQgEALAFAIQgLAHgKANQAagIAYANIACAVQABgCABgDQAAgBAAgBQAAgEgCgDQABAFABAEQALBCgGBIQgBAIgBACQgCADgIADQgHADgGALQgLAUABAaQABAHgBADQgBAGgJAKQgHAJABAHQABAEADAFQAEAIgDAMQgDALgHACQAPAMARgDQABAaAJAUQAIgSgDgUQAFgDACAOIAHBFQABAIgBAEQgBAFgHAIQgKANgEAUQgEAVAEASQAGAcAIABQgDAeABAxQADBJAAAHIAAC/IgRACQgEAAgCADQgCACAAAHIAAA8QAAAMgBAGQgBAIgFAJQgFALgLAVQgIATgBAQQAAAKAEAXQAEAUgBAMQACAGAEADQAFADAEgBQAKgEABgQQATAjgDAtQAAAIgCARQAAAOAEAJQABAEAEAHQADAGAAAFQAAACgCAOQgDANAEAOQACAIAFARQACALgCAQQgBAIgCASQAAANABAYQABAaAAAMQgCA9gaAVQAAAhgGAnQgFAaAAAJQAAALACALIAEApQABAHABABIAGAEQAIAEAFAQQAIAZgFA1IgIBRQgCAcAKACQAAA5ADBxQAABkgGBFQgIAEgFAHQgGAJABAKQAAAFADAIQADAIAAAEQAAAIgFAPQgGAOABAIQABADACAHQACAHAAADQABAGgEAJQgEALAAAEQgBAGACAMIAJAwQACAMAEAEQACACAEACQAHAFgBAVQgGBqAMCdQgHgOgDgDQgFAHAAAUQAAAMABATQgBgCgBgBQgCgBgCACQgDADAAAHIgJBGQgBARACAFQABAFAHAKQALARADAbQAEAdgIATQgEALgIAEQgEACgDAAQgFAAgEgDEAmpgUdQABgBAAgCQAAgCgBABQAAACAAACgEAg2Al1QgBACgBACQgDAEgDAAIiYAAQgJAAgbACQgWABgNgBQgFAAgQgJQgQgJgBAAIgMADIAEgSQgQAUgFAdIj4gGIAggUQgNgIgTAAQgVACgLAAQgqACgRggQAAAegDAdQgBAKgCADQgDAEgHAAQhggEhdgTIAKgSQghAChCADQgHABgDgEQgEgDgDgKIgOgvQgDAcgKAdIgMglQgIAGABANIgMgTQgEAFgDAIQgFgQgKgMIgEASQgJgYgEgZQgIAyAIAzQhgADgwAAQhWAAg6gTQgQgHgLgFQgVgJgGADQgSAMgVgFQgUgFgQgTQgGgIgDgCQgDgDgIgCIglgHQgGgCgDADQgBABgEAQQgDAMgIAIQgHAHgJACQgMABgXgKIgmgRQgNAQgGAZQgGAYACAZIhOADIgFgPIghAAIACgXQgKACgJgKQgJgKgCgPIgHAUIgQguIgHAyIkcAAQhIAGhJgQQgPgDgIgCQgNgDgGgKQgFgIgLggQgLghABgIIgVBqQh2AHh2gUQgKgCgBgHQABAKgFAFIgIgfIgFA6IjxgOQgGgBgOgYQgOgaAEgIQgOAcgYALQgYAMgXgKQgEgCgKgHQgKgGgFgCQgPgGgfACQgeABgPgGQgTgJAAAAQgLgEgHAGQgDACgEAHQgFAHgDACQgHAFgOgGQghgNgjgSQgGAHgJgBQAHARgGAUQgGATgMAJQgKAIgPABQgIAAgSgCIiDgRQgOgCgHgFQgIgFgGgLQgFgLgBgNIgNBFQiPghiOAWIgMgjIgJAkIgIgfIgQA7QhoABg0gEQgVgCgLgCQgRgFgMgJQgIgGgFgJQgFgJABgKQgFAjAPAdQgXgDghAAQgmABgTAAQgEgVANgSQAFgHAAgEQAAgHgKgDIhUgRQABATgIARQgIARgNAFIACAVQgRAIgqgKQgmgKgSAPQgDADgGAFQgFAEgEgBQgLgCgMgkQgKgigQAFIgaAJQgNAEgFAGQgEAFgBAIQgCAHADAGQgbALgXASQgHgTgOgHQABgOAIgbQAIgZAAgQQABgIgEgYIgHgwIgMAIQAFgvgQgpQgGgPgDgIQgFgNAAgLQAAgQAMgUQAOgYADgKQADgLAAgjQABgdAHgMQAFgGABgEQACgIgCgJQgGgWgMgNQACgKAKgOQAKgPACgKQADgOgGgWQgIgbAAgKIgZgHQAPhEAEhJQABgMgBgzQAAgnAEgXQAGgXAHgFQAIgCADgCQAGgCAAgHQAAgCgCgHQgOgbgEgjQgFgjAGghQAIgBAGgHQAHgHADgLIgjg6QAFgZAJgVQgFgggMgfQgGgOgEgIQgFgNgCgLQgFgUADgcQABgRAShjQANhGgIgtQgNgwgGgXQgLgqAGgcQAKgcABgQQABgJgCgNQgCgOgBgIQgDgbAEgVQACgMAGgSQAHgXABgGQACgJAChBQADhAgCAAQgCAAgGgDQgGgCgCAAQgBgcgEgRQAYAGAXgQIgXgHQAhgTAkgBQgqgQgmgYIAQgSIgTgDIABj5IAngVQgSgCgOgPQAPgIAKgUQgKAAgIgJQgIgJgEgOQgGgRgCgnQABgrABgkQABhHgBAAQAFABAFgEIAIguQARgLAQgDIgfgQQgQgJgGgEQgMgJgGgMQAGgbANg+QACgMgCgGQgBgEgDgBQgEgBgBAEQAUjngGjuQAZAAAXgSQgVgEgRgUIAHixIgXgLQgBgWAAgLQAAgUACgNQABgGAFgRQADgOABgJQgBgQAAgHQABgQAHgNQAIgMAKgCQgPACgLgVQgKgWAGgWQAGgOACgIQACgGABgLQABgQAAgCQADgYALgEQACgVgIghQgJgqgBgMQAAgIAAgmQAAgngJglQAFADADgKQACgJgCgJQgFgNAAgEQgCgJADgGQAEgHAKAEQAOAHACAAQAEAAAMgHQAKgGAFAEIACgnQgNgBgGgBQgKgDgIgGQgIgHgFgNQgFgNACgNQAHgSABgJQACgKgDgNQgJhEAJg+QADgVgCgKQgCgLgHgRQgIgTgCgJQgCgPgCgHQgCgNgDgJQATAMAOgRQADgOgKgOQgSgagFgIQgQgeAJgLQAEgEAOAKQAHAFAKAIQAQALABAAQALAFAGgJQADgEAAgZQAAgZgDgFQgFgLgSgDQgZgFgBgBQgOgGgFgTQgFgagEgQIA2AnQABgRAHgMQAHAMANAAIADgWQApAmAwADQAHAAAOAAQAMABAIACQAYAFAKAZQADgXgDgcQA7AIA3gTQAEgCADACQADABADAIQAEAMAJAGQAIAGAJgBQAEgNADgTQADgNAMAAQAJAAAVAHQASAGAMgDQAGgBAcgJQAUgGANgBQAGAgAJAdQgBgIAFgFIAFAXIAGgVQAHAPAFATQgDgnAGgmQBzABBtgHQAqgDALgBQAeAAAXAEQAEAiAKAhQADAGACAAQACgBAAgGIAEgvQABgLACgDIAMAnIAAgsQCBADAAgGIgFBPQABgGAEgDIANAgQALgXAFgdQAFABADAMQADAMADAEQACADADAAQAEAAABgDQABgCAAgJQAAgHACgCIASAhIAEgxQAVAQAYgFIgIgVIAmgKQACgIgFgEQAOAAAdgBQAZgBARACQAKACAPAGQASAHAHACQAhAIA0gFQAdgCA5gHQBFgDCAgHQAOAAAegDQAbgCASAEQAQAEAeAHQAZAFAVgBIg2AHQgmAFgSAJQASAAAqAFQAmACAUgKQADgBAKgKQAJgJAFABQAHACAJATQAFALAHATIAGgqIAYAvIAHgiQBDADBDgIQAHAPAFAQQAAgQAIgNQAHgNAKgFQAJgFAMAAQAHAAAPACICaAZIABAAIABABIA8AJEAmYAh+QAOAGAOAIIAAAvIgZAAQAOAQAHAbQAHAagDAbQgGgMgJgHQgDAbABAcIgKgVQgGABgEAFQgFAGgBAIQAKgEAKAIQAKAIADAOIghAEQAeARAdAYIj5AFQgJAAgFgCQgMgHgHgjQABAcgHAaIg0ACQgGAAgCgDQgDgCgBgIIgQhLIgIA8QgEgLgBgPQgEAagBAgIgMglIgBgD");
	this.shape.setTransform(0.1,0.1,1.788,1.072);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2C89C").s().p("EgmlAmqQABgOAIgbQAIgZAAgQQABgIgEgYIgHgwIgMAIQAFgvgQgpIgJgXQgFgNAAgLQAAgQAMgUQAOgYADgKQADgLAAgjQABgdAHgMQAFgGABgEQACgIgCgJQgGgWgMgNQACgKAKgOQAKgPACgKQADgOgGgWQgIgbAAgKIgZgHQAPhEAEhJIAAg/QAAgnAEgXQAGgXAHgFIALgEQAGgCAAgHIgCgJQgOgbgEgjQgFgjAGghQAIgBAGgHQAHgHADgLIgjg6QAFgZAJgVQgFgggMgfIgKgWQgFgNgCgLQgFgUADgcQABgRAShjQANhGgIgtIgThHQgLgqAGgcQAKgcABgQQABgJgCgNIgDgWQgDgbAEgVQACgMAGgSIAIgdQACgJAChBQADhAgCAAQgCAAgGgDIgIgCQgBgcgEgRQAYAGAXgQIgXgHQAhgTAkgBQgqgQgmgYIAQgSIgTgDIABj5IAngVQgSgCgOgPQAPgIAKgUQgKAAgIgJQgIgJgEgOQgGgRgCgnIAChPQABhHgBAAQAFABAFgEIAIguQARgLAQgDIgfgQIgWgNQgMgJgGgMQAGgbANg+QACgMgCgGQgBgEgDgBQgEgBgBAEQAUjngGjuQAZAAAXgSQgVgEgRgUIAHixIgXgLIgBghQAAgUACgNIAGgXQADgOABgJIgBgXQABgQAHgNQAIgMAKgCQgPACgLgVQgKgWAGgWQAGgOACgIQACgGABgLIABgSQADgYALgEQACgVgIghQgJgqgBgMIAAguQAAgngJglQAFADADgKQACgJgCgJIgFgRQgCgJADgGQAEgHAKAEQAOAHACAAQAEAAAMgHQAKgGAFAEIACgnIgTgCQgKgDgIgGQgIgHgFgNQgFgNACgNQAHgSABgJQACgKgDgNQgJhEAJg+QADgVgCgKQgCgLgHgRQgIgTgCgJIgEgWQgCgNgDgJQATAMAOgRQADgOgKgOIgXgiQgQgeAJgLQAEgEAOAKIARANIARALQALAFAGgJQADgEAAgZQAAgZgDgFQgFgLgSgDIgagGQgOgGgFgTIgJgqIA2AnQABgRAHgMQAHAMANAAIADgWQApAmAwADIAVAAQAMABAIACQAYAFAKAZQADgXgDgcQA7AIA3gTQAEgCADACQADABADAIQAEAMAJAGQAIAGAJgBQAEgNADgTQADgNAMAAQAJAAAVAHQASAGAMgDIAigKQAUgGANgBQAGAgAJAdQgBgIAFgFIAFAXIAGgVQAHAPAFATQgDgnAGgmQBzABBtgHIA1gEQAeAAAXAEQAEAiAKAhQADAGACAAQACgBAAgGIAEgvQABgLACgDIAMAnIAAgsQCBADAAgGIgFBPQABgGAEgDIANAgQALgXAFgdQAFABADAMQADAMADAEQACADADAAQAEAAABgDQABgCAAgJQAAgHACgCIASAhIAEgxQAVAQAYgFIgIgVIAmgKQACgIgFgEIArgBQAZgBARACQAKACAPAGIAZAJQAhAIA0gFIBWgJIDFgKIAsgDQAbgCASAEIAuALQAZAFAVgBIg2AHQgmAFgSAJQASAAAqAFQAmACAUgKQADgBAKgKQAJgJAFABQAHACAJATIAMAeIAGgqIAYAvIAHgiQBDADBDgIQAHAPAFAQQAAgQAIgNQAHgNAKgFQAJgFAMAAIAWACICaAZIABAAIABABQARACAdgGQAhgHANAAQAyABAwANIARAEQAKABAHgCQAIgDAHgKQAGgKAAgMQARAcArgMQAYgGAJAAQASgBAMAMQAEADAPAWQALAQAJADIAEgrQAFAKAMAAQAGgBAPgEQAKgCANAEIAYAIQAfAIAOgTIAHgKIAHgKQAIgHARABICEAEQgBAIADAIQADAIAFAEQAGAEAQACQAjAFAgATQgDgPAKgOQAIgLAMgGQATgIAHAAIAmAGQgUgKgSgTQACACALAAIAOgBIBeABIARABQAKAAAGgCQANgDAagOQACAPAFANIAQgMQAAAMABADQACADACAAQABAAAAAAQABgBAAAAQABAAAAgBQAAgBABgBIAGATICpAGIAIgfQAEAIAHAEQAHADAHgDQAGgDAEgJQAEgJAAgKIAIAUIBMgCQAHAAAFAEQAGAEAAAIQADgGAFgCIAMAYQAEgFAAgHIAIAPIAGgPIAIASIACgVIBAgHQA3gGAaAHIAfAIQASADALgJIAHgGQAEgDADgBQAHgDAPAFQAUAHAZABQARABAdgBQAFAAAKgFQAIgEAGAAQASACAcgFQAFAKABAMQAEABACgFIAJASQADgPARAAQAqgBAoAUQAHADAEgBIAKgJQAHgFANADQAQADAFgCQgBgHADgGQAVgJAXAEQAWAEATAQQARASAUgJQAFgYAQgJQAZAKAZgCQgCgHACgJQACgJAFgFQAGgHAQgEQAcgGAOAHQAGADALAKQAKAKAGAEQAPAJAZgFQAhgFAJABQAHABAEAEQADADAEAJQAHANANADQAKADAPgCQAOgYANgQIAxgFIAAA1IgTAAIABAiQADgBAJABQAEAQgEAeQgEAlAAAKQgLAEgSADIgeAGQAIABAHAFQAEADABAEIgBAGQgBACgDABQgDABgFgCIAAASQgOgDgMALQAOAJASACQAMACAWgBQgHADgDALQgDAMADAKQgDgDgDAEQgEADAAAGQAAAJAGAKQAHAMAAAFIgFAFQACAHAJAGQAIAHADAHQACAHAAALIgCATIAACXQgVADgWAHQAGAFABAMQABALgFAHIAaATIggAOQARARASABQAMAMgBAqIgEECQgOABgLANQANACAEAJQACAGgDAHQgDAHgEgEQgBAhAQAXQgZAPgHAnQAFgBAFAHQAEAGABAKIADARQABAKAEAGQAAABAAAAQAAABABAAQAAAAABAAQAAAAABAAIAAAAQADATgGARIgHAQQgFAUAJAeIAQAtQAIAbgBAUQgGBKAAAYIgcAFQAFADACAHQADAHgBAHQgBAIgEAFQgEAFgFABIAFAUQgHAAgDAMQgEALAFAIQgLAHgKANQAagIAYANIACAVIACgFQALBCgGBIQgBAIgBACQgCADgIADQgHADgGALQgLAUABAaIAAAKQgBAGgJAKQgHAJABAHQABAEADAFQAEAIgDAMQgDALgHACQAPAMARgDQABAaAJAUQAIgSgDgUQAFgDACAOIAHBFQABAIgBAEQgBAFgHAIQgKANgEAUQgEAVAEASQAGAcAIABQgDAeABAxIADBQIAAC/IgRACQgEAAgCADQgCACAAAHIAAA8IgBASQgBAIgFAJIgQAgQgIATgBAQQAAAKAEAXQAEAUgBAMQACAGAEADQAFADAEgBQAKgEABgQQATAjgDAtIgCAZQAAAOAEAJIAFALQADAGAAAFIgCAQQgDANAEAOIAHAZQACALgCAQIgDAaIABAlIABAmQgCA9gaAVQAAAhgGAnQgFAaAAAJQAAALACALIAEApIACAIIAGAEQAIAEAFAQQAIAZgFA1IgIBRQgCAcAKACQAAA5ADBxQAABkgGBFQgIAEgFAHQgGAJABAKIADANQADAIAAAEQAAAIgFAPQgGAOABAIIADAKIACAKQABAGgEAJIgEAPQgBAGACAMIAJAwQACAMAEAEIAGAEQAHAFgBAVQgGBqAMCdQgHgOgDgDQgFAHAAAUIABAfQgBgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgDADAAAHIgJBGQgBARACAFQABAFAHAKQALARADAbQAEAdgIATQgEALgIAEIgHACQAOAGAOAIIAAAvIgZAAQAOAQAHAbQAHAagDAbQgGgMgJgHQgDAbABAcIgKgVQgGABgEAFQgFAGgBAIQAKgEAKAIQAKAIADAOIghAEQAeARAdAYIj5AFQgJAAgFgCQgMgHgHgjQABAcgHAaIg0ACQgGAAgCgDQgDgCgBgIIgQhLIgIA8QgEgLgBgPQgEAagBAgIgMglIgCAEQgDAEgDAAIiYAAIgkACQgWABgNgBQgFAAgQgJIgRgJIgMADIAEgSQgQAUgFAdIj4gGIAggUQgNgIgTAAIggACQgqACgRggQAAAegDAdQgBAKgCADQgDAEgHAAQhggEhdgTIAKgSIhjAFQgHABgDgEQgEgDgDgKIgOgvQgDAcgKAdIgMglQgIAGABANIgMgTQgEAFgDAIQgFgQgKgMIgEASQgJgYgEgZQgIAyAIAzQhgADgwAAQhWAAg6gTIgbgMQgVgJgGADQgSAMgVgFQgUgFgQgTQgGgIgDgCQgDgDgIgCIglgHQgGgCgDADQgBABgEAQQgDAMgIAIQgHAHgJACQgMABgXgKIgmgRQgNAQgGAZQgGAYACAZIhOADIgFgPIghAAIACgXQgKACgJgKQgJgKgCgPIgHAUIgQguIgHAyIkcAAQhIAGhJgQIgXgFQgNgDgGgKQgFgIgLggQgLghABgIIgVBqQh2AHh2gUQgKgCgBgHQABAKgFAFIgIgfIgFA6IjxgOQgGgBgOgYQgOgaAEgIQgOAcgYALQgYAMgXgKIgOgJQgKgGgFgCQgPgGgfACQgeABgPgGIgTgJQgLgEgHAGIgHAJIgIAJQgHAFgOgGQghgNgjgSQgGAHgJgBQAHARgGAUQgGATgMAJQgKAIgPABQgIAAgSgCIiDgRQgOgCgHgFQgIgFgGgLQgFgLgBgNIgNBFQiPghiOAWIgMgjIgJAkIgIgfIgQA7QhoABg0gEQgVgCgLgCQgRgFgMgJQgIgGgFgJQgFgJABgKQgFAjAPAdQgXgDghAAIg5ABQgEgVANgSQAFgHAAgEQAAgHgKgDIhUgRQABATgIARQgIARgNAFIACAVQgRAIgqgKQgmgKgSAPIgJAIQgFAEgEgBQgLgCgMgkQgKgigQAFIgaAJQgNAEgFAGQgEAFgBAIQgCAHADAGQgbALgXASQgHgTgOgHg");
	this.shape_1.setTransform(0.1,0.1,1.788,1.072);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text},{t:this.pauseBeckToGame}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pauseImageLIB, new cjs.Rectangle(-447.9,-268.8,896.1,537.8), null);


(lib.cardLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.innerCard();
	this.instance.parent = this;
	this.instance.setTransform(0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cardLIB, new cjs.Rectangle(-110,-76,220,153.2), null);


(lib.endMapAnimationLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_144 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(144).call(this.frame_144).wait(1));

	// Layer_3
	this.instance = new lib.playerLIB();
	this.instance.parent = this;
	this.instance.setTransform(115.9,-165.5,0.477,0.477,0,0,0,0,71.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(144).to({_off:false},0).wait(1));

	// Layer_4
	this.instance_1 = new lib.playerLIB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(207.1,226.1,0.477,0.477,0,0,180,0,71.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-7.6,regY:16.5,x:204.6,y:200.1},0).wait(1).to({x:191.6,y:201.7},0).wait(1).to({scaleX:0.48,x:181.1,y:203.3},0).wait(1).to({x:170.7,y:205},0).wait(1).to({x:159.8,y:206.8},0).wait(1).to({scaleX:0.48,x:149.4,y:208.5},0).wait(1).to({x:139,y:209.8},0).wait(1).to({x:128.5,y:210.4},0).wait(1).to({scaleX:0.47,x:118.2,y:209.6},0).wait(1).to({x:108.5,y:206.2},0).wait(1).to({scaleX:0.47,x:99.8,y:200.3},0).wait(1).to({x:92.2,y:193.1},0).wait(1).to({x:85,y:185.5},0).wait(1).to({scaleX:0.47,x:78,y:177.7},0).wait(1).to({x:71.2,y:169.4},0).wait(1).to({x:65,y:161},0).wait(1).to({scaleX:0.47,x:58.3,y:153},0).wait(1).to({x:50.2,y:146.4},0).wait(1).to({scaleX:0.47,x:41,y:141.3},0).wait(1).to({x:31.3,y:137.3},0).wait(1).to({x:21.3,y:134},0).wait(1).to({scaleX:0.47,x:10.9,y:131.6},0).wait(1).to({x:0.6,y:129.3},0).wait(1).to({x:-9.9,y:126.9},0).wait(1).to({scaleX:0.47,x:-20,y:124.5},0).wait(1).to({x:-29.9,y:121.5},0).wait(1).to({scaleX:0.47,x:-39.7,y:117.3},0).wait(1).to({x:-48.6,y:111.2},0).wait(1).to({x:-53.6,y:102.7},0).wait(1).to({scaleX:0.47,x:-52.4,y:92.8},0).wait(1).to({x:-48.1,y:83},0).wait(1).to({x:-44.4,y:73.2},0).wait(1).to({scaleX:0.47,x:-44.1,y:62.8},0).wait(1).to({x:-48.5,y:53.7},0).wait(1).to({x:-55.2,y:48.5},0).wait(1).to({scaleX:0.46,x:-66.2,y:43},0).wait(1).to({x:-76.1,y:39},0).wait(1).to({scaleX:0.46,x:-86.1,y:35.5},0).wait(1).to({x:-96.3,y:32.6},0).wait(1).to({x:-106.5,y:30.2},0).wait(1).to({scaleX:0.46,x:-116.9,y:28.3},0).wait(1).to({x:-127.3,y:26.7},0).wait(1).to({x:-137.8,y:25.5},0).wait(1).to({scaleX:0.46,x:-148.3,y:24.8},0).wait(1).to({x:-158.7,y:24.3},0).wait(1).to({scaleX:0.46,x:-169.3,y:23.6},0).wait(1).to({x:-179.6,y:21.4},0).wait(1).to({x:-189.2,y:17.2},0).wait(1).to({scaleX:0.46,x:-197.2,y:10.4},0).wait(1).to({x:-201.9,y:1.3},0).wait(1).to({x:-202.6,y:-9.1},0).wait(1).to({scaleX:0.46,x:-200,y:-19.2},0).wait(1).to({x:-195,y:-28.4},0).wait(1).to({scaleX:0.46,x:-188.2,y:-36.4},0).wait(1).to({x:-180,y:-43},0).wait(1).to({scaleX:0.48,skewY:0,x:-177.9,y:-48},0).wait(1).to({x:-167.9,y:-51.2},0).wait(1).to({scaleX:0.48,x:-157.5,y:-52.7},0).wait(1).to({x:-147,y:-52.4},0).wait(1).to({scaleX:0.48,x:-136.5,y:-51.5},0).wait(1).to({scaleX:0.47,x:-126.1,y:-50},0).wait(1).to({x:-115.8,y:-47.9},0).wait(1).to({scaleX:0.47,x:-105.7,y:-45.4},0).wait(1).to({x:-95.6,y:-42.3},0).wait(1).to({scaleX:0.47,x:-85.7,y:-39},0).wait(1).to({scaleX:0.47,x:-75.8,y:-35.3},0).wait(1).to({x:-66.1,y:-31.4},0).wait(1).to({scaleX:0.47,x:-56.4,y:-27.2},0).wait(1).to({scaleX:0.47,x:-46.8,y:-23},0).wait(1).to({x:-37.3,y:-18.6},0).wait(1).to({scaleX:0.47,x:-27.8,y:-14.1},0).wait(1).to({x:-18.3,y:-9.6},0).wait(1).to({scaleX:0.47,x:-8.8,y:-5.1},0).wait(1).to({scaleX:0.47,x:0.6,y:-0.6},0).wait(1).to({x:10.1,y:3.9},0).wait(1).to({scaleX:0.47,x:19.6,y:8.4},0).wait(1).to({scaleX:0.46,x:29.2,y:12.8},0).wait(1).to({x:39,y:16.7},0).wait(1).to({scaleX:0.46,x:48.9,y:20.3},0).wait(1).to({x:58.9,y:23.3},0).wait(1).to({scaleX:0.46,x:69.1,y:26},0).wait(1).to({scaleX:0.46,x:79.4,y:28.1},0).wait(1).to({x:89.8,y:29.8},0).wait(1).to({scaleX:0.46,x:100.2,y:30.9},0).wait(1).to({x:110.7,y:31.5},0).wait(1).to({scaleX:0.46,x:121.2,y:31.6},0).wait(1).to({scaleX:0.46,x:131.7,y:31.1},0).wait(1).to({x:142.1,y:30},0).wait(1).to({scaleX:0.46,x:152.5,y:28.2},0).wait(1).to({scaleX:0.46,x:162.7,y:25.8},0).wait(1).to({x:172.7,y:22.5},0).wait(1).to({scaleX:0.46,x:182.4,y:18.3},0).wait(1).to({x:191.5,y:13.1},0).wait(1).to({scaleX:0.45,x:199.9,y:6.9},0).wait(1).to({scaleX:0.45,x:207.2,y:-0.7},0).wait(1).to({x:213.3,y:-9.2},0).wait(1).to({scaleX:0.45,x:217.8,y:-18.7},0).wait(1).to({scaleX:0.45,x:219.6,y:-28.9},0).wait(1).to({x:218.1,y:-39.2},0).wait(1).to({scaleX:0.48,skewY:180,x:220.6,y:-48.6},0).wait(1).to({scaleX:0.48,x:213.9,y:-56.7},0).wait(1).to({scaleX:0.47,x:206,y:-63.7},0).wait(1).to({scaleX:0.47,x:197.4,y:-69.7},0).wait(1).to({scaleX:0.47,x:188.3,y:-74.9},0).wait(1).to({scaleX:0.47,x:178.9,y:-79.6},0).wait(1).to({scaleX:0.47,x:169.3,y:-83.8},0).wait(1).to({scaleX:0.47,x:159.5,y:-87.6},0).wait(1).to({scaleX:0.47,x:149.4,y:-91},0).wait(1).to({scaleX:0.46,x:139.2,y:-93.7},0).wait(1).to({scaleX:0.46,x:128.9,y:-95.6},0).wait(1).to({scaleX:0.46,x:118.4,y:-96.8},0).wait(1).to({scaleX:0.46,x:108,y:-97.4},0).wait(1).to({scaleX:0.46,x:97.4},0).wait(1).to({scaleX:0.46,x:86.9,y:-96.9},0).wait(1).to({scaleX:0.45,x:76.5,y:-96.3},0).wait(1).to({scaleX:0.45,x:66,y:-95.8},0).wait(1).to({scaleX:0.45,x:55.5,y:-95.5},0).wait(1).to({scaleX:0.45,x:45,y:-95.9},0).wait(1).to({scaleX:0.45,x:34.6,y:-97.2},0).wait(1).to({scaleX:0.45,x:24.4,y:-99.6},0).wait(1).to({scaleX:0.44,x:14.4,y:-103.1},0).wait(1).to({scaleX:0.44,x:5,y:-107.6},0).wait(1).to({scaleX:0.44,x:-4,y:-113.1},0).wait(1).to({scaleX:0.44,x:-12.5,y:-119.3},0).wait(1).to({scaleX:0.44,x:-20.6,y:-126.1},0).wait(1).to({scaleX:0.44,x:-27.6,y:-134.1},0).wait(1).to({scaleX:0.48,skewY:0,x:-38.9,y:-143.7},0).wait(1).to({x:-36.5,y:-153.2},0).wait(1).to({x:-28.7,y:-159.8},0).wait(1).to({x:-18.9,y:-163.9},0).wait(1).to({x:-8.7,y:-166.7},0).wait(1).to({x:1.6,y:-168.6},0).wait(1).to({x:12.1,y:-170},0).wait(1).to({x:22.6,y:-170.9},0).wait(1).to({x:33.1,y:-171.4},0).wait(1).to({x:43.7,y:-171.5},0).wait(1).to({x:54.1,y:-171.4},0).wait(1).to({x:64.6,y:-171.8},0).wait(1).to({x:75,y:-173.4},0).wait(1).to({x:85.1,y:-176.2},0).wait(1).to({x:94.8,y:-180.2},0).wait(1).to({x:104.1,y:-185.6},0).wait(1).to({x:112.3,y:-191.7},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance_2 = new lib.fullMap();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-287.6,-287.6,1.146,1.146);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.6,-287.6,575.2,575.2);


(lib.endBigAnswerLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.endBigAnswerSpace = new lib.endBigAnswerSpaceLIB();
	this.endBigAnswerSpace.name = "endBigAnswerSpace";
	this.endBigAnswerSpace.parent = this;
	this.endBigAnswerSpace.setTransform(-0.5,11,1.252,1.252);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#807A78").ss(2,0,0,3).p("EgsJgcXMBYTAAAMAAAA4vMhYTAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCD2CF").s().p("EgsIAcYMAAAg4vMBYRAAAMAAAA4vg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.endBigAnswerSpace}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.endBigAnswerLIB, new cjs.Rectangle(-283.5,-182.6,567.1,365.3), null);


(lib.endAnimationFullLIB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_263 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(263).call(this.frame_263).wait(1));

	// Layer_3
	this.instance = new lib.playerLIB();
	this.instance.parent = this;
	this.instance.setTransform(-766.2,142.1,1,1,0,0,0,1.5,8.2);
	this.instance._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222638").s().p("AAAAEIAAAAIgBgCIgCAAIAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgBIgDAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAGgFAKAGIABAAIAAABIgBACIAAAAIgDAAIgDgBIAAACIAAAAIgBABIgBgBg");
	this.shape.setTransform(70.1,35,0.936,0.936);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#222638").s().p("AgGABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAMABQAAAAABABQAAAAAAAAQAAAAAAABQAAAAgBAAIgGAAIgHgBg");
	this.shape_1.setTransform(69.9,35.1,0.936,0.936);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#443023").s().p("AgaApQgGgSgIgzIAlgLIAsgLQgKAugSARIgoAmQACgGgBgEg");
	this.shape_2.setTransform(57.6,37.7,0.936,0.936);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#AFAFAF").ss(1.5).p("AA9AGQAKgPgsg8QgPgUggAbQgiAagHAkQgFAUALAPQAIANAVALQAFADAUAMQASAJAEgK");
	this.shape_3.setTransform(80.1,185.5,0.936,0.936);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D1F15").s().p("ABJFHQgdgMgPgDQgagFg/gpQhCgsAFgPQARgtAWhOQAhhzAAgzQAAhCAIgfQAGgVAfhDQAag6AggCQAbgBAgAoQAUAZgZBdQgTBEgdA+QgZA2gRA5QgVBLAEAnQADAcAxAgQAuAegCAhQAAAUgQAAIgIgBg");
	this.shape_4.setTransform(83.3,164.8,0.936,0.936);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DDB294").s().p("AgKA3QgJgCgOgSQgPgSgMgFQgQgGgBgNQgBgNALgOIANgCQAPgCANAAQAIAAAMgKQALgJAUADQAWADAKAPQAHAJAMAXQALAPgpAZQgiAUgQAAIgGgBg");
	this.shape_5.setTransform(91.1,96.7,0.936,0.936);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DDB294").s().p("AgdBBQgNgMAAgZQAAgigEgMQgJggABgIQAAgNAQgGQAPgGACADIANARQAHAJAMADQAKADAHANQAYAoADAxQACAbgjABIgCAAQgfAAgSgRg");
	this.shape_6.setTransform(86.5,108.3,0.936,0.936);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DDB294").s().p("ABdCFQgBgFgQgSQgPgQgPgOQgugZgngXQhNgrgRglQgUgpANgdQAMgZAbAFQAbAFALAFIAdATQASAMAiAwIAyBGQAJANAfAeQAZAYAKAWQAMAZgdAEIgQABQgQAAgBgHg");
	this.shape_7.setTransform(73.4,94,0.936,0.936);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9B4242").s().p("ABODSQgUgEhLh2QhRiBgSgaQgYgjARgxQAPgpAVgOIAJgEQAPgCAfAGQAgAHASAlQAPAfgBAiQgCA5BOB7QAjA3gTAqQgOAfgXAAIgJgBg");
	this.shape_8.setTransform(56.5,72.6,0.936,0.936);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9B4242").s().p("AAwE+Qg/gZg1gbQg4gcgOgOQgRgRgKkZQgCg2AFgdQAJg1AfgTQAdgRARgFIAJgCIgagCIANgVIAggvQCFBYAGAQQABADgBAcQgBAXAMATQAQAYAZBfQAZBggCAhQgDAjgHA0QgIA3gEACQgHAcgNAVQgSAdgdAAQgNAAgQgGg");
	this.shape_9.setTransform(57.1,74.5,0.936,0.936);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#827B77").s().p("AjNBJQgNgLAcgRQAngWApgIQgCgOAAgQQAAgiAJgKQAKgLA0gFQAngFAjAAQARAAATgCQALAAACARIAHA6IAgAIQAjANATARQAcAbAHAQQg3gQg6gIQg1gIglAGIgYAEIgtALIgkALQgbAIgcABIgGAAQgkAAgKgKg");
	this.shape_10.setTransform(63.2,28,0.936,0.936);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DDB294").s().p("Ah+BsQAUgjAOgeQAIgUACgKIApglQASgSAJguIgsALIglALIgDgSIAggwQAngtAmASQAdANAlAOQAWANABAcIAAAHIAEASQAFAUAKAMQAHAIABAOQABANgHgBIgMgDQANAUgEAEIgKASIAEAKIgDAKQACARgOADQggAHgbgKQgHgDgGAMQgIAUgGAMIgUAwg");
	this.shape_11.setTransform(62.8,41.2,0.936,0.936);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DDB294").s().p("AAVAzIgxgHIgtheIATAQQAXARASAGQANAFAqAFQAiAFgCAUQgBAPgRAHQgMAFgPAAIgIAAg");
	this.shape_12.setTransform(80.8,92.5,0.936,0.936);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D1F15").s().p("ACbFLQgfgEiviaQisiXgng0QgegqAIhfIAPhXIAcgbQAqgfBEgQQBEgRA1BLQAaAlANAoIgFAlQgEAsABAgQACAgBZBkQAxA4BlBrQA1A9g7AiQgoAWgpAAIgUgBg");
	this.shape_13.setTransform(68.2,116,0.936,0.936);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5B4431").ss(2.1).p("AgfEJQAiAiAPg/QAOg2gEhwQgDhmgPhlQgPhogTgn");
	this.shape_14.setTransform(85.6,154.4,0.936,0.936);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5B4431").ss(1.5).p("AAiFDQAGAAAEAAQAZgCAVgLQAXgNAKgUIAEgMQAFgZgLgZIjrl4QgLgRgCg+QgCgxADgh");
	this.shape_15.setTransform(181,98.8,0.936,0.936);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5B4431").ss(1.5).p("AA/AbQgUgRgagNQgzgegcAL");
	this.shape_16.setTransform(103.1,96.5,0.936,0.936);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#5B4431").ss(1.5).p("ACxBZICjAkQCnAmAOALQAJAHgjADQgkACg6gFQiZgNh2gvQiNg4iZhSQikhagwg2Qgpgug5AvQgSAPgSAXIgNAT");
	this.shape_17.setTransform(136.2,112.6,0.936,0.936);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#93745F").s().p("ACtDNQgPgIghgcIg9g4QgUgRhyhRQhxhOgYgXQgggeABgnQAAgkAZgKQAbgKAYAFQAdAHAdAgQAoAsBJBOQBWBYAgAcQAYAWAVAIQAZAKAYASQAjAbgfAeQgWAXgRAAQgHAAgGgEg");
	this.shape_18.setTransform(-5.1,228.5,0.938,0.938,-7.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#93745F").s().p("AifFKQgVgIgNgQQgOgRACgRQAFgoADgIQAFgPAXgjQAog7AOgYQAegyAIgeQAHgagCgwQgEheABgqQAAhYBCggQA0gaBLASQB/Afg3CCQgSAqgmA3IgvA/QgMARgmBOQghBDgTAUQgXAXgMAYQgIARgZA6QgRAlghAAQgMAAgOgFg");
	this.shape_19.setTransform(-7.1,193.2,0.938,0.938,12.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#493939").s().p("Ag4BhQgPgPACgYQABgKALgkQAGgTgEgHQgJgJgIgMQgTgdAngjQAWgVAKAMQAIAKAdAzQA2BNAIA6QADAXg9ACIgMAAQgxAAgQgQg");
	this.shape_20.setTransform(20.7,247.1,0.938,0.938,-16);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#93745F").s().p("ACBDHQgGgHgjg2QgggzgYgbQgbgehAhBIg7g8QgegWgYgWQgxguAagFQApgIAwgLIAxAsQA2AzAYAlQAeAsAbAgQAcAeASALQAZAQAHAGQARANAHALQAMASAIAYQAJAegIAQQgLAVgWAKQgKAFgIAAQgNAAgIgLg");
	this.shape_21.setTransform(176.1,214.7,0.936,0.936);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#493939").s().p("AA+BrQgIgCgwgDQgggDgFgPQgGgQgKgOIgTgcIgKgRIgMghQgOgjAlgiQAmgiAeAlIADAVQAGAZAOAVQAJANAXAWQAQARACANQACALAOAlQAEAUgRAAQgHAAgKgDg");
	this.shape_22.setTransform(195.3,235.6,0.936,0.936);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#493939").s().p("AiPCdQAGgbAJgRIgPAFQgmANhLASQhIARgXACQANgKBEgtQBHgtARgKIAdgPIAAgBQBKgqATgfQANgWAlgOIA9gUQAPgFAygeQAygeAbgHQAqgMBIgJQgKAGgHAPIgTAtIBQgLIihCYQACgQAHgSQAPglAYgPQgvAdgzAjQhqBLgZAmIAKgbQAOggATgcQgoAVgtAeQhbA6gYApIAFgYg");
	this.shape_23.setTransform(134,88,0.936,0.936);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#5B4431").ss(2.6).p("ABuipIAMgCQAJABgMAOQgJAJhXAlQhVAkgNASQgTAYgQA3QgPA4AAApQABAiAJANQAEAGAFgB");
	this.shape_24.setTransform(178.7,91.2,0.936,0.936);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#493939").s().p("ADICGQABAdgGAHQgDAFgEgFIgDgHQgHgWgNgbQgag1gfgUIgYgRQgigWgagEQgZgFgiAHIgRAAQgPAAgFAAIgLAAIgkAMQgMAEgqAIQgnAHgVAIQATgnAegeQAZgZASgIQAPgHAJABIAFgFQAKgGAUgCIAQgBIAagCQAOgCAWgGIAegkQAkglAegIQAPgEADAMQg1AqgPAdQgLAVABALQAAAGADABIARgEQATgFAKgJIgCAEIADgFQAHgFACgGQAegkAigEIAFABQgiAWgIAOQgHANgFAaIgEAXIAPgHQAAAGACgFIAUANIALAJQAiAcAIAkIgZgWQAQAQAOATQAdAkAFAZQAGAZgEAOQgCAIgDACQgKgggSgKg");
	this.shape_25.setTransform(176.1,77.1,0.936,0.936);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#222638").ss(0.5).p("ABgBqQgegpgmgvQhNhdgtge");
	this.shape_26.setTransform(189.8,113.7,0.936,0.936);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2D2724").s().p("AgSAGIgCgDQABgJARgBQAPAAAHAHQACABgBADQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAIgKgBIgJAAIgIABIgEABQgCAAgCgCg");
	this.shape_27.setTransform(184.6,91.4,0.936,0.936);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#443326").s().p("AiYCMQgpgYgdgiIgIgLQgrg4gEg5QgCgiADgSQAHgvAbALQAMAEADALIAIAoQAFAaARASQAGAGAdAWQASAMBkgDQBcgDAxgKQAjgIAPg6QALg9AHgNQAJgPAYgCQAWgBAXAJQAJAFAGAEQASANACBEQACAmgDBCQAAAghRAvIhRAnQgwAHg5ACIgUAAQhiAAgsgZg");
	this.shape_28.setTransform(60.6,117.1,0.936,0.936);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B7A598").s().p("AABCPQhEgHgYgSQgVgPABgiQAAgMAJgqIALgzQAHgggCgSQgCgpA8gPQAcgHApAWQgDAXACAdQAEA4ArA5IAJALIAQAzIgjgRIAEAQQACASgGAPQgFANgmAAQgOAAgTgCg");
	this.shape_29.setTransform(33.5,120.6,0.936,0.936);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6D5341").s().p("AhSC+QjSgThCgXQhGgZgFh7QgCglAFg3QAEg1gBgHQgCgbAKgPQAGgHAFgCIB1AbQB4AcARAKQAxAcCEAOQBDAHA4ABIBXgfQBWgmAAggIA+COQA8CXgMA3QgHAjiMAIQgrACgyAAQh3AAicgOg");
	this.shape_30.setTransform(55.8,135,0.936,0.936);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#5B4431").ss(2.6).p("ABIhNIANAGQAMAIgMAKQgwAtgmAgQhLBAgHgOQgHgNAAgDIADAB");
	this.shape_31.setTransform(192.5,113.1,0.936,0.936);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#93745F").s().p("AgpFkQi0gjhCgtQg0gjhIAEQhwAHgcgEQl8g2gfiOQgRhNAXhMQAZhTBHhKQBGhKBDgaQA4gWBygHQBZgFB6AMQA+AGArAHQB3AYEEgVQCCgLBrgPIAXABQAjABA+gCQBPgEC1BjQC7BmAJBBQAPBkAABeQABCHgfBAQggBAjkAjQizAbjNAAQigAAixgjg");
	this.shape_32.setTransform(49.6,152.1,0.936,0.936);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#93745F").s().p("AA4HdQg8gChVgRQjOgpg1g7Qg0g5gdiPQgciIAYgSQAGgEAQgTQALgPArgYQA5ggAegUQAigXAggeQAkghAQgMQASgOAfgQQBigxAYgqQANgVAlgPQAKgEA0gPQAPgFAygeQAygeAagIQAygOBCgGIASAeQAUAiANAcQAMAbgMCKQgGBFgJBAQgfAZgiAfQhDA8gNAZQhLCWgVA3QgFAOgTBUQgTBQgLAaQgGAPg1AAIgOgBg");
	this.shape_33.setTransform(126.6,115.8,0.936,0.936);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#93745F").s().p("ACsFaQgNgBgoghQguglgUgIQgigNgggYQgjgagZggQgXgcgbAMQgYATgEACQgEACgYgWQgcgbgXghQhBhkAjheQAjhdAvgiQAXgRAPACIAGgFQAKgGAUgCIAkgCQAPgCAbgHIAdgkQAlglAegIQAegHgSA3QgJAbgQAdIAVgaQAbgbAcgDQALAAgNATQgVAegFASIgIAaIAfAVQAiAdAIAlIgZgWIAdAhQAeAlAFAaQAFAZgDAOQgCAHgDACQgKgfgSgKQABAdgGAGQgEAFgDgFIgDgGIACAdQAIAkAYAfQAbAjAWAtQAUAmAFAWQAEASgCAHQgCAIgOAYQgQAYgYARQgZASgTAAIgBAAg");
	this.shape_34.setTransform(178.2,93.1,0.936,0.936);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#493939").s().p("AmlIPIAhgbIgtAAQBbghAsgeIAbgXQhbAghVAGQgqADgZgDQAigZAXgYQAugxgygBQgzgBghAdQgKAJgHAJIAdgyQAWgmgOgKIgUgCIg9BAQAKglAcgmQA3hNBVgHQBZgHA4gWICFg+QBLgjBRifIBwj3QArhcB5g/QB3g+BSAWQBDASAgAlQAQATADAPQAbCKhpgXQgggHgqgWIgkgVQgsAPgbAwQghA5g2CtQg2Cqh4CmQhuCXhkA9QhNAvhzAIQgbACgYAAQgbAAgWgCg");
	this.shape_35.setTransform(-75.1,165.1,0.936,0.936);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#93745F").s().p("AiIDfQgggbAGgWQAGgPAUggIAqg9QANgTA3hwQA3hwAQgYQAYggAjgBQAhgBAOAXQAfA1gsA0QgjAog8BJQhEBWgUAfQgRAYgEAVQgEAYgOAYQgKATgPAAQgMAAgPgMg");
	this.shape_36.setTransform(-76.9,225.6,0.936,0.936,4.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#93745F").s().p("AnEGNQgMgTACgXQACgXARgPIA3g5QAegeAtgRQAvgSAkhFIAvhuQAIgSgDg3QgFhGgBgoQgDibBEhIQBJhNDhCCQBRAuBRA/QBGA1AaAeQBXBhjHBaQg+AdhiAeQhbAagSAHQgjAOhYBMQhXBKggAKQghALgoAeQg1AogrAXQgcAQgWAAQgdAAgSgbg");
	this.shape_37.setTransform(-28.4,178.8,0.936,0.936,2.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#93745F").s().p("AHMD7QgPgLgQgYIgMgXIl+g2Qh6gSingyQj+hMgShNQgShPDKgJQBlgEBoALQAhgOBFg8QA9gtAoAmQAfAdAcA2QAVAnAaAIQAfAJBpBXIB+BmQAyAkATAWQAbAhgCAmQgDAqgYAGIgJABQgPAAgRgLg");
	this.shape_38.setTransform(120.1,181,0.936,0.936);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#93745F").s().p("Ah1CQQgngQAFgmQAEglAGgIQACgDAhgcIBehIQBFg2AQgPQAXgWANACQAOACAVAhQANAUgFAXQgGAagfAJIgzARQgVAJgdAZQgsAngQARQgdAggCAZQgBANgMAEIgJABQgJAAgJgEg");
	this.shape_39.setTransform(63.2,237.9,0.936,0.936);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#93745F").s().p("AjiE2QgagGAEgqQADgpAaggQAggmBKhfQBShqAQgaQAOgZgBgVQgEgngBgtQAAhAA4gcQAzgaA4ASQBoAigLBdQgHAzggAuQgFAIgsAhQg0AngSAPQgRAQhYBnQhbBqgeAcQgpApgLAFQgEACgIAAQgKAAgRgEg");
	this.shape_40.setTransform(91.3,204.8,0.936,0.936);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#493939").s().p("AhMBkQgCglgCgOIgHgpQgDgXAEgRQAEgVASgOQARgOAagEQARgDASgBQAOgCARgNQASgOAKAEQAFADAKALQAGAFgZAuQggA3gFAbQgFAdgcASIgyAeQgIAGgGAAQgIAAgDgQg");
	this.shape_41.setTransform(48.8,254.3,0.936,0.936);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#493939").s().p("AAUB/QgXgcgKgJIgegdQgRgSgIgQQgIgTAFgVQAGgVARgUIAagYQAKgKAGgVQAGgWAKgCQAGgCAPAEQAIAAAHA0QAJA/AMAYQANAbgMAfIgWA2QgEAPgIAAQgGAAgIgIg");
	this.shape_42.setTransform(-90.7,248.4,0.936,0.936);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},144).to({state:[{t:this.instance}]},71).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},47).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(144).to({_off:false},0).to({x:38},71).to({_off:true},1).wait(48));

	// Layer_2
	this.instance_1 = new lib.endMapAnimationLIB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28,7.4,1,1,0,0,0,28.2,6.8);

	this.instance_2 = new lib.endTresureLIB();
	this.instance_2.parent = this;
	this.instance_2.setTransform(362.2,202,1,1,0,0,0,-0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},144).to({state:[{t:this.instance_2}]},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.8,-287,575.2,575.2);


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.startbtn = new lib.Symbol1();
	this.startbtn.name = "startbtn";
	this.startbtn.parent = this;
	this.startbtn.setTransform(-83.3,91.9,1.138,0.935);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר משחק, 0, ליאונרדו דה וינצי, 1, נשיאי ישראל, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(-0.2,17,1.455,1.455,0,0,0,50.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-73.8,0.2,147,123), null);


(lib.BGmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1199 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1199).call(this.frame_1199).wait(1));

	// atmosphere
	this.instance = new lib.atmosphere();
	this.instance.parent = this;
	this.instance.setTransform(999.6,276.8,1,1,0,0,0,999.6,276.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1200));

	// sand
	this.instance_1 = new lib.sand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4014.8,524.6,1,1,0,0,0,4014.8,174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-1983},1198).wait(1));

	// lowMountain
	this.instance_2 = new lib.lowMountain();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3008,343,1,1,0,0,0,3008,55.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-990.1},1198).wait(1));

	// highMountain
	this.instance_3 = new lib.highMountain();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1940.6,253.8,1,1,0,0,0,1837.2,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-58.9},1198).wait(1));

	// sky
	this.instance_4 = new lib.sky();
	this.instance_4.parent = this;
	this.instance_4.setTransform(999.6,216.4,1,1,0,0,0,999.6,216.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7995.4,699.1);


// stage content:
(lib.treasureMapV14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		מבנה המערך:
		[
			[ //תשובות לא נכונות
				[מונה טעויות,סוג תשובה,תשובה],......,[מונה טעויות,סוג תשובה,תשובה]
			],
			[ //תשובות נכונות
				[מונה טעויות,סוג תשובה,תשובה],......,[מונה טעויות,סוג תשובה,תשובה]
			]
		]
		*/
		
		$("#canvas").css("direction", "rtl"); //כיוון כתיבה מימין לשמאל
		var selfHome = this;
		
		//משתנים שלא מקבלים ערכים חדשים במהלך המשחק
		var answerDiraction = 4; //מהירות תזוזה לפריטים
		var itemHeight = [480, 230]; //מיקום פריטים
		var playerDiractionY = 5; //מהירות קפיצה לשחקן
		var playerDiractionX = 6; //מהירות תזוזת שחקן
		var playerBackDiractionX = (-3); //מהירות תזוזת שחקן לאחור
		var playerYjump = 280; //גובה הקפיצה המקסימלי
		var playerY = 425; //מיקום התחלתי לשחקן
		var playerX = 180; //מיקום התחלתי לשחקן
		var mapDiractionX; //כיוון תזוזה לאנימציית מפה
		var mapDiractionY; //כיוון תזוזה לאנימציית מפה
		var stageW = parseInt(canvas.style.width); //רוחב במה
		var stageH = parseInt(canvas.style.height); //אורך במה
		
		//משתנים לשימוש במספר פונקציות שמקבלים ערכים במהלך המשחק
		var myAnswer; //החזקת אובייקט הפריט
		var myPlayer; //החזקת אובייקט השחקן
		var myMap; //החזקת אובייקט המפה
		var timer; //יכיל אינטרוול לספירת זמן המשחק
		var mychoice; //בחירת המשחק בדרופ דאון
		var scaleBound; //בכמה להקטין את התמונה בתוך המסגרת שמוגדרת לה
		var hasBigImage; //האם במשוב יש תמונה פתוחה בגדול
		
		//משתנים לשימוש בכל הפונקציות שמקבלים ערכים ב preStartFunc
		//משתנים שמקבלים ערכים במהלך המשחק
		var myGame; //הפריטים במשחק
		var myGameName; //שם המשחק
		var rndTrueFalse; //מיקום התשובה האם מתאים או לא מתאים
		var rndOption; //איזו תשובה מתוך האפשרויות
		var mapPart; //מספר הפריים לאנימציית המפה
		
		var hasGame;
		var playerJump; //האם השחקן קופץ
		var playerBackMove; //האם השחקן סיים לקפוץ
		var intersectCheck; //האם צריך לבצע בדיקות התנגשות
		var isIntersect; //האם נעשתה התנגשות בסבב הנוכחי
		var jumpCheck; //האם הקפיצה של השחקן צריכה להיעצר
		var noIntersectRight; //האם השחקן לא אסף תשובה לא מתאימה
		var myEndGame; //מערך לשמירת כל האובייקטים כדי ליצור משוב
		var endIndex; //מגדיר כמה תשובות יש במערך ולאיזה תא להכניס כל אחת מהתשובות
		var gameTime; //מונה שניות לאורך המשחק
		
		var frequency = 3; //לייצור פעולה במעבר עכבר
		stage.enableMouseOver(frequency); //לייצור פעולה במעבר עכבר
		
		createjs.Ticker.addEventListener("tick", myTick); //מריץ את כל הבדיקות
		window.addEventListener("keydown", keyFunc); //לחיצת מקשים
		
		//סאונד נכון - פריים 1
		//סאונד טעות = פריים 51
		var mySound = new lib.soundsLIB(); //הוספת אלמנט המכיל את הסאונד 
		mySound.gotoAndStop(0); //עצירת הסאונד בתחילת המשחק
		stage.addChild(mySound); //הוספת הסאונד למשחק
		
		function preStartFunc() { //טעינת ערכים הדרושים לתחילת המשחק למשתנים המוגדרים כמשתנים גלובליים בכל תחילת משחק חדש
			myGame = []; //הפריטים במשחק
			myGameName = ""; //שם המשחק
			rndTrueFalse = 0; //מיקום התשובה האם מתאים או לא מתאים
			rndOption = 0; //איזו תשובה מתוך האפשרויות
			mapPart = 0; //מספר הפריים לאנימציית המפה
		
			playerJump = false; //האם השחקן קופץ (נלחץ רווח)
			playerBackMove = false; //האם השחקן סיים לקפוץ וצריך לזוז להתחלה
			intersectCheck = false; //האם צריך לבצע בדיקות התנגשות
			isIntersect = false; //האם נעשתה התנגשות בסבב הנוכחי
			jumpCheck = false; //האם השחקן במהלך קפיצה כדי לעצור את האנימציה במקרה הצורך
			noIntersectRight = false; //האם השחקן דילג על תשובה לא מתאימה (הצלחה) - נעשה כדי לדעת האם למחוק את התשובה מהמערך אחרי שהיא יוצאת מהמסך
		
			myEndGame = [ //מערך לשמירת כל האובייקטים כדי ליצור משוב בסיום המשחק
				[
					"תשובות לא מתאימות לקטגוריה"
				],
				[
					"תשובות מתאימות לקטגוריה"
				]
			];
			endIndex = 0; //מגדיר כמה תשובות יש כרגע במערך ולאיזה תא להכניס את התשובה החדשה שצריכה להיכנס אליו
			gameTime = 0; //מונה שניות לאורך המשחק
			createjs.Ticker.paused = true; //האם התשובות צריכות להתחיל להיכנס (נכנסות כשהטיקר ב false)
		}
		
		function daVinciGameFunc() { //פונקציה להכנסת תוכן למשאבים למשחק חייו של דה וינצ'י
			myGameName = "חייו ועבודותיו של ליאונרדו דה וינצ'י לאורך השנים"; //שם המשחק
			myGame = [ //פריטים במשחק
				[ //תשובות לא מתאימות
					["עבודותיו השתייכו לזרם האומנות הפוסט - אימפרסיוניסטי", "TXT", 0],
					["נולד בספרד ועבר עם משפחתו לפירנצה כשהיה ילד בן 10", "TXT", 0],
					["כל עבודותיו נעשו בצורה של שכפולים והדפסים חוזרים", "TXT", 0],
					[lib.vanGochLIB, "PIC", 0],
					[lib.michaelangeloLIB, "PIC", 0],
					[lib.daliLIB, "PIC", 0],
				],
				[ //תשובות מתאימות
					["כל היומנים, התוכניות והעיצובים שלו נכתבו בכתב ראי", "TXT", 0],
					["עבד כמתלמד בבית המלאכה של האמן אנדריאה דה ורוקיו", "TXT", 0],
					[lib.missWithArminLIB, "PIC", 0],
					[lib.monaLisaLIB, "PIC", 0],
					[lib.lastSupperLIB, "PIC", 0],
					[lib.witerbiManLIB, "PIC", 0],
				]
			];
		}
		
		function presidentGameFunc() { //פונקציה להכנסת תוכן למשאבים למשחק נשיאי ישראל
			myGameName = "נשיאי ישראל"; //שם המשחק
			myGame = [ //פריטים במשחק
				[ //תשובות לא מתאימות
					["מנחם בגין", "TXT", 0],
					["יצחק שמיר", "TXT", 0],
					["משה שרת", "TXT", 0],
					[lib.davidBenGurionLIB, "PIC", 0],
					[lib.rabinLIB, "PIC", 0],
					[lib.shaulMofazLIB, "PIC", 0],
				],
				[ //תשובות מתאימות
					["אפרים קציר", "TXT", 0],
					["חיים הרצוג", "TXT", 0],
					["זלמן שזר", "TXT", 0],
					["יצחק נבון", "TXT", 0],
					[lib.ezerVaitzmanLIB, "PIC", 0],
					[lib.reuvanRivlinLIB, "PIC", 0],
				]
			];
		}
		
		preStartFunc(); //טעינת ערכים הדרושים לתחילת המשחק למשתנים המוגדרים כמשתנים גלובליים בכל תחילת משחק חדש
		gameChoose(); //העלאת דרופ דאון לבחירת המשחק
		
		function gameChoose() { //פונקציה להעלאת הדרופ דאון
			var startImg = new lib.startImageLIB();
			startImg.x = stageW / 2;
			startImg.y = stageH / 2;
			startImg.name = "startImage";
			stage.addChild(startImg);
			mychoice = 0; //שומר את הערך המוגדר לכל אחד מהמשחקים
			var forcombo = new lib.forcomb(); //הוספת הקומבו לבמה
			forcombo.x = 370;
			forcombo.y = 350;
			forcombo.startbtn.visible = false; //העלמת הכפתור עד לבחירה במשחק
			forcombo.name = "dropDown";
			stage.addChild(forcombo);
			//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		}
		function mycb_change(evt) { //בעת שינוי ערך בקומבו
			var myDropDown = stage.getChildByName("dropDown"); //שמירת הקומבו במשתנה
			mychoice = evt.currentTarget.value; //שמירת הערך שנבחר בקומבו
			if (mychoice == 0) {
				myDropDown.startbtn.visible = false; //אם נבחר הערך הראשון - "בחר נושא
			} else { //בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				myDropDown.startbtn.visible = true; //הצגת הכפתור
				myDropDown.startbtn.addEventListener("click", fl_ClickToPosition);
				myDropDown.startbtn.addEventListener("mouseover", function () { //בעת מעבר עכבר
					myDropDown.startbtn.gotoAndStop(1); //שינוי צבע
				});
				myDropDown.startbtn.addEventListener("mouseout", function () { //בעת הסרת עכבר
					myDropDown.startbtn.gotoAndStop(0); //שינוי צבע
				});
			}
		}
		function fl_ClickToPosition() { //לחיצה על בחר
			var myDropDown = stage.getChildByName("dropDown"); //שמירת הקומבו במשתנה
			myDropDown.startbtn.gotoAndStop(2); //שינוי צבע
			stage.removeChild(myDropDown); //הסרת קומבו
			stage.removeChild(stage.getChildByName("startImage"));
			if (mychoice == 1) { //זיהוי איזה משחק נבחר
				daVinciGameFunc(); //הפעלת תוכן מתאים
			} else if (mychoice == 2) { //זיהוי משחק נבחר
				presidentGameFunc(); //הפעלת תוכן מתאים
			}
			startGame(); //הפעלת פונקציית המשחק
		}
		
		function startGame() { //תחילת משחק, העלאה של השחקן, ההוראות, הקטגוריה והפריט הראשון
			var gameNameTXT = new createjs.Text(); //העלאת שם המשחק
			gameNameTXT.y = 15;
			gameNameTXT.x = stageW / 2;
			gameNameTXT.text = myGameName;
			gameNameTXT.name = "gameName";
			gameNameTXT.textAlign = "center";
			gameNameTXT.font = "bold 18pt Arial";
			stage.addChild(gameNameTXT);
		
			var orderTXT = new createjs.Text(); //העלאת הוראת המשחק
			orderTXT.y = 50;
			orderTXT.x = stageW / 2;
			orderTXT.text = "אספו את חלקי המפה המתאימים לנושא והתחמקו מהשאר";
			orderTXT.name = "orderTxt";
			orderTXT.textAlign = "center";
			orderTXT.font = "bold 14pt Arial";
			stage.addChild(orderTXT);
		
			var moveOrderTXT = new createjs.Text(); //העלאת הוראות לתזוזה
			moveOrderTXT.y = 80;
			moveOrderTXT.x = stageW / 2;
			moveOrderTXT.text = "לקפיצה - מקש רווח";
			moveOrderTXT.name = "moveOrderTxt";
			moveOrderTXT.textAlign = "center";
			moveOrderTXT.font = "10pt Arial";
			stage.addChild(moveOrderTXT);
		
			var mapLoad = new lib.mapLIB(); //העלאת מפה
			mapLoad.x = stageW - 70;
			mapLoad.y = 70;
			mapLoad.scaleX = 0.2;
			mapLoad.scaleY = 0.2;
			mapLoad.name = "myMap";
			stage.addChild(mapLoad);
			myMap = stage.getChildByName("myMap"); //שמירה של האובייקט בתוך משתנה גלובלי לשימוש בהמשך
		
			var pauseLaod = new lib.pauseLIB(); //העלאת כפתור עצירה
			pauseLaod.x = 30;
			pauseLaod.y = 30;
			pauseLaod.name = "myPause";
			pauseLaod.addEventListener("click", pausedFunc);
			pauseLaod.addEventListener("mouseover", function () {
				pauseLaod.cursor = "pointer";
			});
			pauseLaod.addEventListener("mouseout", function () {
				pauseLoad.cursor = "context-menu";
			});
			stage.addChild(pauseLaod);
		
			var playerLoad = new lib.playerLIB(); //העלאת שחקן
			playerLoad.name = "myPlayer";
			playerLoad.x = playerX;
			playerLoad.y = playerY;
			stage.addChild(playerLoad);
			myPlayer = stage.getChildByName("myPlayer"); //שמירה של האובייקט בתוך משתנה גלובלי לשימוש בהמשך
		
			itemUpload(); //העלאת פריט ראשון
		
			hasGame = true; //התחיל משחק
			selfHome.bgMC.gotoAndPlay(1); //הפעלת אנימציית רקע
			createjs.Ticker.paused = false; //הפעלת כניסת תשובות
			jumpCheck = true; //הפעלת בדיקה לקפיצה (לחיצה על רווח)
			intersectCheck = true; //הפעלת בדיקת התנגשויות
		
			timer = setInterval(function () { //התחלת מדידת זמן משחק
				gameTime++; //העלאת זמן המשחק ב 1 בכל שנייה
			}, 1000);
		}
		
		function itemUpload() { //העלאת פריט
			var itemHeightRND = Math.floor(Math.random() * itemHeight.length); //גובה רנדומלי לפריט מתוך מערך המכיל את הגבהים
			var answerLoad = new lib.cardLIB(); //העלאת פריט (קלף לבן)
			answerLoad.name = "myItem";
			answerLoad.x = stageW + 60;
			answerLoad.y = itemHeight[itemHeightRND]; //מיקום פריט על פי גובה רנדומלי
			stage.addChild(answerLoad);
			myAnswer = stage.getChildByName("myItem"); //שמירה של האובייקט בתוך משתנה גלובלי לשימוש בהמשך
		
			itemContantCheck(); //בדיקה מאיזה מערך יש להעלות את הפריטים
		}
		
		function itemContantCheck() { //בדיקה מאיזה מערך צריך להעלות את הפריט (לוודא כי השחקן יסיים את כל הפריטים)
			if (myGame[0].length < 1 && myGame[1].length < 1) { //אם נגמר המשחק
				finalAnimationFunc(); //הפעלת משוב מסכם
			} else { //לא נגמר משחק
				if (myGame[0].length < 1 && myGame[1].length > 0) { //לא נשארו תשובות לא מתאימות
					rndTrueFalse = 1; //הגדרה להביא רק ממערך התשובות המתאימות
					rndOption = Math.floor(Math.random() * myGame[rndTrueFalse].length); //בחירת פריט רנדומלי מתוך המערך
					contantUpload(); //העלאת תוכן
				} else { //נשארו תשובות שאינן מתאימות
					if (myGame[1].length == 1 && myGame[0].length > 0) { //נשארה רק תשובה מתאימה אחת
						rndTrueFalse = 0; //הגדרה להביא רק ממערך התשובות הלא מתאימות
						rndOption = Math.floor(Math.random() * myGame[rndTrueFalse].length); //בחירת פריט רנדומלי מתוך המערך
						contantUpload(); //העלאת תוכן
					} else { //נשארה יותר מתשובה אחת בכל מערך (מתאימות ולא מתאימות)
						rndTrueFalse = Math.floor(Math.random() * myGame.length); //בחירה רנדומלית האם מתאים או לא
						rndOption = Math.floor(Math.random() * myGame[rndTrueFalse].length); //בחירת אפשרות רנדומלית מתוך המערך שנבחר (מתאים או לא מתאים)
						contantUpload(); //העלאת תוכן
					}
				}
			}
		}
		
		function contantUpload() { //העלאת תוכן לפריטים לפי סוג התוכן
			if (myGame[rndTrueFalse][rndOption][1] == "TXT") { //אם מדובר בתוכן שהוא טקסט
				var myTxt = new createjs.Text();
				myTxt.font = "12pt Arial";
				myTxt.textBaseline = "middle";
				myTxt.lineWidth = 175; //הגדרת שבירת שורה
				myTxt.text = myGame[rndTrueFalse][rndOption][0];
				myTxt.name = "myContant";
				if (myGame[rndTrueFalse][rndOption][0].length > 25) { //אם יש יותר מ 25 תווים לבצע יישור לימין
					myTxt.textAlign = "right";
					myTxt.x = 80;
					myTxt.y = -10;
				} else { //אם יש פחות מ 25 תווים לבצע יישור למרכז
					myTxt.textAlign = "center";
				}
				myAnswer.addChild(myTxt);
			}
			if (myGame[rndTrueFalse][rndOption][1] == "PIC") { //אם מדובר בתוכן שהוא תמונה
				scaleBound = 40;
				myPic = new myGame[rndTrueFalse][rndOption][0]();
				myPic.scaleX = picSizeFunc(myAnswer, myPic); //פונקציה להתאמת גודל תמונה לגודל קלף
				myPic.scaleY = picSizeFunc(myAnswer, myPic);
				myPic.name = "myContant";
				myAnswer.addChild(myPic);
			}
		}
		
		function picSizeFunc(box, content) { //התאמת גודל תמונה למסגרת
			var boxBounds = box.nominalBounds; //משתנה לגבולות של המסגרת
			var contentBounds = content.nominalBounds; //משתנה לגבולות של התוכן
			var toScale = 0; //מציאת הערך לפיו יש לשנות את גודל התמונה בהתאם לכיוון התמונה- לאורך או לרוחב
			//התאמת הגודל למסגרת לפי כיוון התמונה (אורך או רוחב)
			if (boxBounds.height / contentBounds.height < boxBounds.width / contentBounds.width) {
				toScale = (boxBounds.height - scaleBound) / contentBounds.height;
			} else {
				toScale = (boxBounds.width - scaleBound) / contentBounds.width;
			}
			return toScale;
		}
		
		function myTick() { //בדיקות שצריכות לקרות כל הזמן (על פי תנאים)
			if (hasGame) { //אם מתקיים משחק
				if (!createjs.Ticker.paused) { //האם התשובות צריכות לזוז פנימה
					myAnswer.x -= answerDiraction; //תזוזת תשובות
					if (myAnswer.x < -150) { //האם התשובה יצאה מהמסך
						if (noIntersectRight) { //אם השחקן לא אסף תשובה לא מתאימה באותו סיבוב - משוב להצלחה
							spliceFunc(); //מחיקה מהמערך
							noIntersectRight = false; //איפוס הבדיקה האם השחקן דילג על תשובה לא מתאימה
							//intersectCheck = true; //החזרת בדיקת ההתנגשויות
						}
						intersectCheck = true; //החזרת בדיקות התנגשות
						isIntersect = false; //איפוס בדיקה האם לא נעשתה התנגשות בסיבוב הנוכחי
						stage.removeChild(myAnswer); //הסרת התשובה
						itemUpload(); //העלאת תשובה חדשה
					}
				}
				if (intersectCheck) { //אם מתבצעת בדיקת התנגשויות
					if (intersect(myPlayer, myAnswer)) { //אם יש התנגשות בין שחקן לבין תשובה
						intersectCheck = false; //עצירת בדיקת התנגשויות
						isIntersect = true; //הייתה התנגשות בסיבוב הנוכחי
						createjs.Ticker.paused = true; //עצירת כניסת תשובות
						if (rndTrueFalse == 0) { //אם התשובה שנאספה לא מתאימה
							//console.log("intersectWrong");
							mySound.gotoAndPlay(51); //הפעלת סאונד למשוב לאי הצלחה
							myGame[rndTrueFalse][rndOption][2]++; //העלאת מספר השגיאות בפריט הנוכחי באחד
							selfHome.bgMC.stop(); //עצירת תנועת רקע
		
							var wrongLoad = new lib.wrongAnswerLIB(); //העלאת משוב לאי הצלחה
							wrongLoad.x = stageW / 2;
							wrongLoad.y = stageH / 2;
							wrongLoad.name = "myWrong";
							stage.addChild(wrongLoad);
							stage.getChildByName("myWrong").gotoAndPlay(0); //הפעלת האנימציה של המשוב לאי הצלחה
		
							myPlayer.stop(); //עצירת אנימציית שחקן
							jumpCheck = false; //עצירת התזוזה של השחקן בקפיצה
		
							var removeWrong = setTimeout(function () { //השהייה לפני חזרה למשחק
								stage.removeChild(stage.getChildByName("myWrong")); //הסרת משוב לאי הצלחה
								createjs.Ticker.paused = false; //החזרת כניסת תשובות
								jumpCheck = true; //החזרת התזוזה של השחקן בקפיצה
								selfHome.bgMC.play(); //החזרת אנימציית רקע
								myPlayer.play(); //החזרת אנימציית שחקן
							}, 2000);
						}
						if (rndTrueFalse == 1) { //אם התשובה מתאימה
							//console.log("intersectRight");
							mySound.gotoAndPlay(1); //הפעלת סאונד למשוב להצלחה
							mapPart++; //הגדלת מספר הפריים שאליו תלך האנימציה של המפה - התמלאות המפה
							mapDiractionX = (myMap.x - myAnswer.x) / 250; //קביעת כיוון תזוזת התשובה אל המפה
							mapDiractionY = (myMap.y - myAnswer.y) / 250;
		
							var rightInterval = setInterval(function () { //אנימציית התזוזה
								myAnswer.x += mapDiractionX; //תזוזת תשובה
								myAnswer.y += mapDiractionY;
								myAnswer.scaleX -= 0.004; //הקטנת תשובה
								myAnswer.scaleY -= 0.004;
		
								if (myAnswer.x >= myMap.x && myAnswer.y <= myMap.y) { //אם התשובה הגיעה למפה
									mapDiractionX = 0; //עצירת תזוזת תשובה
									mapDiractionY = 0;
									myMap.gotoAndStop(mapPart); //מעבר לפריים הבא באנימציית ההתמלאות של המפה
									clearInterval(rightInterval); //עצירת אנימציית התזוזה
		
									var timer = setTimeout(function () { //המתנה לפני כניסת תשובה חדשה
										spliceFunc(); //מחיקת התשובה מהמערך
										myAnswer.x = -160; //הזזת התשובה למקום שבו תימחק מהמסך
										createjs.Ticker.paused = false; //החזרת כניסת תשובות
									}, 2200); //סיום השהייה
								}
							}, 1); //סיום אינטרוול תזוזה
						}
					}
					if (!isIntersect) { //אם בסבב הזה לא הייתה התנגשות
						if (myAnswer.x <= (myPlayer.x - 40)) { //אם התשובה חצתה את הקו של השחקן - השחקן דילג על תשובה
							if (rndTrueFalse == 0) { //אם התשובה אינה מתאימה
								//console.log("noIntersectRight");
								mySound.gotoAndPlay(1); //הפעלת סאונד למשוב להצלחה
								intersectCheck = false; //עצירת בדיקת ההתנגשויות עד שהתשובה יוצאת מהמסך
								noIntersectRight = true; //הגדרה כי השחקן דילג על תשובה לא מתאימה (משוב להצלחה)
							}
							if (rndTrueFalse == 1) { //אם התשובה מתאימה
								//console.log("noIntersectWrong");
								mySound.gotoAndPlay(51); //הפעלת סאונד של משוב לאי הצלחה
								createjs.Ticker.paused = true; //עצירת כניסת תשובות
								selfHome.bgMC.stop(); //עצירת תנועת רקע
								intersectCheck = false; //עצירת בדיקת התנגשויות
		
								myGame[rndTrueFalse][rndOption][2]++; //הגדלת מונה הטעויות של התשובה הנוכחית
		
								var wrongLoad = new lib.wrongAnswerLIB(); //העלאת משוב לאי הצלחה
								wrongLoad.x = stageW / 2;
								wrongLoad.y = stageH / 2;
								wrongLoad.name = "myWrong";
								stage.addChild(wrongLoad);
								stage.getChildByName("myWrong").gotoAndPlay(0); //הפעלת אנימציית משוב לאי הצלחה
		
								myPlayer.stop(); //עצירת אנימציית שחקן
								jumpCheck = false; //עצירת תזוזת שחקן במהלך קפיצה
		
								var removeWrong = setTimeout(function () { //השהייה לפני חזרה למשחק
									stage.removeChild(stage.getChildByName("myWrong")); //הסרת משוב לאי הצלחה
									createjs.Ticker.paused = false; //החזרת כניסת תשובות
									selfHome.bgMC.play(); //החזרת אנימציית רקע
									myPlayer.play(); //החזרת אנימציית שחקן
									jumpCheck = true; //החזרת תזוזת שחקן בזמן קפיצה
								}, 2000);
							}
						}
					}
				}
				if (jumpCheck) { //האם השחקן צריך לעצור את הקפיצה או לא
					if (playerJump) { //אם נלחץ רווח, תתחיל קפיצה
						if (myPlayer.y > playerYjump) { //כל עוד השחקן מתחת לתשובה
							window.removeEventListener("keydown", keyFunc); //הסרת אפשרות לביצוע קפיצה נוספת כל עוד שהחקן במהלך ביצוע קפיצה (מניעת קפיצה כפולה)
							myPlayer.y -= playerDiractionY; //תזוזת השחקן כלפי מעלה
							myPlayer.x += playerDiractionX; //תזוזת השחקן ימינה
						}
						if (myPlayer.y <= playerYjump) { //אם השחקן הגיע או עבר את גובה התשובה
							playerDiractionY *= (-1); //היפוך כיוון קפיצה
							myPlayer.y -= playerDiractionY; //הזזת השחקן כדי לצאת מהתנאי הנוכחי
						}
						if (myPlayer.y > playerY) { //אם השחקן הגיע לגובה ההתחלתי שלו
							playerJump = false; //הפסקת קפיצה
							playerDiractionY *= (-1); //הפיכת כיוון הקפיצה
							playerBackMove = true; //התחלת תזוזה לאחור בחזרה למיקום ההתחלתי
							myPlayer.gotoAndPlay(0); //החזרת אנימציית הליכה לשחקן
						}
					}
					if (playerBackMove) { //אם השחקן התחיל לזוז לאחור בסיום קפיצה
						if (myPlayer.x > playerX) { //כל עוד השחקן מימין לקו ההתחלה
							myPlayer.x += playerBackDiractionX; //תזוזה לאחור
						}
						if (myPlayer.x <= playerX) { //אם השחקן עבר את קו ההתחלה
							playerBackMove = false; //עצירת תזוזה
							window.addEventListener("keydown", keyFunc); //החזרת האפשרות לביצוע קפיצה רק אחרי שהשחקן הגיע למיקום ההתחלתי שלו (מניעת קפיצה כפולה)
						}
					}
				}
			}
		}
		
		function intersect(obj1, obj2) { //פונקציה שמקבלת שני אובייקטים ובודקת התנגשות ביניהם
			var obj1W = obj1.nominalBounds; // מוצא את ערכי המיקום והגודל של האובייקט הראשון
			var obj2W = obj2.nominalBounds; // מוצא את ערכי המיקום והגודל של האובייקט השני
			if (obj1.x + ((obj1W.width - 200) / 2) <= obj2.x - ((obj2W.width - 30) / 2)) { //בדיקת התנגשויות בין האובייקטים בכל אחד מערכי המיקום
				return false;
			}
			if (obj1.y + ((obj1W.height - 200) / 2) <= obj2.y - ((obj2W.height - 30) / 2)) { //בדיקת התנגשויות בין האובייקטים בכל אחד מערכי המיקום
				return false;
			}
			if (obj1.x - ((obj1W.width - 200) / 2) > obj2.x + ((obj2W.width - 30) / 2)) { //בדיקת התנגשויות בין האובייקטים בכל אחד מערכי המיקום
				return false;
			}
			if (obj1.y - ((obj1W.height - 200) / 2) > obj2.y + ((obj2W.height - 30) / 2)) { //בדיקת התנגשויות בין האובייקטים בכל אחד מערכי המיקום
				return false;
			}
			return true; // אם כלום לא נכון, נוצרה התנגשות
		}
		
		function spliceFunc() { //מחיקת תשובות מהמערך והעברתם למערך חדש
			//console.log("right");
			if (rndTrueFalse == 0) { //אם התשובה אינה מתאימה לקטגוריה
				endIndex = myEndGame[0].length; //זיהוי מהו מספר התא האחרון על פי מספר התשובות שיש בו כרגע (אורך המערך)
				myEndGame[0][endIndex] = myGame[rndTrueFalse][rndOption]; //הכנסת תוכן הפריט מהמיקום המקורי שלו במערך הישן אל המערך החדש
			} else { //אם התשובה כן מתאימה לקטגוריה
				endIndex = myEndGame[1].length; //זיהוי מהו מספר התא האחרון על פי מספר התשובות שיש בו כרגע (אורך המערך)
				myEndGame[1][endIndex] = myGame[rndTrueFalse][rndOption]; //הכנסת תוכן הפריט מהמיקום המקורי שלו במערך הישן אל המערך החדש
			}
			myGame[rndTrueFalse].splice(rndOption, 1); //מחיקת התא מהמערך הישן
		}
		
		function keyFunc(e) { //בדיקה איזה מקשים נלחצו
			if (e.keyCode == 32) { //נלחץ רווח
				playerJump = true; //הפעלת תזוזת קפיצה באמצעות טיקר
				myPlayer.gotoAndPlay(10); //הפעלת אנימציית קפיצה
			}
		}
		
		function pausedFunc() { //לחיצה על כפתור עצירה
			var pauseGame = new lib.pauseImageLIB(); //העלאת תמונת העצירה
			pauseGame.x = stageW / 2;
			pauseGame.y = stageH / 2;
			pauseGame.name = "pauseGame";
			pauseGame.pauseBeckToGame.btnText.text = "חזור למשחק";
			pauseGame.pauseBeckToGame.addEventListener("click", beckToGame); //הוספת אירוע לחיצה לכפתור חזרה למשחק
			pauseGame.pauseBeckToGame.addEventListener("mouseover", function () { //הוספת אירוע מעבר עכבר
				pauseGame.pauseBeckToGame.gotoAndStop(1); //שינוי צבע
				pauseGame.pauseBeckToGame.cursor = "pointer"; //שינוי הסמן של העכבר
			});
			pauseGame.pauseBeckToGame.addEventListener("mouseout", function () { //הוספת אירוע יציאת עכבר
				pauseGame.pauseBeckToGame.gotoAndStop(0); //שינוי צבע
				pauseGame.pauseBeckToGame.cursor = "context-menu"; //החזרת סמן העכבר למצב רגיל
			});
			stage.addChild(pauseGame);
		
			selfHome.bgMC.stop(); //עצירת אנימציית רקע
			myPlayer.stop(); //עצירת אנימציית שחקן
			hasGame = false; //עצירת המשחק כולו
			clearInterval(timer); //עצירת מדידת הזמן
		}
		
		function beckToGame() { //בעת לחיצה על חזרה למשחק
			selfHome.bgMC.play(); //החזרת אנימציית רקע
			myPlayer.play(); //החזרת אנימציית שחקן
			hasGame = true; //החזרת המשחק כולו לפעולה
			stage.removeChild(stage.getChildByName("pauseGame")); //הסרת תמונת כפתור העצירה
			timer = setInterval(function () { //החזרת המדידה של הזמן
				gameTime++; //העלאת הזמן בכל שנייה
			}, 1000);
		}
		
		function finalAnimationFunc() { //העלאת אנימציית הסיום של המשחק (קורה ברגע שהשחקן אסף את התשובה האחרונה)
			clearInterval(timer); //עצירת מדידת הזמן
			hasGame = false; //עצירת המשחק כולו לזמן המשוב
			//הסרת אלמנטים לא נחוצים
			stage.removeChild(stage.getChildByName("moveOrderTxt")); //הסרת הוראת תזוזה
			stage.removeChild(stage.getChildByName("orderTxt")); //הסרת הוראת משחק
			stage.removeChild(stage.getChildByName("myPause")); //הסרת כפתור עצירה
			stage.getChildByName("gameName").visible = false; //הסתרת שם המשחק לזמן האנימציה
			stage.removeChild(myAnswer); //הסרת תשובה
			stage.removeChild(myMap); //הסרת מפה
			stage.removeChild(myPlayer); //הסרת שחקן
			selfHome.bgMC.stop(); //עצירת רקע
			//אנימציית סיום
			var endAnimation = new lib.endAnimationFullLIB(); //העלאת האנימצייה
			endAnimation.x = stageW / 2;
			endAnimation.y = stageH / 2;
			endAnimation.gotoAndPlay(0); //הפעלת אנימצייה
			stage.addChild(endAnimation);
			var endAnimationEnd = setTimeout(function () { //הפעלת המשוב המסכם לאחר סיום האנימצייה
				stage.removeChild(endAnimation); //הסרת האנימצייה
				finalFeedbackFunc(); //העלאת המשוב המסכם
			}, 11000);
		}
		
		function finalFeedbackFunc() { //העלאת המשוב המסכם
			//חישוב זמן
			var endTime = ""; //משתנה לשמירת הזמן הסופי
			if (gameTime < 10) { //אם הזמן הוא פחות מ 10 שניות
				endTime = "00:0" + gameTime; //הדפסה עם אפסים מתאימים
			}
			if (gameTime < 60 && gameTime >= 10) { //אם הזמן הוא פחות מדקה
				endTime = "00:" + gameTime; //הדפסה עם אפסים מתאימים
			}
			if (gameTime >= 60) { //אם הזמן הוא יותר מדקה
				var timeM = Math.floor(gameTime / 60); //שמירת כמות הדקות
				var timeS = gameTime - (timeM * 60); //שמירת כמות השניות שנשארה
		
				if (timeM < 10) { //אם יש פחות מ 10 דקות
					timeM = "0" + timeM; ////הדפסה עם אפסים מתאימים
				}
				if (timeS < 10) { //אם יש פחות מ 10 שניות
					timeS = "0" + timeS; //הדפסה עם אפסים מתאימים
				}
				endTime = timeM + ":" + timeS; //הדפסת הזמן הסופי עם אפסים מתאימים
			}
			//חישוב ציון
			var mistakeCounter = 0; //ספירת כמות טעויות
			var answerCounter = 0; //ספירת כמות תשובות
			for (i = 1; i < myEndGame[0].length; i++) { //ספירת טעויות וכמות שאלות של תשובות לא מתאימות
				mistakeCounter += myEndGame[0][i][2]; //הגדלת כמות הטעויות
				answerCounter++; //הגדלת כמות התשובות
			}
			for (i = 1; i < myEndGame[1].length; i++) { //ספירת טעויות וכמות שאלות של תשובות מתאימות
				mistakeCounter += myEndGame[1][i][2]; //הגדלת כמות הטעויות
				answerCounter++; //ספירת מספר התשובות
			}
			var endScore = Math.floor((1 - (mistakeCounter / answerCounter)) * 100); //חישוב ציון
			if (endScore < 0) { //אם יש יותר טעויות ממספר התשובות האפשרי
				endScore = 0; //הצגת 0
			}
		
			stage.getChildByName("gameName").visible = true; //החזרת ההצגה של שם המשחק
			stage.getChildByName("gameName").font = "bold 12pt Arial"; //שינוי גודל שם המשחק
		
			var timeTXT = new createjs.Text(); //הדפסת זמן
			timeTXT.name = "timeText";
			timeTXT.text = "זמן: " + endTime;
			timeTXT.x = stageW / 2 + 310;
			timeTXT.y = 55;
			timeTXT.font = "16pt Arial"
			timeTXT.textAlign = "center";
			stage.addChild(timeTXT);
		
			var scoreTXT = new createjs.Text(); //הדפסת ציון
			scoreTXT.name = "scoreText";
			scoreTXT.x = stageW / 2 - 310;
			scoreTXT.text = "ציון: " + endScore;
			scoreTXT.y = 55;
			scoreTXT.font = "16pt Arial";
			scoreTXT.textAlign = "center";
			stage.addChild(scoreTXT);
		
			var preformenceTXT = new createjs.Text(); //הדפסת כותרת טבלה
			preformenceTXT.text = "הביצועים שלך";
			preformenceTXT.name = "preformenceText";
			preformenceTXT.x = stageW / 2;
			preformenceTXT.y = 80;
			preformenceTXT.font = "bold 16pt Arial";
			preformenceTXT.textAlign = "center";
			stage.addChild(preformenceTXT);
		
			var wrongTXT = new createjs.Text(); //הדפסת הסבר לסימון תשובות לא נכונות
			wrongTXT.text = "*חלקי מפה שלא הצלחת בניסיון הראשון";
			wrongTXT.name = "wrongText";
			wrongTXT.x = stageW / 2;
			wrongTXT.y = 120;
			wrongTXT.font = "12pt Arial";
			wrongTXT.color = "#990000";
			wrongTXT.textAlign = "center";
			stage.addChild(wrongTXT);
		
			var zoomInTXT = new createjs.Text(); //הוספת טקסט להגדלת תמונה
			zoomInTXT.text = "לחצו על התמונה להגדלה";
			zoomInTXT.name = "zoomInText";
			zoomInTXT.x = stageW / 2;
			zoomInTXT.y = 140;
			zoomInTXT.font = "10pt Arial";
			zoomInTXT.textAlign = "center";
			stage.addChild(zoomInTXT);
		
			var newGamebtn = new lib.gameBtnLIB(); //כפתור למשחק חדש - מעבר לדרופ דאון
			newGamebtn.x = stageW / 2 - 297;
			newGamebtn.y = stageH - 30;
			newGamebtn.name = "newGameBTN";
			newGamebtn.btnText.text = "סיום";
			newGamebtn.addEventListener("click", newGameClickFunc); //אירוע לחיצה
			newGamebtn.addEventListener("mouseover", function () { //בעת מעבר עכבר
				newGamebtn.gotoAndStop(1); //שינוי צבע
				newGamebtn.cursor = "pointer"; //שינוי הסמן של העכבר
			});
			newGamebtn.addEventListener("mouseout", function () { //בעת יציאה מגבולות הכפתור
				newGamebtn.gotoAndStop(0); //החזרה לצבע המקורי
				newGamebtn.cursor = "context-menu"; //החזרת סמן העכבר למצב רגיל
			});
			stage.addChild(newGamebtn);
		
			var restartGamebtn = new lib.gameBtnLIB(); //כפתור להתחלת אותו משחק שוב
			restartGamebtn.x = stageW / 2 + 300;
			restartGamebtn.y = stageH - 30;
			restartGamebtn.name = "restartGameBTN";
			restartGamebtn.btnText.text = "שחקו שוב";
			restartGamebtn.addEventListener("click", restartGameClickFunc); //אירוע לחיצה
			restartGamebtn.addEventListener("mouseover", function () { //בעת מעבר עכבר
				restartGamebtn.gotoAndStop(1); //שינוי צבע
				restartGamebtn.cursor = "pointer"; //שינוי סמן העכבר
			});
			restartGamebtn.addEventListener("mouseout", function () { //בעת יציאה מגבולות הכפתור
				restartGamebtn.gotoAndStop(0); //שינוי צבע
				restartGamebtn.cursor = "context-menu"; //החזרת סמן העכבר למצב רגיל
			});
			stage.addChild(restartGamebtn);
		
			diagnosticFeedbackFunc(); //העלאת משוב מאבחן (טבלה)
		}
		
		function diagnosticFeedbackFunc() { //בניית משוב מאבחן
			//בנוי בלולאה משתי עמודות נפרדות
			for (i = 0; i < myEndGame.length; i++) { //מעבר על כל מערך התשובות הסופיות
				var yCounter = 0; //משתנה לירידת שורה
				var xCounter = 0; //משתנה ליצירת רווחים בין הפריטים
		
				var endTitle = new lib.endTitleLIB(); //העלאת רקע כותרת לעמודה
				endTitle.x = stageW / 2 + (i * 355);
				endTitle.y = 160;
				endTitle.name = "endTitle" + i;
				stage.addChild(endTitle);
		
				var endTitleTXT = new createjs.Text(); //העלאת טקסט כותרת לעמודה
				endTitleTXT.text = myEndGame[i][0];
				endTitleTXT.font = "bold 12pt Arial";
				endTitleTXT.x = -250;
				endTitleTXT.y = 10;
				endTitle.addChild(endTitleTXT);
		
				var endAnswerSpace = new lib.endAnswerLIB(); //העלאת רקע עמודה של הטבלה
				endAnswerSpace.x = stageW / 2 + (i * 355.05);
				endAnswerSpace.y = 195;
				endAnswerSpace.name = "endAnswerSpace" + i;
				stage.addChild(endAnswerSpace);
		
				for (j = 1; j < myEndGame[i].length; j++) { //מעבר על כל מערך פנימי
					var endAnswerBG = new lib.endPicOverLIB(); //העלאת רקע אפור (למעבר עכבר)
					endAnswerBG.x = -265 + (xCounter * 177.85);
					endAnswerBG.y = 55 + (yCounter * 106.75);
					endAnswerSpace.addChild(endAnswerBG);
		
					var endAnswer = new lib.endSmallAnswer(); //העלאת רקע לבן לתשובות
					endAnswer.x = -265 + (xCounter * 177.85); //הגדרת מרווחים בין התשובות
					endAnswer.y = 55 + (yCounter * 106.75); //הגדרת ירידת שורה
					endAnswer.gotoAndStop(0); //העלאת מלבן לבן חלק
					endAnswer.name = i.toString() + j.toString(); //מתן שם ייחודי על פי המיקום שלו במערך
					endAnswerSpace.addChild(endAnswer);
					if (j % 2 == 0) { //הגדרה לרדת שורה אחרי כל תשובה שנייה
						yCounter++;
						xCounter = 0;
					} else { //הגדלת המרחק בין התשובות
						xCounter++;
					}
					if (myEndGame[i][j][1] == "TXT") { //אם התוכן הוא מסוג טקסט
						var answerTXT = new createjs.Text();
						answerTXT.text = myEndGame[i][j][0];
						answerTXT.font = "12pt Arial";
						answerTXT.lineWidth = 150; //מתי לשבור שורה
						answerTXT.textBaseline = "middle";
						if (myEndGame[i][j][0].length > 25) { //הגדרת יישור לימין במקרה של טקסט ארוך
							answerTXT.textAlign = "right";
							answerTXT.x = 80;
							answerTXT.y = -10;
						} else { //הגדרת יישור למרכז במקרה של טקסט קצר
							answerTXT.textAlign = "center";
						}
						if (myEndGame[i][j][2] > 0) { //אם התשובה לא נענתה נכון בפעם הראשונה
							answerTXT.color = "#990000";
							answerTXT.text = "* " + myEndGame[i][j][0]; //הוספת כוכבית
						}
						endAnswer.addChild(answerTXT); //הוספת תוכן התשובה למסגרת
					}
					if (myEndGame[i][j][1] == "PIC") { //אם התוכן הוא מסוג תמונה
						scaleBound = 10; //הגדרת מרווח בין המסגרת לבין התמונה
						var answerPIC = new myEndGame[i][j][0]();
						answerPIC.scaleX = picSizeFunc(endAnswer, answerPIC); //התאמת גודל התמונה לגודל המסגרת
						answerPIC.scaleY = picSizeFunc(endAnswer, answerPIC);
						endAnswer.addChild(answerPIC);
						if (myEndGame[i][j][2] > 0) { //אם התשובה לא נענתה נכון בפעם הראשונה
							endAnswer.gotoAndStop(1); //הוספת מסגרת אדומה
						}
						endAnswer.addEventListener("click", zoomInFunc); //הוספת אפשרות לחיצה על התמונה להגדלה
						endAnswer.addEventListener("mouseover", function (evt) { //הוספת אפשרות למעבר עכבר
							evt.currentTarget.cursor = "zoom-in"; //שינוי סמן העכבר
							evt.currentTarget.alpha = 0.8; //שינוי הצבע על הרקע (רואים את הרקע האפור מתחת)
						});
						endAnswer.addEventListener("mouseout", function (evt) { //הוספת אירוע יציאת עכבר מגבולות התשובה
							evt.currentTarget.cursor = "context-menu"; //החזרת סמן למצב רגיל
							evt.currentTarget.alpha = 1; //החזרת תשובה לצבע לבן מלא
						});
					}
				}
			}
			var separatorLine = new lib.endSeperateLineLIB(); //הוספת קו מפריד בין העמודות
			separatorLine.x = stageW / 2;
			separatorLine.y = 195;
			separatorLine.name = "separatorLine";
			stage.addChild(separatorLine);
		}
		
		function newGameClickFunc() { //בעת לחיצה על כפתור הסיום - מעבר לבחירת משחק חדש
			cleanGameFunc(); //ניקוי אלמנטים
			preStartFunc(); //איפוס ערכים למשתנים גלובליים בכל תחילת משחק
			gameChoose(); //העלאת דרופ דאון
		}
		
		function restartGameClickFunc() { //בעת לחיצה על כפתור התחל מחדש - התחלה של אותו המשחק
			cleanGameFunc(); //ניקוי אלמנטים
			preStartFunc(); //איפוס ערכים למשתנים גלובליים בכל תחילת משחק
			if (mychoice == 1) { //בדיקה איזה משחק נבחר
				daVinciGameFunc(); //טעינת התוכן המתאים
			} else if (mychoice == 2) { //בדיקה איזה משחק נבחר
				presidentGameFunc(); //טעינת תוכן מתאים
			}
			startGame(); //הפעלת פונקציית תחילת משחק
		}
		
		function zoomInFunc(evt) { //פונקציה בעת לחיצה על תמונה להגדלה
			if (hasBigImage) { //האם קיימת תמונה גדולה על המסך
				stage.removeChild(stage.getChildByName("bigImage")); //הסרת התמונה הגדולה
				hasBigImage = false; //הצהרה כי אין תמונה גדולה על המסך
			}
			var bigImage = new lib.endBigAnswerLIB(); //העלאת מסגרת לתמונה גדולה
			bigImage.x = stageW / 2;
			bigImage.y = stageH / 2 + 80;
			bigImage.name = "bigImage";
			stage.addChild(bigImage);
		
			scaleBound = 0; //שינוי מרווח בין התמונה למסגרת שלה
			var picBigLocation = evt.currentTarget.name.charAt(0); //זיהוי על פי שם באיזה תא גדול במערך נמצאת התמונה עליה לחצו (מתאים או לא מתאים לקטגוריה)
			var picSmallLocation = evt.currentTarget.name.charAt(1); //זיהוי על פי שם באיזה תא קטן במערך נמצאת התמונה עליה לחצו (איזו אפשרות מהתשובות הקיימות)
		
			var bigAnswerPIC = new myEndGame[picBigLocation][picSmallLocation][0](); //העלאת תמונה לפי המיקום במערך
		
			bigAnswerPIC.scaleX = picSizeFunc(bigImage.endBigAnswerSpace, bigAnswerPIC); //התאמת גודל התמונה לגודל המסגרת
			bigAnswerPIC.scaleY = picSizeFunc(bigImage.endBigAnswerSpace, bigAnswerPIC);
			bigImage.addChild(bigAnswerPIC);
		
			bigImage.addEventListener("pressmove", dragFunc); //הוספת אפשרות לגרירה
			bigImage.addEventListener("pressup", releaseFunc); //שחרור אובייקט מגרירה
			hasBigImage = true; //הצהרה כי יש תמונה גדולה על המסך
		
			var closeBTN = new lib.endXbtnLIB(); //העלאת כפתור סגירה לתמונה
			closeBTN.x = -269;
			closeBTN.y = -168;
			closeBTN.name = "endCloseBTN";
			closeBTN.addEventListener("click", function () { //אירוע לחיצה על כפתור הסגירה
				stage.removeChild(bigImage); //הסרת האובייקט
			});
			bigImage.addChild(closeBTN);
		}
		
		function dragFunc(evt) { //בעת גרירה של אובייקט
			var myDrag = selfHome.globalToLocal(stage.mouseX, stage.mouseY); //מציאת מיקום העכבר
			evt.currentTarget.x = myDrag.x; //התאמת מיקום התמונה לעכבר
			evt.currentTarget.y = myDrag.y;
		}
		
		function releaseFunc() { //בעת שחרור הגרירה
			//לא קורה כלום - תמונה נשארת במקום שבו שוחררה
		}
		
		function cleanGameFunc() { //פונקציית ניקוי - הסרת אובייקטים מהמשוב המאבחן לפני משחק חדש
			stage.removeChild(stage.getChildByName("gameName")); //שם המשחק
			stage.removeChild(stage.getChildByName("timeText")); //זמן המשחק
			stage.removeChild(stage.getChildByName("scoreText")); //תוצאת המשחק
			stage.removeChild(stage.getChildByName("zoomInText")); //הוראת הגדלת תמונה
			stage.removeChild(stage.getChildByName("preformenceText")); //הסרת כותרת ביצועים
			stage.removeChild(stage.getChildByName("wrongText")); //הסרת הסבר טעויות
			stage.removeChild(stage.getChildByName("endTitle0")); //הסרת כותרת עמודה של פריטים שאינם מתאימים לקטגוריה
			stage.removeChild(stage.getChildByName("endTitle1")); //הסרת כותרת עמודה של פריטים המתאימים לקטגוריה
			stage.removeChild(stage.getChildByName("endAnswerSpace0")); //הסרת עמודה של פריטים שאינם מתאימים לקטגוריה
			stage.removeChild(stage.getChildByName("endAnswerSpace1")); //הסרת עמודה של פריטים שמתאימים לקטגוריה
			stage.removeChild(stage.getChildByName("separatorLine")); //הסרת קו מפריד בין עמודות
			stage.removeChild(stage.getChildByName("newGameBTN")); //הסרת כפתור סיום
			stage.removeChild(stage.getChildByName("restartGameBTN")); //הסרת כפתור התחל מחדש 
			stage.removeChild(stage.getChildByName("bigImage")); //הסרת תמונה גדולה במידה ונשארה פתוחה בלחיצה על כפתור
			stage.removeChild(stage.getChildByName("endCloseBTN")); //הסרת כפתור הסגירה במידה ונשארה תמונה גדולה פתוחה בלחיצה על אחד מהכפתורים
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.myCbStyle = new lib.an_CSS({'id': 'myCbStyle', 'href':'assets/myStyle.css'});

	this.myCbStyle.setTransform(480.4,295.4,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.myCbStyle).wait(1));

	// Layer_7
	this.bgMC = new lib.BGmc();
	this.bgMC.name = "bgMC";
	this.bgMC.parent = this;
	this.bgMC.setTransform(3548.8,301.2,0.884,0.884,0,0,0,4014.8,349.5);

	this.timeline.addTween(cjs.Tween.get(this.bgMC).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,287.3,7067.4,618);
// library properties:
lib.properties = {
	id: '797A0BD0E517DB48AA3A7D6F85378764',
	width: 960,
	height: 590,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/treasureMapV14_atlas_.png?1518023742458", id:"treasureMapV14_atlas_"},
		{src:"sounds/rightSound.mp3?1518023743383", id:"rightSound"},
		{src:"sounds/wrongSoundwav.mp3?1518023743383", id:"wrongSoundwav"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1518023743383", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1518023743383", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js?1518023743383", id:"an.CSS"},
		{src:"components/ui/src/combobox.js?1518023743383", id:"an.ComboBox"}
	],
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
an.compositions['797A0BD0E517DB48AA3A7D6F85378764'] = {
	getStage: function() { return exportRoot.getStage(); },
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

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;