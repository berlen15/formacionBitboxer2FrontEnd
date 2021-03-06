import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Articulo } from 'src/app/model/ArticuloModel';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  articulos;
  usuario;
  add_url: string;
  columnas: string[] = ['codigoarticulo', 'descripcion', 'precio', 'estado', 'acciones'];
  dataSource=null;

  @ViewChild(MatPaginator, { static: true }) paginator1: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {    
    this.usuario = JSON.parse(sessionStorage.usuario);
    this.userService.getMyArticles(this.usuario.nombreusuario).subscribe(
      data => {       
        this.articulos = data;
        this.dataSource = new MatTableDataSource<Articulo>(this.articulos);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator = this.paginator1;
        
        console.log(this.dataSource);
      },
      err => {
        this.articulos = JSON.parse(err.error).message;
      });
      this.add_url="products/"+this.usuario.nombreusuario+"/add";      
  }
  

  showDetailsProduct(codigo){
    console.log("el codigo es ", codigo);
    this.route.navigateByUrl("products/"+this.usuario.nombreusuario+"/"+codigo);
  }
  editProduct(codigo){
    this.route.navigateByUrl("products/"+this.usuario.nombreusuario+"/"+codigo+"/edit")
  }

}
