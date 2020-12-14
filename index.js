import { registerRootComponent } from 'expo';

import app from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => app);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(app);