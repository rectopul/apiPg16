<?php
include("includes/connect.php");

$cat = $_POST['cat'];
$act = $_POST['act'];
$id = $_POST['id'];


if ($cat == "agents") {
	$agentCode = addslashes(htmlentities($_POST["agentCode"], ENT_QUOTES));
	$senha = addslashes(htmlentities($_POST["senha"], ENT_QUOTES));
	$saldo = addslashes(htmlentities($_POST["saldo"], ENT_QUOTES));
	$agentToken = addslashes(htmlentities($_POST["agentToken"], ENT_QUOTES));
	$secretKey = addslashes(htmlentities($_POST["secretKey"], ENT_QUOTES));
	$probganho = addslashes(htmlentities($_POST["probganho"], ENT_QUOTES));
	$probbonus = addslashes(htmlentities($_POST["probbonus"], ENT_QUOTES));
	$probganhortp = addslashes(htmlentities($_POST["probganhortp"], ENT_QUOTES));
	$probganhoinfluencer = addslashes(htmlentities($_POST["probganhoinfluencer"], ENT_QUOTES));
	$probbonusinfluencer = addslashes(htmlentities($_POST["probbonusinfluencer"], ENT_QUOTES));
	$probganhosaldo = addslashes(htmlentities($_POST["probganhosaldo"], ENT_QUOTES));
	$callbackurl = addslashes(htmlentities($_POST["callbackurl"], ENT_QUOTES));
	$probganhoaposta = addslashes(htmlentities($_POST["probganhoaposta"], ENT_QUOTES));


	try {

		$result = false;
 
		if ($act == "add") {
		    $ultimo = mysqli_query($link, "SELECT id FROM agents ORDER BY id DESC LIMIT 1");
		    $ultimo = $ultimo->fetch_assoc();
		    $id = $ultimo['id'] + 0;
		    $id = $id +1;
			$result = 	mysqli_query($link, "INSERT INTO `agents` (`id`, `agentCode`, `senha`, `saldo`, `agentToken`, `secretKey`, `probganho`, `probbonus`, `probganhortp`, `probganhoinfluencer`, `probbonusinfluencer`, `probganhosaldo`, `callbackurl`, `probganhoaposta`) VALUES ('" . $id . "' , '" . $agentCode . "' , '" . $senha . "' , '" . $saldo . "', '" . $agentToken . "' , '" . $secretKey . "', '" . $probganho . "', '" . $probbonus . "',  '" . $probganhortp . "', '" . $probganhoinfluencer . "', '" . $probbonusinfluencer . "', '" . $probganhosaldo . "', '" . $callbackurl . "', '" . $probganhoaposta . "'   ) ");
		
		   
		    
		} elseif ($act == "edit") {

			$result = mysqli_query($link, "UPDATE `agents` SET  `agentCode` =  '" . $agentCode . "' , `senha` =  '" . $senha . "' , `saldo` =  '" . $saldo . "' , `agentToken` =  '" . $agentToken . "' , `secretKey` =  '" . $secretKey . "' , `probganho` =  '" . $probganho . "' , `probbonus` =  '" . $probbonus . "'  , `probganhortp` =  '" . $probganhortp . "'   , `probganhoinfluencer` =  '" . $probganhoinfluencer . "' , `probbonusinfluencer` =  '" . $probbonusinfluencer . "', `probganhosaldo` =  '" . $probganhosaldo . "', `probganhoaposta` =  '" . $probganhoaposta . "' , `callbackurl` =  '" . $callbackurl . "'  WHERE `id` = '" . $id . "' ");
		} elseif ($act == "delete") {
			$result = 	mysqli_query($link, "DELETE FROM `users` WHERE id = '" . $id_get . "' ");
		}


		if (!$result) {
			http_response_code(400);
			echo json_encode(['message' => 'Ops, erro ao atualizar dados.']);
			return;
		}

		http_response_code(200);
		switch ($act) {
		    case 'add':
		       $message = "Dados inseridos com sucesso!";
		        break;
		    case 'edit':
		        $message = "Dados alterados com sucesso!";
		        break;
		    case 'delete':
		        $message = "Dados removidos com sucesso!";
		        break;
		    default:
		        $message = "Sucesso!";
		        break;
		}
		echo json_encode(['message' =>$message, 'redirect' => './agents.php']);
	} catch (Exception $ex) {
		http_response_code(400);
		echo json_encode(['message' => 'Ops, erro ao atualizar dados.']);
	}
}
