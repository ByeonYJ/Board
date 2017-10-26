package com.gms.web.board;
import java.io.Serializable;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;
@Data @Lazy @Component
public class Article implements Serializable{
	private String id,title, content,regdate;
	private int articleSeq, hitCount;
	@Override
	public String toString() {
		return "ArticleBean [id=" + id + ", title=" + title + ", content=" + content + ", regdate=" + regdate
				+ ", articleSeq=" + articleSeq + ", hitCount=" + hitCount + "]";
	}
}
