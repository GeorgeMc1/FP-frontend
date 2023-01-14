
import heart from "../../assets/images/heartFilled.png"
import heartOutline from "../../assets/images/heartOutlineTran.png"
 const FavHeartIcon= ({ isLiked }) => {


    return (
        <>
          {isLiked ?
            <img className="favHeartImg" alt="favouriting icon" src={heart} />
            :
            <img className="favHeartImg" alt="favouriting icon" src={heartOutline} />
        }
        </>
       
    )
    }

 export default FavHeartIcon