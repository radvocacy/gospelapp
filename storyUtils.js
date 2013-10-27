//var storyContents = require('storyContents');
//=========================
//PUBLIC APIs
//=========================

/*var HOME_EVT = "HomeEvt";
var BACK_EVT = "BackEvt";
var CHOOSE_OPTION_EVT = "ChooseOptEvt";

exports.E_HOME_EVT = HOME_EVT;
exports.E_BACK_EVT = BACK_EVT;
exports.E_CHOOSE_OPTION_EVT = CHOOSE_OPTION_EVT;
*/
exports.createStory = function (pStoryObj) {
	
	var win = null;
	if (pStoryObj)
	{
		var storyType = pStoryObj.template.toLowerCase();

		switch(storyType)
		{
			case "a":
				win = storyTemplate_A(pStoryObj);
				break;
			case "x":
				win = storyTemplate_X(pStoryObj);
				break;
		}
	}	
	return win;
};

//=========================
//NON-Exportables
//=========================


//var _footerView = null;
function createFooter(pBackView) {
	//if (_footerView == null)
	//{
	var footerView = Titanium.UI.createView({
			//backgroundColor: "red",
			top:"95%",
			left:"10px",
			layout:"horizontal"
		});
		
		var homeButton = Titanium.UI.createButton({
							title: "Home",
							color: "white",
							gHome: true
						});
		var backButton = Titanium.UI.createButton({
							title: "Back",
							color: "white",
							left: "10px",
							gBackView: pBackView
						});
		
		footerView.add(homeButton);
		footerView.add(backButton);
		/*homeButton.addEventListener('click',function(e){
			//alert("I AM HOME");
			//Titanium.App.fireEvent(HOME_EVT);
			var i = 2;
		});
		
		backButton.addEventListener('click',function(e){
			//alert("I AM BACK");
			Titanium.App.fireEvent(BACK_EVT);
		});*/
	//}
	
	return footerView;
}

function storyTemplate_A(pStoryObj) {
	var templateInfo = {
		mainLabel: {top: 60,
					width: "100%", 
					height : 70,
					align: "center"}
	};
	return createNewWindow(pStoryObj,templateInfo);
	
}

function storyTemplate_X(pStoryObj) {
	var templateInfo = {
		mainLabel: {top: 40,
					width: "100%", 
					height : 50,
					align: "center"}
	};
	return createNewWindow(pStoryObj,templateInfo);
	
}

function createNewWindow(pStoryObj,pTemplateAInfo) {
	var win = Titanium.UI.createWindow({
	    backgroundColor: pStoryObj.backgroundColor,
		backgroundImage: pStoryObj.backgroundImage
	});
	
	var multiLineLabel = Ti.UI.createLabel({
	  borderWidth: 0,
	  top: pTemplateAInfo.mainLabel.top,
	  width: pTemplateAInfo.mainLabel.width, 
	  height : pTemplateAInfo.mainLabel.height,
	  font: {fontSize:20, fontWeight:'bold'},
	  color: pStoryObj.color,
	  textAlign: pTemplateAInfo.mainLabel.align,
	  text: pStoryObj.text
	});
	
	win.add(multiLineLabel);
	
	for (var storyPath in pStoryObj.paths)
	{
		var pathObj = pStoryObj.paths[storyPath];
		var buttonLabel = pathObj.text;
		var newButton = Titanium.UI.createButton({
						title: buttonLabel,
						color: 'white',
						//borderWidth: 2,
						//borderRadius: 2,
						top:pathObj.top,
						left:pathObj.left,
						gAppPath: pathObj.path	
			});

		if (pathObj.path)
		{
			/*newButton.addEventListener('click',function(e){
				//var activeWindow = Ti.UI.getCurrentWindow;
				
				//this.gAppPath.backPath = activeWindow;
				//this.gAppPath.open();
				// win1.openWindow(this.gAppPath, {animated:true});
				//Ti.App.fireEvent(CHOOSE_OPTION_EVT,
				//	{index:this});
			});*/
			
			win.add(newButton);
		}
		else
		{
			alert("Found Path undefined.\nPlease fix it!");
		}
	}
	
	//win.add(multiLineLabel);
	//win.homePath = 
	//win.backPath =
	win.add(createFooter(win));
	return win;
};
	/*var textArea = Ti.UI.createTextArea({
	  borderWidth: 2,
	  borderColor: '#bbb',
	  borderRadius: 5,
	  color: '#888',
	  font: {fontSize:20, fontWeight:'bold'},
	  textAlign: 'left',
	  value: pStoryObj.text,
	  top: 60,
	  width: 300, height : 70
	});*/
