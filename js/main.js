//Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
	var siteName = document.getElementById('siteName').value;
	var siteUrl = document.getElementById('siteUrl').value;
	
	var bookmark = {
		name: siteName,
		url: siteUrl
	}	
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
	}
	else{
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}
	e.preventDefault();
}

function fetchBookmarks(){
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	//console.log(bookmarks);
	var bookmarksResults = document.getElementById('bookmarksResults');

	bookmarksResults.innerHTML = '';
	for(var i = 0; i < bookmarks.length; i++) {
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;
		bookmarksResults.innerHTML += '<div class="well">'+
									   '<h3>'+name+
									   '</h3>'+
									   '</div>';
	}
}

