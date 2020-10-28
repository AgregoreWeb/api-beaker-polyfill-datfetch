let altFetch
if(/.*(BeakerBrowser).*/g.test(navigator.userAgent)) altFetch = (...args) => {
	if(args[1].method === 'PUT') return beaker.hyperdrive.writeFile(args[0], args[1].body) // TODO: Return fake response
	return fetch(...args)
}
else altFetch = window.fetch

export default altFetch