<?php
	include("includes/connect.php");

	$admin_agentCode = mysqli_real_escape_string($link, $_POST['agentCode']);
	$admin_senha = mysqli_real_escape_string($link, $_POST['senha']); 
	$auth = 'admin_in';

	$query = mysqli_query($link, "SELECT * FROM agents WHERE agentCode = '".$admin_agentCode."' AND senha = '".$admin_senha."'");
	if (mysqli_affected_rows($link) == 0) {
	//	header("location:"."index.php");
		http_response_code(400);
		echo json_encode(['message' => 'Usúario/senha incorretos']);
	} else {
		$row = mysqli_fetch_array($query);
		setcookie("admin_id", $row["id"]);
		setcookie("admin_pass", $admin_senha);
		setcookie("auth", $auth);
		http_response_code(200);
		echo json_encode(['message' => 'logado com sucesso', 'redirect' => '/painel.php']);
	}
?>
