export interface Role {
    id: number;
    roleName: string;
    searchName:string;
}
export interface Account {
    id: number;
    username: string;
    password: string;
    role: Role;
    customer: Customer;
    employee: Employee;
}


export interface Customer {
    id: number;
    name: string;
    phoneNumber: string;
    address: string;
}

export interface Employee {
    id: number;
    name: string;
    phoneNumber: string;
    address: string;
    gender: string;
    nationality: string;
    identification: string;
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
export interface Country {
    countryId: number,
    countryName: string
}
export interface TradeMark {
    tradeMarkId: number,
    tradeMark: string,
    country: Country
}
export interface Weight {
    weightId: number,
    startWeight: number,
    endWeight: number,
    size: string
}
export interface Age {
    ageId: number,
    startAge: number,
    endAge: number
}
export interface ProductType {
    productTypeId: number,
    productType: string
}
export interface Promotion {
    promotionId: number,
    promotion: string
}
export interface Image {
    imageId: number,
    imageName: string
}

export interface Warehouse {
    warehouseId: number;
    warehouseName: string;
}
export interface Product {
    productId: number,
    productName: string,
    ingredient: string,
    manufDate: string,
    expiryDate: string,
    useObject: string,
    useGuide: string,
    net: number,
    note: string,
    guarantee: string,
    unitPrice: number,
    preservation: string,
    outstdFeatures: string,
    description: string,
    tradeMark: TradeMark,
    weight: Weight,
    age: Age,
    promotionId: Promotion,
    productType:ProductType,
    image:Image
}