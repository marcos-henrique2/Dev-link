
import { useState, useEffect  } from 'react'
import './social.css'
import { Header } from '../../componentes/Header'
import { Input } from '../../componentes/input'
import { MdAddLink } from 'react-icons/md'
import {db} from '../../Services/firebase'
import {
    setDoc,
    doc,
    getDoc
} from 'firebase/firestore'
import { toast } from 'react-toastify'


export default function Social (){
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [youtube, setYoutube] = useState("");

    useEffect (() => {

        function loadLinks (){
            const docRef = doc(db, "social", "link")
             getDoc (docRef)
            .then ((snpashot) => {
                
                if(snpashot.data() !== undefined) {
                    setFacebook(snpashot.data().facebook)
                    setInstagram(snpashot.data().instagram)
                    setYoutube(snpashot.data().youtube)
                }
            })

        }

        loadLinks();

    }, [])
    
    function handleSave(e){
        e.preventDefault();

        setDoc(doc(db, "social", "link"), {
            facebook: facebook,
            instagram: instagram, 
            youtube: youtube
        })
        .then(() => {
            toast.success("Salvo com sucesso")
        })
        .catch((error) => {
            toast.error("Erro ao salvar seus links")
        })
        }


     

    return(
        <div className='admin-container'>
            <Header/>

            <h1 className='title-social'>Suas redes sociais </h1>

            <form className='form' onSubmit={handleSave}>
                <label className='label'>Link do Facebook</label>
                <Input
                    placeholder= "Digite a url do Facebook..."
                    value={facebook}
                    onChange= {(e) => setFacebook(e.target.value)}
                />

                <label className='label'>Link do Instagram</label>
                <Input
                    placeholder= "Digite a url do Instagram..."
                    value={instagram}
                    onChange= {(e) => setInstagram(e.target.value)}
                />

                <label className='label'>Link do Youtube</label>
                <Input
                    placeholder= "Digite a url do Youtube..."
                    value={youtube}
                    onChange= {(e) => setYoutube(e.target.value)}
                />

                <button type='submit' className='btn-register'>
                    Salvar links <MdAddLink size={24} color="#fff"  />
                </button>

            </form>

        </div>
    )
}