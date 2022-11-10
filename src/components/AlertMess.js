import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertMess() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>French – The language of Love!!
</Alert.Heading>
        <p>
          
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            French Language
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>French</Button>}
    </>
  );
}
export default AlertMess;