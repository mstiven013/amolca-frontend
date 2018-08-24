import { Component, OnInit, Input } from '@angular/core';
import { GetOrdersService } from '../../../services/orders/get-orders.service';

@Component({
  selector: 'orders-account',
  templateUrl: './orders-page.component.html',
  styleUrls: ['../my-account-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  error = { show: false, msg: '' }

  //Declar user variable to receibe info
  @Input() user: any;

  //Declare condition to show table
  showTable: Boolean = false;

  orders: any;

  constructor(
    private _getOrderService: GetOrdersService
  ) { }

  ngOnInit() {
    this.getOrdersInfo();
  }

  getOrdersInfo() {
    
    this._getOrderService.getOrdersByUser(this.user._id)
      .map(resp => resp.json())
      .subscribe(
        data => { this.setOrdersInfo(data) },
        err => { this.errorsMap(err.json()) }
      )

  }

  setOrdersInfo(data) {
    this.showTable = true;
    this.orders = data;
  }

  showOrder(order) {
    console.log(order)
  }

  //Function to error's map after login
  errorsMap(err) {
    this.showTable = false;

    switch (err.status) {
      case 500:
          this.error.show = true;
          this.error.msg = `Ocurrió un error obteniendo la información de tus pedidos. Si este error persiste por favor comunicate con nosotros al correo: info@amolca.com`;
        break;

      case 404:
          this.error.show = true;
          this.error.msg = `No tienes pedidos registradas`;
        break;

      case 0:
          this.error.show = true;
          this.error.msg = `Ha ocurrido un error, por favor inténtelo de nuevo.`;
        break;
    }
  }

}
