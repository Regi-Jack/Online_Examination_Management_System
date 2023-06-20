<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="/miniproject/mycss.css">
    <title>Student Page</title>
</head>
<body>
    <div class="logout">
        <a href="home_page.php"><img src="logout_logo.png" class="logout_logo"></a><br>
        <h6>Logout</h6>
    </div>
    <div class="innerdiv">
        <?php
            echo '<h1 id="username">Welcome '.$_GET['username'].'</h1>';
        ?>
        <ul>
            <li><a id="viewannouncestud">Announcements</a></li>
            <li><a id="takeexam">Exams</a></li>
            <li><a id="getresult">Results</a></li>
        </ul>
        <div id="dynamicdiv">

        </div>
    </div>
    <script>var simple = "<?= $_GET['username'] ?>";</script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="jquery.js"></script>
    <script src="handler.js"></script>
    
</body>
</html>