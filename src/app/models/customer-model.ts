
export interface history{
    to:string,
    value:number,
    date:string
}

export interface customer{
    name:string,
    email:string,
    currentBalance:number,
    history:history[]

}