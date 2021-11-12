import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProduitState } from './states/produit-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product';

  @Select(ProduitState.getNbProduits) nb$?: Observable<number>;
  constructor() {}
}
