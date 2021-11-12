import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/Models/Produit';
import { ServiceProductService } from 'src/app/ServiceProduct/service-product.service';

@Component({
  selector: 'app-moteur-recherche',
  templateUrl: './moteur-recherche.component.html',
  styleUrls: ['./moteur-recherche.component.css']
})
export class MoteurRechercheComponent implements OnInit {

  recherche='';

  constructor(private serviceProductService: ServiceProductService) { }

  public listProduits?: Observable<Array<Produit>>;

  ngOnInit(): void {
    this.listProduits = this.serviceProductService.getAllProduit();
  }

}
