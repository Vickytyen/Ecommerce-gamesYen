import React from 'react';
import { Button } from 'reactstrap'
import { Link } from "react-router-dom";


function CheckOut() {
  return (
    <>
      <Link to="/Cart" >
        <Button color="primary" outline>
          Check Out
        </Button>
      </Link>
    </>
  );
}

export default CheckOut;


