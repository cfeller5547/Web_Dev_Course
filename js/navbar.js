document.getElementById("navbar-container").innerHTML = `
<header id="header" class="site-header header-scrolled position-fixed text-black bg-light">
<nav id="header-nav" class="navbar navbar-expand-lg px-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">
      <img src="images/main-logo.svg" class="logo">
    </a>
    <button class="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <svg class="navbar-icon">
        <use xlink:href="#navbar-icon"></use>
      </svg>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
      <div class="offcanvas-header px-4 pb-0">
        <a class="navbar-brand" href="index.html">
          <img src="images/main-logo.png" class="logo">
        </a>
        <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
      </div>
      <div class="offcanvas-body">
        <ul id="navbar" class="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link me-4 active" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link me-4" href="#company-services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link me-4" href="#mobile-products">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link me-4" href="#smart-watches">Watches</a>
          </li>
          <li class="nav-item">
            <a class="nav-link me-4" href="shop.html">Shop</a>
          </li>
          <li class="nav-item">
            <a class="nav-link me-4" href="#latest-blog">Blog</a>
          </li>
          <li class="nav-item">
            <div class="user-items ps-5">
              <ul class="d-flex justify-content-end list-unstyled">
                <li class="search-item pe-3">
                  <a href="#" class="search-button">
                    <svg class="search">
                      <use xlink:href="#search"></use>
                    </svg>
                  </a>
                </li>
                <!-- Dropdown for user actions starts here -->
                <li class="pe-3 dropdown">
                  <a href="#" id="userDropdown" role="button" data-bs-toggle="false" aria-expanded="false">
                    <svg class="user" onclick="toggleDropdown()">
                      <use xlink:href="#user"></use>
                    </svg>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="userDropdown">
                    <li><a class="dropdown-item" href="login.html">Login</a></li>
                    <li><a class="dropdown-item" href="createAccount.html">Signup</a></li>
                  </ul>
                </li>
                <li>
                  <a href="cart.html">
                    <svg class="cart">
                      <use xlink:href="#cart"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</header>
`;
