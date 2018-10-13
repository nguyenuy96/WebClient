export interface Role{
    id: number;
    account_role:string;
}
export interface Account{
    id:number;
    username: string;
    password: string;
    role: Role;
}
export interface Customer {
    id: number;
    fullname: string;
    phone: string;
    address: string;
    account: Account;    
}

export interface Employee {
    id: number;
    fullname: string;
    phone: string;
    address: string;
    gender: string;
    nationality: string;
    identification: string;
    account: Account;
}