import React, {useEffect, useState} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api/index'

const CountryPicker = ({handleCountryChange}) => {
    const [fetchCountry,setFetchCountries] = useState([])
    
    useEffect(() => {
        const fetchApi = async () => {
            setFetchCountries(await fetchCountries())
        }
        
        fetchApi()
    },[setFetchCountries])


    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {
                    fetchCountry.map((country,i) => <option keys={i} value={country}>{country}</option>)
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;