import React from 'react';
import { CDBFooter, CDBBtn, CDBBox, CDBIcon } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter className="container  ">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '100%', marginTop:'5em'}}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/"  className="d-flex align-items-center p-0 text-dark" style={{textDecoration:'none'}}>
           
            <span className="ml-4 h5 mb-0 font-weight-bold">Online Khabar</span>
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2"> &copy; Online Khabar, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="primary" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="primary" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};