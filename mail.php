<?php

$recepient = "egor.chornyy@gmail.com";
$siteName = "Dyson Prelanding";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);

$pagetitle = "Message \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>