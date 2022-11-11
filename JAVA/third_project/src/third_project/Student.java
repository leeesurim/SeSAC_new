package third_project;

public abstract class Student {
	// 필드 4개
	private String name;
	private String school;
	private int age;
	private int student_Id;
	
	// 
	public Student(String name, String school, int age, int student_Id) {
		this.name = name;
		this.school = school;
		this.age = age;
		this.student_Id = student_Id;
	}
	
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public void setSchool(String school) {
//		this.school = school;
//	}
//
//	public void setAge(int age) {
//		this.age = age;
//	}
//
//	public void setStudent_Id(int student_Id) {
//		this.student_Id = student_Id;
//	}

	// 추상메소드 만들기
	public abstract void todo();
	
	
}
