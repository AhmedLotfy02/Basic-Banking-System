
export interface history{
    to:string,
    from:string,
    value:number,
    date:string,
    send:boolean
}

export interface customer{
    name:string,
    email:string,
    currentBalance:number,
    history:history[]

}