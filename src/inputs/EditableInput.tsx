// EditableInput.tsx
import React from 'react';
import Tooltip from '@mui/material/Tooltip'; // Import Tooltip correctly

interface EditableInputProps {
  initialValue: string;
  onConfirm: () => void;
}

const EditableInput: React.FC<EditableInputProps> = ({ initialValue, onConfirm }) => {
  return (
    <Tooltip title="Editar título">
      <span> {/* Use a span to ensure there's a single child inside Tooltip */}
        <button
          onClick={onConfirm}
          style={{
            background: '#295F98',
            border: 'none',
            color: '#D2E0FB',
            textDecoration: 'none',
            cursor: 'pointer',
            padding: '5px',
            marginBottom: '10px',
            textAlign: 'left',
          }}
        >
          {initialValue}
        </button>
      </span>
    </Tooltip>
  );
};

export default EditableInput;