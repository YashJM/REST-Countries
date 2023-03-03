import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export default extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('secondaryGray.300', 'navy.900')(props),
      },
    }),
  },
  fonts: {
    body: 'Nunito Sans, sans-serif',
  },
});
