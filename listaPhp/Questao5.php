<?php
if($_POST) {
    echo "Sorteado: " . rand($_POST['min'], $_POST['max']);
    echo "<br><a href='Questao5.php'>Voltar</a>";
} else {
    echo '<form method="post">Min: <input type="number" name="min"><br>Max: <input type="number" name="max"><br><input type="submit" value="Sortear"></form>';
}
?>
