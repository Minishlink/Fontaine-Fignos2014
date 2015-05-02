<!doctype html>
<html lang="fr">
	<head>
		<title>Fontaine d'eau</title>
		<link rel="stylesheet" media="screen" type="text/css" title="Design" href="design.css" />
		<script type="text/javascript" src="jquery-1.10.2.min.js"></script>
		<script type="text/javascript" src="js.js"></script>
	</head>
	<body>
		<div id="tab">
		<?php
		$count = 0;
		echo "<table>";
		for($i=0; $i<10; $i++)
		{
			echo "<tr>";
			for($j=0; $j<5; $j++)
			{
				echo "<td id=".$count." class='off'>".$count."</td>";
				$count++;
			}
			echo "</tr>";
		}
		echo "</table>";
		?>
		</div>
	</body>
</html>