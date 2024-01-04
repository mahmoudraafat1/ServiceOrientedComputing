// payment.dto.ts
export class CreatePaymentDto {
    readonly novelId: number;
    readonly paymentMethod: string;
    readonly amount: number;
  }
  
  export class UpdatePaymentDto {
    readonly novelId: number;
    readonly paymentMethod?: string;
    readonly amount?: number;
  }