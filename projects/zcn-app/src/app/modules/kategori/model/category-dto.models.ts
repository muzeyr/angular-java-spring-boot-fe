import { ProdcutDto } from "./product-dto.models";

export class CategortDto {
    id: string;
    categoryName: string;
    products: ProdcutDto[];
    
}