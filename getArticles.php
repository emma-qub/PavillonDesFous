<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");

if (!$conn = new mysqli("http://localhost:8000", "root", "hIMAWARI-CHAN", "pavillondesfous"))
  echo "Cannot establish connection to MySQL.";
else
  echo "Succes!";

// $result = $conn->query("SELECT CompanyName, City, Country FROM Customers");

// $outp = "[";
// while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
//     if ($outp != "[") {$outp .= ",";}
//     $outp .= '{"Name":"'  . $rs["CompanyName"] . '",';
//     $outp .= '"City":"'   . $rs["City"]        . '",';
//     $outp .= '"Country":"'. $rs["Country"]     . '"}';
// }
// $outp .="]";

$conn->close();

// echo($outp);

?>