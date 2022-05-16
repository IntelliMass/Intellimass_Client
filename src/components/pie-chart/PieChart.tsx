import React from "react";
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";
import {INewSingleCatalog} from "../../reducers/CatalogReducer";

type PieChartProps = {
    categories: Array<INewSingleCatalog>
};

type SeriesData = {
    y: number
}

export const createDataSeries = (categories: Array<INewSingleCatalog>) => {
    let data: Array<SeriesData> = [];
    categories.forEach((category:INewSingleCatalog) => {
        data.push({y: category.rank});
    });
    return data;
}




export const PieChartComponent: React.FC<PieChartProps> = (props) => {
    const options = {
        chart: {
            type: "pie"
        },
        series: [
            {
                data: createDataSeries(props.categories)
            }
        ]
    };

    return (
        <div className="pie-chart-container`" style={{marginLeft: -30, marginBottom:20}}>

            <PieChart highcharts={Highcharts} options={options} />
        </div>
    );
};



