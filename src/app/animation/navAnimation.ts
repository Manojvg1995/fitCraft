import { createAnimation } from '@ionic/core';

export const navAnimation = (baseEl: any, opts?: any): any => {
  const enteringAnimation = createAnimation()
    .addElement(opts.enteringEl)
    .duration(500)
    .fromTo('opacity', '0', '1')
    .fromTo('transform', 'translateX(100%)', 'translateX(0)');

  const leavingAnimation = createAnimation()
    .addElement(opts.leavingEl)
    .duration(500)
    .fromTo('opacity', '1', '0')
    .fromTo('transform', 'translateX(0)', 'translateX(-100%)');

  return createAnimation().addAnimation([enteringAnimation, leavingAnimation]);
};
