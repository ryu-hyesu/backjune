#include <iostream>
using namespace std;

int map[50][50] = { 0 };

int dx[] = { 1, -1, 0, 0 };
int dy[] = { 0, 0, 1, -1 };

void gfs(int x, int y, int n, int m) {
	for (int i = 0; i < 4; i++) {
		int nx = x + dx[i];
		int ny = y + dy[i];

		if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
			if ( map[nx][ny] == 1) {
				map[nx][ny] = 0;
				gfs(nx, ny, n, m);
			}
		}
	}
}
/* 초기화 */
void inital(int k) {
	for (int i = 0; i < 50; i++) {
		for (int j = 0; j < 50; j++) {
			map[i][j] = 0;
		}
	}

	for (int i = 0; i < k; i++) {
		int x, y;
		cin >> x >> y;

		map[x][y] = 1;
	}
}

int main() {
	int t;
	int m, n, k;
	int cnt = 0;

	cin >> t;


	for (int s = 0; s < t; s++) {
		cin >> m >> n >> k;

		inital(k); // 초기화

		for (int i = 0; i < m; i++) // 배추 있는 곳 찾기
			for (int j = 0; j < n; j++)
				if (map[i][j] == 1) {
					gfs(i, j, n, m);
					cnt++;
				}
		cout << cnt << "\n";
		cnt = 0;

	}
}