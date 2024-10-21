export interface IProductInfo {
    country: string, // e.g "NG", "US"
    reference: string,
    amount: {
        total: number,
        currency: string // e.g "NGN", "USD"
    },
    returnUrl: string,
    product: {
        description:string,
        name:string,
        reference?: string
    },
    // productList: {
    //     productId:string,
    //     name:string,
    //     description:string,
    //     price:number,
    //     quantity:number,
    //     imageUrl?:string
    // }[],
    callbackUrl?: string,
    cancelUrl?: string,
    displayName?:string,
    expireAt?:number,
    sn?:string,
    userInfo?:{
            userEmail?:string,
            userId?:string,
            userMobile?:string,
            userName?:string
    },
    payMethod?:string,
    userClientIP?: string
}