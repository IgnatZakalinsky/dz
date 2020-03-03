import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const MONDAY = 'monday';
const TUESDAY = 'tuesday';
const WEDNESDAY = 'wednesday';
const THURSDAY = 'thursday';
const FRIDAY = 'friday';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const [page, setPage] = useState(MONDAY);

    return (
        <div>
            <span style={{margin: 5}}>NavBar</span>
            <button style={{margin: 5}} onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
            {show && <>
                <NavLink
                    style={{margin: 5, color: page === MONDAY ? 'red' : 'lime'}}
                    to={'/monday'}
                    onClick={() => setPage(MONDAY)}
                >
                    monday
                </NavLink>
                <NavLink
                    style={{margin: 5, color: page === TUESDAY ? 'red' : 'lime'}}
                    to={'/tuesday'}
                    onClick={() => setPage(TUESDAY)}
                >
                    tuesday
                </NavLink>
                <NavLink
                    style={{margin: 5, color: page === WEDNESDAY ? 'red' : 'lime'}}
                    to={'/wednesday'}
                    onClick={() => setPage(WEDNESDAY)}
                >
                    wednesday
                </NavLink>
                <NavLink
                    style={{margin: 5, color: page === THURSDAY ? 'red' : 'lime'}}
                    to={'/thursday'}
                    onClick={() => setPage(THURSDAY)}
                >
                    thursday
                </NavLink>
                <NavLink
                    style={{margin: 5, color: page === FRIDAY ? 'red' : 'lime'}}
                    to={'/friday'}
                    onClick={() => setPage(FRIDAY)}
                >
                    friday
                </NavLink>

            </>}
        </div>
    );
};

export default NavBar;
