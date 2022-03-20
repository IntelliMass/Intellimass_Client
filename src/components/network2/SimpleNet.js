import React, { useRef, useEffect, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import "./SimpleNet.scss"
import {ArticlePopover} from "../article-popover/ArticlePopover";
import {ArticleCard} from "../aarticle-card/ArticleCard";

// const ARTICLES_LINKS_BY_AUTHORS = [
//     {
//         source: "e6e1989b2df588a6ece0e4dd520f34b20ac5cf14",
//         target: "893644d781fcbcad807f97a8494c14f66c0684e5",
//         //type: "AUTHOR",
//         //value: {authorId: '47772997', name: 'Behnam Zakeri'}
//         value: 'Behnam Zakeri'
//     },
//     {
//         source: "e6e1989b2df588a6ece0e4dd520f34b20ac5cf14",
//         target: "893644d781fcbcad807f97a8494c14f66c0684e5",
//         //type: "AUTHOR",
//         // value: {authorId: '39889166', name: 'J. Hunt'},
//         value: 'J. Hunt'
//     },
//     {
//         source: "e6e1989b2df588a6ece0e4dd520f34b20ac5cf14",
//         target: "893644d781fcbcad807f97a8494c14f66c0684e5",
//         //type: "AUTHOR",
//         //value: {authorId: '1580864830', name: 'Mahsa Mohammadrezaei'}
//         value: 'Mahsa Mohammadrezaei'
//     },
//     {
//         source: "e6e1989b2df588a6ece0e4dd520f34b20ac5cf14",
//         target: "893644d781fcbcad807f97a8494c14f66c0684e5",
//         //type: "AUTHOR",
//        // value: {authorId: '47772997', name: 'Behnam Zakeri'}
//         value : 'Behnam Zakeri'
//     },
//     {
//         source: "30d65fbc8d71ac202ee8d7d5f0e58c63a6c6a957",
//         target: "8d208c08c9fea2793085a6da625b8e4f5ebe7695",
//         //type: "AUTHOR",
//        //value: {authorId: '112838836', name: 'Zhong Fan'}
//         value:  'Zhong Fan'
//     }
// ];
//
// var data = {
//     nodes: [
//         {
//             id: "d8e49199939494b41ac30fd2672c05cd8cf3546b",
//             isClusterNode: true,
//             name: "project, idea, user",
//             size: 9.785932721712538,
//
//             paperId: 'd8e49199939494b41ac30fd2672c05cd8cf3546b' ,
//             title: 'A Survey of IoT Applications in Blockchain Systems',
//             abstract: "Internet of Things (IoT) has gain the importance with the growing applications in the fields of ubiquitous and context-aware computing. In IoT, anything can be a portion of it, whether it is unintelligent objects or sensor nodes; thus extremely different kinds of services can be developed. In this regard, data storage, resource management, service creation and discovery, and resource and power management would facilitate advanced mechanism and much better infrastructure. Cloud computing and fog computing play an important role when the quantity of data and information IoT are critical. Thus, it would not be potential for standalone strength forced IoT to handle. Cloud of things is an integration of IoT with cloud computing or fog computing which can aid to realize the objectives of evolving IoT and future Internet. Fog computing is an expansion to the notion of cloud computing to the network brim, making it suitable for IoT and other implementations that need real-time and fundamental interactions. Regardless of many virtually and services unlimited resources presented by cloud-like intelligent building monitoring and others, it yet countenances various difficulties when interfering many smart things in human’s life. Mobility, response time, and location consciousness are the most prominent problems. Fog and mobile edge computing have been established, to get rid of these difficulties of cloud computing. In this article, we suggest a novel framework based on computer propped diagnosis and IoT to detect and observe type-2 diabetes patients. The recommended healthcare system aims to obtain a better accuracy of diagnosis with mysterious data. The overall experimental results indicate the validity and robustness of our proposed algorithms."
//             ,venue: 'ACM Comput. Surv.',
//             year: 2020,
//             authors: [
//                 {authorId: '1401735975', name: 'Mohamed Abdel-Basset'},
//                 {authorId: '10148761', name: 'Gunasekaran Manogaran'},
//                 {authorId: '51218677', name: 'Abduallah Gamal'},
//                 {authorId: '2964485', name: 'Victor Chang'}
//             ],
//             fieldsOfStudy: ['Computer Science'],
//             influentialCitationCount: 1,
//             isOpenAccess: false
//         },
//         {
//             id: "893644d781fcbcad807f97a8494c14f66c0684e5",
//             isClusterNode: true,
//             name: "like,source,share",
//             size: 9.174311926605505,
//
//             paperId: '893644d781fcbcad807f97a8494c14f66c0684e5',
//             title: 'A Novel Intelligent Medical Decision Support Model Based on Soft Computing and IoT',
//             abstract: "Internet of Things (IoT) has gain the importance with the growing applications in the fields of ubiquitous and context-aware computing. In IoT, anything can be a portion of it, whether it is unintelligent objects or sensor nodes; thus extremely different kinds of services can be developed. In this regard, data storage, resource management, service creation and discovery, and resource and power management would facilitate advanced mechanism and much better infrastructure. Cloud computing and fog computing play an important role when the quantity of data and information IoT are critical. Thus, it would not be potential for standalone strength forced IoT to handle. Cloud of things is an integration of IoT with cloud computing or fog computing which can aid to realize the objectives of evolving IoT and future Internet. Fog computing is an expansion to the notion of cloud computing to the network brim, making it suitable for IoT and other implementations that need real-time and fundamental interactions. Regardless of many virtually and services unlimited resources presented by cloud-like intelligent building monitoring and others, it yet countenances various difficulties when interfering many smart things in human’s life. Mobility, response time, and location consciousness are the most prominent problems. Fog and mobile edge computing have been established, to get rid of these difficulties of cloud computing. In this article, we suggest a novel framework based on computer propped diagnosis and IoT to detect and observe type-2 diabetes patients. The recommended healthcare system aims to obtain a better accuracy of diagnosis with mysterious data. The overall experimental results indicate the validity and robustness of our proposed algorithms."
//             ,venue: 'IEEE Internet of Things Journal',
//             year: 2020,
//             authors: [
//                 {authorId: '2972928', name: 'Naser Hossein Motlagh'},
//                 {authorId: '1580864830', name: 'Mahsa Mohammadrezaei'},
//                 {authorId: '39889166', name: 'J. Hunt'},
//                 {authorId: '47772997', name: 'Behnam Zakeri'}
//             ],
//             fieldsOfStudy: ['Computer Science'],
//             influentialCitationCount: 2,
//             isOpenAccess: true
//         },
//         {
//             id: "e6e1989b2df588a6ece0e4dd520f34b20ac5cf14",
//             isClusterNode: true,
//             name: "zapier,help,need",
//             size: 8.868501529051988,
//
//             paperId: 'e6e1989b2df588a6ece0e4dd520f34b20ac5cf14',
//             title: 'Internet of Things (IoT) and the Energy Sector',
//             abstract: "Integration of renewable energy and optimization of energy use are key enablers of sustainable energy transitions and mitigating climate change. Modern technologies such the Internet of Things (IoT) offer a wide number of applications in the energy sector, i.e, in energy supply, transmission and distribution, and demand. IoT can be employed for improving energy efficiency, increasing the share of renewable energy, and reducing environmental impacts of the energy use. This paper reviews the existing literature on the application of IoT in in energy systems, in general, and in the context of smart grids particularly. Furthermore, we discuss enabling technologies of IoT, including cloud computing and different platforms for data analysis. Furthermore, we review challenges of deploying IoT in the energy sector, including privacy and security, with some solutions to these challenges such as blockchain technology. This survey provides energy policy-makers, energy economists, and managers with an overview of the role of IoT in optimization of energy systems."
//             ,venue: '',
//             year: 2020,
//             authors: [
//                 { authorId: '2972928', name: 'Naser Hossein Motlagh'},
//                 {authorId: '1580864830', name: 'Mahsa Mohammadrezaei'},
//                 {authorId: '39889166', name: 'J. Hunt'},
//                 {authorId: '47772997', name: 'Behnam Zakeri'}
//             ],
//             fieldsOfStudy: ['Computer Science'],
//             influentialCitationCount: 2,
//             isOpenAccess: true
//         },
//         {
//             id: "d315ffc3fcaafd33edf15abd4ceb4130d93f5917",
//             isClusterNode: true,
//             name: "citizen,app,engage",
//             size: 8.868501529051988,
//
//             paperId: 'd315ffc3fcaafd33edf15abd4ceb4130d93f5917',
//             title: 'An overview of Internet of Things (IoT): Architectural aspects, challenges, and protocols',
//             abstract: "Understanding of any computing environment requires familiarity with its underlying technologies. Internet of Things (IoT), being a new era of computing in the digital world, aims for the development of large number of smart devices that would support a variety of applications and services. These devices are resource‐constrained, and the services they would provide are going to impose specific requirements, among which security is the most prominent one. Therefore, in order to comprehend and conform these requirements, there is a need to illuminate the underlying architecture of IoT and its associated elements. This comprehensive survey focuses on the security architecture of IoT and provides a detailed taxonomy of major challenges associated with the field and the key technologies, including Radio Frequency Identification (RFID) and Wireless Sensor Networks (WSN), that are enabling factors in the development of IoT. The paper also discusses some of the protocols suitable for IoT infrastructure and open source tools and platforms for its development. Finally, a brief outline of major open issues, along with their potential solutions and future research directions, is given."
//             ,venue: 'Concurr. Comput. Pract. Exp.',
//             year: 2018,
//             fieldsOfStudy: ['Computer Science'],
//             influentialCitationCount: 2,
//             isOpenAccess: false,
//             authors:[
//                 {authorId: '144901889', name: 'B. Gupta'},
//                 {authorId: '51359574', name: 'Megha Quamara'},
//             ]
//         },
//         {
//             id: "3d66e3e38a79363282de3af36c8ee602075f406e",
//             isClusterNode: true,
//             name: "customer,usage,expose",
//             size: 8.562691131498472,
//
//             paperId: '3d66e3e38a79363282de3af36c8ee602075f406e',
//             title: 'Machine Learning for Resource Management in Cellul…otentials, Current Solutions, and Open Challenges',
//             abstract: "Internet-of-Things (IoT) refers to a massively heterogeneous network formed through smart devices connected to the Internet. In the wake of disruptive IoT with a huge amount and variety of data, Machine Learning (ML) and Deep Learning (DL) mechanisms will play a pivotal role to bring intelligence to the IoT networks. Among other aspects, ML and DL can play an essential role in addressing the challenges of resource management in large-scale IoT networks. In this article, we conduct a systematic and in-depth survey of the ML- and DL-based resource management mechanisms in cellular wireless and IoT networks. We start with the challenges of resource management in cellular IoT and low-power IoT networks, review the traditional resource management mechanisms for IoT networks, and motivate the use of ML and DL techniques for resource management in these networks. Then, we provide a comprehensive survey of the existing ML- and DL-based resource management techniques in wireless IoT networks and the techniques specifically designed for HetNets, MIMO and D2D communications, and NOMA networks. To this end, we also identify the future research directions in using ML and DL for resource allocation and management in IoT networks."
//             ,venue: 'IEEE Communications Surveys & Tutorials',
//             year: 2019,
//             fieldsOfStudy: ['Computer Science', 'Engineering'],
//             influentialCitationCount: 3,
//             isOpenAccess: true,
//             authors:[
//                 {authorId: '73882549', name: 'Fatima Hussain'},
//                 {authorId: '1682336', name: 'Syed Ali Hassan'},
//                 {authorId: '2225364', name: 'R. Hussain'},
//                 {authorId: '144158811', name: 'E. Hossain'},
//             ]
//         }
//     ],
//     links: ARTICLES_LINKS_BY_AUTHORS
//     // links: [
//     //     { source: "B", target: "D", value: 6 },
//     //     { source: "D", target: "D", value: 6, curvature: 0.3 }
//     // ]
// };


export function SimpleNet(props) {
    const {network} = props;
    const [hoveredNode, setHoveredNode] = useState(null);
    const [selectedNode, setSelectedNode] = useState(null);
    const forceRef = useRef(null);

    console.log(network)

    useEffect(() => {
        forceRef.current.d3Force("charge").strength(-400);
    },[]);

    useEffect(()=>{
        console.log(network);
    },[network])

    const NodeHover = () => {
        return(
            <div className="node-hover">
                {/*<ArticlePopover/>*/}
            </div>
        );
    };


    const NodeClicked = () => {
        return(
            <div className="node-clicked">
                <ArticleCard article={selectedNode}/>
            </div>
        );
    };

    return (
        <div className="network-wrapper">
            {selectedNode? <NodeClicked/> : null}
            {hoveredNode? <NodeHover/> : null}
            <ForceGraph2D
                graphData={network}
                nodeLabel="paperId"
                height={700}
                width={1000}

                linkCurvature="curvature"
                enablePointerInteraction={true}
                enableNodeDrag={true}
                linkDirectionalParticleWidth={1}

                linkDirectionalArrowRelPos={1}
                linkDirectionalArrowLength={4}

                linkWidth={5}
                linkColor={"#FFA07A"}

                ref={forceRef}
                onNodeHover={(node) => {
                    if (node) {
                        setHoveredNode(node);
                    } else {
                        setHoveredNode(null);
                    }
                }}
                onNodeClick={(node) => {
                    if (node) {
                        console.log(node)
                        setSelectedNode(node);
                    } else {
                        setSelectedNode(null);
                    }
                }}
            />
        </div>
    );
}
