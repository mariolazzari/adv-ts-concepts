export interface IDocument {
  name: string;
  postfix: string;
  content: string;
  print(): void;
}

export interface PaymentStrategy {
  processPayment(amount: number): string;
}
