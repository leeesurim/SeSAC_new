package second_project;

public class Rectangle {
	private int width;
	private int height;
	
	// 상수니까 이름 대문자
	private static int COUNT = 0;
	
	// 클래스로 접근할 거라서 static
	public static int getCount() {
		return COUNT;
	}
	
	// 생성자 이름은 클래스 이름과 같아야 함
	// this는 전역변수 쓰기 위해 사용
	public Rectangle(int num1) {
		this.width = num1;
//		this.height = num2;
		COUNT++;
		// 객체하나 생성할 때마다 COUNT 1씩 증가
	}

	// Source - Generate Getters and Setters 하면 자동 생성
	// getter -private 으로 지정한 변수를 외부에서 가져올 수 있도록 설정
	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}


	public int area() {
		return this.width * this.height;
	}
	
}
