import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit, OnDestroy {

  private _AllProductsService = inject(AllProductsService)

  public data: any = []
  public categories: any = []
  public name: string = 'Categories'
  public loading: boolean = false
  public shopping: any[] = []

  ngOnInit(): void {
    // all data
    this.getAllProducts()
    // all categories
    this.getAllCategories()
  }

  // get all products
  getAllProducts() {
    this.loading = true
    this._AllProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.loading = false
        this.data = res
        // console.log(this.data);
      },
      error: (err) => {
        this.loading = false
        console.log(err);
      }
    })
  }

  // get all categories
  getAllCategories() {
    this._AllProductsService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  // get value filter
  valueFilter(event: any) {
    let value = event.target.value
    // console.log(value);
    if (value == 'all') {
      this.getAllProducts()
    } else {
      this.getSpecificCategory(value)
    }
  }
  // get specific category
  getSpecificCategory(value: any) {
    this.loading = true
    this._AllProductsService.getSpecificCategory(value).subscribe({
      next: (res) => {
        this.loading = false
        this.data = res
      },
      error: (err) => {
        this.loading = false
        console.log(err);
      }
    })
  }


  // Add Element
  addElement(event: any) {
    if (localStorage.getItem('shopping')) {
      this.shopping = JSON.parse(localStorage.getItem('shopping')!)

      if (this.shopping.find(x => x.item.id == event.item.id)) {

        // alert('this item is already added')
        console.log('warning');
      } else {
        this.shopping.push(event)
        localStorage.setItem('shopping', JSON.stringify(this.shopping))
      }

    } else {
      this.shopping.push(event)
      localStorage.setItem('shopping', JSON.stringify(this.shopping))

    }


  }



  ngOnDestroy(): void {

  }

}
