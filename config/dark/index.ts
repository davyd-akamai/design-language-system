import * as Tokens from '../../dist/dark/tokens.es6.js';
import * as TokensTheme from '../../dist/dark/theme.es6.js';
import type {
  ColorTypes,
  ElevationTypes,
  FontTypes,
  ContentTypes,
  BorderTypes,
  BackgroundTypes,
  InteractionTypes,
  ActionTypes,
  ButtonTypes,
} from '../../dist/dark/theme.js';

const Colors: ColorTypes = TokensTheme.default.Color;
const Elevation: ElevationTypes = TokensTheme.default.Elevation;
const Fonts: FontTypes = TokensTheme.default.Font;
const Content: ContentTypes = TokensTheme.default.Content;
const Border: BorderTypes = TokensTheme.default.Border;
const Background: BackgroundTypes = TokensTheme.default.Background;
const Interaction: InteractionTypes = TokensTheme.default.Interaction;
const Actions: ActionTypes = TokensTheme.default.Action;
const Button: ButtonTypes = TokensTheme.default.Button;

export { Tokens, Colors, Elevation, Fonts, Content, Border, Background, Interaction, Actions, Button };
export type { ColorTypes, ElevationTypes, FontTypes, ContentTypes, BorderTypes, BackgroundTypes, InteractionTypes, ActionTypes, ButtonTypes };
