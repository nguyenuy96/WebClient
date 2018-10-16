export interface Role{
    id: number;
    account_role:string;
}
export class RoleImp implements Role{
    id: number;
    account_role: string;sfasdf
    
    setAcccountRole(account_role : string) {
        this.account_role = account_role;
    }
    
    public get getAccountRole() : string {
        return this.account_role;
    }
    
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