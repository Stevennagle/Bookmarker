
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
	
	//console.log(bookmark)

	/*
		//Local Storage Test
		localStorage.setItem('test','Hello Internet');
		console.log(localStorage.getItem('test'));

		localStorage.removeItem('test');
		console.log(localStorage.getItem('test'));
	*/

	if(localStorage.getItem('bookmarks') === null){

		var bookmarks = []; 
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	}else{

		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		bookmarks.push(bookmark);
	}



	e.preventDefault();
}
