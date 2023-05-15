import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <>
    <br></br>

    <div style={{boxShadow: "2px 2px 5px rgba(5, 5, 5, 0.25)"}}>
        <MDBFooter className='text-center' color='white' bgColor='transparent'>
        <MDBContainer className='p-4'>
            <section className='mb-4'>
                <MDBBtn outline color="dark" floating className='m-1' href='https://www.linkedin.com/in/ethan-mathieu/' role='button'>
                    <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>

                <MDBBtn outline color="dark" floating className='m-1' href='https://github.com/emath12' role='button'>
                    <MDBIcon fab icon='github' />
                </MDBBtn>
            </section>

        </MDBContainer>
        </MDBFooter>
    </div>
    </>
  );
}