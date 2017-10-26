package com.gms.web.grade;
import org.springframework.stereotype.Component;
@Component
public class SubjectDTO {
	private String subjId, title, majorId;
	public String getSubjId() {
		return subjId;
	}
	public void setSubjId(String subjId) {
		this.subjId = subjId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getMajorId() {
		return majorId;
	}
	public void setMajorId(String majorId) {
		this.majorId = majorId;
	}
	@Override
	public String toString() {
		return "SubjectBean [subjId=" + subjId + ", title=" + title + ", majorId=" + majorId + "]";
	}
}