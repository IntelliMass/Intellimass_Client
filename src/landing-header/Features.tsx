import React, {useEffect} from "react";
import "./Header.scss";
import { Card } from "antd";
import aos from 'aos'
import 'aos/dist/aos.css'
import {
    DiffOutlined,
    FileSearchOutlined, MoreOutlined,
    PartitionOutlined, RadarChartOutlined,
    SplitCellsOutlined,
    ZoomInOutlined
} from "@ant-design/icons";

type FeaturesProps = {};

const { Meta } = Card;

export const Features: React.FC<FeaturesProps> = (props) => {
    useEffect(()=>{
        aos.init({duration: 3000})
    },[])


    return (
        <>
            <h2 data-aos='fade-left' data-aos-duration='3000' className="landing-page-title" >
                Features
            </h2>
            <div className="features-grid-container">
                <Card
                    className="feature-card"
                    hoverable
                    cover={<DiffOutlined className="feature-icon" />}
                >
                    <Meta title="Discover articles from different sources" description="With IntelliMass, there is no divide – the data and the analytical tools are available in a single platform, streamlining the user journey." />
                </Card>
                <Card
                    className="feature-card"
                    hoverable
                    cover={<FileSearchOutlined className="feature-icon"/>}
                >
                    <Meta title="Discover articles by different type of metadata" description="Collect articles from search engines using queries entered by the researcher." />
                </Card>
                <Card
                    className="feature-card"
                    hoverable
                    cover={<ZoomInOutlined className="feature-icon"/>}
                >
                    <Meta title="Filters" description="IntelliMass have a powerful API with a querying language for more complex analyses, so that you can get creative!" />
                </Card>

                <Card
                    className="feature-card"
                    hoverable
                    cover={<RadarChartOutlined className="feature-icon"/>}
                >
                    <Meta title="Similarity" description="Semantic Similarity, is a task in the area of Natural Language Processing (NLP) that scores the relationship between texts or documents using a defined metric, called semantic metric." />
                </Card>
                <Card
                    className="feature-card"
                    hoverable
                    cover={<PartitionOutlined className="feature-icon"/>}
                >
                    <Meta title="Connected data that looks beyond publications to offer a 360° perspective" description="IntelliMass delivers a 360° perspective of a research output. Explore the rich connections in this articles network." />
                </Card>
                <Card
                    className="feature-card"
                    hoverable
                    cover={<SplitCellsOutlined className="feature-icon"/>}
                >
                    <Meta title="Cataloging the articles by subjects and topics" description="IntelliMass use unsupervised clustering methods and let the data sort itself." />
                </Card>
            </div>
        </>
    );
};

