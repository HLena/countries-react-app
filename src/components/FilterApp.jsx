import styled from 'styled-components';
import { useSelector } from 'react-redux';


const  FilterStyled = styled.div`
    width: 80%;
    padding: 25px;
    border-radius: 5px;
    margin: 20px auto;
    input {
        width: 450px;
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
`;


export const FilterApp = () => {
    const { theme } = useSelector( state => state.ui );

    return (
        <FilterStyled theme = {theme}>
            <input 
                type="text"
                name="country"
                placeholder = "Search a country..."
            />
        </FilterStyled>
    )
}
