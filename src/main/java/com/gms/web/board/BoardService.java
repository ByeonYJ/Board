package com.gms.web.board;
import java.util.List;
import org.springframework.stereotype.Component;
@Component
public interface BoardService {
  /*public String addArticle(ArticleDTO bean);
	public String countArticles();
	public List<ArticleDTO> listArticles(); 
	public ArticleDTO findBySeq(int seqNo);
	public List<ArticleDTO> findById(String id); 
	public String updateArticle(ArticleDTO update);
	public String deleteArticle(int seq);*/
	public Object post(Object o);
	public List<?> list(Object o);//아래의 get과 이름이 동일하므로 get을 list로 바꿔준다 
	public Object get(Object o);
	public void put(Object o);
	public void deleteArticle(Object o);
}
