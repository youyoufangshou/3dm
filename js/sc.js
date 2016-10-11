//第一个图片轮播************************************************************************
var now=0;
var lis=document.getElementsByClassName('li');
for(var i=0;i<lis.length;i++){
	if(i==now){
		
		console.log(lis[i].firstChild.firstChild)
		lis[i].firstChild.firstChild.style.border='2px solid';
		lis[i].firstChild.firstChild.style.width='96px';	
		lis[i].firstChild.firstChild.style.height='96px';	
	}else{
		lis[i].firstChild.firstChild.style.border='0px solid';	
		lis[i].firstChild.firstChild.style.width='100px';	
		lis[i].firstChild.firstChild.style.height='100px';
	}
}
setInterval(function(){
	now=now+1;
	if(now>lis.length){
		now=0;
	}
	for(var i=0;i<lis.length;i++){
	if(i==now){
		lis[i].firstChild.firstChild.style.border='2px solid';
		lis[i].firstChild.firstChild.style.width='96px';	
		lis[i].firstChild.firstChild.style.height='96px';
	}else{
		lis[i].firstChild.firstChild.style.border='0px solid';
		lis[i].firstChild.firstChild.style.width='100px';	
		lis[i].firstChild.firstChild.style.height='100px';
	}
}
	
},1500)
//游戏部图片轮播**********************************************************
var m_l=0;
var as=document.getElementsByClassName('g_l');

		for(var i=0;i<as.length;i++){
			if(i==m_l){	
				//nowFrame
				as[i].style.display='block';
			}else{
				as[i].style.display='none';
			}
		}
		setInterval(function(){
			m_l++;
			if(m_l>=as.length){
				m_l=0;
			}

			for(var i=0;i<as.length;i++){
				if(i==m_l){
					as[i].style.display='block';
				}else{
					as[i].style.display='none';
				}
			}
		},1500);
		

var m_r=0;
var as2=document.getElementsByClassName('g_r');

for(var i=0;i<as2.length;i++){
			if(i==m_r){	
				//nowFrame
				as2[i].style.display='block';
			}else{
				as2[i].style.display='none';
			}
		}
		setInterval(function(){
			m_r++;
			if(m_r>=as2.length){
				m_r=0;
			}

			for(var i=0;i<as2.length;i++){
				if(i==m_r){
					as2[i].style.display='block';
				}else{
					as2[i].style.display='none';
				}
			}
		},1500);
		
//游戏显示切换*****************************************************************************

var m_lis=document.getElementsByClassName('m_li');
var d_ms=document.getElementsByClassName('d_m');
m_lis[0].style.backgroundColor = 'white';
 d_ms[0].style.display = 'block';

         for(i=0;i<m_lis.length;i++){
            m_lis[i].id = i;
             m_lis[i].onclick = function () {
                  tab1(this.id);
             }
         }
         function tab1(nowid){
             for(j=0;j<m_lis.length;j++){
                 if(nowid == j){
                     m_lis[j].style.backgroundColor = 'white';
                     d_ms[j].style.display = 'block';
                 }else{
                     m_lis[j].style.backgroundColor = '#EFF1F0';
                     d_ms[j].style.display = '';
                 }
             }
         }

//主体左边第一部分轮播**************************************************************************

var m_l_j=0;
var leftlis=document.getElementsByClassName('leftli');
var left01Tops=document.getElementsByClassName('left01_top');
for(var i=0;i<leftlis.length;i++){
	if(i==m_l_j){
		leftlis[i].style.backgroundColor='#177BA1';
		left01Tops[i].style.display='block';
	}else{
		leftlis[i].style.backgroundColor='white';
		left01Tops[i].style.display='none';
		
	}
}
function show(){
	
	m_l_j++;
	if(m_l_j>=leftlis.length){
		m_l_j=0;
	}
	for(var i=0;i<leftlis.length;i++){
	if(i==m_l_j){
		leftlis[i].style.backgroundColor='#177BA1';
		left01Tops[i].style.display='block';
		
	}else{		
		leftlis[i].style.backgroundColor='white';
		left01Tops[i].style.display='none';
	}
}
	
}
a=setInterval(show,1500);

	for(var i=0;i<leftlis.length;i++){
    leftlis[i].onmouseover=function(){
    	
        func1(this.id);
        clearInterval(a);
        
	}
   }
  var func1=function(a){
  	
  	for(var i=0;i<5;i++){
  		
  		if(a==i){
  			left01Tops[i].style.display="block";
  			leftlis[i].style.backgroundColor='#177BA1';
  			
  		}else{
  			leftlis[i].style.backgroundColor='white';
			left01Tops[i].style.display='none';
  		}
  	}
  }
     	
    for(var i=0;i<leftlis.length;i++){
    leftlis[i].onmouseout=function(){
   			func2(this.id);  
   			a=setInterval(show,1500);
    }
    }
    var func2=function(a){
      m_l_j=a;
    	
}
//第一页与第二页之间得切换************************************************************************************************
var middleBotLis=document.getElementsByClassName('middleBotLi');
var spans=document.getElementsByClassName('span');
var page1s=document.getElementsByClassName('page1');

middleBotLis[0].style.backgroundColor = 'white';
spans[0].style.display='block'
page1s[0].style.display = 'block';
 
 

         for(i=0;i<middleBotLis.length;i++){
            middleBotLis[i].id = i;
             middleBotLis[i].onclick = function () {
                  tab2(this.id);
             }
         }
         function tab2(nowid){
             for(j=0;j<middleBotLis.length;j++){
                 if(nowid == j){
                    middleBotLis[j].style.backgroundColor = 'white';
                    spans[j].style.display='block';
					page1s[j].style.display = 'block';
                 }else{
                    middleBotLis[j].style.backgroundColor = '#EFEFEF';
                    spans[j].style.display='none';
					page1s[j].style.display = 'none';

                 }
             }
         }
//中间部分的切换*******************************************************
var middleTopLis=document.getElementsByClassName('middleTopLi');
var ma_maddle_centers=document.getElementsByClassName('ma_maddle_center');
middleTopLis[0].style.backgroundColor = 'white';
ma_maddle_centers[0].style.display = 'block';

         for(i=0;i<middleTopLis.length;i++){
            middleTopLis[i].id = i;
             middleTopLis[i].onclick = function () {
                  tab3(this.id);
             }
         }
         function tab3(nowid){
             for(j=0;j<middleTopLis.length;j++){
                 if(nowid == j){
                     middleTopLis[j].style.backgroundColor = 'white';
                    ma_maddle_centers[j].style.display = 'block';
                 }else{
                     middleTopLis[j].style.backgroundColor = '#EFF1F0';
                    ma_maddle_centers[j].style.display = '';
                 }
             }
         }
