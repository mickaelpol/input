////////////////////////////////////////////////////////////////////////////////////////////////////////
//bouton add du texte

// $('.button1').click(function(){
// 	var tab = {
// 	input1 : $('#input1').val(),
// 	input2 : $('#input2').val(),
// 	input3 : $('#input3').val()
// 	}

// 	$('#text').html("bonjour " + " " + tab.input1 + " " + tab.input2 + " "+ " tu as " + tab.input3 + " ans " )


// });


////////////////////////////////////////////////////////////////////////////////////////////////////////////
//mon tableau 
// var tab = $('#tab');

// 	$('#btn2').click(function(){

// 		var tableau = {
// 			input1 : $('#input1').val(),
// 			input2 : $('#input2').val(),
// 			input3 : $('#input3').val()
// 		}
// 		$('#tab').append("<td> " + " " + tableau.input1 + " " + " </td>");
// 		$('#tab').append("<td> " + " " + tableau.input2 + " " + " </td>");
// 		$('#tab').append("<td> " + " " + tableau.input3 + " " + " </td>");
// 		console.log(tableau);
// 		// $('#tab').append(input1 + input2 + input3);
// 		// console.log(tab)
// 	});


// $('#btn3').click(function(){
// $('#tab').append("<tr>");
// })


///////////////////////////////////////////////////////////////////////////////////////////////////////

//affichage sans clic des input et condition si case pas remplis


// var input1 = "";
// var input2 = "";
// var input3 = "";

// $(".ecouteInput").change(function(){
// 	input1 = $('#input1').val();
// 	input2 = $('#input2').val();
// 	input3 = $('#input3').val();
	
// 	if (input1 == 0){
// 		$('#text').html("il te manque le " + "prénom");
// 	} else if (input2 == 0) {
// 		$('#text').html("bonjour " + " " + input1 + " il te manque le " + "nom");
// 	} else if (input3 == 0) {
// 		$('#text').html("salut " + input1 + " " + input2 + " il te manque " + "l'age");
// 	} else {
// 		$('#text').html("bonjour " +  input1 + " " + input2 + " tu a " + input3 + " ans " )
// 	}

// 	});
////////////////////////////////////////////////////////////////////////////////////////////
 // sa correction 

//  var prenom = "";
//  var nom = "";
//  var age = 0;

//  var tableRows = "<tr><th>Prenom</th><th>Nom</th><th>Age</th></tr>";

// $('#btn1').click(function(){
// 	prenom = $('#input1').val();
// 	nom = $('#input2').val();
// 	age = $('#input3').val();

// 	tableRows += "<tr><td>" + prenom +
// 				"</td><td>" + nom + 
// 				"</td><td>" + age + "</td></tr>";

// 				$('#tab').html("<table>" + tableRows + "</table>");
// });


