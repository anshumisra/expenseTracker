import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";
const initialState={
    transactions:[
        //eg: {id:1,text:'Flower',amount:-20},
        // {id:2,text:'Book',amount:200},
        // {id:3,text:'Salary',amount:-20},
        // {id:4,text:'Camera',amount:120}
    ]//initally empty
}

export const GlobalContext=createContext(initialState);

export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
    
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }
    
    return(
        <GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}
