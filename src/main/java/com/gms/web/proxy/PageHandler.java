package com.gms.web.proxy;
import org.springframework.stereotype.Component;
import com.gms.web.command.CommandDTO;
@Component
public class PageHandler {
	// int를 객체로 바꿔서 사용
	public static CommandDTO attr(PageProxy pxy) {
		/* 전부 내장된 객체이다 , 보안이 강화 된다 */
		CommandDTO cmd = new CommandDTO();

		if (pxy.getPageNumber() <= pxy.getTheNumberOfRows() / pxy.getPageSize() + 1) {
			if (pxy.getPageNumber() == 1) {
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getPageSize()));
			} else {
				cmd.setStartRow(String.valueOf((pxy.getPageNumber() - 1) * pxy.getPageSize() + 1));
				cmd.setEndRow(String.valueOf(pxy.getPageNumber() * pxy.getPageSize()));
			}
		}
		return cmd;
	}
}