import request from '@/plugins/request'
import { patchRequestInterface, updateRequestInterface, User } from '@/api/interface/Users'

export default class Users {
  async profile (): Promise<User> {
    return await request.get('users')
  }

  async update (obj: updateRequestInterface): Promise<User> {
    return await request.put('users', obj)
  }

  async patch (obj: patchRequestInterface): Promise<User> {
    return await request.patch('users', obj)
  }

  async delete (): Promise<void> {
    return request.delete('users')
  }
}
