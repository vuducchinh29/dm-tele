import envPaths from 'env-paths';
import { LocalStorage } from 'node-localstorage';

let localStorage = null;

function getLocalStorage() {
  if (localStorage) {
    return localStorage;
  }

  const paths = envPaths('@mtproto/core', {
    suffix: '',
  });

  localStorage = new LocalStorage(paths.data);

  console.log(`Auth data is located in ${paths.data}`);

  return localStorage;
}

export { getLocalStorage };
