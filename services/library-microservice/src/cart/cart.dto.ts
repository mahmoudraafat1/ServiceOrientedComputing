/* eslint-disable prettier/prettier */

export class CreateCartDto {
    readonly userId: string; // Assuming a cart is associated with a user
    readonly items: Item[]; // Array of items in the cart
    // Add other necessary properties for cart creation
  }
  
  export class UpdateCartDto {
    readonly userId?: string; // Allow optional update for user association
    readonly items?: Item[]; // Allow optional update of cart items
    // Add other properties that can be modified
  }
  
  // Define the Item interface for clarity:
  export interface Item {
    productId: string;
    quantity: number;
    // Add other relevant item properties
  }
  