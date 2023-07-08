#include <iostream>
using namespace std;

int* dp;
void goto1(int n) {
	if (n == 1) return;

	if (n % 3 == 0) {
		if (dp[n / 3] > dp[n] + 1 || dp[n / 3] == 0) {
			dp[n / 3] = dp[n] + 1;
			goto1(n / 3);
		}
	}

	if (n % 2 == 0) {
		if (dp[n / 2] > dp[n] + 1 || dp[n / 2] == 0) {
			dp[n / 2] = dp[n] + 1;
			goto1(n / 2);
		}
	}
	
	if (dp[n - 1] > dp[n] + 1 || dp[n - 1] == 0) {
		dp[n - 1] = dp[n] + 1;
		goto1(n - 1);
	}
		
}

int main() {
	int n;
	cin >> n;

	dp = new int[n + 1]; // 동적 할당

	for (int i = 0; i < n + 1; i++)
		dp[i] = 0;

	goto1(n);

	for (int i = 0; i < n; i++)
		cout << i << " : " << dp[i] << "\n";

	cout << dp[1];
}