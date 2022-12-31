import {useState} from 'react'
import './login.css'
import { Logo } from '../../componentes/logo'
import {auth} from '../../Services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom' 
import { toast } from 'react-toastify' 
import { Input } from '../../componentes/input'

export default function Login(){
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState ();

  const navigate = useNavigate();

  function handleLogin (evento) {
    evento.preventDefault(); 
    
    if (email === '' || password === '' ) {
      alert("Preencha todos os campos")
      return;
    }
    signInWithEmailAndPassword (auth, email, password)
    .then (() => {
      navigate("/admin", {replace: true})
      toast.success("Bem vindo de volta!")
    })
    .catch (() => {
      toast.error("Erro ao tentar login")
      console.log ("Erro no login")
    })
  }

  return(
      <div className='login-container'>
          <Logo/>

            <form className='form' onSubmit={handleLogin}> 
                <Input
                  type="email" 
                  placeholder='Digite seu email...'
                  value={email}
                  onChange={(e) => setEmail(e.target.value) } 
                />

                <Input
                  type="password" 
                  placeholder='*****' 
                  autoComplete="on"
                  value={password} 
                  onChange= {(p) => setPassword (p.target.value)}
                />

                <button type='submit'>Acessar</button>
            </form>
        </div>
    )
}