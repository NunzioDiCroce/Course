import { Component } from '@angular/core';

// interface import
import { Photos } from './models/photos.interface';

// service import
import { PhotosService } from './services/photos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'week11_day01';

  // definizione variabile in linea con INTERFACE
  photos: Photos[] | undefined;

  // definizione CONSTRUCTOR. app.component.ts NON HA IL CONSTRUCTOR
  constructor(private photosSrv: PhotosService) {}

  // definizione ngOnInit. app.component.ts NON HA ngOnInit
  ngOnInit(): void {
    // OnInit app.component subscribes il metodo del SERVICE per recuperare le foto tramite API
    this.photosSrv.getPhotos().subscribe((_photos) => {
      // assegnazione a variabile del COMPONENT il valore del parametro del SUBSCRIBE
      this.photos = _photos;
      // verifica a video del recupero dell'array
      console.log(this.photos)
    }, (_errore) => { alert(_errore)}) // GESTIONE DELL'ERRORE OnInit
  }

  // definizione metodo in app.component per eliminare una foto. RICHIAMA IL METODO DEL SERVICE USANDO PARAMETRI
  onDeletePhoto(_id:number, _index:number) {
    // il COMPONENT subscribes il metodo del SERVICE
    this.photosSrv.deletePhoto(_id).subscribe((_deleted) => {
      // eliminazione oggetto in array COMPONENT
      this.photos?.splice(_index,1);
      // console.log dell'oggetto eliminato per mezzo di parametro
      console.log(_deleted)
    }, (_errore) => { alert(_errore)}) // GESTIONE DELL'ERRORE)
  }

  // definizione metodo in app.component per aggiungere una foto alle preferite. RICHIAMA IL METODO DEL SERVICE SENZA USARE PARAMETRI
  onAddToFavourites() { this.photosSrv.addToFavourites() }







}
