import React from "react";
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";
import {INewSingleCatalog} from "../../reducers/CatalogReducer";
import "./PieChart.scss"

type PieChartProps = {
    categories: Array<INewSingleCatalog>,
    onSelect: Function
};

type SeriesData = {
    name: string,
    y: number
}

export const createDataSeries = (categories: Array<INewSingleCatalog>) => {
    let data: Array<SeriesData> = [];
    categories.forEach((category:INewSingleCatalog) => {
        data.push({name:category.title ,y: category.rank});
    });
    return data;
}


export const PieChartComponent: React.FC<PieChartProps> = (props) => {

    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        title: {
            text: 'Clusters'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263','#6AF9C4'],
        /*
        *    Highcharts.setOptions({
     colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263',      '#6AF9C4']
        * */
        plotOptions: {
            pie: {
                size: 180,
                // allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y}): {point.percentage:.1f} %',
                    connectorColor: 'silver'
                },
            },
            series: {
                point: {
                    events: {
                        click: function(this:any, event:any){
                            this.slice(null);
                            this.select(null, true);
                            console.log(this.series.chart.getSelectedPoints());
                            const selectedCategories: any = [];
                            this.series.chart.getSelectedPoints().forEach((point: any) => {
                                selectedCategories.push({title: point.options.name, rank: point.options.y})
                            });
                            props.onSelect(selectedCategories);
                            // props.onSelect(this.series.chart.getSelectedPoints());
                        }
                    }  
                },
            },
                
                // point: {
                //     events: {
                //         click: function(this:any, event:any){
                //             this.slice(null);
                //             this.select(null, true);
                //             console.log(this.series.chart.getSelectedPoints());
                //         }
                //         // mouseOver() {},
                //         // mouseOut() {},
                //         // select: function(this:any, event:any){
                //         //     event.preventDefault();
                //         //     this.slice(this.sliced);
                //         //     // props.onSelect(this.value, this.color);
                //         // },
                //         // unselect: function(this:any, event:any){
                //         //     // event.preventDefault();
                //         //     // this
                //         // }
                //         // click(this: any, event: any) {
                //         //     const color = event.target.point.color;
                //         //     const value = event.target.point.name;
                //         //     console.log(this);
                //         //     console.log(event);
                //         //     event.preventDefault();
                //         //     // props.onSelect(value, color);
                //         // },
                //         // select: function(event:any){
                //             // event.preventDefault();
                //             // this.slice(this.sliced);
                //         // },
                //         // remove(event: any){
                //             // return true;
                //         // }
                //     }
                // }
        },
        series: [
            {
                data: createDataSeries(props.categories),
                // fillColor: {
                //     linearGradient: [0, 0, 0, 300],
                // }
            }
        ]
    };



    return (
        <div className="pie-chart-container" style={{marginLeft: -30, marginBottom:20}}>
            <PieChart highcharts={Highcharts} options={options} />
        </div>
    );
};



