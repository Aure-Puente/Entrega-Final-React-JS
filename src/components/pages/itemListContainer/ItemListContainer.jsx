//Importaciones:
import { useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { db } from "../../../firebaseConfig.js"
import { collection, getDocs, query, where } from "firebase/firestore"
import { Skeleton } from "@mui/material"


//Lógica:
const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {name} = useParams()
    const [error, setError] = useState(null)

    useEffect(()=>{
        const productsCollection = collection(db, "products")
        let consulta = productsCollection
        if(name){
            consulta = query(productsCollection, where("category", "==", name))
        }
        getDocs(consulta)
            .then((res) => {
                let newArray = res.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
        });
            setItems(newArray);
    })
            .catch((err) => {
                setError(`Error al cargar productos: ${err.message}`);
    });
    },[name])

    if (error) {
        return <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>{error}</div>;
    }

    if(items.length ===0){
        return (
            <div className="loading">
                <div className="skeleton">
                    <Skeleton 
                        variant="rectangular"
                        sx={{fontSize: "1rem"}}
                        height={250}
                        width={345} />
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "1rem"}}
                        height={55}
                        width={300}/>
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "0.5"}}
                        height={30}
                        width={280} />
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "0.5"}}
                        height={30}
                        width={280} />
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "0.5"}}
                        height={30}
                        width={280} />
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "0.5"}}
                        height={30}
                        width={100} />
                </div>
                <div className="skeleton">
                    <Skeleton 
                        variant="rectangular"
                        sx={{fontSize: "1rem"}}
                        height={250}
                        width={345} />
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "1rem"}}
                        height={55}
                        width={300}/>
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "0.5"}}
                        height={30}
                        width={280} />
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "0.5"}}
                        height={30}
                        width={280} />
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "0.5"}}
                        height={30}
                        width={280} />
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "0.5"}}
                        height={30}
                        width={100} />
                </div>
                <div className="skeleton">
                    <Skeleton 
                        variant="rectangular"
                        sx={{fontSize: "1rem"}}
                        height={250}
                        width={345} />
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "1rem"}}
                        height={55}
                        width={300}/>
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "0.5"}}
                        height={30}
                        width={280} />
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "0.5"}}
                        height={30}
                        width={280} />
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "0.5"}}
                        height={30}
                        width={280} />
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "0.5"}}
                        height={30}
                        width={100} />
                </div>
                <div className="skeleton">
                    <Skeleton 
                        variant="rectangular"
                        sx={{fontSize: "1rem"}}
                        height={250}
                        width={345} />
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "1rem"}}
                        height={55}
                        width={300}/>
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "0.5"}}
                        height={30}
                        width={280} />
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "0.5"}}
                        height={30}
                        width={280} />
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "0.5"}}
                        height={30}
                        width={280} />
                    <Skeleton 
                        variant="text"
                        sx={{fontSize: "0.5"}}
                        height={30}
                        width={100} />
                </div>
            </div>
        )
    }else{
            return (
        <ItemList items= {items} name={name} />
    )
    }

}

export default ItemListContainer