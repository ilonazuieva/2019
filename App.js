function  calculateAge(birth ,current) {
    let age = current - birth;
    if (age === 1) {
        return `You are ${age} year old.`;
    } else if(age > 0){
        return `You are ${age} years old.`;
    } else if  (age === 0) {
        return "You were born this very year!";
    } else if (age === -1) {
        return "You will be born in 1 year.";
    } else {
        return `You will be born in ${-age} years.`
    }
}
  //https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript