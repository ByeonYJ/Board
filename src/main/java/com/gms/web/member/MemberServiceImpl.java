package com.gms.web.member ;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.grade.SubjectDTO;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.MemberService;
@Service
public class MemberServiceImpl implements MemberService {
	@Autowired MemberMapper mapper;
	@Autowired MemberDTO member;
	@Autowired CommandDTO cmd;
	@Autowired MemberService service;
    @Autowired MajorDTO major;
    @Autowired GradeMapper gMapper;
   @Override
   public Map<String,Object> login(CommandDTO cmd) {
      System.out.println("MemberServiceImpl login entered!!!!");
      Map<String,Object> map=new HashMap<>();
      member=mapper.login(cmd);
      String page,message;
      if(member!=null) {
    	  if(cmd.getColumn().equals(member.getPassword())) {
    		  message="success";
    		  page="auth:common/main.tiles";
    	  }else {
    		  message="비밀번호가 틀립니다";
    		  page="public:common/login.tiles";
    	  }
      }
      else {
    	  message="ID가 존재하지 않습니다";
    	  page="public:common/join.tiles";
      }
      map.put("message", message);
      map.put("page", page);
      map.put("user", member);
      return map;
   }
   @Override @Transactional
   public int addMember(Map<?,?>map) {
    int  re= 0;
    member=(MemberDTO) map.get("member");
    major=(MajorDTO) map.get("major");
    @SuppressWarnings("unchecked")
    List<MajorDTO> list=(List<MajorDTO>) map.get("list");
    System.out.println("Id@@@@@@@@:"+member.getId());
    System.out.println("list@@@@@@@@:"+list);
    mapper.insertMember(member);
    gMapper.insertMajor(list);
        return re;
   }

   @Override
   public String count() {
	   String count = mapper.count();
	   return count;
   }

   @Override
   public List<?> list(CommandDTO cmd) {
	   return mapper.selectAll(cmd); // ArrayList가 된다
   }

   @Override
   public StudentDTO findById(CommandDTO cmd) {
      StudentDTO stu = new StudentDTO();
      /*stu = dao.selectById(cmd);*/
      return stu;
   }

   @Override
   public List<?> findByName(CommandDTO cmd) {
      System.out.println("findByName:: "+cmd.getSearch()+"::");
      return mapper.selectByName(cmd);
   }

   @Override
   public String modifiyProfile(MemberDTO bean) {
      String result = "";
      // findById(bean.getPw()).setPw(bean.getPw());
      CommandDTO cmd=new CommandDTO();
      cmd.setSearch(bean.getId());
      /*MemberDTO mem =dao.login(cmd);
      if (!bean.getName().equals("")) {
         mem.setName(bean.getName());
      }
      if (!bean.getPw().equals("")) {
         mem.setPw(bean.getPw());
      }
      if (!bean.getSsn().equals("")) {
         mem.setSsn(bean.getSsn());
      }
      System.out.println("serviceImpl*****" + mem);
*/      return result;
   }


   @Override
   public String removeUser(CommandDTO cmd) {
      String removeResult = "";


      // list.get(i)=null;
      // count--;
      return removeResult;
   }


}