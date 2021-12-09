import React, {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCountries, addActivity } from "../actions"
import { Link } from "react-router-dom"

export default function Form(){
    
    const [state, setState] = useState({
        name: "",
        dificulty: "",
        duration: "",
        season: "",
        countries: []
    })

    
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
    
    const resetForm = () => {
        setState({
            name: "",
            dificulty: "",
            duration: "",
            season: "",
        })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        dispatch(addActivity(state))
        resetForm()
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value

    })}

    const handleSelect = (e) => {
        setState({
            ...state,
            countries: [...state.countries, e.target.value]
    })}

    const handleCheck = (e) => {
        if(e.target.checked) {
            setState({
                ...state,
                countries: e.target.value
            })
        }
    }

    useEffect(() => {
        // console.log(countries)
        dispatch(getCountries())
    }, [])


    return (
        <div>
            <Link to="/home"><button className="btn">Back</button></Link>
            <form className="form">
                <div>
                    <label className="label">Name:</label>
                    <input type="text" className="input" name="name" value={state.name} placeholder="Name here..." onChange={handleChange} />
                </div>
                <div>
                    <label className="label">Duration (minutes):</label>
                    <input type="number" className="d-input" name="duration" value={state.duration} placeholder="Duration here..."onChange={handleChange} />
                </div>
                <div>
                    <label className="label">Dificulty:</label>
                    <select className="select" name="dificulty" onChange={handleSelect}>
                        <option value={state.dificulty}>1</option>
                        <option value={state.dificulty}>2</option>
                        <option value={state.dificulty}>3</option>
                        <option value={state.dificulty}>4</option>
                        <option value={state.dificulty}>5</option>
                    </select>
                </div>
                <div>
                <label className="label">Season:</label>
                <select className="select" name="season" onChange={handleSelect}>
                    <option>Select</option>
                    <option value={state.season}>Summer</option>
                    <option value={state.season}>Spring</option>
                    <option value={state.season}>Winter</option>
                    <option value={state.season}>Autumn</option>
                </select>
                </div>
                <div>
                    <label className="label">Countries</label>
                    <select>
                    {countries.map(mp => (
                        <option value={mp.name}>{mp.name}</option>
                    ))}
                    </ select>
                    <ul><li>{state.countries.map(el => el + ", ")}</li></ul>
                </div>
                <button className="btn" onClick={handleOnSubmit}>Add activity</button>
            </form>
        </div>
    )
}