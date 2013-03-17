<?php

date_default_timezone_set('Asia/Novosibirsk');

require '../include/LittleSMS.class.php';
//require '../include/PHPMailer/class.phpmailer.php';

// creating sms proxy object
$sms = new LittleSMS('ernest', 'reTdznZNzLN5', false, false);

// retrieving parameters
if (!isset($_POST['phone']))
{
    // showing error page
    header('Location: error.html');
    return;
}

$ordererPhone = str_replace('+', '', $_POST['phone']);
$ordererPhone = substr($ordererPhone, 0 ,30);
$ordererName = isset($_POST['name']) ? substr($_POST['name'], 0, 40) : null;
$toPhone = '79286650999';

// building message
if ($ordererName)
{
    $message = "Заказ звонка на номер {$ordererPhone} на имя {$ordererName}";
}
else
{
    $message = "Заказ звонка на номер {$ordererPhone}";
}


// dublicating message to email
$address = 'lazurniyberegcentr@gmail.com';
$senderEmail = 'lazurniyberegcentr@gmail.com';
$subject = "Заказ звонка на номер {$ordererPhone}";

/*
$mail = new PHPMailer(true);
    
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
    header('Location: error.html');
    return;
}
*/


// sending sms message
$sms->sendSMS($toPhone, $message, $ordererPhone);

// getting sms response
$response = $sms->getResponse();
if ($response['status'] == 'success')
{
    // success, showing success page
    $page = file_get_contents('ok.html');
    $page = str_replace('{phone}', $ordererPhone, $page);
    
    header("Content-type: text/html; charset=utf-8");
    
    echo $page;
}
else
{
    // showing error page
    header('Location: error.html');
}

?>