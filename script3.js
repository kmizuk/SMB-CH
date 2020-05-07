import youtuber from "./script2";

youtuber.do();
youtuber.list.fun.youtuber[0];

//こっからしまぶー
//関数
function isTweetable(text) {
  return text.length <= 140;
}

console.log(isTweetable("foo"));

//高層関数
function unFollow() {
  console.log("フォローを外しました");
}

function cancelTweet() {
  console.log("Tweetをキャンセルしました");
}

function confirmed(fn) {
  if (confirm("実行しますか？")) {
    fn();
  }
}

confirmed(unFollow);
//unfollow=fn

//匿名関数（アロー関数）
const unFollow = () => {
  console.log("フォローを外しました");
};

const cancelTweet = () => {
  console.log("Tweetをキャンセルしました");
};

const confirmed = (fn) => {
  if (confirm("実行しますか？")) {
    fn();
  }
};

confirmed(unFollow);

//許諾
//一旦アロー関数やめる
const confirmed = function (fn) {
  const input = window.prompt("実行しますか？");
  if (input === "実行") {
    fn();
  }
};

const unFollow = function () {
  console.log("フォローを外しました");
};

confirmed(unFollow);

//復習
const confirmed = function (fn) {
  //2 fnにunFollowを代入
  const input = window.prompt("実行しますか？");
  if (input === "実行") {
    fn(); //3 unFollow();が呼び出される
  }
};

const unFollow = function () {
  //4 実行される
  console.log("フォローを外しました");
};

confirmed(unFollow); //1

//入れ込み
//ここを理解したい！！
//今日復習

const confirmed = function (fn) {
  const input = window.prompt("実行しますか？");
  fn(input);
};

const unFollow = function (input) {
  if (input === "実行") {
    console.log("フォローを外しました");
  }
};

confirmed(unFollow);

//復習
const confirmed = function (fn) {
  //2
  const input = window.prompt("実行しますか？");
  fn(input); //3 unFollow(input);
};

const unFollow = function (input) {
  //4
  if (input === "実行") {
    console.log("フォローを外しました");
  }
};

confirmed(unFollow); //1
