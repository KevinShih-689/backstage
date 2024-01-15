import {
  createUnifiedTheme,
  PageTheme,
  palettes,
  UnifiedThemeOptions,
  UnifiedTheme
} from '@backstage/theme';

const BLUE = '#e609ff';

const singlePageTheme: PageTheme = {
  colors: [BLUE, '#4800ff'],
  shape: '',
  backgroundImage: `linear-gradient(24deg, ${BLUE}, #00ca9d)`,
  fontColor: '#fff',
};

function createCustomBaseTheme(
  palette: UnifiedThemeOptions['palette'],
): UnifiedTheme {
  return createUnifiedTheme({
    palette,
    defaultPageTheme: 'home',
    fontFamily: 'Rubik, Helvetica, Arial',
    /** Header Style */
    pageTheme: {
      home: singlePageTheme,
      documentation: singlePageTheme,
      tool: singlePageTheme,
      service: singlePageTheme,
      website: singlePageTheme,
      library: singlePageTheme,
      other: singlePageTheme,
      app: singlePageTheme,
      apis: singlePageTheme,
    },
    components: {
      MuiGrid: {
        defaultProps: {
          spacing: 3,
        },
      }
    },
  });
}

const { dark, light } = palettes;

/** The Object of createCustomBaseTheme, you can follow https://backstage.io/docs/getting-started/app-custom-theme#example-of-a-custom-theme */

/** Custom Light */
export const customLightTheme = createCustomBaseTheme({
  ...light,
  navigation: {
    ...light.navigation,
    indicator: BLUE,
  },
  tabbar: {
    ...light.tabbar,
    indicator: BLUE,
  },
  primary: {
    ...light.primary,
    main: '#4291e9',
  },
});

/** Custom Dark */
export const customDarkTheme = createCustomBaseTheme({
  ...dark,
  navigation: {
    ...dark.navigation,
    indicator: BLUE,
  },
  tabbar: {
    ...dark.tabbar,
    indicator: BLUE,
  },
  primary: {
    ...dark.primary,
    main: '#388be8',
  },
});
