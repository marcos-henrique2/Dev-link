import './erro.css'

import {Link} from 'react-router-dom'
import {Logo} from '../../componentes/logo'

export default function Error(){
    return(
        <div className='error'>
            <Logo/>
            <h1>Esta página não exsite</h1>

            <Link className='link' to= "/"> 
                Voltar para home
            </Link>
        </div>
    )
}