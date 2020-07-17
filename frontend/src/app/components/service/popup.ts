import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class Popup {

    constructor(public alertController: AlertController){}

    async popup(x) {
        const alert = await this.alertController.create({
          message: x,
          buttons: [
            {
              text: "Ok",
              role: "cancel",
              cssClass: "secondary",
            },
          ],
        });
    
        await alert.present();
      }

}