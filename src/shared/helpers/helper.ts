import { GITHUB_API_URL } from "../../config";
import { Settings, contributorData } from "../interfaces/interfaces";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const getData = async (url: string): Promise<any> => {
  const response = await fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
      redirect: 'follow',
  });

  if (response.ok) {
      return response.json();
  }

  if (!response.ok && response.status === 404) {
    throw new Error('Invalid values :(');
  }

  throw new Error('Something went wrong :(');
};



export const getReviewers = async (login: string, repo: string): Promise<contributorData[]> => {
  return await getData(`${GITHUB_API_URL}/repos/${login}/${repo}/contributors`)
}

export const getRandomElementFromArray = <T>(array: Array<T>): T => {
  return array[Math.floor(Math.random() * array.length)]
}

export const isStorageAvailable = () => {
  let storage;
  const type = 'localStorage';

  try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  } catch (e) {
      return (
          e instanceof DOMException &&
          (e.code === 22 ||
              e.code === 1014 ||
              e.name === 'QuotaExceededError' ||
              e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          storage &&
          storage.length !== 0
      );
  }
}

export const saveSettingsInLocalStorage = (key: string, data: Settings): void => {
  if (!isStorageAvailable()) {
      return;
  }

  try {
      localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
      localStorage.removeItem(key);
  }
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const getSettingsFromLocalStorage = (key: string): Settings | {} => {
  if (!isStorageAvailable()) {
      return {};
  }

  const storageData = localStorage.getItem(key);
  if (storageData !== null) {
      try {
          const data = JSON.parse(storageData) as unknown[];
          return data;
      } catch (error) {
          return {};
      }
  }
  return {};
};

export const timeout = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
