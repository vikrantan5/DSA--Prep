#include<iostream>

using namespace std;

int BinarySearh(int arr[], int n, int target){
    int left  = 0;
    int right = n - 1;

    while(left <= right){
        int mid = left + (right - left) / 2;
        if(arr[mid] == target){
            cout<<"Element found at index: "<< mid << endl;
            return mid;
        }
        else if(arr[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return -1;



}


int main(){


   int arr[] = {1,2,3,4,5,6,7,8,9};
    int n = sizeof(arr) / sizeof(arr[0]); // ✅ size here
    int target = 5;
   int result = BinarySearh(arr ,n, target);
   printf("Result: %d\n", result);

    return 0;
}