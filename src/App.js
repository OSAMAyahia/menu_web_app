 import './App.css';
 import NAVBAR from './components/nav';
import Name from './components/menuName';
import Card from './components/card';
import {foodItems} from './components/Data'
import { useState } from 'react';
import Button from './components/button'; 
function App() {
  const [data,setdata]=useState(foodItems)
  const arr=foodItems.map((i)=>i.title)
const arr2= ["all",...(new Set(arr))]
// const arr3= [(new Set(arr))]
// console.log("arr2",arr2)
// console.log("arr3", arr3)
const filters= (word)=>{
  if (word ==="all"){
   return setdata(foodItems)
  }
  const arr= foodItems.filter((i)=>i.title===word)
  setdata(arr)
 
 }
 const filtersearch=(word)=>{
  if (word!==''){
  const s=word.toLowerCase()
  const arr =foodItems.filter((i)=> i.title.toLowerCase().startsWith(s))
  setdata(arr)
 }}
  return (
    <div  >
     <NAVBAR filtersearch={filtersearch}/>
     <Name/>
     <Button arr={arr2} fil={filters}/>
     <Card data = {data}/>
    </div>
  );
}

export default App;
