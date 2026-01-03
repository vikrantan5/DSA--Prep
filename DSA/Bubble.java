public class Bubble {

    void bubbleSort(int[] arr){
        
        int n = arr.length;
        for(int i = 0 ; i<n-1; i++){
            boolean isSorted= false;
            for(int j = 0 ; j<n-1-i ; j++){
                if(arr[j]>arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] =temp;
                    isSorted = true;

                }
            }
            if(!isSorted){
                break;
            }
        }
        System.out.println("Sorted array: ");
        for(int i =0 ; i<n ; i++){
            System.out.print(arr[i] + " ");
        }
    }
    public static void main(String[] args) {
        int[] arr = {64,34,25,87,19,45};

        Bubble bubble = new Bubble();
        bubble.bubbleSort(arr);
        
    }
    
}
