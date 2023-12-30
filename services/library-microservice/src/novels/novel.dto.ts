/* eslint-disable prettier/prettier */

export class CreateNovelDto {
  readonly name: string;
  readonly author: string;
  readonly publishyear: number;
  readonly image: string;
  readonly description: string;
  readonly price: number;
  }
  
export class UpdateNovelDto {
  readonly name?: string;
  readonly author?: string;
  readonly publishyear?: number;
  readonly image?: string;
  readonly description?: string;
  readonly price?: number;
}
