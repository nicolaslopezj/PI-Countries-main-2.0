// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getDetail } from '../actions';
// import "./Card"
// // import Activity from './activityDetail'
// // import './Detail.css';

// export default function CountryDetail() {
//     const countryDetail = useSelector(s => s.countryDetail);
//     const dispatch = useDispatch()

//     const { id } = useParams();
    
//     useEffect(() => {   
//         dispatch(getDetail(id))
//     }, [dispatch, id]);

//     return (
//         <div className="detail"></div>
//     )
// };