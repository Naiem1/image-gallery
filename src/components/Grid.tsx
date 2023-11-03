import Box from '@mui/material/Box';

interface Props {
  children: React.ReactNode;
  columns: number;
}

const Grid: React.FC<Props> = ({ children, columns }) => {
  return (
    <Box
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 10,
        padding: 10,
      }}
    >
      {children}
    </Box>
  );
};

export default Grid;
