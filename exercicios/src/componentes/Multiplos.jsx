import React from "react";

export const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

const AteMais = props => <h1>Até Mais {props.nome}!</h1>

// export default BoaTarde

export {AteMais}
export default {BoaTarde, BoaNoite}