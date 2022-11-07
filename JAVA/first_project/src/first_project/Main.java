package first_project;

import java.util.Scanner;
import java.util.Arrays;
import java.util.ArrayList;

public class Main {
	public static void calc() {
		Scanner scanner = new Scanner(System.in);
		System.out.println("숫자를 두 개를 입력하세요.");
		double num1 = scanner.nextInt();
		double num2 = scanner.nextInt();
		
		System.out.println("덧셈 결과 : " + (num1 + num2));
		System.out.println("뺄셈 결과 : " + (num1 - num2));
		System.out.println("나눗셈 결과 : " + (num1 / num2));
		System.out.println("곱셈 결과 : " + (num1 * num2));
		
	}
//	
	public static void hello() {
		System.out.println("Hello");
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
//		calc();
//		hello();
		
//		System.out.println("이름, 나이, 키, 결혼 여부를 입력해 주세요.");
//		
//		Scanner scanner = new Scanner(System.in);
//		
//		String name = scanner.next();
//		int age = scanner.nextInt();
//		double height = scanner.nextDouble();
//		boolean married = scanner.nextBoolean();
//		
//		System.out.println(name);
//		System.out.println(age);
//		System.out.println(height);
//		System.out.println(married);
//		
//		scanner.close();
		
//		double a = 5.2;
//		double b = 2.0;
//		System.out.println(a/b);
//		
//		int c = 5;
//		int d = 2;
//		System.out.println((double)c/d);
		
//		Scanner scanner = new Scanner(System.in);
//		
//		System.out.println("이름을 입력하세요.");
//		String name = scanner.next();
//		System.out.println("나이를 입력하세요.");
//		int age = scanner.nextInt();
//		System.out.println("안녕하세요! "+ name + "님(" + age + "세)");
		
//		int number = 9;
//		
//		if(number % 3 == 0) System.out.println("3의 배수");
//		else System.out.println("3의 배수 아님");
//		
//		switch(number%3) {
//		case 0:
//			System.out.println("3의 배수");
//			break;
//		default:
//			System.out.println("3의 배수 아님");
//		}
//		
//		int i;
//		for (i=0; i<10; i++) {
//			System.out.print(i+" ");
//		}
//		
//		int i = 0;
//		while (i<10) {
//			System.out.print(i+" ");
//			i++;
//		}
		
		
		
//		System.out.println("나이를 입력하세요.");
//		int age = scanner.nextInt();
//		
//		if (age >= 1 & age <= 7) System.out.println("유아");
//		else if (age >= 8 & age <= 13) System.out.println("초등학생");
//		else if (age >= 14 & age <= 16) System.out.println("중학생");
//		else if (age >= 17 & age <= 19) System.out.println("고등학생");
//		else if (age >= 20) System.out.println("성인");
		
//		Scanner scanner = new Scanner(System.in);
		
//		System.out.println("이름을 입력하세요.");
//		String name = scanner.nextLine();
//		if (name.equals("홍길동")) System.out.println("남자");
//		else if (name.equals("성춘향")) System.out.println("여자");
//		else System.out.println("모르겠어요.");
		
//		System.out.println("숫자를 입력하세요.");
//		int number = scanner.nextInt();
//		
//		for (int i=1; i<=number; i++) {
//			System.out.print(i+" ");
//		}
		
//		int[] intArray = new int[2];
//		
//		intArray[0] = 1;
//		intArray[1] = 2;
//		
//		int[] intArray2 = {1, 2};
//		
//		for(int i = 0; i<intArray2.length; i++) {
//			if(i == 0) System.out.print("[");
//			
//			System.out.println(intArray2[i]);
//			
//			if(i == intArray2.length-1) System.out.print("]");
//			else System.out.print(", ");
//		}
		
//		ArrayList<Integer> arrayList1 = new ArrayList<>();
//		ArrayList<Integer> arrayList2 = new ArrayList<>();
//		
//		for ( int i = 0; i<10; i++ ) {
//			arrayList2.add(i);
//		}
//		
//		arrayList1.add(1);
//		arrayList1.add(2);
//		arrayList1.add(0, 3);
//		arrayList1.addAll(arrayList2);
//		
//		for (int i=0; i<arrayList1.size(); i++) {
//			System.out.print(arrayList1.get(i));
//		}
//		
//		System.out.print("\n"+ arrayList1.size());
		
		Scanner scanner = new Scanner(System.in);
		
//		System.out.println("5개의 정수를 입력하세요");
//		
//		int[] intArray = new int[5];
//		int sum = 0;
//		
//		for(int i = 0; i<5; i++) {
//			intArray[i] = scanner.nextInt();
//			sum = sum + intArray[i];
//		};
//		
//		System.out.println("평균은 " + (double)sum/5);
		
		ArrayList<String> arrayList = new ArrayList<>();
		
		
		while (true) {
			System.out.println("문자를 입력해 주세요. : ");
			String text = scanner.nextLine();
			if (text.equals("exit")) break;
			else arrayList.add(text);
		};
		
		for (int i=0; i<arrayList.size(); i++) {
			System.out.println(arrayList.get(i));
		}

		
	}

}
