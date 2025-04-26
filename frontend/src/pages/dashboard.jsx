import React, { useEffect, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" mb={2}>Hello, {user.firstName} 👋</Typography>
        <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
        {/* Add more user details here */}
      </Paper>
    </Box>
  );
}

export default Dashboard;
