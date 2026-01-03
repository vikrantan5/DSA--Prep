

// arr = [64, 34, 25, 12, 22, 11, 90];

// let BubleSort = function(arr){
//     let n = arr.length;

//     let isSwaped = false;
//     for(let i = 0 ; i<n-1 ; i++){
//         for(let j =0 ; j<n-i-1 ; j++){
//             if(arr[j]> arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 console.log(i,j);
//                isSwaped = true;
//             }
//         }
//         if(isSwaped){
//             break;
//         }
//     }
//     return arr;
// }

// BubleSort(arr);
// console.log(arr);




// bubble sorting
/*

iteration 1

 7,5,9,6,3
 | |
 5,7,9,6,3  swap
   | |
 5,7,9,6,3  no swap
     | |
 5,7,6,9,3  swap
       | |
 5,7,6,3,9  swap

 iteration 2
    5,7,6,3,9 
    | |
    5,7,6,3,9  no swap
      | |
    5,7,3,6,9  swap
        | |
    5,7,3,6,9  no swap

    iteration 3
        5,7,3,6,9
        | |
        5,7,3,6,9  no swap
          | |
        5,3,7,6,9  swap
            | |
        5,3,7,6,9  no swap
    iteration 4
          5,3,7,6,9
          | |
          3,5,7,6,9  swap
            | |
          3,5,7,6,9  no swap
                | |
            3,5,6,7,9  no swap
    final sorted array = 3,5,6,7,9

   */


    let arr = [7,5,9,6,3];
    let isSorted =false;

    let BubbleSort = function(arr){
        let n = arr.length;
        for(let i = 0 ; i<n-1 ; i++){
            for(let j = 0 ; j<n-i-1 ; j++){
                if(arr[j]>arr[j+1]){
                    let temp = arr[j];
                    arr[j]  =arr[j+1]
                    arr[j+1] = temp;
                    isSorted = true;
                }
            }
            if(!isSorted){
                break;
            }
        }
        return arr;
    }

    BubbleSort(arr);
    console.log(arr);