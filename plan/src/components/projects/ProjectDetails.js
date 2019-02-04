import React from 'react'

export default function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">project title - {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni animi! Esse beatae in cum quas velit iure quaerat iusto sed vitae tenetur eligendi culpa nobis similique, voluptate eaque. Atque.</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>posted by</div>
                <div>2nd septemper</div>
            </div>
        </div>
    </div>
  )
}
