#include <iostream>
using namespace std;

int N, r, c;
int cnt = 0;
int isZ = 0;

void zShape(int i, int j, int n) {
	n /= 2;

	if (n < 1) { // count ½ÃÀÛ
		if(isZ != 1) cnt++;
		else return;

		if (i == c && j == r) {
			isZ = 1;
			return;
		}
			
	}
	else {
		zShape( i, j, n );
		zShape( i + n, j, n );
		zShape( i, j + n, n );
		zShape( i + n, j + n, n );
	}

}

int main() {
	cin >> N >> r >> c;

	int size = 1;
	for (int i = 0; i < N; i++)
		size += 2;

	zShape(0, 0, size);

	cout << cnt -1 ;

}