/*package com.gms.web.board;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
@Service
public class BoardServiceImpl implements BoardService {
   public static BoardServiceImpl getInstance() {
      return new BoardServiceImpl();
   }
   private BoardServiceImpl(){}
   @Override
   public String addArticle(ArticleDTO bean) {
      String addResult="";
      if(dao.insertArticle(bean).equals("1")){
         addResult="등록이 완료 되었습니다.";
      }else{
         addResult="등록이 실패되었습니다.";
      }
       
      return addResult;
   }
   @Override
   public String countArticles() {
      return null;
   }
   @Override
   public ArticleDTO findBySeq(int seqNo) {
      return null;
   }
   @Override
   public List<ArticleDTO> findById(String id) {
      List<ArticleDTO> findByIdList =new ArrayList<>();
      findByIdList=dao.selectById(id);
      return findByIdList;
   }
   @Override
   public String updateArticle(ArticleDTO update) {
      String updateArticle="";
      updateArticle=(dao.updateArticle(update).equals("1"))?"update success":"update fail";
      return updateArticle;
   }
   @Override
   public String deleteArticle(int seq) {
      String deleteArticle="";
      if(dao.deleteArticle(seq).equals("1")){
         deleteArticle="성공적으로 삭제되었습니다.";
      }else{
         deleteArticle="delete failed";
      }
      return deleteArticle;
   }
   @Override
   public List<ArticleDTO> listArticles() {
      List<ArticleDTO> listArticles= new ArrayList<>();
      listArticles=dao.listArticles();
      return listArticles;
   }
}*/