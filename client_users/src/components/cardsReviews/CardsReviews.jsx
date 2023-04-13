import CardReview from "../cardReviews/CardReviews"
import { useSelector } from "react-redux"
function CardsReviews(){
 const {reviews} = useSelector((state)=> state)
    return(
    <div>
    {
        reviews?.map(review => {
            return ( 
                <CardReview 
                id_motivo_calificacion={review.id_motivo_calificacion}
                descripcion_motivo={review.descripcion_motivo}
                valor_calificacion={review.valor_calificacion}
                id_producto={review.id_producto}
                />
            )
        })
    }
    </div>
    )
}
export default CardsReviews