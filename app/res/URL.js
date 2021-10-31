/**
 *
 * URL which will be used for API calling should be declared in this file.
 */

export const AppInfo = {
  baseUrlAPI: 'http://13.238.112.149:8000/auth',
  apiVersion: '',
  serviceTimeOut: 20000,
};

export const apis = {
  getRequest: 'GET',
  postRequest: 'POST',
  deleteRequest: 'DELETE',
  putRequest: 'PUT',
  //   baseURL: AppInfo.baseUrlAPI + '/' + AppInfo.apiVersion + '/',
  baseURL: AppInfo.baseUrlAPI + '/',

  diet_lst: 'get_eating_preferences/',
  allergens_lst: 'get_allergens/',
};
