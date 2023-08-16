export class Food {
  id!: number;
  name!: string;
  cookTime!: string;
  price!: number;
  favorite!: boolean;
  origins?: string[];
  stars!: number;
  imageUrl!: string;
  tags?: string[];
}
