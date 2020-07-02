<?php

  if (empty($_POST)) {
    header('Location: ' .$_SERVER['HTTP_REFERER']);
    exit();
  }

  function clear_user_input($value) {
    if (get_magic_quotes_gpc()) $value = stripslashes($value);
    $value= str_replace( "\n", '', trim($value));
    $value= str_replace( "\r", '', $value);
    return $value;
  }

  $body = "Message from my website~~~! \n";

  foreach ($_POST as $key => $value) {
    $key = clear_user_input($key);
    $value = clear_user_input($value);
    $$key = $value;
    $body .= "$key: $value\n";
  }

  $from= 'From: ' . $email . "(" . $name . ")" . "\r\n";

  $subject= 'Message from my website~!!';

  mail('dey@taupier.dev', $subject, $body, $from);

?>
