import { Component } from '@angular/core';

@Component({
  selector: 'app-assetlist',
  templateUrl: './assetlist.component.html',
  styleUrl: './assetlist.component.scss'
})
export class AssetlistComponent {
  Addpage=false
  ShowAddpage() {
    this.Addpage=!this.Addpage
  }
  assets :any = [];
    newAsset = {
      name: '',
      category: '',
      serialNumber: '',
      os: '',
      ram: 0,
      rom: 0,
    };
    totalValue = 0;
  
    addAsset() {
      if (this.newAsset.name && this.newAsset.category) {
        // Store relevant details based on category
        let assetDetails: any = {
          name: this.newAsset.name,
          category: this.newAsset.category,
        };
  
        if (this.newAsset.category === 'mouse') {
          assetDetails.serialNumber = this.newAsset.serialNumber;
        } else if (this.newAsset.category === 'laptop') {
          assetDetails.os = this.newAsset.os;
          assetDetails.ram = this.newAsset.ram;
          assetDetails.rom = this.newAsset.rom;
        }
  
        this.assets.push(assetDetails);
  
        // Reset the form
        this.newAsset = { name: '', category: '', serialNumber: '', os: '', ram: 0, rom: 0 };
      } else {
        alert('Please enter all required fields.');
      }
    }
}
