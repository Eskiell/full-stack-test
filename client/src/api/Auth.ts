import request from '@/plugins/request'
import {
  loginRequestInterface,
  newPasswordRequestInterface,
  registerRequestInterface,
  resetPasswordRequestInterface
} from '@/api/interface/Auth'
import { User } from '@/api/interface/Users'

export default class Auth {
  async register (obj: registerRequestInterface): Promise<User> {
    return await request.post('api/users', obj)
  }

  async login (obj: loginRequestInterface): Promise<User> {
    return await request.post('api/login', obj)
  }

  async resetPassword (obj: resetPasswordRequestInterface): Promise<void> {
    return await request.post('api/password-reset-Link', obj)
  }

  async newPassword (data: newPasswordRequestInterface): Promise<void> {
    return await request.post('api/new-password', data)
  }

  async refresh (token: string): Promise<void> {
    return await request.patch('api/refresh', token)
  }

  async revoke (): Promise<void> {
    return await request.delete('api/revoke/current-access-token')
  }
}
