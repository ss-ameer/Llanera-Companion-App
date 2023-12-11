import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss']
})

export class CategoriesPage implements OnInit {
  cateCardsData = [
    { title: 'Food and Dining',
      content: [
        { conTitle: 'Yogioh Samgyupsal',
          conType: 'Korean Restaurant',
          conLoc: 'M279+JX5, Esperanza St, Barangay Victoria',
          conHour: [
            { Sunday: ['12:00', '21:00'] },
            { Monday: ['12:00', '21:00'] },
            { Tuesday: ['12:00', '21:00'] },
            { Wednesday: ['12:00', '21:00'] },
            { Thursday: ['12:00', '21:00'] },
            { Friday: ['12:00', '21:00'] },
            { Saturday: ['12:00', '21:00'] },
          ],
          conWeb: '',
          conNum: '+639061222364',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverYogiohSamgy.jpg',
          conImg: [
            '../../assets/image/estImgYogiohSamgyA.jpg',
            '../../assets/image/estImgYogiohSamgyB.jpg',
            '../../assets/image/estImgYogiohSamgyC.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/gNNRBGCM4NdoUY7R8' },

        { conTitle: 'Everybody\'s Food House',
          conType: 'Diner',
          conLoc: 'M27C+89F, Barangay Bagumbayan',
          conHour: [
            { Sunday:    ['', ''] },
            { Monday:    ['', ''] },
            { Tuesday:   ['', ''] },
            { Wednesday: ['', ''] },
            { Thursday:  ['', ''] },
            { Friday:    ['', ''] },
            { Saturday:  ['', ''] },
          ],
          conWeb: '',
          conNum: '',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverEverybody.jpg',
          conImg: [
            '../../assets/image/.jpg',
            '../../assets/image/.jpg',
            '../../assets/image/.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/N9YGD6mbJhXn2Vos7' },
          
        { conTitle: 'Happy Cath Milktea-Fruittea-Frappe',
          conType: 'Cafe',
          conLoc: 'M279+PF7, Barangay Victoria',
          conHour: [
            { Sunday:    ['10:00', '20:00'] },
            { Monday:    ['10:00', '20:00'] },
            { Tuesday:   ['10:00', '20:00'] },
            { Wednesday: ['10:00', '20:00'] },
            { Thursday:  ['10:00', '20:00'] },
            { Friday:    ['10:00', '20:00'] },
            { Saturday:  ['10:00', '20:00'] },
          ],
          conWeb: '',
          conNum: '',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverHappyKath.jpg',
          conImg: [
            '../../assets/image/.jpg',
            '../../assets/image/.jpg',
            '../../assets/image/.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/9cB7oYxzMDy5TxFY9' },

        { conTitle: 'Takomo Takoyaki',
        conType: 'Takoyaki Stall',
        conLoc: 'M279+C94, Barangay Victoria',
        conHour: [
          { Sunday:    ['10:00', '19:00'] },
          { Monday:    ['10:00', '19:00'] },
          { Tuesday:   ['10:00', '19:00'] },
          { Wednesday: ['10:00', '19:00'] },
          { Thursday:  ['10:00', '19:00'] },
          { Friday:    ['10:00', '19:00'] },
          { Saturday:  ['10:00', '19:00'] },
        ],
        conWeb: '',
        conNum: '+639551449985',
        conDesc: 
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
        conCover: '../../assets/image/estCoverTakomo.jpg',
        conImg: [
          '../../assets/image/.jpg',
          '../../assets/image/.jpg',
          '../../assets/image/.jpg' ],
        conMapLink: 'https://maps.app.goo.gl/U94mCkaHFGDz2C9q8' }
      ],
    },

    // Worship

    { title: "Worship",
      content: [
        { conTitle: 'Iglesia Ni Cristo',
          conType: 'Place of Worship',
          conLoc: 'M268+2V9, Lagasca Ave, Barangay Plaridel',
          conHour: [
            { Sunday:    ['01:00', '24:00'] },
            { Monday:    ['01:00', '24:00'] },
            { Tuesday:   ['01:00', '24:00'] },
            { Wednesday: ['01:00', '24:00'] },
            { Thursday:  ['01:00', '24:00'] },
            { Friday:    ['01:00', '24:00'] },
            { Saturday:  ['01:00', '24:00'] },
          ],
          conWeb: 'http://iglesianicristo.net/',
          conNum: '',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverINC.jpg',
          conImg: [
            '../../assets/image/.jpg',
            '../../assets/image/.jpg',
            '../../assets/image/.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/jjygsk2cNe8hpMLj8'},

        { conTitle: 'Aglipayan Church',
          conType: 'Church',
          conLoc: 'M259+RXV, Paras St, Barangay Plaridel',
          conHour: [
            { Sunday:    ['01:00', '24:00'] },
            { Monday:    ['01:00', '24:00'] },
            { Tuesday:   ['01:00', '24:00'] },
            { Wednesday: ['01:00', '24:00'] },
            { Thursday:  ['01:00', '24:00'] },
            { Friday:    ['01:00', '24:00'] },
            { Saturday:  ['01:00', '24:00'] },
          ],
          conWeb: '',
          conNum: '',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverAglipay.jpg',
          conImg: [
            '../../assets/image/.jpg',
            '../../assets/image/.jpg',
            '../../assets/image/.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/jibxugyBhXASDYYu7'},

        { conTitle: 'Roman Catholic Church',
          conType: 'Catholic Church',
          conLoc: 'M269+74J, Lagasca Ave, Barangay Plaridel',
          conHour: [
            { Sunday:    ['01:00', '24:00'] },
            { Monday:    ['01:00', '24:00'] },
            { Tuesday:   ['01:00', '24:00'] },
            { Wednesday: ['01:00', '24:00'] },
            { Thursday:  ['01:00', '24:00'] },
            { Friday:    ['01:00', '24:00'] },
            { Saturday:  ['01:00', '24:00'] },
          ],
          conWeb: 'https://www.parishph.com/2022/07/immaculate-conception-parish-llanera.html',
          conNum: '',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverRomanCath.jpg',
          conImg: [
            '../../assets/image/.jpg',
            '../../assets/image/.jpg',
            '../../assets/image/.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/yJkL4FoGDK25Hifw7'},

          { conTitle: 'Ang Dating Daan',
          conType: 'Church',
          conLoc: 'M269+Q5H, Mendoza St, Barangay Plaridel',
          conHour: [
            { Sunday:    ['01:00', '24:00'] },
            { Monday:    ['01:00', '24:00'] },
            { Tuesday:   ['01:00', '24:00'] },
            { Wednesday: ['01:00', '24:00'] },
            { Thursday:  ['01:00', '24:00'] },
            { Friday:    ['01:00', '24:00'] },
            { Saturday:  ['01:00', '24:00'] },
          ],
          conWeb: 'https://www.mcgi.org',
          conNum: '+639151897007',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverMCGI.jpg',
          conImg: [
            '../../assets/image/.jpg',
            '../../assets/image/.jpg',
            '../../assets/image/.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/aCsVm8BEJMo98bXM9' }
      ]
    },

    // Finance

    { title: 'Finance',
      content: [
        { conTitle: 'Producers Bank',
          conType: 'Bank',
          conLoc: 'M258+RQV, Barangay Plaridel',
          conHour: [
            { Sunday:    ['10:00', '18:00'] },
            { Monday:    ['10:00', '18:00'] },
            { Tuesday:   ['10:00', '18:00'] },
            { Wednesday: ['10:00', '18:00'] },
            { Thursday:  ['10:00', '18:00'] },
            { Friday:    ['10:00', '18:00'] },
            { Saturday:  ['', ''] },
          ],
          conWeb: '',
          conNum: '',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverProducer.jpg',
          conImg: [
            '../../assets/image/.jpg',
            '../../assets/image/.jpg',
            '../../assets/image/.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/LAy6yjrmyURbap6r8' },
          
        { conTitle: '',
          conType: '',
          conLoc: '',
          conHour: [
            { Sunday:    ['10:00', '18:00'] },
            { Monday:    ['10:00', '18:00'] },
            { Tuesday:   ['10:00', '18:00'] },
            { Wednesday: ['10:00', '18:00'] },
            { Thursday:  ['10:00', '18:00'] },
            { Friday:    ['10:00', '18:00'] },
            { Saturday:  ['10:00', '18:00'] },
          ],
          conWeb: '',
          conNum: '',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCover.jpg',
          conImg: [
            '../../assets/image/.jpg',
            '../../assets/image/.jpg',
            '../../assets/image/.jpg' ],
          conMapLink: '' },
          
          { conTitle: '',
          conType: '',
          conLoc: '',
          conHour: [
            { Sunday:    ['10:00', '18:00'] },
            { Monday:    ['10:00', '18:00'] },
            { Tuesday:   ['10:00', '18:00'] },
            { Wednesday: ['10:00', '18:00'] },
            { Thursday:  ['10:00', '18:00'] },
            { Friday:    ['10:00', '18:00'] },
            { Saturday:  ['10:00', '18:00'] },
          ],
          conWeb: '',
          conNum: '',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCover.jpg',
          conImg: [
            '../../assets/image/.jpg',
            '../../assets/image/.jpg',
            '../../assets/image/.jpg' ],
          conMapLink: '' }
      ]
    }

  ]

  selectedCardIndex: number | null = null;
  selectedEstablishment: any = null;


  constructor(private menuCtrl: MenuController) {}

  toggleContent(index: number): void {
    if (this.selectedCardIndex === index) {
    } else {
      this.selectedCardIndex = index;
    }
  }

  openEndMenu(establishment: any) {
    this.selectedEstablishment = establishment;
    this.menuCtrl.open('end');
    // for testing
    console.log(this.selectedEstablishment);
  }

  isEstablishmentOpen(establishment: any): boolean {
    if (!establishment.conHour || establishment.conHour.length === 0) {

      console.log(`${establishment.conTitle} is open (no specified hours)`);
      return true;
    }
  
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const currentTime = currentDate.getHours() + ':' + currentDate.getMinutes();

    const todayHours = establishment.conHour.find((dayHours: any) => dayHours.hasOwnProperty(currentDay));
    
    if (todayHours) {
      const openingTime = todayHours[currentDay][0];
      const closingTime = todayHours[currentDay][1];

      const isOpen = currentTime >= openingTime && currentTime <= closingTime;
  
      console.log(`${establishment.conTitle} is ${isOpen ? 'open' : 'closed'}`);
      return isOpen;
    }

    console.log(`${establishment.conTitle} is closed (no hours for today)`);
    return false;
  }

  closeEndMenu() {
    this.menuCtrl.close('end');
  }

  ngOnInit() {}
}
          // { conTitle: '',
          // conType: '',
          // conLoc: '',
          // conHour: [
          //   { Sunday:    ['10:00', '18:00'] },
          //   { Monday:    ['10:00', '18:00'] },
          //   { Tuesday:   ['10:00', '18:00'] },
          //   { Wednesday: ['10:00', '18:00'] },
          //   { Thursday:  ['10:00', '18:00'] },
          //   { Friday:    ['10:00', '18:00'] },
          //   { Saturday:  ['10:00', '18:00'] },
          // ],
          // conWeb: '',
          // conNum: '',
          // conDesc: 
          //   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          // conCover: '../../assets/image/estCover.jpg',
          // conImg: [
          //   '../../assets/image/.jpg',
          //   '../../assets/image/.jpg',
          //   '../../assets/image/.jpg' ],
          // conMapLink: '' }