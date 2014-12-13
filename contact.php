<?php
$api_key = getenv("MailGunAPIKey");

require 'mailgun/autoload.php';
use Mailgun\Mailgun;

# First, instantiate the SDK with your API credentials and define your domain. 
$mg = new Mailgun($api_key);
$domain = "misterjtbarbers.com";

# Now, compose and send your message.
$mg->sendMessage($domain, array('from'    => 'webmaster@misterjtbarbers.com', 
                                'to'      => 'misterjt@dayjo.me', 
                                'subject' => 'Website Email Message from ', 
                                'text'    => 'It is so simple to send a message.'));*/