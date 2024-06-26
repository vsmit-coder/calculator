let display = document.getElementById("display");
let final = '';
var op;
function clicked(a){
    if(a=='ce'){
        display.innerHTML=0;
        final=0;
        i=1;
        return;
    }
    else if(a=='plus'){
        if(i==1){
            data = '+';
            i=0;
            op = !op;
            // alert(op);
        }
        else{
            data='';
        }
    }
    else if(a=='min'){
        if(i==1){
            data = '-';
            i=0;
            op = !op;
        }
        else{
            data='';
        }
    }
    else if(a=='mul'){
        if(i==1){
            data = '*';
            i=0;
            op = !op;
        }
        else{
            data='';
        }
    }
    else if(a=='div'){
        if(i==1){
            data = '/';
            i=0;
            op = !op;
        }
        else{
            data='';
        }
    }
    else if(a=='ans'){
        final=eval(final);
        data='';
    } 
    else{
        data=a;
        i=1;
    }
    if(op==false){
        final=eval(final);
        op=!op;
    }
    // alert(data);
    final = final + data;
    display.innerHTML=final;
}