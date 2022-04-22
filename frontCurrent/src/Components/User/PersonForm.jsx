import styled from "styled-components";
import { categories } from "../../data";
import CategoryItem from "../../Layouts/CategoryItem";
import React, {useState, useEffect} from "react";
import axios from 'axios';

export default class PersonForm extends React.Component{

    state ={
        loading: true,
        customer: null,
    };

    async componentDidMount(){
        const url = "http://localhost:9000/customers";
        const response = fetch(url)
        const data = await (await response).json();
        this.setState({customer: data[0], loading: false})
        console.log(data)
    }

    render(){
        return(

            <div>

                {this.state.loading || !this.state.customer? (<div>loading...</div>) :
                ( 
                    <div>
                        <div>{this.state.customer.username}</div>
                
                
                
            

            </div>
                )}
                </div>);
        
    }
}