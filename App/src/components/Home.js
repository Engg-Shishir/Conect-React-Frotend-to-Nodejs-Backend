import React from 'react'

function Home() {
 return (  <div className="container">
 <div className="py-4">
  <h1 className="home-heading">Home Page</h1>
   <table className="table table-striped table-dark table-hover table-bordered shadow">
      <thead className="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">User Name</th>
          <th scope="col">Email</th>
          <th>Action</th>
        </tr>
      </thead>
     
   </table>
 </div>
</div>
 );
}

export default Home
