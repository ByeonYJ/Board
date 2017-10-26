package com.gms.web.products;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;
@Data @Component @Lazy  //레지 필요할때만 움직이는거
public class pathDTO {
		private String ctx,img,js,css;
}
