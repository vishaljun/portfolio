<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize and retrieve form data
    $name = htmlspecialchars(strip_tags($_POST['name']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $service = htmlspecialchars(strip_tags($_POST['service']));
    $message = htmlspecialchars(strip_tags($_POST['description']));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<p class='error-message'>Error: Invalid email format!</p>";
    } elseif (empty($name) || empty($service) || empty($message)) {
        echo "<p class='error-message'>Error: All fields are required!</p>";
    } else {
        // Prepare email content
        $to = "vishal@juniperoites.com";
        $subject = "New Enquiry From Portfolio Contact Us";
        $headers = "From: no-reply@juniperoites.com\r\n"; // Use your domain email here
        $headers .= "Reply-To: $email\r\n";
        $email_body = "New Lead Information:\n\n";
        $email_body .= "Name: $name\n";
        $email_body .= "Email: $email\n";
        $email_body .= "Service: $service\n";
        $email_body .= "Message: $message\n";

        // Send email to HR
        if (mail($to, $subject, $email_body, $headers)) {
            // Send a thank you email to the user
            $user_subject = "Thank You for Contacting Junipero ITES";
            $user_message = "Dear $name,\n\n";
            $user_message .= "Thank you for contacting us. We have received your inquiry and will get back to you as soon as possible.\n\n";
            $user_message .= "Best regards,\nThe Junipero ITES Team";
            $user_headers = "From: hr@juniperoites.com\r\n";

            mail($email, $user_subject, $user_message, $user_headers);

            // Redirect to thank you page
            header("Location: thankyou.html");
            exit(); // Prevent further execution
        } else {
            echo "<p class='error-message'>Error: Failed to send email!</p>";
        }
    }
}
?>
