import React from 'react';

import { 
   Container,
   Retweeted,
   RocketseatIcon, 
   Body, 
   Avatar, 
   Content, 
   Header, 
   Dot,
   Description, 
   ImageContent,
   Icons,
   Status,
   CommetIcon,
   LikeIcon,
   RetweetIcon,
  } 
   from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Voce Retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>31 de mai</time>
          </Header>

          <Description>
            Foquete não tem ré 🚀
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommetIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;