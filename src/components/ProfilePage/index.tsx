import React from 'react';

// import { Container } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton> 
        <h1>Luis Felipe</h1>
        <h2>@felipegarcao_</h2>

        <p>
          Developer at <a href="https://www.unimed.coop.br/web/presidenteprudente">Unimed P. Prudente</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 16 de maio 2003
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>94</strong>
          </span>
          <span>
            <strong>527 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}

export default ProfilePage;