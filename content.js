function removeQueryParameters() {
	console.log('removeQueryParameters start')
	const url = new URL(window.location.href);
	console.log(url)
	const paramsToRemove = ["spm_id_from", "vd_source"];
	let paramsChanged = false;

	paramsToRemove.forEach(param => {
		if (url.searchParams.has(param)) {
			url.searchParams.delete(param);
			paramsChanged = true;
		}
	});

	if (paramsChanged) {
		window.history.replaceState({}, document.title, url.toString());
	}
	console.log('removeQueryParameters end')
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.message === 'url_changed') {
			console.log('here')
			removeQueryParameters()
		}
	}
)