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

var story3_opt1_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel11.jpg",
	value: "Nonbeliever",
	text:"Although we may think we are pretty good in comparison to other people we know, do our good works really cover over all of our bad deeds? How can we know we are good enough? When can we know that we can go to heaven?",
	color:"black",
	paths:[{text:"Next", top:"70%",left:"65%",path:storyFollowup}]
};
var story3_opt1 = storyModule.createStory(story3_opt1_param);

var story3_opt2_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel12.jpg",
	value: "Nonbeliever",
	text:"The truth is, a lot of us have done uncountable bad deeds, and we cannot know if we have done enough good. In fact, we can never make-up for the evils we have done both small and large. This often makes us feel hopeless, but God wants to give us hope. God has a plan to save even the worst of us, to give us a chance to go to Heaven, if we only ask him how.",
	color:"black",
	paths:[{text:"Next", top:"70%",left:"65%",path:storyFollowup}]
};
var story3_opt2 = storyModule.createStory(story3_opt2_param);

var story2_que1_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel5.jpg",
	value: "Nonbeliever",
	text:"How good is good enough?",
	color:"white",
	paths:[{text:"I'm pretty good.", top:"70%",left:"85%",path:story3_opt1},
		   {text:"I have done too much bad.", top:"75%",left:"85%",path:story3_opt2}]
};
var story2_que1 = storyModule.createStory(story2_que1_param);

var story2_opt1_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel5.jpg",
	value: "Nonbeliever",
	text:"Many think that if they do more good deeds than bad deeds, that the good will out-weigh the bad.  They believe they will be able to go to heaven. But consider how many lies, and bad thoughts you have thought, and things you have done.",
	color:"white",
	paths:[{text:"Next", top:"70%",left:"85%",path:story2_que1}]
};
var story2_opt1 = storyModule.createStory(story2_opt1_param);

var story2_opt2_param = {
	template: "a",
	backgroundColor: "gray",
	backgroundImage: "images/Panel6.jpg",
	value: null,
	text:"Often the easy answer is simply to say \"Insallah\". But the truth is, God has taken great care to let us know how we can go to heaven. By saying Insallah, we say we really do not want to think about it and blame God.  Do you think there is any point in your actions then? Or is it possible God could still show a way for you to know Him?",
	color:"white",
	paths: [{text:"Continue.", top:"75%", path:storyFollowup}]
};
var story2_opt2 = storyModule.createStory(story2_opt2_param);

var story2_opt3_param = {
	template: "a",
	backgroundColor: "yellow",
	backgroundImage: "images/Panel7.jpg",
	value: null,
	text:"You're Right! We all do so much bad, evil and mistakes that we can't fix or correct. Neither can we do more good than we do bad. We need God to help us fix all of the messes we make, to clean us of our sins so that we can know him and go to Heaven.",
	color:"white",
	paths: [{text:"Continue.", top:"75%", path:storyFollowup}]
};
var story2_opt3 = storyModule.createStory(story2_opt3_param);


/*  Reincarnation options */

var story2_opt4_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel8.jpg",
	value: "Nonbeliever",
	text:"Anything, short of absolute perfection, for all of eternity is hell.",
	color:"white",
	paths:[{text:"Next", top:"70%",left:"15%",path:storyFollowup}]
};
var story2_opt4 = storyModule.createStory(story2_opt4_param);

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
var story2_opt5 = storyModule.createStory(story2_opt4_param);



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
	paths:[{text:"Do more good than bad", top:"70%",left:"85%", path:story2_opt1},
		   {text:"Insallah", top:"75%",left:"85%",path:story2_opt2},
		   {text:"God needs to help me", top:"80%",left:"85%",path:story2_opt3}]
};
var panel2_q = storyModule.createStory(panel2_q_param);


var story1_opt2_param = {
	template: "x",
	backgroundColor: "green",
	backgroundImage: "images/Panel2.jpg",
	value: "Believer",
	text:"Heaven is a place without problems. It is a place that is full of love and joy, and where we are at peace, forever, if we are privileged to get in. \n Hell is the place for those who have rebelled against God. Those who have sinned and cannot be near his holiness. It is a place of punishment, forever. \n Heaven is where we hope we go.",
	color:"white",
	paths:[{text:"Next", top:"75%", left: "75%", path:panel2_q}]	
};
var story1_opt2 = storyModule.createStory(story1_opt2_param);



var story1_que3_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel3.jpg",
	value: "Nonbeliever",
	text: "If the process of reincarnation is unending, how can you have hope?",
	color:"white",
	paths:[{text:"I don\'t have any hope in it.", top:"70%",left:"85%",path:story2_opt4},
		   {text:"I can eventually go to heaven.", top:"75%",left:"85%",path:story1_opt2},
		   {text:"I don\'t know.", top:"80%",left:"85%",path:story2_opt4}]
};
var story1_que3 = storyModule.createStory(story1_que3_param);

var story1_opt3_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel3.jpg",
	value: "Nonbeliever",
	text: "In reincarnation we are born, live, die, born, live, die, over and over again. It is a belief that life is a cycle that never ends.",
	color:"white",
	paths:[{text:"Next", top:"70%",left:"85%",path:story1_que3}]
};
var story1_opt3 = storyModule.createStory(story1_opt3_param);



var story1_que4_param = {
	template: "x",
	backgroundColor: "white",
	backgroundImage: "images/Panel4.jpg",
	value: "Nonbeliever",
	text: "Could there be something out there greater than both humans and nature?",
	paths:[{text:"No, there is nothing", top:"70%",left:"15%",path:storyFollowup},
		 {text:"Maybe I can't explain everything'", top:"75%",left:"15%",path:storyFollowup}]
};
var story1_que4 = storyModule.createStory(story1_que4_param);

var story1_opt4_param = {
	template: "x",
	backgroundColor: "red",
	backgroundImage: "images/Panel4.jpg",
	value: "Nonbeliever",
	text:"With all the wars, and bad things in this world, we often decide to say there is no God. Yet, if nothing made us, how do we know that there is right or wrong? What gives us this knowledge that all of humanity shares? Yet science is limited. In this natural world, there are many unexplainable supernatural things that science cannot measure.",
	color:"white",
	paths:[{text:"Next.", top:"70%",left:"15%",path:story1_que4}]
};
var story1_opt4 = storyModule.createStory(story1_opt4_param);

var main_story_param = {
	template: "x",
	backgroundColor: "blue",
	backgroundImage: "images/Panel1.jpg",
	value: null,
	text:"What do you believe happens after we die?",
	color:"white",
	paths: [{text:"Heaven or Hell", top:"70%",left:"85%",path:story1_opt2},
			{text:"Reincarnation", top:"75%",left:"85%",path:story1_opt3},
			{text:"Nothing", top:"80%",left:"85%",path:story1_opt4}]
};
var mainStory = storyModule.createStory(main_story_param);

var language_story_param = {
	template:			"x",
	backgroundColor:		"black",
	backgroundImage:	null,
	value:				null,
	text:				"Language?",
	color:				"white",
	paths:	[
				{text:"English", top:"50%", left:"25%", path:mainStory},
				{text:"بودن", top:"60%", left:"25%", path:mainStory},
				{text:"Français", top:"70%", left:"25%", path:mainStory},
				{text:"العربية", top:"50%", left:"75%", path:mainStory},
				{text:"Pусский", top:"60%", left:"75%", path:mainStory},
				{text:"Türk", top:"70%", left:"75%", path:mainStory}
			]
};


exports.mainStory = storyModule.createStory(language_story_param);
