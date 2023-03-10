import styled from "styled-components";

export const FlexContainerColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 90%;
	margin: 0 auto;
`;

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	margin: 0 auto;
	margin-top: 30px;

	h2 {
		text-align: center;
		
	}
	&#recipeInfoPage{
		h2{
			margin-bottom: 10px;
		}
	}
`;

export const Container = styled.div`
	width: 100%;
	margin: auto auto;
`;
export const GalleryContainer = styled.div`
	width: 100%;
	max-width: 350px;
	margin: auto auto;
`;

export const ContainerFlexedColumn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
