import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';
import ListGroup from './common/listGroup';
import {getGenres} from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {

    state = {  
        movies : [],
        genres : [],
        pageSize : 4,
        currentPage : 1,
        currentGenre:"",
        sortColumn : {path:"title", order:"asc"}
    } ;
    componentDidMount(){
      const genres = [{_id:"" , name:"All Genres"} , ...getGenres()]
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
   handleSort = sortColumn => {
          this.setState({sortColumn})
   }

    getPageData = () => {

      const {currentPage ,pageSize,movies:allMovies,genres,currentGenre,sortColumn } = this.state;
      const filtered = currentGenre && currentGenre._id  ? allMovies.filter( m => m.genre._id === currentGenre._id) : allMovies;

      const sorted = _.orderBy(filtered , [sortColumn.path] , [sortColumn.order])     
 
      const movies = paginate(sorted,currentPage,pageSize); 

      return {totalCount: filtered.length , data : movies };
      
    }
    render() {
      const {length : count} = this.state.movies ;
      const {currentPage ,pageSize,genres,currentGenre,sortColumn } = this.state;

      if(count===0) return <h1>there is no movies</h1> ;

      const {totalCount , data : movies } = this.getPageData();
     
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
             <p id='top-info'>there are {totalCount} movies in the table</p>
             <MoviesTable
              onDelete = {this.handleDelete}
              sortColumn = {sortColumn}
              onLikeBtn = {this.handlelikebtn}
              movies = {movies}
              onSort = {this.handleSort}
              />
            <Pagination 
               itemsCount = {totalCount}
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