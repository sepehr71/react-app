import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';
import ListGroup from './common/listGroup';
import {getGenres} from '../services/fakeGenreService';

class Movies extends Component {

    state = {  
        movies : [],
        genres : [],
        pageSize : 4,
        currentPage : 1,
        currentGenre : "thriller"
    } ;
    componentDidMount(){
      const genres = [{name:"All Genres"} , ...getGenres()]
      this.setState({movies:getMovies() , genres })
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
    
   handleItemSelect = genre => {
        
          this.setState({currentGenre:genre,currentPage:1})
   }

    render() {
      const {length : count} = this.state.movies ;
      const {currentPage ,pageSize,movies:allMovies,genres,currentGenre } = this.state;

      if(count===0) return <h1>there is no movies</h1> ;

      const filtered = currentGenre && currentGenre._id  ? allMovies.filter( m => m.genre._id === currentGenre._id) : allMovies;
      const movies = paginate(filtered,currentPage,pageSize);
      
        return (
          <div className='container'>
             <div className='row'>
              <div className='col-3'>
              <ListGroup
                items = {genres}
                onItemSelect = {this.handleItemSelect}
                currentGenre = {currentGenre}
                 />
              </div>
              <div className='col'>
             <p id='top-info'>there are {filtered.length} movies in the table</p>
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
               itemsCount = {filtered.length}
               pageSize = {pageSize} 
               currentPage = {currentPage}
               onPageChange = {this.handlePageChange}  />
            </div>
            </div>
            </div>
        );
    }
}
 ListGroup.defaultProps = {
     textProperty:"name",
     valueProperty:"_id"
 };
export default Movies;