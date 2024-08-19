import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';

import { HandleHome } from './fakestore-home';
import { HandeCategories } from './fakestore-categories';
import { HandleProducts } from './fakestore-produucts';
import { HandlePreview } from './fakestore-preview';
import { HandleLogin } from './fakestore-login';
import { HandleSearch } from './fakestore-search';
import { HandleError } from './error';
import { SearchRes } from './searchResults';
import { TopSearch } from './topSearch';


export function HandleIndex(){

   
    return(
        <div>
           <BrowserRouter>
           <div>
                <header className='d-flex justify-content-between align-items-center bg-secondary p-2'>
                    <div className=''>
                        <h3 className='bi bi-cart-fill'>Fakestore.</h3>
                    </div>
                    <div className=''>
                        <Link to="/home" className='btn btn-secondary'><span className='mx-2'>Home</span></Link>
                      <Link to="/categories" className='btn btn-secondary'>  <span className='mx-2'>Categories</span></Link>
                        
                    </div>
                    <div className=''>
                       <Link to="/search" className='btn btn-secondary'> <span className='bi bi-search mx-2'></span></Link>
                <span className='bi bi-cart position-relative'></span>
                       <Link to="/login" className='btn btn-secondary'> <span className='bi bi-person-fill mx-2'></span></Link>
                    </div>
                </header>
                <main className='bg-dark text-light' style={{'height':'100vh'}}>
                   <Routes>
                    <Route path='/' element={<HandleHome/>} />
                    <Route path='home' element={<HandleHome/>} />
                    <Route path='categories' element={<HandeCategories/>} >
                    <Route path='products/:item' element={<HandleProducts/>}/>
                    </Route>
                    <Route path='preview/:id' element={<HandlePreview/>}/>  
                    <Route path='login' element={<HandleLogin/>}/>
                    <Route path='search' element={<HandleSearch/>}/>
                    <Route path='error' element={<HandleError/>}/>
                    <Route path='searchRes' element={<SearchRes/>}/>
                    <Route path='topSearch' element={<TopSearch/>}/>
                   
                    <Route path='*' element={<div><h1>Not Found</h1></div>}/>
                   </Routes>
                </main>
            </div>
           </BrowserRouter>
        </div>
    )
}