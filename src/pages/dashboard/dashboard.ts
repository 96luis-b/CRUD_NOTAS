import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */ 

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

	notes = [];
	data = {
			url:"http://localhost:8080/CRUD_NOTES/getNotes"
			};
  constructor(public navCtrl: NavController, 
			  public navParams: NavParams,
			  public httpProvider: HttpProvider) {
  
  this.httpProvider.getNotes(this.data).subscribe(res=>{
      console.log("hola desde subscribe");
	  console.log(res);
      console.log(res.notes)
      this.notes = res.notes;
    });
	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  
   goToDetail(id){
	this.navCtrl.push(DetailPage,{id:id});
  }
  
  createNote(){
	this.navCtrl.push(DetailPage,{id:0});
  }

}
