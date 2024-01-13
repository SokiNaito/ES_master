const tabList = document.querySelectorAll('.tab-list-item');

const tabContent = document.querySelectorAll('.tab-contents-item');

document.addEventListener('DOMContentLoaded', function(){
  for(let i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener('click', tabSwitch);
  }
  function tabSwitch(){
    document.querySelectorAll('.active')[0].classList.remove('active');
    this.classList.add('active');
    document.querySelectorAll('.show')[0].classList.remove('show');
    const aryTabs = Array.prototype.slice.call(tabList);
    const index = aryTabs.indexOf(this);
    tabContent[index].classList.add('show');
  };
});

function showClock() {
  let nowTime = new Date();
  let nowHour = nowTime.getHours();
  let nowMin  = nowTime.getMinutes();
  let msg = "現在時刻：" + nowHour + "時" + nowMin + "分";
  document.getElementById("realtime").innerHTML = msg;
}
setInterval('showClock()',1000);

//----------------------------------//
window.addEventListener('DOMContentLoaded', function() {

  const button = document.getElementById("changeColor");
  const wrapper = document.getElementById("bodyback");
const colors = [
  "#CEF9DC",
  "#FFEBCD",
  "#F5F5DC",
  "#B0C4DE"
];

button.addEventListener("click", () => {
  wrapper.style.background = colors[Math.floor(Math.random() * colors.length)];
});

//-----------ストップウォッチ------------//
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener('click', () => {
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener('click', () => {
    clearInterval(int);
    [millisecnds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = " 00 : 00 : 00 : 000";
});

function displayTimer () {
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
    
    if(seconds == 60) {
        seconds = 0;
        minutes++;
    
    if(minutes == 60){
        minutes = 0;
        hours++;
  }}};
let h = hours < 10 ? "0" + hours : hours;
let m = minutes < 10 ? "0" + minutes : minutes;
let s = seconds < 10 ? "0" + seconds : seconds;
let ms = milliseconds < 10
? "00" + milliseconds
: milliseconds < 100
? "0" + milliseconds
: milliseconds;

timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

//----------リアルタイムカウント--------//
  const textArea = document.querySelector('#input');
  const length = document.querySelector('.length');
  //テキストエリアに入力された文字数をリアルタイムでカウント
  textArea.addEventListener('input' , () => {
    length.textContent = textArea.value.length;
    if(textArea.value.length === 0){
      document.querySelector('#output').innerHTML = '';
    }
  }, false);
  
  
  //200文字制限ボタン
  document.querySelector('#nihyaku').addEventListener('click', function(){
      const val = document.querySelector('#input').value;

      let wordCount = val.length; //スペースも1文字としてカウント
      let wordCountNoSpace = val.replace(/[\n\s　]/g, "").length;   // スペースをカウントしない
      let space = wordCount - wordCountNoSpace ; //スペースの数
      ; //スペースの数
      const max = 200;
      let len = wordCount - max;
      let len2 = max - wordCount;
      let res = '';

      if (wordCount == 0 && wordCountNoSpace == 0) {
          res = `文字が入力されていません`;
      }else if(wordCount == max && space ==0){
          res = `ピッタリ<span style="color:red";><b>${max}</b></span>文字です！`;
      }else if(wordCount <= max && space !== 0){
          res = `あと<span style="color:red";><b>${len2}</b></span>文字入力できます。スペースが<span style="color:red";>${space}</span>文字含まれています。`;
      }else if(wordCount <= max){
       res =  `あと<span style="color:red";><b>${len2}</b></span>文字入力できます。`;
      }else if(wordCount > max){
          res = `<span style="color:red";><b>${len}</b>文字オーバーしています。</span>`;
      }
      document.querySelector('#output').innerHTML = res;
  });

  //300文字制限ボタン
  document.querySelector('#sanbyaku').addEventListener('click', function() {
      const val = document.querySelector('#input').value;
      
      let wordCount = val.length; //スペースも1文字としてカウント
      let wordCountNoSpace = val.replace(/[\n\s　]/g, "").length;   // スペースをカウントしない
      let space = wordCount - wordCountNoSpace ; //スペースの数
      ; //スペースの数
      const max = 300;
      let len = wordCount - max;
      let len2 = max - wordCount;
      let res = '';

      if (wordCount == 0 && wordCountNoSpace == 0) {
        res = `文字が入力されていません`;
    }else if(wordCount == max && space ==0){
        res = `ピッタリ<span style="color:red";><b>${max}</b></span>文字です！`;
    }else if(wordCount <= max && space !== 0){
        res = `あと<span style="color:red";><b>${len2}</b></span>文字入力できます。スペースが<span style="color:red";>${space}</span>文字含まれています。`;
    }else if(wordCount <= max){
     res =  `あと<span style="color:red";><b>${len2}</b></span>文字入力できます。`;
    }else if(wordCount > max){
        res = `<span style="color:red";><b>${len}</b>文字オーバーしています。</span>`;
    }
      document.querySelector('#output').innerHTML = res;
  });

  //400文字制限ボタン
  document.querySelector('#yonhyaku').addEventListener('click', function(){
      const val = document.querySelector('#input').value;

      let wordCount = val.length; //スペースも1文字としてカウント
      let wordCountNoSpace = val.replace(/[\n\s　]/g, "").length;   // スペースをカウントしない
      let space = wordCount - wordCountNoSpace ; //スペースの数
      ; //スペースの数
      const max = 400;
      let len = wordCount - max;
      let len2 = max - wordCount;
      let res = '';

      if (wordCount == 0 && wordCountNoSpace == 0) {
        res = `文字が入力されていません`;
    }else if(wordCount == max && space ==0){
        res = `ピッタリ<span style="color:red";><b>${max}</b></span>文字です！`;
    }else if(wordCount <= max && space !== 0){
        res = `あと<span style="color:red";><b>${len2}</b></span>文字入力できます。スペースが<span style="color:red";><b>${space}</b></span>文字含まれています。`;
    }else if(wordCount <= max){
     res =  `あと<span style="color:red";><b>${len2}</b></span>文字入力できます。`;
    } else if(wordCount > max){
        res = `<span style="color:red";><b>${len}</b>文字オーバーしています。</span>`;
    }
      document.querySelector('#output').innerHTML = res;
  });
});

//コピーボタン
const copy = () => {
  const txt = document.getElementById("input").value;
  console.log(txt);
  navigator.clipboard.writeText(txt);
  alert("コピーしました！");
};

let length = document.getElementById("length")  
function clearTextarea() {
  if(window.confirm('本当にクリアしますか？')) {
    let textareaForm = document.getElementById("input");
    textareaForm.value = '';
    document.querySelector('#output').innerHTML = '';
    document.querySelector('#length').innerHTML = 0;
    document.querySelector('#parsent').innerHTML = '';
    document.querySelector('#parsent300').innerHTML = '';
    document.querySelector('#parsent400').innerHTML = '';
     progressBar.value = '0' ;
     progressBarThird.value = '0' ;
     ProgressBarFourth.value = '0' ;
}else{
}}

//200文字バー
function updateProgressBar() {
  const textArea = document.getElementById('input').value;
  const progressBar = document.getElementById('progressBar');

  const maxLength = 200;
  const percentage = (textArea.length / maxLength) * 200;
  const percentage2 = Math.floor((textArea.length / maxLength) * 100);
  progressBar.value = percentage;

  if (textArea.length > maxLength) {
      progressBar.style.backgroundColor = 'red';
    }else {
      progressBar.style.backgroundColor = '';  // Reset the color
     }
    document.querySelector('#parsent').innerHTML = `${percentage2}%`;
};


//300文字バー
function updateProgressBarThird() {
  const textArea = document.getElementById('input').value;
  const progressBarThird = document.getElementById('progressBarThird');
  
  const maxLength = 300;
  const percentage = (textArea.length / maxLength) * 300;
  const percentage3 = Math.floor((textArea.length / maxLength) * 100);
  progressBarThird.value = percentage;

  if (textArea.length > maxLength) {
      progressBarThird.style.backgroundColor= 'red';
    }else {
      progressBarThird.style.backgroundColor = '';  // Reset the color
    }
    document.querySelector('#parsent300').innerHTML = `${percentage3}%`;
};


//400文字バー
function updateProgressBarFourth() {
  const textArea = document.getElementById('input').value;
  const ProgressBarFourth = document.getElementById('ProgressBarFourth');

  const maxLength = 400;
  const percentage = (textArea.length / maxLength) * 400;
  const percentage4 = Math.floor((textArea.length / maxLength) * 100);
  ProgressBarFourth.value = percentage;

  if (textArea.length > maxLength) {
     ProgressBarFourth.style.backgroundColor = 'red';
    }else {
      ProgressBarFourth.style.backgroundColor = '';  // Reset the color
    }
    document.querySelector('#parsent400').innerHTML = `${percentage4}%`;
};


//-------------------------------//
window.onload = function() {
  loadSavedText();
};

// テキストエリアを追加する関数
function addTextArea() {
  let textareaContainer = document.getElementById('textareaContainer');
  let wrapper = document.createElement('div');
  wrapper.className = 'textarea-wrapper';
  
  let textarea = document.createElement('textarea');

  let deleteButton = document.createElement('button');
  deleteButton.textContent = '✖削除';
  deleteButton.className = 'delete-button';
  deleteButton.onclick = function() {
    wrapper.remove();
  };
  wrapper.appendChild(textarea);
  wrapper.appendChild(deleteButton);
  textareaContainer.appendChild(wrapper);
};

// テキストを保存する関数
function saveText() {
  let textareaWrappers = document.querySelectorAll('.textarea-wrapper');
  let texts = [];
  textareaWrappers.forEach(function(wrapper) {
    let textarea = wrapper.querySelector('textarea');
    texts.push(textarea.value);
  });
  // ローカルストレージに保存
  localStorage.setItem('savedTexts', JSON.stringify(texts));
  alert('保存されました！');
};

// 保存されたテキストを読み込む関数
function loadSavedText() {
  let savedTexts = localStorage.getItem('savedTexts');
  if (savedTexts) {
    savedTexts = JSON.parse(savedTexts);

    savedTexts.forEach(function(text) {
      addTextAreaWithText(text);
    });
}
};

// テキストを指定してテキストエリアを追加する関数
function addTextAreaWithText(text) {
  let textareaContainer = document.getElementById('textareaContainer');
  let wrapper = document.createElement('div');
  wrapper.className = 'textarea-wrapper';

  let textarea = document.createElement('textarea');
  textarea.value = text;

  let deleteButton = document.createElement('button');
  deleteButton.textContent = '✖削除';
  deleteButton.className = 'delete-button';
  deleteButton.onclick = function() {
    if(window.confirm('本当に削除しますか？')) {
      wrapper.remove();
  }else{
      // window.alert('削除されませんでした'); 
  }};
  wrapper.appendChild(textarea);
  wrapper.appendChild(deleteButton);
  textareaContainer.appendChild(wrapper);
}

window.addEventListener('DOMContentLoaded', function() {
  const buttonM = document.getElementById("changeMessage");
const messages = [
  "できると思えばできる、できないと思えばできない。これは、ゆるぎない絶対的な法則である。（by パブロ・ピカソ）",
  "今から数年後、あなたはやったことよりも、やらなかったことに失望する。    (by マーク・トウェイン)",
  "時間は限られているのだから、他人の真似事をして、自分の時間を無駄に過ごしてはいけない(byスティーブ・ジョブス)",
  "人間にとって成功とはいったいなんだろう。結局のところ、自分の夢に向かって自分がどれだけ挑んだか、努力したかどうか、ではないだろうか。(by岡本太郎)",
  "打ちのめされる前に僕ら打ちのめしてやろう（by真島昌利）",
  "ゴールへ到達しようとの試みにこそ、栄光はある。(byガンジー)",
  "空虚な目標であれ、目標をめざして努力する過程にしか人間の幸福は存在しない。(by三島由紀夫)",
  "人生は自分の思い通りになんかならないと思っている人は、自らが思い通りにならないことを望んでいる人です。(byジョセフ・マーフィー)",
  "人を信じよ、しかし、その百倍も自らを信じよ。(by手塚治虫)",
  "最も高い目標を達成するには、一歩一歩進むしかないという事実を、頭に入れておかなければならない。(byアンドリュー・カーネギー)",
  "力や知性ではなく、地道な努力こそが能力を解き放つ鍵である。(byウィンストン・チャーチル)"
];

buttonM.addEventListener("click", () => {
  mes= messages[Math.floor(Math.random() * messages.length)];
  console.log(mes);
  document.querySelector('#greeting').innerHTML = mes;
});
});
