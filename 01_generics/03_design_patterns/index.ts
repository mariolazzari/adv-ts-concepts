import {
  CrediCardStrategy,
  DocumentFactory,
  PaymentProcessor,
  PayPalStrategy,
} from "./classes";

// factory pattern
try {
  const factory = new DocumentFactory();
  const doc = factory.createDocument("excel", "xlnName", ".xlsx", "excel");
  const xls = factory.createDocument("word", "wordName", ".docx", "word");

  doc.print();
  xls.print();

  const pdf = factory.createDocument("pdf", "pdf", ".pdf", "pdf");
  pdf.print();
} catch (ex) {
  const error = ex instanceof Error ? ex.message : "Factory pattern error";
  console.error(error);
}

// strategy pattern
const amount = 150;
const cc = new CrediCardStrategy();
const pp = new PayPalStrategy();

let pay = new PaymentProcessor(cc);
pay.processPayment(amount);
pay = new PaymentProcessor(pp);
pay.processPayment(amount);
