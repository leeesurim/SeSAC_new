package second_project;
import java.util.Scanner;

public class Class_1 {

	public static void main(String[] args) {
		// 클래스 실습
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
		
		int width = scanner.nextInt();
		int height = scanner.nextInt();
		
		// Rectangle 생성자에서 width, height 설정
//		Rectangle rect = new Rectangle(width, height);
		
//		System.out.println(rect.getHeight());
		
//		System.out.println(rect.area());
		
		scanner.close();
		
	}

}
