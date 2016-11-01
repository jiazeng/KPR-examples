/*

import {
	SlideBrowserBehavior,
	SlideViewer
} from 'slidePictureTouchStates';

var SlideBrowser = Container.template($ => ({ 
	anchor: 'SLIDE_BROWSER', 
	clip: true,
	skin: new Skin( { fill: "black" } ),

	Behavior : class extends SlideBrowserBehavior{
		onCreate(container, data) {
			this.data = data;
			this.getSlides(container);
			this.onBrowsable(container, 0);
		}
		getSlides(container) {
			var data = this.data;
			var imagesPath = mergeURI(application.url, "../images/");								
			var slides = [
				imagesPath + "image1.png",
				imagesPath + "image2.png",
				imagesPath + "image3.png",
				imagesPath + "image4.png"
			]
			data.slides = slides;
			data.slideCount = slides.length;
		}
		onSlideDisplayed() {
			var string =  (this.data.slideIndex + 1) + " of " + this.data.slideCount
			trace(string + "\n");
		}
	},
	
	contents: [
		SlideViewer($, { left: 0, right: 0, top: 0, bottom: 0, anchor: 'SCROLLER' }),
	], 
}));

var data = { 
	slideIndex: 0
};

var myBackground = new Content( { left: 0, top: 0, right: 0, bottom: 0, skin: new Skin( { fill: "#7ec0ee" } ) } );
application.add(myBackground);
var mySlideBrowser = SlideBrowser(data, { left: 20, right: 20, top: 20, bottom: 20});
application.add( mySlideBrowser );