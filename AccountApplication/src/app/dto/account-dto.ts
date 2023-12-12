export class AccountDTO {

    balance:number;
    loc:string;
    mobilePin:number;
    accountType:string;
    panNumber:string;

    constructor(
        balance:number,
    loc:string,
    mobilePin:number,
    accountType:string,
    panNumber:string
    ){
        this.balance=balance;
        this.loc=loc;
        this.mobilePin=mobilePin;
        this.accountType=accountType;
        this.panNumber=panNumber;

    }

    
}
// @Min(value = 1000,message="Your balance must be minimum 1000")
// 	private int balance;
// 	@Size(min = 2,max=5,message = "only city name having length bw 2-5 are allowed")
// 	private String loc;
// 	@NotNull(message = "mobile pin cannot be null")
// 	private int mobilePin;
// 	@NotNull(message = "mobile pin cannot be null")
// 	private String accountType;
// 	private String panNumber;