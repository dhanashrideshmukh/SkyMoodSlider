<?php 
uploadFile();
header("Location: index.php");  //return to home page

function uploadFile() {
    $allowedTypes = ["text/xml"];
        if ($_FILES["fileToUpload"]['error'] == (1 || 2)) {
            trigger_error("File too big!");
            die();
        }
        if (!in_array($_FILES["fileToUpload"]['type'],$allowedTypes)) {
            trigger_error("Handle File Type Not Allowed: " . $_FILES["fileToUpload"]['type']);
            die();
        }
        if ($_FILES["fileToUpload"]['error'] > 0) {
            trigger_error("Handle the error! " . $_FILES["fileToUpload"]['error']);
            die();
            ;
        }
        $tempFile = $_FILES["fileToUpload"]['tmp_name'];

        $destinationFile = 'ContentList.xml';
        
        if (!move_uploaded_file($tempFile, $destinationFile)) {
            trigger_error("Handle Error");
        }        
        
        //Clean up the temp file
        if (file_exists($tempFile)) {
            unlink($tempFile);
            
            
        }
       
    }