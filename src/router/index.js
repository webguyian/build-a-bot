import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotBases from '../parts/RobotBases.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/build',
      name: 'Build',
      component: RobotBuilder
    },
    {
      path: '/parts/browse',
      name: 'Browse',
      component: BrowseParts,
      children: [
        {
          name: 'BrowseArms',
          path: 'arms',
          component: RobotArms
        },
        {
          name: 'BrowseBases',
          path: 'bases',
          component: RobotBases
        },
        {
          name: 'BrowseHeads',
          path: 'heads',
          component: RobotHeads
        },
        {
          name: 'BrowseTorsos',
          path: 'torsos',
          component: RobotTorsos
        }
      ]
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true
    }
  ]
});
