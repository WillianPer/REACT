import React /*,{ Fragment, Component} */from 'react'

import ReactDOM from 'react-dom'

// import BomDia from './componentes/BomDia'
// import {BoaTarde, BoaNoite} from './componentes/Multiplos' 

// import BoaTarde, {BoaNoite} from './componentes/Multiplos'

/* import Mult, {BoaNoite, AteMais} from './componentes/Multiplos'  /* BoaTarde foi importado fora da {},
porque foi exportado usando Default*/

// import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(<div>
    {/* <BomDia nome="Willian" idade={10}/> */}
    {/* <BoaTarde nome="Bia"></BoaTarde> */}
    {/* <Mult.BoaTarde nome="Bia"/> */}
    {/* <BoaNoite nome="Carla"></BoaNoite> */}
    {/* <AteMais nome="Milton"></AteMais> */}

    {/* <Saudacao tipo="Bom Dia" nome="Willian"></Saudacao> */}

    <Pai nome="Paulo" sobrenome="Silva">
        {/* Como passo os componentes Filhos Aqui? */}

        <Filho nome="Pedro"/>
        <Filho nome="Paulo" sobrenome="Silva"/>
        <Filho nome="Carla" sobrenome="Silva"/>
    </Pai>

</div>
, document.getElementById('root'))