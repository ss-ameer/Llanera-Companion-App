import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  @ViewChild('infoSec') infoSec!: ElementRef;
  @ViewChild('histSec') histSec!: ElementRef;
  @ViewChild('geogSec') geogSec!: ElementRef;

  homeImage = {
    banner: "../../assets/image/llaneraBanner.png",
    seal: "../../assets/image/llaneraSeal.jpg",
    municipality: "../../assets/image/llaneraMunicipality.png",
    location: "../../assets/image/llaneraLoc.png"
  }

  homePara = {
    info: [
      "Llanera, officially the Municipality of Llanera (Tagalog: Bayan ng Llanera, Ilocano: Ili ti Llanera), is a 4th class municipality in the province of Nueva Ecija, Philippines. According to the 2020 census, it has a population of 42,281 people.",

      "The town's economy is largely agricultural, with rice as the principal product. It is a land of plains with frew creeks a small dam and a river the only water bodies bisecting the plains. There are no mountain ranges in the municipality. Principal industry and commerce are related to the production of rice and rice products. Minor products include onion growing, cattle raising and vegetable production. The town also known for its \"Banuar A Mannalon Festival\" it is usually celebrated every first to second week of May.",

      "The municipality is traversed by a national road leading to Aurora province. The municipality is bounded by the city of San Jose, the municipalities of Talavera, Rizal and Natividad.",

      "Llanera is 23 kilometres (14 mi) from Cabanatuan, 37 kilometres (23 mi) from Palayan, and 139 kilometres (86 mi) from Manila."
    ],

    hist: [
      "During World War II, the local military establishment of the main general headquarters and main camp base of the Philippine Commonwealth Army was active from 1942 to 1945 and the 2nd Constabulary Regiment of the Philippine Constabulary was founding again on 1944 to 1946 and they military stationed at the town of Llanera. From the engagements of all clearing operations of the Anti-Japanese Imperial Military Operations in Central Luzon included the province of Pampanga, Nueva Ecija, Tarlac, Bulacan, Zambales and Northern Tayabas (now. Aurora) on 1942 to 1945 and anding various guerrilla groups and the American liberation forces of the U.S. Army and U.S. Army Air Forces and fought against the Japanese Imperial forces.",

      "The town was created in 1954 from territory carved from the three neighboring towns\:",

      "San Jose - barrios of Bagumbayan (townsite), Andres Bonifacio, Caridad Norte & Sur, San Mauricio (portion), Parang Manga (portion), Santa Barbara, Floridablanca, Gomez, San Francisco, and Victoria.",


      "Talavera - barrios of General Luna, Morcon, Mabini, Ricarte, Casili, and Picon, together with sitios Plaridel and Bosque.",
  
      "Rizal - barrios of San Felipe and San Alfonso." ],

    geog: {
      desc: "Llanera is politically subdivided into 22 barangays. Each barangay consist of puroks and some have sitios.", 
      
      barangay: [
          { name: "A. Bonifacio \(A. Bonifacio Sur\)", thumb: '../../assets/image/brgyThumbABonifacio.JPG' },
          { name: "Bagumbayan \(Poblacion\)", thumb: '../../assets/image/brgyThumbBagumbayan.JPG' },
          { name: "Bosque", thumb: '../../assets/image/brgyThumbBosque.JPG' },
          { name: "Caridad Norte", thumb: '../../assets/image/brgyThumbCaridadNorte.JPG' },
          { name: 'Caridad Sur', thumb: '../../assets/image/brgyThumbCaridadSur.JPG' },
          { name: "Casile", thumb: '../../assets/image/brgyThumbCasile.JPG' },
          { name: "Florida Blanca", thumb: '../../assets/image/brgyThumbFloridaBlanca.JPG' },
          { name: "General Luna", thumb: '../../assets/image/brgyThumbGeneralLuna.JPG' },
          { name: "General Ricarte", thumb: '../../assets/image/brgyThumbGeneralRicarte.JPG'},
          { name: "Gomez", thumb: '../../assets/image/brgyThumbGomez.JPG' },
          { name: "Inanama", thumb: '../../assets/image/brgyThumbInanama.JPG' },
          { name: "Ligaya", thumb: '../../assets/image/brgyThumbLigaya.JPG' },
          { name: "Mabini", thumb: '../../assets/image/brgyThumbMabini.JPG' },
          { name: "Murcon", thumb: '../../assets/image/brgyThumbMurcon.JPG' },
          { name: "Plaridel", thumb: '../../assets/image/brgyThumbPlaridel.JPG'},
          { name: "San Francisco \(A. Bonifacio Norte\)", thumb: '../../assets/image/brgyThumbSanFrancisco.JPG'},
          { name: 'San Felipe', thumb: '../../assets/image/brgyThumbSanFelipe.JPG' },
          { name: 'San Nicolas', thumb: '../../assets/image/brgyThumbSanNicolas.JPG' },
          { name: 'San Vicente', thumb: '../../assets/image/brgyThumbSanVicente.JPG' },
          { name:'Santa Barbara', thumb: '../../assets/image/brgyThumbSantaBarbara.JPG' },
          { name: 'Victoria', thumb: '../../assets/image/brgyThumbVictoria.JPG' },
          { name:'Villa Viniegas', thumb: '../../assets/image/brgyThumbVillaViniegas.JPG' } ]
      }
    };

  constructor() {}

  scrollToInfo() {
    this.infoSec.nativeElement.scrollIntoView({ behavior: 'smooth' });
  };

  scrollToHistory() {
    this.histSec.nativeElement.scrollIntoView({ behavior: 'smooth' });
  };

  scrollToGeography() {
    this.geogSec.nativeElement.scrollIntoView({ behavior: 'smooth' });
  };

}
