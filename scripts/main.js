let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    }
    else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = '“火-浏览器之光-狐”的介绍者，' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} 
else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '“火-浏览器之光-狐”的介绍者，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  }
   else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML ='“火-浏览器之光-狐”的介绍者，' + myName;
  }
}