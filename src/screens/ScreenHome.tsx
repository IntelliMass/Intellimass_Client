import React, {useEffect} from "react";
import { useAppSelector } from "../hooks/hooks"
import {useHistory} from "react-router-dom";
import {CollectionContainer} from "../components/collection-container/CollectionContainer";
import {HomePageHeader} from "../components/home-page-header/HomePageHeader";
import {CollectionState} from "../reducers/CollectionResucer";

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
    const userId = useAppSelector<string>(state => state.user.userId);
    const history = useHistory();
    const collection = useAppSelector<CollectionState>(state => state.collection.collection);

    useEffect(()=>{
        if (userId === ''){
            history.replace('/');
        }
    },[userId])

    const countArticles = (collection: CollectionState):number => {
        let articlesNumber = 0;
        if(collection.collection) {
            collection.collection.forEach(item => {
                articlesNumber += item.articles_list.length;
            })
        }
        return articlesNumber;
    }

    return (
        <div className={`screen`}>
            {userId !== '' &&
                <div className="home-page-container">
                    <HomePageHeader numberOfCollection={collection.collection ? collection.collection.length : 0} numberOfArticles={countArticles(collection)}/>
                    <CollectionContainer/>
                </div>
            }
        </div>
      );
};

export default HomeScreen;

HomeScreen.defaultProps = {};
