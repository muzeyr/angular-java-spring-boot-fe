import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
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
  formUrunEkle(val: any){
    return new FormBuilder().group({
      id: val.id,
      urunAdi: val.productName,
      fiyat: val.price
    })
  }
  
}