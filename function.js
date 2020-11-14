
function sum(num1, num2){
    return num1 + num2
}
var result = sum (20, .20)
console.log(result)

function get_max( num1, num2, num3){
    var max = Math.max(num1, num2, num3)
    return max;
}
alert(get_max(20,7,15));
    console.log()

    num = 3565
    if ( num % 2 == 0) {
        alert('Even Number');
    }else{
        alert('Odd Number');
    }

    import java.util.Scanner;

public class EvenOdd {

    public static void main(String[] args) {

        Scanner reader = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = reader.nextInt();

        if(num % 2 == 0)
            System.out.println(num + " is even");
        else
            System.out.println(num + " is odd");
    }
}