<?php
 header('content-type: application/json; charset=utf-8');

$conn = new mysqli("localhost", "valentin", "Himawari-chan", "pavillondesfous");

$articleIndex = 1;
if (isset($_GET["index"]))
  $articleIndex = $_GET["index"];
$result = $conn->query("SELECT titre, txt FROM article WHERE id = ".$articleIndex);

$outp = [];
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  $currArray = [];
  $currArray["Title"] = $rs["titre"];
  $currArray["Text"] = "<p>".str_replace("\n", "</p><p>", $rs["txt"])."</p>";

  $outp[] = $currArray;
}

$conn->close();

echo json_encode($outp);

?>