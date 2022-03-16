import {ArticleOfList, Author} from "../../../actions/ArticleActions";

export interface Cluster {
    article: ArticleOfList;
    size: number;
    color: string;
}

export interface Link {
    source: string;
    target: string;
    value?: object;
    type: string;
}

export interface Node {
    paperId: string;
    authors: Author[];
    size: number;
    color: string;
}

export const ARTICLES_DATA:ArticleOfList[] = [
    {
        paperId: 'd8e49199939494b41ac30fd2672c05cd8cf3546b' ,
        title: 'A Survey of IoT Applications in Blockchain Systems',
        abstract: "Internet of Things (IoT) has gain the importance with the growing applications in the fields of ubiquitous and context-aware computing. In IoT, anything can be a portion of it, whether it is unintelligent objects or sensor nodes; thus extremely different kinds of services can be developed. In this regard, data storage, resource management, service creation and discovery, and resource and power management would facilitate advanced mechanism and much better infrastructure. Cloud computing and fog computing play an important role when the quantity of data and information IoT are critical. Thus, it would not be potential for standalone strength forced IoT to handle. Cloud of things is an integration of IoT with cloud computing or fog computing which can aid to realize the objectives of evolving IoT and future Internet. Fog computing is an expansion to the notion of cloud computing to the network brim, making it suitable for IoT and other implementations that need real-time and fundamental interactions. Regardless of many virtually and services unlimited resources presented by cloud-like intelligent building monitoring and others, it yet countenances various difficulties when interfering many smart things in human’s life. Mobility, response time, and location consciousness are the most prominent problems. Fog and mobile edge computing have been established, to get rid of these difficulties of cloud computing. In this article, we suggest a novel framework based on computer propped diagnosis and IoT to detect and observe type-2 diabetes patients. The recommended healthcare system aims to obtain a better accuracy of diagnosis with mysterious data. The overall experimental results indicate the validity and robustness of our proposed algorithms."
        ,venue: 'ACM Comput. Surv.',
        year: 2020,
        authors: [
            {authorId: '1401735975', name: 'Mohamed Abdel-Basset'},
            {authorId: '10148761', name: 'Gunasekaran Manogaran'},
            {authorId: '51218677', name: 'Abduallah Gamal'},
            {authorId: '2964485', name: 'Victor Chang'}
        ],
        fieldsOfStudy: ['Computer Science'],
        influentialCitationCount: 1,
        isOpenAccess: false
    }
    ,{
        paperId: '893644d781fcbcad807f97a8494c14f66c0684e5',
        title: 'A Novel Intelligent Medical Decision Support Model Based on Soft Computing and IoT',
        abstract: "Internet of Things (IoT) has gain the importance with the growing applications in the fields of ubiquitous and context-aware computing. In IoT, anything can be a portion of it, whether it is unintelligent objects or sensor nodes; thus extremely different kinds of services can be developed. In this regard, data storage, resource management, service creation and discovery, and resource and power management would facilitate advanced mechanism and much better infrastructure. Cloud computing and fog computing play an important role when the quantity of data and information IoT are critical. Thus, it would not be potential for standalone strength forced IoT to handle. Cloud of things is an integration of IoT with cloud computing or fog computing which can aid to realize the objectives of evolving IoT and future Internet. Fog computing is an expansion to the notion of cloud computing to the network brim, making it suitable for IoT and other implementations that need real-time and fundamental interactions. Regardless of many virtually and services unlimited resources presented by cloud-like intelligent building monitoring and others, it yet countenances various difficulties when interfering many smart things in human’s life. Mobility, response time, and location consciousness are the most prominent problems. Fog and mobile edge computing have been established, to get rid of these difficulties of cloud computing. In this article, we suggest a novel framework based on computer propped diagnosis and IoT to detect and observe type-2 diabetes patients. The recommended healthcare system aims to obtain a better accuracy of diagnosis with mysterious data. The overall experimental results indicate the validity and robustness of our proposed algorithms."
        ,venue: 'IEEE Internet of Things Journal',
        year: 2020,
        authors: [
            {authorId: '2972928', name: 'Naser Hossein Motlagh'},
            {authorId: '1580864830', name: 'Mahsa Mohammadrezaei'},
            {authorId: '39889166', name: 'J. Hunt'},
            {authorId: '47772997', name: 'Behnam Zakeri'}
        ],
        fieldsOfStudy: ['Computer Science'],
        influentialCitationCount: 2,
        isOpenAccess: true
    }
    ,{
        paperId: 'e6e1989b2df588a6ece0e4dd520f34b20ac5cf14',
        title: 'Internet of Things (IoT) and the Energy Sector',
        abstract: "Integration of renewable energy and optimization of energy use are key enablers of sustainable energy transitions and mitigating climate change. Modern technologies such the Internet of Things (IoT) offer a wide number of applications in the energy sector, i.e, in energy supply, transmission and distribution, and demand. IoT can be employed for improving energy efficiency, increasing the share of renewable energy, and reducing environmental impacts of the energy use. This paper reviews the existing literature on the application of IoT in in energy systems, in general, and in the context of smart grids particularly. Furthermore, we discuss enabling technologies of IoT, including cloud computing and different platforms for data analysis. Furthermore, we review challenges of deploying IoT in the energy sector, including privacy and security, with some solutions to these challenges such as blockchain technology. This survey provides energy policy-makers, energy economists, and managers with an overview of the role of IoT in optimization of energy systems."
        ,venue: '',
        year: 2020,
        authors: [
            { authorId: '2972928', name: 'Naser Hossein Motlagh'},
            {authorId: '1580864830', name: 'Mahsa Mohammadrezaei'},
            {authorId: '39889166', name: 'J. Hunt'},
            {authorId: '47772997', name: 'Behnam Zakeri'}
        ],
        fieldsOfStudy: ['Computer Science'],
        influentialCitationCount: 2,
        isOpenAccess: true
    }
    ,{
        paperId: 'd315ffc3fcaafd33edf15abd4ceb4130d93f5917',
        title: 'An overview of Internet of Things (IoT): Architectural aspects, challenges, and protocols',
        abstract: "Understanding of any computing environment requires familiarity with its underlying technologies. Internet of Things (IoT), being a new era of computing in the digital world, aims for the development of large number of smart devices that would support a variety of applications and services. These devices are resource‐constrained, and the services they would provide are going to impose specific requirements, among which security is the most prominent one. Therefore, in order to comprehend and conform these requirements, there is a need to illuminate the underlying architecture of IoT and its associated elements. This comprehensive survey focuses on the security architecture of IoT and provides a detailed taxonomy of major challenges associated with the field and the key technologies, including Radio Frequency Identification (RFID) and Wireless Sensor Networks (WSN), that are enabling factors in the development of IoT. The paper also discusses some of the protocols suitable for IoT infrastructure and open source tools and platforms for its development. Finally, a brief outline of major open issues, along with their potential solutions and future research directions, is given."
        ,venue: 'Concurr. Comput. Pract. Exp.',
        year: 2018,
        fieldsOfStudy: ['Computer Science'],
        influentialCitationCount: 2,
        isOpenAccess: false,
        authors:[
            {authorId: '144901889', name: 'B. Gupta'},
            {authorId: '51359574', name: 'Megha Quamara'},
        ]
    }
    ,{
        paperId: '3d66e3e38a79363282de3af36c8ee602075f406e',
        title: 'Machine Learning for Resource Management in Cellul…otentials, Current Solutions, and Open Challenges',
        abstract: "Internet-of-Things (IoT) refers to a massively heterogeneous network formed through smart devices connected to the Internet. In the wake of disruptive IoT with a huge amount and variety of data, Machine Learning (ML) and Deep Learning (DL) mechanisms will play a pivotal role to bring intelligence to the IoT networks. Among other aspects, ML and DL can play an essential role in addressing the challenges of resource management in large-scale IoT networks. In this article, we conduct a systematic and in-depth survey of the ML- and DL-based resource management mechanisms in cellular wireless and IoT networks. We start with the challenges of resource management in cellular IoT and low-power IoT networks, review the traditional resource management mechanisms for IoT networks, and motivate the use of ML and DL techniques for resource management in these networks. Then, we provide a comprehensive survey of the existing ML- and DL-based resource management techniques in wireless IoT networks and the techniques specifically designed for HetNets, MIMO and D2D communications, and NOMA networks. To this end, we also identify the future research directions in using ML and DL for resource allocation and management in IoT networks."
        ,venue: 'IEEE Communications Surveys & Tutorials',
        year: 2019,
        fieldsOfStudy: ['Computer Science', 'Engineering'],
        influentialCitationCount: 3,
        isOpenAccess: true,
        authors:[
            {authorId: '73882549', name: 'Fatima Hussain'},
            {authorId: '1682336', name: 'Syed Ali Hassan'},
            {authorId: '2225364', name: 'R. Hussain'},
            {authorId: '144158811', name: 'E. Hossain'},
        ]
    }
    ,{
        paperId: 'c7adada4a65b139cb2cdcef0d57777797809fb52',
        title: 'IoT Privacy and Security: Challenges and Solutions',
        abstract: "Privacy and security are among the significant challenges of the Internet of Things (IoT). Improper device updates, lack of efficient and robust security protocols, user unawareness, and famous active device monitoring are among the challenges that IoT is facing. In this work, we are exploring the background of IoT systems and security measures, and identifying (a) different security and privacy issues, (b) approaches used to secure the components of IoT-based environments and systems, (c) existing security solutions, and (d) the best privacy models necessary and suitable for different layers of IoT driven applications. In this work, we proposed a new IoT layered model: generic and stretched with the privacy and security components and layers identification. The proposed cloud/edge supported IoT system is implemented and evaluated. The lower layer represented by the IoT nodes generated from the Amazon Web Service (AWS) as Virtual Machines. The middle layer (edge) implemented as a Raspberry Pi 4 hardware kit with support of the Greengrass Edge Environment in AWS. We used the cloud-enabled IoT environment in AWS to implement the top layer (the cloud). The security protocols and critical management sessions were between each of these layers to ensure the privacy of the users’ information. We implemented security certificates to allow data transfer between the layers of the proposed cloud/edge enabled IoT model. Not only is the proposed system model eliminating possible security vulnerabilities, but it also can be used along with the best security techniques to countermeasure the cybersecurity threats facing each one of the layers; cloud, edge, and IoT."
        ,venue: '',
        year: 2020,
        fieldsOfStudy: ['Computer Science'],
        influentialCitationCount: 0,
        isOpenAccess: true,
        authors:[
            {authorId: '31167976', name: 'L. Tawalbeh'},
            {authorId: '7227946', name: 'Fadi Muheidat'},
            {authorId: '1470738223', name: 'Mais Tawalbeh'},
            {authorId: '3146635', name: 'Muhannad Quwaider'}
        ]
    }
    ,{
        paperId: '8d208c08c9fea2793085a6da625b8e4f5ebe7695',
        title: 'A Survey on IoT Security: Application Areas, Security Threats, and Solution Architectures',
        abstract: "The Internet of Things (IoT) is the next era of communication. Using the IoT, physical objects can be empowered to create, receive, and exchange data in a seamless manner. Various IoT applications focus on automating different tasks and are trying to empower the inanimate physical objects to act without any human intervention. The existing and upcoming IoT applications are highly promising to increase the level of comfort, efficiency, and automation for the users. To be able to implement such a world in an ever-growing fashion requires high security, privacy, authentication, and recovery from attacks. In this regard, it is imperative to make the required changes in the architecture of the IoT applications for achieving end-to-end secure IoT environments. In this paper, a detailed review of the security-related challenges and sources of threat in the IoT applications is presented. After discussing the security issues, various emerging and existing technologies focused on achieving a high degree of trust in the IoT applications are discussed. Four different technologies, blockchain, fog computing, edge computing, and machine learning, to increase the level of security in IoT are discussed."
        ,venue: 'IEEE Access',
        year: 2019,
        fieldsOfStudy: ['Computer Science'],
        influentialCitationCount: 17,
        isOpenAccess: false,
        authors:[
            {authorId: '150331642', name: 'Vikas Hassija'},
            {authorId: '3185174', name: 'V. Chamola'},
            {authorId: '5265167', name: 'V. Saxena'},
            {authorId: '150076442', name: 'Divyansh Jain'},
            {authorId: '150259972', name: 'Pranav Goyal'},
            {authorId: '48440849', name: 'B. Sikdar'},
            {authorId: '112838836', name: 'Zhong Fan'}
        ]

    }
    ,{
        paperId: '60e847cc63bda02cfe9b887e39746da410c56d50',
        title: 'Towards Workload Balancing in Fog Computing Empowered IoT',
        abstract: "As latency is the key performance metric for IoT applications, fog nodes co-located with cellular base stations can move the computing resources close to IoT devices. Therefore, data flows of IoT devices can be offloaded to fog nodes in their proximity, instead of the remote cloud, for processing. However, the latency of data flows in IoT devices consist of both the communications latency and computing latency. Owing to the spatial and temporal dynamics of IoT device distributions, some BSs and fog nodes are lightly loaded, while others, which may be overloaded, may incur congestion. Thus, the traffic load allocation among base stations (BSs) and computing load allocation among fog nodes affect the communications latency and computing latency of data flows, respectively. To solve this problem, we propose a workload balancing scheme in a fog network to minimize the latency of data flows in the communications and processing procedures by associating IoT devices to suitable BSs. We further prove the convergence and the optimality of the proposed workload balancing scheme. Through extensive simulations, we have compared the performance of the proposed load balancing scheme with other schemes and verified its advantages for fog networking."
        ,venue: 'IEEE Transactions on Network Science and Engineering',
        year: 2020,
        fieldsOfStudy: ['Computer Science'],
        influentialCitationCount: 7,
        isOpenAccess: true,
        authors:[
            {authorId: '39110928', name: 'Q. Fan'},
            {authorId: '145464035', name: 'N. Ansari'}
        ]
    }
    ,{
        paperId: '30d65fbc8d71ac202ee8d7d5f0e58c63a6c6a957',
        title: 'Anomaly Detection for IoT Time-Series Data: A Survey',
        abstract: "Anomaly detection is a problem with applications for a wide variety of domains; it involves the identification of novel or unexpected observations or sequences within the data being captured. The majority of current anomaly detection methods are highly specific to the individual use case, requiring expert knowledge of the method as well as the situation to which it is being applied. The Internet of Things (IoT) as a rapidly expanding field offers many opportunities for this type of data analysis to be implemented, however, due to the nature of the IoT, this may be difficult. This review provides a background on the challenges which may be encountered when applying anomaly detection techniques to IoT data, with examples of applications for the IoT anomaly detection taken from the literature. We discuss a range of approaches that have been developed across a variety of domains, not limited to IoT due to the relative novelty of this application. Finally, we summarize the current challenges being faced in the anomaly detection domain with a view to identifying potential research opportunities for the future."
        ,venue: 'IEEE Internet of Things Journal',
        year: 2020,
        fieldsOfStudy: ['Computer Science'],
        influentialCitationCount: 6,
        isOpenAccess: true,
        authors:[
            {authorId: '2070658710', name: 'A. Cook'},
            {authorId: '146822738', name: 'G. Misirli'},
            {authorId: '112838836', name: 'Zhong Fan'}
        ]
    }
    ,{
        paperId: 'd5bf8c0305acfce56a6265aeea4ad717bda6d791',
        title: 'Security and Privacy for Green IoT-Based Agriculture: Review, Blockchain Solutions, and Challenges',
        abstract: "This paper presents research challenges on security and privacy issues in the field of green IoT-based agriculture. We start by describing a four-tier green IoT-based agriculture architecture and summarizing the existing surveys that deal with smart agriculture. Then, we provide a classification of threat models against green IoT-based agriculture into five categories, including, attacks against privacy, authentication, confidentiality, availability, and integrity properties. Moreover, we provide a taxonomy and a side-by-side comparison of the state-of-the-art methods toward secure and privacy-preserving technologies for IoT applications and how they will be adapted for green IoT-based agriculture. In addition, we analyze the privacy-oriented blockchain-based solutions as well as consensus algorithms for IoT applications and how they will be adapted for green IoT-based agriculture. Based on the current survey, we highlight open research challenges and discuss possible future research directions in the security and privacy of green IoT-based agriculture."
        ,venue: 'IEEE Access',
        year: 2020,
        fieldsOfStudy: ['Computer Science'],
        influentialCitationCount: 3,
        isOpenAccess: true,
        authors:[
            {authorId: '2864573', name: 'M. Ferrag'},
            {authorId: '1731449', name: 'Lei Shu'},
            {authorId: '2150440207', name: 'Xing Yang'},
            {authorId: '2752784', name: 'A. Derhab'},
            {authorId: '3001662', name: 'L. Maglaras'}
        ]
    }
];

