import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { DataService } from '../data.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements OnInit {
  listeApprenants: any
 

  constructor(private _service: ConnexionService, private data: DataService)
  {
    this.allApprenants();
  }

  allApprenants()
  {
    this._service.getAllUapprenant().subscribe(
      res=>{
        this.listeApprenants = res;
        
      }
    )
  }
  ngOnInit() {}

  deleteApprenant(idApp:any):void{
    if(confirm("Voulez-vous supprimer ??")){
      this._service.deleteApprenant(idApp).subscribe(
        res=>{
        this.listeApprenants();
      })
    }
  }
 


  exportToExcel() {
    this.data.exportToExcel(this.listeApprenants, 'ListeApprenants');
    }
}


