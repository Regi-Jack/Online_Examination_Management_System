function get_addstud_html() {
    let x = '<div class="addsdiv">';
    x += "<form>";
    x += '<div class="form-group">';
    x += '<label for="sid">Student id</label>';
    x += '<input type="text" class="form-control" id="sid">';
    x += "</div>";
    x += '<div class="form-group">';
    x += '<label for="sname">Name</label>';
    x += '<input type="text" class="form-control" id="sname">';
    x += "</div>";
    x += '<div class="form-group">';
    x += '<label for="spassword">Password</label>';
    x += '<input type="text" class="form-control" id="spassword">';
    x += "</div>";
    x += '<button type="submit" class="btn btn-primary" id="sadd">Add</button>';
    x += "</form>";
    x += "</div>";
    return x;
}

function get_addcourse_html() {
    let x = '<div class="addsdiv">';
    x += "<form>";
    x += '<div class="form-group">';
    x += '<label for="cid">Course id</label>';
    x += '<input type="text" class="form-control" id="cid">';
    x += "</div>";
    x += '<div class="form-group">';
    x += '<label for="cname">Course Name</label>';
    x += '<input type="text" class="form-control" id="cname">';
    x += "</div>";
    x += '<div class="form-group">';
    x += '<label for="credit">Credits</label>';
    x += '<input type="text" class="form-control" id="credit">';
    x += "</div>";
    x += '<button type="submit" class="btn btn-primary" id="cadd">Add</button>';
    x += "</form>";
    x += "</div>";
    return x;
}

function view_student_html(rtable) {
    let x = '<table class="table">';
    x += "<thead>";
    x += "<tr>";
    x += '<th scope="col">Student id</th>';
    x += '<th scope="col">Name</th>';
    x += '<th scope="col">Password</th>';
    x += "</tr>";
    x += "</thead>";
    x += "<tbody>";
    let i = 0;
    while (i < rtable.length) {
        x += "<tr>";
        x += "<td>" + rtable[i]["sid"] + "</td>";
        x += "<td>" + rtable[i]["sname"] + "</td>";
        x += "<td>" + rtable[i]["spassword"] + "</td>";
        x += "</tr>";
        i++;
    }
    x += "</tbody>";
    x += "</table>";
    return x;
}

function view_course_html(rtable) {
    let x = '<table class="table">';
    x += "<thead>";
    x += "<tr>";
    x += '<th scope="col">Course id</th>';
    x += '<th scope="col">Name</th>';
    x += '<th scope="col">Credits</th>';
    x += "</tr>";
    x += "</thead>";
    x += "<tbody>";
    let i = 0;
    while (i < rtable.length) {
        x += "<tr>";
        x += "<td>" + rtable[i]["cid"] + "</td>";
        x += "<td>" + rtable[i]["cname"] + "</td>";
        x += "<td>" + rtable[i]["credit"] + "</td>";
        x += "</tr>";
        i++;
    }
    x += "</tbody>";
    x += "</table>";
    return x;
}

function get_addann_html() {
    let x = '<div class="addsdiv">';
    x += "<form>";
    x += '<div class="form-group">';
    x += '<label for="desc">Description</label>';
    x += '<input type="text" class="form-control input-lg" id="desc">';
    x += "</div>";
    x += '<button type="submit" class="btn btn-primary" id="annc">Add</button>';
    x += "</form>";
    x += "</div>";
    return x;
}

function view_announcement_html(rtable) {
    let x = '<table class="table">';
    x += "<thead>";
    x += "<tr>";
    x += '<th scope="col">Announcements Board</th>';
    x += "</tr>";
    x += "</thead>";
    x += "<tbody>";
    let i = 0;
    while (i < rtable.length) {
        x += "<tr>";
        x += "<td>" + rtable[i]["topic"] + "</td>";
        x += "</tr>";
        i++;
    }
    x += "</tbody>";
    x += "</table>";
    x +=
        '<button type="submit" class="btn btn-primary" id="clearannc">Clear All</button>';
    return x;
}

