import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <>
    <br></br>

    <div style={{boxShadow: "2px 2px 5px rgba(5, 5, 5, 0.25)"}}>
        <MDBFooter className='text-center' color='white' bgColor='transparent'>
        <MDBContainer className='p-4'>
 
            <a target="_blank" href="https://www.youtube.com/watch?v=Ww5-UV_Dv_U">
              <p className='opacity-50'><center><strong>"Follow your passion, and life will reward you." <br/> -Uncle Iroh, <italic>Avatar The Last Airbender</italic></strong></center></p>
            </a>

        </MDBContainer>
        </MDBFooter>
    </div>
    </>
  );
}