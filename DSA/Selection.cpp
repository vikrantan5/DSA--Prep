

#include<iostream>
using namespace std;


void SelectionSort(int arr[] , int n){
    for(int i = 0 ; i<n-1 ;i++){
        int min = i;
        for(int j = i+1;j<n ; j++){
            if(arr[j] <arr[min]){
                min = j;
            }
        }
        if(min != i){
            int temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
    }
}

    cout<<"Sorted array is:";
    for(int i = 0 ; i<n ; i++){
        cout<<arr[i]<<" ";
    }
}



int main(){
    int arr[] = {26 , 58 , 95 , 45 , 32 , 65};
    int n = sizeof(arr)/sizeof(arr[0]);
    SelectionSort(arr , n);
}