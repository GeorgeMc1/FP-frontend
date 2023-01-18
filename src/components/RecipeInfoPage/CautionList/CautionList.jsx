import InfoContainer from "../InfoContainer";

const CautionList = ({cautions}) => {

    return(
        <InfoContainer id="cautions">
            {cautions ?
                <ul>
                    {cautions.map((item, i) => {
                        return(
                            <li key={i}><div>{item}</div></li>
                        )
                    })}
                </ul>
            :
                null
            }
        </InfoContainer>
    )
}

export default CautionList;