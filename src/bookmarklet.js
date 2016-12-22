if(document.location.href.indexOf("edit") == -1)
{
	document.location.href = '/umbraco#/content/content/edit/' + $("meta[name='node']").attr("content");
}
else {
	document.location.href = document.location.href.replace('/umbraco#/content/content/edit/', "/");
}