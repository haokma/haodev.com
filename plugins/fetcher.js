export default function ({ $axios }, inject) {
  const options = {
    baseURL: 'https://dev.to/api',
    credentials: true,
  };
  const fetcher = $axios.create(options);
  fetcher.getManual = (url, data = {}) => {
    return fetcher
      .get(url, { params: { ...data } })
      .then((response) => {
        if (response.data && response.data.code === 101) {
          return Promise.resolve(response);
        }
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.log('error', error);
        return Promise.reject(error);
      });
  };
  inject('fetcher', fetcher);
}
