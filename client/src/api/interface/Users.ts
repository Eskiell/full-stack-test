export interface User {
  user: {
    name: string,
    email: string,
    token: string,
    roles: string[]
  }
}

export interface updateRequestInterface {
  name: string,
  email: string,
}

export interface patchRequestInterface {
  name?: string,
  email?: string,
}
