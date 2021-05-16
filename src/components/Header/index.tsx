import { Flex, useBreakpointValue } from '@chakra-ui/react'

import { Profile } from './Profile'
import { NotificationsNav } from './NotificationsNav';
import { SourceBox } from './SourceBox';
import { Logo } from './Logo';

export function Header () {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

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

      {isWideVersion && <SourceBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}