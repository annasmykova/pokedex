import {Container} from "@mui/material";
import Header from "./Header";

const Page = ({children}) => {
    return (<>
            <Header/>
            <main>
                <Container maxWidth="sm">
                    {children}
                </Container>
            </main>
        </>
    )
}

export default Page
