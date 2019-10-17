import {SET_STORE} from '../actions';

export  default function store (state= [], action={}){
    switch(action.type){
       case  SET_STORE :
           return action.store
       default: return state;
    }
}