<?php
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["mail"];
    $contex = $_POST["contex"];
    $mensaje = $_POST["mensaje"];
// envio
$conten_mess ='Este mensaje fue enviado por ' . $name . ".\r\n";
$conten_mess .= 'Su telefono es: ' . $phone . ".\r\n";
$conten_mess .= 'Su correo es: ' . $email . ".\r\n";
$conten_mess .= 'Contexto ' . $contex . ".\r\n";
$conten_mess .= 'Mensaje ' . $mensaje . ".\r\n";
$conten_mess .= 'Enviado el ' . date('d/m/Y', time());

// destino y asunto
$destino = "Elmundodedroguincci@hotmail.com"; 
// poner correo elect ++
$asunto = "Contacto desde el sitio web";

// header
$headers = "From: $emial\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

// enviar
if (mail($destino, $asunto, utf8_decode($conten_mess), $headers)){
    // exit
    header("Location: confirm.html");
} else{
    //fail
    echo "Ocurrio un error al enviar el mensaje";
}
?>