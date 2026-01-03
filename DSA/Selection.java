public class Selection {

    void SelectionSort(int arr [] ,int n){
        for(int i = 0 ; i<n-1 ; i++){
            int min = i;
            for(int j= i+1 ; j<n ; j++){
                if(arr[j] < arr[min]){
                    min= j;
                }
            }
            if(min != i){
                int temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
        System.out.println("Sorted array: ");
        for(int i =0 ; i<n ; i++){
            System.out.print(arr[i] + " ");
        }   
    }


    public static void main(String[] args) {
        int [] arr = {29,10,14,37,13};
        int n = arr.length;
        Selection selection = new Selection();
        selection.SelectionSort(arr , n);
    }
    
}
