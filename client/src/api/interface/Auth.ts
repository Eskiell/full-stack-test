export interface registerRequestInterface {
  name: string,
  email: string,
  password: string,
  // eslint-disable-next-line camelcase
  password_confirmation: string
}

export interface loginRequestInterface {
  email: string,
  password: string,
}

export interface resetPasswordRequestInterface {
  email: string
}

export interface newPasswordRequestInterface {
  token: string,
  email: string,
  password: string,
  // eslint-disable-next-line camelcase
  password_confirmation: string
}
