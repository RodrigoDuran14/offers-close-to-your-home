import CardReview from "../cardReviews/CardReviews"
import { useSelector } from "react-redux"
function CardsReviews(){
 const {reviews} = useSelector((state)=> state)
    return(
    <div>
        <div style={{display:"flex", justifyContent:"flex-start", margin:"20px"}}>
            <h2>Opiniones acerca del producto</h2>
        </div>
        <hr />
    {reviews?(
        reviews?.map(review => {
            return ( 
                <CardReview 
                id_motivo_calificacion={review.id_motivo_calificacion}
                descripcion_motivo={review.descripcion_motivo}
                valor_calificacion={review.valor_calificacion}
                id_producto={review.id_producto}
                />
            )
        })): (<h2>Este producto no tiene opiniones aun</h2>)
    }
    </div>
    )
}
export default CardsReviews