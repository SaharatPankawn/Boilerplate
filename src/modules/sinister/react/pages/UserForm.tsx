import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { TextField, Button, Box, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Layout } from '@/modules/app/react/Layout';

export const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullNamelastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    company: ''
  });

  const [errors, setErrors] = useState({
    fullNamelastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    company: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: any = {};

    if (!/^[a-zA-Zก-๙\s]{1,32}$/.test(formData.fullNamelastName)) {
      valid = false;
      newErrors.fullNamelastName = 'ชื่อ-นามสกุลต้องเป็นตัวอักษรและไม่เกิน 32 ตัวอักษร';
    }

    if (!/^[^\u0E00-\u0E7F]+@[^\u0E00-\u0E7F]+\.[^\u0E00-\u0E7F]+$/.test(formData.email)) {
      valid = false;
      newErrors.email = 'กรุณากรอกอีเมลตามรูปแบบ example@example.com';
    }

    if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      valid = false;
      newErrors.phoneNumber = 'กรุณากรอกเบอร์โทรศัพท์ 10 หลัก';
    }

    if (!/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/.test(formData.password)) {
      valid = false;
      newErrors.password = 'รหัสผ่านต้องมีความยาว 8-32 ตัวอักษร ประกอบด้วยตัวอักษร, ตัวเลข และอักขระพิเศษ';
    }

    if (!formData.company || !/^[a-zA-Zก-๙0-9\s]+$/.test(formData.company)) {
      valid = false;
      newErrors.company = 'กรุณากรอกชื่อบริษัทให้ถูกต้อง';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      router.push('/sussecuser');
    }
  };

  return (
    <Layout>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto' }}>
        <TextField
          label="ชื่อ-นามสกุล"
          name="fullNamelastName"
          value={formData.fullNamelastName}
          onChange={handleChange}
          error={!!errors.fullNamelastName}
          helperText={errors.fullNamelastName}
          fullWidth
          margin="normal"
        />
        <TextField
          label="อีเมล"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          margin="normal"
        />
        <TextField
          label="เบอร์โทรศัพท์"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
          fullWidth
          margin="normal"
        />
        <TextField
          label="รหัสผ่าน"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          fullWidth
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="บริษัท"
          name="company"
          value={formData.company}
          onChange={handleChange}
          error={!!errors.company}
          helperText={errors.company}
          fullWidth
          margin="normal"
        />
        <TextField label="หมายเหตุ" name="note" onChange={handleChange} fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Box>
    </Layout>
  );
};

export default UserForm;
