package com.gms.web.mapper;
import java.util.List;
import org.springframework.stereotype.Repository;
import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;
@Repository 
public interface MemberMapper {
	public int insertMember(MemberDTO member);
	public List<?> selectAll(CommandDTO cmd);
	public String count();
	public StudentDTO selectById(CommandDTO cmd);
	public List<?> selectByName(CommandDTO cmd);
	public List<?> search(CommandDTO cmd);
	public int updateProfile(MemberDTO bean);
	public int deleteUser(CommandDTO cmd);
	public MemberDTO login(CommandDTO cmd);
}