#include <iostream>
using namespace std;

int dp[100][2] = { {0, 0} };

void fibonacci(int n) {
    dp[0][0] = 1; dp[0][1] = 0;
    dp[1][0] = 0; dp[1][1] = 1;

    for (int i = 2; i <= n; i++) {
        dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
        dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
    }

    return;
}

int main() {
    int num, t;

    cin >> t;

    for (int i = 0; i < t; i++) {
        cin >> num; fibonacci(num);
        cout << dp[num][0] << " " << dp[num][1] << "\n";
    }
}