nama = ['Abigail','Alexandra','Alison', 'Amanda', 'Angela', 'Bella', 'Carol','Caroline','Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];


hurufkecil = nama.toLocaleString().toLowerCase().split(',');


const hasil = hurufkecil.filter(hurufkecil=> hurufkecil.includes('an'))


// hasil2 = hasil.toLocaleString().charAt(0).toUpperCase() + hasil.slice(1); // gatau kenapa katanya charAt & toUpperCase is not function
console.log(hasil.slice(0,3))