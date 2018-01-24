import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  chat:Element= null;

  constructor(public navCtrl: NavController) {
    
  }

  some():void {
    document.getElementById("intergramRoot").setAttribute("style","display:none");
  }

  aparece(): void {
  
  }

  ionViewDidLoad(){
    window.setTimeout(()=>{
      //jQuery('#eita').html("Eita porraa")
    });
  }

  abreChat():void {
    console.log("abre chart");
  }

  mercare(){
    alert("mercare");
  }
}
