import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return(
        <>
        <h1>thisisnavbar</h1>
        <Link href="/testpage">TESTPAGE</Link>
        <a>  </a>
        <Link href="/">HOME</Link>
        </>
    )
}

export default Nav;