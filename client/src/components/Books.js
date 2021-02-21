import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    makeStyles
} from '@material-ui/core';
import { getBooks } from '../actions/booksAction';

const useStyles = makeStyles(theme => ({

}));

export const Books = ({
    books: { allBooks },
    getBooks
}) => {

    useEffect(()=>{
        getBooks();
    }, [getBooks]);

    const classes = useStyles();
    console.log("All Books: " + JSON.stringify(allBooks));
    return (
        <div>Here I Comes</div>
    );
};

Books.propTypes = {
    books: PropTypes.object.isRequired,
    getBooks:PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    books: state.books
});

const mapDispatchToProps = {
    getBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);