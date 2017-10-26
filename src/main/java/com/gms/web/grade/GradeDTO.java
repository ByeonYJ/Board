package com.gms.web.grade;
import org.springframework.stereotype.Component;
@Component
public class GradeDTO {
	private String gradeSeq,score,examDate,subjId,id;
	public String getGradeSeq() {
		return gradeSeq;
	}
	public void setGradeSeq(String gradeSeq) {
		this.gradeSeq = gradeSeq;
	}
	public String getScore() {
		return score;
	}
	public void setScore(String score) {
		this.score = score;
	}
	public String getExamDate() {
		return examDate;
	}
	public void setExamDate(String examDate) {
		this.examDate = examDate;
	}
	public String getSubjId() {
		return subjId;
	}
	public void setSubjId(String subjId) {
		this.subjId = subjId;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	@Override
	public String toString() {
		return "GradeBean [gradeSeq=" + gradeSeq + ", score=" + score + ", examDate=" + examDate + ", subjId=" + subjId
				+ ", id=" + id + "]";
	}
}