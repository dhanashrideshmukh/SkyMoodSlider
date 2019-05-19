<?php

$pagesArray = ['SliderPage', 'ContentUploadView', 'upload'];
if (in_array($pagetoload, $pagesArray)){
    gotopage($pagetoload);
}


function gotopage($pagetoload){
    
    include_once "views/".$pagetoload.".php";
}

