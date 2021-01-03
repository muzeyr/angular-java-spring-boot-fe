import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { MusteriDto } from '@modules/musteri/model/musteri';
import { SiparisDto } from '@modules/siparis/model/siparis';
import { IModelConvert } from './IModelConvert';



export class CategroyForm implements IModelConvert{
  constructor() { }

  convertModelToFormGroup(model: any): FormGroup {
    const group: any = {};    

    group.id = new FormControl(model.id || '');
    group.kategoriAdi = new FormControl(model.categoryName || '');
    group.urunler =  new FormBuilder().array([])

    model.products?.forEach(element => {
      group.urunler.push(this.formUrunEkle(element));
    });
    
    return new FormGroup(group);
  }
  convertModelToMusteriFormGroup(model: MusteriDto): FormGroup {
    const group: any = {};    

    group.id = new FormControl(model.id || '');
    group.adiSoyadi = new FormControl(model.adiSoyadi || '');
    group.adres = new FormControl(model.adres || '');
    group.telefon = new FormControl(model.telefon || '');
    group.aciklama = new FormControl(model.aciklama || '');
    return new FormGroup(group);
  }
  convertModelToSiparisFormGroup(model: SiparisDto): FormGroup {
    const group: any = {};    

    group.id = new FormControl(model.id || '');
    group.musteriAdi = new FormControl(model.musteriAdi || '');
    model.kategoriler?.forEach(element => {
      element.products.forEach(urun =>{
        group.urunler.push(this.formUrunEkle(urun));

      });
    });

    return new FormGroup(group);
  }
  formUrunEkle(val: any){
    return new FormBuilder().group({
      id: val.id,
      urunAdi: val.productName,
      fiyat: val.price
    })
  }
  
}