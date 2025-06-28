import { Component, OnInit } from '@angular/core';
import { ICliente } from '../../interface/ICliente';
import { ClienteService } from '../../services/clienteService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-list',
  imports: [CommonModule],
  templateUrl: './client-list.html',
  styleUrls: ['./client-list.css']
})
export class ClientList implements OnInit {
  clientes: ICliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClients().subscribe((dados: ICliente[]) => {
      this.clientes = dados;
    });
  }

  DeleteClient(id: number): void {
    if (confirm('Deseja excluir este cliente?')) {
      this.clienteService.Delete(id).subscribe(() => {
        alert('Cliente excluído!');
        this.ngOnInit();
      });
    }
  }

}
