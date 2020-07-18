export interface Receipt {
    transactionId?: string,
    amount: number,
    customerId: string,
    bookname: string,
    cardLast4Digits: string
}
