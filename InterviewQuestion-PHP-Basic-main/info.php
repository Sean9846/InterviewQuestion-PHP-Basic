<?php
$q = $_REQUEST["q"];
if (strcmp($q, "abc") == 0)
	echo "Verified";
else
	echo '<label style="font-size:30px; color: red">Error</label>';
?>