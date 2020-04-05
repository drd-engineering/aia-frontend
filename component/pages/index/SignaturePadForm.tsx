import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Signature from '../../items/Signature';

export default function SignaturePadForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Signature
      </Typography>
      <Typography>
        please sign on the pad below
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Signature/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}