// function fun(){
//     console.log("Namaste")
//     fun()
// }

// fun()


// let num = 10
// function fun(num){
//     if(num ==0){
//         return 0 ;
//     }
//     console.log(num)
//     fun(num-1)
// }

// fun(num)


// let l = 1
// let n =  10
// function print(l){
//     if(n<l){
//         return;
//     }
//     console.log(l)
//     print(++l)

// }
// print(l)


// let sum = 0
// let n =5

// function sumofnum(x){
//     if(x>n){
//         return;
//     }

//     sum+=x;

//     sumofnum(++x)

// }


// sumofnum(1)
// console.log(sum)


// sum of array

// let arr = [1,2,3,4,5]

// let sum  = 0;

// let n = arr.length

// function sumofarr(x){
//     if(x>n){
//         return;
//     }

//     sum += arr[x];
//     sumofarr[++x]
// }

// sumofarr[0]

let arr = [1,2,3,4,5]
function sum(n){
    idOdd=  (arr[n] %2 !=0);
    if(n==0){
        if(idOdd){
            return arr[n]
        }
        else return 0;
    }

    if(idOdd){
        return arr[n] + sum(n-1)
    }
    else{
        return 0+sum(n-1)
    }
}
sum(arr.length-1)
console.log(sum(arr.length-1))  