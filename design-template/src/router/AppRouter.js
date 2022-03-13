import react from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import Booklist from '../components/BookList';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div classname="main-content">
                    <Switch>
                        <Route component={Booklist} path ="/" exact={true} />

                        <Route component={AddBook} path="/add" />

                    </Switch>
                </div>
            </div>
        
        </BrowserRouter>
    );
};

export default AppRouter