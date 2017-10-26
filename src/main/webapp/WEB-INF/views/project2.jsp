<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Document</title>
<style type="text/css">
.hotelspic {
display: inline-block;
width: 100%;
height: 300px;
margin: 1%;
}
.picsize{padding-left: 8px !important; padding-right: 8px !important;}
.text-box{padding-top: 8px !important;}
.pic-n-text{width: 100% !important; height: 100% !important; padding-left: 6px !important; padding-right: 6px !important; padding-bottom: 30px !important;}
</style>
</head>
<body>
<div id="container">
<div id="hostels" style="margin:0 auto; width:65%; height:500px;">
<div><h3 style="font-weight: bold;">숙소</h3>
<button style="border: none; background:white;float:right;"><span style="position:fixed; top: 20px">전체보기<i class=" glyphicon glyphicon-menu-right"></i></span></button>
</div>
<div class="hotelspic">
<div >
<div style="width:29%; float:left; margin:2%; text-align: left;">
<table style="width:100%;height: 100%;">
	<tr>
		<td><img class="picsize" src="${path.img}/hostelpic1.png" style="width:100%;height:198px;float: left;"/></td>
	</tr>
	<tr>
		<td><span>₩66,555 White Breeze Pool 1BD<br/>아파트 전체·침대2개</span></td>
	</tr>
</table>
</div>
<div style="width:29%; float:left; margin:2%; text-align: left;">
<table style="width:100%;height: 100%;">
	<tr>
		<td><img class="picsize" src="${path.img}/hostelpic2.png" style="width:300px;height:198px;"/></td>
	</tr>
	<tr>
		<td><span>₩80,533 The best position in Hvar!</br>게스트용 별채 전체·침대 1개</span></td>
	</tr>
</table>
</div>
<div style="width:29%; float:left; margin:2%; text-align: left;">
<table style="width:100%;height: 100%;">
	<tr>
		<td><img class="picsize" src="${path.img}/hostelpic3.png" style="width:300px;height:198px;"/> </td>
	</tr>
	<tr>
		<td><span style="">₩67,989 La Rosa de Ortega...<br/>집 전체·침대 1개</span></td>
	</tr>
</table >
</div>
</div>
</div>
</div>
</div>
<script>

</script>
</body>
</html>