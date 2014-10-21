$( document ).ready(function() {
	// Obfuscates email address with ROT13 to reduce the number of spam-bots/crawlers that can read it.
	// Credit to: http://rot13.florianbersier.com/
	
	var mailto_text ="znvygb:revp.zvpunry.cnlar@tznvy.pbz".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
	$( '#js-email' ).attr("href", mailto_text);
});