
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>douze pion bi</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <?php

        include_once('classes/Board.php');
        $board1 = new Board();
        $board1->renderBoard();
    ?>
</body>
</html>