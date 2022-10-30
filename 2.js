fetch('https://favqs.com/api/qotd')
      .then(response => response.json())
			.then(user => 
                {//document.getElementById("avatar").src=user.avatar_url;
                document.getElementById("author").innerHTML =author;})
      .catch(err => console.log(err));