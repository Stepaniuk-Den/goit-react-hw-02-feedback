import PropTypes from 'prop-types';
import { StyledBtn } from './Buttons.styled';
import Sections from 'components/Sections/Sections';

const Buttons = ({onGoodClick, onNeutralClick, onBadClick}) => {
  return (
    <Sections title = "Please leave feedback">
        <StyledBtn type="button" onClick={onGoodClick}>Good</StyledBtn>
        <StyledBtn type="button" onClick={onNeutralClick}>Neutral</StyledBtn>
        <StyledBtn type="button" onClick={onBadClick}>Bad</StyledBtn>  
    </Sections>
  )
}

Buttons.propTypes = {
  onGoodClick: PropTypes.func.isRequired,
  onNeutralClick: PropTypes.func.isRequired,
  onBadClick: PropTypes.func.isRequired
}

export default Buttons