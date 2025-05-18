import React from 'react'
import { movies } from './Data'

export default function Nav({ set, filter }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-5 bg-body-dark">
                <div className="container">

                    <button className="navbar-toggler btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon icone"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav container d-flex justify-content-center gap-2 text-center">
                            <button onClick={() => set(movies)} type="button" className="btn btn-outline-primary">All</button>
                            <button onClick={() => filter(event.target.textContent)} type="button" className="btn btn-outline-info">Action</button>
                            <button onClick={() => filter(event.target.textContent)} type="button" className="btn btn-outline-success">Thriller</button>
                            <button onClick={() => filter(event.target.textContent)} type="button" className="btn btn-outline-danger">Animation</button>
                            <button onClick={() => filter(event.target.textContent)} type="button" className="btn btn-outline-warning">Horror</button>
                            <button onClick={() => filter(event.target.textContent)} type="button" className="btn btn-outline-info">Drama</button>
                            <button onClick={() => filter(event.target.textContent)} type="button" className="btn btn-outline-light">Sci-Fi</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
