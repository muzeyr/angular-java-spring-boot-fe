import { CategortDto } from "@modules/kategori/model/category-dto.models";
import { ProdcutDto } from "@modules/kategori/model/product-dto.models";
import { Urun } from "@modules/kategori/model/urun.models";
import { MusteriDto } from "@modules/musteri/model/musteri";
import { MusteriFormDto } from "@modules/musteri/model/musteri-form";

 

export class SiparisSaveDto {
    id: string;
    musteri: MusteriFormDto;
    tutar: number;
    urunler: Urun[] = [];
    

    
}
