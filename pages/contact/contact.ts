import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.css']
})
export class ContactPage {
  
  gender: string;
  activity_level: string;
  height: number;
  weight: number;
  age: number;
  bmr: number;
  dci: number;

  constructor(public navCtrl: NavController) {}
     calculateDCI () {
       if (this.gender = "m") {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;

      if (this.activity_level = "sedentary") {
      this.dci = this.bmr * 1.2;
      }
      else if (this.activity_level = "slightly_active") {
        this.dci = this.bmr * 1.4;
      }
      else if (this.activity_level = "moderately_active") {
        this.dci = this.bmr * 1.6;
      }
      else if (this.activity_level = "very_active") {
        this.dci = this.bmr * 1.75;
      }
      else if (this.activity_level = "extra_active") {
        this.dci = this.bmr * 2.0;
      }
      else  {
        this.dci = this.bmr * 2.3;
      }
    }

    else   {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;

      if (this.activity_level = "sedentary") {
      this.dci = this.bmr * 1.2;
      }
      else if (this.activity_level = "slightly_active") {
        this.dci = this.bmr * 1.4;
      }
      else if (this.activity_level = "moderately_active") {
        this.dci = this.bmr * 1.6;
      }
      else if (this.activity_level = "very_active") {
        this.dci = this.bmr * 1.75;
      }
      else if (this.activity_level = "extra_active") {
        this.dci = this.bmr * 2.0;
      }
      else  {
        this.dci = this.bmr * 2.3;
      }



  }

  this.dci = parseFloat(this.dci.toFixed(0));

}
}