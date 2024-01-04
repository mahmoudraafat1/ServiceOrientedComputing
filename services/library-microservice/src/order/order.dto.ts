export class CreateOrderDto {
    userId: string;
    bookIds: string[];
  }
  
  export class UpdateOrderDto {
    userId?: string;
    bookIds?: string[];
  }
  