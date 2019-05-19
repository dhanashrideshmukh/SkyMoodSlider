<!DOCTYPE html>
<html>
<body>

<form action="?pagetoload=upload" method="post" enctype="multipart/form-data">
    Select file to upload:<br>
    <input  type="hidden" name="MAX_FILE_SIZE" value="10000000" />
    <input type="file" name="fileToUpload" id="fileToUpload">
    <input type="submit" value="Upload File" name="submit">
</form>

</body>
</html>