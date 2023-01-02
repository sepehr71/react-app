import React from 'react';

const MoviesTable = (props) => {
    const {movies ,onLikeBtn,onDelete} = props;
    return (  
        <table className='table'>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th>like</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {movies.map(movie => (
                    <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td><i className={movie.liked === true ? "fa fa-heart" : "fa fa-heart-o" } onClick={()=>onLikeBtn(movie)}/></td>
                      <td><button className='btn btn-danger' onClick={()=>onDelete(movie)}>Delete</button></td>
                    </tr>
                  ))}
                </tbody>
            </table>
    );

}
 
export default MoviesTable;