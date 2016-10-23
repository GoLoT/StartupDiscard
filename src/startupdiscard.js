function discardAll() {
    chrome.tabs.query({discarded: false}, function(tabs) {
	for(i=0; i<tabs.length;i++) {
	    chrome.tabs.discard(tabs[i].id, function(tab){
		if(!chrome.runtime.lastError) {
		    console.log(tab.id + " discarded");
		}
	    } );
	}
    });
}

discardAll();
