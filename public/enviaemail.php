<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Find your dream car!</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">


</head>
<body>
<div id="contai" class="container-fluid">
    <nav class="navbar navbar-default navbar-static-top">        
        <ul class="nav navbar-nav">
            <li ><a href="index.html">Home</a></li>            
            <li ><a href="http://www.findurdreamcar.com/autosales">Auto Sales</a></li>            
        </ul>
    </nav>
<?php
$mark = $_POST['mark'];
$model = $_POST['model'];
$color = $_POST['color'];
$year = $_POST['year'];
$maxprice = $_POST['maxprice'];
$yourname = $_POST['yourname'];
$cellphone = $_POST['cellphone'];
$email = $_POST['email'];
$comments = $_POST['comments'];
$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s');

// Compo E-mail
  $arquivo = "
   Marca: ".$mark."
   Model: ".$model."
   Color: ".$color."
   Year: ".$year."
   Max Price ".$maxprice."
   Cliente: ".$yourname."
   Cellphone:".$cellphone."
   Email:".$email."
   Mensagem:".$comments."
   Data: ".$data_envio."
   Hora: ".$hora_envio;

  //enviar
  
require 'PHPMailer/PHPMailerAutoload.php';

$mailer = new PHPMailer();
$mailer->IsSMTP();
//$mailer->SMTPDebug = 2;
$mailer->Port = 587; //Indica a porta de conex�o para a sa�da de e-mails. Utilize obrigatoriamente a porta 587.

$mailer->Host = 'br1002.hostgator.com.br'; //Onde em 'servidor_de_saida' deve ser alterado por um dos hosts abaixo:
//Para cPanel: 'localhost';
//Para Plesk 11 / 11.5: 'smtp.dominio.com.br';

//Descomente a linha abaixo caso revenda seja 'Plesk 11.5 Linux'
$mailer->SMTPSecure = 'tls';
$mailer->SMTPAuth = true; //Define se haver� ou n�o autentica��o no SMTP
$mailer->Username = 'contato@tisemcensura.com.br'; //Informe o e-mai o completo
$mailer->Password = '$gr007879rg#'; //Senha da caixa postal
$mailer->FromName = 'GILVAN'; //Nome que ser� exibido para o destinat�rio
$mailer->From = 'contato@tisemcensura.com.br'; //Obrigat�rio ser a mesma caixa postal indicada em "username"
$mailer->AddAddress('gilservicosweb@gmail.com'); //Destinat�rios
$mailer->Subject = 'Contato via site - ' . date("H:i") . '-' . date("d/m/Y");
$mailer->Body = $arquivo;

echo "<div class='mens_cont'><h3> Mr. " . $yourname . " Thank you! - We will be sending you a reply soon.</h3></div>";

if (!$mailer->Send()) {
	echo "Mensagem nao enviada";
	echo "Erro: " . $mailer->ErrorInfo;exit;
} else {
	echo "<div class='mens_cont'><h3> Your Email was sended!</h3></div>";
}
?>
<a id="volta" href="index.html">Voltar</a>
</div>


<footer>
   
</footer>

</body>

</html>