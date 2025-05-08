
const cards = document.querySelectorAll('#pilihPaket');
let addFeatures = [];
let priceResult = 0;
let namaPaket;

cards.forEach(card => {
      card.addEventListener('click', () => {

            cards.forEach(c => c.classList.remove('border', 'border-success'));

            card.classList.add('border', 'border-success');

            namaPaket = card.getAttribute('data-nama');
            const hargapaket = card.getAttribute('data-harga');

            console.log(namaPaket);
            console.log(hargapaket);

            priceResult = parseInt(hargapaket)

            document.getElementById('paketDipilih').innerHTML = namaPaket
            document.getElementById('hargaPaketDipilih').innerHTML = formatRupiah(hargapaket)

            hitungTotal();
      })
});

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let features = [];
let total = 0;
let result = 0;

function hitungTotal() {
      total = 0

      checkboxes.forEach(checkbox => {
            if (checkbox.checked) {

                  if (!features.includes(checkbox.value)) {
                        features.push(checkbox.value);
                  }
                  total += parseInt(checkbox.dataset.price);
            } else {
                  const index = features.indexOf(checkbox.value);
                  if (index !== -1) {
                        features.splice(index, 1);
                  }
            }
      });

      console.log(features);
      console.log("Total harga:", total);
      console.log("harga paket:", priceResult);

      hitungResult(priceResult, total)

}

checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', hitungTotal);
});

function hitungResult(package, additional) {
      const sumResult = package + additional
      document.getElementById('result').innerHTML = formatRupiah(sumResult);
      document.getElementById('priceResult').value = sumResult
      document.getElementById('paket').value = namaPaket
      document.getElementById('additional').value = features

}

function formatRupiah(angka) {
      return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
      }).format(angka);
}

function orderService() {
      alert('Pesanan berhasil dan akan diperoses');
}

function register() {
      alert('Registrasi Berhasil');
}

function login() {
      alert('Login Berhasil');
}