interface IDocument {
  name: string;
  postfix: string;
  content: string;
  print(): void;
}

class Excel implements IDocument {
  constructor(
    public name: string,
    public postfix: string,
    public content: string
  ) {}

  print(): void {
    console.log("Excel:", this.content);
  }
}

class Word implements IDocument {
  constructor(
    public name: string,
    public postfix: string,
    public content: string
  ) {}

  print(): void {
    console.log("Word:", this.content);
  }
}

// factory clAA
class DocumentFactory {
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

const factory = new DocumentFactory();
const doc = factory.createDocument("excel", "xlnName", ".xlsx", "excel");
const xls = factory.createDocument("word", "wordName", ".docx", "word");

doc.print();
xls.print();

try {
  const pdf = factory.createDocument("pdf", "pdf", ".pdf", "pdf");
  pdf.print();
} catch (error) {
  console.error(error);
}
