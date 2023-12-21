import { createSlice } from "@reduxjs/toolkit";

import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBooks, setLoading, setResultTitle } from "./actions";
// import { fetchBooks } from './actions'; // adjust this import according to your project structure

const dispatch = useDispatch();
const searchTerm = useSelector(state => state.searchTerm);
const YourComponent = () => {
 
  

  useEffect(() => {
    dispatch(fetchBooks(searchTerm));
  }, [searchTerm, dispatch]);

  // Your component code here
};

const bookStore=createSlice({
    name:"book",
    initialState:null,
    reducers:{
        addBookResults:(state,action)=>{
            state=action.payload;
        },
        fetchBooks:(state,action)=>{
         (async() => {
                setLoading(true);
                try{
                    const response = await fetch(`${URL}${action.payload}`);
                    const data = await response.json();
                    const {docs} = data;
        
                    if(docs){
                        const newBooks = docs.slice(0, 20).map((bookSingle) => {
                            const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;
        
                            return {
                                id: key,
                                author: author_name,
                                cover_id: cover_i,
                                edition_count: edition_count,
                                first_publish_year: first_publish_year,
                                title: title
                            }
                        });
        
                        setBooks(newBooks);
        
                        if(newBooks.length > 1){
                            dispatch(setResultTitle("Your Search Result"));
                        } else {
                            dispatch(setResultTitle("No Search Result Found!"))
                        }
                    } else {
                        dispatch(setBooks([]));
                        dispatch(setResultTitle("No Search Result Found!"));
                    }
                    dispatch(setLoading(false));
                } catch(error){
                    console.log(error);
                    dispatch(setLoading(false));
                }
            }, [searchTerm]);
        }
    }
})

export const {addBookResults,fetchBooks}=bookStore.actions;
export default bookStore.reducer;