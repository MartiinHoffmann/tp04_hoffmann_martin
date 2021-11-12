import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/Models/Produit';
import { ServiceProductService } from 'src/app/ServiceProduct/service-product.service';
import { AddProduit, DelProduit } from '../actions/produit-action';
import { ProduitState } from '../states/produit-state';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  
  constructor(private serviceProductService: ServiceProductService, private store: Store) { }

  public listProduits?: Observable<Array<Produit>>;

  @Select(ProduitState.getListeProduits) lstProduit$?: Observable<Produit[]>;

  ngOnInit(): void {
    this.listProduits = this.serviceProductService.getAllProduit();
  }

  addProduit(produit: Produit)
  {
    this.store.dispatch(new AddProduit(produit));
  }

  delProduit(produit: Produit)
  {
    this.store.dispatch(new DelProduit(produit));
  }

}
