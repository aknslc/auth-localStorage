import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div>
                <Link to={"/login"}> Login </Link>
            </div>

            <div>
                <Link to={"/register"}> Register </Link>
            </div>

        </div>
    )
}

export default Home