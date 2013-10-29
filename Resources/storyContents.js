var storyModule = require('storyUtils');

/*
 * LAST PANES
 */


var storyFinalPane = {
	template: "a",
	backgroundColor: "#000",
	backgroundImage: "images/PanelLast.jpg",
	text: "Thank you for your time! The survey is done.",
	color: "white",
	paths: null
};
var storyFinal = storyModule.createStory(storyFinalPane);

var storyFollowupYesPane = {
	template: "a",
	backgroundColor: "#000",
	backgroundImage: "images/PanelLast.jpg",
	text: "Please provide your contact information.",
	color: "white",
	paths: null
};
var storyFollowupYes = storyModule.createStory(storyFollowupYesPane);

var storyFollowupPane = {
	template: "a",
	backgroundColor: "#000",
	backgroundImage: "images/PanelLast.jpg",
	text: "Would you like to think about this more? Can someone followup with you on this survey?",
	color: "white",
	paths: [{text:"Yes", top:"75%", path:storyFollowupYes},
			{text:"No, thank you.", top:"85%", path:storyFinal}
	]
};
var storyFollowup = storyModule.createStory(storyFollowupPane);


/* Heaven & Hell options */

var panel11_s_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel11.jpg",
	value: "Nonbeliever",
	text:"Although we may think we are pretty good in comparison to other people we know, do our good works really cover over all of our bad deeds? How can we know we are good enough? When can we know that we can go to heaven?",
	color:"black",
	paths:[{text:"Next", top:"70%",left:"65%",path:storyFollowup}]
};
var panel11_s = storyModule.createStory(panel11_s_param);

var panel12_s_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel12.jpg",
	value: "Nonbeliever",
	text:"The truth is, a lot of us have done uncountable bad deeds, and we cannot know if we have done enough good. In fact, we can never make-up for the evils we have done both small and large. This often makes us feel hopeless, but God wants to give us hope. God has a plan to save even the worst of us, to give us a chance to go to Heaven, if we only ask him how.",
	color:"black",
	paths:[{text:"Next", top:"70%",left:"65%",path:storyFollowup}]
};
var panel12_s = storyModule.createStory(panel12_s_param);

var panel5_q_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel5.jpg",
	value: "Nonbeliever",
	text:"How good is good enough?",
	color:"white",
	paths:[{text:"I'm pretty good.", top:"70%",left:"85%",path:panel11_s},
		   {text:"I have done too much bad.", top:"75%",left:"85%",path:panel12_s}]
};
var panel5_q = storyModule.createStory(panel5_q_param);

var panel5_s_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel5.jpg",
	value: "Nonbeliever",
	text:"Many think that if they do more good deeds than bad deeds, that the good will out-weigh the bad.  They believe they will be able to go to heaven. But consider how many lies, and bad thoughts you have thought, and things you have done.",
	color:"white",
	paths:[{text:"Next", top:"70%",left:"85%",path:panel5_q}]
};
var panel5_s = storyModule.createStory(panel5_s_param);

var panel6_s_param = {
	template: "a",
	backgroundColor: "gray",
	backgroundImage: "images/Panel6.jpg",
	value: null,
	text:"Often the easy answer is simply to say \"Insallah\". But the truth is, God has taken great care to let us know how we can go to heaven. By saying Insallah, we say we really do not want to think about it and blame God.  Do you think there is any point in your actions then? Or is it possible God could still show a way for you to know Him?",
	color:"white",
	paths: [{text:"Continue.", top:"75%", path:storyFollowup}]
};
var panel6_s = storyModule.createStory(panel6_s_param);

var panel7_s_param = {
	template: "a",
	backgroundColor: "yellow",
	backgroundImage: "images/Panel7.jpg",
	value: null,
	text:"You're Right! We all do so much bad, evil and mistakes that we can't fix or correct. Neither can we do more good than we do bad. We need God to help us fix all of the messes we make, to clean us of our sins so that we can know him and go to Heaven.",
	color:"white",
	paths: [{text:"Continue.", top:"75%", path:storyFollowup}]
};
var panel7_s = storyModule.createStory(panel7_s_param);


/*  Reincarnation options */

var panel8_s_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel8.jpg",
	value: "Nonbeliever",
	text:"Anything, short of absolute perfection, for all of eternity is hell.",
	color:"white",
	paths:[{text:"Next", top:"70%",left:"15%",path:storyFollowup}]
};
var panel8_s = storyModule.createStory(panel8_s_param);

var story2_opt5_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel9.jpg",
	value: "Nonbeliever",
	text:"How good is good enough?",
	color:"white",
	paths:[{text:"No, there is nothing", top:"70%",left:"85%",path:storyFollowup},
		   {text:"Maybe I can't explain everything'", top:"75%",left:"85%",path:storyFollowup}]
};
var story2_opt5 = storyModule.createStory(panel8_s_param);



/* 
 * After Death options 
 * 
 * */

var panel2_q_param = {
	template: "x",
	backgroundColor: "green",
	backgroundImage: "images/Panel2.jpg",
	value: "Believer",
	text:"How does someone go to Heaven?",
	color:"white",
	width: "40%",
	right: 0,
	top: "10%",
	font: {fontSize: 48, fontWeight: 100},
	paths:[{text:"Do more good than bad", top:"70%",left:"85%", path:panel5_s},
		   {text:"Insallah", top:"75%",left:"85%",path:panel6_s},
		   {text:"God needs to help me", top:"80%",left:"85%",path:panel7_s}]
};
var panel2_q = storyModule.createStory(panel2_q_param);


