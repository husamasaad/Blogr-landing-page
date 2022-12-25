const toggleBtn = document.getElementById('toggle-open');
const toggleCloseBtn = document.getElementById('toggle-close');
const menu = document.getElementById('menubar');
const navLinks = document.querySelectorAll('.menuitem');

toggleBtn.onclick = () => {
  menu.classList.add('show-menu');
  toggleBtn.classList.remove('active');
  toggleCloseBtn.classList.add('active');
  toggleCloseBtn.onclick = () => {
    menu.classList.remove('show-menu');
    toggleCloseBtn.classList.remove('active');
    toggleBtn.classList.add('active');
  }
}

navLinks.forEach(item => {
  item.onclick = (e) => {
    e.preventDefault();
    let ul = item.nextElementSibling.nextElementSibling.nextElementSibling;
    ul.classList.toggle('show-sub');

    item.parentElement.children[1].classList.toggle('active');
    item.parentElement.children[2].classList.toggle('active');
  }
});