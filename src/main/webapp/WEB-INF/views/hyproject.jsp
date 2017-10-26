<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8" />
   <title>index</title>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="${path.js}/app.js"></script>
  <script src="${path.js}/chobongki.js"></script>
  <script src="${path.js}/template.js"></script>
   <link rel="stylesheet" href="${path.css}/cho.css" />
   </head>
   <body >
   <div id="content" style="width: 100%;margin-top: 200px;">
    <form id="frm" name="frm" action="" enctype="application/x-www-form-urlencoded">
    <img id="" src="${path.img}/file_icon.png" style="display: block;margin-left: auto;margin-right: auto;" alt="" />
    <div style="height: 50px;"></div>
    <h3 id="" style="width: 800px;margin: 0 auto;">
    Attach up to 10 files at a time.
    Total file size may not exceed 200MB.
    </h3>
    <div style="height: 30px;"></div>
    <div id="" class="input-group" style="width: 500px;margin: 0 auto;">
    	<input id="file" name="file" class="form-control" type="file"  aria-describedby="basic-addon2"/>
    	<span id="basic-addon2" class="input-group-addon">Choose file</span>
    </div>
    <div style="height: 30px;"></div>
    <div id="" class="form-group" style="width: 500px;margin: 0 auto;">
    	<button id="confirm" class="btn btn-default btn-lg" type="submit" style="width: 200px;">Cancle</button>
    	<button id="fileBtn" class="btn btn-success btn-lg" type="submit" style="width: 200px;">Atach files</button>
    </div>
    </form>
   </div>
   </body>
</html>