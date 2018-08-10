<!DOCTYPE html>
<html lang="eng">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="device=width-device, initial-scale=1.0">
	<title> Flags Test </title>

	<style>
		*{
			box-sizing:border-box;
		}

		.container{
			display:grid;
			grid-template-columns: 400px 400px 400px;

		}

		div#text-box{
			margin:50px 500px;
		}

	</style>
</head>
<body>
	<div class="container">
		<div id="kenya">
			<img src="img/kenya.png" onclick="pickKenya()">
		</div>

		<div id="china">
			<img src="img/china.png">
		</div>

		<div id="australia">
			<img src="img/australia.jpeg">
		</div>


	</div>

		<div id="text-box">
			<input type="text" id="countryName">
		</div>

	<script>
		function pickKenya(){
		
			let textbox=document.getElementById("countryName");
			return textbox.value.innerHTML="Kenyan Flag";
		}
	</script>

</body>
</html>