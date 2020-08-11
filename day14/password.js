const cekPass=(input)=>{
    var password = input.split('')
    var num = [1,2,3,4,5,6,7,8,9,0]
    var lowerCase = ('abcdefghijklmnopqrstuvwxyz').split('')
    var upperCase = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')
    var strengthNum = 0
    var strengthLow = 0
    var strengthUp = 0

    for(i=0; i<password.length; i++){
        for(j=0; j<num.length; j++){
            if(password[i] == num[j]){
                strengthNum ++
            }
        }
        for(k=0;k<lowerCase.length; k++){
            if(password[i] == lowerCase[k]){
                strengthLow ++
            }
        }
        for(m=0;m<upperCase.length; m++){
            if(password[i] == upperCase[m]){
                strengthUp ++
            }
        }
    }
    if(strengthNum>0 && strengthUp>0 && strengthLow>0){
        return 'Password kuat'
    }else if((strengthNum==0 && strengthUp==0)||
    (strengthNum==0 && strengthLow==0) ||
    (strengthLow==0 && strengthUp==0)){
        return 'Password lemah'
    }else{
        return 'Password sedang'
    }
}
console.log(cekPass('a1L'))