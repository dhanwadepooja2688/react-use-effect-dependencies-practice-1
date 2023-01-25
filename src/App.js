import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  console.log(dataType)
  console.log({ data });


  // Write code here.
useEffect(()=>{
  if(dataType.length >1){

    fetch(`https://swapi.dev/api/${dataType}/`)
    .then((res) => res.json())
    .then((data) => {
   console.log("Data",data)
   setData(data)
    })
    
  }else{
    console.log("No Data type")
  }
 
}, [dataType])

 

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
