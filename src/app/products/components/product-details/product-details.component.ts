import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllProductsService } from '../../services/all-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  private _ActivatedRoute = inject(ActivatedRoute)
  private _AllProductsService = inject(AllProductsService)

  id: any = this._ActivatedRoute.snapshot.paramMap.get('id')
  loading: boolean = false
  data: any = {}
  ngOnInit(): void {

    console.log(this.id);
    this.getDetails()
  }

  getDetails() {
    this.loading = true
    this._AllProductsService.getDetails(this.id).subscribe({
      next: (res) => {
        this.loading = false
        this.data = res
        console.log(this.data);
      },
      error: (err) => {
        this.loading = false
        console.log(err);
      },
    })
  }

}
