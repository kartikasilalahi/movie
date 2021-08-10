import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { RiMovie2Line } from "react-icons/ri";
import SearchBar from './homeComponent/searchComponent'

export default function NavBar() {
    const path = window.location.pathname
    return (
        <div>
            <Navbar variant="dark" style={{ backgroundColor: "#010C1E" }}>
                {
                    path === "/" ?
                        <Container>
                            <Navbar.Brand href="/" style={{ color: "#EDB330", fontWeight: 700 }}>
                                <RiMovie2Line /> {' '}Movie Omdb
                            </Navbar.Brand>
                            <SearchBar />
                        </Container>
                        :
                        <Container>
                            <Navbar.Brand href="/" style={{ color: "#EDB330", fontWeight: 700 }}>
                                <RiMovie2Line /> {' '}Movie Omdb
                            </Navbar.Brand>
                        </Container>
                }
            </Navbar>
        </div>
    )
}
