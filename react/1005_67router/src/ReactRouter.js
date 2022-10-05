import './ReactRouter.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './Main';
import Product from './Product';

const ReactRouter = () => {
    return(
        <header>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/student/:name" element={<Product />}></Route>
                </Routes>
            </BrowserRouter>

        </header>
    )
}

export default ReactRouter;