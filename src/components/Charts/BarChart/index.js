import ApexCharts from "react-apexcharts";


export default function ChartBar(){

    return(
        <ApexCharts
        type="bar"
        width= "160%"
        series={[
            {
                name: "Company1",
                data: [100,200,232,132,422,132,260,250]
                
            },
            {
                name: "Company1",
                data: [112,190,200,152,302,172,210,205]
            }
        ]}
        options={{
            
        }}       
             />
    )
}

