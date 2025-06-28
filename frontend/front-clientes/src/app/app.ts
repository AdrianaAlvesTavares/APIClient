import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientList } from './components/clienteList/client-list';


@Component({
  selector: 'app-root',
  imports: [ClientList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'front-clientes';
}
