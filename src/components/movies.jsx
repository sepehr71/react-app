import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';

class Movies extends Component {

    state = {  
        movies : getMovies(),
        pageSize :4,
        currentPage : 1
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
    
    handlePageChange = page => { 
           this.setState({currentPage:page});
    }

    render() {
      const {length : count} = this.state.movies ;
      const {currentPage ,pageSize,movies:allMovies } = this.state;
      if(count===0) return <h1>there is no movies</h1> ;
      const movies = paginate(allMovies,currentPage,pageSize);

        return (
             <div className='container'>
             <p id='top-info'>there are {allMovies.length} movies in the table</p>
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
                      <td><i className={movie.liked === true ? "fa fa-heart" : "fa fa-heart-o" } onClick={()=>this.handlelikebtn(movie)}/></td>
                      <td><button className='btn btn-danger' onClick={()=>this.handleDelete(movie)}>Delete</button></td>
                    </tr>
                  ))}
                </tbody>
            </table>
            <Pagination 
               itemsCount = {count}
               pageSize = {pageSize} 
               currentPage = {currentPage}
               onPageChange = {this.handlePageChange}  />
            </div>
        );
    }
}
 
export default Movies;