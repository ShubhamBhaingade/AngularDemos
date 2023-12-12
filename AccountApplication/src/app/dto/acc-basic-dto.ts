export class AccBasicDTO {
    balance:number;
    loc:string;
    mobilePin:number;
    accountType:string;
    pan:string;
    status:boolean;

    constructor(
        balance:number,
    loc:string,
    mobilePin:number,
    accountType:string,
    pan:string,
    status:boolean
    ){
        this.balance=balance;
        this.loc=loc;
        this.mobilePin=mobilePin;
        this.accountType=accountType;
        this.pan=pan;
        this.status=status
    }

}
// private int balance;
// 	private String loc;
// 	private int mobilePin;
// 	private String accountType;
// 	private String pan;
// 	private boolean status;

