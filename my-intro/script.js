// 点击卡片切换主题色
const card = document.querySelector('.card');
let dark = false;

card.addEventListener('click', () => {
  dark = !dark;
  card.style.background = dark ? '#222' : '#fff';
  card.style.color = dark ? '#fff' : '#000';
});