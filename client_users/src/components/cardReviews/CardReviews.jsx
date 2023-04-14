import { FaStar, FaRegStar } from 'react-icons/fa';
import styles from "./CardReviews.module.css"
function CardReview({descripcion_motivo, valor_calificacion}) {
    const maxStars = 5;
    const filledStars = Math.round(valor_calificacion);
    
    const starList = Array(maxStars).fill().map((_, index) => {
      if (index < filledStars) {
        return <FaStar key={index} />;
      } else {
        return <FaRegStar key={index} />;
      }
    });
    
    return (
      <div>
        <p>{descripcion_motivo}</p>
        <div className={styles.star}>{starList}</div>
      </div>
    );
  }
  
export default CardReview
