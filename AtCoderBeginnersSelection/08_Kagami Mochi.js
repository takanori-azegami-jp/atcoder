/*
// X 段重ねの鏡餅(X≥1) とは、X 枚の円形の餅を縦に積み重ねたものであって、どの餅もその真下の餅より直径が小さい（一番下の餅を除く）もののことです。
// 例えば、直径10、8、6 センチメートルの餅をこの順に下から積み重ねると3 段重ねの鏡餅になり、餅を一枚だけ置くと1 段重ねの鏡餅になります。
// ダックスフンドのルンルンはN 枚の円形の餅を持っていて、そのうちi 枚目の餅の直径はdi
// センチメートルです。これらの餅のうち一部または全部を使って鏡餅を作るとき、最大で何段重ねの鏡餅を作ることができるでしょうか。
*/

// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
	let a = parseInt(input[0], 10);

	let b = [];
	for (let i=0; i < a; i++) {
		b[i] = parseInt(input[i+1], 10);
	}
	//重複削除
	let c = Array.from(new Set(b))
	//出力
	console.log(c.length);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
