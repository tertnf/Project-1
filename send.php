<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if(isset ($_POST["send"])){
    $mail= new PHPMailer(true);
 
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = "WebsiteOfPsychologist@gmail.com";
    $mail->Password = 'PROJECT1SECRETKEY1';
    $mail->SMTPSecure = 'sll';
    $mail->Port = 465;
    $mail->setFrom('WebsiteOfPsychologist@gmail.com');
$mail->addAddress($_POST["email"]);
    $mail->isHTML(true);
    
    $mail->Subject = $_POST["subject"];
    $mail->Body = $_POST["message"];

    $mail->send();

    echo
    "
    <script>
    alert('Дякую, ваші данні успішно записані, я зв'яжуся з вами дуже скоро, Наталія Угай.');
    </script>
    document.location.href='index.php';
    ";
}
?>


