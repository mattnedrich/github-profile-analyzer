
const apiUrlBase = 'https://api.github.com/users/';

const ApiUrlBuilder = {
  profileUrl: (username: string): string => {
    return apiUrlBase + username;
  }
}

export default ApiUrlBuilder;
