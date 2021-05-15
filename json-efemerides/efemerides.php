<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Efemérides</h1>
    <ul>
        <?php 
            $dias = json_decode(file_get_contents("efemerides.json"));

            foreach ($dias as $dia) :
        ?>
            <li><?php echo $dia->fecha ?>
                <ul>
                    <?php 
                        foreach ($dia->efemerides as $efemeride) :
                    ?>
                        <li><?php echo $efemeride->anio ?>: <?php echo $efemeride->texto ?>
                    <?php endforeach; ?>
                </ul>
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>