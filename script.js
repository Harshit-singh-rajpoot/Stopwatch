var hr=0;
var min=0;
var sec=0;
var count=0;

var timer=false;


function stopwatch(){
    setTimeout("stopwatch()",10);
    if(timer==true){
        count=count+1;
        document.getElementById("count").innerHTML = count;
        if(count==100){
            sec++;
            count=0;
        }
        if(sec==60){
            
            min++;
            sec=0;
        }
        if(min==60){
            
            hr++;
            sec=0;
            min=0;

        }

        if(sec<10){
        document.getElementById("sec").innerHTML = "0"+sec;
        }else{
            document.getElementById("sec").innerHTML =sec;
        }
        if(min<10){
        document.getElementById("min").innerHTML = "0"+min;
        }else{
            document.getElementById("min").innerHTML = min;
        }
        if(hr<10){
        document.getElementById("hr").innerHTML = "0"+hr;
        }else{
            document.getElementById("hr").innerHTML = hr;
        }
        if(count<10){
        document.getElementById("count").innerHTML = "0"+count;
        }else{
            document.getElementById("count").innerHTML = count;
        }
        
    }
}
function start(){
    timer=true;
    stopwatch();

}
function stop(){
    timer=false;

}
function reset(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;

    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";

}