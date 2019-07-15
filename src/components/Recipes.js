import React from 'react';
import { directive } from '@babel/types';

const Recipes = props => 
    <div className="container">
        <div className="row">
        {
            props.recipes.map(recipe =>
                <div className="col-md-4">
                    <div className="recipe__box">
                        <img 
                            className="recipe__box-img"
                            src={recipe.image_url}
                            alt={recipe.title} />
                        
                        <div className="recipe__text">
                            <h5>{ recipe.title }</h5>
                        </div>
                    
                    </div>



                </div>
            )
        }
        </div>
    </div>


export default Recipes