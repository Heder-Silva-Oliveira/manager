import axios from "axios";
import { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";

export default function ChartBar(){

    const [sales, setSales] = useState([]);
    
    const getSales = async () => {
      try {
        const res = await axios.get("http://localhost:8800/sales");
        setSales(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
      } catch (error) {
      
      }
    };
  
    useEffect(() => {
  
      getSales();
    }, [setSales]);
  
  const dataL =[];
  
      sales.map((item) => (
          dataL.push( item.profit))); 
    
  
    const dataV =[];
    
      sales.map((item) => (
          dataV.push( item.mont))); 
    

    return(
        <ApexCharts
        type="bar"
        width= "160%"
        series={[
            {
                name: "Venda",
                data: dataV
                
               
                
            },
            {
                name: "Lucro",
                data: dataL 
                
            }
        ]}
        options={{
            
        }}       
             />
    )
}

