function kilometerToMeter(kilometer){
    if(kilometer<0){
        return "Kilometer cant be  negative"
    }else if(kilometer>0){
        var answer = kilometer * 1000
        return answer
    }else{
        return "Invalid Input"
    }
}

function budgetCalculator(watch , phone , laptop){
    if((watch<0 || phone <0 || laptop<0)) {
        return "Items can't be negative"
    }
    else if((watch>0 && phone >0 && laptop>0)){
        var total = (watch * 50 + phone * 100 + laptop * 500)
        return total
    }else{
        return "Invalid Input"
    }
}

function hotelCost(days){
if(days<0 || days == ""){
    return "Days cant be negative or invalid input!!!"
}
else{

    if(days<=10){
        var cost = days * 100
        return cost
    }else if(days<=20){
        var first10 = 100 * 10
        var remaining = days - 10
        var cost = remaining * 80 + first10
        return cost
    }else if(days > 20){
        var first10 = 10 * 100
        var first20 = 10 * 80
        var remaining = days - 20
        var thirdpart = remaining * 50
        var cost = first10 + first20 + thirdpart
        return cost 
    }
}

}

function megaFriend(arr){
if(arr=="" || !Array.isArray(arr)){
    return "Array is empty"
}else{
    var longest = arr[0].length
    var ans 
    for (var i=0 ;i<arr.length ;i++){
        var element = arr[i].length
        if(element> longest){
            longest = element
            ans  = arr[i]
        }
    }

    return ans
}
}




