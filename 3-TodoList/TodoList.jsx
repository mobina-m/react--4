import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function TodoList() {
  return (
    <>
      <h2 style={{ marginLeft: 650, marginBottom: 205 }}>ToDo List</h2>
      <InputGroup
        className="mb-2"
        style={{ width: 465, marginLeft: 500, marginTop: -190 }}
      >
        <Form.Control aria-label="Amount (to the nearest dollar)" />
      </InputGroup>
      {/* ========== */}
      <Button variant="primary" style={{ marginLeft: 970, marginTop: -83 }}>
        Add
      </Button>
      {/* ========== */}
      <InputGroup className="mb-3" style={{ width: 515, marginLeft: 500 }}>
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          delete
        </Button>
      </InputGroup>
    </>
  );
}

export { TodoList };
