<?php
if (isset($_POST['contactsubmit'])) {
    // Retrieve form data
    $name = $_POST['usercontactname'];
    $email = $_POST['usercontactemail'];
    $phone_number = $_POST['usercontactphoneno'];
    $service = $_POST['usercontctservice'];
    $message = $_POST['usercontactmessage'];
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<p class='error-message'>Error: Invalid email format!</p>";
    } else {
        // Prepare email content
        $to = "ramjuniperoites@gmail.com , hr@juniperoites.com";
        $subject = "New Enquiry From Junipero ITES Contact Us";
        $headers = "From: $email";
        $email_body = "New Lead Information:\n\nName: $name\nEmail: $email\nPhone Number: $phone_number\nService: $service\nMessage: $message";
        // Send email to HR
        if (mail($to, $subject, $email_body, $headers)) {
            // Send a thank you email to the user
            $user_subject = "Thank You for Contacting Junipero ITES";
            $user_message = "Dear $name,\n\nThank you for contacting us. We have received your inquiry and will get back to you as soon as possible.\n\nBest regards,\nThe Junipero ITES Team";
            $user_headers = "From: hr@juniperoites.com";
            mail($email, $user_subject, $user_message, $user_headers);
            // Redirect to thank you page
            header("Location: thankyou.php");
            ob_end_flush(); // Flush output buffer
            exit();
        } else {
            echo "<p class='error-message'>Error: Failed to send email!</p>";
        }
    }
}
?>
