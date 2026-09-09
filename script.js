document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menuBtn.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    menuBtn.textContent = '☰';
  });
});
