package second_project;

import java.util.ArrayList;
import java.util.Scanner;

public class Class_upgrade_result {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		ArrayList<Rectangle> rects = new ArrayList<>();

		while (true) {
			System.out.println("사각형의 가로와 세로 길이를 띄어쓰기 기준으로 입력해주세요.");
			int width = scanner.nextInt();
			int height = scanner.nextInt();
			
			
			if (width == 0 && height == 0) break;
			
			Rectangle rect = new Rectangle(width);
			rect.setHeight(height);
			rects.add(rect);
			System.out.println(rect.area());
		};
		
		for (Rectangle value: rects) {
			System.out.println("가로 길이는: " + value.getWidth());
			System.out.println("세로 길이는: " + value.getHeight());
			System.out.println("넓이는: " + value.area());
			System.out.println("-------------------");
		};
		
		System.out.println("Rectangle의 인스턴스 개수는 "+ Rectangle.getCount());
		
		scanner.close();

	}

}
