/*
能发送ajax请求的函数
包装axios
返回值是promise对象
 */

import axios from "axios"

export default function ajax(url, data={}, method="GET") {
  return new Promise((resolve, reject) => {
    let promise
    if(method==='GET') {
      //return axios.get(url, {params: data})
      // 拼query请求参数串
      let queryStr = ''
      Object.keys(data).forEach(key => {
        const value = data[key]
        queryStr += `${key}=${value}&`

      })
      // let queryStr = Object.keys(data).reduce((pre, key) => pre + `${key}=${data[key]}&`, '')

      if(queryStr!=='') { // username=tom&password=123&
        queryStr = queryStr.substring(0, queryStr.length-1) // username=tom&password=123
        url += '?' + queryStr  // /Login/?username=tom&password=123
      }
      promise = axios.get(url) // url?username=tom&password=123
      // return axios.get(url, {params: data}) // url?username=tom&password=123
    } else {
      promise = axios.post(url, data)
    }

    promise.then(response => {  //成功的回调就是异步返回的response
      // 异步请求成功
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}


/*
return axios.get(url)
return axios.post(url)    异步返回的是 response  调用resolve传的是response

* 无论是get 或 post 它的返回值都是 promise 我们最终简化的是不用promise 用  async
* const promise = ajax("/xxx") 这是promise返回的值
*
* const response = await ajax("/xxx")
*const result = response.data
* if(result.code===0){}
*
*
*
* 希望直接得到结果 resolve(response.data)
* 那得到的就是 result
* */
