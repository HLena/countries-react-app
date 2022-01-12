import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setTheme } from '../actions/ui';
import { Moon, Sun } from '@styled-icons/boxicons-solid';


const IconToggle = ({name, theme}) => {
    const Icon = styled(name)`
        font-size: 10px;
        color: ${theme === 'light' ? '#d1d1d1': '#1A2833'};
    `
    return <Icon/>;
}


const ToggleStyled = styled.div`
    width: auto;
    display: flex;
    gap: .3rem;
    .toggle {
        margin: 3px 0;
        position: relative;
        display: block;
        width: 40px;
        height: 20px;
        border-radius: 50px;
        transition: 0.5s;
        box-shadow: inset 0 8px 60px rgba(0,0,0,0.1),
                    inset 0 8px 8px rgba(0,0,0,0.1),
                    inset 0 -4px 4px rgba(0,0,0,0.1);
        cursor: pointer;
    
        ${({theme}) => {
            if(theme === 'light') {
                return `
                    background: white;
                `
            } else {
                return `
                    background: #273542;
                `
            }
        }}
        .indicator{
            position: absolute;
            top: 0;
            left: 0;
            width: 20px;
            height: 20px;
            border-radius: 50px;
            transform: scale(0.9);
            box-shadow: 0 8px 40px rgba(0,0,0,0.5),
            inset 0 4px 4px rgba(255,255,255,0.2),
            inset 0 -4px 4px rgba(255,255,255,0.2);
            transition: 0.5s;
            ${({theme}) => {
                if(theme === 'light') {
                    return `
                    background: white;
                    `
                } else {
                    return `
                        background: linear-gradient(to bottom, #444, #273542);
                    `
                }
            }}
        }
        .active {
            left: 20px;
        }
    }
`


export const Toggle = () => {

    const dispatch = useDispatch();
    const { theme } = useSelector( state => state.ui );
    const [active, setActive] = useState(false);


    const handleToggle = () => {
        setActive(!active);
        dispatch(setTheme(!active ? 'dark': 'light'));
    }

    return (
        <ToggleStyled theme = {theme}>
            <IconToggle name= {Sun} theme = {theme}/>
            <div className="toggle">
                <i 
                    className = {`indicator ${active ? 'active': ''}`}
                    onClick = { handleToggle }
                    />
            </div>
            <IconToggle name= {Moon} theme = {theme}/>

        </ToggleStyled>
    )
}
