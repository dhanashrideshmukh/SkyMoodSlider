<?php
if (isset($_GET['pagetoload'])) {
    $pagetoload = $_GET['pagetoload'];
} else {
    $pagetoload = 'SliderPage';
}
require_once 'MoodSliderHome.php';
?>

