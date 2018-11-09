import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {

    @Input() type: any;
    @Input() message: any = 'Example notification';
    @Input() class: any = 'inactive';

    hiddeNotification() {
        this.class = 'inactive';
    }

}