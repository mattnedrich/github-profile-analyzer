export interface GitHubRepository {
  name: string,
  description: string,
  starCount: number,
  forkCount: number,
  issueCount: number,
  created: Date,
  modified: Date
}

export interface ProgrammingLanguage {
  displayName: string,
  id: number
}
