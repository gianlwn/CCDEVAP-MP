function loadAdminSideNav(page) {
  const html = `
    <div class="nav-links">
      <a href="adminDashboard.html" class="nav-item">Admin Dashboard</a> 
      <a href="listingApproval.html" class="nav-item">Listings Approval</a>
      <a href="reports.html" class="nav-item">Reports</a>
      <a href="users.html" class="nav-item">Users</a>
      <a href="categories.html" class="nav-item">Categories</a>
      <a href="admins.html" class="nav-item">Admins</a>
    </div>
    <div class="sign-out-box">
      <a href="#" class="sign-out-btn">Sign Out</a>
    </div>
  `;

  const sidebar = document.getElementById("admin-side-nav");
  sidebar.innerHTML = html;

  const activeLink = sidebar.querySelector(`a[href="${page}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }
}