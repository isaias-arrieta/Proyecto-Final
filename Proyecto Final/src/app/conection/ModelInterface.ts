export interface data_login{
    email: string
    password: string,
}
export interface data_user{
    id:string,
    name: String,
    middleName: String
    LastName: String,
    email: String,
    hash: String,
    administrator: String
}
export interface data_path{
    id:string,
    filetype: string,
    name: string,
    filePath: string,
    userID: string
}
