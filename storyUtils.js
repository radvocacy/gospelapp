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
		/*var storyType = pStoryObj.template.toLowerCase();

		switch(storyType)
		{
			case "a":
				win = storyTemplate_A(pStoryObj);
				break;
			case "x":
				win = storyTemplate_X(pStoryObj);
				break;
		}*/
		
		win = storyTemplate(pStoryObj);
	}	
	return win;
};

//=========================
//NON-Exportables
//=========================
function updatePercentage(pPercentage,pOffset)
{
     	pPercentage = pPercentage.slice(0,-1);
     	var percentVal = parseInt(pPercentage);
     	percentVal += pOffset;
     	var percentValStr = percentVal.toString() + "%";
     	
     	return percentValStr;
}

function createFooter(pBackView) {

	var footerView = Titanium.UI.createView({
			//backgroundColor: "red",
			top:"90%",
			left:"10px",
			layout:"horizontal"
		});
		
		/*var homeButton = Titanium.UI.createButton({
							title: "Home",
							color: "white",
							image:"images/buttons/forwardWhite.png",
							gHome: true
						});*/
	var homeButton = Titanium.UI.createImageView({
							image:"images/buttons/beginningGrey.png",
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
	
	return footerView;
}

function storyTemplate(pStoryObj) {
	/*var templateInfo = {
		mainLabel: {top: pStory,
					width: "100%", 
					height : 70,
					align: "center"}
	};*/
	return createNewWindow(pStoryObj);
	
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

function createNewWindow(pStoryObj) {
	var win = Titanium.UI.createWindow({
	    backgroundColor: pStoryObj.backgroundColor,
		backgroundImage: pStoryObj.backgroundImage
	});
	
	var multiLineLabel = Ti.UI.createLabel({
	  borderWidth: 0,
	  top: pStoryObj.top,
	  bottom: pStoryObj.bottom,
	  left: pStoryObj.left,
	  right: pStoryObj.right,
	  width: pStoryObj.width, 
	  height : pStoryObj.height,
	  font: pStoryObj.font ? pStoryObj.font : {fontSize:20, fontWeight:'bold'},
	  color: pStoryObj.color,
	  textAlign: pStoryObj.textAlign,
	  text: pStoryObj.text
	});
	
	win.add(multiLineLabel);
	
	for (var storyPath in pStoryObj.paths)
	{
		var pathObj = pStoryObj.paths[storyPath];
		var buttonLabel = pathObj.text;
		
		/*var newButton = Titanium.UI.createButton({
						title: buttonLabel,
						color: 'white',
						image: "images/buttons/forwardGrey.png",
						//borderWidth: 2,
						//borderRadius: 2,
						top:pathObj.top,
						left:pathObj.left,
						gAppPath: pathObj.path	
			});*/
			
		/*var newButtonView = Titanium.UI.createView({
						backgroundColor: "red",
						layout:"horizontal",
						opacity: 0.5,
						top:pathObj.top,
						right:pathObj.left						
						
			});*/
		
		
		var newButtonIcon = Titanium.UI.createButton({
							image:"images/buttons/forwardGrey.png",
							top:pathObj.top,
							right:-18,
							//backgroundColor: 'red',
							//opacity: 0.8,
							gAppPath: pathObj.path
						});
		
		//updatePercentage(pPercentage,pOffset)
										
		/*ORI
		 var newButtonLabel = Titanium.UI.createButton({
							title:buttonLabel,
							color: 'white',
							textAlign: 'right',
							top:pathObj.top,
							right:newButtonIcon.right + 10,
							backgroundColor: 'red',
							gAppPath: pathObj.path
						});
						*/
		var labelTop = updatePercentage(pathObj.top,3);
		//var labelRight = updatePercentage(pathObj.top,-5);
		var labelRight = newButtonIcon.right + 50;
		var newLabel = Titanium.UI.createLabel({
							text:buttonLabel,
							color: 'white',
							textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
							top:labelTop,
							right:labelRight,
							//backgroundColor: 'red',
							gAppPath: pathObj.path
						});				
						
		//newButtonView.add(newButtonLabel);
		//newButtonView.add(newButtonIcon);

		if (pathObj.path)
		{	
			//win.add(newButtonView);
			
			win.add(newButtonIcon);
			win.add(newLabel);
		}
		else
		{
			alert("Found Path undefined.\nPlease fix it!");
		}
	}
	

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
