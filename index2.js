fetch('https://api.github.com/users/itgirlschool')
      .then(response => response.json())
			.then(user => 
                {document.getElementById("avatar").src=user.avatar_url;
                document.getElementById("userName").innerHTML =user.name;})
      .catch(err => console.log(err));
      