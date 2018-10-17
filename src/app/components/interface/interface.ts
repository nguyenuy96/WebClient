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

export class AccountImpl implements Account {
    public set id(id: number) {
        this.id = id;
    }
    public set username(username: string) {
        this.username = username;
    }
    public set password(password: string) {
        this.password = password;
    }
    public set role(role: Role) {
        this.role = role;
    }
    public get id() {
        return this.id;
    }
    public get username() {
        return this.username;
    }
    public get password() {
        return this.password;
    }
    public get role() {
        return this.role;
    }
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