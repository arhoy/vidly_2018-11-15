import React from 'react';
import Like from '../../UI/Like/Like';
import Pagination from '../../UI/Pagination/Pagination';
const MovieTable = ({movies,onDelete,onLike,onSort,pageSize,items,onPageChange,currentPage}) => {

    return (
        <React.Fragment>
               <table className="table">
                <thead>
                    <tr>
                    <th onClick = { ()=> {onSort('title')} } scope="col">Title</th>
                    <th onClick = { ()=> {onSort('genre.name')} } scope="col">Genre</th>
                    <th onClick = { ()=> {onSort('numberInStock')} } scope="col">Stock</th>
                    <th onClick = { ()=> {onSort('dailyRentalRate')} } scope="col">Rate</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                {movies.map(movie=>(
                    <tr key = {movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <Like
                                liked ={movie.liked}
                                onLike = {()=>{onLike(movie)} }
                                color = 'orangered'
                                size = 'lx'
                            />
                        </td>
                        <td>
                            <button onClick = { () => {onDelete(movie)} } className = "btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
                </table>
             <Pagination 
                pageSize = {pageSize}
                items = {items}
                onPageChange = {onPageChange}
                currentPage = {currentPage}
             />

        </React.Fragment>
     
    );
};

export default MovieTable;