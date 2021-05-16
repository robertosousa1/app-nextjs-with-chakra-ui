import { Flex } from '@chakra-ui/react'

import { Profile } from './Profile'
import { NotificationsNav } from './NotificationsNav';
import { SourceBox } from './SourceBox';
import { Logo } from './Logo';

export function Header () {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <SourceBox />

      <Flex align="center" ml="auto">
        <NotificationsNav />

        <Profile />
      </Flex>
    </Flex>
  );
}