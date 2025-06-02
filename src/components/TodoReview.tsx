import React from 'react';
import { Button, Typography, Box } from '@mui/material';

interface TodoStatsProps {
  pendingCount: number;
  clearCompleted: () => void;
  hasCompleted: boolean;
}

export const TodoReview: React.FC<TodoStatsProps> = ({
  pendingCount,
  clearCompleted,
  hasCompleted,
}) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
      <Typography>
        Осталось задач: <strong>{pendingCount}</strong>
      </Typography>
      {hasCompleted && (
        <Button variant="outlined" onClick={clearCompleted}>
          Очистить выполненные
        </Button>
      )}
    </Box>
  );
};