import { Text, Button ,Title, Switch, Group, Box, Space} from '@mantine/core';

function disablecomponent() {
  return (

    <Box   p="xl" >
      <Group > 
        <Title order={3} >Disable Profile</Title>
        <Switch  color={'dark'}/>
      </Group>
      <Space h="md" />
      <Text align={"left"} pb="sm">
        info info info info 
      </Text>
      <Space h="md" />
      <Button color='red' radius="md" >Delete Account</Button>

    </Box>

  );
}
export default disablecomponent;