export interface Role {
    id: number;
    account_role: string;
}
export interface Account {
    id: number;
    username: string;
    password: string;
    role: Role;
}


export interface Customer {
    id: number;
    name: string;
    phoneNumber: string;
    address: string;
    account: Account;
}

export interface Employee {
    id: number;
    name: string;
    phoneNumber: string;
    address: string;
    gender: string;
    nationality: string;
    identification: string;
    account: Account;
}
export interface UserProfile{
    id: number;
    name: string;
    phoneNumber: string;
    address: string;
    gender: string;
    nationality: string;
    identification: string;
    account: Account;
}