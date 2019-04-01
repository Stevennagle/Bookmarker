
//Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
	//console.log(''); 
	
	//get form values
	var siteName =document.getElementById('siteName').value;
	var siteUrl =document.getElementById('siteUrl').value;

	var bookmark = {
		name: siteName,
		url: siteUrl

	}

	console.log(bookmark)




	e.preventDefault();


}
