package com.gms.web.auth;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import com.gms.web.member.MemberService;
@Controller
@RequestMapping("/common")
public class CommonController {
	private static final Logger logger = LoggerFactory.getLogger(CommonController.class);
	@RequestMapping("/path/{directory}/{page}")
	public String commonAdd(@PathVariable String directory, @PathVariable String page) {
		logger.info("CommonController {}", "진입" );
		return String.format("auth:%s/%s.tiles",directory,page);
	}
}
