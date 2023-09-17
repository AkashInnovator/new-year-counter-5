const days=document.querySelector('.days');
const hrs=document.querySelector('.hours');
const min=document.querySelector('.minutes');
const sec=document.querySelector('.seconds');
const current_year=new Date().getFullYear();
const new_year=new Date(`January 1 ${current_year+1} 00:00:00`);
function NewYearTimer(){
    const current_date=new Date();
    const diff=new_year-current_date;
    d=Math.floor(diff/1000/60/60/24);
    h=Math.floor((diff/1000/60/60)%24);
    m=Math.floor((diff/1000/60)%60);
    s=Math.floor((diff/1000)%60);
    days.innerHTML=d<10?"0"+d:d;
    hrs.innerHTML=h<10?"0"+h:h;
    min.innerHTML=m<10?"0"+m:m;
    sec.innerHTML=s<10?"0"+s:s;

}


setInterval(NewYearTimer,1000);