var panel2_s_param = {
	template: "x",
	backgroundColor: "green",
	backgroundImage: "images/Panel2.jpg",
	value: "Believer",
	text:"Heaven is a place without problems. It is a place that is full of love and joy, and where we are at peace, forever, if we are privileged to get in. \n\n Hell is the place for those who have rebelled against God. Those who have sinned and cannot be near his holiness. It is a place of punishment, forever. \n\n Heaven is where we hope we go.",
	color:"white",
	right: 0,
	width: "50%",
	font: {fontSize: 26, fontWeight: 100},
	paths:[{text:"Next", top:"75%", left: "75%", path:panel2_q}]	
};
var panel2_s = storyModule.createStory(panel2_s_param);



var panel3_q_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel3.jpg",
	value: "Nonbeliever",
	text: "If the process of reincarnation is unending, how can you have hope?",
	color:"white",
	paths:[{text:"I don\'t have any hope in it.", top:"70%",left:"85%",path:panel8_s},
		   {text:"I can eventually go to heaven.", top:"75%",left:"85%",path:panel2_s},
		   {text:"I don\'t know.", top:"80%",left:"85%",path:panel8_s}]
};
var panel3_q = storyModule.createStory(panel3_q_param);

var panel3_s_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel3.jpg",
	value: "Nonbeliever",
	text: "In reincarnation we are born, live, die, born, live, die, over and over again. It is a belief that life is a cycle that never ends.",
	color:"white",
	paths:[{text:"Next", top:"70%",left:"85%",path:panel3_q}]
};
var panel3_s = storyModule.createStory(panel3_s_param);

var panel9_s_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel9.jpg",
	value: "Nonbeliever",
	text: "If there is nothing, then whatever we do in this life is limited to this life. No one can judge our sins. But what if you are wrong? What if this life has something more? What if there is an afterlife? Have you been wrong before?",
	color:"white",
	paths:[{text:"Next", top:"70%",left:"85%",path:storyFollowup}]
};
var panel9_s = storyModule.createStory(panel9_s_param);

var panel10_s_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel10.jpg",
	value: "Nonbeliever",
	text: "We have been certain about things before, only to be found out to be wrong often. There are lots of things we cannot explain... on our own. Could there be a God that can shed light on those things?",
	color:"white",
	paths:[{text:"Next", top:"70%",left:"85%",path:storyFollowup}]
};
var panel10_s = storyModule.createStory(panel10_s_param);

var panel4_q_param = {
	template: "x",
	backgroundColor: "white",
	backgroundImage: "images/Panel4.jpg",
	value: "Nonbeliever",
	text: "Could there be something out there greater than both humans and nature?",
	paths:[{text:"No, there is nothing", top:"70%",left:"15%",path:panel9_s},
		 {text:"Maybe I can't explain everything'", top:"75%",left:"15%",path:panel10_s}]
};
var panel4_q = storyModule.createStory(panel4_q_param);

var panel4_s_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel4.jpg",
	value: "Nonbeliever",
	text:"With all the wars, and bad things in this world, we often decide to say there is no God. Yet, if nothing made us, how do we know that there is right or wrong? What gives us this knowledge that all of humanity shares? Yet science is limited. In this natural world, there are many unexplainable supernatural things that science cannot measure.",
	color:"white",
	paths:[{text:"Next.", top:"70%",left:"15%",path:panel4_q}]
};
var panel4_s = storyModule.createStory(panel4_s_param);

var main_story_param = {
	template: "x",
	backgroundColor: "blue",
	backgroundImage: "images/Panel1.jpg",
	value: null,
	text:"What do you believe happens after we die?",
	color:"white",
	top: "10%",
	width: "80%",
	left: "10%",
	font: {fontSize: 36},
	paths: [{text:"Heaven or Hell", top:"60%",left:"85%",path:panel2_s},
			{text:"Reincarnation", top:"70%",left:"85%",path:panel3_s},
			{text:"Nothing", top:"80%",left:"85%",path:panel4_s}]
};
var mainStory = storyModule.createStory(main_story_param);

var language_story_param = {
	template:			"x",
	backgroundColor:	"#efd",
	backgroundImage:	"images/PanelLang.jpg",
	value:				null,
	text:				"Language?",
	color:				"black",
	top: 				"20%",
	right:				"50%",
	width: 				"50%", 
	height : 			"80%",
	textAlign: 			"center",
	font: {
			fontSize:50,
			fontWeight:'100',
			fontFamily:'HelveticaNeue-Light'
			},
	paths:	[
				{text:"English", top:"50%", left:"25%", path:mainStory},
				//{text:"بودن", top:"60%", left:"25%", path:mainStory},
				// {text:"Français", top:"70%", left:"25%", path:mainStory},	
				{text:"العربية", top:"60%", left:"75%", path:mainStory},
				// {text:"Pусский", top:"60%", left:"75%", path:mainStory},
				{text:"Türk", top:"70%", left:"75%", path:mainStory}
			]
};


exports.mainStory = storyModule.createStory(language_story_param);
