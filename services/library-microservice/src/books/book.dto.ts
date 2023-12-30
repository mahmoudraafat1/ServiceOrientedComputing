/* eslint-disable prettier/prettier */

export class CreateBookDto {
  readonly title: string;
  readonly author: string;
  readonly publishyear: number;
  readonly image: string;
  readonly description: string;
  readonly price: number;
  }
  
export class UpdateBookDto {
  readonly title?: string;
  readonly author?: string;
  readonly publishyear?: number;
  readonly image?: string;
  readonly description?: string;
  readonly price?: number;
}
