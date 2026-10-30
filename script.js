// Created with assistance from OpenAI Codex. Study and adapt this code before submission.
(() => {
 const root = document.getElementById('study-test');
 const button = root.querySelector('button');
 const tasks = [...root.querySelectorAll('input')];
 const output = root.querySelector('output');
 let dark = false;
 button.addEventListener('click', () => {
  dark = !dark;
  root.style.colorScheme = dark ? 'dark' : 'light';
  button.textContent = dark ? 'Light mode' : 'Dark mode';
  button.setAttribute('aria-pressed', String(dark));
 });
 tasks.forEach(task => task.addEventListener('change', () => {
  const count = tasks.filter(item => item.checked).length;
  output.textContent = count === 3 ? 'All done. Take a break!' : `${count} of 3 complete`;
 }));
})();
