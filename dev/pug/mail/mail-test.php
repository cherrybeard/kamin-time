<?
	if (count($_POST)!=0) {
		$msg = 'Новая заявка с лендинга KaminTime #1<br>';
		if (isset($_POST['phone'])) {
			$msg .= 'Телефон: '.$_POST['phone'].'<br>';
		}
		if (isset($_POST['email'])) {
			$msg .= 'E-mail: '.$_POST['email'].'<br>';
		}
		if (isset($_POST['message'])) {
			$msg .= 'Хочу: '.$_POST['message'].'<br>';
		}
		$title = 'Заявка с лендинга KaminTime #1';
		if (!empty($_POST['msg'])) $msg .= '<br>'.$_POST['msg'];
    $to = 'stephen.gusev@gmail.com,purecoffee@yandex.ru';
		$header = 'MIME-Version: 1.0' . "\n" .
			'Content-type: text/html; charset=UTF-8'. "\n" .
			"From: KaminTime <shantishanti@bk.ru>\n";
    if (@mail($to, $title, $msg, $header))
    	die('1');
	}
	if (count($_POST)!=0) die('0');
?>
