function FindIntersection(strArr) { 
    
    //séparer la liste en 2 blocs
  const lists = strArr.map(str => str.split(", "));
  const firstList = lists[0];
  const secondlist = lists[1];
    //pour comparer les 2 listes. Accolades car c'est un objet
  let matchMap = {};
    //pour retrouver les résultats dans un tableau
  let resultArr = [];

  firstList.forEach(num => matchMap[num] = true);
  secondlist.forEach(num => {
    if (matchMap[num]){
      //pour conserver l'ordre
      resultArr.push(num)
    }
  })
  if(resultArr.length > 0){
    return resultArr.join(",")
  }
  return false; 

}
const strArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
console.log(FindIntersection(strArr));