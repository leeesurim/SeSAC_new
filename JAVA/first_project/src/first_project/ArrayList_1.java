package first_project;

import java.util.ArrayList;
import java.util.Scanner;

public class ArrayList_1 {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
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
		
		scanner.close();

	}

}
