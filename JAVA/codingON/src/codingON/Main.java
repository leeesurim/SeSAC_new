package codingON;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner( System.in );
		  
		  System.out.println("첫번째 숫자");
		  
		  int a = 5;
		  
		  // 문자로 인식
		  String b = scanner.next();
		  
		  System.out.println(a + b);
		  
		  System.out.println("두번째 숫자");
		  
		  // 숫자로 인식
		  int c = scanner.nextInt();
		  
		  System.out.println( a + c );
	}

}
