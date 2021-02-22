export class Post {
  id!: number;
  ownerName!: string;
  text!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(id: number, text: string, createdAt: Date, updatedAt: Date, ownerName: string) {
    this.id = id;
    this.text = text;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.ownerName = ownerName;
  }
}
