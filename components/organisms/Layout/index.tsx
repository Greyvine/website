import Header from "@components/organisms/Header"
import Footer from "@components/atoms/Footer"
import styled from "@emotion/styled"

const Root = styled.div`

`

const Main = styled.div`
    min-height: 100vh;
`

const Layout: React.FunctionComponent = ({children}) => {
    return <Root>
        <Header/>
        <Main>
            {children}
        </Main>
        <Footer />
    </Root>
}

export default Layout