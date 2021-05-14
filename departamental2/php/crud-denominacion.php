<?php


$eje_tematico = $_POST['eje_tematico'];
$modalidad =$_POST['modalidad'];
$descricpion =$_POST['descripcion'];
$factor =$_POST['factor'];
$ejemplos =$_POST['ejemplos'];
$accion =$_POST['accion'];

$servidor ="localhost";
$usuario ="root";
$clave ="";
$basedatos ="electivas";

$conexion =mysqli_connect($servidor,$usuario,$clave,$basedatos);

$Query = "INSERT INTO denominacion (id, eje_tematico, modalidad, descripcion, factor, ejemplos) VALUES (NULL, '".$eje_tematico."', '".$modalidad."', '".$descricpion."', '".$factor."', '".$ejemplos."')";;

mysqli_query($conexion,$Query);
echo "Tu query es: ".$Query; 

?>