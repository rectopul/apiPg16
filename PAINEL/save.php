<?php
include("includes/connect.php");

$cat = $_POST['cat'];
$act = $_POST['act'];
$id = $_POST['id'];


if ($cat == "users") {
	$username = addslashes(htmlentities($_POST["username"], ENT_QUOTES));
	$token = addslashes(htmlentities($_POST["token"], ENT_QUOTES));
	$atk = addslashes(htmlentities($_POST["atk"], ENT_QUOTES));
	$saldo = addslashes(htmlentities($_POST["saldo"], ENT_QUOTES));
	$valorapostado = addslashes(htmlentities($_POST["valorapostado"], ENT_QUOTES));
	$valordebitado = addslashes(htmlentities($_POST["valordebitado"], ENT_QUOTES));
	$valorganho = addslashes(htmlentities($_POST["valorganho"], ENT_QUOTES));
	$rtp = addslashes(htmlentities($_POST["rtp"], ENT_QUOTES));
	$isinfluencer = addslashes(htmlentities($_POST["isinfluencer"], ENT_QUOTES));
	$agentid = addslashes(htmlentities($_POST["agentid"], ENT_QUOTES));
	try {

		$result = false;


		if ($act == "add") {
			$result = mysqli_query($link, "INSERT INTO `users` (  `username`, `token`, `atk`, `saldo`, `valorapostado`, `valordebitado`, `valorganho`, `rtp`, `isinfluencer`, `agentid` ) VALUES ( '" . $username . "' , '" . $token . "' , '" . $atk . "', '" . $saldo . "' , '" . $valorapostado . "', '" . $valordebitado . "',  '" . $valorganho . "', '" . $rtp . "', '" . $isinfluencer . "', '" . $agentid . "'   ) ");

			$messagem = "Dados cadastro com sucesso";
		} elseif ($act == "edit") {

			$result = mysqli_query($link, "UPDATE `users` SET  `username` =  '" . $username . "' , `token` =  '" . $token . "' , `atk` =  '" . $atk . "' , `saldo` =  '" . $saldo . "' , `valorapostado` =  '" . $valorapostado . "' , `valordebitado` =  '" . $valordebitado . "' , `valorganho` =  '" . $valorganho . "'  , `rtp` =  '" . $rtp . "'   , `isinfluencer` =  '" . $isinfluencer . "' , `agentid` =  '" . $agentid . "' WHERE `id` = '" . $id . "' ");
			$messagem = "Dados atualizado com sucesso";
		} elseif ($act == "delete") {
			$result = mysqli_query($link, "DELETE FROM `users` WHERE id = '" . $id_get . "' ");
			$messagem = "Dados excluido com sucesso";
		}


		if (!$result) {
			http_response_code(400);
			echo json_encode(['message' => 'Ops, erro ao atualizar dados.']);
			return;
		}

		http_response_code(200);
		echo json_encode(['message' => $messagem, 'redirect' => './users.php']);
	} catch (Exception $ex) {
		http_response_code(400);
		echo json_encode(['message' => 'Ops, erro ao atualizar dados.']);
	}
}
