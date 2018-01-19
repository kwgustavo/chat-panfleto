import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  constructor(public navCtrl: NavController) {
    
  }


  some():void {
    document.getElementById("intergramRoot").setAttribute("style","display:none")
  }

  aparece(): void {
    window.setTimeout(()=> {
      document.getElementById("intergramRoot").setAttribute("style","display:block !important");            
      if(document.getElementById("intergramRoot").style.display==="none"){ 
        document.getElementById("intergramRoot").children[0].children[0].click();
      }
    },'200');


  }
}
