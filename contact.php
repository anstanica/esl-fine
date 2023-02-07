<?php
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

$header = "From: noreply@example.com\r\n";
$header.= "MIME-Version: 1.0\r\n";
$header.= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$header.= "X-Priority: 1\r\n";
$to = 'anstanica@outlook.com';
// Check for empty fields
function validate_post_data() {
    // Get the form fields, removes html tags and whitespace.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check the data.
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: about.html");
        exit;
    }
}

function set_email_recipient() {
    //  Set the recipient email address.
    $recipient = "anstanica@outlook.com";
    return $recipient;
}
// Build the email content.
function build_email_content($name, $email, $message) {
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";
    return $email_content;
}
// Build the email headers.
function build_email_headers($email) {
    $email_headers = "From: $email";
    return $email_headers;
}
// Send the email.
function send_email($recipient, $email_content, $email_headers) {
    // Send the email.
    mail($recipient, "New contact from $name", $email_content, $email_headers);
    // Redirect to the index.html page with success code
    header("Location: about.html?success=1");
}
// Validate the form data.
validate_post_data();
// Set the recipient email address.
$recipient = set_email_recipient();
// Build the email content.
$email_content = build_email_content($name, $email, $message);
// Build the email headers.
$email_headers = build_email_headers($email);
// Send the email.
send_email($recipient, $email_content, $email_headers);
// Redirect to the index.html page with success code
header("Location: about.html?success=1");
// show an error message if the email was not sent
if (!mail($recipient, "New contact from $name", $email_content, $email_headers)) {
    header("Location: about.html?success=-1");
} else {
    header("Location: about.html?success=1");
}
// use html to display a message to the sender if the email was sent successfully
if (isset($_GET['success']) && $_GET['success'] == 1) {
    echo "Thank You! Your message has been sent.";
} else if (isset($_GET['success']) && $_GET['success'] == -1) {
    echo "Sorry, your message could not be sent.";
};
// set the message text color to red

// call the mail function to send the email
mail($to, $subject, $message, $headers);


// display the form if the user has not clicked the submit button





// Exit the script
exit;


?>
