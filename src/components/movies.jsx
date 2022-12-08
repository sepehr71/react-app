
import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = {  
        movies : getMovies()
    } 
    handleDelete = movie => {
       const movies = this.state.movies.filter( m => m._id !== movie._id);
       this.setState({movies})
    };
    render() { 
        return (
             this.state.movies.length === 0 ? <h1>there is no movies</h1> :
             <div>
             <p id='top-info'>there are {this.state.movies.length} movies in the table</p>
             <table className='table'>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.movies.map(movie => (
                     <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td><button className='btn btn-danger' onClick={()=>this.handleDelete(movie)}>Delete</button></td>
                     </tr>
                  ))}
                </tbody>
            </table>
            </div>
        );
    }
}
 
export default Movies;