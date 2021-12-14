import request from '@/plugins/request'

export default class Beers {
  async list (page = 1): Promise<any> {
    return await request.get('api/beers?page=' + page)
  }
}
