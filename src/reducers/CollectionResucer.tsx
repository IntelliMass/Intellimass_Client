// COLLECTIONS STATE MANAGEMENT REDUCER

import {ArticleOfList} from "../actions/ArticleActions";
import {CollectionsAction} from "../actions/CollectionAction";

export interface ICollection {
    collectionName: string;
    articles: Array<ArticleOfList>;
}

export interface CollectionState {
    collections: Array<any>,
}

const initState = {
    collections: [
        {
            collectionName: "NFT 2021",
            articles: [
                {
                    abstract: "The Non-Fungible Token (NFT) market is mushrooming in recent years. The concept of NFT originally comes from a token standard of Ethereum, aiming to distinguish each token with distinguishable signs. This type of token can be bound with virtual/digital properties as their unique identifications. With NFTs, all marked properties can be freely traded with customized values according to their ages, rarity, liquidity, etc. It has greatly stimulated the prosperity of the decentralized application (DApp) market. At the time of writing (May 2021), the total money used on completed NFT sales has reached 34, 530, 649.86 USD. The thousandfold return on its increasing market draws huge attention worldwide. However, the development of the NFT ecosystem is still in its early stage, and the technologies of NFTs are pre-mature. Newcomers may get lost in their frenetic evolution due to the lack of systematic summaries. In this technical report, we explore the NFT ecosystems in several aspects. We start with an overview of state-of-the-art NFT solutions, then provide their technical components, protocols, standards, and desired proprieties. Afterwards, we give a security evolution, with discussions on the perspectives of their design models, opportunities and challenges. To the best of our knowledge, this is the first systematic study on the current NFT ecosystems.",
                    authors: [
                        {authorId: "1832563310", name: "Qin Wang"},
                        {authorId: "2109383363", name: "Rujia Li"},
                        {authorId: "2151570058", name: "Qi Wang"},
                        {authorId: "48847573", name: "Shiping Chen"}
                    ],
                    fieldsOfStudy: ["Computer Science"],
                    frequentWords: ["market", "token", "properties", "evolution", "systematic"],
                    isOpenAccess: false,
                    paperId: "ad5c04b15e20dccfd3907f9cc354962cb77848a7",
                    title: "Non-Fungible Token (NFT): Overview, Evaluation, Opportunities and Challenges",
                    venue: "ArXiv",
                    year: 2021
                },
                {
                    abstract: "Non Fungible Tokens (NFTs) are digital assets that represent objects like art, collectible, and in-game items. They are traded online, often with cryptocurrency, and are generally encoded within smart contracts on a blockchain. Public attention towards NFTs has exploded in 2021, when their market has experienced record sales, but little is known about the overall structure and evolution of its market. Here, we analyse data concerning 6.1 million trades of 4.7 million NFTs between June 23, 2017 and April 27, 2021, obtained primarily from Ethereum and WAX blockchains. First, we characterize statistical properties of the market. Second, we build the network of interactions, show that traders typically specialize on NFTs associated with similar objects and form tight clusters with other traders that exchange the same kind of objects. Third, we cluster objects associated to NFTs according to their visual features and show that collections contain visually homogeneous objects. Finally, we investigate the predictability of NFT sales using simple machine learning algorithms and find that sale history and, secondarily, visual features are good predictors for price. We anticipate that these findings will stimulate further research on NFT production, adoption, and trading in different contexts.",
                    authors: [
                        {authorId: "3381981", name: "Matthieu Nadini"},
                        {authorId: "2818774", name: "Laura Alessandretti"}
                    ],
                    fieldsOfStudy: ["Medicine", "Economics", "Computer Science", "Physics"],
                    frequentWords: ["objects", "market", "2021", "sales", "million"],
                    isOpenAccess: false,
                    paperId: "f8a30a36507374efc512399f027b0fc2ed799cdc",
                    title: "Mapping the NFT revolution: market trends, trade networks, and visual features",
                    venue: "Scientific reports",
                    year: 2021
                },
                {
                    abstract: "The market for non-fungible tokens (NFTs), transferrable and unique digital assets on public blockchains, has received widespread attention and experienced strong growth since early 2021. This study provides an introduction to NFTs and explores the 14 largest submarkets using data from the Ethereum blockchain between June 2017 and May 2021. The analyses rely on (a) the number of NFT sales, (b) the dollar volume of NFT trades and (c) the number of unique blockchain wallets that traded NFTs. Based on the number of transactions and wallets, the Ethereum-based NFT market peaked at the end of 2017 due to the success of the CryptoKitties project. As of 2021, fewer transactions occur but the traded value is much higher. We find that NFT submarkets are cointegrated and feature various causal short-run connections between them. The success or adoption of younger NFT projects is influenced by that of more established markets. At the same time, the success of newer markets has an impact on the more established projects. The results contribute to the overall understanding of the NFT phenomenon and suggest that NFT markets are immature or even inefficient.",
                    authors: [{authorId: "113611772", name: "Lennart Ante"}],
                    fieldsOfStudy: [],
                    frequentWords: ["2021", "number", "success", "markets", "market"],
                    isOpenAccess: false,
                    paperId: "5cbc70102a4a2ab47cdbe7c112b3a48afcc76b02",
                    title: "Non-fungible Token (NFT) Markets on the Ethereum Blockchain: Temporal Development, Cointegration and Interrelations",
                    venue: "SSRN Electronic Journal",
                    year: 2021
                }
            ]
        },
        {
            collectionName: "NFT 2022",
            articles: [
                {
                    abstract: "Non Fungible Tokens (NFTs) are digital assets that represent objects like art, collectible, and in-game items. They are traded online, often with cryptocurrency, and are generally encoded within smart contracts on a blockchain. Public attention towards NFTs has exploded in 2021, when their market has experienced record sales, but little is known about the overall structure and evolution of its market. Here, we analyse data concerning 6.1 million trades of 4.7 million NFTs between June 23, 2017 and April 27, 2021, obtained primarily from Ethereum and WAX blockchains. First, we characterize statistical properties of the market. Second, we build the network of interactions, show that traders typically specialize on NFTs associated with similar objects and form tight clusters with other traders that exchange the same kind of objects. Third, we cluster objects associated to NFTs according to their visual features and show that collections contain visually homogeneous objects. Finally, we investigate the predictability of NFT sales using simple machine learning algorithms and find that sale history and, secondarily, visual features are good predictors for price. We anticipate that these findings will stimulate further research on NFT production, adoption, and trading in different contexts.",
                    authors: [
                        {authorId: "3381981", name: "Matthieu Nadini"},
                        {authorId: "2818774", name: "Laura Alessandretti"}
                    ],
                    fieldsOfStudy: ["Medicine", "Economics", "Computer Science", "Physics"],
                    frequentWords: ["objects", "market", "2021", "sales", "million"],
                    isOpenAccess: false,
                    paperId: "f8a30a36507374efc512399f027b0fc2ed799cdc",
                    title: "Mapping the NFT revolution: market trends, trade networks, and visual features",
                    venue: "Scientific reports",
                    year: 2021
                },
                {
                    abstract: "The market for non-fungible tokens (NFTs), transferrable and unique digital assets on public blockchains, has received widespread attention and experienced strong growth since early 2021. This study provides an introduction to NFTs and explores the 14 largest submarkets using data from the Ethereum blockchain between June 2017 and May 2021. The analyses rely on (a) the number of NFT sales, (b) the dollar volume of NFT trades and (c) the number of unique blockchain wallets that traded NFTs. Based on the number of transactions and wallets, the Ethereum-based NFT market peaked at the end of 2017 due to the success of the CryptoKitties project. As of 2021, fewer transactions occur but the traded value is much higher. We find that NFT submarkets are cointegrated and feature various causal short-run connections between them. The success or adoption of younger NFT projects is influenced by that of more established markets. At the same time, the success of newer markets has an impact on the more established projects. The results contribute to the overall understanding of the NFT phenomenon and suggest that NFT markets are immature or even inefficient.",
                    authors: [{authorId: "113611772", name: "Lennart Ante"}],
                    fieldsOfStudy: [],
                    frequentWords: ["2021", "number", "success", "markets", "market"],
                    isOpenAccess: false,
                    paperId: "5cbc70102a4a2ab47cdbe7c112b3a48afcc76b02",
                    title: "Non-fungible Token (NFT) Markets on the Ethereum Blockchain: Temporal Development, Cointegration and Interrelations",
                    venue: "SSRN Electronic Journal",
                    year: 2021
                }
            ]
        },
        {
            collectionName: "IOT architecture",
            articles: [
                {
                    abstract: "The Non-Fungible Token (NFT) market is mushrooming in recent years. The concept of NFT originally comes from a token standard of Ethereum, aiming to distinguish each token with distinguishable signs. This type of token can be bound with virtual/digital properties as their unique identifications. With NFTs, all marked properties can be freely traded with customized values according to their ages, rarity, liquidity, etc. It has greatly stimulated the prosperity of the decentralized application (DApp) market. At the time of writing (May 2021), the total money used on completed NFT sales has reached 34, 530, 649.86 USD. The thousandfold return on its increasing market draws huge attention worldwide. However, the development of the NFT ecosystem is still in its early stage, and the technologies of NFTs are pre-mature. Newcomers may get lost in their frenetic evolution due to the lack of systematic summaries. In this technical report, we explore the NFT ecosystems in several aspects. We start with an overview of state-of-the-art NFT solutions, then provide their technical components, protocols, standards, and desired proprieties. Afterwards, we give a security evolution, with discussions on the perspectives of their design models, opportunities and challenges. To the best of our knowledge, this is the first systematic study on the current NFT ecosystems.",
                    authors: [
                        {authorId: "1832563310", name: "Qin Wang"},
                        {authorId: "2109383363", name: "Rujia Li"},
                        {authorId: "2151570058", name: "Qi Wang"},
                        {authorId: "48847573", name: "Shiping Chen"}
                    ],
                    fieldsOfStudy: ["Computer Science"],
                    frequentWords: ["market", "token", "properties", "evolution", "systematic"],
                    isOpenAccess: false,
                    paperId: "ad5c04b15e20dccfd3907f9cc354962cb77848a7",
                    title: "Non-Fungible Token (NFT): Overview, Evaluation, Opportunities and Challenges",
                    venue: "ArXiv",
                    year: 2021
                },
                {
                    abstract: "The market for non-fungible tokens (NFTs), transferrable and unique digital assets on public blockchains, has received widespread attention and experienced strong growth since early 2021. This study provides an introduction to NFTs and explores the 14 largest submarkets using data from the Ethereum blockchain between June 2017 and May 2021. The analyses rely on (a) the number of NFT sales, (b) the dollar volume of NFT trades and (c) the number of unique blockchain wallets that traded NFTs. Based on the number of transactions and wallets, the Ethereum-based NFT market peaked at the end of 2017 due to the success of the CryptoKitties project. As of 2021, fewer transactions occur but the traded value is much higher. We find that NFT submarkets are cointegrated and feature various causal short-run connections between them. The success or adoption of younger NFT projects is influenced by that of more established markets. At the same time, the success of newer markets has an impact on the more established projects. The results contribute to the overall understanding of the NFT phenomenon and suggest that NFT markets are immature or even inefficient.",
                    authors: [{authorId: "113611772", name: "Lennart Ante"}],
                    fieldsOfStudy: [],
                    frequentWords: ["2021", "number", "success", "markets", "market"],
                    isOpenAccess: false,
                    paperId: "5cbc70102a4a2ab47cdbe7c112b3a48afcc76b02",
                    title: "Non-fungible Token (NFT) Markets on the Ethereum Blockchain: Temporal Development, Cointegration and Interrelations",
                    venue: "SSRN Electronic Journal",
                    year: 2021
                }
            ]
        },
        {
            collectionName: "Food",
            articles: [
                {
                    abstract: "The market for non-fungible tokens (NFTs), transferrable and unique digital assets on public blockchains, has received widespread attention and experienced strong growth since early 2021. This study provides an introduction to NFTs and explores the 14 largest submarkets using data from the Ethereum blockchain between June 2017 and May 2021. The analyses rely on (a) the number of NFT sales, (b) the dollar volume of NFT trades and (c) the number of unique blockchain wallets that traded NFTs. Based on the number of transactions and wallets, the Ethereum-based NFT market peaked at the end of 2017 due to the success of the CryptoKitties project. As of 2021, fewer transactions occur but the traded value is much higher. We find that NFT submarkets are cointegrated and feature various causal short-run connections between them. The success or adoption of younger NFT projects is influenced by that of more established markets. At the same time, the success of newer markets has an impact on the more established projects. The results contribute to the overall understanding of the NFT phenomenon and suggest that NFT markets are immature or even inefficient.",
                    authors: [{authorId: "113611772", name: "Lennart Ante"}],
                    fieldsOfStudy: [],
                    frequentWords: ["2021", "number", "success", "markets", "market"],
                    isOpenAccess: false,
                    paperId: "5cbc70102a4a2ab47cdbe7c112b3a48afcc76b02",
                    title: "Non-fungible Token (NFT) Markets on the Ethereum Blockchain: Temporal Development, Cointegration and Interrelations",
                    venue: "SSRN Electronic Journal",
                    year: 2021
                }
            ]
        },
    ]
};

const CatalogReducer = (state: CollectionState = initState, action:CollectionsAction) => {
    switch (action.type) {
        case "GET_COLLECTIONS":
            return {
                ...state,
                collections: [...action.payload],
            };

        case "UPDATE_COLLECTION_NAME":
            return {
                ...state,
                collections: [...action.payload],
            };

        case "INSERT_ITEM_TO_COLLECTION":
            return {
                ...state,
                collections: [...action.payload],
            };

        case "REMOVE_ITEM_TO_COLLECTION":
            return {
                ...state,
                collections: [...action.payload],
            };

        case "DELETE_COLLECTION":
            return {
                ...state,
                collections: [...action.payload],
            };

        case "CREATE_COLLECTION":
            return {
                ...state,
                collections: [...action.payload],
            };

        default:
            return state;
    }
};

export default CatalogReducer;
