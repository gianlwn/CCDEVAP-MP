function loadTopNav() {
  const html = `
    <nav class = "top-nav">

    <div class = "nav-brand">
      <!-- <img src="..."> --> 
      <span> CampusCart </span>
    </div>

    <div class = "nav-icons">
      <button id = "theme-toggle" onclick="toggleTheme()"> 🌙 </button>
      <button id = "notifications"> 🔔 </button>
      <button id = "cart" onclick = "window.location.href='../homepage/cart.html'"> 🛒 </button>
      <button id = "home" onclick = "window.location.href='../homepage/homepage.html'"> 🏠 </button>
      <button id = "profileView" onclick="window.location.href='../user-dashboard/dashboard.html'"> 👤</button>
    </div>
  </nav>
  `;

  document.getElementById("top-nav").innerHTML = html;
}

function loadSideNav() {
  const currentPage = window.location.pathname;

  function isActive(page) {
    return currentPage.includes(page) ? "active" : "";
  }

  const html = `
    <aside class = "side-nav">

      <ul>
        <li class="${isActive("dashboard")}">
          <a href = "../user-profile-dashboard/dashboard.html">
            <span class ="icon"> 📋 </span> Overview
          </a>
        </li>

        <li class="${isActive("userListings")}">
          <a href ="../user-profile-dashboard/userListings.html">
            <span class = "icon"> 🏷️ </span> Listings
          </a>
        </li>
        
        <li class="${isActive("claimed")}">
          <a href ="../user-profile-dashboard/claimed.html">
            <span class = "icon"> 🛍️ </span> Claimed
          </a>
        </li>
        
        <li class="${isActive("ratings")}">
          <a href = "../user-profile-dashboard/ratings.html">
            <span class = "icon"> ⭐ </span> Ratings
          </a>
        </li>

        <li class="${isActive("profile")}">
          <a href = "../user-profile-dashboard/profile.html">
            <span class = "icon"> 👤</span> Profile
          </a>
        </li>

      </ul>

      <button class="signout-btn">Sign Out</button>

    </aside>
    `;

  document.getElementById("side-nav").innerHTML = html;
}

function loadAdminSideNav() {
  const html = `
  <div class="app-body">
    <aside class="side-nav">
      <div class="nav-links">
        <a href="listingApproval.html" class="nav-item">Listings Approval</a>
        <a href="reports.html" class="nav-item">Reports</a>
        <a href="users.html" class="nav-item">Users</a>
        <a href="categories.html" class="nav-item">Categories</a>
        <a href="admins.html" class="nav-item">Admins</a>
      </div>
      <div class="sign-out-box">
        <a href="" class="sign-out-button">Sign Out</a>
      </div>
    </aside>

    <div class="main-container">
      <div class="sub-header">
        <h2>Admin Panel</h2>
        <div class="login-status">
          Logged in as <strong>Administrator</strong>
        </div>
      </div>
      
      <main class="main-container">
        <div class="placeholder-card">
          stuff here..
        </div>
      </main>
    </div>
  </div>
  `;
}

function createClaimedRow(item) {
  return `
  
    <div class="claimed-row">
    
      <div class="spacing"></div>
      
      <div class="item-info">
        <p class="item-name">${item.name}</p>
        <p class="item-meta">${item.price} · ${item.category}</p>
      </div>
      
      <div class="item-stars">${renderStars(item.rating)}</div>
      
      <button class="msg-btn" onclick="window.location.href='../user-dashboard/dashboard.html'" >💬</button>
      
    </div>
    
  `;
}

function createRatingsRow(item) {
  return `
    <div class ="ratings-row">
    
      <div class="spacing"></div>
        
      <div class ="item-info">
        <p class="item-name">${item.name}</p>
        <p class="item-meta">${item.price} · ${item.category}</p>
      </div>
      
      <div class = "item-stars">
          ${renderStars(item.rating)}
      </div>
      
      <div class="row-actions">
          <button>✏️</button>
          <button>🗑️</button>
      </div>
          
    </div>
  `;
}

function renderStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? "★" : "☆";
  }

  return stars;
}

function loadClaimedRows(containerId) {
  fetch("../data/mock-claimed.json")
    .then((res) => res.json())
    .then((items) => {
      const container = document.getElementById(containerId);
      container.innerHTML = items
        .map((item) => createClaimedRow(item))
        .join("");
    });
}

function loadRatingsRows(containerId) {
  fetch("../data/mock-ratings.json")
    .then((res) => res.json())
    .then((items) => {
      const container = document.getElementById(containerId);
      container.innerHTML = items
        .map((item) => createRatingsRow(item))
        .join("");
    });
}
