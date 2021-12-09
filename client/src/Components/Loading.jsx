import React, {useContext} from 'react'
// import './loading.css';
import GlobalContext from '../contexts/GlobalContext';

const Loading = () => {
    const {ui} = useContext(GlobalContext);
    return (
        <>
        {ui.loading && <div className="loading">
            <img src="https://flyclipart.com/thumb2/image-934460.png" alt="loading" />
        </div>}
        </>
    )
};

export default Loading;