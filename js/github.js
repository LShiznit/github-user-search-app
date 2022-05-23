class Github {
  constructor() {
    this.client_id = '1d175955353c8bc2cd9b'
    this.client_secret = '82ddb728def81e7eb3333da51db8f9a328786c45'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const userResponse = await fetch(
      `https://api.github.com/users/${user}?&client_id=${this.client_id}&client_secret=${this.client_secret}`
    )
    const userProfile = await userResponse.json()

    return {
      userProfile,
    }
  }
}
