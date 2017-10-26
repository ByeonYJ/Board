package com.gms.web.auth;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.MemberService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@Controller 
@SessionAttributes("user")
@RequestMapping("/auth") /*witch case 구문이 내부적으로 가지고 있다 */
public class AuthController {
	/*log를 찍는것 이다 */
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	@Autowired MemberService service;
	@Autowired MemberDTO bean;
	@Autowired CommandDTO cmd;
	@RequestMapping ("/login_view")
	public String goLogin() {
		logger.info("AuthController!::::: goLogin {}","진입" );
	/*	model.addAttribute("test","test"); request.setAttribute("test","test");*/
		/*model.addAttribute(model);*/
		return "public:common/login.tiles";
	}
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(Model model,@RequestParam("id") String id,
			@RequestParam("password") String password
			) {
		logger.info("## id :"+id);
		logger.info("## password :"+password);
		cmd.setSearch(id);
		cmd.setColumn(password);
		Map<String,Object> map=service.login(cmd);
		if(map.get("message").equals("succes")) {
		model.addAttribute("user", map.get("user"));
		}
		model.addAttribute("message", map.get("message"));
		return String.valueOf(map.get("page"));
	}
	@RequestMapping("/go_main")
	public String goMain(){
		logger.info("AuthController!:::::login-- {}","진입" );
		return "public:common/main.tiles";
	}
	@RequestMapping("/go_login")
	public String gogoLogin(){
		logger.info("AuthController!:::::login-- {}","진입" );
		return "public:common/login.tiles";
	}
}