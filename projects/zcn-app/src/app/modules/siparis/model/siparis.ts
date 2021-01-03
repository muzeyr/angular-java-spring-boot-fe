import { CategortDto } from "@modules/kategori/model/category-dto.models";

 

export class SiparisDto {
    id: string;
    musteriAdi:string;
    adres:string;
    kategoriler: CategortDto[] = [];
    

    
}
