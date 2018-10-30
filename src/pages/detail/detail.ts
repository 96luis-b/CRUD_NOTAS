import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
	
	note = {id:null, title:null, description:null};
	data = {
			id:null,
			message:null,
			url:null,
			status:null
			};
	id = null;

 
  constructor(public navCtrl: NavController, 
			  public navParams: NavParams,
			  public httpProvider: HttpProvider,
			  public alertCtrl: AlertController) {
			  console.log("constructor de detail");
				 this.id = navParams.get("id")
				 console.log(this.id);
				  
				  this.id = navParams.get("id")
				  if(this.id!=0){
						this.data.id =  this.id;
						this.data.url = "http://localhost:8080/CRUD_NOTES/getNote"
					  
						httpProvider.getNote(this.data).subscribe(res=>{
							console.log(res)
							this.note = res.note;
						})
				  }
				  
			  
			}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }


  Alert(title, subtitle){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }
  
  addNote(){
	console.log("se activo metodo addNote");
	
 
	console.log(this.note.title);
	console.log(this.note.description);
	
	if(this.id != 0){
		this.data.url = "http://localhost:8080/CRUD_NOTES/updateNote";
		console.log(this.data.url);
		this.httpProvider.updateNote(this.data,this.note).subscribe(data=>{
			this.Alert(data.message," OK para continuar");
			this.navCtrl.setRoot(DashboardPage);
			return;
		})
		
	}else{
		this.data.url = "http://localhost:8080/CRUD_NOTES/addNote";
		console.log(this.data.url);
		this.httpProvider.addNote(this.data, this.note).subscribe(data=>{
			this.Alert(data.message,"OK para continuar");
			this.navCtrl.setRoot(DashboardPage);
			return;
		})
	}
	
		
		
  }
  
  deleteNote(){
	this.data.url = "http://localhost:8080/CRUD_NOTES/deleteNote"
	this.httpProvider.deleteNote(this.data,this.note).subscribe(data=>{
			this.Alert(data.message," OK para continuar");
			this.navCtrl.setRoot(DashboardPage);
			
	
		})
		
	
  }
  
  
  
}
