import PropTypes from 'prop-types';
import { StyledBtn } from './Buttons.styled';
import Sections from 'components/Sections/Sections';

const Buttons = ({clickFeedback}) => {
  return (
    <Sections title = "Please leave feedback">
        <StyledBtn type="button" name="good" onClick={clickFeedback}>Good</StyledBtn>
        <StyledBtn type="button" name="neutral" onClick={clickFeedback}>Neutral</StyledBtn>
        <StyledBtn type="button" name="bad" onClick={clickFeedback}>Bad</StyledBtn>  
    </Sections>
  )
}

Buttons.propTypes = {
  clickFeedback: PropTypes.func.isRequired,

}

export default Buttons