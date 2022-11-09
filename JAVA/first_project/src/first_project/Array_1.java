package first_project;

import java.util.Scanner;
import java.util.Arrays;

public class Array_1 {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		
		System.out.println("5개의 정수를 입력하세요");
		
		int[] intArray = new int[5];
		int sum = 0;
		
		for(int i = 0; i<5; i++) {
			intArray[i] = scanner.nextInt();
			sum = sum + intArray[i];
		};
		
		System.out.println("평균은 " + (double)sum/5);
		
		scanner.close();

	}

}
