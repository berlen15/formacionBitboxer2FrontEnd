import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
rol;
nombreusuario;
home_url;
products_url;
profile_url;
users_url;
products_admin_url;
suppliers_url;
all_products_url;
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.reloadPage();
    this.rol = sessionStorage.getItem('rol');
    if(sessionStorage.getItem("usuario")!=null){
      this.nombreusuario=JSON.parse(sessionStorage.usuario).nombreusuario;
    }

    this.home_url="/home/"+this.nombreusuario;
    this.products_url="/products/"+this.nombreusuario;
    this.profile_url="profile/"+this.nombreusuario;
    this.all_products_url="product"
    this.users_url="users";
    this.suppliers_url="supliers"
    this.products_admin_url="products/admin"
  }
  logout(){
    this.authService.logOut();
    this.route.navigateByUrl('/login');
  }

  reloadPage() {
    // The last "domLoading" Time //
    var currentDocumentTimestamp =
    new Date(performance.timing.domLoading).getTime();
    // Current Time //
    var now = Date.now();
    // Ten Seconds //
    var tenSec = 10 * 1000;
    // Plus Ten Seconds //
    var plusTenSec = currentDocumentTimestamp + tenSec;
    if (now > plusTenSec) {
    window.location.reload();
    } else {}
  }
}
