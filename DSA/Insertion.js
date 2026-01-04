

const InsertionSort = function(arr ){
    let n =arr.length
    for(let i =1; i<n ; i++){
        let curr = arr[i];
        let prev = i-1;

        while(prev >=0 && arr[prev] >curr){
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = curr;
    }
}



let arr= [12, 11, 13, 5, 6];
InsertionSort(arr)
console.log("Sorted array is: ", arr);