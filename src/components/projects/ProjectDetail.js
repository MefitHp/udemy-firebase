import React from 'react'

const ProjectDetail = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section project-detail">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">Titulo del proyecto - {id}</div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consectetur voluptatibus minima, cupiditate distinctio deleniti veritatis consequuntur cumque autem eligendi sunt aspernatur sed. Corporis nulla nesciunt error consectetur quos sit.</p>
                </div>
                <div className="card-action gray lighten-4 grey-text">
                    <div>Publicado por Mefit Hernández</div>
                    <div>Septiembre 3, 2 hrs.</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail