import styled from 'styled-components'

const  FilterStyled = styled.div`
    width: 80%;
    padding: 25px;
    border-radius: 5px;
    margin: 20px auto;
`;

const  BarSearch = styled.input`
    width: 450px;
    border: 1px solid #eee;
    padding: 16px;
    border-radius: 5px;
    outline: none;
`;


export const FilterApp = () => {
    return (
        <FilterStyled>
            <BarSearch 
                type="text"
                name="country"
                placeholder = "Search a country..."
            />
        </FilterStyled>
    )
}
