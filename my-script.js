(() => {
  console.log(`In my-script`);
  const p = document.createElement(`p`);
  p.dataset.cy = `success`;
  p.textContent = `success`;
  document.body.appendChild(p);
})();
