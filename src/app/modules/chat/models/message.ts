export class Message {
  id: number;
  text: string;
  sender: number;

  constructor(options: {
    id? : number,
    text?: string,
    sender?: number
  } = {}) {
    this.id = options.id || 0;
    this.text = options.text || '',
    this.sender = options.sender || 0;
  }
}