function view_announcement_as_student_html(rtable) {
    let x = '<table class="table">';
    x += "<thead>";
    x += "<tr>";
    x += '<th scope="col">Announcements Board</th>';
    x += "</tr>";
    x += "</thead>";
    x += "<tbody>";
    let i = 0;
    while (i < rtable.length) {
        x += "<tr>";
        x += "<td>" + rtable[i]["topic"] + "</td>";
        x += "</tr>";
        i++;
    }
    x += "</tbody>";
    x += "</table>";
    return x;
}

function create_exam_html() {
    let x = '<div class="addsdiv">';
    x +=
        '<button type="submit" class="btn btn-primary" id="gform">Google Form</button>';
    x += "<form>";
    x += '<div class="form-group">';
    x += '<label for="cid">Course id</label>';
    x += '<input type="text" class="form-control" id="cid">';
    x += "</div>";
    x += '<label for="exam_type">Exam type</label>';
    x += '<select class="form-control" id="exam_type">';
    x += "<option>Test1</option>";
    x += "<option>Midterm</option>";
    x += "<option>Test3</option>";
    x += "<option>Endterm</option>";
    x += "</select><br>";
    x += '<div class="form-group">';
    x += '<label for="formlink">Link</label>';
    x +=
        '<input type="text" class="form-control" id="formlink" placeholder="paste the google form link here">';
    x += "</div>";
    x +=
        '<button type="submit" class="btn btn-primary" id="formsubmit">Create</button>';
    x += "</form>";
    x += "</div>";
    return x;
}

function publish_result(rtable) {
    let i = 0;
    let x = '<div class="addsdiv">';
    x += '<div class="form-group">';
    x += '<label for="cid">Course id</label>';
    x += '<input type="text" class="form-control" id="cid"><br>';
    x += '<label for="exam_type">Exam Type</label>';
    x += '<select class="form-control" id="exam_type">';
    x += "<option>Test 1</option>";
    x += "<option>Midterm</option>";
    x += "<option>Test 3</option>";
    x += "<option>Endterm</option>";
    x += "</select><br>";
    x += "</div>";
    x += "<form>";
    while (i < rtable.length) {
        x += '<div class="form-group">';
        x +=
            '<label for="sid">' +
            rtable[i]["sid"] +
            " " +
            rtable[i]["sname"] +
            "</label>";
        x +=
            '<input type="text" class="form-control" id="marks' +
            i +
            '" placeholder="marks obtained">';
        x += "</div>";
        i++;
    }
    x +=
        '<button type="submit" class="btn btn-primary" id="ressubmit">Submit</button>';
    x += "</form>";
    x += "</div>";
    return x;
}

function view_exam_html(rtable) {
    let i = 0;
    let x = '<div class="addsdiv">';
    while (i < rtable.length) {
        x += '<div class="exambubble">';
        x += '<form action="' + rtable[i]["link"] + '">';
        x +=
            "<h4>" +
            rtable[i]["examtype"] +
            "<br>" +
            rtable[i]["cid"] +
            " : " +
            rtable[i]["cname"] +
            "&nbsp&nbsp&nbsp&nbsp";
        x +=
            '<input type="submit" class="btn btn-success" value="Take Test" id="takeexambtn" formtarget="_blank"/></h4>';
        x += "</form>";
        x += "<br>";
        x += "</div>";
        i++;
    }
    x += "</div>";
    return x;
}

function view_exam_faculty_html(rtable) {
    let i = 0;
    let x = '<div class="addsdiv">';
    while (i < rtable.length) {
        x += '<div class="exambubble">';
        x += '<form action="' + rtable[i]["link"] + '">';
        x +=
            "<h4>" +
            rtable[i]["examtype"] +
            "<br>" +
            rtable[i]["cid"] +
            " : " +
            rtable[i]["cname"] +
            "&nbsp&nbsp&nbsp&nbsp";
        x +=
            '<br><br><input type="submit" class="btn btn-success" value="Take Test" id="takeexambtn" formtarget="_blank"/>';
            
        x += "<br><br><input type='button' id='deleteexambtn' class='btn btn-success' value='Delete Exam' onclick='delete_this_exam(`" +
            rtable[i]["cid"] + ' ' + rtable[i]["examtype"] +
            "`)'>";

        x += "</form>";
        x += "<br>";
        x += "</div>";
        i++;
    }
    x += "</div>";
    return x;
}

