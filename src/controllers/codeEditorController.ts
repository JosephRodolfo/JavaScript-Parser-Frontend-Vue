
  //takes htmltextarea ref and returns the line count number or 1 if undefined
export function lineCounter(htmlTextAreaRef: HTMLTextAreaElement | null): number {
    const lineCount = htmlTextAreaRef?.value.split("\n").length;
    return lineCount || 1;
  }
  //creates string for textarea value that displays line numbers for code editor
export function createNumberLineString(numberLines: number): string {
    let string = "1"
    let n = 1;
    while (n < numberLines) {
      numberLines.toString();
      let next_num = `\n${n+1}`
      string = string.concat(next_num);
      n++;
    }
    return string;
  }