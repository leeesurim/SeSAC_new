package second_project;

//다른 패키지에 있는 클래스 가져오기
import second.Second;

public class Test {
	public int num;
	public String str = "문자열";
	
	public Test(int num) {
		this.num = num;
	}
	
	public void testMethod() {
		System.out.println("test");
		// second 클래스는 public이라서 가져올 수 있음
		Second sec = new Second();
		
		// protected int num이라서 못 가져옴
//		int a = sec.num;
		
	}
	
}
