

//var storyLoadData = require('storyData');
//Uncomment later storyLoadData.loadData();

var storyContents = require('storyContents');

var mainStory = storyContents.mainStory;

mainStory.navBarHidden = true;

var mainWindow = Titanium.UI.iOS.createNavigationWindow({
   window: mainStory
});


mainWindow.open();



//================================================
var windowStack = [mainStory];

function navigationClickHandler(e)
{
	if (e.source)
	{
		if (e.source["gAppPath"])
		{
			var pathSelection = e.source.gAppPath;
			
			pathSelection.removeEventListener("click",navigationClickHandler);
			pathSelection.addEventListener("click",navigationClickHandler);
			pathSelection.navBarHidden = true;
			windowStack.push(pathSelection);
			
			mainWindow.openWindow(pathSelection);
		}
		else
		if (e.source["gHome"])
		{
			for(var i = 1, l = windowStack.length; i < l; i++) {
				var closedWindow = windowStack[i];
        		mainWindow.closeWindow(closedWindow);
    		}
		}
		else
		if (e.source["gBackView"])
		{
			var backView = e.source.gBackView;
			if (windowStack.length > 1)
			{
				windowStack.pop();
				mainWindow.closeWindow(backView);
			}
			
		}
	}
}

mainStory.addEventListener("click",navigationClickHandler);



/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
/*if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');	  	
}

// This is a single context application with multiple windows in a stack
(function() {
	//render appropriate components based on the platform and form factor
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window;
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	}
	else {
		// Android uses platform-specific properties to create windows.
		// All other platforms follow a similar UI pattern.
		if (osname === 'android') {
			Window = require('ui/handheld/android/ApplicationWindow');
		}
		else {
			Window = require('ui/handheld/ApplicationWindow');
		}
	}
	new Window().open();
})();*/

//==============


//var nextStory = storyModule.createStory("a","TEST456","blue");
//var mainStory = storyModule.createStory("a","TEST123","red",nextStory);


/*
var mainWindow = Titanium.UI.createWindow({
	backgroundColor:"red",
	backgroundImage:"images/Panel1.jpg" 
});

var button1 = Titanium.UI.createButton({
	title: "Hello",
	width: 100,
	height:40
});

mainWindow.add(button1);
mainWindow.open();
*/