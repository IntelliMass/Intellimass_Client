import React, {useState} from "react";
import { Slider } from 'antd';
import "./SliderRank.scss";

type IconSliderProps = {
    max : number,
    min : number
};

export const  IconSlider: React.FC<IconSliderProps> = (props) => {
    const { max, min } = props;
    const [value, setValue] = useState<any>();

    return (
        <div className="icon-wrapper">
            <Slider min={min} max={max} dots={true} tooltipVisible={true} onChange={setValue} value={value} />
        </div>
    );
};




