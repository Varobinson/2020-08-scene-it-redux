import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import {Link} from 'react-router-dom'

export default function Favorites() {
    const movies = useSelector((state) => state.favorites)

    return (
        <>
        <Typography variant="h1" align="center">Favorites!</Typography>
        <Link to="/" > Home </Link>
        <Grid container spacing={3}>
            { movies.map(movie => {
            return (
                <Grid item xs={3} key={movie.imdbID}>
                <MovieCard movie={movie} />
                </Grid>
            )
            }) }
        </Grid>
        </>
    )
}
