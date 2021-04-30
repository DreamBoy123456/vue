// import axios from 'axios'
// export function getUserList() {
//  return axios.get('api/user/getlist')
// }
// // export function addUser(params) {
// //  return axios.post('api/user/add', {name:'undefined'})
// // }

import request from '@/utils/request'
 
export function getUserList(params) {
 return request({
  url: 'api/user/getlist',
  method: 'get',
  params
 })
}
export function addUser(query) {
 return request({
  url: 'api/user/add',
  method: 'post',
  data: query
 })
}