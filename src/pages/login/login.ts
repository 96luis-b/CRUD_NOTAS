import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { DashboardPage } from '../dashboard/dashboard';
import { HttpProvider } from '../../providers/http/http';
//import { Services } from '../../services/services.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styles: ['login.scss']
})
export class LoginPage {
@ViewChild('username')username;
@ViewChild('password')password;

data = {
		username:null,
		password:null,
		message:null,
		url:"http://localhost:8080/CRUD_NOTES/login",
		status:null
		}
	

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
			  public httpProvider: HttpProvider
			  //public serv: Services
			  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
	console.log(this.data);
  }
  
  
   Alert(title, subtitle){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }
  

  login(){
		
		if(this.username.value=="" || this.password.value==""){
			this.Alert("A ocurrido un error","Por favor completa los campos");
			console.log("uno de los campos esta vacio");
			return;
		}
		
		this.data.username = this.username.value;
		this.data.password = this.password.value;
  
  this.httpProvider.login(this.data).subscribe(data => {
    if(data.status >= 200 && data.status < 300){
      this.Alert(data.message,"Presine OK para continuar");
      this.navCtrl.setRoot(DashboardPage);
    }
  },error => {
    console.log(error);
    console.log(error.status);
  
      this.Alert("Error de conexion","Intente mas tarde");
  });
  
  }

  goToSignup(){
   this.navCtrl.push(RegisterPage);
  }

}
