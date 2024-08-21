export interface Iregisteruser{
        email: string,
        userName: string,
        password: string
}

export interface Iregisterresponse {
    status: number
    responseData:any
    errors:any
  }
  