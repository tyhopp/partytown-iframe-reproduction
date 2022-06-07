(() => {
  console.log(`In my-script-2`);
  const p = document.createElement(`p`);
  p.dataset.cy = `success-in-iframe`;
  p.textContent = `success-in-iframe`;
  document.body.appendChild(p);
})();
