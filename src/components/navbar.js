/* eslint-disable class-methods-use-this */
class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <div class="navbar-left">
            <a href="#/dashboard" class="logo-link">
              <div class="logo">
                <span class="logo-icon">S</span>
                <span class="logo-text">SIPRASA</span>
              </div>
            </a>
          </div>
          </div>
          <div class="hamburger-navbar" id="hamburger-navbar">
            <i class="fas fa-bars"></i>
          </div>
          <ul class="navbar-menu" id="navbarMenu">
            <li><a href="#/dashboard">Beranda</a></li>
            <li><a href="#/laporan">Laporan</a></li>
            <li><a href="#/laporan-user">Laporan Kamu</a></li>
            <li><a href="#/about">Tentang Kami</a></li>
          </ul>
          <div class="navbar-right">
            <i class="fas fa-bell" id="notification-bell"></i>
            <div class="notification-wrap" id="notificationWrap">
              <div class="notification-menu">
                <div class="notification-item">
                  <span class="notif-badge selesai">● Laporan Selesai</span>
                  <span class="notif-time">2 hari yang lalu</span>
                  <p>✅ Hore! Laporan Anda telah diproses dengan sukses. Silakan cek hasilnya!</p>
                </div>
                <div class="notification-item">
                  <span class="notif-badge diproses">● Laporan Diproses</span>
                  <span class="notif-time">2 hari yang lalu</span>
                  <p>🔄 Sedang Diproses! Tim kami sedang memproses laporan Anda. Harap tunggu ya!</p>
                </div>
                <div class="notification-item">
                  <span class="notif-badge selesai">● Laporan Selesai</span>
                  <span class="notif-time">2 hari yang lalu</span>
                  <p>✅ Hore! Laporan Anda telah diproses dengan sukses. Silakan cek hasilnya!</p>
                </div>
                <div class="notif-footer">
                  <a href="#/notifikasi">Lihat semua notifikasi →</a>
                </div>
              </div>
            </div>
            <div class="user" id="user-profile">
              <img src="../images/profil.webp" alt="User Profile" id="user-avatar">
              <span id="user-name">Loading...</span>
              <div class="sub-menu-wrap" id="subMenu">
                <div class="sub-menu">
                  <div class="sub-menu-list">
                    <ul>
                      <li><a href="#/profile"><i class="fas fa-user"></i> Profil</a></li>
                      <li><a href="#/login"><i class="fas fa-sign-out-alt"></i> Keluar</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    `;

    const subMenu = this.querySelector('#subMenu');
    const userProfile = this.querySelector('#user-profile');

    // Event listener untuk toggle menu
    userProfile.addEventListener('click', (event) => {
      event.preventDefault(); // Mencegah perilaku default (jika ada)
      subMenu.classList.toggle('open-menu');
    });

    // Event listener untuk navigasi pada menu
    const menuItems = subMenu.querySelectorAll('a');
    menuItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        const { target } = event;
        const href = target.getAttribute('href');
        if (href) {
          window.location.hash = href;
          subMenu.classList.remove('open-menu');
        }
      });
    });

    const bellIcon = this.querySelector('#notification-bell');
    const notificationWrap = this.querySelector('#notificationWrap');

    // Event listener untuk toggle notifikasi
    bellIcon.addEventListener('click', (event) => {
      event.stopPropagation();
      notificationWrap.classList.toggle('open-menu');
    });

    // Menutup dropdown notif saat klik di luar
    document.addEventListener('click', (event) => {
      if (
        !notificationWrap.contains(event.target)
        && !bellIcon.contains(event.target)
      ) {
        notificationWrap.classList.remove('open-menu');
      }
    });

    // Menutup submenu user saat klik di luar
    document.addEventListener('click', (event) => {
      if (
        !subMenu.contains(event.target)
        && !userProfile.contains(event.target)
      ) {
        subMenu.classList.remove('open-menu');
      }
    });

    // Event listener untuk hamburger button
    const hamburgerButton = this.querySelector('#hamburger-navbar');
    const navbarMenu = this.querySelector('#navbarMenu');
    hamburgerButton.addEventListener('click', () => {
      navbarMenu.classList.toggle('open-menu');
    });

    this.loadUserData();
    this.setActiveMenuItem();
    window.addEventListener('hashchange', () => this.setActiveMenuItem());
  }

  setActiveMenuItem() {
    const currentHash = window.location.hash;
    const menuItems = this.querySelectorAll('.navbar-menu a');

    menuItems.forEach((item) => {
      if (item.getAttribute('href') === currentHash) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  showNotificationDetails() {
    window.location.hash = '#/notifikasi';
  }

  async loadUserData() {
    const userId = localStorage.getItem('userId');
    const authToken = localStorage.getItem('authToken');

    if (!userId || !authToken) {
      console.error('User ID atau Auth Token tidak ditemukan di localStorage');
      return;
    }

    try {
      const response = await fetch(
        `https://backend-sipraja.vercel.app/api/v1/user/${userId}`,
        {
          method: 'GET',
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          },
        },
      );

      if (!response.ok) {
        throw new Error('Gagal mengambil data pengguna');
      }

      const data = await response.json();

      const userAvatar = this.querySelector('#user-avatar');
      const userName = this.querySelector('#user-name');

      userAvatar.src = data.image || '../images/profil.webp';
      userName.textContent = data.nama || 'Nama tidak tersedia';
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
}

customElements.define('navbar-component', Navbar);
