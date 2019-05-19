
<html>
    <head>
        <meta charset="UTF-8">
        <title>Mood Slider</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
       <link rel="stylesheet" href="style.css">
       <script src="slider.js" type="text/javascript"></script>
       <link href="https://fonts.googleapis.com/css?family=Crimson+Text|Montserrat" rel="stylesheet">
    </head>
    <body style='font-family:"Montserrat", sans-serif; '>
   <!-- Navigation -->
        <nav class="navbar navbar-expand-sm navbar-light mb-5" style="background-color: #2575a8">
        <div class="navbar-brand card" style="width: 10rem;" >
            <img class="card-img" src="images/logo.jpg">
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-column " id="navbarCollapse" >
            <ul class="navbar-nav" >
                <li class="nav-item active" style="margin-right:200">
                    <h4 style="color:white">Movies for every mood</h4>
                </li>               
            </ul>
            <ul class="navbar-nav mr-auto mb-1" style="color: #A9A9A9">
                <li class="nav-item">
                    <a class="nav-link" href="index.php" style="color:white;">Moodslider</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="?pagetoload=ContentUploadView" style="color:white">Upload Content</a>
                </li>
            </ul>
            </div>
</nav>
   <div class="container-fluid">
       <br>
       <?php include_once 'utils/navigator.php'; ?>
   </div>        
    </body>
</html>
