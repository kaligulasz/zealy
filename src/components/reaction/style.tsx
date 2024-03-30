import styled from 'styled-components';
import {ReactionType} from '../../App';

export const ReactionWrapper = styled.div<{ $position: ReactionType['position']}>`
  position: absolute;
  left: ${props => (props.$position.x)}px;
  top: ${props => (props.$position.y)}px;
  background: #D3D3D3;
  width: 200px;
  min-height: 200px;
  border-radius: 5px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  background: none;
  cursor: pointer;
`

export const ReactionContent = styled.div`
  position: relative;
  padding: 10px;
`