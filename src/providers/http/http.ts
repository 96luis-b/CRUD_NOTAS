import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }
  
  login(datos):Observable<any>{
	return this.http.post(`${datos.url}`, `username=${datos.username}&password=${datos.password}`, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  //username=${datos.username}&password=${datos.password}}
  }
  
  register(datos):Observable<any>{
	return this.http.post(`${datos.url}`, `username=${datos.username}&name=${datos.name}&lastname=${datos.lastname}&address=${datos.address}&password=${datos.password}`, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  
  getNotes(datos):Observable<any>{
	return this.http.get(datos.url);
  }
  
  getNote(datos):Observable<any>{
	
	return this.http.post(`${datos.url}`, `id=${datos.id}`, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  
  addNote(datos,note):Observable<any>{
  	console.log(datos.url+"   provider");
	return this.http.post(`${datos.url}`, `title=${note.title}&description=${note.description}`, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  
  updateNote(datos,note):Observable<any>{
  
	return this.http.post(`${datos.url}`, `id=${note.id}&title=${note.title}&description=${note.description}`, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  
  deleteNote(datos,note):Observable<any>{
  console.log(datos.url+"    provider");
  console.log(note+"    desde updateNote ");
  console.log(note.id +"   id");
	return this.http.post(`${datos.url}`, `id=${note.id}`, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
  }
  
    test(datos):Observable<any>{
	return this.http.post(`http://localhost:8080/CRUD_NOTES/test`, {}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  
  
  

}
