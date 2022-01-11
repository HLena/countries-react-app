import styled from 'styled-components';

const BarStyled = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    background: white;
    padding: 16px;
    h1{
        margin: 0;
    }
`

export const AppBar = () => {
    return (
        <BarStyled>
            <h1>Planet.com</h1>
            <button>theme</button>
        </BarStyled>
    )
}
