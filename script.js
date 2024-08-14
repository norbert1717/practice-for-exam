/* 
structure of the  view-tól kezdve lesznek a vizsga kérdések
html kóddal kell készülni
semantic html tagek - amik pontosabban mondják el egy divhez képest a tartalmukat
div - tartalmazhat listát, képet, konténert
segédfüggvények használata egyszerűvé teszi a kódot
js működésére kell fókuszálni ezen a vizsgán
css-t kell majd írni - specifikációk
clean code - ne ismételjük önmagunkat, egyértelmű függvény és változó nevek
console.log ne maradjon benne, szép és átlátható kód maradjon a végére
először működjön és majd utána legyen szép */

/* egyik filéből a másikba átjuttatni adatot
const data = require('./data')
data alljára kell egy module.exports = data
*/

/* countcoompleted todos függvény - végig megy az arrayan és ellenőrzi, h tue vagy false
for loop, map, foreach is használható
ha használunk számlálót, akkor érdemes a függvény elejére berakni, úgy hasznos
return a függvénynek a záró részéhez kell beilleszteni, akkor fut le minden esetben a kódunk az if után
a return a hozzá legközelebbi függvényt fejezi be

userid-k tömbbe összerakása
getuniqueuserids függvény
kell egy üres array
utána for loop vagy indexof, includes, find
    id-k beillesztése a tömbbe*/


const data = require('./data')

const countCompletedTodos = (todosArr) => {
  let completedTodosCounter = 0;

  /* for (let i = 0; i < todosArr.length; i++) {  
    if (todosArr[i].completed === true) {
      completedTodosCounter++;
    }
  } */

  // todosArr.forEach(todo => (todo.completed) ? completedTodosCounter++ : null);

  return todosArr.filter(todo => todo.completed).length
  
  // return completedTodosCounter;
}
console.log(countCompletedTodos(data))

const getUniqueUserIds = (todosArr) => {
  const uniqueIds = [];

  todosArr.forEach(todo => (!uniqueIds.includes(todo.userId)) ? uniqueIds.push(todo.userId) : null)

  /* for (let i = 0; i < todosArr.length; i++) {
    const newUserId = todosArr[i].userId;

    // if (!uniqueIds.includes(newUserId)) {
    //   uniqueIds.push(newUserId);
    // } 

    for (let j = 0; j < uniqueIds.length; j++) {
      const currentUserId = uniqueIds[j];

      if (newUserId === currentUserId) {
        break;
      }

      if (j === uniqueIds.length - 1) {
        uniqueIds.push(newUserId);
        break;
      }
    }
  } */

  return uniqueIds.sort((a, b) => a - b);
}

console.log(getUniqueUserIds(data));