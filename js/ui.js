class UI {
  constructor() {
    this.profile = document.getElementById('profile')
  }

  // Display profile in UI
  showProfile(user) {
    console.log(user)

    this.profile.innerHTML = `
      <div class="grid-container card">
        <!-- desktop 3x4 -->
        <div class="profile-image"></div>
        <div class="profile-name">
          <h1>The Octocat</h1>
          <h3>@octocat</h3>
        </div>
        <div class="profile-join"><h4>Joined 25 Jan 2011</h4></div>
        <div class="profile-about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          consequuntur inventore omnis reiciendis?
        </div>
        <div class="profile-metrics flex-container">
        <div class="metric">
          <h4>Repos</h4>
          <h1>8</h1>
        </div>
        <div class="metric">
          <h4>Followers</h4>
          <h1>3938</h1>
        </div>
        <div class="metric">
          <h4>Following</h4>
          <h1>9</h1>
        </div>
      </div>
      <div class="profile-links grid-container">
        <div class="link-location">
          <a href="#"><h4>San Francisco</h4></a>
        </div>
        <div class="link-website">
          <a href="#"><h4>https://github.blog</h4></a>
        </div>
        <div class="link-twitter">
          <a href="#"><h4>Not available</h4></a>
        </div>
        <div class="link-github">
          <a href="#"><h4>@github</h4></a>
        </div>
      </div>
    </div>
    `
  }

  //   // Show alert message
  //   showAlert(message, className) {
  //     // Clear any remaining alerts
  //     this.clearAlert()

  //     // Create div
  //     const div = document.createElement('div')
  //     // Add classess
  //     div.className = className
  //     // Add text
  //     div.appendChild(document.createTextNode(message))
  //     // Get parent
  //     const container = document.querySelector('.searchContainer')
  //     // Get search box
  //     const search = document.querySelector('.search')
  //     // Insert alert
  //     container.insertBefore(div, search)

  //     // Timeout after 3 seconds
  //     setTimeout(() => {
  //       this.clearAlert()
  //     }, 3000)
  //   }

  //   // Clear alert message
  //   clearAlert() {
  //     const currentAlert = document.querySelector('.alert')

  //     if (currentAlert) {
  //       currentAlert.remove()
  //     }
  //   }

  //   // Clear profile
  //   clearProfile() {
  //     //not working, should clear profile data
  //     this.profile.innerHTML = ''
  //   }
}
