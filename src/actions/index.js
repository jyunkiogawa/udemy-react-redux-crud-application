// アクション
import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

// イベントのcrud処理に共通で使うものなのでここで定義しておく
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
// curlコマンドでapiサーバーと通信した時と同じもの
const QUERYSTRING = '?token=token123'

// 非同期処理を実装
export const readEvents = () => async dispatch => {
  // axiosnによるhttpリクエストの送信
  // 戻り値が非同期処理（promise)になってしまうのでawaitを使う
  // const response = await axios.get(`${ROOT_URL}/evemts${QUERYSTRING}`)
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  dispatch({ type: READ_EVENTS, response })
}
