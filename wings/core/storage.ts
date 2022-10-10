import type { AppStorageOptions } from '#/app/app-storage.d';
import { isNullOrUndefined } from './utils/common';

/**
 * @name storageType
 * @param type
 * @return storage
 */
export const storageType = (type: string): Storage => {
  return type === 'local' ? localStorage : sessionStorage;
};

/**
 * @name setStorage
 * @param key
 * @param data
 * @param options
 */
export const setStorage = (
  key: string,
  data: any,
  options?: AppStorageOptions
): void => {
  key = `${import.meta.env.APP_STOREAGE_PREFIX as unknown as string}-${key}`;
  options = {
    type: import.meta.env.APP_STOREAGE_TYPE,
    isTemplate: false,
    isJSON: true,
    ...options,
  };
  storageType(options.type as unknown as string).setItem(
    key,
    options.isTemplate
      ? JSON.stringify({
          user: options.user,
          time: new Date().getTime(),
          data,
          desc: options.desc,
        })
      : options.isJSON
      ? JSON.stringify(data)
      : data
  );
};

/**
 * @name getStorage
 * @param key
 * @param options
 * @return data
 */
export const getStorage = (key: string, options?: AppStorageOptions): any => {
  key = `${import.meta.env.APP_STOREAGE_PREFIX as unknown as string}-${key}`;
  options = {
    type: import.meta.env.APP_STOREAGE_TYPE,
    isTemplate: false,
    isJSON: true,
    ...options,
  };
  const data: any | null = storageType(
    options.type as unknown as string
  ).getItem(key);
  if (options.isDelete) {
    storageType(options.type as unknown as string).removeItem(key);
  }
  return isNullOrUndefined(data)
    ? options.defaultData
      ? options.defaultData
      : null
    : options.isTemplate
    ? data
      ? JSON.parse(data)
      : options.defaultData
    : options.isJSON
    ? JSON.parse(data)
    : data;
};

/**
 * @name removeStorage
 * @param key
 * @param type
 */
export const removeStorage = (key: string, type?: string): void => {
  key = `${import.meta.env.APP_STOREAGE_PREFIX as unknown as string}-${key}`;
  storageType(type || import.meta.env.APP_STOREAGE_TYPE).removeItem(key);
};
