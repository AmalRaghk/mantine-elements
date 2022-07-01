import { useForm as UseForm} from '@mantine/form';
import { PasswordInput,Box, Title, Space } from '@mantine/core';

function passwordcomponent() {
  const form = UseForm({
    initialValues: {
      password: '',
      confirmPassword: '',
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  return (

    <Box sx={{ maxWidth: 300 ,textAlign:"left"}} p='xl'>
     <Title order={5}> Change Password</Title>
     <Space h="md" />
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
          
        />
        <Space h="md" />
        <PasswordInput
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps('confirmPassword')}
       
          
        />
        <Space h="md" />
        
      </form>
    </Box>
  );
}
export default passwordcomponent;