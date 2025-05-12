/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// about.js

import '../../components/navbar.js';
import '../../components/footer.js';
import '../../components/section-page.js';
import '../../components/dev-card.js';

const createAboutPage = () => {
  const navbar = document.createElement('navbar-component');
  document.body.appendChild(navbar);

  const aboutSection = document.createElement('section-page');
  aboutSection.setAttribute('title', 'Apa itu SIPRASA?🧐');
  aboutSection.innerHTML = `
  <p>
  Surakarta, sebagai kota budaya dan pusat kegiatan ekonomi di Jawa Tengah, memiliki tingkat kerentanan yang cukup tinggi terhadap permasalahan infrastruktur akibat faktor alam maupun manusia, seperti banjir, longsor, dan beban lalu lintas yang tinggi. Tantangan utama yang dihadapi adalah keterbatasan sumber daya serta lambatnya proses pelaporan kerusakan oleh masyarakat. Hal ini menyebabkan penanganan kerusakan infrastruktur sering tertunda, yang pada akhirnya membahayakan keselamatan publik dan mengganggu aktivitas warga.
  <br>
  <br>Untuk menjawab permasalahan tersebut, platform pelaporan berbasis web SIPRASA dirancang sebagai solusi efektif yang memungkinkan masyarakat untuk melaporkan kerusakan infrastruktur publik dengan cepat, mudah, dan akurat. Melalui platform ini, laporan masyarakat dapat langsung diterima dan ditindaklanjuti oleh instansi terkait, sehingga perbaikan bisa dilakukan lebih cepat dan efisien.
  <br>
  <br>SIPRASA merupakan singkatan dari Sistem Informasi Pelaporan Kerusakan Infrastruktur Surakarta. Aplikasi ini dikembangkan untuk mempermudah warga dalam menyampaikan laporan kerusakan infrastruktur di wilayah Surakarta, seperti jalan rusak, gorong-gorong tersumbat, dan fasilitas umum lainnya. Dengan antarmuka yang ramah pengguna dan sistem pengelolaan laporan yang terorganisir, SIPRASA diharapkan mampu menjadi jembatan komunikasi yang efektif antara masyarakat dan pemerintah daerah dalam menjaga kualitas infrastruktur kota.
</p>

  `;
  document.body.appendChild(aboutSection);

  const section = document.createElement('section-page');
  section.setAttribute('title', 'Tujuan dan Manfaat🎯');
  section.innerHTML = `
  <p>
<br><h2>🎯 Tujuan:</h2>
<li>Mempermudah masyarakat Surakarta dalam melaporkan kerusakan infrastruktur secara cepat dan akurat.</li>
<li>Menyediakan sistem yang efisien untuk pengelolaan laporan kerusakan oleh pemerintah daerah Surakarta.</li>
<li>Mengoptimalkan respons dan penanganan terhadap kerusakan infrastruktur di wilayah Surakarta.</li><br>
<br><h2>💡 Manfaat:</h2>
<li>Meningkatkan Keterlibatan Masyarakat: Warga Surakarta dapat lebih aktif berpartisipasi dalam menjaga kondisi infrastruktur dengan melaporkan kerusakan yang ditemukan.</li>
<li>Efisiensi Pengelolaan Laporan: Pihak admin atau petugas dapat mengelola dan menindaklanjuti laporan secara lebih cepat, terstruktur, dan transparan.</li>
<li>Peningkatan Kualitas Infrastruktur: Laporan yang tertangani dengan baik memungkinkan perbaikan dilakukan lebih tepat waktu, sehingga kualitas infrastruktur kota dapat terus terjaga.</li>
</p>

  `;
  document.body.appendChild(section);

  const about = document.createElement('section');
  about.className = 'about';
  about.innerHTML = `
    <div class="container">
      <div class="about-text">
        <h3>Tentang Kami</h3>
        <p>
          Di <strong>SIPRASA</strong>, kami menyediakan sarana bagi masyarakat Surakarta untuk melaporkan segala bentuk kerusakan pada fasilitas umum seperti jalan berlubang, lampu penerangan jalan yang mati, kerusakan taman, dan lainnya.
        </p>
        <p>
          Dengan melibatkan masyarakat, kami bertujuan untuk mempercepat perbaikan infrastruktur kota dan menciptakan Surakarta yang lebih nyaman, aman, dan layak huni. 
          Kami bekerja sama dengan <strong>Dinas Pekerjaan Umum Surakarta</strong> untuk menjaga keberlangsungan infrastruktur kota.
        </p>
      </div>

      <div class="about-map">
  <h3>Lokasi Kami</h3>
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.496140236339!2d110.7874525!3d-7.5585559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a143a1c374493%3A0xdc8426a96246968e!2sDpupr%20Surakarta%2C%20Jl.%20Blimbing%20No.10%2C%20Kerten%2C%20Kec.%20Laweyan%2C%20Kota%20Surakarta%2C%20Jawa%20Tengah%2057146!5e0!3m2!1sid!2sid!4v1715504163742!5m2!1sid!2sid" 
    width="100%" 
    height="300" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>

  `;
  document.body.appendChild(about);

  const developersSection = document.createElement('section-page');
  developersSection.setAttribute('title', 'Developers');
  const developerCards = document.createElement('div');
  developerCards.className = 'developer-cards';

  const devCard3 = document.createElement('dev-card');
  devCard3.setAttribute('image', '../images/luthfiana.jpg');
  devCard3.setAttribute('name', 'Luthfiana Azzalea Afifah');
  devCard3.setAttribute('role', 'L200220052');

  const devCard4 = document.createElement('dev-card');
  devCard4.setAttribute('image', '../images/mira.jpg');
  devCard4.setAttribute('name', 'Almira Putri Wibowo');
  devCard4.setAttribute('role', 'L200220068');


  developerCards.appendChild(devCard3);
  developerCards.appendChild(devCard4);

  developersSection.appendChild(developerCards);
  document.body.appendChild(developersSection);

  // Create and append the footer
  const footer = document.createElement('footer-component');
  document.body.appendChild(footer);
};

export default createAboutPage;
