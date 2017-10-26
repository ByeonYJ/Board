package com.gms.web.member;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.proxy.PageProxy;
@Controller
@SessionAttributes("list")
@RequestMapping({"/member","/student"})
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired MemberService service;
	@Autowired CommandDTO cmd;
	@Autowired PageProxy pxy;
	@Autowired MemberDTO member;
	@Autowired MajorDTO major;
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String memberAdd(
			@ModelAttribute MemberDTO member,
			@RequestParam("subject") List<String> list	
			) {
		logger.info("등록 ID: {}",member.getId());
		logger.info("등록 이름: {}",member.getName());
		logger.info("등록 PW: {}",member.getPassword());
		System.out.println("등록 과목: "+list);
		logger.info("등록 과목: {}",list);
		Map<String,Object>paramMap=new HashMap<>();
		paramMap.put("member", member);
		List<MajorDTO> paramList=new ArrayList<>();
		for(String m:list) {
			major.setId(member.getId());
			major.setSubjId(m);
			major.setTitle(m);
			paramList.add(major);
		}
		System.out.println("+++++++++++"+list);
		paramMap.put("list", paramList);
		service.addMember(paramMap);
		return "auth:member/member_list.tiles";
	}
	@RequestMapping("/member_list/{pageNO}")
	@SuppressWarnings("unchecked")
	public String memberList(@PathVariable int pageNO, Model model) {
		logger.info("MemberController_MemberList {}","진입" );
		pxy.setPageSize(5);
		pxy.setBlockSize(5);
		pxy.setPageNumber(pageNO);
		int count=Integer.parseInt(service.count());
		pxy.setTheNumberOfRows(count);
		int[]result=new int[6];
		int theNumberOfpages=0,
				 startPage=0,
			    endPage=0;
		theNumberOfpages = (pxy.getTheNumberOfRows() % pxy.getPageSize()) == 0 ?
				pxy.getTheNumberOfRows() / pxy.getPageSize()
				: pxy.getTheNumberOfRows() / pxy.getPageSize() + 1;
		startPage = pxy.getPageNumber() - ((pxy.getPageNumber() - 1) % pxy.getBlockSize());
		endPage = (startPage + pxy.getBlockSize() - 1 <= theNumberOfpages)?
				startPage + pxy.getBlockSize() - 1 : theNumberOfpages;
		result[0]=pxy.getPageNumber();
		result[1]=theNumberOfpages;
		result[2]=startPage;
		result[3]=endPage;
		result[4]=(startPage-(theNumberOfpages/pxy.getBlockSize())>0)?1:0;
		result[5]=startPage+pxy.getBlockSize();
		if(pxy.getPageNumber() <= pxy.getTheNumberOfRows()
				/ pxy.getPageSize() + 1) {
			if (pxy.getPageNumber() == 1) {
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getBlockSize()));
			}else {
				cmd.setStartRow(String.valueOf((pxy.getPageNumber() - 1)
												 * pxy.getPageSize() + 1));
				cmd.setEndRow(String.valueOf(
						pxy.getPageNumber() * pxy.getPageSize()));
			}
		}
		List<StudentDTO> list = (List<StudentDTO>) service.list(cmd);
		System.out.println("리스트 결과: "+list);
		pxy.execute(model, result, list);
		//pxy.execute(model, blockHandler, );
		return "auth:member/member_list.tiles";
	}
	@RequestMapping("/member_delete")
	public String memberDelete() {
		logger.info("MemberController_MemberDelete {}","진입" );
		return "auth:member/member_list.tiles";
	}
	@RequestMapping("/search/{search}")
	public String MemberSearch(Model model,@PathVariable String search) {
		cmd.setSearch(search);
		service.findByName(cmd);
		return "";
	}
}