const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ol');

button.addEventListener('click', function(event) {
  event.preventDefault();
  const li = document.createElement('li');
  li.textContent = input.value;
  list.appendChild(li);
});

