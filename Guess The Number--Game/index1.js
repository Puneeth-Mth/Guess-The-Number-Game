var y = Math.floor(100000 + Math.random() * 900000);

function sender(){

		localStorage.setItem("myValue", y);

		window.location.href="player.html";
		window.location.href="display_random_number.html";
		location.href='display_random_number.html'
}


document.getElementById("data").innerHTML=y;

setTimeout(function(){

         window.location.href = 'player.html';
       
       }, 5000);

