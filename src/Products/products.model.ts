
// Common pattern (like Java)
export class ProductCommonPatter {
  id: string;
  title: string;
  description: string;
  price: number;
  
  constructor(
    id: string, 
    title: string,
    description: string, 
    price: number
  ) { 
    this.id = id;
    this.title = title; 
    this.description = description;
    this.price = price;

  };
}

// Shortcut - only add access identifier public
export class Product {

  constructor(
    public id: string, 
    public title: string,
    public description: string, 
    public price: number
  ) {};
}