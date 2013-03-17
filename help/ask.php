<?php

date_default_timezone_set('Asia/Novosibirsk');

require '../include/LittleSMS.class.php';
//require '../include/PHPMailer/class.phpmailer.php';

// building message
$address = 'lazurniyberegcentr@gmail.com';
$senderEmail = $_POST['email'];
$subject = 'Вопрос с сайта';
$message = $_POST['question']; 
		

if (!$senderEmail || !$message)
{
    header('Location: ask-error.html');
    return;
}

/*		
// sending mail using PHPMailer
$mail = new PHPMailer(true); //defaults to using php "mail()"; the true param means it will throw exceptions on errors, which we need to catch
    
try 
{
    $mail->CharSet = 'utf-8';
    $mail->AddReplyTo($senderEmail);
    $mail->AddAddress($address);
    $mail->SetFrom($senderEmail);
    $mail->AddReplyTo($senderEmail);
    
    $mail->Subject = $subject;
    $mail->MsgHTML($message);
    $mail->Send();
}
catch (Exception $e) 
{
    // mailing error
    header('Location: ask-error.html');
    return;
}
*/

// sending sms message

// creating sms proxy object
$sms = new LittleSMS('ernest', 'reTdznZNzLN5', false, false);
$toPhone = '79286650999';
$smsMessage = "Тема - {$subject}. Сообщение - $message. От {$senderEmail}";

$sms->sendSMS($toPhone, $smsMessage);

// getting sms response
$response = $sms->getResponse();
if ($response['status'] != 'success')
{
    // showing error page
    header('Location: ask-error.html');
}

header('Location: ask-ok.html');



?>