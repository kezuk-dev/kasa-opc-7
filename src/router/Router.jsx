import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";
import { About, Home, NotFound, Lodging, LINK_LIST } from "../ui/pages";
import { Footer, Header } from "../ui/components";

function Router() {
    return(
        <Routing>
            <div className="router container">
                <Header />
                <Routes className="router page">
                    <Route exact path={LINK_LIST.Home} element={<Home />}/>
                    <Route path={LINK_LIST.About} element={<About />}/>
                    <Route path={LINK_LIST.Lodging + '/:id'} element={<Lodging />}/>
                    <Route path={LINK_LIST.NotFound} element={<NotFound />}/>
                </Routes>
                <Footer />
            </div>
        </Routing>
    )
}

export default Router;