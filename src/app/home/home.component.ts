import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './weather.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRippleModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SongsService } from './songs.service';
import { LoadingTextService } from './loading-text.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    MatRippleModule,
    MatProgressSpinnerModule
  ]
})
export class HomeComponent implements OnInit {
  weatherData: any;
  bgImage: any;
  songsData: any;
  loadingText$: Observable<string>;

  outerStep = 0;
  innerStep = 0;

  setStep(target: string, index: number) {
    if (target === 'outer')
      this.outerStep = index;
    else
      this.innerStep = index
  }

  nextStep(target: string) {
    if (target === 'outer'){
      this.outerStep++;
      this.innerStep = 0;
    }
    else
    this.innerStep++;
  }

  prevStep(target: string) {
    if (target === 'outer'){
      this.outerStep--;
      this.innerStep = 0;
    }
    else
    this.innerStep--;
  }

  // Dummy Data for testing
  expanderDataTemp = [
    {
      "name": "Vaseegara",
      "search_results": [
        {
          "Name": "Vaseegara",
          "Artist": "Bombay Jayashri",
          "Album": "Minnalae (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/34IgZueFcAjJ1xwVxH1ANy",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273102f02fa7e7ded2bc5f65653",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02102f02fa7e7ded2bc5f65653",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851102f02fa7e7ded2bc5f65653",
              "width": 64
            }
          ],
          "Duration": 299146,
          "Popularity": 53,
          "Song Preview": "https://p.scdn.co/mp3-preview/2db5c05f48a7214b56c8eed843103ae3f241e00e?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vaseegara / Zara Zara Mashup",
          "Artist": "Jonita Gandhi",
          "Album": "Vaseegara / Zara Zara Mashup - Single",
          "Spotify URL": "https://open.spotify.com/track/3B7eDo0JA8rkMRsPa9n7rq",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d63993be71b4d6bf10ef5e93",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d63993be71b4d6bf10ef5e93",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d63993be71b4d6bf10ef5e93",
              "width": 64
            }
          ],
          "Duration": 184670,
          "Popularity": 43,
          "Song Preview": "https://p.scdn.co/mp3-preview/7bf38b7c9708069b8b35b2c26611bec74275399d?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vaseegara",
          "Artist": "Avinash Gupta",
          "Album": "Vaseegara - Single",
          "Spotify URL": "https://open.spotify.com/track/7wHiFACAOlueyfcjMdh8K2",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2730c6b11216f0a3d01182ac25f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e020c6b11216f0a3d01182ac25f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048510c6b11216f0a3d01182ac25f",
              "width": 64
            }
          ],
          "Duration": 172333,
          "Popularity": 19,
          "Song Preview": "https://p.scdn.co/mp3-preview/71eecab144ae3da0521f6d1b537fa74b03a3e449?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vaseegara (Lofi)",
          "Artist": "Bombay Jayashri, AJX",
          "Album": "Madhavan Melody Hits - Lofi",
          "Spotify URL": "https://open.spotify.com/track/6MnhzR39YX33M3cz9EDsEO",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2736bed0215d3d159fd2976e6e7",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e026bed0215d3d159fd2976e6e7",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048516bed0215d3d159fd2976e6e7",
              "width": 64
            }
          ],
          "Duration": 129085,
          "Popularity": 30,
          "Song Preview": "https://p.scdn.co/mp3-preview/3323b499f8f04ef0a363ae06a8b7f7edbe5951cd?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vaseegara",
          "Artist": "Samyu Mohan",
          "Album": "Unplugged - Samyu Mohan",
          "Spotify URL": "https://open.spotify.com/track/2k70Q4DApJqW8yggcYidAD",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273e318bac684a90de8b5253028",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02e318bac684a90de8b5253028",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851e318bac684a90de8b5253028",
              "width": 64
            }
          ],
          "Duration": 149000,
          "Popularity": 22,
          "Song Preview": "https://p.scdn.co/mp3-preview/ad171bc8bb2b28cbe4eac4b3e6e8aaa002a51c2c?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vaseegara (From \"Minnalae\") - Rainy Lofi",
          "Artist": "Bombay Jayashri, Harris Jayaraj, Thamarai, Kamal Eleven",
          "Album": "Vaseegara (From \"Minnalae\") [Rainy Lofi]",
          "Spotify URL": "https://open.spotify.com/track/3zqnFb5Lat1syi78Ks0ZcJ",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273a8a6c96a65353346f3e25b75",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02a8a6c96a65353346f3e25b75",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851a8a6c96a65353346f3e25b75",
              "width": 64
            }
          ],
          "Duration": 93870,
          "Popularity": 22,
          "Song Preview": "https://p.scdn.co/mp3-preview/5ca6ca792f2013a2bbfca6c6b0fcd3649dbabe04?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vaseegara",
          "Artist": "Bombay Jayashri",
          "Album": "Harris Jayaraj Rain Melodies",
          "Spotify URL": "https://open.spotify.com/track/3PUAqsXkcBxhS6GglUu3qE",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27318ee67dd4ffc2ce712b5b70b",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0218ee67dd4ffc2ce712b5b70b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485118ee67dd4ffc2ce712b5b70b",
              "width": 64
            }
          ],
          "Duration": 299146,
          "Popularity": 5,
          "Song Preview": "https://p.scdn.co/mp3-preview/2db5c05f48a7214b56c8eed843103ae3f241e00e?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vaseegara",
          "Artist": "Bombay Jayashri",
          "Album": "Harris - The Hit Machine",
          "Spotify URL": "https://open.spotify.com/track/3vAYpueWuwpKjyrGcDDAwp",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273812232a1565d04fafc210e6e",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02812232a1565d04fafc210e6e",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851812232a1565d04fafc210e6e",
              "width": 64
            }
          ],
          "Duration": 299146,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/2db5c05f48a7214b56c8eed843103ae3f241e00e?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vaseegara-Remixes",
          "Artist": "Bombay Jayashri, DJ Revvy",
          "Album": "Tamil Chill out Remixes",
          "Spotify URL": "https://open.spotify.com/track/5Y3X4hAez9CHq8M5NMAADV",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273f07c59016b31ddce0b17d53b",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02f07c59016b31ddce0b17d53b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851f07c59016b31ddce0b17d53b",
              "width": 64
            }
          ],
          "Duration": 277398,
          "Popularity": 12,
          "Song Preview": "https://p.scdn.co/mp3-preview/a91597fd7618d4925ccd154c1b6949b9d3002931?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Nenjam Orumurai",
          "Artist": "Srinivas, Mahalakshmi Iyer",
          "Album": "Vaseegara",
          "Spotify URL": "https://open.spotify.com/track/7mQpVMVCR0w6ZqGk70OB7I",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738505200f0e882d933cbfb06d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028505200f0e882d933cbfb06d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518505200f0e882d933cbfb06d",
              "width": 64
            }
          ],
          "Duration": 285800,
          "Popularity": 46,
          "Song Preview": "https://p.scdn.co/mp3-preview/798f808380d3ba86f7867e8673552117b3dfeb1d?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Poopola Theepola",
          "Artist": "Hariharan",
          "Album": "Vaseegara",
          "Spotify URL": "https://open.spotify.com/track/3UgYl12IZsCU9ZM1aYdpte",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738505200f0e882d933cbfb06d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028505200f0e882d933cbfb06d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518505200f0e882d933cbfb06d",
              "width": 64
            }
          ],
          "Duration": 290066,
          "Popularity": 42,
          "Song Preview": "https://p.scdn.co/mp3-preview/33ba091d9eda41757ce436068a3c67a4374c2783?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Oru Thadavai",
          "Artist": "Hariharan, Chinmayi",
          "Album": "Vaseegara",
          "Spotify URL": "https://open.spotify.com/track/0jZ6JpgBlMIHggUKdod1w2",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738505200f0e882d933cbfb06d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028505200f0e882d933cbfb06d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518505200f0e882d933cbfb06d",
              "width": 64
            }
          ],
          "Duration": 291906,
          "Popularity": 43,
          "Song Preview": "https://p.scdn.co/mp3-preview/39bf00730b2a593d66bde682fb6cab313ff6e81b?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Venaam Vennam",
          "Artist": "Udit Narayan, Sadhana Sargam",
          "Album": "Vaseegara",
          "Spotify URL": "https://open.spotify.com/track/3bsX2dlmK7s5LTt6Rc7Lfu",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738505200f0e882d933cbfb06d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028505200f0e882d933cbfb06d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518505200f0e882d933cbfb06d",
              "width": 64
            }
          ],
          "Duration": 282360,
          "Popularity": 43,
          "Song Preview": "https://p.scdn.co/mp3-preview/bf445d4a0f2142ba8c00ea5a8506611901abd722?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vaseegara (Ooratti Lofi)",
          "Artist": "Bombay Jayashri, Ooratti",
          "Album": "Vaseegara (Ooratti Lofi) - Single",
          "Spotify URL": "https://open.spotify.com/track/0Ug8XzeKdgqDPISk8W004I",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27370dd98f61ed8b5215fea4a04",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0270dd98f61ed8b5215fea4a04",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485170dd98f61ed8b5215fea4a04",
              "width": 64
            }
          ],
          "Duration": 112519,
          "Popularity": 9,
          "Song Preview": "https://p.scdn.co/mp3-preview/aff91b6cb6f320ed40aaa085f69f8979e9570c63?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Aaha Enbargal",
          "Artist": "Shankar Mahadevan",
          "Album": "Vaseegara",
          "Spotify URL": "https://open.spotify.com/track/22HKbGUTcPnJUYFVCYNAzu",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738505200f0e882d933cbfb06d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028505200f0e882d933cbfb06d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518505200f0e882d933cbfb06d",
              "width": 64
            }
          ],
          "Duration": 300093,
          "Popularity": 41,
          "Song Preview": "https://p.scdn.co/mp3-preview/9a1cd4643d9fe3fb2c4459fb79186f3c8fa5686f?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vaseegara (From \"Minnalae\") - Slowed And Reverbed",
          "Artist": "Bombay Jayashri, Harris Jayaraj, Thamarai, Rithick J",
          "Album": "Vaseegara (From \"Minnalae\") [Slowed And Reverbed]",
          "Spotify URL": "https://open.spotify.com/track/2bXLIreWFsJaQuCdvptSZ0",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c01a72da0cdac6eceab88129",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c01a72da0cdac6eceab88129",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c01a72da0cdac6eceab88129",
              "width": 64
            }
          ],
          "Duration": 192821,
          "Popularity": 13,
          "Song Preview": "https://p.scdn.co/mp3-preview/2789be7f2638a7c8a5c05b476e9f8807bf6c346c?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vaseegara (Slowed and Reverb)",
          "Artist": "Bombay Jayashri, Harish Hwarkling",
          "Album": "Vaseegara (Slowed and Reverb) - Single",
          "Spotify URL": "https://open.spotify.com/track/7gXJdTOmCbVGQ7cJZvi4Tu",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2735f61ac9770ea7b0281cf7a0d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e025f61ac9770ea7b0281cf7a0d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048515f61ac9770ea7b0281cf7a0d",
              "width": 64
            }
          ],
          "Duration": 182083,
          "Popularity": 10,
          "Song Preview": "https://p.scdn.co/mp3-preview/3d51eeb1061894538ead5482cb106a7ff14e67b7?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vaseegara X Zara Zara Bombay Jayashri (Mashup)",
          "Artist": "Bombay Jayashri, Harish Hwarkling",
          "Album": "Vaseegara X Zara Zara Bombay Jayashri (Mashup) - Single",
          "Spotify URL": "https://open.spotify.com/track/2BSpyzPm8u0hy45AII2vtq",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d4a9ddd5a1515c1811671af4",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d4a9ddd5a1515c1811671af4",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d4a9ddd5a1515c1811671af4",
              "width": 64
            }
          ],
          "Duration": 299221,
          "Popularity": 15,
          "Song Preview": "https://p.scdn.co/mp3-preview/60d8b7426a6f306ce221eeb7178d7056a7bdecc3?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Marriage Endral",
          "Artist": "Karthik",
          "Album": "Vaseegara",
          "Spotify URL": "https://open.spotify.com/track/64GarwwAbZjXBantHjaKM1",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738505200f0e882d933cbfb06d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028505200f0e882d933cbfb06d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518505200f0e882d933cbfb06d",
              "width": 64
            }
          ],
          "Duration": 275866,
          "Popularity": 37,
          "Song Preview": "https://p.scdn.co/mp3-preview/93f5ae59560b5e707fc488629730d614455045f9?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vaseegara X Zara Zara Mashup - Trap Mix",
          "Artist": "Jonita Gandhi, Rithick J",
          "Album": "Vaseegara X Zara Zara Mashup (Trap Mix)",
          "Spotify URL": "https://open.spotify.com/track/7rqhEYpjZBjyVDt5OnBBdr",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273bd4250bea942055d41f13544",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02bd4250bea942055d41f13544",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851bd4250bea942055d41f13544",
              "width": 64
            }
          ],
          "Duration": 183552,
          "Popularity": 11,
          "Song Preview": "https://p.scdn.co/mp3-preview/ae35c2414ba954e3faa99b40122b5b18cbbb2b0c?cid=73e4cf715b8943f5a128be2302bb7674"
        }
      ]
    },
    {
      "name": "Vennilave Vennilave",
      "search_results": [
        {
          "Name": "Vennilave Vennilave",
          "Artist": "Djcj",
          "Album": "Vennilave Vennilave",
          "Spotify URL": "https://open.spotify.com/track/1T10Vm68QjqbbrehTPJtKq",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2732e72d74c71ccbd944ba20836",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e022e72d74c71ccbd944ba20836",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048512e72d74c71ccbd944ba20836",
              "width": 64
            }
          ],
          "Duration": 100207,
          "Popularity": 42,
          "Song Preview": "https://p.scdn.co/mp3-preview/12a621cdd8d2dc5f200e923b37d10228eda15126?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vennilave Vennilave Vinnai",
          "Artist": "Hariharan, Sadhana Sargam",
          "Album": "Minsara Kanavu (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/791epRjqLa35UtyiLbDUi5",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27350890b3a5220fe5981cd9c43",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0250890b3a5220fe5981cd9c43",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485150890b3a5220fe5981cd9c43",
              "width": 64
            }
          ],
          "Duration": 351720,
          "Popularity": 43,
          "Song Preview": "https://p.scdn.co/mp3-preview/38b8b6a1bec5b5768bb7894941f42f05c3c2d364?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vennilave",
          "Artist": "Shreya Ghoshal, M. G. Sreekumar",
          "Album": "Sagar Alias Jacky Reloaded (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/4WSwpc6r2yyNA0TSvo1gHv",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738d4db6e7bb7cc7bcc1d8e317",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028d4db6e7bb7cc7bcc1d8e317",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518d4db6e7bb7cc7bcc1d8e317",
              "width": 64
            }
          ],
          "Duration": 273213,
          "Popularity": 48,
          "Song Preview": "https://p.scdn.co/mp3-preview/920881eabe308f20f423a6df6013c406a0377136?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vennilave Vennilave",
          "Artist": "Swarnalatha, S. P. Balasubrahmanyam",
          "Album": "Kaalamellam Kadhal Vaazhga (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/2pJxNV8GPlgQLSlQTLIzoo",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b9f9f1525cd4c5c31d7de265",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b9f9f1525cd4c5c31d7de265",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b9f9f1525cd4c5c31d7de265",
              "width": 64
            }
          ],
          "Duration": 326040,
          "Popularity": 44,
          "Song Preview": "https://p.scdn.co/mp3-preview/54f9bd5dd92435107dc929f488085713aa72b3dc?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vennilave (From \"Minsara Kanavu\")",
          "Artist": "A.R. Rahman, Hariharan, Sadhana Sargam",
          "Album": "Ever Green Love Songs (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/0Pcg6igghFbaCaqwcpUM36",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273418188e0c660654d069e06e2",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02418188e0c660654d069e06e2",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851418188e0c660654d069e06e2",
              "width": 64
            }
          ],
          "Duration": 351720,
          "Popularity": 58,
          "Song Preview": "https://p.scdn.co/mp3-preview/47113a567ebcc10379f592a03d2237efee9b941c?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vennilave Vennilave [Chanda Re] [Flute Instrumental]",
          "Artist": "Flute Siva, Thibisan Balachandran",
          "Album": "Vennilave Vennilave [Chanda Re] [Flute Instrumental]",
          "Spotify URL": "https://open.spotify.com/track/0FeFoN93tz5Wh4fZhAnCt3",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273cdc04dd5bdbaab32716c4d0c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02cdc04dd5bdbaab32716c4d0c",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851cdc04dd5bdbaab32716c4d0c",
              "width": 64
            }
          ],
          "Duration": 237037,
          "Popularity": 34,
          "Song Preview": "https://p.scdn.co/mp3-preview/41592c9283d6103f3dcd4e16796f874f1e2275bc?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vennelave Vennelave",
          "Artist": "Hariharan, Sadhana Sargam",
          "Album": "Merupu Kalalu",
          "Spotify URL": "https://open.spotify.com/track/08Zh9GFP2TKItpgcfRSHUV",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27384351604b643064b97982db5",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0284351604b643064b97982db5",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485184351604b643064b97982db5",
              "width": 64
            }
          ],
          "Duration": 359773,
          "Popularity": 59,
          "Song Preview": "https://p.scdn.co/mp3-preview/bb975c123692986bbe8a974a9a0ffbd5ac6e49a9?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vennilave Vennilave",
          "Artist": "Ishaan Dev",
          "Album": "Vennilave Vennilave",
          "Spotify URL": "https://open.spotify.com/track/1v2DEMcuGG7nEGouPwDBU8",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273de510aab695e6de6de5bf020",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02de510aab695e6de6de5bf020",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851de510aab695e6de6de5bf020",
              "width": 64
            }
          ],
          "Duration": 184056,
          "Popularity": 36,
          "Song Preview": "https://p.scdn.co/mp3-preview/b7f67572c0d27a0d29eeb53a4cc680a5c6fe97d3?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vennilave",
          "Artist": "Hariharan, Bombay Jayashri",
          "Album": "Thuppakki (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/0L4WkSYDVsrNHywtNu42n5",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737ca8347e2267a308293351fe",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027ca8347e2267a308293351fe",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517ca8347e2267a308293351fe",
              "width": 64
            }
          ],
          "Duration": 292963,
          "Popularity": 52,
          "Song Preview": "https://p.scdn.co/mp3-preview/3f8c8dbc44b16e14dbe7cb5ca03ed26362f4ab24?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "En Azhagenna: Vennilave Vennilave - Re-Orchestrated",
          "Artist": "Vashanth Sellathurai",
          "Album": "En Azhagenna: Vennilave Vennilave (Re-Orchestrated)",
          "Spotify URL": "https://open.spotify.com/track/3Ddc0uLWQGLhm1vFiLqGCt",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2735cc96b8f38e5adc713dee8cb",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e025cc96b8f38e5adc713dee8cb",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048515cc96b8f38e5adc713dee8cb",
              "width": 64
            }
          ],
          "Duration": 114418,
          "Popularity": 24,
          "Song Preview": "https://p.scdn.co/mp3-preview/2df107a1aab89d33181658575b04a8307ccc277d?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vennilave (From \"Minsara Kanavu\")",
          "Artist": "A.R. Rahman, Hariharan, Sadhana Sargam",
          "Album": "Ever Green Love Songs (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/2nKk7e42SUKUbC0uSorSFg",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2732a8ea70de21b38d5dec97f41",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e022a8ea70de21b38d5dec97f41",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048512a8ea70de21b38d5dec97f41",
              "width": 64
            }
          ],
          "Duration": 351720,
          "Popularity": 54,
          "Song Preview": "https://p.scdn.co/mp3-preview/30513cbb2f5799b10e52e0658a57689068346ebc?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Manjal Veyil",
          "Artist": "Harris Jayaraj, Hariharan, Vijay, Nakkhul",
          "Album": "Vettaiyaadu Vilaiyaadu (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/1IO6MNVTpsEndspcvsLUP5",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d15ae940cf0f3ab85bb19c47",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d15ae940cf0f3ab85bb19c47",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d15ae940cf0f3ab85bb19c47",
              "width": 64
            }
          ],
          "Duration": 353973,
          "Popularity": 60,
          "Song Preview": "https://p.scdn.co/mp3-preview/f96939573e1753c61ea7a8affca01f4bf2b42b70?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vennilave Vennilave",
          "Artist": "Amina Rafiq, Sam Vishal",
          "Album": "Vennilave Vennilave",
          "Spotify URL": "https://open.spotify.com/track/7qa970ppwh0owsSlNWlivE",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273adf4a1d6801e53583cc5d44c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02adf4a1d6801e53583cc5d44c",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851adf4a1d6801e53583cc5d44c",
              "width": 64
            }
          ],
          "Duration": 137441,
          "Popularity": 13,
          "Song Preview": "https://p.scdn.co/mp3-preview/3d5324c96061490876ed4a1b3b74a075abadf37c?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vennilave",
          "Artist": "Harisankar, Sooraj Santhosh, Zia Ul Hag, Ajaey Shravan",
          "Album": "Queen (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/4YjA4ibJwUvRCKitHwGLU3",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27365c26a637892d28fd1626345",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0265c26a637892d28fd1626345",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485165c26a637892d28fd1626345",
              "width": 64
            }
          ],
          "Duration": 327635,
          "Popularity": 55,
          "Song Preview": "https://p.scdn.co/mp3-preview/93c87c129a4138e142b4d9ce6a1683d90bf19519?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vennilave",
          "Artist": "Shreya Ghoshal, M. G. Sreekumar",
          "Album": "Best of Shreya Ghoshal",
          "Spotify URL": "https://open.spotify.com/track/4xH7OLeZd8Ed1Y6YeQoKEx",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2732095d958469775fe0691005b",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e022095d958469775fe0691005b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048512095d958469775fe0691005b",
              "width": 64
            }
          ],
          "Duration": 273213,
          "Popularity": 28,
          "Song Preview": "https://p.scdn.co/mp3-preview/90a836b80c8a333808aece1ea2f934c47fc42f88?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vaaraayo Vennilave",
          "Artist": "A. M. Rajah, P. Leela",
          "Album": "Missiamma (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/1IjCx56OVsvS1f1dZP3P4M",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2731316f11af3c161d41577e6e4",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e021316f11af3c161d41577e6e4",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048511316f11af3c161d41577e6e4",
              "width": 64
            }
          ],
          "Duration": 160705,
          "Popularity": 27,
          "Song Preview": "https://p.scdn.co/mp3-preview/ed2385e0ba789087c4ee949614317c726dafb662?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vennilave Ninnarikil",
          "Artist": "Vaishakh Karuvarakundu",
          "Album": "Vennilave Ninnarikil",
          "Spotify URL": "https://open.spotify.com/track/2vHZdVR4v7bWmKetU4aHZT",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273928e989b4848a3253302e698",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02928e989b4848a3253302e698",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851928e989b4848a3253302e698",
              "width": 64
            }
          ],
          "Duration": 96000,
          "Popularity": 4,
          "Song Preview": "https://p.scdn.co/mp3-preview/c8d79d0148c1ea61132e56f4bb5424f584d46c14?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "En Vennilave",
          "Artist": "G. V. Prakash, KK",
          "Album": "Aadukalam (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/7s9J3C5WIeBBqzDmFBiGp6",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27334b1bdfeeb594c3295a2c17f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0234b1bdfeeb594c3295a2c17f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485134b1bdfeeb594c3295a2c17f",
              "width": 64
            }
          ],
          "Duration": 437466,
          "Popularity": 41,
          "Song Preview": "https://p.scdn.co/mp3-preview/26f95b3fe5921db0d9737fedbfdb4a185217f4c7?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vennilave (Karaoke)",
          "Artist": "Gopi Sundar",
          "Album": "Sagar Alias Jacky Reloaded (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/1NyKzr55D4wF7si4SFfCCN",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738d4db6e7bb7cc7bcc1d8e317",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028d4db6e7bb7cc7bcc1d8e317",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518d4db6e7bb7cc7bcc1d8e317",
              "width": 64
            }
          ],
          "Duration": 272026,
          "Popularity": 15,
          "Song Preview": "https://p.scdn.co/mp3-preview/f070934e79a8ed06a0a11479019f39b3b3bc8b44?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vennilave – Queen – Malayalam Song",
          "Artist": "Noel Toms",
          "Album": "Vennilave – Queen – Malayalam Song",
          "Spotify URL": "https://open.spotify.com/track/4jjhZhjscb82Fi8YnAHSFv",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c328ba07276d40a2e61c9de8",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c328ba07276d40a2e61c9de8",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c328ba07276d40a2e61c9de8",
              "width": 64
            }
          ],
          "Duration": 281457,
          "Popularity": 35,
          "Song Preview": "https://p.scdn.co/mp3-preview/718835486c819d1b7565cc211f01c6a6f72f30e3?cid=73e4cf715b8943f5a128be2302bb7674"
        }
      ]
    },
    {
      "name": "Kadhal Rojave",
      "search_results": [
        {
          "Name": "Kadhal Rojave",
          "Artist": "Sriram V, Krishnan",
          "Album": "Kadhal Rojave",
          "Spotify URL": "https://open.spotify.com/track/0CEQObUhQNf8FfOOdpWFwe",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273a85119afa4215058a4617b40",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02a85119afa4215058a4617b40",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851a85119afa4215058a4617b40",
              "width": 64
            }
          ],
          "Duration": 188121,
          "Popularity": 28,
          "Song Preview": "https://p.scdn.co/mp3-preview/6f1dc4b2be207e547e14b6f2c447275085dcebae?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhal Rojave",
          "Artist": "Thushi Kumanan",
          "Album": "Tamil BGM (Vol 1)",
          "Spotify URL": "https://open.spotify.com/track/0PZZIoD1RgoNglD1wOI7Zo",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2733c4f7dbcd0389bbfc677036c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e023c4f7dbcd0389bbfc677036c",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048513c4f7dbcd0389bbfc677036c",
              "width": 64
            }
          ],
          "Duration": 62415,
          "Popularity": 18,
          "Song Preview": "https://p.scdn.co/mp3-preview/94155422d629115888b95fa812d2e36280f3d4ce?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhal Rojave - Reprise Version",
          "Artist": "Tajmeel Sherif",
          "Album": "Kadhal Rojave (Reprise Version)",
          "Spotify URL": "https://open.spotify.com/track/1xCZA4vrxT59eNrAYnBVrN",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b721f961ee69cf4e4d6007d0",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b721f961ee69cf4e4d6007d0",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b721f961ee69cf4e4d6007d0",
              "width": 64
            }
          ],
          "Duration": 190000,
          "Popularity": 21,
          "Song Preview": "https://p.scdn.co/mp3-preview/8cc2fc819d32779fab210def77d05cb9c8015cd4?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhal Rojave - Piano Version",
          "Artist": "Jennison's Piano",
          "Album": "Kadhal Rojave (Piano Version)",
          "Spotify URL": "https://open.spotify.com/track/06WI3vuUE8K9hnwe74bcKN",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738cb71a62219f14fdcc7652ec",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028cb71a62219f14fdcc7652ec",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518cb71a62219f14fdcc7652ec",
              "width": 64
            }
          ],
          "Duration": 199808,
          "Popularity": 22,
          "Song Preview": "https://p.scdn.co/mp3-preview/e6ebed627225d78b2a1a2d17516169829840bffc?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Thoda Thoda X Kadhal Rojave",
          "Artist": "Dj Thibz",
          "Album": "Spb, Voice of a Culture",
          "Spotify URL": "https://open.spotify.com/track/6AgpFgqmjykQHkWjpHyYED",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273afd01abb4297871a5da984a7",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02afd01abb4297871a5da984a7",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851afd01abb4297871a5da984a7",
              "width": 64
            }
          ],
          "Duration": 137500,
          "Popularity": 24,
          "Song Preview": "https://p.scdn.co/mp3-preview/0c5ddeec5e568b6da51caed15a05a1c82a28c83f?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kaadhal Rojave (From \"Roja\")",
          "Artist": "A.R. Rahman, S. P. Balasubrahmanyam, Sujatha",
          "Album": "Roja (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/3VLU4hOinoEqFulpKL2xlS",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738d7149fe2ae5abccf1ec18b4",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028d7149fe2ae5abccf1ec18b4",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518d7149fe2ae5abccf1ec18b4",
              "width": 64
            }
          ],
          "Duration": 303360,
          "Popularity": 18,
          "Song Preview": "https://p.scdn.co/mp3-preview/646e03044471970c1de0341f38449f1e18ebb2e2?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhal Rojave (Instrumental Cover)",
          "Artist": "Arunkumar Keys",
          "Album": "Kadhal Rojave (Instrumental Cover)",
          "Spotify URL": "https://open.spotify.com/track/5WPRRnH8gF7IO9lUTu79Zh",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27339e6509d69bac5ff6ec7c250",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0239e6509d69bac5ff6ec7c250",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485139e6509d69bac5ff6ec7c250",
              "width": 64
            }
          ],
          "Duration": 141792,
          "Popularity": 17,
          "Song Preview": "https://p.scdn.co/mp3-preview/4245a007e88bbb5f94611477336accf71868b7c8?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kaadhal Rojave (From \"Roja\")",
          "Artist": "A.R. Rahman, S. P. Balasubrahmanyam, Sujatha",
          "Album": "A.R.R Music Blossom",
          "Spotify URL": "https://open.spotify.com/track/3HOH4riy8Ycz5dUya2uUOH",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27329f801d210d31708cba54599",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0229f801d210d31708cba54599",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485129f801d210d31708cba54599",
              "width": 64
            }
          ],
          "Duration": 303360,
          "Popularity": 30,
          "Song Preview": "https://p.scdn.co/mp3-preview/646e03044471970c1de0341f38449f1e18ebb2e2?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kaadhal Rojave (From \"Roja\")",
          "Artist": "A.R. Rahman, S. P. Balasubrahmanyam, Sujatha",
          "Album": "A.R.R Music Blossom",
          "Spotify URL": "https://open.spotify.com/track/0BzVmUtvi3wGwtoxjQ7eY8",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d9438bd080105426df185960",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d9438bd080105426df185960",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d9438bd080105426df185960",
              "width": 64
            }
          ],
          "Duration": 303360,
          "Popularity": 11,
          "Song Preview": "https://p.scdn.co/mp3-preview/ef86ae3ba6d3244f47fb775ad6366ab9c067125a?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kaadhal En Kaviye - From \"Salmon 3D\"",
          "Artist": "Sid Sriram, Sreejith Edavana",
          "Album": "Kaadhal En Kaviye (From \"Salmon 3D\")",
          "Spotify URL": "https://open.spotify.com/track/6XYQvYJzHjK5150Vl7NKfJ",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b5362694fdf04a9d4f4cf3dc",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b5362694fdf04a9d4f4cf3dc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b5362694fdf04a9d4f4cf3dc",
              "width": 64
            }
          ],
          "Duration": 311558,
          "Popularity": 73,
          "Song Preview": "https://p.scdn.co/mp3-preview/16d78c2d208a8fb1532a3f50661c8e59b4f452bf?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadal Raasa Naan",
          "Artist": "A.R. Rahman, Yuvan Shankar Raja",
          "Album": "Maryan (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/5NCGz73wePbAAYMAiT12xH",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273453744769f58164eb7dd90c8",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02453744769f58164eb7dd90c8",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851453744769f58164eb7dd90c8",
              "width": 64
            }
          ],
          "Duration": 253746,
          "Popularity": 55,
          "Song Preview": "https://p.scdn.co/mp3-preview/ffa508b993c05ea09f786d5a7fa6677e32098698?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kaadhal Rojave (From \"Roja\")",
          "Artist": "A.R. Rahman, S. P. Balasubrahmanyam, Sujatha",
          "Album": "S P Bala Sings For A R Rahman ( Love ) (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/2oTyYNWVHAHkNSKUsvlBPg",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27315e58742e8b1d0b03b98ea0c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0215e58742e8b1d0b03b98ea0c",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485115e58742e8b1d0b03b98ea0c",
              "width": 64
            }
          ],
          "Duration": 303360,
          "Popularity": 31,
          "Song Preview": "https://p.scdn.co/mp3-preview/cdc485ee783d00ae113f3a018023f495dd093601?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhal Yen Kadhal",
          "Artist": "Dhanush, Selvaraghavan",
          "Album": "Mayakkam Enna",
          "Spotify URL": "https://open.spotify.com/track/5pV61B6b5kcy1ysaPL8iON",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27373429ae3b8299d2aa950ab7d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0273429ae3b8299d2aa950ab7d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485173429ae3b8299d2aa950ab7d",
              "width": 64
            }
          ],
          "Duration": 367446,
          "Popularity": 66,
          "Song Preview": "https://p.scdn.co/mp3-preview/93c2a4727457240677696ce42ce44a2a87559508?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Nenjukkule",
          "Artist": "A.R. Rahman, Shakthisree Gopalan",
          "Album": "Kadal (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/7FEWG1bL31YAcnxJQvxJJO",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273aa88b57fe7e5cbe912644688",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02aa88b57fe7e5cbe912644688",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851aa88b57fe7e5cbe912644688",
              "width": 64
            }
          ],
          "Duration": 290000,
          "Popularity": 66,
          "Song Preview": "https://p.scdn.co/mp3-preview/54b2c5bc0281f65d3aa006867eee7178b76a786e?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhal Oru Aagayam",
          "Artist": "Hiphop Tamizha, Teejay, Al Rufian",
          "Album": "Imaikkaa Nodigal (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/6EwRpLL5QThnF2k1sZzQpC",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273ca041663617f8a76265824d5",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ca041663617f8a76265824d5",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851ca041663617f8a76265824d5",
              "width": 64
            }
          ],
          "Duration": 161762,
          "Popularity": 69,
          "Song Preview": "https://p.scdn.co/mp3-preview/b0138fafd6b6764786a2866a312b072f70aa5e3b?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhal Sadugudu",
          "Artist": "S.P. Charan",
          "Album": "Alaipayuthey (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/4vP3rarKvrhtcK2umoyq65",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273dab04a069439d077d96afd3f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02dab04a069439d077d96afd3f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851dab04a069439d077d96afd3f",
              "width": 64
            }
          ],
          "Duration": 275586,
          "Popularity": 51,
          "Song Preview": "https://p.scdn.co/mp3-preview/2272ca241a69da907271f01ece22e6529a28b58c?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Ila Venil",
          "Artist": "S. P. Balasubrahmanyam, K. S. Chithra",
          "Album": "Kadal Rojave",
          "Spotify URL": "https://open.spotify.com/track/09BVPUENc9wp18PxrDuBHW",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2735bafeb94fea785767f5dfd7a",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e025bafeb94fea785767f5dfd7a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048515bafeb94fea785767f5dfd7a",
              "width": 64
            }
          ],
          "Duration": 349173,
          "Popularity": 36,
          "Song Preview": "https://p.scdn.co/mp3-preview/e8baa0f01092f8ea94a21459531bced888d66a46?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kaadhal Endral",
          "Artist": "Yuvan Shankar Raja",
          "Album": "Goa (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/5jXrULyYKHjkAMk4TXZFoG",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273729ad68875f57912947255d5",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02729ad68875f57912947255d5",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851729ad68875f57912947255d5",
              "width": 64
            }
          ],
          "Duration": 87133,
          "Popularity": 67,
          "Song Preview": "https://p.scdn.co/mp3-preview/879f16bbd2c5bdd5d89585bd5c9aa67b386f766c?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Adiye",
          "Artist": "A.R. Rahman, Sid Sriram",
          "Album": "Kadal (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/1yAzGEbVdyAO1RG5m1KjWJ",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273aa88b57fe7e5cbe912644688",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02aa88b57fe7e5cbe912644688",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851aa88b57fe7e5cbe912644688",
              "width": 64
            }
          ],
          "Duration": 301973,
          "Popularity": 51,
          "Song Preview": "https://p.scdn.co/mp3-preview/c2b67a1a982e774a5ab8d84b1ed90eb8808e8c98?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhale Kadhale",
          "Artist": "Hiphop Tamizha, Shankar Mahadevan, Padmalatha",
          "Album": "Indru Netru Naalai (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/3THVNKs3bdQekA02kK1hWD",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739e9d36d76fd684938168b28c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029e9d36d76fd684938168b28c",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519e9d36d76fd684938168b28c",
              "width": 64
            }
          ],
          "Duration": 207071,
          "Popularity": 67,
          "Song Preview": "https://p.scdn.co/mp3-preview/040faa44381fbee398a0a883fec27e4456a68d6d?cid=73e4cf715b8943f5a128be2302bb7674"
        }
      ]
    },
    {
      "name": "Veyilodu Vilayadu",
      "search_results": [
        {
          "Name": "Netthippottu Vachu (From \"Veyilodu Vilayadu\")",
          "Artist": "Ilaiyaraaja",
          "Album": "Poiyaa Poche En Kadhal - Love Songs",
          "Spotify URL": "https://open.spotify.com/track/1PL4eJtYLpUX4dKWjuS0Uz",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27353e09b8337e28a2af53183f9",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0253e09b8337e28a2af53183f9",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485153e09b8337e28a2af53183f9",
              "width": 64
            }
          ],
          "Duration": 269164,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/b7b41c2452b4f7449179feaefef8190c25877bce?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Veyilodu Vilaiyadi",
          "Artist": "G. V. Prakash, Tippu, Jassie Gift, Kailash Kher, VV Prassanna",
          "Album": "Veyil (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/2AxMoayZHjSA6l8MUXR18O",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273e1f34a02332448a0bf23a69c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02e1f34a02332448a0bf23a69c",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851e1f34a02332448a0bf23a69c",
              "width": 64
            }
          ],
          "Duration": 321546,
          "Popularity": 39,
          "Song Preview": "https://p.scdn.co/mp3-preview/8c3301aa197b593647902337857bcb43c86f433f?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Netthippottu Vachu (From \"Veyilodu Vilayadu\")",
          "Artist": "Ilaiyaraaja",
          "Album": "Isai Thalaivan Ilayaraja",
          "Spotify URL": "https://open.spotify.com/track/06vdn8Sjd3GoJOh8xjwsau",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273acf62e8a5d03e1235f52a064",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02acf62e8a5d03e1235f52a064",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851acf62e8a5d03e1235f52a064",
              "width": 64
            }
          ],
          "Duration": 273227,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/ff5243d2047bb39ba3b6dbc7454af5392ac42619?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Veyilodu Vilaiyadi",
          "Artist": "G. V. Prakash, Tippu, Jassie Gift, Kailash Kher, VV Prassanna",
          "Album": "Veyil (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/0DHNyKO5E7rlEIVYIvpidc",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2733dfdc54bc302e047011d8c8b",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e023dfdc54bc302e047011d8c8b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048513dfdc54bc302e047011d8c8b",
              "width": 64
            }
          ],
          "Duration": 321546,
          "Popularity": 28,
          "Song Preview": "https://p.scdn.co/mp3-preview/cf63e02881eed07971349c68aed4d184b8f885ce?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Dhoorathil Unnaipaartha (From \"Veyilodu Vilayadu\")",
          "Artist": "Yuvan Shankar Raja, Sathyan, M.M.Monissha",
          "Album": "Idhu Kadhal Varum Samayam Love Songs",
          "Spotify URL": "https://open.spotify.com/track/3tEh33bXGPuu1duClufY7A",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b4a0d3f66771ef32682cbb76",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b4a0d3f66771ef32682cbb76",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b4a0d3f66771ef32682cbb76",
              "width": 64
            }
          ],
          "Duration": 347206,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/c6b96d8f1d475758b9641e6a15fa05cb14209ea9?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Manjal Veyil",
          "Artist": "Harris Jayaraj, Hariharan, Vijay, Nakkhul",
          "Album": "Vettaiyaadu Vilaiyaadu (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/1IO6MNVTpsEndspcvsLUP5",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d15ae940cf0f3ab85bb19c47",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d15ae940cf0f3ab85bb19c47",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d15ae940cf0f3ab85bb19c47",
              "width": 64
            }
          ],
          "Duration": 353973,
          "Popularity": 60,
          "Song Preview": "https://p.scdn.co/mp3-preview/f96939573e1753c61ea7a8affca01f4bf2b42b70?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Elumiccha Nirathile (From \"Veyilodu Vilayadu\")",
          "Artist": "Haricharan, Janaki Iyer",
          "Album": "Kaiya Pudi Kannae Paaru - Romantic Hits",
          "Spotify URL": "https://open.spotify.com/track/31DVzkSzJHp3DTLID1fEn9",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d4b557580a1df964bfff7275",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d4b557580a1df964bfff7275",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d4b557580a1df964bfff7275",
              "width": 64
            }
          ],
          "Duration": 333785,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/f81393846d40dbea6523e31dd9d7ea535fe59078?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Urugudhe Maragudhe",
          "Artist": "G. V. Prakash, Shreya Ghoshal, Shankar Mahadevan",
          "Album": "Veyil (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/2kMRo9WITW1yVg0f6iOleh",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273e1f34a02332448a0bf23a69c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02e1f34a02332448a0bf23a69c",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851e1f34a02332448a0bf23a69c",
              "width": 64
            }
          ],
          "Duration": 356040,
          "Popularity": 58,
          "Song Preview": "https://p.scdn.co/mp3-preview/c7cd9650646c7bf911519356ab20273c72ca6ac9?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Lungi Lungarre (From \"Veyilodu Vilayadu\")",
          "Artist": "Mukesh, Anitha Karthikeyan",
          "Album": "Crazy Chennai Dance Hits",
          "Spotify URL": "https://open.spotify.com/track/7fg6p0a1zym0EsiJUQxOQA",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273373bf868f759932d78e7bd02",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02373bf868f759932d78e7bd02",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851373bf868f759932d78e7bd02",
              "width": 64
            }
          ],
          "Duration": 314419,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/0b1e84827c79d4303c2f7b21e4ed1319457a3089?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Velundu Vinai Illai Mayil Undu",
          "Artist": "Thevaara Isai Mani Ka. Venkatesan",
          "Album": "Thiruppugazh Paamaalai",
          "Spotify URL": "https://open.spotify.com/track/4h7S6ugP8hOiorCetAYsRS",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273987ccf122d68d7768fae4b82",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02987ccf122d68d7768fae4b82",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851987ccf122d68d7768fae4b82",
              "width": 64
            }
          ],
          "Duration": 263523,
          "Popularity": 37,
          "Song Preview": "https://p.scdn.co/mp3-preview/7962413b672f490a8ac226e9e8611ac211c9dc50?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Netthippottu Vachu (From \"Veyilodu Vilayadu\")",
          "Artist": "Ilaiyaraaja",
          "Album": "Ab Ki Baar - Ilaiyaraaja Hi Superstar",
          "Spotify URL": "https://open.spotify.com/track/3Nx0wfJ1LsXEohKC3MWlqp",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273db59730b2454521fe4a8f03b",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02db59730b2454521fe4a8f03b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851db59730b2454521fe4a8f03b",
              "width": 64
            }
          ],
          "Duration": 273227,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/ff5243d2047bb39ba3b6dbc7454af5392ac42619?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "VIP Title Song",
          "Artist": "Anirudh Ravichander",
          "Album": "Velai Illa Pattadhaari (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/76KBWPw8On2hdcDz4jXXKR",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27308b52f8d8423e11edc89f8fb",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0208b52f8d8423e11edc89f8fb",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485108b52f8d8423e11edc89f8fb",
              "width": 64
            }
          ],
          "Duration": 236555,
          "Popularity": 57,
          "Song Preview": "https://p.scdn.co/mp3-preview/e3399d9db75f403b36a535a44c004d94b1f0f1dd?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Lungi Lungarre (From \"Veyilodu Vilayadu\")",
          "Artist": "Mukesh, Anitha Karthikeyan",
          "Album": "It's All in the Family! - Ilayaraja, Yuvan Shankar Raja, Karthik Raja and Bhavatharini",
          "Spotify URL": "https://open.spotify.com/track/4fa9NIVA93jOqgzx31Rrms",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273e67364b6f88dc96e7a4f3ebb",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02e67364b6f88dc96e7a4f3ebb",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851e67364b6f88dc96e7a4f3ebb",
              "width": 64
            }
          ],
          "Duration": 314419,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/0b1e84827c79d4303c2f7b21e4ed1319457a3089?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Manjal Veyil",
          "Artist": "Harris Jayaraj, Hariharan, Vijay, Nakkhul",
          "Album": "Vettaiyaadu Vilaiyaadu (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/1HNSUQPFhmGDJyHxyIsYXG",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737d570c876fbc113f1bd7bfd4",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027d570c876fbc113f1bd7bfd4",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517d570c876fbc113f1bd7bfd4",
              "width": 64
            }
          ],
          "Duration": 353973,
          "Popularity": 51,
          "Song Preview": "https://p.scdn.co/mp3-preview/2377e7d45d851556bfc010e0645e34f1beacd531?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Dhoorathil Unnaipaartha (From \"Veyilodu Vilayadu\")",
          "Artist": "Yuvan Shankar Raja, Sathyan, M.M.Monissha",
          "Album": "The Best of Bollywood: Valentine's Day Love Songs",
          "Spotify URL": "https://open.spotify.com/track/0TJgYhQFf0jD6uRkPo6cVo",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2732eb277a27d1a9a9acb72f314",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e022eb277a27d1a9a9acb72f314",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048512eb277a27d1a9a9acb72f314",
              "width": 64
            }
          ],
          "Duration": 347206,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/c6b96d8f1d475758b9641e6a15fa05cb14209ea9?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vilaiyada Idhu Neerama",
          "Artist": "U. Srinivas",
          "Album": "Mandolin U. Srinivas - Vol - 2",
          "Spotify URL": "https://open.spotify.com/track/35ILyW8i4Wpcgg65aC6fuy",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273ca5cdaa1d6d5a1f1a61b05ed",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ca5cdaa1d6d5a1f1a61b05ed",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851ca5cdaa1d6d5a1f1a61b05ed",
              "width": 64
            }
          ],
          "Duration": 133546,
          "Popularity": 27,
          "Song Preview": "https://p.scdn.co/mp3-preview/f83f4d3ea58134d1e054e8dd9467d3039f060b1e?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kattukadanga Puyalena (From \"Veyilodu Vilayadu\")",
          "Artist": "Venkat Prabhu, Premgi Amaren",
          "Album": "It's All in the Family! - Ilayaraja, Yuvan Shankar Raja, Karthik Raja and Bhavatharini",
          "Spotify URL": "https://open.spotify.com/track/6QX4yudS8sTL15t5qBK3EE",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273e67364b6f88dc96e7a4f3ebb",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02e67364b6f88dc96e7a4f3ebb",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851e67364b6f88dc96e7a4f3ebb",
              "width": 64
            }
          ],
          "Duration": 202267,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/5d475e4c4a05ec1e70555f1c550bf5d8f736745e?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Velli Malare (From \"Jodi\")",
          "Artist": "S. P. Balasubrahmanyam, Mahalakshmi Iyer",
          "Album": "S.P.Balasubramaniyam Hits",
          "Spotify URL": "https://open.spotify.com/track/5XivnLj0dH0lIQByoC4ujL",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2735ccec25e859d2e8785f04d12",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e025ccec25e859d2e8785f04d12",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048515ccec25e859d2e8785f04d12",
              "width": 64
            }
          ],
          "Duration": 389185,
          "Popularity": 59,
          "Song Preview": "https://p.scdn.co/mp3-preview/58a99f4961b9b349a824527f0952432947b28e40?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Lungi Lungarre (From \"Veyilodu Vilayadu\")",
          "Artist": "Mukesh, Anitha Karthikeyan",
          "Album": "Lungi Lungarre & Other Hits",
          "Spotify URL": "https://open.spotify.com/track/5UFhE2tGhgUaMYTPHxrOVR",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2733cda723cef531fe2fedf6941",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e023cda723cef531fe2fedf6941",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048513cda723cef531fe2fedf6941",
              "width": 64
            }
          ],
          "Duration": 314419,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/0b1e84827c79d4303c2f7b21e4ed1319457a3089?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Velundu Vinaiyillai",
          "Artist": "KESAVARAJ KRISHNAN, IDHAYAM MUSICALS",
          "Album": "Velundu Vinaiyillai",
          "Spotify URL": "https://open.spotify.com/track/66ifoGrq8uwtVQrhMyellt",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27332b0845627b3e06365d69e0f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0232b0845627b3e06365d69e0f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485132b0845627b3e06365d69e0f",
              "width": 64
            }
          ],
          "Duration": 588000,
          "Popularity": 13,
          "Song Preview": "https://p.scdn.co/mp3-preview/2d0d8ceced42b0aca92362698ff136e0d02b6834?cid=73e4cf715b8943f5a128be2302bb7674"
        }
      ]
    },
    {
      "name": "Ennai Konjam",
      "search_results": [
        {
          "Name": "Ennai Konjum",
          "Artist": "Tippu, Salinisingh, Timmy",
          "Album": "Kaakha Kaakha (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/1M2x5Qu14L6B3rHHq37EiN",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273ee0ad957e0c087b43df24911",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ee0ad957e0c087b43df24911",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851ee0ad957e0c087b43df24911",
              "width": 64
            }
          ],
          "Duration": 356040,
          "Popularity": 59,
          "Song Preview": "https://p.scdn.co/mp3-preview/564885ca8adb7c395f0f7bc5a7e4877e4f9d5474?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Ennai Konjum (From \"Kaakha Kaakha\")",
          "Artist": "Tippu, Salinisingh, Timmy",
          "Album": "Hits of Harris & Yuvan Isai Thendral",
          "Spotify URL": "https://open.spotify.com/track/2N3tO6cZfQCoJgZwPn3JwQ",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273e1bde42c47f2e33e896c5478",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02e1bde42c47f2e33e896c5478",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851e1bde42c47f2e33e896c5478",
              "width": 64
            }
          ],
          "Duration": 356040,
          "Popularity": 38,
          "Song Preview": "https://p.scdn.co/mp3-preview/564885ca8adb7c395f0f7bc5a7e4877e4f9d5474?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Ennai Konjam",
          "Artist": "Veeramanidaasan",
          "Album": "Jaya Om Vaaraahi",
          "Spotify URL": "https://open.spotify.com/track/5xMpO7F5phfdr0l4vCD4KS",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27312ddfb2b36df7d6b71ec2fdd",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0212ddfb2b36df7d6b71ec2fdd",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485112ddfb2b36df7d6b71ec2fdd",
              "width": 64
            }
          ],
          "Duration": 412800,
          "Popularity": 3,
          "Song Preview": "https://p.scdn.co/mp3-preview/f0c74da5f48cfdee7abb31378d94eb0c20ece858?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Maruvaarthai",
          "Artist": "Darbuka Siva, Sid Sriram",
          "Album": "Enai Noki Paayum Thota (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/7dbzO881X6TVJST6EKhnDg",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738438374fb80345f8fd6783cb",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028438374fb80345f8fd6783cb",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518438374fb80345f8fd6783cb",
              "width": 64
            }
          ],
          "Duration": 356718,
          "Popularity": 65,
          "Song Preview": "https://p.scdn.co/mp3-preview/9ad7bf3f52f031078c39fa8345b6cf381e4b3adb?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Ennai Konjam",
          "Artist": "Magizhan Santhors, SujeethG, Sahana",
          "Album": "Adi Mel Adi",
          "Spotify URL": "https://open.spotify.com/track/5UX2eK1PtuJ3o5MqDK8Q4a",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273813b2a478ce8a997fd4bdb1c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02813b2a478ce8a997fd4bdb1c",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851813b2a478ce8a997fd4bdb1c",
              "width": 64
            }
          ],
          "Duration": 251376,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/d5a5354ded8b7a3e3102a00a6461e91db8470055?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Yaen Ennai Pirindhaai - Male",
          "Artist": "Sid Sriram, Dhruv Vikram, Banita Sandhu",
          "Album": "Adithya Varma",
          "Spotify URL": "https://open.spotify.com/track/2GYzXSeNa3Y0BfIfS1VJj3",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2732eafab74725e28b1d69c12f7",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e022eafab74725e28b1d69c12f7",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048512eafab74725e28b1d69c12f7",
              "width": 64
            }
          ],
          "Duration": 198250,
          "Popularity": 70,
          "Song Preview": "https://p.scdn.co/mp3-preview/82ed61cb751aeb56f8ea02051fcf42cc3990d239?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Ennai Konjam",
          "Artist": "Veeramanidaasan",
          "Album": "Jaya Om Vaaraahi",
          "Spotify URL": "https://open.spotify.com/track/6zJ0jaPExP01UK7pwceuid",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d985772b9765994db1035a3f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d985772b9765994db1035a3f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d985772b9765994db1035a3f",
              "width": 64
            }
          ],
          "Duration": 412800,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/b9f35f4112229da19b2ace19448f36e55269bc46?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Yennai Maatrum Kadhale",
          "Artist": "Anirudh Ravichander, Sid Sriram",
          "Album": "Wunderboy Anirudh",
          "Spotify URL": "https://open.spotify.com/track/0veda7gIbScyRAp2fWjDQh",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739470697c2e251401017e91be",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029470697c2e251401017e91be",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519470697c2e251401017e91be",
              "width": 64
            }
          ],
          "Duration": 274678,
          "Popularity": 67,
          "Song Preview": "https://p.scdn.co/mp3-preview/797fc1ce5970d724f80d5dcd81b63c91970a28d7?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Ennai Konjum (From \"Kaakha Kaakha\")",
          "Artist": "Tippu, Salinisingh, Timmy",
          "Album": "Tamil Super Hit Songs",
          "Spotify URL": "https://open.spotify.com/track/7iSlaOoAiwVRz1Yu4vVABX",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273f8fd3fe9808174e8b3486028",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02f8fd3fe9808174e8b3486028",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851f8fd3fe9808174e8b3486028",
              "width": 64
            }
          ],
          "Duration": 356040,
          "Popularity": 16,
          "Song Preview": "https://p.scdn.co/mp3-preview/564885ca8adb7c395f0f7bc5a7e4877e4f9d5474?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Anbay",
          "Artist": "S. P. Balasubrahmanyam, O.S. Arun, Rafee",
          "Album": "Kadhal Desam",
          "Spotify URL": "https://open.spotify.com/track/0rmFz3iFgvMGxEWv5YZRJT",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737e0d7f828e6b955e42175e98",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027e0d7f828e6b955e42175e98",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517e0d7f828e6b955e42175e98",
              "width": 64
            }
          ],
          "Duration": 341519,
          "Popularity": 61,
          "Song Preview": "https://p.scdn.co/mp3-preview/eb367de76cdba6d98f495d379744297f2107488d?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Innum Konjam Naeram",
          "Artist": "A.R. Rahman, Vijay Prakash, Shweta Mohan",
          "Album": "Maryan (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/5KJSI1MjQeXEBHBYMjgP41",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273453744769f58164eb7dd90c8",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02453744769f58164eb7dd90c8",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851453744769f58164eb7dd90c8",
              "width": 64
            }
          ],
          "Duration": 313533,
          "Popularity": 69,
          "Song Preview": "https://p.scdn.co/mp3-preview/e6e93b248500184cc550c4cdabd102948d3f22f0?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Ennai Kollathey",
          "Artist": "Kumaresh, Keshini",
          "Album": "Geethaiyin Raadhai (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/6I1nER2VxG6uyodGFnVswe",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b97ff6e719e205196cbc0b2c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b97ff6e719e205196cbc0b2c",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b97ff6e719e205196cbc0b2c",
              "width": 64
            }
          ],
          "Duration": 324000,
          "Popularity": 36,
          "Song Preview": "https://p.scdn.co/mp3-preview/9fc56a91c3b0b8ebc84c5797632190db752cab5a?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Visiri",
          "Artist": "Darbuka Siva, Sid Sriram, Shashaa Tirupati",
          "Album": "Enai Noki Paayum Thota (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/2YSqGWbslJCfXPXAciQwg1",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738438374fb80345f8fd6783cb",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028438374fb80345f8fd6783cb",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518438374fb80345f8fd6783cb",
              "width": 64
            }
          ],
          "Duration": 311127,
          "Popularity": 62,
          "Song Preview": "https://p.scdn.co/mp3-preview/90c92084671e490acfe7a7b2c327503747fe5ea7?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Ennai Vittu (From \"Love Today\")",
          "Artist": "Yuvan Shankar Raja, Sid Sriram",
          "Album": "Ennai Vittu (From \"Love Today\")",
          "Spotify URL": "https://open.spotify.com/track/3LP4QpKptfe2yEC7oG5iNa",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273f1a1d6fb4006c472527ab59b",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02f1a1d6fb4006c472527ab59b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851f1a1d6fb4006c472527ab59b",
              "width": 64
            }
          ],
          "Duration": 244669,
          "Popularity": 69,
          "Song Preview": "https://p.scdn.co/mp3-preview/4a679cb43d90ad266c4c0b80c3558042287d6aec?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Maruvaarthai (From \"Enai Noki Paayum Thota\")",
          "Artist": "Darbuka Siva, Sid Sriram",
          "Album": "Enai Noki Paayum Thota (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/1HBhhBBaoyyhvFB2mYpmS8",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27371b46937993bb9f524c0ffe1",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0271b46937993bb9f524c0ffe1",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485171b46937993bb9f524c0ffe1",
              "width": 64
            }
          ],
          "Duration": 356718,
          "Popularity": 57,
          "Song Preview": "https://p.scdn.co/mp3-preview/c87b1de6a155edbb1411ff9efb66d0b4e34305b5?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Inayae (From \"Thadam\")",
          "Artist": "Sid Sriram, Padmalatha, Arun Raj",
          "Album": "Inayae (From \"Thadam\") - Single",
          "Spotify URL": "https://open.spotify.com/track/0Vt8uXauV5ptF470jaap6i",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2732b363b4a5bf38015e57d995e",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e022b363b4a5bf38015e57d995e",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048512b363b4a5bf38015e57d995e",
              "width": 64
            }
          ],
          "Duration": 214374,
          "Popularity": 46,
          "Song Preview": "https://p.scdn.co/mp3-preview/2e51a36c8316b2f6ed5cf4b7e6087dff0a82de85?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Ennodu Nee Irundhaal",
          "Artist": "A.R. Rahman, Sid Sriram, Sunitha Sarathy",
          "Album": "I (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/7mLEUzAulFygMchoGMrP8E",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273809bf7d9ca23a1056904ed3d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02809bf7d9ca23a1056904ed3d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851809bf7d9ca23a1056904ed3d",
              "width": 64
            }
          ],
          "Duration": 352710,
          "Popularity": 70,
          "Song Preview": "https://p.scdn.co/mp3-preview/ef2ea726f55b8bea53125aaa6a40e8515015d7ce?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Ennadi Maayavi Nee",
          "Artist": "Sid Sriram",
          "Album": "VadaChennai (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/2PYKDQkFkNbc72SWOrrmCW",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c3b8bb2f8c245cca665b6115",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c3b8bb2f8c245cca665b6115",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c3b8bb2f8c245cca665b6115",
              "width": 64
            }
          ],
          "Duration": 251000,
          "Popularity": 66,
          "Song Preview": "https://p.scdn.co/mp3-preview/a0c62a87966cc084089c1b95f08be54f466f54d1?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Ennai Konjum (From \"Kaakha Kaakha\")",
          "Artist": "Tippu, Salinisingh, Timmy",
          "Album": "Star Hits of Vijay & Surya",
          "Spotify URL": "https://open.spotify.com/track/03VBQo6uxa8eyNU3rR5pmD",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b10edc49369114aab9db7f57",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b10edc49369114aab9db7f57",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b10edc49369114aab9db7f57",
              "width": 64
            }
          ],
          "Duration": 356040,
          "Popularity": 47,
          "Song Preview": "https://p.scdn.co/mp3-preview/564885ca8adb7c395f0f7bc5a7e4877e4f9d5474?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Ennamo Yeadho (From \"KO\")",
          "Artist": "Harris Jayaraj, Aalaap Raju, Prashanthini, Emcee Jesz, Sri Charan",
          "Album": "Endrendrum Harris",
          "Spotify URL": "https://open.spotify.com/track/3woADSzwL2s3kEZtGsrCyD",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c39780b754d7dfc349059902",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c39780b754d7dfc349059902",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c39780b754d7dfc349059902",
              "width": 64
            }
          ],
          "Duration": 333600,
          "Popularity": 60,
          "Song Preview": "https://p.scdn.co/mp3-preview/2037b17562ba22441ba45256c7bc919b2ec5ea36?cid=73e4cf715b8943f5a128be2302bb7674"
        }
      ]
    },
    {
      "name": "Ithu Kaadhal Kaadhal Kaatchi",
      "search_results": [
        {
          "Name": "Kaadhal En Kaviye - From \"Salmon 3D\"",
          "Artist": "Sid Sriram, Sreejith Edavana",
          "Album": "Kaadhal En Kaviye (From \"Salmon 3D\")",
          "Spotify URL": "https://open.spotify.com/track/6XYQvYJzHjK5150Vl7NKfJ",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b5362694fdf04a9d4f4cf3dc",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b5362694fdf04a9d4f4cf3dc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b5362694fdf04a9d4f4cf3dc",
              "width": 64
            }
          ],
          "Duration": 311558,
          "Popularity": 73,
          "Song Preview": "https://p.scdn.co/mp3-preview/16d78c2d208a8fb1532a3f50661c8e59b4f452bf?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhale Kadhale",
          "Artist": "Hiphop Tamizha, Shankar Mahadevan, Padmalatha",
          "Album": "Indru Netru Naalai (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/3THVNKs3bdQekA02kK1hWD",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739e9d36d76fd684938168b28c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029e9d36d76fd684938168b28c",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519e9d36d76fd684938168b28c",
              "width": 64
            }
          ],
          "Duration": 207071,
          "Popularity": 67,
          "Song Preview": "https://p.scdn.co/mp3-preview/040faa44381fbee398a0a883fec27e4456a68d6d?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Idhu Kaadhala",
          "Artist": "Yuvan Shankar Raja",
          "Album": "Thulluvadho Ilamai (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/0ZKSIMJBy3H9PBw6KyG6mc",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273ebd620997274882a5853d736",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ebd620997274882a5853d736",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851ebd620997274882a5853d736",
              "width": 64
            }
          ],
          "Duration": 271746,
          "Popularity": 34,
          "Song Preview": "https://p.scdn.co/mp3-preview/4a294e247f02fa1b3cfecef272dba3786ea21695?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Idhu Kaadhala Mudhal Kaadhala - Slowed And Reverbed",
          "Artist": "Yuvan Shankar Raja, Pa. Vijay, Harish Hwarkling",
          "Album": "Idhu Kaadhala Mudhal Kaadhala (Slowed And Reverbed)",
          "Spotify URL": "https://open.spotify.com/track/4po2br3Z8d1UegjLTgtPIN",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27334b724fc74643bc6e2413354",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0234b724fc74643bc6e2413354",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485134b724fc74643bc6e2413354",
              "width": 64
            }
          ],
          "Duration": 109844,
          "Popularity": 26,
          "Song Preview": "https://p.scdn.co/mp3-preview/3162828ca212e35221fccd95ad5b24f4d02f5f97?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Thozhiya (From \"Kadhalil Vizhundhen\")",
          "Artist": "Harish Raghavendra, Sri Charan, Megha",
          "Album": "Idhu Kadhal Varum Samayam Love Songs",
          "Spotify URL": "https://open.spotify.com/track/4DaR9uc7re3CVfEMNLS8A6",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b4a0d3f66771ef32682cbb76",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b4a0d3f66771ef32682cbb76",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b4a0d3f66771ef32682cbb76",
              "width": 64
            }
          ],
          "Duration": 296540,
          "Popularity": 35,
          "Song Preview": "https://p.scdn.co/mp3-preview/befc6ce91d0bd1e0487a8644c8fc5956f7efb29d?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhal Kappal",
          "Artist": "Santhosh Narayanan",
          "Album": "Iraivi (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/0Tr96i1fHT4YhdYh5pXHUk",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b78f9ef256d5e815f35d158b",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b78f9ef256d5e815f35d158b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b78f9ef256d5e815f35d158b",
              "width": 64
            }
          ],
          "Duration": 243000,
          "Popularity": 66,
          "Song Preview": "https://p.scdn.co/mp3-preview/83b1ac3d51e0b0a6d68c98da3c4ef764268e385a?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kaathalae Kaathalae - Version 1",
          "Artist": "Govind Vasantha, Chinmayi",
          "Album": "96 (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/20dLgt3WQuNIVvHvUmnar8",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2734773c0170efaf20a22e61121",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e024773c0170efaf20a22e61121",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048514773c0170efaf20a22e61121",
              "width": 64
            }
          ],
          "Duration": 193267,
          "Popularity": 65,
          "Song Preview": "https://p.scdn.co/mp3-preview/778caa367b35acd2ccf116d6c3813ed563d16695?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kaadhal Endral",
          "Artist": "Yuvan Shankar Raja",
          "Album": "Goa (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/5jXrULyYKHjkAMk4TXZFoG",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273729ad68875f57912947255d5",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02729ad68875f57912947255d5",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851729ad68875f57912947255d5",
              "width": 64
            }
          ],
          "Duration": 87133,
          "Popularity": 67,
          "Song Preview": "https://p.scdn.co/mp3-preview/879f16bbd2c5bdd5d89585bd5c9aa67b386f766c?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kaadhal kaditham (From \"Jodi\")",
          "Artist": "Unni Menon, S. Janaki",
          "Album": "Hits of A.R.Rahman Isai Saral",
          "Spotify URL": "https://open.spotify.com/track/2KZ7VdPXY5k8B3pZB3nhCv",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d8358918401d89166ded258d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d8358918401d89166ded258d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d8358918401d89166ded258d",
              "width": 64
            }
          ],
          "Duration": 297324,
          "Popularity": 63,
          "Song Preview": "https://p.scdn.co/mp3-preview/bdadbb3a31303663c4a56aadf16c52780284923a?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Idhu Kadhala Mudhal Kadhala - UK House Mix",
          "Artist": "Yuvan Shankar Raja, Pa. Vijay, Jeruson",
          "Album": "Idhu Kadhala Mudhal Kadhala (UK House Mix)",
          "Spotify URL": "https://open.spotify.com/track/6XpmltXpUS3jEmqGv46u4O",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d010e39eb9e0f4f0a2c9e9a4",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d010e39eb9e0f4f0a2c9e9a4",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d010e39eb9e0f4f0a2c9e9a4",
              "width": 64
            }
          ],
          "Duration": 95625,
          "Popularity": 29,
          "Song Preview": "https://p.scdn.co/mp3-preview/626e4b5b382dd961e99f04550acb0dab7c5cd4bf?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Idhu Kaadhala (LoFi Flip)",
          "Artist": "Yuvan Shankar Raja, DJ Aftab",
          "Album": "Idhu Kaadhala (LoFi Flip) - Single",
          "Spotify URL": "https://open.spotify.com/track/1HwyQqEgWKTrmEIt7NU8Mz",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2731fdaea5c11bba94d87c5fcd5",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e021fdaea5c11bba94d87c5fcd5",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048511fdaea5c11bba94d87c5fcd5",
              "width": 64
            }
          ],
          "Duration": 163200,
          "Popularity": 24,
          "Song Preview": "https://p.scdn.co/mp3-preview/5b3d3296c28b1e8005b02bde24383460316fe2c4?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Rendu Kaadhal (From \"Kaathuvaakula Rendu Kaadhal\")",
          "Artist": "Anirudh Ravichander, Shakthisree Gopalan, Aishwarya Suresh Bindra",
          "Album": "Rendu Kaadhal (From \"Kaathuvaakula Rendu Kaadhal\")",
          "Spotify URL": "https://open.spotify.com/track/4Lm0D6ituSgOi1AXLhUqcx",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273a45f4c5d7a223a37531863c6",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02a45f4c5d7a223a37531863c6",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851a45f4c5d7a223a37531863c6",
              "width": 64
            }
          ],
          "Duration": 260124,
          "Popularity": 67,
          "Song Preview": "https://p.scdn.co/mp3-preview/8815af6ea0f254dfe0f4bc6f5ed00a50f447e8a0?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhalikathey - From \"Imaikkaa Nodigal\"",
          "Artist": "Hiphop Tamizha, Kaushik Krish",
          "Album": "Kadhalikathey (From \"Imaikkaa Nodigal\")",
          "Spotify URL": "https://open.spotify.com/track/6ih9ThoCJLA9pObWGfHQF2",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c90c684852f356324b4d9173",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c90c684852f356324b4d9173",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c90c684852f356324b4d9173",
              "width": 64
            }
          ],
          "Duration": 202023,
          "Popularity": 60,
          "Song Preview": "https://p.scdn.co/mp3-preview/f66f3668edcf2aa79b68c39eb1a15a3d07968066?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vizhiyae Vizhiyae",
          "Artist": "Harris Jayaraj, Aalaap Raju",
          "Album": "Ithu Kathirvelan Kadhal (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/3ooFVhkVLVGvxPsLtXYuXn",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2736e77a46c492da588383493ab",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e026e77a46c492da588383493ab",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048516e77a46c492da588383493ab",
              "width": 64
            }
          ],
          "Duration": 364986,
          "Popularity": 38,
          "Song Preview": "https://p.scdn.co/mp3-preview/abf9dcf13ca7beab5342641035bafa80a66d0cc8?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Unn Thalai Mudi (From \"Kadhalil Vizhundhen\")",
          "Artist": "Karthik, Nitish Gopalan, Maya",
          "Album": "Idhu Kadhal Varum Samayam Love Songs",
          "Spotify URL": "https://open.spotify.com/track/3mMFzRuu549CV6lFhzVit0",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b4a0d3f66771ef32682cbb76",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b4a0d3f66771ef32682cbb76",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b4a0d3f66771ef32682cbb76",
              "width": 64
            }
          ],
          "Duration": 334714,
          "Popularity": 21,
          "Song Preview": "https://p.scdn.co/mp3-preview/347775f9e64cd61f801c0e9168c0816aa4b274ae?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Idhu Kaadhala Mudhal Kaadhala (From \"Thulluvatho Ilamai\") - Dance Mix",
          "Artist": "Yuvan Shankar Raja, Pa. Vijay, Ooratti",
          "Album": "Idhu Kaadhala Mudhal Kaadhala (From \"Thulluvatho Ilamai\") [Dance Mix]",
          "Spotify URL": "https://open.spotify.com/track/0f1jikAczDnX4hNUZllAI6",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739a27ecac9cdc01c141e370fb",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029a27ecac9cdc01c141e370fb",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519a27ecac9cdc01c141e370fb",
              "width": 64
            }
          ],
          "Duration": 74165,
          "Popularity": 13,
          "Song Preview": "https://p.scdn.co/mp3-preview/fc0cedbca1ddfe8480b7da5a86765d94df96c728?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhal Kavithaigal",
          "Artist": "S. P. Balasubrahmanyam, K. S. Chithra",
          "Album": "Gopura Vasalile (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/2VNsIpwEBYJ1feER0uo19d",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2732e9cd52df7ae9edc0db51b4e",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e022e9cd52df7ae9edc0db51b4e",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048512e9cd52df7ae9edc0db51b4e",
              "width": 64
            }
          ],
          "Duration": 310343,
          "Popularity": 52,
          "Song Preview": "https://p.scdn.co/mp3-preview/21a1a72e6ef14ed8539d7865de62914cb2d7a6bb?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Idhu Kadhala Mudhal Kadhala (Chill Trap) - Single",
          "Artist": "Yuvan Shankar Raja, Rithick J",
          "Album": "Idhu Kadhala Mudhal Kadhala (Chill Trap) - Single",
          "Spotify URL": "https://open.spotify.com/track/1lQVvpwX6TxdV9cN4JJgPO",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738a8db0ed720b34827c84182b",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028a8db0ed720b34827c84182b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518a8db0ed720b34827c84182b",
              "width": 64
            }
          ],
          "Duration": 110107,
          "Popularity": 27,
          "Song Preview": "https://p.scdn.co/mp3-preview/9528709671e52958b65f844f2f1cde82fab4b39c?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Idhu Kadhala Mudhal Kadhala (From \"Thulluvatho Ilamai\") - Analogue Mix",
          "Artist": "Yuvan Shankar Raja, Pa. Vijay, Sharan kumar, Prags",
          "Album": "Idhu Kadhala Mudhal Kadhala (From \"Thulluvatho Ilamai\") [Analogue Mix]",
          "Spotify URL": "https://open.spotify.com/track/0N0vcwFO7dxKVHJTwAV8Tm",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273cfae57d50a850e4eb8342766",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02cfae57d50a850e4eb8342766",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851cfae57d50a850e4eb8342766",
              "width": 64
            }
          ],
          "Duration": 92411,
          "Popularity": 12,
          "Song Preview": "https://p.scdn.co/mp3-preview/f34719be12fc45f7ebab225e9eea04934d4d9275?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhal Kan Kattudhe",
          "Artist": "Anirudh Ravichander, Shakthisree Gopalan",
          "Album": "Kaaki Sattai (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/1BghKLSaJ8UUkXDXMq6t4O",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b82fc1c99fe11d69728bcb05",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b82fc1c99fe11d69728bcb05",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b82fc1c99fe11d69728bcb05",
              "width": 64
            }
          ],
          "Duration": 256734,
          "Popularity": 55,
          "Song Preview": "https://p.scdn.co/mp3-preview/69efb5e90592789c22ac3359caa049f1281439d7?cid=73e4cf715b8943f5a128be2302bb7674"
        }
      ]
    },
    {
      "name": "Pudhu Vellai Mazhai",
      "search_results": [
        {
          "Name": "Pudhu Vellai Mazhai (From \"Roja\")",
          "Artist": "A.R. Rahman, Unni Menon, Sujatha",
          "Album": "Ever Green Love Songs (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/1UcYb1OEpxxzM3RTK1iAZF",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273418188e0c660654d069e06e2",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02418188e0c660654d069e06e2",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851418188e0c660654d069e06e2",
              "width": 64
            }
          ],
          "Duration": 316186,
          "Popularity": 41,
          "Song Preview": "https://p.scdn.co/mp3-preview/c0e6f4e2b5e4c16e7d1a888b00228f8e502c5298?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Pudhu Vellai Mazhai - Piano Version",
          "Artist": "Jennison's Piano",
          "Album": "Pudhu Vellai Mazhai (Piano Version)",
          "Spotify URL": "https://open.spotify.com/track/3mm7fL7spon8bkkYiJnsxb",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273205fc3bb3ce585e27a22f524",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02205fc3bb3ce585e27a22f524",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851205fc3bb3ce585e27a22f524",
              "width": 64
            }
          ],
          "Duration": 195000,
          "Popularity": 15,
          "Song Preview": "https://p.scdn.co/mp3-preview/6548c01fda782579656460bdab91578df7aca943?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Pudhu Vellai Mazhai Rebirth",
          "Artist": "MD Musiq",
          "Album": "Pudhu Vellai Mazhai Rebirth",
          "Spotify URL": "https://open.spotify.com/track/5mUY2jczRPfcLVVNqdL546",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273cbd8a9e5e1c23e2ac702a0b6",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02cbd8a9e5e1c23e2ac702a0b6",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851cbd8a9e5e1c23e2ac702a0b6",
              "width": 64
            }
          ],
          "Duration": 260062,
          "Popularity": 33,
          "Song Preview": "https://p.scdn.co/mp3-preview/38da6df613f62acd766c890b913b900fc20424ec?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Pudhu Vellai Mazhai - Piano Version",
          "Artist": "Britto Jude",
          "Album": "Pudhu Vellai Mazhai (Piano Version)",
          "Spotify URL": "https://open.spotify.com/track/4NBKX13Lv3IY5SQ89uhtEY",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273f29b9ee25a37afe84c780e20",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02f29b9ee25a37afe84c780e20",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851f29b9ee25a37afe84c780e20",
              "width": 64
            }
          ],
          "Duration": 58000,
          "Popularity": 18,
          "Song Preview": "https://p.scdn.co/mp3-preview/624757f8f58f29ba9f62a7e8f40dba6c29936ffc?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Pudhu Vellai Mazhai (From \"Roja\")",
          "Artist": "A.R. Rahman, Unni Menon, Sujatha",
          "Album": "Ever Green Love Songs (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/5H0CSL9332gRa1GnHqkEW9",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2732a8ea70de21b38d5dec97f41",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e022a8ea70de21b38d5dec97f41",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048512a8ea70de21b38d5dec97f41",
              "width": 64
            }
          ],
          "Duration": 316186,
          "Popularity": 37,
          "Song Preview": "https://p.scdn.co/mp3-preview/d5058147203f73c77068a2f26e3e96538571e4c5?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Pudhu Malar Thottu",
          "Artist": "Sriram Parthasarathy",
          "Album": "Poovellam Unn Vaasam (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/6i0ff2q5JS7QWTAlOo2E4c",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273e64fbb58d158ee9ac715b157",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02e64fbb58d158ee9ac715b157",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851e64fbb58d158ee9ac715b157",
              "width": 64
            }
          ],
          "Duration": 281520,
          "Popularity": 53,
          "Song Preview": "https://p.scdn.co/mp3-preview/25d77dd30f1de900946374c3e2bffdb1e168d7d7?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Our Story : Enga Area",
          "Artist": "Yuvan Shankar Raja, Dhanush, Premgi Amaren",
          "Album": "Pudhupettai (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/7HXqP6VHUaa0LvOTdARuOY",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2736c03999fede16d121802485a",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e026c03999fede16d121802485a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048516c03999fede16d121802485a",
              "width": 64
            }
          ],
          "Duration": 319013,
          "Popularity": 40,
          "Song Preview": "https://p.scdn.co/mp3-preview/e43bb8b4b76603146871e5e21b09fe0552ba28fa?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Pudhu Vellai Mazhai (From \"Roja\")",
          "Artist": "A.R. Rahman, Unni Menon, Sujatha",
          "Album": "A.R.R Music Blossom",
          "Spotify URL": "https://open.spotify.com/track/4TQOS3v7aJpOGgbctnrWxG",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d9438bd080105426df185960",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d9438bd080105426df185960",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d9438bd080105426df185960",
              "width": 64
            }
          ],
          "Duration": 316186,
          "Popularity": 4,
          "Song Preview": "https://p.scdn.co/mp3-preview/12cfdeae7457bf303c72fcf8d789662cce241307?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kalyaana Maalai",
          "Artist": "S. P. Balasubrahmanyam",
          "Album": "Pudhu Pudhu Arthangal (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/5516Fo5YISqWZVqda1Q6O4",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273505821e23be132a74fe8fcd5",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02505821e23be132a74fe8fcd5",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851505821e23be132a74fe8fcd5",
              "width": 64
            }
          ],
          "Duration": 279013,
          "Popularity": 58,
          "Song Preview": "https://p.scdn.co/mp3-preview/4d62fa14edd23c6b9622b25507b1d2b87c66c26e?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Pudhu Vellai Mazhai (From \"Roja\")",
          "Artist": "A.R. Rahman, Unni Menon, Sujatha",
          "Album": "Roja (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/5ZfYCE7DuMj253sIqqwBhc",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738d7149fe2ae5abccf1ec18b4",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028d7149fe2ae5abccf1ec18b4",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518d7149fe2ae5abccf1ec18b4",
              "width": 64
            }
          ],
          "Duration": 316186,
          "Popularity": 16,
          "Song Preview": "https://p.scdn.co/mp3-preview/d5058147203f73c77068a2f26e3e96538571e4c5?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Pudhu Vellai Mazhai / Malare Mounama (Medley)",
          "Artist": "Vijayalakshmi Bhaskar",
          "Album": "Pudhu Vellai Mazhai / Malare Mounama (Medley)",
          "Spotify URL": "https://open.spotify.com/track/5Co2VnTeGjPT3NK0mzBDrB",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27323473eec79b1b7e0e5fcad48",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0223473eec79b1b7e0e5fcad48",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485123473eec79b1b7e0e5fcad48",
              "width": 64
            }
          ],
          "Duration": 169412,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/9b4f387fc929c73f9597fd17f816912a462d1b23?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Mazhai Vara Pogudhae",
          "Artist": "Harris Jayaraj, Karthik, Emcee Jesz",
          "Album": "Yennai Arindhaal (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/5ich0wSxDxMryEjwZo6XzG",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273673ce5ba3c125470e36ecff9",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02673ce5ba3c125470e36ecff9",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851673ce5ba3c125470e36ecff9",
              "width": 64
            }
          ],
          "Duration": 342547,
          "Popularity": 60,
          "Song Preview": "https://p.scdn.co/mp3-preview/3ab3512a855496162e64918ac46e509b59814914?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Pudhu Vellai Mazhai (From \"Roja\")",
          "Artist": "A.R. Rahman, Unni Menon, Sujatha",
          "Album": "A.R.R Music Blossom",
          "Spotify URL": "https://open.spotify.com/track/5KcHLFJlPWxhXqxsJO7RVY",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27329f801d210d31708cba54599",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0229f801d210d31708cba54599",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485129f801d210d31708cba54599",
              "width": 64
            }
          ],
          "Duration": 316186,
          "Popularity": 1,
          "Song Preview": "https://p.scdn.co/mp3-preview/d5058147203f73c77068a2f26e3e96538571e4c5?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Minnalai Pidithu",
          "Artist": "Unni Menon",
          "Album": "Shajahaan",
          "Spotify URL": "https://open.spotify.com/track/6Xejo9F1hr17aXInilcKZ7",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273f4ed7fcf0ad41f416974dc6d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02f4ed7fcf0ad41f416974dc6d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851f4ed7fcf0ad41f416974dc6d",
              "width": 64
            }
          ],
          "Duration": 291015,
          "Popularity": 65,
          "Song Preview": "https://p.scdn.co/mp3-preview/ba9ba8136aa16bfec5e0ededee22ff1617ff654e?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Pudhu vellai mazhai - Sithari Fonseka - Sitar Cover",
          "Artist": "NS Wageshan",
          "Album": "Pudhu vellai mazhai (Sithari Fonseka - Sitar Cover)",
          "Spotify URL": "https://open.spotify.com/track/3Moqi9xuw04NwbQCuBGccg",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b808b79ba7ce437d57dac8a4",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b808b79ba7ce437d57dac8a4",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b808b79ba7ce437d57dac8a4",
              "width": 64
            }
          ],
          "Duration": 154020,
          "Popularity": 2,
          "Song Preview": "https://p.scdn.co/mp3-preview/7f5900a3379254c7b2a7e0e727debe5d3271e0a4?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Netru Illatha Maatram",
          "Artist": "A.R. Rahman, Sujatha",
          "Album": "Pudhiya Mugam (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/4ozxqvQ1b6z3ItRyYixXjx",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27365db933a54ca6d8142df8932",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0265db933a54ca6d8142df8932",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485165db933a54ca6d8142df8932",
              "width": 64
            }
          ],
          "Duration": 309106,
          "Popularity": 55,
          "Song Preview": "https://p.scdn.co/mp3-preview/435c29bb92e0781dbefa6ed2103ce1285440294e?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Mazhai Varum - Female",
          "Artist": "Joshua Sridhar, Suzanne D'Mello",
          "Album": "Veppam (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/6sewH6rrJZeM40FdCxbJP8",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273cd1e05ab032c0470c1e8c1a2",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02cd1e05ab032c0470c1e8c1a2",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851cd1e05ab032c0470c1e8c1a2",
              "width": 64
            }
          ],
          "Duration": 268360,
          "Popularity": 54,
          "Song Preview": "https://p.scdn.co/mp3-preview/612c3bf0fda22cc16476550b5b9acd0355ac77b6?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Muthu Mazhaiye",
          "Artist": "Devi Sri Prasad, Sagar, Sumangaly",
          "Album": "Mazhai (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/6vzB0fLO36rBofLurEaHjv",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737af3bc119d84e13b493dcd1c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027af3bc119d84e13b493dcd1c",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517af3bc119d84e13b493dcd1c",
              "width": 64
            }
          ],
          "Duration": 83693,
          "Popularity": 41,
          "Song Preview": "https://p.scdn.co/mp3-preview/1883ad88573fd92b83ba0a37cf6b786f928b2f66?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Putham Puthu Kaalai",
          "Artist": "S. Janaki",
          "Album": "Alaigal Oyvatillai",
          "Spotify URL": "https://open.spotify.com/track/6C6u94AZlturaUaFTmfgFp",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2734e02e2346fb9e14d87fd82ad",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e024e02e2346fb9e14d87fd82ad",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048514e02e2346fb9e14d87fd82ad",
              "width": 64
            }
          ],
          "Duration": 273546,
          "Popularity": 56,
          "Song Preview": null
        },
        {
          "Name": "Vellai Pura Ondru - Duet",
          "Artist": "Ilaiyaraaja, K. J. Yesudas, S. Janaki",
          "Album": "Pudhu Kavithai (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/1BJNJjdpBVbUHF8ERcpdx3",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2733b03f36fc9fdc08fa4f7413b",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e023b03f36fc9fdc08fa4f7413b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048513b03f36fc9fdc08fa4f7413b",
              "width": 64
            }
          ],
          "Duration": 261265,
          "Popularity": 29,
          "Song Preview": "https://p.scdn.co/mp3-preview/bbdb58a7428bc3e30314848953bb89969be2775e?cid=73e4cf715b8943f5a128be2302bb7674"
        }
      ]
    },
    {
      "name": "Aathichudi",
      "search_results": [
        {
          "Name": "Aathichoodi",
          "Artist": "Vijay Antony, Dinesh",
          "Album": "Tn07 Al 4777 (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/0vb21Y15llmTPEqw5m7KAW",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27349f104bbbbe20a795cd30893",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0249f104bbbbe20a795cd30893",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485149f104bbbbe20a795cd30893",
              "width": 64
            }
          ],
          "Duration": 251210,
          "Popularity": 62,
          "Song Preview": "https://p.scdn.co/mp3-preview/a67d9fda62e0f3fdeab7844b91c5b5fb18ad3055?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Aathichudi",
          "Artist": "Shamroz khan, J.B mani maran, Abdul Aleem, David C.raja & Shivaranjini",
          "Album": "Aathichudi",
          "Spotify URL": "https://open.spotify.com/track/6gICG1szBJ5VjVO6VEBxuZ",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b0108b7b523478eaa7f599ea",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b0108b7b523478eaa7f599ea",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b0108b7b523478eaa7f599ea",
              "width": 64
            }
          ],
          "Duration": 258665,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/e17eb05003d184d9474c49af3657525fd42a94f7?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Aathi",
          "Artist": "Anirudh Ravichander, Vishal Dadlani, Yugabharathi",
          "Album": "Kaththi (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/0KSyqMfLSkElsnT25mQc2i",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273844d756bda7c3601bd7f707d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02844d756bda7c3601bd7f707d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851844d756bda7c3601bd7f707d",
              "width": 64
            }
          ],
          "Duration": 304920,
          "Popularity": 63,
          "Song Preview": "https://p.scdn.co/mp3-preview/53fbb3e74d7c7870128c6ef97064ce12a85cd14d?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "The Aathichudi Movement",
          "Artist": "Shamroz Khan",
          "Album": "The Aathichudi Movement",
          "Spotify URL": "https://open.spotify.com/track/0Hxkhkfix4EARyIMRcXvdo",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27341864379a37cdd8d90f678ee",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0241864379a37cdd8d90f678ee",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485141864379a37cdd8d90f678ee",
              "width": 64
            }
          ],
          "Duration": 296053,
          "Popularity": 1,
          "Song Preview": "https://p.scdn.co/mp3-preview/22f01ac8eff1271acfddb069661a36e605b622e5?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Lealakku Lealakku",
          "Artist": "KK, Sujatha",
          "Album": "Aathi (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/4LL4Y9dCCOf1WVqz6fMCxI",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739187ca48883e4fd608d92513",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029187ca48883e4fd608d92513",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519187ca48883e4fd608d92513",
              "width": 64
            }
          ],
          "Duration": 280142,
          "Popularity": 41,
          "Song Preview": "https://p.scdn.co/mp3-preview/b42415aec85c12f47cdce98f48f09c03aae951d6?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Aadinchi Ashta Chamma",
          "Artist": "Sri Krishna",
          "Album": "Ashta Chamma",
          "Spotify URL": "https://open.spotify.com/track/4QNSMIeCknaH5m0EM2yNTI",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27363bd697c8fb0421f0b61766f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0263bd697c8fb0421f0b61766f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485163bd697c8fb0421f0b61766f",
              "width": 64
            }
          ],
          "Duration": 223173,
          "Popularity": 53,
          "Song Preview": "https://p.scdn.co/mp3-preview/610a3810add67c114dfc719e39a347876cbbaf4c?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Baguntundhi Nuvvu Navvithe",
          "Artist": "Shekar Chandra, Sid Sriram, Nutana Mohan",
          "Album": "Atithi Devobhava (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/1eWooUUh7E796VP86o15BN",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27349ed5816027be7d0db65c1b6",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0249ed5816027be7d0db65c1b6",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485149ed5816027be7d0db65c1b6",
              "width": 64
            }
          ],
          "Duration": 222580,
          "Popularity": 60,
          "Song Preview": "https://p.scdn.co/mp3-preview/229c8ce9826680eab31c92bfd4cf8a39ab4fd1fb?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Athi Athikka",
          "Artist": "S. P. Balasubrahmanyam, Sadhana Sargam",
          "Album": "Aathi (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/5yv8jpmtsFG3z2FaerZiTG",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739187ca48883e4fd608d92513",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029187ca48883e4fd608d92513",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519187ca48883e4fd608d92513",
              "width": 64
            }
          ],
          "Duration": 278733,
          "Popularity": 36,
          "Song Preview": "https://p.scdn.co/mp3-preview/a11fe1fc7feb3ac5a10447b60598b22facd53926?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Lealakku Lealakku (From \"Aathi\")",
          "Artist": "KK, Sujatha",
          "Album": "Sweet Voice of K.K",
          "Spotify URL": "https://open.spotify.com/track/4wR3WWggsXORXFPoFameCC",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738dae8114d5c8f86f70c196ff",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028dae8114d5c8f86f70c196ff",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518dae8114d5c8f86f70c196ff",
              "width": 64
            }
          ],
          "Duration": 280142,
          "Popularity": 45,
          "Song Preview": "https://p.scdn.co/mp3-preview/b42415aec85c12f47cdce98f48f09c03aae951d6?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Aathadi",
          "Artist": "Hiphop Tamizha, V.M. Mahalingam",
          "Album": "Natpe Thunai (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/7wh6MmQyEbrj5l6kL0eiIL",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2731ab1ea34a3acc1d7373ad802",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e021ab1ea34a3acc1d7373ad802",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048511ab1ea34a3acc1d7373ad802",
              "width": 64
            }
          ],
          "Duration": 207862,
          "Popularity": 48,
          "Song Preview": "https://p.scdn.co/mp3-preview/d434bfb5d50ce8e41ecf9eb5d51d55081b8e976c?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Aathi Choodi Mini",
          "Artist": "Vijay Antony, Avvaiyar",
          "Album": "Tn07 Al 4777 (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/2YriivN0sVfazJRuibYhUv",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27349f104bbbbe20a795cd30893",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0249f104bbbbe20a795cd30893",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485149f104bbbbe20a795cd30893",
              "width": 64
            }
          ],
          "Duration": 73235,
          "Popularity": 21,
          "Song Preview": "https://p.scdn.co/mp3-preview/516363c042d3d1fa71a23961b6bfafabafa5da75?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Thadakku",
          "Artist": "Hariharan, Sujatha",
          "Album": "Aathi (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/6uudtMouobDnxJvLhGS3PE",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739187ca48883e4fd608d92513",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029187ca48883e4fd608d92513",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519187ca48883e4fd608d92513",
              "width": 64
            }
          ],
          "Duration": 264782,
          "Popularity": 45,
          "Song Preview": "https://p.scdn.co/mp3-preview/c37a956f107536d463d6064a155b7cc98ee096f7?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Adiyaathi - From \"Paramporul\"",
          "Artist": "Yuvan Shankar Raja, Anirudh Ravichander, Snehan",
          "Album": "Adiyaathi (From \"Paramporul\")",
          "Spotify URL": "https://open.spotify.com/track/0sXGEJoOeNhzpMBKYKtDoO",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737c804d97730e6289250b89fe",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027c804d97730e6289250b89fe",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517c804d97730e6289250b89fe",
              "width": 64
            }
          ],
          "Duration": 202991,
          "Popularity": 58,
          "Song Preview": "https://p.scdn.co/mp3-preview/68f237df6bb19ffdf9a2af9405da252003042aed?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Adchithooku",
          "Artist": "NARAYANAN, D. Imman, Aditya Gadhvi",
          "Album": "Viswasam (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/5gQYzrjQw7Y76pEPDdmr00",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27304b636eaf4137c1c0df82e39",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0204b636eaf4137c1c0df82e39",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485104b636eaf4137c1c0df82e39",
              "width": 64
            }
          ],
          "Duration": 266944,
          "Popularity": 44,
          "Song Preview": "https://p.scdn.co/mp3-preview/2dec12e54a160f5a6ae2777153788cc7b35cd4f3?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Adi Odi - From \"Atti Culture\"",
          "Artist": "Asal Kolaar, ofRO",
          "Album": "Adi Odi (From \"Atti Culture\")",
          "Spotify URL": "https://open.spotify.com/track/6tlUm9EuYRInZ17qzJkbDv",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738ec517d574bb115dce94a9ba",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028ec517d574bb115dce94a9ba",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518ec517d574bb115dce94a9ba",
              "width": 64
            }
          ],
          "Duration": 148875,
          "Popularity": 52,
          "Song Preview": "https://p.scdn.co/mp3-preview/02189b17e735fd97726af753372b4edc3a9888c0?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Aathi Kaththi",
          "Artist": "AchiyaLK, Inno Genga",
          "Album": "Amusic Hits 02",
          "Spotify URL": "https://open.spotify.com/track/3yH4iRe5BXBxrRkguX4z8x",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2733988f7792cdec4d7e6ead22f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e023988f7792cdec4d7e6ead22f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048513988f7792cdec4d7e6ead22f",
              "width": 64
            }
          ],
          "Duration": 210991,
          "Popularity": 44,
          "Song Preview": "https://p.scdn.co/mp3-preview/b58548378a20847daf7516b42ef3e9bcd805313d?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Aathadi Aathadi",
          "Artist": "Harris Jayaraj, Bhavatharini, Tippu, Dhanush, Abhay Jodhpurkar",
          "Album": "Anegan (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/3JXi13LlcYzagKRNokd3Zt",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737f321a49a5fd18e4b2258118",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027f321a49a5fd18e4b2258118",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517f321a49a5fd18e4b2258118",
              "width": 64
            }
          ],
          "Duration": 352426,
          "Popularity": 60,
          "Song Preview": "https://p.scdn.co/mp3-preview/101b51a8c57d248ac1fd02c33ef45683f69fdf7d?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kurisey Kurisey",
          "Artist": "Ranjith Govind",
          "Album": "Vaishali",
          "Spotify URL": "https://open.spotify.com/track/7lwHD7muznmtMZeDH2lYmT",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27307d32cd6a2a667cc4baa6885",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0207d32cd6a2a667cc4baa6885",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485107d32cd6a2a667cc4baa6885",
              "width": 64
            }
          ],
          "Duration": 247972,
          "Popularity": 48,
          "Song Preview": "https://p.scdn.co/mp3-preview/1b535e661798c10eae8324955b858f468d29d3b5?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Lealakku Lealakku (From \"Aathi\")",
          "Artist": "KK, Sujatha",
          "Album": "Isai Virundhu - Vidyasagar",
          "Spotify URL": "https://open.spotify.com/track/1R6ZSDfps0vqZnAVn92xZt",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27394eacb2e605f254a31742be8",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0294eacb2e605f254a31742be8",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485194eacb2e605f254a31742be8",
              "width": 64
            }
          ],
          "Duration": 280142,
          "Popularity": 30,
          "Song Preview": "https://p.scdn.co/mp3-preview/b42415aec85c12f47cdce98f48f09c03aae951d6?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Olli Olli",
          "Artist": "Karthik, Anuradha Sriram",
          "Album": "Aathi (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/0q9RHO9GCl4gY5NbT7MG6V",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739187ca48883e4fd608d92513",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029187ca48883e4fd608d92513",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519187ca48883e4fd608d92513",
              "width": 64
            }
          ],
          "Duration": 266597,
          "Popularity": 48,
          "Song Preview": "https://p.scdn.co/mp3-preview/aa07177df834dfa4014b79020ddf9375955f0545?cid=73e4cf715b8943f5a128be2302bb7674"
        }
      ]
    },
    {
      "name": "Un Vizhigalil",
      "search_results": [
        {
          "Name": "Un Vizhigalil",
          "Artist": "Anirudh Ravichander, Shruti Haasan",
          "Album": "Maan Karate Special (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/20IW0u1ZTzvEDAhhVjVMsq",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273398fc3cf882b5096d4951fa2",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02398fc3cf882b5096d4951fa2",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851398fc3cf882b5096d4951fa2",
              "width": 64
            }
          ],
          "Duration": 243520,
          "Popularity": 57,
          "Song Preview": "https://p.scdn.co/mp3-preview/cedbdf7d314fb0705c8963f68302a0008e81bdb4?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Un Viaje",
          "Artist": "Jotaerre, KAROL G, Alejo, Moffa",
          "Album": "Un Viaje",
          "Spotify URL": "https://open.spotify.com/track/3huLeBRjZPOzkePH7ph91y",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27379d71bc4b7e0195c68d5834e",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0279d71bc4b7e0195c68d5834e",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485179d71bc4b7e0195c68d5834e",
              "width": 64
            }
          ],
          "Duration": 285746,
          "Popularity": 60,
          "Song Preview": null
        },
        {
          "Name": "Un Vizhigalil (From \"Maan Karate\")",
          "Artist": "Anirudh Ravichander, Shruti Haasan",
          "Album": "Best of Anirudh Ravichander (Tamil)",
          "Spotify URL": "https://open.spotify.com/track/6osYCXEhYLBmliS8DzoQHI",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2731edf696a64afb583b45e0f93",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e021edf696a64afb583b45e0f93",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048511edf696a64afb583b45e0f93",
              "width": 64
            }
          ],
          "Duration": 243520,
          "Popularity": 26,
          "Song Preview": "https://p.scdn.co/mp3-preview/afa882f487b157954b660533e7a3afe78523e323?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Un violinista en tu tejado",
          "Artist": "Melendi",
          "Album": "Aún Más Curiosa La Cara De Tu Padre",
          "Spotify URL": "https://open.spotify.com/track/6IBPbunlI7QcV7wzE0NSVx",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2735eaab26174e72e7c8e5311c7",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e025eaab26174e72e7c8e5311c7",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048515eaab26174e72e7c8e5311c7",
              "width": 64
            }
          ],
          "Duration": 222720,
          "Popularity": 66,
          "Song Preview": "https://p.scdn.co/mp3-preview/cfed79a9cede5b4285e18eca3ac791ae0c86383f?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Un Vizhigalil",
          "Artist": "Harini",
          "Album": "Darling (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/0Q1Ufw6btF1rv01xkB1y2v",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2733178697901867e242461394e",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e023178697901867e242461394e",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048513178697901867e242461394e",
              "width": 64
            }
          ],
          "Duration": 304645,
          "Popularity": 53,
          "Song Preview": "https://p.scdn.co/mp3-preview/8e635db7401398c6f2e1c8d817eead61f7ff6420?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Un Vizhigalil - Violin Version",
          "Artist": "Anirudh Ravichander",
          "Album": "Maan Karate Special (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/5uIR9OmIJkezyb3YpdiSfO",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273398fc3cf882b5096d4951fa2",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02398fc3cf882b5096d4951fa2",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851398fc3cf882b5096d4951fa2",
              "width": 64
            }
          ],
          "Duration": 32653,
          "Popularity": 26,
          "Song Preview": "https://p.scdn.co/mp3-preview/22cc14cf6a6508ada161bf87c657e243e4d2b6a7?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Un Vizhigalil",
          "Artist": "Anirudh Ravichander, Shruti Haasan",
          "Album": "Maan Karate (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/5fqsWynhQRpoIVeRfRu4yQ",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273cde6aa9984ebb8498be4acef",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02cde6aa9984ebb8498be4acef",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851cde6aa9984ebb8498be4acef",
              "width": 64
            }
          ],
          "Duration": 243520,
          "Popularity": 59,
          "Song Preview": "https://p.scdn.co/mp3-preview/cedbdf7d314fb0705c8963f68302a0008e81bdb4?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Un Viejo Amor",
          "Artist": "Los Cadetes De Linares",
          "Album": "4 Decadas de Exitos",
          "Spotify URL": "https://open.spotify.com/track/6vgakkgYxbjwqcAOd0xkrI",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b9055b76675a76270ed4d218",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b9055b76675a76270ed4d218",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b9055b76675a76270ed4d218",
              "width": 64
            }
          ],
          "Duration": 159786,
          "Popularity": 46,
          "Song Preview": "https://p.scdn.co/mp3-preview/cf8c7d99d80f97d44cc846a8c010e70d24bd5a9e?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vizhigalil Un Kadhalal",
          "Artist": "Barath Veeraraghavan, Fazith Feroz, Sinthuja",
          "Album": "Vizhigalil Un Kadhalal",
          "Spotify URL": "https://open.spotify.com/track/5ZgE0Lkl3DHCfBiBVj950A",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d956a11f2246b87e24b8645c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d956a11f2246b87e24b8645c",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d956a11f2246b87e24b8645c",
              "width": 64
            }
          ],
          "Duration": 109928,
          "Popularity": 40,
          "Song Preview": "https://p.scdn.co/mp3-preview/5a04dfed204d1c29a975bffc4f7d3ad5af3ba17c?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Un Vizhigalil (From \"Maan Karate\")",
          "Artist": "Anirudh Ravichander, Shruti Haasan",
          "Album": "Bromance: Anirudh Ravichander & Sivakarthikeyan",
          "Spotify URL": "https://open.spotify.com/track/3ANdXA3fmb6fJB1yTUarm0",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d8d94e629559d1ee95e486b7",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d8d94e629559d1ee95e486b7",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d8d94e629559d1ee95e486b7",
              "width": 64
            }
          ],
          "Duration": 243520,
          "Popularity": 38,
          "Song Preview": "https://p.scdn.co/mp3-preview/cedbdf7d314fb0705c8963f68302a0008e81bdb4?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "UN VIAJE",
          "Artist": "Tyan Pa, Jochi Portes",
          "Album": "UN VIAJE",
          "Spotify URL": "https://open.spotify.com/track/4Z7RArrZMTb59ua3MjoqH3",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27360632f5753e09535b1dbb5c2",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0260632f5753e09535b1dbb5c2",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485160632f5753e09535b1dbb5c2",
              "width": 64
            }
          ],
          "Duration": 182905,
          "Popularity": 24,
          "Song Preview": "https://p.scdn.co/mp3-preview/5206eceb97785cd3d56d25a145ac669983cef4ec?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Un Vizhigalil (From \"Maan Karate\")",
          "Artist": "Anirudh Ravichander, Shruti Haasan",
          "Album": "Best of Love : Anirudh Ravichander",
          "Spotify URL": "https://open.spotify.com/track/5GytYU4iAYhMCeJCQn8931",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27377758ffec34f7c1484d3d52b",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0277758ffec34f7c1484d3d52b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485177758ffec34f7c1484d3d52b",
              "width": 64
            }
          ],
          "Duration": 243520,
          "Popularity": 20,
          "Song Preview": "https://p.scdn.co/mp3-preview/cedbdf7d314fb0705c8963f68302a0008e81bdb4?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Vizhi Moodi",
          "Artist": "Karthik, Prashanthini",
          "Album": "Ayan",
          "Spotify URL": "https://open.spotify.com/track/0lZ0BOfkjnBslRqTJgCBop",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273dd48209239ff24ef43b15ef1",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02dd48209239ff24ef43b15ef1",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851dd48209239ff24ef43b15ef1",
              "width": 64
            }
          ],
          "Duration": 332266,
          "Popularity": 66,
          "Song Preview": "https://p.scdn.co/mp3-preview/93f33ffa9d8afcbad5bebcc93879714bf544b554?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "En Vizhigalil",
          "Artist": "Pranav Muniraj",
          "Album": "En Vizhigalil",
          "Spotify URL": "https://open.spotify.com/track/4vNFIXCY0D8lITG38FyYXg",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27384b051eada10d79b7a79d8aa",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0284b051eada10d79b7a79d8aa",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485184b051eada10d79b7a79d8aa",
              "width": 64
            }
          ],
          "Duration": 207272,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/4e2a74dad632b9ec4de80aa8b59ca64af681c03a?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Un Viaje Largo - Acústico",
          "Artist": "Marcela Gandara",
          "Album": "Un Viaje Largo (Acústico)",
          "Spotify URL": "https://open.spotify.com/track/4iaPY6KVSvU0hrdYmrjtEG",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2731da67fd474c31b764ff9d7d0",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e021da67fd474c31b764ff9d7d0",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048511da67fd474c31b764ff9d7d0",
              "width": 64
            }
          ],
          "Duration": 225716,
          "Popularity": 40,
          "Song Preview": "https://p.scdn.co/mp3-preview/80b8524a0f7c21f4b86264afa8e091deebbea198?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "En Vizhigalil",
          "Artist": "Diwakar",
          "Album": "En Vizhigalil",
          "Spotify URL": "https://open.spotify.com/track/7Fd3OUuCRfYG8G4lICQQ0M",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273cbe09dff393bc0f557f4717d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02cbe09dff393bc0f557f4717d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851cbe09dff393bc0f557f4717d",
              "width": 64
            }
          ],
          "Duration": 207272,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/183d13bdb2768d7a4db78b58c01bbc6f9562bb93?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Un Viaje",
          "Artist": "AP the Wizard",
          "Album": "Un Viaje",
          "Spotify URL": "https://open.spotify.com/track/2mDfCVnwF4myyRidmkwmDx",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273aa574a1f8c97a0c652c7e824",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02aa574a1f8c97a0c652c7e824",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851aa574a1f8c97a0c652c7e824",
              "width": 64
            }
          ],
          "Duration": 132632,
          "Popularity": 23,
          "Song Preview": "https://p.scdn.co/mp3-preview/d7485596ad791a393dda38c77e43b862d5e00db0?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Un Vizhigalilellaam",
          "Artist": "Bro. Alexander, Hema John, Nithya Moses, M. Preeth Gennet",
          "Album": "Parisutha Vethagamam Padalgal",
          "Spotify URL": "https://open.spotify.com/track/7syxrHGEPydKPKzbpT4GIp",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2733e3767e9322d31150ab1c35a",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e023e3767e9322d31150ab1c35a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048513e3767e9322d31150ab1c35a",
              "width": 64
            }
          ],
          "Duration": 121573,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/792ff6240e528605b149df1fa8ed723c6c3b04c3?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Un viejito Enamorado",
          "Artist": "Trovadores Record",
          "Album": "Un viejito Enamorado",
          "Spotify URL": "https://open.spotify.com/track/49jSqzDaNQIxHMM93bsqCJ",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739773081fcd9e3d6649c03094",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029773081fcd9e3d6649c03094",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519773081fcd9e3d6649c03094",
              "width": 64
            }
          ],
          "Duration": 206506,
          "Popularity": 25,
          "Song Preview": "https://p.scdn.co/mp3-preview/a84675445170f5ccd4bc4f0edb5d0b4fd8e27fe7?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Naan Un Vizhigalile",
          "Artist": "M.Kowtham, Prathadsan",
          "Album": "Naan Un Vizhigalile",
          "Spotify URL": "https://open.spotify.com/track/52t70v9nmoDIVjs24qdK6S",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273a2ec4d1d5912d0e7610daebd",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02a2ec4d1d5912d0e7610daebd",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851a2ec4d1d5912d0e7610daebd",
              "width": 64
            }
          ],
          "Duration": 234874,
          "Popularity": 8,
          "Song Preview": "https://p.scdn.co/mp3-preview/e1fca7d3909de31accbedb3967d7d3ad6e9ab5b8?cid=73e4cf715b8943f5a128be2302bb7674"
        }
      ]
    },
    {
      "name": "Kadhal Desam",
      "search_results": [
        {
          "Name": "Kalluri Salai",
          "Artist": "A.R. Rahman, Vaali, Hariharan, Aslam Mustafa",
          "Album": "Kadhal Desam (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/68WGkOiT1sasBUs7kfxpfU",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c6e9717bf491b54737ebf231",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c6e9717bf491b54737ebf231",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c6e9717bf491b54737ebf231",
              "width": 64
            }
          ],
          "Duration": 358653,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/3d6968a79b81fc4b60a0124b62b3c287671ddfe3?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Anbay",
          "Artist": "S. P. Balasubrahmanyam, O.S. Arun, Rafee",
          "Album": "Kadhal Desam",
          "Spotify URL": "https://open.spotify.com/track/0rmFz3iFgvMGxEWv5YZRJT",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737e0d7f828e6b955e42175e98",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027e0d7f828e6b955e42175e98",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517e0d7f828e6b955e42175e98",
              "width": 64
            }
          ],
          "Duration": 341519,
          "Popularity": 61,
          "Song Preview": "https://p.scdn.co/mp3-preview/eb367de76cdba6d98f495d379744297f2107488d?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Hello Doctor",
          "Artist": "A.R. Rahman, Vaali, Storms, Noel James, Anupama",
          "Album": "Kadhal Desam (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/6WJ0y6cpfar8wpeTBjJVY0",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c6e9717bf491b54737ebf231",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c6e9717bf491b54737ebf231",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c6e9717bf491b54737ebf231",
              "width": 64
            }
          ],
          "Duration": 386986,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/973bd910645453f76510a6460460791a03c54c67?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Thendrale",
          "Artist": "Mano, Unnikrishnan, Dominique",
          "Album": "Kadhal Desam",
          "Spotify URL": "https://open.spotify.com/track/13sUdIRyJ9k5l1JQzqIHMU",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737e0d7f828e6b955e42175e98",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027e0d7f828e6b955e42175e98",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517e0d7f828e6b955e42175e98",
              "width": 64
            }
          ],
          "Duration": 397664,
          "Popularity": 47,
          "Song Preview": "https://p.scdn.co/mp3-preview/72c34222c61ccd971f84b88d04b9f51ebe88103c?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Ennai Kaanavillaiye",
          "Artist": "A.R. Rahman, Vaali, S. P. Balasubrahmanyam, O.S. Arun, Rafee",
          "Album": "Kadhal Desam (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/4QBA8Em5BM0SnPYrRa0qGH",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c6e9717bf491b54737ebf231",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c6e9717bf491b54737ebf231",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c6e9717bf491b54737ebf231",
              "width": 64
            }
          ],
          "Duration": 346133,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/544c20df2a31d2913181dfeb15c346b174611b6a?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Mustafaa Mustafaa",
          "Artist": "A.R. Rahman",
          "Album": "Kadhal Desam",
          "Spotify URL": "https://open.spotify.com/track/5vTK1aaFZo2auJjQhGgHgD",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737e0d7f828e6b955e42175e98",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027e0d7f828e6b955e42175e98",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517e0d7f828e6b955e42175e98",
              "width": 64
            }
          ],
          "Duration": 366225,
          "Popularity": 53,
          "Song Preview": "https://p.scdn.co/mp3-preview/889afc193536df2237fdff22132ff7f90f3b934a?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Mustafa Mustafa",
          "Artist": "A.R. Rahman, Vaali",
          "Album": "Kadhal Desam (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/3VVCqalaOTl1HyOK1GJg0z",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c6e9717bf491b54737ebf231",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c6e9717bf491b54737ebf231",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c6e9717bf491b54737ebf231",
              "width": 64
            }
          ],
          "Duration": 368893,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/8e8c955fc3f1d26a176a807fb81ec0a5c33df6f6?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "O Vennilla",
          "Artist": "Unnikrishnan",
          "Album": "Kadhal Desam",
          "Spotify URL": "https://open.spotify.com/track/68YRDduKLy0DFKp2RWd9VS",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737e0d7f828e6b955e42175e98",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027e0d7f828e6b955e42175e98",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517e0d7f828e6b955e42175e98",
              "width": 64
            }
          ],
          "Duration": 297168,
          "Popularity": 48,
          "Song Preview": "https://p.scdn.co/mp3-preview/23b1015a9b85d2f063c4d1036a5b5c960a8dd1ad?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "O Vennila",
          "Artist": "A.R. Rahman, Vaali, Unnikrishnan",
          "Album": "Kadhal Desam (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/1A3LOlBFedDDs8lqHtUOhA",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c6e9717bf491b54737ebf231",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c6e9717bf491b54737ebf231",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c6e9717bf491b54737ebf231",
              "width": 64
            }
          ],
          "Duration": 318772,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/d502b5aeb0cdb0eb48023be0ab86f7195594c993?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kalluri Salai",
          "Artist": "A.R. Rahman, Hariharan, Aslan Mustafa",
          "Album": "Kadhal Desam",
          "Spotify URL": "https://open.spotify.com/track/23FPsRxn7F8Hmelk6fCy7F",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737e0d7f828e6b955e42175e98",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027e0d7f828e6b955e42175e98",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517e0d7f828e6b955e42175e98",
              "width": 64
            }
          ],
          "Duration": 352943,
          "Popularity": 43,
          "Song Preview": "https://p.scdn.co/mp3-preview/42df410738bbd3372a7d434d022755fabbc77786?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Thendrale",
          "Artist": "A.R. Rahman, Vaali, Mano, Unnikrishnan, Dominique Cerejo",
          "Album": "Kadhal Desam (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/5K1XKz1vdSEbCgZ8VpDNF9",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c6e9717bf491b54737ebf231",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c6e9717bf491b54737ebf231",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c6e9717bf491b54737ebf231",
              "width": 64
            }
          ],
          "Duration": 400226,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/0aa64c9b2179be175a9e7706dcfbe9ee2c869d30?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Hello Doctor",
          "Artist": "A.R. Rahman, Storms, Noel James, Anupama",
          "Album": "Kadhal Desam",
          "Spotify URL": "https://open.spotify.com/track/3JppwVa3VUjWEf5gHfkEp5",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737e0d7f828e6b955e42175e98",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027e0d7f828e6b955e42175e98",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517e0d7f828e6b955e42175e98",
              "width": 64
            }
          ],
          "Duration": 379599,
          "Popularity": 44,
          "Song Preview": "https://p.scdn.co/mp3-preview/beda122ac9bab38df343565ef64739d938e7902e?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhal Sadugudu",
          "Artist": "S.P. Charan",
          "Album": "Alaipayuthey (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/4vP3rarKvrhtcK2umoyq65",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273dab04a069439d077d96afd3f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02dab04a069439d077d96afd3f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851dab04a069439d077d96afd3f",
              "width": 64
            }
          ],
          "Duration": 275586,
          "Popularity": 51,
          "Song Preview": "https://p.scdn.co/mp3-preview/2272ca241a69da907271f01ece22e6529a28b58c?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhalin Desam",
          "Artist": "Sirpy, Mano, Swarnalatha",
          "Album": "Raasi (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/6wGFwEjw4E3ARh8CSQYE4t",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273a0d28fd812845ed3de7db2a4",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02a0d28fd812845ed3de7db2a4",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851a0d28fd812845ed3de7db2a4",
              "width": 64
            }
          ],
          "Duration": 343813,
          "Popularity": 15,
          "Song Preview": "https://p.scdn.co/mp3-preview/4cfcca94c63086c44d406befebb734f43637316b?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kaadhal En Kaviye - From \"Salmon 3D\"",
          "Artist": "Sid Sriram, Sreejith Edavana",
          "Album": "Kaadhal En Kaviye (From \"Salmon 3D\")",
          "Spotify URL": "https://open.spotify.com/track/6XYQvYJzHjK5150Vl7NKfJ",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b5362694fdf04a9d4f4cf3dc",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b5362694fdf04a9d4f4cf3dc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b5362694fdf04a9d4f4cf3dc",
              "width": 64
            }
          ],
          "Duration": 311558,
          "Popularity": 73,
          "Song Preview": "https://p.scdn.co/mp3-preview/16d78c2d208a8fb1532a3f50661c8e59b4f452bf?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhalin Desam",
          "Artist": "Mano, Swarnalatha, Sirpy",
          "Album": "Raasi (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/48yc9MiOJapKy73Gswz7Ti",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27322362b9c39ff2c64390f2e83",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0222362b9c39ff2c64390f2e83",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485122362b9c39ff2c64390f2e83",
              "width": 64
            }
          ],
          "Duration": 343871,
          "Popularity": 2,
          "Song Preview": "https://p.scdn.co/mp3-preview/8b2cea754d1b067671f697f0e0153bce1cb4333f?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kaathalin Deepam Ondru - Male version",
          "Artist": "S. P. Balasubrahmanyam",
          "Album": "Thambikku Entha Ooru (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/0523YjBhkcVoAGONOUFrf6",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2736290433b35d8d3afa9f845d5",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e026290433b35d8d3afa9f845d5",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048516290433b35d8d3afa9f845d5",
              "width": 64
            }
          ],
          "Duration": 276133,
          "Popularity": 51,
          "Song Preview": "https://p.scdn.co/mp3-preview/f7c781b75198d89024e8ebcbccfd477511c30f10?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhalin Desam",
          "Artist": "Mano, Swarnalatha",
          "Album": "Raasi (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/6rYaxvc039S9nzP58VNyKm",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737e1f85f0c015710c6fa76c64",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027e1f85f0c015710c6fa76c64",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517e1f85f0c015710c6fa76c64",
              "width": 64
            }
          ],
          "Duration": 343871,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/b5e54521b437cfd4a16867b5bb157040175da80f?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kaathal Deepam Ondru",
          "Artist": "Malaysia Vasudevan",
          "Album": "Kalyanaraman (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/0ckjENVlBNFRGHFZnR8Xbh",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27391871a68ece533c84bc2ac3e",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0291871a68ece533c84bc2ac3e",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485191871a68ece533c84bc2ac3e",
              "width": 64
            }
          ],
          "Duration": 225240,
          "Popularity": 21,
          "Song Preview": "https://p.scdn.co/mp3-preview/12e146c7db8331dc877bae0a9f9419aa54fc3f92?cid=73e4cf715b8943f5a128be2302bb7674"
        },
        {
          "Name": "Kadhalin Desam",
          "Artist": "Sirpy, Mano, Swarnalatha",
          "Album": "Raasi (Original Motion Picture Soundtrack)",
          "Spotify URL": "https://open.spotify.com/track/7F0yIKfJuKnIZtyxCnhWWu",
          "Images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b61bf630c66b6901e6a167d1",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b61bf630c66b6901e6a167d1",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b61bf630c66b6901e6a167d1",
              "width": 64
            }
          ],
          "Duration": 343871,
          "Popularity": 0,
          "Song Preview": "https://p.scdn.co/mp3-preview/0a5adb558ca9bdd7c2d20ed65d6c25c4fe06f6d9?cid=73e4cf715b8943f5a128be2302bb7674"
        }
      ]
    }
  ]
  
  expanderData : any;

  constructor(private weatherService: WeatherService, private songsService: SongsService, private loadingTextService: LoadingTextService) {
    this.expanderData = this.expanderDataTemp.map((item : any) => ({
      ...item, search_results : item.search_results.sort((s1 : any, s2 : any) => s2.Popularity - s1.Popularity)
    }))
    this.loadingText$ = this.loadingTextService.getCurrentText();
   }

  ngOnInit(): void {
    
    this.weatherService.getWeatherData().subscribe(
      (data) => {
        this.weatherData = data;

        if(this.weatherData.description.toLowerCase() === 'clear sky'){
          this.bgImage = "https://uploads-ssl.webflow.com/6277f83b4102c5e63d4c0204/62796cee8154b871994b6040_clearsky-poster-00001.jpg"
        }
        else if(['mist', 'haze', 'fog'].includes(this.weatherData.description.toLowerCase())){
          this.bgImage = "https://images.unsplash.com/photo-1543968996-ee822b8176ba?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlzdHxlbnwwfHwwfHx8MA%3D%3D"
        }
        else if(['scattered clouds', 'few clouds'].includes(this.weatherData.description.toLowerCase())){
          this.bgImage = "https://mixkit.imgix.net/videos/preview/mixkit-sky-with-scattered-clouds-9471-0.jpg?q=80&auto=format%2Ccompress"
        }
        else if(['light rain', 'thunderstorm'].includes(this.weatherData.description.toLowerCase())){
          this.bgImage = "https://images.unsplash.com/photo-1500740516770-92bd004b996e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3VkeXxlbnwwfHwwfHx8MA%3D%3D"
        }
        else{
          this.bgImage = "https://images.ctfassets.net/hrltx12pl8hq/6TIZLa1AKeBel0yVO7ReIn/1fc0e2fd9fcc6d66b3cc733aa2547e11/weather-images.jpg?fit=fill&w=600&h=400";
        }

        console.log('Weather Data:', this.weatherData);

        this.songsService.getSongsData().subscribe(
          (songData) => {
            this.songsData = songData.data;

            // to convert milliseconds duration into mins and secs
            this.songsData.forEach((song: any) => {
              song.search_results.forEach((info : any) => {
                info.Duration = Math.floor(info.Duration / 60000) + " mins " + Math.floor(info.Duration / 1000 % 60) + " s";
              })
            });

            // to sort inner data by popularity
            this.songsData = this.songsData.map((item : any) => ({
              ...item, search_results : item.search_results.sort((s1 : any, s2 : any) => s2.Popularity - s1.Popularity)
            }))
            
          }
        );
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
  
}
