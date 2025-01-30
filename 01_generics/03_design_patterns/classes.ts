import { IDocument, PaymentStrategy } from "./interfaces";

export class Excel implements IDocument {
  constructor(
    public name: string,
    public postfix: string,
    public content: string
  ) {}

  print(): void {
    console.log("Excel:", this.content);
  }
}

export class Word implements IDocument {
  constructor(
    public name: string,
    public postfix: string,
    public content: string
  ) {}

  print(): void {
    console.log("Word:", this.content);
  }
}

// factory class
export class DocumentFactory {
  createDocument(type: string, name: string, postfix: string, content: string) {
    switch (type) {
      case "word":
        return new Word(name, postfix, content);

      case "excel":
        return new Excel(name, postfix, content);

      default:
        throw new Error("Type not supported");
    }
  }
}

// strategy patterns
export class PayPalStrategy implements PaymentStrategy {
  processPayment(amount: number): string {
    const pay = `PayPal payment of ${amount}$.`;
    console.log(pay);

    return pay;
  }
}

export class CrediCardStrategy implements PaymentStrategy {
  processPayment(amount: number): string {
    const pay = `Credit Card payment of ${amount}$.`;
    console.log(pay);

    return pay;
  }
}

export class PaymentProcessor {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  processPayment(amount: number): string {
    return this.strategy.processPayment(amount);
  }
}
