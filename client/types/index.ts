import { ProgrammingLanguage } from './programming-language';

export interface GitHubUserProfile {
  username: string,
  name: string,
  location: string,
  description: string,
  profileImageUrl: string,
  company: string,
  website: string,
}

export interface GitHubRepository {
  name: string,
  description: string,
  starCount: number,
  forkCount: number,
  issueCount: number,
  created: Date,
  modified: Date,
  isFork: boolean,
  language: ProgrammingLanguage,
  url: string,
}

