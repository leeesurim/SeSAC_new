package first_project;
import java.util.Scanner;

public class For_1 {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("숫자를 입력하세요.");
		int number = scanner.nextInt();
		
		for (int i=1; i<=number; i++) {
			System.out.print(i+" ");
		}
		scanner.close();
	}

}
