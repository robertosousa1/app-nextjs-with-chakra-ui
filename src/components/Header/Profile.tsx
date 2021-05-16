import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile ({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Roberto Alves</Text>
          <Text color="gray.300" fontSize="small">
            robertosousa1@uol.com.br
        </Text>
        </Box>
      )}

      <Avatar size="md" name="Roberto Alves" src="https://github.com/robertosousa1.png" />
    </Flex>
  );
}