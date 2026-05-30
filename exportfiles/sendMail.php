<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer files
require __DIR__ . '/src/Exception.php';
require __DIR__ . '/src/PHPMailer.php';
require __DIR__ . '/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

  $name = htmlspecialchars($_POST["name"] ?? '');
  $email = htmlspecialchars($_POST["email"] ?? '');
  $phone = htmlspecialchars($_POST["phone"] ?? '');
  $location = htmlspecialchars($_POST["location"] ?? '');
  $message = htmlspecialchars($_POST["message"] ?? '');

  $mail = new PHPMailer(true);

  try {
    // SMTP settings
    $mail->isSMTP();
  

    // Sender and recipient
    $mail->setFrom('info@g-netsolutions.in', 'Website Enquiry'); // from your domain
    $mail->addAddress('gnet.cbe@gmail.com');                     // your receiving email
    $mail->addReplyTo($email, $name);                            // reply-to user

    // Email content
    $mail->isHTML(true);
    $mail->Subject = "New Enquiry from $name";
    $mail->Body = "
      <h2>New Enquiry Received</h2>
      <p><strong>Name:</strong> {$name}</p>
      <p><strong>Email:</strong> {$email}</p>
      <p><strong>Phone:</strong> {$phone}</p>
      <p><strong>Location:</strong> {$location}</p>
      <p><strong>Message:</strong><br>{$message}</p>
    ";

    $mail->AltBody = 
      "New Enquiry Received\n\n" .
      "Name: $name\n" .
      "Email: $email\n" .
      "Phone: $phone\n" .
      "Location: $location\n" .
      "Message:\n$message";

    $mail->send();
    echo "success";

  } catch (Exception $e) {
    http_response_code(500);
    echo "Mailer Error: {$mail->ErrorInfo}";
  }

} else {
  http_response_code(405);
  echo "Method not allowed";
}
?>
