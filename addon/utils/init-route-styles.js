import podNames from 'ember-component-css/pod-names';

export default function initRouteStyles(owner, routeNames) {
  const classes = [];
  for (let i = 0; i < routeNames.length; i++) {
    const routeName = routeNames[i];
    const styleNamespace = podNames[routeName.replace(/\./g, '/')];

    if (styleNamespace) {
      classes.push(styleNamespace);

      const controller = owner.lookup(`controller:${routeName}`);
      if (controller) {
        controller.set('styleNamespace', styleNamespace);
      }
    }
  }

  owner
    .lookup('controller:application')
    .set('routeStyleNamespaceClassSet', classes.join(' '));
}
