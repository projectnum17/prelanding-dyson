<?php

$recepient = "egor.chornyy@gmail.com";
$siteName = "Dyson prelanding";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);

$pagetitle = "Message from \"$siteName\"";
mail($recepient, $pagetitle, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>