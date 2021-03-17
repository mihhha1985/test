<?php
$db = new PDO('mysql:host=localhost;dbname=test', 'root', '');
$db->exec("set names utf8");

$text = $_GET['text'];
$sum = $_GET['sum'];
$sum = intval($sum);

$sql = "INSERT INTO `myvalue`(`id`, `str`, `sum`) VALUES(NULL, :str, :sum)";
$result = $db->prepare($sql);
$result->bindParam(':str', $text, PDO::PARAM_STR);
$result->bindParam(':sum', $sum, PDO::PARAM_INT);
$result->execute();

