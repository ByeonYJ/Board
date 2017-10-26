package com.gms.web.board;
import java.io.File;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.gms.web.command.Command;
import com.gms.web.command.CommandDTO;
import com.gms.web.command.ResultMap;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.StudentDTO;
import com.gms.web.service.IDeleteService;
import com.gms.web.service.IGetService;
import com.gms.web.service.IListService;
import com.gms.web.service.IPostService;
@RestController
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@Autowired MemberMapper memberMapper;
	@Autowired BoardMapper boardMapper;
	@Autowired GradeMapper gradeMapper;
	@Autowired Command cmd;
	@Autowired CommandDTO cmdDto;
	@Autowired StudentDTO studDto;
	
	
	@RequestMapping(value="" , method=RequestMethod.GET)
	public @ResponseBody Map<?,?> post(MultipartHttpServletRequest req,
			HttpSession session)throws Exception{
		logger.info("BoardController BoardList {}","진입");
		Map<String, Object> map=new HashMap<>();
		Iterator<String> it=req.getFileNames();
		if(it.hasNext()){
			MultipartFile file=req.getFile(it.next());
			logger.info("file upload result {}","success");
			logger.info("file upload name {}",file.getName());
			logger.info("file upload size {}",file.getSize());
			logger.info("file upload exist {}",file.isEmpty());
			logger.info("file upload origin {}",file.getOriginalFilename());
			String root = req.getSession().getAttribute("storage").toString();
			String path="resources/img/";
			String fileName=file.getOriginalFilename();
			File dest = new File(root+path+fileName);
			file.transferTo(dest);
			map.put("result","success");
			
		}
		return map;
	}
	@RequestMapping("/list/{cate}")//board의 list 페이지를 가져와라
	public @ResponseBody Map<?,?> boardList(@PathVariable String cate) {//@RestController가 있어야 @ResponseBody를 사용할 수 있다, 제이슨에서 리턴한것을 Map으로 받는다
		                                         					    //JSON에서 리턴을 해서 던져주면 @ResponseBody에서 리턴타입을 Map을 써주었기 때문에 Map으로 담겨진다
		logger.info("BoardController BoardList {}","진입");
		Map<String,Object> map=new HashMap<>();
		System.out.println("board/list 에 들어옴");
		IListService listService=null;
		IGetService countService=null;
		System.out.println("cate@@@"+cate);
		switch(cate) {
		case"board":
		    listService=(x)-> {
				return boardMapper.selectList(cmd);
			};
			countService=(x)->{
				return boardMapper.count(cmd);
			};
			ResultMap r=(ResultMap) countService.execute(cmd);
			System.out.println("rrr "+r);
			map.put("total", r);
			map.put("list", listService.execute(cmd));
			break;
		case"grade":
			listService=(x)-> {
				return gradeMapper.selectList(cmd);
			};
			map.put("list", listService.execute(cmd)); 
			break;
		}
			return map;
	}
	@RequestMapping("/get/{cate}/{seq}")
	public @ResponseBody Map<?,?> get(
			@PathVariable String cate,
			@PathVariable String seq){
			IGetService service = new IGetService() {
			@Override
			public Object execute(Object o) {
				return null;
			}
		};
		cmd.setAction(seq);//아무 컬럼이름에 넣어도 상관이 없다
		service.execute(cmd);
		Map<String,Object> map=new HashMap<>();
		map.put("test", "데이터 넘어감");
		service=(x)->{
			return boardMapper.selectOne(cmd);
		};
		map.put("detail",service.execute(cmd));
		System.out.println("가져온 값"+map.get("detail"));
		return map;
	}
	@RequestMapping(value="/put/articles",method=RequestMethod.POST,consumes="application/json")//없으면 JSON 방식으로 쓰겠다
	public @ResponseBody Map<?,?> put(@RequestBody Article art){//meta.js의 값이 art에 모두 담긴다
		Map<String,Object> map =new HashMap<>();
		map.put("msg", art.getArticleSeq());
		IPostService update=null;//execute때문에 가지고옴
		cmd.setAction(String.valueOf(art.getArticleSeq()));
		cmd.setColumn(art.getTitle());
		cmd.setDir(art.getContent());
		System.out.println("시퀀스"+art.getArticleSeq());
		System.out.println("타이틀"+art.getTitle());
			update=(x)->{//람다를 사용하지 않으면 oop때의 impl이 있어야한다
				boardMapper.update(cmd);//cmd값을 담아서 boardMapper로 보낸다
			};//void라서 리턴이 없다
			update.execute(cmd);
		System.out.println("map"+art.getArticleSeq());
		return map;
	}
	@RequestMapping(value="/delete/articles",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<?,?> delete(@RequestBody Article art){
		Map<String,Object> map =new HashMap<>();
		IDeleteService delete=null;
		IGetService service=null;
		cmdDto.setAction(art.getId());
		service =(x)->{
			return memberMapper.selectById(cmdDto);
		};
		
		delete.execute(cmd);
		return map;
	}
	
	
}