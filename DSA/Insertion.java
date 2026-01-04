public class Insertion {
    

    void InsertionSort(int arr[] , int n){
        for(int i = 1 ; i<n ; i++){
            int curr = arr[i];
            int prev = i-1;
            while(prev >=0 && arr[prev] > curr){
                arr[prev+1] =arr[prev];
                prev--;
            }
            arr[prev+1] = curr;
        }

        System.out.println(("Sorted array is :"));
        for(int i= 0 ; i<n ; i++){
            System.out.print(arr[i] + " ");
        }

    }

    public static void main(String[] args) {
        int [] arr = {29 , 6 , 9  , 7 , 5};
        int n =  arr.length;
        Insertion insertion = new Insertion();
        insertion.InsertionSort(arr , n);
    }
}
