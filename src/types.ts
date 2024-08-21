export interface ChartPropertiesType{
  
    name:string;
    ticketCount:number;
    color:string;
}
export interface ChartDataType extends ChartPropertiesType{
    id:string;
}