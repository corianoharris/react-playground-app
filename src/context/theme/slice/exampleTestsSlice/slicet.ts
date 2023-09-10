import { DefaultTheme } from 'styled-components';
import * as slice from '..';
import { ThemeState, ThemeKeyType } from '../types';
import { themes } from '../../themes';
import { RootState } from '../../../../types/RootState';
import { selectTheme, selectThemeKey } from '../selectors';

describe('theme slice', () => {
  let themeState: ThemeState;

  beforeEach(() => {
    themeState = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(themeState);
  });

  it('should changeTheme', () => {
    expect(
      slice.reducer(themeState, slice.themeActions.changeTheme('dark')),
    ).toEqual<ThemeState>({ selected: 'dark' });
  });

  describe('selectors', () => {
    it('selectTheme', () => {
      let state: RootState = {};
      expect(selectTheme(state)).toEqual<DefaultTheme>(themes.light);
      state = {
        theme: { selected: 'system' },
      };
      expect(selectTheme(state)).toEqual<DefaultTheme>(themes.light);

      state = {
        theme: { selected: 'dark' },
      };
      expect(selectTheme(state)).toEqual<DefaultTheme>(themes.dark);
    });

    it('selectThemeKey', () => {
      let state: RootState = {};
      expect(selectThemeKey(state)).toEqual<ThemeKeyType>(
        slice.initialState.selected,
      );

      state = {
        theme: { selected: 'system' },
      };
      expect(selectThemeKey(state)).toEqual<ThemeKeyType>(
        state.theme!.selected,
      );
    });
  });
});
