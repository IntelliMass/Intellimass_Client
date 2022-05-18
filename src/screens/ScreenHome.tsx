import React, {useEffect, useState} from "react";
import { useAppSelector } from "../hooks/hooks"
import {useHistory} from "react-router-dom";
import {CollectionContainer} from "../components/collection-container/CollectionContainer";
import {HomePageHeader} from "../components/home-page-header/HomePageHeader";
import {CollectionState} from "../reducers/CollectionResucer";
import {ArticleOfList} from "../actions/ArticleActions";
import {Spin} from "antd";
import "../index.scss";

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
    const userId = useAppSelector<string>(state => state.user.userId);
    const history = useHistory();
    const collection = useAppSelector<CollectionState>(state => state.collection.collection);
    const [isLoader, setIsLoader] = useState<boolean>(false);

    useEffect(()=>{
        if (userId === ''){
            history.replace('/');
        }
        setIsLoader(true);
    },[userId])

    useEffect(()=>{
        setTimeout(() => {
            setIsLoader(false);
        }, 1500);
    },[collection])

    const countArticles = (collection: CollectionState):number => {
        let articlesNumber = 0;
        if(collection.collection) {
            collection.collection.forEach(item => {
                articlesNumber += item.articles_list.length;
            })
        }
        return articlesNumber;
    }

    const countAuthors = (collection: CollectionState):number => {
        let authorsNumber = 0;
        if(collection.collection) {
            collection.collection.forEach(item => {
                let lists = item.articles_list;
                lists.forEach((singleList:ArticleOfList) => {
                    authorsNumber += singleList.authors.length;
                })
            })
        }
        return authorsNumber;
    }

    const countFrequents = (collection: CollectionState):number => {
        let frequentsNumber = 0;
        if(collection.collection) {
            collection.collection.forEach(item => {
                let lists = item.articles_list;
                lists.forEach((singleList:ArticleOfList) => {
                    if(singleList.frequentWords)
                        frequentsNumber += singleList.frequentWords.length;
                })
            })
        }
        return frequentsNumber;
    }

    return (
        <div className={`screen`}>
            {userId !== '' &&
                isLoader ?
                <div className="screen-articles">
                    <div className="loader-container">
                        <Spin size="large" />
                        <h4 style={{marginLeft: -100}} className="loader-articles-details">Uploading your private collections</h4>
                    </div>
                </div> :
                    <div style={{marginTop: 20}} className="home-page-container">
                        <HomePageHeader
                            numberOfCollection={collection.collection ? collection.collection.length : 0}
                            numberOfArticles={countArticles(collection)}
                            numberOfAuthors={countAuthors(collection)}
                            numberOfFrequentsWord={countFrequents(collection)}
                        />
                        <CollectionContainer/>
                    </div>
            }
        </div>
      );
};

export default HomeScreen;

HomeScreen.defaultProps = {};
