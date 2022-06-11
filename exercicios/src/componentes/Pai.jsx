import React from "react";
// import Filho from "./Filho";

import { childrenWithProps } from "../utils/util";

// function childrenWithProps(props){
//     return React.Children.map(props.children, child => {
//         return React.cloneElement(child, { 
//             ...props, ...child.props
//         })
//     })
// }

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
        {
        // {props.children}

            childrenWithProps(props)

        // React.Children.map(props.children, child => {
        //     return React.cloneElement(child, { 
        //         ...props, ...child.props
        //     })
        // })

        
        }

        {/* <Filho nome="Pedro" sobrenome={props.sobrenome}></Filho>
        <Filho {...props}/>
        <Filho {...props} nome="Carla"/> */}
    </ul>
</div>