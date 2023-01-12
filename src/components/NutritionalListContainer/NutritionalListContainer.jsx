const NutritionalListContainer = ({ data }) => {
    console.log("inside NutritionalListContainer")
    console.debug(data)
    return (
        <div id="NutritionalListContainer">
            <h2>NutritionalListContainer</h2>
            <div id="nutrition">
                <ul>
                    {data.map((item, i) => {
                        if(i < ((data.length - 1) / 2)){
                            console.log(i)
                            let total = item.total;
                            if(total !== 0){
                                total = total.toFixed(2);
                            }
                            return(
                                <li key={i}>{item.label}: {total}{item.unit}</li>
                            )
                        } else {
                            return null;
                        }
                    })}
                </ul>
                <ul>
                    {data.map((item, i) => {
                        if(i > ((data.length - 1) / 2)){
                            console.log(i)
                            let total = item.total;
                            if(total !== 0){
                                total = total.toFixed(2);
                            }
                            return(
                                <li key={i}>{item.label}: {total}{item.unit}</li>
                            )
                        } else {
                            return null;
                        }
                    })
                    }
                </ul>
            </div>
        </div>
    );
};
export default NutritionalListContainer;