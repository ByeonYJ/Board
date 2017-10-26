<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<header>
</header>
<div class="row">
  <div class="col-lg-4">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search for..." id="searchName" name="searchName">
      <span class="input-group-btn">
        <button id="search_button" class="btn btn-default" type="submit" onclick="app.controller.searchName()">Search</button>
      </span>
    </div><!-- /input-group -->
  </div><!-- /.col-lg-6 -->
</div><!-- /.row -->
<div style="height: 40; width: 300px;"></div>
<div id="container">
	회원수 ${count}
</div>
<!--id, pw, ssn,name,regedate,email,major,subject-->
<table id="member_list_tab">
	<tr>
		<th style="width: 10%;">NO</th>
		<th style="width: 10%;">ID</th>
		<th style="width: 10%;">NAME</th>
		<th style="width: 20%;">EMAIL</th>
		<th style="width: 10%;">SUBJECT</th>
		<th style="width: 10%;">PHONE NO</th>
		<th style="width: 15%;">REGDATE</th>
		<th style="width: 15%;">수정/삭제</th>
	</tr>
	<c:forEach var="i" items="${list}">
	<tr>
		<td style="width: 10%;">${i.num} <%-- <fmt:formatnumber value="${i.num}" pattern="."/> --%></td>
		<td style="width: 10%;">${i.id}</td>
		<td style="width: 10%;"><a onclick="controller.detailStudent('${i.id}')">${i.name}</a></td>
		<td style="width: 20%;">${i.email}</td>
		<td style="width: 10%;">${i.subjects}</td>
		<td style="width: 10%;">${i.phone}</td>
		<td style="width: 15%;">${i.regdate}</td>
		<td style="width: 15%;"><a onclick="updateStudent('${i.id}')">수정</a>
		<a onclick="app.member.deleteStudent('${i.id}')">삭제</a></td>
	</tr>
	</c:forEach>
</table>
	<nav aria-label="Page navigation" style="width:450px; margin: 0 auto;">
	  <ul class="pagination">
	  <c:if test="${prevBlock gt 0 }">
	   <li><a onclick="app.member.list('1')"><span class="glyphicon glyphicon-step-backward " aria-hidden="true"></span></a></li>
	    <li>
	      <a onclick="app.member.list('${startPage-1}')" aria-label="Previous">
	        <span aria-hidden="true">&laquo;</span>
	      </a>
	    </li>
	  </c:if>
	    <c:forEach varStatus="i" begin="${startPage}" end="${endPage}" step="1">
	      <c:choose>
		    <c:when test="${i.index eq pageNumber}">
	       <li class="active"><a href="#">${i.index}</a></li>
		    </c:when>
		      <c:otherwise>
		      <li><a onclick="app.member.list('${i.index}')">${i.index}</a></li>
			  </c:otherwise>
		</c:choose>
	    </c:forEach>
    <!-- Next -->
      <c:if test="${nextBlock le theNumberOfPages}">       
         <li><a onclick="app.member.list('${endPage+1}')" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
         <li><a onclick="app.member.list('${theNumberOfPages}')" href="#">
         <span class="glyphicon glyphicon-fast-forward" aria-hidden="true"></span></a></li>
      </c:if>
	  </ul>
	</nav>
</div>