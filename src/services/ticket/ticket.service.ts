// Importation du décorateur Injectable depuis Angular et des classes nécessaires
import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs';

// Décoration du service comme injectable et en tant que service racine
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private ticketList: Ticket[] = TICKETS_MOCKED;

 
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);

  // Constructeur du service
  constructor() {
  }

  // Méthode pour ajouter un nouveau ticket à la liste
  addTicket(ticket: Ticket) {
  
    this.ticketList.push(ticket);
    this.tickets$.next(this.ticketList);
  }

  // Méthode pour archiver un ticket spécifique dans la liste
  archiveTicket(ticket: Ticket) {
    ticket.archived = true;
    this.tickets$.next(this.ticketList);
  }

}
