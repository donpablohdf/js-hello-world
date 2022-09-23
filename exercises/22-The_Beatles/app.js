function sing(){
    //'let it be, let it be, let it be, let it be, whisper words of wisdom, let it be, let it be, let it be, let it be, let it be, there will be an answer, let it be'
    var letra= 'let it be';
    for (var i=0; i<11; i++){
        if(i==3){
            letra= letra+', whisper words of wisdom';
        }else if (i==9){
            letra= letra+', there will be an answer';
        }else{
            letra= letra+', let it be';
        }
    }
    return letra ;
}

//Your code above ^^^

console.log(sing());