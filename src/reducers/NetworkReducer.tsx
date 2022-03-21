// NETWORK STATE MANAGEMENT REDUCER
import {customLinks, customNodes, NetworkAction} from "../actions/NetworkAction";

export interface INetwork {
    nodes: Array<any>,
    links: Array<any>,
}

export interface NetworkState {
    network : INetwork ;
    filteredNetwork: INetwork | [];
    connectionType: string;
}
// TODO: MAKE EFFECT ON:
// 1. SIZE OF NODE - by some rank?
// 2. COLOR OF NODE - by categories to categories color
// 3. SIZE OF CONNECTION - size ++ on each connection

const initState = {
    network: {
        // nodes: [
        //     {
        //         id: "d8e49199939494b41ac30fd2672c05cd8cf3546b",
        //         isClusterNode: true,
        //         name: "project, idea, user",
        //         size: 10,
        //         color: "#B0C4DE",
        //
        //         paperId: 'd8e49199939494b41ac30fd2672c05cd8cf3546b' ,
        //         title: 'A Survey of IoT Applications in Blockchain Systems',
        //         abstract: "Internet of Things (IoT) has gain the importance with the growing applications in the fields of ubiquitous and context-aware computing. In IoT, anything can be a portion of it, whether it is unintelligent objects or sensor nodes; thus extremely different kinds of services can be developed. In this regard, data storage, resource management, service creation and discovery, and resource and power management would facilitate advanced mechanism and much better infrastructure. Cloud computing and fog computing play an important role when the quantity of data and information IoT are critical. Thus, it would not be potential for standalone strength forced IoT to handle. Cloud of things is an integration of IoT with cloud computing or fog computing which can aid to realize the objectives of evolving IoT and future Internet. Fog computing is an expansion to the notion of cloud computing to the network brim, making it suitable for IoT and other implementations that need real-time and fundamental interactions. Regardless of many virtually and services unlimited resources presented by cloud-like intelligent building monitoring and others, it yet countenances various difficulties when interfering many smart things in human’s life. Mobility, response time, and location consciousness are the most prominent problems. Fog and mobile edge computing have been established, to get rid of these difficulties of cloud computing. In this article, we suggest a novel framework based on computer propped diagnosis and IoT to detect and observe type-2 diabetes patients. The recommended healthcare system aims to obtain a better accuracy of diagnosis with mysterious data. The overall experimental results indicate the validity and robustness of our proposed algorithms."
        //         ,venue: 'ACM Comput. Surv.',
        //         year: 2020,
        //         authors: [
        //             {authorId: '1401735975', name: 'Mohamed Abdel-Basset'},
        //             {authorId: '10148761', name: 'Gunasekaran Manogaran'},
        //             {authorId: '51218677', name: 'Abduallah Gamal'},
        //             {authorId: '2964485', name: 'Victor Chang'}
        //         ],
        //         fieldsOfStudy: ['Computer Science'],
        //         influentialCitationCount: 1,
        //         isOpenAccess: false
        //     },
        //     {
        //         id: "893644d781fcbcad807f97a8494c14f66c0684e5",
        //         isClusterNode: true,
        //         name: "like,source,share",
        //         size: 10,
        //         color: "#B0C4DE",
        //
        //         paperId: '893644d781fcbcad807f97a8494c14f66c0684e5',
        //         title: 'A Novel Intelligent Medical Decision Support Model Based on Soft Computing and IoT',
        //         abstract: "Internet of Things (IoT) has gain the importance with the growing applications in the fields of ubiquitous and context-aware computing. In IoT, anything can be a portion of it, whether it is unintelligent objects or sensor nodes; thus extremely different kinds of services can be developed. In this regard, data storage, resource management, service creation and discovery, and resource and power management would facilitate advanced mechanism and much better infrastructure. Cloud computing and fog computing play an important role when the quantity of data and information IoT are critical. Thus, it would not be potential for standalone strength forced IoT to handle. Cloud of things is an integration of IoT with cloud computing or fog computing which can aid to realize the objectives of evolving IoT and future Internet. Fog computing is an expansion to the notion of cloud computing to the network brim, making it suitable for IoT and other implementations that need real-time and fundamental interactions. Regardless of many virtually and services unlimited resources presented by cloud-like intelligent building monitoring and others, it yet countenances various difficulties when interfering many smart things in human’s life. Mobility, response time, and location consciousness are the most prominent problems. Fog and mobile edge computing have been established, to get rid of these difficulties of cloud computing. In this article, we suggest a novel framework based on computer propped diagnosis and IoT to detect and observe type-2 diabetes patients. The recommended healthcare system aims to obtain a better accuracy of diagnosis with mysterious data. The overall experimental results indicate the validity and robustness of our proposed algorithms."
        //         ,venue: 'IEEE Internet of Things Journal',
        //         year: 2020,
        //         authors: [
        //             {authorId: '2972928', name: 'Naser Hossein Motlagh'},
        //             {authorId: '1580864830', name: 'Mahsa Mohammadrezaei'},
        //             {authorId: '39889166', name: 'J. Hunt'},
        //             {authorId: '47772997', name: 'Behnam Zakeri'}
        //         ],
        //         fieldsOfStudy: ['Computer Science'],
        //         influentialCitationCount: 2,
        //         isOpenAccess: true
        //     },
        //     {
        //         id: "e6e1989b2df588a6ece0e4dd520f34b20ac5cf14",
        //         isClusterNode: true,
        //         name: "zapier,help,need",
        //         size: 10,
        //         color: "#7B68EE",
        //
        //         paperId: 'e6e1989b2df588a6ece0e4dd520f34b20ac5cf14',
        //         title: 'Internet of Things (IoT) and the Energy Sector',
        //         abstract: "Integration of renewable energy and optimization of energy use are key enablers of sustainable energy transitions and mitigating climate change. Modern technologies such the Internet of Things (IoT) offer a wide number of applications in the energy sector, i.e, in energy supply, transmission and distribution, and demand. IoT can be employed for improving energy efficiency, increasing the share of renewable energy, and reducing environmental impacts of the energy use. This paper reviews the existing literature on the application of IoT in in energy systems, in general, and in the context of smart grids particularly. Furthermore, we discuss enabling technologies of IoT, including cloud computing and different platforms for data analysis. Furthermore, we review challenges of deploying IoT in the energy sector, including privacy and security, with some solutions to these challenges such as blockchain technology. This survey provides energy policy-makers, energy economists, and managers with an overview of the role of IoT in optimization of energy systems."
        //         ,venue: '',
        //         year: 2020,
        //         authors: [
        //             { authorId: '2972928', name: 'Naser Hossein Motlagh'},
        //             {authorId: '1580864830', name: 'Mahsa Mohammadrezaei'},
        //             {authorId: '39889166', name: 'J. Hunt'},
        //             {authorId: '47772997', name: 'Behnam Zakeri'}
        //         ],
        //         fieldsOfStudy: ['Computer Science'],
        //         influentialCitationCount: 2,
        //         isOpenAccess: true
        //     },
        //     {
        //         id: "d315ffc3fcaafd33edf15abd4ceb4130d93f5917",
        //         isClusterNode: true,
        //         name: "citizen,app,engage",
        //         size: 10,
        //         color: "#7B68EE",
        //
        //         paperId: 'd315ffc3fcaafd33edf15abd4ceb4130d93f5917',
        //         title: 'An overview of Internet of Things (IoT): Architectural aspects, challenges, and protocols',
        //         abstract: "Understanding of any computing environment requires familiarity with its underlying technologies. Internet of Things (IoT), being a new era of computing in the digital world, aims for the development of large number of smart devices that would support a variety of applications and services. These devices are resource‐constrained, and the services they would provide are going to impose specific requirements, among which security is the most prominent one. Therefore, in order to comprehend and conform these requirements, there is a need to illuminate the underlying architecture of IoT and its associated elements. This comprehensive survey focuses on the security architecture of IoT and provides a detailed taxonomy of major challenges associated with the field and the key technologies, including Radio Frequency Identification (RFID) and Wireless Sensor Networks (WSN), that are enabling factors in the development of IoT. The paper also discusses some of the protocols suitable for IoT infrastructure and open source tools and platforms for its development. Finally, a brief outline of major open issues, along with their potential solutions and future research directions, is given."
        //         ,venue: 'Concurr. Comput. Pract. Exp.',
        //         year: 2018,
        //         fieldsOfStudy: ['Computer Science'],
        //         influentialCitationCount: 2,
        //         isOpenAccess: false,
        //         authors:[
        //             {authorId: '144901889', name: 'B. Gupta'},
        //             {authorId: '51359574', name: 'Megha Quamara'},
        //         ]
        //     },
        //     {
        //         id: "3d66e3e38a79363282de3af36c8ee602075f406e",
        //         isClusterNode: true,
        //         name: "customer,usage,expose",
        //         size: 10,
        //         color: "#7B68EE",
        //
        //         paperId: '3d66e3e38a79363282de3af36c8ee602075f406e',
        //         title: 'Machine Learning for Resource Management in Cellul…otentials, Current Solutions, and Open Challenges',
        //         abstract: "Internet-of-Things (IoT) refers to a massively heterogeneous network formed through smart devices connected to the Internet. In the wake of disruptive IoT with a huge amount and variety of data, Machine Learning (ML) and Deep Learning (DL) mechanisms will play a pivotal role to bring intelligence to the IoT networks. Among other aspects, ML and DL can play an essential role in addressing the challenges of resource management in large-scale IoT networks. In this article, we conduct a systematic and in-depth survey of the ML- and DL-based resource management mechanisms in cellular wireless and IoT networks. We start with the challenges of resource management in cellular IoT and low-power IoT networks, review the traditional resource management mechanisms for IoT networks, and motivate the use of ML and DL techniques for resource management in these networks. Then, we provide a comprehensive survey of the existing ML- and DL-based resource management techniques in wireless IoT networks and the techniques specifically designed for HetNets, MIMO and D2D communications, and NOMA networks. To this end, we also identify the future research directions in using ML and DL for resource allocation and management in IoT networks."
        //         ,venue: 'IEEE Communications Surveys & Tutorials',
        //         year: 2019,
        //         fieldsOfStudy: ['Computer Science', 'Engineering'],
        //         influentialCitationCount: 3,
        //         isOpenAccess: true,
        //         authors:[
        //             {authorId: '73882549', name: 'Fatima Hussain'},
        //             {authorId: '1682336', name: 'Syed Ali Hassan'},
        //             {authorId: '2225364', name: 'R. Hussain'},
        //             {authorId: '144158811', name: 'E. Hossain'},
        //         ]
        //     }
        // ],
        // nodes:  [
        //     {
        //         "paperId": "a9b901fcd68a3715d5ef186a398476bc1e762b0e",
        //         "title": "Deep Reinforcement Learning for Cyber Security",
        //         "abstract": "The scale of Internet-connected systems has increased considerably, and these systems are being exposed to cyberattacks more than ever. The complexity and dynamics of cyberattacks require protecting mechanisms to be responsive, adaptive, and scalable. Machine learning, or more specifically deep reinforcement learning (DRL), methods have been proposed widely to address these issues. By incorporating deep learning into traditional RL, DRL is highly capable of solving complex, dynamic, and especially high-dimensional cyber defense problems. This article presents a survey of DRL approaches developed for cyber security. We touch on different vital aspects, including DRL-based security methods for cyber-physical systems, autonomous intrusion detection techniques, and multiagent DRL-based game theory simulations for defense strategies against cyberattacks. Extensive discussions and future research directions on DRL-based cyber security are also given. We expect that this comprehensive review provides the foundations for and facilitates future studies on exploring the potential of emerging DRL to cope with increasingly complex cyber security problems.",
        //         "year": 2019,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science",
        //             "Mathematics",
        //             "Medicine"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "32579488",
        //                 "name": "T. Nguyen"
        //             },
        //             {
        //                 "authorId": "1805668",
        //                 "name": "V. Reddi"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Artificial intelligence",
        //                 "topicId": "8286",
        //                 "url": "https://www.semanticscholar.org/topic/8286"
        //             },
        //             {
        //                 "topic": "Adversary (cryptography)",
        //                 "topicId": "5369",
        //                 "url": "https://www.semanticscholar.org/topic/5369"
        //             },
        //             {
        //                 "topic": "SuicideGirls",
        //                 "topicId": "2411494",
        //                 "url": "https://www.semanticscholar.org/topic/2411494"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "a0888955ad4fa163e8670ddfc194c381953b9d26",
        //         "title": "Differential Privacy Techniques for Cyber Physical Systems: A Survey",
        //         "abstract": "Modern cyber physical systems (CPSs) has widely being used in our daily lives because of development of information and communication technologies (ICT). With the provision of CPSs, the security and privacy threats associated to these systems are also increasing. Passive attacks are being used by intruders to get access to private information of CPSs. In order to make CPSs data more secure, certain privacy preservation strategies such as encryption, and k-anonymity have been presented in the past. However, with the advances in CPSs architecture, these techniques also need certain modifications. Meanwhile, differential privacy emerged as an efficient technique to protect CPSs data privacy. In this paper, we present a comprehensive survey of differential privacy techniques for CPSs. In particular, we survey the application and implementation of differential privacy in four major applications of CPSs named as energy systems, transportation systems, healthcare and medical systems, and industrial Internet of things (IIoT). Furthermore, we present open issues, challenges, and future research direction for differential privacy techniques for CPSs. This survey can serve as basis for the development of modern differential privacy techniques to address various problems and data privacy scenarios of CPSs.",
        //         "year": 2018,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "145884586",
        //                 "name": "M. Hassan"
        //             },
        //             {
        //                 "authorId": "2615259",
        //                 "name": "M. H. Rehmani"
        //             },
        //             {
        //                 "authorId": "1699149190",
        //                 "name": "Jinjun Chen"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Network topology",
        //                 "topicId": "5812",
        //                 "url": "https://www.semanticscholar.org/topic/5812"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "Radio jamming",
        //                 "topicId": "713856",
        //                 "url": "https://www.semanticscholar.org/topic/713856"
        //             },
        //             {
        //                 "topic": "Network switch",
        //                 "topicId": "7961",
        //                 "url": "https://www.semanticscholar.org/topic/7961"
        //             },
        //             {
        //                 "topic": "Simulation",
        //                 "topicId": "194",
        //                 "url": "https://www.semanticscholar.org/topic/194"
        //             },
        //             {
        //                 "topic": "Sensor",
        //                 "topicId": "1117",
        //                 "url": "https://www.semanticscholar.org/topic/1117"
        //             },
        //             {
        //                 "topic": "Attack model",
        //                 "topicId": "20926",
        //                 "url": "https://www.semanticscholar.org/topic/20926"
        //             },
        //             {
        //                 "topic": "Kalman filter",
        //                 "topicId": "19882",
        //                 "url": "https://www.semanticscholar.org/topic/19882"
        //             },
        //             {
        //                 "topic": "Chi-squared target models",
        //                 "topicId": "3481681",
        //                 "url": "https://www.semanticscholar.org/topic/3481681"
        //             },
        //             {
        //                 "topic": "Dynamical systems theory",
        //                 "topicId": "52937",
        //                 "url": "https://www.semanticscholar.org/topic/52937"
        //             },
        //             {
        //                 "topic": "Fault detection and isolation",
        //                 "topicId": "8084",
        //                 "url": "https://www.semanticscholar.org/topic/8084"
        //             },
        //             {
        //                 "topic": "Numerical method",
        //                 "topicId": "12927",
        //                 "url": "https://www.semanticscholar.org/topic/12927"
        //             },
        //             {
        //                 "topic": "Real-time transcription",
        //                 "topicId": "763488",
        //                 "url": "https://www.semanticscholar.org/topic/763488"
        //             },
        //             {
        //                 "topic": "Real-time clock",
        //                 "topicId": "121831",
        //                 "url": "https://www.semanticscholar.org/topic/121831"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "516415a995fd1514abdc246549871e00e93f8601",
        //         "title": "A Private and Efficient Mechanism for Data Uploading in Smart Cyber-Physical Systems",
        //         "abstract": "To provide fine-grained access to different dimensions of the physical world, the data uploading in smart cyber-physical systems suffers novel challenges on both energy conservation and privacy preservation. It is always critical for participants to consume as little energy as possible for data uploading. However, simply pursuing energy efficiency may lead to extreme disclosure of private information, especially when the uploaded contents from participants are more informative than ever. In this article, we propose a novel mechanism for data uploading in smart cyber-physical systems, which considers both energy conservation and privacy preservation. The mechanism preserves privacy by concealing abnormal behaviors of participants, while still achieves an energy-efficient scheme for data uploading by introducing an acceptable number of extra contents. To derive an optimal uploading scheme is proved to be NP-hard. Accordingly, we propose a heuristic algorithm and analyze its effectiveness. The evaluation results towards a real-world dataset demonstrate that the performance of the proposed algorithm is comparable with the optimal results.",
        //         "year": 2020,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "144779781",
        //                 "name": "Z. Cai"
        //             },
        //             {
        //                 "authorId": "2117981933",
        //                 "name": "Xu Zheng"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Dependability",
        //                 "topicId": "77401",
        //                 "url": "https://www.semanticscholar.org/topic/77401"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Non-functional requirement",
        //                 "topicId": "27937",
        //                 "url": "https://www.semanticscholar.org/topic/27937"
        //             },
        //             {
        //                 "topic": "Reference architecture",
        //                 "topicId": "245886",
        //                 "url": "https://www.semanticscholar.org/topic/245886"
        //             },
        //             {
        //                 "topic": "Communications protocol",
        //                 "topicId": "5213",
        //                 "url": "https://www.semanticscholar.org/topic/5213"
        //             },
        //             {
        //                 "topic": "Functional requirement",
        //                 "topicId": "14859",
        //                 "url": "https://www.semanticscholar.org/topic/14859"
        //             },
        //             {
        //                 "topic": "Sensor",
        //                 "topicId": "1117",
        //                 "url": "https://www.semanticscholar.org/topic/1117"
        //             },
        //             {
        //                 "topic": "Codependency (Psychology)",
        //                 "topicId": "529645",
        //                 "url": "https://www.semanticscholar.org/topic/529645"
        //             },
        //             {
        //                 "topic": "Human body",
        //                 "topicId": "893",
        //                 "url": "https://www.semanticscholar.org/topic/893"
        //             },
        //             {
        //                 "topic": "benefit",
        //                 "topicId": "131",
        //                 "url": "https://www.semanticscholar.org/topic/131"
        //             },
        //             {
        //                 "topic": "Conflict (Psychology)",
        //                 "topicId": "2704",
        //                 "url": "https://www.semanticscholar.org/topic/2704"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "259b2a045e6d9409804027502f89801e2e670a70",
        //         "title": "Cyber-Physical Systems",
        //         "abstract": "Cyber-Physical Systems (CPS) allow the interaction between two worlds, machines and the internet, by means of a computer-based algorithm tightly coupled with the user. They are typically highly complex and distributed systems. Embedded systems collect and process data (e.g., sensor data) and control the CPS\u2019s mechanic components. Cyber-Physical Systems can be used in a wide range of applications, e.g., aerospace, manufacturing, automotive, chemistry, medicine, entertainment, and energy systems.",
        //         "year": 2019,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Engineering"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "9294306",
        //                 "name": "R. Baheti"
        //             },
        //             {
        //                 "authorId": "144381721",
        //                 "name": "H. Gill"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Nonlinear system",
        //                 "topicId": "5329",
        //                 "url": "https://www.semanticscholar.org/topic/5329"
        //             },
        //             {
        //                 "topic": "Artificial intelligence",
        //                 "topicId": "8286",
        //                 "url": "https://www.semanticscholar.org/topic/8286"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Radial basis function",
        //                 "topicId": "18635",
        //                 "url": "https://www.semanticscholar.org/topic/18635"
        //             },
        //             {
        //                 "topic": "Telecommunications link",
        //                 "topicId": "2265",
        //                 "url": "https://www.semanticscholar.org/topic/2265"
        //             },
        //             {
        //                 "topic": "Control theory",
        //                 "topicId": "3317",
        //                 "url": "https://www.semanticscholar.org/topic/3317"
        //             },
        //             {
        //                 "topic": "Control system",
        //                 "topicId": "80",
        //                 "url": "https://www.semanticscholar.org/topic/80"
        //             },
        //             {
        //                 "topic": "Lyapunov fractal",
        //                 "topicId": "973026",
        //                 "url": "https://www.semanticscholar.org/topic/973026"
        //             },
        //             {
        //                 "topic": "Testbed",
        //                 "topicId": "1705",
        //                 "url": "https://www.semanticscholar.org/topic/1705"
        //             },
        //             {
        //                 "topic": "Learning rule",
        //                 "topicId": "42269",
        //                 "url": "https://www.semanticscholar.org/topic/42269"
        //             },
        //             {
        //                 "topic": "Telecommunications network",
        //                 "topicId": "32720",
        //                 "url": "https://www.semanticscholar.org/topic/32720"
        //             },
        //             {
        //                 "topic": "Internet of things",
        //                 "topicId": "51309",
        //                 "url": "https://www.semanticscholar.org/topic/51309"
        //             },
        //             {
        //                 "topic": "Radial (radio)",
        //                 "topicId": "16338",
        //                 "url": "https://www.semanticscholar.org/topic/16338"
        //             },
        //             {
        //                 "topic": "Differential signaling",
        //                 "topicId": "109578",
        //                 "url": "https://www.semanticscholar.org/topic/109578"
        //             },
        //             {
        //                 "topic": "Computer simulation",
        //                 "topicId": "7425",
        //                 "url": "https://www.semanticscholar.org/topic/7425"
        //             },
        //             {
        //                 "topic": "Artificial neural network",
        //                 "topicId": "6213",
        //                 "url": "https://www.semanticscholar.org/topic/6213"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "059e776cacf87b3ed3f6eb9aa87968247fa68be5",
        //         "title": "Cyber Physical Systems: Design Challenges",
        //         "abstract": "Cyber-Physical Systems (CPS) are integrations of computation and physical processes. Embedded computers and networks monitor and control the physical processes, usually with feedback loops where physical processes affect computations and vice versa. The economic and societal potential of such systems is vastly greater than what has been realized, and major investments are being made worldwide to develop the technology. There are considerable challenges, particularly because the physical components of such systems introduce safety and reliability requirements qualitatively different from those in general- purpose computing. Moreover, physical components are qualitatively different from object-oriented software components. Standard abstractions based on method calls and threads do not work. This paper examines the challenges in designing such systems, and in particular raises the question of whether today's computing and networking technologies provide an adequate foundation for CPS. It concludes that it will not be sufficient to improve design processes, raise the level of abstraction, or verify (formally or otherwise) designs that are built on today's abstractions. To realize the full potential of CPS, we will have to rebuild computing and networking abstractions. These abstractions will have to embrace physical dynamics and computation in a unified way.",
        //         "year": 2008,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1690704",
        //                 "name": "Edward A. Lee"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Deep learning",
        //                 "topicId": "2762",
        //                 "url": "https://www.semanticscholar.org/topic/2762"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Denial-of-service attack",
        //                 "topicId": "10149",
        //                 "url": "https://www.semanticscholar.org/topic/10149"
        //             },
        //             {
        //                 "topic": "Machine learning",
        //                 "topicId": "168",
        //                 "url": "https://www.semanticscholar.org/topic/168"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "Loopholes in Bell test experiments",
        //                 "topicId": "2106504",
        //                 "url": "https://www.semanticscholar.org/topic/2106504"
        //             },
        //             {
        //                 "topic": "Open research",
        //                 "topicId": "1298",
        //                 "url": "https://www.semanticscholar.org/topic/1298"
        //             },
        //             {
        //                 "topic": "Internet of things",
        //                 "topicId": "51309",
        //                 "url": "https://www.semanticscholar.org/topic/51309"
        //             },
        //             {
        //                 "topic": "Osteoporosis, Postmenopausal",
        //                 "topicId": "21109",
        //                 "url": "https://www.semanticscholar.org/topic/21109"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "4e13a8e8ba8d33e15ed037bfca7c651047533990",
        //         "title": "Big data for cyber physical systems in industry 4.0: a survey",
        //         "abstract": "ABSTRACT With the technology development in cyber physical systems and big data, there are huge potential to apply them to achieve personalization and improve resource efficiency in Industry 4.0. As Industry 4.0 is the relatively new concept originated from an advanced manufacturing vision supported by the German government in 2011, there are only several existing surveys on either cyber physical systems or big data in Industry 4.0. In addition, there are much less surveys related to the intersection between cyber physical systems and big data in Industry 4.0. However, cyber physical systems are closely related to big data in nature. For example, cyber physical systems will continuously generate a large amount of data which requires the big data techniques to process and help to improve system scalability, security, and efficiency. Therefore, we conduct this survey to bring more attention to this critical intersection and highlight the future research direction to achieve the fully autonomy in Industry 4.0.",
        //         "year": 2019,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "39466716",
        //                 "name": "Lida Xu"
        //             },
        //             {
        //                 "authorId": "2055791334",
        //                 "name": "Lian Duan"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Upload",
        //                 "topicId": "8561",
        //                 "url": "https://www.semanticscholar.org/topic/8561"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Differential privacy",
        //                 "topicId": "160421",
        //                 "url": "https://www.semanticscholar.org/topic/160421"
        //             },
        //             {
        //                 "topic": "Heuristic (computer science)",
        //                 "topicId": "927",
        //                 "url": "https://www.semanticscholar.org/topic/927"
        //             },
        //             {
        //                 "topic": "Personally identifiable information",
        //                 "topicId": "14269",
        //                 "url": "https://www.semanticscholar.org/topic/14269"
        //             },
        //             {
        //                 "topic": "Two-phase commit protocol",
        //                 "topicId": "180218",
        //                 "url": "https://www.semanticscholar.org/topic/180218"
        //             },
        //             {
        //                 "topic": "NP-hardness",
        //                 "topicId": "4143",
        //                 "url": "https://www.semanticscholar.org/topic/4143"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "ae13dcdc0255617164cae5d2736a1986622be188",
        //         "title": "Artificial Intelligence for Detection, Estimation, and Compensation of Malicious Attacks in Nonlinear Cyber-Physical Systems and Industrial IoT",
        //         "abstract": "This article proposes a hybrid intelligent-classic control approach for reconstruction and compensation of cyber attacks launched on inputs of nonlinear cyber-physical systems (CPS) and industrial Internet of Things systems, which work through shared communication networks. In this article, a class of n-order nonlinear systems is considered as a model of CPS while it is in presence of cyber attacks only in the forward channel. An intelligent-classic control system is developed to compensate cyber-attacks. Neural network (NN) is designed as an intelligent estimator for attack estimation and a classic nonlinear control system based on the variable structure control method is designed to compensate the effect of attacks and control the system performance in tracking applications. In the proposed strategy, nonlinear control theory is applied to guarantee the stability of the system when attacks happen. In this strategy, a Gaussian radial basis function NN is used for online estimation and reconstruction of cyber-attacks launched on the networked system. An adaptation law of the intelligent estimator is derived from a Lyapunov function. Simulation results demonstrate the validity and feasibility of the proposed strategy in car cruise control application as the testbed.",
        //         "year": 2020,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1826533",
        //                 "name": "F. Farivar"
        //             },
        //             {
        //                 "authorId": "2703521",
        //                 "name": "M. S. Haghighi"
        //             },
        //             {
        //                 "authorId": "1390159287",
        //                 "name": "A. Jolfaei"
        //             },
        //             {
        //                 "authorId": "2474250",
        //                 "name": "M. Alazab"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Security awareness",
        //                 "topicId": "119932",
        //                 "url": "https://www.semanticscholar.org/topic/119932"
        //             },
        //             {
        //                 "topic": "Information security",
        //                 "topicId": "12548",
        //                 "url": "https://www.semanticscholar.org/topic/12548"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "0664e0a00a3cdeb4fd518d00b84abb5ccc3a1c57",
        //         "title": "A Survey of Deep Learning Methods for Cyber Security",
        //         "abstract": "This survey paper describes a literature review of deep learning (DL) methods for cyber security applications. A short tutorial-style description of each DL method is provided, including deep autoencoders, restricted Boltzmann machines, recurrent neural networks, generative adversarial networks, and several others. Then we discuss how each of the DL methods is used for security applications. We cover a broad array of attack types including malware, spam, insider threats, network intrusions, false data injection, and malicious domain names used by botnets.",
        //         "year": 2019,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2069999925",
        //                 "name": "Daniel S. Berman"
        //             },
        //             {
        //                 "authorId": "2343019",
        //                 "name": "A. Buczak"
        //             },
        //             {
        //                 "authorId": "3376925",
        //                 "name": "Jeffrey S. Chavis"
        //             },
        //             {
        //                 "authorId": "2382727",
        //                 "name": "C. Corbett"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Internet of things",
        //                 "topicId": "51309",
        //                 "url": "https://www.semanticscholar.org/topic/51309"
        //             },
        //             {
        //                 "topic": "Risk assessment",
        //                 "topicId": "4882",
        //                 "url": "https://www.semanticscholar.org/topic/4882"
        //             },
        //             {
        //                 "topic": "standards characteristics",
        //                 "topicId": "535112",
        //                 "url": "https://www.semanticscholar.org/topic/535112"
        //             },
        //             {
        //                 "topic": "Policy",
        //                 "topicId": "60001",
        //                 "url": "https://www.semanticscholar.org/topic/60001"
        //             },
        //             {
        //                 "topic": "Grounded Theory",
        //                 "topicId": "99558",
        //                 "url": "https://www.semanticscholar.org/topic/99558"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "077ba01bbf641c4e1bb3fe87900b43f557b9d18c",
        //         "title": "Distributed Blockchain-Based Data Protection Framework for Modern Power Systems Against Cyber Attacks",
        //         "abstract": "The cyber security of modern power systems has drawn increasing attention in both academia and industry. Many detection and defense methods for cyber-attacks have therefore been proposed to enhance robustness of modern power systems. In this paper, we propose a new, distributed blockchain-based protection framework to enhance the self-defensive capability of modern power systems against cyber-attacks. We present a comprehensive discussion on how blockchain technology can be used to enhance the robustness and security of the power grid, by using meters as nodes in a distributed network which encapsulates meter measurements as blocks. Effectiveness of the proposed protection framework is demonstrated via simulation experiments on the IEEE-118 benchmark system.",
        //         "year": 2019,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "14773099",
        //                 "name": "Gaoqi Liang"
        //             },
        //             {
        //                 "authorId": "1925006",
        //                 "name": "S. Weller"
        //             },
        //             {
        //                 "authorId": "39321868",
        //                 "name": "F. Luo"
        //             },
        //             {
        //                 "authorId": "10261855",
        //                 "name": "Junhua Zhao"
        //             },
        //             {
        //                 "authorId": "144402926",
        //                 "name": "Z. Dong"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Differential privacy",
        //                 "topicId": "160421",
        //                 "url": "https://www.semanticscholar.org/topic/160421"
        //             },
        //             {
        //                 "topic": "Big data",
        //                 "topicId": "20355",
        //                 "url": "https://www.semanticscholar.org/topic/20355"
        //             },
        //             {
        //                 "topic": "Personally identifiable information",
        //                 "topicId": "14269",
        //                 "url": "https://www.semanticscholar.org/topic/14269"
        //             },
        //             {
        //                 "topic": "Encryption",
        //                 "topicId": "11625",
        //                 "url": "https://www.semanticscholar.org/topic/11625"
        //             },
        //             {
        //                 "topic": "Information privacy",
        //                 "topicId": "90886",
        //                 "url": "https://www.semanticscholar.org/topic/90886"
        //             },
        //             {
        //                 "topic": "Spectral leakage",
        //                 "topicId": "4266",
        //                 "url": "https://www.semanticscholar.org/topic/4266"
        //             },
        //             {
        //                 "topic": "Data mining",
        //                 "topicId": "7837",
        //                 "url": "https://www.semanticscholar.org/topic/7837"
        //             },
        //             {
        //                 "topic": "Extended Validation Certificate",
        //                 "topicId": "748594",
        //                 "url": "https://www.semanticscholar.org/topic/748594"
        //             },
        //             {
        //                 "topic": "Real-time data",
        //                 "topicId": "6523",
        //                 "url": "https://www.semanticscholar.org/topic/6523"
        //             },
        //             {
        //                 "topic": "Real-time locating system",
        //                 "topicId": "811893",
        //                 "url": "https://www.semanticscholar.org/topic/811893"
        //             },
        //             {
        //                 "topic": "Vehicle-to-vehicle",
        //                 "topicId": "129059",
        //                 "url": "https://www.semanticscholar.org/topic/129059"
        //             },
        //             {
        //                 "topic": "Real-time transcription",
        //                 "topicId": "763488",
        //                 "url": "https://www.semanticscholar.org/topic/763488"
        //             },
        //             {
        //                 "topic": "Internet of things",
        //                 "topicId": "51309",
        //                 "url": "https://www.semanticscholar.org/topic/51309"
        //             },
        //             {
        //                 "topic": "Channel (communications)",
        //                 "topicId": "37370",
        //                 "url": "https://www.semanticscholar.org/topic/37370"
        //             },
        //             {
        //                 "topic": "Passive attack",
        //                 "topicId": "678344",
        //                 "url": "https://www.semanticscholar.org/topic/678344"
        //             },
        //             {
        //                 "topic": "Data anonymization",
        //                 "topicId": "44790",
        //                 "url": "https://www.semanticscholar.org/topic/44790"
        //             },
        //             {
        //                 "topic": "Experiment",
        //                 "topicId": "378",
        //                 "url": "https://www.semanticscholar.org/topic/378"
        //             },
        //             {
        //                 "topic": "Scheduling (computing)",
        //                 "topicId": "3439",
        //                 "url": "https://www.semanticscholar.org/topic/3439"
        //             },
        //             {
        //                 "topic": "Adversary (cryptography)",
        //                 "topicId": "5369",
        //                 "url": "https://www.semanticscholar.org/topic/5369"
        //             },
        //             {
        //                 "topic": "Discharger",
        //                 "topicId": "679008",
        //                 "url": "https://www.semanticscholar.org/topic/679008"
        //             },
        //             {
        //                 "topic": "Real-time clock",
        //                 "topicId": "121831",
        //                 "url": "https://www.semanticscholar.org/topic/121831"
        //             },
        //             {
        //                 "topic": "Seamless3d",
        //                 "topicId": "4101624",
        //                 "url": "https://www.semanticscholar.org/topic/4101624"
        //             },
        //             {
        //                 "topic": "Foremost",
        //                 "topicId": "41620",
        //                 "url": "https://www.semanticscholar.org/topic/41620"
        //             },
        //             {
        //                 "topic": "Diagram",
        //                 "topicId": "201",
        //                 "url": "https://www.semanticscholar.org/topic/201"
        //             },
        //             {
        //                 "topic": "Case preservation",
        //                 "topicId": "1284567",
        //                 "url": "https://www.semanticscholar.org/topic/1284567"
        //             },
        //             {
        //                 "topic": "Anomaly detection",
        //                 "topicId": "15077",
        //                 "url": "https://www.semanticscholar.org/topic/15077"
        //             },
        //             {
        //                 "topic": "Compaq LTE",
        //                 "topicId": "3613198",
        //                 "url": "https://www.semanticscholar.org/topic/3613198"
        //             },
        //             {
        //                 "topic": "Internet privacy",
        //                 "topicId": "48819",
        //                 "url": "https://www.semanticscholar.org/topic/48819"
        //             },
        //             {
        //                 "topic": "Uninterruptible power supply",
        //                 "topicId": "342897",
        //                 "url": "https://www.semanticscholar.org/topic/342897"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "a19bb98d3851570e3ad008a00b2e7a1e4ec94387",
        //         "title": "Attack Detection and Identification in Cyber-Physical Systems",
        //         "abstract": "Cyber-physical systems are ubiquitous in power systems, transportation networks, industrial control processes, and critical infrastructures. These systems need to operate reliably in the face of unforeseen failures and external malicious attacks. In this paper: (i) we propose a mathematical framework for cyber-physical systems, attacks, and monitors; (ii) we characterize fundamental monitoring limitations from system-theoretic and graph-theoretic perspectives; and (ii) we design centralized and distributed attack detection and identification monitors. Finally, we validate our findings through compelling examples.",
        //         "year": 2012,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science",
        //             "Mathematics",
        //             "Engineering"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2476273",
        //                 "name": "F. Pasqualetti"
        //             },
        //             {
        //                 "authorId": "2121967",
        //                 "name": "F. D\u00f6rfler"
        //             },
        //             {
        //                 "authorId": "1793883",
        //                 "name": "F. Bullo"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Deep learning",
        //                 "topicId": "2762",
        //                 "url": "https://www.semanticscholar.org/topic/2762"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Malware",
        //                 "topicId": "3176",
        //                 "url": "https://www.semanticscholar.org/topic/3176"
        //             },
        //             {
        //                 "topic": "Recurrent neural network",
        //                 "topicId": "16115",
        //                 "url": "https://www.semanticscholar.org/topic/16115"
        //             },
        //             {
        //                 "topic": "Botnet",
        //                 "topicId": "6092",
        //                 "url": "https://www.semanticscholar.org/topic/6092"
        //             },
        //             {
        //                 "topic": "Restricted Boltzmann machine",
        //                 "topicId": "298704",
        //                 "url": "https://www.semanticscholar.org/topic/298704"
        //             },
        //             {
        //                 "topic": "Generative adversarial networks",
        //                 "topicId": "258908",
        //                 "url": "https://www.semanticscholar.org/topic/258908"
        //             },
        //             {
        //                 "topic": "Spamming",
        //                 "topicId": "58352",
        //                 "url": "https://www.semanticscholar.org/topic/58352"
        //             },
        //             {
        //                 "topic": "Artificial neural network",
        //                 "topicId": "6213",
        //                 "url": "https://www.semanticscholar.org/topic/6213"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "5a91bad3d679f7a5017e0168d56eb375f63c00f5",
        //         "title": "Future developments in standardisation of cyber risk in the Internet of Things (IoT)",
        //         "abstract": "In this research article, we explore the use of a design process for adapting existing cyber risk assessment standards to allow the calculation of economic impact from IoT cyber risk. The paper presents a new model that includes a design process with new risk assessment vectors, specific for IoT cyber risk. To design new risk assessment vectors for IoT, the study applied a range of methodologies, including literature review, empirical study and comparative study, followed by theoretical analysis and grounded theory. An epistemological framework emerges from applying the constructivist grounded theory methodology to draw on knowledge from existing cyber risk frameworks, models and methodologies. This framework presents the current gaps in cyber risk standards and policies, and defines the design principles of future cyber risk impact assessment. The core contribution of the article therefore, being the presentation of a new model for impact assessment of IoT cyber risk.",
        //         "year": 2019,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "51002836",
        //                 "name": "P. Radanliev"
        //             },
        //             {
        //                 "authorId": "49805882",
        //                 "name": "D. de Roure"
        //             },
        //             {
        //                 "authorId": "1803701",
        //                 "name": "Jason R. C. Nurse"
        //             },
        //             {
        //                 "authorId": "1481724234",
        //                 "name": "Rafael Mantilla Montalvo"
        //             },
        //             {
        //                 "authorId": "3262602",
        //                 "name": "Stacy Cannady"
        //             },
        //             {
        //                 "authorId": "143676657",
        //                 "name": "Omar Santos"
        //             },
        //             {
        //                 "authorId": "134313486",
        //                 "name": "L. Maddox"
        //             },
        //             {
        //                 "authorId": "3448243",
        //                 "name": "P. Burnap"
        //             },
        //             {
        //                 "authorId": "152981613",
        //                 "name": "C. Maple"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Machine learning",
        //                 "topicId": "168",
        //                 "url": "https://www.semanticscholar.org/topic/168"
        //             },
        //             {
        //                 "topic": "Sensor",
        //                 "topicId": "1117",
        //                 "url": "https://www.semanticscholar.org/topic/1117"
        //             },
        //             {
        //                 "topic": "3D printing",
        //                 "topicId": "120609",
        //                 "url": "https://www.semanticscholar.org/topic/120609"
        //             },
        //             {
        //                 "topic": "Stuxnet",
        //                 "topicId": "260443",
        //                 "url": "https://www.semanticscholar.org/topic/260443"
        //             },
        //             {
        //                 "topic": "Random forest",
        //                 "topicId": "36594",
        //                 "url": "https://www.semanticscholar.org/topic/36594"
        //             },
        //             {
        //                 "topic": "Cloud computing",
        //                 "topicId": "2756",
        //                 "url": "https://www.semanticscholar.org/topic/2756"
        //             },
        //             {
        //                 "topic": "Anomaly detection",
        //                 "topicId": "15077",
        //                 "url": "https://www.semanticscholar.org/topic/15077"
        //             },
        //             {
        //                 "topic": "Simulation",
        //                 "topicId": "194",
        //                 "url": "https://www.semanticscholar.org/topic/194"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "Malware",
        //                 "topicId": "3176",
        //                 "url": "https://www.semanticscholar.org/topic/3176"
        //             },
        //             {
        //                 "topic": "Taxonomy (general)",
        //                 "topicId": "8319",
        //                 "url": "https://www.semanticscholar.org/topic/8319"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Internet of things",
        //                 "topicId": "51309",
        //                 "url": "https://www.semanticscholar.org/topic/51309"
        //             },
        //             {
        //                 "topic": "Content management system",
        //                 "topicId": "97120",
        //                 "url": "https://www.semanticscholar.org/topic/97120"
        //             },
        //             {
        //                 "topic": "Experiment",
        //                 "topicId": "378",
        //                 "url": "https://www.semanticscholar.org/topic/378"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "4bd8fed0f7a776f43267a6546a3c5fe94343eca1",
        //         "title": "Wireless Communication Technologies for Safe Cooperative Cyber Physical Systems",
        //         "abstract": "Cooperative Cyber-Physical Systems (Co-CPSs) can be enabled using wireless communication technologies, which in principle should address reliability and safety challenges. Safety for Co-CPS enabled by wireless communication technologies is a crucial aspect and requires new dedicated design approaches. In this paper, we provide an overview of five Co-CPS use cases, as introduced in our SafeCOP EU project, and analyze their safety design requirements. Next, we provide a comprehensive analysis of the main existing wireless communication technologies giving details about the protocols developed within particular standardization bodies. We also investigate to what extent they address the non-functional requirements in terms of safety, security and real time, in the different application domains of each use case. Finally, we discuss general recommendations about the use of different wireless communication technologies showing their potentials in the selected real-world use cases. The discussion is provided under consideration in the 5G standardization process within 3GPP, whose current efforts are inline to current gaps in wireless communications protocols for Co-CPSs including many future use cases.",
        //         "year": 2018,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science",
        //             "Medicine"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2155607",
        //                 "name": "A. Balador"
        //             },
        //             {
        //                 "authorId": "1714415",
        //                 "name": "A. Koubaa"
        //             },
        //             {
        //                 "authorId": "20843589",
        //                 "name": "D. Cassioli"
        //             },
        //             {
        //                 "authorId": "1780270",
        //                 "name": "F. Foukalas"
        //             },
        //             {
        //                 "authorId": "145204198",
        //                 "name": "Ricardo Severino"
        //             },
        //             {
        //                 "authorId": "144075663",
        //                 "name": "D. Stepanova"
        //             },
        //             {
        //                 "authorId": "1703396",
        //                 "name": "G. Agosta"
        //             },
        //             {
        //                 "authorId": "144945348",
        //                 "name": "Jing Xie"
        //             },
        //             {
        //                 "authorId": "1722133",
        //                 "name": "L. Pomante"
        //             },
        //             {
        //                 "authorId": "47314074",
        //                 "name": "M. Mongelli"
        //             },
        //             {
        //                 "authorId": "51971988",
        //                 "name": "P. Pierini"
        //             },
        //             {
        //                 "authorId": "145386761",
        //                 "name": "S. Petersen"
        //             },
        //             {
        //                 "authorId": "145923361",
        //                 "name": "T. Sukuvaara"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Control system",
        //                 "topicId": "80",
        //                 "url": "https://www.semanticscholar.org/topic/80"
        //             },
        //             {
        //                 "topic": "Bootstrap aggregating",
        //                 "topicId": "166813",
        //                 "url": "https://www.semanticscholar.org/topic/166813"
        //             },
        //             {
        //                 "topic": "K-nearest neighbors algorithm",
        //                 "topicId": "48507",
        //                 "url": "https://www.semanticscholar.org/topic/48507"
        //             },
        //             {
        //                 "topic": "Random forest",
        //                 "topicId": "36594",
        //                 "url": "https://www.semanticscholar.org/topic/36594"
        //             },
        //             {
        //                 "topic": "Man-in-the-middle attack",
        //                 "topicId": "143116",
        //                 "url": "https://www.semanticscholar.org/topic/143116"
        //             },
        //             {
        //                 "topic": "Denial-of-service attack",
        //                 "topicId": "10149",
        //                 "url": "https://www.semanticscholar.org/topic/10149"
        //             },
        //             {
        //                 "topic": "Decision tree",
        //                 "topicId": "20672",
        //                 "url": "https://www.semanticscholar.org/topic/20672"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Dental Intrusion",
        //                 "topicId": "3173",
        //                 "url": "https://www.semanticscholar.org/topic/3173"
        //             },
        //             {
        //                 "topic": "Testbed",
        //                 "topicId": "1705",
        //                 "url": "https://www.semanticscholar.org/topic/1705"
        //             },
        //             {
        //                 "topic": "Diode",
        //                 "topicId": "15115",
        //                 "url": "https://www.semanticscholar.org/topic/15115"
        //             },
        //             {
        //                 "topic": "Intrusion detection system",
        //                 "topicId": "3180",
        //                 "url": "https://www.semanticscholar.org/topic/3180"
        //             },
        //             {
        //                 "topic": "Firewall (computing)",
        //                 "topicId": "128829",
        //                 "url": "https://www.semanticscholar.org/topic/128829"
        //             },
        //             {
        //                 "topic": "Unidirectional network",
        //                 "topicId": "262513",
        //                 "url": "https://www.semanticscholar.org/topic/262513"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Data theft",
        //                 "topicId": "152799",
        //                 "url": "https://www.semanticscholar.org/topic/152799"
        //             },
        //             {
        //                 "topic": "Network traffic control",
        //                 "topicId": "216935",
        //                 "url": "https://www.semanticscholar.org/topic/216935"
        //             },
        //             {
        //                 "topic": "Simulation",
        //                 "topicId": "194",
        //                 "url": "https://www.semanticscholar.org/topic/194"
        //             },
        //             {
        //                 "topic": "Radio frequency",
        //                 "topicId": "14504",
        //                 "url": "https://www.semanticscholar.org/topic/14504"
        //             },
        //             {
        //                 "topic": "Real-time clock",
        //                 "topicId": "121831",
        //                 "url": "https://www.semanticscholar.org/topic/121831"
        //             },
        //             {
        //                 "topic": "Kartagener Syndrome",
        //                 "topicId": "18951",
        //                 "url": "https://www.semanticscholar.org/topic/18951"
        //             },
        //             {
        //                 "topic": "Protocols documentation",
        //                 "topicId": "752261",
        //                 "url": "https://www.semanticscholar.org/topic/752261"
        //             },
        //             {
        //                 "topic": "Single Linkage Cluster Analysis",
        //                 "topicId": "56855",
        //                 "url": "https://www.semanticscholar.org/topic/56855"
        //             },
        //             {
        //                 "topic": "Impaired Control Scale",
        //                 "topicId": "15073",
        //                 "url": "https://www.semanticscholar.org/topic/15073"
        //             },
        //             {
        //                 "topic": "Denial (Psychology)",
        //                 "topicId": "14586",
        //                 "url": "https://www.semanticscholar.org/topic/14586"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "037f076e9c1e869c4697a7b83c7cbb6b1cd2b5e6",
        //         "title": "Cyber Security Awareness, Knowledge and Behavior: A Comparative Study",
        //         "abstract": "ABSTRACT Cyber-attacks represent a potential threat to information security. As rates of data usage and internet consumption continue to increase, cyber awareness turned to be increasingly urgent. This study focuses on the relationships between cyber security awareness, knowledge and behavior with protection tools among individuals in general and across four countries: Israel, Slovenia, Poland and Turkey in particular. Results show that internet users possess adequate cyber threat awareness but apply only minimal protective measures usually relatively common and simple ones. The study findings also show that higher cyber knowledge is connected to the level of cyber awareness, beyond the differences in respondent country or gender. In addition, awareness is also connected to protection tools, but not to information they were willing to disclose. Lastly, findings exhibit differences between the explored countries that affect the interaction between awareness, knowledge, and behaviors. Results, implications, and recommendations for effective based cyber security training programs are presented and discussed.",
        //         "year": 2020,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Business"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2615245",
        //                 "name": "M. Zwilling"
        //             },
        //             {
        //                 "authorId": "13413273",
        //                 "name": "G. Klien"
        //             },
        //             {
        //                 "authorId": "1724806",
        //                 "name": "D. Lesjak"
        //             },
        //             {
        //                 "authorId": "72816981",
        //                 "name": "\u0141. Wiechetek"
        //             },
        //             {
        //                 "authorId": "37675460",
        //                 "name": "F. \u00c7etin"
        //             },
        //             {
        //                 "authorId": "4106634",
        //                 "name": "H. N. Bas\u0131m"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Noise shaping",
        //                 "topicId": "135480",
        //                 "url": "https://www.semanticscholar.org/topic/135480"
        //             },
        //             {
        //                 "topic": "Conflict (Psychology)",
        //                 "topicId": "2704",
        //                 "url": "https://www.semanticscholar.org/topic/2704"
        //             },
        //             {
        //                 "topic": "Vietnam Conflict",
        //                 "topicId": "79869",
        //                 "url": "https://www.semanticscholar.org/topic/79869"
        //             },
        //             {
        //                 "topic": "Warfare and Armed Conflicts",
        //                 "topicId": "4986131",
        //                 "url": "https://www.semanticscholar.org/topic/4986131"
        //             },
        //             {
        //                 "topic": "Note (document)",
        //                 "topicId": "5762",
        //                 "url": "https://www.semanticscholar.org/topic/5762"
        //             },
        //             {
        //                 "topic": "Data Table",
        //                 "topicId": "187423",
        //                 "url": "https://www.semanticscholar.org/topic/187423"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "44d857a8935ae3968a07c538cbcd077ae331cb46",
        //         "title": "A Survey on Model-Based Distributed Control and Filtering for Industrial Cyber-Physical Systems",
        //         "abstract": "Industrial cyber-physical systems (CPSs) are large-scale, geographically dispersed, and life-critical systems, in which lots of sensors and actuators are embedded and networked together to facilitate real-time monitoring and closed-loop control. Their intrinsic features in geographic space and resources put forward to urgent requirements of reliability and scalability for designed filtering or control schemes. This paper presents a review of the state-of-the-art of distributed filtering and control of industrial CPSs described by differential dynamics models. Special attention is paid to sensor networks, manipulators, and power systems. For real-time monitoring, some typical Kalman-based distributed algorithms are summarized and their performances on calculation burden and communication burden, as well as scalability, are discussed in depth. Then, the characteristics of non-Kalman cases are further disclosed in light of constructed filter structures. Furthermore, the latest development is surveyed for distributed cooperative control of mobile manipulators and distributed model predictive control in industrial automation systems. By resorting to droop characteristics, representative distributed control strategies classified by controller structures are systematically summarized for power systems with the requirements of power sharing and voltage and frequency regulation. In addition, distributed security control of industrial CPSs is reviewed when cyber-attacks are taken into consideration. Finally, some challenges are raised to guide the future research.",
        //         "year": 2019,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1795716",
        //                 "name": "Derui Ding"
        //             },
        //             {
        //                 "authorId": "145192086",
        //                 "name": "Q. Han"
        //             },
        //             {
        //                 "authorId": "2108454322",
        //                 "name": "Zidong Wang"
        //             },
        //             {
        //                 "authorId": "32946552",
        //                 "name": "Xiaohua Ge"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Bitcoin",
        //                 "topicId": "203528",
        //                 "url": "https://www.semanticscholar.org/topic/203528"
        //             },
        //             {
        //                 "topic": "IBM Power Systems",
        //                 "topicId": "64187",
        //                 "url": "https://www.semanticscholar.org/topic/64187"
        //             },
        //             {
        //                 "topic": "Data security",
        //                 "topicId": "35130",
        //                 "url": "https://www.semanticscholar.org/topic/35130"
        //             },
        //             {
        //                 "topic": "Information privacy",
        //                 "topicId": "90886",
        //                 "url": "https://www.semanticscholar.org/topic/90886"
        //             },
        //             {
        //                 "topic": "Chandra\u2013Toueg consensus algorithm",
        //                 "topicId": "845990",
        //                 "url": "https://www.semanticscholar.org/topic/845990"
        //             },
        //             {
        //                 "topic": "Simulation",
        //                 "topicId": "194",
        //                 "url": "https://www.semanticscholar.org/topic/194"
        //             },
        //             {
        //                 "topic": "Transactions per second",
        //                 "topicId": "415947",
        //                 "url": "https://www.semanticscholar.org/topic/415947"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Cryptocurrency",
        //                 "topicId": "345694",
        //                 "url": "https://www.semanticscholar.org/topic/345694"
        //             },
        //             {
        //                 "topic": "Data center",
        //                 "topicId": "64870",
        //                 "url": "https://www.semanticscholar.org/topic/64870"
        //             },
        //             {
        //                 "topic": "Experiment",
        //                 "topicId": "378",
        //                 "url": "https://www.semanticscholar.org/topic/378"
        //             },
        //             {
        //                 "topic": "Refinement (computing)",
        //                 "topicId": "5410",
        //                 "url": "https://www.semanticscholar.org/topic/5410"
        //             },
        //             {
        //                 "topic": "Academia (organization)",
        //                 "topicId": "125850",
        //                 "url": "https://www.semanticscholar.org/topic/125850"
        //             },
        //             {
        //                 "topic": "Software deployment",
        //                 "topicId": "328066",
        //                 "url": "https://www.semanticscholar.org/topic/328066"
        //             },
        //             {
        //                 "topic": "Benchmark (computing)",
        //                 "topicId": "1374",
        //                 "url": "https://www.semanticscholar.org/topic/1374"
        //             },
        //             {
        //                 "topic": "Deploy",
        //                 "topicId": "65314",
        //                 "url": "https://www.semanticscholar.org/topic/65314"
        //             },
        //             {
        //                 "topic": "benefit",
        //                 "topicId": "131",
        //                 "url": "https://www.semanticscholar.org/topic/131"
        //             },
        //             {
        //                 "topic": "Cryptococcus neoformans",
        //                 "topicId": "14680",
        //                 "url": "https://www.semanticscholar.org/topic/14680"
        //             },
        //             {
        //                 "topic": "Provable security",
        //                 "topicId": "8600",
        //                 "url": "https://www.semanticscholar.org/topic/8600"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "8fc680c55f9789c6d398c5f45f1a6e8a4ddfabd5",
        //         "title": "Defining a Digital Twin-based Cyber-Physical Production System for autonomous manufacturing in smart shop floors",
        //         "abstract": "Smart manufacturing is the core idea of the fourth industrial evolution. For a smart manufacturing shop floor, real-time monitoring, simulation and prediction of manufacturing operations are vital to improve the production efficiency and flexibility. In this paper, the Cyber-Physical System (CPS) and Digital Twin technologies are introduced to build the interconnection and interoperability of a physical shop floor and corresponding cybershop floor. A Digital Twin-based Cyber-Physical Production System (DT-CPPS) is further established, and the configuring mechanism, operating mechanism and real-time data-driven operations control of DT-CPPS are discussed in detail. It is expected that DT-CPPS will provide the basis for shop floors to march towards smart manufacturing.",
        //         "year": 2019,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science",
        //             "Engineering"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2053138919",
        //                 "name": "Kai Ding"
        //             },
        //             {
        //                 "authorId": "145550318",
        //                 "name": "F. Chan"
        //             },
        //             {
        //                 "authorId": "2108094751",
        //                 "name": "Xudong Zhang"
        //             },
        //             {
        //                 "authorId": "3180745",
        //                 "name": "Guanghui Zhou"
        //             },
        //             {
        //                 "authorId": "47190881",
        //                 "name": "Fuqiang Zhang"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Internet of things",
        //                 "topicId": "51309",
        //                 "url": "https://www.semanticscholar.org/topic/51309"
        //             },
        //             {
        //                 "topic": "Physical security",
        //                 "topicId": "119936",
        //                 "url": "https://www.semanticscholar.org/topic/119936"
        //             },
        //             {
        //                 "topic": "Deep learning",
        //                 "topicId": "2762",
        //                 "url": "https://www.semanticscholar.org/topic/2762"
        //             },
        //             {
        //                 "topic": "Anomaly detection",
        //                 "topicId": "15077",
        //                 "url": "https://www.semanticscholar.org/topic/15077"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "Performance",
        //                 "topicId": "3097",
        //                 "url": "https://www.semanticscholar.org/topic/3097"
        //             },
        //             {
        //                 "topic": "Dual",
        //                 "topicId": "28901",
        //                 "url": "https://www.semanticscholar.org/topic/28901"
        //             },
        //             {
        //                 "topic": "Threat (computer)",
        //                 "topicId": "313615",
        //                 "url": "https://www.semanticscholar.org/topic/313615"
        //             },
        //             {
        //                 "topic": "Side-channel attack",
        //                 "topicId": "28247",
        //                 "url": "https://www.semanticscholar.org/topic/28247"
        //             },
        //             {
        //                 "topic": "Experiment",
        //                 "topicId": "378",
        //                 "url": "https://www.semanticscholar.org/topic/378"
        //             },
        //             {
        //                 "topic": "Simulation",
        //                 "topicId": "194",
        //                 "url": "https://www.semanticscholar.org/topic/194"
        //             },
        //             {
        //                 "topic": "Central processing unit",
        //                 "topicId": "2752",
        //                 "url": "https://www.semanticscholar.org/topic/2752"
        //             },
        //             {
        //                 "topic": "Exhibits as Topic",
        //                 "topicId": "793",
        //                 "url": "https://www.semanticscholar.org/topic/793"
        //             },
        //             {
        //                 "topic": "Behavior",
        //                 "topicId": "3332",
        //                 "url": "https://www.semanticscholar.org/topic/3332"
        //             },
        //             {
        //                 "topic": "Reading (activity)",
        //                 "topicId": "20266",
        //                 "url": "https://www.semanticscholar.org/topic/20266"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "ba713ebb4f81a3ed114702e5a269454f541c0601",
        //         "title": "Cyber-Physical Systems Security\u2014A Survey",
        //         "abstract": "With the exponential growth of cyber-physical systems (CPSs), new security challenges have emerged. Various vulnerabilities, threats, attacks, and controls have been introduced for the new generation of CPS. However, there lacks a systematic review of the CPS security literature. In particular, the heterogeneity of CPS components and the diversity of CPS systems have made it difficult to study the problem with one generalized model. In this paper, we study and systematize existing research on CPS security under a unified framework. The framework consists of three orthogonal coordinates: 1) from the security perspective, we follow the well-known taxonomy of threats, vulnerabilities, attacks and controls; 2) from the CPS components perspective, we focus on cyber, physical, and cyber-physical components; and 3) from the CPS systems perspective, we explore general CPS features as well as representative systems (e.g., smart grids, medical CPS, and smart cars). The model can be both abstract to show general interactions of components in a CPS application, and specific to capture any details when needed. By doing so, we aim to build a model that is abstract enough to be applicable to various heterogeneous CPS applications; and to gain a modular view of the tightly coupled CPS components. Such abstract decoupling makes it possible to gain a systematic understanding of CPS security, and to highlight the potential sources of attacks and ways of protection. With this intensive literature review, we attempt to summarize the state-of-the-art on CPS security, provide researchers with a comprehensive list of references, and also encourage the audience to further explore this emerging field.",
        //         "year": 2017,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2290455",
        //                 "name": "Abdulmalik Humayed"
        //             },
        //             {
        //                 "authorId": "1687422",
        //                 "name": "Jingqiang Lin"
        //             },
        //             {
        //                 "authorId": "1680720",
        //                 "name": "Fengjun Li"
        //             },
        //             {
        //                 "authorId": "145607083",
        //                 "name": "Bo Luo"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Reinforcement learning",
        //                 "topicId": "2557",
        //                 "url": "https://www.semanticscholar.org/topic/2557"
        //             },
        //             {
        //                 "topic": "Driven right leg circuit",
        //                 "topicId": "427743",
        //                 "url": "https://www.semanticscholar.org/topic/427743"
        //             },
        //             {
        //                 "topic": "Game theory",
        //                 "topicId": "17593",
        //                 "url": "https://www.semanticscholar.org/topic/17593"
        //             },
        //             {
        //                 "topic": "Deep learning",
        //                 "topicId": "2762",
        //                 "url": "https://www.semanticscholar.org/topic/2762"
        //             },
        //             {
        //                 "topic": "Machine learning",
        //                 "topicId": "168",
        //                 "url": "https://www.semanticscholar.org/topic/168"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Intrusion detection system",
        //                 "topicId": "3180",
        //                 "url": "https://www.semanticscholar.org/topic/3180"
        //             },
        //             {
        //                 "topic": "Futures studies",
        //                 "topicId": "7114",
        //                 "url": "https://www.semanticscholar.org/topic/7114"
        //             },
        //             {
        //                 "topic": "Multi-agent system",
        //                 "topicId": "3830",
        //                 "url": "https://www.semanticscholar.org/topic/3830"
        //             },
        //             {
        //                 "topic": "Simulation",
        //                 "topicId": "194",
        //                 "url": "https://www.semanticscholar.org/topic/194"
        //             },
        //             {
        //                 "topic": "Autonomous robot",
        //                 "topicId": "1175",
        //                 "url": "https://www.semanticscholar.org/topic/1175"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "4c39f8d61620e2108aa7f3504ba8a015870d9ac5",
        //         "title": "A QoS-aware virtual machine scheduling method for energy conservation in cloud-based cyber-physical systems",
        //         "abstract": "Nowadays, with the development of cyber-physical systems (CPS), there are an increasing amount of applications deployed in the CPS to connect cyber space with physical world better and closer than ever. Furthermore, the cloud-based CPS bring massive computing and storage resource for CPS, which enables a wide range of applications. Meanwhile, due to the explosive expansion of applications deployed on the CPS, the energy consumption of the cloud-based CPS has received wide concern. To improve the energy efficiency in the cloud environment, the virtualized technology is employed to manage the resources, and the applications are generally hosted by virtual machines (VMs). However, it remains challenging to meet the Quality-of-Service (QoS) requirements. In view of this challenge, a QoS-aware VM scheduling method for energy conservation, named QVMS, in cloud-based CPS is designed. Technically, our scheduling problem is formalized as a standard multi-objective problem first. Then, the Non-dominated Sorting Genetic Algorithm III (NSGA-III) is adopted to search the optimal VM migration solutions. Besides, SAW (Simple Additive Weighting) and MCDM (Multiple Criteria Decision Making) are employed to select the most optimal scheduling strategy. Finally, simulations and experiments are conducted to verify the effectiveness of our proposed method.",
        //         "year": 2019,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1782044",
        //                 "name": "Lianyong Qi"
        //             },
        //             {
        //                 "authorId": "2154865639",
        //                 "name": "Yi Chen"
        //             },
        //             {
        //                 "authorId": "2116524478",
        //                 "name": "Yuan Yuan"
        //             },
        //             {
        //                 "authorId": "41034754",
        //                 "name": "Shucun Fu"
        //             },
        //             {
        //                 "authorId": "1992681025",
        //                 "name": "Xuyun Zhang"
        //             },
        //             {
        //                 "authorId": "145921385",
        //                 "name": "Xiaolong Xu"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Reference model",
        //                 "topicId": "65976",
        //                 "url": "https://www.semanticscholar.org/topic/65976"
        //             },
        //             {
        //                 "topic": "Bayesian network",
        //                 "topicId": "14005",
        //                 "url": "https://www.semanticscholar.org/topic/14005"
        //             },
        //             {
        //                 "topic": "Computation",
        //                 "topicId": "339",
        //                 "url": "https://www.semanticscholar.org/topic/339"
        //             },
        //             {
        //                 "topic": "Telematics",
        //                 "topicId": "7388",
        //                 "url": "https://www.semanticscholar.org/topic/7388"
        //             },
        //             {
        //                 "topic": "Fuzzy rule",
        //                 "topicId": "73683",
        //                 "url": "https://www.semanticscholar.org/topic/73683"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Cloud computing",
        //                 "topicId": "2756",
        //                 "url": "https://www.semanticscholar.org/topic/2756"
        //             },
        //             {
        //                 "topic": "System of systems",
        //                 "topicId": "68226",
        //                 "url": "https://www.semanticscholar.org/topic/68226"
        //             },
        //             {
        //                 "topic": "Feedback",
        //                 "topicId": "242",
        //                 "url": "https://www.semanticscholar.org/topic/242"
        //             },
        //             {
        //                 "topic": "Scalability",
        //                 "topicId": "1360",
        //                 "url": "https://www.semanticscholar.org/topic/1360"
        //             },
        //             {
        //                 "topic": "Complex system",
        //                 "topicId": "1314",
        //                 "url": "https://www.semanticscholar.org/topic/1314"
        //             },
        //             {
        //                 "topic": "Existential quantification",
        //                 "topicId": "44279",
        //                 "url": "https://www.semanticscholar.org/topic/44279"
        //             },
        //             {
        //                 "topic": "Prototype",
        //                 "topicId": "8678",
        //                 "url": "https://www.semanticscholar.org/topic/8678"
        //             },
        //             {
        //                 "topic": "Rule-based system",
        //                 "topicId": "196285",
        //                 "url": "https://www.semanticscholar.org/topic/196285"
        //             },
        //             {
        //                 "topic": "Programming paradigm",
        //                 "topicId": "29522",
        //                 "url": "https://www.semanticscholar.org/topic/29522"
        //             },
        //             {
        //                 "topic": "Sensor",
        //                 "topicId": "1117",
        //                 "url": "https://www.semanticscholar.org/topic/1117"
        //             },
        //             {
        //                 "topic": "Video Content Protection System",
        //                 "topicId": "1450421",
        //                 "url": "https://www.semanticscholar.org/topic/1450421"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "fe22daafc1c4f1975fe8f3fae0dfd2152c500ac5",
        //         "title": "Industrial Internet of Things and Cyber Manufacturing Systems",
        //         "abstract": "The Internet of Things (IoT) is an information network of physical objects (sensors, machines, cars, buildings, and other items) that allows interaction and cooperation of these objects to reach common goals [2]. While the IoT affects among others transportation, healthcare, or smart homes, the Industrial Internet of Things (IIoT) refers in particular to industrial environments. In this context Cyber Manufacturing Systems (CMS) evolved as a significant term. This opening chapter gives a brief introduction of the development of IIoT introducing also the Digital Factory and cyber-physical systems. Furthermore, the challenges and requirements of IIoT and CMS are discussed as well as potentials regarding the application in Industry 4.0 are identified. In this process aspects as economic impact, architectural pattern and infrastructures are taken into account. Besides, also major research initiatives are presented. In addition to that, an orientation to the reader is given in this chapter by providing brief summaries of the chapters published in this book. Hereby, the following research areas are addressed: \u201cModeling for CPS and CPS\u201d, \u201cArchitectural Design Patterns for CMS and IIoT\u201d, \u201cCommunication and Networking\u201d, \u201cArtificial Intelligence and Analytics\u201d, and \u201cEvolution of Workforce and Human-Machine-Interaction\u201d. The chapter closes with a discussion about future trends of IIoT and CMS within Industry 4.0.",
        //         "year": 2017,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1796176",
        //                 "name": "S. Jeschke"
        //             },
        //             {
        //                 "authorId": "1735841",
        //                 "name": "C. Brecher"
        //             },
        //             {
        //                 "authorId": "2661383",
        //                 "name": "T. Meisen"
        //             },
        //             {
        //                 "authorId": "2075160560",
        //                 "name": "Denis \u00d6zdemir"
        //             },
        //             {
        //                 "authorId": "113648997",
        //                 "name": "Tim Eschert"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Industry 4.0",
        //                 "topicId": "263883",
        //                 "url": "https://www.semanticscholar.org/topic/263883"
        //             },
        //             {
        //                 "topic": "Big data",
        //                 "topicId": "20355",
        //                 "url": "https://www.semanticscholar.org/topic/20355"
        //             },
        //             {
        //                 "topic": "Personalization",
        //                 "topicId": "2873",
        //                 "url": "https://www.semanticscholar.org/topic/2873"
        //             },
        //             {
        //                 "topic": "Scalability",
        //                 "topicId": "1360",
        //                 "url": "https://www.semanticscholar.org/topic/1360"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "c7c878013390b5b79cbcf8f83eaa7d5e6f108f6a",
        //         "title": "Introduction to Embedded Systems - A Cyber-Physical Systems Approach",
        //         "abstract": "The most visible use of computers and software is processing information for human consumption. The vast majority of computers in use, however, are much less visible. They run the engine, brakes, seatbelts, airbag, and audio system in your car. They digitally encode your voice and construct a radio signal to send it from your cell phone to a base station. They command robots on a factory floor, power generation in a power plant, processes in a chemical plant, and traffic lights in a city. These less visible computers are called embedded systems, and the software they run is called embedded software. The principal challenges in designing and analyzing embedded systems stem from their interaction with physical processes. This book takes a cyber-physical approach to embedded systems, introducing the engineering concepts underlying embedded systems as a technology and as a subject of study. The focus is on modeling, design, and analysis of cyber-physical systems, which integrate computation, networking, and physical processes. The second edition offers two new chapters, several new exercises, and other improvements. The book can be used as a textbook at the advanced undergraduate or introductory graduate level and as a professional reference for practicing engineers and computer scientists. Readers should have some familiarity with machine structures, computer programming, basic discrete mathematics and algorithms, and signals and systems.",
        //         "year": 2013,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1690704",
        //                 "name": "Edward A. Lee"
        //             },
        //             {
        //                 "authorId": "1775517",
        //                 "name": "S. Seshia"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Interoperability",
        //                 "topicId": "21510",
        //                 "url": "https://www.semanticscholar.org/topic/21510"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Programming paradigm",
        //                 "topicId": "29522",
        //                 "url": "https://www.semanticscholar.org/topic/29522"
        //             },
        //             {
        //                 "topic": "Microsoft Cordless Phone System",
        //                 "topicId": "6933244",
        //                 "url": "https://www.semanticscholar.org/topic/6933244"
        //             },
        //             {
        //                 "topic": "Software architecture",
        //                 "topicId": "7550",
        //                 "url": "https://www.semanticscholar.org/topic/7550"
        //             },
        //             {
        //                 "topic": "Smart TV",
        //                 "topicId": "216625",
        //                 "url": "https://www.semanticscholar.org/topic/216625"
        //             },
        //             {
        //                 "topic": "Autonomous system (Internet)",
        //                 "topicId": "12462",
        //                 "url": "https://www.semanticscholar.org/topic/12462"
        //             },
        //             {
        //                 "topic": "Personalization",
        //                 "topicId": "2873",
        //                 "url": "https://www.semanticscholar.org/topic/2873"
        //             },
        //             {
        //                 "topic": "Organizing (structure)",
        //                 "topicId": "7824",
        //                 "url": "https://www.semanticscholar.org/topic/7824"
        //             },
        //             {
        //                 "topic": "Black and burst",
        //                 "topicId": "3060577",
        //                 "url": "https://www.semanticscholar.org/topic/3060577"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "27644a5f94db5cac7a97b4f2aeb612de7ee38d57",
        //         "title": "Detecting cyber-physical attacks in CyberManufacturing systems with machine learning methods",
        //         "abstract": "CyberManufacturing system (CMS) is a vision for future manufacturing systems. The concept delineates a vision of advanced manufacturing system integrated with technologies such as Internet of Things, Cloud Computing, Sensors Network and Machine Learning. As a result, cyber-attacks such as Stuxnet attack will increase along with growing simultaneous connectivity. Now, cyber-physical attacks are new and unique risks to CMSs and modern cyber security countermeasure is not enough. To learn this new vulnerability, the cyber-physical attacks is defined via a taxonomy under the vision of CMS. Machine learning on physical data is studied for detecting cyber-physical attacks. Two examples were developed with simulation and experiments: 3D printing malicious attack and CNC milling machine malicious attack. By implementing machine learning methods in physical data, the anomaly detection algorithm reached 96.1% accuracy in detecting cyber-physical attacks in 3D printing process; random forest algorithm reached on average 91.1% accuracy in detecting cyber-physical attacks in CNC milling process.",
        //         "year": 2019,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "9969447",
        //                 "name": "Mingtao Wu"
        //             },
        //             {
        //                 "authorId": "2114791217",
        //                 "name": "Zhengyi Song"
        //             },
        //             {
        //                 "authorId": "32393545",
        //                 "name": "Y. Moon"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyberspace",
        //                 "topicId": "6516",
        //                 "url": "https://www.semanticscholar.org/topic/6516"
        //             },
        //             {
        //                 "topic": "Scalability",
        //                 "topicId": "1360",
        //                 "url": "https://www.semanticscholar.org/topic/1360"
        //             },
        //             {
        //                 "topic": "Global Positioning System",
        //                 "topicId": "2782",
        //                 "url": "https://www.semanticscholar.org/topic/2782"
        //             },
        //             {
        //                 "topic": "Electroencephalography",
        //                 "topicId": "236",
        //                 "url": "https://www.semanticscholar.org/topic/236"
        //             },
        //             {
        //                 "topic": "Cloud computing",
        //                 "topicId": "2756",
        //                 "url": "https://www.semanticscholar.org/topic/2756"
        //             },
        //             {
        //                 "topic": "Computation",
        //                 "topicId": "339",
        //                 "url": "https://www.semanticscholar.org/topic/339"
        //             },
        //             {
        //                 "topic": "Central processing unit",
        //                 "topicId": "2752",
        //                 "url": "https://www.semanticscholar.org/topic/2752"
        //             },
        //             {
        //                 "topic": "Sensor",
        //                 "topicId": "1117",
        //                 "url": "https://www.semanticscholar.org/topic/1117"
        //             },
        //             {
        //                 "topic": "Mixture model",
        //                 "topicId": "3712",
        //                 "url": "https://www.semanticscholar.org/topic/3712"
        //             },
        //             {
        //                 "topic": "Real-time data",
        //                 "topicId": "6523",
        //                 "url": "https://www.semanticscholar.org/topic/6523"
        //             },
        //             {
        //                 "topic": "Smartphone",
        //                 "topicId": "6023",
        //                 "url": "https://www.semanticscholar.org/topic/6023"
        //             },
        //             {
        //                 "topic": "Microphone",
        //                 "topicId": "33872",
        //                 "url": "https://www.semanticscholar.org/topic/33872"
        //             },
        //             {
        //                 "topic": "Seamless3d",
        //                 "topicId": "4101624",
        //                 "url": "https://www.semanticscholar.org/topic/4101624"
        //             },
        //             {
        //                 "topic": "Real-time clock",
        //                 "topicId": "121831",
        //                 "url": "https://www.semanticscholar.org/topic/121831"
        //             },
        //             {
        //                 "topic": "Real-time transcription",
        //                 "topicId": "763488",
        //                 "url": "https://www.semanticscholar.org/topic/763488"
        //             },
        //             {
        //                 "topic": "Real-time locating system",
        //                 "topicId": "811893",
        //                 "url": "https://www.semanticscholar.org/topic/811893"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "a6da5531cca3eb022bc51733e20fc5426582bef1",
        //         "title": "Survey of Attack Projection, Prediction, and Forecasting in Cyber Security",
        //         "abstract": "This paper provides a survey of prediction, and forecasting methods used in cyber security. Four main tasks are discussed first, attack projection and intention recognition, in which there is a need to predict the next move or the intentions of the attacker, intrusion prediction, in which there is a need to predict upcoming cyber attacks, and network security situation forecasting, in which we project cybersecurity situation in the whole network. Methods and approaches for addressing these tasks often share the theoretical background and are often complementary. In this survey, both methods based on discrete models, such as attack graphs, Bayesian networks, and Markov models, and continuous models, such as time series and grey models, are surveyed, compared, and contrasted. We further discuss machine learning and data mining approaches, that have gained a lot of attention recently and appears promising for such a constantly changing environment, which is cyber security. The survey also focuses on the practical usability of the methods and problems related to their evaluation.",
        //         "year": 2019,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2639233",
        //                 "name": "Martin Hus\u00e1k"
        //             },
        //             {
        //                 "authorId": "2065331726",
        //                 "name": "Jana Kom\u00e1rkov\u00e1"
        //             },
        //             {
        //                 "authorId": "1398710611",
        //                 "name": "E. Bou-Harb"
        //             },
        //             {
        //                 "authorId": "2392456",
        //                 "name": "P. \u010celeda"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "EINE and ZWEI",
        //                 "topicId": "914344",
        //                 "url": "https://www.semanticscholar.org/topic/914344"
        //             },
        //             {
        //                 "topic": "Internet Explorer",
        //                 "topicId": "95214",
        //                 "url": "https://www.semanticscholar.org/topic/95214"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "7d736ce69138d6a4b95a868c07e6780c57d5d0e8",
        //         "title": "A Survey on Platoon-Based Vehicular Cyber-Physical Systems",
        //         "abstract": "Vehicles on the road with some common interests can cooperatively form a platoon-based driving pattern, in which a vehicle follows another vehicle and maintains a small and nearly constant distance to the preceding vehicle. It has been proved that, compared with driving individually, such a platoon-based driving pattern can significantly improve road capacity and energy efficiency. Moreover, with the emerging vehicular ad hoc network (VANET), the performance of a platoon in terms of road capacity, safety, energy efficiency, etc., can be further improved. On the other hand, the physical dynamics of vehicles inside the platoon can also affect the performance of a VANET. Such a complex system can be considered a platoon-based vehicular cyber-physical system (VCPS), which has attracted significant attention recently. In this paper, we present a comprehensive survey on a platoon-based VCPS. We first review the related work of a platoon-based VCPS. We then introduce two elementary techniques involved in a platoon-based VCPS, i.e., the vehicular networking architecture and standards, and traffic dynamics, respectively. We further discuss the fundamental issues in a platoon-based VCPS, including vehicle platooning/clustering, cooperative adaptive cruise control, platoon-based vehicular communications, etc., all of which are characterized by the tightly coupled relationship between traffic dynamics and VANET behaviors. Since system verification is critical to VCPS development, we also give an overview of VCPS simulation tools. Finally, we share our view on some open issues that may lead to new research directions.",
        //         "year": 2016,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1789469",
        //                 "name": "Dongyao Jia"
        //             },
        //             {
        //                 "authorId": "1791247",
        //                 "name": "K. Lu"
        //             },
        //             {
        //                 "authorId": "2110324559",
        //                 "name": "Jianping Wang"
        //             },
        //             {
        //                 "authorId": "46447747",
        //                 "name": "X. Zhang"
        //             },
        //             {
        //                 "authorId": "145947928",
        //                 "name": "Xuemin Shen"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Data mining",
        //                 "topicId": "7837",
        //                 "url": "https://www.semanticscholar.org/topic/7837"
        //             },
        //             {
        //                 "topic": "Machine learning",
        //                 "topicId": "168",
        //                 "url": "https://www.semanticscholar.org/topic/168"
        //             },
        //             {
        //                 "topic": "Usability",
        //                 "topicId": "460",
        //                 "url": "https://www.semanticscholar.org/topic/460"
        //             },
        //             {
        //                 "topic": "Bayesian network",
        //                 "topicId": "14005",
        //                 "url": "https://www.semanticscholar.org/topic/14005"
        //             },
        //             {
        //                 "topic": "Time series",
        //                 "topicId": "1293",
        //                 "url": "https://www.semanticscholar.org/topic/1293"
        //             },
        //             {
        //                 "topic": "Markov model",
        //                 "topicId": "63004",
        //                 "url": "https://www.semanticscholar.org/topic/63004"
        //             },
        //             {
        //                 "topic": "Network security",
        //                 "topicId": "21863",
        //                 "url": "https://www.semanticscholar.org/topic/21863"
        //             },
        //             {
        //                 "topic": "Markov chain",
        //                 "topicId": "5418",
        //                 "url": "https://www.semanticscholar.org/topic/5418"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "235ab5668ad2d8ca10740c86ca90062d7a8ae712",
        //         "title": "C2PS: A Digital Twin Architecture Reference Model for the Cloud-Based Cyber-Physical Systems",
        //         "abstract": "Cyber-physical system (CPS) is a new trend in the Internet-of-Things related research works, where physical systems act as the sensors to collect real-world information and communicate them to the computation modules (i.e. cyber layer), which further analyze and notify the findings to the corresponding physical systems through a feedback loop. Contemporary researchers recommend integrating cloud technologies in the CPS cyber layer to ensure the scalability of storage, computation, and cross domain communication capabilities. Though there exist a few descriptive models of the cloud-based CPS architecture, it is important to analytically describe the key CPS properties: computation, control, and communication. In this paper, we present a digital twin architecture reference model for the cloud-based CPS, C2PS, where we analytically describe the key properties of the C2PS. The model helps in identifying various degrees of basic and hybrid computation-interaction modes in this paradigm. We have designed C2PS smart interaction controller using a Bayesian belief network, so that the system dynamically considers current contexts. The composition of fuzzy rule base with the Bayes network further enables the system with reconfiguration capability. We also describe analytically, how C2PS subsystem communications can generate even more complex system-of-systems. Later, we present a telematics-based prototype driving assistance application for the vehicular domain of C2PS, VCPS, to demonstrate the efficacy of the architecture reference model.",
        //         "year": 2017,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "37308403",
        //                 "name": "K. M. Alam"
        //             },
        //             {
        //                 "authorId": "30889568",
        //                 "name": "Abdulmotaleb El Saddik"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Autonomous robot",
        //                 "topicId": "1175",
        //                 "url": "https://www.semanticscholar.org/topic/1175"
        //             },
        //             {
        //                 "topic": "Cyberwarfare",
        //                 "topicId": "232564",
        //                 "url": "https://www.semanticscholar.org/topic/232564"
        //             },
        //             {
        //                 "topic": "Knowledge base",
        //                 "topicId": "6201",
        //                 "url": "https://www.semanticscholar.org/topic/6201"
        //             },
        //             {
        //                 "topic": "Vulnerability (computing)",
        //                 "topicId": "5814",
        //                 "url": "https://www.semanticscholar.org/topic/5814"
        //             },
        //             {
        //                 "topic": "Friendly artificial intelligence",
        //                 "topicId": "1219083",
        //                 "url": "https://www.semanticscholar.org/topic/1219083"
        //             },
        //             {
        //                 "topic": "Computer Aided Verification",
        //                 "topicId": "389942",
        //                 "url": "https://www.semanticscholar.org/topic/389942"
        //             },
        //             {
        //                 "topic": "Adversary (cryptography)",
        //                 "topicId": "5369",
        //                 "url": "https://www.semanticscholar.org/topic/5369"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "88a4528eed4c4fe3183cfebf6ab5e57f394fb547",
        //         "title": "Multilayer Data-Driven Cyber-Attack Detection System for Industrial Control Systems Based on Network, System, and Process Data",
        //         "abstract": "The growing number of attacks against cyber-physical systems in recent years elevates the concern for cybersecurity of industrial control systems (ICSs). The current efforts of ICS cybersecurity are mainly based on firewalls, data diodes, and other methods of intrusion prevention, which may not be sufficient for growing cyber threats from motivated attackers. To enhance the cybersecurity of ICS, a cyber-attack detection system built on the concept of defense-in-depth is developed utilizing network traffic data, host system data, and measured process parameters. This attack detection system provides multiple-layer defense in order to gain the defenders precious time before unrecoverable consequences occur in the physical system. The data used for demonstrating the proposed detection system are from a real-time ICS testbed. Five attacks, including man in the middle (MITM), denial of service (DoS), data exfiltration, data tampering, and false data injection, are carried out to simulate the consequences of cyber attack and generate data for building data-driven detection models. Four classical classification models based on network data and host system data are studied, including k-nearest neighbor (KNN), decision tree, bootstrap aggregating (bagging), and random forest (RF), to provide a secondary line of defense of cyber-attack detection in the event that the intrusion prevention layer fails. Intrusion detection results suggest that KNN, bagging, and RF have low missed alarm and false alarm rates for MITM and DoS attacks, providing accurate and reliable detection of these cyber attacks. Cyber attacks that may not be detectable by monitoring network and host system data, such as command tampering and false data injection attacks by an insider, are monitored for by traditional process monitoring protocols. In the proposed detection system, an auto-associative kernel regression model is studied to strengthen early attack detection. The result shows that this approach detects physically impactful cyber attacks before significant consequences occur. The proposed multiple-layer data-driven cyber-attack detection system utilizing network, system, and process data is a promising solution for safeguarding an ICS.",
        //         "year": 2019,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2153305161",
        //                 "name": "Fan Zhang"
        //             },
        //             {
        //                 "authorId": "72615009",
        //                 "name": "Hansaka Angel Dias Edirisinghe Kodituwakku"
        //             },
        //             {
        //                 "authorId": "46702975",
        //                 "name": "J. Hines"
        //             },
        //             {
        //                 "authorId": "48671381",
        //                 "name": "J. Coble"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Distributed control system",
        //                 "topicId": "67794",
        //                 "url": "https://www.semanticscholar.org/topic/67794"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Scalability",
        //                 "topicId": "1360",
        //                 "url": "https://www.semanticscholar.org/topic/1360"
        //             },
        //             {
        //                 "topic": "Content-control software",
        //                 "topicId": "194921",
        //                 "url": "https://www.semanticscholar.org/topic/194921"
        //             },
        //             {
        //                 "topic": "IBM Power Systems",
        //                 "topicId": "64187",
        //                 "url": "https://www.semanticscholar.org/topic/64187"
        //             },
        //             {
        //                 "topic": "Requirement",
        //                 "topicId": "136",
        //                 "url": "https://www.semanticscholar.org/topic/136"
        //             },
        //             {
        //                 "topic": "Consensus dynamics",
        //                 "topicId": "136689",
        //                 "url": "https://www.semanticscholar.org/topic/136689"
        //             },
        //             {
        //                 "topic": "Distributed algorithm",
        //                 "topicId": "28295",
        //                 "url": "https://www.semanticscholar.org/topic/28295"
        //             },
        //             {
        //                 "topic": "Control theory",
        //                 "topicId": "3317",
        //                 "url": "https://www.semanticscholar.org/topic/3317"
        //             },
        //             {
        //                 "topic": "Real-time clock",
        //                 "topicId": "121831",
        //                 "url": "https://www.semanticscholar.org/topic/121831"
        //             },
        //             {
        //                 "topic": "AS-Interface",
        //                 "topicId": "832136",
        //                 "url": "https://www.semanticscholar.org/topic/832136"
        //             },
        //             {
        //                 "topic": "Performance",
        //                 "topicId": "3097",
        //                 "url": "https://www.semanticscholar.org/topic/3097"
        //             },
        //             {
        //                 "topic": "Embedded system",
        //                 "topicId": "4423",
        //                 "url": "https://www.semanticscholar.org/topic/4423"
        //             },
        //             {
        //                 "topic": "Sensor",
        //                 "topicId": "1117",
        //                 "url": "https://www.semanticscholar.org/topic/1117"
        //             },
        //             {
        //                 "topic": "Industrial PC",
        //                 "topicId": "947094",
        //                 "url": "https://www.semanticscholar.org/topic/947094"
        //             },
        //             {
        //                 "topic": "Automation",
        //                 "topicId": "93663",
        //                 "url": "https://www.semanticscholar.org/topic/93663"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "266c5c96660e801578985eb57829a35918c31cd6",
        //         "title": "Secure Estimation and Control for Cyber-Physical Systems Under Adversarial Attacks",
        //         "abstract": "The vast majority of today's critical infrastructure is supported by numerous feedback control loops and an attack on these control loops can have disastrous consequences. This is a major concern since modern control systems are becoming large and decentralized and thus more vulnerable to attacks. This paper is concerned with the estimation and control of linear systems when some of the sensors or actuators are corrupted by an attacker. We give a new simple characterization of the maximum number of attacks that can be detected and corrected as a function of the pair (A,C) of the system and we show in particular that it is impossible to accurately reconstruct the state of a system if more than half the sensors are attacked. In addition, we show how the design of a secure local control loop can improve the resilience of the system. When the number of attacks is smaller than a threshold, we propose an efficient algorithm inspired from techniques in compressed sensing to estimate the state of the plant despite attacks. We give a theoretical characterization of the performance of this algorithm and we show on numerical simulations that the method is promising and allows to reconstruct the state accurately despite attacks. Finally, we consider the problem of designing output-feedback controllers that stabilize the system despite sensor attacks. We show that a principle of separation between estimation and control holds and that the design of resilient output feedback controllers can be reduced to the design of resilient state estimators.",
        //         "year": 2012,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science",
        //             "Mathematics"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1709490",
        //                 "name": "Hamza Fawzi"
        //             },
        //             {
        //                 "authorId": "1791875",
        //                 "name": "P. Tabuada"
        //             },
        //             {
        //                 "authorId": "143813023",
        //                 "name": "S. Diggavi"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyberwarfare",
        //                 "topicId": "232564",
        //                 "url": "https://www.semanticscholar.org/topic/232564"
        //             },
        //             {
        //                 "topic": "International Normalized Ratio",
        //                 "topicId": "55945",
        //                 "url": "https://www.semanticscholar.org/topic/55945"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "43b99b798a29272a203782d19181998cd57d0fd2",
        //         "title": "Deep Learning Models for Cyber Security in IoT Networks",
        //         "abstract": "In this paper we propose deep learning models for the cyber security in IoT (Internet of Things) networks. IoT network is as a promising technology which connects the living and non-living things around the world. The implementation of IoT is growing fast but the cyber security is still a loophole, so it is susceptible to many cyber-attack and for the success of any network it most important that the network is completely secure, otherwise people could be reluctant to use this technology. DDoS (Distributed Denial of Service) attack has affected many IoT networks in recent past that has resulted in huge losses. We have proposed deep learning models and evaluated those using latest CICIDS2017 datasets for DDoS attack detection which has provided highest accuracy as 97.16% also proposed models are compared with machine learning algorithms. This paper also identifies open research challenges for usage of deep learning algorithm for IoT cyber security.",
        //         "year": 2019,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "70146507",
        //                 "name": "Monika Roopak"
        //             },
        //             {
        //                 "authorId": "145324007",
        //                 "name": "G. Tian"
        //             },
        //             {
        //                 "authorId": "1695771",
        //                 "name": "J. Chambers"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Scheduling (computing)",
        //                 "topicId": "3439",
        //                 "url": "https://www.semanticscholar.org/topic/3439"
        //             },
        //             {
        //                 "topic": "Virtual machine",
        //                 "topicId": "26028",
        //                 "url": "https://www.semanticscholar.org/topic/26028"
        //             },
        //             {
        //                 "topic": "Cloud computing",
        //                 "topicId": "2756",
        //                 "url": "https://www.semanticscholar.org/topic/2756"
        //             },
        //             {
        //                 "topic": "Downtime",
        //                 "topicId": "235096",
        //                 "url": "https://www.semanticscholar.org/topic/235096"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Quality of service",
        //                 "topicId": "1132",
        //                 "url": "https://www.semanticscholar.org/topic/1132"
        //             },
        //             {
        //                 "topic": "Genetic algorithm",
        //                 "topicId": "2069",
        //                 "url": "https://www.semanticscholar.org/topic/2069"
        //             },
        //             {
        //                 "topic": "Multi-objective optimization",
        //                 "topicId": "85356",
        //                 "url": "https://www.semanticscholar.org/topic/85356"
        //             },
        //             {
        //                 "topic": "Requirement",
        //                 "topicId": "136",
        //                 "url": "https://www.semanticscholar.org/topic/136"
        //             },
        //             {
        //                 "topic": "Sorting",
        //                 "topicId": "13374",
        //                 "url": "https://www.semanticscholar.org/topic/13374"
        //             },
        //             {
        //                 "topic": "Mathematical optimization",
        //                 "topicId": "89",
        //                 "url": "https://www.semanticscholar.org/topic/89"
        //             },
        //             {
        //                 "topic": "Experiment",
        //                 "topicId": "378",
        //                 "url": "https://www.semanticscholar.org/topic/378"
        //             },
        //             {
        //                 "topic": "Simulation",
        //                 "topicId": "194",
        //                 "url": "https://www.semanticscholar.org/topic/194"
        //             },
        //             {
        //                 "topic": "Cyberspace",
        //                 "topicId": "6516",
        //                 "url": "https://www.semanticscholar.org/topic/6516"
        //             },
        //             {
        //                 "topic": "Real life",
        //                 "topicId": "9808",
        //                 "url": "https://www.semanticscholar.org/topic/9808"
        //             },
        //             {
        //                 "topic": "Additive model",
        //                 "topicId": "66483",
        //                 "url": "https://www.semanticscholar.org/topic/66483"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "956d14db8e6669f140f73129bb52dd8949bf2a6e",
        //         "title": "Cyber Hate Speech on Twitter: An Application of Machine Classification and Statistical Modeling for Policy and Decision Making",
        //         "abstract": "The use of \u201cBig Data\u201d in policy and decision making is a current topic of debate. The 2013 murder of Drummer Lee Rigby in Woolwich, London, UK led to an extensive public reaction on social media, providing the opportunity to study the spread of online hate speech (cyber hate) on Twitter. Human annotated Twitter data was collected in the immediate aftermath of Rigby's murder to train and test a supervised machine learning text classifier that distinguishes between hateful and/or antagonistic responses with a focus on race, ethnicity, or religion; and more general responses. Classification features were derived from the content of each tweet, including grammatical dependencies between words to recognize \u201cothering\u201d phrases, incitement to respond with antagonistic action, and claims of well-founded or justified discrimination against social groups. The results of the classifier were optimal using a combination of probabilistic, rule-based, and spatial-based classifiers with a voted ensemble meta-classifier. We demonstrate how the results of the classifier can be robustly utilized in a statistical model used to forecast the likely spread of cyber hate in a sample of Twitter data. The applications to policy and decision making are discussed.",
        //         "year": 2015,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "3448243",
        //                 "name": "P. Burnap"
        //             },
        //             {
        //                 "authorId": "2116741885",
        //                 "name": "M. Williams"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Artificial intelligence",
        //                 "topicId": "8286",
        //                 "url": "https://www.semanticscholar.org/topic/8286"
        //             },
        //             {
        //                 "topic": "Cyberspace",
        //                 "topicId": "6516",
        //                 "url": "https://www.semanticscholar.org/topic/6516"
        //             },
        //             {
        //                 "topic": "Deep learning",
        //                 "topicId": "2762",
        //                 "url": "https://www.semanticscholar.org/topic/2762"
        //             },
        //             {
        //                 "topic": "Artificial neural network",
        //                 "topicId": "6213",
        //                 "url": "https://www.semanticscholar.org/topic/6213"
        //             },
        //             {
        //                 "topic": "Malware",
        //                 "topicId": "3176",
        //                 "url": "https://www.semanticscholar.org/topic/3176"
        //             },
        //             {
        //                 "topic": "Statistical classification",
        //                 "topicId": "715",
        //                 "url": "https://www.semanticscholar.org/topic/715"
        //             },
        //             {
        //                 "topic": "Threat (computer)",
        //                 "topicId": "313615",
        //                 "url": "https://www.semanticscholar.org/topic/313615"
        //             },
        //             {
        //                 "topic": "Adversary (cryptography)",
        //                 "topicId": "5369",
        //                 "url": "https://www.semanticscholar.org/topic/5369"
        //             },
        //             {
        //                 "topic": "Big data",
        //                 "topicId": "20355",
        //                 "url": "https://www.semanticscholar.org/topic/20355"
        //             },
        //             {
        //                 "topic": "Intrusion detection system",
        //                 "topicId": "3180",
        //                 "url": "https://www.semanticscholar.org/topic/3180"
        //             },
        //             {
        //                 "topic": "Adversarial machine learning",
        //                 "topicId": "301178",
        //                 "url": "https://www.semanticscholar.org/topic/301178"
        //             },
        //             {
        //                 "topic": "Requirement",
        //                 "topicId": "136",
        //                 "url": "https://www.semanticscholar.org/topic/136"
        //             },
        //             {
        //                 "topic": "Encryption",
        //                 "topicId": "11625",
        //                 "url": "https://www.semanticscholar.org/topic/11625"
        //             },
        //             {
        //                 "topic": "Sensor",
        //                 "topicId": "1117",
        //                 "url": "https://www.semanticscholar.org/topic/1117"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "cf3861590d3800c754503a29d5585cfc271724b8",
        //         "title": "A Survey of Physics-Based Attack Detection in Cyber-Physical Systems",
        //         "abstract": "Monitoring the \u201cphysics\u201d of cyber-physical systems to detect attacks is a growing area of research. In its basic form, a security monitor creates time-series models of sensor readings for an industrial control system and identifies anomalies in these measurements to identify potentially false control commands or false sensor readings. In this article, we review previous work on physics-based anomaly detection based on a unified taxonomy that allows us to identify limitations and unexplored challenges and to propose new solutions.",
        //         "year": 2018,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science",
        //             "Medicine"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "144809172",
        //                 "name": "J. Giraldo"
        //             },
        //             {
        //                 "authorId": "2380555",
        //                 "name": "D. Urbina"
        //             },
        //             {
        //                 "authorId": "1725441",
        //                 "name": "A. C\u00e1rdenas"
        //             },
        //             {
        //                 "authorId": "34934551",
        //                 "name": "J. Valente"
        //             },
        //             {
        //                 "authorId": "48677433",
        //                 "name": "M. Faisal"
        //             },
        //             {
        //                 "authorId": "1748959",
        //                 "name": "Justin Ruths"
        //             },
        //             {
        //                 "authorId": "2225170",
        //                 "name": "Nils Ole Tippenhauer"
        //             },
        //             {
        //                 "authorId": "1800380",
        //                 "name": "H. Sandberg"
        //             },
        //             {
        //                 "authorId": "3420212",
        //                 "name": "R. Candell"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Reverse engineering",
        //                 "topicId": "38634",
        //                 "url": "https://www.semanticscholar.org/topic/38634"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "1b7b3df1e711c9bb20f77cb947f53fac21017595",
        //         "title": "Cyber physical systems in the context of Industry 4.0",
        //         "abstract": "We are currently experiencing the fourth Industrial Revolution in terms of cyber physical systems. These systems are industrial automation systems that enable many innovative functionalities through their networking and their access to the cyber world, thus changing our everyday lives significantly. In this context, new business models, work processes and development methods that are currently unimaginable will arise. These changes will also strongly influence the society and people. Family life, globalization, markets, etc. will have to be redefined. However, the Industry 4.0 simultaneously shows characteristics that represent the challenges regarding the development of cyber-physical systems, reliability, security and data protection. Following a brief introduction to Industry 4.0, this paper presents a prototypical application that demonstrates the essential aspects.",
        //         "year": 2014,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2509708",
        //                 "name": "N. Jazdi"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "a1daaaa50792a9b6c1164707c15874ce5122ac54",
        //         "title": "Detecting and Preventing Cyber Insider Threats: A Survey",
        //         "abstract": "Information communications technology systems are facing an increasing number of cyber security threats, the majority of which are originated by insiders. As insiders reside behind the enterprise-level security defence mechanisms and often have privileged access to the network, detecting and preventing insider threats is a complex and challenging problem. In fact, many schemes and systems have been proposed to address insider threats from different perspectives, such as intent, type of threat, or available audit data source. This survey attempts to line up these works together with only three most common types of insider namely traitor, masquerader, and unintentional perpetrator, while reviewing the countermeasures from a data analytics perspective. Uniquely, this survey takes into account the early stage threats which may lead to a malicious insider rising up. When direct and indirect threats are put on the same page, all the relevant works can be categorised as host, network, or contextual data-based according to audit data source and each work is reviewed for its capability against insider threats, how the information is extracted from the engaged data sources, and what the decision-making algorithm is. The works are also compared and contrasted. Finally, some issues are raised based on the observations from the reviewed works and new research gaps and challenges identified.",
        //         "year": 2018,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2109528745",
        //                 "name": "Liu Liu"
        //             },
        //             {
        //                 "authorId": "46175769",
        //                 "name": "O. De Vel"
        //             },
        //             {
        //                 "authorId": "2067611028",
        //                 "name": "Qing-Long Han"
        //             },
        //             {
        //                 "authorId": "37269546",
        //                 "name": "Jun Zhang"
        //             },
        //             {
        //                 "authorId": "98232756",
        //                 "name": "Yang Xiang"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Anatomy, Regional",
        //                 "topicId": "57450",
        //                 "url": "https://www.semanticscholar.org/topic/57450"
        //             },
        //             {
        //                 "topic": "Metaheuristic",
        //                 "topicId": "61661",
        //                 "url": "https://www.semanticscholar.org/topic/61661"
        //             },
        //             {
        //                 "topic": "IBM Power Systems",
        //                 "topicId": "64187",
        //                 "url": "https://www.semanticscholar.org/topic/64187"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "Mathematical optimization",
        //                 "topicId": "89",
        //                 "url": "https://www.semanticscholar.org/topic/89"
        //             },
        //             {
        //                 "topic": "Sysop",
        //                 "topicId": "245429",
        //                 "url": "https://www.semanticscholar.org/topic/245429"
        //             },
        //             {
        //                 "topic": "Experiment",
        //                 "topicId": "378",
        //                 "url": "https://www.semanticscholar.org/topic/378"
        //             },
        //             {
        //                 "topic": "Benchmark (computing)",
        //                 "topicId": "1374",
        //                 "url": "https://www.semanticscholar.org/topic/1374"
        //             },
        //             {
        //                 "topic": "Decision Making",
        //                 "topicId": "7782",
        //                 "url": "https://www.semanticscholar.org/topic/7782"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "cf9cc0380fce0a73e671f9d9bc80a97a6f3908a4",
        //         "title": "Smart Grids: A Cyber\u2013Physical Systems Perspective",
        //         "abstract": "Smart grids are electric networks that employ advanced monitoring, control, and communication technologies to deliver reliable and secure energy supply, enhance operation efficiency for generators and distributors, and provide flexible choices for prosumers. Smart grids are a combination of complex physical network systems and cyber systems that face many technological challenges. In this paper, we will first present an overview of these challenges in the context of cyber-physical systems. We will then outline potential contributions that cyber-physical systems can make to smart grids, as well as the challenges that smart grids present to cyber-physical systems. Finally, implications of current technological advances to smart grids are outlined.",
        //         "year": 2016,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "9305829",
        //                 "name": "Xinghuo Yu"
        //             },
        //             {
        //                 "authorId": "2225078",
        //                 "name": "Yusheng Xue"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Microgrid",
        //                 "topicId": "198985",
        //                 "url": "https://www.semanticscholar.org/topic/198985"
        //             },
        //             {
        //                 "topic": "Monte Carlo method",
        //                 "topicId": "5417",
        //                 "url": "https://www.semanticscholar.org/topic/5417"
        //             },
        //             {
        //                 "topic": "Routing",
        //                 "topicId": "1048",
        //                 "url": "https://www.semanticscholar.org/topic/1048"
        //             },
        //             {
        //                 "topic": "Network topology",
        //                 "topicId": "5812",
        //                 "url": "https://www.semanticscholar.org/topic/5812"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Failure rate",
        //                 "topicId": "91947",
        //                 "url": "https://www.semanticscholar.org/topic/91947"
        //             },
        //             {
        //                 "topic": "Interference (communication)",
        //                 "topicId": "572",
        //                 "url": "https://www.semanticscholar.org/topic/572"
        //             },
        //             {
        //                 "topic": "Numerical analysis",
        //                 "topicId": "5413",
        //                 "url": "https://www.semanticscholar.org/topic/5413"
        //             },
        //             {
        //                 "topic": "Simulation",
        //                 "topicId": "194",
        //                 "url": "https://www.semanticscholar.org/topic/194"
        //             },
        //             {
        //                 "topic": "Elegant degradation",
        //                 "topicId": "5091",
        //                 "url": "https://www.semanticscholar.org/topic/5091"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "a4ca57b5f0353434bb4211303f0fc46a02aeebd1",
        //         "title": "Distributed Attack Detection and Secure Estimation of Networked Cyber-Physical Systems Against False Data Injection Attacks and Jamming Attacks",
        //         "abstract": "This paper is concerned with the problem of joint distributed attack detection and distributed secure estimation for a networked cyber-physical system under physical and cyber attacks. The system is monitored by a wireless sensor network, in which a group of sensors is spatially distributed and the sensors\u2019 measurements are broadcast to remote estimators via a wireless network medium. A malicious adversary simultaneously launches a false data injection attack at the physical system layer to intentionally modify the system's state and jamming attacks at the cyber layer to block the wireless transmission channels between sensors and remote estimators. The sensors\u2019 measurements can be randomly dropped with mathematical probability if the corresponding transmission channels are deliberately jammed by the adversary. Resilient attack detection estimators are delicately constructed to provide locally reliable state estimations and detect the false data injection attack. Then, criteria for analyzing the estimation performance and designing the desired estimators are derived to guarantee the solvability of the problem. Finally, the effectiveness of the proposed approach is shown through an illustrative example.",
        //         "year": 2018,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "3248630",
        //                 "name": "Yanpeng Guan"
        //             },
        //             {
        //                 "authorId": "32946552",
        //                 "name": "Xiaohua Ge"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Radio jamming",
        //                 "topicId": "713856",
        //                 "url": "https://www.semanticscholar.org/topic/713856"
        //             },
        //             {
        //                 "topic": "Code injection",
        //                 "topicId": "41981",
        //                 "url": "https://www.semanticscholar.org/topic/41981"
        //             },
        //             {
        //                 "topic": "Adversary (cryptography)",
        //                 "topicId": "5369",
        //                 "url": "https://www.semanticscholar.org/topic/5369"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Resultant",
        //                 "topicId": "2616",
        //                 "url": "https://www.semanticscholar.org/topic/2616"
        //             },
        //             {
        //                 "topic": "Randomness",
        //                 "topicId": "726",
        //                 "url": "https://www.semanticscholar.org/topic/726"
        //             },
        //             {
        //                 "topic": "Fault detection and isolation",
        //                 "topicId": "8084",
        //                 "url": "https://www.semanticscholar.org/topic/8084"
        //             },
        //             {
        //                 "topic": "Sensor web",
        //                 "topicId": "78848",
        //                 "url": "https://www.semanticscholar.org/topic/78848"
        //             },
        //             {
        //                 "topic": "Reactor (software)",
        //                 "topicId": "16382",
        //                 "url": "https://www.semanticscholar.org/topic/16382"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "4fb1ba8f667616b98ad2c23f45fb3ba5249410be",
        //         "title": "Cyber threats confronting the digital built environment",
        //         "abstract": "\nPurpose\nSmart cities provide fully integrated and networked connectivity between virtual/digital assets and physical building/infrastructure assets to form digital economies. However, industrial espionage, cyber-crime and deplorable politically driven cyber-interventions threaten to disrupt and/or physically damage the critical infrastructure that supports national wealth generation and preserves the health, safety and welfare of the populous. The purpose of this paper is to present a comprehensive review of cyber-threats confronting critical infrastructure asset management reliant upon a common data environment to augment building information modelling (BIM) implementation.\n\n\nDesign/methodology/approach\nAn interpretivist, methodological approach to reviewing pertinent literature (that contained elements of positivism) was adopted. The ensuing mixed methods analysis: reports upon case studies of cyber-physical attacks; reveals distinct categories of hackers; identifies and reports upon the various motivations for the perpetrators/actors; and explains the varied reconnaissance techniques adopted.\n\n\nFindings\nThe paper concludes with direction for future research work and a recommendation to utilize innovative block chain technology as a potential risk mitigation measure for digital built environment vulnerabilities.\n\n\nOriginality/value\nWhile cyber security and digitization of the built environment have been widely covered within the extant literature in isolation, scant research has hitherto conducted an holistic review of the perceived threats, deterrence applications and future developments in a digitized Architecture, Engineering, Construction and Operations (AECO) sector. This review presents concise and lucid reference guidance that will intellectually challenge, and better inform, both practitioners and researchers in the AECO field of enquiry.\n",
        //         "year": 2019,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Business"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "73337891",
        //                 "name": "Erika Parn"
        //             },
        //             {
        //                 "authorId": "152660957",
        //                 "name": "D. Edwards"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Assembly language",
        //                 "topicId": "68122",
        //                 "url": "https://www.semanticscholar.org/topic/68122"
        //             },
        //             {
        //                 "topic": "Internet of things",
        //                 "topicId": "51309",
        //                 "url": "https://www.semanticscholar.org/topic/51309"
        //             },
        //             {
        //                 "topic": "Industry 4.0",
        //                 "topicId": "263883",
        //                 "url": "https://www.semanticscholar.org/topic/263883"
        //             },
        //             {
        //                 "topic": "Virtual reality",
        //                 "topicId": "4462",
        //                 "url": "https://www.semanticscholar.org/topic/4462"
        //             },
        //             {
        //                 "topic": "Motion planning",
        //                 "topicId": "24367",
        //                 "url": "https://www.semanticscholar.org/topic/24367"
        //             },
        //             {
        //                 "topic": "Systems engineering",
        //                 "topicId": "23282",
        //                 "url": "https://www.semanticscholar.org/topic/23282"
        //             },
        //             {
        //                 "topic": "Fundamental interaction",
        //                 "topicId": "362949",
        //                 "url": "https://www.semanticscholar.org/topic/362949"
        //             },
        //             {
        //                 "topic": "Global variable",
        //                 "topicId": "123932",
        //                 "url": "https://www.semanticscholar.org/topic/123932"
        //             },
        //             {
        //                 "topic": "Next-generation network",
        //                 "topicId": "40718",
        //                 "url": "https://www.semanticscholar.org/topic/40718"
        //             },
        //             {
        //                 "topic": "Cloud computing",
        //                 "topicId": "2756",
        //                 "url": "https://www.semanticscholar.org/topic/2756"
        //             },
        //             {
        //                 "topic": "Simulation",
        //                 "topicId": "194",
        //                 "url": "https://www.semanticscholar.org/topic/194"
        //             },
        //             {
        //                 "topic": "Testbed",
        //                 "topicId": "1705",
        //                 "url": "https://www.semanticscholar.org/topic/1705"
        //             },
        //             {
        //                 "topic": "Agile software development",
        //                 "topicId": "21126",
        //                 "url": "https://www.semanticscholar.org/topic/21126"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "a32b265d7b94054b28edd492ee1fd3d86f0bf4c1",
        //         "title": "Real-Time Detection of Hybrid and Stealthy Cyber-Attacks in Smart Grid",
        //         "abstract": "For a safe and reliable operation of the smart grid, timely detection of cyber-attacks is of critical importance. Moreover, considering smarter and more capable attackers, robust detection mechanisms are needed against a diverse range of cyber-attacks. With these purposes, we propose a robust online detection algorithm for (possibly combined) false data injection and jamming attacks, that also provides online estimates of the unknown and time-varying attack parameters and recovered state estimates. Further, considering smarter attackers that are capable of designing stealthy attacks to prevent the detection or to increase the detection delay of the proposed algorithm, we propose additional countermeasures. Numerical studies illustrate the quick and reliable response of the proposed detection mechanisms against hybrid and stealthy cyber-attacks.",
        //         "year": 2018,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Mathematics",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "32516303",
        //                 "name": "Mehmet Necip Kurt"
        //             },
        //             {
        //                 "authorId": "79595155",
        //                 "name": "Yasin Y\u0131lmaz"
        //             },
        //             {
        //                 "authorId": "47119575",
        //                 "name": "Xiaodong Wang"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Simulation",
        //                 "topicId": "194",
        //                 "url": "https://www.semanticscholar.org/topic/194"
        //             },
        //             {
        //                 "topic": "Smart transducer",
        //                 "topicId": "212021",
        //                 "url": "https://www.semanticscholar.org/topic/212021"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "Elegant degradation",
        //                 "topicId": "5091",
        //                 "url": "https://www.semanticscholar.org/topic/5091"
        //             },
        //             {
        //                 "topic": "Sensor node",
        //                 "topicId": "1053",
        //                 "url": "https://www.semanticscholar.org/topic/1053"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "922b221eb59435c2d46fac945cc6474c25ed6876",
        //         "title": "Tallinn Manual on the International Law applicable to Cyber Warfare: prepared by the International Group of Experts at the Invitation of the NATO Cooperative Cyber Defence Centre of Excellence",
        //         "abstract": "Tallinn Manual 2.0 expands on the highly influential first edition by extending its coverage of the international law governing cyber operations to peacetime legal regimes. The product of a three-year follow-on project by a new group of twenty renowned international law experts, it addresses such topics as sovereignty, state responsibility, human rights, and the law of air, space, and the sea. Tallinn Manual 2.0 identifies 154 'black letter' rules governing cyber operations and provides extensive commentary on each rule. Although Tallinn Manual 2.0 represents the views of the experts in their personal capacity, the project benefitted from the unofficial input of many states and over fifty peer reviewers.",
        //         "year": 2017,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Political Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "24369525",
        //                 "name": "M. Schmitt"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Big data",
        //                 "topicId": "20355",
        //                 "url": "https://www.semanticscholar.org/topic/20355"
        //             },
        //             {
        //                 "topic": "Cloud computing",
        //                 "topicId": "2756",
        //                 "url": "https://www.semanticscholar.org/topic/2756"
        //             },
        //             {
        //                 "topic": "Parallel computing",
        //                 "topicId": "901",
        //                 "url": "https://www.semanticscholar.org/topic/901"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Service layer",
        //                 "topicId": "94963",
        //                 "url": "https://www.semanticscholar.org/topic/94963"
        //             },
        //             {
        //                 "topic": "Clustered file system",
        //                 "topicId": "26026",
        //                 "url": "https://www.semanticscholar.org/topic/26026"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "734c5b0cc839af588913a10406907f58d9588caf",
        //         "title": "Optimal Linear Cyber-Attack on Remote State Estimation",
        //         "abstract": "Recent years have witnessed the surge of interest of security issues in cyber-physical systems. In this paper, we consider malicious cyber attacks in a remote state estimation application where a smart sensor node transmits data to a remote estimator equipped with a false data detector. It is assumed that all the sensor data can be observed and modified by the malicious attacker and a residue-based detection algorithm is used at the remote side to detect data anomalies. We propose a linear deception attack strategy and present the corresponding feasibility constraint which guarantees that the attacker is able to successfully inject false data without being detected. The evolution of the estimation error covariance at the remote estimator is derived and the degradation of system performance under the proposed linear attack policy is analyzed. Furthermore, we obtain a closed-form expression of the optimal attack strategy among all linear attacks. Comparison of attack strategies through simulated examples are provided to illustrate the theoretical results.",
        //         "year": 2017,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "48183595",
        //                 "name": "Ziyang Guo"
        //             },
        //             {
        //                 "authorId": "3269919",
        //                 "name": "Dawei Shi"
        //             },
        //             {
        //                 "authorId": "1679177",
        //                 "name": "K. Johansson"
        //             },
        //             {
        //                 "authorId": "144159433",
        //                 "name": "Ling Shi"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Work systems",
        //                 "topicId": "240491",
        //                 "url": "https://www.semanticscholar.org/topic/240491"
        //             },
        //             {
        //                 "topic": "Industry 4.0",
        //                 "topicId": "263883",
        //                 "url": "https://www.semanticscholar.org/topic/263883"
        //             },
        //             {
        //                 "topic": "Automation",
        //                 "topicId": "93663",
        //                 "url": "https://www.semanticscholar.org/topic/93663"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Man-Computer Symbiosis",
        //                 "topicId": "1739346",
        //                 "url": "https://www.semanticscholar.org/topic/1739346"
        //             },
        //             {
        //                 "topic": "User interface",
        //                 "topicId": "4509",
        //                 "url": "https://www.semanticscholar.org/topic/4509"
        //             },
        //             {
        //                 "topic": "Adaptive system",
        //                 "topicId": "15533",
        //                 "url": "https://www.semanticscholar.org/topic/15533"
        //             },
        //             {
        //                 "topic": "Control theory",
        //                 "topicId": "3317",
        //                 "url": "https://www.semanticscholar.org/topic/3317"
        //             },
        //             {
        //                 "topic": "Personalization",
        //                 "topicId": "2873",
        //                 "url": "https://www.semanticscholar.org/topic/2873"
        //             },
        //             {
        //                 "topic": "Control system",
        //                 "topicId": "80",
        //                 "url": "https://www.semanticscholar.org/topic/80"
        //             },
        //             {
        //                 "topic": "Embedded system",
        //                 "topicId": "4423",
        //                 "url": "https://www.semanticscholar.org/topic/4423"
        //             },
        //             {
        //                 "topic": "Emoticon",
        //                 "topicId": "55238",
        //                 "url": "https://www.semanticscholar.org/topic/55238"
        //             },
        //             {
        //                 "topic": "Anthropometry",
        //                 "topicId": "44574",
        //                 "url": "https://www.semanticscholar.org/topic/44574"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "d309c1e902732a6932d52ffe97875f9280723db9",
        //         "title": "Cyber Threats Facing Autonomous and Connected Vehicles: Future Challenges",
        //         "abstract": "Vehicles are currently being developed and sold with increasing levels of connectivity and automation. As with all networked computing devices, increased connectivity often results in a heightened risk of a cyber security attack. Furthermore, increased automation exacerbates any risk by increasing the opportunities for the adversary to implement a successful attack. In this paper, a large volume of publicly accessible literature is reviewed and compartmentalized based on the vulnerabilities identified and mitigation techniques developed. This review highlighted that the majority of studies are reactive and vulnerabilities are often discovered by friendly adversaries (white-hat hackers). Many gaps in the knowledge base were identified. Priority should be given to address these knowledge gaps to minimize future cyber security risks in the connected and autonomous vehicle sector.",
        //         "year": 2017,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science",
        //             "Engineering"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "49427188",
        //                 "name": "S. Parkinson"
        //             },
        //             {
        //                 "authorId": "2053040863",
        //                 "name": "Paul Ward"
        //             },
        //             {
        //                 "authorId": "2105626110",
        //                 "name": "Kyle M. Wilson"
        //             },
        //             {
        //                 "authorId": "2116335674",
        //                 "name": "Jonathan Miller"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Insider threat",
        //                 "topicId": "352352",
        //                 "url": "https://www.semanticscholar.org/topic/352352"
        //             },
        //             {
        //                 "topic": "Threat (computer)",
        //                 "topicId": "313615",
        //                 "url": "https://www.semanticscholar.org/topic/313615"
        //             },
        //             {
        //                 "topic": "Sensor",
        //                 "topicId": "1117",
        //                 "url": "https://www.semanticscholar.org/topic/1117"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "Kill chain",
        //                 "topicId": "772671",
        //                 "url": "https://www.semanticscholar.org/topic/772671"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Privileged access",
        //                 "topicId": "2482108",
        //                 "url": "https://www.semanticscholar.org/topic/2482108"
        //             },
        //             {
        //                 "topic": "Malware",
        //                 "topicId": "3176",
        //                 "url": "https://www.semanticscholar.org/topic/3176"
        //             },
        //             {
        //                 "topic": "Compiler",
        //                 "topicId": "13817",
        //                 "url": "https://www.semanticscholar.org/topic/13817"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "c19cc9491ed22e116ff288fc5a12a29792bd0f89",
        //         "title": "A Survey on Smart Grid Cyber-Physical System Testbeds",
        //         "abstract": "An increasing interest is emerging on the development of smart grid cyber-physical system testbeds. As new communication and information technologies emerge, innovative cyber-physical system testbeds need to leverage realistic and scalable platforms. Indeed, the interdisciplinary structure of the smart grid concept compels heterogeneous testbeds with different capabilities. There is a significant need to evaluate new concepts and vulnerabilities as opposed to counting on solely simulation studies especially using hardware-in-the-loop test platforms. In this paper, we present a comprehensive survey on cyber-physical smart grid testbeds aiming to provide a taxonomy and insightful guidelines for the development as well as to identify the key features and design decisions while developing future smart grid testbeds. First, this survey provides a four step taxonomy based on smart grid domains, research goals, test platforms, and communication infrastructure. Then, we introduce an overview with a detailed discussion and an evaluation on existing testbeds from the literature. Finally, we conclude this paper with a look on future trends and developments in cyber-physical smart grid testbed research.",
        //         "year": 2017,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "3007033",
        //                 "name": "M. Cintuglu"
        //             },
        //             {
        //                 "authorId": "144386488",
        //                 "name": "O. Mohammed"
        //             },
        //             {
        //                 "authorId": "144750371",
        //                 "name": "K. Akkaya"
        //             },
        //             {
        //                 "authorId": "47888295",
        //                 "name": "A. Uluagac"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Fuzzy control system",
        //                 "topicId": "49134",
        //                 "url": "https://www.semanticscholar.org/topic/49134"
        //             },
        //             {
        //                 "topic": "Linear matrix inequality",
        //                 "topicId": "39841",
        //                 "url": "https://www.semanticscholar.org/topic/39841"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "Mathematical model",
        //                 "topicId": "8753",
        //                 "url": "https://www.semanticscholar.org/topic/8753"
        //             },
        //             {
        //                 "topic": "Control theory",
        //                 "topicId": "3317",
        //                 "url": "https://www.semanticscholar.org/topic/3317"
        //             },
        //             {
        //                 "topic": "Social inequality",
        //                 "topicId": "221227",
        //                 "url": "https://www.semanticscholar.org/topic/221227"
        //             },
        //             {
        //                 "topic": "Lyapunov fractal",
        //                 "topicId": "973026",
        //                 "url": "https://www.semanticscholar.org/topic/973026"
        //             },
        //             {
        //                 "topic": "Bernoulli polynomials",
        //                 "topicId": "305205",
        //                 "url": "https://www.semanticscholar.org/topic/305205"
        //             },
        //             {
        //                 "topic": "Asymptote",
        //                 "topicId": "13771",
        //                 "url": "https://www.semanticscholar.org/topic/13771"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "274236b7134ef295b5cac5c5890ec6e221f0f441",
        //         "title": "Intimate Partner Violence Victimization in the Cyber and Real World: Examining the Extent of Cyber Aggression Experiences and Its Association With In-Person Dating Violence",
        //         "abstract": "This study explores the extent of cyber aggression victimization in intimate relationships and its co-occurrence with in-person experiences of psychological, physical, and sexual partner violence. Data were collected from 540 college students who reported being in a dating relationship in the past 12 months. Participants were asked to complete an online questionnaire that included measures assessing intimate partner victimization experiences in differing social contexts (through socially interactive technology and in face-to-face encounters). Findings indicated that intimate partner cyber aggression victimization is not uncommon, as nearly three quarters of respondents reported having experienced some form of it in the past year. Multivariate analyses also indicate that such aggression may be part of a larger violence nexus given its relation to in-person psychological, physical, and sexual partner violence victimization experiences. In light of these findings, it is recommended that longitudinal research encompassing multiple violence victimization experiences in varying social contexts is completed to determine whether online experiences foreshadow offline ones and, if so, consider interaction effects on outcomes as well as potential intervention strategies to reduce harm associated with such negative experiences.",
        //         "year": 2018,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Psychology",
        //             "Medicine"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2585045",
        //                 "name": "Alison J. Marganski"
        //             },
        //             {
        //                 "authorId": "3201136",
        //                 "name": "Lisa A. Melander"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Edge computing",
        //                 "topicId": "88030",
        //                 "url": "https://www.semanticscholar.org/topic/88030"
        //             },
        //             {
        //                 "topic": "Personalization",
        //                 "topicId": "2873",
        //                 "url": "https://www.semanticscholar.org/topic/2873"
        //             },
        //             {
        //                 "topic": "Social system",
        //                 "topicId": "13500",
        //                 "url": "https://www.semanticscholar.org/topic/13500"
        //             },
        //             {
        //                 "topic": "Social reality",
        //                 "topicId": "9686",
        //                 "url": "https://www.semanticscholar.org/topic/9686"
        //             },
        //             {
        //                 "topic": "Programming paradigm",
        //                 "topicId": "29522",
        //                 "url": "https://www.semanticscholar.org/topic/29522"
        //             },
        //             {
        //                 "topic": "Real-time clock",
        //                 "topicId": "121831",
        //                 "url": "https://www.semanticscholar.org/topic/121831"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "0aac06fb8dd7687cd54e3d818cede74418aeb304",
        //         "title": "A Cloud-Edge Computing Framework for Cyber-Physical-Social Services",
        //         "abstract": "Cyber-physical-social systems (CPSSs) represent an emerging paradigm encompassing the cyber world, physical world and social world. One of the main purposes of CPSSs is to provide high-quality, proactive, and personalized services for humans. For CPSSs to realize this purpose, a novel services framework is needed. In this article, we present a tensor-based cloud-edge computing framework that mainly includes the cloud and edge planes. The cloud plane is used to process large-scale, long-term, global data, which can be used to obtain decision making information such as the feature, law, or rule sets. The edge plane is used to process small-scale, short-term, local data, which is used to present the real-time situation. Also, personalized services will be directly provided for humans by the edge plane according to the obtained feature, law, or rule sets and the local high-quality data obtained in the edge plane. Then a tensor-based services model is proposed to match the requirement of users in the local CPSS. Finally, a case study about CPSS services is proposed to demonstrate the application features of the proposed framework.",
        //         "year": 2017,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "4495338",
        //                 "name": "Xiaokang Wang"
        //             },
        //             {
        //                 "authorId": "1690341",
        //                 "name": "L. Yang"
        //             },
        //             {
        //                 "authorId": "143857109",
        //                 "name": "Xia Xie"
        //             },
        //             {
        //                 "authorId": "22205281",
        //                 "name": "Jirong Jin"
        //             },
        //             {
        //                 "authorId": "145349372",
        //                 "name": "M. Deen"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Data mining",
        //                 "topicId": "7837",
        //                 "url": "https://www.semanticscholar.org/topic/7837"
        //             },
        //             {
        //                 "topic": "Machine learning",
        //                 "topicId": "168",
        //                 "url": "https://www.semanticscholar.org/topic/168"
        //             },
        //             {
        //                 "topic": "Intrusion detection system",
        //                 "topicId": "3180",
        //                 "url": "https://www.semanticscholar.org/topic/3180"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Relevance",
        //                 "topicId": "503",
        //                 "url": "https://www.semanticscholar.org/topic/503"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "69f03212c3756edf6131e6a6f2161c18c1ff1301",
        //         "title": "Observer-Based Event-Triggering Consensus Control for Multiagent Systems With Lossy Sensors and Cyber-Attacks",
        //         "abstract": "In this paper, the observer-based event-triggering consensus control problem is investigated for a class of discrete-time multiagent systems with lossy sensors and cyber-attacks. A novel distributed observer is proposed to estimate the relative full states and the estimated states are then used in the feedback protocol in order to achieve the overall consensus. An event-triggered mechanism with state-independent threshold is adopted to update the control input signals so as to reduce unnecessary data communications. The success ratio of the launched attacks is taken into account to reflect the probabilistic failures of the attacks passing through the protection devices subject to limited resources and network fluctuations. The purpose of the address problem is to design an observer-based distributed controller such that the closed-loop multiagent system achieves the prescribed consensus in spite of the lossy sensors and cyber-attacks. By making use of eigenvalues and eigenvectors of the Laplacian matrix, the closed-loop system is transformed into an easy-to-analyze setting and then a sufficient condition is derived to guarantee the desired consensus. Furthermore, the controller gain is obtained in terms of the solution to certain matrix inequality which is independent of the number of agents. An algorithm is provided to optimize the consensus bound. Finally, a simulation example is utilized to illustrate the usefulness of the proposed controller design scheme.",
        //         "year": 2017,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science",
        //             "Medicine"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1795716",
        //                 "name": "Derui Ding"
        //             },
        //             {
        //                 "authorId": "2108454322",
        //                 "name": "Zidong Wang"
        //             },
        //             {
        //                 "authorId": "145612543",
        //                 "name": "D. Ho"
        //             },
        //             {
        //                 "authorId": "1705016",
        //                 "name": "G. Wei"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Experience",
        //                 "topicId": "460135",
        //                 "url": "https://www.semanticscholar.org/topic/460135"
        //             },
        //             {
        //                 "topic": "Victimization",
        //                 "topicId": "12875",
        //                 "url": "https://www.semanticscholar.org/topic/12875"
        //             },
        //             {
        //                 "topic": "Physiological Sexual Disorders",
        //                 "topicId": "2387",
        //                 "url": "https://www.semanticscholar.org/topic/2387"
        //             },
        //             {
        //                 "topic": "Intimate Partner Violence",
        //                 "topicId": "56758",
        //                 "url": "https://www.semanticscholar.org/topic/56758"
        //             },
        //             {
        //                 "topic": "Large",
        //                 "topicId": "28275",
        //                 "url": "https://www.semanticscholar.org/topic/28275"
        //             },
        //             {
        //                 "topic": "Nexus (resin cement)",
        //                 "topicId": "233966",
        //                 "url": "https://www.semanticscholar.org/topic/233966"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "a78474fd302a438bc11232168ad2ffcf3fde5976",
        //         "title": "A Framework for Cyber-Topology Attacks: Line-Switching and New Attack Scenarios",
        //         "abstract": "Cyber security of modern power systems has drawn increasing attention in recent years. This paper proposes a class of cyber-topology attacks derived from false data injection attacks, with the aim of disturbing the operation of power systems. Three kinds of cyber-topology attack are proposed: 1) line-addition attack; 2) line-removal attack; and 3) line-switching attack. By directly misleading the decision-making process of the independent system operator, the proposed cyber-topology attack consequently affects the economic operation and security of the system. We establish optimal attack models for different cyber-topology attack scenarios, and use a recently proposed metaheuristic optimization algorithm the natural aggregation algorithm to solve the resulting attack models. Experiments based on the IEEE 39-node benchmark system show that the proposed class of attacks poses a significant threat to modern power systems.",
        //         "year": 2019,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "14773099",
        //                 "name": "Gaoqi Liang"
        //             },
        //             {
        //                 "authorId": "1925006",
        //                 "name": "S. Weller"
        //             },
        //             {
        //                 "authorId": "10261855",
        //                 "name": "Junhua Zhao"
        //             },
        //             {
        //                 "authorId": "39321868",
        //                 "name": "F. Luo"
        //             },
        //             {
        //                 "authorId": "144402926",
        //                 "name": "Z. Dong"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Sensor",
        //                 "topicId": "1117",
        //                 "url": "https://www.semanticscholar.org/topic/1117"
        //             },
        //             {
        //                 "topic": "Watermark (data file)",
        //                 "topicId": "12530",
        //                 "url": "https://www.semanticscholar.org/topic/12530"
        //             },
        //             {
        //                 "topic": "AS-Interface",
        //                 "topicId": "832136",
        //                 "url": "https://www.semanticscholar.org/topic/832136"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Telecommunications network",
        //                 "topicId": "32720",
        //                 "url": "https://www.semanticscholar.org/topic/32720"
        //             },
        //             {
        //                 "topic": "The Matrix",
        //                 "topicId": "17947",
        //                 "url": "https://www.semanticscholar.org/topic/17947"
        //             },
        //             {
        //                 "topic": "Physical plant",
        //                 "topicId": "1411823",
        //                 "url": "https://www.semanticscholar.org/topic/1411823"
        //             },
        //             {
        //                 "topic": "Malware",
        //                 "topicId": "3176",
        //                 "url": "https://www.semanticscholar.org/topic/3176"
        //             },
        //             {
        //                 "topic": "Control theory",
        //                 "topicId": "3317",
        //                 "url": "https://www.semanticscholar.org/topic/3317"
        //             },
        //             {
        //                 "topic": "Control system",
        //                 "topicId": "80",
        //                 "url": "https://www.semanticscholar.org/topic/80"
        //             },
        //             {
        //                 "topic": "Nonlinear system",
        //                 "topicId": "5329",
        //                 "url": "https://www.semanticscholar.org/topic/5329"
        //             },
        //             {
        //                 "topic": "Denial-of-service attack",
        //                 "topicId": "10149",
        //                 "url": "https://www.semanticscholar.org/topic/10149"
        //             },
        //             {
        //                 "topic": "Column (database)",
        //                 "topicId": "5424",
        //                 "url": "https://www.semanticscholar.org/topic/5424"
        //             },
        //             {
        //                 "topic": "Software deployment",
        //                 "topicId": "328066",
        //                 "url": "https://www.semanticscholar.org/topic/328066"
        //             },
        //             {
        //                 "topic": "Digital watermarking",
        //                 "topicId": "12552",
        //                 "url": "https://www.semanticscholar.org/topic/12552"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "1c95aaee295b30b05bffbe871ccacea8dab54af8",
        //         "title": "Review on cyber-physical systems",
        //         "abstract": "Cyber-physical systems U+0028 CPS U+0029 are complex systems with organic integration and in-depth collaboration of computation, communications and control U+0028 3C U+0029 technology. Subject to the theory and technology of existing network systems and physical systems, the development of CPS is facing enormous challenges. This paper first introduces the concept and characteristics of CPS and analyzes the present situation of CPS researches. Then the development of CPS is discussed from perspectives of system model, information processing technology and software design. At last it analyzes the main obstacles and key researches in developing CPS.",
        //         "year": 2017,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2152798672",
        //                 "name": "Yang Liu"
        //             },
        //             {
        //                 "authorId": "145730941",
        //                 "name": "Yu Peng"
        //             },
        //             {
        //                 "authorId": "1805701",
        //                 "name": "Bailing Wang"
        //             },
        //             {
        //                 "authorId": "2111979054",
        //                 "name": "Sirui Yao"
        //             },
        //             {
        //                 "authorId": "2117941499",
        //                 "name": "Zihe Liu"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Machine learning",
        //                 "topicId": "168",
        //                 "url": "https://www.semanticscholar.org/topic/168"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Deep learning",
        //                 "topicId": "2762",
        //                 "url": "https://www.semanticscholar.org/topic/2762"
        //             },
        //             {
        //                 "topic": "Malware",
        //                 "topicId": "3176",
        //                 "url": "https://www.semanticscholar.org/topic/3176"
        //             },
        //             {
        //                 "topic": "Enterprise system",
        //                 "topicId": "126514",
        //                 "url": "https://www.semanticscholar.org/topic/126514"
        //             },
        //             {
        //                 "topic": "Network packet",
        //                 "topicId": "10258",
        //                 "url": "https://www.semanticscholar.org/topic/10258"
        //             },
        //             {
        //                 "topic": "Logic programming",
        //                 "topicId": "6032",
        //                 "url": "https://www.semanticscholar.org/topic/6032"
        //             },
        //             {
        //                 "topic": "Experiment",
        //                 "topicId": "378",
        //                 "url": "https://www.semanticscholar.org/topic/378"
        //             },
        //             {
        //                 "topic": "Capability Maturity Model",
        //                 "topicId": "134548",
        //                 "url": "https://www.semanticscholar.org/topic/134548"
        //             },
        //             {
        //                 "topic": "Spamming",
        //                 "topicId": "58352",
        //                 "url": "https://www.semanticscholar.org/topic/58352"
        //             },
        //             {
        //                 "topic": "Dental Intrusion",
        //                 "topicId": "3173",
        //                 "url": "https://www.semanticscholar.org/topic/3173"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "EYS gene",
        //                 "topicId": "407037",
        //                 "url": "https://www.semanticscholar.org/topic/407037"
        //             },
        //             {
        //                 "topic": "Entity Name Part Qualifier - adopted",
        //                 "topicId": "12637",
        //                 "url": "https://www.semanticscholar.org/topic/12637"
        //             },
        //             {
        //                 "topic": "Solutions",
        //                 "topicId": "28500",
        //                 "url": "https://www.semanticscholar.org/topic/28500"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "d833453d06b5faee03be7f52405478f8585c5b19",
        //         "title": "Cloud-Supported Cyber\u2013Physical Localization Framework for Patients Monitoring",
        //         "abstract": "The potential of cloud-supported cyber\u2013physical systems (CCPSs) has drawn a great deal of interest from academia and industry. CCPSs facilitate the seamless integration of devices in the physical world (e.g., sensors, cameras, microphones, speakers, and GPS devices) with cyberspace. This enables a range of emerging applications or systems such as patient or health monitoring, which require patient locations to be tracked. These systems integrate a large number of physical devices such as sensors with localization technologies (e.g., GPS and wireless local area networks) to generate, sense, analyze, and share huge quantities of medical and user-location data for complex processing. However, there are a number of challenges regarding these systems in terms of the positioning of patients, ubiquitous access, large-scale computation, and communication. Hence, there is a need for an infrastructure or system that can provide scalability and ubiquity in terms of huge real-time data processing and communications in the cyber or cloud space. To this end, this paper proposes a cloud-supported cyber\u2013physical localization system for patient monitoring using smartphones to acquire voice and electroencephalogram signals in a scalable, real-time, and efficient manner. The proposed approach uses Gaussian mixture modeling for localization and is shown to outperform other similar methods in terms of error estimation.",
        //         "year": 2017,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2107176546",
        //                 "name": "M. S. Hossain"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Deep learning",
        //                 "topicId": "2762",
        //                 "url": "https://www.semanticscholar.org/topic/2762"
        //             },
        //             {
        //                 "topic": "Sparse matrix",
        //                 "topicId": "126",
        //                 "url": "https://www.semanticscholar.org/topic/126"
        //             },
        //             {
        //                 "topic": "Electrical load",
        //                 "topicId": "213933",
        //                 "url": "https://www.semanticscholar.org/topic/213933"
        //             },
        //             {
        //                 "topic": "Adversary (cryptography)",
        //                 "topicId": "5369",
        //                 "url": "https://www.semanticscholar.org/topic/5369"
        //             },
        //             {
        //                 "topic": "Support vector machine",
        //                 "topicId": "8915",
        //                 "url": "https://www.semanticscholar.org/topic/8915"
        //             },
        //             {
        //                 "topic": "Optimization problem",
        //                 "topicId": "12682",
        //                 "url": "https://www.semanticscholar.org/topic/12682"
        //             },
        //             {
        //                 "topic": "Environment variable",
        //                 "topicId": "35671",
        //                 "url": "https://www.semanticscholar.org/topic/35671"
        //             },
        //             {
        //                 "topic": "Autoencoder",
        //                 "topicId": "433939",
        //                 "url": "https://www.semanticscholar.org/topic/433939"
        //             },
        //             {
        //                 "topic": "Nonlinear system",
        //                 "topicId": "5329",
        //                 "url": "https://www.semanticscholar.org/topic/5329"
        //             },
        //             {
        //                 "topic": "Encoder",
        //                 "topicId": "16744",
        //                 "url": "https://www.semanticscholar.org/topic/16744"
        //             },
        //             {
        //                 "topic": "Mathematical optimization",
        //                 "topicId": "89",
        //                 "url": "https://www.semanticscholar.org/topic/89"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "6558a03404e0472f27c726dda9f8617ce68cf801",
        //         "title": "Enhanced Cyber-Physical Security in Internet of Things Through Energy Auditing",
        //         "abstract": "Internet of Things (IoT) are vulnerable to both cyber and physical attacks. Therefore, a cyber-physical security system against different kinds of attacks is in high demand. Traditionally, attacks are detected via monitoring system logs. However, the system logs, such as network statistics and file access records, can be forged. Furthermore, existing solutions mainly target cyber attacks. This paper proposes the first energy auditing and analytics-based IoT monitoring mechanism. To our best knowledge, this is the first attempt to detect and identify IoT cyber and physical attacks based on energy auditing. Using the energy meter readings, we develop a dual deep learning (DL) model system, which adaptively learns the system behaviors in a normal condition. Unlike the previous single DL models for energy disaggregation, we propose a disaggregation-aggregation architecture. The innovative design makes it possible to detect both cyber and physical attacks. The disaggregation model analyzes the energy consumptions of system subcomponents, e.g., CPU, network, disk, etc., to identify cyber attacks, while the aggregation model detects the physical attacks by characterizing the difference between the measured power consumption and prediction results. Using energy consumption data only, the proposed system identifies both cyber and physical attacks. The system and algorithm designs are described in detail. In the hardware simulation experiments, the proposed system exhibits promising performances.",
        //         "year": 2019,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "144892956",
        //                 "name": "Fangyu Li"
        //             },
        //             {
        //                 "authorId": "2119037810",
        //                 "name": "Yang Shi"
        //             },
        //             {
        //                 "authorId": "2061414047",
        //                 "name": "Aditya Shinde"
        //             },
        //             {
        //                 "authorId": "49398584",
        //                 "name": "Jin Ye"
        //             },
        //             {
        //                 "authorId": "153539329",
        //                 "name": "Wenzhan Song"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "IBM Power Systems",
        //                 "topicId": "64187",
        //                 "url": "https://www.semanticscholar.org/topic/64187"
        //             },
        //             {
        //                 "topic": "Assistive technology",
        //                 "topicId": "2612",
        //                 "url": "https://www.semanticscholar.org/topic/2612"
        //             },
        //             {
        //                 "topic": "Sensor",
        //                 "topicId": "1117",
        //                 "url": "https://www.semanticscholar.org/topic/1117"
        //             },
        //             {
        //                 "topic": "Controller (computing)",
        //                 "topicId": "16110",
        //                 "url": "https://www.semanticscholar.org/topic/16110"
        //             },
        //             {
        //                 "topic": "Distributed control system",
        //                 "topicId": "67794",
        //                 "url": "https://www.semanticscholar.org/topic/67794"
        //             },
        //             {
        //                 "topic": "Elegant degradation",
        //                 "topicId": "5091",
        //                 "url": "https://www.semanticscholar.org/topic/5091"
        //             },
        //             {
        //                 "topic": "Programming paradigm",
        //                 "topicId": "29522",
        //                 "url": "https://www.semanticscholar.org/topic/29522"
        //             },
        //             {
        //                 "topic": "Parametric polymorphism",
        //                 "topicId": "226707",
        //                 "url": "https://www.semanticscholar.org/topic/226707"
        //             },
        //             {
        //                 "topic": "Denial-of-service attack",
        //                 "topicId": "10149",
        //                 "url": "https://www.semanticscholar.org/topic/10149"
        //             },
        //             {
        //                 "topic": "Numerical method",
        //                 "topicId": "12927",
        //                 "url": "https://www.semanticscholar.org/topic/12927"
        //             },
        //             {
        //                 "topic": "MIDI controller",
        //                 "topicId": "46755",
        //                 "url": "https://www.semanticscholar.org/topic/46755"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "228b4e4bce405c6ecb401a07b8912a0cb9d62668",
        //         "title": "Anomaly Detection in Cyber Physical Systems Using Recurrent Neural Networks",
        //         "abstract": "This paper presents a novel unsupervised approach to detect cyber attacks in Cyber-Physical Systems (CPS). We describe an unsupervised learning approach using a Recurrent Neural network which is a time series predictor as our model. We then use the Cumulative Sum method to identify anomalies in a replicate of a water treatment plant. The proposed method not only detects anomalies in the CPS but also identifies the sensor that was attacked. The experiments were performed on a complex dataset which is collected through a Secure Water Treatment Testbed (SWaT). Through the experiments, we show that the proposed technique is able to detect majority of the attacks designed by our research team with low false positive rates.",
        //         "year": 2017,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "121813988",
        //                 "name": "Jonathan Goh"
        //             },
        //             {
        //                 "authorId": "2566932",
        //                 "name": "Sridhar Adepu"
        //             },
        //             {
        //                 "authorId": "2068028974",
        //                 "name": "Marcus Tan"
        //             },
        //             {
        //                 "authorId": "1392753101",
        //                 "name": "Zi Shan Lee"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Operating system",
        //                 "topicId": "1367",
        //                 "url": "https://www.semanticscholar.org/topic/1367"
        //             },
        //             {
        //                 "topic": "Smart TV",
        //                 "topicId": "216625",
        //                 "url": "https://www.semanticscholar.org/topic/216625"
        //             },
        //             {
        //                 "topic": "Virtual machine",
        //                 "topicId": "26028",
        //                 "url": "https://www.semanticscholar.org/topic/26028"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Automatic control",
        //                 "topicId": "71859",
        //                 "url": "https://www.semanticscholar.org/topic/71859"
        //             },
        //             {
        //                 "topic": "Introspection",
        //                 "topicId": "124535",
        //                 "url": "https://www.semanticscholar.org/topic/124535"
        //             },
        //             {
        //                 "topic": "Control system",
        //                 "topicId": "80",
        //                 "url": "https://www.semanticscholar.org/topic/80"
        //             },
        //             {
        //                 "topic": "Out-of-band agreement",
        //                 "topicId": "3612081",
        //                 "url": "https://www.semanticscholar.org/topic/3612081"
        //             },
        //             {
        //                 "topic": "Automatic identification and data capture",
        //                 "topicId": "66372",
        //                 "url": "https://www.semanticscholar.org/topic/66372"
        //             },
        //             {
        //                 "topic": "Experiment",
        //                 "topicId": "378",
        //                 "url": "https://www.semanticscholar.org/topic/378"
        //             },
        //             {
        //                 "topic": "Volatility",
        //                 "topicId": "72569",
        //                 "url": "https://www.semanticscholar.org/topic/72569"
        //             },
        //             {
        //                 "topic": "Real-time clock",
        //                 "topicId": "121831",
        //                 "url": "https://www.semanticscholar.org/topic/121831"
        //             },
        //             {
        //                 "topic": "Real-time transcription",
        //                 "topicId": "763488",
        //                 "url": "https://www.semanticscholar.org/topic/763488"
        //             },
        //             {
        //                 "topic": "Threat (computer)",
        //                 "topicId": "313615",
        //                 "url": "https://www.semanticscholar.org/topic/313615"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "88cd352a02b017f8190686271594b62ca464b638",
        //         "title": "Cyber security meets artificial intelligence: a survey",
        //         "abstract": "There is a wide range of interdisciplinary intersections between cyber security and artificial intelligence (AI). On one hand, AI technologies, such as deep learning, can be introduced into cyber security to construct smart models for implementing malware classification and intrusion detection and threating intelligence sensing. On the other hand, AI models will face various cyber threats, which will disturb their sample, learning, and decisions. Thus, AI models need specific cyber security defense and protection technologies to combat adversarial machine learning, preserve privacy in machine learning, secure federated learning, etc. Based on the above two aspects, we review the intersection of AI and cyber security. First, we summarize existing research efforts in terms of combating cyber attacks using AI, including adopting traditional machine learning methods and existing deep learning solutions. Then, we analyze the counterattacks from which AI itself may suffer, dissect their characteristics, and classify the corresponding defense methods. Finally, from the aspects of constructing encrypted neural network and realizing a secure federated deep learning, we expatiate the existing research on how to build a secure AI system.",
        //         "year": 2018,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2116452692",
        //                 "name": "Jian-hua Li"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Software design",
        //                 "topicId": "16688",
        //                 "url": "https://www.semanticscholar.org/topic/16688"
        //             },
        //             {
        //                 "topic": "Information processing",
        //                 "topicId": "1303",
        //                 "url": "https://www.semanticscholar.org/topic/1303"
        //             },
        //             {
        //                 "topic": "Computation",
        //                 "topicId": "339",
        //                 "url": "https://www.semanticscholar.org/topic/339"
        //             },
        //             {
        //                 "topic": "Computer science",
        //                 "topicId": "4506",
        //                 "url": "https://www.semanticscholar.org/topic/4506"
        //             },
        //             {
        //                 "topic": "Complex systems",
        //                 "topicId": "16765",
        //                 "url": "https://www.semanticscholar.org/topic/16765"
        //             },
        //             {
        //                 "topic": "Economic Development",
        //                 "topicId": "32727",
        //                 "url": "https://www.semanticscholar.org/topic/32727"
        //             },
        //             {
        //                 "topic": "Counts per second",
        //                 "topicId": "2271209",
        //                 "url": "https://www.semanticscholar.org/topic/2271209"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "bd448c117be194525fac1baab74744b78afe4935",
        //         "title": "Cyber-Dependent Crimes: An Interdisciplinary Review",
        //         "abstract": "Online crime has increased in severity and frequency over the past two decades. However, although several scientific disciplines have commonly employed criminological theories to explain this phenomenon, mainstream criminology has devoted relatively scant attention to the investigation of cyber-criminals and their victims. Drawing on this assumption that more criminological attention should be given to this important type of crime, this article presents an interdisciplinary review of the current state of research on cyber-dependent crimes (i.e., crimes that require the use of computer technology to exist, such as hacking). We begin with a brief discussion of the ecosystem of cyber-dependent crimes and the key actors who operate within it, including the online offenders and enablers, targets and victims, and guardians. Next, we review empirical scholarship that pertains to each actor while distinguishing between nontheoretical research and theoretically driven studies. We then detail methodological and theoretical avenues that should be pursued by future research and discuss why criminological research should lead policy initiatives and guide the design of technical tools that improve the scientific community's ability to generate a safer and more secure cyber-environment. We conclude by discussing potential ways in which cyber-dependent crime research could pave the way for the advancement of mainstream criminological theory and research.",
        //         "year": 2019,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Sociology"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2809218",
        //                 "name": "David Maimon"
        //             },
        //             {
        //                 "authorId": "113764283",
        //                 "name": "Eric R. Louderback"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Data breach",
        //                 "topicId": "155991",
        //                 "url": "https://www.semanticscholar.org/topic/155991"
        //             },
        //             {
        //                 "topic": "Documentation",
        //                 "topicId": "132",
        //                 "url": "https://www.semanticscholar.org/topic/132"
        //             },
        //             {
        //                 "topic": "Denial-of-service attack",
        //                 "topicId": "10149",
        //                 "url": "https://www.semanticscholar.org/topic/10149"
        //             },
        //             {
        //                 "topic": "Ephrin Type-B Receptor 1, human",
        //                 "topicId": "203497",
        //                 "url": "https://www.semanticscholar.org/topic/203497"
        //             },
        //             {
        //                 "topic": "Value at risk",
        //                 "topicId": "55290",
        //                 "url": "https://www.semanticscholar.org/topic/55290"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "1e5d3a74f6e76b57116c4fc1a1409ab21021949b",
        //         "title": "MaCRA: a model-based framework for maritime cyber-risk assessment",
        //         "abstract": "In the current economy, roughly 90% of all world trade is transported by the shipping industry, which is now accelerating its technological growth. While the demand on mariners, ship owners, and the encompassing maritime community for digital advances (particularly towards digitization and automation) has led to efficient shipping operations, maritime cyber-security is a pertinent issue of equal importance. As hackers are becoming increasingly aware of cyber-vulnerabilities within the maritime sector, and as existing risk assessment tools do not adequately represent the unique nature of maritime cyber-threats, this article introduces a model-based risk assessment framework which considers a combination of cyber and maritime factors. Confronted with a range of ship functionalities, configurations, users, and environmental factors, this framework aims to comprehensively present maritime cyber-risks and better inform those in the maritime community when making cyber-security decisions. By providing the needed maritime cyber-risk profiles, it becomes possible to support a range of parties, such as operators, regulators, insurers, and mariners, in increasing overall global maritime cyber-security.",
        //         "year": 2019,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Business"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2951920",
        //                 "name": "Kimberly Tam"
        //             },
        //             {
        //                 "authorId": "145731726",
        //                 "name": "K. Jones"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Bitcoin",
        //                 "topicId": "203528",
        //                 "url": "https://www.semanticscholar.org/topic/203528"
        //             },
        //             {
        //                 "topic": "Distributed computing",
        //                 "topicId": "7024",
        //                 "url": "https://www.semanticscholar.org/topic/7024"
        //             },
        //             {
        //                 "topic": "Application domain",
        //                 "topicId": "12601",
        //                 "url": "https://www.semanticscholar.org/topic/12601"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Secure environment",
        //                 "topicId": "2717878",
        //                 "url": "https://www.semanticscholar.org/topic/2717878"
        //             },
        //             {
        //                 "topic": "IBM Power Systems",
        //                 "topicId": "64187",
        //                 "url": "https://www.semanticscholar.org/topic/64187"
        //             },
        //             {
        //                 "topic": "Interaction",
        //                 "topicId": "72",
        //                 "url": "https://www.semanticscholar.org/topic/72"
        //             },
        //             {
        //                 "topic": "Prospective search",
        //                 "topicId": "1292689",
        //                 "url": "https://www.semanticscholar.org/topic/1292689"
        //             },
        //             {
        //                 "topic": "Entity",
        //                 "topicId": "6664",
        //                 "url": "https://www.semanticscholar.org/topic/6664"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "a09241ae4517ba19671445c8e73f15b6f042d7cf",
        //         "title": "Invisible Digital Front: Can Cyber Attacks Shape Battlefield Events?",
        //         "abstract": "Recent years have seen growing concern over the use of cyber attacks in wartime, but little evidence that these new tools of coercion can change battlefield events. We present the first quantitative analysis of the relationship between cyber activities and physical violence during war. Using new event data from the armed conflict in Ukraine\u2014and additional data from Syria\u2019s civil war\u2014we analyze the dynamics of cyber attacks and find that such activities have had little or no impact on fighting. In Ukraine\u2014one of the first armed conflicts where both sides deployed such tools extensively\u2014cyber activities failed to compel discernible changes in battlefield behavior. Indeed, hackers on both sides have had difficulty responding to battlefield events, much less shaping them. An analysis of conflict dynamics in Syria produces similar results: the timing of cyber actions is independent of fighting on the ground. Our finding\u2014that cyber attacks are not (yet) effective as tools of coercion in war\u2014has potentially significant implications for other armed conflicts with a digital front.",
        //         "year": 2019,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Political Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "48049061",
        //                 "name": "N. Kostyuk"
        //             },
        //             {
        //                 "authorId": "89122298",
        //                 "name": "Y. Zhukov"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Multi-agent system",
        //                 "topicId": "3830",
        //                 "url": "https://www.semanticscholar.org/topic/3830"
        //             },
        //             {
        //                 "topic": "Lossy compression",
        //                 "topicId": "45481",
        //                 "url": "https://www.semanticscholar.org/topic/45481"
        //             },
        //             {
        //                 "topic": "Laplacian matrix",
        //                 "topicId": "6768",
        //                 "url": "https://www.semanticscholar.org/topic/6768"
        //             },
        //             {
        //                 "topic": "Agent-based model",
        //                 "topicId": "4774",
        //                 "url": "https://www.semanticscholar.org/topic/4774"
        //             },
        //             {
        //                 "topic": "Social inequality",
        //                 "topicId": "221227",
        //                 "url": "https://www.semanticscholar.org/topic/221227"
        //             },
        //             {
        //                 "topic": "sensor (device)",
        //                 "topicId": "149745",
        //                 "url": "https://www.semanticscholar.org/topic/149745"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "Simulation",
        //                 "topicId": "194",
        //                 "url": "https://www.semanticscholar.org/topic/194"
        //             },
        //             {
        //                 "topic": "Entity Name Part Qualifier - adopted",
        //                 "topicId": "12637",
        //                 "url": "https://www.semanticscholar.org/topic/12637"
        //             },
        //             {
        //                 "topic": "Controllers",
        //                 "topicId": "433",
        //                 "url": "https://www.semanticscholar.org/topic/433"
        //             },
        //             {
        //                 "topic": "Consensus (computer science)",
        //                 "topicId": "16541",
        //                 "url": "https://www.semanticscholar.org/topic/16541"
        //             },
        //             {
        //                 "topic": "Mandibular right second molar tooth",
        //                 "topicId": "433877",
        //                 "url": "https://www.semanticscholar.org/topic/433877"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "49a4ca3136dfd334c18a24cc08a64f2c44098f8d",
        //         "title": "Smart Agents in Industrial Cyber\u2013Physical Systems",
        //         "abstract": "Future industrial systems can be realized using the cyber-physical systems (CPSs) that advocate the coexistence of cyber and physical counterparts in a network structure to perform the system's functions in a collaborative manner. Multiagent systems share common ground with CPSs and can empower them with a multitude of capabilities in their efforts to achieve complexity management, decentralization, intelligence, modularity, flexibility, robustness, adaptation, and responsiveness. This work surveys and analyzes the current state of the industrial application of agent technology in CPSs, and provides a vision on the way agents can effectively enable emerging CPS challenges.",
        //         "year": 2016,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "145281283",
        //                 "name": "P. Leit\u00e3o"
        //             },
        //             {
        //                 "authorId": "1766216",
        //                 "name": "S. Karnouskos"
        //             },
        //             {
        //                 "authorId": "145486146",
        //                 "name": "L. Ribeiro"
        //             },
        //             {
        //                 "authorId": "15073531",
        //                 "name": "J. Lee"
        //             },
        //             {
        //                 "authorId": "1747126",
        //                 "name": "T. Strasser"
        //             },
        //             {
        //                 "authorId": "9204932",
        //                 "name": "A. Colombo"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Dynamical system",
        //                 "topicId": "5845",
        //                 "url": "https://www.semanticscholar.org/topic/5845"
        //             },
        //             {
        //                 "topic": "Computation",
        //                 "topicId": "339",
        //                 "url": "https://www.semanticscholar.org/topic/339"
        //             },
        //             {
        //                 "topic": "Verification and validation",
        //                 "topicId": "880",
        //                 "url": "https://www.semanticscholar.org/topic/880"
        //             },
        //             {
        //                 "topic": "Reconfigurable computing",
        //                 "topicId": "106952",
        //                 "url": "https://www.semanticscholar.org/topic/106952"
        //             },
        //             {
        //                 "topic": "Systems modeling",
        //                 "topicId": "97473",
        //                 "url": "https://www.semanticscholar.org/topic/97473"
        //             },
        //             {
        //                 "topic": "Time-invariant system",
        //                 "topicId": "526338",
        //                 "url": "https://www.semanticscholar.org/topic/526338"
        //             },
        //             {
        //                 "topic": "Optimal control",
        //                 "topicId": "3646",
        //                 "url": "https://www.semanticscholar.org/topic/3646"
        //             },
        //             {
        //                 "topic": "Numerical analysis",
        //                 "topicId": "5413",
        //                 "url": "https://www.semanticscholar.org/topic/5413"
        //             },
        //             {
        //                 "topic": "Sensor",
        //                 "topicId": "1117",
        //                 "url": "https://www.semanticscholar.org/topic/1117"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "28c524cf35040e179abc5bfd5111a378b2a11d60",
        //         "title": "Real-Time Wireless Sensor-Actuator Networks for Industrial Cyber-Physical Systems",
        //         "abstract": "With recent adoption of wireless sensor-actuator networks (WSANs) in industrial automation, industrial wireless control systems have emerged as a frontier of cyber-physical systems. Despite their success in industrial monitoring applications, existing WSAN technologies face significant challenges in supporting control systems due to their lack of real-time performance and dynamic wireless conditions in industrial plants. This article reviews a series of recent advances in real-time WSANs for industrial control systems: 1) real-time scheduling algorithms and analyses for WSANs; 2) implementation and experimentation of industrial WSAN protocols; 3) cyber-physical codesign of wireless control systems that integrate wireless and control designs; and 4) a wireless cyber-physical simulator for codesign and evaluation of wireless control systems. This article concludes by highlighting research directions in industrial cyber-physical systems.",
        //         "year": 2016,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2158095795",
        //                 "name": "Chenyang Lu"
        //             },
        //             {
        //                 "authorId": "144810491",
        //                 "name": "Abusayeed Saifullah"
        //             },
        //             {
        //                 "authorId": "46708429",
        //                 "name": "B. Li"
        //             },
        //             {
        //                 "authorId": "144046717",
        //                 "name": "M. Sha"
        //             },
        //             {
        //                 "authorId": "118369188",
        //                 "name": "H. Gonz\u00e1lez"
        //             },
        //             {
        //                 "authorId": "2442286",
        //                 "name": "Dolvara Gunatilaka"
        //             },
        //             {
        //                 "authorId": "3144577",
        //                 "name": "Chengjie Wu"
        //             },
        //             {
        //                 "authorId": "49954387",
        //                 "name": "Lanshun Nie"
        //             },
        //             {
        //                 "authorId": "9527255",
        //                 "name": "Yixin Chen"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Microsoft Cordless Phone System",
        //                 "topicId": "6933244",
        //                 "url": "https://www.semanticscholar.org/topic/6933244"
        //             },
        //             {
        //                 "topic": "Cyberspace",
        //                 "topicId": "6516",
        //                 "url": "https://www.semanticscholar.org/topic/6516"
        //             },
        //             {
        //                 "topic": "Big data",
        //                 "topicId": "20355",
        //                 "url": "https://www.semanticscholar.org/topic/20355"
        //             },
        //             {
        //                 "topic": "Medical Devices",
        //                 "topicId": "587",
        //                 "url": "https://www.semanticscholar.org/topic/587"
        //             },
        //             {
        //                 "topic": "Algorithm design",
        //                 "topicId": "146513",
        //                 "url": "https://www.semanticscholar.org/topic/146513"
        //             },
        //             {
        //                 "topic": "Privacy",
        //                 "topicId": "29928",
        //                 "url": "https://www.semanticscholar.org/topic/29928"
        //             },
        //             {
        //                 "topic": "Internet",
        //                 "topicId": "7952",
        //                 "url": "https://www.semanticscholar.org/topic/7952"
        //             },
        //             {
        //                 "topic": "Dependability",
        //                 "topicId": "77401",
        //                 "url": "https://www.semanticscholar.org/topic/77401"
        //             },
        //             {
        //                 "topic": "Complex systems",
        //                 "topicId": "16765",
        //                 "url": "https://www.semanticscholar.org/topic/16765"
        //             },
        //             {
        //                 "topic": "M2M (Eclipse)",
        //                 "topicId": "93428",
        //                 "url": "https://www.semanticscholar.org/topic/93428"
        //             },
        //             {
        //                 "topic": "Interoperability",
        //                 "topicId": "21510",
        //                 "url": "https://www.semanticscholar.org/topic/21510"
        //             },
        //             {
        //                 "topic": "Systems design",
        //                 "topicId": "50922",
        //                 "url": "https://www.semanticscholar.org/topic/50922"
        //             },
        //             {
        //                 "topic": "Interaction",
        //                 "topicId": "72",
        //                 "url": "https://www.semanticscholar.org/topic/72"
        //             },
        //             {
        //                 "topic": "Nonlinear system",
        //                 "topicId": "5329",
        //                 "url": "https://www.semanticscholar.org/topic/5329"
        //             },
        //             {
        //                 "topic": "Scalability",
        //                 "topicId": "1360",
        //                 "url": "https://www.semanticscholar.org/topic/1360"
        //             },
        //             {
        //                 "topic": "Failure rate",
        //                 "topicId": "91947",
        //                 "url": "https://www.semanticscholar.org/topic/91947"
        //             },
        //             {
        //                 "topic": "Rule (guideline)",
        //                 "topicId": "4540",
        //                 "url": "https://www.semanticscholar.org/topic/4540"
        //             },
        //             {
        //                 "topic": "Waisman syndrome",
        //                 "topicId": "1051",
        //                 "url": "https://www.semanticscholar.org/topic/1051"
        //             },
        //             {
        //                 "topic": "standards characteristics",
        //                 "topicId": "535112",
        //                 "url": "https://www.semanticscholar.org/topic/535112"
        //             },
        //             {
        //                 "topic": "Perceived quality of life",
        //                 "topicId": "1073",
        //                 "url": "https://www.semanticscholar.org/topic/1073"
        //             },
        //             {
        //                 "topic": "Levee Collapse",
        //                 "topicId": "2411145",
        //                 "url": "https://www.semanticscholar.org/topic/2411145"
        //             },
        //             {
        //                 "topic": "Acclimatization",
        //                 "topicId": "1002",
        //                 "url": "https://www.semanticscholar.org/topic/1002"
        //             },
        //             {
        //                 "topic": "Quality of Health Care",
        //                 "topicId": "9087",
        //                 "url": "https://www.semanticscholar.org/topic/9087"
        //             },
        //             {
        //                 "topic": "Face",
        //                 "topicId": "10302",
        //                 "url": "https://www.semanticscholar.org/topic/10302"
        //             },
        //             {
        //                 "topic": "Computation (action)",
        //                 "topicId": "1554",
        //                 "url": "https://www.semanticscholar.org/topic/1554"
        //             },
        //             {
        //                 "topic": "Assumed",
        //                 "topicId": "136975",
        //                 "url": "https://www.semanticscholar.org/topic/136975"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "15e24c17810150591245b46407877d5039e6451a",
        //         "title": "Cyber-physical attacks and defences in the smart grid: a survey",
        //         "abstract": "The smart grid is arguably one of the most complex cyber-physical systems (CPS). Complex security challenges have been revealed in both the physical and the cyber parts of the smart grid, and an integrative analysis on the cyber-physical (CP) security is emerging. This paper provides a comprehensive and systematic review of the critical attack threats and defence strategies in the smart grid. We start this survey with an overview of the smart grid security from the CP perspective, and then focuses on prominent CP attack schemes with significant impact on the smart grid operation and corresponding defense solutions. With an in-depth review of the attacks and defences, we then discuss the opportunities and challenges along the smart grid CP security. We hope this paper raises awareness of the CP attack threats and defence strategies in complex CPS-based infrastructures such as the smart grid and inspires research effort toward the development of secure and resilient CP infrastructures.",
        //         "year": 2016,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science",
        //             "Engineering"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2198278",
        //                 "name": "Haibo He"
        //             },
        //             {
        //                 "authorId": "144180094",
        //                 "name": "Jun Yan"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "ISIS",
        //                 "topicId": "100308",
        //                 "url": "https://www.semanticscholar.org/topic/100308"
        //             },
        //             {
        //                 "topic": "Social Media",
        //                 "topicId": "6018",
        //                 "url": "https://www.semanticscholar.org/topic/6018"
        //             },
        //             {
        //                 "topic": "User (computing)",
        //                 "topicId": "38845",
        //                 "url": "https://www.semanticscholar.org/topic/38845"
        //             },
        //             {
        //                 "topic": "Internet",
        //                 "topicId": "7952",
        //                 "url": "https://www.semanticscholar.org/topic/7952"
        //             },
        //             {
        //                 "topic": "message",
        //                 "topicId": "7392",
        //                 "url": "https://www.semanticscholar.org/topic/7392"
        //             },
        //             {
        //                 "topic": "Cyberwarfare",
        //                 "topicId": "232564",
        //                 "url": "https://www.semanticscholar.org/topic/232564"
        //             },
        //             {
        //                 "topic": "Propaganda",
        //                 "topicId": "93012",
        //                 "url": "https://www.semanticscholar.org/topic/93012"
        //             },
        //             {
        //                 "topic": "Biological anthropology",
        //                 "topicId": "232773",
        //                 "url": "https://www.semanticscholar.org/topic/232773"
        //             },
        //             {
        //                 "topic": "Stars, Celestial",
        //                 "topicId": "45036",
        //                 "url": "https://www.semanticscholar.org/topic/45036"
        //             },
        //             {
        //                 "topic": "Used Quit Cigarette Smoking Videos",
        //                 "topicId": "323362",
        //                 "url": "https://www.semanticscholar.org/topic/323362"
        //             },
        //             {
        //                 "topic": "Online Systems",
        //                 "topicId": "39552",
        //                 "url": "https://www.semanticscholar.org/topic/39552"
        //             },
        //             {
        //                 "topic": "Page (document)",
        //                 "topicId": "8785954",
        //                 "url": "https://www.semanticscholar.org/topic/8785954"
        //             },
        //             {
        //                 "topic": "GLYCERIN 0.00012 mg in 120 mL TOPICAL CREAM [OSEQUE CYBER SHINE Oxygen Mask Cleanser]",
        //                 "topicId": "8596124",
        //                 "url": "https://www.semanticscholar.org/topic/8596124"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "090b6994e357b5eda9e18806fce07308f11e611a",
        //         "title": "Impacts of Cyber System on Microgrid Operational Reliability",
        //         "abstract": "A microgrid is a typical cyber-physical system. The coordinated control of each unit in a microgrid mainly relies on the cyber system. Once performance degradation of the cyber system happens, such as outages or transmission delay, the stable operation of the microgrid will likely be affected. In this paper, an analytical method is presented to quantify the impacts on the microgrid operation reliability from cyber system element failures and transmission interference. First, the link model and the information transmission model of the cyber system are established to describe the cyber routing path and the information transmission service quality, respectively. Then, the sequential Monte Carlo method is employed to simulate the operation of the microgrid. Finally, the impacts of the element failure and the transmission interference of the cyber system on microgrid operational reliability is quantitatively analyzed. Additionally, sensitivity analysis is carried out, focusing on the impacts of the cyber network topology, element failure rate and different types of information transmission quality indexes including delays, routing error, and information transmission error. The results of the numerical examples demonstrate the effectiveness of the proposed model and method.",
        //         "year": 2019,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "102839240",
        //                 "name": "Chengshan Wang"
        //             },
        //             {
        //                 "authorId": "2146332982",
        //                 "name": "Tianyu Zhang"
        //             },
        //             {
        //                 "authorId": "30721170",
        //                 "name": "Fengzhang Luo"
        //             },
        //             {
        //                 "authorId": "33480933",
        //                 "name": "Fangxing Li"
        //             },
        //             {
        //                 "authorId": "9105023",
        //                 "name": "Yan-zhang Liu"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "World Wide Web",
        //                 "topicId": "7487",
        //                 "url": "https://www.semanticscholar.org/topic/7487"
        //             },
        //             {
        //                 "topic": "Hate",
        //                 "topicId": "294158",
        //                 "url": "https://www.semanticscholar.org/topic/294158"
        //             },
        //             {
        //                 "topic": "Bag-of-words model",
        //                 "topicId": "66224",
        //                 "url": "https://www.semanticscholar.org/topic/66224"
        //             },
        //             {
        //                 "topic": "Parsing expression grammar",
        //                 "topicId": "63381",
        //                 "url": "https://www.semanticscholar.org/topic/63381"
        //             },
        //             {
        //                 "topic": "Social media",
        //                 "topicId": "6015",
        //                 "url": "https://www.semanticscholar.org/topic/6015"
        //             },
        //             {
        //                 "topic": "Cyberspace",
        //                 "topicId": "6516",
        //                 "url": "https://www.semanticscholar.org/topic/6516"
        //             },
        //             {
        //                 "topic": "Greater Than",
        //                 "topicId": "344",
        //                 "url": "https://www.semanticscholar.org/topic/344"
        //             },
        //             {
        //                 "topic": "Social Media",
        //                 "topicId": "6018",
        //                 "url": "https://www.semanticscholar.org/topic/6018"
        //             },
        //             {
        //                 "topic": "Communications Media",
        //                 "topicId": "37378",
        //                 "url": "https://www.semanticscholar.org/topic/37378"
        //             },
        //             {
        //                 "topic": "Scientific Publication",
        //                 "topicId": "347",
        //                 "url": "https://www.semanticscholar.org/topic/347"
        //             },
        //             {
        //                 "topic": "Physiological Sexual Disorders",
        //                 "topicId": "2387",
        //                 "url": "https://www.semanticscholar.org/topic/2387"
        //             },
        //             {
        //                 "topic": "Contribution",
        //                 "topicId": "129338",
        //                 "url": "https://www.semanticscholar.org/topic/129338"
        //             },
        //             {
        //                 "topic": "Tension",
        //                 "topicId": "27822",
        //                 "url": "https://www.semanticscholar.org/topic/27822"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "edb66c6a161130d64fc1b5c4e85c67c08725337c",
        //         "title": "An Advanced Cyber Physical Framework for Micro Devices Assembly",
        //         "abstract": "The design and implementation of an Internet of Things (IoT) based cyber physical framework in the context of Industry 4.0 is discussed for the field of micro devices assembly. Such frameworks hold the potential to facilitate rapid and agile collaborations among distributed engineering partners. This paper outlines the key cyber and physical components which collaborate using cloud-based principles and emerging next generation global environment for network innovation Internet technologies. An information centric systems engineering approach is proposed to help design the cyber physical interactions, which provide a foundation for implementing this cyber physical framework. The cyber modules are capable of assembly planning, path planning, virtual reality-based assembly simulation, and physical command generation. The physical assembly activities are accomplished using micro assembly work cells. An IoT-based cyber physical test bed has been created to test and validate the design and implementation aspects of the proposed framework.",
        //         "year": 2019,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1826552",
        //                 "name": "J. Cecil"
        //             },
        //             {
        //                 "authorId": "9753252",
        //                 "name": "Sadiq Albuhamood"
        //             },
        //             {
        //                 "authorId": "1414358084",
        //                 "name": "Aaron Cecil-Xavier"
        //             },
        //             {
        //                 "authorId": "145759576",
        //                 "name": "P. Ramanathan"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Stuxnet",
        //                 "topicId": "260443",
        //                 "url": "https://www.semanticscholar.org/topic/260443"
        //             },
        //             {
        //                 "topic": "Theory",
        //                 "topicId": "909",
        //                 "url": "https://www.semanticscholar.org/topic/909"
        //             },
        //             {
        //                 "topic": "System safety",
        //                 "topicId": "120611",
        //                 "url": "https://www.semanticscholar.org/topic/120611"
        //             },
        //             {
        //                 "topic": "Requirement",
        //                 "topicId": "136",
        //                 "url": "https://www.semanticscholar.org/topic/136"
        //             },
        //             {
        //                 "topic": "Threat (computer)",
        //                 "topicId": "313615",
        //                 "url": "https://www.semanticscholar.org/topic/313615"
        //             },
        //             {
        //                 "topic": "Iranian.com",
        //                 "topicId": "272635",
        //                 "url": "https://www.semanticscholar.org/topic/272635"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Interaction",
        //                 "topicId": "72",
        //                 "url": "https://www.semanticscholar.org/topic/72"
        //             },
        //             {
        //                 "topic": "Real-time transcription",
        //                 "topicId": "763488",
        //                 "url": "https://www.semanticscholar.org/topic/763488"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "ec8519960ccf4b89cfae80ef7c63cd7f60bceecd",
        //         "title": "The Past, Present and Future of Cyber-Physical Systems: A Focus on Models",
        //         "abstract": "This paper is about better engineering of cyber-physical systems (CPSs) through better models. Deterministic models have historically proven extremely useful and arguably form the kingpin of the industrial revolution and the digital and information technology revolutions. Key deterministic models that have proven successful include differential equations, synchronous digital logic and single-threaded imperative programs. Cyber-physical systems, however, combine these models in such a way that determinism is not preserved. Two projects show that deterministic CPS models with faithful physical realizations are possible and practical. The first project is PRET, which shows that the timing precision of synchronous digital logic can be practically made available at the software level of abstraction. The second project is Ptides (programming temporally-integrated distributed embedded systems), which shows that deterministic models for distributed cyber-physical systems have practical faithful realizations. These projects are existence proofs that deterministic CPS models are possible and practical.",
        //         "year": 2015,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science",
        //             "Medicine"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1690704",
        //                 "name": "Edward A. Lee"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Microgrid",
        //                 "topicId": "198985",
        //                 "url": "https://www.semanticscholar.org/topic/198985"
        //             },
        //             {
        //                 "topic": "Simulink",
        //                 "topicId": "6114",
        //                 "url": "https://www.semanticscholar.org/topic/6114"
        //             },
        //             {
        //                 "topic": "Stateflow",
        //                 "topicId": "268239",
        //                 "url": "https://www.semanticscholar.org/topic/268239"
        //             },
        //             {
        //                 "topic": "Hybrid automaton",
        //                 "topicId": "274019",
        //                 "url": "https://www.semanticscholar.org/topic/274019"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Reachability",
        //                 "topicId": "478",
        //                 "url": "https://www.semanticscholar.org/topic/478"
        //             },
        //             {
        //                 "topic": "Power electronics",
        //                 "topicId": "37466",
        //                 "url": "https://www.semanticscholar.org/topic/37466"
        //             },
        //             {
        //                 "topic": "Invariant (computer science)",
        //                 "topicId": "916",
        //                 "url": "https://www.semanticscholar.org/topic/916"
        //             },
        //             {
        //                 "topic": "Consensus dynamics",
        //                 "topicId": "136689",
        //                 "url": "https://www.semanticscholar.org/topic/136689"
        //             },
        //             {
        //                 "topic": "Telecommunications network",
        //                 "topicId": "32720",
        //                 "url": "https://www.semanticscholar.org/topic/32720"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "Physical plant",
        //                 "topicId": "1411823",
        //                 "url": "https://www.semanticscholar.org/topic/1411823"
        //             },
        //             {
        //                 "topic": "Input/output",
        //                 "topicId": "8197",
        //                 "url": "https://www.semanticscholar.org/topic/8197"
        //             },
        //             {
        //                 "topic": "Interaction",
        //                 "topicId": "72",
        //                 "url": "https://www.semanticscholar.org/topic/72"
        //             },
        //             {
        //                 "topic": "Prototype",
        //                 "topicId": "8678",
        //                 "url": "https://www.semanticscholar.org/topic/8678"
        //             },
        //             {
        //                 "topic": "Diagram",
        //                 "topicId": "201",
        //                 "url": "https://www.semanticscholar.org/topic/201"
        //             },
        //             {
        //                 "topic": "Automata theory",
        //                 "topicId": "18122",
        //                 "url": "https://www.semanticscholar.org/topic/18122"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "909982acb048c31bb23f15955d4051b6c12d9631",
        //         "title": "Us and them: identifying cyber hate on Twitter across multiple protected characteristics",
        //         "abstract": "Hateful and antagonistic content published and propagated via the World Wide Web has the potential to cause harm and suffering on an individual basis, and lead to social tension and disorder beyond cyber space. Despite new legislation aimed at prosecuting those who misuse new forms of communication to post threatening, harassing, or grossly offensive language - or cyber hate - and the fact large social media companies have committed to protecting their users from harm, it goes largely unpunished due to difficulties in policing online public spaces. To support the automatic detection of cyber hate online, specifically on Twitter, we build multiple individual models to classify cyber hate for a range of protected characteristics including race, disability and sexual orientation. We use text parsing to extract typed dependencies, which represent syntactic and grammatical relationships between words, and are shown to capture \u2018othering\u2019 language - consistently improving machine classification for different types of cyber hate beyond the use of a Bag of Words and known hateful terms. Furthermore, we build a data-driven blended model of cyber hate to improve classification where more than one protected characteristic may be attacked (e.g. race and sexual orientation), contributing to the nascent study of intersectionality in hate crime.",
        //         "year": 2016,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Sociology",
        //             "Computer Science",
        //             "Medicine"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "3448243",
        //                 "name": "P. Burnap"
        //             },
        //             {
        //                 "authorId": "2116741885",
        //                 "name": "M. Williams"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Industry 4.0",
        //                 "topicId": "263883",
        //                 "url": "https://www.semanticscholar.org/topic/263883"
        //             },
        //             {
        //                 "topic": "Software agent",
        //                 "topicId": "45428",
        //                 "url": "https://www.semanticscholar.org/topic/45428"
        //             },
        //             {
        //                 "topic": "Software engineering",
        //                 "topicId": "7832",
        //                 "url": "https://www.semanticscholar.org/topic/7832"
        //             },
        //             {
        //                 "topic": "Automation",
        //                 "topicId": "93663",
        //                 "url": "https://www.semanticscholar.org/topic/93663"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Distributed manufacturing",
        //                 "topicId": "310232",
        //                 "url": "https://www.semanticscholar.org/topic/310232"
        //             },
        //             {
        //                 "topic": "Information privacy",
        //                 "topicId": "90886",
        //                 "url": "https://www.semanticscholar.org/topic/90886"
        //             },
        //             {
        //                 "topic": "Internet of things",
        //                 "topicId": "51309",
        //                 "url": "https://www.semanticscholar.org/topic/51309"
        //             },
        //             {
        //                 "topic": "Definition",
        //                 "topicId": "4048",
        //                 "url": "https://www.semanticscholar.org/topic/4048"
        //             },
        //             {
        //                 "topic": "Coffea plant",
        //                 "topicId": "158162",
        //                 "url": "https://www.semanticscholar.org/topic/158162"
        //             },
        //             {
        //                 "topic": "Execution",
        //                 "topicId": "2191422",
        //                 "url": "https://www.semanticscholar.org/topic/2191422"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "f99fc79ca170f0df53cac3d76cdb87b62c8afe25",
        //         "title": "A Systems Theoretic Approach to the Security Threats in Cyber Physical Systems Applied to Stuxnet",
        //         "abstract": "Cyber physical systems (CPSs) are increasingly being adopted in a wide range of industries such as smart power grids. Even though the rapid proliferation of CPSs brings huge benefits to our society, it also provides potential attackers with many new opportunities to affect the physical world such as disrupting the services controlled by CPSs. Stuxnet is an example of such an attack that was designed to interrupt the Iranian nuclear program. In this paper, we show how the vulnerabilities exploited by Stuxnet could have been addressed at the design level. We utilize a system theoretic approach, based on prior research on system safety, that takes both physical and cyber components into account to analyze the threats exploited by Stuxnet. We conclude that such an approach is capable of identifying cyber threats towards CPSs at the design level and provide practical recommendations that CPS designers can utilize to design a more secure CPS.",
        //         "year": 2018,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1800656",
        //                 "name": "Arash Nourian"
        //             },
        //             {
        //                 "authorId": "1689081",
        //                 "name": "S. Madnick"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Augmented reality",
        //                 "topicId": "18912",
        //                 "url": "https://www.semanticscholar.org/topic/18912"
        //             },
        //             {
        //                 "topic": "Cloud computing",
        //                 "topicId": "2756",
        //                 "url": "https://www.semanticscholar.org/topic/2756"
        //             },
        //             {
        //                 "topic": "Big data",
        //                 "topicId": "20355",
        //                 "url": "https://www.semanticscholar.org/topic/20355"
        //             },
        //             {
        //                 "topic": "Requirement",
        //                 "topicId": "136",
        //                 "url": "https://www.semanticscholar.org/topic/136"
        //             },
        //             {
        //                 "topic": "Agent-based model",
        //                 "topicId": "4774",
        //                 "url": "https://www.semanticscholar.org/topic/4774"
        //             },
        //             {
        //                 "topic": "Reconfigurability",
        //                 "topicId": "54578",
        //                 "url": "https://www.semanticscholar.org/topic/54578"
        //             },
        //             {
        //                 "topic": "Interoperability",
        //                 "topicId": "21510",
        //                 "url": "https://www.semanticscholar.org/topic/21510"
        //             },
        //             {
        //                 "topic": "Control function (econometrics)",
        //                 "topicId": "452874",
        //                 "url": "https://www.semanticscholar.org/topic/452874"
        //             },
        //             {
        //                 "topic": "Adaptive system",
        //                 "topicId": "15533",
        //                 "url": "https://www.semanticscholar.org/topic/15533"
        //             },
        //             {
        //                 "topic": "Responsiveness",
        //                 "topicId": "11189",
        //                 "url": "https://www.semanticscholar.org/topic/11189"
        //             },
        //             {
        //                 "topic": "Simulation",
        //                 "topicId": "194",
        //                 "url": "https://www.semanticscholar.org/topic/194"
        //             },
        //             {
        //                 "topic": "Coexist (image)",
        //                 "topicId": "426091",
        //                 "url": "https://www.semanticscholar.org/topic/426091"
        //             },
        //             {
        //                 "topic": "Logistics",
        //                 "topicId": "13151",
        //                 "url": "https://www.semanticscholar.org/topic/13151"
        //             },
        //             {
        //                 "topic": "Programming paradigm",
        //                 "topicId": "29522",
        //                 "url": "https://www.semanticscholar.org/topic/29522"
        //             },
        //             {
        //                 "topic": "Multi-agent system",
        //                 "topicId": "3830",
        //                 "url": "https://www.semanticscholar.org/topic/3830"
        //             },
        //             {
        //                 "topic": "Autonomic computing",
        //                 "topicId": "10114",
        //                 "url": "https://www.semanticscholar.org/topic/10114"
        //             },
        //             {
        //                 "topic": "Automation",
        //                 "topicId": "93663",
        //                 "url": "https://www.semanticscholar.org/topic/93663"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "c1609be41d3a5c6e743dabc8a70bb61507a8e871",
        //         "title": "On the effectiveness of machine and deep learning for cyber security",
        //         "abstract": "Machine learning is adopted in a wide range of domains where it shows its superiority over traditional rule-based algorithms. These methods are being integrated in cyber detection systems with the goal of supporting or even replacing the first level of security analysts. Although the complete automation of detection and analysis is an enticing goal, the efficacy of machine learning in cyber security must be evaluated with the due diligence. We present an analysis, addressed to security specialists, of machine learning techniques applied to the detection of intrusion, malware, and spam. The goal is twofold: to assess the current maturity of these solutions and to identify their main limitations that prevent an immediate adoption of machine learning cyber detection schemes. Our conclusions are based on an extensive review of the literature as well as on experiments performed on real enterprise systems and network traffic.",
        //         "year": 2018,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "119764154",
        //                 "name": "Giovanni Apruzzese"
        //             },
        //             {
        //                 "authorId": "1754638",
        //                 "name": "M. Colajanni"
        //             },
        //             {
        //                 "authorId": "8106445",
        //                 "name": "Luca Ferretti"
        //             },
        //             {
        //                 "authorId": "40489608",
        //                 "name": "Alessandro Guido"
        //             },
        //             {
        //                 "authorId": "152743829",
        //                 "name": "Mirco Marchetti"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Internet of things",
        //                 "topicId": "51309",
        //                 "url": "https://www.semanticscholar.org/topic/51309"
        //             },
        //             {
        //                 "topic": "Pervasive informatics",
        //                 "topicId": "2408067",
        //                 "url": "https://www.semanticscholar.org/topic/2408067"
        //             },
        //             {
        //                 "topic": "Societies",
        //                 "topicId": "27360",
        //                 "url": "https://www.semanticscholar.org/topic/27360"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "2d63eb9bb8f35e43927bd24c9b1090248953a9eb",
        //         "title": "Quantized Stabilization for T\u2013S Fuzzy Systems With Hybrid-Triggered Mechanism and Stochastic Cyber-Attacks",
        //         "abstract": "This paper examines quantized stabilization for Takagi\u2013Sugeno (T\u2013S) fuzzy systems with a hybrid-triggered mechanism and stochastic cyber-attacks. A hybrid-triggered scheme, which is described by a Bernoulli variable, is adopted to mitigate the burden of the network. By taking the effect of the hybrid-triggered scheme and stochastic cyber-attacks into consideration, a mathematical model for a closed-loop control system with quantization is constructed. Theorems for main results are developed to guarantee the asymptotical stability of networked control systems by using Lyapunov stability theory and linear matrix inequality techniques. Based on the derived sufficient conditions in theorems, the controller gains are presented in an explicit form. Finally, two practical examples demonstrate the feasibility of designed algorithm.",
        //         "year": 2018,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "48211316",
        //                 "name": "Jinliang Liu"
        //             },
        //             {
        //                 "authorId": "2110552514",
        //                 "name": "Lili Wei"
        //             },
        //             {
        //                 "authorId": "40013419",
        //                 "name": "Xiangpeng Xie"
        //             },
        //             {
        //                 "authorId": "143652139",
        //                 "name": "E. Tian"
        //             },
        //             {
        //                 "authorId": "1744385",
        //                 "name": "S. Fei"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "benefit",
        //                 "topicId": "131",
        //                 "url": "https://www.semanticscholar.org/topic/131"
        //             },
        //             {
        //                 "topic": "Occur (action)",
        //                 "topicId": "150951",
        //                 "url": "https://www.semanticscholar.org/topic/150951"
        //             },
        //             {
        //                 "topic": "Electroconvulsive Therapy",
        //                 "topicId": "819",
        //                 "url": "https://www.semanticscholar.org/topic/819"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "90b2ecaeeb72f85012b340525ff7d16e80b8361d",
        //         "title": "Cyber\u2013Physical Security of a Smart Grid Infrastructure",
        //         "abstract": "It is often appealing to assume that existing solutions can be directly applied to emerging engineering domains. Unfortunately, careful investigation of the unique challenges presented by new domains exposes its idiosyncrasies, thus often requiring new approaches and solutions. In this paper, we argue that the \u201csmart\u201d grid, replacing its incredibly successful and reliable predecessor, poses a series of new security challenges, among others, that require novel approaches to the field of cyber security. We will call this new field cyber-physical security. The tight coupling between information and communication technologies and physical systems introduces new security concerns, requiring a rethinking of the commonly used objectives and methods. Existing security approaches are either inapplicable, not viable, insufficiently scalable, incompatible, or simply inadequate to address the challenges posed by highly complex environments such as the smart grid. A concerted effort by the entire industry, the research community, and the policy makers is required to achieve the vision of a secure smart grid infrastructure.",
        //         "year": 2012,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Business",
        //             "Computer Science",
        //             "Engineering"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1760677",
        //                 "name": "Yilin Mo"
        //             },
        //             {
        //                 "authorId": "8855732",
        //                 "name": "T. Kim"
        //             },
        //             {
        //                 "authorId": "2569100",
        //                 "name": "Kenneth Brancik"
        //             },
        //             {
        //                 "authorId": "98364919",
        //                 "name": "Don P. Dickinson"
        //             },
        //             {
        //                 "authorId": "2116624435",
        //                 "name": "Heejo Lee"
        //             },
        //             {
        //                 "authorId": "1688974",
        //                 "name": "A. Perrig"
        //             },
        //             {
        //                 "authorId": "1704072",
        //                 "name": "B. Sinopoli"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Control system",
        //                 "topicId": "80",
        //                 "url": "https://www.semanticscholar.org/topic/80"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Scheduling (computing)",
        //                 "topicId": "3439",
        //                 "url": "https://www.semanticscholar.org/topic/3439"
        //             },
        //             {
        //                 "topic": "Industry 4.0",
        //                 "topicId": "263883",
        //                 "url": "https://www.semanticscholar.org/topic/263883"
        //             },
        //             {
        //                 "topic": "Real-time transcription",
        //                 "topicId": "763488",
        //                 "url": "https://www.semanticscholar.org/topic/763488"
        //             },
        //             {
        //                 "topic": "Real-time computing",
        //                 "topicId": "172684",
        //                 "url": "https://www.semanticscholar.org/topic/172684"
        //             },
        //             {
        //                 "topic": "Real-time clock",
        //                 "topicId": "121831",
        //                 "url": "https://www.semanticscholar.org/topic/121831"
        //             },
        //             {
        //                 "topic": "Systems theory",
        //                 "topicId": "10798",
        //                 "url": "https://www.semanticscholar.org/topic/10798"
        //             },
        //             {
        //                 "topic": "Simulation",
        //                 "topicId": "194",
        //                 "url": "https://www.semanticscholar.org/topic/194"
        //             },
        //             {
        //                 "topic": "Real-time locating system",
        //                 "topicId": "811893",
        //                 "url": "https://www.semanticscholar.org/topic/811893"
        //             },
        //             {
        //                 "topic": "Emoticon",
        //                 "topicId": "55238",
        //                 "url": "https://www.semanticscholar.org/topic/55238"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "Control flow",
        //                 "topicId": "4514",
        //                 "url": "https://www.semanticscholar.org/topic/4514"
        //             },
        //             {
        //                 "topic": "Internet Explorer 7",
        //                 "topicId": "229918",
        //                 "url": "https://www.semanticscholar.org/topic/229918"
        //             },
        //             {
        //                 "topic": "Automation",
        //                 "topicId": "93663",
        //                 "url": "https://www.semanticscholar.org/topic/93663"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "fba84f9101fd831f775fdf00f79713a59a97da20",
        //         "title": "Handbook of Research on Modern Cryptographic Solutions for Computer and Cyber Security",
        //         "abstract": "Internet usage has become a facet of everyday life, especially as more technological advances have made it easier to connect to the web from virtually anywhere in the developed world. However, with this increased usage comes heightened threats to security within digital environments. The Handbook of Research on Modern Cryptographic Solutions for Computer and Cyber Security identifies emergent research and techniques being utilized in the field of cryptology and cyber threat prevention. Featuring theoretical perspectives, best practices, and future research directions, this handbook of research is a vital resource for professionals, researchers, faculty members, scientists, graduate students, scholars, and software developers interested in threat identification and prevention.",
        //         "year": 2016,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Engineering"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "144901889",
        //                 "name": "B. Gupta"
        //             },
        //             {
        //                 "authorId": "47519411",
        //                 "name": "D. Agrawal"
        //             },
        //             {
        //                 "authorId": "144107573",
        //                 "name": "S. Yamaguchi"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Phasor",
        //                 "topicId": "178965",
        //                 "url": "https://www.semanticscholar.org/topic/178965"
        //             },
        //             {
        //                 "topic": "Power Management Unit",
        //                 "topicId": "579118",
        //                 "url": "https://www.semanticscholar.org/topic/579118"
        //             },
        //             {
        //                 "topic": "System dynamics",
        //                 "topicId": "8281",
        //                 "url": "https://www.semanticscholar.org/topic/8281"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "Mathematical optimization",
        //                 "topicId": "89",
        //                 "url": "https://www.semanticscholar.org/topic/89"
        //             },
        //             {
        //                 "topic": "Graph coloring",
        //                 "topicId": "49843",
        //                 "url": "https://www.semanticscholar.org/topic/49843"
        //             },
        //             {
        //                 "topic": "Embedded system",
        //                 "topicId": "4423",
        //                 "url": "https://www.semanticscholar.org/topic/4423"
        //             },
        //             {
        //                 "topic": "Real-time clock",
        //                 "topicId": "121831",
        //                 "url": "https://www.semanticscholar.org/topic/121831"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "1ee1ab9ea9e79a3de7f5a1b8e0dcc882d9e8b5de",
        //         "title": "Deep Learning-Based Interval State Estimation of AC Smart Grids Against Sparse Cyber Attacks",
        //         "abstract": "Due to the aging of electric infrastructures, conventional power grid is being modernized toward smart grid that enables two-way communications between consumer and utility, and thus more vulnerable to cyber-attacks. However, due to the attacking cost, the attack strategy may vary a lot from one operation scenario to another from the perspective of adversary, which is not considered in previous studies. Therefore, in this paper, scenario-based two-stage sparse cyber-attack models for smart grid with complete and incomplete network information are proposed. Then, in order to effectively detect the established cyber-attacks, an interval state estimation-based defense mechanism is developed innovatively. In this mechanism, the lower and upper bounds of each state variable are modeled as a dual optimization problem that aims to maximize the variation intervals of the system variable. At last, a typical deep learning, i.e., stacked auto-encoder, is designed to properly extract the nonlinear and nonstationary features in electric load data. These features are then applied to improve the accuracy for electric load forecasting, resulting in a more narrow width of state variables. The uncertainty with respect to forecasting errors is modeled as a parametric Gaussian distribution. The validation of the proposed cyber-attack models and defense mechanism have been demonstrated via comprehensive tests on various IEEE benchmarks.",
        //         "year": 2018,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "48017011",
        //                 "name": "Huaizhi Wang"
        //             },
        //             {
        //                 "authorId": "32100894",
        //                 "name": "Jiaqi Ruan"
        //             },
        //             {
        //                 "authorId": "48738232",
        //                 "name": "Guibin Wang"
        //             },
        //             {
        //                 "authorId": "1740033",
        //                 "name": "Bin Zhou"
        //             },
        //             {
        //                 "authorId": "3131917",
        //                 "name": "Yitao Liu"
        //             },
        //             {
        //                 "authorId": "47012496",
        //                 "name": "Xueqian Fu"
        //             },
        //             {
        //                 "authorId": "10091976",
        //                 "name": "Jianchun Peng"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Thread (computing)",
        //                 "topicId": "6051",
        //                 "url": "https://www.semanticscholar.org/topic/6051"
        //             },
        //             {
        //                 "topic": "Biologic Preservation",
        //                 "topicId": "252",
        //                 "url": "https://www.semanticscholar.org/topic/252"
        //             },
        //             {
        //                 "topic": "Clock synchronization",
        //                 "topicId": "122015",
        //                 "url": "https://www.semanticscholar.org/topic/122015"
        //             },
        //             {
        //                 "topic": "Imperative programming",
        //                 "topicId": "1485",
        //                 "url": "https://www.semanticscholar.org/topic/1485"
        //             },
        //             {
        //                 "topic": "Embedded system",
        //                 "topicId": "4423",
        //                 "url": "https://www.semanticscholar.org/topic/4423"
        //             },
        //             {
        //                 "topic": "Programming paradigm",
        //                 "topicId": "29522",
        //                 "url": "https://www.semanticscholar.org/topic/29522"
        //             },
        //             {
        //                 "topic": "Engineering",
        //                 "topicId": "8777",
        //                 "url": "https://www.semanticscholar.org/topic/8777"
        //             },
        //             {
        //                 "topic": "Boolean algebra",
        //                 "topicId": "204",
        //                 "url": "https://www.semanticscholar.org/topic/204"
        //             },
        //             {
        //                 "topic": "Information Sciences",
        //                 "topicId": "1163",
        //                 "url": "https://www.semanticscholar.org/topic/1163"
        //             },
        //             {
        //                 "topic": "Embedding",
        //                 "topicId": "3610",
        //                 "url": "https://www.semanticscholar.org/topic/3610"
        //             },
        //             {
        //                 "topic": "Architecture as Topic",
        //                 "topicId": "46677",
        //                 "url": "https://www.semanticscholar.org/topic/46677"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "fbfc8033ca35b384d111d8dfa0c68199f6cda9a3",
        //         "title": "Principles of Cyber-Physical Systems",
        //         "abstract": "A cyber-physical system consists of a collection of computing devices communicating with one another and interacting with the physical world via sensors and actuators in a feedback loop. Increasingly, such systems are everywhere, from smart buildings to medical devices to automobiles. This textbook offers a rigorous and comprehensive introduction to the principles of design, specification, modeling, and analysis of cyber-physical systems. The book draws on a diverse set of subdisciplines, including model-based design, concurrency theory, distributed algorithms, formal methods of specification and verification, control theory, real-time systems, and hybrid systems, explaining the core ideas from each that are relevant to system design and analysis.The book explains how formal models provide mathematical abstractions to manage the complexity of a system design. It covers both synchronous and asynchronous models for concurrent computation, continuous-time models for dynamical systems, and hybrid systems for integrating discrete and continuous evolution. The role of correctness requirements in the design of reliable systems is illustrated with a range of specification formalisms and the associated techniques for formal verification. The topics include safety and liveness requirements, temporal logic, model checking, deductive verification, stability analysis of linear systems, and real-time scheduling algorithms. Principles of modeling, specification, and analysis are illustrated by constructing solutions to representative design problems from distributed algorithms, network protocols, control design, and robotics.This book provides the rapidly expanding field of cyber-physical systems with a long-needed foundational text by an established authority. It is suitable for classroom use or as a reference for professionals.",
        //         "year": 2015,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1710176",
        //                 "name": "R. Alur"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Testbed",
        //                 "topicId": "1705",
        //                 "url": "https://www.semanticscholar.org/topic/1705"
        //             },
        //             {
        //                 "topic": "Scalability",
        //                 "topicId": "1360",
        //                 "url": "https://www.semanticscholar.org/topic/1360"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Interconnection",
        //                 "topicId": "195",
        //                 "url": "https://www.semanticscholar.org/topic/195"
        //             },
        //             {
        //                 "topic": "Open research",
        //                 "topicId": "1298",
        //                 "url": "https://www.semanticscholar.org/topic/1298"
        //             },
        //             {
        //                 "topic": "Hardware-in-the-loop simulation",
        //                 "topicId": "108463",
        //                 "url": "https://www.semanticscholar.org/topic/108463"
        //             },
        //             {
        //                 "topic": "Distributed control system",
        //                 "topicId": "67794",
        //                 "url": "https://www.semanticscholar.org/topic/67794"
        //             },
        //             {
        //                 "topic": "AS-Interface",
        //                 "topicId": "832136",
        //                 "url": "https://www.semanticscholar.org/topic/832136"
        //             },
        //             {
        //                 "topic": "Experiment",
        //                 "topicId": "378",
        //                 "url": "https://www.semanticscholar.org/topic/378"
        //             },
        //             {
        //                 "topic": "Peer-to-peer",
        //                 "topicId": "95176",
        //                 "url": "https://www.semanticscholar.org/topic/95176"
        //             },
        //             {
        //                 "topic": "Grid computing",
        //                 "topicId": "6219",
        //                 "url": "https://www.semanticscholar.org/topic/6219"
        //             },
        //             {
        //                 "topic": "Complex system",
        //                 "topicId": "1314",
        //                 "url": "https://www.semanticscholar.org/topic/1314"
        //             },
        //             {
        //                 "topic": "Performance Evaluation",
        //                 "topicId": "91975",
        //                 "url": "https://www.semanticscholar.org/topic/91975"
        //             },
        //             {
        //                 "topic": "Transmission line",
        //                 "topicId": "33948",
        //                 "url": "https://www.semanticscholar.org/topic/33948"
        //             },
        //             {
        //                 "topic": "Power domains",
        //                 "topicId": "198377",
        //                 "url": "https://www.semanticscholar.org/topic/198377"
        //             },
        //             {
        //                 "topic": "Mathematical optimization",
        //                 "topicId": "89",
        //                 "url": "https://www.semanticscholar.org/topic/89"
        //             },
        //             {
        //                 "topic": "Traction substation",
        //                 "topicId": "1131208",
        //                 "url": "https://www.semanticscholar.org/topic/1131208"
        //             },
        //             {
        //                 "topic": "Computational complexity theory",
        //                 "topicId": "1133",
        //                 "url": "https://www.semanticscholar.org/topic/1133"
        //             },
        //             {
        //                 "topic": "Emergence",
        //                 "topicId": "5580",
        //                 "url": "https://www.semanticscholar.org/topic/5580"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "eaa211f94f1130d6803d297e86047d32bdd3e854",
        //         "title": "Logical Foundations of Cyber-Physical Systems",
        //         "abstract": "ion 70 admissible see substitution, admissible advance notice 458 adversarial 8, 422 analytic cut see cut and-operator 52, 123, 443 Angel 426 antecedent 177 arity 533 assignment 76, 147 differential 307, 327 nondeterministic 390 automaton hybrid 85, 91 autonomous 38 axiom 142\u2013162, 215\u2013217, 301\u2013308, 327\u2013349, 378\u2013380, 484\u2013494, 527 assignment 147, 486, 536 composition 153, 490 determinacy 484 duality 157, 491 iteration 155, 216, 493 modus ponens modal 161 of choice 144 of game of choice 489 solution 149, 487 test 151, 488 vacuous 162, 231, 536 axiomatics 138 axiomatization 502, 551",
        //         "year": 2018,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2717882",
        //                 "name": "A. Platzer"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Taxonomy (general)",
        //                 "topicId": "8319",
        //                 "url": "https://www.semanticscholar.org/topic/8319"
        //             },
        //             {
        //                 "topic": "Security controls",
        //                 "topicId": "7117",
        //                 "url": "https://www.semanticscholar.org/topic/7117"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Artificial intelligence",
        //                 "topicId": "8286",
        //                 "url": "https://www.semanticscholar.org/topic/8286"
        //             },
        //             {
        //                 "topic": "Database",
        //                 "topicId": "1307",
        //                 "url": "https://www.semanticscholar.org/topic/1307"
        //             },
        //             {
        //                 "topic": "Risk management",
        //                 "topicId": "4777",
        //                 "url": "https://www.semanticscholar.org/topic/4777"
        //             },
        //             {
        //                 "topic": "Cybercrime",
        //                 "topicId": "24679",
        //                 "url": "https://www.semanticscholar.org/topic/24679"
        //             },
        //             {
        //                 "topic": "Yottabyte",
        //                 "topicId": "472850",
        //                 "url": "https://www.semanticscholar.org/topic/472850"
        //             },
        //             {
        //                 "topic": "Threat (computer)",
        //                 "topicId": "313615",
        //                 "url": "https://www.semanticscholar.org/topic/313615"
        //             },
        //             {
        //                 "topic": "Theme (computing)",
        //                 "topicId": "11729",
        //                 "url": "https://www.semanticscholar.org/topic/11729"
        //             },
        //             {
        //                 "topic": "Cyber-Insurance",
        //                 "topicId": "1138120",
        //                 "url": "https://www.semanticscholar.org/topic/1138120"
        //             },
        //             {
        //                 "topic": "Holism",
        //                 "topicId": "20318",
        //                 "url": "https://www.semanticscholar.org/topic/20318"
        //             },
        //             {
        //                 "topic": "Lurker",
        //                 "topicId": "521134",
        //                 "url": "https://www.semanticscholar.org/topic/521134"
        //             },
        //             {
        //                 "topic": "Software propagation",
        //                 "topicId": "2021211",
        //                 "url": "https://www.semanticscholar.org/topic/2021211"
        //             },
        //             {
        //                 "topic": "Side effect (computer science)",
        //                 "topicId": "156892",
        //                 "url": "https://www.semanticscholar.org/topic/156892"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "28332c7dd21c5b5d497fa4b578310252c9ec9667",
        //         "title": "A meta\u2010analysis of the differential relations of traditional and cyber\u2010victimization with internalizing problems",
        //         "abstract": "This meta-analysis examined the associations between cyber-victimization and internalizing problems controlling for the occurrence of traditional victimization. Twenty independent samples with a total of 90,877 participants were included. Results confirmed the significant intercorrelation between traditional and cyber-victimization (r\u2009=\u2009.43). They both have medium-to-large bivariate correlations with internalizing problems. Traditional victimization (sr\u2009=\u2009.22) and cyber-victimization (sr\u2009=\u2009.12) were also uniquely related to internalizing problems. The difference in the relations between each type of victimization and internalizing problems was small (differential d\u2009=\u2009.06) and not statistically significant (p\u2009=\u2009.053). Moderation of these effect sizes by sample characteristics (e.g., age and proportion of girls) and study features (e.g., whether a definition of bullying was provided to participants and the time frame used as reference) was investigated. Results are discussed within the extant literature on cyber-aggression and cyber-victimization and future directions are proposed.",
        //         "year": 2018,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Psychology",
        //             "Medicine"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "40168925",
        //                 "name": "G. Gini"
        //             },
        //             {
        //                 "authorId": "3464282",
        //                 "name": "Noel A. Card"
        //             },
        //             {
        //                 "authorId": "6333496",
        //                 "name": "Tiziana Pozzoli"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Axiomatic system",
        //                 "topicId": "39563",
        //                 "url": "https://www.semanticscholar.org/topic/39563"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Iteration",
        //                 "topicId": "11823",
        //                 "url": "https://www.semanticscholar.org/topic/11823"
        //             },
        //             {
        //                 "topic": "Modal logic",
        //                 "topicId": "61528",
        //                 "url": "https://www.semanticscholar.org/topic/61528"
        //             },
        //             {
        //                 "topic": "Automaton",
        //                 "topicId": "10069",
        //                 "url": "https://www.semanticscholar.org/topic/10069"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "f06e77001d4ca5091a330fb92ec9a67dc8a090a3",
        //         "title": "Blockchain: a secure, decentralized, trusted cyber infrastructure solution for future energy systems",
        //         "abstract": "Modern power systems are rapidly evolving into complex cyber-physical systems. The increasingly complex interaction among different energy entities calls for a secure, efficient, and robust cyber infrastructure. As an emerging distributed computing technology, Blockchain provides a secure environment to support such interactions. This paper gives a prospective on using Blockchain as a secure, distributed cyber infrastructure for the future grid. Firstly, the basic principles of Blockchain and its state-of-the-art are introduced. Then, a Blockchain based smart grid cyber-physical infrastructure model is proposed. Afterwards, some promising application domains of Blockchain in future grids are presented. Following this, some potential challenges are discussed.",
        //         "year": 2018,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "144402926",
        //                 "name": "Z. Dong"
        //             },
        //             {
        //                 "authorId": "39321868",
        //                 "name": "F. Luo"
        //             },
        //             {
        //                 "authorId": "14773099",
        //                 "name": "Gaoqi Liang"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Handbook",
        //                 "topicId": "81003",
        //                 "url": "https://www.semanticscholar.org/topic/81003"
        //             },
        //             {
        //                 "topic": "Cryptography",
        //                 "topicId": "6370",
        //                 "url": "https://www.semanticscholar.org/topic/6370"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "5236100dcf7323b945dc5d431be175469e007224",
        //         "title": "Cyber Security and the Internet of Things: Vulnerabilities, Threats, Intruders and Attacks",
        //         "abstract": "Internet of Things (IoT) devices are rapidly becoming ubiquitous while IoT services are becoming pervasive. Their success has not gone unnoticed and the number of threats and attacks against IoT devices and services are on the increase as well. Cyber-attacks are not new to IoT, but as IoT will be deeply interwoven in our lives and societies, it is becoming necessary to step up and take cyber defense seriously. Hence, there is a real need to secure IoT, which has consequently resulted in a need to comprehensively understand the threats and attacks on IoT infrastructure. This paper is an attempt to classify threat types, besides analyze and characterize intruders and attacks facing IoT devices and services.",
        //         "year": 2015,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2908609",
        //                 "name": "Mohamed Abomhara"
        //             },
        //             {
        //                 "authorId": "152445073",
        //                 "name": "G. M. K\u00f8ien"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Review [Publication Type]",
        //                 "topicId": "428",
        //                 "url": "https://www.semanticscholar.org/topic/428"
        //             },
        //             {
        //                 "topic": "Aptitude",
        //                 "topicId": "70219",
        //                 "url": "https://www.semanticscholar.org/topic/70219"
        //             },
        //             {
        //                 "topic": "NIH Roadmap Initiative tag",
        //                 "topicId": "11292",
        //                 "url": "https://www.semanticscholar.org/topic/11292"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "85dacb2fa8093e2d8a792c6f53c3429cbbdf5606",
        //         "title": "Autoencoder-based feature learning for cyber security applications",
        //         "abstract": "This paper presents a novel feature learning model for cyber security tasks. We propose to use Auto-encoders (AEs), as a generative model, to learn latent representation of different feature sets. We show how well the AE is capable of automatically learning a reasonable notion of semantic similarity among input features. Specifically, the AE accepts a feature vector, obtained from cyber security phenomena, and extracts a code vector that captures the semantic similarity between the feature vectors. This similarity is embedded in an abstract latent representation. Because the AE is trained in an unsupervised fashion, the main part of this success comes from appropriate original feature set that is used in this paper. It can also provide more discriminative features in contrast to other feature engineering approaches. Furthermore, the scheme can reduce the dimensionality of the features thereby signicantly minimising the memory requirements. We selected two different cyber security tasks: networkbased anomaly intrusion detection and Malware classication. We have analysed the proposed scheme with various classifiers using publicly available datasets for network anomaly intrusion detection and malware classifications. Several appropriate evaluation metrics show improvement compared to prior results.",
        //         "year": 2017,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1403355253",
        //                 "name": "Mahmood Yousefi-Azar"
        //             },
        //             {
        //                 "authorId": "1693037",
        //                 "name": "V. Varadharajan"
        //             },
        //             {
        //                 "authorId": "119899233",
        //                 "name": "Len Hamey"
        //             },
        //             {
        //                 "authorId": "1707996",
        //                 "name": "U. Tupakula"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "bb19badb69faae0a86cdbbc56651af6b4305183f",
        //         "title": "The Operator 4.0: Human Cyber-Physical Systems & Adaptive Automation Towards Human-Automation Symbiosis Work Systems",
        //         "abstract": "A vision for the Operator 4.0 is presented in this paper in the context of human cyber-physical systems and adaptive automation towards human-automation symbiosis work systems for a socially sustainable manufacturing workforce. Discussions include base concepts and enabling technologies for the development of human-automation symbiosis work systems in Industry 4.0.",
        //         "year": 2016,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2064242338",
        //                 "name": "David Romero"
        //             },
        //             {
        //                 "authorId": "2155577",
        //                 "name": "P. Bernus"
        //             },
        //             {
        //                 "authorId": "2392541",
        //                 "name": "O. Noran"
        //             },
        //             {
        //                 "authorId": "2762298",
        //                 "name": "J. Stahre"
        //             },
        //             {
        //                 "authorId": "1399733841",
        //                 "name": "\u00c5. Fast-Berglund"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Anomaly detection",
        //                 "topicId": "15077",
        //                 "url": "https://www.semanticscholar.org/topic/15077"
        //             },
        //             {
        //                 "topic": "Control system",
        //                 "topicId": "80",
        //                 "url": "https://www.semanticscholar.org/topic/80"
        //             },
        //             {
        //                 "topic": "Sybil attack",
        //                 "topicId": "143114",
        //                 "url": "https://www.semanticscholar.org/topic/143114"
        //             },
        //             {
        //                 "topic": "Waze",
        //                 "topicId": "307270",
        //                 "url": "https://www.semanticscholar.org/topic/307270"
        //             },
        //             {
        //                 "topic": "Crowdsourcing",
        //                 "topicId": "85",
        //                 "url": "https://www.semanticscholar.org/topic/85"
        //             },
        //             {
        //                 "topic": "ACM Computing Surveys",
        //                 "topicId": "481800",
        //                 "url": "https://www.semanticscholar.org/topic/481800"
        //             },
        //             {
        //                 "topic": "Intrusion detection system",
        //                 "topicId": "3180",
        //                 "url": "https://www.semanticscholar.org/topic/3180"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Time series",
        //                 "topicId": "1293",
        //                 "url": "https://www.semanticscholar.org/topic/1293"
        //             },
        //             {
        //                 "topic": "Sensor",
        //                 "topicId": "1117",
        //                 "url": "https://www.semanticscholar.org/topic/1117"
        //             },
        //             {
        //                 "topic": "Taxonomy (general)",
        //                 "topicId": "8319",
        //                 "url": "https://www.semanticscholar.org/topic/8319"
        //             },
        //             {
        //                 "topic": "Attack model",
        //                 "topicId": "20926",
        //                 "url": "https://www.semanticscholar.org/topic/20926"
        //             },
        //             {
        //                 "topic": "Telecommunications network",
        //                 "topicId": "32720",
        //                 "url": "https://www.semanticscholar.org/topic/32720"
        //             },
        //             {
        //                 "topic": "Authentication",
        //                 "topicId": "2111",
        //                 "url": "https://www.semanticscholar.org/topic/2111"
        //             },
        //             {
        //                 "topic": "Experiment",
        //                 "topicId": "378",
        //                 "url": "https://www.semanticscholar.org/topic/378"
        //             },
        //             {
        //                 "topic": "Routing",
        //                 "topicId": "1048",
        //                 "url": "https://www.semanticscholar.org/topic/1048"
        //             },
        //             {
        //                 "topic": "Closing (morphology)",
        //                 "topicId": "27538",
        //                 "url": "https://www.semanticscholar.org/topic/27538"
        //             },
        //             {
        //                 "topic": "Taxonomy",
        //                 "topicId": "351566",
        //                 "url": "https://www.semanticscholar.org/topic/351566"
        //             },
        //             {
        //                 "topic": "Optic axis of a crystal",
        //                 "topicId": "1214722",
        //                 "url": "https://www.semanticscholar.org/topic/1214722"
        //             },
        //             {
        //                 "topic": "Receiver operating characteristic",
        //                 "topicId": "22229",
        //                 "url": "https://www.semanticscholar.org/topic/22229"
        //             },
        //             {
        //                 "topic": "CDISC ADAS-Cog - Commands Summary Score",
        //                 "topicId": "495282",
        //                 "url": "https://www.semanticscholar.org/topic/495282"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "c001038442e0f00742507e7741984c68473257e9",
        //         "title": "Cyber\u2013Physical System Security for the Electric Power Grid",
        //         "abstract": "The development of a trustworthy smart grid requires a deeper understanding of potential impacts resulting from successful cyber attacks. Estimating feasible attack impact requires an evaluation of the grid's dependency on its cyber infrastructure and its ability to tolerate potential failures. A further exploration of the cyber-physical relationships within the smart grid and a specific review of possible attack vectors is necessary to determine the adequacy of cybersecurity efforts. This paper highlights the significance of cyber infrastructure security in conjunction with power application security to prevent, mitigate, and tolerate cyber attacks. A layered approach is introduced to evaluating risk based on the security of both the physical power applications and the supporting cyber infrastructure. A classification is presented to highlight dependencies between the cyber-physical controls required to support the smart grid and the communication and computations that must be protected from cyber attack. The paper then presents current research efforts aimed at enhancing the smart grid's application and infrastructure security. Finally, current challenges are identified to facilitate future research efforts.",
        //         "year": 2012,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "46804466",
        //                 "name": "S. Sridhar"
        //             },
        //             {
        //                 "authorId": "144195681",
        //                 "name": "A. Hahn"
        //             },
        //             {
        //                 "authorId": "1741532",
        //                 "name": "G. Manimaran"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Statistical model",
        //                 "topicId": "2871",
        //                 "url": "https://www.semanticscholar.org/topic/2871"
        //             },
        //             {
        //                 "topic": "Machine learning",
        //                 "topicId": "168",
        //                 "url": "https://www.semanticscholar.org/topic/168"
        //             },
        //             {
        //                 "topic": "Decision Making",
        //                 "topicId": "7782",
        //                 "url": "https://www.semanticscholar.org/topic/7782"
        //             },
        //             {
        //                 "topic": "Social media",
        //                 "topicId": "6015",
        //                 "url": "https://www.semanticscholar.org/topic/6015"
        //             },
        //             {
        //                 "topic": "Big data",
        //                 "topicId": "20355",
        //                 "url": "https://www.semanticscholar.org/topic/20355"
        //             },
        //             {
        //                 "topic": "Supervised learning",
        //                 "topicId": "8357",
        //                 "url": "https://www.semanticscholar.org/topic/8357"
        //             },
        //             {
        //                 "topic": "Logic programming",
        //                 "topicId": "6032",
        //                 "url": "https://www.semanticscholar.org/topic/6032"
        //             },
        //             {
        //                 "topic": "CLARION (cognitive architecture)",
        //                 "topicId": "1260522",
        //                 "url": "https://www.semanticscholar.org/topic/1260522"
        //             },
        //             {
        //                 "topic": "Self-replication",
        //                 "topicId": "21012",
        //                 "url": "https://www.semanticscholar.org/topic/21012"
        //             },
        //             {
        //                 "topic": "Social network",
        //                 "topicId": "12426",
        //                 "url": "https://www.semanticscholar.org/topic/12426"
        //             },
        //             {
        //                 "topic": "Document classification",
        //                 "topicId": "11241",
        //                 "url": "https://www.semanticscholar.org/topic/11241"
        //             },
        //             {
        //                 "topic": "Mass Effect Trilogy",
        //                 "topicId": "73412",
        //                 "url": "https://www.semanticscholar.org/topic/73412"
        //             },
        //             {
        //                 "topic": "Half-Life 2: Episode One",
        //                 "topicId": "2333329",
        //                 "url": "https://www.semanticscholar.org/topic/2333329"
        //             },
        //             {
        //                 "topic": "Stemming",
        //                 "topicId": "4937",
        //                 "url": "https://www.semanticscholar.org/topic/4937"
        //             },
        //             {
        //                 "topic": "Baseline (configuration management)",
        //                 "topicId": "3403",
        //                 "url": "https://www.semanticscholar.org/topic/3403"
        //             },
        //             {
        //                 "topic": "Parsing",
        //                 "topicId": "1910",
        //                 "url": "https://www.semanticscholar.org/topic/1910"
        //             },
        //             {
        //                 "topic": "Phrases",
        //                 "topicId": "14658",
        //                 "url": "https://www.semanticscholar.org/topic/14658"
        //             },
        //             {
        //                 "topic": "Contain (action)",
        //                 "topicId": "547280",
        //                 "url": "https://www.semanticscholar.org/topic/547280"
        //             },
        //             {
        //                 "topic": "Informatics (discipline)",
        //                 "topicId": "37667",
        //                 "url": "https://www.semanticscholar.org/topic/37667"
        //             },
        //             {
        //                 "topic": "Social Media",
        //                 "topicId": "6018",
        //                 "url": "https://www.semanticscholar.org/topic/6018"
        //             },
        //             {
        //                 "topic": "Clotting time:Time:Pt:Bld:Qn:Lee White",
        //                 "topicId": "3882712",
        //                 "url": "https://www.semanticscholar.org/topic/3882712"
        //             },
        //             {
        //                 "topic": "Hate",
        //                 "topicId": "294158",
        //                 "url": "https://www.semanticscholar.org/topic/294158"
        //             },
        //             {
        //                 "topic": "Parse tree",
        //                 "topicId": "11471",
        //                 "url": "https://www.semanticscholar.org/topic/11471"
        //             },
        //             {
        //                 "topic": "CMA-ES",
        //                 "topicId": "387605",
        //                 "url": "https://www.semanticscholar.org/topic/387605"
        //             },
        //             {
        //                 "topic": "Regression Analysis",
        //                 "topicId": "2443",
        //                 "url": "https://www.semanticscholar.org/topic/2443"
        //             },
        //             {
        //                 "topic": "H Lee Moffitt Cancer Center and Research Institute",
        //                 "topicId": "1838587",
        //                 "url": "https://www.semanticscholar.org/topic/1838587"
        //             },
        //             {
        //                 "topic": "Pete Finnigan",
        //                 "topicId": "6568448",
        //                 "url": "https://www.semanticscholar.org/topic/6568448"
        //             },
        //             {
        //                 "topic": "Published Comment",
        //                 "topicId": "838",
        //                 "url": "https://www.semanticscholar.org/topic/838"
        //             },
        //             {
        //                 "topic": "Projections and Predictions",
        //                 "topicId": "826",
        //                 "url": "https://www.semanticscholar.org/topic/826"
        //             },
        //             {
        //                 "topic": "Type system",
        //                 "topicId": "50701",
        //                 "url": "https://www.semanticscholar.org/topic/50701"
        //             },
        //             {
        //                 "topic": "Crime Act",
        //                 "topicId": "24680",
        //                 "url": "https://www.semanticscholar.org/topic/24680"
        //             },
        //             {
        //                 "topic": "Social Sciences",
        //                 "topicId": "27820",
        //                 "url": "https://www.semanticscholar.org/topic/27820"
        //             },
        //             {
        //                 "topic": "Annotation",
        //                 "topicId": "37540",
        //                 "url": "https://www.semanticscholar.org/topic/37540"
        //             },
        //             {
        //                 "topic": "Body of uterus",
        //                 "topicId": "2915",
        //                 "url": "https://www.semanticscholar.org/topic/2915"
        //             },
        //             {
        //                 "topic": "Note (document)",
        //                 "topicId": "5762",
        //                 "url": "https://www.semanticscholar.org/topic/5762"
        //             },
        //             {
        //                 "topic": "computer science",
        //                 "topicId": "4496",
        //                 "url": "https://www.semanticscholar.org/topic/4496"
        //             },
        //             {
        //                 "topic": "emotional dependency",
        //                 "topicId": "2851",
        //                 "url": "https://www.semanticscholar.org/topic/2851"
        //             },
        //             {
        //                 "topic": "Flow",
        //                 "topicId": "1302",
        //                 "url": "https://www.semanticscholar.org/topic/1302"
        //             },
        //             {
        //                 "topic": "Health Services Research",
        //                 "topicId": "100397",
        //                 "url": "https://www.semanticscholar.org/topic/100397"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "ce867eae9b6c335502aeda9a8d1e4faed0c6087c",
        //         "title": "Cyber Risk for the Financial Sector: A Framework for Quantitative Assessment",
        //         "abstract": "Cyber risk has emerged as a key threat to financial stability, following recent attacks on financial institutions. This paper presents a novel documentation of cyber risk around the world for financial institutions by analyzing the different types of cyber incidents (data breaches, fraud and business disruption) and identifying patterns using a variety of datasets. The other novel contribution that is outlined is a quantitative framework to assess cyber risk for the financial sector. The framework draws on a standard VaR type framework used to assess various types of stability risk and can be easily applied at the individual country level. The framework is applied in this paper to the available cross-country data and yields illustrative aggregated losses for the financial sector in the sample across a variety of scenarios ranging from 10 to 30 percent of net income.",
        //         "year": 2018,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Business"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "50003646",
        //                 "name": "A. Bouveret"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Smart TV",
        //                 "topicId": "216625",
        //                 "url": "https://www.semanticscholar.org/topic/216625"
        //             },
        //             {
        //                 "topic": "Cloud computing",
        //                 "topicId": "2756",
        //                 "url": "https://www.semanticscholar.org/topic/2756"
        //             },
        //             {
        //                 "topic": "Big data",
        //                 "topicId": "20355",
        //                 "url": "https://www.semanticscholar.org/topic/20355"
        //             },
        //             {
        //                 "topic": "Network science",
        //                 "topicId": "195399",
        //                 "url": "https://www.semanticscholar.org/topic/195399"
        //             },
        //             {
        //                 "topic": "Internet of things",
        //                 "topicId": "51309",
        //                 "url": "https://www.semanticscholar.org/topic/51309"
        //             },
        //             {
        //                 "topic": "Ecosystem",
        //                 "topicId": "727",
        //                 "url": "https://www.semanticscholar.org/topic/727"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "f5ba05dfd78168baa81c12eb61843eb962c3e698",
        //         "title": "An Adaptive Control Architecture for Mitigating Sensor and Actuator Attacks in Cyber-Physical Systems",
        //         "abstract": "Recent technological advances in communications and computation have spurred a broad interest in control law architectures involving the monitoring, coordination, integration, and operation of sensing, computing, and communication components that tightly interact with the physical processes that they control. These systems are known as cyber-physical systems and due to their use of open computation and communication platform architectures, controlled cyber-physical systems are vulnerable to adversarial attacks. In this technical note, we propose a novel adaptive control architecture for addressing security and safety in cyber-physical systems. Specifically, we develop an adaptive controller that guarantees uniform ultimate boundedness of the closed-loop dynamical system in the face of adversarial sensor and actuator attacks that are time-varying and partial asymptotic stability when the sensor and actuator attacks are time-invariant. Finally, we provide a numerical example to illustrate the efficacy of the proposed adaptive control architecture.",
        //         "year": 2017,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "145717438",
        //                 "name": "Xu Jin"
        //             },
        //             {
        //                 "authorId": "1682905",
        //                 "name": "W. Haddad"
        //             },
        //             {
        //                 "authorId": "1787895",
        //                 "name": "T. Yucelen"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Abnormal behavior",
        //                 "topicId": "50913",
        //                 "url": "https://www.semanticscholar.org/topic/50913"
        //             },
        //             {
        //                 "topic": "Mental association",
        //                 "topicId": "250316",
        //                 "url": "https://www.semanticscholar.org/topic/250316"
        //             },
        //             {
        //                 "topic": "Bullying",
        //                 "topicId": "39290",
        //                 "url": "https://www.semanticscholar.org/topic/39290"
        //             },
        //             {
        //                 "topic": "Victimization",
        //                 "topicId": "12875",
        //                 "url": "https://www.semanticscholar.org/topic/12875"
        //             },
        //             {
        //                 "topic": "Female child",
        //                 "topicId": "3718",
        //                 "url": "https://www.semanticscholar.org/topic/3718"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "2e6633ea57ac66b016799891ba97087c9c7aa20e",
        //         "title": "The Privacy Implications of Cyber Security Systems",
        //         "abstract": "Cyber-security systems, which protect networks and computers against cyber attacks, are becoming common due to increasing threats and government regulation. At the same time, the enormous amount of data gathered by cyber-security systems poses a serious threat to the privacy of the people protected by those systems. To ground this threat, we survey common and novel cyber-security technologies and analyze them according to the potential for privacy invasion. We suggest a taxonomy for privacy risks assessment of information security technologies, based on the level of data exposure, the level of identification of individual users, the data sensitivity and the user control over the monitoring, and collection and analysis of the data. We discuss our results in light of the recent technological trends and suggest several new directions for making these mechanisms more privacy-aware.",
        //         "year": 2018,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2629270",
        //                 "name": "Eran Toch"
        //             },
        //             {
        //                 "authorId": "1725133",
        //                 "name": "C. Bettini"
        //             },
        //             {
        //                 "authorId": "1824816",
        //                 "name": "E. Shmueli"
        //             },
        //             {
        //                 "authorId": "48071255",
        //                 "name": "Laura Radaelli"
        //             },
        //             {
        //                 "authorId": "3295950",
        //                 "name": "A. Lanzi"
        //             },
        //             {
        //                 "authorId": "1802743",
        //                 "name": "Daniele Riboni"
        //             },
        //             {
        //                 "authorId": "1776476",
        //                 "name": "B. Lepri"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Nash equilibrium",
        //                 "topicId": "17596",
        //                 "url": "https://www.semanticscholar.org/topic/17596"
        //             },
        //             {
        //                 "topic": "Sensor node",
        //                 "topicId": "1053",
        //                 "url": "https://www.semanticscholar.org/topic/1053"
        //             },
        //             {
        //                 "topic": "Markov chain",
        //                 "topicId": "5418",
        //                 "url": "https://www.semanticscholar.org/topic/5418"
        //             },
        //             {
        //                 "topic": "Radio jamming",
        //                 "topicId": "713856",
        //                 "url": "https://www.semanticscholar.org/topic/713856"
        //             },
        //             {
        //                 "topic": "Game theory",
        //                 "topicId": "17593",
        //                 "url": "https://www.semanticscholar.org/topic/17593"
        //             },
        //             {
        //                 "topic": "Computation",
        //                 "topicId": "339",
        //                 "url": "https://www.semanticscholar.org/topic/339"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "e918264cf08d8569bf6a2c6bb10c1b1e03851853",
        //         "title": "A Cyber-Physical Control Framework for Transient Stability in Smart Grids",
        //         "abstract": "Denial of service attacks and communication latency pose challenges for the operation of control systems within power systems. Specifically, excessive delay between sensors and controllers can substantially worsen the performance of distributed control schemes. In this paper, we propose a framework for delay-resilient cyber-physical control of smart grid systems for transient stability applications. The proposed control scheme adapts its structure depending on the value of the latency. As an example, we consider a parametric feedback linearization (PFL) control paradigm and make it \u201ccyber-aware.\u201d A delay-adaptive design that capitalizes on the features of PFL control is presented to enhance the time-delay tolerance of the power system. Depending on the information latency present in the smart grid, the parameters and the structure of the PFL controller are adapted accordingly to optimize performance. The improved resilience is demonstrated by applying the PFL controller to the New England 39-bus and WECC 9-bus test power systems following the occurrence of physical and cyber disturbances. Numerical results show that the proposed cyber-physical controller can tolerate substantial delays without noticeable performance degradation.",
        //         "year": 2018,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2257715",
        //                 "name": "Abdallah K. Farraj"
        //             },
        //             {
        //                 "authorId": "2338420",
        //                 "name": "Eman M. Hammad"
        //             },
        //             {
        //                 "authorId": "1742497",
        //                 "name": "D. Kundur"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Recurrent neural network",
        //                 "topicId": "16115",
        //                 "url": "https://www.semanticscholar.org/topic/16115"
        //             },
        //             {
        //                 "topic": "Unsupervised learning",
        //                 "topicId": "7721",
        //                 "url": "https://www.semanticscholar.org/topic/7721"
        //             },
        //             {
        //                 "topic": "Anomaly detection",
        //                 "topicId": "15077",
        //                 "url": "https://www.semanticscholar.org/topic/15077"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Time series",
        //                 "topicId": "1293",
        //                 "url": "https://www.semanticscholar.org/topic/1293"
        //             },
        //             {
        //                 "topic": "Experiment",
        //                 "topicId": "378",
        //                 "url": "https://www.semanticscholar.org/topic/378"
        //             },
        //             {
        //                 "topic": "Testbed",
        //                 "topicId": "1705",
        //                 "url": "https://www.semanticscholar.org/topic/1705"
        //             },
        //             {
        //                 "topic": "Self-replicating machine",
        //                 "topicId": "877576",
        //                 "url": "https://www.semanticscholar.org/topic/877576"
        //             },
        //             {
        //                 "topic": "Kerrison Predictor",
        //                 "topicId": "5734106",
        //                 "url": "https://www.semanticscholar.org/topic/5734106"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "729642f508fd83800636597ab4e43b034b1822a8",
        //         "title": "A taxonomy of cyber-harms: Defining the impacts of cyber-attacks and understanding how they propagate",
        //         "abstract": "Technological advances have resulted in organisations digitalizing many parts of their operations. The threat landscape of cyber-attacks is rapidly changing and the potential impact of such attacks is uncertain, because there is a lack of effective metrics, tools and frameworks to understand and assess the harm organisations face from cyber-attacks. In this paper, we reflect on the literature on harm, and how it has been conceptualised in disciplines such as criminology and economics, and investigate how other notions such as risk and impact relate to harm. Based on an extensive literature survey and on reviewing news articles and databases reporting cyber-incidents, cybercrimes, hacks and other attacks, we identify various types of harm and create a taxonomy of cyber-harms encountered by organisations. This taxonomy comprises five broad themes: physical or digital harm; economic harm; psychological harm; reputational harm; and social and societal harm. In each of these themes we present several cyber-harms that can result from cyber-attacks. To provide initial indications about how these different types of harm are connected and how cyber-harm in general may propagate, this article also analyses and draws insight from four real-world case studies, involving Sony (2011 and 2014), JPMorgan and Ashley Madison. We conclude by arguing for the need for analytical tools for organisational cyber-harm, which can be based on a taxonomy such as the one we propose here. These would allow organisations to identify corporate assets, link these to different types of cyber-harm, measure those harms and, finally, consider the security controls needed for the treatment of harm.",
        //         "year": 2018,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Sociology",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2127236",
        //                 "name": "Ioannis Agrafiotis"
        //             },
        //             {
        //                 "authorId": "1803701",
        //                 "name": "Jason R. C. Nurse"
        //             },
        //             {
        //                 "authorId": "143914330",
        //                 "name": "M. Goldsmith"
        //             },
        //             {
        //                 "authorId": "1698354",
        //                 "name": "S. Creese"
        //             },
        //             {
        //                 "authorId": "48105791",
        //                 "name": "D. Upton"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Privacy",
        //                 "topicId": "29928",
        //                 "url": "https://www.semanticscholar.org/topic/29928"
        //             },
        //             {
        //                 "topic": "Requirement",
        //                 "topicId": "136",
        //                 "url": "https://www.semanticscholar.org/topic/136"
        //             },
        //             {
        //                 "topic": "ACM Computing Surveys",
        //                 "topicId": "481800",
        //                 "url": "https://www.semanticscholar.org/topic/481800"
        //             },
        //             {
        //                 "topic": "Information security",
        //                 "topicId": "12548",
        //                 "url": "https://www.semanticscholar.org/topic/12548"
        //             },
        //             {
        //                 "topic": "Privacy-enhancing technologies",
        //                 "topicId": "90883",
        //                 "url": "https://www.semanticscholar.org/topic/90883"
        //             },
        //             {
        //                 "topic": "Information sensitivity",
        //                 "topicId": "111211",
        //                 "url": "https://www.semanticscholar.org/topic/111211"
        //             },
        //             {
        //                 "topic": "Data anonymization",
        //                 "topicId": "44790",
        //                 "url": "https://www.semanticscholar.org/topic/44790"
        //             },
        //             {
        //                 "topic": "Personally identifiable information",
        //                 "topicId": "14269",
        //                 "url": "https://www.semanticscholar.org/topic/14269"
        //             },
        //             {
        //                 "topic": "User interface",
        //                 "topicId": "4509",
        //                 "url": "https://www.semanticscholar.org/topic/4509"
        //             },
        //             {
        //                 "topic": "Client-side",
        //                 "topicId": "26717",
        //                 "url": "https://www.semanticscholar.org/topic/26717"
        //             },
        //             {
        //                 "topic": "Backdrop CMS",
        //                 "topicId": "3572502",
        //                 "url": "https://www.semanticscholar.org/topic/3572502"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "affaa10d7b6d2131c7b6674c64e8aac029a4d9ed",
        //         "title": "The Cyber-Physical Systems Revolution",
        //         "abstract": "Cyber-physical systems constitute a disruptive technology across many industries, with a strong impact on economies and social processes. Their applications in many domains, from manufacturing to agriculture and from critical infrastructure to assistive living, brings challenges in technology, business, law and ethics.",
        //         "year": 2018,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1757088",
        //                 "name": "D. Serpanos"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Systematic review",
        //                 "topicId": "23688",
        //                 "url": "https://www.semanticscholar.org/topic/23688"
        //             },
        //             {
        //                 "topic": "CP/M",
        //                 "topicId": "45603",
        //                 "url": "https://www.semanticscholar.org/topic/45603"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "13b20d8f514f02d81307d1de6472b9095e793222",
        //         "title": "Do firms underreport information on cyber-attacks? Evidence from capital markets",
        //         "abstract": "Firms should disclose information on material cyber-attacks. However, because managers have incentives to withhold negative information, and investors cannot discover most cyber-attacks independently, firms may underreport them. Using data on cyber-attacks that firms voluntarily disclosed, and those that were withheld and later discovered by sources outside the firm, we estimate the extent to which firms withhold information on cyber-attacks. We find withheld cyber-attacks are associated with a decline of approximately 3.6% in equity values in the month the attack is discovered, and disclosed attacks with a substantially lower decline of 0.7%. The evidence is consistent with managers not disclosing negative information below a certain threshold and withholding information on the more severe attacks. Using the market reactions to withheld and disclosed attacks, we estimate that managers disclose information on cyber-attacks when investors already suspect a high likelihood (40%) of an attack.",
        //         "year": 2018,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Business"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "114243448",
        //                 "name": "E. Amir"
        //             },
        //             {
        //                 "authorId": "143672400",
        //                 "name": "S. Levi"
        //             },
        //             {
        //                 "authorId": "120998355",
        //                 "name": "Tsafrir Livne"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Feature learning",
        //                 "topicId": "20551",
        //                 "url": "https://www.semanticscholar.org/topic/20551"
        //             },
        //             {
        //                 "topic": "Autoencoder",
        //                 "topicId": "433939",
        //                 "url": "https://www.semanticscholar.org/topic/433939"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Malware",
        //                 "topicId": "3176",
        //                 "url": "https://www.semanticscholar.org/topic/3176"
        //             },
        //             {
        //                 "topic": "Semantic similarity",
        //                 "topicId": "34825",
        //                 "url": "https://www.semanticscholar.org/topic/34825"
        //             },
        //             {
        //                 "topic": "Encoder",
        //                 "topicId": "16744",
        //                 "url": "https://www.semanticscholar.org/topic/16744"
        //             },
        //             {
        //                 "topic": "Anomaly detection",
        //                 "topicId": "15077",
        //                 "url": "https://www.semanticscholar.org/topic/15077"
        //             },
        //             {
        //                 "topic": "Internet of things",
        //                 "topicId": "51309",
        //                 "url": "https://www.semanticscholar.org/topic/51309"
        //             },
        //             {
        //                 "topic": "Generative model",
        //                 "topicId": "37177",
        //                 "url": "https://www.semanticscholar.org/topic/37177"
        //             },
        //             {
        //                 "topic": "Feature vector",
        //                 "topicId": "4255",
        //                 "url": "https://www.semanticscholar.org/topic/4255"
        //             },
        //             {
        //                 "topic": "Intrusion detection system",
        //                 "topicId": "3180",
        //                 "url": "https://www.semanticscholar.org/topic/3180"
        //             },
        //             {
        //                 "topic": "Antivirus software",
        //                 "topicId": "6366",
        //                 "url": "https://www.semanticscholar.org/topic/6366"
        //             },
        //             {
        //                 "topic": "Feature engineering",
        //                 "topicId": "174650",
        //                 "url": "https://www.semanticscholar.org/topic/174650"
        //             },
        //             {
        //                 "topic": "Embedded system",
        //                 "topicId": "4423",
        //                 "url": "https://www.semanticscholar.org/topic/4423"
        //             },
        //             {
        //                 "topic": "Unsupervised learning",
        //                 "topicId": "7721",
        //                 "url": "https://www.semanticscholar.org/topic/7721"
        //             },
        //             {
        //                 "topic": "Algorithmic efficiency",
        //                 "topicId": "19973",
        //                 "url": "https://www.semanticscholar.org/topic/19973"
        //             },
        //             {
        //                 "topic": "Preprocessor",
        //                 "topicId": "7291",
        //                 "url": "https://www.semanticscholar.org/topic/7291"
        //             },
        //             {
        //                 "topic": "Requirement",
        //                 "topicId": "136",
        //                 "url": "https://www.semanticscholar.org/topic/136"
        //             },
        //             {
        //                 "topic": "Byte",
        //                 "topicId": "16722",
        //                 "url": "https://www.semanticscholar.org/topic/16722"
        //             },
        //             {
        //                 "topic": "Data breach",
        //                 "topicId": "155991",
        //                 "url": "https://www.semanticscholar.org/topic/155991"
        //             },
        //             {
        //                 "topic": "Anomaly-based intrusion detection system",
        //                 "topicId": "1835698",
        //                 "url": "https://www.semanticscholar.org/topic/1835698"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "66cd996e9c959dfd2ebd92733a922e21c036d9f2",
        //         "title": "Medical cyber-physical systems: A survey",
        //         "abstract": "Medical cyber-physical systems (MCPS) are healthcare critical integration of a network of medical devices. These systems are progressively used in hospitals to achieve a continuous high-quality healthcare. The MCPS design faces numerous challenges, including inoperability, security/privacy, and high assurance in the system software. In the current work, the infrastructure of the cyber-physical systems (CPS) are reviewed and discussed. This article enriched the researches of the networked Medical Device (MD) systems to increase the efficiency and safety of the healthcare. It also can assist the specialists of medical device to overcome crucial issues related to medical devices, and the challenges facing the design of the medical device\u2019s network. The concept of the social networking and its security along with the concept of the wireless sensor networks (WSNs) are addressed. Afterward, the CPS systems and platforms have been established, where more focus was directed toward CPS-based healthcare. The big data framework of CPSs is also included.",
        //         "year": 2018,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science",
        //             "Medicine"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "71212644",
        //                 "name": "N. Dey"
        //             },
        //             {
        //                 "authorId": "1824766",
        //                 "name": "A. Ashour"
        //             },
        //             {
        //                 "authorId": "2322538",
        //                 "name": "Fuqian Shi"
        //             },
        //             {
        //                 "authorId": "143601468",
        //                 "name": "S. Fong"
        //             },
        //             {
        //                 "authorId": "144168728",
        //                 "name": "J. Tavares"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Video Content Protection System",
        //                 "topicId": "1450421",
        //                 "url": "https://www.semanticscholar.org/topic/1450421"
        //             },
        //             {
        //                 "topic": "Platoon (automobile)",
        //                 "topicId": "104814",
        //                 "url": "https://www.semanticscholar.org/topic/104814"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Complex system",
        //                 "topicId": "1314",
        //                 "url": "https://www.semanticscholar.org/topic/1314"
        //             },
        //             {
        //                 "topic": "Simulation",
        //                 "topicId": "194",
        //                 "url": "https://www.semanticscholar.org/topic/194"
        //             },
        //             {
        //                 "topic": "Cluster analysis",
        //                 "topicId": "1562",
        //                 "url": "https://www.semanticscholar.org/topic/1562"
        //             },
        //             {
        //                 "topic": "Hoc (programming language)",
        //                 "topicId": "3446",
        //                 "url": "https://www.semanticscholar.org/topic/3446"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "ae32d50fc3e3aaf80be8988233e1a708b0c23d70",
        //         "title": "Cyber-Extremism: Isis and the Power of Social Media",
        //         "abstract": "The current crises in Syria has led to a number of Britons travelling abroad to fight with groups such as Isis. Capitalising on this growth, Isis are now increasingly fighting an online cyber war, with the use of slick videos, online messages of hate and even an app that all aim to radicalise and create a new generation of cyber jihadists. These modern day tools are helping Isis spread their propaganda and ideology to thousands of online sympathisers across the world. Indeed, the group has actively been using social media sites such as Twitter, Facebook and YouTube to recruit new would be members. This is being done through images and the streaming of violent online viral videos filmed and professionally edited that are targeting young and impressionable people. Portraying a glamorised and \u2018cool\u2019 image, Isis fighters are beginning to act as the new rock stars of global cyber jihad. The Internet therefore is becoming the virtual playground for extremist views to be reinforced and act as an echo chamber. This study analysed 100 different Facebook pages and 50 Twitter user accounts which generated over 2050 results and helped the author create a typology of seven key behaviour characteristics and motivations. The findings in this study confirmed the author\u2019s original hypothesis, i.e. online hate is being used by groups such as Isis for a variety of reasons such as recruitment and propaganda. Moreover, this material is coordinated and controlled by Isis as a means for publishing and sending out key messages.",
        //         "year": 2017,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Political Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "49143793",
        //                 "name": "Imran Awan"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Threat (computer)",
        //                 "topicId": "313615",
        //                 "url": "https://www.semanticscholar.org/topic/313615"
        //             },
        //             {
        //                 "topic": "Vulnerability (computing)",
        //                 "topicId": "5814",
        //                 "url": "https://www.semanticscholar.org/topic/5814"
        //             },
        //             {
        //                 "topic": "Systematic review",
        //                 "topicId": "23688",
        //                 "url": "https://www.semanticscholar.org/topic/23688"
        //             },
        //             {
        //                 "topic": "Unified Framework",
        //                 "topicId": "105596",
        //                 "url": "https://www.semanticscholar.org/topic/105596"
        //             },
        //             {
        //                 "topic": "Interaction",
        //                 "topicId": "72",
        //                 "url": "https://www.semanticscholar.org/topic/72"
        //             },
        //             {
        //                 "topic": "Coupling (computer programming)",
        //                 "topicId": "20694",
        //                 "url": "https://www.semanticscholar.org/topic/20694"
        //             },
        //             {
        //                 "topic": "Whole Earth 'Lectronic Link",
        //                 "topicId": "107464",
        //                 "url": "https://www.semanticscholar.org/topic/107464"
        //             },
        //             {
        //                 "topic": "Time complexity",
        //                 "topicId": "3448",
        //                 "url": "https://www.semanticscholar.org/topic/3448"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "dd3cf501d5b8941cab6cb82d3186f5dad921a49e",
        //         "title": "Risk Mitigation for Dynamic State Estimation Against Cyber Attacks and Unknown Inputs",
        //         "abstract": "Phasor measurement units (PMUs) can be effectively utilized for the monitoring and control of the power grid. As the cyber-world becomes increasingly embedded into power grids, the risks of this inevitable evolution become serious. In this paper, we present a risk mitigation strategy, based on dynamic state estimation, to eliminate threat levels from the grid\u2019s unknown inputs and potential cyber-attacks. The strategy requires: 1) the potentially incomplete knowledge of power system models and parameters and 2) real-time PMU measurements. First, we utilize a dynamic state estimator for higher order depictions of power system dynamics for simultaneous state and unknown inputs estimation. Second, estimates of cyber-attacks are obtained through an attack detection algorithm. Third, the estimation and detection components are seamlessly utilized in an optimization framework to determine the most impacted PMU measurements. Finally, a risk mitigation strategy is proposed to guarantee the elimination of threats from attacks, ensuring the observability of the power system through available, safe measurements. Case studies are included to validate the proposed approach. Insightful suggestions, extensions, and open problems are also posed.",
        //         "year": 2015,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science",
        //             "Mathematics"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "35911165",
        //                 "name": "A. Taha"
        //             },
        //             {
        //                 "authorId": "2633601",
        //                 "name": "Junjian Qi"
        //             },
        //             {
        //                 "authorId": "2110364967",
        //                 "name": "Jianhui Wang"
        //             },
        //             {
        //                 "authorId": "1757039",
        //                 "name": "J. Panchal"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Graph theory",
        //                 "topicId": "13175",
        //                 "url": "https://www.semanticscholar.org/topic/13175"
        //             },
        //             {
        //                 "topic": "Centralized computing",
        //                 "topicId": "18260",
        //                 "url": "https://www.semanticscholar.org/topic/18260"
        //             },
        //             {
        //                 "topic": "Monitor (synchronization)",
        //                 "topicId": "525402",
        //                 "url": "https://www.semanticscholar.org/topic/525402"
        //             },
        //             {
        //                 "topic": "Linear time-invariant theory",
        //                 "topicId": "206347",
        //                 "url": "https://www.semanticscholar.org/topic/206347"
        //             },
        //             {
        //                 "topic": "Time-invariant system",
        //                 "topicId": "526338",
        //                 "url": "https://www.semanticscholar.org/topic/526338"
        //             },
        //             {
        //                 "topic": "Interconnection",
        //                 "topicId": "195",
        //                 "url": "https://www.semanticscholar.org/topic/195"
        //             },
        //             {
        //                 "topic": "IBM Power Systems",
        //                 "topicId": "64187",
        //                 "url": "https://www.semanticscholar.org/topic/64187"
        //             },
        //             {
        //                 "topic": "Time complexity",
        //                 "topicId": "3448",
        //                 "url": "https://www.semanticscholar.org/topic/3448"
        //             },
        //             {
        //                 "topic": "Numerical analysis",
        //                 "topicId": "5413",
        //                 "url": "https://www.semanticscholar.org/topic/5413"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "8621e74949a047b224e113c620fa2b6edef82fcb",
        //         "title": "Cyber Risk Management for Critical Infrastructure: A Risk Analysis Model and Three Case Studies.",
        //         "abstract": "Managing cyber security in an organization involves allocating the protection budget across a spectrum of possible options. This requires assessing the benefits and the costs of these options. The risk analyses presented here are statistical when relevant data are available, and system-based for high-consequence events that have not happened yet. This article presents, first, a general probabilistic risk analysis framework for cyber security in an organization to be specified. It then describes three examples of forward-looking analyses motivated by recent cyber attacks. The first one is the statistical analysis of an actual database, extended at the upper end of the loss distribution by a Bayesian analysis of possible, high-consequence attack scenarios that may happen in the future. The second is a systems analysis of cyber risks for a smart, connected electric grid, showing that there is an optimal level of connectivity. The third is an analysis of sequential decisions to upgrade the software of an existing cyber security system or to adopt a new one to stay ahead of adversaries trying to find their way in. The results are distributions of losses to cyber attacks, with and without some considered countermeasures in support of risk management decisions based both on past data and anticipated incidents.",
        //         "year": 2018,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Medicine"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1399226201",
        //                 "name": "M. Pat\u00e9-Cornell"
        //             },
        //             {
        //                 "authorId": "2376581",
        //                 "name": "Marshall A. Kuypers"
        //             },
        //             {
        //                 "authorId": "2110170702",
        //                 "name": "M. Smith"
        //             },
        //             {
        //                 "authorId": "2060602559",
        //                 "name": "Philip Keller"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "Linear system",
        //                 "topicId": "5428",
        //                 "url": "https://www.semanticscholar.org/topic/5428"
        //             },
        //             {
        //                 "topic": "Compressed sensing",
        //                 "topicId": "5416",
        //                 "url": "https://www.semanticscholar.org/topic/5416"
        //             },
        //             {
        //                 "topic": "Sensor",
        //                 "topicId": "1117",
        //                 "url": "https://www.semanticscholar.org/topic/1117"
        //             },
        //             {
        //                 "topic": "Block cipher mode of operation",
        //                 "topicId": "11230",
        //                 "url": "https://www.semanticscholar.org/topic/11230"
        //             },
        //             {
        //                 "topic": "Control system",
        //                 "topicId": "80",
        //                 "url": "https://www.semanticscholar.org/topic/80"
        //             },
        //             {
        //                 "topic": "Numerical analysis",
        //                 "topicId": "5413",
        //                 "url": "https://www.semanticscholar.org/topic/5413"
        //             },
        //             {
        //                 "topic": "Critical infrastructure protection",
        //                 "topicId": "15081",
        //                 "url": "https://www.semanticscholar.org/topic/15081"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "AS-Interface",
        //                 "topicId": "832136",
        //                 "url": "https://www.semanticscholar.org/topic/832136"
        //             },
        //             {
        //                 "topic": "Computer simulation",
        //                 "topicId": "7425",
        //                 "url": "https://www.semanticscholar.org/topic/7425"
        //             },
        //             {
        //                 "topic": "Maximal set",
        //                 "topicId": "326008",
        //                 "url": "https://www.semanticscholar.org/topic/326008"
        //             },
        //             {
        //                 "topic": "Iterative method",
        //                 "topicId": "304",
        //                 "url": "https://www.semanticscholar.org/topic/304"
        //             },
        //             {
        //                 "topic": "Iteration",
        //                 "topicId": "11823",
        //                 "url": "https://www.semanticscholar.org/topic/11823"
        //             },
        //             {
        //                 "topic": "Computation",
        //                 "topicId": "339",
        //                 "url": "https://www.semanticscholar.org/topic/339"
        //             },
        //             {
        //                 "topic": "Control flow",
        //                 "topicId": "4514",
        //                 "url": "https://www.semanticscholar.org/topic/4514"
        //             },
        //             {
        //                 "topic": "Negative feedback",
        //                 "topicId": "47720",
        //                 "url": "https://www.semanticscholar.org/topic/47720"
        //             },
        //             {
        //                 "topic": "Control theory",
        //                 "topicId": "3317",
        //                 "url": "https://www.semanticscholar.org/topic/3317"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "827181883db13bf06a608b85329a3918755a92c1",
        //         "title": "Daily Cyber Incivility and Distress: The Moderating Roles of Resources at Work and Home",
        //         "abstract": "Given that many employees use e-mail for work communication on a daily basis, this study examined within-person relationships between day-level incivility via work e-mail (cyber incivility) and employee outcomes. Using resource-based theories, we examined two resources (i.e., job control, psychological detachment from work) that may alleviate the effects of cyber incivility on distress. Daily survey data collected over 4 consecutive workdays from 96 employees were analyzed using hierarchical linear modeling. Results showed that on days when employees experienced cyber incivility, they reported higher affective and physical distress at the end of the workday that, in turn, was associated with higher distress the next morning. Job control attenuated the concurrent relationships between cyber incivility and both types of distress at work, while psychological detachment from work in the evening weakened the lagged relationships between end-of-workday distress and distress the following morning. These findings shed light on cyber incivility as a daily stressor and on the importance of resources in both the work and home domains that can help reduce the incivility-related stress process. Theoretical and practical implications, limitations, and future research directions are discussed.",
        //         "year": 2018,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Psychology"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "10677597",
        //                 "name": "YoungAh Park"
        //             },
        //             {
        //                 "authorId": "35257262",
        //                 "name": "C. Fritz"
        //             },
        //             {
        //                 "authorId": "4465933",
        //                 "name": "S. Jex"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Physical security",
        //                 "topicId": "119936",
        //                 "url": "https://www.semanticscholar.org/topic/119936"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "World Community Grid",
        //                 "topicId": "1131537",
        //                 "url": "https://www.semanticscholar.org/topic/1131537"
        //             },
        //             {
        //                 "topic": "Scalability",
        //                 "topicId": "1360",
        //                 "url": "https://www.semanticscholar.org/topic/1360"
        //             },
        //             {
        //                 "topic": "Information and Communication Theory",
        //                 "topicId": "158081",
        //                 "url": "https://www.semanticscholar.org/topic/158081"
        //             },
        //             {
        //                 "topic": "Solutions",
        //                 "topicId": "28500",
        //                 "url": "https://www.semanticscholar.org/topic/28500"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "f46a99e3019d1761ecf7f5b2469abc6bbe9eb3d5",
        //         "title": "A Real-Time Correlation of Host-Level Events in Cyber Range Service for Smart Campus",
        //         "abstract": "Smart campus is an exciting, new, and emerging research area that uses technology and infrastructure to support and improve its processes in campus services, teaching, learning, and research, especially, the explosive growth in knowledge makes the role of cybersecurity of smart campus become increasingly important. Cyber range is an adaptable virtualization platform consisting of computers, networks, and systems on which various real-world cyber threat scenarios and systems can be evaluated to provide a comprehensive, unbiased assessment of the security of information and automated control systems. As an important part of features, cyber range must provide the capability of data collection, aggregation, correlation, and replay for the scenario owner or any \u201cspecialized users\u201d to review attacks\u2013defense processes on known targets and future zero-day research. To this end, based on our previous work, the Heetian cyber range, we proposed a method named C2RS meaning \u201ca real-time correlation of host-level events in cyber range service.\u201d C2RS implements out-of-band data capturing for greater attack resistance with virtual machine introspection technique. This approach allows C2RS to isolate the data captured from monitored hosts. C2RS leverages these captured data by incorporating them into the volatility framework to aid in simplifying the analysis of operating system memory structures. Finally, we proposed an object-dependent method to analyze the evidence of illegal activity. We conduct extensive experiments to evaluate the functions and performance of C2RS in a dynamic service. Through the test, we confirm that the proposed method is effective for real-time correlation of host-level events in cyber range service.",
        //         "year": 2018,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "4351602",
        //                 "name": "Zhihong Tian"
        //             },
        //             {
        //                 "authorId": "2115440213",
        //                 "name": "Yu Cui"
        //             },
        //             {
        //                 "authorId": "1556898201",
        //                 "name": "Lun An"
        //             },
        //             {
        //                 "authorId": "3306622",
        //                 "name": "Shen Su"
        //             },
        //             {
        //                 "authorId": "49665006",
        //                 "name": "Xiaoxia Yin"
        //             },
        //             {
        //                 "authorId": "10719743",
        //                 "name": "Lihua Yin"
        //             },
        //             {
        //                 "authorId": "2114344486",
        //                 "name": "Xiang Cui"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Application security",
        //                 "topicId": "32096",
        //                 "url": "https://www.semanticscholar.org/topic/32096"
        //             },
        //             {
        //                 "topic": "Physical security",
        //                 "topicId": "119936",
        //                 "url": "https://www.semanticscholar.org/topic/119936"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Risk assessment",
        //                 "topicId": "4882",
        //                 "url": "https://www.semanticscholar.org/topic/4882"
        //             },
        //             {
        //                 "topic": "Control function (econometrics)",
        //                 "topicId": "452874",
        //                 "url": "https://www.semanticscholar.org/topic/452874"
        //             },
        //             {
        //                 "topic": "Defense in depth (computing)",
        //                 "topicId": "1499173",
        //                 "url": "https://www.semanticscholar.org/topic/1499173"
        //             },
        //             {
        //                 "topic": "Norm (social)",
        //                 "topicId": "76329",
        //                 "url": "https://www.semanticscholar.org/topic/76329"
        //             },
        //             {
        //                 "topic": "Computation",
        //                 "topicId": "339",
        //                 "url": "https://www.semanticscholar.org/topic/339"
        //             },
        //             {
        //                 "topic": "Adversary (cryptography)",
        //                 "topicId": "5369",
        //                 "url": "https://www.semanticscholar.org/topic/5369"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "38a1a9134b4aaec23ac2f15b026648465aae6a23",
        //         "title": "Jamming Attacks on Remote State Estimation in Cyber-Physical Systems: A Game-Theoretic Approach",
        //         "abstract": "We consider security issues in remote state estimation of Cyber-Physical Systems (CPS). A sensor node communicates with a remote estimator through a wireless channel which may be jammed by an external attacker. With energy constraints for both the sensor and the attacker, the interactive decision making process of when to send and when to attack is studied. We formulate a game-theoretic framework and prove that the optimal strategies for both sides constitute a Nash equilibrium of a zero-sum game. To tackle the computation complexity issues, we present a constraint-relaxed problem and provide corresponding solutions using Markov chain theory.",
        //         "year": 2015,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2868089",
        //                 "name": "Yuzhe Li"
        //             },
        //             {
        //                 "authorId": "144159433",
        //                 "name": "Ling Shi"
        //             },
        //             {
        //                 "authorId": "144632807",
        //                 "name": "P. Cheng"
        //             },
        //             {
        //                 "authorId": "51036744",
        //                 "name": "Jiming Chen"
        //             },
        //             {
        //                 "authorId": "1703331",
        //                 "name": "D. Quevedo"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Microgrid",
        //                 "topicId": "198985",
        //                 "url": "https://www.semanticscholar.org/topic/198985"
        //             },
        //             {
        //                 "topic": "Semidefinite programming",
        //                 "topicId": "36662",
        //                 "url": "https://www.semanticscholar.org/topic/36662"
        //             },
        //             {
        //                 "topic": "Kalman filter",
        //                 "topicId": "19882",
        //                 "url": "https://www.semanticscholar.org/topic/19882"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "Feedback",
        //                 "topicId": "242",
        //                 "url": "https://www.semanticscholar.org/topic/242"
        //             },
        //             {
        //                 "topic": "Convolutional code",
        //                 "topicId": "11837",
        //                 "url": "https://www.semanticscholar.org/topic/11837"
        //             },
        //             {
        //                 "topic": "Computer simulation",
        //                 "topicId": "7425",
        //                 "url": "https://www.semanticscholar.org/topic/7425"
        //             },
        //             {
        //                 "topic": "Control theory",
        //                 "topicId": "3317",
        //                 "url": "https://www.semanticscholar.org/topic/3317"
        //             },
        //             {
        //                 "topic": "Numerical analysis",
        //                 "topicId": "5413",
        //                 "url": "https://www.semanticscholar.org/topic/5413"
        //             },
        //             {
        //                 "topic": "Recursion",
        //                 "topicId": "2417",
        //                 "url": "https://www.semanticscholar.org/topic/2417"
        //             },
        //             {
        //                 "topic": "Network packet",
        //                 "topicId": "10258",
        //                 "url": "https://www.semanticscholar.org/topic/10258"
        //             },
        //             {
        //                 "topic": "Osteoporosis, Postmenopausal",
        //                 "topicId": "21109",
        //                 "url": "https://www.semanticscholar.org/topic/21109"
        //             },
        //             {
        //                 "topic": "voltage",
        //                 "topicId": "3127",
        //                 "url": "https://www.semanticscholar.org/topic/3127"
        //             },
        //             {
        //                 "topic": "HL7PublishingSubSection <operations>",
        //                 "topicId": "2059197",
        //                 "url": "https://www.semanticscholar.org/topic/2059197"
        //             },
        //             {
        //                 "topic": "Remodels the Structure of Chromatin",
        //                 "topicId": "267298",
        //                 "url": "https://www.semanticscholar.org/topic/267298"
        //             },
        //             {
        //                 "topic": "Controllers",
        //                 "topicId": "433",
        //                 "url": "https://www.semanticscholar.org/topic/433"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "0181e7e46197c7d4a18caf2dab1913b1b7cb4674",
        //         "title": "The Future Cybersecurity Workforce: Going Beyond Technical Skills for Successful Cyber Performance",
        //         "abstract": "One of the challenges in writing an article reviewing the current state of cyber education and workforce development is that there is a paucity of quantitative assessment regarding the cognitive aptitudes, work roles, or team organization required by cybersecurity professionals to be successful. In this review, we argue that the people who operate within the cyber domain need a combination of technical skills, domain specific knowledge, and social intelligence to be successful. They, like the networks they operate, must also be reliable, trustworthy, and resilient. Defining the knowledge, skills, attributes, and other characteristics is not as simple as defining a group of technical skills that people can be trained on; the complexity of the cyber domain makes this a unique challenge. There has been little research devoted to exactly what attributes individuals in the cyber domain need. What research does exist places an emphasis on technical and engineering skills while discounting the important social and organizational influences that dictate success or failure in everyday settings. This paper reviews the literature on cyber expertise and cyber workforce development to identify gaps and then argues for the important contribution of social fit in the highly complex and heterogenous cyber workforce. We then identify six assumptions for the future of cybersecurity workforce development, including the requirement for systemic thinkers, team players, a love for continued learning, strong communication ability, a sense of civic duty, and a blend of technical and social skill. Finally, we make recommendations for social and cognitive metrics which may be indicative of future performance in cyber work roles to provide a roadmap for future scholars.",
        //         "year": 2018,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Medicine",
        //             "Psychology"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2070443432",
        //                 "name": "Jessica Dawson"
        //             },
        //             {
        //                 "authorId": "145862947",
        //                 "name": "R. Thomson"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Phishing",
        //                 "topicId": "46129",
        //                 "url": "https://www.semanticscholar.org/topic/46129"
        //             },
        //             {
        //                 "topic": "Information security",
        //                 "topicId": "12548",
        //                 "url": "https://www.semanticscholar.org/topic/12548"
        //             },
        //             {
        //                 "topic": "Security controls",
        //                 "topicId": "7117",
        //                 "url": "https://www.semanticscholar.org/topic/7117"
        //             },
        //             {
        //                 "topic": "Data breach",
        //                 "topicId": "155991",
        //                 "url": "https://www.semanticscholar.org/topic/155991"
        //             },
        //             {
        //                 "topic": "Critical infrastructure protection",
        //                 "topicId": "15081",
        //                 "url": "https://www.semanticscholar.org/topic/15081"
        //             },
        //             {
        //                 "topic": "Best practice",
        //                 "topicId": "8774",
        //                 "url": "https://www.semanticscholar.org/topic/8774"
        //             },
        //             {
        //                 "topic": "Existential quantification",
        //                 "topicId": "44279",
        //                 "url": "https://www.semanticscholar.org/topic/44279"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "7c691bdaa31d9000be52869ea11d2d6316d1e7b3",
        //         "title": "Game Theory for Cyber Security and Privacy",
        //         "abstract": "In this survey, we review the existing game-theoretic approaches for cyber security and privacy issues, categorizing their application into two classes, security and privacy. To show how game theory is utilized in cyberspace security and privacy, we select research regarding three main applications: cyber-physical security, communication security, and privacy. We present game models, features, and solutions of the selected works and describe their advantages and limitations from design to implementation of the defense mechanisms. We also identify some emerging trends and topics for future research. This survey not only demonstrates how to employ game-theoretic approaches to security and privacy but also encourages researchers to employ game theory to establish a comprehensive understanding of emerging security and privacy problems in cyberspace and potential solutions.",
        //         "year": 2017,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2286882",
        //                 "name": "Cuong T. Do"
        //             },
        //             {
        //                 "authorId": "144534427",
        //                 "name": "Nguyen H. Tran"
        //             },
        //             {
        //                 "authorId": "143849708",
        //                 "name": "C. Hong"
        //             },
        //             {
        //                 "authorId": "145231705",
        //                 "name": "C. Kamhoua"
        //             },
        //             {
        //                 "authorId": "1723424",
        //                 "name": "K. Kwiat"
        //             },
        //             {
        //                 "authorId": "1752475",
        //                 "name": "Erik Blasch"
        //             },
        //             {
        //                 "authorId": "1691652",
        //                 "name": "Shaolei Ren"
        //             },
        //             {
        //                 "authorId": "1709987",
        //                 "name": "N. Pissinou"
        //             },
        //             {
        //                 "authorId": "144356993",
        //                 "name": "S. S. Iyengar"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Microservices",
        //                 "topicId": "703911",
        //                 "url": "https://www.semanticscholar.org/topic/703911"
        //             },
        //             {
        //                 "topic": "Industry 4.0",
        //                 "topicId": "263883",
        //                 "url": "https://www.semanticscholar.org/topic/263883"
        //             },
        //             {
        //                 "topic": "Model-driven engineering",
        //                 "topicId": "53656",
        //                 "url": "https://www.semanticscholar.org/topic/53656"
        //             },
        //             {
        //                 "topic": "Cloud computing",
        //                 "topicId": "2756",
        //                 "url": "https://www.semanticscholar.org/topic/2756"
        //             },
        //             {
        //                 "topic": "System integration",
        //                 "topicId": "53860",
        //                 "url": "https://www.semanticscholar.org/topic/53860"
        //             },
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Orchestration (computing)",
        //                 "topicId": "23929",
        //                 "url": "https://www.semanticscholar.org/topic/23929"
        //             },
        //             {
        //                 "topic": "Service-oriented architecture",
        //                 "topicId": "6582",
        //                 "url": "https://www.semanticscholar.org/topic/6582"
        //             },
        //             {
        //                 "topic": "Industrial engineering",
        //                 "topicId": "313127",
        //                 "url": "https://www.semanticscholar.org/topic/313127"
        //             },
        //             {
        //                 "topic": "Service layer",
        //                 "topicId": "94963",
        //                 "url": "https://www.semanticscholar.org/topic/94963"
        //             },
        //             {
        //                 "topic": "Software development",
        //                 "topicId": "78",
        //                 "url": "https://www.semanticscholar.org/topic/78"
        //             },
        //             {
        //                 "topic": "Requirement",
        //                 "topicId": "136",
        //                 "url": "https://www.semanticscholar.org/topic/136"
        //             },
        //             {
        //                 "topic": "Model-driven architecture",
        //                 "topicId": "30687",
        //                 "url": "https://www.semanticscholar.org/topic/30687"
        //             },
        //             {
        //                 "topic": "Embedded system",
        //                 "topicId": "4423",
        //                 "url": "https://www.semanticscholar.org/topic/4423"
        //             },
        //             {
        //                 "topic": "Semiconductor industry",
        //                 "topicId": "76540",
        //                 "url": "https://www.semanticscholar.org/topic/76540"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "a66199262757683fffa9398e5e34b12f7dbce16c",
        //         "title": "Cyber attack protection and control of microgrids",
        //         "abstract": "Recently, the smart grid has been considered as a next-generation power system to modernize the traditional grid to improve its security, connectivity, efficiency and sustainability. Unfortunately, the smart grid is susceptible to malicious cyber attacks, which can create serious technical, economical, social and control problems in power network operations. In contrast to the traditional cyber attack minimization techniques, this paper proposes a recursive systematic convolutional U+0028 RSC U+0029 code and Kalman filter U+0028 KF U+0029 based method in the context of smart grids. Specifically, the proposed RSC code is used to add redundancy in the microgrid states, and the log maximum a-posterior is used to recover the state information, which is affected by random noises and cyber attacks. Once the estimated states are obtained by KF algorithm, a semidefinite programming based optimal feedback controller is proposed to regulate the system states, so that the power system can operate properly. Test results show that the proposed approach can accurately mitigate the cyber attacks and properly estimate and control the system states.",
        //         "year": 2018,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "30805710",
        //                 "name": "M. Rana"
        //             },
        //             {
        //                 "authorId": "144080907",
        //                 "name": "Li Li"
        //             },
        //             {
        //                 "authorId": "1730431",
        //                 "name": "S. Su"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Intimate Partner Violence",
        //                 "topicId": "56758",
        //                 "url": "https://www.semanticscholar.org/topic/56758"
        //             },
        //             {
        //                 "topic": "Jealousy",
        //                 "topicId": "215103",
        //                 "url": "https://www.semanticscholar.org/topic/215103"
        //             },
        //             {
        //                 "topic": "Mental association",
        //                 "topicId": "250316",
        //                 "url": "https://www.semanticscholar.org/topic/250316"
        //             },
        //             {
        //                 "topic": "Sickle Cell Trait",
        //                 "topicId": "125808",
        //                 "url": "https://www.semanticscholar.org/topic/125808"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "a1a6a9c7f61336a3aff1afe07e2b35b663db0e81",
        //         "title": "Examining the costs and causes of cyber incidents",
        //         "abstract": "In 2013, the US President signed an executive order designed to help secure the nation\u2019s critical infrastructure from cyberattacks. As part of that order, he directed the National Institute for Standards and Technology (NIST) to develop a framework that would become an authoritative source for information security best practices. Because adoption of the framework is voluntary, it faces the challenge of incentivizing firms to follow along. Will frameworks such as that proposed by NIST really induce firms to adopt better security controls? And if not, why? This research seeks to examine the composition and costs of cyber events, and attempts to address whether or not there exist incentives for firms to improve their security practices and reduce the risk of attack. Specifically, we examine a sample of over 12\u00a0000 cyber events that include data breaches, security incidents, privacy violations, and phishing crimes. First, we analyze the characteristics of these breaches (such as causes and types of information compromised). We then examine the breach and litigation rate, by industry, and identify the industries that incur the greatest costs from cyber events. We then compare these costs to bad debts and fraud within other industries. The findings suggest that public concerns regarding the increasing rates of breaches and legal actions may be excessive compared to the relatively modest financial impact to firms that suffer these events. Public concerns regarding the increasing rates of breaches and legal actions, conflict, however, with our findings that show a much smaller financial impact to firms that suffer these events. Specifically, we find that the cost of a typical cyber incident in our sample is less than $200\u00a0000 (about the same as the firm\u2019s annual IT security budget), and that this represents only 0.4% of their estimated annual revenues.",
        //         "year": 2016,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Business",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2952105",
        //                 "name": "Sasha Romanosky"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Smartphone",
        //                 "topicId": "6023",
        //                 "url": "https://www.semanticscholar.org/topic/6023"
        //             },
        //             {
        //                 "topic": "Sensor",
        //                 "topicId": "1117",
        //                 "url": "https://www.semanticscholar.org/topic/1117"
        //             },
        //             {
        //                 "topic": "Tablet computer",
        //                 "topicId": "6019",
        //                 "url": "https://www.semanticscholar.org/topic/6019"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Fifth generation computer",
        //                 "topicId": "469378",
        //                 "url": "https://www.semanticscholar.org/topic/469378"
        //             },
        //             {
        //                 "topic": "Interaction",
        //                 "topicId": "72",
        //                 "url": "https://www.semanticscholar.org/topic/72"
        //             },
        //             {
        //                 "topic": "Our World",
        //                 "topicId": "979981",
        //                 "url": "https://www.semanticscholar.org/topic/979981"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "fba92ce701ed984a6b15d2057ad0b21843825dbd",
        //         "title": "The Cyber Aggression in Relationships Scale: A New Multidimensional Measure of Technology-Based Intimate Partner Aggression",
        //         "abstract": "The purpose of this study was to develop and provide initial validation for a measure of adult cyber intimate partner aggression (IPA): the Cyber Aggression in Relationships Scale (CARS). Drawing on recent conceptual models of cyber IPA, items from previous research exploring general cyber aggression and cyber IPA were modified and new items were generated for inclusion in the CARS. Two samples of adults 18 years or older were recruited online. We used item factor analysis to test the factor structure, model fit, and invariance of the measure structure across women and men. Results confirmed that three-factor models for both perpetration and victimization demonstrated good model fit, and that, in general, the CARS measures partner cyber aggression similarly for women and men. The CARS also demonstrated validity through significant associations with in-person IPA, trait anger, and jealousy. Findings suggest the CARS is a useful tool for assessing cyber IPA in both research and clinical settings.",
        //         "year": 2016,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Psychology",
        //             "Medicine"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "40447439",
        //                 "name": "Laura E. Watkins"
        //             },
        //             {
        //                 "authorId": "144887900",
        //                 "name": "Rosalita C. Maldonado"
        //             },
        //             {
        //                 "authorId": "3923853",
        //                 "name": "D. DiLillo"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Interaction",
        //                 "topicId": "72",
        //                 "url": "https://www.semanticscholar.org/topic/72"
        //             },
        //             {
        //                 "topic": "Monte Carlo method",
        //                 "topicId": "5417",
        //                 "url": "https://www.semanticscholar.org/topic/5417"
        //             },
        //             {
        //                 "topic": "Network topology",
        //                 "topicId": "5812",
        //                 "url": "https://www.semanticscholar.org/topic/5812"
        //             },
        //             {
        //                 "topic": "Failure rate",
        //                 "topicId": "91947",
        //                 "url": "https://www.semanticscholar.org/topic/91947"
        //             },
        //             {
        //                 "topic": "Network traffic control",
        //                 "topicId": "216935",
        //                 "url": "https://www.semanticscholar.org/topic/216935"
        //             },
        //             {
        //                 "topic": "Routing",
        //                 "topicId": "1048",
        //                 "url": "https://www.semanticscholar.org/topic/1048"
        //             },
        //             {
        //                 "topic": "Reliability engineering",
        //                 "topicId": "15046",
        //                 "url": "https://www.semanticscholar.org/topic/15046"
        //             },
        //             {
        //                 "topic": "Anatomy, Regional",
        //                 "topicId": "57450",
        //                 "url": "https://www.semanticscholar.org/topic/57450"
        //             },
        //             {
        //                 "topic": "Heart failure",
        //                 "topicId": "48",
        //                 "url": "https://www.semanticscholar.org/topic/48"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "a95a3d54a039b14ef074804d38f53e039e65edd7",
        //         "title": "Cyber\u2013Physical Systems: A Perspective at the Centennial",
        //         "abstract": "Cyber-physical systems (CPSs) are the next generation of engineered systems in which computing, communication, and control technologies are tightly integrated. Research on CPSs is fundamentally important for engineered systems in many important application domains such as transportation, energy, and medical systems. We overview CPS research from both a historical point of view in terms of technologies developed for early generations of control systems, as well as recent results on CPSs in many relevant research domains such as networked control, hybrid systems, real-time computing, real-time networking, wireless sensor networks, security, and model-driven development. We outline the potential for CPSs in many societally important application domains.",
        //         "year": 2012,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science",
        //             "Engineering"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2117861409",
        //                 "name": "Kyoung-Dae Kim"
        //             },
        //             {
        //                 "authorId": "2108176947",
        //                 "name": "P. Kumar"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "International Law",
        //                 "topicId": "654637",
        //                 "url": "https://www.semanticscholar.org/topic/654637"
        //             },
        //             {
        //                 "topic": "NANDA-International Terminology",
        //                 "topicId": "4850062",
        //                 "url": "https://www.semanticscholar.org/topic/4850062"
        //             },
        //             {
        //                 "topic": "HL7PublishingSubSection <operations>",
        //                 "topicId": "2059197",
        //                 "url": "https://www.semanticscholar.org/topic/2059197"
        //             },
        //             {
        //                 "topic": "attribution",
        //                 "topicId": "4046",
        //                 "url": "https://www.semanticscholar.org/topic/4046"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "248516d294bf7ee4d83816318ab42a473f2408b6",
        //         "title": "Security and Privacy in Cyber-Physical Systems: A Survey of Surveys",
        //         "abstract": "The following is a survey on surveys and may help the interested reader to find a way through the jungle of literature on the security and CPS topics out there already. In order to ease the search, the authors have provided a classification in CPS Domains, Attacks, Defenses, Research-trends, Network-security, Security level implementation, and Computational Strategies which makes this survey a unique and I believe very helpful article. \u2014J\u00f6rg Henkel, Karlsruhe Institute of Technology",
        //         "year": 2017,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "144809172",
        //                 "name": "J. Giraldo"
        //             },
        //             {
        //                 "authorId": "7803506",
        //                 "name": "Esha Sarkar"
        //             },
        //             {
        //                 "authorId": "1725441",
        //                 "name": "A. C\u00e1rdenas"
        //             },
        //             {
        //                 "authorId": "1686192",
        //                 "name": "M. Maniatakos"
        //             },
        //             {
        //                 "authorId": "1741044",
        //                 "name": "Murat Kantarcioglu"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Interrupt",
        //                 "topicId": "15526",
        //                 "url": "https://www.semanticscholar.org/topic/15526"
        //             },
        //             {
        //                 "topic": "Fault detection and isolation",
        //                 "topicId": "8084",
        //                 "url": "https://www.semanticscholar.org/topic/8084"
        //             },
        //             {
        //                 "topic": "Systems design",
        //                 "topicId": "50922",
        //                 "url": "https://www.semanticscholar.org/topic/50922"
        //             },
        //             {
        //                 "topic": "End-to-end encryption",
        //                 "topicId": "854929",
        //                 "url": "https://www.semanticscholar.org/topic/854929"
        //             },
        //             {
        //                 "topic": "Sensor",
        //                 "topicId": "1117",
        //                 "url": "https://www.semanticscholar.org/topic/1117"
        //             },
        //             {
        //                 "topic": "Network switch",
        //                 "topicId": "7961",
        //                 "url": "https://www.semanticscholar.org/topic/7961"
        //             },
        //             {
        //                 "topic": "Circuit restoration",
        //                 "topicId": "346947",
        //                 "url": "https://www.semanticscholar.org/topic/346947"
        //             },
        //             {
        //                 "topic": "Optimization problem",
        //                 "topicId": "12682",
        //                 "url": "https://www.semanticscholar.org/topic/12682"
        //             },
        //             {
        //                 "topic": "Elegant degradation",
        //                 "topicId": "5091",
        //                 "url": "https://www.semanticscholar.org/topic/5091"
        //             },
        //             {
        //                 "topic": "Downtime",
        //                 "topicId": "235096",
        //                 "url": "https://www.semanticscholar.org/topic/235096"
        //             },
        //             {
        //                 "topic": "Byzantine fault tolerance",
        //                 "topicId": "47079",
        //                 "url": "https://www.semanticscholar.org/topic/47079"
        //             },
        //             {
        //                 "topic": "Loss function",
        //                 "topicId": "3650",
        //                 "url": "https://www.semanticscholar.org/topic/3650"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "f302e2618dc5ca9c6c02a61bd7c12bd724c4fd81",
        //         "title": "Enabling cyber-physical communication in 5G cellular networks: challenges, spatial spectrum sensing, and cyber-security",
        //         "abstract": "Cyber-physical systems (CPS) help create new services and applications by revolutionising our world in different fields through their tight interactions and automated decisions. This is especially true with the ongoing increase in the number of physical things (sensors, actuators, smartphones, tablets, and so on) along with the explosive increase in the usage of online networking services and applications. Future fifth generation (5G) cellular networks will facilitate the enabling of CPS communications over current network infrastructure through different technologies such as device-to-device (D2D) communications. In this study, the authors discuss about the main challenges that cellular providers will face as the massive number of CPS devices attempt to access the cellular spectrum. A case study is presented on how to ease the spectrum access of these devices through D2D spatial spectrum sensing. Furthermore, the authors discuss about protecting these D2D links from eavesdropping, since security is becoming a critical aspect in the cyber-physical space, especially with the large amount of traffic that is constantly flowing through the network.",
        //         "year": 2017,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "3079694",
        //                 "name": "R. Atat"
        //             },
        //             {
        //                 "authorId": "1703226",
        //                 "name": "Lingjia Liu"
        //             },
        //             {
        //                 "authorId": "2149050543",
        //                 "name": "Hao Chen"
        //             },
        //             {
        //                 "authorId": "1455051413",
        //                 "name": "Jinsong Wu"
        //             },
        //             {
        //                 "authorId": "2469932",
        //                 "name": "Hongxiang Li"
        //             },
        //             {
        //                 "authorId": "143625475",
        //                 "name": "Y. Yi"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Replay attack",
        //                 "topicId": "308862",
        //                 "url": "https://www.semanticscholar.org/topic/308862"
        //             },
        //             {
        //                 "topic": "Control system",
        //                 "topicId": "80",
        //                 "url": "https://www.semanticscholar.org/topic/80"
        //             },
        //             {
        //                 "topic": "Telecommunications network",
        //                 "topicId": "32720",
        //                 "url": "https://www.semanticscholar.org/topic/32720"
        //             },
        //             {
        //                 "topic": "Simulation",
        //                 "topicId": "194",
        //                 "url": "https://www.semanticscholar.org/topic/194"
        //             },
        //             {
        //                 "topic": "Code injection",
        //                 "topicId": "41981",
        //                 "url": "https://www.semanticscholar.org/topic/41981"
        //             },
        //             {
        //                 "topic": "AS-Interface",
        //                 "topicId": "832136",
        //                 "url": "https://www.semanticscholar.org/topic/832136"
        //             },
        //             {
        //                 "topic": "Transmitter",
        //                 "topicId": "2785",
        //                 "url": "https://www.semanticscholar.org/topic/2785"
        //             },
        //             {
        //                 "topic": "Collision detection",
        //                 "topicId": "38329",
        //                 "url": "https://www.semanticscholar.org/topic/38329"
        //             },
        //             {
        //                 "topic": "Transient Ischemic Attack",
        //                 "topicId": "3406",
        //                 "url": "https://www.semanticscholar.org/topic/3406"
        //             },
        //             {
        //                 "topic": "Intersection of set of elements",
        //                 "topicId": "86128",
        //                 "url": "https://www.semanticscholar.org/topic/86128"
        //             },
        //             {
        //                 "topic": "Algorithm",
        //                 "topicId": "305",
        //                 "url": "https://www.semanticscholar.org/topic/305"
        //             },
        //             {
        //                 "topic": "UBB.threads",
        //                 "topicId": "4730962",
        //                 "url": "https://www.semanticscholar.org/topic/4730962"
        //             },
        //             {
        //                 "topic": "sensor (device)",
        //                 "topicId": "149745",
        //                 "url": "https://www.semanticscholar.org/topic/149745"
        //             },
        //             {
        //                 "topic": "disease transmission",
        //                 "topicId": "30635",
        //                 "url": "https://www.semanticscholar.org/topic/30635"
        //             },
        //             {
        //                 "topic": "Recursion (computer science)",
        //                 "topicId": "2419",
        //                 "url": "https://www.semanticscholar.org/topic/2419"
        //             },
        //             {
        //                 "topic": "SQL injection",
        //                 "topicId": "41988",
        //                 "url": "https://www.semanticscholar.org/topic/41988"
        //             },
        //             {
        //                 "topic": "Controllers",
        //                 "topicId": "433",
        //                 "url": "https://www.semanticscholar.org/topic/433"
        //             },
        //             {
        //                 "topic": "UBB protein, human",
        //                 "topicId": "1045762",
        //                 "url": "https://www.semanticscholar.org/topic/1045762"
        //             },
        //             {
        //                 "topic": "Maxillary right third molar abutment",
        //                 "topicId": "30701",
        //                 "url": "https://www.semanticscholar.org/topic/30701"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "9b12a5a3f44f57c3f605618753434646aa739182",
        //         "title": "Attributing Cyber Attacks",
        //         "abstract": "Abstract Who did it? Attribution is fundamental. Human lives and the security of the state may depend on ascribing agency to an agent. In the context of computer network intrusions, attribution is commonly seen as one of the most intractable technical problems, as either solvable or not solvable, and as dependent mainly on the available forensic evidence. But is it? Is this a productive understanding of attribution? \u2014 This article argues that attribution is what states make of it. To show how, we introduce the Q Model: designed to explain, guide, and improve the making of attribution. Matching an offender to an offence is an exercise in minimising uncertainty on three levels: tactically, attribution is an art as well as a science; operationally, attribution is a nuanced process not a black-and-white problem; and strategically, attribution is a function of what is at stake politically. Successful attribution requires a range of skills on all levels, careful management, time, leadership, stress-testing, prudent communication, and recognising limitations and challenges.",
        //         "year": 2015,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Political Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "72217290",
        //                 "name": "Thomas Rid"
        //             },
        //             {
        //                 "authorId": "46517469",
        //                 "name": "B. Buchanan"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Taxonomy (general)",
        //                 "topicId": "8319",
        //                 "url": "https://www.semanticscholar.org/topic/8319"
        //             },
        //             {
        //                 "topic": "Industry 4.0",
        //                 "topicId": "263883",
        //                 "url": "https://www.semanticscholar.org/topic/263883"
        //             },
        //             {
        //                 "topic": "Cybercrime",
        //                 "topicId": "24679",
        //                 "url": "https://www.semanticscholar.org/topic/24679"
        //             },
        //             {
        //                 "topic": "Physical security",
        //                 "topicId": "119936",
        //                 "url": "https://www.semanticscholar.org/topic/119936"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Theoretical definition",
        //                 "topicId": "339376",
        //                 "url": "https://www.semanticscholar.org/topic/339376"
        //             },
        //             {
        //                 "topic": "Classification",
        //                 "topicId": "7012",
        //                 "url": "https://www.semanticscholar.org/topic/7012"
        //             },
        //             {
        //                 "topic": "Computers",
        //                 "topicId": "4161",
        //                 "url": "https://www.semanticscholar.org/topic/4161"
        //             },
        //             {
        //                 "topic": "Government",
        //                 "topicId": "2115",
        //                 "url": "https://www.semanticscholar.org/topic/2115"
        //             },
        //             {
        //                 "topic": "Threat (computer)",
        //                 "topicId": "313615",
        //                 "url": "https://www.semanticscholar.org/topic/313615"
        //             },
        //             {
        //                 "topic": "Academia (organization)",
        //                 "topicId": "125850",
        //                 "url": "https://www.semanticscholar.org/topic/125850"
        //             },
        //             {
        //                 "topic": "Categories",
        //                 "topicId": "1167",
        //                 "url": "https://www.semanticscholar.org/topic/1167"
        //             },
        //             {
        //                 "topic": "Solutions",
        //                 "topicId": "28500",
        //                 "url": "https://www.semanticscholar.org/topic/28500"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "d01a87e7119c49b8a583bf0309ab6873ce902679",
        //         "title": "Modeling Cyber\u2013Physical Systems",
        //         "abstract": "This paper focuses on the challenges of modeling cyber-physical systems (CPSs) that arise from the intrinsic heterogeneity, concurrency, and sensitivity to timing of such systems. It uses a portion of an aircraft vehicle management system (VMS), specifically the fuel management subsystem, to illustrate the challenges, and then discusses technologies that at least partially address the challenges. Specific technologies described include hybrid system modeling and simulation, concurrent and heterogeneous models of computation, the use of domain-specific ontologies to enhance modularity, and the joint modeling of functionality and implementation architectures.",
        //         "year": 2012,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "1712644",
        //                 "name": "P. Derler"
        //             },
        //             {
        //                 "authorId": "1690704",
        //                 "name": "Edward A. Lee"
        //             },
        //             {
        //                 "authorId": "1740109",
        //                 "name": "A. Sangiovanni-Vincentelli"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Artificial intelligence",
        //                 "topicId": "8286",
        //                 "url": "https://www.semanticscholar.org/topic/8286"
        //             },
        //             {
        //                 "topic": "Machine learning",
        //                 "topicId": "168",
        //                 "url": "https://www.semanticscholar.org/topic/168"
        //             },
        //             {
        //                 "topic": "Data mining",
        //                 "topicId": "7837",
        //                 "url": "https://www.semanticscholar.org/topic/7837"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Real-time transcription",
        //                 "topicId": "763488",
        //                 "url": "https://www.semanticscholar.org/topic/763488"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "d8c8b8b051a25c1ff30a76d3c5a4bd9773a7acec",
        //         "title": "Cyber-physical microservices: An IoT-based framework for manufacturing systems",
        //         "abstract": "Recent advances in ICT enable the evolution of the manufacturing industry to meet the new requirements of the society. Cyber-physical systems, Internet-of-Things (IoT), and Cloud computing, play a key role in the fourth industrial revolution known as Industry 4.0. The microservice architecture has evolved as an alternative to SOA and promises to address many of the challenges in software development. In this paper, we adopt the concept of microservice and describe a framework for manufacturing systems that has the cyber-physical microservice as the key construct. The manufacturing plant processes are defined as compositions of primitive cyber-physical microservices adopting either the orchestration or the choreography pattern. IoT technologies are used for system integration and model-driven engineering is utilized to semi-automate the development process for the industrial engineer, who is not familiar with microservices and IoT. Two case studies demonstrate the feasibility of the proposed approach.",
        //         "year": 2018,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2584739",
        //                 "name": "K. Thramboulidis"
        //             },
        //             {
        //                 "authorId": "35278460",
        //                 "name": "Danai C. Vachtsevanou"
        //             },
        //             {
        //                 "authorId": "35576153",
        //                 "name": "Alexandros Solanos"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Countermeasure (computer)",
        //                 "topicId": "74070",
        //                 "url": "https://www.semanticscholar.org/topic/74070"
        //             },
        //             {
        //                 "topic": "Vector (malware)",
        //                 "topicId": "9446",
        //                 "url": "https://www.semanticscholar.org/topic/9446"
        //             },
        //             {
        //                 "topic": "IBM Power Systems",
        //                 "topicId": "64187",
        //                 "url": "https://www.semanticscholar.org/topic/64187"
        //             },
        //             {
        //                 "topic": "Adversary (cryptography)",
        //                 "topicId": "5369",
        //                 "url": "https://www.semanticscholar.org/topic/5369"
        //             },
        //             {
        //                 "topic": "Power Management Unit",
        //                 "topicId": "579118",
        //                 "url": "https://www.semanticscholar.org/topic/579118"
        //             },
        //             {
        //                 "topic": "Cascading failure",
        //                 "topicId": "759303",
        //                 "url": "https://www.semanticscholar.org/topic/759303"
        //             },
        //             {
        //                 "topic": "Code injection",
        //                 "topicId": "41981",
        //                 "url": "https://www.semanticscholar.org/topic/41981"
        //             },
        //             {
        //                 "topic": "Cyberspace",
        //                 "topicId": "6516",
        //                 "url": "https://www.semanticscholar.org/topic/6516"
        //             },
        //             {
        //                 "topic": "Characteristic impedance",
        //                 "topicId": "227701",
        //                 "url": "https://www.semanticscholar.org/topic/227701"
        //             },
        //             {
        //                 "topic": "Phasor",
        //                 "topicId": "178965",
        //                 "url": "https://www.semanticscholar.org/topic/178965"
        //             },
        //             {
        //                 "topic": "Fault detection and isolation",
        //                 "topicId": "8084",
        //                 "url": "https://www.semanticscholar.org/topic/8084"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "5d0fbc92b96bccdb44a9deb8929ca37a00285b3c",
        //         "title": "Reliability Modeling and Evaluation of Active Cyber Physical Distribution System",
        //         "abstract": "To enable an in-depth study of active cyber-physical distribution network, a cyber subsystem model is urgently needed to describe the performance in distribution communication. The methods for quantifying the interactions between subsystems, especially indirect interactions, have not been adequately studied in the existing research. In this paper, a novel model is developed to evaluate the validity of cyber link considering dynamic routing, delay, and communication error, particularly the cyber traffic. Then, an analytical method is presented to quantify the impact of cyber faults considering the functionality validity during distribution automation. And the reliability of cyber and physical subsystems is evaluated based on nonsequential and sequential Monte Carlo methods, respectively. Finally, a test system for reliability evaluation is established to analyze the influences of cyber faults. In addition, sensitivity analyses on the impact of cyber network traffic, element failure rate, and network topology and access communication technology are carried out. The obtained results could provide useful insights into planning and operation of active cyber-physical distribution networks.",
        //         "year": 2018,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "22607232",
        //                 "name": "Wenxia Liu"
        //             },
        //             {
        //                 "authorId": "2055361389",
        //                 "name": "Qi Gong"
        //             },
        //             {
        //                 "authorId": "144910492",
        //                 "name": "Hui Han"
        //             },
        //             {
        //                 "authorId": "2108332261",
        //                 "name": "Zhiqiang Wang"
        //             },
        //             {
        //                 "authorId": "2151976033",
        //                 "name": "Lingfeng Wang"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Threat (computer)",
        //                 "topicId": "313615",
        //                 "url": "https://www.semanticscholar.org/topic/313615"
        //             },
        //             {
        //                 "topic": "Social media",
        //                 "topicId": "6015",
        //                 "url": "https://www.semanticscholar.org/topic/6015"
        //             },
        //             {
        //                 "topic": "Timeline",
        //                 "topicId": "112243",
        //                 "url": "https://www.semanticscholar.org/topic/112243"
        //             },
        //             {
        //                 "topic": "Dark web",
        //                 "topicId": "406147",
        //                 "url": "https://www.semanticscholar.org/topic/406147"
        //             },
        //             {
        //                 "topic": "Blog",
        //                 "topicId": "6025",
        //                 "url": "https://www.semanticscholar.org/topic/6025"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "c2eb99abf306a394f3c7b8e0b1ab3fb4a6fa9b70",
        //         "title": "Guide to Cyber Threat Information Sharing",
        //         "abstract": "Cyber threat information is any information that can help an organization identify, assess, monitor, and respond to cyber threats. Cyber threat information includes indicators of compromise; tactics, techniques, and procedures used by threat actors; suggested actions to detect, contain, or prevent attacks; and the findings from the analyses of incidents. Organizations that share cyber threat information can improve their own security postures as well as those of other organizations. This publication provides guidelines for establishing and participating in cyber threat information sharing relationships. This guidance helps organizations establish information sharing goals, identify cyber threat information sources, scope information sharing activities, develop rules that control the publication and distribution of threat information, engage with existing sharing communities, and make effective use of threat information in support of the organization\u2019s overall cybersecurity practices.",
        //         "year": 2016,
        //         "isOpenAccess": true,
        //         "fieldsOfStudy": [
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "50759947",
        //                 "name": "Christopher Johnson"
        //             },
        //             {
        //                 "authorId": "70035063",
        //                 "name": "M. Badger"
        //             },
        //             {
        //                 "authorId": "2916452",
        //                 "name": "David Waltermire"
        //             },
        //             {
        //                 "authorId": "2052437594",
        //                 "name": "Julie Snyder"
        //             },
        //             {
        //                 "authorId": "98182657",
        //                 "name": "C. Skorupka"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Cyber-physical system",
        //                 "topicId": "48065",
        //                 "url": "https://www.semanticscholar.org/topic/48065"
        //             },
        //             {
        //                 "topic": "Digital Revolution",
        //                 "topicId": "640278",
        //                 "url": "https://www.semanticscholar.org/topic/640278"
        //             },
        //             {
        //                 "topic": "MIT Engineering Systems Division",
        //                 "topicId": "560757",
        //                 "url": "https://www.semanticscholar.org/topic/560757"
        //             },
        //             {
        //                 "topic": "Grand Challenges",
        //                 "topicId": "205680",
        //                 "url": "https://www.semanticscholar.org/topic/205680"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "df6f2558be842f398e766564df1829eaf5ff6065",
        //         "title": "Bilevel Model for Analyzing Coordinated Cyber-Physical Attacks on Power Systems",
        //         "abstract": "This paper analyzes a coordinated cyber-physical attack on power systems, which could lead to undetectable line outages. Coordinated with physical attacks that cause line outages, the two-step cyberattacks comprising topology preserving and load redistribution attacks could mask and potentially exasperate outages to trigger cascading failures. These coordinated cyber-physical attacks are analyzed in a proposed bilevel model, which aims at identifying the most damaging and undetectable physical attacks constrained by attackers' total budget. After being transformed into a mixed-integer linear programming problem, the proposed bilevel model is solved by a rigorous two-stage solution approach. This paper also discusses the relevant countermeasure strategies. The proposed model, the solution algorithm, and the effectiveness of countermeasures are examined by case studies based on the IEEE 14- and 118-bus test systems.",
        //         "year": 2016,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "2790591",
        //                 "name": "Zhiyi Li"
        //             },
        //             {
        //                 "authorId": "1705137",
        //                 "name": "M. Shahidehpour"
        //             },
        //             {
        //                 "authorId": "1833216",
        //                 "name": "Ahmed Alabdulwahab"
        //             },
        //             {
        //                 "authorId": "2648008",
        //                 "name": "A. Abusorrah"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Honeypot (computing)",
        //                 "topicId": "147630",
        //                 "url": "https://www.semanticscholar.org/topic/147630"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "High- and low-level",
        //                 "topicId": "33507",
        //                 "url": "https://www.semanticscholar.org/topic/33507"
        //             }
        //         ]
        //     },
        //     {
        //         "paperId": "58f92fde8650a86c6689cf718d358672707649f6",
        //         "title": "Fault Detector and Switch Placement in Cyber-Enabled Power Distribution Network",
        //         "abstract": "Cyber-enabled operation is needed for smart distribution system implementation. The interaction of cyber and power components will affect system reliability. This paper focuses on developing an analytical reliability model for fault detection, isolation, and service restoration for smart distribution feeders. The impact of end-to-end outage probability of data communication along with sending, receiving, and relaying communication node failures is incorporated into the model. Vulnerability of system to cyber attack as an emerging cause of reliability degradation is also investigated. An optimal placement of fault detectors and switching devices are determined in this work to improve reliability. The sum of customer service interruption cost and investment cost is considered as an objective function to be minimized. Bus 2 of the Roy Billinton test system and a typical 27-node distribution network are used to illustrate the role of communication infrastructure malfunction on the planning problem in a distribution feeder. Results and discussions show the necessity of incorporating communication infrastructure failure into the power distribution system planning problem.",
        //         "year": 2018,
        //         "isOpenAccess": false,
        //         "fieldsOfStudy": [
        //             "Engineering",
        //             "Computer Science"
        //         ],
        //         "authors": [
        //             {
        //                 "authorId": "35546485",
        //                 "name": "Mohammad Heidari Kapourchali"
        //             },
        //             {
        //                 "authorId": "31358903",
        //                 "name": "Mojtaba Sepehry"
        //             },
        //             {
        //                 "authorId": "2870641",
        //                 "name": "V. Aravinthan"
        //             }
        //         ],
        //         "topics": [
        //             {
        //                 "topic": "Threat (computer)",
        //                 "topicId": "313615",
        //                 "url": "https://www.semanticscholar.org/topic/313615"
        //             },
        //             {
        //                 "topic": "Computer security",
        //                 "topicId": "3178",
        //                 "url": "https://www.semanticscholar.org/topic/3178"
        //             },
        //             {
        //                 "topic": "Organization administrative structures",
        //                 "topicId": "6581",
        //                 "url": "https://www.semanticscholar.org/topic/6581"
        //             },
        //             {
        //                 "topic": "Rule (guideline)",
        //                 "topicId": "4540",
        //                 "url": "https://www.semanticscholar.org/topic/4540"
        //             },
        //             {
        //                 "topic": "Community",
        //                 "topicId": "2901",
        //                 "url": "https://www.semanticscholar.org/topic/2901"
        //             },
        //             {
        //                 "topic": "Body position",
        //                 "topicId": "18103",
        //                 "url": "https://www.semanticscholar.org/topic/18103"
        //             }
        //         ]
        //     }
        // ],
        // links: [
        //     {
        //         source: "e6e1989b2df588a6ece0e4dd520f34b20ac5cf14",
        //         target: "893644d781fcbcad807f97a8494c14f66c0684e5",
        //         size: 2,
        //         color: "#FFA07A",
        //         //value: {authorId: '47772997', name: 'Behnam Zakeri'}
        //         name: 'Behnam Zakeri'
        //     },
        //     {
        //         source: "e6e1989b2df588a6ece0e4dd520f34b20ac5cf14",
        //         target: "893644d781fcbcad807f97a8494c14f66c0684e5",
        //         size: 2,
        //         color: "#FFA07A",
        //         // value: {authorId: '39889166', name: 'J. Hunt'},
        //         name: 'J. Hunt'
        //     },
        //     {
        //         source: "e6e1989b2df588a6ece0e4dd520f34b20ac5cf14",
        //         target: "893644d781fcbcad807f97a8494c14f66c0684e5",
        //         size: 2,
        //         color: "#FFA07A",
        //         //value: {authorId: '1580864830', name: 'Mahsa Mohammadrezaei'}
        //         name: 'Mahsa Mohammadrezaei'
        //     },
        //     {
        //         source: "e6e1989b2df588a6ece0e4dd520f34b20ac5cf14",
        //         target: "893644d781fcbcad807f97a8494c14f66c0684e5",
        //         size: 2,
        //         color: "#FFA07A",
        //         // value: {authorId: '47772997', name: 'Behnam Zakeri'}
        //         name : 'Behnam Zakeri'
        //     },
        //     {
        //         source: "30d65fbc8d71ac202ee8d7d5f0e58c63a6c6a957",
        //         target: "8d208c08c9fea2793085a6da625b8e4f5ebe7695",
        //         size: 2,
        //         color: "#FFA07A",
        //         //value: {authorId: '112838836', name: 'Zhong Fan'}
        //         name:  'Zhong Fan'
        //     }
        // ],
        nodes: [],
        // links: [
        //     {
        //         "source": "059e776cacf87b3ed3f6eb9aa87968247fa68be5",
        //         "target": "c7c878013390b5b79cbcf8f83eaa7d5e6f108f6a",
        //         "value": [
        //             "Edward A. Lee"
        //         ]
        //     },
        //     {
        //         "source": "059e776cacf87b3ed3f6eb9aa87968247fa68be5",
        //         "target": "ec8519960ccf4b89cfae80ef7c63cd7f60bceecd",
        //         "value": [
        //             "Edward A. Lee"
        //         ]
        //     },
        //     {
        //         "source": "059e776cacf87b3ed3f6eb9aa87968247fa68be5",
        //         "target": "d01a87e7119c49b8a583bf0309ab6873ce902679",
        //         "value": [
        //             "Edward A. Lee"
        //         ]
        //     },
        //     {
        //         "source": "077ba01bbf641c4e1bb3fe87900b43f557b9d18c",
        //         "target": "a78474fd302a438bc11232168ad2ffcf3fde5976",
        //         "value": [
        //             "Gaoqi Liang",
        //             "S. Weller",
        //             "F. Luo",
        //             "Junhua Zhao",
        //             "Z. Dong"
        //         ]
        //     },
        //     {
        //         "source": "077ba01bbf641c4e1bb3fe87900b43f557b9d18c",
        //         "target": "f06e77001d4ca5091a330fb92ec9a67dc8a090a3",
        //         "value": [
        //             "Gaoqi Liang",
        //             "F. Luo",
        //             "Z. Dong"
        //         ]
        //     },
        //     {
        //         "source": "5a91bad3d679f7a5017e0168d56eb375f63c00f5",
        //         "target": "956d14db8e6669f140f73129bb52dd8949bf2a6e",
        //         "value": [
        //             "P. Burnap"
        //         ]
        //     },
        //     {
        //         "source": "5a91bad3d679f7a5017e0168d56eb375f63c00f5",
        //         "target": "909982acb048c31bb23f15955d4051b6c12d9631",
        //         "value": [
        //             "P. Burnap"
        //         ]
        //     },
        //     {
        //         "source": "5a91bad3d679f7a5017e0168d56eb375f63c00f5",
        //         "target": "729642f508fd83800636597ab4e43b034b1822a8",
        //         "value": [
        //             "Jason R. C. Nurse"
        //         ]
        //     },
        //     {
        //         "source": "5a91bad3d679f7a5017e0168d56eb375f63c00f5",
        //         "target": "037996ef796c2915563bb46bf19829d04ca30636",
        //         "value": [
        //             "P. Radanliev"
        //         ]
        //     },
        //     {
        //         "source": "5a91bad3d679f7a5017e0168d56eb375f63c00f5",
        //         "target": "0543394b9d9dc2c54a5f0835253790eb21c83b71",
        //         "value": [
        //             "C. Maple"
        //         ]
        //     },
        //     {
        //         "source": "44d857a8935ae3968a07c538cbcd077ae331cb46",
        //         "target": "a4ca57b5f0353434bb4211303f0fc46a02aeebd1",
        //         "value": [
        //             "Xiaohua Ge"
        //         ]
        //     },
        //     {
        //         "source": "44d857a8935ae3968a07c538cbcd077ae331cb46",
        //         "target": "69f03212c3756edf6131e6a6f2161c18c1ff1301",
        //         "value": [
        //             "Derui Ding",
        //             "Zidong Wang"
        //         ]
        //     },
        //     {
        //         "source": "fe22daafc1c4f1975fe8f3fae0dfd2152c500ac5",
        //         "target": "02a9c3ce417a87a63a5c91b6f31cbdabb47aaa0c",
        //         "value": [
        //             "S. Jeschke",
        //             "C. Brecher"
        //         ]
        //     },
        //     {
        //         "source": "c7c878013390b5b79cbcf8f83eaa7d5e6f108f6a",
        //         "target": "059e776cacf87b3ed3f6eb9aa87968247fa68be5",
        //         "value": [
        //             "Edward A. Lee"
        //         ]
        //     },
        //     {
        //         "source": "c7c878013390b5b79cbcf8f83eaa7d5e6f108f6a",
        //         "target": "ec8519960ccf4b89cfae80ef7c63cd7f60bceecd",
        //         "value": [
        //             "Edward A. Lee"
        //         ]
        //     },
        //     {
        //         "source": "c7c878013390b5b79cbcf8f83eaa7d5e6f108f6a",
        //         "target": "d01a87e7119c49b8a583bf0309ab6873ce902679",
        //         "value": [
        //             "Edward A. Lee"
        //         ]
        //     },
        //     {
        //         "source": "956d14db8e6669f140f73129bb52dd8949bf2a6e",
        //         "target": "5a91bad3d679f7a5017e0168d56eb375f63c00f5",
        //         "value": [
        //             "P. Burnap"
        //         ]
        //     },
        //     {
        //         "source": "956d14db8e6669f140f73129bb52dd8949bf2a6e",
        //         "target": "909982acb048c31bb23f15955d4051b6c12d9631",
        //         "value": [
        //             "P. Burnap",
        //             "M. Williams"
        //         ]
        //     },
        //     {
        //         "source": "cf3861590d3800c754503a29d5585cfc271724b8",
        //         "target": "248516d294bf7ee4d83816318ab42a473f2408b6",
        //         "value": [
        //             "J. Giraldo",
        //             "A. C\u00e1rdenas"
        //         ]
        //     },
        //     {
        //         "source": "cf3861590d3800c754503a29d5585cfc271724b8",
        //         "target": "b9219c9ebdd09bffd2c104430df9259afa59e185",
        //         "value": [
        //             "Nils Ole Tippenhauer"
        //         ]
        //     },
        //     {
        //         "source": "a4ca57b5f0353434bb4211303f0fc46a02aeebd1",
        //         "target": "44d857a8935ae3968a07c538cbcd077ae331cb46",
        //         "value": [
        //             "Xiaohua Ge"
        //         ]
        //     },
        //     {
        //         "source": "922b221eb59435c2d46fac945cc6474c25ed6876",
        //         "target": "f9ea054db77966b66dcde8cb096ce0ca2837127d",
        //         "value": [
        //             "M. Schmitt"
        //         ]
        //     },
        //     {
        //         "source": "734c5b0cc839af588913a10406907f58d9588caf",
        //         "target": "38a1a9134b4aaec23ac2f15b026648465aae6a23",
        //         "value": [
        //             "Ling Shi"
        //         ]
        //     },
        //     {
        //         "source": "69f03212c3756edf6131e6a6f2161c18c1ff1301",
        //         "target": "44d857a8935ae3968a07c538cbcd077ae331cb46",
        //         "value": [
        //             "Derui Ding",
        //             "Zidong Wang"
        //         ]
        //     },
        //     {
        //         "source": "a78474fd302a438bc11232168ad2ffcf3fde5976",
        //         "target": "077ba01bbf641c4e1bb3fe87900b43f557b9d18c",
        //         "value": [
        //             "Gaoqi Liang",
        //             "S. Weller",
        //             "Junhua Zhao",
        //             "F. Luo",
        //             "Z. Dong"
        //         ]
        //     },
        //     {
        //         "source": "a78474fd302a438bc11232168ad2ffcf3fde5976",
        //         "target": "f06e77001d4ca5091a330fb92ec9a67dc8a090a3",
        //         "value": [
        //             "Gaoqi Liang",
        //             "F. Luo",
        //             "Z. Dong"
        //         ]
        //     },
        //     {
        //         "source": "1e5d3a74f6e76b57116c4fc1a1409ab21021949b",
        //         "target": "a3ceea5b754286c4ca66812c37043ba32c263b80",
        //         "value": [
        //             "Kimberly Tam"
        //         ]
        //     },
        //     {
        //         "source": "49a4ca3136dfd334c18a24cc08a64f2c44098f8d",
        //         "target": "38fa5fd77ab77e15e1a319924c5e1f27456d3920",
        //         "value": [
        //             "L. Ribeiro"
        //         ]
        //     },
        //     {
        //         "source": "49a4ca3136dfd334c18a24cc08a64f2c44098f8d",
        //         "target": "eba93d94a77fb481599a35f8a2a26eef3588840f",
        //         "value": [
        //             "J. Lee"
        //         ]
        //     },
        //     {
        //         "source": "ec8519960ccf4b89cfae80ef7c63cd7f60bceecd",
        //         "target": "059e776cacf87b3ed3f6eb9aa87968247fa68be5",
        //         "value": [
        //             "Edward A. Lee"
        //         ]
        //     },
        //     {
        //         "source": "ec8519960ccf4b89cfae80ef7c63cd7f60bceecd",
        //         "target": "c7c878013390b5b79cbcf8f83eaa7d5e6f108f6a",
        //         "value": [
        //             "Edward A. Lee"
        //         ]
        //     },
        //     {
        //         "source": "ec8519960ccf4b89cfae80ef7c63cd7f60bceecd",
        //         "target": "d01a87e7119c49b8a583bf0309ab6873ce902679",
        //         "value": [
        //             "Edward A. Lee"
        //         ]
        //     },
        //     {
        //         "source": "909982acb048c31bb23f15955d4051b6c12d9631",
        //         "target": "5a91bad3d679f7a5017e0168d56eb375f63c00f5",
        //         "value": [
        //             "P. Burnap"
        //         ]
        //     },
        //     {
        //         "source": "909982acb048c31bb23f15955d4051b6c12d9631",
        //         "target": "956d14db8e6669f140f73129bb52dd8949bf2a6e",
        //         "value": [
        //             "P. Burnap",
        //             "M. Williams"
        //         ]
        //     },
        //     {
        //         "source": "f06e77001d4ca5091a330fb92ec9a67dc8a090a3",
        //         "target": "077ba01bbf641c4e1bb3fe87900b43f557b9d18c",
        //         "value": [
        //             "Z. Dong",
        //             "F. Luo",
        //             "Gaoqi Liang"
        //         ]
        //     },
        //     {
        //         "source": "f06e77001d4ca5091a330fb92ec9a67dc8a090a3",
        //         "target": "a78474fd302a438bc11232168ad2ffcf3fde5976",
        //         "value": [
        //             "Z. Dong",
        //             "F. Luo",
        //             "Gaoqi Liang"
        //         ]
        //     },
        //     {
        //         "source": "c001038442e0f00742507e7741984c68473257e9",
        //         "target": "7090c319dc4eea7394840fa5c700d8021f227866",
        //         "value": [
        //             "S. Sridhar",
        //             "A. Hahn",
        //             "G. Manimaran"
        //         ]
        //     },
        //     {
        //         "source": "729642f508fd83800636597ab4e43b034b1822a8",
        //         "target": "5a91bad3d679f7a5017e0168d56eb375f63c00f5",
        //         "value": [
        //             "Jason R. C. Nurse"
        //         ]
        //     },
        //     {
        //         "source": "dd3cf501d5b8941cab6cb82d3186f5dad921a49e",
        //         "target": "0809019eee516e129480588d9a87fae7590ebc24",
        //         "value": [
        //             "Jianhui Wang"
        //         ]
        //     },
        //     {
        //         "source": "38a1a9134b4aaec23ac2f15b026648465aae6a23",
        //         "target": "734c5b0cc839af588913a10406907f58d9588caf",
        //         "value": [
        //             "Ling Shi"
        //         ]
        //     },
        //     {
        //         "source": "248516d294bf7ee4d83816318ab42a473f2408b6",
        //         "target": "cf3861590d3800c754503a29d5585cfc271724b8",
        //         "value": [
        //             "J. Giraldo",
        //             "A. C\u00e1rdenas"
        //         ]
        //     },
        //     {
        //         "source": "d01a87e7119c49b8a583bf0309ab6873ce902679",
        //         "target": "059e776cacf87b3ed3f6eb9aa87968247fa68be5",
        //         "value": [
        //             "Edward A. Lee"
        //         ]
        //     },
        //     {
        //         "source": "d01a87e7119c49b8a583bf0309ab6873ce902679",
        //         "target": "c7c878013390b5b79cbcf8f83eaa7d5e6f108f6a",
        //         "value": [
        //             "Edward A. Lee"
        //         ]
        //     },
        //     {
        //         "source": "d01a87e7119c49b8a583bf0309ab6873ce902679",
        //         "target": "ec8519960ccf4b89cfae80ef7c63cd7f60bceecd",
        //         "value": [
        //             "Edward A. Lee"
        //         ]
        //     },
        //     {
        //         "source": "df6f2558be842f398e766564df1829eaf5ff6065",
        //         "target": "0809019eee516e129480588d9a87fae7590ebc24",
        //         "value": [
        //             "Zhiyi Li",
        //             "M. Shahidehpour"
        //         ]
        //     },
        //     {
        //         "source": "38fa5fd77ab77e15e1a319924c5e1f27456d3920",
        //         "target": "49a4ca3136dfd334c18a24cc08a64f2c44098f8d",
        //         "value": [
        //             "L. Ribeiro"
        //         ]
        //     },
        //     {
        //         "source": "f9ea054db77966b66dcde8cb096ce0ca2837127d",
        //         "target": "922b221eb59435c2d46fac945cc6474c25ed6876",
        //         "value": [
        //             "M. Schmitt"
        //         ]
        //     },
        //     {
        //         "source": "037996ef796c2915563bb46bf19829d04ca30636",
        //         "target": "5a91bad3d679f7a5017e0168d56eb375f63c00f5",
        //         "value": [
        //             "P. Radanliev"
        //         ]
        //     },
        //     {
        //         "source": "81a9183b52190adc3ac0305261868d235d39679c",
        //         "target": "e04af8e122690a3efcc686b935c6ada4c8789f5e",
        //         "value": [
        //             "M. Eling"
        //         ]
        //     },
        //     {
        //         "source": "02a9c3ce417a87a63a5c91b6f31cbdabb47aaa0c",
        //         "target": "fe22daafc1c4f1975fe8f3fae0dfd2152c500ac5",
        //         "value": [
        //             "S. Jeschke",
        //             "C. Brecher"
        //         ]
        //     },
        //     {
        //         "source": "0809019eee516e129480588d9a87fae7590ebc24",
        //         "target": "dd3cf501d5b8941cab6cb82d3186f5dad921a49e",
        //         "value": [
        //             "Jianhui Wang"
        //         ]
        //     },
        //     {
        //         "source": "0809019eee516e129480588d9a87fae7590ebc24",
        //         "target": "df6f2558be842f398e766564df1829eaf5ff6065",
        //         "value": [
        //             "Zhiyi Li",
        //             "M. Shahidehpour"
        //         ]
        //     },
        //     {
        //         "source": "b9219c9ebdd09bffd2c104430df9259afa59e185",
        //         "target": "cf3861590d3800c754503a29d5585cfc271724b8",
        //         "value": [
        //             "Nils Ole Tippenhauer"
        //         ]
        //     },
        //     {
        //         "source": "a3ceea5b754286c4ca66812c37043ba32c263b80",
        //         "target": "1e5d3a74f6e76b57116c4fc1a1409ab21021949b",
        //         "value": [
        //             "Kimberly Tam"
        //         ]
        //     },
        //     {
        //         "source": "7090c319dc4eea7394840fa5c700d8021f227866",
        //         "target": "c001038442e0f00742507e7741984c68473257e9",
        //         "value": [
        //             "A. Hahn",
        //             "S. Sridhar",
        //             "G. Manimaran"
        //         ]
        //     },
        //     {
        //         "source": "451476df1d93bef5c4e5ace7eec510e8a906edce",
        //         "target": "59fcfc783c8d0bee1a34c855f98093e87a1eba37",
        //         "value": [
        //             "Melissa F Peskin",
        //             "J. Temple"
        //         ]
        //     },
        //     {
        //         "source": "eba93d94a77fb481599a35f8a2a26eef3588840f",
        //         "target": "49a4ca3136dfd334c18a24cc08a64f2c44098f8d",
        //         "value": [
        //             "J. Lee"
        //         ]
        //     },
        //     {
        //         "source": "59fcfc783c8d0bee1a34c855f98093e87a1eba37",
        //         "target": "451476df1d93bef5c4e5ace7eec510e8a906edce",
        //         "value": [
        //             "J. Temple",
        //             "Melissa F Peskin"
        //         ]
        //     },
        //     {
        //         "source": "e04af8e122690a3efcc686b935c6ada4c8789f5e",
        //         "target": "81a9183b52190adc3ac0305261868d235d39679c",
        //         "value": [
        //             "M. Eling"
        //         ]
        //     },
        //     {
        //         "source": "0543394b9d9dc2c54a5f0835253790eb21c83b71",
        //         "target": "5a91bad3d679f7a5017e0168d56eb375f63c00f5",
        //         "value": [
        //             "C. Maple"
        //         ]
        //     }
        // ]
        links: []
    },
    filteredNetwork: {
        nodes:[],
        links: []
    },
    connectionType: 'Authors'
};


const realInitState = {
    ...initState,
    network: {
        nodes: customNodes(initState.network.nodes),
        links: customLinks(initState.network.links),
    }
}

const NetworkReducer = (state: NetworkState = realInitState, action:NetworkAction) => {
    switch (action.type) {
        case "GET_NETWORK":
            return {
                ...state,
                network: {...action.payload},
                filteredNetwork: {}
            };

        case "GET_FILTERED_NETWORK":
            return {
                ...state,
                metadataList: [...action.payload.metadataList],
                savedMetadataList: [...action.payload.savedMetadataList]
            };

        default:
            return state;
    }
};

export default NetworkReducer;