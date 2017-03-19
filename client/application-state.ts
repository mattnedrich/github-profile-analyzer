export type ApplicationState = {
  username: string | undefined,
  fetchingUserProfile: boolean
}

const applicationState: ApplicationState  = {
  username: null,
  fetchingUserProfile: false
};

export default applicationState;
