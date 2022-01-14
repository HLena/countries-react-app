import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { DownArrow } from '@styled-icons/boxicons-solid'
import { setContryRegion } from '../actions/countries';


const DownArrowIcon = styled(DownArrow)`
    color: white;
    width: 15px;
`

const RegionFilterStyled = styled.div`
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.06);
    cursor: pointer;
    position: relative;
    width: 100%;
    border-radius: 5px;
    padding: 16px;
    display: flex;
    gap: .5rem;
    justify-content: center;
    align-items: center;
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

    ul {
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.06);
        transition: .5s;
        position: absolute;
        width: 100%;
        padding: 0 ;
        top: 40px;
        border-radius: 5px;
        display: none;
        ${({theme}) => {
            if(theme === 'light') {
                return `
                    background: white;
                    color: #333;
                `
            } else {
                return `
                    background: #273542;
                    color:white;
                `
            }
        }}
        ${({active}) => {
            if(active) {
                return `
                    display: flex;
                    flex-direction: column;
                `
            }
        }}

    }
    ul li {
        cursor: pointer;
        text-align: center;
        list-style: none;
        padding: .8rem;
        :hover{
            background: ${({theme}) => theme === 'light' ? '#eee' :'#ffffff4a'} 
        }
    }

    @media (min-width: 900px) {
        max-width: 250px;
    }

`;

export const RegionFilter = () => {
    const { 
        ui : { theme}, 
        countries: { filter }
    } = useSelector( state => state );

    const dispatch = useDispatch();

    const { region } = filter;

    const regions = ['Africa',  'Americas', 'Asia', 'Europe', 'Oceania', 'All']
    const [active, setActive] = useState(false);

    const handleDropdown = () => {
        setActive(!active);
    }

    const onRegionChange = (region) => {
        if(region === 'All') {
            dispatch(setContryRegion(''))
        } else {
            dispatch(setContryRegion(region))
        }
    }

    return (
        <RegionFilterStyled 
            theme = {theme}
            active = {active}
            onClick = {handleDropdown}
        >
            { region || 'Filter by Region'}
            <DownArrowIcon/>
                <ul>
                    {
                        regions.map((region) => (
                            <li 
                                key = {`region-${region}`}
                                onClick={() => onRegionChange(region)}
                                >{region}</li>
                        ))
                    }
                </ul>
        </RegionFilterStyled>
    )
}
