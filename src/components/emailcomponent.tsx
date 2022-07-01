import { TextInput, Box, Title, Space, ThemeIcon} from '@mantine/core';
import { useForm as UseForm }  from '@mantine/form' ; 
function emailcomponent() {
  const form =UseForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <>
    
    <Box  sx={{ maxWidth: 300 ,textAlign:"left"}}  p={"lg"}>
         <Title order={5} >Change Email</Title>
    <Space h="md" />
      <form onSubmit={form.onSubmit((values) => console.log(values))} >
        <TextInput
          required
          label="Existing Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}

          
        />
        <Space h="md" />
        <TextInput
          required
          label="Confirm Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        
         
        />
       <Space h="md" />
      </form>
    </Box>
    </>
  );
}
export default emailcomponent;