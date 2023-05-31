import type { Axios, AxiosRequestHeaders, AxiosResponse } from 'axios'
import axios from 'axios'
import qs from 'qs'
import { ElNotification } from 'element-plus'
import {
  apiCodeAdaptor,
  authCodeAdaptor,
  networkCodeAdaptor,
} from './code'
import type {
  RequestOptions,
  ResponseData,
} from './types'
import { RequestHeaderEnum, StorageKeyEnum } from '@/constants/enums'

import { getStorage } from '@/utils/storage'
import { _t } from '@/plugins/vue-i18n'

export function addInterceptorsRequest(axios: Axios,
  options: RequestOptions): number {
  return axios.interceptors.request.use((config) => {
    if (options.isTime)
      config.params[RequestHeaderEnum.HEADER_TIME] = new Date().getTime()

    if (options.headers) {
      config.headers = { ...config.headers, ...options.headers } as AxiosRequestHeaders
      if (options.isToken) {
        config.headers[RequestHeaderEnum.HEADER_TOKEN] = getStorage(
          StorageKeyEnum.TOKEN,
        )
      }
    }
    if (
      Object.values(config.headers).includes(
        RequestHeaderEnum.CONTENT_TYPE_BODY,
      )
    )
      config.data = qs.stringify(config.data)

    return config
  })
}

export function addInterceptorsResponse(axios: Axios,
  options: RequestOptions): number {
  return axios.interceptors.response.use((response) => {
    if (options.networkCodeAdaptor) {
      networkCodeAdaptor(response.status, _t, ({ message }) => {
        ElNotification({
          title: _t('base.network.error'),
          message,
          type: 'error',
        })
      })
    }
    if (options.apiCodeAdaptor) {
      apiCodeAdaptor(response.data, _t, ({ message }) => {
        ElNotification({
          title: _t('base.api.error'),
          message,
          type: 'error',
        })
      })
    }
    if (options.authCodeAdaptor) {
      authCodeAdaptor(response.data, _t, ({ message }) => {
        ElNotification({
          title: _t('base.authentication.error'),
          message,
          type: 'error',
        })
      })
    }
    return response
  })
}

export function request<T>(options: RequestOptions): Promise<any | ResponseData<T> | undefined> {
  const _axios: Axios = axios.create()
  addInterceptorsRequest(_axios, options)
  addInterceptorsResponse(_axios, options)
  return new Promise((resolve) => {
    _axios
      .request({
        baseURL: options.baseURL || import.meta.env.APP_REQUEST_URL,
        url: options.url,
        method: options.method,
        timeout: options.timeout || 30000,
        headers: {
          'Content-Type': RequestHeaderEnum.CONTENT_TYPE_JSON,
          ...options.headers,
        },
        params: options.params,
        data: options.data,
      })
      .then((res: AxiosResponse<any, any>) => {
        resolve(res.data as ResponseData<T>)
      })
      .catch((error) => {
        resolve({
          code: error.response.status,
          msg: error.response.statusText,
          data: error.data,
        } as ResponseData<T>)
      })
  })
}