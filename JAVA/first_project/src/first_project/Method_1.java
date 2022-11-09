package first_project;

import java.util.Scanner;

public class Method_1 {
	// int method로 만들고 return 하는 방법도 있음
	public static void calc(double num1, double num2) {
		
		System.out.println("덧셈 결과 : " + (num1 + num2));
		System.out.println("뺄셈 결과 : " + (num1 - num2));
		System.out.println("나눗셈 결과 : " + (num1 / num2));
		System.out.println("곱셈 결과 : " + (num1 * num2));
		
	}

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("숫자를 두 개를 입력하세요.");
		
		double num1 = scanner.nextInt();
		double num2 = scanner.nextInt();
		
		scanner.close();
		
		calc(num1, num2);

	}

}
