<?php
$rootpath=$_SERVER["DOCUMENT_ROOT"];
require_once $rootpath."/miniproject/dbconnect.php";


class ExamDetails
{    
    public function validate_faculty($username, $password) {
        $id = -1;
        $dbo = new DbConnect();
        $cmd = "select password from faculty where username=:username";
        $templet = $dbo->conn->prepare($cmd);
        try{
            $templet->execute([":username"=>$username]);
            if($templet->rowCount()>0)
            {        
                $rtable = $templet->fetchAll(PDO::FETCH_ASSOC);
                $temp = $rtable[0]['password'];
            }
        } 
        catch(Exception $e) {
            $id = -1;
        }
        if($temp == $password)
            $id = 1;
        else
            $id = 0;
        return $id;
    }

    public function validate_student($sid, $spassword) {
        $id = -1;
        $dbo = new DbConnect();
        $cmd = "select sname,spassword from student where sid=:sid";
        $templet = $dbo->conn->prepare($cmd);
        try{
            $templet->execute([":sid"=>$sid]);
            if($templet->rowCount()>0)
            {        
                $rtable = $templet->fetchAll(PDO::FETCH_ASSOC);
                $temp = $rtable[0]['spassword'];
            }
        } 
        catch(Exception $e) {
            $id = -1;
        }
        if($temp == $spassword)
            $id = 1;
        else
            $id = 0;
        return $id;
    }

    public function insert_student($sid, $sname, $spassword) {
        $id = -1;
        $dbo = new DbConnect();
        $cmd = "INSERT INTO student (sid, sname, spassword) VALUES (:sid,:sname,:spassword)";
        $templet = $dbo->conn->prepare($cmd);
        try{
            $templet->execute([":sid"=>$sid,":sname"=>$sname,":spassword"=>$spassword]);
            $id = 1;
        } 
        catch(Exception $e) {
            $id = -1;
        }
        return $id;
    }

    public function insert_course($cid, $cname, $credit) {
        $id = -1;
        $dbo = new DbConnect();
        $cmd = "INSERT INTO course (cid, cname, credit) VALUES (:cid,:cname,:credit)";
        $templet = $dbo->conn->prepare($cmd);
        try{
            $templet->execute([":cid"=>$cid,":cname"=>$cname,":credit"=>$credit]);
            $id = 1;
        } 
        catch(Exception $e) {
            $id = -1;
        }
        return $id;
    }

    public function get_student() {
        $dbo = new DbConnect();
        $cmd = "SELECT * FROM student";
        $templet = $dbo->conn->prepare($cmd);
        $templet->execute();
        if($templet->rowCount()>=0)
            $rtable = $templet->fetchAll(PDO::FETCH_ASSOC);
        return $rtable;
    }

    public function get_course() {
        $dbo = new DbConnect();
        $cmd = "SELECT * FROM course";
        $templet = $dbo->conn->prepare($cmd);
        $templet->execute();
        if($templet->rowCount()>=0)
            $rtable = $templet->fetchAll(PDO::FETCH_ASSOC);
        return $rtable;
    }

    public function insert_announce($topic) {
        $id = -1;
        $dbo = new DbConnect();
        $cmd = "INSERT INTO announce (topic) VALUES (:topic)";
        $templet = $dbo->conn->prepare($cmd);
        try{
            $templet->execute([":topic"=>$topic]);
            $id = 1;
        } 
        catch(Exception $e) {
            $id = -1;
        }
        return $id;
    }

    public function get_announcement() {
        $dbo = new DbConnect();
        $cmd = "SELECT * FROM announce";
        $templet = $dbo->conn->prepare($cmd);
        $templet->execute();
        if($templet->rowCount()>=0)
            $rtable = $templet->fetchAll(PDO::FETCH_ASSOC);
        return $rtable;
    }

    public function clear_announcement() {
        $dbo = new DbConnect();
        $cmd = "DELETE FROM announce";
        $templet = $dbo->conn->prepare($cmd);
        try{
            $templet->execute();
            $id = 1;
        } 
        catch(Exception $e) {
            $id = -1;
        }
        return $id;
    }

    public function insert_question_link($cid, $exam_type, $link) {
        $id = -1;
        $dbo = new DbConnect();
        $cmd = "INSERT INTO question (cid, examtype, link) VALUES (:cid,:examtype,:link)";
        $templet = $dbo->conn->prepare($cmd);
        try{
            $templet->execute([":cid"=>$cid,":examtype"=>$exam_type,":link"=>$link]);
            $id = 1;
        } 
        catch(Exception $e) {
            $id = -1;
        }
        return $id;
    }

    public function insert_marks($cid, $sid, $exam_type, $marks) {
        $id = -1;
        $dbo = new DbConnect();
        $cmd = "INSERT INTO result (cid, examtype, sid, marks) VALUES (:cid,:examtype,:sid,:marks)";
        $templet = $dbo->conn->prepare($cmd);
        try{
            $templet->execute([":cid"=>$cid,":examtype"=>$exam_type,":sid"=>$sid,":marks"=>$marks]);
            $id = 1;
        } 
        catch(Exception $e) {
            $id = -1;
        }
        return $id;
    }

    public function get_exam() {
        $dbo = new DbConnect();
        $cmd = "SELECT course.cid,cname,examtype,link FROM `question`,`course` WHERE course.cid=question.cid;";
        $templet = $dbo->conn->prepare($cmd);
        $templet->execute();
        if($templet->rowCount()>=0)
            $rtable = $templet->fetchAll(PDO::FETCH_ASSOC);
        return $rtable;
    }

    public function get_result() {
        $dbo = new DbConnect();
        $cmd = "SELECT DISTINCT result.cid, course.cname, result.examtype FROM result, course WHERE result.cid=course.cid;";
        $templet = $dbo->conn->prepare($cmd);
        $templet->execute();
        if($templet->rowCount()>=0)
            $rtable = $templet->fetchAll(PDO::FETCH_ASSOC);
        return $rtable;
    }

    public function get_specific_result($cid, $exam_type) {
        $dbo = new DbConnect();
        $cmd = "SELECT student.sid, student.sname, result.marks FROM `course`,`result`,`student` WHERE course.cid=result.cid AND result.sid=student.sid AND course.cid=:cid AND result.examtype=:exam_type;";
        $templet = $dbo->conn->prepare($cmd);
        $templet->execute([":cid"=>$cid,":exam_type"=>$exam_type]);
        if($templet->rowCount()>=0)
            $rtable = $templet->fetchAll(PDO::FETCH_ASSOC);
        return $rtable;
    }

    public function delete_exam($cid, $exam_type) {
        $dbo = new DbConnect();
        $cmd = "DELETE FROM `question` WHERE cid=:cid AND examtype=:examtype;";
        $templet = $dbo->conn->prepare($cmd);
        try{
            $templet->execute([":cid"=>$cid,":examtype"=>$exam_type]);
            $id = 1;
        } 
        catch(Exception $e) {
            $id = -1;
        }
        return $id;
    }
}


?>