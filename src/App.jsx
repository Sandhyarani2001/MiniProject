
import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
     <h1 className='text-center text-danger text-capitalize my-5'>Wellcome to My Gallery</h1>
     <div className="container text-center">
      <div className="row">
       <div className="col">
        <div className="card">
        <img src="https://picsum.photos/205/200" class="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
       </div>

       <div className="col">
        <div className="card">
        <img src="https://picsum.photos/203/200" class="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
       </div>

       <div className="col">
        <div className="card">
        <img src="https://picsum.photos/200/200" class="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
       </div>
       
     </div>
    </div>
    </>
  )
}

export default App
