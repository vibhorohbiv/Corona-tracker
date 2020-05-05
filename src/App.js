import React, { Component } from 'react';
import {Cards, CountryPicker, Chart } from './components/index'
import styles from './App.module.css'
import { fetchData } from './api/index'
import CoronaImage from './images/image.png'

class App extends Component {
    state = {
        data: {},
        country:''
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({data:fetchedData, country:country})
    }

    async componentDidMount(){
        const fetchedData = await fetchData()
        this.setState({data:fetchedData})
    }

    render() {
        const {data, country} = this.state
        console.log(data, {data})
        return (
            <div className={styles.container}>
                <img className={styles.image} src={CoronaImage} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        );
    }
}

export default App;