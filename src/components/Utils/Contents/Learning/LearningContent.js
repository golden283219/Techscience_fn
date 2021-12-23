import React from 'react';
import Card from '../../Card/Card'
import {
  MDBContainer,
  MDBCard,
  MDBRow
} from 'mdbreact';

const cards = [
  {
    name: '0,1,2,3,4,5,6,7,8,9',
    link: '/learning/numbers'
  },
  {
    name: 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z',
    link: '/learning/alphabet'
  },
  {
    name: 'Coloring geometric figures',
    link: '/learning/coloring_geometric_figures'
  },
  {
    name: 'Learn to Read',
    link: '/learning/learn_to_read'
  },
  {
    name: 'Filling Missing Letters',
    link: '/learning/filling_missing_letters'
  },
  {
    name: 'Counting Numbers',
    link: '/learning/counting_numbers'
  },
  {
    name: 'ABC Games',
    link: '/learning/abc_games'
  },
  {
    name: 'Number Games',
    link: '/learning/number_games'
  },
  {
    name: 'Coloring animals and planets',
    link: '/learning/coloring_animals_and_planets'
  },
  {
    name: 'Arithmetic',
    link: '/learning/arithmetic'
  },
  {
    name: 'WritingLetters',
    link: '/learning/writingletters'
  },
]

export default () => {
  return (
      <MDBCard>
          <MDBContainer className="mt-3 mb-3">
              <MDBRow>
                  {cards.map((card, i) => <Card { ...card } key={ i } />)}
              </MDBRow>
          </MDBContainer>
      </MDBCard>
  )
}