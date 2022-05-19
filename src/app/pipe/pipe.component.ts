import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent{
public text="Dennis Rotich"
  public prom = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Hello')
    },3000)
  })

public me:{name:string,networthy:number,dob:Date,rating:number, covered:number}={

  name:'Jonathan Ndambuki',
  networthy:100000000,
  dob:new Date(),
  rating:4.5735467,
  covered:0.25

}
public trainee_name=''
public trainee_age = 0
public searchstring=''
public output = ''
public reversestring =''
public trainees:{name:string,age:number}[]=[
  {
    name:'Ashina Barasa',
    age:10
  }
  ,
  {
    name:'Harrison Gacheru',
    age:12
  },
  {
    name:'Edwin Wakibari',
    age:11
  },
  {
    name:'Fredrick Mutua',
    age:13
  },
  {
    name:'Benjamin Nyota',
    age:30
  },
  {
    name:'Fredrick Wambua',
    age:16
  },
  {
    name:'Lawrence Maina',
    age:17
  },
  {
    name:'Dennis Rotich',
    age:18
  }
]

constructor() { }
addTrainee(){
  for (let a of this.trainees){
    if (this.trainee_name===a.name){
      const warning = document.querySelector(".warning") as HTMLDivElement
      warning.textContent = "Trainee already exists"
      warning.style.display = 'block';
      setTimeout(()=>{
        warning.style.display = 'none';
      },5000)
      return
    }
  }
  if (this.trainee_age<=0){
    const warning = document.querySelector(".warning") as HTMLDivElement
      warning.textContent = "Invalid age"
      warning.style.display = 'block';
      setTimeout(()=>{
        warning.style.display = 'none';
      },3000)
      return
  }
  this.trainees.push({
    name:this.trainee_name,
    age:this.trainee_age
  })
  this.trainee_age = 0
  this.trainee_name =''
}
}
