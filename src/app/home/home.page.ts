import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  homeImage = {
    banner: "../../assets/image/llaneraBanner.png",
    seal: "../../assets/image/llaneraSeal.jpg",
    municipality: "../../assets/image/llaneraMunicipality.png",
    location: "../../assets/image/llaneraLoc.png"
  }

  homeInfoPara = [
    "Llanera, officially the Municipality of Llanera (Tagalog: Bayan ng Llanera, Ilocano: Ili ti Llanera), is a 4th class municipality in the province of Nueva Ecija, Philippines. According to the 2020 census, it has a population of 42,281 people.",
    "The town's economy is largely agricultural, with rice as the principal product. It is a land of plains with frew creeks a small dam and a river the only water bodies bisecting the plains. There are no mountain ranges in the municipality. Principal industry and commerce are related to the production of rice and rice products. Minor products include onion growing, cattle raising and vegetable production. The town also known for its \"Banuar A Mannalon Festival\" it is usually celebrated every first to second week of May.",
    "The municipality is traversed by a national road leading to Aurora province. The municipality is bounded by the city of San Jose, the municipalities of Talavera, Rizal and Natividad.",
    "Llanera is 23 kilometres (14 mi) from Cabanatuan, 37 kilometres (23 mi) from Palayan, and 139 kilometres (86 mi) from Manila."
  ];

  homeHistSec = [
    "During World War II, the local military establishment of the main general headquarters and main camp base of the Philippine Commonwealth Army was active from 1942 to 1945 and the 2nd Constabulary Regiment of the Philippine Constabulary was founding again on 1944 to 1946 and they military stationed at the town of Llanera. From the engagements of all clearing operations of the Anti-Japanese Imperial Military Operations in Central Luzon included the province of Pampanga, Nueva Ecija, Tarlac, Bulacan, Zambales and Northern Tayabas (now. Aurora) on 1942 to 1945 and anding various guerrilla groups and the American liberation forces of the U.S. Army and U.S. Army Air Forces and fought against the Japanese Imperial forces.",
    "The town was created in 1954 from territory carved from the three neighboring towns\:",
    [
      "San Jose - barrios of Bagumbayan (townsite), Andres Bonifacio, Caridad Norte & Sur, San Mauricio (portion), Parang Manga (portion), Santa Barbara, Floridablanca, Gomez, San Francisco, and Victoria.",
      "Talavera - barrios of General Luna, Morcon, Mabini, Ricarte, Casili, and Picon, together with sitios Plaridel and Bosque.",
      "Rizal - barrios of San Felipe and San Alfonso."
    ]
  ];

  homeGeoSec = [
    
  ];

  constructor() {}

}
