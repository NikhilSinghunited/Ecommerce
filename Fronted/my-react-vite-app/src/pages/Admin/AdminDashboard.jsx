import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu'; // Import the AdminMenu component
import { useAuth } from '../../context/auth';

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-bold mb-8'>Admin Dashboard</h1>
        <AdminMenu /> {/* Render the AdminMenu component */}
      </div>
      <div className='container mx-auto'>
        <h1 className='userdetails'></h1>

        <h1>{auth?.user?.name}</h1>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
