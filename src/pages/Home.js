import React from 'react'
import MovieContainer from '../components/homeComponent/containerMovie'
import Navbar from '../components/navBar'
export default function Home() {


    return (
        <div className="bg-dark" style={{ minHeight: '100vh' }}>
            <Navbar />
            <div className="container py-5" >
                <div className="pb-3 " style={{ fontWeight: 700, fontSize: '24px', color: '#EDB330' }}>
                    List Movie For You
                    </div>
                <div >
                    <MovieContainer />
                </div>

            </div>
        </div>
    )
}