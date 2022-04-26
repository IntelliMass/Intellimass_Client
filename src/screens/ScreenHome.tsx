import React, {useEffect} from "react";
import { useAppSelector } from "../hooks/hooks"
import {useHistory} from "react-router-dom";
import {CollectionContainer} from "../components/collection-container/CollectionContainer";
import {HomePageHeader} from "../components/home-page-header/HomePageHeader";

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
    const userId = useAppSelector<string>(state => state.user.userId);
    const history = useHistory();

    useEffect(()=>{
        if (userId === ''){
            history.replace('/');
        }
    },[userId])


    return (
        <div className={`screen`}>
            {userId !== '' &&
                <div className="home-page-container">
                    <HomePageHeader/>
                    <CollectionContainer/>
                </div>
            }
        </div>
      );
};

export default HomeScreen;

HomeScreen.defaultProps = {};
