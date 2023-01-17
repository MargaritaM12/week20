fetch('https://developer.spotify.com/documentation/web-api/')
.then(response => response.json())
.then(requests => requests.json())
.then(spotify => spotify.json())
.catch(error => console.log(error));