package com.gms.web.complex;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import com.gms.web.products.pathDTO;
@Component @Lazy
public class PathFactory {
	public static pathDTO create() {
		pathDTO path=new pathDTO();
		path.setCtx(
		((ServletRequestAttributes)RequestContextHolder
				.currentRequestAttributes())
		.getRequest()
		.getContextPath());
		path.setImg(path.getCtx()+"/resources/img");
		path.setCss(path.getCtx()+"/resources/css");
		path.setJs(path.getCtx()+"/resources/js");
		return path;
	}
}