import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import StyledFlowContainer from './StyledFlowContainer';
import Button from '../../buttons/Button';
import theme from '../../../styles/_theme';

const Summary = ({
  buttons,
  useValueLabel,
  steps,
  handleSave,
}) => {
  const [useOutput, setOutput] = useState([]);

  const finishButton = <Button size="large" color="primary" variant="contained" onClick={handleSave}>Finish</Button>;

  const createOutput = () => {
    const out = [];
    Object.keys(useValueLabel).forEach((key) => {
      if (!out[useValueLabel[key].step]) {
        out[useValueLabel[key].step] = [];
      }
      out[useValueLabel[key].step][useValueLabel[key].order] = [
        useValueLabel[key].label,
        useValueLabel[key].value];
    });
    setOutput(out);
  };

  useEffect(() => {
    createOutput();
  }, []);

  return (
    <StyledFlowContainer>

      <div className="title">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          noWrap
        >
          Summary
        </Typography>
      </div>

      <div className="summaryContainer">
        {
          useOutput.map((step, i) => {
            const label = <div key={`header-${i}`} className="header"><Typography variant="h5" component="h2" noWrap>{steps[i].title}</Typography></div>;
            const items = step.map(el => el.map((d, ind) => <div key={`data-${i}${ind}`} className={(ind === 0) ? 'label' : 'value'}><Typography style={(ind === 0) ? { color: theme.detailColor, fontWeight: '500' } : {}}>{d}</Typography></div>));
            return [label, ...items];
          })
        }
      </div>

      <div className="buttons">
        <div>
          {buttons.prev}
        </div>
        <div className="next">
          {finishButton}
        </div>
      </div>

    </StyledFlowContainer>
  );
};

Summary.propTypes = {
  buttons: PropTypes.objectOf(PropTypes.node).isRequired,
  useValueLabel: PropTypes.arrayOf(PropTypes.object).isRequired,
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default Summary;
