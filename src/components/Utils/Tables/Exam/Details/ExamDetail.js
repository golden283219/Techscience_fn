import React from 'react';
import moment from 'moment';
import QuestionContent from '../../../Contents/QuestionContent';
import { MDBBox, MDBCol, MDBContainer, MDBRow } from 'mdbreact';

export default ({ data: { type, genre, updatedAt, id } }) => {
	return (
    <MDBContainer className="pt-2 pl-5 pr-5">
        <MDBRow>
            <MDBCol size="2">
                <MDBBox tag="h6" variant="h6-responsive">
                    <span className="font-weight-bolder">
                        Type
                    </span>
                    <span>
                        : {type}
                    </span>
                </MDBBox>
            </MDBCol>
            <MDBCol size='2'>
                <MDBBox tag="h6" variant="h6-responsive">
                    <span className="font-weight-bolder">
                        Genre
                    </span>
                    <span>
                        : {genre}
                    </span>
                </MDBBox>
            </MDBCol>
            <MDBCol size='4'>
                <MDBBox tag="h6" variant="h6-responsive">
                    <span className="font-weight-bolder">
                        Last Modified
                    </span>
                    <span>
                        : {moment(updatedAt).format('YYYY-MM-DD h:mm:ss')}
                    </span>
                </MDBBox>
            </MDBCol>
        </MDBRow>
        <MDBRow className='border-left border-dark'>
            <QuestionContent examId={ id } />
        </MDBRow>
    </MDBContainer>
	);
}