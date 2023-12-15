import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // start here : [ not available ]
  cateCardsData = [
    //FOOD AND DINING
    { title: 'Food and Dining',
      content: [
        // yugioh
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
          conWeb: '[ not available ]',
          conNum: '+639061222364',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverYogiyo.jpg',
          conImg: [
            '../../assets/image/estImgYogiyoA.jpg',
            '../../assets/image/estImgYogiyoB.jpg',
            '../../assets/image/estImgYogiyoC.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/gNNRBGCM4NdoUY7R8',},
          
        // everybody's food house
        { conTitle: 'Everybody\'s Food House',
          conType: 'Diner',
          conLoc: 'M27C+89F, Barangay Bagumbayan',
          conHour: [
            { Sunday:    ['06:00', '16:00'] },
            { Monday:    ['06:00', '16:00'] },
            { Tuesday:   ['06:00', '16:00'] },
            { Wednesday: ['06:00', '16:00'] },
            { Thursday:  ['06:00', '16:00'] },
            { Friday:    ['06:00', '16:00'] },
            { Saturday:  ['06:00', '16:00'] },
          ],
          conWeb: '[ not available ]',
          conNum: '+63 930 756 3231',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverEverbody.jpg',
          conImg: [
            '../../assets/image/estEverbodyA.jpg',
            '../../assets/image/estEverbodyB.jpg',
            '../../assets/image/estEverbodyC.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/N9YGD6mbJhXn2Vos7' },
        // happy cath milktea-fruittea-frappe
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
          conWeb: '[ not available ]',
          conNum: '[ not available ]',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverHappyCath.jpg',
          conImg: [
            '../../assets/image/estHappyCathA.jpg',
            '../../assets/image/estHappyCathB.jpg',
            '../../assets/image/estHappyCathC.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/9cB7oYxzMDy5TxFY9' },
        // takomo takoyaki
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
          '../../assets/image/estTakomoA.jpg',
          '../../assets/image/estTakomoB.jpg',
          '../../assets/image/estTakomoC.jpg' ],
        conMapLink: 'https://maps.app.goo.gl/U94mCkaHFGDz2C9q8' },
        // big mak
        { conTitle: 'Big Mak!',
          conType: 'Fast Food',
          conLoc: 'M279+9H8, Taguan St, Barangay Victoria',
          conHour: [
            { Sunday:    ['09:00', '18:00'] },
            { Monday:    ['09:00', '18:00'] },
            { Tuesday:   ['09:00', '18:00'] },
            { Wednesday: ['09:00', '18:00'] },
            { Thursday:  ['09:00', '18:00'] },
            { Friday:    ['09:00', '18:00'] },
            { Saturday:  ['09:00', '18:00'] },
          ],
          conWeb: 'http://www.lcbigmak.com/',
          conNum: '',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverBigMak.jpg',
          conImg: [
            '../../assets/image/estBigMakA.jpg',
            '../../assets/image/estBigMakB.jpg',
            '../../assets/image/estBigMakC.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/XsCZNSZpdv6BHvia6' }
      ],
    },
    // WORSHIP
    { title: "Worship",
      content: [
        // iglesia ni cristo
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
            '../../assets/image/estIglesiaA.jpg',
            '../../assets/image/estIglesiaB.jpg',
            '../../assets/image/estIglesiaC.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/jjygsk2cNe8hpMLj8'},
        // aglipayan church
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
          conWeb: '[ not available ]',
          conNum: '[ not available ]',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverAglipay.jpg',
          conImg: [
            '../../assets/image/estAglipayanA.jpg',
            '../../assets/image/estAglipayanB.jpg',
            '../../assets/image/estAglipayanC.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/jibxugyBhXASDYYu7'},
        // roman catholic church
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
          conCover: '../../assets/image/estCoverRomanCatholicChurch.jpg',
          conImg: [
            '../../assets/image/estRomanCatholicChurchA.jpg',
            '../../assets/image/estRomanCatholicChurchB.jpg',
            '../../assets/image/estRomanCatholicChurchC.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/yJkL4FoGDK25Hifw7'},
        
        // ang dating daan
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
            '../../assets/image/estAngDatingDaanA.jpg',
            '../../assets/image/estAngDatingDaanB.jpg',
            '../../assets/image/estAngDatingDaanC.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/aCsVm8BEJMo98bXM9'},
        
        // jesus is lord
        {conTitle: 'Jesus Is Lord',
          conType: 'Church',
          conLoc: 'M269+H3W, Barangay Plaridel',
          conHour: [
            { Sunday:    ['00:00', '24:00'] },
            { Monday:    ['00:00', '24:00'] },
            { Tuesday:   ['00:00', '24:00'] },
            { Wednesday: ['00:00', '24:00'] },
            { Thursday:  ['00:00', '24:00'] },
            { Friday:    ['00:00', '24:00'] },
            { Saturday:  ['00:00', '24:00'] },
          ],
          conWeb: 'https://jilworldwide.org/',
          conNum: '[ not available ]',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverJIL.jpg',
          conImg: [
            '../../assets/image/estJILA.jpg',
            '../../assets/image/estJILB.jpg',
            '../../assets/image/estJILC.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/P24xAKKJ1ZHBCQjp6' }
      ]
    },

    // FINANCE
    { title: 'Finance',
      content: [
      //producers bank
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
          conWeb: 'https://www.producersbank.com.ph/',
          conNum: '[ not available ]',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverProducersBank.jpg',
          conImg: [
            '../../assets/image/estProducersBankA.jpg',
            '../../assets/image/estProducersBankB.jpg',
            '../../assets/image/estProducersBankC.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/LAy6yjrmyURbap6r8' },
        // gm bank
        { conTitle: 'GM Bank',
          conType: 'Bank',
          conLoc: 'M279+73R, Barangay Victoria',
          conHour: [
            { Sunday:    ['08:00', '16:00'] },
            { Monday:    ['08:00', '16:00'] },
            { Tuesday:   ['08:00', '16:00'] },
            { Wednesday: ['08:00', '16:00'] },
            { Thursday:  ['08:00', '16:00'] },
            { Friday:    ['08:00', '16:00'] },
            { Saturday:  ['08:00', '16:00'] },
          ],
          conWeb: 'https://gmbank.com.ph/',
          conNum: '0448061911',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverGMBank.jpg',
          conImg: [
            '../../assets/image/estGMBankA.jpg',
            '../../assets/image/estGMBankB.jpg',
            '../../assets/image/estGMBankC.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/k62m7hMWKBMJTHL88' },
        // cebuana lhuillier pawnshop
        { conTitle: 'Cebuana Lhuillier Pawnshop',
          conType: 'Pawnshop',
          conLoc: 'Castillo St, Barangay Victoria',
          conHour: [
            { Sunday:    ['08:00', '15:00'] },
            { Monday:    ['08:00', '15:00'] },
            { Tuesday:   ['08:00', '15:00'] },
            { Wednesday: ['08:00', '15:00'] },
            { Thursday:  ['08:00', '15:00'] },
            { Friday:    ['08:00', '15:00'] },
            { Saturday:  ['08:00', '15:00'] },
          ],
          conWeb: 'https://www.cebuanalhuillier.com/',
          conNum: '09172526928',
          conDesc: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverCebuanaLhuillier.jpg',
          conImg: [
            '../../assets/image/estCebuanaLhuillierA.jpg',
            '../../assets/image/estCebuanaLhuillierB.jpg',
            '../../assets/image/estCebuanaLhuillierC.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/fGkF44KYZuTwnQEi7' },
        // m lhuillier
        { conTitle: 'M Lhuillier',
          conType: 'Pawnshop',
          conLoc: 'M279+83Q, Castillo St, Barangay Victoria',
          conHour: [
            { Sunday:    ['08:00', '16:00'] },
            { Monday:    ['08:00', '16:00'] },
            { Tuesday:   ['08:00', '16:00'] },
            { Wednesday: ['08:00', '16:00'] },
            { Thursday:  ['08:00', '16:00'] },
            { Friday:    ['08:00', '16:00'] },
            { Saturday:  ['08:00', '16:00'] },
           ],
           conWeb: 'https://mlhuillier.com/',
           conNum: '[ not available ]',
           conDesc: 
             'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
           conCover: '../../assets/image/estCoverMLhuillier.jpg',
           conImg: [
             '../../assets/image/estMLhuillierA.jpg',
             '../../assets/image/estMLhuillierB.jpg',
             '../../assets/image/estMLhuillierC.jpg' ],
           conMapLink: 'https://maps.app.goo.gl/iXFxMLDcSq2m6vxr6' },
        // palawan pawnshop
        { conTitle: 'Palawan Pawnshop',
          conType: 'Pawnshop',
          conLoc: 'M279+G5G, Castillo St, Barangay Victoria',
          conHour: [
            { Sunday:    ['08:00', '16:00'] },
            { Monday:    ['08:00', '16:00'] },
            { Tuesday:   ['08:00', '16:00'] },
            { Wednesday: ['08:00', '16:00'] },
            { Thursday:  ['08:00', '16:00'] },
            { Friday:    ['08:00', '16:00'] },
            { Saturday:  ['08:00', '16:00'] },
           ],
           conWeb: 'https://www.palawanpawnshop.com/',
           conNum: '[ not available ]',
           conDesc: 
             'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
           conCover: '../../assets/image/estCoverPalawanPawn.jpg',
           conImg: [
             '../../assets/image/estPalawanPawnA.jpg',
             '../../assets/image/estPalawanPawnB.jpg',
             '../../assets/image/estPalawanPawnC.jpg' ],
           conMapLink: 'https://maps.app.goo.gl/4BqZraxg75Qdk1Uv8' }
      ]
    },

    // HOTEL AND RESORT
    { title: 'Hotel and Resort',
      content: [

        // villa valentina resort
        { conTitle: 'Villa Valentina Resort',
          conType: 'Hotel and Resort',
          conLoc: 'M239+5G7, Garcia St, Barangay Plaridel',
          conHour: [
           { Sunday:    ['09:00', '21:00'] },
           { Monday:    ['09:00', '21:00'] },
           { Tuesday:   ['09:00', '21:00'] },
           { Wednesday: ['09:00', '21:00'] },
           { Thursday:  ['09:00', '21:00'] },
           { Friday:    ['09:00', '21:00'] },
           { Saturday:  ['09:00', '21:00'] },
          ],
          conWeb: '[ not available ]',
          conNum: '[ not available ]',
          conDesc: 
           'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverVillaValentina.jpg',
          conImg: [
           '../../assets/image/estVillaValentinaA.jpg',
           '../../assets/image/estVillaValentinaB.jpg',
           '../../assets/image/estVillaValentinaC.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/bLC1GwaeeA1tdcbq6' },

        //
        { conTitle: 'Juliana\'s Paradise',
          conType: 'Hotel and Resort',
          conLoc: 'M25F+84H, Barangay Bagumbayan',
          conHour: [
           { Sunday:    ['10:00', '18:00'] },
           { Monday:    ['10:00', '18:00'] },
           { Tuesday:   ['10:00', '18:00'] },
           { Wednesday: ['10:00', '18:00'] },
           { Thursday:  ['10:00', '18:00'] },
           { Friday:    ['10:00', '18:00'] },
           { Saturday:  ['10:00', '18:00'] },
          ],
          conWeb: '[ not available ]',
          conNum: '09665313700',
          conDesc: 
           'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverJuliana.jpg',
          conImg: [
           '../../assets/image/estJulianaA.jpg',
           '../../assets/image/estJulianaB.jpg',
           '../../assets/image/estJulianaC.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/vfSCSQPkiJv6BBJh9' },

        //
        { conTitle: 'D Campsite',
          conType: 'Hotel and Resort',
          conLoc: 'JXFC+MR3, San Vicente',
          conHour: [
           { Sunday:    ['10:00', '18:00'] },
           { Monday:    ['10:00', '18:00'] },
           { Tuesday:   ['10:00', '18:00'] },
           { Wednesday: ['10:00', '18:00'] },
           { Thursday:  ['10:00', '18:00'] },
           { Friday:    ['10:00', '18:00'] },
           { Saturday:  ['10:00', '18:00'] },
          ],
          conWeb: '[ not available ]',
          conNum: '09237438460',
          conDesc: 
           'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum facilis dolore vitae sed iusto pariatur doloribus sit nobis perspiciatis esse fugiat, voluptatem labore cupiditate quae cum quaerat asperiores quis perferendis. Fugit aut consectetur quo. Qui harum, fuga obcaecati assumenda a aperiam nam ad eveniet ex mollitia, asperiores, quis distinctio similique!',
          conCover: '../../assets/image/estCoverDcampsite.jpg',
          conImg: [
           '../../assets/image/estDcampsiteA.jpg',
           '../../assets/image/estDcampsiteB.jpg',
           '../../assets/image/estDcampsiteC.jpg' ],
          conMapLink: 'https://maps.app.goo.gl/MQ9Gb3q2BkJpZ1px8' },

      ]
    }
  ];

  govEstablishment = {
    title: 'Government',
    content: [
      {
      conTitle: 'Llanera PNP',
      conType:  'Police Station',
      conNum:   '09985985415123123',
      conLoc:   'M279+3MR, Taguan St, Barangay Victoria',
      conLogo: '../../assets/image/PNPlogo.png', //add the logo @leo
      conDesc:  'The Philippine National Police (Filipino: Pambansang Pulisya ng Pilipinas, PNP) is the armed national police force in the Philippines.',
      conHours: [
        { Sunday:   ['00:00', '24:00'] },
        { Monday:   ['00:00', '24:00'] },
        { Tuesday:  ['00:00', '24:00'] },
        { Wednesday:['00:00', '24:00'] },
        { Thursday: ['00:00', '24:00'] },
        { Friday:   ['00:00', '24:00'] },
        { Saturday: ['00:00', '24:00'] }
      ],
      conFB:    'https://www.facebook.com/llanera.finest',
      conWeb:   'https://police.contactnumbersph.com/llanera-municipal-police-station/',
      conFig:   [
        { figName: 'Cardo Dalisay', figPos: 'Police General', figDesc: 'Brave Officer', figImg: '../../assets/image/Cardo.jpg' },
        { figName: 'Kiko Matos', figPos: 'Senior Police Officer III', figDesc: 'Kind Officer',  figImg: '../../assets/image/Kiko.jpg' },
        { figName: 'Ogie Alcasid', figPos: 'Police Officer II', figDesc: 'Friendly Officer',  figImg: '../../assets/image/Ogie.jpg' }
      ],
    },
    {
      conTitle: 'Llanera BFP',
      conType:  'Fire Station',
      conNum:   '09153423773',
      conLoc:   'M279+3G2, Mendoza St, Barangay Victoria',
      conLogo: '../../assets/image/BFPlogo.png', // add the logo @leo
      conDesc:  'The Bureau of Fire Protection is the government body in the Philippines responsible for the provision of fire services.',
      conHours: [
        { Sunday:   ['00:00', '24:00'] },
        { Monday:   ['00:00', '24:00'] },
        { Tuesday:  ['00:00', '24:00'] },
        { Wednesday:['00:00', '24:00'] },
        { Thursday: ['00:00', '24:00'] },
        { Friday:   ['00:00', '24:00'] },
        { Saturday: ['00:00', '24:00'] }
      ],
      conFB:    'https://www.facebook.com/profile.php?id=100064370064963',
      conWeb:   '[ not available ]',
      conFig:   [
        { figName: 'Alden Richard', figPos: 'Fire Chief Inspector', figDesc: 'Brave Officer', figImg: '../../assets/image/Alden.jpg' },
        { figName: 'Dingdong Dantes', figPos: 'Senior Fire Officer II', figDesc: 'Friendly Officer', figImg: '../../assets/image/Dingdong.jpg' },
        { figName: 'Jobert Austria', figPos: 'Fire Officer III', figDesc: 'Kind Officer', figImg: '../../assets/image/Jobert.jpg' }
      ],
    },
    {
      conTitle: 'Rural Health Office',
      conType:  'Medical Center',
      conNum:   '911',
      conLoc:   'M279+2P5, Barangay Victoria',
      conLogo: '../../assets/image/DOHlogo.png', // add the logo @leo
      conDesc:  'A government owned health center located in Llanera',
      conHours: [
        { Sunday:   ['08:00', '16:00'] },
        { Monday:   ['08:00', '16:00'] },
        { Tuesday:  ['08:00', '16:00'] },
        { Wednesday:['08:00', '16:00'] },
        { Thursday: ['08:00', '16:00'] },
        { Friday:   ['08:00', '16:00'] },
        { Saturday: ['08:00', '16:00'] }
      ],
      conFB:    'https://www.facebook.com/pages/Llanera-Rural-Health-Unit/792626887533952',
      conWeb:   '[ not available ]',
      conFig:   [
        { figName: 'Eranio Sibuma', figPos: 'Nurse', figDesc: 'Kind Public Servant', figImg: '../../assets/image/Eranio.jpg' },
        { figName: 'Kyle Kushma', figPos: 'Nurse', figDesc: 'Friendly Public Servant', figImg: '../../assets/image/Kyle.jpg' },
        { figName: 'James Hardenero', figPos: 'Nurse', figDesc: 'Generous Public Servant', figImg: '../../assets/image/James.jpg' }
      ],
    }

  ]
}
  govOfficial = {
    title: 'Government Officials',
    content: [
      { 
        offName: 'Ronnie Roy Pascual',
        offPos: 'Mayor - Llanera',
        offAdd: 'Brgy. Victoria', 
        offDesc: 'Isang taos pusong pasasalamat po ang mapaglingkuran kayong lahat.',
        offImg: 'Mayor.jpg'
      },
    ]
  }

  // developers
  // please add 'conRole'
  developer = {
    title: 'Members',
    content: [
      {
        conRole: 'Developer',
        conName: 'Syed Ameer Sibuma',
        conAdd: 'Brgy Plaridel, Llanera NE.',
        conDOB: '2001-06-16',
        conImg: '../../assets/image/devImgSAS.jpg',
        conMotto: 'Time is gold, experience is diamond.'
      },

      {
      conRole: 'Graphic Design - Data Validation',
      conName: 'Leopoldo C Servana', 
      conAdd: 'Brgy Plaridel, Llanera NE', 
      conDOB: '2002-08-09', 
      conMotto: 'Everything must come to and end', 
      conImg: '../../assets/image/devImgLCS.jpg'},
      
      {
      conRole: 'Documentation - Development',
      conName: 'Winchester T. Aurelio', 
      conAdd: 'Brgy Macarse. Zaragoza NE', 
      conDOB: '2002-11-23', 
      conMotto: 'Sometimes you win, sometimes you learn.', 
      conImg: '../../assets/image/devImgWTA.jpg'},
      
      {
      conRole: 'Development',
      conName: 'Jenrick Lopez',
      conAdd: 'Cabanatuan, NE', 
      conDOB: '2001-02-15', 
      conMotto: 'Always trust before you happy', 
      conImg: '../../assets/image/devImgJL.jpg'},

      {
        conRole: 'Development',
        conName: 'John Hasley Glomo',
        conAdd: 'Cabanatuan, NE', 
        conDOB: '2000-12-06', 
        conMotto: 'Live the moment to the fullest', 
        conImg: '../../assets/image/devImgJHG.jpg'},
      
    ]}

  selectedEstablishment: any;

  setSelectedEstablishment( establishment: any ): void {
    console.log('from setSelectedEstablishment: ', this.selectedEstablishment);
    this.selectedEstablishment = establishment;
  }

  getSelectedEstablishment(): any { 
    console.log('from getSelectedEstablishment: ',this.selectedEstablishment)
    return this.selectedEstablishment;
  }

  getGovEstablishment(): any {
    return this.govEstablishment;
  }

  getDeveloper () {
    return this.developer;
    console.log('setted!')
  }

  getGovOfficial() {
    return this.govOfficial;
  }

  private menuToggleSubject = new Subject<void>();

  menuToggle$ = this.menuToggleSubject.asObservable();

  toggleMenu() {
    this.menuToggleSubject.next();
  }
}