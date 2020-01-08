import {EventsStoreState} from './events';
import {FanStoreState} from './fan';
import {GenresStoreState} from './genres';
import {ImagesStoreState} from './images';
import {SignUpStoreState} from './sign-up';
import {TicketsStoreState} from './tickets';
import {UserStoreState} from './user';
import {RouterReducerState} from '@ngrx/router-store';
import {ArtistStoreState} from './artist';
import {VenueStoreState} from './venue';
import {OrganizerStoreState} from './organizer';
import {SignInStoreState} from './sign-in';
import {CommentsStoreState} from './comments';
import {GoingFansStoreState} from './going-fans';
import {SupportStoreState} from './support';
import {SearchStoreState} from './search';
import {SidebarStoreState} from './sidebar';
import {PaymentStoreState} from './payment';


export interface State {
  user: UserStoreState.State;

  fan: FanStoreState.State;
  artist: ArtistStoreState.State;
  venue: VenueStoreState.State;
  organizer: OrganizerStoreState.State;

  signIn: SignInStoreState.State;
  signUp: SignUpStoreState.State;

  events: EventsStoreState.State;
  genres: GenresStoreState.State;
  images: ImagesStoreState.State;
  tickets: TicketsStoreState.State;
  comments: CommentsStoreState.State;
  goingFans: GoingFansStoreState.State;
  support: SupportStoreState.State;
  search: SearchStoreState.State;

  sidebar: SidebarStoreState.State;

  payment: PaymentStoreState.State;

  router: RouterReducerState;
}
