<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
// l'autoload s'occupera de require automatiquement les classes demandées
REQUIRE __DIR__. '/../../vendor/autoload.php';

/**
 * envoi un email
 *
 * @param string $from
 * @param string $to
 * @param string $subject
 * @param string $body
 * @return string
 */
function sendEmail(string $from, string $to, string $subject, string $body): string
{   
  // Le paramtre a true permet d'activer les exeception (type d'erreurs)
    $mail = new PHPMailer(true);

    try {
        /**/ 
        $mail->isSMTP();
        $mail->Host = 'sandbox.smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Port = 2525;
        $mail->Username = '1';
        $mail->Password = '';
        // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        
    $mail->setFrom ($from);
    $mail->addAddress($to);
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $body;
    $mail->send();
    return "Le message a bien ete envoyé";
    }catch(Exception $e) 
    {   
        return "Le message n'a pas pu etre envoyé. Mailer error: {$mail->ErrorInfo}";
    }
}