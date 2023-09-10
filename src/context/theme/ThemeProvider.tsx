export {};

// import * as React from 'react';
// import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
// import { useSelector } from 'react-redux';
// import { useThemeSlice } from './slice';
// import { selectTheme } from './slice/selectors';

// export function ThemeProvider(props: { children: React.ReactChild }) {
//   useThemeSlice();

//   const theme = useSelector(selectTheme);
//   const { children } = props;
//   return (
//     <OriginalThemeProvider theme={theme}>
//       {React.Children.only(children)}
//     </OriginalThemeProvider>
//   );
// }

// export default ThemeProvider;
