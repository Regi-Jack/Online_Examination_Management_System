<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="/miniproject/mycss.css">
    <title>Faculty Page</title>
</head>
<body>
    <div class="innerdiv">
        <h1>Welcome Faculty!</h1>
        <ul>
            <li><a id="stud">Students</a></li>
            <li><a id="course">Courses</a></li>
            <li><a id="addstud">Add Student</a></li>
            <li><a id="addcourse">Add Courses</a></li>
        </ul>
        <div class="addsdiv">
            <form>
                <div class="form-group">
                    <label for="cid">Course id</label>
                    <input type="text" class="form-control" id="cid">
                </div>
                <div class="form-group">
                    <label for="cname">Course Name</label>
                    <input type="text" class="form-control" id="cname">
                </div>
                <div class="form-group">
                    <label for="credit">Credits</label>
                    <input type="text" class="form-control" id="credit">
                </div>
                <button type="submit" class="btn btn-primary" id="cadd">Add</button>
            </form>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="jquery.js"></script>
    <script src="handler.js"></script>
</body>
</html>