package com.gms.web.auth;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import com.gms.web.complex.PathFactory;
@Controller
@SessionAttributes("path")
public class HomeController {
   private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
   @RequestMapping("/")
   public String home(Model model) {
      logger.info("Welcome home! The client locale is {}.", "진입" );
      model.addAttribute("serverTime",new SimpleDateFormat("yy년 MM월 dd일 E요일").format(new Date()) );
      model.addAttribute("path", PathFactory.create());
      return "index";
   }
}