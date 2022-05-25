class UI {
  constructor() {
    this.profile = document.getElementById('profile')
  }

  // Display profile in UI
  showProfile(user) {
    console.log(user)

    this.profile.innerHTML = ''
    this.profile.innerHTML = `
      <div class="grid-container card">
        <div class="profile-image"></div>
        <div class="profile-name">
          <h1>${user.name}</h1>
          <a href="${user.html_url}"><h3>@${user.login}</h3></a>
        </div>
        <div class="profile-join"><h4>Joined ${giveJoinDate(
          user.created_at
        )}</h4></div>
        <div class="profile-about">${user.bio}</div>
        <div class="profile-metrics flex-container">
        <div class="metric">
          <h4>Repos</h4>
          <h1>${user.public_repos}</h1>
        </div>
        <div class="metric">
          <h4>Followers</h4>
          <h1>${user.followers}</h1>
        </div>
        <div class="metric">
          <h4>Following</h4>
          <h1>${user.following}</h1>
        </div>
      </div>
      <div class="profile-links grid-container">
        <div class="link-location">
          <a href="#"><h4>${user.location}</h4></a>
        </div>
        <div class="link-website">
          <a href="${user.blog}"><h4>${user.blog}</h4></a>
        </div>
        <div class="link-twitter">
          <a href="https://twitter.com/${user.twitter_username}"><h4>@${
      user.twitter_username
    }</h4></a>
        </div>
        <div class="link-github">
          <a href="${user.html_url}"><h4>@${user.login}</h4></a>
        </div>
      </div>
    </div>
    `

    function giveJoinDate(e) {
      const joinDate = e.split('T')[0].split('-')
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
      ]
      return joinDate[2] + ' ' + months[joinDate[1] - 1] + ' ' + joinDate[0]
    }
  }
}
