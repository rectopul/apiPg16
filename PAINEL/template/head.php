<?php
		error_reporting(0);
		session_start();
		if ($_COOKIE["auth"] != "admin_in") {header("location:"."./");}
			include("includes/connect.php");
			include("includes/data.php");
			?>
			
    <title>PAINEL GERENCIAMENTO </title>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">

    <title>PrimesLog - Flex Gerenciamente de Coletas</title>
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="assets/img/favicon/favicon.ico">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap" rel="stylesheet">

    <!-- Icons. Uncomment required icon fonts -->
    <link rel="stylesheet" href="assets/vendor/fonts/boxicons.css">


    <!-- Core CSS -->
    <link rel="stylesheet" href="assets/vendor/css/core.css" class="template-customizer-core-css">
    <link rel="stylesheet" href="assets/vendor/css/theme-default.css" class="template-customizer-theme-css">
    <link rel="stylesheet" href="assets/css/demo.css">

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css">
    <link rel="stylesheet" href="assets/vendor/css/pages/page-profile.css">

    <link rel="stylesheet" href="assets/vendor/libs/apex-charts/apex-charts.css">
    <link rel="stylesheet" href="assets/vendor/libs/jquery-ui/jquery-ui.css">


    <link rel="stylesheet" href="assets/vendor/libs/sweetalert2/sweetalert2.css">
    <link rel="stylesheet" href="assets/vendor/libs/typeahead-js/typeahead.css">
    <link rel="stylesheet" href="assets/vendor/libs/dropzone/dropzone.css">
    <link rel="stylesheet" href="assets/vendor/libs/bootstrap-select/bootstrap-select.css">
    <link rel="stylesheet" href="assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css">
    <link rel="stylesheet" href="assets/vendor/libs/datatables-bs5/buttons.bootstrap5.css">
    <link rel="stylesheet" href="assets/vendor/libs/datatables-bs5/datatables.checkboxes.css">
    <link rel="stylesheet" href="assets/vendor/libs/datatables-bs5/responsive.bootstrap5.css">
    <link rel="stylesheet" href="assets/vendor/libs/datatables-bs5/rowgroup.bootstrap5.css">
    <link rel="stylesheet" href="assets/vendor/libs/select2/select2.css">
    <link rel="stylesheet" href="assets/vendor/libs/select2/multi-select.css">
    <link rel="stylesheet" href="assets/vendor/libs/FormValidation/formValidation.min.css">
    <link rel="stylesheet" href="assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.css">
    <link rel="stylesheet" href="assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.css">
    <link rel="stylesheet" href="assets/vendor/libs/pickr/pickr-themes.css">
    <link rel="stylesheet" href="assets/vendor/libs/flatpickr/flatpickr.css">

    <!-- Page CSS -->

    <!-- Helpers -->
    <script src="assets/vendor/js/helpers.js"></script>
    <script src="assets/js/shortcut.js"></script>

    <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
    <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->

    <script src="assets/vendor/js/template-customizer.js"></script>
    <script src="assets/js/config.js"></script>