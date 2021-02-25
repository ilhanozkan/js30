let inputs = document.querySelectorAll('.control input');

function valueUpdate() {
  inputs.forEach(input => {
    const cache = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, (this.value + cache));
  });
}

inputs.forEach(input => {
  input.addEventListener('mousemove', valueUpdate);
});

inputs.forEach(input => {
  input.addEventListener('change', valueUpdate);
});

