import { Component } from '@angular/core';
import {GMapModule} from 'primeng/gmap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dakattack';

  images:any[] = [];

  xmas: number = new Date("Dec 25, 2021 00:00:00").getTime();
  tgiving: number = new Date("Nov 25, 2021 00:00:00").getTime();

  countdown: any = {};

  video: any = {};

  options: any = {};

  ngOnInit() {

    this.options = {
      center: {lat: 36.209135, lng: -94.13478},
      zoom: 12
    };

    setInterval(() => {
        this.countdown.xmas = this.getDisplay(this.xmas);
        this.countdown.tgiving = this.getDisplay(this.tgiving);
    }, 1000);

    this.images = [
    {
       "previewImageSrc":"assets/trex.jpg",
       "title":"T-Rex with Candy Cane"
    },
    {
       "previewImageSrc":"assets/chichi.jpg",
       "title":"Chi Chi"
    },
    {
       "previewImageSrc":"assets/lincoln.jpg",
       "title":"Someone get me a penny"
    },
    {
       "previewImageSrc":"assets/peanut.jpg",
       "title":"Watchudoinpeanut"
    },
    {
       "previewImageSrc":"assets/runningman.jpg",
       "title":"Definitely not a swastika"
    },
    {
       "previewImageSrc":"assets/santa.jpg",
       "title":"Comin' to town"
    },
    {
       "previewImageSrc":"assets/signed.jpg",
       "title":"Aint' no holla back QB"
    },
    {
       "previewImageSrc":"assets/whodat.jpg",
       "title":"whodat"
    }
    ];

    this.video = "assets/car.mp4";
  }

  public getDisplay(target: number): string {
    var now = new Date().getTime();

    var distance = target - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }
}
