
import ApexCharts from "react-apexcharts";


export default function ChartLine(){

    return(
        <ApexCharts
        type="area"
        width= "160%"
        
        series={[
      
            {
                name: "lucro",
                data: [112,190,200,152,302,172,210,205]
                     
                    
                  
                
            
            },
            {
                name: "venda",
                data: [100,200,232,132,422,132,260,250]
               
            }
        ]}
        options={{
            
                colors: ['#5463FF', '#E0144C']
   
            
        }}       
             />
    )
}






