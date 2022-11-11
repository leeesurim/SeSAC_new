package third_project;

public class Kim extends Student {
	public Kim(String name, String school, int age, int student_Id) {
		super(name, school, age, student_Id);
		
		// Student 클래스에 setter을 만들어서 사용할 수 있는 방법
//		setName(name);
//		setAge(age);
//		setStudent_Id(student_Id);
//		setSchool(school);
	}
	public void todo() {
		System.out.println("점심은 김가네 김밥");
	}
	

}
