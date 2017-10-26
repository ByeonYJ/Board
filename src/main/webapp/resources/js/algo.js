var series = {
   arithmetic : (s,e) =>{
      var sum = 0;
      var start = s * 1;
      var end = e * 1;
      for (var i = start; i <= end; i++) {
         sum += i;
      }
      return sum;
   },
   switchSeries : ()=>{
      var sum = 0;
      var i=0;
      var sw = 0;
      do{
         i++;
         if(sw==0){
            sum+=i;
            sw=1;
         }else{
            sum-=i;
            sw=0;
         }
      }while(i<100);
      return sum;   
   },
  diffSeries : x=>{
		var i=0,j=0,k=0;
		do {
		i=i+1;
		j=j+i;
		k=k+j;
		}while(i<x*1);
		return k;
  },
  facSeries : x=>{
		var i,k,j;
		i= 1;
		k=1;
		j=1;
		do{
		   i++;
		   j*=i;
		   k+=j;
		}while(i<10)
		return k;
  },
  fiboSeries : x=>{
		// 1+1+2+3+5+8+13+...의 합계
	var a=1,b=1,sum=2,count=2;
	do {
	var c=a+b;
	sum+=c;
	count ++;
	if(count<20) {
		a=b;
		b=c;
	}else {
		return sum;
	}
	}while(true);
	  }
};
var sort={
		selection :(x)=>{
			alert('선택정렬'+x);
			var arr = new Array();
			arr = x;
			alert('선택정렬'+arr.length);
			var temp=0, min=0;
			for(var i=0; i<arr.length-1; i++){
				min = i;
				for(var j=i+1; j<=arr.length-1; j++){
					if(arr[min]*1>arr[j]*1){
						min = j;
					};
				};
				temp = arr[min];
				arr[min]=arr[i];
				arr[i]=temp;
			};
			return arr;
		},
		
		burble : ()=>{
			console.logo('start'+x);
			alert('버블정렬');
			var arr=x;
			var i=0,j=0,k=0;
	         for(i=0;i<x.length;i++){
	        	 for(j=0;j<x.length;j++){
	        		 if(x[i]*1>x[j+1]*1){
	        			 k=x[i];
	        			 x[j]=x[j+1];
	        			 x[j+1]=k;
	        		 }
	        	 }
	         }
	         return arr;
		},
		
		insertion : ()=>{
			console.logo('start'+x);
			alert('삽입정렬');
			var arr=x;
			for(var i=0;i<arr.length;i++){
	        	 for(var j=0;j<arr.length-1;i++){
	        		 if(a>b){
	        			 c=arr[i];
	        			 arr[i]=arr[i+1];
	        			 arr[i+1]=c;
	        		 }
	        	 }
	         }
			return arr;
		},
		
		ranking : (x)=>{
			alert('석차구하기-----> '+x);
	        var arr = new Array();
	        var rank = new Array();
	        arr = x;
	        var temp=0;
	        for(var i=0; i<arr.length; i++){
	           rank[i] = 1;
	        };
	        alert('랭킹-----> '+rank);
	        for(var i=0; i<arr.length; i++){
	           for(var j=0; j<arr.length; j++){
	              if(arr[i]<arr[j]){
	                 rank[i]++;
	              };
	           };
	        };
	        return rank;
		},
		
		binary : ()=>{
			alert('이분검색');
		},
		
		Annexation : ()=>{
			alert('병합');
		},
		
		stack : ()=>{
			alert('스택');
		}
};
var matrix={
		basic : ()=>{
			alert('기본5행5열');
		},
		
		righttriangle : ()=>{
			alert('직각삼각형');
		},
		
		zigzag : ()=>{
			alert('지그재그');
		},
		
		diamond : ()=>{
			alert('다이아몬드');
		},
		
		sandwatch : ()=>{
			alert('모래시계');
		},
		
		rightbean : ()=>{
			alert('오른쪽빈삼각형');
		},
		
		isosceles : ()=>{
			alert('이등변삼각형');
		},
		
		rotate : ()=>{
			alert('90도 회전');
		},
		
		snail : ()=>{
			alert('달팽이');
		},

		diagonal : ()=>{
			alert('대각선채우기');
		},
		
		magic : ()=>{
			alert('마방진');
		},
		
		trans : ()=>{
			alert('행렬변환');
		}
}