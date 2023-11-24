import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { OrderService } from 'src/app/services/order.service';
import { PassOrderService } from 'src/app/services/pass-order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  my_orders:any = []

  constructor(private orders:CartserviceService,
    private passOrder:PassOrderService,
    private router: Router){}

    ngOnInit(): void {

      this.orders.mGetBusinessOrders().subscribe({
        next: data => {(
          this.mSortOrders(data.message)
        )},
        error: (err) => {
          console.log(err)
        }
      });
    }

  Maporders = new Map();
  PassMaporders = new Map();

  mSortOrders(data:any){
    

    for(let ode of data){
      
      if(this.Maporders.has(ode.orderNo))
      {
        
        let prevOrder = ((this.Maporders.get(ode.orderNo) || {}));
        let prevOrderArray = ((this.PassMaporders.get(ode.orderNo) || []));
       
        prevOrder.quantity = (prevOrder.quantity + ode.quantity);
        prevOrder.Total = (prevOrder.Total + ode.price);

        prevOrderArray.push(ode)
        
        this.Maporders.set(ode.orderNo, prevOrder)
        this.PassMaporders.set(ode.orderNo, prevOrderArray)
      }
      else
      {
        let order_details = {
          quantity: 1,
          Total:ode.price,
          order:ode
        }
        // my_orders.push()

        const arr = []
        arr.push(ode)

        this.Maporders.set(ode.orderNo, order_details);
        this.PassMaporders.set(ode.orderNo, arr);
      }
    }
  }

  OpenOrder(id:any){
    // PassMaporders
    this.passOrder.mPassOrder(this.PassMaporders.get(id))
    // this.router.dispose()
    this.router.navigate(['/process'])
  }

}
