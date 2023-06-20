<?php
$rootpath=$_SERVER["DOCUMENT_ROOT"];
require_once $rootpath."/miniproject/dbhandler.php";
$dbo = new ExamDetails();

$action=$_POST["action"];

if($action == "login") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $login_as = $_POST["login_as"];
    $status = "";

    if($login_as == "Faculty") {
        $id = $dbo->validate_faculty($username, $password);
        if($id==-1)
            $status="ERROR";
        else if($id == 0){
            $status="Invalid_Password";
        }
        else if($id == 1){
            $status="OK_FACULTY";
        }
        $rv = array("status"=>$status);

        echo json_encode($rv);
        exit;
    }

    if($login_as == "Student") {
        $id = $dbo->validate_student($username, $password);
        if($id==-1)
            $status="ERROR";
        else if($id == 0){
            $status="Invalid_Password";
        }
        else if($id == 1){
            $status="OK_STUDENT";
        }
        $rv = array("status"=>$status);

        echo json_encode($rv);
        exit;
    }
}

if($action == "add_student") {
    $sid = $_POST["sid"];
    $sname = $_POST["sname"];
    $spassword = $_POST["spassword"];
    $status = "";

    $id = $dbo->insert_student($sid, $sname, $spassword);
    if($id == -1)
        $status = "ERROR";
    else
        $status = "OK";

    $rv = array("status"=>$status);
    echo json_encode($rv);
    exit;
}

if($action == "add_course") {
    $cid = $_POST["cid"];
    $cname = $_POST["cname"];
    $credit = $_POST["credit"];
    $status = "";

    $id = $dbo->insert_course($cid, $cname, $credit);
    if($id == -1)
        $status = "ERROR";
    else
        $status = "OK";

    $rv = array("status"=>$status);
    echo json_encode($rv);
    exit;
}

if($action == "view_student") {

    $rtable = $dbo->get_student();

    echo json_encode($rtable);
    exit;
}

if($action == "view_course") {

    $rtable = $dbo->get_course();

    echo json_encode($rtable);
    exit;
}

if($action == "add_description") {
    $descrip = $_POST["descrip"];
    $status = "";

    $id = $dbo->insert_announce($descrip);
    if($id == -1)
        $status = "ERROR";
    else
        $status = "OK";

    $rv = array("status"=>$status);
    echo json_encode($rv);
    exit;
}

if($action == "view_announcement") {

    $rtable = $dbo->get_announcement();

    echo json_encode($rtable);
    exit;
}

if($action == "clear_announcement") {

    $id = $dbo->clear_announcement();
    
    if($id == -1)
        $status = "ERROR";
    else
        $status = "OK";
    
    $rv = array("status"=>$status);
    echo json_encode($rv);
    exit;
}

if($action == "add_question_link") {
    $cid = $_POST["cid"];
    $link = $_POST["link"];
    $exam_type = $_POST["exam_type"];
    $status = "";

    $id = $dbo->insert_question_link($cid, $exam_type, $link);
    if($id == -1)
        $status = "ERROR";
    else
        $status = "OK";

    $rv = array("status"=>$status);
    echo json_encode($rv);
    exit;
}

if($action == "add_marks") {
    $cid = $_POST["cid"];
    $exam_type = $_POST["exam_type"];
    $sid = $_POST["sid"];
    $marks = $_POST["marks"];

    $status = "";

    $id = $dbo->insert_marks($cid, $sid, $exam_type, $marks);
    if($id == -1)
        $status = "ERROR";
    else
        $status = "OK";

    $rv = array("status"=>$status);
    echo json_encode($rv);
    exit;
}

if($action == "view_exams") {

    $rtable = $dbo->get_exam();

    echo json_encode($rtable);
    exit;
}

if($action == "view_exam_subject") {

    $rtable = $dbo->get_exam_subject();

    echo json_encode($rtable);
    exit;
}

if($action == "view_result") {

    $rtable = $dbo->get_result();

    echo json_encode($rtable);
    exit;
}

if($action == "subject_result") {

    $cid = $_POST["cid"];
    $exam_type = $_POST["exam_type"];

    $rtable = $dbo->get_specific_result($cid, $exam_type);

    echo json_encode($rtable);
    exit;
}

if($action == "delete_exam") {
    $cid = $_POST["cid"];
    $exam_type = $_POST["exam_type"];

    $status = "";

    $id = $dbo->delete_exam($cid, $exam_type);
    if($id == -1)
        $status = "ERROR";
    else
        $status = "OK";

    $rv = array("status"=>$status);
    echo json_encode($rv);
    exit;
}

?>
