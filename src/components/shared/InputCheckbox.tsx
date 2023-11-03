import InputCheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const Checkbox = () => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<InputCheckbox defaultChecked />}
        label={`${3} File Selected`}
      />
    </FormGroup>
  );
};

export default Checkbox;
