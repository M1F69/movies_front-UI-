import { Component } from '@angular/core';
import {ListComponent} from "../../common/list/list.component";
export type MoveEntity={
  name: string,
  year: number,
  author: string,
  photo: string
}
@Component({
  selector: 'move-list',
  standalone: true,
  imports: [
    ListComponent
  ],
  templateUrl: './move-list.component.html',
  styleUrl: './move-list.component.css',
  host: {
    class: 'flex w-[360px] border-r border-r-[#dfdfdf] bg-red-200'
  }
})
export class MoveListComponent {
protected readonly moves:MoveEntity[] =[
  {name: "Full Metal Jacket", year: 2008, author: "Stanley Kubrick", photo: "https://i.pinimg.com/564x/78/86/86/788686347b5f98c752a2e961020afd94.jpg"},
  {name: "sooooo long name Film", year: 2001,author:"Wachewsky", photo: "https://i.pinimg.com/564x/6d/af/64/6daf64e9c3d7420afe2a8a5d8a6eb964.jpg"},
  {name: "M1F69", year: 2008, author: "Stanley Kubrick", photo: "https://i.pinimg.com/564x/3c/03/44/3c03444c65ac356cc23348d1d7abb39f.jpg"},
  {name: "TANK & women", year: 1981,author:"Mihalkov", photo: "https://i.pinimg.com/564x/6a/56/41/6a5641e1523f49aed8662463a0cfc631.jpg"},
  {name: "Full Metal Jacket", year: 2008, author: "Stanley Kubrick", photo: "https://i.pinimg.com/564x/78/86/86/788686347b5f98c752a2e961020afd94.jpg"},
  {name: "sooooo long name Film", year: 2001,author:"Wachewsky", photo: "https://i.pinimg.com/564x/6d/af/64/6daf64e9c3d7420afe2a8a5d8a6eb964.jpg"},
  {name: "M1F69", year: 2008, author: "Stanley Kubrick", photo: "https://i.pinimg.com/564x/3c/03/44/3c03444c65ac356cc23348d1d7abb39f.jpg"},
  {name: "TANK & women", year: 1981,author:"Mihalkov", photo: "https://i.pinimg.com/564x/6a/56/41/6a5641e1523f49aed8662463a0cfc631.jpg"},
  {name: "Full Metal Jacket", year: 2008, author: "Stanley Kubrick", photo: "https://i.pinimg.com/564x/78/86/86/788686347b5f98c752a2e961020afd94.jpg"},
  {name: "sooooo long name Film", year: 2001,author:"Wachewsky", photo: "https://i.pinimg.com/564x/6d/af/64/6daf64e9c3d7420afe2a8a5d8a6eb964.jpg"},
  {name: "M1F69", year: 2008, author: "Stanley Kubrick", photo: "https://i.pinimg.com/564x/3c/03/44/3c03444c65ac356cc23348d1d7abb39f.jpg"},
  {name: "TANK & women", year: 1981,author:"Mihalkov", photo: "https://i.pinimg.com/564x/6a/56/41/6a5641e1523f49aed8662463a0cfc631.jpg"},
]
}


// ({
//   filmName: new FormControl('Full Metal Jacket', Validators.required),
//   urlToPic: new FormControl('https://i.pinimg.com/564x/78/86/86/788686347b5f98c752a2e961020afd94.jpg', Validators.required),
//   nameAuthor:  new FormControl('Stanley Kubrick', Validators.required),
//   editYear:  new FormControl(2008, Validators.required),
// })
