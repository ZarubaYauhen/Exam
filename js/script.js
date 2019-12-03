'use strict';
window.onload = function () {
  text.onclick = function () {
    if(content.style.display=="block"){
      content.style.display="none";
    }
    else {
      content.style.display="block";
    }
  }
}

// Задание №2
var array = [1, 2, [2, 5, 3, [32, 5], 3], 7, 4];
function arrSum(arr) {
		  var sum = 0;
		  for (var i = 0; i < arr.length; i++) {
			   if (typeof arr[i] == 'object'){
			      sum += arrSum(arr[i]);
			   }else if (Number(arr[i])){
			      sum += arr[i];
			   }
		  }
		  return sum;
		}
		console.log("Сумма - " + arrSum(array));


// Задание№3

function cacheResult(){
    let cache = [];
    return function (a,b){
      let cached = false;
      cache.forEach((val,i)=>{
        (val.a==a && val.b==b) || (val.a==b && val.b==a) ? cached=`cache ${cache[i].r}`: null
      })
      if(cached) return cached
      if(cache.length!=3){
        cache.push({a:a,b:b,r:a+b})
      }else {
        cache.push({a:a,b:b,r:a+b})
        cache.shift()
      }

      return `newElem ${cache[cache.length-1].r}`

    }
  }

  let x = cacheResult();
  console.log(x(1,1));
  console.log(x(1,1));
  console.log(x(1,1));
  console.log(x(1,1));
  console.log(x(1,1));
  console.log(x(1,2));
  console.log(x(1,1));
