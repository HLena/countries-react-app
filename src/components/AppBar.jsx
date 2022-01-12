import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Toggle } from './Toggle';
import location from '../assets/images/location.png'

const BarStyled = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.06);
    .app_logo{
        display: flex;
        gap: .5rem;
    }
    padding: 16px;
    img {
        height: 100%;
    }
    h1{
        margin: 0;
    }
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
`

export const AppBar = () => {

    const { theme } = useSelector( state => state.ui );

    return (
        <BarStyled theme={theme}>
            <div className = "app_logo">
                <img src={location} alt="worl-wide" />
                <h1>Planet.com</h1>
            </div>
            <Toggle/>
        </BarStyled>
    )
}
