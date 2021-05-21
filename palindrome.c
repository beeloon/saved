#include <stdio.h>

int main(void) {
	int number, reminder, temp, sum = 0;
  	printf("Enter your number: ");
  	scanf("%d", &number);
	
	temp = number;

	while (number > 0) {
		reminder = number % 10;
		sum = (sum * 10) + reminder;
		number = number / 10;
	}

	if (temp == sum) {
		printf("Number is palindrome");
	} else {
		printf("Number isn't palindrome");
	}
	
  	return 0;
}