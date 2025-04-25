<?php
$link = mysqli_connect("127.0.0.1", "root", "secret", "apipg", 3306);

// Verifica se houve erro na conexão
if (!$link) {
	die("Erro na conexão: " . mysqli_connect_error() . " - Código do erro: " . mysqli_connect_errno());
}

// Se passou pela verificação, a conexão foi bem-sucedida
// echo "Conexão com o banco de dados estabelecida com sucesso!";

// Define o conjunto de caracteres
if (!mysqli_set_charset($link, "utf8")) {
	printf("Erro ao definir o conjunto de caracteres utf8: %s\n", mysqli_error($link));
	exit();
}
