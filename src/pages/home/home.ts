import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import jQuery from "jquery";

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
    console.log(document.getElementById("intergramRoot").style.display!="none")
    document.getElementById("intergramRoot").setAttribute("style","display:block !important");            
    window.setTimeout(()=> {
      if(document.getElementById("intergramRoot").style.display!="none"){ 
        jQuery("#intergramRoot > div > div:nth-child(1)").click();        
        this.chat = document.getElementById("intergramRoot").children[0].children[0];
      }
    },'200');
  }

  ionViewDidLoad(){
    window.setTimeout(()=>{
      //jQuery('#eita').html("Eita porraa")
    });
  }


  abreChat():void {
    console.log("abre chart");
  }
}
