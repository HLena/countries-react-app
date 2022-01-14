import { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RegionFilter } from './RegionFilter';
import { setContryName } from '../actions/countries';
import { useForm } from '../hooks/useForm';


const  FilterStyled = styled.div`
    width: 80%;
    padding: 25px;
    border-radius: 5px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    input {
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.06);
        width: 100%;
        padding: 16px;
        border-radius: 5px;
        border: none;
        outline: none;
        ${({theme}) => {
            if(theme === 'light') {
                return `
                    background: white;
                    color: #333;
                    `
                } else {
                    return `
                        background: #273542;
                        color: white;
                    `
                }
            }}
    }
    @media (min-width: 900px) {
        justify-content: space-between;
        flex-direction: row;
        input {
            max-width: 350px;
        }
    }
`;


export const FilterApp = () => {
    const { 
        ui : { theme}, 
        countries: { filter }
    } = useSelector( state => state );

    const dispatch = useDispatch();

    const [formValues, handleInoutChange] = useForm(filter)

    const { name } = filter;

    useEffect(() => {
        dispatch(setContryName(formValues.name))
     }, [formValues, dispatch])

    return (
        <FilterStyled theme = {theme}>
            <input 
                type="text"
                name="country"
                placeholder = "Search a country..."
                value = { name }
                name = 'name'
                onChange = {handleInoutChange}
            />
            <RegionFilter />
        </FilterStyled>
    )
}
