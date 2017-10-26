<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<body>
<div id="wrapper">
<div id="container">
	<img src="${img}/login.jsp" alt="" /><br />
	<mark style="color: red;">8자 이내의 ID</mark><br />
<form id="login_box" name="login_box" >
         <!--do 서블릿  -->
         <fieldset class="form-edit">
            <legend>로그인</legend>
            <span class="login-span">ID</span> 
            <input type="text" id="input_id" name="id" /><br /> <label>Password</label>
            <input type="password"id="input_password" name="password" /><br />
            <br /> 
            <input type="reset" value="CANCEL" />
     		<input type="hidden" name="action" value="login">
            <input type="hidden" name="page" value="main">
            <input type="submit" id="loginBtn" value="로그인" class="submit-pink">
         </fieldset>
      </form>
      <div style="text-align: center;"><h4 style="fond-size: 20px;color: red;">${message}</h4></div>
</div>
	</div>
	<script>
		app.auth.init();
	</script>
</body>
</html>