function delete_this_exam(info) {
    cid = info.split(/[ ]+/)[0];
    exam_type = info.split(/[ ]+/)[1];
    $.ajax({
        url: "/miniproject/ajax.php",
        type: "POST",
        dataType: "json",
        data: { cid: cid, exam_type: exam_type, action: "delete_exam" },
        success: function (x) {
            if(x.status == "OK") {
                alert("Exam Deleted!");
                document.location.replace("faculty_home.php");
            }
            else
                alert(x.status);
        },
        error: function () {
            alert("error");
        },
    });
}

function view_result_html(rtable) {
    let i = 0;
    let x = '<table class="table">';
    x += "<thead>";
    x += "<tr>";
    x += '<th scope="col">Course id</th>';
    x += '<th scope="col">Course Name</th>';
    x += '<th scope="col">Exam Type</th>';
    x += '<th scope="col">Results</th>';
    x += "</tr>";
    x += "</thead>";
    x += "<tbody>";
    while (i < rtable.length) {
        x += "<tr>";
        x +=
            "<td>" +
            rtable[i]["cid"] +
            "</td>" +
            "<td>" +
            rtable[i]["cname"] +
            "</td>" +
            "<td>" +
            rtable[i]["examtype"] +
            "</td>";
        x += "<td>";
        x +=
            "<input type='button' id='demo' class='btn btn-primary' value='View Result' onclick='view_specific_result(`" +
            rtable[i]["cid"] + ' ' + rtable[i]["examtype"] +
            "`)'>";
        x += "</td>";
        x += "</tr>";
        i++;
    }
    x += "</tbody>";
    x += "</table>";
    return x;
}

function view_specific_result(info) {
    cid = info.split(/[ ]+/)[0];
    exam_type = info.split(/[ ]+/)[1];
    $.ajax({
        url: "/miniproject/ajax.php",
        type: "POST",
        dataType: "json",
        data: { cid: cid, exam_type: exam_type, action: "subject_result" },
        success: function (x) {
            if (x.length == 0) {
                alert("Bugged!");
            } else {
                let text = subject_result_html(x);
                $("#dynamicdiv").html(text);
            }
        },
        error: function () {
            alert("error");
        },
    });
}

function subject_result_html(rtable) {
    let i = 0;
    let x = '<div class="">';
    x += '<table class="table">';
    x += "<thead>";
    x += "<tr>";
    x += '<th scope="col">Student id</th>';
    x += '<th scope="col">Name</th>';
    x += '<th scope="col">Marks</th>';
    x += "</tr>";
    x += "</thead>";
    x += "<tbody>";
    while (i < rtable.length) {
        x +=
            "<tr>" +
            "<td>" +
            rtable[i]["sid"] +
            "</td>" +
            "<td>" +
            rtable[i]["sname"] +
            "</td>" +
            "<td>" +
            rtable[i]["marks"] +
            "</td>";
        i++;
    }
    x += "</div>";
    return x;
}

