package third_project;

public class Student2 extends Person {
	
		private String school;
		
		public void printName() {
			System.out.println(getName());
		};
		
		public void todo() {
			System.out.println("공부하기");
		};
		
		public Student2(int age, String name) {
			super(name);
			setAge(age);
//			setName(name);
		}
		public String getSchool() {
			return school;
		}
		public void setSchool(String school) {
			this.school = school;
		}
	

}
