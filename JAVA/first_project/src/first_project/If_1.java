package first_project;
import java.util.Scanner;

public class If_1 {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		
		System.out.println("나이를 입력하세요.");
		int age = scanner.nextInt();
		
		if (age >= 1 & age <= 7) System.out.println("유아");
		else if (age >= 8 & age <= 13) System.out.println("초등학생");
		else if (age >= 14 & age <= 16) System.out.println("중학생");
		else if (age >= 17 & age <= 19) System.out.println("고등학생");
		else if (age >= 20) System.out.println("성인");
		
		scanner.close();
	}

}
