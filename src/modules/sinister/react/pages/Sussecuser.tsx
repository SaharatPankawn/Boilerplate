'use client';
import { Layout } from '@/modules/app/react/Layout';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const Sussecuser = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/formuser');
  };

  return (
    <Layout>
      <div>
        <h1>Sussec</h1>
        <p>This is the Testbypluem page content.</p>
        <Button variant="contained" color="primary" onClick={handleBack}>
          Back
        </Button>
      </div>
    </Layout>
  );
};

export default Sussecuser;