$(document).ready(function () {
    $(document).on("click", "#homelogin", function (e) {
        document.location.href = "/miniproject/login.php";
    });

    $(document).on("click", "#mainlogin", function (e) {
        let username = $("#username").val();
        let password = $("#password").val();
        let login_as = $("#login_as").val();
        $.ajax({
            url: "/miniproject/ajax.php",
            type: "POST",
            dataType: "json",
            data: {
                username: username,
                password: password,
                login_as: login_as,
                action: "login",
            },
            success: function (x) {
                if (x.status == "OK_FACULTY") {
                    alert("Redirecting to faculty portal");
                    document.location.replace("/miniproject/faculty_home.php");
                } else if (x.status == "OK_STUDENT") {
                    alert("Redirecting to student portal");
                    document.location.replace(
                        "/miniproject/student_home.php?username=" + username
                    );
                } else {
                    alert(x.status);
                }
            },
            error: function () {
                alert("error");
            },
        });
    });

    $(document).on("click", "#addstud", function (e) {
        let text = get_addstud_html();
        $("#dynamicdiv").html(text);
    });

    $(document).on("click", "#addcourse", function (e) {
        let text = get_addcourse_html();
        $("#dynamicdiv").html(text);
    });

    $(document).on("click", "#sadd", function (e) {
        let sid = $("#sid").val();
        let sname = $("#sname").val();
        let spassword = $("#spassword").val();
        $.ajax({
            url: "/miniproject/ajax.php",
            type: "POST",
            dataType: "json",
            data: {
                sid: sid,
                sname: sname,
                spassword: spassword,
                action: "add_student",
            },
            success: function (x) {
                if (x.status == "OK") {
                    alert("Student Added!");
                    document.location.replace("/miniproject/faculty_home.php");
                } else {
                    alert(x.status);
                }
            },
            error: function () {
                alert("error");
            },
        });
    });

    $(document).on("click", "#cadd", function (e) {
        let cid = $("#cid").val();
        let cname = $("#cname").val();
        let credit = $("#credit").val();
        $.ajax({
            url: "/miniproject/ajax.php",
            type: "POST",
            dataType: "json",
            data: {
                cid: cid,
                cname: cname,
                credit: credit,
                action: "add_course",
            },
            success: function (x) {
                if (x.status == "OK") {
                    alert("Course Added!");
                    document.location.replace("/miniproject/faculty_home.php");
                } else {
                    alert(x.status);
                }
            },
            error: function () {
                alert("error");
            },
        });
    });

    $(document).on("click", "#stud", function (e) {
        $.ajax({
            url: "/miniproject/ajax.php",
            type: "POST",
            dataType: "json",
            data: { action: "view_student" },
            success: function (x) {
                if (x.length == 0) {
                    alert("No students added yet!");
                } else {
                    let text = view_student_html(x);
                    $("#dynamicdiv").html(text);
                }
            },
            error: function () {
                alert("error");
            },
        });
    });

    $(document).on("click", "#course", function (e) {
        $.ajax({
            url: "/miniproject/ajax.php",
            type: "POST",
            dataType: "json",
            data: { action: "view_course" },
            success: function (x) {
                if (x.length == 0) {
                    alert("No course added yet!");
                } else {
                    let text = view_course_html(x);
                    $("#dynamicdiv").html(text);
                }
            },
            error: function () {
                alert("error");
            },
        });
    });

    $(document).on("click", "#offeredcourses", function (e) {
        document.location.href = "/miniproject/homepagecourse.php";
    });

    $(document).on("click", "#homecourse", function (e) {
        $.ajax({
            url: "/miniproject/ajax.php",
            type: "POST",
            dataType: "json",
            data: { action: "view_course" },
            success: function (x) {
                if (x == []) {
                    alert("No course added yet!");
                } else {
                    let text = view_course_html(x);
                    let temp =
                        "<h3>These are the courses offered this semester.</h3>";
                    temp += text;
                    $("#dynamicdivforhomecourse").html(temp);
                }
            },
            error: function () {
                alert("error");
            },
        });
    });

    $(document).on("click", "#addannounce", function (e) {
        let text = get_addann_html();
        $("#dynamicdiv").html(text);
    });

    $(document).on("click", "#annc", function (e) {
        let descrip = $("#desc").val();
        $.ajax({
            url: "/miniproject/ajax.php",
            type: "POST",
            dataType: "json",
            data: { descrip: descrip, action: "add_description" },
            success: function (x) {
                if (x.status == "OK") {
                    alert("Announcement added!");
                    document.location.replace("/miniproject/faculty_home.php");
                } else {
                    alert(x.status);
                }
            },
            error: function () {
                alert("error");
            },
        });
    });

    $(document).on("click", "#viewannounce", function (e) {
        $.ajax({
            url: "/miniproject/ajax.php",
            type: "POST",
            dataType: "json",
            data: { action: "view_announcement" },
            success: function (x) {
                if (x.length == 0) {
                    alert("No announcements yet!");
                } else {
                    let text = view_announcement_html(x);
                    $("#dynamicdiv").html(text);
                }
            },
            error: function () {
                alert("error");
            },
        });
    });

    $(document).on("click", "#viewannouncestud", function (e) {
        $.ajax({
            url: "/miniproject/ajax.php",
            type: "POST",
            dataType: "json",
            data: { action: "view_announcement" },
            success: function (x) {
                if (x.length == 0) {
                    alert("No announcements yet!");
                } else {
                    let text = view_announcement_as_student_html(x);
                    $("#dynamicdiv").html(text);
                }
            },
            error: function () {
                alert("error");
            },
        });
    });

    $(document).on("click", "#clearannc", function (e) {
        $.ajax({
            url: "/miniproject/ajax.php",
            type: "POST",
            dataType: "json",
            data: { action: "clear_announcement" },
            success: function (x) {
                if (x.status == "OK") {
                    alert("Announcement cleared!");
                    document.location.replace("/miniproject/faculty_home.php");
                } else {
                    alert(x.status);
                }
            },
            error: function () {
                alert("error");
            },
        });
    });

    $(document).on("click", "#cexam", function (e) {
        let text = create_exam_html();
        $("#dynamicdiv").html(text);
    });

    $(document).on("click", "#gform", function (e) {
        window.open("https://docs.google.com/forms/u/0/", "_blank");
    });

    $(document).on("click", "#formsubmit", function (e) {
        let cid = $("#cid").val();
        let link = $("#formlink").val();
        let exam_type = $("#exam_type").val();
        $.ajax({
            url: "/miniproject/ajax.php",
            type: "POST",
            dataType: "json",
            data: {
                cid: cid,
                link: link,
                exam_type: exam_type,
                action: "add_question_link",
            },
            success: function (x) {
                if (x.status == "OK") {
                    alert("Exam Created!");
                    document.location.replace("/miniproject/faculty_home.php");
                } else {
                    alert(x.status);
                }
            },
            error: function () {
                alert("error");
            },
        });
    });

    $(document).on("click", "#pubres", function (e) {
        $.ajax({
            url: "/miniproject/ajax.php",
            type: "POST",
            dataType: "json",
            data: { action: "view_student" },
            success: function (x) {
                if (x.length == 0) {
                    alert("No students added yet!");
                } else {
                    let text = publish_result(x);
                    $("#dynamicdiv").html(text);
                }
            },
            error: function () {
                alert("error");
            },
        });
    });

    $(document).on("click", "#ressubmit", function (e) {
        let i = 0;
        let cid = $("#cid").val();
        let exam_type = $("#exam_type").val();
        $.ajax({
            url: "/miniproject/ajax.php",
            type: "POST",
            dataType: "json",
            data: { action: "view_student" },
            success: function (x) {
                while (i < x.length) {
                    let sid = x[i]["sid"];
                    let marks = $("#marks" + i + "").val();
                    $.ajax({
                        url: "/miniproject/ajax.php",
                        type: "POST",
                        dataType: "json",
                        data: {
                            cid: cid,
                            sid: sid,
                            exam_type : exam_type,
                            marks: marks,
                            action: "add_marks",
                        },
                    });
                    i++;
                }
                alert("Result Published!");
            },
            error: function () {
                alert("error");
            },
        });
    });

    $(document).on("click", "#takeexam", function (e) {
        $.ajax({
            url: "/miniproject/ajax.php",
            type: "POST",
            dataType: "json",
            data: { action: "view_exams" },
            success: function (x) {
                if (x.length == 0) {
                    alert("No exams yet!");
                } else {
                    let text = view_exam_html(x);
                    $("#dynamicdiv").html(text);
                }
            },
            error: function () {
                alert("error");
            },
        });
    });

    $(document).on("click", "#viewexam", function (e) {
        $.ajax({
            url: "/miniproject/ajax.php",
            type: "POST",
            dataType: "json",
            data: { action: "view_exams" },
            success: function (x) {
                if (x.length == 0) {
                    alert("No exams yet!");
                } else {
                    let text = view_exam_faculty_html(x);
                    $("#dynamicdiv").html(text);
                }
            },
            error: function () {
                alert("error");
            },
        });
    });

    $(document).on("click", "#getresult", function (e) {
        $.ajax({
            url: "/miniproject/ajax.php",
            type: "POST",
            dataType: "json",
            data: { action: "view_result" },
            success: function (x) {
                if (x.length == 0) {
                    alert("No result were published yet!");
                } else {
                    let text = view_result_html(x);
                    $("#dynamicdiv").html(text);
                }
            },
            error: function () {
                alert("error");
            },
        });
    });

});
