exports.loadData = function () {
	//John 3:16
	var url = "http://api.biblia.com/v1/bible/content/LEB.txt.txt?passage=John3.16&callback=myCallbackFunction&key=979ec1a2ec52531be4e556df8679232a";
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         alert(this.responseText);
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         alert('error');
	     },
	     timeout : 5000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send();
};