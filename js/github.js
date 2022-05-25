class Github {
  constructor() {
    // this.client_id =
    // this.client_secret =
  }

  async getUser(user) {
    const userResponse = await fetch(`https://api.github.com/users/${user}?`)
    const userProfile = await userResponse.json()

    return {
      userProfile,
    }
  }
}
