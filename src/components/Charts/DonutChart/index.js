import ApexCharts from "react-apexcharts";


export default function ChartDonut(){

    return(
        <ApexCharts
        type="donut"
        width= "160%"
        series={[100,200]}
        
        options={{
            legend: {
                position: 'bottom',
                floating: true,
                offsetY: -100,
              },
            labels:['Alcançado', 'Restante'],
            colors:['#00e396','#D8D8D8'],
            plotOptions: {
                pie: {
                  startAngle: -90,
                  endAngle: 90,
                  offsetY: 10
                }
            
        }}}       
             />
    )
}


