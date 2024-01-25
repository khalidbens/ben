<?php 
$title = "Update Message";
require __DIR__ . '/../../../_header.php';
?>
<form action="" mehode="post">
    <textarea name="message" placeholder="veuillez entrer votre message"
    ><?= $message ['message']?>
    </textarea>
    <input type="submit" value="Envoyer" name="editMessage">
</form>
<?php 
require __DIR__ . '/../../../_footer.php';
?>