export const ARTICLES_LINKS_BY_AUTHORS:any = [
    {
        source: "e6e1989b2df588a6ece0e4dd520f34b20ac5cf14",
        target: "893644d781fcbcad807f97a8494c14f66c0684e5",
        type: "AUTHOR",
        value: {authorId: '47772997', name: 'Behnam Zakeri'}
    },
    {
        source: "e6e1989b2df588a6ece0e4dd520f34b20ac5cf14",
        target: "893644d781fcbcad807f97a8494c14f66c0684e5",
        type: "AUTHOR",
        value: {authorId: '39889166', name: 'J. Hunt'},
    },
    {
        source: "e6e1989b2df588a6ece0e4dd520f34b20ac5cf14",
        target: "893644d781fcbcad807f97a8494c14f66c0684e5",
        type: "AUTHOR",
        value: {authorId: '1580864830', name: 'Mahsa Mohammadrezaei'}
    },
    {
        source: "e6e1989b2df588a6ece0e4dd520f34b20ac5cf14",
        target: "893644d781fcbcad807f97a8494c14f66c0684e5",
        type: "AUTHOR",
        value: {authorId: '47772997', name: 'Behnam Zakeri'}
    },
    {
        source: "30d65fbc8d71ac202ee8d7d5f0e58c63a6c6a957",
        target: "8d208c08c9fea2793085a6da625b8e4f5ebe7695",
        type: "AUTHOR",
        value: {authorId: '112838836', name: 'Zhong Fan'}
    }
];

