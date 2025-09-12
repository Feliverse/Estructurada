const marcas = ['apple', 'google', 'meta'];
const marcas_descritas = marcas.map(function(marca) {
  return `${marca} es increíble`
});

for (let marca of marcas_descritas) {
  console.log(marca);
}
console.log(marcas)
