import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/homelayout/LeftAside';
import RightAside from '../Components/homelayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const { state } = useNavigation()
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-4'>
                    <LatestNews></LatestNews>
                </section>
                <section>
                    <Navbar></Navbar>
                </section>
            </header>
            <main className='w-11/12 mx-auto my-4 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-2 h-fit'>
                <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    {state == 'loading' ? <Loading /> : <Outlet></Outlet> }     
                </section>
                <aside className='col-span-3 sticky top-2 h-fit'>
                <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;