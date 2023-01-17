import InfoContainer from "../InfoContainer";

const NutritionalList = ({ data }) => {
    console.log("inside NutritionalListContainer")
    console.debug(data)
    return (
        <InfoContainer>
            <div id="nutrition">
                <ul>
                    {data.map((item, i) => {
                        if(i < ((data.length - 1) / 2)){
                            let total = item.total;
                            if(total !== 0){
                                total = total.toFixed(2);
                            }
                            return(
                                <li key={i}><div>{item.label}: {total}{item.unit}</div></li>
                            )
                        } else {
                            return null;
                        }
                    })}
                </ul>
                <ul>
                    {data.map((item, i) => {
                        if(i > ((data.length - 1) / 2)){
                            let total = item.total;
                            if(total !== 0){
                                total = total.toFixed(2);
                            }
                            return(
                                <li key={i}><div>{item.label}: {total}{item.unit}</div></li>
                            )
                        } else {
                            return null;
                        }
                    })
                    }
                </ul>
            </div>
        </InfoContainer>
    );
};
export default NutritionalList;