function fizbuz(n) {
    
    let eredmeny=''
    
    /*if(n==1){
        eredmeny='1';
    }

    if(n==2){
        eredmeny='1,2';
    }*/

    /*for( let index = 1; index <=n; index++) {
        if(index % 5==0){
            eredmeny+='buz'
        }else if (index % 3==0){
            eredmeny+='fiz'
        }else{
            eredmeny+=index
        }

        if(index<n){
            eredmeny += ','
        }

    }*/
    function fizbuzErtek(n){
    let eredmeny= ''
    if(index % 15==0){
        eredmeny+='fizbuz'
    }else if (index % 5==0){
        eredmeny+='buz'
    }else if (index % 3==0)
        eredmeny+='fiz'
    }
}

  
    return eredmeny

}