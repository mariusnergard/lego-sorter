import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Summary from './Summary';
import Button from '../../buttons/Button';
import renderSelect from './inputs/select';
import renderSwitch from './inputs/switch';
import renderTextField from './inputs/textField';
import renderDateField from './inputs/dateField';
import StyledFlowContainer from './StyledFlowContainer';
import exampleConf from './exampleConf';

// Used to collect data in a flow style

// Todo - date field!

const DataCollector = ({
  conf = false,
  handleSave,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);
  const [isLoading, toggleLoading] = useState(true);
  const [useValues, setValues] = useState({});
  const [useError, setError] = useState(false);
  const [useComplete, toggleComplete] = useState(false);
  const [useValueLabel, setValueLabel] = useState({});

  const handleFinish = () => {
    handleSave(useValues);
  };

  const checkRequired = async () => new Promise((resolve) => {
    const { elements } = steps[currentStep];
    let valid = true;
    const errors = useError || {};

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < elements.length; index++) {
      const { displayIf, required, id, regexp } = elements[index];
      // eslint-disable-next-line no-continue
      const pattern = (regexp) ? new RegExp(regexp) : false;
      if (displayIf && useValues[displayIf[0]] !== displayIf[1] && !pattern) continue;
      if (
        required
        && (!useValues[id]
          || useValues[id] === ''
          || (Array.isArray(useValues[id])
            && useValues[id].length === 0))) {
        errors[id] = 'Field is required!';
        valid = false;
      }
      if (pattern && !pattern.test(useValues[id])) {
        errors[id] = 'Field not valid!';
        valid = false;
      }
    }

    if (valid) {
      setError(false);
    } else {
      setError(errors);
    }
    resolve(valid);
  });

  const findNextStep = direction => new Promise((resolve) => {
    let step = (direction === 'up') ? currentStep + 1 : currentStep - 1;
    if (step === steps.length) {
      toggleComplete(true);
      resolve(step);
    } else {
      toggleComplete(false);
    }
    const retryFunc = () => {
      step = (direction === 'up') ? step + 1 : step - 1;
      if (step !== steps.length) {
        // eslint-disable-next-line no-use-before-define
        findStep();
      } else {
        toggleComplete(true);
        resolve(step);
      }
    };
    const findStep = () => {
      if (
        steps[step].displayIf
        && (useValues[steps[step].displayIf[0]] !== steps[step].displayIf[1]
          && !useValues[steps[step].displayIf[0]].includes(steps[step].displayIf[1]))) {
        retryFunc();
      } else {
        resolve(step);
      }
    };
    findStep();
  });

  const loopResults = async (results) => {
    const toState = {};
    const toLabelState = {};
    const keys = Object.keys(results);
    for (let i = 0, len = keys.length; i < len; i++) {
      toState[keys[i]] = results[keys[i]].value;
      toLabelState[keys[i]] = {
        label: results[keys[i]].label,
        value: results[keys[i]].labelValue,
        step: steps[currentStep].callbackStep || currentStep,
        order: i,
      };
    }
    return [toState, toLabelState];
  };

  const nextStep = async () => {
    setError(false);
    const valid = await checkRequired();
    if (valid) {
      // Is there a callback to be called?
      if (steps[currentStep].callback) {
        const prop = (steps[currentStep].callbackProp) ? useValues[steps[currentStep].callbackProp] : null;
        const results = await steps[currentStep].callback(prop);
        if (results) {
          const [toState, toLabelState] = await loopResults(results);
          setValues(prevState => ({ ...prevState, ...toState }));
          setValueLabel(prev => ({ ...prev, ...toLabelState }));
        }
      }
      const next = await findNextStep('up');
      setCurrentStep(next || 0);
    }
  };

  const prevStep = async () => {
    const next = await findNextStep('down');
    setCurrentStep(next || 0);
  };

  const backButton = <Button size="large" color="secondary" variant="contained" onClick={prevStep}>Back</Button>;
  const nextButton = <Button size="large" color="primary" variant="contained" onClick={nextStep}>Next</Button>;

  const buttons = {
    prev: (currentStep > 0) ? backButton : false,
    next: (currentStep < steps.length - 1) ? nextButton : nextButton,
  };

  useEffect(() => {
    if (!conf || !Array.isArray(conf)) {
      setSteps(exampleConf);
    } else {
      setSteps(conf);
    }
    toggleLoading(false);
  }, []);

  if (isLoading) {
    return (<p>Loading!</p>);
  }


  // Show summary if reached end of config
  if (useComplete || currentStep === steps.length) {
    return (
      <Summary
        buttons={buttons}
        useValueLabel={useValueLabel}
        steps={steps}
        handleSave={handleFinish}
      />
    );
  }

  // Check if conf is an array
  if (steps.length === 0) {
    return (
      <>
        <p>Error!</p>
        <p>The configuration passed to the DataCollector does not contain any steps!</p>
      </>
    );
  }

  return (
    <StyledFlowContainer>

      <div className="title">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          noWrap
        >
          {steps[currentStep].title || ''}
        </Typography>
      </div>

      <div className="container">
        {
            steps[currentStep].elements.map((step, i) => {
              const propsToInputs = {
                step,
                useValues,
                setValues,
                useError,
                setValueLabel,
                currentStep,
                i,
              };
              switch (step.type) {
                case 'list':
                  return renderSelect(propsToInputs);
                case 'bool':
                  return renderSwitch(propsToInputs);
                case 'text':
                  return renderTextField(propsToInputs);
                case 'date':
                  return renderDateField(propsToInputs);
                default:
                  return 'type not found!';
              }
            })
          }
      </div>

      <div className="buttons">
        <div>
          {buttons.prev}
        </div>
        <div className="next">
          {buttons.next}
        </div>
      </div>

    </StyledFlowContainer>
  );
};

DataCollector.propTypes = {
  conf: PropTypes.objectOf(PropTypes.array).isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default DataCollector;
