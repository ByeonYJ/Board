package com.gms.web.grade;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class GradeController {
	private static final Logger logger = LoggerFactory.getLogger(GradeController.class);
	@RequestMapping("/get/grade/list")
	public String gradeDelete() {
		logger.info("GradeController::::: gradeUpdate {}","진입");
		return "auth:grade/grade_list.tiles";
	}
}