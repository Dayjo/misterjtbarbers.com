<?php
$api_key = getenv("MailGunAPIKey");

require 'mailgun/autoload.php';
use Mailgun\Mailgun;

# Set up the contact form details
$name 		= $_POST['name'];
$email 		= $_POST['email'];
$message 	= $_POST['message'];

# First, instantiate the SDK with your API credentials and define your domain. 
$mg = new Mailgun($api_key);
$domain = "misterjtbarbers.com";

# Now, compose and send your message.
$mg->sendMessage($domain, array(
	'from'    => $email, 
    'to'      => 'misterjt@dayjo.me', 
    'subject' => 'Website Email Message from ' . $name, 
    'text'    => $message
	)
);

echo "sent";