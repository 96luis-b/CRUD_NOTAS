import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  styles: ['register.scss']
})
export class RegisterPage {
	data = {
			username:null,
			name:null,
			lastname:null,
			address:null,
			password:null,
			message:null,
			url:"http://localhost:8080/CRUD_NOTES/register",
			status:null
			};
	@ViewChild("confirPassword")confirPassword;
			
  constructor(public navCtrl: NavController, 
			  public navParams: NavParams,
			  public alertCtrl: AlertController,
			  public httpProvider: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  Alert(title, subtitle){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }
  
  addUser(){
	
	if(this.data.username==""||this.data.name==""||this.data.lastname==""||this.data.address==""||this.data.password==""||this.confirPassword.value==""){
		this.Alert("Por favor llene todos los campos","OK para continuar");
		return;
		}
	else if(this.data.password!=this.confirPassword.value){
			this.Alert("Las contraseñas no coinsiden","Por favor intente de nuevo");
			return;
		}
		
	
	
	this.httpProvider.register(this.data).subscribe(data=>{
		console.log(data)
		if(data.status >= 200 && data.status < 300){
			this.Alert(data.message,"Presine OK para continuar");
			this.navCtrl.pop();
		}else if(data.status==500){
    
	
		}else if(data.status==404){
    
	}
	},error => {
		console.log(error);
		console.log(error.status);
  
		this.Alert("Error de conexion","Intente mas tarde");
  });
	
  }
  
  
}
