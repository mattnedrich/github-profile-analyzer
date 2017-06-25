
const Api = {
  get: (url: string) => {
    return $.get(url)
      .then((result: any) => {return result})
  }
}

export default Api;
