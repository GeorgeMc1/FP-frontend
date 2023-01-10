import React from "react";
import { FlexContainerColumn } from "../../css/common-styles";


const ResultsCounter = ({ count }) => {

    

    return (
        <FlexContainerColumn>
            {count && <p>{count} Recipes Found </p>}
        </FlexContainerColumn>

    )

};
export default ResultsCounter;