import React, {ReactNode} from 'react';
import {View} from 'react-native';

import icons from './src/assets/icons';
import {Button} from './src/components';

const App: () => ReactNode = () => {
  return (
    <View style={{padding: 16, flex: 1, justifyContent: 'space-evenly'}}>
      <Button type="primary" onPress={() => console.warn('clicado')}>
        Primary
      </Button>
      <Button disabled type="primary" onPress={() => console.warn('clicado')}>
        Primary disabled
      </Button>
      <Button type="secondary" onPress={() => console.warn('clicado')}>
        Secondary
      </Button>
      <Button disabled type="secondary" onPress={() => console.warn('clicado')}>
        Secondary disabled
      </Button>
      <Button
        type="primary"
        onPress={() => console.warn('clicado')}
        style={{width: 200, alignSelf: 'center'}}>
        Custom width
      </Button>
      <Button
        type="primary"
        onPress={() => console.warn('clicado')}
        icon={icons.plus}>
        Primary with icon
      </Button>
      <Button
        type="secondary"
        onPress={() => console.warn('clicado')}
        icon={icons.plus}>
        Secondary with icon
      </Button>
      <Button
        type="primary"
        disabled
        onPress={() => console.warn('clicado')}
        icon={icons.plus}>
        Disabled with icon
      </Button>
    </View>
  );
};

export default App;
