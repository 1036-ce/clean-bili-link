chrome.declarativeNetRequest.getEnabledRulesets(
	rulesetIds => console.log(rulesetIds)
)


chrome.tabs.onUpdated.addListener(
	function(tabId, changeInfo, tab) {
		console.log(changeInfo.url)
		if (changeInfo.url !== undefined && changeInfo.url.includes('vd_source')) {
			chrome.tabs.sendMessage(tabId, {
				message: 'url_changed',
			})
		}
	}
)