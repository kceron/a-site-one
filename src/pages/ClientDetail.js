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
    const currentClient = clients.filter(
      (stateClient) => stateClient.url === url
    );
    console.log(currentClient);
    setClient(currentClient[0]);

  }, [clients, url]);
  console.log(client)
  return (
    <>
      {client && (
        <StyledDetails>
          <StyledHeadLine>
            <h2>{client.title}</h2>
            <img src={client.mainImg} alt="client image" />
          </StyledHeadLine>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled.div`
    color: white;
`;

const StyledHeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h3 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default ClientDetail;
