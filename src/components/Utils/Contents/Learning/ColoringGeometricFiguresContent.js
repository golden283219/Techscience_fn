import React from 'react';
import { Helmet } from 'react-helmet';
import { MDBBox, MDBCard, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import LeftMenu from '../../board/LeftMenu';
import Canvas from '../../board/Canvas';

export default () => {
	return <>
    <Helmet>
        <title>{`Drawing Board | ${ process.env.REACT_APP_NAME }`}</title>
    </Helmet>
    <MDBContainer className='p-1 pb-3 h-auto'>
        <MDBBox
				tag='h3'
				variant='h3-responsive'
				className='mt-4 mb-4'
			>
            Coloring Geometric Figures
        </MDBBox>
        <MDBCard>
            <MDBContainer className='p-0'>
                <MDBRow>
                    <MDBCol md="3">
                        <LeftMenu />
                    </MDBCol>
                    <MDBCol md="9">
                        <Canvas />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBCard>
    </MDBContainer>
	</>;
}