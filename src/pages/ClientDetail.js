import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ClientState } from "../clientState";

const ClientDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [clients, setClients] = useState(ClientState);
  const [client, setClient] = useState(null);
  // console.log(history)

  useEffect(() => {
    const currentClient = clients.filter((stateClient) => stateClient.url === url);
    console.log(currentClient)
    setClient(currentClient);
  }, [clients, url]);

  return (
    <div>
      <h1>Client Detail</h1>
    </div>
  );
};

export default ClientDetail;
