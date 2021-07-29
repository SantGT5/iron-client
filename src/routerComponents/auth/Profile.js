import { useState, useEffect } from "react";
import TextProfile from "../../components/TextProfile";
import api from "../../apis/api";


function Profile() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    document: "",
    address: {
      street: "",
      neighbourhood: "",
      city: "",
      district: "",
      postalCode: "",
      number: "",
    },
    birthDate: "",
    phoneNumber: "",
    role: "",
  });

  useEffect(() => {
    async function FetchProfile() {
      try {
        const response = await api.get("/profile");
        console.log("eu sou Response no Profile ---> ", response);
        setState({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    FetchProfile();
  }, []);

  return (
    <div>
      <TextProfile label="Nome" name={state.name} />
      <TextProfile label="Email" name={state.email} />
      <TextProfile label="Data de Nascimento" name={state.birthDate} />
      <TextProfile label="CPF" name={state.document} />
      <TextProfile label="Telefone" name={state.phoneNumber} />

      <h2 className="mb-4 mt-4">Endereço</h2>

      <TextProfile label="Rua" name={state.address.street} />
      <TextProfile label="Numero" name={state.address.number} />
      <TextProfile label="Cidade" name={state.address.city} />
      <TextProfile label="Estado" name={state.address.district} />
      <TextProfile label="Complemento" name={state.address.neighbourhood} />
      <TextProfile label="CEP" name={state.address.postalCode} />
      
    </div>
  );
}

export default Profile;