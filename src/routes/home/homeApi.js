import r2 from 'r2'
import { get } from 'lodash'

async function getMessage () {
  const result = await r2('/api/home/message').json

  return get(result, 'message', 'No property called \'message\' available')
}

export default {
  getMessage
}
