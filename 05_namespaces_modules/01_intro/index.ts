namespace Payment {
  export class Invoice {
    constructor(public amount: number) {}
  }

  export function computeTotal(invoices: Invoice[]) {
    return invoices.reduce((prev, cur) => (prev += cur.amount), 0);
  }
}

const invoices: Payment.Invoice[] = [
  { amount: 10 },
  { amount: 100 },
  { amount: 15 },
];
const total = Payment.computeTotal(invoices);
console.log("Total:", total);