export const CLUSTERS: Array<Cluster> = [
    {
        article: ARTICLES_DATA[0],
        size: 10,
        color: "#B0C4DE"
    },
    {
        article: ARTICLES_DATA[1],
        size: 10,
        color: "#B0C4DE"
    },
    {
        article: ARTICLES_DATA[2],
        size: 10,
        color: "#B0C4DE"
    },
    {
        article: ARTICLES_DATA[3],
        size: 10,
        color: "#B0C4DE"
    },
    {
        article: ARTICLES_DATA[4],
        size: 10,
        color: "#B0C4DE"
    },
    {
        article: ARTICLES_DATA[5],
        size: 10,
        color: "#B0C4DE"
    },
    {
        article: ARTICLES_DATA[6],
        size: 10,
        color: "#B0C4DE"
    },
    {
        article: ARTICLES_DATA[7],
        size: 10,
        color: "#B0C4DE"
    },
    {
        article: ARTICLES_DATA[8],
        size: 10,
        color: "#B0C4DE"
    },
    {
        article: ARTICLES_DATA[9],
        size: 10,
        color: "#B0C4DE"
    },
];

export const ARTICLES_NODES_AUTHORS = [
    {
        paperId: ARTICLES_DATA[0].paperId,
        authors: ARTICLES_DATA[0].authors,
        color: "#7B68EE",
        size: 2,
    },
    {
        paperId: ARTICLES_DATA[1].paperId,
        authors: ARTICLES_DATA[1].authors,
        color: "#7B68EE",
        size: 2,
    },
    {
        paperId: ARTICLES_DATA[2].paperId,
        authors: ARTICLES_DATA[2].authors,
        color: "#7B68EE",
        size: 2,
    },
    {
        paperId: ARTICLES_DATA[3].paperId,
        authors: ARTICLES_DATA[3].authors,
        color: "#7B68EE",
        size: 2,
    },
    {
        paperId: ARTICLES_DATA[4].paperId,
        authors: ARTICLES_DATA[4].authors,
        color: "#7B68EE",
        size: 2,
    },
    {
        paperId: ARTICLES_DATA[5].paperId,
        authors: ARTICLES_DATA[5].authors,
        color: "#7B68EE",
        size: 2,
    },
    {
        paperId: ARTICLES_DATA[6].paperId,
        authors: ARTICLES_DATA[6].authors,
        color: "#7B68EE",
        size: 2,
    },
    {
        paperId: ARTICLES_DATA[7].paperId,
        authors: ARTICLES_DATA[7].authors,
        color: "#7B68EE",
        size: 2,
    },
    {
        paperId: ARTICLES_DATA[8].paperId,
        authors: ARTICLES_DATA[8].authors,
        color: "#7B68EE",
        size: 2,
    },
    {
        paperId: ARTICLES_DATA[9].paperId,
        authors: ARTICLES_DATA[9].authors,
        color: "#7B68EE",
        size: 2,
    },
];

