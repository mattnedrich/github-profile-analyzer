import ApiUrlBuilder from '../client/util/api-url-builder';

describe('ApiUrlBuilder', () => {
  describe('.profileUrl', () => {
    it('works for a simple username', () => {
      const url = ApiUrlBuilder.profileUrl('bobcobb');
      expect(url).toEqual('https://api.github.com/users/bobcobb');
    });
  });
});
