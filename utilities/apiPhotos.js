const apiPhotos = {
	getPhotos(){
		const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=lydxUXmCkMpGc5Gg2gbiShdzhzQy2AkHv6vVHq9N'
		return fetch(url).then(res => res.json())
	}
}

module.exports = apiPhotos  