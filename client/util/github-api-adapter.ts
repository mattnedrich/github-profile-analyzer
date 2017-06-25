import Api from './api';
import ApiUrlBuilder from './api-url-builder';

interface UserProfileInfo {
  name?: string,
  company?: string,
  location?: string,
  bio?: string,
  reposUrl: string,
  accountCreated: string
}

type Promise<S> = JQueryPromise<S>;

const GithubApiAdapter = {
  getUserProfile: (username: string): Promise<UserProfileInfo> => {
    const profileUrl = ApiUrlBuilder.profileUrl(username);
    return Api.get(profileUrl)
      .then((response) => {
        return {
          name: response.name,
          company: response.company,
          location: response.location,
          bio: response.bio,
          reposUrl: response.repos_url,
          accountCreated: response.created_at
        }
      });
  }
}

export {UserProfileInfo};
export default GithubApiAdapter;
