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
            type: 'pie'
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
        plotOptions: {
            pie: {
                size: 180,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y}): {point.percentage:.1f} %',
                    connectorColor: 'silver'
                },
                point: {
                    events: {
                        // mouseOver() {},
                        // mouseOut() {},
                        click(event: any) {
                            const color = event.target.point.color;
                            const value = event.target.point.name;
                            props.onSelect(value, color);
                        },
                        select: function(event:any){
                            event.preventDefault();
                            //this.slice(this.sliced);
                        }
                    }
                }
            }
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



