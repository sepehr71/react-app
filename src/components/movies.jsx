
import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = {  
        movies : getMovies()
    } 
    pagination = {
      p_movies : this.state.movies.map( movie => (
      
      ))
    }
    handleDelete = movie => {
       const movies = this.state.movies.filter( m => m._id !== movie._id);
       this.setState({movies})
    };
    handlelikebtn = movie => {
      const movies = [...this.state.movies];
      const index = movies.indexOf(movie);
      movies[index]={...movies[index]};
      movies[index].liked = !movies[index].liked;
      this.setState({movies})
    }
    render() { 
        return (
          
             this.state.movies.length === 0 ? <h1>there is no movies</h1> :
             <div className='container'>
             <p id='top-info'>there are {this.state.movies.length} movies in the table</p>
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
                  {this.state.movies.map(movie => (
                     <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td><i className={movie.liked === true ? "fa fa-heart" : "fa fa-heart-o" } onClick={()=>this.handlelikebtn(movie)}/></td>
                      <td><button className='btn btn-danger' onClick={()=>this.handleDelete(movie)}>Delete</button></td>
                     </tr>
                  ))}
                </tbody>
            </table>
           
            <nav aria-label="Page navigation example">
              <ul className="pagination">    
              {this.state.movies.map( movie => (
                <li className="page-item"><a className="page-link" href="#">{}</a></li>                  
              ))}
              </ul>
            </nav>

            </div>
        );
    }
}
 
export default Movies;