import { decl } from 'bem-react-core';

export default decl({
  block: 'App',
  elem: 'Control',
  mods({ type }) {
    return { type };
  }
});
