const catalog = {
  cpu: [
    { id: "r5-7600", name: "AMD Ryzen 5 7600", price: 799, watts: 88 },
    { id: "r7-7800x3d", name: "AMD Ryzen 7 7800X3D", price: 1599, watts: 120 },
  ],
  gpu: [
    { id: "rx-7600", name: "Radeon RX 7600", price: 1199, watts: 165 },
    { id: "rtx-4070-super", name: "GeForce RTX 4070 SUPER", price: 2899, watts: 220 },
  ],
};

const formatPLN = new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN", maximumFractionDigits: 0 });

function selected(kind) {
  return catalog[kind].find((product) => product.id === document.querySelector(`#${kind}`).value);
}

function analyze(cpu, gpu) {
  const platformWatts = 100;
  const watts = cpu.watts + gpu.watts + platformWatts;
  const recommendedPsu = Math.ceil(watts * 1.35 / 50) * 50;
  return { total: cpu.price + gpu.price, watts, recommendedPsu };
}

function render() {
  const result = analyze(selected("cpu"), selected("gpu"));
  document.querySelector("#total").textContent = formatPLN.format(result.total);
  document.querySelector("#power").textContent = `${result.watts} W`;
  document.querySelector("#status").textContent = `Sugerowany zasilacz: co najmniej ${result.recommendedPsu} W`;
}

for (const [kind, products] of Object.entries(catalog)) {
  const select = document.querySelector(`#${kind}`);
  select.innerHTML = products.map((product) => `<option value="${product.id}">${product.name} - ${formatPLN.format(product.price)}</option>`).join("");
  select.addEventListener("change", render);
}

render();
