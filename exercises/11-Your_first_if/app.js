var total = prompt('How many km are left to go?');

if(total>100)
    var resultado="We still have a bit of driving left to go?";
else if(total>50 && total<=100)
    var resultado="We'll be there in 5 minutes";
else if(total<=50)
    var resultado="I'm parking, I see you right now";


console.log(resultado);