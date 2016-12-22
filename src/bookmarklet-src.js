if(document.location.href.indexOf("edit") == -1)
{
	if($("meta[name='node']").length > 0) { //Check if the node is actually available on site
		document.location.href = '/umbraco#/content/content/edit/' + $("meta[name='node']").attr("content");
	}
	else {
		alert("Node ID not available. Are you logged in? Umbraco login opening in new tab. login and try again in this tab");
		window.open('/umbraco#/','_blank');
		return;
	}
}
else{
	document.location.href = document.location.href.replace('/umbraco#/content/content/edit/', "/");
}