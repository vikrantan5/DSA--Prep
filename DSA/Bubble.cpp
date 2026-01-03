#include<iostream>

using namespace std;

void BubbleSort(int arr[] , int n){

    bool isSorted = false;
    for(int i = 0 ; i<n-1 ; i++){
        for(int j = 0 ; j<n-1-i ; j++){
            if(arr[j]>arr[j+1]){
                int temp= arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSorted = true;
              }
        }
        if(!isSorted){
            break;  
        }

    }
    cout<<"Sorted array: ";
    for(int i = 0 ; i<n ; i++){
        cout<<arr[i]<<" ";
    }

}


int main(){
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr)/sizeof(arr[0]);
    BubbleSort(arr, n);
    return 0;
}