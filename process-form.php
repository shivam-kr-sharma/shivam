<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Set your email address here
    $to = "kshivam36097@gmail.com"; // Replace with your actual email
    $subject = "New Contact Form Message";

    // Construct the email body
    $messageBody = "Name: $name\nEmail: $email\nMessage: $message";

    // Send the email
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Thank you for reaching out! I'll get back to you soon.";
    } else {
        echo "There was a problem sending your message. Please try again later.";
    }
}
?>
